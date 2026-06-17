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
      
<div className="flex h-screen w-full overflow-hidden">

<aside className="hidden flex-col md:flex bg-white w-64 border-gray-200 border-r justify-between rounded-tr-3xl">
<div className="">

<div className="flex h-16 items-center px-6">
<img alt="Capa Logo" className="h-8 w-auto" src="https://res.cloudinary.com/dyztl2kki/image/upload/v1765217919/Capa_Logo-04_1_ddwdjj.png"/>
</div>

<div className="px-4 py-2">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:border-gray-300 focus:outline-none focus:ring-0 transition-colors" placeholder="Search..." type="text"/>
</div>
</div>

<nav className="mt-4 space-y-1 px-3">
<a className="group flex items-center rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900" href="#">
<svg className="lucide lucide-layout-dashboard mr-3 h-5 w-5 text-gray-900" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                        Dashboard
                    </a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all" href="#">
<div className="flex items-center">
<svg className="lucide lucide-credit-card mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-600" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                            Transactions
                        </div>
<span className="text-xs text-gray-400">⌘T</span>
</a>
<a className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all" href="#">
<div className="flex items-center">
<svg className="lucide lucide-users mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                            Clients
                        </div>
<span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600">12</span>
</a>
<a className="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all" href="#">
<svg className="lucide lucide-bar-chart-3 mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                        Reports
                    </a>
<a className="group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all" href="#">
<svg className="lucide lucide-folder-kanban mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-600" data-lucide="folder-kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M8 10v4"></path><path d="M12 10v2"></path><path d="M16 10v6"></path></svg>
                        Projects
                    </a>
</nav>
<div className="mt-8 px-6">
<p className="px-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Workspace</p>
<nav className="mt-2 space-y-1">
<a className="group flex items-center rounded-lg px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all" href="#">
<span className="mr-3 h-2 w-2 rounded-full bg-orange-400"></span>
                            Marketing
                        </a>
<a className="group flex items-center rounded-lg px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all" href="#">
<span className="mr-3 h-2 w-2 rounded-full bg-blue-500"></span>
                            Development
                        </a>
</nav>
</div>
</div>

<div className="border-t border-gray-200 p-4">
<a className="group flex items-center rounded-lg px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<svg className="lucide lucide-help-circle mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-600" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                    Help Center
                </a>
<a className="group flex items-center rounded-lg px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900" href="#">
<svg className="lucide lucide-settings mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-600" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    Settings
                </a>
<div className="mt-4 flex items-center gap-3 px-2">
<img alt="User" className="h-8 w-8 rounded-full border border-gray-200" src="https://ui-avatars.com/api/?name=Alex+Morgan&amp;background=random&amp;color=fff"/>
<div className="flex-1 overflow-hidden">
<p className="truncate text-sm font-medium text-gray-900">Alex Morgan</p>
<p className="truncate text-xs text-gray-500">alex@capa.com</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<header className="flex md:px-8 bg-white h-16 border-gray-200 border-b pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-700">
<svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<nav className="flex items-center text-sm font-medium text-gray-500">
<span className="flex items-center hover:text-gray-900 cursor-pointer transition-colors">
<img className="h-4 w-auto mr-2 grayscale opacity-60" src="https://res.cloudinary.com/dyztl2kki/image/upload/v1765217919/Capa_Logo-04_1_ddwdjj.png"/> Capa
                        </span>
<svg className="lucide lucide-chevron-right mx-2 h-4 w-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m9 18 6-6-6-6"></path></svg>
<span className="text-gray-900">Dashboard</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all">
<svg className="lucide lucide-share h-4 w-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
                        Share
                    </button>
<button className="flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-800 transition-all">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        Create Transaction
                    </button>
</div>
</header>
<div className="md:p-8 pt-6 pr-6 pb-6 pl-6">

<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Dashboard</h1>
<div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
<div className="flex items-center gap-6 border-b border-gray-200">
<button className="border-b-2 border-gray-900 pb-2 text-sm font-medium text-gray-900">Overview</button>
<button className="border-b-2 border-transparent pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-all">Transactions</button>
<button className="border-b-2 border-transparent pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-all">Clients</button>
<button className="border-b-2 border-transparent pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-all">Analytics</button>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
<svg className="lucide lucide-calendar mr-2 h-4 w-4 text-gray-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm font-medium text-gray-700">Feb 11, 2025 - Mar 11, 2025</span>
<svg className="lucide lucide-chevron-down ml-2 h-4 w-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<button className="rounded-lg border border-gray-200 bg-white p-1.5 text-gray-500 shadow-sm hover:text-gray-900">
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
<button className="rounded-lg border border-gray-200 bg-white p-1.5 text-gray-500 shadow-sm hover:text-gray-900">
<svg className="lucide lucide-layout-grid h-4 w-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</button>
</div>
</div>
</div>

<div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

<div className="group overflow-hidden transition-all hover:shadow-md bg-white border-gray-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative shadow-sm">
<div className="mb-1 text-sm font-medium text-gray-500">Total Volume</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">$127,840</span>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
<svg className="lucide lucide-arrow-up-right h-3 w-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                7.4%
                            </span>
<div className="h-6 w-16">
<svg className="h-full w-full text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 64 24">
<path d="M0 20 L10 16 L20 18 L30 10 L40 14 L50 6 L64 2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
<div className="mb-1 text-sm font-medium text-gray-500">New Clients</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">2,859</span>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
<svg className="lucide lucide-arrow-up-right h-3 w-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                4.9%
                            </span>
<div className="h-6 w-16">
<svg className="h-full w-full text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 64 24">
<path className="" d="M0 18 L15 15 L25 10 L35 12 L50 5 L64 3" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
<div className="mb-1 text-sm font-medium text-gray-500">Transactions</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">21,948</span>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
<svg className="lucide lucide-arrow-up-right h-3 w-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                11.7%
                            </span>
<div className="h-6 w-16">
<svg className="h-full w-full text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 64 24">
<path d="M0 22 L10 18 L20 12 L30 14 L45 8 L64 4" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
<div className="mb-1 text-sm font-medium text-gray-500">Failed Trans.</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">350</span>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700">
<svg className="lucide lucide-arrow-down-right h-3 w-3" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
                                7.5%
                            </span>
<div className="h-6 w-16">
<svg className="h-full w-full text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 64 24">
<path d="M0 4 L12 8 L24 12 L36 10 L48 18 L64 22" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
<div className="mb-1 text-sm font-medium text-gray-500">Active Sessions</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">4,291</span>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
<svg className="lucide lucide-arrow-up-right h-3 w-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                19.4%
                            </span>
<div className="h-6 w-16">
<svg className="h-full w-full text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 64 24">
<path d="M0 20 L15 15 L25 5 L35 10 L45 5 L64 2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="flex flex-col gap-6 lg:col-span-1">

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-gray-900">Today Activity</h3>
<button className="text-gray-400 hover:text-gray-600"><svg className="lucide lucide-more-vertical h-4 w-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>
<div className="mt-6 h-48 w-full">

<svg className="h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 100">
<path d="M0 90 L20 80 L40 85 L60 60 L80 70 L100 40 L120 55 L140 30 L160 35 L180 20 L200 25" fill="none" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path className="" d="M0 80 L20 70 L40 75 L60 50 L80 60 L100 30 L120 45 L140 20 L160 25 L180 10 L200 15" fill="none" stroke="#F97316" stroke-dasharray="4 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
<div className="mt-4 flex justify-center gap-4">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-blue-600"></span>
<span className="text-xs font-medium text-gray-500">Transactions</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium text-gray-500">Clients</span>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold text-gray-900">Client Acquisition</h3>
<button className="text-gray-400 hover:text-gray-600"><svg className="lucide lucide-more-vertical h-4 w-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>

<div className="mt-6 grid grid-cols-10 gap-1.5">
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-300"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-400"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-300"></div>
<div className="aspect-square rounded-sm bg-orange-400"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-300"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-300"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-200"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
<div className="aspect-square rounded-sm bg-orange-100"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 lg:col-span-2">

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="mb-6 flex items-center justify-between">
<div className="">
<h3 className="text-base font-semibold text-gray-900">Transaction Volume</h3>
<p className="mt-1 text-xs text-gray-500">Discover the financial data of your workspace.</p>
</div>
<button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm hover:text-gray-900">
<svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                                    Last month
                                    <svg className="lucide lucide-chevron-down ml-1 h-3.5 w-3.5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="flex h-64 items-end justify-between gap-2 border-b border-gray-100 pb-2">

<div className="group relative flex w-full flex-col items-center gap-1 hover:opacity-100">
<div className="h-24 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-12 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-32 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-14 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-16 w-full rounded-t-sm bg-blue-500"></div>
<div className="h-10 w-full rounded-b-sm bg-orange-400"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-28 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-8 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-36 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-12 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-20 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-8 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-40 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-16 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-24 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-10 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-32 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-14 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-18 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-6 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-28 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-10 w-full rounded-b-sm bg-orange-100"></div>
</div>
<div className="group relative flex w-full flex-col items-center gap-1">
<div className="h-36 w-full rounded-t-sm bg-blue-100"></div>
<div className="h-12 w-full rounded-b-sm bg-orange-100"></div>
</div>
</div>
<div className="mt-2 flex justify-between text-xs font-medium text-gray-400">
<span>1k</span>
<span>5k</span>
<span>10k</span>
<span>15k</span>
<span>20k</span>
<span>25k</span>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="mb-6 flex items-center justify-between">
<div className="">
<h3 className="text-base font-semibold text-gray-900">Client Growth</h3>
<p className="mt-1 text-xs text-gray-500">See how your audience grew during the reporting period.</p>
</div>
<button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm hover:text-gray-900">
<svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                                    Last month
                                    <svg className="lucide lucide-chevron-down ml-1 h-3.5 w-3.5 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="relative h-64 w-full">

<div className="absolute right-20 top-10 z-10 w-56 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
<div className="mb-2 border-b border-gray-100 pb-2 text-xs font-semibold text-gray-500">March 20, 2025</div>
<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
<span className="text-xs text-gray-600">Organic</span>
</div>
<span className="text-xs font-medium text-gray-900">439.49k</span>
</div>
<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
<span className="text-xs text-gray-600">Referral</span>
</div>
<span className="text-xs font-medium text-gray-900">439.49k</span>
</div>
</div>
<svg className="h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 400 150">

<line stroke="#F3F4F6" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>
<line stroke="#F3F4F6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#F3F4F6" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>

<path d="M0 120 C50 120, 80 120, 120 140 C160 160, 200 80, 240 80 C280 80, 320 120, 360 90 L400 90" fill="none" stroke="#F97316" stroke-dasharray="5 5" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<path d="M0 140 C40 140, 80 140, 120 110 C160 80, 200 120, 240 120 C280 120, 320 80, 360 60 L400 60" fill="none" stroke="#2563EB" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<line stroke="#D1D5DB" stroke-dasharray="2 2" strokeWidth="1" x1="330" x2="330" y1="20" y2="150"></line>
<circle cx="330" cy="67" fill="#2563EB" r="3" stroke="white" strokeWidth="2"></circle>
<circle cx="330" cy="98" fill="#F97316" r="3" stroke="white" strokeWidth="2"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl border border-gray-200 bg-white shadow-sm">
<div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
<h3 className="text-base font-semibold text-gray-900">Recent Transactions</h3>
<div className="flex gap-2">
<button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                                Trends
                            </button>
<button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900">
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                                Filter
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-gray-600">
<thead className="bg-gray-50 text-xs uppercase text-gray-500">
<tr>
<th className="px-6 py-3 font-medium">Client</th>
<th className="px-6 py-3 font-medium">Transaction Type</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Amount</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Score</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Microdose Inc.</td>
<td className="px-6 py-4">Subscription Renewal</td>
<td className="px-6 py-4">Mar 16, 2025</td>
<td className="px-6 py-4 font-medium">$1,794.00</td>
<td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Completed</span></td>
<td className="px-6 py-4 text-right">0.79</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Loom</td>
<td className="px-6 py-4">New User Setup</td>
<td className="px-6 py-4">Mar 15, 2025</td>
<td className="px-6 py-4 font-medium">$450.00</td>
<td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">Processing</span></td>
<td className="px-6 py-4 text-right">0.92</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Linear</td>
<td className="px-6 py-4">API Usage Overdraft</td>
<td className="px-6 py-4">Mar 14, 2025</td>
<td className="px-6 py-4 font-medium">$120.50</td>
<td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Completed</span></td>
<td className="px-6 py-4 text-right">0.88</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Vercel</td>
<td className="px-6 py-4">Enterprise Plan</td>
<td className="px-6 py-4">Mar 12, 2025</td>
<td className="px-6 py-4 font-medium">$5,400.00</td>
<td className="px-6 py-4"><span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Pending</span></td>
<td className="px-6 py-4 text-right">0.95</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
