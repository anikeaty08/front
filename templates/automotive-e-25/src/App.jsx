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



    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none select-none opacity-[0.04]">
<div className="absolute -top-10 -left-10 text-zinc-900 leading-none" style={{fontFamily: '\'Archivo\', sans-serif', fontSize: '18vw', fontWeight: '800'}}>OEM<br/>YADAK<br/>PARTS<br/>ENGINE</div>
</div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-5 pb-3 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center">
<i className="h-5 w-5 text-lime-400" data-lucide="cog"></i>
</div>
<span className="text-base font-semibold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>OEM YADAK</span>
</div>
<div className="flex items-center gap-8 text-sm">
<div>
<p className="text-xs uppercase tracking-widest text-zinc-500">Email</p>
<p className="font-medium">sales@oemyadak.com</p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-zinc-500">Support</p>
<p className="font-medium">+98 21 0000 0000</p>
</div>
</div>
</div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6">
<div className="rounded-[2rem] bg-zinc-950 overflow-hidden shadow-2xl">

<nav className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10">
<div className="flex items-center gap-2.5">
<div className="h-9 w-9 rounded-lg bg-lime-400 flex items-center justify-center">
<i className="h-5 w-5 text-zinc-950" data-lucide="cog"></i>
</div>
<span className="text-white font-semibold tracking-tight text-base" style={{fontFamily: '\'Archivo\', sans-serif'}}>OEM YADAK</span>
</div>
<div className="hidden lg:flex items-center gap-6 text-sm text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#">Engine Parts</a>
<a className="hover:text-white transition-colors duration-200" href="#">Gearbox</a>
<a className="hover:text-white transition-colors duration-200" href="#">Timing Kits</a>
<a className="hover:text-white transition-colors duration-200" href="#">Bearings</a>
<a className="hover:text-white transition-colors duration-200" href="#">Brands</a>
<a className="hover:text-white transition-colors duration-200" href="#">Services</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer">
            EN <i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<button className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-zinc-300 transition-colors duration-200 cursor-pointer">
<i className="h-4 w-4" data-lucide="user"></i>
</button>
<button className="relative h-9 w-9 rounded-full bg-lime-400 hover:bg-lime-300 flex items-center justify-center text-zinc-950 transition-colors duration-200 cursor-pointer">
<i className="h-4 w-4" data-lucide="shopping-cart"></i>
<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-white text-zinc-900 text-xs font-semibold flex items-center justify-center">3</span>
</button>
</div>
</nav>

<div className="relative px-5 sm:px-8 pt-12 pb-10 text-center">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950"></div>
<div className="absolute inset-0 opacity-20" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(163,230,53,0.35), transparent 60%)'}}></div>
<div className="relative">
<p className="text-sm uppercase tracking-[0.4em] text-lime-400 font-medium mb-3">Precision Engineered</p>
<h1 className="text-white tracking-tight leading-[0.9]" style={{fontFamily: '\'Archivo\', sans-serif'}}>
<span className="block text-4xl sm:text-6xl lg:text-7xl font-extrabold">ENGINE &amp;</span>
<span className="block text-5xl sm:text-7xl lg:text-8xl font-extrabold text-lime-400">GEARBOX</span>
</h1>
<p className="mt-4 text-base text-zinc-400 max-w-xl mx-auto">
            900+ specialized, knowledge-based parts. Standardized imagery, technical specs and instant availability — all in one place.
          </p>

<div className="mt-8 max-w-2xl mx-auto">
<div className="flex items-stretch rounded-full bg-white p-1.5 shadow-xl">
<button className="hidden sm:flex items-center gap-2 px-5 text-sm font-medium text-zinc-700 border-r border-zinc-200 cursor-pointer hover:text-zinc-900 transition-colors duration-200">
                Engine Parts <i className="h-4 w-4 text-zinc-400" data-lucide="chevron-down"></i>
</button>
<input className="flex-1 px-4 text-sm text-zinc-900 placeholder-zinc-400 bg-transparent focus:outline-none min-w-0" placeholder="Search part number, brand or engine code…" type="text"/>
<button className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-zinc-950 hover:bg-zinc-800 flex items-center justify-center text-lime-400 transition-colors duration-200 cursor-pointer">
<i className="h-4 w-4" data-lucide="search"></i>
</button>
</div>
<p className="mt-3 text-xs text-zinc-500">Popular: <span className="text-zinc-300">Timing Kit EF7 · Clutch AT6 · Crankshaft Bearings · CVT Belt</span></p>
</div>
</div>
</div>

<div className="relative border-t border-white/10 px-5 sm:px-8 py-5">
<div className="flex flex-col lg:flex-row items-center gap-6">
<div className="grid grid-cols-4 sm:grid-cols-8 gap-3 flex-1 w-full">
<a className="group flex flex-col items-center gap-2 cursor-pointer" href="#">
<div className="h-12 w-12 rounded-full border border-white/10 group-hover:border-lime-400/60 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-200"><i className="h-5 w-5 text-zinc-300" data-lucide="cog"></i></div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">Engine</span>
</a>
<a className="group flex flex-col items-center gap-2 cursor-pointer" href="#">
<div className="h-12 w-12 rounded-full border border-white/10 group-hover:border-lime-400/60 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-200"><i className="h-5 w-5 text-zinc-300" data-lucide="settings-2"></i></div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">Gearbox</span>
</a>
<a className="group flex flex-col items-center gap-2 cursor-pointer" href="#">
<div className="h-12 w-12 rounded-full border border-white/10 group-hover:border-lime-400/60 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-200"><i className="h-5 w-5 text-zinc-300" data-lucide="timer"></i></div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">Timing</span>
</a>
<a className="group flex flex-col items-center gap-2 cursor-pointer" href="#">
<div className="h-12 w-12 rounded-full border border-white/10 group-hover:border-lime-400/60 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-200"><i className="h-5 w-5 text-zinc-300" data-lucide="circle-dot"></i></div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">Bearings</span>
</a>
<a className="group flex flex-col items-center gap-2 cursor-pointer" href="#">
<div className="h-12 w-12 rounded-full border border-white/10 group-hover:border-lime-400/60 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-200"><i className="h-5 w-5 text-zinc-300" data-lucide="disc"></i></div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">Clutch</span>
</a>
<a className="group flex flex-col items-center gap-2 cursor-pointer" href="#">
<div className="h-12 w-12 rounded-full border border-white/10 group-hover:border-lime-400/60 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-200"><i className="h-5 w-5 text-zinc-300" data-lucide="droplets"></i></div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">Gaskets</span>
</a>
<a className="group flex flex-col items-center gap-2 cursor-pointer" href="#">
<div className="h-12 w-12 rounded-full border border-white/10 group-hover:border-lime-400/60 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-200"><i className="h-5 w-5 text-zinc-300" data-lucide="fuel"></i></div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">Fuel</span>
</a>
<a className="group flex flex-col items-center gap-2 cursor-pointer" href="#">
<div className="h-12 w-12 rounded-full border border-white/10 group-hover:border-lime-400/60 group-hover:bg-lime-400/10 flex items-center justify-center transition-all duration-200"><i className="h-5 w-5 text-zinc-300" data-lucide="wrench"></i></div>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors duration-200">Tools</span>
</a>
</div>
<a className="group flex items-center gap-4 rounded-2xl bg-lime-400 hover:bg-lime-300 px-5 py-3.5 transition-colors duration-200 cursor-pointer shrink-0" href="#">
<div>
<p className="text-zinc-950 font-bold text-xl tracking-tight leading-none" style={{fontFamily: '\'Archivo\', sans-serif'}}>900+ NEW</p>
<p className="text-zinc-800 text-xs mt-1">Specialized parts just landed in catalog</p>
</div>
<div className="h-9 w-9 rounded-full bg-zinc-950 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
<i className="h-4 w-4 text-lime-400" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>
</div>
</div>
</div>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-14 text-center">
<p className="text-sm uppercase tracking-[0.5em] text-zinc-500 mb-2">Sourcing</p>
<h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>PREMIUM BRANDS</h2>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
<a className="group cursor-pointer" href="#">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 flex items-center justify-center">
<i className="h-20 w-20 text-zinc-700 group-hover:text-lime-400/70 group-hover:scale-110 transition-all duration-300" data-lucide="cog"></i>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
</div>
<p className="mt-3 font-semibold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>SKF</p>
</a>
<a className="group cursor-pointer" href="#">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-lime-900 via-zinc-900 to-zinc-950 flex items-center justify-center">
<i className="h-20 w-20 text-zinc-700 group-hover:text-lime-400/70 group-hover:scale-110 transition-all duration-300" data-lucide="circle-dot"></i>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
</div>
<p className="mt-3 font-semibold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>MAHLE</p>
</a>
<a className="group cursor-pointer" href="#">
<div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-700 via-zinc-900 to-zinc-950 flex items-center justify-center">
<i className="h-20 w-20 text-zinc-600 group-hover:text-lime-400/70 group-hover:scale-110 transition-all duration-300" data-lucide="settings-2"></i>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
</div>
<p className="mt-3 font-semibold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>ZF · LUK</p>
</a>
</div>
</section>

<div className="relative -rotate-1 my-6">
<div className="bg-zinc-950 py-3 overflow-hidden">
<div className="flex whitespace-nowrap w-max" style={{animation: 'marquee 30s linear infinite'}}>
<span className="text-white text-xl font-bold tracking-tight px-4" style={{fontFamily: '\'Archivo\', sans-serif'}}>SKF  |  MAHLE  |  INA  |  ZF  |  VALEO  |  LUK  |  GETRAG  |  BOSCH  |  </span>
<span className="text-white text-xl font-bold tracking-tight px-4" style={{fontFamily: '\'Archivo\', sans-serif'}}>SKF  |  MAHLE  |  INA  |  ZF  |  VALEO  |  LUK  |  GETRAG  |  BOSCH  |  </span>
</div>
</div>
<div className="bg-lime-400 py-2.5 overflow-hidden rotate-1 -mt-1">
<div className="flex whitespace-nowrap w-max" style={{animation: 'marquee 24s linear infinite reverse'}}>
<span className="text-zinc-950 text-base font-bold tracking-tight px-4" style={{fontFamily: '\'Archivo\', sans-serif'}}>ENGINE  |  GEARBOX  |  TIMING  |  CLUTCH  |  BEARINGS  |  GASKETS  |  CVT  |  OEM QUALITY  |  </span>
<span className="text-zinc-950 text-base font-bold tracking-tight px-4" style={{fontFamily: '\'Archivo\', sans-serif'}}>ENGINE  |  GEARBOX  |  TIMING  |  CLUTCH  |  BEARINGS  |  GASKETS  |  CVT  |  OEM QUALITY  |  </span>
</div>
</div>
</div>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16">
<div className="flex items-end justify-between">
<div>
<p className="text-sm uppercase tracking-[0.5em] text-zinc-500 mb-1">Trending</p>
<h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>ENGINE PARTS</h2>
<a className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors duration-200" href="#">All Store Products <i className="h-4 w-4" data-lucide="arrow-up-right"></i></a>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="h-10 w-10 rounded-full border border-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 flex items-center justify-center transition-all duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="arrow-left"></i></button>
<button className="h-10 w-10 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group bg-zinc-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold bg-red-500 text-white rounded-full px-2.5 py-1">SAVE 15%</span>
<button className="text-zinc-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="heart"></i></button>
</div>
<div className="h-40 flex items-center justify-center"><i className="h-24 w-24 text-zinc-400 group-hover:text-zinc-700 group-hover:rotate-12 transition-all duration-300" data-lucide="cog"></i></div>
<p className="text-center text-sm font-semibold uppercase tracking-tight">Timing Chain Kit<br/>EF7 / TU5</p>
<p className="mt-2 text-center text-xl font-bold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>4,850,000 <span className="text-xs font-medium text-zinc-500">IRT</span></p>
<div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-400"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> In Stock</div>
</div>

<div className="group bg-zinc-950 rounded-2xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute -top-10 -right-10 h-32 w-32 bg-lime-400/30 blur-3xl rounded-full"></div>
<div className="flex items-center justify-between relative">
<span className="text-xs font-semibold bg-lime-400 text-zinc-950 rounded-full px-2.5 py-1">FEATURED</span>
<button className="text-zinc-500 hover:text-red-400 transition-colors duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="heart"></i></button>
</div>
<div className="h-40 flex items-center justify-center relative"><i className="h-24 w-24 text-lime-400 group-hover:scale-110 transition-transform duration-300" data-lucide="circle-dot"></i></div>
<p className="text-center text-sm font-semibold uppercase tracking-tight text-white">Crankshaft Bearing Set<br/>EC5 Standard</p>
<p className="mt-2 text-center text-xl font-bold tracking-tight text-lime-400" style={{fontFamily: '\'Archivo\', sans-serif'}}>3,200,000 <span className="text-xs font-medium text-zinc-400">IRT</span></p>
<div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-400 relative"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> In Stock</div>
</div>

<div className="group bg-zinc-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold bg-zinc-200 text-zinc-600 rounded-full px-2.5 py-1">NEW</span>
<button className="text-zinc-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="heart"></i></button>
</div>
<div className="h-40 flex items-center justify-center"><i className="h-24 w-24 text-zinc-400 group-hover:text-zinc-700 transition-colors duration-300" data-lucide="layers"></i></div>
<p className="text-center text-sm font-semibold uppercase tracking-tight">Full Gasket Set<br/>XU7 Plus</p>
<p className="mt-2 text-center text-xl font-bold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>2,740,000 <span className="text-xs font-medium text-zinc-500">IRT</span></p>
<div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-400"><span className="h-2 w-2 rounded-full bg-emerald-500"></span> In Stock</div>
</div>

<div className="group bg-zinc-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold bg-zinc-200 text-zinc-600 rounded-full px-2.5 py-1">OEM</span>
<button className="text-zinc-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="heart"></i></button>
</div>
<div className="h-40 flex items-center justify-center"><i className="h-24 w-24 text-zinc-400 group-hover:text-zinc-700 transition-colors duration-300" data-lucide="gauge"></i></div>
<p className="text-center text-sm font-semibold uppercase tracking-tight">Oil Pump Assembly<br/>K4M Renault</p>
<p className="mt-2 text-center text-xl font-bold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>5,980,000 <span className="text-xs font-medium text-zinc-500">IRT</span></p>
<div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-zinc-400"><span className="h-2 w-2 rounded-full bg-amber-500"></span> Limited Stock</div>
</div>
</div>
</section>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20">
<div className="flex items-end justify-between">
<div>
<p className="text-sm uppercase tracking-[0.5em] text-zinc-500 mb-1">Trending</p>
<h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>GEARBOX</h2>
<a className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors duration-200" href="#">All Store Products <i className="h-4 w-4" data-lucide="arrow-up-right"></i></a>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="h-10 w-10 rounded-full border border-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 flex items-center justify-center transition-all duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="arrow-left"></i></button>
<button className="h-10 w-10 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="group bg-zinc-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="h-40 flex items-center justify-center"><i className="h-24 w-24 text-zinc-400 group-hover:text-zinc-700 group-hover:rotate-12 transition-all duration-300" data-lucide="settings-2"></i></div>
<p className="text-center text-sm font-semibold uppercase tracking-tight">Clutch Kit Complete<br/>AT6 Automatic</p>
<p className="mt-2 text-center text-xl font-bold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>7,420,000 <span className="text-xs font-medium text-zinc-500">IRT</span></p>
<div className="mt-3 flex items-center justify-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-zinc-900"></span><span className="h-2.5 w-2.5 rounded-full bg-lime-500"></span><span className="h-2.5 w-2.5 rounded-full bg-zinc-400"></span></div>
</div>
<div className="group bg-zinc-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="h-40 flex items-center justify-center"><i className="h-24 w-24 text-zinc-400 group-hover:text-zinc-700 transition-colors duration-300" data-lucide="disc"></i></div>
<p className="text-center text-sm font-semibold uppercase tracking-tight">CVT Belt &amp; Pulley Set<br/>JF015E</p>
<p className="mt-2 text-center text-xl font-bold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>9,150,000 <span className="text-xs font-medium text-zinc-500">IRT</span></p>
<div className="mt-3 flex items-center justify-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-zinc-900"></span><span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span></div>
</div>
<div className="group bg-zinc-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative">
<span className="absolute top-5 left-5 text-xs font-semibold bg-red-500 text-white rounded-full px-2.5 py-1">SAVE 20%</span>
<div className="h-40 flex items-center justify-center"><i className="h-24 w-24 text-zinc-400 group-hover:text-zinc-700 transition-colors duration-300" data-lucide="git-merge"></i></div>
<p className="text-center text-sm font-semibold uppercase tracking-tight">Synchronizer Ring Set<br/>BE3 5-Speed</p>
<p className="mt-2 text-center text-xl font-bold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>1,890,000 <span className="text-xs font-medium text-zinc-500">IRT</span></p>
<div className="mt-3 flex items-center justify-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-zinc-900"></span><span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span></div>
</div>
<div className="group bg-zinc-100 rounded-2xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="h-40 flex items-center justify-center"><i className="h-24 w-24 text-zinc-400 group-hover:text-zinc-700 transition-colors duration-300" data-lucide="component"></i></div>
<p className="text-center text-sm font-semibold uppercase tracking-tight">Valve Body Rebuilt<br/>DP0 / AL4</p>
<p className="mt-2 text-center text-xl font-bold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>12,300,000 <span className="text-xs font-medium text-zinc-500">IRT</span></p>
<div className="mt-3 flex items-center justify-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-zinc-900"></span><span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span></div>
</div>
</div>
</section>

<div className="relative rotate-1 mt-20">
<div className="bg-lime-400 py-3 overflow-hidden">
<div className="flex whitespace-nowrap w-max" style={{animation: 'marquee 20s linear infinite'}}>
<span className="text-zinc-950 text-2xl font-extrabold tracking-tight px-4" style={{fontFamily: '\'Archivo\', sans-serif'}}>900+ NEW PARTS  |  900+ NEW PARTS  |  900+ NEW PARTS  |  900+ NEW PARTS  |  </span>
<span className="text-zinc-950 text-2xl font-extrabold tracking-tight px-4" style={{fontFamily: '\'Archivo\', sans-serif'}}>900+ NEW PARTS  |  900+ NEW PARTS  |  900+ NEW PARTS  |  900+ NEW PARTS  |  </span>
</div>
</div>
<div className="bg-zinc-950 py-3 overflow-hidden -rotate-1 -mt-1">
<div className="flex whitespace-nowrap w-max" style={{animation: 'marquee 26s linear infinite reverse'}}>
<span className="text-white text-2xl font-extrabold tracking-tight px-4" style={{fontFamily: '\'Archivo\', sans-serif'}}>OEM GRADE QUALITY  |  OEM GRADE QUALITY  |  OEM GRADE QUALITY  |  </span>
<span className="text-white text-2xl font-extrabold tracking-tight px-4" style={{fontFamily: '\'Archivo\', sans-serif'}}>OEM GRADE QUALITY  |  OEM GRADE QUALITY  |  OEM GRADE QUALITY  |  </span>
</div>
</div>
</div>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20">
<div className="flex items-end justify-between">
<div>
<p className="text-sm uppercase tracking-[0.5em] text-zinc-500 mb-1">Feeling</p>
<h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>THE TRUST</h2>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="h-10 w-10 rounded-full border border-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 flex items-center justify-center transition-all duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="arrow-left"></i></button>
<button className="h-10 w-10 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors duration-200 cursor-pointer"><i className="h-4 w-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
<div className="bg-white rounded-2xl p-7 shadow-sm">
<div className="flex gap-1 text-amber-400">
<i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-4 text-base text-zinc-600 leading-relaxed">Found the exact synchronizer set for a rare gearbox in under a minute. The category structure and search are unlike anything else in this market.</p>
<div className="mt-5 flex items-center gap-3 pt-5 border-t border-zinc-100">
<div className="h-10 w-10 rounded-full bg-zinc-900 text-lime-400 flex items-center justify-center text-sm font-semibold">RM</div>
<div>
<p className="text-sm font-semibold">Reza Mohammadi</p>
<p className="text-xs text-zinc-500 flex items-center gap-1"><i className="h-3.5 w-3.5 text-emerald-500" data-lucide="badge-check"></i> Verified Workshop</p>
</div>
</div>
</div>
<div className="bg-zinc-950 rounded-2xl p-7 shadow-xl lg:-translate-y-3">
<div className="flex gap-1 text-lime-400">
<i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="mt-4 text-base text-zinc-300 leading-relaxed">Everyone at OEM Yadak was super helpful. I ordered a complete timing kit and crankshaft bearings — technical specs were exact, packaging was perfect, and the team double-checked compatibility with my engine code before shipping. Fast and reliable.</p>
<div className="mt-5 flex items-center gap-3 pt-5 border-t border-white/10">
<div className="h-10 w-10 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center text-sm font-semibold">AK</div>
<div>
<p className="text-sm font-semibold text-white">Amir Karimi</p>
<p className="text-xs text-zinc-400 flex items-center gap-1"><i className="h-3.5 w-3.5 text-lime-400" data-lucide="badge-check"></i> Verified Customer</p>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-7 shadow-sm">
<div className="flex gap-1 text-amber-400">
<i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4 fill-current" data-lucide="star"></i><i className="h-4 w-4" data-lucide="star"></i>
</div>
<p className="mt-4 text-base text-zinc-600 leading-relaxed">We order valve bodies and CVT components monthly. Quality is consistent, and the new background-removed product photos make identification effortless.</p>
<div className="mt-5 flex items-center gap-3 pt-5 border-t border-zinc-100">
<div className="h-10 w-10 rounded-full bg-zinc-900 text-lime-400 flex items-center justify-center text-sm font-semibold">SN</div>
<div>
<p className="text-sm font-semibold">Sara Nazari</p>
<p className="text-xs text-zinc-500 flex items-center gap-1"><i className="h-3.5 w-3.5 text-emerald-500" data-lucide="badge-check"></i> Fleet Manager</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
<h2 className="text-5xl sm:text-7xl font-extrabold tracking-tight" style={{fontFamily: '\'Archivo\', sans-serif'}}>Catalog</h2>
<a className="group inline-flex items-center gap-3 text-sm font-medium cursor-pointer" href="#">
        Go To Catalog
        <span className="h-10 w-10 rounded-full bg-zinc-950 flex items-center justify-center text-lime-400 group-hover:rotate-45 transition-transform duration-300"><i className="h-4 w-4" data-lucide="arrow-up-right"></i></span>
</a>
</div>
<div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center cursor-pointer overflow-hidden">
<i className="h-16 w-16 text-zinc-600 group-hover:text-lime-400 group-hover:scale-125 group-hover:rotate-45 transition-all duration-500" data-lucide="cog"></i>
</div>
<div className="group h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-lime-700 to-zinc-950 flex items-center justify-center cursor-pointer overflow-hidden lg:translate-y-6">
<i className="h-16 w-16 text-lime-200/60 group-hover:text-white group-hover:scale-125 transition-all duration-500" data-lucide="settings-2"></i>
</div>
<div className="group h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center cursor-pointer overflow-hidden">
<i className="h-16 w-16 text-zinc-500 group-hover:text-lime-400 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500" data-lucide="disc"></i>
</div>
<div className="group h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center cursor-pointer overflow-hidden lg:translate-y-6">
<i className="h-16 w-16 text-zinc-600 group-hover:text-lime-400 group-hover:scale-125 transition-all duration-500" data-lucide="gauge"></i>
</div>
</div>
</section>

<div className="relative mt-24 -rotate-1">
<div className="bg-zinc-950 py-8 text-center px-4">
<p className="text-zinc-400 text-sm uppercase tracking-[0.4em]">We're more than just a <span className="text-white font-semibold">parts store</span></p>
<p className="text-lime-400 text-4xl sm:text-6xl font-extrabold tracking-tight mt-2" style={{fontFamily: '\'Archivo\', sans-serif'}}>WE'RE SPECIALISTS</p>
</div>
</div>

<footer className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-8">
<div className="rounded-[2rem] bg-zinc-950 p-8 sm:p-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
<div>
<div className="flex items-center gap-2.5">
<div className="h-10 w-10 rounded-xl bg-lime-400 flex items-center justify-center"><i className="h-5 w-5 text-zinc-950" data-lucide="cog"></i></div>
<span className="text-white font-semibold tracking-tight text-lg" style={{fontFamily: '\'Archivo\', sans-serif'}}>OEM YADAK</span>
</div>
<p className="mt-5 text-base text-zinc-400 leading-relaxed">Specialists in knowledge-based engine and gearbox parts. Precision sourcing, technical accuracy, and a catalog built for professionals.</p>
<div className="mt-6 flex gap-2.5">
<a className="h-9 w-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-zinc-400 flex items-center justify-center transition-colors duration-200 cursor-pointer" href="#"><i className="h-4 w-4" data-lucide="instagram"></i></a>
<a className="h-9 w-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-zinc-400 flex items-center justify-center transition-colors duration-200 cursor-pointer" href="#"><i className="h-4 w-4" data-lucide="linkedin"></i></a>
<a className="h-9 w-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-zinc-400 flex items-center justify-center transition-colors duration-200 cursor-pointer" href="#"><i className="h-4 w-4" data-lucide="send"></i></a>
<a className="h-9 w-9 rounded-full bg-white/5 hover:bg-lime-400 hover:text-zinc-950 text-zinc-400 flex items-center justify-center transition-colors duration-200 cursor-pointer" href="#"><i className="h-4 w-4" data-lucide="phone"></i></a>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium">Ordering</p>
<ul className="mt-5 space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Delivery</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">My Account</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Request a Part</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Compatibility Check</a></li>
</ul>
</div>
<div>
<p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium">OEM Yadak</p>
<ul className="mt-5 space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">About Us</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Brands</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Services</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-medium">Support</p>
<ul className="mt-5 space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">FAQ</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Warranty &amp; Returns</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Privacy Policy</a></li>
<li><a className="hover:text-lime-400 transition-colors duration-200" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500">© 2026 OEM Yadak. All rights reserved.</p>
<a className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-lime-400 transition-colors duration-200 cursor-pointer" href="#">
          Back To Top <i className="h-3.5 w-3.5" data-lucide="arrow-up"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
