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
      

<aside className="w-72 glass-panel border-r border-white/5 flex-col justify-between hidden md:flex z-30 h-full">
<div>
<div className="p-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white neon-glow shadow-lg shadow-violet-900/20">
<iconify-icon icon="solar:command-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg text-white">NexusOS</span>
</div>
<nav className="px-5 space-y-1 mt-2">
<a className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/[0.03] text-white border border-white/5 shadow-inner" href="#">
<iconify-icon className="text-violet-400" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm font-medium">My Protocol</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-sm font-medium">Projects</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span className="text-sm font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all" href="#">
<iconify-icon icon="solar:gamepad-linear"></iconify-icon>
<span className="text-sm font-medium">Skills &amp; Gaming</span>
</a>
</nav>
<div className="mt-10 px-6">
<div className="flex justify-between items-center mb-4">
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Categories</span>
<iconify-icon className="text-slate-400 cursor-pointer hover:text-white transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
<ul className="space-y-4 mt-2">
<li className="flex items-center gap-3 text-sm text-slate-400 group cursor-pointer hover:text-slate-200 transition-colors">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></span>
<span className="font-medium">Prayer &amp; Spiritual</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 group cursor-pointer hover:text-slate-200 transition-colors">
<span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></span>
<span className="font-medium">Work</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 group cursor-pointer hover:text-slate-200 transition-colors">
<span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.5)]"></span>
<span className="font-medium">Skill Learning</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-400 group cursor-pointer hover:text-slate-200 transition-colors">
<span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></span>
<span className="font-medium">Personal</span>
</li>
</ul>
</div>
</div>
<div className="p-5 border-t border-white/5 bg-gradient-to-t from-black/40 to-transparent">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center overflow-hidden ring-2 ring-black">
<img alt="User" src="https://ui-avatars.com/api/?name=User&amp;background=0f172a&amp;color=8b5cf6"/>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full shadow-sm"></div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white">Productivity God</span>
<span className="text-[10px] text-slate-400 uppercase tracking-wide">Level 42 • <span className="text-violet-400 font-bold">Pro</span></span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative z-10 w-full">

<div className="absolute top-0 left-0 w-full h-96 bg-violet-900/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none translate-y-1/2"></div>

<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.6'}}>
</div>

<header className="h-16 md:h-20 border-b border-white/5 flex items-center justify-between px-6 md:px-10 bg-[#020617]/80 backdrop-blur-xl z-20 sticky top-0">
<div className="flex items-center gap-4">

<div className="md:hidden w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 flex items-center justify-center text-white neon-glow">
<iconify-icon icon="solar:command-linear" width="20"></iconify-icon>
</div>
<div>
<h1 className="text-base md:text-xl font-semibold text-white tracking-tight leading-none">Today's Protocol</h1>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-slate-400">Monday, Nov 24</span>
<span className="w-1 h-1 rounded-full bg-slate-600"></span>
<span className="text-xs text-violet-400 font-medium">8 Tasks left</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 md:gap-6">

<div className="hidden sm:flex items-center gap-3 bg-white/[0.03] border border-white/5 px-3 py-1.5 rounded-full">
<span className="text-xs font-medium text-slate-400">Focus</span>
<div className="relative inline-block w-8 mr-1 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer border-slate-700 top-[2px]" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-800 cursor-pointer border border-white/10" htmlFor="toggle"></label>
</div>
</div>
<div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
<button className="md:hidden text-white relative p-2 rounded-full hover:bg-white/5">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#020617]"></span>
</button>

<div className="hidden md:flex gap-4 text-slate-400">
<button className="hover:text-white transition-colors relative p-2 rounded-lg hover:bg-white/5">
<iconify-icon icon="solar:bell-linear" width="22"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<button className="hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
<iconify-icon icon="solar:settings-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</header>


<div className="flex-1 overflow-y-auto custom-scroll p-4 md:p-10 relative z-10 pb-28 md:pb-10">

<div className="flex md:grid md:grid-cols-4 gap-4 mb-8 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
<div className="glass-panel p-5 rounded-2xl min-w-[160px] md:min-w-0 snap-center relative overflow-hidden group">
<div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-violet-500" icon="solar:check-circle-linear" width="50"></iconify-icon>
</div>
<h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Tasks Done</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">12</span>
<span className="text-[10px] text-green-400 font-medium bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">+4</span>
</div>
</div>
<div className="glass-panel p-5 rounded-2xl min-w-[160px] md:min-w-0 snap-center relative overflow-hidden group">
<div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-cyan-500" icon="solar:bolt-linear" width="50"></iconify-icon>
</div>
<h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Productivity</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">84%</span>
<span className="text-[10px] text-green-400 font-medium bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">↑ 2.1%</span>
</div>
</div>
<div className="glass-panel p-5 rounded-2xl min-w-[160px] md:min-w-0 snap-center relative overflow-hidden group">
<h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Hydration</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">2.5L</span>
<span className="text-xs text-slate-500 font-medium">/ 3.5L</span>
</div>
<div className="w-full bg-slate-800/50 h-1.5 mt-3 rounded-full overflow-hidden border border-white/5">
<div className="bg-blue-500 h-full w-[70%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
<div className="glass-panel p-5 rounded-2xl min-w-[160px] md:min-w-0 snap-center relative overflow-hidden group bg-gradient-to-br from-violet-900/20 to-transparent">
<div className="absolute right-0 top-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-orange-500" icon="solar:flame-linear" width="50"></iconify-icon>
</div>
<h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Streak</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">14 Days</span>
</div>
</div>
</div>

<div className="flex flex-col xl:flex-row gap-8 animate-entry">

<div className="flex-1">
<div className="flex items-center justify-between mb-5">
<h2 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-violet-400" icon="solar:list-check-linear"></iconify-icon>
                            Active Tasks
                        </h2>

<button className="hidden md:flex text-xs bg-white text-black font-semibold hover:bg-slate-200 px-4 py-2 rounded-lg transition-colors items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:add-square-linear" width="16"></iconify-icon>
                            New Task
                        </button>
</div>
<div className="glass-panel rounded-2xl overflow-hidden shadow-2xl">

<div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-white/5 bg-white/[0.02] text-[10px] font-bold text-slate-500 uppercase tracking-widest">
<div className="col-span-1 text-center">Done</div>
<div className="col-span-6">Task Details</div>
<div className="col-span-3">Tag</div>
<div className="col-span-2 text-right">Schedule</div>
</div>

<div className="divide-y divide-white/5">

<div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 p-5 md:p-4 md:items-center task-row border-l-2 border-transparent hover:bg-white/[0.02] relative group">
<div className="flex justify-between md:contents">
<div className="col-span-1 flex justify-center pt-1 md:pt-0">
<label className="custom-checkbox cursor-pointer relative w-6 h-6 block">
<input className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-full h-full border border-slate-600 rounded-md flex items-center justify-center transition-all bg-slate-900/50">
<iconify-icon className="text-white opacity-0 transition-all transform scale-50" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
</label>
</div>
<div className="col-span-6 pl-3 md:pl-0 flex-1">
<div className="text-sm font-medium text-white leading-tight">Coding Session: React Hooks</div>
<div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:flag-bold" width="12"></iconify-icon>
                                            High Priority
                                        </div>
</div>

<div className="md:hidden text-xs text-slate-400 font-mono bg-white/5 px-2 py-1 rounded">4:00 PM</div>
</div>
<div className="col-span-3 pl-10 md:pl-0 mt-2 md:mt-0">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase bg-violet-500/10 text-violet-300 ring-1 ring-violet-500/20">
                                        Skill Learning
                                    </span>
</div>
<div className="col-span-2 text-right text-xs text-slate-400 font-mono hidden md:block">
                                    4:00 PM
                                </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 p-5 md:p-4 md:items-center task-row border-l-2 border-transparent hover:bg-white/[0.02] relative">
<div className="flex justify-between md:contents">
<div className="col-span-1 flex justify-center pt-1 md:pt-0">
<label className="custom-checkbox cursor-pointer relative w-6 h-6 block">
<input checked="" className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-full h-full border border-slate-600 rounded-md flex items-center justify-center transition-all bg-slate-900/50">
<iconify-icon className="text-white opacity-0 transition-all transform scale-50" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
</label>
</div>
<div className="col-span-6 pl-3 md:pl-0 opacity-50 flex-1">
<div className="text-sm font-medium text-slate-300 line-through">Dhuhr Prayer + Light Meal</div>
<div className="text-xs text-slate-500 mt-1">Mosque visit</div>
</div>
<div className="md:hidden text-xs text-slate-500 font-mono opacity-50">12:00 PM</div>
</div>
<div className="col-span-3 pl-10 md:pl-0 mt-2 md:mt-0 opacity-50">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase bg-green-500/10 text-green-400 ring-1 ring-green-500/20">
                                        Prayer
                                    </span>
</div>
<div className="col-span-2 text-right text-xs text-slate-500 font-mono hidden md:block opacity-50">
                                    12:00 PM
                                </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 p-5 md:p-4 md:items-center task-row border-l-2 border-transparent hover:bg-white/[0.02] relative">
<div className="flex justify-between md:contents">
<div className="col-span-1 flex justify-center pt-1 md:pt-0">
<label className="custom-checkbox cursor-pointer relative w-6 h-6 block">
<input className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-full h-full border border-slate-600 rounded-md flex items-center justify-center transition-all bg-slate-900/50">
<iconify-icon className="text-white opacity-0 transition-all transform scale-50" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
</label>
</div>
<div className="col-span-6 pl-3 md:pl-0 flex-1">
<div className="text-sm font-medium text-white">Workout Session</div>
<div className="text-xs text-slate-500 mt-1">Hydrate 1L • Chest Day</div>
</div>
<div className="md:hidden text-xs text-slate-400 font-mono bg-white/5 px-2 py-1 rounded">12:30 PM</div>
</div>
<div className="col-span-3 pl-10 md:pl-0 mt-2 md:mt-0">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20">
                                        Health
                                    </span>
</div>
<div className="col-span-2 text-right text-xs text-slate-400 font-mono hidden md:block">
                                    12:30 PM
                                </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 p-5 md:p-4 md:items-center task-row border-l-2 border-transparent bg-gradient-to-r from-orange-500/[0.02] to-transparent relative">
<div className="flex justify-between md:contents">
<div className="col-span-1 flex justify-center pt-1 md:pt-0">
<label className="custom-checkbox cursor-pointer relative w-6 h-6 block">
<input className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-full h-full border border-slate-600 rounded-md flex items-center justify-center transition-all bg-slate-900/50">
<iconify-icon className="text-white opacity-0 transition-all transform scale-50" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
</label>
</div>
<div className="col-span-6 pl-3 md:pl-0 flex-1">
<div className="text-sm font-medium text-white">Deep Work Block</div>
<div className="text-xs text-slate-500 mt-1">8 Hours Shift</div>
</div>
<div className="md:hidden text-xs text-slate-400 font-mono bg-white/5 px-2 py-1 rounded">8:00 PM</div>
</div>
<div className="col-span-3 pl-10 md:pl-0 mt-2 md:mt-0">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20">
                                        Work
                                    </span>
</div>
<div className="col-span-2 text-right text-xs text-slate-400 font-mono hidden md:block">
                                    8:00 PM
                                </div>
</div>
</div>
</div>
</div>

<div className="w-full xl:w-80 space-y-6">

<div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 opacity-50"></div>

<div className="absolute inset-0 bg-violet-500/5 blur-2xl rounded-full scale-50 group-hover:scale-75 transition-transform duration-700"></div>
<div className="flex justify-between w-full mb-4 px-1">
<h3 className="text-sm font-medium text-white">Focus Timer</h3>
<button className="text-slate-500 hover:text-white"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div className="relative w-44 h-44 flex items-center justify-center">

<svg className="w-full h-full transform -rotate-90">
<circle cx="88" cy="88" fill="transparent" r="80" stroke="#1e293b" strokeWidth="6"></circle>
<circle className="drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]" cx="88" cy="88" fill="transparent" r="80" stroke="url(#gradient)" stroke-dasharray="502" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="6"></circle>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#8b5cf6"></stop>
<stop offset="100%" stop-color="#06b6d4"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center z-10">
<span className="text-5xl font-light text-white tracking-tighter tabular-nums">25:00</span>
<span className="text-xs text-slate-400 mt-2 bg-white/5 px-2 py-1 rounded-full border border-white/5">Deep Coding</span>
</div>
</div>
<div className="flex gap-3 mt-6 w-full">
<button className="flex-1 bg-white text-black py-3 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 active:scale-95 transform duration-100">Start Session</button>
<button className="px-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors text-white active:scale-95">
<iconify-icon icon="solar:restart-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl">
<h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 flex justify-between items-center">
                            Upcoming
                            <iconify-icon className="text-slate-500" icon="solar:calendar-linear"></iconify-icon>
</h3>
<div className="space-y-4">
<div className="flex gap-4 group cursor-pointer">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-slate-800/50 border border-white/5 text-[10px] font-bold text-slate-400 group-hover:border-violet-500/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all">
<span>NOV</span>
<span className="text-base text-white">24</span>
</div>
<div className="flex-1 py-0.5">
<h4 className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">Scholarship Mgmt</h4>
<p className="text-xs text-slate-500 mt-0.5">5:00 PM • Tuesday</p>
</div>
</div>
</div>
</div>

<div className="glass-panel p-4 rounded-2xl flex gap-4 items-center group cursor-pointer hover:bg-white/[0.03] transition-colors relative overflow-hidden">

<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden shrink-0">
<img alt="Album" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<div className="flex gap-0.5 items-end h-4">
<div className="w-0.5 bg-white h-full animate-pulse"></div>
<div className="w-0.5 bg-white h-2 animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-0.5 bg-white h-3 animate-pulse" style={{animationDelay: '0.2s'}}></div>
</div>
</div>
</div>
<div className="flex-1 overflow-hidden">
<h4 className="text-sm font-medium text-white truncate">Lo-Fi Coding Beats</h4>
<p className="text-[10px] text-slate-400 uppercase tracking-wider truncate">Spotify • Connected</p>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:pause-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 md:hidden">

<div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl border-t border-white/10"></div>
<div className="relative flex justify-around items-center h-[80px] px-2 pb-safe">

<a className="flex flex-col items-center justify-center w-16 h-full text-violet-400 gap-1" href="#">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</a>

<a className="flex flex-col items-center justify-center w-16 h-full text-slate-500 hover:text-white transition-colors gap-1" href="#">
<iconify-icon className="text-2xl" icon="solar:calendar-linear"></iconify-icon>
<span className="text-[10px] font-medium">Plan</span>
</a>

<div className="relative -top-6">
<button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] border-4 border-[#020617] active:scale-95 transition-transform">
<iconify-icon className="text-3xl" icon="solar:add-linear"></iconify-icon>
</button>
</div>

<a className="flex flex-col items-center justify-center w-16 h-full text-slate-500 hover:text-white transition-colors gap-1" href="#">
<iconify-icon className="text-2xl" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-[10px] font-medium">Files</span>
</a>

<a className="flex flex-col items-center justify-center w-16 h-full text-slate-500 hover:text-white transition-colors gap-1" href="#">
<div className="w-6 h-6 rounded-full overflow-hidden border border-slate-600">
<img alt="Profile" src="https://ui-avatars.com/api/?name=User&amp;background=0f172a&amp;color=8b5cf6"/>
</div>
<span className="text-[10px] font-medium">Me</span>
</a>
</div>
</nav>

    </>
  );
}
