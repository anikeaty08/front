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
      

<aside className="w-64 border-r border-neutral-800 flex-col justify-between hidden md:flex bg-neutral-950/50 backdrop-blur-xl">
<div className="p-6">

<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-700 border border-neutral-700 flex items-center justify-center text-white text-xs font-medium tracking-tighter">
                    TM
                </div>
<span className="text-neutral-100 text-sm font-medium tracking-tight">TRADEMIND</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-neutral-900/50 border border-neutral-800 rounded-md shadow-sm transition-all group" href="#">
<span className="iconify text-indigo-400" data-icon="lucide:layout-dashboard" data-width="18"></span>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/30 rounded-md transition-all group" href="#">
<span className="iconify text-neutral-500 group-hover:text-neutral-300 transition-colors" data-icon="lucide:book-open" data-width="18"></span>
                    Journal
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/30 rounded-md transition-all group" href="#">
<span className="iconify text-neutral-500 group-hover:text-neutral-300 transition-colors" data-icon="lucide:bar-chart-2" data-width="18"></span>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/30 rounded-md transition-all group" href="#">
<span className="iconify text-neutral-500 group-hover:text-neutral-300 transition-colors" data-icon="lucide:brain-circuit" data-width="18"></span>
                    Psychology
                </a>
</nav>
<div className="mt-8">
<h3 className="px-3 text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Workspaces</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-neutral-200 rounded-md transition-all" href="#">
<span className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                        Day Trading
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-neutral-200 rounded-md transition-all" href="#">
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
                        Swing Setup
                    </a>
</nav>
</div>
</div>

<div className="p-4 border-t border-neutral-800">
<button className="flex items-center gap-3 w-full p-2 hover:bg-neutral-900 rounded-md transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 text-xs text-neutral-300">
                    JD
                </div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-neutral-200">John Doe</span>
<span className="text-[10px] text-neutral-500">Pro Account</span>
</div>
<span className="iconify ml-auto text-neutral-600" data-icon="lucide:chevron-up" data-width="14"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-neutral-950 relative">

<div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-neutral-950/0 to-neutral-950/0 pointer-events-none"></div>

<header className="h-16 border-b border-neutral-800 flex items-center justify-between px-8 bg-neutral-950/80 backdrop-blur-md z-10 shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-sm font-medium text-white tracking-tight">Emotional Capital</h1>
<span className="text-neutral-700 text-sm">/</span>
<span className="text-sm text-neutral-500">October 24</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/50">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300">Market Open</span>
</div>
<button className="p-2 text-neutral-400 hover:text-white transition-colors relative">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full border border-neutral-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 no-scrollbar">
<div className="max-w-6xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="group relative p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-neutral-500">Mental Capital</span>
<span className="iconify text-emerald-500" data-icon="lucide:battery-medium" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">84%</span>
<span className="text-xs text-emerald-500">+2%</span>
</div>
<div className="mt-3 h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/80 w-[84%] rounded-full"></div>
</div>
</div>

<div className="group relative p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-neutral-500">Tilt Meter</span>
<span className="iconify text-rose-500" data-icon="lucide:flame" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">Low</span>
<span className="text-xs text-neutral-500">Score: 12</span>
</div>
<div className="mt-3 flex gap-1 h-1 w-full">
<div className="h-full bg-rose-500/80 w-1/5 rounded-l-full"></div>
<div className="h-full bg-rose-900/30 w-1/5"></div>
<div className="h-full bg-rose-900/30 w-1/5"></div>
<div className="h-full bg-rose-900/30 w-1/5"></div>
<div className="h-full bg-rose-900/30 w-1/5 rounded-r-full"></div>
</div>
</div>

<div className="group relative p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-neutral-500">Discipline</span>
<span className="iconify text-indigo-500" data-icon="lucide:shield-check" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">6/6</span>
<span className="text-xs text-neutral-500">Rules Followed</span>
</div>
<div className="mt-3 flex gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
</div>
</div>

<div className="group relative p-5 rounded-xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-neutral-500">Daily P&amp;L</span>
<span className="iconify text-neutral-600" data-icon="lucide:dollar-sign" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">+$420</span>
<span className="text-xs text-neutral-500">2 Trades</span>
</div>
<div className="mt-3 h-1 w-full bg-neutral-800 rounded-full overflow-hidden flex">
<div className="h-full bg-emerald-500 w-[60%]"></div>
<div className="h-full bg-neutral-800 w-[40%]"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="bg-neutral-900/20 border border-neutral-800 rounded-xl p-6 backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-white tracking-tight">Pre-Trade Check-in</h2>
<button className="text-xs font-medium text-neutral-500 hover:text-white transition-colors">View History</button>
</div>

<div className="mb-8">
<label className="block text-xs font-medium text-neutral-500 mb-3 uppercase tracking-wider">Current State</label>
<div className="grid grid-cols-3 sm:grid-cols-5 gap-3">

<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="emotion" type="radio"/>
<div className="flex flex-col items-center justify-center p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 peer-checked:bg-emerald-500/10 peer-checked:border-emerald-500/50 transition-all hover:border-neutral-700">
<span className="iconify text-neutral-400 peer-checked:text-emerald-400 mb-2" data-icon="lucide:waves" data-width="20"></span>
<span className="text-xs font-medium text-neutral-400 peer-checked:text-emerald-400">Zen</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="emotion" type="radio"/>
<div className="flex flex-col items-center justify-center p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 peer-checked:bg-amber-500/10 peer-checked:border-amber-500/50 transition-all hover:border-neutral-700">
<span className="iconify text-neutral-400 peer-checked:text-amber-400 mb-2" data-icon="lucide:timer" data-width="20"></span>
<span className="text-xs font-medium text-neutral-400 peer-checked:text-amber-400">FOMO</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="emotion" type="radio"/>
<div className="flex flex-col items-center justify-center p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 peer-checked:bg-rose-500/10 peer-checked:border-rose-500/50 transition-all hover:border-neutral-700">
<span className="iconify text-neutral-400 peer-checked:text-rose-400 mb-2" data-icon="lucide:shield-alert" data-width="20"></span>
<span className="text-xs font-medium text-neutral-400 peer-checked:text-rose-400">Fear</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="emotion" type="radio"/>
<div className="flex flex-col items-center justify-center p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 peer-checked:bg-violet-500/10 peer-checked:border-violet-500/50 transition-all hover:border-neutral-700">
<span className="iconify text-neutral-400 peer-checked:text-violet-400 mb-2" data-icon="lucide:gem" data-width="20"></span>
<span className="text-xs font-medium text-neutral-400 peer-checked:text-violet-400">Greed</span>
</div>
</label>

<label className="cursor-pointer group">
<input className="peer sr-only" name="emotion" type="radio"/>
<div className="flex flex-col items-center justify-center p-3 rounded-lg border border-neutral-800 bg-neutral-900/50 peer-checked:bg-red-600/10 peer-checked:border-red-600/50 transition-all hover:border-neutral-700">
<span className="iconify text-neutral-400 peer-checked:text-red-500 mb-2" data-icon="lucide:sword" data-width="20"></span>
<span className="text-xs font-medium text-neutral-400 peer-checked:text-red-500">Revenge</span>
</div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
<div>
<div className="flex justify-between mb-3">
<label className="text-xs font-medium text-neutral-400">Confidence Level</label>
<span className="text-xs font-medium text-indigo-400">High</span>
</div>
<div className="relative w-full h-6 flex items-center">
<input className="z-20" max="100" min="0" type="range" value="80"/>
<div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-800 rounded-full -translate-y-1/2 overflow-hidden z-10 pointer-events-none">
<div className="h-full bg-gradient-to-r from-neutral-800 to-indigo-500 w-[80%]"></div>
</div>
</div>
</div>
<div>
<div className="flex justify-between mb-3">
<label className="text-xs font-medium text-neutral-400">Physical Energy</label>
<span className="text-xs font-medium text-neutral-500">Moderate</span>
</div>
<div className="relative w-full h-6 flex items-center">
<input className="z-20" max="100" min="0" type="range" value="60"/>
<div className="absolute top-1/2 left-0 w-full h-1 bg-neutral-800 rounded-full -translate-y-1/2 overflow-hidden z-10 pointer-events-none">
<div className="h-full bg-gradient-to-r from-neutral-800 to-emerald-500 w-[60%]"></div>
</div>
</div>
</div>
</div>

<div className="relative group">
<textarea className="w-full bg-neutral-950/50 border border-neutral-800 rounded-lg p-3 text-sm text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all resize-none h-24" placeholder="What is the market telling you right now? Are you forcing a trade?"></textarea>
<div className="absolute bottom-3 right-3 flex gap-2">
<button className="p-1.5 rounded hover:bg-neutral-800 text-neutral-500 transition-colors">
<span className="iconify" data-icon="lucide:mic" data-width="14"></span>
</button>
</div>
</div>

<div className="mt-6 flex items-center justify-end gap-3">
<span className="text-xs text-neutral-500 mr-2">Last entry: 15 mins ago</span>
<button className="px-4 py-2 bg-white text-black text-xs font-medium rounded-md hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                    Log Emotion
                                </button>
</div>
</div>

<div className="space-y-4">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Today's Pulse</h3>

<div className="flex gap-4 p-4 rounded-lg border border-neutral-800/50 bg-neutral-900/10 hover:border-neutral-800 transition-colors">
<div className="flex flex-col items-center gap-1">
<span className="text-xs font-mono text-neutral-500">10:42</span>
<div className="h-full w-px bg-neutral-800 mt-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-rose-400 border border-rose-500/20 bg-rose-500/10 px-1.5 py-0.5 rounded">Frustration</span>
<span className="text-xs text-neutral-400">Stopped out on NQ long</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Entered too early. Didn't wait for the 5m close. Felt the urge to make back the loss immediately.</p>
</div>
<div className="w-12 text-right">
<span className="block w-2 h-2 rounded-full bg-rose-500 ml-auto mb-1"></span>
<span className="text-[10px] text-neutral-600">Tilt: 7/10</span>
</div>
</div>

<div className="flex gap-4 p-4 rounded-lg border border-neutral-800/50 bg-neutral-900/10 hover:border-neutral-800 transition-colors">
<div className="flex flex-col items-center gap-1">
<span className="text-xs font-mono text-neutral-500">09:30</span>
<div className="h-full w-px bg-neutral-800 mt-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 rounded">Flow</span>
<span className="text-xs text-neutral-400">Market Open Prep</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Plan is set. Levels marked. Feeling calm and ready to execute only A+ setups.</p>
</div>
<div className="w-12 text-right">
<span className="block w-2 h-2 rounded-full bg-emerald-500 ml-auto mb-1"></span>
<span className="text-[10px] text-neutral-600">Tilt: 1/10</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-neutral-900/20 border border-neutral-800 rounded-xl p-6 backdrop-blur-sm">
<h3 className="text-xs font-medium text-neutral-400 mb-6">Performance Correlation</h3>
<div className="relative h-48 flex items-end gap-2 px-2 pb-6 border-b border-neutral-800">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-neutral-800/50 border-t border-dashed border-neutral-800"></div>
<div className="w-full h-px bg-neutral-800/50 border-t border-dashed border-neutral-800"></div>
<div className="w-full h-px bg-neutral-800/50 border-t border-dashed border-neutral-800"></div>
<div className="w-full h-px bg-neutral-800/50"></div>
</div>

<div className="flex-1 flex flex-col justify-end items-center gap-2 group cursor-pointer relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mb-8 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-12 group-hover:bg-neutral-700 transition-colors"></div>
<span className="text-[10px] text-neutral-600 absolute -bottom-5">M</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group cursor-pointer relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 mb-4 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-20 group-hover:bg-neutral-700 transition-colors"></div>
<span className="text-[10px] text-neutral-600 absolute -bottom-5">T</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group cursor-pointer relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500 mb-1 shadow-[0_0_8px_rgba(244,63,94,0.5)]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-8 group-hover:bg-neutral-700 transition-colors"></div>
<span className="text-[10px] text-neutral-600 absolute -bottom-5">W</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group cursor-pointer relative z-10">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mb-12 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<div className="w-full bg-neutral-100 rounded-t-sm h-32 shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>
<span className="text-[10px] text-white font-medium absolute -bottom-5">T</span>
</div>
<div className="flex-1 flex flex-col justify-end items-center gap-2 group cursor-pointer relative z-10 opacity-30">
<div className="w-full bg-neutral-800 rounded-t-sm h-0"></div>
<span className="text-[10px] text-neutral-600 absolute -bottom-5">F</span>
</div>
</div>
<div className="flex justify-between items-center mt-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-[10px] text-neutral-500">High Focus</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
<span className="text-[10px] text-neutral-500">Tilted</span>
</div>
</div>
</div>

<div className="bg-neutral-900/20 border border-neutral-800 rounded-xl p-6 backdrop-blur-sm">
<h3 className="text-xs font-medium text-neutral-400 mb-4">Daily Rules</h3>
<div className="space-y-3">
<label className="flex items-start gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all"></div>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px]" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs text-neutral-400 peer-checked:text-neutral-500 peer-checked:line-through transition-colors">No trading first 15 mins</span>
</label>
<label className="flex items-start gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all"></div>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px]" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs text-neutral-400 peer-checked:text-neutral-500 peer-checked:line-through transition-colors">Defined max loss (-$200)</span>
</label>
<label className="flex items-start gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all"></div>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px]" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs text-neutral-400 peer-checked:text-neutral-500 peer-checked:line-through transition-colors">Journal every execution</span>
</label>
<label className="flex items-start gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all"></div>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 left-[1px] top-[1px]" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs text-neutral-400 peer-checked:text-neutral-500 peer-checked:line-through transition-colors">Walk away after 3 losses</span>
</label>
</div>
</div>

<div className="rounded-xl p-6 bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/20">
<div className="flex items-center gap-3 mb-3">
<span className="iconify text-indigo-400" data-icon="lucide:lightbulb" data-width="18"></span>
<h3 className="text-xs font-medium text-indigo-200">AI Insight</h3>
</div>
<p className="text-xs text-indigo-200/70 leading-relaxed mb-4">
                                You tend to hesitate on entries between 10:30 AM and 11:00 AM. Your win rate drops by 15% when anxiety is logged above level 6.
                            </p>
<button className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors">
                                View Analysis <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-4 right-4 md:hidden">
<button className="w-12 h-12 bg-white rounded-full text-black flex items-center justify-center shadow-lg">
<span className="iconify" data-icon="lucide:plus" data-width="24"></span>
</button>
</div>

    </>
  );
}
