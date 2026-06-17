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
      

<div className="fixed inset-0 bg-[#0a0a0a] z-0">
<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF00]/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00FF00]/5 rounded-full blur-[120px]"></div>
</div>

<div className="relative z-10 w-full max-w-5xl h-[85vh] bg-[#2A2A2A]/95 backdrop-blur-xl border border-white/5 rounded-xl shadow-2xl shadow-black/50 flex overflow-hidden ring-1 ring-white/5">

<div className="w-20 bg-[#1E1E1E] border-r border-white/5 flex flex-col items-center py-6 gap-8">

<div className="text-[#00FF00] mb-4">
<svg className="lucide lucide-ghost w-8 h-8 drop-shadow-[0_0_8px_rgba(0,255,0,0.6)]" data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
</div>

<nav className="flex flex-col gap-6 w-full">
<button className="group flex text-[#00FF00] w-full pt-2 pb-2 relative justify-center">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#00FF00] shadow-[0_0_10px_#00FF00]"></div>
<svg className="lucide lucide-crosshair w-6 h-6 stroke-[1.5]" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</button>
<button className="group flex hover:text-gray-300 transition-colors text-gray-500 w-full pt-2 pb-2 relative justify-center">
<svg className="lucide lucide-eye w-6 h-6 stroke-[1.5]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="group flex hover:text-gray-300 transition-colors text-gray-500 w-full pt-2 pb-2 relative justify-center">
<svg className="lucide lucide-shield w-6 h-6 stroke-[1.5]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</button>
<button className="group relative w-full flex justify-center py-2 text-gray-500 hover:text-gray-300 transition-colors">
<svg className="lucide lucide-box w-6 h-6 stroke-[1.5]" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</button>
<button className="group relative w-full flex justify-center py-2 text-gray-500 hover:text-gray-300 transition-colors">
<svg className="lucide lucide-settings-2 w-6 h-6 stroke-[1.5]" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
</nav>
<div className="mt-auto pb-4">
<div className="w-2 h-2 rounded-full bg-[#00FF00] shadow-[0_0_8px_#00FF00]"></div>
</div>
</div>

<div className="flex-1 flex flex-col phantom-gradient">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#2A2A2A]/50">
<div className="flex flex-col">
<h1 className="text-xl tracking-tighter text-white font-medium glow-text">PHANTOM <span className="text-[#00FF00] text-xs align-top opacity-80">v2.4</span></h1>
<span className="text-xs text-gray-500 tracking-tight">RUST EXTERNAL CLIENT</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded bg-[#1E1E1E] border border-white/5">
<svg className="lucide lucide-user w-3 h-3 text-[#00FF00]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs text-gray-300 font-mono">User: Admin</span>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-8">
<div className="grid grid-cols-2 gap-6">

<div className="col-span-1 bg-[#1E1E1E] rounded-lg border border-white/5 p-5 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-crosshair w-16 h-16 text-[#00FF00]" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<h2 className="text-sm text-white font-medium tracking-wide uppercase mb-6 flex items-center gap-2">
<span className="w-1 h-4 bg-[#00FF00] rounded-sm"></span>
                            Rage Aimbot
                        </h2>
<div className="space-y-5">

<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Enable Aimbot</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00] peer-checked:shadow-[0_0_10px_rgba(0,255,0,0.4)]"></div>
</label>
</div>

<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Silent Aim</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00]"></div>
</label>
</div>

<div className="pt-2">
<div className="flex justify-between mb-2">
<span className="text-sm text-gray-400">FOV Radius</span>
<span className="text-xs text-[#00FF00] font-mono">180.0</span>
</div>
<input className="w-full" max="360" min="0" type="range" value="180"/>
</div>

<div className="pt-1">
<span className="text-sm text-gray-400 block mb-2">Hitbox Priority</span>
<div className="relative">
<select className="appearance-none focus:outline-none focus:border-[#00FF00]/50 transition-colors text-sm text-gray-300 bg-[#2A2A2A] w-full border-white/10 border rounded pt-2 pr-3 pb-2 pl-3">
<option>Head</option>
<option>Chest</option>
<option>Nearest</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 overflow-hidden group hover:border-white/10 transition-colors bg-[#1E1E1E] border-white/5 border rounded-lg pt-5 pr-5 pb-5 pl-5 relative">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-zap w-16 h-16 text-[#00FF00]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h2 className="text-sm text-white font-medium tracking-wide uppercase mb-6 flex items-center gap-2">
<span className="w-1 h-4 bg-[#00FF00] rounded-sm"></span>
                            Weapon Config
                        </h2>
<div className="space-y-5">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">No Recoil</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00] peer-checked:shadow-[0_0_10px_rgba(0,255,0,0.4)]"></div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">No Spread</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00] peer-checked:shadow-[0_0_10px_rgba(0,255,0,0.4)]"></div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Rapid Fire</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00]"></div>
</label>
</div>

<div className="pt-2">
<div className="flex justify-between mb-2">
<span className="text-sm text-gray-400" style={{}}>Recoil %</span>
<span className="text-xs text-[#00FF00] font-mono">0%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="0"/>
</div>
</div>
</div>

<div className="col-span-1 bg-[#1E1E1E] rounded-lg border border-white/5 p-5 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-eye w-16 h-16 text-[#00FF00]" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h2 className="text-sm text-white font-medium tracking-wide uppercase mb-6 flex items-center gap-2">
<span className="w-1 h-4 bg-[#00FF00] rounded-sm"></span>
                            Visuals
                        </h2>
<div className="space-y-5">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Player ESP</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00] peer-checked:shadow-[0_0_10px_rgba(0,255,0,0.4)]"></div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Box</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00] peer-checked:shadow-[0_0_10px_rgba(0,255,0,0.4)]"></div>
</label>
</div>
<div className="grid grid-cols-2 gap-3 mt-2">
<button className="text-xs bg-[#2A2A2A] border border-white/10 hover:border-[#00FF00] text-gray-400 hover:text-white py-2 rounded transition-all">Skeleton</button>
<button className="text-xs bg-[#2A2A2A] border border-[#00FF00] text-[#00FF00] py-2 rounded transition-all shadow-[0_0_10px_rgba(0,255,0,0.1)]">Health</button>
<button className="text-xs bg-[#2A2A2A] border border-white/10 hover:border-[#00FF00] text-gray-400 hover:text-white py-2 rounded transition-all">Name</button>
<button className="text-xs bg-[#2A2A2A] border border-white/10 hover:border-[#00FF00] text-gray-400 hover:text-white py-2 rounded transition-all">Weapon</button>
</div>

<div className="pt-2">
<div className="flex justify-between mb-2">
<span className="text-sm text-gray-400">Max Distance</span>
<span className="text-xs text-[#00FF00] font-mono">400m</span>
</div>
<input className="w-full" max="1000" min="0" type="range" value="400"/>
</div>
</div>
</div>

<div className="col-span-1 bg-[#1E1E1E] rounded-lg border border-white/5 p-5 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-layers w-16 h-16 text-[#00FF00]" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h2 className="text-sm text-white font-medium tracking-wide uppercase mb-6 flex items-center gap-2">
<span className="w-1 h-4 bg-[#00FF00] rounded-sm"></span>
                            Miscellaneous
                        </h2>
<div className="space-y-5">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Spider Climb</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00]"></div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Admin Mode</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00]"></div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-400">Auto Farm</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-[#2A2A2A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00FF00]"></div>
</label>
</div>
<div className="pt-2">
<div className="flex justify-between mb-2">
<span className="text-sm text-gray-400">Time of Day</span>
<span className="text-xs text-[#00FF00] font-mono">12:00</span>
</div>
<input className="w-full" max="24" min="0" type="range" value="12"/>
</div>
</div>
</div>
</div>
</main>

<footer className="h-10 bg-[#1E1E1E] border-t border-white/5 flex items-center justify-between px-6 text-xs text-gray-500 font-mono">
<div className="flex items-center gap-4">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse"></span>
<span className="text-[#00FF00] tracking-wide">UNDETECTED</span>
</span>
<span className="border-l border-white/10 pl-4">Build: 2409.11</span>
</div>
<div className="flex items-center gap-6">
<span>Ping: 24ms</span>
<span>FPS: 144</span>
<span className="text-gray-400">INSERT to hide</span>
</div>
</footer>
</div>
</div>


    </>
  );
}
