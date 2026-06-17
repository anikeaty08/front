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
      

<aside className="flex flex-col flex-shrink-0 z-20 bg-white w-16 h-full border-zinc-200 border-r pt-6 pb-6 items-center">
<div className="mb-8">
<div className="flex text-white bg-zinc-900 w-8 h-8 rounded-lg items-center justify-center hover:bg-zinc-800 transition-colors cursor-pointer">
<span className="font-semibold text-sm tracking-tight">T</span>
</div>
</div>
<nav className="flex flex-col gap-6 w-full items-center">
<button className="text-zinc-900 hover:bg-zinc-100 p-2 rounded-md transition-colors relative group">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<div className="absolute left-full ml-2 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">Dashboard</div>
</button>
<button className="text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 p-2 rounded-md transition-colors relative group">
<svg className="lucide lucide-calendar-clock w-5 h-5" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</button>
<button className="text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 p-2 rounded-md transition-colors relative group">
<svg className="lucide lucide-inbox w-5 h-5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</button>
<button className="text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 p-2 rounded-md transition-colors relative group">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</button>
</nav>
<div className="mt-auto flex flex-col gap-6 w-full items-center">
<button className="text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 p-2 rounded-md transition-colors">
<svg className="lucide lucide-settings-2 w-5 h-5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-300 cursor-pointer hover:border-zinc-400 transition-colors">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="h-14 border-b border-zinc-200 bg-white flex items-center justify-between px-6 flex-shrink-0 z-10">
<div className="flex items-center gap-4">
<h1 className="font-semibold text-sm tracking-tight text-zinc-900">Today, Oct 24</h1>
<span className="text-zinc-300">/</span>
<span className="text-zinc-500 text-sm font-normal">Planning &amp; Execution</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600">Focus Mode Active</span>
</div>
<button className="text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-md hover:bg-zinc-800 transition-colors shadow-sm ring-offset-1 focus:ring-2 ring-zinc-500">
                    Start Review
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden p-6">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">

<div className="lg:col-span-3 flex flex-col gap-6">

<section className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Daily Objective</h2>
<svg className="lucide lucide-target w-4 h-4 text-zinc-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="relative">
<textarea className="w-full text-sm text-zinc-800 placeholder-zinc-400 bg-zinc-50 border border-zinc-200 rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:bg-white transition-colors resize-none h-24 mb-3" placeholder="What is your main goal today?"></textarea>
<div className="absolute bottom-5 right-3">
<button className="p-1 hover:bg-zinc-200 rounded text-zinc-400 transition-colors">
<svg className="lucide lucide-mic w-3.5 h-3.5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 py-2 rounded-lg border border-purple-100 transition-colors">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                            AI Breakdown
                        </button>
</section>

<section className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 flex-1 min-h-[300px]">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Tasks Breakdown</h2>
<span className="text-[10px] bg-zinc-100 text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200">Auto-generated</span>
</div>
<div className="space-y-3">

<div className="group flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all cursor-move">
<div className="mt-0.5 text-zinc-400 group-hover:text-zinc-600">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-zinc-800">Draft Requirement Doc</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-zinc-500 bg-zinc-100 px-1 rounded">30m</span>
<span className="text-[10px] text-amber-600 bg-amber-50 px-1 rounded border border-amber-100">High Cognitive</span>
</div>
</div>
</div>

<div className="group flex items-start gap-3 p-2 rounded-lg hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all cursor-move">
<div className="mt-0.5 text-zinc-400 group-hover:text-zinc-600">
<svg className="lucide lucide-grip-vertical w-4 h-4" data-lucide="grip-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-zinc-800">Review Competitors</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-zinc-500 bg-zinc-100 px-1 rounded">45m</span>
<span className="text-[10px] text-zinc-500 bg-zinc-50 px-1 rounded border border-zinc-100">Research</span>
</div>
</div>
</div>

<div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 mt-4">
<div className="flex gap-2">
<svg className="lucide lucide-bot w-4 h-4 text-blue-600 mt-0.5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<div>
<p className="text-xs text-blue-800 font-medium leading-relaxed">
                                            The task "Prototype UI" (2h) is too long. Suggested breakdown:
                                        </p>
<ul className="mt-2 space-y-1">
<li className="text-xs text-blue-700 flex items-center gap-2">
<div className="w-1 h-1 bg-blue-400 rounded-full"></div> Layout Structure (45m)
                                            </li>
<li className="text-xs text-blue-700 flex items-center gap-2">
<div className="w-1 h-1 bg-blue-400 rounded-full"></div> Component Design (45m)
                                            </li>
</ul>
<button className="mt-2 text-[10px] font-medium text-white bg-blue-600 px-2 py-1 rounded hover:bg-blue-700 transition-colors">Apply Suggestion</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 rounded-xl shadow-lg p-5 text-white">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Golden Hours</h2>
<svg className="lucide lucide-sun w-4 h-4 text-amber-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="mb-4">
<div className="flex justify-between text-[10px] text-zinc-400 mb-1">
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
</div>
<div className="h-2 bg-zinc-700 rounded-full relative overflow-hidden">

<div className="absolute left-[25%] width-[33%] h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full w-1/3"></div>
</div>
<input className="custom-range mt-2" max="100" min="0" type="range" value="40"/>
</div>
<p className="text-xs text-zinc-400 leading-tight">
                            Allocated <span className="text-white font-medium">09:00 - 11:30</span> for high complexity tasks.
                        </p>
</section>
</div>

<div className="lg:col-span-6 bg-white rounded-xl border border-zinc-200 shadow-sm flex flex-col relative overflow-hidden">
<div className="p-4 border-b border-zinc-100 flex justify-between items-center bg-white z-10 sticky top-0">
<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Timeline Execution</h2>
<div className="flex gap-2">
<button className="p-1.5 hover:bg-zinc-100 rounded text-zinc-400"><svg className="lucide lucide-zoom-in w-4 h-4" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg></button>
<button className="p-1.5 hover:bg-zinc-100 rounded text-zinc-400"><svg className="lucide lucide-zoom-out w-4 h-4" data-lucide="zoom-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg></button>
</div>
</div>
<div className="flex-1 overflow-y-auto relative p-4 custom-scrollbar">

<div className="absolute w-full border-t border-red-500 z-20 top-[380px] pointer-events-none">
<span className="absolute right-4 -top-2.5 text-[10px] font-medium text-white bg-red-500 px-1.5 py-0.5 rounded shadow-sm">14:24</span>
<div className="absolute left-0 -top-1 w-2 h-2 bg-red-500 rounded-full shadow-sm"></div>
</div>

<div className="relative pl-12 min-h-[800px]">

<div className="absolute left-[23px] top-0 bottom-0 w-px bg-zinc-100"></div>

<div className="relative mb-8 group">
<span className="absolute -left-12 top-0 text-xs font-medium text-zinc-400 w-8 text-right">09:00</span>

<div className="absolute -left-4 -right-4 top-0 h-[140px] bg-gradient-to-b from-amber-50/50 to-transparent -z-10 rounded-lg"></div>
<div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg opacity-60 hover:opacity-100 transition-opacity">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-tight">Completed</span>
</div>
<h3 className="text-sm font-medium text-zinc-700 line-through">System Architecture Planning</h3>
</div>
<span className="text-xs text-zinc-400 font-mono">1h 30m</span>
</div>
</div>
</div>

<div className="relative mb-8">
<span className="absolute -left-12 top-0 text-xs font-medium text-zinc-400 w-8 text-right">10:30</span>
<div className="bg-zinc-50 border border-zinc-200 p-3 rounded-lg opacity-60">
<h3 className="text-sm font-medium text-zinc-700 line-through">Team Sync</h3>
<div className="flex gap-2 mt-2">
<span className="text-[10px] bg-zinc-200 text-zinc-600 px-1.5 py-0.5 rounded">Meeting</span>
</div>
</div>
</div>

<div className="relative mb-12">
<span className="absolute -left-12 top-0 text-xs font-medium text-zinc-900 w-8 text-right">13:00</span>

<div className="bg-white border-l-4 border-l-purple-500 border-y border-r border-zinc-200 p-4 rounded-r-lg shadow-sm hover:shadow-md transition-shadow relative">
<div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-8 bg-purple-500 blur-sm opacity-50"></div>
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="animate-pulse w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-xs font-semibold text-purple-600 uppercase tracking-tight">In Progress</span>
</div>
<div className="flex gap-1">
<button className="p-1 text-zinc-400 hover:text-zinc-600"><svg className="lucide lucide-pause w-3.5 h-3.5" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg></button>
<button className="p-1 text-zinc-400 hover:text-green-600"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></button>
</div>
</div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight">Frontend Implementation: Timeline</h3>
<p className="text-xs text-zinc-500 mt-1 mb-3">Refining the drag-and-drop interactions for the vertical axis.</p>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 text-[10px] text-zinc-500 bg-zinc-100 px-2 py-1 rounded">
<svg className="lucide lucide-tag w-3 h-3" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Dev
                                        </span>
<span className="text-[10px] text-zinc-400">Est. 2h</span>
</div>
</div>
</div>

<div className="relative mb-2">
<span className="absolute -left-12 top-0 text-xs font-medium text-zinc-400 w-8 text-right">15:00</span>
<div className="bg-white border border-zinc-200 border-dashed p-3 rounded-lg hover:border-zinc-400 transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-500 group-hover:text-zinc-800">API Integration Testing</h3>
<svg className="lucide lucide-grip-horizontal w-4 h-4 text-zinc-300 group-hover:text-zinc-500" data-lucide="grip-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="1"></circle><circle cx="19" cy="9" r="1"></circle><circle cx="5" cy="9" r="1"></circle><circle cx="12" cy="15" r="1"></circle><circle cx="19" cy="15" r="1"></circle><circle cx="5" cy="15" r="1"></circle></svg>
</div>
</div>
</div>

<div className="relative mt-8 mb-2">
<span className="absolute -left-12 top-0 text-xs font-medium text-zinc-400 w-8 text-right">16:00</span>
<div className="bg-white border border-zinc-200 border-dashed p-3 rounded-lg hover:border-zinc-400 transition-colors cursor-pointer group">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-500 group-hover:text-zinc-800">Documentation Update</h3>
<svg className="lucide lucide-grip-horizontal w-4 h-4 text-zinc-300 group-hover:text-zinc-500" data-lucide="grip-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="9" r="1"></circle><circle cx="19" cy="9" r="1"></circle><circle cx="5" cy="9" r="1"></circle><circle cx="12" cy="15" r="1"></circle><circle cx="19" cy="15" r="1"></circle><circle cx="5" cy="15" r="1"></circle></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col gap-6">

<section className="bg-white rounded-xl border border-zinc-200 shadow-sm flex flex-col h-1/2">
<div className="p-4 border-b border-zinc-100 flex justify-between items-center">
<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Captured Info</h2>
<span className="w-5 h-5 rounded bg-zinc-100 flex items-center justify-center text-[10px] font-medium text-zinc-600">3</span>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-2">

<div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all group relative">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] text-blue-600 font-medium">Waitlist</span>
<div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
<button className="text-zinc-400 hover:text-red-500"><svg className="lucide lucide-trash-2 w-3 h-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
<button className="text-zinc-400 hover:text-green-500"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></button>
</div>
</div>
<p className="text-xs font-medium text-zinc-800 leading-snug line-clamp-2">React 19 RC Features Breakdown - Vercel Blog</p>
<a className="text-[10px] text-zinc-400 truncate block mt-1 hover:text-zinc-600" href="#">vercel.com/blog/react-19...</a>
</div>

<div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all group">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] text-amber-600 font-medium">To Read</span>
<div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
<button className="text-zinc-400 hover:text-red-500"><svg className="lucide lucide-trash-2 w-3 h-3" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
<button className="text-zinc-400 hover:text-green-500"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></button>
</div>
</div>
<p className="text-xs font-medium text-zinc-800 leading-snug">Design Engineering Handbook</p>
<a className="text-[10px] text-zinc-400 truncate block mt-1 hover:text-zinc-600" href="#">designengineering.com</a>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-zinc-200 shadow-sm flex flex-col h-1/2">
<div className="p-4 border-b border-zinc-100 flex justify-between items-center">
<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Task Pool</h2>
<button className="text-zinc-400 hover:text-zinc-900"><svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">
<div className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-md group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-zinc-700 flex-1">Update dependencies</span>
<span className="text-[10px] text-zinc-400">15m</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-md group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-zinc-700 flex-1">Respond to emails</span>
<span className="text-[10px] text-zinc-400">30m</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-md group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-zinc-700 flex-1">Clean up desktop</span>
<span className="text-[10px] text-zinc-400">10m</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-md group">
<input className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-zinc-700 flex-1">Weekly Report</span>
<span className="text-[10px] text-zinc-400">45m</span>
</div>
</div>
</section>
</div>
</div>
</div>
</main>



    </>
  );
}
