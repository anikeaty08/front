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
      

<div className="bg-neutral-950 w-full max-w-md h-[100dvh] sm:h-[840px] sm:rounded-[40px] sm:shadow-2xl overflow-hidden relative border-neutral-800 sm:border-[8px] flex flex-col">

<header className="pt-12 pb-3 px-6 flex flex-col gap-4 bg-neutral-950/90 backdrop-blur-md sticky top-0 z-30 border-b border-neutral-900 shadow-sm">
<div className="flex justify-between items-end">
<div>
<p className="text-xs text-neutral-400 font-normal mb-0.5 uppercase tracking-widest">Fri, Oct 27</p>
<h1 className="text-2xl font-medium tracking-tight text-white">Today</h1>
</div>
<div className="text-xs tracking-tighter font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full">
                    SLP
                </div>
</div>

<details className="bg-[#111111] border border-neutral-800/80 rounded-xl group overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden w-full shadow-sm">
<summary className="p-3 cursor-pointer list-none relative flex flex-col hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-2 pr-8">
<h3 className="text-sm font-medium tracking-tight text-neutral-100">Sleep Restriction</h3>
<span className="text-xs font-medium text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20 leading-none">Week 3 of 6</span>
</div>

<div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden mt-2.5">
<div className="h-full bg-indigo-500 rounded-full w-[45%] relative">
<div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
</div>
</div>
<div className="absolute right-3 top-3 text-neutral-500 group-open:-rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</summary>

<div className="px-4 pb-5 pt-2 border-t border-neutral-800/50 mt-1">
<p className="text-xs text-neutral-400 leading-relaxed mb-4">
                        Consolidating your sleep window to increase sleep drive and reduce wakefulness in the middle of the night.
                    </p>
<button className="w-full mb-5 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg text-xs font-medium text-neutral-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:book-bookmark-linear" width="16"></iconify-icon> Review Phase Material
                    </button>

<div className="ml-2 pl-5 border-l border-neutral-800 space-y-5 relative">
<div className="relative">
<div className="absolute -left-[29px] top-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 ring-4 ring-[#111111]">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-300">Phase 1: Sleep Logging</h4>
</div>
</div>
<div className="relative">
<div className="absolute -left-[29px] top-0 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_10px_rgba(99,102,241,0.4)] ring-4 ring-[#111111]">
<iconify-icon icon="solar:play-bold" width="10"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-indigo-400">Phase 2: Sleep Restriction</h4>
</div>
</div>
</div>
</div>
</details>
</header>

<main className="flex-1 overflow-y-auto px-6 pb-28 pt-4 space-y-8 hide-scrollbar">

<section className="space-y-3">
<div className="flex justify-between items-end">
<h2 className="text-sm font-normal text-neutral-400">Weekly Goals</h2>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">85% Avg</span>
</div>
<div className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-4">

<div className="relative grid grid-cols-[minmax(0,1fr)_repeat(7,20px)] gap-y-3 gap-x-2 place-items-center w-full">

<div className="absolute right-[52px] -top-1.5 -bottom-1.5 w-7 bg-neutral-800/40 border border-neutral-700/50 rounded-lg pointer-events-none z-0"></div>

<div className="col-start-1 justify-self-start text-xs text-neutral-500 font-medium">Habit</div>
<div className="text-xs text-neutral-600 font-normal z-10">M</div>
<div className="text-xs text-neutral-600 font-normal z-10">T</div>
<div className="text-xs text-neutral-600 font-normal z-10">W</div>
<div className="text-xs text-neutral-600 font-normal z-10">T</div>
<div className="text-xs text-emerald-400 font-medium z-10">F</div>
<div className="text-xs text-neutral-600 font-normal z-10">S</div>
<div className="text-xs text-neutral-600 font-normal z-10">S</div>

<div className="col-start-1 justify-self-start flex items-center gap-2.5 w-full z-10">
<div className="w-6 h-6 rounded bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 shrink-0">
<iconify-icon icon="solar:cup-hot-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-300 truncate">No Caffeine (12pm)</span>
</div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<div className="w-5 h-5 rounded bg-neutral-800/50 border border-neutral-700/30 z-10"></div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<input checked="" className="appearance-none w-5 h-5 rounded border border-emerald-400 bg-emerald-500 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-center bg-no-repeat bg-[length:12px_12px] cursor-pointer ring-2 ring-emerald-500/30 shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all z-10 m-0" type="checkbox"/>
<div className="w-5 h-5 rounded bg-transparent border border-neutral-700 border-dashed opacity-40 z-10"></div>
<div className="w-5 h-5 rounded bg-transparent border border-neutral-700 border-dashed opacity-40 z-10"></div>

<div className="col-start-1 justify-self-start flex items-center gap-2.5 w-full z-10">
<div className="w-6 h-6 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shrink-0">
<iconify-icon icon="solar:smartphone-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-300 truncate">No Screens (1h)</span>
</div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<div className="w-5 h-5 rounded bg-neutral-800/50 border border-neutral-700/30 z-10"></div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<input className="appearance-none w-5 h-5 rounded border border-neutral-400 bg-neutral-800 cursor-pointer ring-2 ring-neutral-500/20 shadow-[0_0_12px_rgba(255,255,255,0.05)] hover:border-neutral-300 checked:bg-emerald-500 checked:border-emerald-400 checked:ring-emerald-500/30 checked:shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all z-10 m-0" type="checkbox"/>
<div className="w-5 h-5 rounded bg-transparent border border-neutral-700 border-dashed opacity-40 z-10"></div>
<div className="w-5 h-5 rounded bg-transparent border border-neutral-700 border-dashed opacity-40 z-10"></div>

<div className="col-start-1 justify-self-start flex items-center gap-2.5 w-full z-10">
<div className="w-6 h-6 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
<iconify-icon icon="solar:moon-sleep-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-300 truncate">Bedtime Routine</span>
</div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<div className="w-5 h-5 rounded bg-emerald-500/30 border border-emerald-500/20 z-10"></div>
<div className="w-5 h-5 rounded bg-neutral-800/50 border border-neutral-700/30 z-10"></div>
<input checked="" className="appearance-none w-5 h-5 rounded border border-emerald-400 bg-emerald-500 bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%2220%206%209%2017%204%2012%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-center bg-no-repeat bg-[length:12px_12px] cursor-pointer ring-2 ring-emerald-500/30 shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all z-10 m-0" type="checkbox"/>
<div className="w-5 h-5 rounded bg-transparent border border-neutral-700 border-dashed opacity-40 z-10"></div>
<div className="w-5 h-5 rounded bg-transparent border border-neutral-700 border-dashed opacity-40 z-10"></div>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex justify-between items-end">
<h2 className="text-sm font-normal text-neutral-400">Sleep Library</h2>
<span className="text-xs text-indigo-400 hover:text-indigo-300 cursor-pointer transition-colors font-medium">View All</span>
</div>
<div className="flex overflow-x-auto gap-3 pb-2 -mx-6 px-6 snap-x hide-scrollbar">
<div className="min-w-[190px] bg-[#111111] border border-neutral-800/80 rounded-2xl p-2.5 snap-start hover:bg-neutral-900/80 transition-colors cursor-pointer group flex items-center gap-3 shadow-sm">
<div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<div className="overflow-hidden">
<h4 className="text-xs font-normal text-neutral-200 mb-0 tracking-tight truncate leading-tight">Wind Down Scan</h4>
<p className="text-xs text-neutral-500 truncate leading-tight mt-0.5 opacity-80">10 min • Body Scan</p>
</div>
</div>
<div className="min-w-[190px] bg-[#111111] border border-neutral-800/80 rounded-2xl p-2.5 snap-start hover:bg-neutral-900/80 transition-colors cursor-pointer group flex items-center gap-3 shadow-sm">
<div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform duration-300 shrink-0">
<iconify-icon icon="solar:waterdrop-linear" width="20"></iconify-icon>
</div>
<div className="overflow-hidden">
<h4 className="text-xs font-normal text-neutral-200 mb-0 tracking-tight truncate leading-tight">Brown Noise</h4>
<p className="text-xs text-neutral-500 truncate leading-tight mt-0.5 opacity-80">Continuous Sound</p>
</div>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex justify-between items-end">
<h2 className="text-sm font-normal text-neutral-400">Last Night</h2>

<div className="flex items-center gap-2 bg-[#111111] px-2.5 py-1.5 rounded-full border border-neutral-800/80 shadow-sm">
<iconify-icon className="text-neutral-400" icon="solar:smartwatch-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-neutral-300 leading-none tracking-tight">Garmin</span>
<span className="w-px h-3 bg-neutral-800"></span>
<div className="flex items-center gap-1">
<iconify-icon className="text-emerald-500" icon="solar:refresh-circle-linear" width="14"></iconify-icon>
<span className="text-xs text-neutral-500 leading-none">Synced 8:05 AM</span>
</div>
</div>
</div>
<div className="bg-[#111111] border border-neutral-800/80 rounded-2xl p-5 space-y-5">

<div className="flex items-center gap-5">
<div className="flex flex-col items-center justify-center p-3.5 bg-neutral-900/50 rounded-xl border border-neutral-800/50 min-w-[84px]">
<span className="text-3xl font-medium tracking-tight text-indigo-400">84</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider mt-1 font-medium">Efficiency</span>
</div>
<div className="flex-1 grid grid-cols-2 gap-y-3 gap-x-4">
<div>
<p className="text-xs text-neutral-500 mb-0.5">Total Sleep</p>
<p className="text-sm font-medium text-neutral-100">6h 15m</p>
</div>
<div>
<p className="text-xs text-neutral-500 mb-0.5">Fall Asleep</p>
<p className="text-sm font-medium text-neutral-100">18 min</p>
</div>
<div>
<p className="text-xs text-neutral-500 mb-0.5">WASO</p>
<p className="text-sm font-medium text-neutral-100">42 min</p>
</div>
<div>
<p className="text-xs text-neutral-500 mb-0.5">Prescribed</p>
<p className="text-sm font-medium text-neutral-100">11:30-5:30</p>
</div>
</div>
</div>
<div className="w-full h-px bg-neutral-800/50"></div>

<div className="space-y-4 pt-1 pb-1">
<div className="flex justify-between items-center">
<span className="text-xs font-normal text-neutral-400 uppercase tracking-widest">Restfulness</span>
<div className="flex gap-1.5">
<button className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors">1</button>
<button className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors">2</button>
<button className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors">3</button>
<button className="w-7 h-7 rounded-full bg-indigo-500 border border-indigo-400 flex items-center justify-center text-xs text-white shadow-sm ring-2 ring-indigo-500/20 font-medium">4</button>
<button className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors">5</button>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-normal text-neutral-400 uppercase tracking-widest">Wakefulness</span>
<div className="flex gap-1.5">
<button className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors">1</button>
<button className="w-7 h-7 rounded-full bg-indigo-500 border border-indigo-400 flex items-center justify-center text-xs text-white shadow-sm ring-2 ring-indigo-500/20 font-medium">2</button>
<button className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors">3</button>
<button className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors">4</button>
<button className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs text-neutral-500 hover:text-neutral-300 transition-colors">5</button>
</div>
</div>
<div className="flex justify-between items-center pt-1">
<span className="text-xs font-normal text-neutral-400 uppercase tracking-widest">Window Adherence</span>
<div className="flex bg-neutral-900/80 rounded-lg p-0.5 border border-neutral-800 shadow-sm">
<button className="px-3 py-1.5 text-xs font-medium rounded-md bg-neutral-800 text-neutral-200 border border-neutral-700 shadow-sm transition-colors">Met</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-md text-neutral-500 hover:text-neutral-300 transition-colors">Missed</button>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="absolute bottom-0 w-full bg-neutral-950/90 backdrop-blur-xl border-t border-neutral-900 px-8 py-4 flex justify-between items-center z-30 pb-8 sm:pb-4">
<button className="flex flex-col items-center gap-1 text-indigo-400 transition-colors">
<iconify-icon icon="solar:home-smile-linear" width="22"></iconify-icon>
<span className="text-xs font-medium">Today</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="22"></iconify-icon>
<span className="text-xs font-medium">Trends</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors relative">
<iconify-icon icon="solar:book-bookmark-linear" width="22"></iconify-icon>
<span className="text-xs font-medium">Course</span>
<div className="absolute top-0 right-1 w-2 h-2 bg-indigo-500 rounded-full border border-neutral-950"></div>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors">
<iconify-icon icon="solar:user-linear" width="22"></iconify-icon>
<span className="text-xs font-medium">Profile</span>
</button>
</nav>
</div>

    </>
  );
}
