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
      
<div className="flex min-h-screen">

<aside className="hidden lg:flex lg:flex-col lg:w-72 lg:shrink-0 bg-white border-r border-slate-200 shadow-sm sticky top-0 h-screen">

<div className="px-6 py-5 border-b border-slate-200">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm font-semibold tracking-tight">AT</div>
<div className="flex flex-col">
<span className="text-slate-900 text-[17px] font-semibold tracking-tight">AeroTag Assist</span>
<span className="text-slate-500 text-[12px]">Hotel Admin Panel</span>
</div>
</div>
</div>

<nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300" href="#dashboard">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="9" rx="2" width="7" x="3" y="3"></rect>
<rect height="5" rx="2" width="7" x="14" y="3"></rect>
<rect height="10" rx="2" width="7" x="14" y="11"></rect>
<rect height="7" rx="2" width="7" x="3" y="14"></rect>
</svg>
<span>Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" href="#guest-orders">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M9 5h6"></path>
<rect height="18" rx="2" width="16" x="4" y="3"></rect>
<path d="M8 11h8M8 16h8"></path>
</svg>
<span>Guest Orders</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" href="#employees">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span>Employees</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" href="#modules">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M7.5 4.21 3 6l4.5 1.79L12 6z"></path>
<path d="M3 6v5l4.5 1.8V7.8"></path>
<path d="M12 6v5l-4.5 1.8"></path>
<path d="M12 6l4.5-1.79L21 6l-4.5 1.79z"></path>
<path d="M21 6v5l-4.5 1.8V7.8"></path>
<path d="M12 11v5l4.5 1.8"></path>
</svg>
<span>Modules</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" href="#analytics">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
<span>Analytics</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" href="#assist-studio">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M15 4V2"></path>
<path d="M15 16v-2"></path>
<path d="M8 9H6"></path>
<path d="M20 9h-2"></path>
<path d="M9.4 5.6 8 4.2"></path>
<path d="M18 14.8l-1.4-1.4"></path>
<path d="m3 21 9-9"></path>
<path d="M12.2 6 11 4.8"></path>
</svg>
<span>Assist Studio</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent hover:border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300" href="#settings">

<svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .67.39 1.28 1 1.51.27.11.57.17.87.17H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"></path>
</svg>
<span>Settings</span>
</a>
</nav>
<div className="px-6 py-4 border-t border-slate-200">
<div className="text-[12px] text-slate-500">Property</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">AH</div>
<div>
<div className="text-sm font-medium text-slate-900">Aero Hotel</div>
<div className="text-[12px] text-slate-500">Downtown</div>
</div>
</div>

<svg aria-hidden="true" className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
</aside>

<main className="flex-1 min-w-0">

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
<div className="px-4 lg:px-8 py-4 flex items-center justify-between">

<div className="flex items-center gap-3 lg:hidden">
<div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">AT</div>
<div className="text-slate-900 font-semibold tracking-tight">AeroTag Assist</div>
</div>

<div className="hidden md:flex flex-1 max-w-xl items-center">
<div className="relative w-full">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-400">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 shadow-sm" placeholder="Search orders, rooms, employees..." type="text"/>
</div>
</div>

<div className="ml-4 flex items-center gap-2">
<button className="relative p-2 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-300">

<svg className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
<span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
</button>
<details className="relative">
<summary className="list-none flex items-center gap-3 px-2 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-slate-300 cursor-pointer">
<img alt="User" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="hidden sm:flex flex-col -mr-1">
<span className="text-sm font-medium text-slate-900">Ayesha Khan</span>
<span className="text-[12px] text-slate-500">Manager</span>
</div>

<svg className="h-4 w-4 text-slate-400 ml-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="absolute right-0 mt-2 w-60 bg-white border border-slate-200 rounded-xl shadow-lg p-2">
<a className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50" href="#settings">

<svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  Profile &amp; Security
                </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50" href="#settings">

<svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M9 7V2"></path><path d="M15 7V2"></path><path d="M12 22v-5"></path><path d="M5 8h14"></path><path d="M8 12h8"></path></svg>
                  Integrations
                </a>
<hr className="my-2 border-slate-200"/>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50">

<svg className="h-4 w-4 text-red-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
                  Sign out
                </button>
</div>
</details>
</div>
</div>

<div className="lg:hidden px-4 pb-3">
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<a className="px-3 py-2 rounded-lg text-sm bg-blue-50 text-blue-700 border border-blue-100" href="#dashboard">Dashboard</a>
<a className="px-3 py-2 rounded-lg text-sm border border-slate-200 text-slate-700" href="#guest-orders">Guest Orders</a>
<a className="px-3 py-2 rounded-lg text-sm border border-slate-200 text-slate-700" href="#employees">Employees</a>
<a className="px-3 py-2 rounded-lg text-sm border border-slate-200 text-slate-700" href="#modules">Modules</a>
<a className="px-3 py-2 rounded-lg text-sm border border-slate-200 text-slate-700" href="#analytics">Analytics</a>
<a className="px-3 py-2 rounded-lg text-sm border border-slate-200 text-slate-700" href="#assist-studio">Assist Studio</a>
<a className="px-3 py-2 rounded-lg text-sm border border-slate-200 text-slate-700" href="#settings">Settings</a>
</div>
</div>
</header>

<div className="px-4 lg:px-8 py-8 space-y-16">

<section className="scroll-mt-24" id="dashboard">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-[22px] md:text-2xl font-semibold tracking-tight text-slate-900">AeroTag Assist — Admin Overview</h1>
<p className="text-slate-500 text-sm">Manage hotel operations and monitor service efficiency</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg text-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300">Export</button>
<button className="px-3 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">New Broadcast</button>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-[18px] font-semibold tracking-tight text-slate-900">Quick Stats</h2>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-slate-50">Today</button>
<button className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-slate-50">7d</button>
<button className="px-2.5 py-1.5 text-xs rounded-lg border border-slate-200 hover:bg-slate-50">30d</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Active Guests</div>
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">42</div>
<div className="mt-1 text-xs text-emerald-600">+8% vs yesterday</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Total Orders Today</div>
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M20 7H4"></path><path d="M20 11H4"></path><path d="M14 15H4"></path><path d="M20 19H4"></path></svg>
</div>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">128</div>
<div className="mt-1 text-xs text-emerald-600">+12 new in last hour</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Avg Service Time</div>
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">6m 54s</div>
<div className="mt-1 text-xs text-amber-600">-19s vs avg</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Employees on Duty</div>
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="16" rx="2" width="18" x="3" y="4"></rect><path d="M7 8h10"></path><circle cx="8" cy="14" r="2"></circle><path d="M12 16h4"></path></svg>
</div>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">23</div>
<div className="mt-1 text-xs text-slate-500">3 on break</div>
</div>
</div>
</div>

<div className="mt-8">
<h2 className="text-[18px] font-semibold tracking-tight text-slate-900 mb-3">Today’s Snapshot</h2>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Orders by Module</div>
<div className="text-xs text-slate-500">Room Svc, Housekeeping, Laundry, Spa, Taxi</div>
</div>
<div className="mt-4 h-48 flex items-end gap-3">

<div className="flex-1">
<div className="h-[70%] bg-blue-600/80 rounded-md shadow-xs"></div>
<div className="text-[11px] text-slate-500 mt-1 text-center">Room</div>
</div>
<div className="flex-1">
<div className="h-[60%] bg-blue-500/80 rounded-md shadow-xs"></div>
<div className="text-[11px] text-slate-500 mt-1 text-center">HK</div>
</div>
<div className="flex-1">
<div className="h-[35%] bg-blue-400/80 rounded-md shadow-xs"></div>
<div className="text-[11px] text-slate-500 mt-1 text-center">Laundry</div>
</div>
<div className="flex-1">
<div className="h-[25%] bg-blue-300/80 rounded-md shadow-xs"></div>
<div className="text-[11px] text-slate-500 mt-1 text-center">Spa</div>
</div>
<div className="flex-1">
<div className="h-[20%] bg-blue-200/80 rounded-md shadow-xs"></div>
<div className="text-[11px] text-slate-500 mt-1 text-center">Taxi</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Order Volume (Last 7 Days)</div>
<div className="text-xs text-slate-500">Orders/day</div>
</div>
<div className="mt-3 h-48">
<svg className="w-full h-full" viewbox="0 0 300 160">
<defs>
<lineargradient id="fillA" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0A74DA" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#0A74DA" stop-opacity="0"></stop>
</lineargradient>
</defs>
<rect fill="white" height="160" width="300" x="0" y="0"></rect>
<polyline fill="url(#fillA)" points="10,120 60,90 110,95 160,70 210,80 260,55 290,65" stroke="none"></polyline>
<polyline fill="none" points="10,120 60,90 110,95 160,70 210,80 260,55 290,65" stroke="#0A74DA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></polyline>

<g fill="#0A74DA">
<circle cx="10" cy="120" r="3"></circle>
<circle cx="60" cy="90" r="3"></circle>
<circle cx="110" cy="95" r="3"></circle>
<circle cx="160" cy="70" r="3"></circle>
<circle cx="210" cy="80" r="3"></circle>
<circle cx="260" cy="55" r="3"></circle>
<circle cx="290" cy="65" r="3"></circle>
</g>
</svg>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Module Usage Breakdown</div>
</div>
<div className="mt-2 flex items-center gap-6">
<svg className="h-40 w-40" viewbox="0 0 160 160">
<circle cx="80" cy="80" fill="none" r="60" stroke="#E2E8F0" strokeWidth="20"></circle>
<circle cx="80" cy="80" fill="none" r="60" stroke="#0A74DA" stroke-dasharray="301.59" stroke-dashoffset="90" strokeWidth="20" transform="rotate(-90 80 80)"></circle>
<circle cx="80" cy="80" fill="none" r="60" stroke="#60A5FA" stroke-dasharray="301.59" stroke-dashoffset="210" strokeWidth="20" transform="rotate(-90 80 80)"></circle>
<circle cx="80" cy="80" fill="white" r="35"></circle>
</svg>
<div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-blue-600"></span> Room Service
                    </div>
<div className="text-right text-slate-600">38%</div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-blue-400"></span> Housekeeping
                    </div>
<div className="text-right text-slate-600">27%</div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-blue-300"></span> Laundry
                    </div>
<div className="text-right text-slate-600">18%</div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-sm bg-blue-200"></span> Spa/Taxi
                    </div>
<div className="text-right text-slate-600">17%</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8">
<h2 className="text-[18px] font-semibold tracking-tight text-slate-900 mb-3">Performance Overview</h2>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Top 3 Employees</div>

<svg className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10v4a5 5 0 0 1-10 0z"></path><path d="M5 9a3 3 0 0 1-3-3V5h3"></path><path d="M19 9a3 3 0 0 0 3-3V5h-3"></path></svg>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
<div className="flex items-center gap-3">
<img alt="Riya" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
<div className="text-sm">
<div className="font-medium text-slate-900">Riya</div>
<div className="text-slate-500 text-xs">Housekeeping</div>
</div>
</div>
<div className="text-sm font-medium text-emerald-600">4.9</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
<div className="flex items-center gap-3">
<img alt="Ahmed" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
<div className="text-sm">
<div className="font-medium text-slate-900">Ahmed</div>
<div className="text-slate-500 text-xs">Room Service</div>
</div>
</div>
<div className="text-sm font-medium text-emerald-600">4.8</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:bg-slate-50">
<div className="flex items-center gap-3">
<img alt="Maria" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&amp;w=150&amp;h=150&amp;fit=crop&amp;crop=faces"/>
<div className="text-sm">
<div className="font-medium text-slate-900">Maria</div>
<div className="text-slate-500 text-xs">Spa</div>
</div>
</div>
<div className="text-sm font-medium text-emerald-600">4.7</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Peak Order Time</div>
<div className="text-xs text-slate-500">Hourly distribution</div>
</div>
<div className="mt-3 h-40 flex items-end gap-1">

<div className="h-12 w-2 bg-slate-200 rounded"></div>
<div className="h-10 w-2 bg-slate-200 rounded"></div>
<div className="h-16 w-2 bg-slate-200 rounded"></div>
<div className="h-20 w-2 bg-slate-200 rounded"></div>
<div className="h-24 w-2 bg-blue-300 rounded"></div>
<div className="h-28 w-2 bg-blue-400 rounded"></div>
<div className="h-32 w-2 bg-blue-500 rounded"></div>
<div className="h-36 w-2 bg-blue-600 rounded"></div>
<div className="h-28 w-2 bg-blue-400 rounded"></div>
<div className="h-24 w-2 bg-blue-300 rounded"></div>
<div className="h-16 w-2 bg-slate-200 rounded"></div>
<div className="h-12 w-2 bg-slate-200 rounded"></div>
<div className="h-10 w-2 bg-slate-200 rounded"></div>
<div className="h-12 w-2 bg-slate-200 rounded"></div>
<div className="h-16 w-2 bg-slate-200 rounded"></div>
<div className="h-20 w-2 bg-slate-200 rounded"></div>
<div className="h-24 w-2 bg-blue-300 rounded"></div>
<div className="h-28 w-2 bg-blue-400 rounded"></div>
<div className="h-32 w-2 bg-blue-500 rounded"></div>
<div className="h-36 w-2 bg-blue-600 rounded"></div>
<div className="h-28 w-2 bg-blue-400 rounded"></div>
<div className="h-24 w-2 bg-blue-300 rounded"></div>
<div className="h-12 w-2 bg-slate-200 rounded"></div>
<div className="h-10 w-2 bg-slate-200 rounded"></div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Average Response Time</div>
</div>
<div className="mt-6 flex items-center gap-6">
<div className="relative">
<svg className="h-28 w-28" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="50" stroke="#E2E8F0" strokeWidth="12"></circle>
<circle cx="60" cy="60" fill="none" r="50" stroke="#0A74DA" stroke-dasharray="314" stroke-dashoffset="120" strokeWidth="12" transform="rotate(-90 60 60)"></circle>
<text dominant-baseline="middle" fill="#0F172A" fontSize="16" style={{fontWeight: '600'}} text-anchor="middle" x="50%" y="52%">6m</text>
<text fill="#64748B" fontSize="11" text-anchor="middle" x="50%" y="66%">54s</text>
</svg>
</div>
<div className="flex-1">
<div className="text-sm text-slate-500">Target: under 7m</div>
<div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-4/5 bg-emerald-500"></div>
</div>
<div className="mt-2 text-xs text-emerald-600">On track • -3%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="guest-orders">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-[22px] md:text-2xl font-semibold tracking-tight text-slate-900">Guest Orders Tracker</h1>
<p className="text-slate-500 text-sm">Monitor and manage guest service requests across all modules</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-lg text-sm border border-slate-200 hover:bg-slate-50">Bulk Actions</button>
<button className="px-3 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700">Create Order</button>
</div>
</div>

<div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="grid grid-cols-2 md:grid-cols-5 gap-3">
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
<option>Module: All</option>
<option>Room Service</option>
<option>Housekeeping</option>
<option>Laundry</option>
<option>Spa &amp; Wellness</option>
</select>
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
<option>Status: All</option>
<option>New</option>
<option>In Progress</option>
<option>Completed</option>
<option>Delayed</option>
</select>
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
<option>Time Range: Today</option>
<option>Last 7 days</option>
<option>Last 30 days</option>
</select>
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
<option>Employee: All</option>
<option>Ahmed</option>
<option>Riya</option>
<option>Maria</option>
</select>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="Room No." type="text"/>
</div>
</div>

<div className="mt-4 grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="xl:col-span-2 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-slate-50 text-slate-600">
<tr className="border-b border-slate-200">
<th className="text-left px-4 py-3 font-medium">Order ID</th>
<th className="text-left px-4 py-3 font-medium">Room No.</th>
<th className="text-left px-4 py-3 font-medium">Guest Name</th>
<th className="text-left px-4 py-3 font-medium">Module</th>
<th className="text-left px-4 py-3 font-medium">Request Details</th>
<th className="text-left px-4 py-3 font-medium">Time Placed</th>
<th className="text-left px-4 py-3 font-medium">Assigned Employee</th>
<th className="text-left px-4 py-3 font-medium">Status</th>
<th className="text-left px-4 py-3 font-medium">ETA</th>
<th className="text-left px-4 py-3 font-medium">Feedback</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">#A-101</td>
<td className="px-4 py-3">304</td>
<td className="px-4 py-3">Mr. Smith</td>
<td className="px-4 py-3">Room Service</td>
<td className="px-4 py-3">Breakfast Combo</td>
<td className="px-4 py-3">08:32 AM</td>
<td className="px-4 py-3">Ahmed</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-amber-50 text-amber-700 border border-amber-100">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> In Progress
                        </span>
</td>
<td className="px-4 py-3">10 min</td>
<td className="px-4 py-3 text-amber-500">★★★★☆</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">#B-224</td>
<td className="px-4 py-3">215</td>
<td className="px-4 py-3">Ms. Maria</td>
<td className="px-4 py-3">Housekeeping</td>
<td className="px-4 py-3">Towel Replacement</td>
<td className="px-4 py-3">09:05 AM</td>
<td className="px-4 py-3">Riya</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Completed
                        </span>
</td>
<td className="px-4 py-3">—</td>
<td className="px-4 py-3 text-emerald-600">★★★★★</td>
</tr>

<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">#C-067</td>
<td className="px-4 py-3">517</td>
<td className="px-4 py-3">Mr. Chen</td>
<td className="px-4 py-3">Laundry</td>
<td className="px-4 py-3">Express Ironing</td>
<td className="px-4 py-3">10:21 AM</td>
<td className="px-4 py-3">Nina</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> New
                        </span>
</td>
<td className="px-4 py-3">25 min</td>
<td className="px-4 py-3 text-slate-400">—</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="px-4 py-3 font-medium text-slate-900">#D-402</td>
<td className="px-4 py-3">122</td>
<td className="px-4 py-3">Ms. Patel</td>
<td className="px-4 py-3">Spa</td>
<td className="px-4 py-3">Massage Appointment</td>
<td className="px-4 py-3">10:45 AM</td>
<td className="px-4 py-3">Omar</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-red-50 text-red-700 border border-red-100">
<span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> Delayed
                        </span>
</td>
<td className="px-4 py-3">15 min</td>
<td className="px-4 py-3 text-slate-400">—</td>
</tr>
</tbody>
</table>
</div>
<div className="px-4 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
<div className="text-xs text-slate-500">Showing 1–4 of 128</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded-lg border border-slate-200 hover:bg-slate-100 text-sm">Prev</button>
<button className="px-2 py-1 rounded-lg border border-slate-200 hover:bg-slate-100 text-sm">Next</button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-slate-900">Order Details</div>
<div className="text-xs text-slate-500">Selected: #A-101</div>
</div>
<button className="px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs hover:bg-slate-50">Assign</button>
</div>
<div className="mt-4 space-y-4 text-sm">
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-slate-500 text-xs">Room Number</div>
<div className="font-medium text-slate-900">304</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-slate-500 text-xs">Service Category</div>
<div className="font-medium text-slate-900">Room Service</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 col-span-2">
<div className="text-slate-500 text-xs">Item Description</div>
<div className="font-medium text-slate-900">Breakfast Combo (omelette + juice)</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="flex items-center justify-between">
<div className="text-slate-500 text-xs">Assigned Staff</div>
<button className="px-2 py-1 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Reassign</button>
</div>
<div className="mt-1 flex items-center gap-2">
<img alt="Ahmed" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="text-sm font-medium text-slate-900">Ahmed</div>
<div className="text-[12px] text-slate-500">On route • 2 min away</div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-slate-500 text-xs">Order Progress</div>
<div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-blue-600"></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs">
<span className="text-slate-500">Started 08:32</span>
<span className="text-slate-700 font-medium">ETA 10 min</span>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-slate-500 text-xs mb-2">Time Tracker</div>
<div className="grid grid-cols-3 gap-2">
<div className="rounded-md bg-slate-50 border border-slate-200 p-2 text-center">
<div className="text-[11px] text-slate-500">Prep</div>
<div className="text-sm font-medium text-slate-900">3m</div>
</div>
<div className="rounded-md bg-slate-50 border border-slate-200 p-2 text-center">
<div className="text-[11px] text-slate-500">Transit</div>
<div className="text-sm font-medium text-slate-900">4m</div>
</div>
<div className="rounded-md bg-slate-50 border border-slate-200 p-2 text-center">
<div className="text-[11px] text-slate-500">Delivered</div>
<div className="text-sm font-medium text-slate-900">—</div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex-1 px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50">Message Guest</button>
<button className="flex-1 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Mark Done</button>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="employees">
<div>
<h1 className="text-[22px] md:text-2xl font-semibold tracking-tight text-slate-900">Employee Performance &amp; Activity</h1>
<p className="text-slate-500 text-sm">Track staff productivity and service quality</p>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="text-sm text-slate-500">Total Employees</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">47</div>
</div>
</div></section></div></main></div>
    </>
  );
}
