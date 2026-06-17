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
      
<div className="relative min-h-screen">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_70%_-10%,rgba(16,185,129,0.08),transparent)]" style={{}}></div>
<div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_65%)] opacity-[0.06]">
<svg aria-hidden="true" className="w-full h-full" viewbox="0 0 100 100">
<defs>
<pattern height="10" id="grid" patternunits="userSpaceOnUse" width="10">
<path d="M10 0H0V10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100" width="100"></rect>
</svg>
</div>
</div>
<div className="flex">

<aside className="hidden lg:flex lg:w-72 xl:w-80 shrink-0 flex-col bg-black/20 border-white/10 border-r backdrop-blur-sm">
<div className="flex items-center gap-2 px-5 xl:px-6 py-5 border-b border-white/10">
<div className="h-8 w-8 rounded-md grid place-items-center bg-emerald-500/15 ring-1 tracking-tight font-semibold ring-emerald-400/30 text-emerald-300" style={{}}>
              WA
            </div>
<div className="flex-1">
<p className="text-[15px] font-semibold tracking-tight text-slate-100" style={{}}>WA CRM</p>
<p className="text-xs text-slate-400/80" style={{}}>Customer Messaging</p>
</div>
<button className="hidden xl:inline-flex items-center gap-1 transition-colors text-sm px-2 py-1 rounded-md ring-1 text-slate-300/80 hover:text-slate-100 ring-white/10 hover:ring-white/20" style={{}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              New
            </button>
</div>
<nav className="p-3 xl:p-4 space-y-6 overflow-y-auto">
<div className="">
<p className="px-2 text-[11px] uppercase tracking-wider mb-2 text-slate-400/60" style={{}}>Overview</p>
<ul className="space-y-1.5">
<li className="">
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/0 hover:ring-white/20" href="#" style={{}}>
<svg className="lucide lucide-layout-dashboard w-4.5 h-4.5 text-slate-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-sm font-medium group-hover:text-white text-slate-300" style={{}}>Dashboardss</span>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/0 hover:ring-white/20" href="#" style={{}}>
<svg className="lucide lucide-inbox w-4.5 h-4.5 text-slate-300" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="text-sm font-medium group-hover:text-white text-slate-300" style={{}}>Inbox</span>
<span className="ml-auto text-xs group-hover:text-slate-300 text-slate-400" style={{}}>32</span>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg ring-1 bg-white/[0.03] hover:bg-white/[0.05] ring-white/10 hover:ring-white/20" href="#" style={{}}>
<svg className="lucide lucide-users w-4.5 h-4.5 text-emerald-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium group-hover:text-white text-slate-200" style={{}}>Contacts</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/0 hover:ring-white/20" href="#">
<svg className="lucide lucide-megaphone w-4.5 h-4.5 group-hover:text-emerald-300 text-slate-300" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
<span className="text-sm font-medium group-hover:text-white text-slate-300" style={{}}>Campaigns</span>
<span className="ml-auto text-xs group-hover:text-slate-300 text-slate-400" style={{}}>5</span>
</a>
</li>
</ul>
</div>
<div className="">
<p className="px-2 text-[11px] uppercase tracking-wider mb-2 text-slate-400/60" style={{}}>Automation</p>
<ul className="space-y-1.5">
<li className="">
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/0 hover:ring-white/20" href="#">
<svg className="lucide lucide-blocks w-4.5 h-4.5 group-hover:text-emerald-300 text-slate-300" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
<span className="text-sm font-medium group-hover:text-white text-slate-300" style={{}}>Workflows</span>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/0 hover:ring-white/20" href="#">
<svg className="lucide lucide-message-square-plus w-4.5 h-4.5 group-hover:text-emerald-300 text-slate-300" data-lucide="message-square-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M12 8v6"></path><path d="M9 11h6"></path></svg>
<span className="text-sm font-medium group-hover:text-white text-slate-300" style={{}}>Templates</span>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/0 hover:ring-white/20" href="#">
<svg className="lucide lucide-bar-chart-3 w-4.5 h-4.5 group-hover:text-emerald-300 text-slate-300" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-sm font-medium group-hover:text-white text-slate-300" style={{}}>Analytics</span>
</a>
</li>
</ul>
</div>
<div className="mt-auto pt-2">
<div className="mx-2 p-3 rounded-xl ring-1 bg-white/[0.03] ring-white/10" style={{}}>
<div className="flex items-start gap-2">
<div className="p-2 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/20 text-emerald-300" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="text-sm">
<p className="font-medium tracking-tight text-slate-100" style={{}}>Automate replies</p>
<p className="mt-0.5 text-slate-400" style={{}}>Enable quick replies and SLA alerts.</p>
</div>
</div>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-emerald-500/15 ring-1 hover:bg-emerald-500/20 transition-colors text-emerald-300 ring-emerald-400/30 hover:ring-emerald-400/40" style={{}}>
<svg className="lucide lucide-bolt w-4 h-4" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg> Get started
                </button>
</div>
</div>
</nav>
<div className="mt-auto border-t p-3 xl:p-4 border-white/10">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors">
<img alt="User" className="h-9 w-9 rounded-full ring-1 object-cover ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<div className="flex-1">
<p className="text-sm font-medium text-slate-100" style={{}}>Alex Morgan</p>
<p className="text-xs text-slate-400" style={{}}>Team Lead</p>
</div>
<button className="p-2 rounded-md ring-1 hover:bg-white/[0.04] ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-settings w-4.5 h-4.5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</aside>

<main className="flex-1 min-w-0">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b bg-black/20 border-white/10">
<div className="flex items-center gap-3 px-4 sm:px-6 py-3">

<button className="lg:hidden p-2 rounded-md ring-1 hover:bg-white/[0.04] ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-panel-left-open w-5 h-5" data-lucide="panel-left-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="m14 9 3 3-3 3"></path></svg>
</button>

<div className="flex-1 max-w-3xl">
<div className="group flex items-center gap-3 px-3.5 py-2.5 rounded-xl ring-1 bg-white/[0.03] hover:bg-white/[0.05] transition-colors ring-white/10 hover:ring-white/20" style={{}}>
<svg className="lucide lucide-search w-4.5 h-4.5 group-hover:text-slate-300 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500 text-slate-200" placeholder="Search conversations, contacts, or campaigns..." style={{}} type="text"/>
<div className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400" style={{}}>
<span className="px-1.5 py-0.5 rounded ring-1 ring-white/10">/</span> to search
                  </div>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-plus w-4.5 h-4.5 text-emerald-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-slate-200" style={{}}>New Chat</span>
</button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-send w-4.5 h-4.5 text-emerald-300" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="text-slate-200" style={{}}>Campaign</span>
</button>
<button className="relative p-2 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-[#0B0F14] bg-emerald-400" style={{}}></span>
</button>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-moon w-5 h-5" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
<img alt="Avatar" className="h-9 w-9 rounded-full ring-1 object-cover ring-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" style={{}}/>
</div>
</div>
</header>

<section className="sm:px-6 pt-6 pr-4 pb-6 pl-4">

<div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-6">
<div className="flex-1">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Contacts</h1>
<p className="mt-1 text-slate-400" style={{}}>Browse, segment, and manage your customer directory.</p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-sliders-horizontal w-4.5 h-4.5" data-lucide="sliders-horizontal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path></svg>
<span className="text-slate-200">Filters</span>
</button>
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg ring-1 hover:bg-white/[0.04] ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-arrow-up-down w-4.5 h-4.5 text-emerald-300" data-lucide="arrow-up-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
<span className="text-slate-200">Sort</span>
</button>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="inline-flex rounded-lg ring-1 ring-white/10 bg-white/[0.03] p-0.5">
<button className="px-3 py-1.5 text-xs rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/30">All</button>
<button className="px-3 py-1.5 text-xs rounded-md text-slate-300 hover:bg-white/[0.06]">New</button>
<button className="px-3 py-1.5 text-xs rounded-md text-slate-300 hover:bg-white/[0.06]">Active</button>
<button className="px-3 py-1.5 text-xs rounded-md text-slate-300 hover:bg-white/[0.06]">Churn risk</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-4">

<aside className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-3">
<div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
<div className="flex items-center justify-between px-3 sm:px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_0_3px_rgba(5,150,105,0.18)]"></span>
<p className="text-sm font-medium text-slate-100">Segments &amp; Filters</p>
</div>
<button aria-label="Add segment" className="p-1.5 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.05]">
<svg className="lucide lucide-plus text-slate-300" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="p-3 sm:p-4 space-y-5">

<div>
<p className="text-xs uppercase tracking-wider text-slate-400/70 mb-2">Segments</p>
<div className="space-y-1.5">
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 text-sm rounded-md ring-1 ring-emerald-400/30 bg-emerald-500/10 text-emerald-300">
<span className="h-5 w-5 rounded bg-emerald-500/15 ring-1 ring-emerald-400/30 grid place-items-center">
<svg className="h-3.5 w-3.5 text-emerald-300" data-lucide="users" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</span>
                          All contacts
                          <span className="ml-auto text-xs text-emerald-200">1,284</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 text-sm rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.06] text-slate-300">
<span className="h-5 w-5 rounded bg-white/5 ring-1 ring-white/10 grid place-items-center">
<svg className="h-3.5 w-3.5 text-slate-300" data-lucide="sparkles" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path><path d="M5.6 5.6 7.8 7.8"></path><path d="M16.2 16.2l2.2 2.2"></path><path d="M16.2 7.8 18.4 5.6"></path><path d="M5.6 18.4l2.2-2.2"></path></svg>
</span>
                          Trial users
                          <span className="ml-auto text-xs text-slate-400">142</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 text-sm rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.06] text-slate-300">
<span className="h-5 w-5 rounded bg-white/5 ring-1 ring-white/10 grid place-items-center">
<svg className="h-3.5 w-3.5 text-slate-300" data-lucide="shield-alert" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</span>
                          Churn risk
                          <span className="ml-auto text-xs text-slate-400">36</span>
</button>
</div>
</div>

<div>
<p className="text-xs uppercase tracking-wider text-slate-400/70 mb-2">Lifecycle</p>
<div className="flex flex-wrap gap-2">
<button className="px-2.5 py-1.5 text-xs rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.06] bg-emerald-500/10 text-emerald-300">Active 812</button>
<button className="px-2.5 py-1.5 text-xs rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.06] text-slate-300">New 183</button>
<button className="px-2.5 py-1.5 text-xs rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.06] text-slate-300">Lead 204</button>
<button className="px-2.5 py-1.5 text-xs rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.06] text-slate-300">Churned 85</button>
</div>
</div>

<div>
<p className="text-xs uppercase tracking-wider text-slate-400/70 mb-2">Attributes</p>
<div className="space-y-1.5">
<label className="flex items-center gap-2 group cursor-pointer">
<input className="accent-emerald-400/80 h-3.5 w-3.5 rounded" type="checkbox"/>
<span className="text-sm group-hover:text-white text-slate-300">Has WA number</span>
<span className="ml-auto text-xs text-slate-400">1,050</span>
</label>
<label className="flex items-center gap-2 group cursor-pointer">
<input className="accent-emerald-400/80 h-3.5 w-3.5 rounded" type="checkbox"/>
<span className="text-sm group-hover:text-white text-slate-300">Email verified</span>
<span className="ml-auto text-xs text-slate-400">998</span>
</label>
<label className="flex items-center gap-2 group cursor-pointer">
<input className="accent-emerald-400/80 h-3.5 w-3.5 rounded" type="checkbox"/>
<span className="text-sm group-hover:text-white text-slate-300">Unassigned owner</span>
<span className="ml-auto text-xs text-slate-400">207</span>
</label>
</div>
</div>

<div>
<p className="text-xs uppercase tracking-wider text-slate-400/70 mb-2">Tags</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10 text-slate-300">
                          Billing
                          <span className="px-1 rounded bg-white/5 text-[10px]">66</span>
</span>
<span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">
                          VIP
                          <span className="px-1 rounded bg-emerald-500/10 text-[10px]">21</span>
</span>
<span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10 text-slate-300">
                          Onboarding
                          <span className="px-1 rounded bg-white/5 text-[10px]">108</span>
</span>
</div>
</div>
<div className="pt-2">
<button className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg bg-white/[0.03] hover:bg-white/[0.06] ring-1 ring-white/10 hover:ring-white/20">
<svg className="h-4.5 w-4.5 text-slate-300" data-lucide="refresh-ccw" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v6h6"></path><path d="M21 12A9 9 0 1 0 6 5.3"></path><path d="M21 22v-6h-6"></path><path d="M3 12a9 9 0 0 0 15 6.7"></path></svg>
                        Reset filters
                      </button>
</div>
</div>
</div>
</aside>

<section className="col-span-12 md:col-span-8 lg:col-span-4 xl:col-span-4">
<div className="rounded-xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden flex flex-col">
<div className="flex items-center gap-2 px-3 sm:px-4 py-3 border-b border-white/10">
<p className="text-sm font-medium text-slate-100">Contacts</p>
<span className="ml-auto text-xs text-slate-400">1,284 total</span>
</div>

<div className="px-3 sm:px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="flex-1 group flex items-center gap-2 px-2.5 py-2 rounded-lg ring-1 ring-white/10 bg-white/[0.02] hover:bg-white/[0.05]">
<svg className="lucide lucide-search text-slate-400" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent outline-none text-xs placeholder:text-slate-500 text-slate-200" placeholder="Search contacts..."/>
</div>
<button aria-label="Only with WA" className="p-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.05]">
<svg className="lucide lucide-smartphone text-slate-300" data-lucide="smartphone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</button>
<button aria-label="Refresh list" className="p-2 rounded-md ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/[0.05]">
<svg className="lucide lucide-rotate-cw text-slate-300" data-lucide="rotate-cw" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><path d="M21 3v6h-6"></path></svg>
</button>
</div>
</div>

<ul className="divide-y divide-white/10 overflow-y-auto" style={{maxHeight: 'calc(100vh - 280px)'}}>

<li className="group cursor-pointer hover:bg-white/[0.04] transition-colors">
<a className="flex items-start gap-3 px-3 sm:px-4 py-3">
<img alt="Ava" className="h-10 w-10 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&amp;q=80"/>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<p className="text-sm font-medium text-slate-100 truncate">Ava Chen</p>
<span className="ml-auto text-xs text-slate-400">Active</span>
</div>
<p className="mt-0.5 text-xs text-slate-400 truncate">Acme Fintech • priya@example.com</p>
<div className="mt-2 flex items-center gap-2">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10 text-slate-300">Billing</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">VIP</span>
<span className="ml-auto inline-flex items-center gap-1 text-[10px] text-slate-400">
<svg className="h-3.5 w-3.5" data-lucide="clock-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l2 1"></path></svg>
                              Last seen 2m
                            </span>
</div>
</div>
</a>
</li>
<li className="group cursor-pointer hover:bg-white/[0.04] transition-colors">
<a className="flex items-start gap-3 px-3 sm:px-4 py-3">
<img alt="Lucas" className="h-10 w-10 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=300&amp;q=80"/>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<p className="text-sm font-medium text-slate-100 truncate">Lucas Ferreira</p>
<span className="ml-auto text-xs text-slate-400">Lead</span>
</div>
<p className="mt-0.5 text-xs text-slate-400 truncate">Northwind • lucas@nwind.io</p>
<div className="mt-2 flex items-center gap-2">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10 text-slate-300">Logistics</span>
<span className="ml-auto inline-flex items-center gap-1 text-[10px] text-slate-400">
<svg className="h-3.5 w-3.5" data-lucide="clock-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l2 1"></path></svg>
                              Last seen 1h
                            </span>
</div>
</div>
</a>
</li>
<li className="group cursor-pointer hover:bg-white/[0.04] transition-colors bg-white/[0.03]">
<a className="flex items-start gap-3 px-3 sm:px-4 py-3">
<img alt="Priya" className="h-10 w-10 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&amp;q=80"/>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2">
<p className="text-sm font-medium text-slate-100 truncate">Priya Nair</p>
<span className="ml-auto text-xs text-slate-400">Active</span>
</div>
<p className="mt-0.5 text-xs text-slate-400 truncate">Acme Fintech • priya@example.com</p>
<div className="mt-2 flex items-center gap-2">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10 text-slate-300">Onboarding</span>
<span className="ml-auto inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10 text-slate-300">
<svg className="h-3.5 w-3.5" data-lucide="user-check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 14 2 2 4-4"></path><path d="M18 20a6 6 0 1 1 0-12"></path><circle cx="9" cy="7" r="4"></circle><path d="M9 11a7 7 0 0 0-7 7v1"></path></svg>
                              Owned
                            </span>
</div>
</div>
</a>
</li>
<li className="group cursor-pointer hover:bg-white/[0.04] transition-colors">
<a className="flex items-start gap-3 px-3 sm:px-4 py-3">
<img alt="Mira" className="h-10 w-10 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&amp;q=80"/>
</a></li></ul></div></section></div></section></main></div></div>
    </>
  );
}
