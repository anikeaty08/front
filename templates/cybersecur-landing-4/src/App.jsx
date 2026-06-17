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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {

            /* -----------------------------------------------------------
               ASTONISHING INTERACTIVE PARTICLE WAVE CANVAS
               Mimics high-end WebGL dot shader / ripple effect
            ----------------------------------------------------------- */
            const canvas = document.getElementById('interactive-matrix');
            const ctx = canvas.getContext('2d');
            let width, height;
            
            const SPACING = 30; // Grid spacing
            let cols, rows;
            let time = 0;
            let mouse = { x: -1000, y: -1000 };

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                cols = Math.floor(width / SPACING) + 2;
                rows = Math.floor(height / SPACING) + 2;
            }

            window.addEventListener('resize', resize);
            resize();

            window.addEventListener('mousemove', (e) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            });

            // Occasional sparks
            let sparks = [];
            function createSpark() {
                if(Math.random() > 0.95) {
                    sparks.push({
                        x: Math.random() > 0.5 ? 0 : width,
                        y: Math.random() * height,
                        vx: (Math.random() > 0.5 ? 1 : -1) * (5 + Math.random() * 5),
                        vy: 0,
                        life: 1
                    });
                }
            }

            function draw() {
                ctx.clearRect(0, 0, width, height);
                
                time += 0.02;
                createSpark();

                // Draw Matrix
                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        let x = i * SPACING;
                        let y = j * SPACING;

                        // Base Wave
                        let wave = Math.sin(time + i * 0.1 + j * 0.1);
                        
                        // Mouse interaction
                        let dx = x - mouse.x;
                        let dy = y - mouse.y;
                        let dist = Math.sqrt(dx * dx + dy * dy);
                        let interaction = Math.max(0, 150 - dist) / 150; // 0 to 1

                        // Shift position based on interaction
                        let offsetX = interaction * 15 * (dx / dist || 0);
                        let offsetY = interaction * 15 * (dy / dist || 0);
                        
                        let finalX = x + offsetX;
                        let finalY = y + offsetY + wave * 3;

                        // Calculate visual traits
                        let radius = 1 + interaction * 1.5;
                        let alpha = 0.1 + interaction * 0.5 + (wave + 1) * 0.05;
                        
                        // Occasionally flicker
                        if (Math.random() > 0.999) alpha = 1;

                        ctx.beginPath();
                        ctx.arc(finalX, finalY, radius, 0, Math.PI * 2);
                        
                        if (interaction > 0.5) {
                            ctx.fillStyle = `rgba(0, 82, 255, ${alpha})`;
                        } else {
                            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                        }
                        ctx.fill();
                    }
                }

                // Draw Sparks
                for (let s = sparks.length - 1; s >= 0; s--) {
                    let spark = sparks[s];
                    spark.x += spark.vx;
                    spark.life -= 0.01;

                    ctx.beginPath();
                    ctx.moveTo(spark.x, spark.y);
                    ctx.lineTo(spark.x - spark.vx * 2, spark.y);
                    ctx.strokeStyle = `rgba(0, 82, 255, ${spark.life})`;
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    if (spark.life <= 0 || spark.x < 0 || spark.x > width) {
                        sparks.splice(s, 1);
                    }
                }

                requestAnimationFrame(draw);
            }
            
            draw();

            /* -----------------------------------------------------------
               INTERSECTION OBSERVER & UI LOGIC
            ----------------------------------------------------------- */
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .stagger-group').forEach(el => observer.observe(el));

            document.querySelectorAll('.stagger-group').forEach(group => {
                group.querySelectorAll('.stagger-item').forEach((item, index) => {
                    item.style.transitionDelay = `${index * 150}ms`;
                });
            });

            // Nav Blurring
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('nav');
                if (window.scrollY > 50) {
                    nav.classList.add('border-[#151515]', 'bg-black/80');
                    nav.classList.remove('border-transparent', 'bg-black/40', 'py-4');
                    nav.classList.add('py-3');
                } else {
                    nav.classList.remove('border-[#151515]', 'bg-black/80', 'py-3');
                    nav.classList.add('border-transparent', 'bg-black/40', 'py-4');
                }
            });
        });
    
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
      

<canvas id="interactive-matrix"></canvas>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/40 backdrop-blur-xl border-b border-transparent" id="nav">
<div className="w-full flex justify-between items-center px-6 lg:px-12 py-4">
<a className="flex items-center gap-4 relative z-10 group" href="#">
<svg className="text-white group-hover:text-[#0052FF] transition-colors duration-500" fill="none" height="28" viewbox="0 0 40 40" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0L40 10V30L20 40L0 30V10L20 0Z" stroke="currentColor" strokeWidth="2"></path>
<path d="M20 10L30 15V25L20 30L10 25V15L20 10Z" stroke="currentColor" strokeWidth="2"></path>
<circle cx="20" cy="20" fill="currentColor" r="2"></circle>
</svg>
<span className="tracking-tighter text-xl font-semibold text-white uppercase leading-none hover-scramble">Vexa</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest text-[#777777] uppercase">
<a className="hover:text-white transition-colors flex items-center gap-2" href="#infrastructure"><span className="text-[#0052FF] opacity-50">01</span> Infrastructure</a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#intelligence"><span className="text-[#0052FF] opacity-50">02</span> Intelligence</a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#deployment"><span className="text-[#0052FF] opacity-50">03</span> Deployment</a>
</div>
<div className="flex items-center gap-6">
<a className="btn-hex px-6 py-2.5 text-xs hidden md:inline-flex" href="#deploy">
<span className="relative z-10">Access Terminal</span>
</a>
<button className="md:hidden text-white"><iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon></button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-12 z-10">
<div className="w-full h-full max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-center">
<div className="lg:col-span-8 flex flex-col items-start relative z-20">
<div className="sys-badge inline-flex items-center gap-3 px-4 py-1.5 rounded-none mb-8 animate-[fadeIn_1s_ease_out]">
<span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full animate-pulse shadow-[0_0_8px_#0052FF]"></span>
<span className="text-xs font-mono text-white tracking-widest uppercase">System Integrity: Optimal</span>
<span className="text-[0.6rem] text-[#777] ml-2 hidden sm:inline-block">NODE-7A // ACTIVE</span>
</div>
<h1 className="text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.95] tracking-tighter text-white mb-6 uppercase">
<span className="block reveal" style={{transitionDelay: '0.1s'}}>Dominate your data.</span>
<span className="block reveal text-[#777777]" style={{transitionDelay: '0.2s'}}>Secure your future.</span>
</h1>
<p className="text-sm md:text-base lg:text-lg font-light leading-relaxed text-[#888888] max-w-2xl mb-12 reveal border-l-2 border-[#151515] pl-6" style={{transitionDelay: '0.3s'}}>
                    Stop hoping your assets are safe. Engineer their survival. Vexa delivers military-grade, quantum-resistant cold-storage infrastructure designed for uncompromising enterprises scaling beyond limits.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto reveal" style={{transitionDelay: '0.4s'}}>
<a className="btn-hex btn-hex-primary w-full sm:w-auto px-10 py-5 text-sm" href="#deploy">
<span className="relative z-10 flex items-center gap-3">Deploy Vault <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
<a className="btn-hex w-full sm:w-auto px-10 py-5 text-sm" href="#infrastructure">
<span className="relative z-10 flex items-center gap-3"><iconify-icon className="text-lg" icon="solar:cpu-linear"></iconify-icon> View Architecture</span>
</a>
</div>
<div className="mt-16 flex items-center gap-8 reveal" style={{transitionDelay: '0.5s'}}>
<div className="flex flex-col">
<span className="text-2xl font-mono text-white tracking-tight">$42.8B</span>
<span className="text-xs text-[#777] uppercase tracking-widest mt-1">Assets Protected</span>
</div>
<div className="w-px h-10 bg-[#151515]"></div>
<div className="flex flex-col">
<span className="text-2xl font-mono text-white tracking-tight">0.00%</span>
<span className="text-xs text-[#777] uppercase tracking-widest mt-1">Breach Rate</span>
</div>
</div>
</div>

<div className="lg:col-span-4 hidden lg:flex flex-col justify-center items-end relative reveal" style={{transitionDelay: '0.6s'}}>
<div className="w-full max-w-sm glass-panel p-6 corner-brackets">
<div className="flex justify-between items-center mb-6 pb-4 border-b border-[#151515]">
<span className="text-xs font-mono text-[#777] uppercase tracking-widest">Active Connection</span>
<iconify-icon className="text-[#0052FF] text-xl" icon="solar:satellite-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex justify-between text-xs font-mono">
<span className="text-[#555]">Latency (ms)</span>
<span className="text-white">12.04</span>
</div>
<div className="w-full bg-[#111] h-1">
<div className="bg-[#0052FF] h-full w-[12%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]"></div>
</div>
</div>
<div className="flex justify-between text-xs font-mono pt-2">
<span className="text-[#555]">Encryption</span>
<span className="text-white">AES-256-GCM</span>
</div>
<div className="w-full bg-[#111] h-1">
<div className="bg-white h-full w-[100%]"></div>
</div>
<div className="flex justify-between text-xs font-mono pt-2">
<span className="text-[#555]">Uplink Status</span>
<span className="text-[#0052FF] animate-pulse">SECURE</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-6 border-y border-[#151515] bg-[#030303] relative z-10 overflow-hidden flex flex-col gap-4">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="flex whitespace-nowrap overflow-hidden">
<div className="animate-[marquee_30s_linear_infinite] flex items-center gap-12 text-xs uppercase font-mono tracking-widest text-[#555555]">
<span className="text-white">Protecting the assets of</span>
<span className="w-1 h-1 bg-[#222]"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:buildings-2-linear"></iconify-icon> Apex Global Holdings</span>
<span className="w-1 h-1 bg-[#222]"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:shield-network-linear"></iconify-icon> Sentinel Defense Tech</span>
<span className="w-1 h-1 bg-[#222]"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon> Vanguard Capital</span>
<span className="w-1 h-1 bg-[#222]"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon> Sovereign Wealth Fund IX</span>
<span className="w-1 h-1 bg-[#222]"></span>

<span className="text-white">Protecting the assets of</span>
<span className="w-1 h-1 bg-[#222]"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:buildings-2-linear"></iconify-icon> Apex Global Holdings</span>
<span className="w-1 h-1 bg-[#222]"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:shield-network-linear"></iconify-icon> Sentinel Defense Tech</span>
<span className="w-1 h-1 bg-[#222]"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon> Vanguard Capital</span>
<span className="w-1 h-1 bg-[#222]"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon> Sovereign Wealth Fund IX</span>
<span className="w-1 h-1 bg-[#222]"></span>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 w-full relative z-10 bg-black" id="intelligence">
<div className="max-w-[100rem] mx-auto reveal">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#151515] pb-8">
<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase mb-4">Command Terminal</h2>
<p className="text-sm text-[#777] font-mono tracking-widest uppercase">Absolute transparency. Total control.</p>
</div>
<div className="text-right text-xs font-mono text-[#555]">
                    [ LIVE DEMONSTRATION ]<br/>
                    VERSION 4.2.0
                </div>
</div>

<div className="w-full glass-panel rounded-xl overflow-hidden border border-[#1A1A1A] relative shadow-2xl">

<div className="bg-[#050505] border-b border-[#1A1A1A] px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
</div>
<div className="h-4 w-px bg-[#222]"></div>
<span className="text-xs font-mono text-white">VEXA_OS // ROOT</span>
</div>
<div className="flex gap-4 text-xs font-mono">
<span className="text-[#0052FF]">CONNECTED</span>
<span className="text-[#777]">UTC 14:22:01</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 bg-black/50">

<div className="hidden lg:block lg:col-span-2 border-r border-[#1A1A1A] p-6 space-y-8">
<div>
<div className="text-[0.6rem] font-mono text-[#555] uppercase tracking-widest mb-4">Navigation</div>
<ul className="space-y-3 text-xs font-mono">
<li className="text-white flex justify-between items-center"><span className="flex items-center gap-2"><iconify-icon icon="solar:widget-5-linear"></iconify-icon> Overview</span> <span className="w-1 h-1 bg-white rounded-full"></span></li>
<li className="text-[#777] hover:text-white transition-colors cursor-pointer flex items-center gap-2"><iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Access Logs</li>
<li className="text-[#777] hover:text-white transition-colors cursor-pointer flex items-center gap-2"><iconify-icon icon="solar:database-linear"></iconify-icon> Vaults</li>
<li className="text-[#777] hover:text-white transition-colors cursor-pointer flex items-center gap-2"><iconify-icon icon="solar:routing-2-linear"></iconify-icon> Network Map</li>
</ul>
</div>
<div>
<div className="text-[0.6rem] font-mono text-[#555] uppercase tracking-widest mb-4">System Alerts</div>
<div className="bg-[#111] border border-[#222] p-3 text-[0.65rem] font-mono text-[#777]">
<span className="text-[#0052FF]">INFO:</span> Routine key rotation completed successfully.
                            </div>
</div>
</div>

<div className="col-span-1 lg:col-span-7 border-r border-[#1A1A1A] p-6 lg:p-10 flex flex-col gap-8 grid-bg relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

<div className="grid grid-cols-3 gap-6 relative z-10">
<div className="bg-[#050505] border border-[#1A1A1A] p-4 corner-brackets group">
<div className="text-[0.6rem] font-mono text-[#555] uppercase tracking-widest mb-2">Total Stored</div>
<div className="text-xl lg:text-3xl font-mono text-white tracking-tight">8.42 PB</div>
</div>
<div className="bg-[#050505] border border-[#1A1A1A] p-4 corner-brackets group">
<div className="text-[0.6rem] font-mono text-[#555] uppercase tracking-widest mb-2">Active Threats</div>
<div className="text-xl lg:text-3xl font-mono text-[#0052FF] tracking-tight">0</div>
</div>
<div className="bg-[#050505] border border-[#1A1A1A] p-4 corner-brackets group">
<div className="text-[0.6rem] font-mono text-[#555] uppercase tracking-widest mb-2">Network Load</div>
<div className="text-xl lg:text-3xl font-mono text-white tracking-tight">14%</div>
</div>
</div>

<div className="bg-[#050505] border border-[#1A1A1A] flex-1 p-6 relative z-10 flex flex-col">
<div className="flex justify-between items-center mb-6">
<div className="text-xs font-mono text-white uppercase tracking-widest">Ingress / Egress Volume</div>
<div className="flex gap-2">
<span className="text-[0.6rem] font-mono px-2 py-1 bg-[#111] text-white">1H</span>
<span className="text-[0.6rem] font-mono px-2 py-1 text-[#555]">24H</span>
<span className="text-[0.6rem] font-mono px-2 py-1 text-[#555]">7D</span>
</div>
</div>
<div className="flex-1 flex items-end gap-1 opacity-70">

<div className="w-full bg-[#111] h-[20%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[35%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[15%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[40%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[60%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#0052FF] h-[85%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black font-mono text-[0.6rem] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">PEAK</div>
</div>
<div className="w-full bg-[#111] h-[50%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[30%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[45%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[25%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[10%] hover:bg-[#222] transition-colors"></div>
<div className="w-full bg-[#111] h-[15%] hover:bg-[#222] transition-colors"></div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-3 p-0 bg-[#050505] flex flex-col h-[30rem] lg:h-auto">
<div className="p-4 border-b border-[#1A1A1A]">
<div className="text-xs font-mono text-white uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-2 bg-[#0052FF] rounded-full"></span> Live Feed
                            </div>
</div>
<div className="flex-1 p-4 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="space-y-1 text-[0.65rem] font-mono flex flex-col animate-[scroll-up_20s_linear_infinite]">

<div className="data-row p-2 border-l-2 border-transparent flex justify-between"><span className="text-[#555]">[14:21:05]</span> <span className="text-[#777]">AUTH_REQ</span> <span className="text-white">OK</span></div>
<div className="data-row p-2 border-l-2 border-transparent flex justify-between"><span className="text-[#555]">[14:21:12]</span> <span className="text-[#777]">DATA_SYNC</span> <span className="text-white">OK</span></div>
<div className="data-row p-2 border-l-2 border-[#0052FF] bg-[rgba(0,82,255,0.05)] flex justify-between"><span className="text-[#555]">[14:21:18]</span> <span className="text-[#0052FF]">KEY_ROT</span> <span className="text-[#0052FF]">DONE</span></div>
<div className="data-row p-2 border-l-2 border-transparent flex justify-between"><span className="text-[#555]">[14:21:33]</span> <span className="text-[#777]">INTEGRITY</span> <span className="text-white">PASS</span></div>
<div className="data-row p-2 border-l-2 border-transparent flex justify-between"><span className="text-[#555]">[14:21:45]</span> <span className="text-[#777]">NODE_PING</span> <span className="text-white">OK</span></div>
<div className="data-row p-2 border-l-2 border-transparent flex justify-between"><span className="text-[#555]">[14:22:01]</span> <span className="text-[#777]">CONN_ESTB</span> <span className="text-white">OK</span></div>

<div className="data-row p-2 border-l-2 border-transparent flex justify-between"><span className="text-[#555]">[14:21:05]</span> <span className="text-[#777]">AUTH_REQ</span> <span className="text-white">OK</span></div>
<div className="data-row p-2 border-l-2 border-transparent flex justify-between"><span className="text-[#555]">[14:21:12]</span> <span className="text-[#777]">DATA_SYNC</span> <span className="text-white">OK</span></div>
<div className="data-row p-2 border-l-2 border-[#0052FF] bg-[rgba(0,82,255,0.05)] flex justify-between"><span className="text-[#555]">[14:21:18]</span> <span className="text-[#0052FF]">KEY_ROT</span> <span className="text-[#0052FF]">DONE</span></div>
<div className="data-row p-2 border-l-2 border-transparent flex justify-between"><span className="text-[#555]">[14:21:33]</span> <span className="text-[#777]">INTEGRITY</span> <span className="text-white">PASS</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 w-full relative z-10 bg-[#030303] border-t border-[#151515]">
<div className="max-w-[100rem] mx-auto">
<div className="mb-20 reveal max-w-2xl">
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase mb-6">The Arsenal.</h2>
<p className="text-sm md:text-base text-[#777] font-light leading-relaxed">
                    Growth demands an impenetrable foundation. We do not use standard protocols. We engineer specialized hardware and routing logic to provide absolute data sovereignty.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal stagger-group">

<div className="glass-panel p-8 corner-brackets group stagger-item flex flex-col hover:bg-[#080808] transition-colors duration-500">
<iconify-icon className="text-3xl text-white mb-8 group-hover:text-[#0052FF] transition-colors" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3 font-mono">Quantum Resistance</h3>
<p className="text-sm text-[#777] font-light leading-relaxed flex-1">
                        Post-quantum cryptographic algorithms deployed across all transmission layers. Your assets are secure against both current computational brute force and future quantum threats.
                    </p>
<div className="mt-8 pt-4 border-t border-[#1A1A1A] text-[0.65rem] font-mono text-[#555] uppercase">
                        Spec: PQC-Kyber1024
                    </div>
</div>

<div className="glass-panel p-8 corner-brackets group stagger-item flex flex-col hover:bg-[#080808] transition-colors duration-500">
<iconify-icon className="text-3xl text-white mb-8 group-hover:text-[#0052FF] transition-colors" icon="solar:routing-3-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3 font-mono">Zero-Trust Routing</h3>
<p className="text-sm text-[#777] font-light leading-relaxed flex-1">
                        Data is sharded, encrypted, and distributed across dynamic, ever-changing dark fiber pathways. Impossible to intercept, impossible to trace.
                    </p>
<div className="mt-8 pt-4 border-t border-[#1A1A1A] text-[0.65rem] font-mono text-[#555] uppercase">
                        Spec: Multi-Path Obfuscation
                    </div>
</div>

<div className="glass-panel p-8 corner-brackets group stagger-item flex flex-col hover:bg-[#080808] transition-colors duration-500">
<iconify-icon className="text-3xl text-white mb-8 group-hover:text-[#0052FF] transition-colors" icon="solar:server-square-update-linear"></iconify-icon>
<h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3 font-mono">Deep Cold Storage</h3>
<p className="text-sm text-[#777] font-light leading-relaxed flex-1">
                        Physical servers disconnected from the global internet backbone, housed in sovereign, off-grid locations. Access requires multi-signature cryptographic clearance.
                    </p>
<div className="mt-8 pt-4 border-t border-[#1A1A1A] text-[0.65rem] font-mono text-[#555] uppercase">
                        Spec: Air-Gapped NVMe
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-black overflow-hidden border-t border-[#151515]">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="max-w-[100rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center reveal stagger-group relative z-10">
<div className="stagger-item flex flex-col items-center">
<div className="text-[0.65rem] font-mono text-[#555] uppercase tracking-widest mb-4 border border-[#222] px-3 py-1 bg-[#050505]">Physical Breaches</div>
<div className="text-6xl font-bold tracking-tighter text-white mb-2">0</div>
</div>
<div className="stagger-item flex flex-col items-center">
<div className="text-[0.65rem] font-mono text-[#555] uppercase tracking-widest mb-4 border border-[#222] px-3 py-1 bg-[#050505]">Uptime Guarantee</div>
<div className="text-6xl font-bold tracking-tighter text-white mb-2">100<span className="text-2xl text-[#0052FF] ml-1">%</span></div>
</div>
<div className="stagger-item flex flex-col items-center">
<div className="text-[0.65rem] font-mono text-[#555] uppercase tracking-widest mb-4 border border-[#222] px-3 py-1 bg-[#050505]">Latency Target</div>
<div className="text-6xl font-bold tracking-tighter text-white mb-2">&lt;15<span className="text-2xl text-[#0052FF] ml-1">ms</span></div>
</div>
<div className="stagger-item flex flex-col items-center">
<div className="text-[0.65rem] font-mono text-[#555] uppercase tracking-widest mb-4 border border-[#222] px-3 py-1 bg-[#050505]">Enterprise Clients</div>
<div className="text-6xl font-bold tracking-tighter text-white mb-2">400<span className="text-2xl text-[#0052FF] ml-1">+</span></div>
</div>
</div>
</section>

<section className="py-40 px-6 lg:px-12 w-full relative z-10 bg-[#030303] border-t border-[#151515]" id="infrastructure">
<div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center reveal">
<div className="relative w-full aspect-square max-w-xl mx-auto flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-[#151515] animate-[spin_40s_linear_infinite]"></div>
<div className="absolute inset-10 rounded-full border border-[#1A1A1A] border-dashed animate-[spin_30s_linear_infinite_reverse]"></div>
<div className="absolute inset-20 rounded-full border border-[#222222]"></div>

<div className="w-24 h-24 bg-[#050505] border border-[#0052FF] rounded-full relative z-20 flex items-center justify-center shadow-[0_0_30px_rgba(0,82,255,0.2)]">
<div className="w-8 h-8 bg-white rounded-full animate-pulse shadow-[0_0_20px_#fff]"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#0052FF] rounded-full z-10 before:content-[''] before:absolute before:w-px before:h-40 before:bg-gradient-to-b before:from-[#0052FF] before:to-transparent before:left-1/2 before:top-4"></div>
<div className="absolute bottom-10 right-10 w-3 h-3 bg-white rounded-full z-10 before:content-[''] before:absolute before:h-px before:w-32 before:bg-gradient-to-l before:from-white before:to-transparent before:right-3 before:top-1/2"></div>
<div className="absolute top-20 left-10 w-2 h-2 bg-[#777] rounded-full z-10"></div>
</div>
<div className="flex flex-col items-start">
<div className="text-[0.65rem] font-mono text-[#0052FF] uppercase tracking-widest mb-4 bg-[rgba(0,82,255,0.1)] px-3 py-1 border border-[rgba(0,82,255,0.3)]">Architecture</div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase mb-8">Distributed.<br/>Invisible.<br/><span className="text-[#555]">Invincible.</span></h2>
<p className="text-sm md:text-base text-[#777] font-light leading-relaxed mb-8">
                    Your data does not reside in a single vulnerable location. Vexa fragments, encrypts, and scatters your assets across a proprietary, globally distributed sovereign network. 
                    <br/><br/>
                    Unrestricted enterprise growth requires infrastructure that scales securely without localized points of failure. We are the foundation for the uncompromising.
                </p>
<ul className="space-y-4 font-mono text-xs text-[#888] mb-10">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full"></span> Geo-redundant fragmentation</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full"></span> Automated sovereign failover</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#0052FF] rounded-full"></span> Continuous polymorphic encryption</li>
</ul>
<a className="btn-hex px-8 py-4 text-xs" href="#deploy">
<span className="relative z-10">Review Whitepaper</span>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 w-full relative z-10 bg-black border-t border-[#151515]">
<div className="w-full max-w-[100rem] mx-auto reveal">
<div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#151515] pb-8">
<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase mb-4">Deployment Protocols</h2>
<p className="text-sm text-[#777] font-mono tracking-widest uppercase">Select your tier of supremacy.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

<div className="glass-panel corner-brackets p-8 flex flex-col hover:border-[#333] transition-colors duration-500">
<div className="mb-6">
<div className="text-[0.65rem] font-mono text-[#777] uppercase tracking-widest mb-2">Protocol_Alpha</div>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight">Vanguard</h3>
</div>
<div className="text-4xl font-mono text-white mb-8 border-b border-[#1A1A1A] pb-8">10<span className="text-lg text-[#555] ml-1 uppercase">TB</span></div>
<ul className="text-xs font-mono text-[#777] space-y-4 mb-12 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Standard Encryption</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Dual-node redundancy</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> 24/7 Async Support</li>
</ul>
<a className="btn-hex w-full py-4 text-xs text-center" href="#deploy"><span className="relative z-10 w-full">Initialize</span></a>
</div>

<div className="bg-[#050505] border border-[#0052FF] p-8 flex flex-col relative shadow-[0_0_30px_rgba(0,82,255,0.1)] transform md:-translate-y-4">
<div className="absolute top-0 left-0 w-full h-1 bg-[#0052FF]"></div>
<div className="mb-6">
<div className="flex justify-between items-center mb-2">
<div className="text-[0.65rem] font-mono text-[#0052FF] uppercase tracking-widest">Protocol_Sigma</div>
<span className="text-[0.6rem] font-mono bg-[rgba(0,82,255,0.1)] text-[#0052FF] px-2 py-1">RECOMMENDED</span>
</div>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight">Enterprise</h3>
</div>
<div className="text-4xl font-mono text-white mb-8 border-b border-[#1A1A1A] pb-8">100<span className="text-lg text-[#555] ml-1 uppercase">TB+</span></div>
<ul className="text-xs font-mono text-[#DDD] space-y-4 mb-12 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-[#0052FF] text-base" icon="solar:check-circle-bold"></iconify-icon> Quantum-Resistant Layers</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#0052FF] text-base" icon="solar:check-circle-bold"></iconify-icon> Global 5-node fragmentation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#0052FF] text-base" icon="solar:check-circle-bold"></iconify-icon> Zero-trust dark routing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#0052FF] text-base" icon="solar:check-circle-bold"></iconify-icon> Dedicated Comm Channel</li>
</ul>
<a className="btn-hex btn-hex-primary w-full py-4 text-xs text-center" href="#deploy"><span className="relative z-10 w-full">Deploy Architecture</span></a>
</div>

<div className="glass-panel corner-brackets p-8 flex flex-col hover:border-[#333] transition-colors duration-500">
<div className="mb-6">
<div className="text-[0.65rem] font-mono text-[#777] uppercase tracking-widest mb-2">Protocol_Omega</div>
<h3 className="text-2xl font-bold text-white uppercase tracking-tight">Sovereign</h3>
</div>
<div className="text-4xl font-mono text-white mb-8 border-b border-[#1A1A1A] pb-8">UNLTD</div>
<ul className="text-xs font-mono text-[#777] space-y-4 mb-12 flex-1">
<li className="flex items-center gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Custom Hardware Provision</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Dedicated isolated rack</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white text-base" icon="solar:check-circle-linear"></iconify-icon> Physical security auditing</li>
</ul>
<a className="btn-hex w-full py-4 text-xs text-center" href="#deploy"><span className="relative z-10 w-full">Contact Board</span></a>
</div>
</div>
</div>
</section>

<section className="relative w-full border-t border-[#151515] bg-[#030303] z-10" id="deployment">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

<div className="p-10 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#151515] relative overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-0 w-2 h-full bg-[#0052FF]"></div>
<div className="relative z-10 reveal max-w-lg">
<div className="text-[0.65rem] font-mono text-[#0052FF] uppercase tracking-widest mb-6">Access Terminal</div>
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.9] text-white uppercase">Secure your<br/>advantage.</h2>
<div className="space-y-6 text-sm text-[#777] font-light leading-relaxed">
<p>Access to Vexa infrastructure is restricted. Submit your organization's parameters below. Our compliance algorithms and executive board review all deployments to ensure network integrity.</p>
<div className="pt-8 mt-8 border-t border-[#1A1A1A] space-y-6 font-mono text-xs">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#0052FF] text-xl mt-0.5" icon="solar:shield-warning-bold"></iconify-icon>
<div>
<span className="text-white block mb-1 uppercase tracking-widest">End-to-End Encrypted</span>
<span className="text-[#555]">This channel utilizes RSA-4096 handshake logic.</span>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#0052FF] text-xl mt-0.5" icon="solar:document-text-bold"></iconify-icon>
<div>
<span className="text-white block mb-1 uppercase tracking-widest">Instant NDA Execution</span>
<span className="text-[#555]">Confidentiality parameters applied upon submission.</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-10 md:p-20 bg-black flex items-center justify-center relative">

<div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-[#222]"></div>
<div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-[#222]"></div>
<form className="w-full max-w-md reveal" onsubmit="event.preventDefault();" style={{transitionDelay: '0.2s'}}>
<div className="space-y-10">
<div>
<label className="block text-[0.65rem] text-[#777] font-mono tracking-widest uppercase mb-3">Enterprise Entity</label>
<input className="cyber-input text-sm py-2" placeholder="Legal Organization Name" type="text"/>
</div>
<div>
<label className="block text-[0.65rem] text-[#777] font-mono tracking-widest uppercase mb-3">Security Officer / Contact</label>
<input className="cyber-input text-sm py-2" placeholder="secure@enterprise.com" type="email"/>
</div>
<div>
<label className="block text-[0.65rem] text-[#777] font-mono tracking-widest uppercase mb-3">Required Protocol</label>
<div className="relative">
<select className="cyber-input text-sm py-2 appearance-none cursor-pointer bg-transparent">
<option className="bg-[#111] text-white" value="alpha">Vanguard (10TB)</option>
<option className="bg-[#111] text-[#0052FF]" selected="" value="sigma">Enterprise (100TB+)</option>
<option className="bg-[#111] text-white" value="omega">Sovereign (UNLTD)</option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#555]">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-10 bg-[#050505] border border-[#1A1A1A] p-4 flex items-center gap-4">
<input checked="" className="cyber-check" id="auth-check" type="checkbox"/>
<label className="text-[0.65rem] text-[#777] font-mono uppercase tracking-widest cursor-pointer select-none" htmlFor="auth-check">
                            I confirm authorization to deploy infrastructure.
                        </label>
</div>
<div className="pt-8">
<button className="btn-hex btn-hex-primary w-full py-5 text-sm">
<span className="relative z-10 w-full flex justify-center items-center gap-2">Execute Request <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon></span>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-[#151515] bg-black pt-20 pb-10 px-6 lg:px-12 w-full relative z-10 overflow-hidden">
<div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start relative z-10 mb-20">
<div className="md:col-span-4 flex flex-col items-start">
<a className="flex items-center gap-4 mb-6 group" href="#">
<svg className="text-white group-hover:text-[#0052FF] transition-colors" fill="none" height="24" viewbox="0 0 40 40" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0L40 10V30L20 40L0 30V10L20 0Z" stroke="currentColor" strokeWidth="2"></path>
<circle cx="20" cy="20" fill="currentColor" r="2"></circle>
</svg>
<span className="tracking-tighter text-lg font-bold text-white uppercase leading-none hover-scramble">Vexa</span>
</a>
<p className="text-[0.7rem] font-mono text-[#555] uppercase tracking-widest leading-relaxed max-w-xs">
                    Absolute data supremacy. Engineering uncompromising survival for the world's most critical assets.
                </p>
</div>
<div className="md:col-span-2 md:col-start-7 flex flex-col gap-3 text-xs font-mono tracking-widest uppercase text-[#555]">
<span className="text-white mb-2">Systems</span>
<a className="hover:text-white transition-colors" href="#">Architecture</a>
<a className="hover:text-white transition-colors" href="#">Routing</a>
<a className="hover:text-white transition-colors" href="#">Telemetry</a>
</div>
<div className="md:col-span-2 flex flex-col gap-3 text-xs font-mono tracking-widest uppercase text-[#555]">
<span className="text-white mb-2">Entity</span>
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Board</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="md:col-span-2 flex flex-col gap-3 text-xs font-mono tracking-widest uppercase text-[#555]">
<span className="text-white mb-2">Protocol</span>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
<div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] font-mono uppercase tracking-widest text-[#444] border-t border-[#151515] pt-8">
<span>© 2024 VEXA_CORP. ALL RIGHTS RESERVED.</span>
<span>SYSTEM STATUS: <span className="text-[#0052FF]">NOMINAL</span></span>
</div>
</footer>


    </>
  );
}
