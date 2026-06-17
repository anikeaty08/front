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
      

<main className="w-full h-screen sm:h-[850px] sm:max-w-sm sm:rounded-[2.5rem] relative overflow-hidden border shadow-2xl flex flex-col bg-zinc-950 border-zinc-800">

<div className="absolute top-0 w-full h-12 z-50 flex items-end justify-between px-6 pb-2 text-[10px] font-medium bg-gradient-to-b to-transparent text-zinc-400 from-zinc-950/90">
<span>9:42</span>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:signal-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:wi-fi-router-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear" width="16"></iconify-icon>
</div>
</div>

<div className="relative w-full h-[40%] map-bg group border-b border-zinc-800">

<div className="absolute inset-0 opacity-20 pointer-events-none">
<svg className="w-full h-full fill-none stroke-2 stroke-zinc-600" viewbox="0 0 400 400">
<path d="M-20 200 C 100 200, 150 250, 300 220 S 450 150, 500 170"></path>
<path d="M180 -10 L 180 400"></path>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50"></div>

<div className="absolute top-14 left-6 z-30">
<button className="size-10 rounded-xl backdrop-blur-md border flex items-center justify-center active:scale-95 transition-all shadow-lg bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:bg-zinc-800">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
</div>

<div className="absolute top-14 right-6 z-30">
<button className="size-10 rounded-xl backdrop-blur-md border flex items-center justify-center active:scale-95 transition-all shadow-lg bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:bg-zinc-800">
<iconify-icon className="text-xl" icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center gap-4 z-20">
<div className="relative">
<div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ping blur-sm"></div>
<div className="relative size-14 rounded-full border-2 shadow-[0_0_30px_rgba(99,102,241,0.3)] flex items-center justify-center z-10 bg-zinc-950 border-indigo-500/50 text-indigo-400">
<iconify-icon className="text-2xl -scale-x-100" icon="solar:truck-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-lg backdrop-blur-md bg-zinc-900/80 border-zinc-800">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide">62 MPH</span>
<span className="w-px h-3 bg-zinc-700"></span>
<span className="text-[10px] text-zinc-400 font-medium">I-5 NORTH</span>
</div>
</div>
</div>

<div className="flex-1 -mt-6 rounded-t-[2rem] bg-zinc-950 relative z-40 flex flex-col overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.8)] border-t border-zinc-800">

<div className="flex-none pt-3 px-6 pb-2 bg-zinc-950/95 backdrop-blur-sm sticky top-0 z-50">
<div className="w-10 h-1 rounded-full bg-zinc-800 mx-auto mb-4"></div>
<div className="flex items-center justify-between">
<div>
<h1 className="text-xl font-semibold text-white tracking-tight">Tesla Semi #42</h1>
<p className="text-xs text-zinc-500 font-normal mt-0.5">Fleet ID: T-800 • Long Haul Config</p>
</div>
<div className="size-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon className="text-xl" icon="solar:electric-refueling-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">

<div className="grid grid-cols-2 gap-3">

<div className="p-4 rounded-2xl border bg-zinc-900/40 border-zinc-800 relative overflow-hidden group">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:battery-charge-linear"></iconify-icon>
<span className="text-xs text-emerald-500 font-medium">+12% reg</span>
</div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold text-white tracking-tight">74<span className="text-sm font-normal text-zinc-500 ml-0.5">%</span></h2>
<p className="text-[10px] text-zinc-500 font-medium mt-1 uppercase tracking-wide">Battery Level</p>
</div>

<div className="absolute bottom-0 left-0 right-0 h-10 opacity-20 bg-gradient-to-t from-emerald-500/30 to-transparent"></div>
</div>

<div className="p-4 rounded-2xl border bg-zinc-900/40 border-zinc-800 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:map-arrow-right-linear"></iconify-icon>
</div>
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">342<span className="text-sm font-normal text-zinc-500 ml-0.5">mi</span></h2>
<p className="text-[10px] text-zinc-500 font-medium mt-1 uppercase tracking-wide">Est. Range</p>
</div>
</div>
</div>

<div className="rounded-2xl border bg-zinc-900/40 border-zinc-800 p-4">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-medium text-zinc-300">Current Route</h3>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded border border-zinc-700">On Time</span>
</div>
<div className="relative pl-2 space-y-6">

<div className="absolute left-[11px] top-2 bottom-4 w-px bg-zinc-800"></div>
<div className="absolute left-[11px] top-2 h-1/2 w-px bg-indigo-500"></div>

<div className="relative flex items-center gap-3 opacity-50">
<div className="size-1.5 rounded-full bg-zinc-600 outline outline-4 outline-zinc-950 z-10"></div>
<div className="flex-1">
<p className="text-xs text-zinc-300">Sacramento Logistics Hub</p>
<p className="text-[10px] text-zinc-600">08:00 AM</p>
</div>
</div>

<div className="relative flex items-center gap-3">
<div className="size-2.5 rounded-full bg-indigo-500 outline outline-4 outline-zinc-950 z-10 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<div className="flex-1 flex justify-between items-center p-2 rounded-lg border bg-zinc-900 border-zinc-800/50">
<div>
<p className="text-xs text-white font-medium">Interstate 5 South</p>
<p className="text-[10px] text-indigo-400">Current Location</p>
</div>
<span className="text-[10px] text-zinc-500">62 mph</span>
</div>
</div>

<div className="relative flex items-center gap-3">
<div className="size-1.5 rounded-full border border-zinc-500 bg-zinc-950 outline outline-4 outline-zinc-950 z-10"></div>
<div className="flex-1">
<p className="text-xs text-zinc-300">San Francisco Distribution</p>
<p className="text-[10px] text-zinc-500">ETA 10:45 AM (43 min)</p>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-500 mb-3 ml-1 uppercase tracking-wider">Remote Controls</h3>
<div className="grid grid-cols-4 gap-2">
<button className="aspect-square rounded-xl border bg-zinc-900/50 border-zinc-800 flex flex-col items-center justify-center gap-1.5 active:bg-zinc-800 transition-colors group">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-white" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-[9px] font-medium text-zinc-500">Lock</span>
</button>
<button className="aspect-square rounded-xl border bg-zinc-900/50 border-zinc-800 flex flex-col items-center justify-center gap-1.5 active:bg-zinc-800 transition-colors group">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-white" icon="solar:snowflake-linear"></iconify-icon>
<span className="text-[9px] font-medium text-zinc-500">Climate</span>
</button>
<button className="aspect-square rounded-xl border bg-zinc-900/50 border-zinc-800 flex flex-col items-center justify-center gap-1.5 active:bg-zinc-800 transition-colors group">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-white" icon="solar:lightbulb-linear"></iconify-icon>
<span className="text-[9px] font-medium text-zinc-500">Flash</span>
</button>
<button className="aspect-square rounded-xl border bg-zinc-900/50 border-zinc-800 flex flex-col items-center justify-center gap-1.5 active:bg-zinc-800 transition-colors group">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-white" icon="solar:horn-linear"></iconify-icon>
<span className="text-[9px] font-medium text-zinc-500">Horn</span>
</button>
</div>
</div>

<div className="rounded-2xl border bg-zinc-900/40 border-zinc-800 p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center">
<span className="text-xs font-semibold text-zinc-400">MS</span>
</div>
<div>
<p className="text-xs font-medium text-white">Michael Scott</p>
<div className="flex items-center gap-1">
<iconify-icon className="text-[10px] text-amber-500" icon="solar:star-bold"></iconify-icon>
<span className="text-[10px] text-zinc-500">4.9 • ID: 8902</span>
</div>
</div>
</div>
<div className="flex gap-2">
<button className="size-8 rounded-lg border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
</button>
<button className="size-8 rounded-lg border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:chat-round-linear"></iconify-icon>
</button>
</div>
</div>

<div className="pb-6">
<h3 className="text-xs font-medium text-zinc-500 mb-3 ml-1 uppercase tracking-wider">Telemetry</h3>
<div className="space-y-2">

<div className="flex items-center justify-between p-3 rounded-xl border bg-zinc-900/20 border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:wheel-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300">Tire Pressure</span>
</div>
<span className="text-xs font-medium text-emerald-500">OK (36 PSI)</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border bg-zinc-900/20 border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:gas-station-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300">Fuel Level</span>
</div>
<span className="text-xs font-medium text-zinc-300">74%</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border bg-zinc-900/20 border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300">Efficiency</span>
</div>
<span className="text-xs font-medium text-emerald-500">1.7 kWh/mi</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border bg-zinc-900/20 border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:road-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300">Odometer</span>
</div>
<span className="text-xs font-medium text-zinc-300">142,093 mi</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border bg-zinc-900/20 border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:thermometer-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300">Battery Temp</span>
</div>
<span className="text-xs font-medium text-zinc-300">Optimal (24°C)</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border bg-zinc-900/20 border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-300">Maintenance</span>
</div>
<span className="text-xs font-medium text-zinc-500">Due in 24d</span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
