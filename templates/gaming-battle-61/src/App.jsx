import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const canvas = document.getElementById('topo-canvas');
        const ctx = canvas.getContext('2d');
        let mouseX = 0, mouseY = 0;
        let targetMouseX = 0, targetMouseY = 0;
        let time = 0;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = document.documentElement.scrollHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        // Track mouse with smooth interpolation
        document.addEventListener('mousemove', (e) => {
            targetMouseX = e.clientX;
            targetMouseY = e.clientY + window.scrollY;
        });

        document.addEventListener('scroll', () => {
            canvas.height = document.documentElement.scrollHeight;
        });

        // Simplex-like noise function
        function noise(x, y) {
            const sin1 = Math.sin(x * 0.8 + y * 0.6);
            const sin2 = Math.sin(x * 0.4 - y * 1.1 + 2.5);
            const sin3 = Math.sin(x * 1.3 + y * 0.3 - 1.7);
            const sin4 = Math.sin(x * 0.2 + y * 0.9 + 4.1);
            return (sin1 + sin2 * 0.7 + sin3 * 0.5 + sin4 * 0.3) / 2.5;
        }

        function draw() {
            time += 0.003;

            // Smooth mouse interpolation
            mouseX += (targetMouseX - mouseX) * 0.05;
            mouseY += (targetMouseY - mouseY) * 0.05;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const scrollY = window.scrollY;
            const viewTop = scrollY;
            const viewBottom = scrollY + window.innerHeight;

            // Draw topographic grid
            const gridSize = 40;
            const cols = Math.ceil(canvas.width / gridSize) + 2;
            const rowStart = Math.max(0, Math.floor(viewTop / gridSize) - 5);
            const rowEnd = Math.ceil(viewBottom / gridSize) + 5;

            // Draw grid lines
            ctx.lineWidth = 0.5;

            // Horizontal contour lines
            for (let row = rowStart; row <= rowEnd; row++) {
                ctx.beginPath();
                for (let col = 0; col <= cols; col++) {
                    const baseX = col * gridSize;
                    const baseY = row * gridSize;

                    // Distance from mouse
                    const dx = baseX - mouseX;
                    const dy = baseY - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const mouseInfluence = Math.max(0, 1 - dist / 300);

                    // Noise-based displacement
                    const n = noise(col * 0.15 + time * 0.5, row * 0.15 + time * 0.3);
                    const displacement = n * 12 + mouseInfluence * 20 * Math.sin(dist * 0.02 - time * 3);

                    const x = baseX;
                    const y = baseY + displacement;

                    if (col === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                // Color based on noise value (topographic elevation)
                const midNoise = noise(cols * 0.5 * 0.15 + time * 0.5, row * 0.15 + time * 0.3);
                const alpha = 0.04 + Math.abs(midNoise) * 0.06;

                // Amber-tinted color
                const r = 245;
                const g = 158;
                const b = 11;
                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                ctx.stroke();
            }

            // Vertical grid lines
            for (let col = 0; col <= cols; col++) {
                ctx.beginPath();
                for (let row = rowStart; row <= rowEnd; row++) {
                    const baseX = col * gridSize;
                    const baseY = row * gridSize;

                    const dx = baseX - mouseX;
                    const dy = baseY - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const mouseInfluence = Math.max(0, 1 - dist / 300);

                    const n = noise(col * 0.15 + time * 0.5, row * 0.15 + time * 0.3);
                    const displacement = n * 12 + mouseInfluence * 20 * Math.sin(dist * 0.02 - time * 3);

                    const x = baseX;
                    const y = baseY + displacement;

                    if (row === rowStart) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.strokeStyle = `rgba(245, 158, 11, 0.025)`;
                ctx.stroke();
            }

            // Draw contour lines (elevation rings)
            const contourLevels = 8;
            for (let level = 0; level < contourLevels; level++) {
                const threshold = -1 + (2 / contourLevels) * level;
                ctx.beginPath();

                for (let row = rowStart; row <= rowEnd; row++) {
                    for (let col = 0; col < cols; col++) {
                        const x1 = col * gridSize;
                        const y1 = row * gridSize;
                        const x2 = (col + 1) * gridSize;

                        const n1 = noise(col * 0.15 + time * 0.5, row * 0.15 + time * 0.3);
                        const n2 = noise((col + 1) * 0.15 + time * 0.5, row * 0.15 + time * 0.3);

                        if ((n1 < threshold && n2 >= threshold) || (n1 >= threshold && n2 < threshold)) {
                            const t = (threshold - n1) / (n2 - n1);
                            const cx = x1 + t * gridSize;

                            const dx = cx - mouseX;
                            const dy = y1 - mouseY;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            const glow = Math.max(0, 1 - dist / 200);

                            ctx.moveTo(cx - 2, y1);
                            ctx.lineTo(cx + 2, y1);
                        }
                    }
                }

                ctx.strokeStyle = `rgba(251, 191, 36, ${0.08 + level * 0.01})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            // Mouse glow
            const glowGrd = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 250);
            glowGrd.addColorStop(0, 'rgba(245, 158, 11, 0.06)');
            glowGrd.addColorStop(0.5, 'rgba(245, 158, 11, 0.02)');
            glowGrd.addColorStop(1, 'rgba(245, 158, 11, 0)');
            ctx.fillStyle = glowGrd;
            ctx.fillRect(mouseX - 250, mouseY - 250, 500, 500);

            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);

        // Resize canvas on scroll for full page coverage
        const resizeObserver = new ResizeObserver(() => {
            canvas.height = document.documentElement.scrollHeight;
        });
        resizeObserver.observe(document.body);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<canvas id="topo-canvas" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0', pointerEvents: 'none'}}></canvas>

<div style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '1', pointerEvents: 'none', background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'}}></div>

<nav className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 border-b border-amber-500/10" style={{backdropFilter: 'blur(20px)', background: 'rgba(0,0,0,0.7)'}}>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded flex items-center justify-center border border-amber-500/30" style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(217,119,6,0.1))'}}>
<span className="text-amber-400 font-bold text-xs tracking-tighter" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>C2</span>
</div>
<span className="text-sm font-medium tracking-tight text-amber-100/80" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>CS2rewards</span>
<span className="hidden sm:inline text-[10px] text-amber-500/40 ml-2 font-mono">v4.0.2</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs text-neutral-500 uppercase tracking-widest">
<a className="hover:text-amber-400 transition-colors" href="#">Rewards</a>
<a className="hover:text-amber-400 transition-colors" href="#">Tiers</a>
<a className="hover:text-amber-400 transition-colors" href="#">Missions</a>
<a className="hover:text-amber-400 transition-colors" href="#">FAQ</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-xs text-neutral-500 hover:text-amber-400 transition-colors uppercase tracking-wider" href="#">Sign in</a>
<button className="text-xs font-semibold px-4 py-2 rounded border border-amber-500/40 transition-all hover:bg-amber-500/10 hover:border-amber-400/60 uppercase tracking-wider" style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.1))', color: '#f59e0b'}}>
                Get Pass
            </button>
</div>
</nav>

<section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 md:pt-36 md:pb-44">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-amber-500/20 bg-amber-500/5 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-[10px] font-semibold text-amber-400 uppercase tracking-[0.2em]" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>SYS://Season_04 — Status: Live</span>
</div>
<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl leading-[1]">
<span className="text-neutral-400">A progression</span><br/>
<span className="text-neutral-400">system built for</span><br/>
<span className="inline-block mt-1" style={{background: 'linear-gradient(135deg, #f59e0b, #fbbf24, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>momentum</span>
</h1>
<p className="mt-6 text-neutral-500 text-xs md:text-sm max-w-xl leading-relaxed tracking-wide">
            100 tiers of exclusive skins, knives, gloves, and more. Complete missions, rank up, and dominate the battlefield.
        </p>

<div className="hidden md:flex items-center gap-2 mt-8 text-[10px] text-amber-500/30" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>
<span>──────</span>
<span className="text-amber-500/50">[ INIT_BATTLEPASS ]</span>
<span>──────</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
<button className="w-full sm:w-auto text-xs font-semibold px-8 py-3.5 rounded-lg transition-all hover:brightness-110 hover:scale-105 uppercase tracking-wider border border-amber-500/30" style={{background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.15))', color: '#fbbf24', boxShadow: '0 0 40px rgba(245, 158, 11, 0.15), inset 0 1px 0 rgba(251,191,36,0.1)'}}>
<span className="flex items-center gap-2 justify-center">
<iconify-icon icon="solar:play-bold" width="14"></iconify-icon>
                    Activate Pass — $14.99
                </span>
</button>
<button className="w-full sm:w-auto text-xs font-medium px-8 py-3.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/20 transition-all text-neutral-400 uppercase tracking-wider">
                View All Rewards
            </button>
</div>

<div className="grid grid-cols-3 gap-8 md:gap-16 mt-20 pt-10 border-t border-amber-500/10">
<div>
<div className="text-xl md:text-2xl font-bold tracking-tight text-amber-400" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>100+</div>
<div className="text-[10px] md:text-xs text-neutral-600 mt-1 uppercase tracking-wider">Unique Rewards</div>
</div>
<div>
<div className="text-xl md:text-2xl font-bold tracking-tight text-amber-400" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>050</div>
<div className="text-[10px] md:text-xs text-neutral-600 mt-1 uppercase tracking-wider">Weekly Missions</div>
</div>
<div>
<div className="text-xl md:text-2xl font-bold tracking-tight text-amber-400" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>2.1M</div>
<div className="text-[10px] md:text-xs text-neutral-600 mt-1 uppercase tracking-wider">Active Players</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 md:px-12 lg:px-20 py-20">
<div className="text-center mb-16">
<span className="text-[10px] font-semibold text-amber-500/60 uppercase tracking-[0.3em]" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>// featured_drops</span>
<h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3">Premium Tier Rewards</h2>
<p className="text-neutral-500 mt-4 max-w-lg mx-auto text-xs">Exclusive items only obtainable through the Battle Pass. Each tier unlocks something new.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative rounded-lg border border-amber-500/10 bg-black/40 overflow-hidden hover:border-amber-500/30 transition-all duration-500 cursor-pointer" style={{backdropFilter: 'blur(10px)'}}>
<div className="absolute top-3 left-3 text-[9px] text-amber-500/30" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-100</div>
<div className="aspect-square flex items-center justify-center p-8 relative overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'radial-gradient(circle at center, rgba(245,158,11,0.08), transparent 70%)'}}></div>
<div className="w-28 h-28 rounded-lg flex items-center justify-center border border-amber-500/20" style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(120,53,15,0.2))'}}>
<iconify-icon icon="solar:shield-star-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
<div className="px-5 pb-5">
<div className="flex items-center justify-between">
<span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 uppercase tracking-wider">Legendary</span>
<span className="text-[10px] text-neutral-600" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>Tier 100</span>
</div>
<h3 className="font-semibold mt-2 tracking-tight text-sm text-amber-100/90">Dragon Lore AK-47</h3>
<p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-wider">Covert Rifle Skin</p>
</div>
</div>

<div className="group relative rounded-lg border border-amber-500/10 bg-black/40 overflow-hidden hover:border-amber-500/30 transition-all duration-500 cursor-pointer" style={{backdropFilter: 'blur(10px)'}}>
<div className="absolute top-3 left-3 text-[9px] text-amber-500/30" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-075</div>
<div className="aspect-square flex items-center justify-center p-8 relative overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'radial-gradient(circle at center, rgba(245,158,11,0.08), transparent 70%)'}}></div>
<div className="w-28 h-28 rounded-lg flex items-center justify-center border border-amber-500/20" style={{background: 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(88,28,135,0.2))'}}>
<iconify-icon icon="solar:knife-linear" style={{color: '#c084fc', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
<div className="px-5 pb-5">
<div className="flex items-center justify-between">
<span className="text-[10px] font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20 uppercase tracking-wider">Epic</span>
<span className="text-[10px] text-neutral-600" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>Tier 075</span>
</div>
<h3 className="font-semibold mt-2 tracking-tight text-sm text-amber-100/90">Karambit Fade</h3>
<p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-wider">★ Covert Knife</p>
</div>
</div>

<div className="group relative rounded-lg border border-amber-500/10 bg-black/40 overflow-hidden hover:border-amber-500/30 transition-all duration-500 cursor-pointer" style={{backdropFilter: 'blur(10px)'}}>
<div className="absolute top-3 left-3 text-[9px] text-amber-500/30" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-050</div>
<div className="aspect-square flex items-center justify-center p-8 relative overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'radial-gradient(circle at center, rgba(245,158,11,0.08), transparent 70%)'}}></div>
<div className="w-28 h-28 rounded-lg flex items-center justify-center border border-amber-500/20" style={{background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(30,58,95,0.2))'}}>
<iconify-icon icon="solar:hand-stars-linear" style={{color: '#60a5fa', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
<div className="px-5 pb-5">
<div className="flex items-center justify-between">
<span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 uppercase tracking-wider">Rare</span>
<span className="text-[10px] text-neutral-600" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>Tier 050</span>
</div>
<h3 className="font-semibold mt-2 tracking-tight text-sm text-amber-100/90">Sport Gloves</h3>
<p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-wider">Extraordinary Gloves</p>
</div>
</div>

<div className="group relative rounded-lg border border-amber-500/10 bg-black/40 overflow-hidden hover:border-amber-500/30 transition-all duration-500 cursor-pointer" style={{backdropFilter: 'blur(10px)'}}>
<div className="absolute top-3 left-3 text-[9px] text-amber-500/30" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-025</div>
<div className="aspect-square flex items-center justify-center p-8 relative overflow-hidden">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{background: 'radial-gradient(circle at center, rgba(245,158,11,0.08), transparent 70%)'}}></div>
<div className="w-28 h-28 rounded-lg flex items-center justify-center border border-amber-500/20" style={{background: 'linear-gradient(135deg, rgba(244,63,94,0.15), rgba(136,19,55,0.2))'}}>
<iconify-icon icon="solar:bomb-minimalistic-linear" style={{color: '#fb7185', strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
<div className="px-5 pb-5">
<div className="flex items-center justify-between">
<span className="text-[10px] font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20 uppercase tracking-wider">Classified</span>
<span className="text-[10px] text-neutral-600" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>Tier 025</span>
</div>
<h3 className="font-semibold mt-2 tracking-tight text-sm text-amber-100/90">AWP Asiimov</h3>
<p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-wider">Covert Sniper Skin</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 md:px-12 lg:px-20 py-20">
<div className="rounded-xl border border-amber-500/10 overflow-hidden" style={{background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.02), rgba(0, 0, 0, 0.6))', backdropFilter: 'blur(10px)'}}>
<div className="p-8 md:p-12 lg:p-16">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
<div className="flex-1">
<span className="text-[10px] font-semibold text-amber-500/60 uppercase tracking-[0.3em]" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>// access_level</span>
<h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3">Two Paths.<br/>One Destination.</h2>
<p className="text-neutral-500 mt-4 max-w-md text-xs leading-relaxed">Every player earns free rewards. Upgrade to Premium for exclusive drops at every tier.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

<div className="flex-1 lg:w-72 rounded-lg border border-white/5 bg-black/40 p-6 hover:border-white/10 transition-all" style={{backdropFilter: 'blur(10px)'}}>
<div className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Free Pass</div>
<div className="text-2xl font-bold tracking-tight mt-2" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>$0.00</div>
<div className="text-[10px] text-neutral-600 mt-1 uppercase tracking-wider">Included with CS2</div>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-2.5 text-xs text-neutral-500">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#525252', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    30 Free tier items
                                </div>
<div className="flex items-center gap-2.5 text-xs text-neutral-500">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#525252', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Weekly missions
                                </div>
<div className="flex items-center gap-2.5 text-xs text-neutral-500">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#525252', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    XP boosts
                                </div>
<div className="flex items-center gap-2.5 text-xs text-neutral-700">
<iconify-icon icon="solar:close-circle-linear" style={{color: '#333', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Premium skins
                                </div>
<div className="flex items-center gap-2.5 text-xs text-neutral-700">
<iconify-icon icon="solar:close-circle-linear" style={{color: '#333', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Exclusive knife
                                </div>
</div>
<button className="w-full mt-6 text-[10px] font-semibold px-4 py-2.5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-neutral-500 uppercase tracking-wider">
                                Play Free
                            </button>
</div>

<div className="flex-1 lg:w-72 rounded-lg border border-amber-500/30 p-6 relative overflow-hidden" style={{background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.06), rgba(0, 0, 0, 0.4))', backdropFilter: 'blur(10px)'}}>
<div className="absolute top-3 right-3 text-[9px] font-bold text-black bg-amber-400 px-2 py-0.5 rounded uppercase tracking-wider" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>REC</div>
<div className="text-xs font-medium text-amber-300/80 uppercase tracking-wider">Premium Pass</div>
<div className="text-2xl font-bold tracking-tight mt-2 text-amber-400" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>$14.99</div>
<div className="text-[10px] text-neutral-600 mt-1 uppercase tracking-wider">One-time purchase</div>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-2.5 text-xs text-neutral-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    100 Premium items
                                </div>
<div className="flex items-center gap-2.5 text-xs text-neutral-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Exclusive missions
                                </div>
<div className="flex items-center gap-2.5 text-xs text-neutral-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    2x XP boosts
                                </div>
<div className="flex items-center gap-2.5 text-xs text-neutral-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Legendary skins
                                </div>
<div className="flex items-center gap-2.5 text-xs text-neutral-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Karambit Fade Knife
                                </div>
</div>
<button className="w-full mt-6 text-[10px] font-semibold px-4 py-2.5 rounded-lg transition-all hover:brightness-110 uppercase tracking-wider border border-amber-500/40" style={{background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25), rgba(217, 119, 6, 0.2))', color: '#fbbf24', boxShadow: '0 0 30px rgba(245, 158, 11, 0.1)'}}>
                                Upgrade Now
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 md:px-12 lg:px-20 py-20">
<div className="text-center mb-16">
<span className="text-[10px] font-semibold text-amber-500/60 uppercase tracking-[0.3em]" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>// protocol</span>
<h2 className="text-2xl md:text-4xl font-bold tracking-tight mt-3">Play. Earn. Unlock.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-amber-500/10 bg-black/40 p-8 hover:border-amber-500/20 transition-all group" style={{backdropFilter: 'blur(10px)'}}>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-all" style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))'}}>
<iconify-icon icon="solar:gamepad-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-[10px] text-amber-500/30 font-mono" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>STEP_01</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-amber-100/90">Play Matches</h3>
<p className="text-xs text-neutral-600 mt-2 leading-relaxed">Jump into competitive, casual, or any game mode. Every match earns you XP toward your Battle Pass.</p>
</div>
<div className="rounded-lg border border-amber-500/10 bg-black/40 p-8 hover:border-amber-500/20 transition-all group" style={{backdropFilter: 'blur(10px)'}}>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-all" style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))'}}>
<iconify-icon icon="solar:checklist-minimalistic-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-[10px] text-amber-500/30 font-mono" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>STEP_02</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-amber-100/90">Complete Missions</h3>
<p className="text-xs text-neutral-600 mt-2 leading-relaxed">Tackle weekly and daily missions for bonus XP. Stack them for maximum progression speed.</p>
</div>
<div className="rounded-lg border border-amber-500/10 bg-black/40 p-8 hover:border-amber-500/20 transition-all group" style={{backdropFilter: 'blur(10px)'}}>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-lg flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-all" style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))'}}>
<iconify-icon icon="solar:gift-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-[10px] text-amber-500/30 font-mono" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>STEP_03</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-amber-100/90">Claim Rewards</h3>
<p className="text-xs text-neutral-600 mt-2 leading-relaxed">Every tier unlocks a new reward. From sprays to skins to the ultimate Tier 100 legendary drop.</p>
</div>
</div>
</section>

<section className="relative z-10 px-6 md:px-12 lg:px-20 py-20">
<div className="rounded-xl border border-amber-500/10 p-8 md:p-12 bg-black/40" style={{backdropFilter: 'blur(10px)'}}>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
<div>
<div className="flex items-center gap-2">
<h3 className="text-xl md:text-2xl font-bold tracking-tight">Season Progress</h3>
<span className="text-[9px] text-amber-500/40 border border-amber-500/20 px-1.5 py-0.5 rounded" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>ACTIVE</span>
</div>
<p className="text-[10px] text-neutral-600 mt-1 uppercase tracking-wider" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>47d:12h:33m remaining</p>
</div>
<div className="flex items-center gap-3">
<span className="text-2xl font-bold tracking-tight text-amber-400" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>034</span>
<span className="text-xs text-neutral-600" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>/ 100</span>
</div>
</div>

<div className="relative h-2 rounded-full overflow-hidden" style={{background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245,158,11,0.1)'}}>
<div className="h-full rounded-full relative" style={{width: '34%', background: 'linear-gradient(90deg, #b45309, #f59e0b, #fbbf24)'}}>
<div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)', animation: 'shimmer 2s infinite'}}></div>
</div>
</div>

<div className="flex justify-between mt-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center border border-amber-500/20" style={{background: 'rgba(245,158,11,0.08)'}}>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="12"></iconify-icon>
</div>
<span className="text-[9px] text-neutral-600 mt-1" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-001</span>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center border border-blue-500/20" style={{background: 'rgba(59,130,246,0.08)'}}>
<iconify-icon icon="solar:shield-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<span className="text-[9px] text-neutral-600 mt-1" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-025</span>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center border border-purple-500/20" style={{background: 'rgba(168,85,247,0.08)'}}>
<iconify-icon icon="solar:crown-linear" style={{color: '#a855f7', strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<span className="text-[9px] text-neutral-600 mt-1" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-050</span>
</div>
<div className="hidden sm:flex flex-col items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center border border-rose-500/20" style={{background: 'rgba(244,63,94,0.08)'}}>
<iconify-icon icon="solar:fire-linear" style={{color: '#f43f5e', strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<span className="text-[9px] text-neutral-600 mt-1" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-075</span>
</div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-lg flex items-center justify-center border border-amber-500/30" style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.1))'}}>
<iconify-icon icon="solar:diamond-linear" style={{color: '#fbbf24', strokeWidth: '1.5'}} width="12"></iconify-icon>
</div>
<span className="text-[9px] text-amber-400 mt-1 font-medium" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>T-100</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 md:px-12 lg:px-20 py-20">
<div className="text-center py-20 relative">
<div className="absolute inset-0 rounded-xl" style={{background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.05), transparent 70%)'}}></div>
<div className="text-[10px] text-amber-500/30 mb-4 relative" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>
                ┌─── WARNING ───┐
            </div>
<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight relative">
                Don't Miss Out.<br/>
<span style={{background: 'linear-gradient(135deg, #f59e0b, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Season Ends Soon.</span>
</h2>
<p className="text-neutral-500 mt-6 max-w-lg mx-auto text-xs relative">
                Join millions of players already earning exclusive rewards. Activate your Battle Pass today.
            </p>
<button className="relative mt-10 text-xs font-semibold px-10 py-4 rounded-lg transition-all hover:brightness-110 hover:scale-105 uppercase tracking-wider border border-amber-500/30" style={{background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(217, 119, 6, 0.15))', color: '#fbbf24', boxShadow: '0 0 60px rgba(245, 158, 11, 0.15)'}}>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:rocket-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Get Battle Pass — $14.99
                </span>
</button>
<div className="text-[10px] text-amber-500/30 mt-6 relative" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>
                └────────────────┘
            </div>
</div>
</section>

<footer className="relative z-10 border-t border-amber-500/10 px-6 md:px-12 lg:px-20 py-10" style={{background: 'rgba(0,0,0,0.6)'}}>
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center border border-amber-500/20" style={{background: 'rgba(245,158,11,0.1)'}}>
<span className="text-amber-400 font-bold text-[9px] tracking-tighter" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>C2</span>
</div>
<span className="text-xs font-medium tracking-tight text-neutral-600" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>CS2rewards</span>
</div>
<div className="flex items-center gap-6 text-[10px] text-neutral-600 uppercase tracking-wider">
<a className="hover:text-amber-400 transition-colors" href="#">Terms</a>
<a className="hover:text-amber-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-amber-400 transition-colors" href="#">Support</a>
<a className="hover:text-amber-400 transition-colors" href="#">Discord</a>
</div>
<div className="text-[10px] text-neutral-700" style={{fontFamily: '\'Share Tech Mono\', monospace'}}>© 2024 CS2rewards. Not affiliated with Valve.</div>
</div>
</footer>
<style>
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
        }
        ::selection {
            background: rgba(245, 158, 11, 0.3);
            color: #fbbf24;
        }
    </style>



    </>
  );
}
