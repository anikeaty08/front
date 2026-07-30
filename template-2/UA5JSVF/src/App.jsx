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
      
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
    });
  
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
      

<div className="md:hidden sticky top-0 z-40 flex items-center justify-between px-3 h-14 bg-neutral-950/80 backdrop-blur border-b border-white/10">
<details className="relative group">
<summary className="list-none inline-flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="w-5 h-5 text-neutral-300" data-lucide="panel-left" strokeWidth="1.5"></i>
<span className="text-[13px] text-neutral-300">Menu</span>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="absolute left-0 mt-2 w-[calc(100vw-1.5rem)] rounded-lg border border-white/10 bg-neutral-900/95 backdrop-blur p-2 shadow-2xl">

<div className="px-2 py-2">
<details className="group">
<summary className="list-none flex items-center justify-between px-2 py-2 rounded-md hover:bg-white/5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
<span className="text-[11px] tracking-tight text-indigo-300 font-medium">AW</span>
</div>
<div className="flex flex-col">
<span className="text-[13px] text-neutral-100">Acme Workspace</span>
<span className="text-[11px] text-neutral-400">7 members</span>
</div>
</div>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="mt-2 space-y-1 rounded-md border border-white/10 bg-neutral-900/60 p-1">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-left text-neutral-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="w-4 h-4 text-neutral-400" data-lucide="buildings" strokeWidth="1.5"></i>
<span>Switch workspace</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-left text-neutral-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="w-4 h-4 text-neutral-400" data-lucide="plus" strokeWidth="1.5"></i>
<span>New workspace</span>
</button>
</div>
</details>
</div>
<div className="h-px bg-white/10 my-2"></div>
<nav className="px-2 py-1">
<a className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 text-neutral-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40" href="#">
<i className="w-4 h-4 text-neutral-400" data-lucide="home" strokeWidth="1.5"></i>
            Home
          </a>
<details className="group mt-1">
<summary className="list-none flex items-center justify-between px-2 py-2 rounded-md hover:bg-white/5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="folder-tree" strokeWidth="1.5"></i>
<span className="text-neutral-300">Projects</span>
</div>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-90 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</summary>
<ul className="mt-1 pl-3 border-l border-white/10 space-y-1">
<li>
<a className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5" href="#">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
<span className="text-neutral-300">Atlas Mobile</span>
</div>
<span className="text-[11px] text-neutral-500">23</span>
</a>
</li>
<li>
<details className="group">
<summary className="list-none flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-neutral-300">Nimbus Dashboard</span>
</div>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-90 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</summary>
<ul className="mt-1 ml-3 pl-3 border-l border-white/10 space-y-1">
<li>
<a className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5" href="#">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span className="text-neutral-300">Web App</span>
</div>
<span className="text-[11px] text-neutral-500">14</span>
</a>
</li>
<li>
<a className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5" href="#">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
<span className="text-neutral-300">Design System</span>
</div>
<span className="text-[11px] text-neutral-500">9</span>
</a>
</li>
</ul>
</details>
</li>
<li>
<a className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5" href="#">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span className="text-neutral-300">Orion API</span>
</div>
<span className="text-[11px] text-neutral-500">18</span>
</a>
</li>
</ul>
</details>
<button className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-neutral-100 bg-white/5 hover:bg-white/10 border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="w-4 h-4 text-indigo-300" data-lucide="plug-zap" strokeWidth="1.5"></i>
            Connect project
          </button>
</nav>
</div>
</details>
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-[10px] tracking-tight text-neutral-300">AW</span>
</div>
<span className="text-[13px] text-neutral-300">Acme Workspace</span>
</div>
<div className="flex items-center gap-3">
<button className="px-2 py-1.5 rounded-md hover:bg-white/5 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="w-5 h-5 text-neutral-300" data-lucide="search" strokeWidth="1.5"></i>
</button>
<img alt="Avatar" className="h-7 w-7 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=64&auto=format&fit=crop" />
</div>
</div>
<div className="w-full h-screen md:h-[100dvh] md:flex md:overflow-hidden">

<aside className="hidden md:flex md:flex-col md:w-72 md:shrink-0 md:h-full border-r border-white/10 bg-neutral-950/80 backdrop-blur">
<div className="px-3 py-3">

<details className="group">
<summary className="list-none flex items-center justify-between px-2.5 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center">
<span className="text-[11px] tracking-tight text-indigo-300 font-medium">AW</span>
</div>
<div className="flex flex-col">
<span className="text-[13px] text-neutral-100">Acme Workspace</span>
<span className="text-[11px] text-neutral-400">7 members</span>
</div>
</div>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" strokeWidth="1.5"></i>
</summary>
<div className="mt-2 rounded-lg border border-white/10 bg-neutral-900/60 p-2 space-y-1">
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-left outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="w-4 h-4 text-neutral-400" data-lucide="buildings" strokeWidth="1.5"></i>
<span className="text-neutral-300">Switch workspace</span>
</button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 text-left outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="w-4 h-4 text-neutral-400" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-neutral-300">New workspace</span>
</button>
</div>
</details>
</div>
<div className="px-3">
<div className="h-px bg-white/10"></div>
</div>

<nav className="px-2 py-2 overflow-y-auto">
<a className="flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-white/5 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40" href="#">
<i className="w-4 h-4 text-neutral-400" data-lucide="home" strokeWidth="1.5"></i>
<span className="text-neutral-300">Home</span>
</a>
<details className="group mt-1" open="">
<summary className="list-none flex items-center justify-between px-2.5 py-2 rounded-md hover:bg-white/5 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="folder-tree" strokeWidth="1.5"></i>
<span className="text-neutral-300">Projects</span>
</div>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-90 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</summary>
<ul className="mt-1 pl-3 border-l border-white/10 space-y-1">
<li>
<a className="group flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5" href="#">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
<span className="text-neutral-100">Atlas Mobile</span>
</div>
<span className="text-[11px] text-neutral-500 group-hover:text-neutral-400">23</span>
</a>
</li>
<li>
<details className="group">
<summary className="list-none flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5 cursor-pointer">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-neutral-300">Nimbus Dashboard</span>
</div>
<i className="w-4 h-4 text-neutral-400 group-open:rotate-90 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</summary>
<ul className="mt-1 ml-3 pl-3 border-l border-white/10 space-y-1">
<li>
<a className="group flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5" href="#">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span className="text-neutral-300">Web App</span>
</div>
<span className="text-[11px] text-neutral-500 group-hover:text-neutral-400">14</span>
</a>
</li>
<li>
<a className="group flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5" href="#">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
<span className="text-neutral-300">Design System</span>
</div>
<span className="text-[11px] text-neutral-500 group-hover:text-neutral-400">9</span>
</a>
</li>
</ul>
</details>
</li>
<li>
<a className="group flex items-center justify-between px-2 py-1.5 rounded hover:bg-white/5" href="#">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span className="text-neutral-300">Orion API</span>
</div>
<span className="text-[11px] text-neutral-500 group-hover:text-neutral-400">18</span>
</a>
</li>
</ul>
</details>
<div className="mt-3">
<button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-neutral-100 bg-white/5 hover:bg-white/10 border border-white/10 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="w-4 h-4 text-indigo-300" data-lucide="plug-zap" strokeWidth="1.5"></i>
            Connect project
          </button>
</div>
</nav>
<div className="mt-auto px-3 py-3">
<div className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-white/10 bg-white/[0.02]">
<img alt="User" className="h-7 w-7 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=64&auto=format&fit=crop" />
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="text-[13px] text-neutral-200 truncate">Alex Carter</span>
<span className="text-[11px] text-neutral-500">Admin</span>
</div>
<span className="text-[11px] text-neutral-500 truncate">alex@acme.co</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 h-full overflow-hidden">

<header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between h-14">
<div className="flex items-center gap-3">
<div className="hidden md:flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500/15 border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-300" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<h1 className="text-[20px] md:text-[22px] tracking-tight text-neutral-100">Atlas Mobile</h1>
<div className="flex items-center gap-2 text-[11px] text-neutral-500">
<span>Workspace</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-neutral-300">Projects</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-neutral-100">Atlas Mobile</span>
</div>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-neutral-400 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-56 pl-8 pr-3 h-8 rounded-md bg-white/5 border border-white/10 text-[13px] placeholder:text-neutral-500 outline-none focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/20" placeholder="Search tasks" type="text" />
</div>
<button className="h-8 px-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">Filter</button>
<button className="h-8 px-3 rounded-md bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 text-indigo-100 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
                  New task
                </div>
</button>
</div>
</div>
</div>
</header>

<section className="h-full overflow-auto">
<div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
                Group: Status
              </button>
<button className="h-8 px-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
                Sort: Priority
              </button>
<button className="h-8 px-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-200 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
                View: List
              </button>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md bg-white/0 hover:bg-white/5 border border-white/10 text-neutral-300 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
                  Export
                </div>
</button>
</div>
</div>

<div className="grid grid-cols-12 items-center px-2 py-2 border-y border-white/10 text-[12px] text-neutral-400">
<div className="col-span-6 flex items-center gap-2">
<span className="w-6"></span>
              Task
            </div>
<div className="col-span-2">Status</div>
<div className="col-span-2">Progress</div>
<div className="col-span-1">Assignee</div>
<div className="col-span-1 hidden">Hidden</div>
</div>

<ul className="divide-y divide-white/10">

<li className="group grid grid-cols-12 items-center px-2 py-2.5 hover:bg-white/[0.03] rounded-md border border-transparent hover:border-white/10 transition-colors">
<div className="col-span-6 flex items-center gap-2">

<label className="relative inline-flex items-center">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-sm border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-400 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="1.5"></i>
</span>
</label>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-500">ATL-128</span>
<span className="text-neutral-100 truncate">Create onboarding flow for first-time users</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-white/10 text-neutral-300 bg-white/5">onboarding</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-indigo-500/30 text-indigo-200 bg-indigo-500/10">mobile</span>
</div>
<div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-500">
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5 text-amber-300" data-lucide="flag" strokeWidth="1.5"></i>
<span>High</span>
</div>
<span className="h-3 w-px bg-white/10"></span>
<span>Due in 3d</span>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-indigo-400/30 bg-indigo-500/10 text-indigo-100">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                  In Progress
                </span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 rounded bg-white/10">
<div className="h-1.5 rounded bg-indigo-500 w-[62%]"></div>
</div>
<span className="text-[12px] text-neutral-400">62%</span>
</div>
</div>
<div className="col-span-1">
<img alt="Assignee" className="h-7 w-7 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=64&auto=format&fit=crop" />
</div>
</li>
<li className="group grid grid-cols-12 items-center px-2 py-2.5 hover:bg-white/[0.03] rounded-md border border-transparent hover:border-white/10 transition-colors">
<div className="col-span-6 flex items-center gap-2">
<label className="relative inline-flex items-center">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-sm border border-white/20 bg-white/0 peer-checked:bg-emerald-500 peer-checked:border-emerald-400 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="1.5"></i>
</span>
</label>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-500">ATL-129</span>
<span className="text-neutral-100 truncate">Refactor auth module and add SSO</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-white/10 text-neutral-300 bg-white/5">backend</span>
</div>
<div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-500">
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="flag" strokeWidth="1.5"></i>
<span>Medium</span>
</div>
<span className="h-3 w-px bg-white/10"></span>
<span>Due in 6d</span>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-amber-400/30 bg-amber-500/10 text-amber-100">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  Review
                </span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 rounded bg-white/10">
<div className="h-1.5 rounded bg-amber-400 w-[80%]"></div>
</div>
<span className="text-[12px] text-neutral-400">80%</span>
</div>
</div>
<div className="col-span-1">
<img alt="Assignee" className="h-7 w-7 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=64&auto=format&fit=crop" />
</div>
</li>
<li className="group grid grid-cols-12 items-center px-2 py-2.5 hover:bg-white/[0.03] rounded-md border border-transparent hover:border-white/10 transition-colors">
<div className="col-span-6 flex items-center gap-2">
<label className="relative inline-flex items-center">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-sm border border-white/20 bg-white/0 peer-checked:bg-emerald-500 peer-checked:border-emerald-400 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="1.5"></i>
</span>
</label>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-500">ATL-097</span>
<span className="text-neutral-100 truncate">Implement push notifications</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-white/10 text-neutral-300 bg-white/5">infra</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-sky-500/30 text-sky-100 bg-sky-500/10">iOS</span>
</div>
<div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-500">
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="flag" strokeWidth="1.5"></i>
<span>Low</span>
</div>
<span className="h-3 w-px bg-white/10"></span>
<span>Backlog</span>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-neutral-400/20 bg-white/5 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
                  Todo
                </span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 rounded bg-white/10">
<div className="h-1.5 rounded bg-neutral-400 w-[10%]"></div>
</div>
<span className="text-[12px] text-neutral-400">10%</span>
</div>
</div>
<div className="col-span-1">
<img alt="Assignee" className="h-7 w-7 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</li>
<li className="group grid grid-cols-12 items-center px-2 py-2.5 hover:bg-white/[0.03] rounded-md border border-transparent hover:border-white/10 transition-colors">
<div className="col-span-6 flex items-center gap-2">
<label className="relative inline-flex items-center">
<input checked className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-sm border border-white/20 bg-white/0 peer-checked:bg-emerald-500 peer-checked:border-emerald-400 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="1.5"></i>
</span>
</label>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-500">ATL-102</span>
<span className="text-neutral-100 truncate">Add deep link support</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-white/10 text-neutral-300 bg-white/5">routing</span>
</div>
<div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-500">
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="flag" strokeWidth="1.5"></i>
<span>Medium</span>
</div>
<span className="h-3 w-px bg-white/10"></span>
<span>Done</span>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-emerald-400/30 bg-emerald-500/10 text-emerald-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Done
                </span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 rounded bg-white/10">
<div className="h-1.5 rounded bg-emerald-400 w-[100%]"></div>
</div>
<span className="text-[12px] text-neutral-400">100%</span>
</div>
</div>
<div className="col-span-1">
<img alt="Assignee" className="h-7 w-7 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=64&auto=format&fit=crop" />
</div>
</li>
<li className="group grid grid-cols-12 items-center px-2 py-2.5 hover:bg-white/[0.03] rounded-md border border-transparent hover:border-white/10 transition-colors">
<div className="col-span-6 flex items-center gap-2">
<label className="relative inline-flex items-center">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-sm border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-400 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="1.5"></i>
</span>
</label>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-500">ATL-141</span>
<span className="text-neutral-100 truncate">Polish settings screen</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-white/10 text-neutral-300 bg-white/5">ux</span>
</div>
<div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-500">
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5 text-amber-300" data-lucide="flag" strokeWidth="1.5"></i>
<span>High</span>
</div>
<span className="h-3 w-px bg-white/10"></span>
<span>Due tomorrow</span>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-indigo-400/30 bg-indigo-500/10 text-indigo-100">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                  In Progress
                </span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 rounded bg-white/10">
<div className="h-1.5 rounded bg-indigo-500 w-[45%]"></div>
</div>
<span className="text-[12px] text-neutral-400">45%</span>
</div>
</div>
<div className="col-span-1">
<img alt="Assignee" className="h-7 w-7 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=64&auto=format&fit=crop" />
</div>
</li>
<li className="group grid grid-cols-12 items-center px-2 py-2.5 hover:bg-white/[0.03] rounded-md border border-transparent hover:border-white/10 transition-colors">
<div className="col-span-6 flex items-center gap-2">
<label className="relative inline-flex items-center">
<input className="peer sr-only" type="checkbox" />
<span className="h-4 w-4 rounded-sm border border-white/20 bg-white/0 peer-checked:bg-indigo-500 peer-checked:border-indigo-400 flex items-center justify-center transition-colors">
<i className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check" strokeWidth="1.5"></i>
</span>
</label>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-[12px] text-neutral-500">ATL-146</span>
<span className="text-neutral-100 truncate">Fix crash on Android 14</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-white/10 text-neutral-300 bg-white/5">bug</span>
<span className="text-[11px] px-1.5 py-0.5 rounded border border-rose-500/30 text-rose-100 bg-rose-500/10">android</span>
</div>
<div className="flex items-center gap-2 mt-1 text-[11px] text-neutral-500">
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5 text-rose-300" data-lucide="flag" strokeWidth="1.5"></i>
<span>Critical</span>
</div>
<span className="h-3 w-px bg-white/10"></span>
<span>Today</span>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-amber-400/30 bg-amber-500/10 text-amber-100">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                  Review
                </span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 rounded bg-white/10">
<div className="h-1.5 rounded bg-amber-400 w-[70%]"></div>
</div>
<span className="text-[12px] text-neutral-400">70%</span>
</div>
</div>
<div className="col-span-1">
<img alt="Assignee" className="h-7 w-7 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=64&auto=format&fit=crop" />
</div>
</li>
</ul>
</div>
</section>
</main>
</div>



    </>
  );
}
