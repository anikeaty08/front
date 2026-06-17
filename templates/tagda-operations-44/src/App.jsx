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



    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

      const sidebar = document.getElementById('sidebar');
      const toggle = document.getElementById('sidebar-toggle');
      const toggleIcon = document.getElementById('sidebar-toggle-icon');
      const backdrop = document.getElementById('sidebar-backdrop');

      const isDesktop = () => window.innerWidth >= 768;

      const openSidebarDesktop = () => {
        sidebar.classList.remove('-translate-x-full');
        if (toggleIcon) {
          toggleIcon.setAttribute('data-lucide', 'panel-left-close');
          lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
        }
      };

      const closeSidebarDesktop = () => {
        sidebar.classList.add('-translate-x-full');
        if (toggleIcon) {
          toggleIcon.setAttribute('data-lucide', 'panel-left-open');
          lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
        }
      };

      const openSidebarMobile = () => {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('pointer-events-none');
        backdrop.classList.remove('opacity-0');
        backdrop.classList.add('opacity-100');
      };

      const closeSidebarMobile = () => {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('pointer-events-none');
        backdrop.classList.remove('opacity-100');
        backdrop.classList.add('opacity-0');
      };

      const handleToggle = () => {
        if (isDesktop()) {
          if (sidebar.classList.contains('-translate-x-full')) {
            openSidebarDesktop();
          } else {
            closeSidebarDesktop();
          }
        } else {
          if (sidebar.classList.contains('-translate-x-full')) {
            openSidebarMobile();
          } else {
            closeSidebarMobile();
          }
        }
      };

      toggle.addEventListener('click', handleToggle);
      backdrop.addEventListener('click', () => {
        if (isDesktop()) {
          closeSidebarDesktop();
        } else {
          closeSidebarMobile();
        }
      });

      window.addEventListener('resize', () => {
        if (isDesktop()) {
          backdrop.classList.add('pointer-events-none');
          backdrop.classList.add('opacity-0');
        }
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
      

<aside className="fixed inset-y-0 left-0 z-30 w-64 shrink-0 border-r border-slate-800 bg-slate-950/80 backdrop-blur flex flex-col transform -translate-x-full md:translate-x-0 transition-transform duration-200" id="sidebar">
<div className="flex items-center gap-2 px-5 pt-4 pb-3">
<div className="h-8 w-8 rounded-lg bg-emerald-500 flex items-center justify-center text-sm font-semibold tracking-tight text-slate-950">
        Tg
      </div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-slate-50">Tagda</span>
<span className="text-xs text-slate-400">Ops &amp; Settlements</span>
</div>
</div>
<nav className="mt-2 px-3 space-y-1 text-sm">
<div className="text-[0.7rem] font-medium uppercase tracking-[0.15em] text-slate-500 px-2 mb-1">Operations</div>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-slate-900 text-slate-50">
<i className="w-4 h-4 stroke-[1.5] text-emerald-400" data-lucide="layout-dashboard"></i>
<span>Dashboard</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="package"></i>
<span>Orders</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="users"></i>
<span>Riders</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="store"></i>
<span>Merchants</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="user-round"></i>
<span>Consumers</span>
</button>
<div className="text-[0.7rem] font-medium uppercase tracking-[0.15em] text-slate-500 px-2 mt-4 mb-1">Finance</div>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="badge-dollar-sign"></i>
<span>Settlements</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="line-chart"></i>
<span>Reports</span>
</button>
<div className="text-[0.7rem] font-medium uppercase tracking-[0.15em] text-slate-500 px-2 mt-4 mb-1">System</div>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="shield-check"></i>
<span>Roles &amp; Access</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="bell"></i>
<span>Notifications</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-slate-900/70 text-slate-200">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="newspaper"></i>
<span>Blog &amp; Banners</span>
</button>
</nav>
<div className="mt-auto border-t border-slate-800 px-4 py-3 text-xs">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[0.65rem] font-semibold text-emerald-200">
            SA
          </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-100">Rafi • Super Admin</span>
<span className="text-[0.65rem] text-slate-400">tagdahq@ops</span>
</div>
</div>
<button className="p-1.5 rounded-md hover:bg-slate-900 text-slate-400">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="log-out"></i>
</button>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-slate-500">
<span>Global commission</span>
<span className="inline-flex items-center gap-1 text-emerald-300">
          12% 
          <i className="w-3 h-3 stroke-[1.5]" data-lucide="lock"></i>
</span>
</div>
</div>
</aside>

<div className="fixed inset-0 z-20 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-200 md:pointer-events-none md:opacity-0" id="sidebar-backdrop"></div>

<main className="flex-1 flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95 md:ml-64 transition-[margin] duration-200" id="main">

<header className="flex items-center justify-between border-b border-slate-800/80 px-4 sm:px-6 py-3">
<div className="flex items-center gap-3">

<button className="inline-flex items-center justify-center rounded-md border border-slate-700/80 bg-slate-900/80 p-1.5" id="sidebar-toggle">
<i className="w-5 h-5 stroke-[1.5] text-slate-200" data-lucide="panel-left-open" id="sidebar-toggle-icon"></i>
</button>
<div className="hidden lg:flex flex-col">
<h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-50">Today’s Operations</h1>
<p className="text-sm text-slate-400">Sylhet • Cash-on-delivery focused workflow for home businesses</p>
</div>
<div className="flex lg:hidden flex-col">
<h1 className="text-lg font-semibold tracking-tight text-slate-50">Tagda Ops</h1>
<p className="text-xs text-slate-400">Live deliveries &amp; settlements</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/70 px-3 py-1.5">
<i className="w-4 h-4 stroke-[1.5] text-slate-400" data-lucide="calendar"></i>
<select className="bg-transparent text-xs text-slate-100 focus:outline-none">
<option className="bg-slate-900">Today</option>
<option className="bg-slate-900">This Week</option>
<option className="bg-slate-900">This Month</option>
<option className="bg-slate-900">Custom</option>
</select>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-emerald-500 text-slate-950 text-xs font-medium px-3.5 py-1.5 hover:bg-emerald-400">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i>
          New Order
        </button>
<button className="inline-flex md:hidden items-center justify-center rounded-md border border-slate-700/80 bg-slate-900/80 p-1.5">
<i className="w-4 h-4 stroke-[1.5] text-emerald-300" data-lucide="plus"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-6 space-y-4 sm:space-y-6">

<section className="mt-3 sm:mt-4">
<div className="flex flex-col md:flex-row gap-3 md:gap-4">
<div className="flex-1 rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 p-4 flex flex-col md:flex-row md:items-center md:justify-between">
<div className="flex items-start gap-3">
<div className="mt-0.5 h-7 w-7 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
<i className="w-3.5 h-3.5 stroke-[1.5] text-emerald-300" data-lucide="sparkles"></i>
</div>
<div className="space-y-0.5">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Built for home-based merchants in Sylhet</h2>
<p className="text-sm text-slate-300">
                  Fast delivery, proper COD handling, and accountable riders—all tracked from a single panel.
                </p>
</div>
</div>
<div className="mt-3 md:mt-0 flex flex-col gap-2 text-xs md:text-[0.8rem] text-slate-300 md:items-end">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Live COD settlement tracking
                </span>
</div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1 hover:border-slate-500">
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-300" data-lucide="book-open"></i>
<span>View merchant playbook</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:w-64">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 flex flex-col gap-1">
<div="flex items-center="" justify-between"="">
<span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">Deliveries</span>
<span className="inline-flex items-center gap-1 text-[0.7rem] text-emerald-300">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="trending-up"></i>
                  +12%
                </span>
</div="flex></div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-slate-50">128</span>
<span className="text-xs text-slate-500">today</span>
</div>
<p className="text-xs text-slate-400">82 COD • 29 Buy &amp; Deliver • 17 Just Deliver</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">COD Gap</span>
<i className="w-3.5 h-3.5 stroke-[1.5] text-amber-300" data-lucide="alert-triangle"></i>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-slate-50">৳ 37,200</span>
<span className="text-xs text-slate-500">unsettled</span>
</div>
<p className="text-xs text-slate-400">Across 14 merchants • 9 riders</p>
</div>
</div>
</section></div>


<section className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] gap-4 sm:gap-5">

<div className="space-y-4 sm:space-y-5">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-2">
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Create new delivery</h3>
<p className="text-sm text-slate-400">Manual logging for merchants relying on Tagda riders.</p>
</div>
<span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950 px-2 py-1 text-[0.7rem] text-slate-400">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="clock"></i>
<span>AVG 38 mins</span>
</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-200">Merchant</label>
<span className="text-[0.7rem] text-slate-500">Home business</span>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 relative">
<input className="w-full rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/70" placeholder="Search or create merchant…" type="text"/>
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-500 absolute right-2 top-1/2 -translate-y-1/2" data-lucide="search"></i>
</div>
<button className="inline-flex items-center justify-center rounded-md border border-dashed border-slate-700 bg-slate-950/80 p-2 hover:border-emerald-400">
<i className="w-4 h-4 stroke-[1.5] text-emerald-300" data-lucide="plus"></i>
</button>
</div>
<p className="text-[0.7rem] text-slate-500">Popup will capture merchant name, phone, address, docs.</p>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-200">Customer</label>
<span className="text-[0.7rem] text-slate-500">Lookup by phone / name</span>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 relative">
<input className="w-full rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/70" placeholder="Search or create customer…" type="text"/>
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-500 absolute right-2 top-1/2 -translate-y-1/2" data-lucide="phone"></i>
</div>
<button className="inline-flex items-center justify-center rounded-md border border-dashed border-slate-700 bg-slate-950/80 p-2 hover:border-emerald-400">
<i className="w-4 h-4 stroke-[1.5] text-emerald-300" data-lucide="user-plus"></i>
</button>
</div>
<p className="text-[0.7rem] text-slate-500">New customers auto-fill next time.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-3">
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-200">Delivery location</label>
<span className="text-[0.7rem] text-slate-500">House • Road • Area</span>
</div>
<textarea className="w-full rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/70" placeholder="House, Road, Area, Sylhet…" rows="2"></textarea>
<p className="text-[0.7rem] text-slate-500">Structured address fields can be added later.</p>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-200">Order notes</label>
<span className="text-[0.7rem] text-slate-500">Optional</span>
</div>
<textarea className="w-full rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/70" placeholder="Items, quantity, food instructions…" rows="2"></textarea>
<button className="mt-1 inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950/80 px-2 py-1 text-[0.7rem] text-slate-300 hover:border-slate-500">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="paperclip"></i>
                  Attach invoice / photo
                </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-3">

<div className="space-y-3">

<div className="space-y-1">
<label className="text-xs font-medium text-slate-200">Delivery type</label>
<div className="inline-flex rounded-full border border-slate-800 bg-slate-950/80 p-0.5 text-xs">
<button className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-500/50 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      COD
                    </button>
<button className="inline-flex items-center gap-1 rounded-full text-slate-300 px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="shopping-bag"></i>
                      Buy &amp; Deliver
                    </button>
<button className="inline-flex items-center gap-1 rounded-full text-slate-300 px-2.5 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="truck"></i>
                      Just Deliver
                    </button>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-slate-200">Assign rider</label>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-sky-300">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="sparkles"></i>
                      Suggest best
                    </button>
</div>
<div className="flex items-center gap-2">
<select className="flex-1 rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-emerald-500/70">
<option className="bg-slate-900">Select rider…</option>
<option className="bg-slate-900">Rider • Imran (11 active)</option>
<option className="bg-slate-900">Rider • Sumaiya (6 active)</option>
</select>
<div className="flex flex-col items-end">
<span className="text-[0.7rem] text-slate-500">Commission</span>
<div className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-[0.7rem] text-emerald-300">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="badge-percent"></i>
                        18%
                        <span className="inline-flex items-center gap-0.5 text-[0.65rem] text-slate-400">
<i className="w-3 h-3 stroke-[1.5]" data-lucide="lock"></i>
                          SA only
                        </span>
</div>
</div>
</div>
<p className="text-[0.7rem] text-slate-500">Commission is editable later only by Super Admin.</p>
</div>
</div>

<div className="space-y-2.5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-200">Financials (manual entry)</span>
<span className="text-[0.7rem] text-slate-500">No auto-calculation</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-400">Amount collected from consumer</label>
<div className="flex items-center rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1.5">
<span className="text-xs text-slate-500 mr-1.5">৳</span>
<input className="w-full bg-transparent text-sm text-slate-100 focus:outline-none" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-400">Amount to pay merchant</label>
<div className="flex items-center rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1.5">
<span className="text-xs text-slate-500 mr-1.5">৳</span>
<input className="w-full bg-transparent text-sm text-slate-100 focus:outline-none" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-400">Delivery charge (Tagda revenue)</label>
<div className="flex items-center rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1.5">
<span className="text-xs text-slate-500 mr-1.5">৳</span>
<input className="w-full bg-transparent text-sm text-slate-100 focus:outline-none" placeholder="0.00" type="number"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-400">Rider gets (commission)</label>
<div className="flex items-center justify-between rounded-md border border-dashed border-slate-700 bg-slate-950/80 px-2.5 py-1.5 text-xs text-slate-300">
<span>Calculated externally</span>
<span className="inline-flex items-center gap-1 text-emerald-300">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="info"></i>
                        Ledger only
                      </span>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<p className="text-[0.7rem] text-slate-500">
                    Admin inputs all values; system only tracks and reports.
                  </p>
<div className="hidden sm:flex items-center gap-2 text-[0.7rem] text-slate-400">
<span>Settlement preview:</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
<i className="w-3.5 h-3.5 stroke-[1.5] text-emerald-300" data-lucide="arrow-left-right"></i>
                      Merchant • Rider • Tagda
                    </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1 border-t border-slate-800/70 mt-1">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="clipboard-list"></i>
</span>
<span>
                  Order will start as 
                  <span className="text-emerald-300">Pending</span> and move through the full status flow.
                </span>
</div>
<div className="flex items-center gap-2 justify-end">
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-600">
                  Save as draft
                </button>
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 text-slate-950 text-xs font-medium px-3.5 py-1.5 hover:bg-emerald-400">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="send"></i>
                  Create order
                </button>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 sm:p-4 space-y-3">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm font-medium text-slate-100">Live delivery filters</h4>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-slate-400 hover:text-slate-200">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="refresh-ccw"></i>
                Reset
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-400">Search by Order ID / phone / name</label>
<div className="relative">
<input className="w-full rounded-md border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/70" placeholder="Order ID, merchant, rider…"/>
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-500 absolute right-2 top-1/2 -translate-y-1/2" data-lucide="search"></i>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-400">Status</label>
<select className="w-full rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-2 text-xs text-slate-100 focus:outline-none focus:border-emerald-500/70">
<option className="bg-slate-900">All</option>
<option className="bg-slate-900">Pending</option>
<option className="bg-slate-900">Assigned</option>
<option className="bg-slate-900">Picked</option>
<option className="bg-slate-900">Out for Delivery</option>
<option className="bg-slate-900">Delivered</option>
<option className="bg-slate-900">Failed</option>
<option className="bg-slate-900">Returned</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[0.7rem] text-slate-400">Area</label>
<select className="w-full rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-2 text-xs text-slate-100 focus:outline-none focus:border-emerald-500/70">
<option className="bg-slate-900">All</option>
<option className="bg-slate-900">Zindabazar</option>
<option className="bg-slate-900">Ambarkhana</option>
<option className="bg-slate-900">Subidbazar</option>
</select>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 text-[0.7rem] text-slate-400">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Active today
              </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                Overdue settlement
              </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                Failed / Returned
              </span>
</div>
</div>
</div>

<div className="space-y-4 sm:space-y-5 flex flex-col">

<div className="space-y-4">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 sm:p-4 space-y-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-slate-100">Area-wise performance</h4>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.7rem] text-slate-300">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="radar"></i>
                    Heatmap
                  </span>
</div>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-slate-400 hover:text-slate-200">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="maximize-2"></i>
                  Expand
                </button>
</div>
<div className="grid grid-cols-3 gap-2 text-[0.7rem]">
<div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2.5 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-400">Zindabazar</span>
<span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600"></span>
</div>
<span className="text-xs text-slate-100">34 deliveries</span>
<span className="text-[0.7rem] text-slate-400">3.2% failed</span>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2.5 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-400">Ambarkhana</span>
<span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></span>
</div>
<span className="text-xs text-slate-100">21 deliveries</span>
<span className="text-[0.7rem] text-amber-300">11% failed</span>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2.5 flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="text-slate-400">Subidbazar</span>
<span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600"></span>
</div>
<span className="text-xs text-slate-100">18 deliveries</span>
<span className="text-[0.7rem] text-slate-400">5.6% failed</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400">Average delivery time per rider</span>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="text-slate-100">Imran</span>
<span className="text-slate-300">32 min</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-100">Sumaiya</span>
<span className="text-slate-300">39 min</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-100">Akash</span>
<span className="text-slate-300">41 min</span>
</div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400">Failed delivery %</span>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between">
<span className="text-slate-100">Top merchant</span>
<span className="text-amber-300">6.8%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-100">Top rider</span>
<span className="text-amber-300">8.2%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-100">Network</span>
<span className="text-emerald-300">4.1%</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 sm:p-4 space-y-3">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm font-medium text-slate-100">Finance snapshot</h4>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-slate-400 hover:text-slate-200">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="table"></i>
                  Open settlements report
                </button>
</div>
<div className="grid grid-cols-2 gap-3 text-xs">

<div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2.5 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400">Merchant ledger</span>
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-400" data-lucide="store"></i>
</div>
<div className="text-sm text-slate-100">৳ 26,800 <span className="text-[0.7rem] text-slate-500">to settle</span></div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-400">
<span>Overdue</span>
<span className="text-amber-300">৳ 8,200 • 5 merchants</span>
</div>
</div>

<div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2.5 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400">Rider ledger</span>
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-400" data-lucide="bike"></i>
</div>
<div className="text-sm text-slate-100">৳ 10,400 <span className="text-[0.7rem] text-slate-500">commission</span></div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-400">
<span>Pending</span>
<span className="text-emerald-300">৳ 6,100 • 9 riders</span>
</div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-slate-400">Revenue split by delivery type</span>
<span className="text-[0.7rem] text-slate-400">Today</span>
</div>
<div className="space-y-1 text-[0.7rem]">
<div className="flex items-center justify-between">
<span className="flex items-center gap-1 text-slate-100">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                      COD
                    </span>
<span className="text-slate-300">৳ 9,600 • 63%</span>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1 text-slate-100">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
                      Buy &amp; Deliver
                    </span>
<span className="text-slate-300">৳ 3,100 • 21%</span>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1 text-slate-100">
<span className="h-2 w-2 rounded-full bg-violet-400"></span>
                      Just Deliver
                    </span>
<span className="text-slate-300">৳ 2,400 • 16%</span>
</div>
</div>
<div className="mt-1 h-1.5 w-full rounded-full bg-slate-900 overflow-hidden">
<div className="h-full flex">
<div className="bg-emerald-500" style={{width: '63%'}}></div>
<div className="bg-sky-500" style={{width: '21%'}}></div>
<div className="bg-violet-500" style={{width: '16%'}}></div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1 border-t border-slate-800/80 mt-1">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="newspaper"></i>
<span>Promote offers to merchants via blog &amp; in-app banners.</span>
</div>
<div className="flex items-center gap-2 text-[0.7rem]">
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-slate-200 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="megaphone"></i>
                    New banner
                  </button>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-slate-200 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="pen-square"></i>
                    New blog post
                  </button>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 overflow-hidden flex flex-col">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-3 sm:px-4 py-3 border-b border-slate-800/80">
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-slate-100">Today’s deliveries</h4>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.7rem] text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  54 in progress
                </span>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 px-2 py-1 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="download"></i>
                  Export
                </button>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950 px-2 py-1 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="columns-3"></i>
                  Columns
                </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-xs sm:text-sm">
<thead className="bg-slate-950/90 border-b border-slate-800">
<tr className="text-xs text-slate-400">
<th className="text-left font-medium py-2.5 pl-3 sm:pl-4 pr-3">Order</th>
<th className="text-left font-medium py-2.5 px-3">Merchant / Consumer</th>
<th className="text-left font-medium py-2.5 px-3">Type</th>
<th className="text-left font-medium py-2.5 px-3">Rider</th>
<th className="text-right font-medium py-2.5 px-3">Amounts</th>
<th className="text-left font-medium py-2.5 px-3">Status</th>
<th className="text-right font-medium py-2.5 pr-3 sm:pr-4 pl-3">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">

<tr className="hover:bg-slate-900/60">
<td className="py-2.5 pl-3 sm:pl-4 pr-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-slate-100">TG-2025-00128</span>
<span className="text-[0.7rem] text-slate-500">Created 10:24 AM • by Admin</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-100">Nusrat’s Home Kitchen</span>
<span className="text-[0.7rem] text-slate-400">To: Rahim • 01711-xxxxxx</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 px-2 py-0.5 text-[0.7rem] text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          COD
                        </span>
<span className="text-[0.7rem] text-slate-500">Zindabazar</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-100">Imran • Rider</span>
<span className="text-[0.7rem] text-slate-400">4 active • 22m avg</span>
</div>
</td>
<td className="py-2.5 px-3 align-top text-right">
<div className="flex flex-col gap-0.5 items-end">
<span className="text-xs text-slate-100">৳ 850 <span className="text-slate-500 text-[0.7rem]">collected</span></span>
<span className="text-[0.7rem] text-slate-400">৳ 700 to merchant • ৳ 70 rider • ৳ 80 Tagda</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 border border-sky-500/40 px-2 py-0.5 text-[0.7rem] text-sky-200">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                          Out for Delivery
                        </span>
<span className="text-[0.7rem] text-slate-500">ETA 11:05 AM</span>
</div>
</td>
<td className="py-2.5 pr-3 sm:pr-4 pl-3 align-top text-right">
<div className="inline-flex items-center gap-1">
<button className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-950/90 p-1.5 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-300" data-lucide="map-pin"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-950/90 p-1.5 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-300" data-lucide="file-pen-line"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md border border-emerald-500/60 bg-emerald-500/10 p-1.5 hover:bg-emerald-500/20">
<i className="w-3.5 h-3.5 stroke-[1.5] text-emerald-300" data-lucide="check-circle-2"></i>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-900/60">
<td className="py-2.5 pl-3 sm:pl-4 pr-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-slate-100">TG-2025-00119</span>
<span className="text-[0.7rem] text-slate-500">Edited 9:40 AM • by Staff</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-100">Sara’s Boutique</span>
<span className="text-[0.7rem] text-slate-400">To: Limon • 01822-xxxxxx</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 border border-rose-500/40 px-2 py-0.5 text-[0.7rem] text-rose-200">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="truck"></i>
                          Just Deliver
                        </span>
<span className="text-[0.7rem] text-slate-500">Ambarkhana</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-100">Sumaiya • Rider</span>
<span className="text-[0.7rem] text-slate-400">Failed: Not available</span>
</div>
</td>
<td className="py-2.5 px-3 align-top text-right">
<div className="flex flex-col gap-0.5 items-end">
<span className="text-xs text-slate-100">৳ 0 <span className="text-slate-500 text-[0.7rem]">collected</span></span>
<span className="text-[0.7rem] text-slate-400">৳ 0 to merchant • ৳ 0 rider • ৳ 0 Tagda</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 border border-rose-500/40 px-2 py-0.5 text-[0.7rem] text-rose-200">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                          Failed
                        </span>
<span className="text-[0.7rem] text-slate-500">Reason: Not available</span>
</div>
</td>
<td className="py-2.5 pr-3 sm:pr-4 pl-3 align-top text-right">
<div className="inline-flex items-center gap-1">
<button className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-950/90 p-1.5 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-300" data-lucide="rotate-ccw"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-950/90 p-1.5 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-300" data-lucide="file-text"></i>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-900/60">
<td className="py-2.5 pl-3 sm:pl-4 pr-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium text-slate-100">TG-2025-00115</span>
<span className="text-[0.7rem] text-slate-500">Created 8:55 AM • by Admin</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-100">Direct Consumer</span>
<span className="text-[0.7rem] text-slate-400">To: Sohan • 01633-xxxxxx</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/ border border-sky-500/40 px-2 py-0.5 text-[0.7rem] text-sky-200">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="shopping-bag"></i>
                          Buy &amp; Deliver
                        </span>
<span className="text-[0.7rem] text-slate-500">Subidbazar</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-100">Akash • Rider</span>
<span className="text-[0.7rem] text-slate-400">Reimbursement pending</span>
</div>
</td>
<td className="py-2.5 px-3 align-top text-right">
<div className="flex flex-col gap-0.5 items-end">
<span className="text-xs text-slate-100">৳ 1,450 <span className="text-slate-500 text-[0.7rem]">collected</span></span>
<span className="text-[0.7rem] text-slate-400">৳ 1,200 product • ৳ 100 rider service • ৳ 150 Tagda</span>
</div>
</td>
<td className="py-2.5 px-3 align-top">
<div className="flex flex-col gap-0.5">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 px-2 py-0.5 text-[0.7rem] text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          Delivered
                        </span>
<span className="text-[0.7rem] text-amber-300">Reimburse rider: ৳ 1,300</span>
</div>
</td>
<td className="py-2.5 pr-3 sm:pr-4 pl-3 align-top text-right">
<div className="inline-flex items-center gap-1">
<button className="inline-flex items-center justify-center rounded-md border border-emerald-500/60 bg-emerald-500/10 p-1.5 hover:bg-emerald-500/20">
<i className="w-3.5 h-3.5 stroke-[1.5] text-emerald-300" data-lucide="wallet-cards"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-950/90 p-1.5 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5] text-slate-300" data-lucide="file-text"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-3 sm:px-4 py-2.5 border-t border-slate-800/80">
<div className="inline-flex items-center gap-1 text-[0.7rem] text-slate-400">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="history"></i>
<span>Full audit trail for create, edit, assignment, commission changes.</span>
</div>
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<span>Page 1 of 6</span>
<div className="inline-flex items-center gap-1">
<button className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-950/90 p-1.5 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="chevron-left"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-950/90 p-1.5 hover:border-slate-600">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

</main>


    </>
  );
}
