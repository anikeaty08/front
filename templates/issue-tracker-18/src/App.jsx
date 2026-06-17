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
      

<aside className="w-[260px] border-r border-zinc-800/40 flex flex-col justify-between flex-shrink-0 bg-[#0B0C0E] hidden md:flex transition-all duration-300">
<div className="px-3 pt-4">

<div className="flex items-center gap-2.5 px-2 mb-6 text-zinc-100 cursor-pointer hover:bg-zinc-900/50 py-1.5 rounded-md transition-colors group">
<div className="w-5 h-5 bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-600 rounded flex items-center justify-center text-[10px] font-semibold tracking-tighter shadow-[0_0_12px_-3px_rgba(99,102,241,0.6)] border border-white/10 group-hover:scale-105 transition-transform">
                    L
                </div>
<span className="font-medium tracking-tight text-sm text-zinc-200">Linearspace</span>
<i className="w-3 h-3 text-zinc-600 ml-auto group-hover:text-zinc-400" data-lucide="chevrons-up-down"></i>
</div>

<div className="mb-6 px-2">
<button className="flex items-center gap-2 w-full text-left bg-zinc-900/40 hover:bg-zinc-800/60 border border-zinc-800/60 text-zinc-300 px-2 py-1.5 rounded shadow-sm transition-all group">
<div className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
<i className="w-2.5 h-2.5" data-lucide="pen-square"></i>
</div>
<span className="text-xs font-medium">New Issue</span>
<span className="ml-auto text-[10px] text-zinc-600 font-mono bg-zinc-900/80 px-1 rounded border border-zinc-800 group-hover:border-zinc-700">C</span>
</button>
</div>

<nav className="space-y-px">
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-100 bg-zinc-800/40 rounded-md group transition-all" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100" data-lucide="inbox"></i>
<span className="font-medium text-xs">Inbox</span>
<span className="ml-auto text-xs text-zinc-500 group-hover:text-zinc-400">2</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md group transition-all" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="circle-dot"></i>
<span className="font-medium text-xs">My Issues</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md group transition-all" href="#">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-400" data-lucide="layers"></i>
<span className="font-medium text-xs">Views</span>
</a>
</nav>

<div className="mt-8">
<div className="flex items-center justify-between px-2 mb-2 group cursor-pointer">
<h3 className="text-[11px] font-medium text-zinc-500 transition-colors group-hover:text-zinc-400">Your Teams</h3>
<i className="w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity hover:text-zinc-300" data-lucide="plus"></i>
</div>
<nav className="space-y-px">
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md group transition-all" href="#">
<span className="w-3.5 h-3.5 text-[9px] flex items-center justify-center rounded-[3px] bg-zinc-800 text-zinc-300 border border-zinc-700/50 group-hover:border-zinc-600">E</span>
<span className="font-medium text-xs">Engineering</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md group transition-all" href="#">
<span className="w-3.5 h-3.5 text-[9px] flex items-center justify-center rounded-[3px] bg-zinc-800 text-zinc-300 border border-zinc-700/50 group-hover:border-zinc-600">D</span>
<span className="font-medium text-xs">Design System</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md group transition-all" href="#">
<span className="w-3.5 h-3.5 text-[9px] flex items-center justify-center rounded-[3px] bg-zinc-800 text-zinc-300 border border-zinc-700/50 group-hover:border-zinc-600">C</span>
<span className="font-medium text-xs">Customer Success</span>
</a>
</nav>
</div>
</div>
<div className="p-3 border-t border-zinc-800/40">
<button className="flex items-center gap-2.5 w-full px-2 py-1.5 hover:bg-zinc-800/30 rounded-md text-left transition-colors group">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-zinc-600 to-zinc-500 border border-zinc-500/50 shadow-sm"></div>
<span className="text-xs font-medium text-zinc-300 group-hover:text-zinc-200">Alex Morrison</span>
</button>
<div className="flex items-center gap-3 px-2 mt-3 text-zinc-500">
<button className="hover:text-zinc-300 transition-colors"><i className="w-3.5 h-3.5" data-lucide="settings"></i></button>
<button className="hover:text-zinc-300 transition-colors"><i className="w-3.5 h-3.5" data-lucide="bell"></i></button>
<button className="hover:text-zinc-300 transition-colors ml-auto text-[10px] font-medium opacity-60">v2.41</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#0B0C0E] relative z-0">

<header className="h-12 border-b border-zinc-800/40 flex items-center justify-between px-5 flex-shrink-0 bg-[#0B0C0E]/80 backdrop-blur-md z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-zinc-100">
<i className="w-4 h-4" data-lucide="menu"></i>
</button>

<nav className="flex items-center gap-2 text-xs text-zinc-500">
<div className="w-4 h-4 rounded bg-zinc-800 flex items-center justify-center border border-zinc-700/50">
<i className="w-2.5 h-2.5 text-zinc-400" data-lucide="box"></i>
</div>
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Engineering</span>
<i className="w-3 h-3 text-zinc-700" data-lucide="chevron-right"></i>
<span className="text-zinc-200 font-medium">All Issues</span>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block group">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500 group-focus-within:text-zinc-400 transition-colors" data-lucide="search"></i>
<input className="bg-zinc-900/50 border border-zinc-800/80 text-xs rounded-md py-1.5 pl-8 pr-3 text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 focus:bg-zinc-900 transition-all w-56 hover:border-zinc-700" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
<span className="text-[10px] text-zinc-600 font-mono">⌘K</span>
</div>
</div>
</div>
</header>

<div className="px-5 pt-5 pb-3 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0B0C0E]">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/30 border border-zinc-700/40 rounded-md hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="list-filter"></i>
                    Filter
                </button>
<div className="h-4 w-[1px] bg-zinc-800 mx-1"></div>

<div className="flex items-center bg-zinc-900 rounded-md border border-zinc-800/60 p-0.5">
<button className="px-2 py-0.5 rounded-[3px] text-xs text-zinc-200 bg-zinc-800 shadow-sm border border-zinc-700/50 font-medium transition-all">
<i className="w-3.5 h-3.5" data-lucide="list"></i>
</button>
<button className="px-2 py-0.5 rounded-[3px] text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="kanban-square"></i>
</button>
</div>
<div className="h-4 w-[1px] bg-zinc-800 mx-1"></div>
<button className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
<div className="w-3.5 h-3.5 rounded-full border border-zinc-700 flex items-center justify-center">
<i className="w-2.5 h-2.5" data-lucide="user"></i>
</div>
<span>Assignee</span>
</button>
<button className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
<i className="w-3.5 h-3.5 text-zinc-600" data-lucide="circle"></i>
<span>Status</span>
</button>
<button className="flex items-center gap-1.5 px-2 py-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
<i className="w-3.5 h-3.5 text-zinc-600" data-lucide="tag"></i>
<span>Label</span>
</button>
</div>
<div className="flex items-center gap-3 text-zinc-500">
<button className="p-1 hover:bg-zinc-800/50 rounded transition-colors">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-down"></i>
</button>
<button className="p-1 hover:bg-zinc-800/50 rounded transition-colors">
<i className="w-3.5 h-3.5" data-lucide="bar-chart-2"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-5 pb-10">

<div className="mb-8">
<div className="flex items-center gap-2 mb-2 sticky top-0 bg-[#0B0C0E]/95 backdrop-blur-sm py-2 z-10">
<div className="w-3.5 h-3.5 rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full border-[2.5px] border-orange-400/20 border-r-orange-400 border-t-orange-400 -rotate-45"></div>
</div>
<span className="text-xs font-medium text-zinc-200">In Progress</span>
<span className="text-xs text-zinc-600 ml-1 font-mono">3</span>
</div>

<div className="group flex items-center gap-3 py-2.5 border-b border-zinc-800/30 hover:bg-zinc-900/40 -mx-3 px-3 rounded-md transition-colors relative cursor-default">
<input className="custom-checkbox w-3.5 h-3.5 border border-zinc-600/50 rounded-[3px] flex-shrink-0 cursor-pointer hover:border-zinc-500" type="checkbox"/>
<span className="text-[11px] font-mono text-zinc-500 w-16 flex-shrink-0">ENG-294</span>
<div className="w-3.5 h-3.5 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center flex-shrink-0">
<div className="w-2 h-2 rounded-full border-[2px] border-orange-400/20 border-r-orange-400 border-t-orange-400 -rotate-45"></div>
</div>
<div className="flex-1 min-w-0 pr-4">
<span className="text-xs text-zinc-300 font-medium truncate block">Implement real-time updates for WebSocket connection</span>
</div>
<div className="hidden lg:flex items-center gap-2 mr-6">
<span className="px-1.5 py-0.5 rounded-[3px] border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-500 font-medium">Frontend</span>
</div>
<div className="flex items-center gap-3 flex-shrink-0 w-28 justify-end">
<span className="text-[10px] text-orange-400/90 font-medium bg-orange-400/10 px-1.5 py-0.5 rounded">High</span>
<div className="w-4 h-4 rounded-full bg-indigo-500 border border-[#0B0C0E] flex items-center justify-center text-[8px] text-white font-medium ring-1 ring-zinc-800">JD</div>
</div>
</div>

<div className="group flex items-center gap-3 py-2.5 border-b border-zinc-800/30 hover:bg-zinc-900/40 -mx-3 px-3 rounded-md transition-colors relative cursor-default">
<input className="custom-checkbox w-3.5 h-3.5 border border-zinc-600/50 rounded-[3px] flex-shrink-0 cursor-pointer hover:border-zinc-500" type="checkbox"/>
<span className="text-[11px] font-mono text-zinc-500 w-16 flex-shrink-0">ENG-299</span>
<div className="w-3.5 h-3.5 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center flex-shrink-0">
<div className="w-2 h-2 rounded-full border-[2px] border-orange-400/20 border-r-orange-400 border-t-orange-400 -rotate-45"></div>
</div>
<div className="flex-1 min-w-0 pr-4">
<span className="text-xs text-zinc-300 font-medium truncate block">Fix layout shift on mobile navigation drawer</span>
</div>
<div className="hidden lg:flex items-center gap-2 mr-6">
<span className="px-1.5 py-0.5 rounded-[3px] border border-rose-900/20 bg-rose-500/5 text-[10px] text-rose-400/80 font-medium">Bug</span>
</div>
<div className="flex items-center gap-3 flex-shrink-0 w-28 justify-end">
<span className="text-[10px] text-zinc-500">Today</span>
<div className="w-4 h-4 rounded-full bg-emerald-600 border border-[#0B0C0E] flex items-center justify-center text-[8px] text-white font-medium ring-1 ring-zinc-800">AM</div>
</div>
</div>

<div className="group flex items-center gap-3 py-2.5 border-b border-zinc-800/30 hover:bg-zinc-900/40 -mx-3 px-3 rounded-md transition-colors relative cursor-default">
<input className="custom-checkbox w-3.5 h-3.5 border border-zinc-600/50 rounded-[3px] flex-shrink-0 cursor-pointer hover:border-zinc-500" type="checkbox"/>
<span className="text-[11px] font-mono text-zinc-500 w-16 flex-shrink-0">ENG-302</span>
<div className="w-3.5 h-3.5 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center flex-shrink-0">
<div className="w-2 h-2 rounded-full border-[2px] border-orange-400/20 border-r-orange-400 border-t-orange-400 -rotate-45"></div>
</div>
<div className="flex-1 min-w-0 pr-4">
<span className="text-xs text-zinc-300 font-medium truncate block">Optimize database queries for dashboard analytics</span>
</div>
<div className="hidden lg:flex items-center gap-2 mr-6">
<span className="px-1.5 py-0.5 rounded-[3px] border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-500 font-medium">Backend</span>
</div>
<div className="flex items-center gap-3 flex-shrink-0 w-28 justify-end">
<span className="text-[10px] text-zinc-500">Tomorrow</span>
<div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 border-dashed flex items-center justify-center text-[8px] text-zinc-500 ring-1 ring-zinc-800">
<i className="w-2 h-2" data-lucide="user"></i>
</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-2 mb-2 sticky top-0 bg-[#0B0C0E]/95 backdrop-blur-sm py-2 z-10">
<div className="w-3.5 h-3.5 rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full border border-zinc-500 border-dashed"></div>
</div>
<span className="text-xs font-medium text-zinc-200">Backlog</span>
<span className="text-xs text-zinc-600 ml-1 font-mono">12</span>
</div>

<div className="group flex items-center gap-3 py-2.5 border-b border-zinc-800/30 hover:bg-zinc-900/40 -mx-3 px-3 rounded-md transition-colors relative cursor-default">
<input className="custom-checkbox w-3.5 h-3.5 border border-zinc-600/50 rounded-[3px] flex-shrink-0 cursor-pointer hover:border-zinc-500" type="checkbox"/>
<span className="text-[11px] font-mono text-zinc-500 w-16 flex-shrink-0">ENG-340</span>
<div className="w-3.5 h-3.5 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center flex-shrink-0">
<div className="w-2 h-2 rounded-full border border-zinc-500 border-dashed"></div>
</div>
<div className="flex-1 min-w-0 pr-4">
<span className="text-xs text-zinc-400 group-hover:text-zinc-300 font-medium truncate block">Design system audit and color consolidation</span>
</div>
<div className="hidden lg:flex items-center gap-2 mr-6">
<span className="px-1.5 py-0.5 rounded-[3px] border border-purple-900/20 bg-purple-500/5 text-[10px] text-purple-400/80 font-medium">Design</span>
</div>
<div className="flex items-center gap-3 flex-shrink-0 w-28 justify-end">
<span className="text-[10px] text-zinc-600">No date</span>
<div className="w-4 h-4 rounded-full bg-blue-600 border border-[#0B0C0E] flex items-center justify-center text-[8px] text-white font-medium ring-1 ring-zinc-800">RK</div>
</div>
</div>

<div className="group flex items-center gap-3 py-2.5 border-b border-zinc-800/30 hover:bg-zinc-900/40 -mx-3 px-3 rounded-md transition-colors relative cursor-default">
<input className="custom-checkbox w-3.5 h-3.5 border border-zinc-600/50 rounded-[3px] flex-shrink-0 cursor-pointer hover:border-zinc-500" type="checkbox"/>
<span className="text-[11px] font-mono text-zinc-500 w-16 flex-shrink-0">ENG-342</span>
<div className="w-3.5 h-3.5 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center flex-shrink-0">
<div className="w-2 h-2 rounded-full border border-zinc-500 border-dashed"></div>
</div>
<div className="flex-1 min-w-0 pr-4">
<span className="text-xs text-zinc-400 group-hover:text-zinc-300 font-medium truncate block">Research OAuth2 implementation options</span>
</div>
<div className="hidden lg:flex items-center gap-2 mr-6">
<span className="px-1.5 py-0.5 rounded-[3px] border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-500 font-medium">Spike</span>
</div>
<div className="flex items-center gap-3 flex-shrink-0 w-28 justify-end">
<span className="text-[10px] text-zinc-600">Q4</span>
<div className="w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 border-dashed flex items-center justify-center text-[8px] text-zinc-500 ring-1 ring-zinc-800">
<i className="w-2 h-2" data-lucide="user"></i>
</div>
</div>
</div>

<div className="group flex items-center gap-3 py-2.5 border-b border-zinc-800/30 hover:bg-zinc-900/40 -mx-3 px-3 rounded-md transition-colors relative cursor-default">
<input className="custom-checkbox w-3.5 h-3.5 border border-zinc-600/50 rounded-[3px] flex-shrink-0 cursor-pointer hover:border-zinc-500" type="checkbox"/>
<span className="text-[11px] font-mono text-zinc-500 w-16 flex-shrink-0">ENG-345</span>
<div className="w-3.5 h-3.5 rounded-full border border-zinc-700 bg-zinc-800 flex items-center justify-center flex-shrink-0">
<div className="w-2 h-2 rounded-full border border-zinc-500 border-dashed"></div>
</div>
<div className="flex-1 min-w-0 pr-4">
<span className="text-xs text-zinc-400 group-hover:text-zinc-300 font-medium truncate block">Update documentation for public API endpoints</span>
</div>
<div className="hidden lg:flex items-center gap-2 mr-6">
<span className="px-1.5 py-0.5 rounded-[3px] border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-500 font-medium">Docs</span>
</div>
<div className="flex items-center gap-3 flex-shrink-0 w-28 justify-end">
<span className="text-[10px] text-zinc-600">Low</span>
<div className="w-4 h-4 rounded-full bg-purple-600 border border-[#0B0C0E] flex items-center justify-center text-[8px] text-white font-medium ring-1 ring-zinc-800">TS</div>
</div>
</div>
</div>

<button className="flex items-center gap-3 py-2 w-full text-left group -mx-3 px-3 hover:bg-zinc-900/30 rounded-md transition-colors">
<i className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400" data-lucide="plus"></i>
<span className="text-xs text-zinc-600 group-hover:text-zinc-400 font-medium">Create new issue...</span>
</button>
<div className="h-10"></div>
</div>
</main>


    </>
  );
}
