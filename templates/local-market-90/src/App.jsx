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
      

<aside className="flex flex-col flex-shrink-0 transition-all duration-300 text-slate-400 bg-[#1C1E2E] w-72">

<div className="h-20 flex items-center px-6 pt-4 pb-2">
<div className="flex items-center gap-3 text-white w-full">
<div className="relative flex items-center justify-center">
<svg className="lucide lucide-map-pin w-8 h-8 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle className="fill-current text-white" cx="12" cy="10" r="3" stroke="none"></circle></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white">LocalStalls</span>
<div className="ml-auto text-slate-500 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<svg className="lucide lucide-circle-dot" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-4 space-y-2 hide-scrollbar">

<a className="flex items-center gap-4 px-4 py-2.5 bg-[#2D8A4E] hover:bg-[#257341] text-white rounded-lg shadow-sm transition-colors group" href="#">
<svg className="lucide lucide-gauge w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="text-base">Dashboard</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-calendar w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span className="text-base">Events</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group justify-between" href="#">
<div className="flex items-center gap-4">
<svg className="lucide lucide-hourglass w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
<span className="text-base">Applications</span>
</div>
<span className="bg-green-600 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">35</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-contact-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 18a4 4 0 0 0-8 0"></path><circle cx="12" cy="11" r="3"></circle><rect height="18" rx="2" width="18" x="3" y="4"></rect><line x1="8" x2="8" y1="2" y2="4"></line><line x1="16" x2="16" y1="2" y2="4"></line></svg>
<span className="text-base">Vendors</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group justify-between" href="#">
<div className="flex items-center gap-4">
<svg className="lucide lucide-file w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
<span className="text-base">Invoices</span>
</div>
<span className="bg-green-600 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">9</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-mail w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span className="text-base">Bulk Messages</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-share-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span className="text-base">Social Posts</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-ticket w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="text-base">Ticketing</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-users w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="text-base">Team</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-users-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 19a6 6 0 0 0-12 0"></path><circle cx="8" cy="9" r="4"></circle><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path></svg>
<span className="text-base">Volunteers</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-badge-dollar-sign w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z"></path><path d="M12 8v8"></path><path d="M9.5 10.5c.5-1.5 2.5-1.5 3 0s-2 1.5-2.5 3c-.5 1.5 1.5 1.5 2 0"></path></svg>
<span className="text-base">Sponsors</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-music w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<span className="text-base">Entertainers</span>
</a>

<a className="flex items-center gap-4 px-4 py-2.5 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-settings w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-base">Settings</span>
</a>


<div className="pt-2 pb-6 px-4 space-y-1">
<div className="px-2 text-sm text-slate-500 mb-2 mt-2">Support</div>
<a className="flex items-center gap-4 px-4 py-2 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-headphones w-5 h-5 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span className="text-base">Support Tickets</span>
</a>
<a className="flex items-center gap-4 px-4 py-2 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-help-circle w-5 h-5 group-hover:text-white transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="text-base">Knowledge Base</span>
</a>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col overflow-hidden bg-[#F8F9FC]">

<header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 flex-shrink-0 z-20">

<div className="w-96 relative">
<svg aria-hidden="true" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-lg text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all text-base" placeholder="Search (Ctrl+/)" type="text"/>
</div>

<div className="flex items-center gap-5">
<button className="text-slate-500 hover:text-slate-700 transition-colors">
</button>
<button className="text-slate-500 hover:text-slate-700 transition-colors">
</button>
<button className="text-slate-500 hover:text-slate-700 transition-colors relative">
<svg aria-hidden="true" className="lucide lucide-bell w-6 h-6" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">4</span>
</button>
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-200">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto pt-8 pr-8 pb-8 pl-8">

<div className="grid grid-cols-12 gap-6 mb-8">

<div className="col-span-6 bg-[#00A76F] rounded-2xl p-6 text-white relative overflow-hidden shadow-lg shadow-green-900/10">
<div className="flex justify-between items-start mb-2">
<div className="">
<h2 className="text-xl font-semibold tracking-tight">Next Event - Sunday 21st May</h2>
<p className="text-green-100 text-base mt-1 font-medium opacity-90">Mount Berry Sunday Market</p>
</div>
<button className="text-white/70 hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-more-horizontal w-6 h-6" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="flex items-center gap-3">
<span className="min-w-[3rem] text-base font-semibold text-center bg-white/20 rounded pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur-sm">89%</span>
<span className="text-sm font-medium text-green-50">Vendors Confirmed</span>
</div>
<div className="flex items-center gap-3">
<span className="bg-white/20 px-2.5 py-1 rounded text-base font-semibold backdrop-blur-sm min-w-[3rem] text-center">23</span>
<span className="text-sm font-medium text-green-50">Pending Payments</span>
</div>
<div className="flex items-center gap-3">
<span className="bg-white/20 px-2.5 py-1 rounded text-base font-semibold backdrop-blur-sm min-w-[3rem] text-center">12</span>
<span className="text-sm font-medium text-green-50">Pending Applications</span>
</div>
<div className="flex items-center gap-3">
<span className="bg-white/20 px-2.5 py-1 rounded text-base font-semibold backdrop-blur-sm min-w-[3rem] text-center">4</span>
<span className="text-sm font-medium text-green-50">Days To Go</span>
</div>
</div>
</div>

<div className="col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-700 tracking-tight">Revenue</h3>
<p className="text-slate-400 text-sm mt-1">Last Week</p>
</div>

<div className="relative h-20 w-full mt-4">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 60">
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#10b981', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#fff', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0 50 C 50 50, 70 10, 120 20 S 160 30, 200 10" fill="none" stroke="#10b981" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="" d="M0 50 C 50 50, 70 10, 120 20 S 160 30, 200 10 V 60 H 0 Z" fill="url(#grad1)"></path>
</svg>
</div>
<div className="flex items-end justify-between mt-2">
<div className="text-2xl font-semibold text-slate-800 tracking-tight">$18,000</div>
<div className="text-green-500 text-sm font-semibold">+16.2%</div>
</div>
</div>

<div className="col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 text-cyan-500">
<svg aria-hidden="true" className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-700 tracking-tight">Bookings</h3>
<p className="text-sm text-slate-400 mt-1">This week</p>
</div>
<div className="flex items-end justify-between mt-6">
<div className="text-3xl font-semibold text-slate-800 tracking-tight">38</div>
<div className="bg-slate-100 text-slate-500 text-xs font-semibold px-2 py-1 rounded-md">+25.2%</div>
</div>
</div>
</div>

<div className="bg-white border-slate-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm mb-8">
<div className="flex justify-between items-start">
<div className="w-1/3">
<h3 className="text-lg font-semibold text-slate-800 tracking-tight">Reports</h3>
<p className="text-slate-400 text-sm mt-1 mb-8">High-Level Summaries</p>
<div className="flex gap-4">
<button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border-2 border-green-500 bg-green-50 text-green-700 transition-all">
<svg aria-hidden="true" className="lucide lucide-dollar-sign w-6 h-6 mb-2" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="text-sm font-semibold">Payments</span>
</button>
<button className="flex flex-col border-dashed hover:border-green-500 hover:text-green-600 hover:bg-slate-50 transition-all text-slate-500 w-24 h-24 border-slate-300 border rounded-xl items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-store w-6 h-6 mb-2" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
<span className="text-sm font-medium">New vendors</span>
</button>
<button className="flex flex-col items-center justify-center w-24 h-24 rounded-xl border border-dashed border-slate-300 text-slate-500 hover:border-green-500 hover:text-green-600 hover:bg-slate-50 transition-all">
<svg aria-hidden="true" className="lucide lucide-bar-chart w-6 h-6 mb-2" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
<span className="text-sm font-medium">Applications</span>
</button>
</div>
</div>

<div className="flex-1 flex items-end h-64 gap-6 pl-10 pt-4">

<div className="flex flex-col justify-between h-full text-xs text-slate-400 pb-8 text-right pr-2 w-10">
<span className="">50k</span>
<span>40k</span>
<span>30k</span>
<span>20k</span>
<span className="">10k</span>
<span className="">0k</span>
</div>

<div className="flex-1 flex items-end justify-between h-full pb-6 border-b border-slate-100 gap-2">

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">2.8k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '56%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Jan</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">1.0k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '20%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Feb</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-bold text-slate-700 mb-1">4.5k</span>
<div className="w-full max-w-[28px] bg-[#00A76F] rounded-t-md shadow-lg shadow-green-900/10 transition-all relative overflow-hidden" style={{height: '90%'}}>
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs text-slate-600 font-bold">Mar</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">3.8k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '76%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Apr</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">1.5k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '30%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">May</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">3.0k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '60%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Jun</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">3.5k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '70%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Jul</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">2.8k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '56%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Aug</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">0.8k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '16%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Sep</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">2.4k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '48%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Oct</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">3.2k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '64%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Nov</span>
</div>

<div className="flex flex-col items-center justify-end h-full w-full gap-2 group">
<span className="text-xs font-semibold text-slate-500 mb-1 group-hover:text-slate-700 transition-colors">4.0k</span>
<div className="w-full max-w-[28px] bg-indigo-50 rounded-t-md group-hover:bg-indigo-100 transition-all" style={{height: '80%'}}></div>
<span className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">Dec</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-6 mb-8">

<div className="col-span-8 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col">
<div className="p-6 pb-0 flex items-center justify-between">
<div className="">
<h3 className="text-lg font-semibold text-slate-800 tracking-tight">Pending Summary</h3>
<p className="text-slate-400 text-sm mt-1">88 Pending Items</p>
</div>
<a className="text-green-600 font-semibold text-sm hover:text-green-700" href="#">View All</a>
</div>

<div className="flex border-b border-slate-100 mt-6 px-6 gap-8">
<button className="text-sm font-medium text-green-600 border-green-500 border-b-2 pb-3">Vendor Applications (34)</button>
<button className="pb-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700">Pending Payments ($1,880)</button>
</div>

<div className="overflow-x-auto pt-6 pr-6 pb-6 pl-6">
<table className="w-full text-left border-collapse">
<tbody className="divide-y divide-slate-100">
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-4 pr-4">
<div className="font-semibold text-slate-700 text-base">Bay Candles</div>
<div className="text-xs text-slate-400 mt-0.5">Submitted 17 Jan 2024</div>
</td>
<td className="py-4 text-slate-600 text-base">Candles</td>
<td className="py-4 pr-4">
<div className="text-slate-700 text-base font-medium">Mount Berry Sunday Market</div>
<div className="text-xs text-slate-400 mt-0.5">16/08/2024, 23/08/2024</div>
</td>
<td className="py-4 text-right">
<button className="text-slate-400 hover:text-slate-600"><svg aria-hidden="true" className="lucide lucide-more-vertical w-5 h-5" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-4 pr-4">
<div className="font-semibold text-slate-700 text-base">The Gin Boutique</div>
<div className="text-xs text-slate-400 mt-0.5">Submitted 19 Jan 2024</div>
</td>
<td className="py-4 text-slate-600 text-base">Gin</td>
<td className="py-4 pr-4">
<div className="text-slate-700 text-base font-medium">Mount Berry Sunday Market</div>
<div className="text-xs text-slate-400 mt-0.5">23/08/2024</div>
</td>
<td className="py-4 text-right">
<button className="text-slate-400 hover:text-slate-600"><svg aria-hidden="true" className="lucide lucide-more-vertical w-5 h-5" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</td>
</tr>
<tr className="group hover:bg-slate-50 transition-colors">
<td className="py-4 pr-4">
<div className="font-semibold text-slate-700 text-base">Sam's Woodfired Pizza</div>
<div className="text-xs text-slate-400 mt-0.5">Submitted 12 Feb 2024</div>
</td>
<td className="py-4 text-slate-600 text-base">Food Truck</td>
<td className="py-4 pr-4">
<div className="text-slate-700 text-base font-medium">Burwood Craft Market</div>
<div className="text-xs text-slate-400 mt-0.5">23/08/2024, 30/08/2024</div>
</td>
<td className="py-4 text-right">
<button className="text-slate-400 hover:text-slate-600"><svg aria-hidden="true" className="lucide lucide-more-vertical w-5 h-5" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-auto p-6 pt-2 border-t border-slate-100 flex items-center justify-between">
<div className="text-sm text-slate-400">Showing 1 to 7 of 100 entries</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-sm font-medium text-slate-500 bg-slate-100 rounded-md hover:bg-slate-200">Previous</button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-green-700 rounded-md shadow-sm">1</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md">2</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md">3</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md">4</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md">5</button>
<button className="px-3 py-1.5 text-sm font-medium text-slate-500 bg-slate-100 rounded-md hover:bg-slate-200">Next</button>
</div>
</div>
</div>

<div className="col-span-4 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-list w-5 h-5 text-slate-400" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
<h3 className="text-lg font-semibold text-slate-800 tracking-tight">Recent Activity</h3>
</div>
<button className="text-slate-400 hover:text-slate-600"><svg aria-hidden="true" className="lucide lucide-more-vertical w-5 h-5" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>
<div className="relative pl-4 border-l border-slate-100 space-y-8">

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-white"></div>
<div className="flex justify-between items-start">
<div className="">
<p className="text-base font-semibold text-slate-700">Payment Received - $110.00</p>
<p className="text-sm text-slate-500 mt-0.5">Mount Berry Market <span className="text-slate-400">Stall Confirmed</span></p>
<div className="flex items-center gap-3 mt-3 bg-slate-50 p-2 rounded-lg border border-slate-100 max-w-xs">
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">WEI</div>
<div className="">
<p className="text-sm font-semibold text-slate-800">H&amp;H Jewelry</p>
<p className="text-xs text-slate-500">Jewelry</p>
</div>
</div>
</div>
<span className="text-xs text-slate-400 whitespace-nowrap">Today</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-white"></div>
<div className="flex justify-between items-start">
<div className="">
<p className="text-base font-semibold text-slate-700">Category Limit Reached</p>
<p className="text-sm text-slate-500 mt-0.5">Candles limit reached</p>
<p className="text-sm text-slate-500">Mount Berry Market - 13/04/2024</p>
</div>
<span className="text-xs text-slate-400 whitespace-nowrap">Yesterday</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-400 ring-4 ring-white"></div>
<div className="flex justify-between items-start">
<div>
<p className="text-base font-semibold text-slate-700">Stall Application Received</p>
<p className="text-sm text-slate-500 mt-0.5">Burwood Craft Market</p>
<p className="text-sm text-slate-500">Dates: 13/4/2024, 20.4.2024</p>
</div>
<span className="text-xs text-slate-400 whitespace-nowrap">2 Day's Ago</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-white"></div>
<div className="flex justify-between items-start">
<div className="">
<p className="text-base font-semibold text-slate-700">Email Sent to 980 Companies</p>
<p className="text-sm text-slate-500 mt-0.5 leading-relaxed">Subject: Mount Berry Market Applications Open</p>
</div>
<span className="text-xs text-slate-400 whitespace-nowrap">6 Day's Ago</span>
</div>
<div className="mt-2">
<a className="flex items-center gap-2 text-sm text-slate-500 hover:text-green-600 transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-layout w-4 h-4 text-green-500" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                                    View Open/Click Rates
                                </a>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
