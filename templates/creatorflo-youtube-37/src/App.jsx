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
      

<aside className="w-64 border-r border-zinc-800/60 bg-black/50 flex flex-col justify-between h-full shrink-0 z-20">
<div>

<div className="h-14 flex items-center px-4 border-b border-zinc-800/60">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black font-semibold tracking-tighter text-xs">
                        CF
                    </div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">CreatorFlow</span>
</div>
<div className="ml-auto">
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:double-alt-arrow-left-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="px-3 py-4">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors group">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
<span className="text-sm text-zinc-200 font-medium">Main Channel</span>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<nav className="px-3 space-y-1">
<div className="px-3 pb-2 pt-1 text-xs font-medium text-zinc-600 uppercase tracking-widest">Platform</div>
<a className="nav-item active flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200" href="#">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:text-zinc-200 hover:bg-zinc-900/40 transition-all duration-200" href="#">
<iconify-icon icon="solar:chart-2-linear" width="18"></iconify-icon>
                    Channel Audit
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:text-zinc-200 hover:bg-zinc-900/40 transition-all duration-200" href="#">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
                    Niche Research
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:text-zinc-200 hover:bg-zinc-900/40 transition-all duration-200" href="#">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                    Idea Generator
                    <span className="ml-auto text-[10px] bg-indigo-500/10 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-500/20">AI</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:text-zinc-200 hover:bg-zinc-900/40 transition-all duration-200" href="#">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                    Calendar
                </a>
</nav>
<div className="mt-8 px-3 space-y-1">
<div className="px-3 pb-2 text-xs font-medium text-zinc-600 uppercase tracking-widest">Library</div>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:text-zinc-200 hover:bg-zinc-900/40 transition-all duration-200" href="#">
<iconify-icon icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                    Assets
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:text-zinc-200 hover:bg-zinc-900/40 transition-all duration-200" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Competitors
                </a>
</div>
</div>

<div className="p-3 border-t border-zinc-800/60">
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-zinc-900/50 cursor-pointer transition-colors">
<img alt="User" className="w-8 h-8 rounded-full border border-zinc-700" src="https://ui-avatars.com/api/?name=Alex+Creator&amp;background=27272a&amp;color=a1a1aa"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Alex Creator</span>
<span className="text-[10px] text-zinc-500">Pro Plan</span>
</div>
<iconify-icon className="ml-auto text-zinc-500 hover:text-white" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-black">

<div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-indigo-900/5 via-transparent to-transparent pointer-events-none"></div>

<header className="h-14 flex items-center justify-between px-6 border-b border-zinc-800/60 z-10 bg-black/50 backdrop-blur-sm">
<div className="flex items-center gap-2 text-sm">
<span className="text-zinc-500">Workspace</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-zinc-900/50 border border-zinc-800 rounded-full pl-9 pr-4 py-1.5 text-xs w-64 text-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Search ideas, videos, stats..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="text-[10px] border border-zinc-700 rounded px-1 text-zinc-500">⌘K</span>
</div>
</div>
<button className="relative text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border-2 border-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-8 pb-20">

<section className="animate-enter" style={{animationDelay: '0ms'}}>
<div className="flex items-end justify-between mb-6">
<div>
<h1 className="text-xl font-medium text-white tracking-tight">Channel Pulse</h1>
<p className="text-sm text-zinc-500 mt-1">Your content performance vs. previous 28 days.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-300 hover:border-zinc-700 transition-all">
<iconify-icon icon="solar:calendar-date-linear"></iconify-icon> Last 28 Days
                        </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-all">
<iconify-icon icon="solar:upload-linear"></iconify-icon> New Upload
                        </button>
</div>
</div>
<div className="grid grid-cols-4 gap-4">

<div className="metric-card border border-zinc-800/80 rounded-xl p-5 relative overflow-hidden group">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-zinc-500">Subscribers</span>
<iconify-icon className="text-zinc-600" icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">12,405</span>
<span className="text-xs text-emerald-500 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon> +12%
                            </span>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
<div className="h-full bg-emerald-500 w-[70%]"></div>
</div>
</div>

<div className="metric-card border border-zinc-800/80 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-zinc-500">Views</span>
<iconify-icon className="text-zinc-600" icon="solar:eye-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">84.2K</span>
<span className="text-xs text-emerald-500 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon> +5.4%
                            </span>
</div>
<div className="mt-3 h-8 flex items-end gap-1 opacity-50">
<div className="w-1/6 bg-zinc-600 h-3 rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-5 rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-4 rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-8 rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-6 rounded-t-sm"></div>
<div className="w-1/6 bg-zinc-600 h-4 rounded-t-sm"></div>
</div>
</div>

<div className="metric-card border border-zinc-800/80 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-zinc-500">CTR (Avg)</span>
<iconify-icon className="text-zinc-600" icon="solar:cursor-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">6.8%</span>
<span className="text-xs text-rose-500 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-down-linear" width="12"></iconify-icon> -1.2%
                            </span>
</div>
<p className="text-[10px] text-zinc-600 mt-2">Needs thumbnail optimization.</p>
</div>

<div className="metric-card border border-zinc-800/80 rounded-xl p-5 relative overflow-hidden">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium text-zinc-500">Est. Revenue</span>
<iconify-icon className="text-zinc-600" icon="solar:dollar-linear" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">$942.50</span>
<span className="text-xs text-emerald-500 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon> +8%
                            </span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-12 gap-6 animate-enter" style={{animationDelay: '100ms'}}>

<div className="col-span-7 flex flex-col gap-4">
<div className="glass-panel rounded-xl p-6 relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-medium text-white flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:stars-minimalistic-linear"></iconify-icon>
                                AI Idea Studio
                            </h2>
<span className="text-[10px] uppercase tracking-wider text-zinc-600 border border-zinc-800 rounded px-1.5 py-0.5">GPT-4 Turbo</span>
</div>

<div className="space-y-3">
<div>
<label className="text-xs font-medium text-zinc-400 ml-1 mb-1.5 block">Niche / Topic Focus</label>
<div className="flex gap-2">
<input className="flex-1 bg-black/40 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all placeholder:text-zinc-600" type="text" value="Productivity for Designers"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-indigo-900/20">
                                        Generate
                                        <iconify-icon icon="solar:magic-stick-3-bold"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-2 mt-2">
<button className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900/30 text-[10px] text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors">Target: Growth</button>
<button className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900/30 text-[10px] text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors">Format: Tutorial</button>
</div>
</div>

<div className="mt-6 space-y-3">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">Suggested Concepts</div>

<div className="group border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-indigo-500/30 rounded-lg p-4 transition-all cursor-pointer relative">
<div className="flex justify-between items-start">
<div className="flex-1 pr-4">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Stop using Figma for this (Do this instead)</h3>
<p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
<span className="text-indigo-400 font-medium">Hook:</span> "I wasted 40 hours on this design..."<br/>
<span className="text-emerald-500/80">Growth Signal:</span> High demand, low competition.
                                        </p>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">92 Score</span>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-all">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group border border-zinc-800/60 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-indigo-500/30 rounded-lg p-4 transition-all cursor-pointer relative">
<div className="flex justify-between items-start">
<div className="flex-1 pr-4">
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">The minimal desk setup for 2024 (Under $500)</h3>
<p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
<span className="text-indigo-400 font-medium">Hook:</span> Visual montage of clean desk...<br/>
<span className="text-yellow-500/80">Monetization:</span> High affiliate potential.
                                        </p>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-xs font-medium text-yellow-400 bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/20">85 Score</span>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-all">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-5 flex flex-col gap-4">

<div className="glass-panel rounded-xl p-5 h-full">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-medium text-white">Production Pipeline</h2>
<iconify-icon className="text-zinc-500 cursor-pointer hover:text-zinc-300" icon="solar:sort-from-top-to-bottom-linear"></iconify-icon>
</div>
<div className="space-y-3 relative">

<div className="absolute left-3.5 top-2 bottom-2 w-[1px] bg-zinc-800"></div>

<div className="relative pl-8">
<div className="absolute left-1.5 top-1.5 w-4 h-4 bg-black border-2 border-indigo-500 rounded-full z-10"></div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 hover:border-zinc-700 transition-colors group">
<div className="flex justify-between mb-1">
<span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-wider">Scripting</span>
<iconify-icon className="text-zinc-600 cursor-pointer" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<h4 className="text-sm text-zinc-200 font-medium leading-tight">AI Tools you missed in 2023</h4>
<div className="mt-3 flex items-center justify-between">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-[8px] text-white">AC</div>
</div>
<span className="text-[10px] text-zinc-500">Due in 2 days</span>
</div>
</div>
</div>

<div className="relative pl-8">
<div className="absolute left-1.5 top-1.5 w-4 h-4 bg-black border-2 border-amber-500 rounded-full z-10"></div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 hover:border-zinc-700 transition-colors group">
<div className="flex justify-between mb-1">
<span className="text-[10px] font-semibold text-amber-500 uppercase tracking-wider">Editing</span>
<iconify-icon className="text-zinc-600 cursor-pointer" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<h4 className="text-sm text-zinc-200 font-medium leading-tight">Day in the life: Solo Creator</h4>
<div className="mt-3 flex items-center justify-between">
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden max-w-[80px]">
<div className="w-[60%] h-full bg-amber-500"></div>
</div>
<span className="text-[10px] text-zinc-500">60% Done</span>
</div>
</div>
</div>

<div className="relative pl-8">
<div className="absolute left-1.5 top-1.5 w-4 h-4 bg-black border-2 border-emerald-600 rounded-full z-10"></div>
<div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 hover:border-zinc-700 transition-colors group opacity-60 hover:opacity-100">
<div className="flex justify-between mb-1">
<span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wider">Published</span>
<iconify-icon className="text-zinc-600 cursor-pointer hover:text-white" icon="solar:external-link-linear"></iconify-icon>
</div>
<h4 className="text-sm text-zinc-200 font-medium leading-tight">My Desk Setup Tour</h4>
<div className="mt-2 flex gap-3">
<span className="text-[10px] text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:eye-linear"></iconify-icon> 2.1k</span>
<span className="text-[10px] text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:chat-round-linear"></iconify-icon> 42</span>
</div>
</div>
</div>
</div>
<button className="w-full mt-4 py-2 text-xs font-medium text-zinc-400 border border-zinc-800 border-dashed rounded-lg hover:text-white hover:border-zinc-600 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add New Project
                        </button>
</div>
</div>
</div>

<section className="grid grid-cols-2 gap-6 animate-enter" style={{animationDelay: '200ms'}}>

<div className="glass-panel rounded-xl p-6 border border-zinc-800">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-rose-400" icon="solar:telescope-linear"></iconify-icon>
                            Competitor Alert
                        </h3>
<a className="text-xs text-zinc-500 hover:text-white" href="#">View All</a>
</div>
<div className="space-y-4">
<div className="flex gap-4 items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0"></div>
<div className="flex-1">
<p className="text-sm text-zinc-200 font-medium">DesignCourse uploaded "CSS Grid vs Flexbox"</p>
<p className="text-xs text-zinc-500 mt-0.5">Velocity: 12k views in 3h (Above Average)</p>
</div>
<button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-md border border-zinc-700">Analyze</button>
</div>
<div className="w-full h-[1px] bg-zinc-800/50"></div>
<div className="flex gap-4 items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0"></div>
<div className="flex-1">
<p className="text-sm text-zinc-200 font-medium">Hyperplexed posted a Short</p>
<p className="text-xs text-zinc-500 mt-0.5">Topic: Glassmorphism Effect</p>
</div>
<button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-1.5 rounded-md border border-zinc-700">Analyze</button>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 border border-zinc-800">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:graph-up-linear"></iconify-icon>
                            Trending in "Design"
                        </h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-xs text-zinc-300 hover:border-blue-500/50 hover:text-white cursor-pointer transition-all">AI UI Kits</span>
<span className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-xs text-zinc-300 hover:border-blue-500/50 hover:text-white cursor-pointer transition-all">Spline 3D</span>
<span className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-xs text-zinc-300 hover:border-blue-500/50 hover:text-white cursor-pointer transition-all">Portfolio Reviews</span>
<span className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-xs text-zinc-300 hover:border-blue-500/50 hover:text-white cursor-pointer transition-all">Framer vs Webflow</span>
</div>
<div className="mt-4 p-3 bg-blue-500/5 border border-blue-500/10 rounded-lg">
<p className="text-xs text-blue-200/80 leading-relaxed">
<iconify-icon className="inline-block mr-1 relative -top-0.5" icon="solar:info-circle-linear"></iconify-icon>
<strong>Insight:</strong> "AI UI Kits" search volume up 240% this month. Low competition for tutorials on "How to sell AI UI Kits".
                        </p>
</div>
</div>
</section>
</div>
</main>

<button className="fixed bottom-6 right-6 w-12 h-12 bg-white text-black rounded-full shadow-2xl shadow-white/20 flex items-center justify-center hover:scale-105 transition-transform z-50 md:hidden">
<iconify-icon icon="solar:add-plus-bold" width="24"></iconify-icon>
</button>

    </>
  );
}
