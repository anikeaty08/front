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
      

<nav className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-neutral-900 text-white shadow-sm ring-1 ring-neutral-900/10 transition-transform group-hover:scale-95">
<svg className="lucide lucide-shapes" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-neutral-900">Vellum</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="rounded-md bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-900 transition-all hover:bg-neutral-200/80" href="#">Overview</a>
<a className="transition-all hover:bg-neutral-100 hover:text-neutral-900 text-xs font-medium text-neutral-500 rounded-md pt-1.5 pr-3 pb-1.5 pl-3" href="#">My Courses</a>
<a className="rounded-md px-3 py-1.5 text-xs font-medium text-neutral-500 transition-all hover:bg-neutral-100 hover:text-neutral-900" href="#">Assignments</a>
<a className="rounded-md px-3 py-1.5 text-xs font-medium text-neutral-500 transition-all hover:bg-neutral-100 hover:text-neutral-900" href="#">Community</a>
</div>
</div>

<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<svg className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="h-8 w-48 rounded-lg border border-neutral-200 bg-neutral-50 pl-9 pr-3 text-xs font-medium placeholder:text-neutral-400 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-100 transition-all" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-0.5 text-[10px] font-medium text-neutral-400">
<span className="rounded border border-neutral-200 bg-white px-1 py-px">⌘</span>
<span>K</span>
</div>
</div>
<div className="h-4 w-px bg-neutral-200 hidden sm:block"></div>
<button className="relative flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-neutral-200 transition-all hover:ring-neutral-300">
<span className="text-xs font-medium text-neutral-600">AL</span>
<span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-indigo-500"></span>
</button>
</div>
</div>
</div>
</nav>
<main className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-x-4 gap-y-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Dashboard</h1>
<p className="mt-1 text-sm text-neutral-500">Welcome back, Alex. You've been consistent for 5 days.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">Last synced 2m ago</span>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                    Filter by Date
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-neutral-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    New Goal
                </button>
</div>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

<div className="lg:col-span-8 space-y-8">

<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

<div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0px_4px_16px_rgba(0,0,0,0.04)]">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-500">Current Streak</span>
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:flame" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">5</span>
<span className="text-sm font-medium text-neutral-500">days</span>
</div>
<div className="mt-3 h-1 w-full rounded-full bg-neutral-100">
<div className="h-1 rounded-full bg-blue-500" style={{width: '70%'}}></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0px_4px_16px_rgba(0,0,0,0.04)]">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-500">Knowledge Points</span>
<svg aria-hidden="true" className="iconify text-cyan-500 iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">1,250</span>
<span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded ml-2">+12%</span>
</div>
<div className="mt-3 h-1 w-full rounded-full bg-neutral-100">
<div className="h-1 rounded-full bg-cyan-500" style={{width: '45%'}}></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-5 shadow-[0px_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0px_4px_16px_rgba(0,0,0,0.04)]">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-500">Assignments</span>
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">2</span>
<span className="text-sm font-medium text-neutral-500">pending</span>
</div>
<div className="mt-3 h-1 w-full rounded-full bg-neutral-100">
<div className="h-1 rounded-full bg-neutral-900" style={{width: '85%'}}></div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold text-neutral-900">Continue Learning</h2>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900" href="#">View all courses →</a>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

<div className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:border-neutral-300 hover:shadow-md">
<div className="relative aspect-[2/1] w-full overflow-hidden bg-neutral-100">
<img alt="Math" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute right-3 top-3 rounded bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-semibold text-neutral-900 shadow-sm">
                                    Math
                                </div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-2 flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div>
<span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">In Progress</span>
</div>
<h3 className="font-medium text-neutral-900">Algebra Adventures</h3>
<p className="mt-1 text-xs text-neutral-500 line-clamp-2">Master linear equations and polynomials with interactive challenges.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span>25m left</span>
</div>
<div className="w-24">
<div className="flex justify-between text-[9px] font-medium text-neutral-500 mb-1">
<span>65%</span>
</div>
<div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
<div className="h-full rounded-full bg-neutral-900" style={{width: '65%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm transition-all hover:border-neutral-300 hover:shadow-md">
<div className="relative aspect-[2/1] w-full overflow-hidden bg-neutral-100">
<img alt="Science" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute right-3 top-3 rounded bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-semibold text-neutral-900 shadow-sm">
                                    Physics
                                </div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-2 flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
<span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">Started</span>
</div>
<h3 className="font-medium text-neutral-900">Cosmic Physics</h3>
<p className="mt-1 text-xs text-neutral-500 line-clamp-2">Explore the solar system, gravity, and relativity.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span>40m left</span>
</div>
<div className="w-24">
<div className="flex justify-between text-[9px] font-medium text-neutral-500 mb-1">
<span>30%</span>
</div>
<div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
<div className="h-full rounded-full bg-neutral-900" style={{width: '30%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
<h3 className="text-sm font-semibold text-neutral-900">Recent Assignments</h3>
<button className="rounded p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</div>
<div className="divide-y divide-neutral-100">
<div className="flex items-center justify-between px-5 py-3 hover:bg-neutral-50/50">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded border border-neutral-200 bg-neutral-50 text-neutral-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div>
<p className="text-xs font-medium text-neutral-900">History Essay: The Renaissance</p>
<p className="text-[10px] text-neutral-500">Due Tomorrow • History 101</p>
</div>
</div>
<span className="rounded bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-700">Pending</span>
</div>
<div className="flex items-center justify-between px-5 py-3 hover:bg-neutral-50/50">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded border border-neutral-200 bg-neutral-50 text-neutral-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flask-conical" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs font-medium text-neutral-900">Lab Report: Chemical Bonds</p>
<p className="text-[10px] text-neutral-500">Completed 2h ago • Chemistry</p>
</div>
</div>
<span className="rounded bg-indigo-50 px-2 py-1 text-[10px] font-medium text-indigo-700">Submitted</span>
</div>
<div className="flex items-center justify-between px-5 py-3 hover:bg-neutral-50/50">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded border border-neutral-200 bg-neutral-50 text-neutral-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calculator" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></g></svg>
</div>
<div>
<p className="text-xs font-medium text-neutral-900">Math Quiz: Module 4</p>
<p className="text-[10px] text-neutral-500">Graded • Math 202</p>
</div>
</div>
<span className="rounded bg-neutral-100 px-2 py-1 text-[10px] font-medium text-neutral-600">92/100</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="rounded-xl border border-neutral-200 bg-white p-1 shadow-sm">
<div className="grid grid-cols-2 gap-1">
<button className="flex flex-col items-center justify-center gap-2 rounded-lg bg-neutral-50 p-4 transition-all hover:bg-neutral-100">
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:play-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-xs font-medium text-neutral-700">Resume</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 rounded-lg bg-neutral-50 p-4 transition-all hover:bg-neutral-100">
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:bar-chart-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium text-neutral-700">Grades</span>
</button>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-neutral-900 p-5 text-white shadow-lg">

<div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-violet-600 blur-3xl opacity-30"></div>
<div className="absolute bottom-0 left-0 -ml-8 -mb-8 h-32 w-32 rounded-full bg-indigo-600 blur-3xl opacity-20"></div>
<div className="relative">
<div className="flex items-center gap-2 mb-3">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
<svg aria-hidden="true" className="iconify text-cyan-300 iconify--lucide" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h3 className="text-sm font-semibold tracking-wide">Daily Goal</h3>
</div>
<h4 className="text-base font-medium">Complete Algebra Quiz</h4>
<p className="mt-1 text-xs text-neutral-400">Finish before 8 PM to keep your streak alive.</p>
<div className="mt-4 flex items-center justify-between gap-3">
<div className="h-1.5 flex-1 rounded-full bg-white/10">
<div className="h-1.5 rounded-full bg-white" style={{width: '0%'}}></div>
</div>
<span className="text-[10px] font-mono text-neutral-400">0/1</span>
</div>
<button className="mt-4 w-full rounded-lg bg-white py-2 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-100">
                            Start Quiz
                        </button>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="p-4 border-b border-neutral-200/50">
<h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Top Students</h3>
</div>
<div className="p-2 space-y-1">
<div className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-neutral-50">
<div className="flex items-center gap-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 text-[9px] font-bold text-cyan-700">1</div>
<span className="text-xs font-medium text-neutral-700">Sarah M.</span>
</div>
<span className="text-[10px] font-mono font-medium text-neutral-500">2,400 pts</span>
</div>
<div className="flex items-center justify-between rounded-lg px-2 py-2 hover:bg-neutral-50">
<div className="flex items-center gap-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-[9px] font-bold text-neutral-600">2</div>
<span className="text-xs font-medium text-neutral-700">Mike R.</span>
</div>
<span className="text-[10px] font-mono font-medium text-neutral-500">2,150 pts</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50/50 px-2 py-2">
<div className="flex items-center gap-2">
<div className="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-200 text-[9px] font-bold text-neutral-600">3</div>
<span className="text-xs font-medium text-neutral-900">You</span>
</div>
<span className="text-[10px] font-mono font-medium text-neutral-900">1,250 pts</span>
</div>
</div>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
<h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">Schedule</h3>
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 flex flex-col items-center rounded border border-neutral-100 bg-neutral-50 p-1.5 w-10">
<span className="text-[9px] font-bold uppercase text-neutral-400">Oct</span>
<span className="text-sm font-bold text-neutral-900">24</span>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-900">Geometry Live Class</h4>
<p className="text-[10px] text-neutral-500">10:00 AM • via Zoom</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 flex flex-col items-center rounded border border-neutral-100 bg-neutral-50 p-1.5 w-10">
<span className="text-[9px] font-bold uppercase text-neutral-400">Oct</span>
<span className="text-sm font-bold text-neutral-900">25</span>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-900">Study Group</h4>
<p className="text-[10px] text-neutral-500">02:30 PM • Library</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white/90 backdrop-blur-lg pb-safe md:hidden">
<div className="flex h-16 items-center justify-around px-2">
<a className="flex flex-col items-center gap-1 p-2 text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-grid" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-neutral-400 hover:text-neutral-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium">Courses</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-neutral-400 hover:text-neutral-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trophy" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg>
<span className="text-[10px] font-medium">Rank</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-neutral-400 hover:text-neutral-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="text-[10px] font-medium">Profile</span>
</a>
</div>
</div>

    </>
  );
}
