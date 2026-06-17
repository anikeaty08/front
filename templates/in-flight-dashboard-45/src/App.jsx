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



        lucide.createIcons();
    
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
      

<header className="w-full h-16 px-6 flex items-center justify-between border-b border-white/5 z-20 bg-zinc-950/50 backdrop-blur-md">
<div className="flex items-center gap-6">
<div className="text-xl tracking-tighter font-medium text-white">AERO</div>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-3 text-sm font-light">
<span className="text-zinc-400">FLT</span>
<span className="text-white tracking-wide">NX-204</span>
</div>
</div>
<div className="flex items-center gap-8">
<div className="flex flex-col items-center">
<span className="text-[10px] uppercase tracking-wider text-zinc-500">Local Time</span>
<span className="text-sm font-medium text-zinc-200">14:42</span>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] uppercase tracking-wider text-zinc-500">Dest Time</span>
<span className="text-sm font-medium text-zinc-200">02:42</span>
</div>
<div className="h-8 w-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<i className="text-indigo-400 h-4 w-4" data-lucide="wifi"></i>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full glass-panel">
<span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs text-zinc-300 font-medium">Seat 4A</span>
</div>
</div>
</header>

<main className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-y-auto">

<section className="lg:col-span-7 flex flex-col gap-6">

<div className="relative w-full h-80 rounded-2xl overflow-hidden glass-panel flex flex-col group transition-all duration-500">
<div className="absolute inset-0 map-grid opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none"></div>

<svg className="absolute inset-0 w-full h-full stroke-indigo-500/30" preserveaspectratio="none">
<path d="M -50,250 Q 400,100 900,150 T 1200,200" fill="none" stroke-dasharray="8 8" strokeWidth="2"></path>

<path className="drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]" d="M -50,250 Q 400,100 600,132" fill="none" stroke="#6366f1" strokeWidth="2"></path>
</svg>

<div className="absolute left-[58%] top-[38%] transform -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<i className="text-white fill-white h-6 w-6 rotate-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" data-lucide="plane"></i>
<div className="absolute -inset-4 bg-indigo-500/20 blur-xl rounded-full"></div>
</div>
</div>

<div className="absolute left-10 bottom-10">
<div className="text-[10px] tracking-widest text-zinc-500 uppercase mb-1">Origin</div>
<div className="text-2xl font-light text-white tracking-tight">NYC</div>
<div className="text-xs text-zinc-400 font-light">New York</div>
</div>
<div className="absolute right-10 top-10 text-right">
<div className="text-[10px] tracking-widest text-zinc-500 uppercase mb-1">Destination</div>
<div className="text-2xl font-light text-white tracking-tight">LHR</div>
<div className="text-xs text-zinc-400 font-light">London</div>
</div>

<div className="absolute top-6 left-1/2 -translate-x-1/2 glass-panel px-4 py-1.5 rounded-full flex items-center gap-3">
<span className="text-xs text-zinc-400">Time Remaining</span>
<span className="text-xs text-white font-medium">3h 45m</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-28 glass-panel-hover transition-colors cursor-default">
<div className="flex justify-between items-start">
<i className="text-zinc-500 h-5 w-5" data-lucide="gauge"></i>
<span className="text-[10px] uppercase text-zinc-600 font-semibold tracking-wider">Speed</span>
</div>
<div>
<span className="text-2xl font-light text-white tracking-tight">584</span>
<span className="text-xs text-zinc-500 ml-1">mph</span>
</div>
</div>
<div className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-28 glass-panel-hover transition-colors cursor-default">
<div className="flex justify-between items-start">
<i className="text-zinc-500 h-5 w-5" data-lucide="mountain"></i>
<span className="text-[10px] uppercase text-zinc-600 font-semibold tracking-wider">Alt</span>
</div>
<div>
<span className="text-2xl font-light text-white tracking-tight">36,000</span>
<span className="text-xs text-zinc-500 ml-1">ft</span>
</div>
</div>
<div className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-28 glass-panel-hover transition-colors cursor-default">
<div className="flex justify-between items-start">
<i className="text-zinc-500 h-5 w-5" data-lucide="thermometer"></i>
<span className="text-[10px] uppercase text-zinc-600 font-semibold tracking-wider">Temp</span>
</div>
<div>
<span className="text-2xl font-light text-white tracking-tight">-48</span>
<span className="text-xs text-zinc-500 ml-1">°F</span>
</div>
</div>
</div>
</section>

<section className="lg:col-span-5 flex flex-col gap-6">

<div className="glass-panel p-6 rounded-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Cabin Control</h3>
<div className="h-2 w-2 rounded-full bg-indigo-500"></div>
</div>

<div className="mb-6 group">
<div className="flex justify-between text-xs text-zinc-400 mb-2">
<span>Window Dimmer</span>
<span>60%</span>
</div>
<div className="relative w-full h-10 bg-zinc-900 rounded-lg flex items-center px-1 overflow-hidden border border-zinc-800">

<div className="absolute left-0 top-0 bottom-0 bg-indigo-500/20 w-[60%] border-r border-indigo-500/30"></div>
<input className="relative z-10 w-full h-full opacity-0 cursor-pointer" max="100" min="0" type="range" value="60"/>

<div className="absolute pointer-events-none h-6 w-1 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)] left-[60%] -translate-x-1/2"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">

<label className="cursor-pointer relative flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-zinc-400" data-lucide="lightbulb"></i>
<span className="text-xs text-zinc-300">Read Light</span>
</div>
<input className="peer sr-only" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[14px] after:right-[14px] after:bg-zinc-500 after:border-zinc-500 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600 peer-checked:after:bg-white peer-checked:after:right-[14px] peer-checked:after:translate-x-[0px] relative">
<div className="absolute top-[2px] left-[2px] h-4 w-4 bg-zinc-500 rounded-full transition-transform peer-checked:translate-x-4 peer-checked:bg-white"></div>
</div>
</label>

<button className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-red-500/10 hover:border-red-500/30 group transition-all">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-zinc-400 group-hover:text-red-400 transition-colors" data-lucide="bell"></i>
<span className="text-xs text-zinc-300 group-hover:text-red-200">Call Crew</span>
</div>
</button>
</div>
</div>

<div className="flex-1 glass-panel p-6 rounded-2xl flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-white">Continue Watching</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">View All</button>
</div>
<div className="relative flex-1 rounded-xl overflow-hidden group cursor-pointer border border-zinc-800">
<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">

<div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900 opacity-60"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
<i className="h-5 w-5 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
<div className="text-lg font-medium text-white tracking-tight">Interstellar</div>
<div className="text-xs text-zinc-400 mt-1 flex gap-2">
<span>2h 14m left</span>
<span className="text-zinc-600">•</span>
<span>Sci-Fi</span>
</div>

<div className="w-full h-1 bg-zinc-700 rounded-full mt-3 overflow-hidden">
<div className="h-full bg-indigo-500 w-[35%]"></div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="h-20 bg-zinc-900/50 rounded-lg border border-zinc-800 flex items-center p-3 gap-3 hover:bg-zinc-800/50 transition-colors cursor-pointer">
<div className="h-10 w-10 bg-zinc-800 rounded flex items-center justify-center">
<i className="h-5 w-5 text-zinc-500" data-lucide="music"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Lofi Beats</span>
<span className="text-[10px] text-zinc-500">Playlist</span>
</div>
</div>
<div className="h-20 bg-zinc-900/50 rounded-lg border border-zinc-800 flex items-center p-3 gap-3 hover:bg-zinc-800/50 transition-colors cursor-pointer">
<div className="h-10 w-10 bg-zinc-800 rounded flex items-center justify-center">
<i className="h-5 w-5 text-zinc-500" data-lucide="gamepad-2"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Arcade</span>
<span className="text-[10px] text-zinc-500">12 Games</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="h-20 border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl px-12 flex items-center justify-center relative z-20">
<nav className="flex items-center gap-12">
<button className="flex flex-col items-center gap-1.5 group">
<i className="h-6 w-6 text-white transition-transform group-hover:-translate-y-1" data-lucide="home"></i>
<span className="text-[10px] uppercase font-medium text-white tracking-wide opacity-100">Home</span>
</button>
<button className="flex flex-col items-center gap-1.5 group">
<i className="h-6 w-6 text-zinc-500 transition-colors group-hover:text-zinc-300 transition-transform group-hover:-translate-y-1" data-lucide="clapperboard"></i>
<span className="text-[10px] uppercase font-medium text-zinc-500 tracking-wide group-hover:text-zinc-300">Movies</span>
</button>
<button className="flex flex-col items-center gap-1.5 group">
<i className="h-6 w-6 text-zinc-500 transition-colors group-hover:text-zinc-300 transition-transform group-hover:-translate-y-1" data-lucide="music-2"></i>
<span className="text-[10px] uppercase font-medium text-zinc-500 tracking-wide group-hover:text-zinc-300">Audio</span>
</button>
<button className="flex flex-col items-center gap-1.5 group">
<i className="h-6 w-6 text-zinc-500 transition-colors group-hover:text-zinc-300 transition-transform group-hover:-translate-y-1" data-lucide="shopping-bag"></i>
<span className="text-[10px] uppercase font-medium text-zinc-500 tracking-wide group-hover:text-zinc-300">Shop</span>
</button>
<button className="flex flex-col items-center gap-1.5 group">
<i className="h-6 w-6 text-zinc-500 transition-colors group-hover:text-zinc-300 transition-transform group-hover:-translate-y-1" data-lucide="settings"></i>
<span className="text-[10px] uppercase font-medium text-zinc-500 tracking-wide group-hover:text-zinc-300">System</span>
</button>
</nav>

<div className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-3">
<i className="h-4 w-4 text-zinc-400" data-lucide="volume-2"></i>
<div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-zinc-500"></div>
</div>
</div>
</footer>


    </>
  );
}
