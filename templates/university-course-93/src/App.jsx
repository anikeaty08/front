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
      

<aside className="w-72 flex-shrink-0 border-r border-zinc-800/60 bg-zinc-950 flex flex-col justify-between h-full z-20">
<div className="p-4 flex flex-col gap-6">

<div className="flex items-center gap-2 px-2 pt-2">
<div className="w-6 h-6 rounded bg-zinc-100 text-zinc-950 flex items-center justify-center font-bold text-xs tracking-tight">H</div>
<span className="text-zinc-100 font-medium tracking-tight">HuskySearch</span>
</div>

<div className="relative group">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500 group-focus-within:text-zinc-300">
<span className="iconify" data-height="16" data-icon="lucide:search" data-width="16" strokeWidth="1.5"></span>
</span>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-sm text-zinc-200 rounded-lg pl-9 pr-3 py-2 placeholder:text-zinc-600 focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all" placeholder="Quick find..." type="text"/>
</div>

<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-zinc-900 text-zinc-100 border border-zinc-800/50 shadow-sm" href="#">
<span className="iconify" data-icon="lucide:home" strokeWidth="1.5" width="16"></span>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 transition-colors" href="#">
<span className="iconify" data-icon="lucide:book-open" strokeWidth="1.5" width="16"></span>
<span className="text-sm font-medium">Courses</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 transition-colors" href="#">
<span className="iconify" data-icon="lucide:graduation-cap" strokeWidth="1.5" width="16"></span>
<span className="text-sm font-medium">Majors</span>
</a>
<a className="flex items-center justify-between px-2 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:calendar" strokeWidth="1.5" width="16"></span>
<span className="text-sm font-medium">Schedule</span>
</div>
<span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-medium px-1.5 py-0.5 rounded border border-indigo-500/20">Draft</span>
</a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 transition-colors" href="#">
<span className="iconify" data-icon="lucide:git-branch" strokeWidth="1.5" width="16"></span>
<span className="text-sm font-medium">Prereq Graph</span>
</a>
</nav>

<div className="mt-2">
<h3 className="px-2 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Pinned</h3>
<div className="flex flex-col gap-1">
<a className="flex items-center justify-between px-2 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 transition-colors group" href="#">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<span className="text-sm font-medium">CSE Degree</span>
</div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 transition-colors group" href="#">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium">ARCH 150</span>
</div>
</a>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800/60 flex flex-col gap-4">
<div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer transition-colors group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-zinc-100 text-xs font-medium border border-zinc-700">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">Computer Science</p>
</div>
<span className="iconify text-zinc-600 group-hover:text-zinc-400" data-icon="lucide:settings-2" strokeWidth="1.5" width="16"></span>
</div>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto relative bg-zinc-950">

<div className="relative border-b border-zinc-800/60 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 pt-16 pb-12 px-8">
<div className="max-w-4xl mx-auto space-y-8">
<div className="space-y-2">
<h1 className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight">What do you want to plan today?</h1>
<p className="text-zinc-500 text-sm">Fall Quarter 2024 Registration opens in 12 days.</p>
</div>

<div className="relative group max-w-2xl shadow-lg shadow-black/50 rounded-xl">
<span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400 group-focus-within:text-zinc-200">
<span className="iconify" data-icon="lucide:search" strokeWidth="1.5" width="20"></span>
</span>
<input className="w-full h-14 bg-zinc-900/80 backdrop-blur border border-zinc-700/50 text-base text-zinc-100 rounded-xl pl-12 pr-4 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-zinc-600" placeholder="Search courses, majors, or requirements..." type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3">
<kbd className="hidden md:inline-flex items-center gap-0.5 h-6 rounded border border-zinc-700 bg-zinc-800 px-2 font-mono text-[10px] font-medium text-zinc-500">
                            /
                        </kbd>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
<button className="flex flex-col items-start gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all group text-left">
<div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-colors">
<span className="iconify" data-icon="lucide:book-open" width="20"></span>
</div>
<div>
<span className="block text-sm font-medium text-zinc-200">Browse Courses</span>
<span className="text-xs text-zinc-500">Find classes</span>
</div>
</button>
<button className="flex flex-col items-start gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all group text-left">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-300 transition-colors">
<span className="iconify" data-icon="lucide:graduation-cap" width="20"></span>
</div>
<div>
<span className="block text-sm font-medium text-zinc-200">Explore Majors</span>
<span className="text-xs text-zinc-500">View requirements</span>
</div>
</button>
<button className="flex flex-col items-start gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all group text-left">
<div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20 group-hover:text-orange-300 transition-colors">
<span className="iconify" data-icon="lucide:git-branch" width="20"></span>
</div>
<div>
<span className="block text-sm font-medium text-zinc-200">Check Prereqs</span>
<span className="text-xs text-zinc-500">Visualize path</span>
</div>
</button>
<button className="flex flex-col items-start gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all group text-left">
<div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500/20 group-hover:text-pink-300 transition-colors">
<span className="iconify" data-icon="lucide:layout-grid" width="20"></span>
</div>
<div>
<span className="block text-sm font-medium text-zinc-200">Build Schedule</span>
<span className="text-xs text-zinc-500">Plan your quarter</span>
</div>
</button>
</div>
</div>
</div>
<div className="p-8 max-w-7xl mx-auto space-y-16 pb-24">

<section className="space-y-4">
<div className="flex items-baseline justify-between">
<div>
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">Jump back in</h2>
</div>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">View history</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<a className="group block p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-200" href="#">
<div className="flex items-center gap-3 mb-3">
<div className="p-1.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
<span className="iconify" data-icon="lucide:calendar" width="16"></span>
</div>
<span className="text-sm font-medium text-zinc-200">Fall 2024 Draft</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span>Edited 2 hours ago</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>3 Courses selected</span>
</div>
</a>

<a className="group block p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-200" href="#">
<div className="flex items-center gap-3 mb-3">
<div className="p-1.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
<span className="iconify" data-icon="lucide:search" width="16"></span>
</div>
<span className="text-sm font-medium text-zinc-200">Computer Science</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span>Major Requirements</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Visited yesterday</span>
</div>
</a>

<a className="group block p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-200" href="#">
<div className="flex items-center gap-3 mb-3">
<div className="p-1.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/50">
<span className="iconify" data-icon="lucide:book-open" width="16"></span>
</div>
<span className="text-sm font-medium text-zinc-200">CSE 311</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span>Foundations I</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Visited yesterday</span>
</div>
</a>
</div>
</section>

<section className="space-y-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-xl font-medium text-zinc-100 tracking-tight">Recommended for Computer Science</h2>
<p className="text-sm text-zinc-500 mt-1">Courses that fulfill your remaining degree requirements</p>
</div>

<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-900 shadow-sm transition-colors">
                            For You
                        </button>
<button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors">
                            NSc
                        </button>
<button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors">
                            SSc
                        </button>
<button className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors">
                            A&amp;H
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<a className="group block relative bg-zinc-900/20 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 h-full flex flex-col justify-between" href="#">
<div>
<div className="flex items-start justify-between mb-3">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">NSc</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">RSN</span>
</div>
<div className="flex items-center gap-1.5 text-emerald-400/80 text-[10px] bg-emerald-500/5 px-2 py-0.5 rounded-full border border-emerald-500/10">
<span className="iconify" data-icon="lucide:check-circle" width="10"></span>
                                    Eligible
                                </div>
</div>
<div className="mb-3">
<div className="flex items-baseline gap-2 mb-1">
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight group-hover:text-indigo-300 transition-colors">MATH 124</h3>
<span className="text-sm text-zinc-500 font-mono">(5)</span>
</div>
<p className="text-sm text-zinc-400 line-clamp-1">Calc Analyt Geom I</p>
</div>

<p className="text-xs text-zinc-500 mt-2 flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:key" width="12"></span>
                                Unlocks 12+ follow-up courses
                            </p>
</div>
<div className="mt-5 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
<span className="text-zinc-400">960 avail</span>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-zinc-200">
<span className="iconify" data-icon="lucide:plus" width="16"></span>
</button>
</div>
</div>
</a>

<a className="group block relative bg-zinc-900/20 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 h-full flex flex-col justify-between" href="#">
<div>
<div className="flex items-start justify-between mb-3">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">SSc</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-500 text-[10px] bg-zinc-900/50 px-2 py-0.5 rounded-full border border-zinc-800">
<span className="iconify" data-icon="lucide:clock" width="10"></span>
                                    Usually Full
                                </div>
</div>
<div className="mb-3">
<div className="flex items-baseline gap-2 mb-1">
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight group-hover:text-pink-300 transition-colors">INFO 200</h3>
<span className="text-sm text-zinc-500 font-mono">(5)</span>
</div>
<p className="text-sm text-zinc-400 line-clamp-1">Intellectual Foundations</p>
</div>

<p className="text-xs text-zinc-500 mt-2 flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:sparkles" width="12"></span>
                                Popular elective for CSE
                            </p>
</div>
<div className="mt-5 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></span>
<span className="text-zinc-400">12 avail of 210</span>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-zinc-200">
<span className="iconify" data-icon="lucide:plus" width="16"></span>
</button>
</div>
</div>
</a>

<a className="group block relative bg-zinc-900/20 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-900/50 transition-all duration-300 h-full flex flex-col justify-between" href="#">
<div>
<div className="flex items-start justify-between mb-3">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">A&amp;H</span>
</div>
<div className="flex items-center gap-1.5 text-emerald-400/80 text-[10px] bg-emerald-500/5 px-2 py-0.5 rounded-full border border-emerald-500/10">
<span className="iconify" data-icon="lucide:check-circle" width="10"></span>
                                    Eligible
                                </div>
</div>
<div className="mb-3">
<div className="flex items-baseline gap-2 mb-1">
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight group-hover:text-orange-300 transition-colors">ARCH 150</h3>
<span className="text-sm text-zinc-500 font-mono">(3)</span>
</div>
<p className="text-sm text-zinc-400 line-clamp-1">Appreciation of Arch I</p>
</div>

<p className="text-xs text-zinc-500 mt-2 flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:pie-chart" width="12"></span>
                                Fulfills 15% of A&amp;H Req
                            </p>
</div>
<div className="mt-5 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
<span className="text-zinc-400">450 avail</span>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-zinc-200">
<span className="iconify" data-icon="lucide:plus" width="16"></span>
</button>
</div>
</div>
</a>
</div>
</section>

<section className="space-y-6 pt-6 border-t border-zinc-800/40">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-medium text-zinc-100 tracking-tight">Trending in STEM</h2>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:chevron-left" width="16"></span>
</button>
<button className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" width="16"></span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group p-4 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:bg-zinc-900 hover:border-zinc-700 transition-all" href="#">
<div className="flex justify-between items-start">
<span className="text-sm font-semibold text-zinc-200">CSE 142</span>
<span className="text-xs text-zinc-600 group-hover:text-zinc-400">12k views</span>
</div>
<p className="text-xs text-zinc-500 mt-1 truncate">Computer Programming I</p>
</a>

<a className="group p-4 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:bg-zinc-900 hover:border-zinc-700 transition-all" href="#">
<div className="flex justify-between items-start">
<span className="text-sm font-semibold text-zinc-200">PSYCH 101</span>
<span className="text-xs text-zinc-600 group-hover:text-zinc-400">8k views</span>
</div>
<p className="text-xs text-zinc-500 mt-1 truncate">Intro to Psychology</p>
</a>

<a className="group p-4 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:bg-zinc-900 hover:border-zinc-700 transition-all" href="#">
<div className="flex justify-between items-start">
<span className="text-sm font-semibold text-zinc-200">ECON 200</span>
<span className="text-xs text-zinc-600 group-hover:text-zinc-400">6.5k views</span>
</div>
<p className="text-xs text-zinc-500 mt-1 truncate">Microeconomics</p>
</a>

<a className="group p-4 rounded-xl border border-zinc-800 bg-zinc-900/10 hover:bg-zinc-900 hover:border-zinc-700 transition-all" href="#">
<div className="flex justify-between items-start">
<span className="text-sm font-semibold text-zinc-200">BIOL 180</span>
<span className="text-xs text-zinc-600 group-hover:text-zinc-400">5k views</span>
</div>
<p className="text-xs text-zinc-500 mt-1 truncate">Intro Biology</p>
</a>
</div>
</section>
</div>
</main>

    </>
  );
}
