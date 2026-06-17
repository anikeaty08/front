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



        // Reveal Animations on Scroll
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // WebGL-like Interactive Canvas Dot Grid Background
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let dots = [];
        let mouse = { x: null, y: null, radius: 250 };
        let time = 0;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initDots();
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Dot {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = 1;
                this.baseOpacity = Math.random() * 0.3 + 0.1;
            }
            draw() {
                // Wave movement based on time
                let waveY = Math.sin(this.x * 0.005 + time) * 15;
                let waveX = Math.cos(this.y * 0.005 + time) * 15;
                
                let currentX = this.baseX + waveX;
                let currentY = this.baseY + waveY;
                let opacity = this.baseOpacity;
                let size = this.size;

                // Mouse interaction
                if (mouse.x != null) {
                    let dx = mouse.x - currentX;
                    let dy = mouse.y - currentY;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        opacity = Math.min(this.baseOpacity + force * 0.8, 1);
                        size = this.size + force * 2;
                        
                        // Push effect
                        currentX -= dx * force * 0.1;
                        currentY -= dy * force * 0.1;
                    }
                }

                ctx.fillStyle = `rgba(200, 255, 0, ${opacity})`;
                ctx.beginPath();
                ctx.arc(currentX, currentY, size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initDots() {
            dots = [];
            const spacing = 35; // Grid spacing
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    // Only draw dots roughly in a certain pattern or everywhere
                    if(Math.random() > 0.2) {
                        dots.push(new Dot(x, y));
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            time += 0.01;
            for (let i = 0; i < dots.length; i++) {
                dots[i].draw();
            }
            requestAnimationFrame(animate);
        }

        resize();
        animate();
    
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
      

<div className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<nav className="fixed top-0 w-full z-40 bg-[#050505]/70 backdrop-blur-xl border-b border-white/[0.03]">
<div className="mx-auto w-[92%] max-w-[88rem] flex items-center justify-between h-20">

<a className="flex items-center gap-3 group" href="#">
<svg className="w-8 h-8" viewbox="0 0 40 40">
<path className="group-hover:fill-[#C8FF00]/10 transition-colors duration-500" d="M4 4L20 36L36 4H24L20 16L16 4H4Z" fill="none" stroke="#C8FF00" strokeLinejoin="miter" strokeWidth="2.5"></path>
<circle className="group-hover:translate-y-2 transition-transform duration-300" cx="20" cy="24" fill="#f0f0ee" r="2"></circle>
</svg>
<span className="font-display font-semibold tracking-tighter text-xl uppercase">Veltis</span>
</a>

<div className="hidden lg:flex items-center gap-10 text-xs font-mono text-[#888] tracking-widest uppercase">
<a className="hover:text-[#C8FF00] transition-colors flex items-center gap-2" href="#architecture"><span className="w-1 h-1 bg-white/20 rounded-full"></span> Infrastructure</a>
<a className="hover:text-[#C8FF00] transition-colors flex items-center gap-2" href="#performance"><span className="w-1 h-1 bg-white/20 rounded-full"></span> Performance</a>
<a className="hover:text-[#C8FF00] transition-colors flex items-center gap-2" href="#thesis"><span className="w-1 h-1 bg-white/20 rounded-full"></span> Allocation Protocol</a>
<a className="hover:text-[#C8FF00] transition-colors flex items-center gap-2" href="#network"><span className="w-1 h-1 bg-white/20 rounded-full"></span> Elite Network</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:block btn-sec text-[#f0f0ee] text-xs font-mono uppercase tracking-widest pb-1" href="#">
                    Client Access
                </a>
<a className="btn-complex text-[#C8FF00] font-semibold text-sm px-7 py-3 flex items-center gap-2" href="#">
<span className="btn-text uppercase tracking-wide font-display text-xs">Initiate Deployment</span>
<iconify-icon className="icon-arrow" icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden z-10 bg-[#050505]">

<canvas className="absolute inset-0 w-full h-full pointer-events-auto opacity-60" id="hero-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] pointer-events-none"></div>
<div className="mx-auto w-[92%] max-w-[88rem] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pointer-events-none">
<div className="lg:col-span-8 flex flex-col items-start space-y-8 pointer-events-auto">
<div className="flex items-center gap-3 text-[10px] font-mono text-[#C8FF00] border border-[#C8FF00]/20 rounded-none px-4 py-1.5 bg-[#C8FF00]/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 bg-[#C8FF00] animate-pulse"></span>
<span className="tracking-widest uppercase">Protocol V.9.2 Active · Zero Human Interference</span>
</div>
<h1 className="font-display font-semibold text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter leading-[1.02] text-[#f0f0ee]">
                    Dominate the market.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8FF00] to-white/70">Protect your legacy.</span>
</h1>
<p className="text-lg md:text-xl text-[#888] max-w-2xl leading-relaxed font-light">
                    Stop leaving yield on the table. We deploy ruthless, quantitative AI architectures designed exclusively to engineer asymmetrical upside for top-tier capital allocators.
                </p>
<div className="pt-6 flex flex-wrap items-center gap-6">
<a className="btn-complex text-[#C8FF00] font-semibold text-base px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center" href="#">
<span className="btn-text uppercase tracking-wide font-display">Command Your Capital</span>
<iconify-icon className="icon-arrow" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<div className="flex items-center gap-4 text-xs font-mono text-[#666]">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-[#050505] bg-[#111] flex items-center justify-center"><iconify-icon icon="solar:user-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full border border-[#050505] bg-[#1a1a1a] flex items-center justify-center"><iconify-icon icon="solar:user-circle-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full border border-[#050505] bg-[#C8FF00] text-black flex items-center justify-center font-bold text-[10px]">14+</div>
</div>
<span className="uppercase tracking-widest">New deployments today</span>
</div>
</div>
<div className="pt-12 mt-4 border-t border-white/10 w-full flex flex-wrap gap-12 md:gap-20 items-center">
<div>
<p className="text-[10px] text-[#666] mb-2 tracking-widest uppercase font-mono">Current AUM</p>
<p className="font-display font-semibold text-3xl md:text-4xl text-[#f0f0ee] tracking-tighter">$4.72B</p>
</div>
<div>
<p className="text-[10px] text-[#666] mb-2 tracking-widest uppercase font-mono">Execution Latency</p>
<p className="font-display font-semibold text-3xl md:text-4xl text-[#f0f0ee] tracking-tighter text-[#C8FF00]"><span className="text-white/40 text-2xl relative -top-1">&lt;</span>0.8ms</p>
</div>
<div>
<p className="text-[10px] text-[#666] mb-2 tracking-widest uppercase font-mono">Avg Alpha Generation</p>
<p className="font-display font-semibold text-3xl md:text-4xl text-[#f0f0ee] tracking-tighter">+14.2%</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/[0.05] bg-[#050505] py-5 overflow-hidden relative z-10 flex">
<div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="flex items-center gap-20 whitespace-nowrap opacity-40 invert brightness-0 pl-20" style={{width: 'max-content', animation: 'scroll-left 50s linear infinite'}}>
<span className="font-display font-semibold text-xl tracking-tighter">SEQUOIA</span>
<span className="font-display font-semibold text-xl tracking-tighter">ANDREESSEN HOROWITZ</span>
<span className="font-display font-semibold text-xl tracking-tighter">BENCHMARK</span>
<span className="font-display font-semibold text-xl tracking-tighter">FOUNDERS FUND</span>
<span className="font-display font-semibold text-xl tracking-tighter">LIGHTSPEED</span>
<span className="font-display font-semibold text-xl tracking-tighter">KLEINER PERKINS</span>
<span className="font-display font-semibold text-xl tracking-tighter">TIGER GLOBAL</span>

<span className="font-display font-semibold text-xl tracking-tighter">SEQUOIA</span>
<span className="font-display font-semibold text-xl tracking-tighter">ANDREESSEN HOROWITZ</span>
<span className="font-display font-semibold text-xl tracking-tighter">BENCHMARK</span>
<span className="font-display font-semibold text-xl tracking-tighter">FOUNDERS FUND</span>
</div>
</section>

<section className="bg-[#050505] py-32 relative z-10 reveal" id="performance">
<div className="mx-auto w-[92%] max-w-[88rem]">
<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-2xl">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter mb-5">Absolute Performance Transparency.</h2>
<p className="text-[#888] text-lg font-light">Watch your capital compound in real-time. Our proprietary terminal gives you sub-millisecond visibility into every micro-trade and portfolio shift.</p>
</div>
</div>

<div className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden shadow-[0_20px_60px_-15px_rgba(200,255,0,0.05)] relative group cursor-crosshair">
<div className="absolute inset-0 scan-overlay pointer-events-none opacity-20"></div>

<div className="bg-[#111] border-b border-white/10 px-6 py-3 flex justify-between items-center">
<div className="flex gap-4 items-center">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#C8FF00]"></div>
</div>
<span className="font-mono text-[10px] text-[#666] tracking-widest uppercase ml-4">Veltis Alpha Terminal // Live Env</span>
</div>
<div className="font-mono text-[10px] text-[#C8FF00] flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#C8FF00] rounded-full animate-pulse"></span>
                        CONN_STABLE
                    </div>
</div>

<div className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 relative">

<div className="col-span-1 space-y-6">
<div className="p-4 bg-white/[0.02] border border-white/5">
<div className="text-[10px] font-mono text-[#666] uppercase tracking-widest mb-1">Net Liquidation</div>
<div className="font-display text-2xl font-semibold tracking-tighter text-white">$14,240,891.45</div>
<div className="text-xs font-mono text-[#C8FF00] mt-2">+ $24,190.20 (Day)</div>
</div>
<div className="p-4 bg-white/[0.02] border border-white/5 space-y-4">
<div>
<div className="flex justify-between text-[10px] font-mono text-[#666] uppercase mb-1"><span>Alpha Multiplier</span> <span>2.4x</span></div>
<div className="w-full bg-white/10 h-1"><div className="bg-[#C8FF00] w-[70%] h-full"></div></div>
</div>
<div>
<div className="flex justify-between text-[10px] font-mono text-[#666] uppercase mb-1"><span>Risk Exposure</span> <span>Low</span></div>
<div className="w-full bg-white/10 h-1"><div className="bg-white/40 w-[20%] h-full"></div></div>
</div>
<div>
<div className="flex justify-between text-[10px] font-mono text-[#666] uppercase mb-1"><span>System Load</span> <span>Optimal</span></div>
<div className="w-full bg-white/10 h-1"><div className="bg-white/40 w-[45%] h-full"></div></div>
</div>
</div>
<button className="w-full py-3 border border-white/20 font-mono text-xs text-white uppercase tracking-widest hover:bg-white/5 transition-colors">
                            Export Ledger Data
                        </button>
</div>

<div className="col-span-1 lg:col-span-3 border border-white/5 bg-[#050505] p-6 relative overflow-hidden flex flex-col justify-end min-h-[300px]">

<svg className="absolute inset-0 w-full h-full terminal-glow" preserveaspectratio="none" viewbox="0 0 1000 300">

<path d="M0,50 L1000,50 M0,150 L1000,150 M0,250 L1000,250" fill="none" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4,4" strokeWidth="1"></path>

<path d="M0,280 C150,260 300,180 450,200 C600,220 800,100 1000,40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>

<path className="drop-shadow-[0_0_8px_rgba(200,255,0,0.8)]" d="M0,250 C200,240 300,150 500,120 C700,90 850,150 1000,20" fill="none" stroke="#C8FF00" strokeWidth="3"></path>

<circle cx="300" cy="150" fill="#050505" r="4" stroke="#C8FF00" strokeWidth="2"></circle>
<circle cx="500" cy="120" fill="#050505" r="4" stroke="#C8FF00" strokeWidth="2"></circle>
<circle cx="850" cy="150" fill="#050505" r="4" stroke="#C8FF00" strokeWidth="2"></circle>
<circle className="animate-pulse" cx="1000" cy="20" fill="#C8FF00" r="6"></circle>
</svg>

<div className="absolute top-6 left-6 flex gap-4 font-mono text-[10px]">
<span className="bg-[#111] px-2 py-1 border border-white/10 text-white/50">YTD Growth</span>
<span className="bg-[#C8FF00]/10 text-[#C8FF00] px-2 py-1 border border-[#C8FF00]/30">+34.8%</span>
</div>
<div className="absolute bottom-6 right-6 flex gap-2 font-mono text-[10px]">
<span className="text-white/30 uppercase">Last Sync: 0.002s ago</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] py-32 relative z-10 border-t border-white/5 reveal" id="thesis">
<div className="mx-auto w-[92%] max-w-[88rem]">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-3xl">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter mb-5">Uncompromising Asset Allocation.</h2>
<p className="text-[#888] text-lg font-light">Forget the outdated 60/40 split. Our quantitative models dynamically hunt for asymmetric returns across five core pillars, pivoting violently when macro conditions shift.</p>
</div>
<div className="font-mono text-[10px] text-[#666] flex items-center gap-3 border border-white/10 px-4 py-2 uppercase tracking-widest">
<span className="w-1.5 h-1.5 bg-[#C8FF00]"></span> Weighting: Active
                </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 border-t border-white/5 pt-16">

<div className="flex flex-col items-center group cursor-crosshair">
<div className="relative w-28 h-28 mb-6">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="2"></circle>
<circle className="transition-all duration-700 group-hover:stroke-width-[6]" cx="50" cy="50" fill="none" r="40" stroke="#C8FF00" stroke-dasharray="42, 100" strokeWidth="4" style={{animation: 'draw-arc 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'}}></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-display font-semibold text-2xl text-[#f0f0ee] tracking-tighter">42<span className="text-sm text-[#C8FF00]">%</span></div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-[#f0f0ee] mb-2">DeepTech Eq</span>
<span className="text-[10px] text-[#666] text-center max-w-[120px]">High conviction AI &amp; ML infrastucture.</span>
</div>

<div className="flex flex-col items-center group cursor-crosshair">
<div className="relative w-28 h-28 mb-6">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="2"></circle>
<circle className="transition-all duration-700 group-hover:stroke-width-[5]" cx="50" cy="50" fill="none" r="40" stroke="#ffffff" stroke-dasharray="24, 100" strokeWidth="3" style={{animation: 'draw-arc 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards'}}></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-display font-semibold text-2xl text-[#f0f0ee] tracking-tighter">24<span className="text-sm text-[#666]">%</span></div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-[#888] group-hover:text-white transition-colors mb-2">Private Credit</span>
<span className="text-[10px] text-[#555] text-center max-w-[120px]">Senior secured lending facilities.</span>
</div>

<div className="flex flex-col items-center group cursor-crosshair">
<div className="relative w-28 h-28 mb-6">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="2"></circle>
<circle className="transition-all duration-700 group-hover:stroke-width-[5]" cx="50" cy="50" fill="none" r="40" stroke="#ffffff" stroke-dasharray="16, 100" strokeWidth="3" style={{animation: 'draw-arc 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards'}}></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-display font-semibold text-2xl text-[#f0f0ee] tracking-tighter">16<span className="text-sm text-[#666]">%</span></div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-[#888] group-hover:text-white transition-colors mb-2">Real Assets</span>
<span className="text-[10px] text-[#555] text-center max-w-[120px]">Hard infrastructure &amp; data centers.</span>
</div>

<div className="flex flex-col items-center group cursor-crosshair">
<div className="relative w-28 h-28 mb-6">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="2"></circle>
<circle className="transition-all duration-700 group-hover:stroke-width-[5]" cx="50" cy="50" fill="none" r="40" stroke="#ffffff" stroke-dasharray="12, 100" strokeWidth="3" style={{animation: 'draw-arc 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards'}}></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-display font-semibold text-2xl text-[#f0f0ee] tracking-tighter">12<span className="text-sm text-[#666]">%</span></div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-[#888] group-hover:text-white transition-colors mb-2">Liquid Alts</span>
<span className="text-[10px] text-[#555] text-center max-w-[120px]">Market neutral arb strategies.</span>
</div>

<div className="flex flex-col items-center group cursor-crosshair">
<div className="relative w-28 h-28 mb-6">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgba(255,255,255,0.03)" strokeWidth="2"></circle>
<circle className="transition-all duration-700 group-hover:stroke-width-[5]" cx="50" cy="50" fill="none" r="40" stroke="#ffffff" stroke-dasharray="6, 100" strokeWidth="3" style={{animation: 'draw-arc 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards'}}></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center font-display font-semibold text-2xl text-[#f0f0ee] tracking-tighter">06<span className="text-sm text-[#666]">%</span></div>
</div>
<span className="text-xs font-mono uppercase tracking-widest text-[#888] group-hover:text-white transition-colors mb-2">Strategic Cash</span>
<span className="text-[10px] text-[#555] text-center max-w-[120px]">Dry powder for market dislocations.</span>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-32 relative z-10 border-t border-white/5 reveal" id="architecture">
<div className="mx-auto w-[92%] max-w-[88rem]">
<div className="mb-20">
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter mb-5">Unfair Advantage Architecture.</h2>
<p className="text-[#888] text-lg max-w-2xl font-light">We replaced human advisors with server racks. Our proprietary infrastructure executes thousands of micro-decisions daily to compound your wealth while you focus on building your next company.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]">

<div className="md:col-span-2 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 p-10 relative overflow-hidden group hover:border-[#C8FF00]/30 transition-colors duration-500">
<div className="absolute top-0 right-0 w-96 h-96 bg-[#C8FF00]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 group-hover:bg-[#C8FF00]/20 transition-colors duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-[#C8FF00] mb-8" icon="solar:programming-linear" strokeWidth="1.5" width="40"></iconify-icon>
<div className="max-w-md">
<h3 className="font-display font-semibold text-3xl tracking-tight mb-4">Algorithmic Precision</h3>
<p className="text-[#888] text-sm leading-relaxed mb-8 font-light">Our neural networks continuously monitor millions of data points, executing macro-rebalancing without human hesitation. Emotion is a liability; code is absolute.</p>
<a className="btn-sec text-[#f0f0ee] text-xs font-mono uppercase tracking-widest pb-1 inline-block" href="#">Review Technical Specs</a>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/5 p-10 relative group hover:bg-[#111] transition-colors duration-500">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-white/40 mb-6 group-hover:text-white transition-colors" icon="solar:shield-warning-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-3">Relentless Tax Harvesting</h3>
<p className="text-[#666] text-sm leading-relaxed font-light">Automated lot-level offset generation across 18 jurisdictions. We aggressively harvest losses to amplify your net realized gains.</p>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/5 p-10 relative group hover:bg-[#111] transition-colors duration-500">
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-white/40 mb-6 group-hover:text-[#C8FF00] transition-colors" icon="solar:radar-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<h3 className="font-display font-semibold text-xl tracking-tight mb-3">Exclusive Deal Flow</h3>
<p className="text-[#666] text-sm leading-relaxed font-light">Direct integration with tier-1 venture funds and private liquidity pools. We secure allocations the general public never sees.</p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-[#080808] border border-white/5 p-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22rgba(255,255,255,0.05)%22/%3E%3C/svg%3E')] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<iconify-icon className="text-white/40 mb-6" icon="solar:cpu-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div className="max-w-md">
<h3 className="font-display font-semibold text-2xl tracking-tight mb-3">Real-time Risk Modeling</h3>
<p className="text-[#888] text-sm font-light mb-6">Millions of Monte Carlo simulations run against your exact portfolio holding structure daily, preempting macro-economic shocks before they manifest.</p>
<div className="flex gap-4">
<div className="bg-[#111] border border-white/10 px-4 py-3 text-center w-24">
<div className="text-[10px] font-mono text-[#666] uppercase mb-1">Simulations</div>
<div className="font-mono text-[#C8FF00] text-sm">4.2M/day</div>
</div>
<div className="bg-[#111] border border-white/10 px-4 py-3 text-center w-24">
<div className="text-[10px] font-mono text-[#666] uppercase mb-1">Uptime</div>
<div className="font-mono text-white text-sm">99.999%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] py-32 relative z-10 border-t border-white/5 reveal">
<div className="mx-auto w-[92%] max-w-[88rem]">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tighter mb-4">Live Deployment Telemetry.</h2>
<p className="text-[#888] max-w-xl font-light">Anonymized subset of active client algorithmic adjustments occurring across the Veltis network this hour.</p>
</div>
<div className="hidden md:flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/10 text-[10px] font-mono text-[#666] uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Recording Activity
                </div>
</div>
<div className="w-full overflow-x-auto no-scrollbar border border-white/10 rounded-sm bg-[#0a0a0a]">
<table className="w-full text-left border-collapse min-w-[900px]">
<thead>
<tr className="bg-[#111] text-[10px] font-mono text-[#666] uppercase tracking-widest border-b border-white/10">
<th className="px-8 py-5 font-normal">Node Entity</th>
<th className="px-8 py-5 font-normal">Sector Thesis</th>
<th className="px-8 py-5 font-normal">Capital Shift</th>
<th className="px-8 py-5 font-normal">Algorithmic Action</th>
<th className="px-8 py-5 font-normal text-right">Execution Time</th>
</tr>
</thead>
<tbody className="text-sm font-light">

<tr className="signal-row group border-b border-white/5 cursor-crosshair relative z-10 hover:bg-[#111]">
<td className="px-8 py-6 align-top">
<span className="font-medium text-[#f0f0ee] tracking-wide">ID-7492.Alpha</span>
<div className="sub-metrics">
<div className="grid grid-cols-3 gap-6 text-[10px] font-mono text-[#666]">
<div><span className="block text-white/30 uppercase mb-1">Sharpe</span>2.14</div>
<div><span className="block text-white/30 uppercase mb-1">Beta</span>0.42</div>
<div><span className="block text-white/30 uppercase mb-1">Volatility</span>Low</div>
</div>
</div>
</td>
<td className="px-8 py-6 align-top text-[#888]">Semiconductors</td>
<td className="px-8 py-6 align-top font-mono text-xs">
<span className="text-[#666]">$1.4M</span> <span className="text-[#C8FF00] mx-2">→</span> <span className="text-[#f0f0ee]">$3.2M</span>
</td>
<td className="px-8 py-6 align-top">
<span className="inline-block px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest border border-[#C8FF00]/50 bg-[#C8FF00]/10 text-[#C8FF00]">Aggr. Accumulate</span>
</td>
<td className="px-8 py-6 align-top text-right font-mono text-[10px] text-[#666] uppercase">04m 12s ago</td>
</tr>

<tr className="signal-row group border-b border-white/5 cursor-crosshair relative z-10 hover:bg-[#111]">
<td className="px-8 py-6 align-top">
<span className="font-medium text-[#f0f0ee] tracking-wide">ID-3391.Gamma</span>
<div className="sub-metrics">
<div className="grid grid-cols-3 gap-6 text-[10px] font-mono text-[#666]">
<div><span className="block text-white/30 uppercase mb-1">Sharpe</span>1.88</div>
<div><span className="block text-white/30 uppercase mb-1">Beta</span>0.65</div>
<div><span className="block text-white/30 uppercase mb-1">Volatility</span>Med</div>
</div>
</div>
</td>
<td className="px-8 py-6 align-top text-[#888]">Consumer Saas</td>
<td className="px-8 py-6 align-top font-mono text-xs">
<span className="text-[#666]">$8.5M</span> <span className="text-white/20 mx-2">→</span> <span className="text-[#f0f0ee]">$4.1M</span>
</td>
<td className="px-8 py-6 align-top">
<span className="inline-block px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest border border-white/20 text-white">Trim Position</span>
</td>
<td className="px-8 py-6 align-top text-right font-mono text-[10px] text-[#666] uppercase">22m 05s ago</td>
</tr>

<tr className="signal-row group border-b border-white/5 cursor-crosshair relative z-10 hover:bg-[#111]">
<td className="px-8 py-6 align-top">
<span className="font-medium text-[#f0f0ee] tracking-wide">ID-9920.Sigma</span>
<div className="sub-metrics">
<div className="grid grid-cols-3 gap-6 text-[10px] font-mono text-[#666]">
<div><span className="block text-white/30 uppercase mb-1">Sharpe</span>3.02</div>
<div><span className="block text-white/30 uppercase mb-1">Beta</span>0.12</div>
<div><span className="block text-white/30 uppercase mb-1">Volatility</span>Low</div>
</div>
</div>
</td>
<td className="px-8 py-6 align-top text-[#888]">Defensive Yield</td>
<td className="px-8 py-6 align-top font-mono text-xs">
<span className="text-[#666]">£12.0M</span> <span className="text-white/20 mx-2">→</span> <span className="text-[#f0f0ee]">£12.0M</span>
</td>
<td className="px-8 py-6 align-top">
<span className="inline-block px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest border border-white/10 text-white/40">Hold Status</span>
</td>
<td className="px-8 py-6 align-top text-right font-mono text-[10px] text-[#666] uppercase">1h 14m ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="bg-[#050505] py-32 relative z-10 reveal" id="network">
<div className="mx-auto w-[92%] max-w-[50rem] text-center">
<iconify-icon className="text-white/10 mb-8" icon="solar:quote-left-linear" strokeWidth="1" width="48"></iconify-icon>
<h2 className="font-display font-semibold text-2xl md:text-4xl tracking-tighter leading-snug text-[#f0f0ee] mb-10">
                "Veltis stripped the human emotion out of our family office operations. Their algorithm correctly predicted the Q3 sector rotation, executing a flawless pivot while traditional advisors were still scheduling meetings. It’s an unfair advantage."
            </h2>
<div className="flex flex-col items-center gap-2">
<span className="font-display font-semibold uppercase tracking-widest text-sm text-[#C8FF00]">Partner, Top-Tier VC</span>
<span className="font-mono text-[10px] text-[#666] uppercase tracking-widest">AUM Supervised: $450M+</span>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#0a0a0a] to-[#050505] py-40 relative z-10 border-t border-white/5 reveal">

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(circle at center, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 70%)'}}></div>
<div className="mx-auto w-[92%] max-w-[40rem] text-center relative z-10">
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tighter mb-6 text-white">Scale Aggressively.</h2>
<p className="text-[#888] text-lg mb-12 font-light">Capacity is strictly limited to ensure alpha generation is not diluted. Request an audit of your current portfolio architecture.</p>
<a className="btn-complex text-[#050505] font-semibold text-lg px-10 py-5 inline-flex items-center gap-3 justify-center w-full sm:w-auto shadow-[0_0_40px_rgba(200,255,0,0.15)] hover:shadow-[0_0_60px_rgba(200,255,0,0.3)] transition-shadow" href="#">
<span className="btn-text uppercase tracking-wide font-display">Apply For Coverage</span>
<iconify-icon className="icon-arrow" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<p className="mt-8 text-[10px] font-mono text-[#666] uppercase tracking-widest">Minimum Deployment: $2.5M USD</p>
</div>
</section>

<footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative z-10">
<div className="mx-auto w-[92%] max-w-[88rem]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
<div className="lg:col-span-2">
<a className="flex items-center gap-3 mb-6 opacity-50 hover:opacity-100 transition-opacity" href="#">
<svg className="w-6 h-6" viewbox="0 0 40 40">
<path d="M4 4L20 36L36 4H24L20 16L16 4H4Z" fill="none" stroke="#f0f0ee" strokeLinejoin="miter" strokeWidth="2.5"></path>
<circle cx="20" cy="24" fill="#f0f0ee" r="2"></circle>
</svg>
<span className="font-display font-semibold tracking-tighter text-lg uppercase text-white">Veltis</span>
</a>
<p className="text-[#666] text-xs max-w-sm mb-8 leading-relaxed">Algorithmic execution for aggressive capital expansion. We remove human bias from wealth building.</p>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase tracking-widest text-[#f0f0ee] mb-6">Infrastructure</h4>
<ul className="space-y-3 text-xs text-[#666]">
<li><a className="hover:text-[#C8FF00] transition-colors" href="#">Neural Network Architecture</a></li>
<li><a className="hover:text-[#C8FF00] transition-colors" href="#">Risk Mitigation Protocols</a></li>
<li><a className="hover:text-[#C8FF00] transition-colors" href="#">Tax Loss Engine</a></li>
<li><a className="hover:text-[#C8FF00] transition-colors" href="#">API Documentation</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-[10px] uppercase tracking-widest text-[#f0f0ee] mb-6">Entity</h4>
<ul className="space-y-3 text-xs text-[#666]">
<li><a className="hover:text-[#C8FF00] transition-colors" href="#">Firm Thesis</a></li>
<li><a className="hover:text-[#C8FF00] transition-colors" href="#">Partner Directory</a></li>
<li><a className="hover:text-[#C8FF00] transition-colors" href="#">Client Terminal</a></li>
<li><a className="hover:text-[#C8FF00] transition-colors" href="#">Contact Node</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[#666] uppercase tracking-widest">
<p>© 2024 Veltis Quantitative Systems. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-[#f0f0ee]" href="#">Privacy Directive</a>
<a className="hover:text-[#f0f0ee]" href="#">Terms of Execution</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
