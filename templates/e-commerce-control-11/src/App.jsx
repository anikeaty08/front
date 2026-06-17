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



    // Simple section switching without styling logic change
    const links = document.querySelectorAll('.nav-link');
    const sections = {
      dashboard: document.getElementById('section-dashboard'),
      orders: document.getElementById('section-orders'),
      products: document.getElementById('section-products'),
      customers: document.getElementById('section-customers'),
      analytics: document.getElementById('section-analytics'),
      settings: document.getElementById('section-settings')
    };

    links.forEach(link => {
      link.addEventListener('click', () => {
        const target = link.getAttribute('data-section');
        Object.values(sections).forEach(sec => sec.classList.add('hidden'));
        sections[target].classList.remove('hidden');
        links.forEach(l => {
          l.classList.remove('bg-[#131920]', 'border-[#2a313a]', 'text-slate-100');
          l.classList.add('border-transparent');
        });
        link.classList.add('bg-[#131920]', 'border-[#2a313a]', 'text-slate-100');
      });
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
      

<aside className="hidden md:flex md:flex-col w-64 bg-[#05080b] border-r border-[#20262d]">

<div className="flex items-center h-16 px-5 border-b border-[#20262d]/80">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-[#edf2ff] text-[#111827] text-sm font-semibold tracking-[0.16em]">
        EC
      </div>
<div className="ml-3">
<div className="text-sm font-medium tracking-tight text-slate-50">E‑Commerce Console</div>
<div className="text-[11px] text-slate-400">Control Center</div>
</div>
</div>

<nav className="flex-1 px-3 py-4 space-y-6 text-sm">

<div className="">
<div className="px-2 mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">Main</div>
<button className="nav-link flex w-full items-center gap-2 px-2.5 py-2 rounded-md bg-[#131920] border border-[#2a313a] hover:border-[#3b4652] hover:bg-[#181f27] transition-colors text-slate-100" data-section="dashboard">
<svg className="w-4 h-4 shrink-0 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="8" x="3" y="3"></rect>
<rect height="5" rx="1.5" width="8" x="13" y="3"></rect>
<rect height="11" rx="1.5" width="8" x="13" y="10"></rect>
<rect height="8" rx="1.5" width="8" x="3" y="13"></rect>
</svg>
<span className="truncate">Dashboard</span>
</button>
<button className="nav-link flex w-full items-center gap-2 px-2.5 py-2 rounded-md border border-transparent hover:border-[#303742] hover:bg-[#12171d] transition-colors text-slate-300 hover:text-slate-50" data-section="analytics">
<svg className="w-4 h-4 shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19V9"></path>
<path d="M10 19V5"></path>
<path d="M16 19v-7"></path>
<path d="M22 19V8"></path>
</svg>
<span className="truncate">Analytics &amp; Reports</span>
</button>
</div>

<div className="">
<div className="px-2 mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">Commerce</div>
<button className="nav-link flex w-full items-center gap-2 px-2.5 py-2 rounded-md border border-transparent hover:border-[#303742] hover:bg-[#12171d] transition-colors text-slate-300 hover:text-slate-50" data-section="orders">
<svg className="w-4 h-4 shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5h4l1 5h11l-1.2 6H8.3"></path>
<circle cx="9" cy="19" r="1"></circle>
<circle cx="18" cy="19" r="1"></circle>
</svg>
<span className="truncate">Orders</span>
</button>
<button className="nav-link flex w-full items-center gap-2 px-2.5 py-2 rounded-md border border-transparent hover:border-[#303742] hover:bg-[#12171d] transition-colors text-slate-300 hover:text-slate-50" data-section="products">
<svg className="w-4 h-4 shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-6 9 6-9 6-9-6z"></path>
<path d="M3 15l9 6 9-6"></path>
<path d="M3 9l9 6 9-6"></path>
</svg>
<span className="truncate">Products</span>
</button>
<button className="nav-link flex w-full items-center gap-2 px-2.5 py-2 rounded-md border border-transparent hover:border-[#303742] hover:bg-[#12171d] transition-colors text-slate-300 hover:text-slate-50" data-section="customers">
<svg className="w-4 h-4 shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="3"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a3 3 0 0 1 0 5.74"></path>
</svg>
<span className="truncate">Customers</span>
</button>
</div>

<div>
<div className="px-2 mb-2 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">System</div>
<button className="nav-link flex w-full items-center gap-2 px-2.5 py-2 rounded-md border border-transparent hover:border-[#303742] hover:bg-[#12171d] transition-colors text-slate-300 hover:text-slate-50" data-section="settings">
<svg className="w-4 h-4 shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"></path>
<path d="M19.4 15a1.8 1.8 0 0 0 .37 2l.06.06a2.1 2.1 0 0 1 0 3l-.53.53a2.1 2.1 0 0 1-3 0l-.06-.06a1.8 1.8 0 0 0-2-.37 1.8 1.8 0 0 0-1 1.64V22a2.1 2.1 0 0 1-2.1 2.1h-.75A2.1 2.1 0 0 1 7 22v-.09a1.8 1.8 0 0 0-1-1.64 1.8 1.8 0 0 0-2 .37l-.06.06a2.1 2.1 0 0 1-3 0L.41 20.17a2.1 2.1 0 0 1 0-3l.06-.06A1.8 1.8 0 0 0 .84 15a1.8 1.8 0 0 0-1.64-1H-.5A2.1 2.1 0 0 1-2.6 12v-.75A2.1 2.1 0 0 1-.5 9.15h.09a1.8 1.8 0 0 0 1.64-1 1.8 1.8 0 0 0-.37-2l-.06-.06a2.1 2.1 0 0 1 0-3L2.33.41a2.1 2.1 0 0 1 3 0l.06.06a1.8 1.8 0 0 0 2 .37H7.5A1.8 1.8 0 0 0 9.15.84h.75A2.1 2.1 0 0 1 12 .5h.75A2.1 2.1 0 0 1 14.85.84h.09a1.8 1.8 0 0 0 1.64 1 1.8 1.8 0 0 0 2-.37l.06-.06a2.1 2.1 0 0 1 3 0l.53.53a2.1 2.1 0 0 1 0 3l-.06.06a1.8 1.8 0 0 0-.37 2 1.8 1.8 0 0 0 1.64 1h.09A2.1 2.1 0 0 1 25.5 12v.75A2.1 2.1 0 0 1 23.4 15h-.09a1.8 1.8 0 0 0-1.64 1z" transform="scale(.8) translate(3 3)"></path>
</svg>
<span className="truncate">Settings</span>
</button>
</div>
</nav>

<div className="border-t border-[#20262d] px-3 py-3">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-[#323a44]" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<div className="text-xs font-medium tracking-tight">Alex Mercer</div>
<div className="text-[11px] text-slate-400">Store Operator</div>
</div>
</div>
<button className="p-1.5 rounded-md border border-transparent hover:border-[#3b4652] hover:bg-[#12171d] transition-colors">
<svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
<div className="flex items-center justify-between text-[11px] text-slate-400">
<span>Workspace</span>
<span className="px-1.5 py-0.5 rounded border border-[#303742] text-[10px] text-slate-300">PRO</span>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="flex items-center justify-between h-16 px-4 md:px-6 border-b border-[#20262d] bg-[#0b1014]/95 backdrop-blur">
<div className="flex items-center gap-2">

<button className="md:hidden p-2 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920]">
<svg className="w-4.5 h-4.5 text-slate-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16"></path>
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
</svg>
</button>
<div className="hidden sm:flex items-center gap-2">
<div className="text-xs text-slate-400">Workspace:</div>
<button className="inline-flex items-center gap-1 px-2.5 py-1 border border-[#252b33] rounded-md text-xs hover:border-[#3b4652] hover:bg-[#131920] text-slate-100">
<span>Northwind Store</span>
<svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</button>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">

<div className="hidden md:flex items-center px-2.5 py-1.5 rounded-md border border-[#252b33] bg-[#06090c] focus-within:border-[#4e89ff] focus-within:bg-[#0d1219] transition-colors w-64 lg:w-80">
<svg className="w-3.5 h-3.5 text-slate-500 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="6"></circle>
<path d="m20 20-3.5-3.5"></path>
</svg>
<input className="bg-transparent border-none outline-none text-xs placeholder:text-slate-500 flex-1 text-slate-100" placeholder="Search orders, customers, products..." type="text"/>
<div className="flex items-center gap-1 text-[10px] text-slate-500">
<span className="px-1.5 py-0.5 rounded border border-[#28303a]">Ctrl</span>
<span>+</span>
<span className="px-1.5 py-0.5 rounded border border-[#28303a]">K</span>
</div>
</div>

<button className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#252b33] text-xs hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
<span>Last 30 days</span>
<svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9l6 6 6-6"></path>
</svg>
</button>

<button className="relative p-1.5 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920]">
<span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<svg className="w-4 h-4 text-slate-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-5 space-y-6">

<section className="space-y-5" id="section-dashboard">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h1 className="text-[22px] md:text-[24px] font-semibold tracking-tight text-slate-50">Overview</h1>
<p className="text-xs mt-1 text-slate-400">Live summary of your store: sales, orders, performance and alerts in one place.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#2b3340] text-xs hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 5 4 4-4 4"></path>
<path d="M8 9h8"></path>
<path d="M4 19h16"></path>
</svg>
<span>Export snapshot</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#f97316]/90 text-[11px] font-medium tracking-tight hover:bg-[#fb923c] text-black">
<span>Go live</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/50"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

<div className="rounded-xl border border-[#1d242f] bg-[#090d12] px-3.5 py-3 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">Revenue</span>
<span className="px-1.5 py-0.5 rounded border border-emerald-500/30 text-[10px] text-emerald-300">+18.3%</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-lg font-semibold tracking-tight">$84,920</div>
<div className="text-[11px] text-slate-500 mt-0.5">Last 30 days</div>
</div>
<div className="h-12 w-20 bg-[conic-gradient(at_top,_#22c55e33,_#4ade8033,_#22c55e22,_#16a34a11)] rounded-md border border-emerald-500/20 flex items-end justify-center overflow-hidden">
<div className="flex gap-[3px] w-full px-1 items-end">
<div className="w-[3px] rounded-t h-4 bg-emerald-400/60"></div>
<div className="w-[3px] rounded-t h-6 bg-emerald-400/40"></div>
<div className="w-[3px] rounded-t h-8 bg-emerald-400/70"></div>
<div className="w-[3px] rounded-t h-5 bg-emerald-400/40"></div>
<div className="w-[3px] rounded-t h-10 bg-emerald-400/90"></div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#090d12] px-3.5 py-3 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">Orders</span>
<span className="px-1.5 py-0.5 rounded border border-sky-500/30 text-[10px] text-sky-300">+9.7%</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-lg font-semibold tracking-tight">1,284</div>
<div className="text-[11px] text-slate-500 mt-0.5">Completed &amp; processing</div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-1 text-[11px] text-slate-400">
<span className="w-2 h-2 rounded-full bg-emerald-400/80"></span>
<span>92% fulfillment</span>
</div>
<div className="w-24 h-[5px] rounded-full bg-[#111827] overflow-hidden">
<div className="h-full w-[92%] bg-gradient-to-r from-sky-400 to-emerald-400"></div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#090d12] px-3.5 py-3 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">Conversion rate</span>
<span className="px-1.5 py-0.5 rounded border border-emerald-500/30 text-[10px] flex items-center gap-0.5 text-emerald-300">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
                1.2%
              </span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-lg font-semibold tracking-tight">3.84%</div>
<div className="text-[11px] text-slate-500 mt-0.5">Storewide</div>
</div>
<div className="flex flex-col items-end text-[10px] text-slate-400">
<span>Sessions: 33,541</span>
<span>Carts created: 1,982</span>
</div>
</div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#090d12] px-3.5 py-3 flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">Average order value</span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-lg font-semibold tracking-tight">$66.17</div>
<div className="text-[11px] text-slate-500 mt-0.5">vs. $59.04 last month</div>
</div>
<div className="flex items-center gap-1 text-[11px] text-amber-300">
<span className="w-1.5 h-1.5 rounded-full bg-amber-300/80"></span>
<span>High margin</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div>
<div className="text-[13px] font-medium tracking-tight">Revenue trend</div>
<div className="text-[11px] mt-0.5 text-slate-400">Daily revenue and order volume</div>
</div>
<div className="flex items-center gap-2 text-[11px]">
<button className="px-1.5 py-0.5 rounded border border-[#222835] hover:border-[#3b4652] hover:bg-[#111827] text-slate-300">D</button>
<button className="px-1.5 py-0.5 rounded border border-[#222835] bg-[#111827] text-slate-50">W</button>
<button className="px-1.5 py-0.5 rounded border border-[#222835] hover:border-[#3b4652] hover:bg-[#111827] text-slate-300">M</button>
</div>
</div>

<div className="relative h-52 rounded-lg bg-[#05070b] border border-dashed border-[#202736] overflow-hidden">
<div className="absolute inset-x-4 top-3 flex justify-between text-[10px] text-slate-500">
<span>$6k</span><span>$12k</span><span>$18k</span>
</div>
<div className="absolute inset-x-4 bottom-2 flex justify-between text-[10px] text-slate-500">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-70">
<div className="w-[90%] h-[60%] relative">
<div className="absolute inset-0 bg-gradient-to-t from-sky-500/10 to-transparent rounded-full blur-xl"></div>
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 100 40">
<polyline fill="none" points="0,35 10,30 20,28 30,18 40,22 50,12 60,16 70,8 80,14 90,10 100,6" stroke="#38bdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline>
<polyline fill="none" points="0,32 10,31 20,25 30,24 40,26 50,20 60,21 70,18 80,19 90,18 100,16" stroke="#a855f7" stroke-dasharray="2 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="space-y-3">

<div className="rounded-xl border border-[#2b1b1b] bg-[#110809] p-3.5">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-1.5">
<span className="inline-flex items-center justify-center w-4.5 h-4.5 rounded-full bg-rose-500/10 border border-rose-500/40">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
</span>
<span className="text-[12px] font-medium tracking-tight text-slate-50">Attention required</span>
</div>
<span className="text-[10px] px-1.5 py-0.5 rounded border border-rose-400/30 text-rose-200">3 issues</span>
</div>
<div className="space-y-2 mt-2">
<div className="flex items-start justify-between gap-2">
<div>
<div className="text-[11px] text-slate-100">Low inventory on 7 products</div>
<div className="text-[10px] text-slate-500">Consider enabling backorders or increasing stock.</div>
</div>
<button className="text-[10px] px-1.5 py-0.5 rounded border border-[#403036] hover:border-rose-500/40 hover:bg-rose-500/10 text-slate-200">Review</button>
</div>
<div className="flex items-start justify-between gap-2">
<div>
<div className="text-[11px] text-slate-100">2 payouts pending verification</div>
<div className="text-[10px] text-slate-500">Add missing tax information to avoid delay.</div>
</div>
</div>
<div className="flex items-start justify-between gap-2">
<div>
<div className="text-[11px] text-slate-100">High refund rate in “Summer Essentials”</div>
<div className="text-[10px] text-slate-500">Return rate is 2.3x higher than store median.</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5">
<div className="flex items-center justify-between mb-2">
<span className="text-[12px] font-medium tracking-tight">Fulfillment status</span>
<span className="text-[10px] text-slate-400">Today</span>
</div>
<div className="space-y-2.5 text-[11px]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span>Ready to ship</span>
</div>
<span className="text-slate-300">57</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
<span>In transit</span>
</div>
<span className="text-slate-300">143</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
<span>Unpaid</span>
</div>
<span className="text-slate-300">9</span>
</div>
<div className="mt-3">
<div className="w-full h-[5px] rounded-full bg-[#111827] overflow-hidden">
<div className="h-full w-[68%] bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400"></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-slate-500">
<span>68% of today’s orders fulfilled</span>
<button className="text-[10px] text-sky-300 hover:text-sky-200">Open queue</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<div className="xl:col-span-2 rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5">
<div className="flex items-center justify-between mb-2">
<div>
<div className="text-[13px] font-medium tracking-tight">Recent orders</div>
<div className="text-[11px] mt-0.5 text-slate-400">Last 10 orders across all channels</div>
</div>
<button className="text-[11px] px-2.5 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
                View all
              </button>
</div>
<div className="mt-2 overflow-x-auto">
<table className="min-w-full text-[11px]">
<thead className="text-slate-500">
<tr className="border-b border-[#1d242f]">
<th className="text-left py-1.5 pr-4 font-normal">Order</th>
<th className="text-left py-1.5 px-4 font-normal">Customer</th>
<th className="text-left py-1.5 px-4 font-normal">Date</th>
<th className="text-left py-1.5 px-4 font-normal">Status</th>
<th className="text-right py-1.5 pl-4 font-normal">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-[#141a22]">
<tr className="hover:bg-[#0b1016]">
<td className="py-1.5 pr-4 font-medium tracking-tight text-slate-200">#1049</td>
<td className="py-1.5 px-4 text-slate-200">Jamie Rivers</td>
<td className="py-1.5 px-4 text-slate-400">Today · 14:24</td>
<td className="py-1.5 px-4">
<span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">Paid</span>
</td>
<td className="py-1.5 pl-4 text-right text-slate-200">$218.40</td>
</tr>
<tr className="hover:bg-[#0b1016]">
<td className="py-1.5 pr-4 font-medium tracking-tight text-slate-200">#1048</td>
<td className="py-1.5 px-4 text-slate-200">Studio Aurora</td>
<td className="py-1.5 px-4 text-slate-400">Today · 13:02</td>
<td className="py-1.5 px-4">
<span className="px-1.5 py-0.5 rounded-full text-[10px] bg-sky-500/10 border border-sky-500/30 text-sky-300">Processing</span>
</td>
<td className="py-1.5 pl-4 text-right text-slate-200">$1,092.00</td>
</tr>
<tr className="hover:bg-[#0b1016]">
<td className="py-1.5 pr-4 font-medium tracking-tight text-slate-200">#1047</td>
<td className="py-1.5 px-4 text-slate-200">Chloe Park</td>
<td className="py-1.5 px-4 text-slate-400">Today · 11:49</td>
<td className="py-1.5 px-4">
<span className="px-1.5 py-0.5 rounded-full text-[10px] bg-amber-500/10 border border-amber-500/30 text-amber-300">Awaiting payment</span>
</td>
<td className="py-1.5 pl-4 text-right text-slate-200">$74.80</td>
</tr>
<tr className="hover:bg-[#0b1016]">
<td className="py-1.5 pr-4 font-medium tracking-tight text-slate-200">#1046</td>
<td className="py-1.5 px-4 text-slate-200">Neon Lab</td>
<td className="py-1.5 px-4 text-slate-400">Yesterday · 19:34</td>
<td className="py-1.5 px-4">
<span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">Shipped</span>
</td>
<td className="py-1.5 pl-4 text-right text-slate-200">$542.10</td>
</tr>
<tr className="hover:bg-[#0b1016]">
<td className="py-1.5 pr-4 font-medium tracking-tight text-slate-200">#1045</td>
<td className="py-1.5 px-4 text-slate-200">Nova Collective</td>
<td className="py-1.5 px-4 text-slate-400">Yesterday · 16:02</td>
<td className="py-1.5 px-4">
<span className="px-1.5 py-0.5 rounded-full text-[10px] bg-rose-500/10 border border-rose-500/30 text-rose-300">Refunded</span>
</td>
<td className="py-1.5 pl-4 text-right text-slate-200">$329.00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5">
<div className="flex items-center justify-between mb-2">
<div>
<div className="text-[13px] font-medium tracking-tight">Top products</div>
<div className="text-[11px] mt-0.5 text-slate-400">By revenue · last 30 days</div>
</div>
<button className="text-[10px] text-slate-300 hover:text-slate-100">See catalog</button>
</div>
<div className="space-y-2.5 mt-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md overflow-hidden border border-[#2a303a]">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
</div>
<div>
<div className="text-[11px] text-slate-100">Apex Runner Sneaker</div>
<div className="text-[10px] text-slate-500">SKU: AR‑SNK‑01</div>
</div>
</div>
<div className="text-right text-[11px]">
<div className="text-slate-100">$18,492</div>
<div className="text-slate-500">492 units</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md overflow-hidden border border-[#2a303a]">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
</div>
<div>
<div className="text-[11px] text-slate-100">Midnight Studio Headphones</div>
<div className="text-[10px] text-slate-500">SKU: MS‑HD‑02</div>
</div>
</div>
<div className="text-right text-[11px]">
<div className="text-slate-100">$13,761</div>
<div className="text-slate-500">321 units</div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md overflow-hidden border border-[#2a303a]">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
</div>
<div>
<div className="text-[11px] text-slate-100">Everyday Essential Tee</div>
<div className="text-[10px] text-slate-500">SKU: EE‑TS‑09</div>
</div>
</div>
<div className="text-right text-[11px]">
<div className="text-slate-100">$9,034</div>
<div className="text-slate-500">608 units</div>
</div>
</div>
<div className="pt-2 mt-1 border-t border-[#181f29] flex items-center justify-between text-[10px] text-slate-500">
<div>Restock window &lt; 10 days for 3 of top 10 items.</div>
<button className="text-sky-300 hover:text-sky-200">Open inventory</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-4" id="section-orders">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-slate-50">Orders</h2>
<p className="text-xs mt-1 text-slate-400">Monitor, filter and update order statuses in real time.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#252b33] text-xs hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 6 3 1 2 9h11l2-8H8"></path>
<path d="M13 16a3 3 0 1 0 3 3"></path>
</svg>
<span>Import orders</span>
</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-medium tracking-tight bg-slate-100 text-slate-900 hover:bg-white">
<svg className="w-3.5 h-3.5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<span>Create order</span>
</button>
</div>
</div>

<div className="rounded-lg border border-[#1d242f] bg-[#070b10] p-3.5 flex flex-wrap items-center gap-2 text-[11px]">
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-[#252b33] bg-[#05070b]">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="6"></circle>
<path d="m20 20-3.5-3.5"></path>
</svg>
<input className="bg-transparent border-none outline-none text-[11px] placeholder:text-slate-500 w-40 md:w-56 text-slate-100" placeholder="Search orders or customers..." type="text"/>
</div>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4h18"></path>
<path d="M8 9h8"></path>
<path d="M10 14h4"></path>
<path d="M12 4v16"></path>
</svg>
<span>Status</span>
</button>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4h18"></path>
<path d="M4 9h16"></path>
<path d="M6 14h12"></path>
<path d="M10 19h4"></path>
</svg>
<span>Channel</span>
</button>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
<span>Date</span>
</button>
<div className="ml-auto flex items-center gap-2">
<div className="text-[10px] text-slate-500">1,284 orders</div>
<button className="px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">Save view</button>
</div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#070b10] overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full text-[11px]">
<thead className="bg-[#05070b] border-b border-[#151b24] text-slate-500">
<tr>
<th className="py-2 pl-4 pr-2 text-left font-normal">Order</th>
<th className="py-2 px-2 text-left font-normal">Customer</th>
<th className="py-2 px-2 text-left font-normal">Channel</th>
<th className="py-2 px-2 text-left font-normal">Status</th>
<th className="py-2 px-2 text-left font-normal">Payment</th>
<th className="py-2 px-2 text-left font-normal">Created</th>
<th className="py-2 px-4 text-right font-normal">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-[#151b24] text-slate-200">
<tr className="hover:bg-[#0b1016]">
<td className="py-2 pl-4 pr-2 font-medium tracking-tight">#1049</td>
<td className="py-2 px-2">
<div>Jamie Rivers</div>
<div className="text-[10px] text-slate-500">jamie.r@example.com</div>
</td>
<td className="py-2 px-2 text-slate-400">Online store</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded-full text-[10px] bg-sky-500/10 border border-sky-500/30 text-sky-300">Processing</span>
</td>
<td className="py-2 px-2 text-emerald-300">Paid</td>
<td className="py-2 px-2 text-slate-400">Today · 14:24</td>
<td className="py-2 px-4 text-right">$218.40</td>
</tr>
<tr className="hover:bg-[#0b1016]">
<td className="py-2 pl-4 pr-2 font-medium tracking-tight">#1048</td>
<td className="py-2 px-2">
<div>Studio Aurora</div>
<div className="text-[10px] text-slate-500">billing@studioaurora.io</div>
</td>
<td className="py-2 px-2 text-slate-400">Wholesale</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded-full text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">Fulfilled</span>
</td>
<td className="py-2 px-2 text-emerald-300">Paid</td>
<td className="py-2 px-2 text-slate-400">Today · 13:02</td>
<td className="py-2 px-4 text-right">$1,092.00</td>
</tr>
<tr className="hover:bg-[#0b1016]">
<td className="py-2 pl-4 pr-2 font-medium tracking-tight">#1047</td>
<td className="py-2 px-2">
<div>Chloe Park</div>
<div className="text-[10px] text-slate-500">c.park@example.com</div>
</td>
<td className="py-2 px-2 text-slate-400">Online store</td>
<td className="py-2 px-2">
<span className="px-1.5 py-0.5 rounded-full text-[10px] bg-amber-500/10 border border-amber-500/30 text-amber-300">Unfulfilled</span>
</td>
<td className="py-2 px-2 text-slate-400">Pending</td>
<td className="py-2 px-2 text-slate-400">Today · 11:49</td>
<td className="py-2 px-4 text-right">$74.80</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-4" id="section-products">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-slate-50">Products</h2>
<p className="text-xs mt-1 text-slate-400">Manage catalog, pricing and availability.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#252b33] text-xs hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<span>Add product</span>
</button>
<button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md border border-[#252b33] text-xs hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4h18"></path>
<path d="M4 9h16"></path>
<path d="M6 14h12"></path>
<path d="M10 19h4"></path>
</svg>
<span>Collections</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
<div className="lg:col-span-3 rounded-lg border border-[#1d242f] bg-[#070b10] p-3.5 flex flex-wrap items-center gap-2 text-[11px]">
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-[#252b33] bg-[#05070b]">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="6"></circle>
<path d="m20 20-3.5-3.5"></path>
</svg>
<input className="bg-transparent border-none outline-none text-[11px] placeholder:text-slate-500 w-40 md:w-56 text-slate-100" placeholder="Search products..." type="text"/>
</div>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<span>Status</span>
</button>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<span>Inventory</span>
</button>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<span>Category</span>
</button>
<div className="ml-auto flex items-center gap-2">
<span className="text-[10px] text-slate-500">312 products</span>
<button className="px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">Bulk edit</button>
</div>
</div>
<div className="rounded-lg border border-[#1d242f] bg-[#070b10] p-3.5 text-[11px]">
<div className="flex items-center justify-between">
<span className="text-slate-400">Inventory health</span>
<span className="text-[10px] text-slate-500">Last sync · 2m</span>
</div>
<div className="mt-2 space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-slate-200">In stock</span>
<span className="text-slate-200">81%</span>
</div>
<div className="w-full h-[5px] rounded-full bg-[#111827] overflow-hidden">
<div className="h-full w-[81%] bg-emerald-400/80"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-slate-400">Low / out of stock</span>
<span className="text-amber-300">32 SKUs</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#070b10] overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full text-[11px]">
<thead className="bg-[#05070b] border-b border-[#151b24] text-slate-500">
<tr>
<th className="py-2 pl-4 pr-2 text-left font-normal">Product</th>
<th className="py-2 px-2 text-left font-normal">Status</th>
<th className="py-2 px-2 text-left font-normal">Inventory</th>
<th className="py-2 px-2 text-left font-normal">Price</th>
<th className="py-2 px-4 text-right font-normal">30‑day revenue</th>
</tr>
</thead>
<tbody className="divide-y divide-[#151b24] text-slate-200">
<tr className="hover:bg-[#0b1016]">
<td className="py-2 pl-4 pr-2">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md overflow-hidden border border-[#2a303a]">
<img alt="Product" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-[11px] text-slate-100">Orbit Polycarbonate Suitcase</div>
<div className="text-[10px] text-slate-500">SKU: ORB‑LUG‑03</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-emerald-300">Active</td>
<td className="py-2 px-2">
<div>214 in stock</div>
<div className="text-[10px] text-slate-500">3 locations</div>
</td>
<td className="py-2 px-2">$189.00</td>
<td className="py-2 px-4 text-right">$12,948</td>
</tr>
<tr className="hover:bg-[#0b1016]">
<td className="py-2 pl-4 pr-2">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md overflow-hidden border border-[#2a303a]">
<img alt="Product" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-[11px] text-slate-100">Everyday Essential Tee</div>
<div className="text-[10px] text-slate-500">SKU: EE‑TS‑09</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-emerald-300">Active</td>
<td className="py-2 px-2">
<div>47 in stock</div>
<div className="text-[10px] text-amber-300">Low · 4 sizes</div>
</td>
<td className="py-2 px-2">$32.00</td>
<td className="py-2 px-4 text-right">$9,034</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-4" id="section-customers">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-slate-50">Customers</h2>
<p className="text-xs mt-1 text-slate-400">Understand your customers and their lifetime value.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#252b33] text-xs hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="7" r="4"></circle>
<path d="M5.5 21a7.5 7.5 0 0 1 13 0"></path>
</svg>
<span>Add customer</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
<div className="lg:col-span-3 rounded-lg border border-[#1d242f] bg-[#070b10] p-3.5 flex flex-wrap items-center gap-2 text-[11px]">
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-[#252b33] bg-[#05070b]">
<svg className="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="6"></circle>
<path d="m20 20-3.5-3.5"></path>
</svg>
<input className="bg-transparent border-none outline-none text-[11px] placeholder:text-slate-500 w-40 md:w-56 text-slate-100" placeholder="Search customers..." type="text"/>
</div>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<span>Segment</span>
</button>
<button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-[#252b33] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<span>Country</span>
</button>
<div className="ml-auto flex items-center gap-2">
<span className="text-[10px] text-slate-500">8,421 customers</span>
</div>
</div>
<div className="rounded-lg border border-[#1d242f] bg-[#070b10] p-3.5 text-[11px]">
<div className="flex items-center justify-between">
<span className="text-slate-400">Customer health</span>
<span className="text-[10px] text-slate-500">Cohorts</span>
</div>
<div className="mt-2 space-y-1">
<div className="flex items-center justify-between">
<span className="text-slate-200">Returning</span>
<span className="text-slate-200">41%</span>
</div>
<div className="w-full h-[5px] rounded-full bg-[#111827] overflow-hidden">
<div className="h-full w-[41%] bg-sky-400/90"></div>
</div>
<div className="flex items-center justify-between pt-1">
<span className="text-slate-400">Average LTV</span>
<span className="text-slate-200">$326</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#070b10] overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full text-[11px]">
<thead className="bg-[#05070b] border-b border-[#151b24] text-slate-500">
<tr>
<th className="py-2 pl-4 pr-2 text-left font-normal">Customer</th>
<th className="py-2 px-2 text-left font-normal">Location</th>
<th className="py-2 px-2 text-left font-normal">Orders</th>
<th className="py-2 px-2 text-left font-normal">Last order</th>
<th className="py-2 px-4 text-right font-normal">Lifetime value</th>
</tr>
</thead>
<tbody className="divide-y divide-[#151b24] text-slate-200">
<tr className="hover:bg-[#0b1016]">
<td className="py-2 pl-4 pr-2">
<div className="flex items-center gap-2">
<img alt="Customer" className="w-6 h-6 rounded-full border border-[#2a303a] object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<div className="text-[11px]">Jamie Rivers</div>
<div className="text-[10px] text-slate-500">jamie.r@example.com</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-slate-400">Berlin, DE</td>
<td className="py-2 px-2">7</td>
<td className="py-2 px-2 text-slate-400">Today</td>
<td className="py-2 px-4 text-right">$1,284</td>
</tr>
<tr className="hover:bg-[#0b1016]">
<td className="py-2 pl-4 pr-2">
<div className="flex items-center gap-2">
<img alt="Customer" className="w-6 h-6 rounded-full border border-[#2a303a] object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<div className="text-[11px]">Neon Lab</div>
<div className="text-[10px] text-slate-500">ops@neonlab.io</div>
</div>
</div>
</td>
<td className="py-2 px-2 text-slate-400">Austin, US</td>
<td className="py-2 px-2">23</td>
<td className="py-2 px-2 text-slate-400">Yesterday</td>
<td className="py-2 px-4 text-right">$9,732</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-4" id="section-analytics">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-slate-50">Analytics &amp; Reports</h2>
<p className="text-xs mt-1 text-slate-400">Deeper insight into revenue, customers and product performance.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#252b33] text-xs hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">
<span>Custom report</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5">
<div className="flex items-center justify-between mb-2">
<div>
<div className="text-[13px] font-medium tracking-tight">Sales over time</div>
<div className="text-[11px] mt-0.5 text-slate-400">Net sales, gross sales and refunds</div>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span> Net
                </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-sky-400"></span> Gross
                </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-rose-400"></span> Refunds
                </span>
</div>
</div>
<div className="h-52 rounded-lg border border-dashed border-[#202736] bg-[#05070b]"></div>
</div>

<div className="rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5 text-[11px] space-y-2">
<div className="flex items-center justify-between">
<span className="text-[12px] font-medium tracking-tight">Product performance</span>
<span className="text-[10px] text-slate-500">Last 30 days</span>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-slate-400">Top category</span>
<span className="text-slate-200">Footwear · 32% of revenue</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Best margin</span>
<span className="text-slate-200">Accessories · 61% margin</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Most refunded</span>
<span className="text-rose-300">Summer Essentials Pack</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5">
<div className="flex items-center justify-between mb-2">
<div>
<div className="text-[13px] font-medium tracking-tight">Customer cohorts</div>
<div className="text-[11px] mt-0.5 text-slate-400">Retention by first purchase month</div>
</div>
</div>
<div className="h-48 rounded-lg border border-dashed border-[#202736] bg-[#05070b]"></div>
</div>
<div className="rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5">
<div className="flex items-center justify-between mb-2">
<div>
<div className="text-[13px] font-medium tracking-tight">Channel breakdown</div>
<div className="text-[11px] mt-0.5 text-slate-400">Sales share by channel</div>
</div>
</div>
<div className="h-48 rounded-lg border border-dashed border-[#202736] bg-[#05070b]"></div>
</div>
</div>
</section>

<section className="hidden space-y-4" id="section-settings">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div>
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight text-slate-50">Settings</h2>
<p className="text-xs mt-1 text-slate-400">Store configuration, payments, shipping and tax.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

<div className="lg:col-span-1 rounded-xl border border-[#1d242f] bg-[#070b10] p-3.5 text-[12px] space-y-1">
<button className="w-full text-left px-2 py-1.5 rounded-md bg-[#111827] border border-[#252b33] text-slate-50">General</button>
<button className="w-full text-left px-2 py-1.5 rounded-md border border-transparent hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">Payments</button>
<button className="w-full text-left px-2 py-1.5 rounded-md border border-transparent hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">Shipping</button>
<button className="w-full text-left px-2 py-1.5 rounded-md border border-transparent hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">Tax</button>
<button className="w-full text-left px-2 py-1.5 rounded-md border border-transparent hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">Notifications</button>
</div>

<div className="lg:col-span-3 rounded-xl border border-[#1d242f] bg-[#070b10] p-4 space-y-4 text-[12px]">
<div>
<h3 className="text-[14px] font-medium tracking-tight text-slate-50">Store profile</h3>
<p className="text-[11px] mt-1 text-slate-400">Basic information used across invoices, emails and tax documents.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div>
<label className="block text-[11px] mb-1 text-slate-400">Store name</label>
<input className="w-full px-2.5 py-1.5 rounded-md border border-[#252b33] bg-[#05070b] text-[12px] outline-none focus:border-[#4e89ff] text-slate-100" type="text" value="Northwind Store"/>
</div>
<div>
<label className="block text-[11px] mb-1 text-slate-400">Support email</label>
<input className="w-full px-2.5 py-1.5 rounded-md border border-[#252b33] bg-[#05070b] text-[12px] outline-none focus:border-[#4e89ff] text-slate-100" type="email" value="support@northwind.store"/>
</div>
<div>
<label className="block text-[11px] mb-1 text-slate-400">Default currency</label>
<select className="w-full px-2.5 py-1.5 rounded-md border border-[#252b33] bg-[#05070b] text-[12px] outline-none focus:border-[#4e89ff] text-slate-100">
<option>USD · $</option>
<option>EUR · €</option>
<option>GBP · £</option>
</select>
</div>
<div>
<label className="block text-[11px] mb-1 text-slate-400">Time zone</label>
<select className="w-full px-2.5 py-1.5 rounded-md border border-[#252b33] bg-[#05070b] text-[12px] outline-none focus:border-[#4e89ff] text-slate-100">
<option>UTC +01:00 · Berlin</option>
<option>UTC -05:00 · New York</option>
<option>UTC +08:00 · Singapore</option>
</select>
</div>
</div>
<div className="pt-3 border-t border-[#141a22] flex items-center justify-between">
<p className="text-[11px] text-slate-500">Changes are saved automatically every 30 seconds.</p>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md border border-[#252b33] text-[11px] hover:border-[#3b4652] hover:bg-[#131920] text-slate-200">Discard</button>
<button className="px-3 py-1.5 rounded-md text-[11px] font-medium tracking-tight bg-slate-100 text-slate-900 hover:bg-white">Save now</button>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
