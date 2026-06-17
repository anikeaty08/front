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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#0e1014',
surface: '#16191d',
surfaceHighlight: '#1e2126',
border: 'rgba(255,255,255,0.06)',
primary: '#5e6ad2',
},
boxShadow: {
'glow': '0 0 20px rgba(94, 106, 210, 0.15)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-64 border-r border-border flex flex-col bg-surface/50 hidden md:flex">

<div className="h-14 flex items-center px-4 border-b border-border">
<button className="flex items-center gap-3 hover:bg-white/5 px-2 py-1.5 rounded-lg transition-colors w-full group">
<div className="w-5 h-5 bg-neutral-200 text-black rounded flex items-center justify-center font-bold text-xs tracking-tighter">
                    F
                </div>
<span className="text-sm font-medium text-neutral-200 tracking-tight">FlowState</span>
<span className="iconify ml-auto text-neutral-500 group-hover:text-neutral-300" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">

<div className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-white/5 rounded-md transition-all group">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
                    Search
                    <div className="ml-auto flex gap-1">
<span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-neutral-500 border border-white/5">⌘ K</span>
</div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-white/5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:inbox" data-width="16"></span>
                    Inbox
                    <span className="ml-auto text-xs font-medium text-indigo-400">2</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-white/5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:target" data-width="16"></span>
                    My Issues
                </button>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Your Teams</h3>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-neutral-200 bg-white/5 rounded-md transition-all border border-white/5 shadow-sm">
<span className="iconify text-indigo-400" data-icon="lucide:layers" data-width="16"></span>
                        Engineering
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-white/5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:pen-tool" data-width="16"></span>
                        Design
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-white/5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:megaphone" data-width="16"></span>
                        Marketing
                    </button>
</div>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-neutral-500 mb-2 uppercase tracking-wider">Cycles</h3>
<div className="space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/5 rounded-md transition-all group">
<span className="iconify text-emerald-500" data-icon="lucide:play-circle" data-width="16"></span>
                        Sprint 34
                        <span className="ml-auto text-xs text-neutral-500 group-hover:text-neutral-400">Active</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-white/5 rounded-md transition-all">
<span className="iconify" data-icon="lucide:circle" data-width="16"></span>
                        Sprint 35
                    </button>
</div>
</div>
</div>

<div className="p-4 border-t border-border">
<button className="flex items-center gap-3 w-full hover:opacity-80 transition-opacity">
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/10"></div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-neutral-200">Alex R.</span>
<span className="text-[10px] text-neutral-500">Product Manager</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-background relative">

<header className="h-14 border-b border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-md z-10 sticky top-0">

<div className="flex items-center gap-2">
<span className="iconify text-neutral-500" data-icon="lucide:layers" data-width="16"></span>
<span className="text-sm text-neutral-500">Engineering</span>
<span className="text-neutral-600">/</span>
<span className="text-sm font-medium text-neutral-200">Sprint 34</span>
<span className="ml-2 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium tracking-wide">ACTIVE</span>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center -space-x-2 mr-2">
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-background ring-2 ring-background flex items-center justify-center text-[9px] text-white">JD</div>
<div className="w-6 h-6 rounded-full bg-indigo-600 border border-background ring-2 ring-background flex items-center justify-center text-[9px] text-white">AR</div>
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-dashed border-neutral-600 ring-2 ring-background flex items-center justify-center text-[9px] text-neutral-400 hover:bg-neutral-700 hover:text-white cursor-pointer transition-colors">+</div>
</div>
<div className="h-4 w-px bg-neutral-800"></div>
<button className="flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-200 transition-colors">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="14"></span>
                    Display
                </button>
<button className="bg-white text-black hover:bg-neutral-200 text-xs font-medium px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                    New Issue
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto">

<div className="px-6 py-8 border-b border-border">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-xl font-medium text-white tracking-tight mb-1">Sprint 34 Overview</h1>
<p className="text-xs text-neutral-500">Sep 24 - Oct 8 • 4 days remaining</p>
</div>

<div className="flex items-end gap-1 h-16">
<div className="w-3 bg-neutral-800 rounded-sm h-[40%]"></div>
<div className="w-3 bg-neutral-800 rounded-sm h-[60%]"></div>
<div className="w-3 bg-neutral-800 rounded-sm h-[30%]"></div>
<div className="w-3 bg-neutral-800 rounded-sm h-[75%]"></div>
<div className="w-3 bg-neutral-800 rounded-sm h-[50%]"></div>
<div className="w-3 bg-indigo-500/20 rounded-sm h-[85%] border-t border-indigo-500"></div> 
<div className="w-3 bg-neutral-800/50 rounded-sm h-[90%] border-t border-neutral-700 border-dashed"></div>
<div className="w-3 bg-neutral-800/50 rounded-sm h-[100%] border-t border-neutral-700 border-dashed"></div>
</div>
</div>

<div className="mt-6">
<div className="flex justify-between text-xs text-neutral-400 mb-2">
<span>62% Completed</span>
<span>38 points</span>
</div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden flex">
<div className="w-[62%] bg-indigo-500 h-full"></div>
<div className="w-[15%] bg-amber-500/80 h-full"></div> 
<div className="w-[23%] bg-neutral-700 h-full"></div> 
</div>
</div>
</div>

<div className="px-6 py-6 pb-20">

<div className="mb-8">
<div className="flex items-center gap-2 mb-3">
<div className="w-3 h-3 rounded-full border-[3px] border-amber-500/20 bg-amber-500"></div>
<h2 className="text-sm font-medium text-neutral-200">In Progress</h2>
<span className="text-xs text-neutral-600 font-mono">3</span>
</div>
<div className="space-y-px bg-border rounded-lg overflow-hidden border border-border shadow-sm">

<div className="group flex items-center gap-4 p-3 bg-surface hover:bg-surfaceHighlight transition-colors cursor-pointer relative">

<label className="custom-checkbox flex items-center cursor-pointer relative z-10">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-600 flex items-center justify-center transition-colors hover:border-neutral-500 bg-transparent">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>

<span className="text-xs text-neutral-500 font-mono w-10">ENG-12</span>

<span className="iconify text-orange-500" data-icon="lucide:signal-high" data-width="16"></span>

<span className="text-sm text-neutral-200 font-medium flex-1 truncate">
                                Implement real-time WebSocket updates for dashboard
                            </span>

<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-white/5 bg-white/5 text-[10px] text-neutral-400">Frontend</span>
</div>

<div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-[8px] flex items-center justify-center text-white border border-white/10">JD</div>
</div>

<div className="group flex items-center gap-4 p-3 bg-surface hover:bg-surfaceHighlight transition-colors cursor-pointer relative">
<label className="custom-checkbox flex items-center cursor-pointer relative z-10">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-600 flex items-center justify-center transition-colors hover:border-neutral-500 bg-transparent">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<span className="text-xs text-neutral-500 font-mono w-10">ENG-15</span>
<span className="iconify text-neutral-500" data-icon="lucide:signal-medium" data-width="16"></span>
<span className="text-sm text-neutral-200 font-medium flex-1 truncate">
                                Fix authentication token refresh on 401
                            </span>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-white/5 bg-white/5 text-[10px] text-neutral-400">Bug</span>
</div>
<div className="w-5 h-5 rounded-full bg-neutral-700 text-[8px] flex items-center justify-center text-neutral-400 border border-white/10">?</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-2 mb-3">
<div className="w-3 h-3 rounded-full border-[3px] border-neutral-700 bg-neutral-500"></div>
<h2 className="text-sm font-medium text-neutral-200">Todo</h2>
<span className="text-xs text-neutral-600 font-mono">5</span>
</div>
<div className="space-y-px bg-border rounded-lg overflow-hidden border border-border shadow-sm">

<div className="group flex items-center gap-4 p-3 bg-surface hover:bg-surfaceHighlight transition-colors cursor-pointer relative">
<label className="custom-checkbox flex items-center cursor-pointer relative z-10">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-600 flex items-center justify-center transition-colors hover:border-neutral-500 bg-transparent">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<span className="text-xs text-neutral-500 font-mono w-10">ENG-18</span>
<span className="iconify text-red-500" data-icon="lucide:alert-circle" data-width="16"></span>
<span className="text-sm text-neutral-200 font-medium flex-1 truncate">
                                Database migration for user settings schema
                            </span>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-white/5 bg-white/5 text-[10px] text-neutral-400">Backend</span>
</div>
<div className="w-5 h-5 rounded-full bg-indigo-600 text-[8px] flex items-center justify-center text-white border border-white/10">AR</div>
</div>

<div className="group flex items-center gap-4 p-3 bg-surface hover:bg-surfaceHighlight transition-colors cursor-pointer relative">
<label className="custom-checkbox flex items-center cursor-pointer relative z-10">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-600 flex items-center justify-center transition-colors hover:border-neutral-500 bg-transparent">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<span className="text-xs text-neutral-500 font-mono w-10">ENG-21</span>
<span className="iconify text-neutral-500" data-icon="lucide:signal-low" data-width="16"></span>
<span className="text-sm text-neutral-300 flex-1 truncate">
                                Update API documentation for v2 endpoints
                            </span>
<div className="w-5 h-5 rounded-full bg-neutral-700 text-[8px] flex items-center justify-center text-neutral-400 border border-white/10">?</div>
</div>

<div className="group flex items-center gap-4 p-3 bg-surface hover:bg-surfaceHighlight transition-colors cursor-pointer relative">
<label className="custom-checkbox flex items-center cursor-pointer relative z-10">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-600 flex items-center justify-center transition-colors hover:border-neutral-500 bg-transparent">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<span className="text-xs text-neutral-500 font-mono w-10">ENG-24</span>
<span className="iconify text-neutral-500" data-icon="lucide:signal-medium" data-width="16"></span>
<span className="text-sm text-neutral-300 flex-1 truncate">
                                Research vector database options for search
                            </span>
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 rounded border border-white/5 bg-white/5 text-[10px] text-neutral-400">Spike</span>
</div>
<div className="w-5 h-5 rounded-full bg-purple-600 text-[8px] flex items-center justify-center text-white border border-white/10">MK</div>
</div>
</div>
</div>

<div className="mb-8 opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-3">
<div className="w-3 h-3 rounded-full border border-dashed border-neutral-600"></div>
<h2 className="text-sm font-medium text-neutral-400">Backlog</h2>
<span className="text-xs text-neutral-600 font-mono">12</span>
</div>
<div className="space-y-px bg-border rounded-lg overflow-hidden border border-border">

<div className="group flex items-center gap-4 p-3 bg-surface hover:bg-surfaceHighlight transition-colors cursor-pointer relative">
<label className="custom-checkbox flex items-center cursor-pointer relative z-10">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-700 flex items-center justify-center transition-colors hover:border-neutral-600 bg-transparent">
</div>
</label>
<span className="text-xs text-neutral-600 font-mono w-10">ENG-42</span>
<span className="iconify text-neutral-600" data-icon="lucide:signal-low" data-width="16"></span>
<span className="text-sm text-neutral-500 group-hover:text-neutral-400 flex-1 truncate">
                                Optimize image loading performance
                            </span>
</div>
</div>
</div>
</div>
</div>

<button className="md:hidden absolute bottom-6 right-6 w-12 h-12 bg-white text-black rounded-full shadow-glow flex items-center justify-center">
<span className="iconify" data-icon="lucide:plus" data-width="24"></span>
</button>
</main>

<aside className="w-80 border-l border-border bg-background hidden xl:flex flex-col">

<div className="h-14 border-b border-border flex items-center px-4 justify-between">
<div className="flex gap-3 text-neutral-400">
<span className="iconify cursor-pointer hover:text-white" data-icon="lucide:check-circle" data-width="16"></span>
<span className="iconify cursor-pointer hover:text-white" data-icon="lucide:trash" data-width="16"></span>
</div>
<div className="flex gap-3 text-neutral-400">
<span className="iconify cursor-pointer hover:text-white" data-icon="lucide:maximize-2" data-width="16"></span>
<span className="iconify cursor-pointer hover:text-white" data-icon="lucide:x" data-width="16"></span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-5">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-mono text-neutral-500">ENG-12</span>
<span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[10px] font-medium">In Progress</span>
</div>
<h2 className="text-lg font-medium text-neutral-100 leading-snug tracking-tight mb-6">Implement real-time WebSocket updates for dashboard</h2>

<div className="space-y-4 mb-8">
<div className="flex items-center">
<div className="w-24 text-xs text-neutral-500">Assignee</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-[8px] flex items-center justify-center text-white">JD</div>
<span className="text-sm text-neutral-300">John Doe</span>
</div>
</div>
<div className="flex items-center">
<div className="w-24 text-xs text-neutral-500">Priority</div>
<div className="flex items-center gap-2">
<span className="iconify text-orange-500" data-icon="lucide:signal-high" data-width="14"></span>
<span className="text-sm text-neutral-300">High</span>
</div>
</div>
<div className="flex items-center">
<div className="w-24 text-xs text-neutral-500">Sprint</div>
<div className="flex items-center gap-2">
<span className="text-sm text-neutral-300">Sprint 34</span>
</div>
</div>
<div className="flex items-center">
<div className="w-24 text-xs text-neutral-500">Estimate</div>
<div className="flex items-center gap-2">
<span className="iconify text-neutral-500" data-icon="lucide:tally-3" data-width="14"></span>
<span className="text-sm text-neutral-300">3 Points</span>
</div>
</div>
</div>

<div className="prose prose-invert prose-sm text-neutral-400">
<p>The dashboard currently polls every 15 seconds. We need to move this to a WebSocket connection for real-time updates.</p>
<ul className="list-disc pl-4 space-y-1 mt-2 mb-4">
<li>Setup WS server endpoint</li>
<li>Integrate client-side listener</li>
<li>Handle reconnection logic</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-border">
<h3 className="text-xs font-medium text-neutral-500 mb-3">Sub-issues</h3>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer">
<div className="w-3 h-3 rounded-full border border-neutral-600"></div>
<span className="text-xs text-neutral-300 line-through decoration-neutral-500 text-neutral-500">Define WS event schema</span>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer">
<div className="w-3 h-3 rounded-full border border-neutral-600"></div>
<span className="text-xs text-neutral-300">Load testing</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-border bg-surface/30">
<div className="relative">
<input className="w-full bg-surface border border-neutral-800 rounded-md py-2 px-3 pl-3 pr-8 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Add a comment..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white">
<span className="iconify" data-icon="lucide:arrow-up-circle" data-width="16"></span>
</button>
</div>
</div>
</aside>

    </>
  );
}
