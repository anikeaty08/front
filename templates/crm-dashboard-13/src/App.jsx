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



      // Initialize icons with consistent stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Mobile sidebar behavior
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      const openBtn = document.getElementById('openSidebar');
      const closeBtn = document.getElementById('closeSidebar');

      const openSidebar = () => {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('pointer-events-none', 'opacity-0');
        overlay.classList.add('opacity-100');
      };

      const closeSidebar = () => {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('pointer-events-none', 'opacity-0');
        overlay.classList.remove('opacity-100');
      };

      openBtn && openBtn.addEventListener('click', openSidebar);
      closeBtn && closeBtn.addEventListener('click', closeSidebar);
      overlay && overlay.addEventListener('click', closeSidebar);

      // Close on Esc
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSidebar();
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
      
<div className="min-h-screen flex">

<div className="lg:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-white/80 backdrop-blur border-b border-slate-200">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30" id="openSidebar">
<i className="w-5 h-5" data-lucide="panel-left"></i>
          Menu
        </button>
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight">Customers</span>
<span className="text-xs text-slate-500 border border-slate-200 rounded px-1.5 py-0.5">v.01</span>
</div>
<div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="Avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="fixed inset-0 z-40 bg-slate-900/40 opacity-0 pointer-events-none transition-opacity lg:hidden" id="sidebarOverlay"></div>

<aside className="fixed lg:sticky top-0 left-0 z-50 lg:z-30 h-screen lg:h-[100dvh] w-[280px] shrink-0 bg-white shadow-[0_10px_60px_rgba(226,236,249,0.5)] border-r border-slate-100/80 -translate-x-full lg:translate-x-0 transition-transform" id="sidebar">

<div className="h-full flex flex-col">

<div className="px-6 pt-6 pb-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-slate-900/95 text-white grid place-items-center">
<i className="w-5 h-5" data-lucide="settings"></i>
</div>
<h1 className="text-[26px] font-semibold tracking-tight leading-none">Dashboard</h1>
</div>
<span className="text-[10px] text-slate-500 border border-slate-200 rounded px-2 py-1">v.01</span>
</div>
</div>

<nav className="px-3 mt-4 space-y-1">

<a className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-50" href="#">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium -tracking-[0.01em]">Dashboard</span>
</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-50" href="#">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="box"></i>
<span className="text-sm font-medium -tracking-[0.01em]">Product</span>
</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 bg-[#5932EA] text-white shadow-sm" href="#">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="users"></i>
<span className="text-sm font-medium -tracking-[0.01em]">Customers</span>
</span>
<i className="w-4 h-4 text-white/90" data-lucide="chevron-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-50" href="#">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="text-sm font-medium -tracking-[0.01em]">Income</span>
</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-50" href="#">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="percent"></i>
<span className="text-sm font-medium -tracking-[0.01em]">Promote</span>
</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</a>

<a className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:text-slate-700 hover:bg-slate-50" href="#">
<span className="flex items-center gap-3">
<i className="w-5 h-5" data-lucide="help-circle"></i>
<span className="text-sm font-medium -tracking-[0.01em]">Help</span>
</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-slate-600" data-lucide="chevron-right"></i>
</a>
</nav>

<div className="px-6 mt-8">
<div className="rounded-2xl p-5 bg-gradient-to-br from-[#E9ACF0] to-[#4723E9] text-white shadow">
<p className="text-sm font-semibold text-center leading-snug">Upgrade to PRO to get access all Features!</p>
<div className="mt-4">
<button className="w-full rounded-2xl bg-white text-[#4925E9] font-semibold text-sm py-2.5 shadow-sm hover:shadow transition hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/60">
                  Get Pro Now!
                </button>
</div>
</div>
</div>

<div className="flex-1"></div>

<div className="px-5 pb-6 pt-4 border-t border-slate-100 mt-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full overflow-hidden">
<img alt="Evano" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Evano</div>
<div className="text-[12px] text-slate-500">Project Manager</div>
</div>
</div>
<button className="p-2 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>

<button className="lg:hidden absolute -right-10 top-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-white shadow ring-1 ring-slate-200 text-slate-600 hover:text-slate-900" id="closeSidebar">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</aside>

<main className="flex-1 min-w-0 lg:pl-[280px]">
<div className="px-4 sm:px-6 lg:px-8 py-6">

<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<h2 className="text-[22px] md:text-2xl font-semibold tracking-tight">Customers</h2>
<p className="text-sm text-slate-500">Customers details and activity</p>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-56 sm:w-72 rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500" placeholder="Search" type="text"/>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
<i className="w-4.5 h-4.5" data-lucide="filter"></i>
                Filters
              </button>
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#5932EA] text-white px-3 py-2.5 text-sm font-semibold hover:bg-[#4c2cd1] focus:outline-none focus:ring-2 focus:ring-[#5932EA]/30">
<i className="w-4.5 h-4.5" data-lucide="user-plus"></i>
                Add Customer
              </button>
</div>
</div>

<section className="mt-6 rounded-2xl bg-white ring-1 ring-slate-200/80 shadow-sm">

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 px-4 sm:px-6 py-4 border-b border-slate-100">
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight">All Customers</h3>
<p className="text-xs sm:text-sm text-slate-500">Active Members</p>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center text-xs text-slate-500">
                  Sort by:
                </div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30">
<i className="w-4 h-4" data-lucide="clock-3"></i>
                  Newest
                  <i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-slate-50/60">
<tr className="text-left text-slate-500">
<th className="font-medium py-3.5 pl-6 pr-3 border-b border-slate-100">Customer Name</th>
<th className="font-medium py-3.5 px-3 border-b border-slate-100">Company</th>
<th className="font-medium py-3.5 px-3 border-b border-slate-100">Phone Number</th>
<th className="font-medium py-3.5 px-3 border-b border-slate-100">Email</th>
<th className="font-medium py-3.5 px-3 border-b border-slate-100">Country</th>
<th className="font-medium py-3.5 pr-6 pl-3 border-b border-slate-100 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50/60">
<td className="py-3.5 pl-6 pr-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-medium text-slate-800">Jane Cooper</div>
</div>
</td>
<td className="px-3 text-slate-700">Microsoft</td>
<td className="px-3 text-slate-700">+1 (225) 555-0118</td>
<td className="px-3 text-slate-700">jane@microsoft.com</td>
<td className="px-3 text-slate-700">United States</td>
<td className="pl-3 pr-6">
<div className="flex justify-end">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Active
                        </span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-3.5 pl-6 pr-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-medium text-slate-800">Floyd Miles</div>
</div>
</td>
<td className="px-3 text-slate-700">Yahoo</td>
<td className="px-3 text-slate-700">+1 (307) 555-0133</td>
<td className="px-3 text-slate-700">floyd@yahoo.com</td>
<td className="px-3 text-slate-700">Kiribati</td>
<td className="pl-3 pr-6">
<div className="flex justify-end">
<span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-2 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span> Inactive
                        </span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-3.5 pl-6 pr-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-medium text-slate-800">Ronald Richards</div>
</div>
</td>
<td className="px-3 text-slate-700">Adobe</td>
<td className="px-3 text-slate-700">+1 (201) 555-0124</td>
<td className="px-3 text-slate-700">ronald@adobe.com</td>
<td className="px-3 text-slate-700">Israel</td>
<td className="pl-3 pr-6">
<div className="flex justify-end">
<span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-2 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Pending
                        </span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-3.5 pl-6 pr-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-medium text-slate-800">Marvin McKinney</div>
</div>
</td>
<td className="px-3 text-slate-700">Tesla</td>
<td className="px-3 text-slate-700">+1 (252) 555-0126</td>
<td className="px-3 text-slate-700">marvin@tesla.com</td>
<td className="px-3 text-slate-700">Iran</td>
<td className="pl-3 pr-6">
<div className="flex justify-end">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Active
                        </span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-3.5 pl-6 pr-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="font-medium text-slate-800">Jerome Bell</div>
</div>
</td>
<td className="px-3 text-slate-700">Google</td>
<td className="px-3 text-slate-700">+1 (629) 555-0129</td>
<td className="px-3 text-slate-700">jerome@google.com</td>
<td className="px-3 text-slate-700">Réunion</td>
<td className="pl-3 pr-6">
<div className="flex justify-end">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Active
                        </span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-3.5 pl-6 pr-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-medium text-slate-800">Kathryn Murphy</div>
</div>
</td>
<td className="px-3 text-slate-700">Microsoft</td>
<td className="px-3 text-slate-700">+1 (406) 555-0120</td>
<td className="px-3 text-slate-700">kathryn@microsoft.com</td>
<td className="px-3 text-slate-700">Curaçao</td>
<td className="pl-3 pr-6">
<div className="flex justify-end">
<span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 px-2 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span> Inactive
                        </span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-3.5 pl-6 pr-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-medium text-slate-800">Devon Lane</div>
</div>
</td>
<td className="px-3 text-slate-700">Google</td>
<td className="px-3 text-slate-700">+1 (480) 555-0103</td>
<td className="px-3 text-slate-700">devon@google.com</td>
<td className="px-3 text-slate-700">Maldives</td>
<td className="pl-3 pr-6">
<div className="flex justify-end">
<span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700 px-2 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Pending
                        </span>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-3.5 pl-6 pr-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="font-medium text-slate-800">Theresa Webb</div>
</div>
</td>
<td className="px-3 text-slate-700">Uber</td>
<td className="px-3 text-slate-700">+1 (316) 555-0116</td>
<td className="px-3 text-slate-700">theresa@uber.com</td>
<td className="px-3 text-slate-700">Brunei</td>
<td className="pl-3 pr-6">
<div className="flex justify-end">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 px-2 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Active
                        </span>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 sm:px-6 py-4 border-t border-slate-100">
<div className="text-xs text-slate-500">Showing data 1 to 8 of 256 entries</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300">Prev</button>
<div className="hidden sm:flex items-center gap-1">
<button className="h-8 w-8 rounded-lg text-sm border border-slate-200 hover:bg-slate-50">1</button>
<button className="h-8 w-8 rounded-lg text-sm border-0 bg-[#5932EA] text-white">2</button>
<button className="h-8 w-8 rounded-lg text-sm border border-slate-200 hover:bg-slate-50">3</button>
<span className="px-1 text-slate-400">...</span>
<button className="h-8 w-8 rounded-lg text-sm border border-slate-200 hover:bg-slate-50">40</button>
</div>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-300">Next</button>
</div>
</div>
</section>
</div>
</main>
</div>


    </>
  );
}
