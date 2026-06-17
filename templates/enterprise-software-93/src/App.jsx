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



    // Reveal animations on scroll
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
        observer.observe(el);
    });

    // Custom toggle logic for Framer style pill toggle
    document.querySelectorAll('.toggle-switch input').forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const groupName = e.target.name;
            document.querySelectorAll(`input[name="${groupName}"]`).forEach(inp => {
                const labelDiv = inp.nextElementSibling;
                if(inp.checked) {
                    labelDiv.classList.replace('text-zinc-400', 'text-black');
                    labelDiv.style.backgroundColor = '#FFFFFF';
                } else {
                    labelDiv.classList.replace('text-black', 'text-zinc-400');
                    labelDiv.style.backgroundColor = 'transparent';
                }
            });
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
      
<div className="noise"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black opacity-60 pointer-events-none -z-10"></div>
<div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none -z-10"></div>

<nav className="fixed -translate-x-1/2 z-50 reveal w-[90%] max-w-2xl top-6 left-1/2">
<div className="pill-nav flex -translate-x-16 bg-[#0A0A0A]/80 border-white/10 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur-2xl scale-100 items-center justify-between">
<div className="flex items-center">
<a className="text-sm font-medium text-white tracking-tighter pt-2 pr-4 pb-2 pl-4" href="#">ATM</a>
<div className="h-4 w-px bg-white/10 mx-2 hidden sm:block"></div>
<div className="hidden sm:flex items-center gap-1">
<a className="hover:text-white transition-colors hover:bg-white/5 text-xs font-medium text-zinc-400 rounded-full pt-2 pr-3 pb-2 pl-3" href="#vision">Vision</a>
<a className="px-3 py-2 text-zinc-400 hover:text-white text-xs font-medium transition-colors rounded-full hover:bg-white/5" href="#expertise">Expertise</a>
<a className="px-3 py-2 text-zinc-400 hover:text-white text-xs font-medium transition-colors rounded-full hover:bg-white/5" href="#architecture">Architecture</a>
</div>
</div>
<a className="px-5 py-2 bg-white text-black hover:bg-zinc-200 transition-colors rounded-full text-xs font-medium flex items-center gap-1.5 group" href="#initiate">
            Initiate
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-20 pr-6 pl-6 relative items-center justify-center">
<div className="z-10 flex flex-col text-center w-full max-w-4xl mr-auto ml-auto relative items-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
<span className="text-xs tracking-wider text-zinc-300 font-medium">Headquartered in Dubai</span>
</div>
<h1 className="reveal delay-100 md:text-7xl lg:text-8xl text-gradient leading-[0.95] text-5xl font-medium tracking-tighter mb-8">
            Architecting the <br/> Digital Horizon
        </h1>
<p className="reveal delay-200 text-sm md:text-base text-zinc-400 font-light max-w-xl mx-auto leading-relaxed mb-10">
            Premium software engineering for global visionaries. We build uncompromising enterprise platforms, Fintech ecosystems, and Web3 infrastructure.
        </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#initiate">
                Commence Build
            </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 active:scale-95 transition-all flex items-center justify-center gap-2" href="#expertise">
                View Architecture
            </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white-[0.02] relative z-10 bg-black">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-white/5">
<div className="reveal flex flex-col items-center">
<div className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-2">150+</div>
<div className="text-xs text-zinc-500 font-medium">Elite Engineers</div>
</div>
<div className="reveal delay-100 flex flex-col items-center">
<div className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-2">$2B+</div>
<div className="text-xs text-zinc-500 font-medium">Volume Processed</div>
</div>
<div className="reveal delay-200 flex flex-col items-center">
<div className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-2">30+</div>
<div className="text-xs text-zinc-500 font-medium">Global Markets</div>
</div>
<div className="reveal delay-300 flex flex-col items-center border-l-0 md:border-l border-white/5">
<div className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-2">99.9%</div>
<div className="text-xs text-zinc-500 font-medium">Reliability</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="vision">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="order-2 lg:order-1 scroll-reveal">
<div className="inline-block border border-white/10 rounded-full px-3 py-1 text-xs tracking-wider text-zinc-400 mb-6 bg-white/[0.02]">Our Foundation</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gradient mb-6 leading-[1.1]">
                    Forged in the Oasis of Modern Innovation.
                </h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                    We draw inspiration from Dubai's relentless ambition. We don't just write code; we architect digital skyscrapers. Our approach mirrors the city's ethos: uncompromising quality, striking aesthetics, and engineering that defies limitations.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-zinc-300" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1 tracking-tight">Bank-Grade Security</h4>
<p className="text-xs text-zinc-500 font-light">ISO 27001 certified infrastructure designed for sovereign data protection.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-zinc-300" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium mb-1 tracking-tight">Unprecedented Velocity</h4>
<p className="text-xs text-zinc-500 font-light">150+ senior engineers working in parallel to halve time-to-market.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative scroll-reveal">

<div className="framer-card rounded-3xl p-2 aspect-[4/5] md:aspect-square relative overflow-hidden group">
<img alt="Dubai Architecture" className="w-full h-full object-cover rounded-[20px] opacity-50 mix-blend-luminosity group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent rounded-[20px]"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
<iconify-icon className="text-amber-400/80 mb-3" icon="solar:global-linear" width="24"></iconify-icon>
<h3 className="text-lg text-white font-medium tracking-tighter mb-1">Aligned with Vision D33</h3>
<p className="text-xs text-zinc-400 font-light">Positioning partners at the forefront of the global digital economy.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-[#050505] border-y border-white/[0.04]" id="expertise">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto scroll-reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gradient mb-4">Domains of Mastery</h2>
<p className="text-sm text-zinc-400 font-light">Specialized task forces combining deep industry knowledge with cutting-edge technical execution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="framer-card rounded-[32px] p-8 md:col-span-2 group relative overflow-hidden scroll-reveal flex flex-col justify-between">
<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full group-hover:bg-amber-500/10 transition-colors"></div>
<div>
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tighter mb-2">PropTech &amp; Smart Real Estate</h3>
<p className="text-sm text-zinc-400 font-light max-w-md">Property management ecosystems, fractional ownership platforms, and smart building integrations tailored for the GCC.</p>
</div>
<div className="flex gap-2 mt-4">
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">IoT Setup</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">Blockchain</span>
</div>
</div>

<div className="framer-card rounded-[32px] p-8 group relative overflow-hidden scroll-reveal flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tighter mb-2">Fintech &amp; Islamic Banking</h3>
<p className="text-sm text-zinc-400 font-light">Sharia-compliant digital banking and seamless gateways.</p>
</div>
</div>

<div className="framer-card rounded-[32px] p-8 group relative overflow-hidden scroll-reveal flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tighter mb-2">Web3 &amp; Assets</h3>
<p className="text-sm text-zinc-400 font-light">Institutional-grade exchanges and tokenization architecture.</p>
</div>
</div>

<div className="framer-card rounded-[32px] p-8 md:col-span-2 group relative overflow-hidden scroll-reveal flex flex-col justify-between">
<div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-500/5 blur-[80px] rounded-full"></div>
<div>
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tighter mb-2">Enterprise Ecosystems</h3>
<p className="text-sm text-zinc-400 font-light max-w-md">Bespoke implementation, optimization, and scaling of core enterprise architectures (Salesforce &amp; Oracle) to drive operational supremacy.</p>
</div>
<div className="flex gap-2 mt-4">
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">Architecture</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300">Migration</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="architecture">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-16 scroll-reveal">The Engineering Stack</h2>
<div className="space-y-4">

<div className="framer-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer scroll-reveal">
<div className="flex items-center gap-6">
<div className="text-xs text-zinc-600 font-medium w-6">01</div>
<h3 className="text-xl text-white font-medium tracking-tight group-hover:text-amber-400/90 transition-colors">UI/UX Spatial Design</h3>
</div>
<p className="text-sm text-zinc-400 font-light max-w-sm md:text-right">Pixel-perfect, conversion-optimized interfaces tailored for luxury aesthetics.</p>
</div>

<div className="framer-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer scroll-reveal">
<div className="flex items-center gap-6">
<div className="text-xs text-zinc-600 font-medium w-6">02</div>
<h3 className="text-xl text-white font-medium tracking-tight group-hover:text-amber-400/90 transition-colors">Full-Stack Development</h3>
</div>
<p className="text-sm text-zinc-400 font-light max-w-sm md:text-right">Scalable microservices, robust APIs, utilizing Next.js and advanced node layers.</p>
</div>

<div className="framer-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer scroll-reveal">
<div className="flex items-center gap-6">
<div className="text-xs text-zinc-600 font-medium w-6">03</div>
<h3 className="text-xl text-white font-medium tracking-tight group-hover:text-amber-400/90 transition-colors">Native Mobile Ecosystems</h3>
</div>
<p className="text-sm text-zinc-400 font-light max-w-sm md:text-right">Fluid iOS and Android applications built for uncompromised native feel.</p>
</div>

<div className="framer-card rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 group cursor-pointer scroll-reveal">
<div className="flex items-center gap-6">
<div className="text-xs text-zinc-600 font-medium w-6">04</div>
<h3 className="text-xl text-white font-medium tracking-tight group-hover:text-amber-400/90 transition-colors">Offshore Pods</h3>
</div>
<p className="text-sm text-zinc-400 font-light max-w-sm md:text-right">Dedicated teams of elite engineers operating as an extension of your CTO office.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-white/[0.04] bg-[#020202]">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 mb-8 font-medium scroll-reveal">Core Technologies</p>
<div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto scroll-reveal">
<span className="px-4 py-2 rounded-full custom-input text-xs text-zinc-300 hover:text-white transition-colors cursor-default">React / Next.js</span>
<span className="px-4 py-2 rounded-full custom-input text-xs text-zinc-300 hover:text-white transition-colors cursor-default">Node.js</span>
<span className="px-4 py-2 rounded-full custom-input text-xs text-zinc-300 hover:text-white transition-colors cursor-default">Python</span>
<span className="px-4 py-2 rounded-full custom-input text-xs text-zinc-300 hover:text-white transition-colors cursor-default">Rust</span>
<span className="px-4 py-2 rounded-full custom-input text-xs text-zinc-300 hover:text-white transition-colors cursor-default">Solidity</span>
<span className="px-4 py-2 rounded-full custom-input text-xs text-zinc-300 hover:text-white transition-colors cursor-default">Swift</span>
<span className="px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500/80 text-xs cursor-default">Salesforce</span>
<span className="px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-500/80 text-xs cursor-default">Oracle</span>
<span className="px-4 py-2 rounded-full custom-input text-xs text-zinc-300 hover:text-white transition-colors cursor-default">AWS</span>
<span className="px-4 py-2 rounded-full custom-input text-xs text-zinc-300 hover:text-white transition-colors cursor-default">Kubernetes</span>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden" id="initiate">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[50vh] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-2xl mx-auto px-6 scroll-reveal">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">
                Initiate Partnership
            </h2>
<p className="text-sm text-zinc-400 font-light">Strictly for serious inquiries. Our architects respond within 24 hours.</p>
</div>
<form className="framer-card rounded-[32px] p-8 md:p-10 space-y-8">

<div>
<label className="text-xs text-zinc-500 mb-3 block font-medium">Entity Type</label>
<div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-white/[0.02] border border-white/5">
<label className="relative cursor-pointer toggle-switch">
<input checked="" className="sr-only" name="entity" type="radio"/>
<div className="text-center py-2.5 rounded-xl text-xs font-medium text-zinc-400 transition-all">
                            Enterprise
                        </div>
</label>
<label className="relative cursor-pointer toggle-switch">
<input className="sr-only" name="entity" type="radio"/>
<div className="text-center py-2.5 rounded-xl text-xs font-medium text-zinc-400 transition-all">
                            Startup
                        </div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<input className="w-full custom-input py-3.5 px-4 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none font-light" placeholder="Principal Name" type="text"/>
</div>
<div>
<input className="w-full custom-input py-3.5 px-4 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none font-light" placeholder="Corporate Email" type="email"/>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-3">
<label className="text-xs text-zinc-500 font-medium">Capital Allocation</label>
<span className="text-xs font-medium text-white bg-white/10 px-2 py-1 rounded-md">$100k - $250k</span>
</div>
<div className="relative w-full h-1.5 bg-white/10 rounded-full cursor-pointer mt-2">
<div className="absolute left-0 top-0 h-full bg-white rounded-full" style={{width: '45%'}}></div>
<div className="absolute left-[45%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
</div>
</div>
<div>
<textarea className="w-full custom-input py-3.5 px-4 rounded-xl text-sm text-white placeholder:text-zinc-600 focus:outline-none resize-none font-light" placeholder="Outline your vision..." rows="4"></textarea>
</div>

<button className="w-full bg-white text-black py-4 rounded-2xl text-sm font-medium hover:scale-[0.98] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_-10px_rgba(255,255,255,0.4)]" type="button">
                Submit Dossier
            </button>
</form>
</div>
</section>

<footer className="border-t border-white/[0.04] bg-[#020202] pt-20 pb-10 relative z-10">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<a className="flex items-center gap-1 mb-2" href="#">
<span className="text-xl font-medium tracking-tighter text-white">ATM</span>
</a>
<p className="text-sm text-zinc-500 font-light max-w-xs">
                    Visionary software architecture engineered in Dubai for the global elite.
                </p>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:github-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600 font-light">© 2025 ATM Labs.</p>
<div className="flex items-center gap-6 text-xs text-zinc-600 font-light">
<a className="hover:text-white transition-colors" href="#">Privacy Paradigm</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
