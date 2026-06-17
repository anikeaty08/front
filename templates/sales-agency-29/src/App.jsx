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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
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
      

<aside className="w-64 border-r border-zinc-800/50 bg-zinc-950 flex-col hidden md:flex transition-all duration-300">

<div className="h-14 flex items-center px-6 border-b border-zinc-800/50">
<div className="flex items-center gap-2 text-zinc-100">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded flex items-center justify-center text-white">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="font-medium tracking-tight text-base">NEXUS</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto pt-4 pr-3 pb-4 pl-3 space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 group transition-all text-zinc-100 bg-zinc-900 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-indigo-400" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-900/50 rounded-md group transition-all" href="#">
<svg className="lucide lucide-kanban w-4 h-4 group-hover:text-zinc-100 transition-colors" data-lucide="kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v14"></path><path d="M12 3v8"></path><path d="M19 3v18"></path></svg>
<span>Pipeline</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-900/50 rounded-md group transition-all" href="#">
<svg className="lucide lucide-users w-4 h-4 group-hover:text-zinc-100 transition-colors" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Contacts</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-900/50 rounded-md group transition-all" href="#">
<svg className="lucide lucide-check-square w-4 h-4 group-hover:text-zinc-100 transition-colors" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="flex justify-between w-full items-center">
<span>Tasks</span>
<span className="text-xs bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">4</span>
</div>
</a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Reporting</div>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-900/50 rounded-md group transition-all" href="#">
<svg className="lucide lucide-bar-chart-2 w-4 h-4 group-hover:text-zinc-100 transition-colors" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span>Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-900/50 rounded-md group transition-all" href="#">
<svg className="lucide lucide-file-text w-4 h-4 group-hover:text-zinc-100 transition-colors" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span>Invoices</span>
</a>
</nav>

<div className="p-4 border-t border-zinc-800/50">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-900/50 cursor-pointer transition-colors">
<img alt="User" className="w-8 h-8 rounded-full bg-zinc-800 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">Alex Morgan</p>
<p className="text-xs text-zinc-500 truncate">alex@nexus.agency</p>
</div>
<svg className="lucide lucide-settings-2 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: 'rgb(113, 113, 122)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-black/20">

<header className="glass flex sm:px-6 z-10 sticky bg-zinc-950/50 h-14 border-zinc-800/50 border-b pr-4 pl-4 top-0 items-center justify-between">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-white">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<nav className="hidden sm:flex items-center text-xs text-zinc-500 gap-2">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Home</span>
<svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-zinc-200">Dashboard</span>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<svg className="lucide lucide-search w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-900/50 text-zinc-200 text-xs rounded-md pl-9 pr-4 py-1.5 w-64 transition-all placeholder:text-zinc-600 outline-none" placeholder="Search leads, deals..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="text-[10px] text-zinc-600 font-mono border-zinc-800 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">⌘K</span>
</div>
</div>
<button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full border border-zinc-950"></span>
</button>
<button className="bg-zinc-100 text-zinc-950 hover:bg-zinc-200 text-xs font-medium px-3 py-1.5 rounded-md transition-colors flex items-center gap-2">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New Deal</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="">
<h1 className="text-xl font-medium text-zinc-100 tracking-tight">Overview</h1>
<p className="text-zinc-500 mt-1">Track your agency performance and pipeline health.</p>
</div>
<div className="flex items-center gap-2">
<div className="bg-zinc-900 border border-zinc-800 rounded-md flex p-1">
<button className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-100 rounded shadow-sm">7D</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">30D</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">All</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-zinc-900/40 border border-zinc-800/60 p-5 rounded-lg hover:bg-zinc-900/60 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all">
<svg className="lucide lucide-dollar-sign w-4 h-4" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<span className="text-emerald-400 text-xs flex items-center gap-1 font-medium bg-emerald-400/10 px-1.5 py-0.5 rounded border border-emerald-400/20">
                                +12.5% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
<div className="text-zinc-500 text-xs font-medium">Total Revenue</div>
<div className="text-2xl font-medium text-zinc-100 mt-1 tracking-tight">$124,500</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/60 p-5 rounded-lg hover:bg-zinc-900/60 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-zinc-500 text-xs flex items-center gap-1 font-medium">
                                4 pending
                            </span>
</div>
<div className="text-zinc-500 text-xs font-medium">Active Deals</div>
<div className="text-2xl font-medium text-zinc-100 mt-1 tracking-tight">42</div>
</div>

<div className="hover:bg-zinc-900/60 transition-colors group bg-zinc-900/40 border-zinc-800/60 border rounded-lg pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 text-zinc-400 group-hover:text-orange-400 group-hover:border-orange-500/20 transition-all">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-rose-400 text-xs flex items-center gap-1 font-medium bg-rose-400/10 px-1.5 py-0.5 rounded border border-rose-400/20">
                                -2.1% <svg className="lucide lucide-arrow-down-right w-3 h-3" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</span>
</div>
<div className="text-zinc-500 text-xs font-medium">Conversion Rate</div>
<div className="text-2xl font-medium text-zinc-100 mt-1 tracking-tight">3.2%</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/60 p-5 rounded-lg hover:bg-zinc-900/60 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500/20 transition-all">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-zinc-500 text-xs flex items-center gap-1 font-medium">
                                Avg. 14 days
                            </span>
</div>
<div className="text-zinc-500 text-xs font-medium">Sales Cycle</div>
<div className="text-2xl font-medium text-zinc-100 mt-1 tracking-tight">18 Days</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-zinc-200 tracking-tight">Active Pipeline</h2>
<button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1">
                            View all deals <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">

<div className="flex flex-col w-72 shrink-0 gap-3">
<div className="flex items-center justify-between px-1 mb-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">New Leads</span>
<span className="text-xs text-zinc-600">3</span>
</div>
<svg className="lucide lucide-plus w-3.5 h-3.5 text-zinc-600 cursor-pointer hover:text-zinc-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>

<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20 cursor-pointer group transition-all">
<div className="flex mb-2 items-start justify-between">
<span className="text-[10px] font-medium text-blue-400 bg-blue-500/10 border-blue-500/20 border rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">Web Design</span>
<svg className="lucide lucide-more-horizontal w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<h3 className="text-zinc-200 text-sm font-medium">Acme Corp Redesign</h3>
<p className="text-zinc-500 text-xs mt-1">$15,000 • Less than 1d ago</p>
<div className="mt-3 flex items-center gap-2">
<img alt="" className="w-5 h-5 rounded-full ring-2 ring-zinc-900 grayscale" src="https://i.pravatar.cc/150?u=1"/>
<span className="text-xs text-zinc-500">Sarah Connor</span>
</div>
</div>

<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20 cursor-pointer group transition-all">
<div className="flex justify-between items-start mb-2">
<span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] px-1.5 py-0.5 rounded font-medium">SEO Audit</span>
<svg className="lucide lucide-more-horizontal w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<h3 className="text-zinc-200 text-sm font-medium">Stark Industries</h3>
<p className="text-zinc-500 text-xs mt-1">$4,500 • 2d ago</p>
<div className="mt-3 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[9px] font-medium text-zinc-400 border border-zinc-700">TS</div>
<span className="text-xs text-zinc-500">Tony Stark</span>
</div>
</div>
</div>

<div className="flex flex-col w-72 shrink-0 gap-3">
<div className="flex items-center justify-between px-1 mb-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Negotiation</span>
<span className="text-xs text-zinc-600">2</span>
</div>
<svg className="lucide lucide-plus w-3.5 h-3.5 text-zinc-600 cursor-pointer hover:text-zinc-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>

<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20 cursor-pointer group transition-all ring-1 ring-indigo-500/20">
<div className="flex justify-between items-start mb-2">
<span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-[10px] px-1.5 py-0.5 rounded font-medium">Retainer</span>
<svg className="lucide lucide-more-horizontal w-3 h-3 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<h3 className="text-zinc-200 text-sm font-medium">Wayne Ent. Marketing</h3>
<p className="text-zinc-500 text-xs mt-1">$8,000/mo • 5d ago</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="" className="w-5 h-5 rounded-full ring-2 ring-zinc-900 grayscale" src="https://i.pravatar.cc/150?u=3"/>
<span className="text-xs text-zinc-500">Bruce W.</span>
</div>
<div className="flex items-center gap-1 text-orange-400 text-xs">
<svg className="lucide lucide-alert-circle w-3 h-3" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="text-[10px]">Follow up</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col w-72 shrink-0 gap-3">
<div className="flex items-center justify-between px-1 mb-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Closed Won</span>
<span className="text-xs text-zinc-600">5</span>
</div>
<svg className="lucide lucide-plus w-3.5 h-3.5 text-zinc-600 cursor-pointer hover:text-zinc-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>

<div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/50 hover:border-zinc-700/50 cursor-pointer group transition-all opacity-70 hover:opacity-100">
<div className="flex justify-between items-start mb-2">
<span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] px-1.5 py-0.5 rounded font-medium">Consulting</span>
<div className="bg-emerald-500/10 rounded-full p-0.5">
<svg className="lucide lucide-check w-3 h-3 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<h3 className="text-zinc-200 text-sm font-medium line-through decoration-zinc-600">Cyberdyne Systems</h3>
<p className="text-zinc-500 text-xs mt-1">$22,000 • 1w ago</p>
</div>
</div>

<div className="flex flex-col w-72 shrink-0 gap-3">
<div className="h-full border border-dashed border-zinc-800 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all cursor-pointer">
<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-xs font-medium">Add Stage</span>
</div>
</div>
</div>
</div>
</div>

<div className="border border-zinc-800/50 rounded-lg bg-zinc-900/20 overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-800/50 flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200">Recent Interactions</h3>
<div className="flex gap-2">
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-500 hover:text-zinc-300 transition-colors">
<svg className="lucide lucide-filter w-3.5 h-3.5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
<button className="p-1 hover:bg-zinc-800 rounded text-zinc-500 hover:text-zinc-300 transition-colors">
<svg className="lucide lucide-download w-3.5 h-3.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-zinc-500 border-b border-zinc-800/50">
<th className="font-medium px-5 py-3 w-10">
<div className="w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-900"></div>
</th>
<th className="font-medium px-5 py-3">Lead / Company</th>
<th className="font-medium px-5 py-3">Status</th>
<th className="font-medium px-5 py-3">Value</th>
<th className="font-medium px-5 py-3">Last Contact</th>
<th className="font-medium px-5 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-zinc-900/40 transition-colors border-b border-zinc-800/30">
<td className="px-5 py-3">
<div className="w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-900 group-hover:border-zinc-500 cursor-pointer"></div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/20 flex items-center justify-center text-xs font-medium text-pink-300">
                                                GL
                                            </div>
<div>
<div className="text-zinc-200 font-medium text-xs">Global Logistics</div>
<div className="text-zinc-500 text-[10px]">mark@global.com</div>
</div>
</div>
</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                                            Discovery
                                        </span>
</td>
<td className="px-5 py-3 text-zinc-300 font-mono text-xs">$12,000</td>
<td className="px-5 py-3 text-zinc-500 text-xs">2 hours ago</td>
<td className="px-5 py-3 text-right">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</button>
</td>
</tr>
<tr className="group hover:bg-zinc-900/40 transition-colors border-b border-zinc-800/30">
<td className="px-5 py-3">
<div className="w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-900 group-hover:border-zinc-500 cursor-pointer"></div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center text-xs font-medium text-cyan-300">
                                                TC
                                            </div>
<div>
<div className="text-zinc-200 font-medium text-xs">Tech Corp Inc.</div>
<div className="text-zinc-500 text-[10px]">lisa@techcorp.io</div>
</div>
</div>
</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            Proposal Sent
                                        </span>
</td>
<td className="px-5 py-3 text-zinc-300 font-mono text-xs">$28,500</td>
<td className="px-5 py-3 text-zinc-500 text-xs">Yesterday</td>
<td className="px-5 py-3 text-right">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<svg className="lucide lucide-phone w-3.5 h-3.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
</td>
</tr>
<tr className="group hover:bg-zinc-900/40 transition-colors">
<td className="px-5 py-3">
<div className="w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-900 group-hover:border-zinc-500 cursor-pointer"></div>
</td>
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center text-xs font-medium text-violet-300">
                                                DS
                                            </div>
<div>
<div className="text-zinc-200 font-medium text-xs">Design Studio</div>
<div className="text-zinc-500 text-[10px]">contact@studio.design</div>
</div>
</div>
</td>
<td className="px-5 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                            Negotiation
                                        </span>
</td>
<td className="px-5 py-3 text-zinc-300 font-mono text-xs">$6,200</td>
<td className="px-5 py-3 text-zinc-500 text-xs">3 days ago</td>
<td className="px-5 py-3 text-right">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-3 border-t border-zinc-800/50 flex items-center justify-between text-xs text-zinc-500">
<span>Showing 3 of 42 results</span>
<div className="flex gap-2">
<button className="px-2 py-1 rounded hover:bg-zinc-800 disabled:opacity-50 transition-colors">Prev</button>
<button className="px-2 py-1 rounded hover:bg-zinc-800 text-zinc-300 transition-colors">Next</button>
</div>
</div>
</div>
</div>
<footer className="mt-12 mb-4 text-center">
<p className="text-[10px] text-zinc-600">© 2024 Nexus Agency CRM. All rights reserved.</p>
</footer>
</div>
</main>


    </>
  );
}
