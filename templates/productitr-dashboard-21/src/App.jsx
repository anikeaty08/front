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
      

<header className="fixed top-0 w-full z-50 glass border-b border-slate-200/60 h-16 flex items-center justify-between px-6 lg:px-12">
<div className="flex items-center gap-3">
<div className="size-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<h1 className="text-lg font-semibold tracking-tight text-slate-900">ProductiTrack <span className="text-slate-400 font-normal mx-2">/</span> Design Spec v1.0</h1>
</div>
<div className="hidden md:flex items-center gap-4 text-xs font-medium text-slate-500">
<span className="flex items-center gap-1.5"><div className="size-2 rounded-full bg-emerald-500"></div> All Systems Operational</span>
<div className="h-4 w-px bg-slate-300"></div>
<span>Inter Font</span>
</div>
</header>

<main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-24">

<section>
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">01. Onboarding Flow</h2>
<p className="text-slate-500 mt-1">High conversion, meme-inspired copy, minimalistic inputs.</p>
</div>
<div className="hidden md:block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100">Flow: Sign Up → Setup</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200 aspect-[375/812] max-w-[375px] mx-auto">

<div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-indigo-50/50 to-transparent"></div>
<div className="absolute -top-10 -right-10 size-40 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
<div className="absolute top-20 -left-10 size-40 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
<div className="relative h-full flex flex-col p-6">
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="size-16 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl shadow-xl shadow-indigo-500/20 flex items-center justify-center text-white mb-8 animate-float">
<iconify-icon icon="solar:heart-angle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Ready to marry<br/>productivity?</h3>
<p className="text-slate-500 text-sm leading-relaxed">Stop flirting with to-do lists. Commit to a dashboard that actually understands your chaotic energy.</p>
</div>
<div className="space-y-3">
<button className="w-full h-12 bg-slate-900 text-white rounded-xl text-sm font-medium hover:scale-[1.02] transition-transform active:scale-95 flex items-center justify-center gap-2">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon>
                                Continue with Google
                            </button>
<button className="w-full h-12 bg-white border border-slate-200 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors">
                                Use Email
                            </button>
<p className="text-xs text-center text-slate-400 mt-4">By clicking continue, you agree to our <span className="underline decoration-slate-300">Vows</span>.</p>
</div>
</div>
</div>

<div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200 aspect-[375/812] max-w-[375px] mx-auto">
<div className="p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-8">
<button className="size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-500">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-indigo-500 rounded-full"></div>
</div>
<div className="size-8"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Let's set the mood.</h3>
<p className="text-slate-500 text-sm mb-8">Tell us what keeps you up at night (besides memes).</p>
<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Sleep Goal</label>
<div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-indigo-300 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:moon-sleep-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">7 Hours</span>
</div>
<input className="w-24 accent-indigo-600 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" type="range"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Import Mess</label>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 border border-indigo-600 bg-indigo-50/50 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer">
<iconify-icon className="text-indigo-600" icon="solar:notes-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-indigo-700">Todoist</span>
<div className="absolute top-2 right-2 text-indigo-600">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
<div className="p-3 border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-slate-300 cursor-pointer">
<iconify-icon icon="solar:file-text-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600">CSV</span>
</div>
</div>
</div>
</div>
<div className="mt-auto">
<button className="w-full h-12 bg-indigo-600 text-white rounded-xl text-sm font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2">
                                Finalize Divorce from Chaos
                                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200 aspect-[375/812] max-w-[375px] mx-auto flex items-center justify-center">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-10 left-10 size-2 bg-red-400 rounded-full"></div>
<div className="absolute top-20 right-20 size-3 bg-indigo-400 rotate-45 rounded-sm"></div>
<div className="absolute bottom-40 left-1/3 size-2 bg-yellow-400 rounded-full"></div>
<div className="absolute top-1/2 right-10 size-4 border-2 border-green-400 rounded-full"></div>
</div>
<div className="text-center p-8">
<div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:confetti-minimalistic-linear" width="40"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">It's Official!</h2>
<p className="text-slate-500 text-sm mb-8">Welcome to Day 1. It's all uphill from here (literally).</p>
<button className="px-8 py-3 bg-slate-900 text-white rounded-full text-sm font-medium">Enter Dashboard</button>
</div>
</div>
</div>
</section>

<section className="w-full">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">02. Main Dashboard (Day 1)</h2>
<p className="text-slate-500 mt-1">The "Honeymoon Phase". Clean data, empty inboxes, optimistic charts.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">Desktop View</span>
</div>
</div>

<div className="w-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xl shadow-slate-200/50 flex" style={{height: '800px'}}>

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden lg:flex">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="size-6 bg-indigo-600 rounded mr-2"></div>
<span className="font-semibold tracking-tight">ProductiTrack</span>
</div>
<div className="p-4 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">
<iconify-icon icon="solar:widget-linear" width="18"></iconify-icon> Dashboard
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon> Calendar
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="solar:checklist-minimalistic-linear" width="18"></iconify-icon> Tasks
                            <span className="ml-auto text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">3</span>
</div>
</div>
<div className="mt-8 px-6">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Projects</h4>
<div className="space-y-3">
<div className="flex items-center gap-2 text-sm text-slate-600">
<div className="size-2 rounded-full bg-red-400"></div> World Domination
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<div className="size-2 rounded-full bg-yellow-400"></div> Side Hustle
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<div className="size-2 rounded-full bg-emerald-400"></div> Health
                            </div>
</div>
</div>
<div className="mt-auto p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">New User</span>
<span className="text-xs text-slate-500">Pro Member</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-slate-50/50">

<header className="h-16 bg-white/50 backdrop-blur border-b border-slate-200 sticky top-0 z-10 flex items-center justify-between px-8">
<h2 className="text-lg font-medium text-slate-800">Good Morning, Future CEO 👋</h2>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-sm text-sm text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:fire-bold"></iconify-icon>
<span>1 Day Streak</span>
</div>
<button className="size-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-indigo-600">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="p-8 grid grid-cols-4 gap-6 auto-rows-min">

<div className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
<div className="flex justify-between items-start mb-6">
<h3 className="font-medium text-slate-900">Productivity Pulse</h3>
<iconify-icon className="text-slate-300" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="flex items-center gap-4">
<div className="relative size-16">

<div className="size-full rounded-full bg-slate-100" style={{background: 'conic-gradient(#6366f1 80%, #f1f5f9 0)'}}></div>
<div className="absolute inset-2 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-700">80%</div>
</div>
<div>
<div className="text-2xl font-semibold text-slate-900">12/15</div>
<div className="text-xs text-slate-500">Tasks Completed</div>
</div>
</div>
<div className="flex flex-col justify-center space-y-2">
<div className="flex justify-between text-xs font-medium text-slate-600">
<span>Focus Time</span>
<span>4h 20m</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-emerald-500 rounded-full"></div>
</div>
<div className="text-xs text-slate-400 mt-1">Top 5% of users today. Nice.</div>
</div>
</div>
</div>

<div className="col-span-2 row-span-2 bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="font-medium text-slate-900">Today's Focus <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full text-xs ml-2">3 Left</span></h3>
<button className="text-indigo-600 hover:bg-indigo-50 p-1 rounded transition-colors"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="space-y-3 flex-1 overflow-auto pr-1 custom-scroll">

<div className="p-3 border border-slate-200 rounded-lg hover:shadow-md hover:border-indigo-200 transition-all bg-white group cursor-grab active:cursor-grabbing">
<div className="flex items-start gap-3">
<div className="mt-1 text-slate-300 hover:text-indigo-600 cursor-pointer">
<iconify-icon icon="solar:circle-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-indigo-700">Design the new logo</h4>
<span className="text-[10px] font-bold bg-red-100 text-red-600 px-1.5 py-0.5 rounded uppercase tracking-wide">High</span>
</div>
<p className="text-xs text-slate-500 mt-1 line-clamp-1">Use geometric shapes and avoid comic sans.</p>
<div className="flex items-center gap-3 mt-3">
<div className="flex items-center gap-1 text-[10px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon> 2h left
                                                </div>
<div className="flex items-center gap-1 text-[10px] text-indigo-500">
<iconify-icon icon="solar:tag-linear" width="12"></iconify-icon> Work
                                                </div>
</div>
</div>
</div>
</div>

<div className="p-3 border border-slate-200 rounded-lg hover:shadow-md transition-all bg-white group opacity-60">
<div className="flex items-start gap-3">
<div className="mt-1 text-emerald-500">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900 line-through text-slate-400">Buy a standing desk</h4>
<div className="flex items-center gap-3 mt-2">
<div className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded">Done</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-white rounded-xl p-5 shadow-sm border border-slate-200">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg">
<iconify-icon icon="solar:moon-stars-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">Sleep</span>
</div>
<div className="h-24 w-full">

<svg className="w-full h-full overflow-visible" viewbox="0 0 100 40">
<path className="wavy-line" d="M0,30 Q25,10 50,20 T100,5" fill="none" stroke="#6366f1" strokeWidth="2"></path>
<circle cx="100" cy="5" fill="#6366f1" r="3"></circle>
</svg>
</div>
<div className="flex justify-between mt-2 text-xs text-slate-500">
<span>Avg: 7.2h</span>
<span className="text-emerald-500">+10%</span>
</div>
</div>

<div className="col-span-1 bg-white rounded-xl p-5 shadow-sm border border-slate-200">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg">
<iconify-icon icon="solar:dumbbell-large-minimalistic-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium">Gym</span>
</div>
<div className="flex flex-wrap gap-2">
<div className="size-8 rounded bg-emerald-500 border border-emerald-600"></div>
<div className="size-8 rounded bg-emerald-500 border border-emerald-600"></div>
<div className="size-8 rounded bg-emerald-500 border border-emerald-600"></div>
<div className="size-8 rounded bg-slate-100 border border-slate-200 border-dashed"></div>
</div>
<div className="mt-4 text-xs text-slate-500">
                                3/4 Sessions this week
                            </div>
</div>

<div className="col-span-4 bg-white rounded-xl p-4 shadow-sm border border-slate-200 flex items-center justify-between">

<div className="flex gap-4 w-full">
<div className="flex flex-col items-center gap-2 flex-1 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
<span className="text-xs text-slate-400 font-medium">MON</span>
<span className="text-sm font-semibold text-slate-700">12</span>
<div className="size-1.5 rounded-full bg-emerald-500"></div>
</div>
<div className="flex flex-col items-center gap-2 flex-1 p-2 rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transform scale-105">
<span className="text-xs text-indigo-200 font-medium">TUE</span>
<span className="text-sm font-semibold">13</span>
<div className="size-1.5 rounded-full bg-white"></div>
</div>
<div className="flex flex-col items-center gap-2 flex-1 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
<span className="text-xs text-slate-400 font-medium">WED</span>
<span className="text-sm font-semibold text-slate-700">14</span>
<div className="size-1.5 rounded-full bg-slate-200"></div>
</div>
<div className="flex flex-col items-center gap-2 flex-1 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
<span className="text-xs text-slate-400 font-medium">THU</span>
<span className="text-sm font-semibold text-slate-700">15</span>
<div className="size-1.5 rounded-full bg-red-400"></div>
</div>
<div className="flex flex-col items-center gap-2 flex-1 p-2 rounded-lg hover:bg-slate-50 cursor-pointer opacity-50">
<span className="text-xs text-slate-400 font-medium">FRI</span>
<span className="text-sm font-semibold text-slate-700">16</span>
</div>
</div>
</div>
</div>
</main>
</div>
</section>

<section className="w-full">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">03. The Reality (Month 3)</h2>
<p className="text-slate-500 mt-1">Data density increases. Red accents for overdue items. Excel-like utility.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-500">List View</span>
</div>
</div>
<div className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col" style={{minHeight: '600px'}}>

<div className="h-14 border-b border-slate-200 flex items-center justify-between px-4 bg-white">
<div className="flex items-center gap-2">
<div className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-medium flex items-center gap-2">
<iconify-icon icon="solar:list-linear"></iconify-icon> List
                        </div>
<div className="px-3 py-1.5 text-slate-500 hover:bg-slate-50 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:kanban-linear"></iconify-icon> Kanban
                        </div>
<div className="h-4 w-px bg-slate-200 mx-2"></div>
<button className="text-sm text-slate-600 font-medium flex items-center gap-1">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
                        </button>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-red-500 font-semibold bg-red-50 px-2 py-1 rounded">14 Overdue</span>
<button className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-indigo-700">New Task</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
<div className="col-span-1"></div> 
<div className="col-span-5">Task Name</div>
<div className="col-span-2">Due Date</div>
<div className="col-span-2">Priority</div>
<div className="col-span-2">Project</div>
</div>

<div className="divide-y divide-slate-100">

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center bg-red-50/30 group hover:bg-slate-50 transition-colors">
<div className="col-span-1 flex items-center">
<input className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
</div>
<div className="col-span-5">
<span className="text-sm font-medium text-slate-900">File taxes (Extension expired)</span>
</div>
<div className="col-span-2 text-xs font-semibold text-red-600 flex items-center gap-1">
<iconify-icon icon="solar:calendar-date-linear"></iconify-icon> -14 days
                        </div>
<div className="col-span-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                                P1 Critical
                            </span>
</div>
<div className="col-span-2 text-sm text-slate-500">Finance</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center group hover:bg-slate-50 transition-colors">
<div className="col-span-1 flex items-center">
<input className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
</div>
<div className="col-span-5">
<span className="text-sm font-medium text-slate-900">Cancel Gym Membership</span>
</div>
<div className="col-span-2 text-xs text-orange-600 font-medium flex items-center gap-1">
                            Today
                        </div>
<div className="col-span-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                P2 Medium
                            </span>
</div>
<div className="col-span-2 text-sm text-slate-500">Health</div>
</div>

<div className="grid grid-cols-12 gap-4 px-6 py-4 items-center group hover:bg-slate-50 transition-colors">
<div className="col-span-1 flex items-center">
<input className="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
</div>
<div className="col-span-5">
<span className="text-sm font-medium text-slate-900">Learn to cook something other than pasta</span>
</div>
<div className="col-span-2 text-xs text-slate-500">
                            Nov 24
                        </div>
<div className="col-span-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600">
                                P3 Low
                            </span>
</div>
<div className="col-span-2 text-sm text-slate-500">Life Skills</div>
</div>
</div>

<div className="mt-auto border-t border-slate-200 p-4 bg-slate-50 flex justify-between items-center text-xs text-slate-500">
<span>34 Tasks Total</span>
<div className="flex gap-4">
<span className="hover:text-indigo-600 cursor-pointer">Archive Completed</span>
</div>
</div>
</div>
</section>

<section className="w-full">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">04. Calendar View</h2>
<p className="text-slate-500 mt-1">Heatmap indicators, tight grid, drag-and-drop ready.</p>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-slate-900">November 2023</h3>
<div className="flex gap-2">
<button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="grid grid-cols-7 gap-px mb-2 text-center">
<div className="text-xs font-medium text-slate-400 py-2">MON</div>
<div className="text-xs font-medium text-slate-400 py-2">TUE</div>
<div className="text-xs font-medium text-slate-400 py-2">WED</div>
<div className="text-xs font-medium text-slate-400 py-2">THU</div>
<div className="text-xs font-medium text-slate-400 py-2">FRI</div>
<div className="text-xs font-medium text-slate-400 py-2">SAT</div>
<div className="text-xs font-medium text-slate-400 py-2">SUN</div>
</div>

<div className="grid grid-cols-7 grid-rows-2 gap-4 h-[300px]">

<div className="border-t border-slate-100 p-2 opacity-30">
<span className="text-sm font-medium text-slate-900">30</span>
</div>

<div className="border-t border-slate-100 p-2 relative group hover:bg-slate-50 transition-colors">
<span className="text-sm font-medium text-slate-900">1</span>
<div className="mt-2 space-y-1">
<div className="bg-indigo-50 text-indigo-700 text-[10px] px-1.5 py-0.5 rounded truncate border border-indigo-100">
                                Project Kickoff
                            </div>
</div>
</div>

<div className="border-t border-slate-100 p-2">
<span className="text-sm font-medium text-slate-900">2</span>
</div>

<div className="border-t border-slate-100 p-2">
<span className="text-sm font-medium text-slate-900">3</span>
<div className="mt-2 space-y-1">
<div className="bg-emerald-50 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded truncate border border-emerald-100">
                                Dentist
                            </div>
<div className="bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded truncate">
                                +2 tasks
                            </div>
</div>
</div>

<div className="border-t border-slate-100 p-2">
<span className="text-sm font-medium text-slate-900">4</span>
</div>

<div className="border-t border-slate-100 p-2 bg-slate-50/50">
<span className="text-sm font-medium text-slate-400">5</span>
</div>

<div className="border-t border-slate-100 p-2 bg-slate-50/50">
<span className="text-sm font-medium text-slate-400">6</span>
</div>

<div className="border-t border-slate-100 p-2">
<span className="text-sm font-medium text-slate-900">7</span>
<div className="mt-2 space-y-1">

<div className="bg-purple-100 text-purple-700 text-[10px] px-1.5 py-0.5 rounded border border-purple-200 w-[150%] relative z-10 shadow-sm">
                                Sprint Planning
                            </div>
</div>
</div>
<div className="border-t border-slate-100 p-2">
<span className="text-sm font-medium text-slate-900">8</span>
</div>
<div className="border-t border-slate-100 p-2 bg-red-50/30">
<span className="text-sm font-medium text-red-600">9</span>
<div className="mt-2">
<div className="bg-red-100 text-red-700 text-[10px] px-1.5 py-0.5 rounded truncate border border-red-200">
                                DEADLINE
                            </div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 py-12 text-center">
<p className="text-slate-400 text-sm">ProductiTrack Design System © 2023</p>
</footer>

    </>
  );
}
