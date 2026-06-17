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



        // Initialize Icons
        lucide.createIcons();

        // Simple Mobile Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const sidebar = document.querySelector('aside');
        
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            sidebar.classList.toggle('fixed');
            sidebar.classList.toggle('inset-0');
            sidebar.classList.toggle('w-full');
            
            // Re-render icons if needed for new elements, though here static
            lucide.createIcons();
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
      

<div className="fixed top-0 left-0 right-0 h-14 bg-zinc-900 z-50 flex items-center px-4 justify-between lg:hidden">
<div className="flex items-center gap-2 text-white">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-orange-500 to-red-500 flex items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4 text-white fill-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="font-medium tracking-tight">Flow</span>
</div>
<button className="text-zinc-400 hover:text-white" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<aside className="hidden lg:flex w-64 flex-col bg-zinc-900 border-r border-zinc-800 z-20 flex-shrink-0 transition-all duration-300">

<div className="h-16 flex items-center gap-3 px-6 border-b border-white/5">
<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-900/20">
<svg className="lucide lucide-zap w-4 h-4 text-white fill-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-zinc-100 font-medium tracking-tight text-base">ProjectFlow</span>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-6">

<div className="space-y-1">
<div className="px-3 mb-2 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Workspace</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800 text-white shadow-inner shadow-white/5 group" href="#">
<svg className="lucide lucide-layout-grid w-4 h-4 text-zinc-100" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="font-medium">Dashboard</span>
<span className="ml-auto text-[10px] bg-zinc-700/50 px-1.5 py-0.5 rounded text-zinc-400">⌘K</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 transition-all duration-200" href="#">
<svg className="lucide lucide-inbox w-4 h-4" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span>Inbox</span>
<div className="ml-auto w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 transition-all duration-200" href="#">
<svg className="lucide lucide-kanban-square w-4 h-4" data-lucide="kanban-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M8 7v7"></path><path d="M12 7v4"></path><path d="M16 7v9"></path></svg>
<span>Board</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 transition-all duration-200" href="#">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Timeline</span>
</a>
</div>

<div className="space-y-1">
<div className="px-3 mb-2 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Projects</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 transition-all duration-200" href="#">
<span className="w-4 h-4 flex items-center justify-center rounded bg-purple-500/10 text-purple-400 text-[10px] font-bold">F</span>
<span className="truncate">FinTech App</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 transition-all duration-200" href="#">
<span className="w-4 h-4 flex items-center justify-center rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold">W</span>
<span className="truncate">Website Redesign</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 transition-all duration-200" href="#">
<span className="w-4 h-4 flex items-center justify-center rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">M</span>
<span className="truncate">Mobile API</span>
</a>
</div>

<div className="space-y-1">
<div className="px-3 mb-2 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Analytics</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200 transition-all duration-200" href="#">
<svg className="lucide lucide-pie-chart w-4 h-4" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span>Reports</span>
</a>
</div>
</div>

<div className="p-4 border-t border-white/5 space-y-2">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors" href="#">
<svg className="lucide lucide-settings-2 w-4 h-4" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
<span>Settings</span>
</a>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-zinc-700 ring-2 ring-zinc-800 overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Marcus Horitz</span>
<span className="text-[10px] text-zinc-500">Product Manager</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative lg:pt-0 pt-14">

<header className="flex-none flex lg:px-8 sticky z-10 bg-white/80 h-16 border-zinc-100 border-b pr-6 pl-6 top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-4 animate-fade-in">
<div>
<h1 className="text-xl font-semibold text-zinc-900 tracking-tight">Overview</h1>
</div>
</div>
<div className="flex items-center gap-3 animate-fade-in delay-100">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-zinc-50 rounded-md border border-zinc-200/60 shadow-sm">
<svg className="lucide lucide-calendar-clock w-3.5 h-3.5 text-zinc-500" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
<span className="text-xs font-medium text-zinc-700">Sprint 12</span>
<span className="w-1 h-1 rounded-full bg-zinc-300 mx-1"></span>
<span className="text-xs text-zinc-500">Mar 12 - Mar 26</span>
</div>
<div className="h-6 w-px bg-zinc-200 mx-1"></div>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-50 text-zinc-500 transition-colors relative">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 rounded-md text-xs font-medium transition-colors shadow-sm shadow-zinc-500/20">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New Task</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden">
<div className="lg:p-8 max-w-5xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 space-y-10">

<div className="animate-slide-up">
<div className="flex border-zinc-100 border-b items-center justify-between">
<div className="flex gap-6 gap-x-6 gap-y-6">
<button className="text-sm font-medium text-zinc-900 border-zinc-900 border-b-2 pb-3">Timeline</button>
<button className="hover:text-zinc-800 transition-colors text-sm font-normal text-zinc-500 pb-3">List View</button>
<button className="hover:text-zinc-800 transition-colors text-sm font-normal text-zinc-500 pb-3">Board</button>
<button className="pb-3 text-sm font-normal text-zinc-500 hover:text-zinc-800 transition-colors">Files</button>
</div>
<div className="flex items-center gap-2 pb-2">
<button className="p-1.5 rounded hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600 transition-colors">
<svg className="lucide lucide-filter w-3.5 h-3.5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
<button className="p-1.5 rounded hover:bg-zinc-100 text-zinc-400 hover:text-zinc-600 transition-colors">
<svg className="lucide lucide-maximize-2 w-3.5 h-3.5" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
</div>

<div className="mt-8 select-none">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-900 flex items-center gap-2">
<svg className="lucide lucide-layers w-4 h-4 text-zinc-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                                Product Roadmap
                            </h3>
<div className="flex gap-1 text-xs text-zinc-400 font-mono">
<span>12PM</span>
<span className="mx-8">3PM</span>
<span>6PM</span>
</div>
</div>
<div className="space-y-3 relative">

<div className="absolute inset-0 flex pointer-events-none z-0">
<div className="w-1/4 border-r border-zinc-50"></div>
<div className="w-1/4 border-r border-zinc-50"></div>
<div className="w-1/4 border-r border-zinc-50"></div>
</div>

<div className="relative z-10 grid grid-cols-12 gap-4 items-center group">
<div className="col-span-3 lg:col-span-2 text-xs font-medium text-zinc-600 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-purple-500"></span> Design System
                                </div>
<div className="col-span-9 lg:col-span-10 h-8 bg-zinc-50/50 rounded-md relative flex items-center subtle-border hover:border-zinc-200 transition-colors">
<div className="absolute left-[5%] w-[35%] h-6 rounded bg-purple-500/10 border border-purple-500/20 text-purple-700 flex items-center px-2 cursor-pointer hover:bg-purple-500/20 transition-colors">
<span className="text-[10px] font-medium truncate">Figma Components • In Progress</span>
</div>
<div className="absolute left-[42%] w-6 h-6 rounded-full border border-dashed border-zinc-300 flex items-center justify-center bg-white" title="Dependency">
<svg className="lucide lucide-arrow-right w-3 h-3 text-zinc-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="relative z-10 grid grid-cols-12 gap-4 items-center group">
<div className="col-span-3 lg:col-span-2 text-xs font-medium text-zinc-600 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span> Mobile App
                                </div>
<div className="col-span-9 lg:col-span-10 h-8 bg-zinc-50/50 rounded-md relative flex items-center subtle-border hover:border-zinc-200 transition-colors">
<div className="absolute left-[20%] w-[25%] h-6 rounded bg-blue-500/10 border border-blue-500/20 text-blue-700 flex items-center px-2 cursor-pointer hover:bg-blue-500/20 transition-colors">
<span className="text-[10px] font-medium truncate">Auth Flow</span>
</div>
<div className="absolute left-[48%] w-[30%] h-6 rounded bg-blue-500/5 border border-blue-500/10 text-blue-400 flex items-center px-2 cursor-pointer opacity-70">
<span className="text-[10px] font-medium truncate">Profile Settings</span>
</div>
</div>
</div>

<div className="relative z-10 grid grid-cols-12 gap-4 items-center group">
<div className="col-span-3 lg:col-span-2 text-xs font-medium text-zinc-600 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-500"></span> API Integ.
                                </div>
<div className="col-span-9 lg:col-span-10 h-8 bg-zinc-50/50 rounded-md relative flex items-center subtle-border hover:border-zinc-200 transition-colors">
<div className="absolute left-[15%] w-[40%] h-6 rounded bg-amber-500/10 border border-amber-500/20 text-amber-700 flex items-center px-2 cursor-pointer hover:bg-amber-500/20 transition-colors">
<span className="text-[10px] font-medium truncate">Payment Gateway Stripe</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="animate-slide-up delay-200">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium tracking-tight text-zinc-900">Active Projects</h2>
<button className="text-xs text-zinc-500 hover:text-zinc-900 font-medium transition-colors">View All</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="group p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<svg className="lucide lucide-wallet w-5 h-5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div>
<h3 className="font-medium text-zinc-900">FinTech Dashboard</h3>
<p className="text-xs text-zinc-500 mt-0.5">Banking Interface</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                                    On Track
                                </span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-xs text-zinc-500">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-zinc-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>12/16 tasks</span>
</div>
<span className="text-zinc-700 font-medium">75%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-900 rounded-full w-3/4"></div>
</div>
<div className="flex items-center justify-between pt-2 border-t border-zinc-50">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;fit=crop"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[9px] font-medium text-zinc-500">+3</div>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                                        2 days left
                                    </div>
</div>
</div>
</div>

<div className="group p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div>
<h3 className="font-medium text-zinc-900">E-commerce App</h3>
<p className="text-xs text-zinc-500 mt-0.5">Marketplace Setup</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-100">
                                    Attention
                                </span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-xs text-zinc-500">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-zinc-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>8/24 tasks</span>
</div>
<span className="text-zinc-700 font-medium">33%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full w-1/3"></div>
</div>
<div className="flex items-center justify-between pt-2 border-t border-zinc-50">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&amp;h=64&amp;fit=crop"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&amp;h=64&amp;fit=crop"/>
</div>
<div className="text-[10px] text-zinc-400 flex items-center gap-1">
                                        Updated 4h ago
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden xl:flex w-80 flex-col border-l border-zinc-200 bg-zinc-50/50 overflow-y-auto">
<div className="p-6">

<div className="mb-10 animate-fade-in delay-200">
<h3 className="text-sm font-medium text-zinc-900 mb-6">Team Velocity</h3>
<div className="flex flex-col items-center">
<div className="progress-ring-track w-40 h-40 rounded-full flex items-center justify-center relative mb-6">
<div className="absolute inset-[6px] rounded-full bg-zinc-50 flex flex-col items-center justify-center">
<span className="text-3xl font-semibold text-zinc-900 tracking-tight">84</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium mt-1">Efficiency</span>
</div>
</div>
<div className="grid grid-cols-3 gap-6 w-full px-2">
<div className="text-center">
<div className="text-lg font-semibold text-zinc-900">12</div>
<div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Done</div>
</div>
<div className="text-center relative">
<div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-200"></div>
<div className="text-lg font-semibold text-zinc-900">8</div>
<div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Active</div>
<div className="absolute right-0 top-2 bottom-2 w-px bg-zinc-200"></div>
</div>
<div className="text-center">
<div className="text-lg font-semibold text-zinc-900 text-red-500">3</div>
<div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Late</div>
</div>
</div>
</div>
</div>

<div className="animate-fade-in delay-300">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-900">Activity</h3>
<button className="p-1 text-zinc-400 hover:text-zinc-600 rounded">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="space-y-0 relative">

<div className="absolute left-3.5 top-2 bottom-4 w-px bg-zinc-200"></div>

<div className="relative pl-8 pb-6 group">
<div className="absolute left-2 top-1.5 w-3 h-3 bg-white border-2 border-zinc-300 rounded-full z-10 group-hover:border-zinc-400 transition-colors"></div>
<div className="flex flex-col gap-1">
<p className="text-xs text-zinc-800 leading-relaxed">
<span className="font-medium">Alex Rodriguez</span> deployed <span className="font-medium text-zinc-900">Release v2.4</span>
</p>
<span className="text-[10px] text-zinc-400">10m ago</span>
</div>
</div>

<div className="relative pl-8 pb-6 group">
<div className="absolute left-2 top-1.5 w-3 h-3 bg-white border-2 border-blue-400 rounded-full z-10"></div>
<div className="flex flex-col gap-1">
<p className="text-xs text-zinc-800 leading-relaxed">
<span className="font-medium">Sarah Kim</span> commented on <span className="font-medium text-zinc-900">Design System</span>
</p>
<div className="p-2 bg-white border border-zinc-200 rounded text-[10px] text-zinc-600 italic">
                                "Should we stick to the 4px grid?"
                            </div>
<span className="text-[10px] text-zinc-400">1h ago</span>
</div>
</div>

<div className="relative pl-8 group">
<div className="absolute left-2 top-1.5 w-3 h-3 bg-white border-2 border-zinc-300 rounded-full z-10 group-hover:border-zinc-400 transition-colors"></div>
<div className="flex flex-col gap-1">
<p className="text-xs text-zinc-800 leading-relaxed">
<span className="font-medium">David Park</span> created a new task
                            </p>
<span className="text-[10px] text-zinc-400">2h ago</span>
</div>
</div>
</div>
</div>

<div className="mt-8 animate-fade-in delay-300">
<div className="p-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-white shadow-lg shadow-zinc-900/10">
<h4 className="font-medium text-sm mb-1">Weekly Report</h4>
<p className="text-xs text-zinc-400 mb-3">Generate insights for the team.</p>
<button className="w-full py-2 bg-white text-zinc-900 rounded-lg text-xs font-medium hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-sparkles w-3 h-3 text-amber-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                        Generate with AI
                    </button>
</div>
</div>
</div>
</aside>


    </>
  );
}
