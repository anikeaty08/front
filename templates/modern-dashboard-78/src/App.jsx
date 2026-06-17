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
      

<div className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-4 z-50 md:hidden">
<div className="flex items-center gap-2 font-semibold tracking-tight">
<div className="h-6 w-6 bg-zinc-900 rounded flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:command" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span>Acme Inc</span>
</div>
<button className="text-zinc-500 hover:text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<aside className="hidden md:flex flex-col w-64 border-r border-zinc-200 bg-zinc-50/50 h-full">

<div className="pt-4 pr-4 pb-2 pl-4">
<button className="w-full flex items-center justify-between px-2 py-1.5 hover:bg-zinc-100 rounded-md transition-colors group border border-transparent hover:border-zinc-200 outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2">
<div className="flex items-center gap-2 text-sm font-medium">
<div className="h-5 w-5 bg-zinc-900 rounded-sm flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gallery-vertical-end" data-strokeWidth="1.5" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 2h10M5 6h14"></path><rect height="12" rx="2" width="18" x="3" y="10"></rect></g></svg>
</div>
<span className="text-zinc-900">Acme Inc</span>
</div>
</button>
</div>


<div className="flex-1 overflow-y-auto scrollbar-hide pt-2 pr-3 pb-2 pl-3 space-y-6">

<div className="">
<div className="space-y-0.5">
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm font-medium rounded-md bg-zinc-100 text-zinc-900 shadow-sm border border-zinc-200/50" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                        Dashboard
                    </a>
<a className="flex items-center gap-2.5 hover:bg-zinc-100 hover:text-zinc-900 transition-all text-sm font-medium text-zinc-600 rounded-md pt-1.5 pr-2 pb-1.5 pl-2" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                        Team
                    </a>
<a className="flex items-center justify-between hover:bg-zinc-100 hover:text-zinc-900 transition-all text-sm font-medium text-zinc-600 rounded-md pt-1.5 pr-2 pb-1.5 pl-2" href="#">
<div className="flex items-center gap-2.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:inbox" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"></path><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"></path></g></svg>
                            Inbox
                        </div>
</a>
<a className="flex items-center gap-2.5 hover:bg-zinc-100 hover:text-zinc-900 transition-all text-sm font-medium text-zinc-600 rounded-md pt-1.5 pr-2 pb-1.5 pl-2" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Analytics
                    </a>
</div>
</div>

<div className="">
<div className="space-y-0.5">
</div>
</div>

<div className="">
<div className="space-y-0.5">
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-200">
<button className="w-full flex items-center gap-3 px-2 py-2 hover:bg-zinc-100 rounded-md transition-colors text-left outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2">
<div className="relative">
<div className="h-8 w-8 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center overflow-hidden">
<span className="font-medium text-xs text-zinc-600">JD</span>
</div>
<span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">John Doe</p>
<p className="truncate text-xs text-zinc-500">john@acme.inc</p>
</div>
<svg aria-hidden="true" className="iconify iconify--lucide w-[16px] h-[16px]" data-icon="lucide:more-horizontal" data-icon-replaced="true" data-strokeWidth="1.5" data-width="16" height="16" role="img" strokeWidth="2" style={{color: 'rgb(161, 161, 170)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto md:mt-0 bg-white h-full mt-14 pt-8 pr-8 pb-8 pl-8">
<div className="max-w-4xl mr-auto ml-auto space-y-8">

<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="">Platform</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-medium text-zinc-900">Dashboard</span>
</div>

<div className="flex border-zinc-100 border-b pb-6 items-end justify-between">
<div className="">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Dashboard</h1>
<p className="text-sm text-zinc-500 mt-2">Overview of your project performance and metrics.</p>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-700 bg-white border border-zinc-200 rounded-md shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-zinc-950">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                        Feb 01 - Feb 28
                    </button>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-zinc-900 rounded-md shadow hover:bg-zinc-900/90 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-zinc-950">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                        Export
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-zinc-200 shadow-sm bg-white space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-500">Total Revenue</span>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:dollar-sign" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-2xl font-bold tracking-tight text-zinc-900">$45,231.89</div>
<div className="text-xs text-zinc-500">+20.1% from last month</div>
</div>

<div className="p-6 rounded-xl border border-zinc-200 shadow-sm bg-white space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-500">Subscriptions</span>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:users" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87">
</path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
</div>
<div className="text-2xl font-bold tracking-tight text-zinc-900">+2350</div>
<div className="text-xs text-zinc-500">+180.1% from last month</div>
</div>

<div className="p-6 rounded-xl border border-zinc-200 shadow-sm bg-white space-y-2">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-500">Active Now</span>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
<div className="text-2xl font-bold text-zinc-900 tracking-tight">+573</div>
<div className="text-xs text-zinc-500">+201 since last hour</div>
</div>
</div>

<div className="min-h-[400px] border-dashed flex bg-zinc-50/50 border-zinc-200 border rounded-xl items-center justify-center">
<div className="text-center space-y-2">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 border border-zinc-200 mb-2">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:bar-chart-4" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18m-8-4V9m5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-sm font-medium text-zinc-900">No data available</h3>
<p className="text-xs text-zinc-500 max-w-[200px] mx-auto">Start by creating a new project to see analytics data
                appearing here.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
