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
      

<div className="w-full max-w-6xl aspect-video bg-stone-900 rounded-xl border border-stone-800 overflow-hidden flex flex-col relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">

<div className="h-10 bg-stone-900 border-b border-stone-800 flex items-center justify-between px-4 select-none shrink-0 z-50">
<div className="flex items-center gap-2 w-20">
<div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-sm"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors shadow-sm"></div>
</div>
<div className="flex items-center gap-1 opacity-60">
<i className="w-3 h-3 text-stone-400" data-lucide="scissors"></i>
<span className="text-xs font-medium tracking-tight text-stone-400">SceneCut Pro</span>
</div>
<div className="w-20 flex justify-end">
<button className="text-stone-500 hover:text-stone-300">
<i className="w-4 h-4" data-lucide="layout-panel-left"></i>
</button>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-72 bg-stone-900 border-r border-stone-800 flex flex-col shrink-0">
<div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-900/50 backdrop-blur-sm">
<h2 className="text-xs font-semibold text-stone-400 uppercase tracking-widest">Detected Scenes</h2>
<span className="bg-stone-800 text-stone-400 text-[10px] px-1.5 py-0.5 rounded border border-stone-700">12</span>
</div>
<div className="flex-1 overflow-y-auto p-3 space-y-2">

<div className="group p-2 rounded-lg bg-stone-800/40 border border-stone-700/50 hover:bg-stone-800 transition-all cursor-pointer flex gap-3 items-start relative">
<div className="w-16 h-10 bg-stone-950 rounded border border-stone-700 overflow-hidden relative shrink-0">

<div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900"></div>
<div className="absolute bottom-0 right-0 bg-black/60 px-1 py-0.5 text-[8px] font-mono text-white">04s</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-xs font-medium text-stone-200 truncate">Scene 01</span>
<i className="w-3 h-3 text-blue-500" data-lucide="check-circle-2"></i>
</div>
<div className="text-[10px] text-stone-500 font-mono tracking-tight">00:00 - 00:04</div>
</div>

<div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-stone-400 hover:text-red-400"><i className="w-3 h-3" data-lucide="trash-2"></i></button>
</div>
</div>

<div className="group p-2 rounded-lg border border-transparent hover:bg-stone-800/50 transition-all cursor-pointer flex gap-3 items-start opacity-50 hover:opacity-100">
<div className="w-16 h-10 bg-stone-950 rounded border border-stone-800 overflow-hidden relative shrink-0 grayscale">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-800 to-stone-700"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<i className="w-4 h-4 text-white/50" data-lucide="x"></i>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-xs font-medium text-stone-400 line-through decoration-stone-600">Scene 02</span>
</div>
<div className="text-[10px] text-stone-600 font-mono tracking-tight">00:04 - 00:12</div>
</div>
<div className="absolute right-2 top-2">
<button className="text-stone-600 hover:text-stone-300"><i className="w-3 h-3" data-lucide="rotate-ccw"></i></button>
</div>
</div>

<div className="group p-2 rounded-lg bg-stone-800 border border-blue-900/50 ring-1 ring-blue-500/20 hover:bg-stone-800 transition-all cursor-pointer flex gap-3 items-start shadow-sm">
<div className="w-16 h-10 bg-stone-950 rounded border border-stone-700 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-gradient-to-bl from-stone-700 to-stone-900"></div>
<div className="absolute bottom-0 right-0 bg-black/60 px-1 py-0.5 text-[8px] font-mono text-white">15s</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-xs font-medium text-blue-100 truncate">Scene 03</span>
<i className="w-3 h-3 text-blue-500" data-lucide="check-circle-2"></i>
</div>
<div className="text-[10px] text-stone-500 font-mono tracking-tight">00:12 - 00:27</div>
</div>
</div>

<div className="group p-2 rounded-lg border border-transparent hover:bg-stone-800/50 transition-all cursor-pointer flex gap-3 items-start">
<div className="w-16 h-10 bg-stone-950 rounded border border-stone-800 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-900"></div>
<div className="absolute bottom-0 right-0 bg-black/60 px-1 py-0.5 text-[8px] font-mono text-white">08s</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-xs font-medium text-stone-300 truncate">Scene 04</span>
<div className="flex gap-1">
<button className="text-stone-600 hover:text-stone-300"><i className="w-3 h-3" data-lucide="check"></i></button>
<button className="text-stone-600 hover:text-red-400"><i className="w-3 h-3" data-lucide="x"></i></button>
</div>
</div>
<div className="text-[10px] text-stone-500 font-mono tracking-tight">00:27 - 00:35</div>
</div>
</div>

<div className="group p-2 rounded-lg border border-transparent hover:bg-stone-800/50 transition-all cursor-pointer flex gap-3 items-start opacity-60">
<div className="w-16 h-10 bg-stone-950 rounded border border-stone-800 overflow-hidden relative shrink-0">
<div className="absolute inset-0 bg-stone-900"></div>
</div>
<div className="flex-1 min-w-0 py-1">
<div className="h-2 w-12 bg-stone-800 rounded mb-2"></div>
<div className="h-1.5 w-8 bg-stone-800/50 rounded"></div>
</div>
</div>
</div>
<div className="p-4 border-t border-stone-800 bg-stone-900/90">
<button className="w-full flex items-center justify-center gap-2 bg-stone-100 hover:bg-white text-stone-900 text-xs font-medium py-2 rounded-lg shadow transition-all">
<i className="w-3 h-3" data-lucide="download"></i>
<span>Export Timeline</span>
</button>
</div>
</div>

<div className="flex-1 flex flex-col bg-stone-925 relative">

<div className="flex-1 flex flex-col items-center justify-center bg-stone-950 relative overflow-hidden group">

<div className="absolute inset-0 pointer-events-none opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative w-[80%] aspect-video bg-black rounded-lg shadow-2xl overflow-hidden border border-stone-800 ring-1 ring-white/5">

<div className="absolute inset-0 bg-stone-900 flex items-center justify-center">
<div className="text-center">
<div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mx-auto mb-4 border border-stone-700">
<i className="w-6 h-6 text-stone-600" data-lucide="video"></i>
</div>
<p className="text-sm font-medium text-stone-500">No Video Loaded</p>
<button className="mt-4 text-xs bg-stone-800 hover:bg-stone-700 text-stone-300 px-3 py-1.5 rounded-md border border-stone-700 transition-colors">Select Source</button>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex gap-2 items-center">
<span className="text-xs font-mono font-medium text-white tracking-widest">00:12:04</span>
<span className="text-[10px] font-mono text-stone-400 border-l border-white/20 pl-2">24fps</span>
</div>
</div>

<div className="absolute bottom-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-200 backdrop-blur border border-stone-700/50 shadow-lg"><i className="w-4 h-4 fill-current" data-lucide="skip-back"></i></button>
<button className="p-3 rounded-full bg-stone-100 hover:bg-white text-stone-900 shadow-xl"><i className="w-5 h-5 fill-current ml-0.5" data-lucide="play"></i></button>
<button className="p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-200 backdrop-blur border border-stone-700/50 shadow-lg"><i className="w-4 h-4 fill-current" data-lucide="skip-forward"></i></button>
</div>
</div>

<div className="h-48 bg-stone-900 border-t border-stone-800 flex flex-col shrink-0">

<div className="h-10 border-b border-stone-800 flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<span className="text-[10px] font-semibold text-stone-500 uppercase tracking-widest mr-2">Timeline</span>
<button className="p-1.5 rounded hover:bg-stone-800 text-stone-400 transition-colors"><i className="w-3.5 h-3.5" data-lucide="zoom-in"></i></button>
<button className="p-1.5 rounded hover:bg-stone-800 text-stone-400 transition-colors"><i className="w-3.5 h-3.5" data-lucide="zoom-out"></i></button>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-[10px] text-stone-500">
<div className="w-2 h-2 rounded-full bg-blue-500"></div> Keep
                                <div className="w-2 h-2 rounded-full bg-stone-700"></div> Discard
                            </div>
</div>
</div>

<div className="flex-1 relative overflow-x-auto overflow-y-hidden select-none p-4">

<div className="flex justify-between w-full text-[9px] font-mono text-stone-600 mb-2 px-1">
<span>00:00</span>
<span>00:15</span>
<span>00:30</span>
<span>00:45</span>
<span>01:00</span>
</div>

<div className="relative h-20 w-full flex items-center">

<div className="absolute top-0 bottom-0 left-[32%] w-px bg-red-500 z-30 flex flex-col items-center">
<div className="w-2.5 h-2.5 -mt-1.5 bg-red-500 rotate-45 transform rounded-[1px] shadow-sm"></div>
</div>

<div className="absolute inset-0 w-full h-12 top-1/2 -translate-y-1/2 bg-stone-950/50 rounded-lg overflow-hidden border border-stone-800/50 flex">

<div className="h-full w-[10%] bg-blue-900/20 border-r border-stone-800/50 relative group">
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
<div className="h-4 w-full bg-blue-500/10"></div>
</div>
<div className="absolute bottom-0 h-1 w-full bg-blue-500"></div>

<div className="absolute bottom-2 left-1 right-1 h-6 flex items-end justify-center gap-[1px] opacity-40">
<div className="w-1 bg-blue-400 h-[40%]"></div>
<div className="w-1 bg-blue-400 h-[70%]"></div>
<div className="w-1 bg-blue-400 h-[50%]"></div>
<div className="w-1 bg-blue-400 h-[80%]"></div>
</div>
</div>

<div className="h-full w-[15%] bg-stone-900/80 border-r border-stone-800/50 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 5px, transparent 5px, transparent 10px)'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-4 h-4 text-stone-700" data-lucide="eye-off"></i>
</div>
</div>

<div className="h-full w-[25%] bg-blue-900/30 border-r border-stone-800/50 relative ring-1 ring-inset ring-blue-500/50">
<div className="absolute top-1 left-2 text-[9px] font-mono text-blue-300">Scene 03</div>
<div className="absolute bottom-0 h-1 w-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

<div className="absolute bottom-2 left-1 right-1 h-8 flex items-end justify-between gap-[1px] opacity-60">
<div className="w-1 bg-blue-400 h-[40%]"></div>
<div className="w-1 bg-blue-400 h-[60%]"></div>
<div className="w-1 bg-blue-400 h-[90%]"></div>
<div className="w-1 bg-blue-400 h-[30%]"></div>
<div className="w-1 bg-blue-400 h-[50%]"></div>
<div className="w-1 bg-blue-400 h-[70%]"></div>
<div className="w-1 bg-blue-400 h-[80%]"></div>
<div className="w-1 bg-blue-400 h-[20%]"></div>
<div className="w-1 bg-blue-400 h-[50%]"></div>
</div>
</div>

<div className="h-full w-[15%] bg-blue-900/20 border-r border-stone-800/50 relative group">
<div className="absolute bottom-0 h-1 w-full bg-blue-500"></div>
</div>

<div className="h-full flex-1 bg-stone-900/30"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
