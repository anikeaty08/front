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
      
    // Lucide Icons
    lucide.createIcons();

    // Donut Chart
    const ctx = document.getElementById('salesDonut').getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [124, 76],
          backgroundColor: ['#10B981', '#F97316'],
          hoverOffset: 4,
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%',
        plugins: { legend: { display: false } }
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
      

<aside className="hidden lg:block w-64 border-r border-gray-200 bg-white">
<div className="h-full flex flex-col">
<div className="px-6 py-5 text-lg font-semibold tracking-tight font-geist" style={{}}>
        KIT<span className="font-light font-geist" style={{}}>Ops</span>
</div>
<nav className="flex-1 overflow-y-auto px-3 space-y-4">
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-layout w-4 h-4 stroke-1.5 text-gray-500 group-hover:text-indigo-500" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
              Dashboard
            </a>
</li>
<li className="pt-3 text-xs font-semibold text-gray-400 font-geist" style={{}}>INVENTORY</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-box w-4 h-4 stroke-1.5 text-gray-500 group-hover:text-indigo-500" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
              Inventory
            </a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-wrench w-4 h-4 stroke-1.5 text-gray-500 group-hover:text-indigo-500" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              KIT Products
            </a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-package w-4 h-4 stroke-1.5 text-gray-500 group-hover:text-indigo-500" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
              Orders
            </a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-inbox w-4 h-4 stroke-1.5 text-gray-500 group-hover:text-indigo-500" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
              Receiving
            </a>
</li>
<li><a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>NCR</a></li>
<li><a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>Master Plan</a></li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-truck w-4 h-4 stroke-1.5 text-gray-500 group-hover:text-indigo-500" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
              Shipping
            </a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-settings w-4 h-4 stroke-1.5 text-gray-500 group-hover:text-indigo-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Settings
            </a>
</li>
<li className="pt-6 text-xs font-semibold text-gray-400 font-geist" style={{}}>MASTER USERS</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>
<svg className="lucide lucide-user w-4 h-4 stroke-1.5 text-gray-500 group-hover:text-indigo-500" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Users
            </a>
</li>
<li className="pt-6 text-xs font-semibold text-gray-400 font-geist" style={{}}>LOG ACTIVITY</li>
<li><a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>Log Activity</a></li>
<li className="pt-6 text-xs font-semibold text-gray-400 font-geist" style={{}}>PROFILE</li>
<li><a className="group flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-gray-100 font-geist" href="#" style={{}}>Profile</a></li>
</ul>
</nav>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="bg-white border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center flex-wrap gap-4">
<div className="flex items-center gap-2">
<label className="text-sm font-medium text-gray-600 font-geist" style={{}}>Year</label>
<select className="border bg-white rounded-md px-3 py-1 text-sm">
<option className="font-geist" style={{}}>2023</option>
<option className="font-geist" style={{}}>2024</option>
<option className="font-geist" style={{}}>2025</option>
</select>
</div>
<div className="flex items-center gap-2">
<label className="text-sm font-medium text-gray-600 font-geist" style={{}}>Phase</label>
<select className="border bg-white rounded-md px-3 py-1 text-sm">
<option className="font-geist" style={{}}>Phase 1</option>
<option className="font-geist" style={{}}>Phase 2</option>
</select>
</div>
<div className="flex items-center gap-2">
<label className="text-sm font-medium text-gray-600 font-geist" style={{}}>Phase</label>
<select className="border bg-white rounded-md px-3 py-1 text-sm">
<option className="font-geist" style={{}}>Phase A</option>
<option className="font-geist" style={{}}>Phase B</option>
</select>
</div>
<button className="ml-auto inline-flex items-center gap-2 bg-indigo-600 text-white text-sm px-4 py-2 rounded-md hover:bg-indigo-700 transition font-geist" style={{}}>
<svg className="lucide lucide-search w-4 h-4 stroke-1.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg> Search
        </button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-6 space-y-8">

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white rounded-lg shadow-sm p-5 flex items-center gap-4">
<div className="flex-shrink-0">
<div className="rounded-full bg-indigo-50 p-3">
<svg className="lucide lucide-box w-5 h-5 stroke-1.5 text-indigo-600" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-wide text-gray-500 font-geist" style={{}}>Total KIT Types</p>
<h2 className="text-2xl tracking-tight font-space-grotesk font-semibold" style={{}}>125</h2>
</div>
</div>
<div className="bg-white rounded-lg shadow-sm p-5 flex items-center gap-4">
<div className="flex-shrink-0">
<div className="rounded-full bg-yellow-50 p-3">
<svg className="lucide lucide-hourglass w-5 h-5 stroke-1.5 text-yellow-600" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-wide text-gray-500 font-geist" style={{}}>Orders In Progress</p>
<h2 className="text-2xl tracking-tight font-space-grotesk font-semibold" style={{}}>8</h2>
</div>
</div>
<div className="bg-white rounded-lg shadow-sm p-5 flex items-center gap-4">
<div className="flex-shrink-0">
<div className="rounded-full bg-green-50 p-3">
<svg className="lucide lucide-check-circle w-5 h-5 stroke-1.5 text-green-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-wide text-gray-500 font-geist" style={{}}>Completed Shipments</p>
<h2 className="text-2xl tracking-tight font-space-grotesk font-semibold" style={{}}>24</h2>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
<div className="p-5 border-b border-gray-100">
<h3 className="text-lg font-semibold tracking-tight font-geist" style={{}}>Group Kit</h3>
</div>
<div className="p-5 overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left text-gray-600">
<th className="pb-3 font-geist" style={{}}>Group Kit</th>
<th className="pb-3 font-geist" style={{}}>Code / Catalog No.</th>
<th className="pb-3 font-geist" style={{}}>Progress</th>
<th className="pb-3 text-right font-geist" style={{}}>Stock</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50">
<td className="py-3 font-geist" style={{}}>KIT BOGIE GENERAL</td>
<td className="font-geist" style={{}}>G-KITA03001</td>
<td>
<div className="flex items-center gap-2">
<div className="w-40 h-2 bg-gray-200 rounded">
<div className="h-full rounded bg-green-500" style={{width: '100%'}}></div>
</div>
<span className="text-xs text-gray-600 font-geist" style={{}}>100%</span>
</div>
</td>
<td className="text-right font-geist" style={{}}>20 of 20</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-3 font-geist" style={{}}>KIT PEN BUSH</td>
<td className="font-geist" style={{}}>G-KITA03001PB</td>
<td>
<div className="flex items-center gap-2">
<div className="w-40 h-2 bg-gray-200 rounded">
<div className="h-full rounded bg-orange-500" style={{width: '45%'}}></div>
</div>
<span className="text-xs text-gray-600 font-geist" style={{}}>45%</span>
</div>
</td>
<td className="text-right font-geist" style={{}}>9 of 20</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-3 font-geist" style={{}}>KIT MAINTENANCE P24</td>
<td className="font-geist" style={{}}>G-KITMP24</td>
<td>
<div className="flex items-center gap-2">
<div className="w-40 h-2 bg-gray-200 rounded">
<div className="h-full rounded bg-gray-400" style={{width: '0%'}}></div>
</div>
<span className="text-xs text-gray-600 font-geist" style={{}}>0%</span>
</div>
</td>
<td className="text-right font-geist" style={{}}>0 of 20</td>
</tr>
</tbody>
</table>
<a className="inline-block mt-4 text-sm text-indigo-600 hover:underline font-geist" href="#" style={{}}>View More…</a>
</div>
</div>

<div className="bg-white rounded-lg shadow-sm relative overflow-hidden">
<div className="absolute -top-6 -right-6 opacity-10">
<svg className="lucide lucide-truck w-24 h-24 stroke-1.5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight font-geist" style={{}}>Sales Recap</h3>
<p className="text-sm text-gray-500 font-geist" style={{}}>For 2025 Orders</p>
<div className="mt-6 flex flex-col items-center">
<div className="relative w-40 h-40">
<canvas height="306" id="salesDonut" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '160px'}} width="306"></canvas>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl tracking-tight font-space-grotesk font-semibold" style={{}}>62%</span>
<span className="text-xs uppercase text-gray-500 font-geist" style={{}}>Delivered</span>
</div>
</div>
<div className="mt-6 w-full text-sm">
<div className="flex items-center justify-between">
<span className="flex items-center gap-2 font-geist" style={{}}>
<span className="w-2 h-2 rounded-full bg-green-500"></span> Delivered
                  </span>
<span className="font-geist" style={{}}>124 / 200</span>
</div>
<div className="flex items-center justify-between mt-2">
<span className="flex items-center gap-2 font-geist" style={{}}>
<span className="w-2 h-2 rounded-full bg-orange-500"></span> Pending
                  </span>
<span className="font-geist" style={{}}>76</span>
</div>
<div className="flex items-center justify-between mt-2">
<span className="font-geist" style={{}}>Delivery Progress</span>
<span className="font-geist" style={{}}>62%</span>
</div>
<div className="flex items-center justify-between mt-2">
<span className="font-geist" style={{}}>Last Updated</span>
<span className="font-geist" style={{}}>July 25, 2025</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="bg-white rounded-lg shadow-sm">
<div className="p-5 border-b border-gray-100">
<h3 className="text-lg font-semibold tracking-tight font-geist" style={{}}>Kit</h3>
</div>
<div className="p-5 overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left text-gray-600">
<th className="pb-3 font-geist" style={{}}>KIT Name</th>
<th className="pb-3 font-geist" style={{}}>Code / Catalog No.</th>
<th className="pb-3 font-geist" style={{}}>Progress</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50">
<td className="py-3 flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-settings w-4 h-4 stroke-1.5 text-gray-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    KIT AXLE SET
                  </td>
<td className="font-geist" style={{}}>KITAX001</td>
<td>
<div className="flex items-center gap-2">
<div className="w-40 h-2 bg-gray-200 rounded">
<div className="h-full rounded bg-green-500" style={{width: '80%'}}></div>
</div>
<span className="text-xs text-gray-600 font-geist" style={{}}>80%</span>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-3 flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-settings w-4 h-4 stroke-1.5 text-gray-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    KIT BRAKE SYSTEM
                  </td>
<td className="font-geist" style={{}}>KITBR002</td>
<td>
<div className="flex items-center gap-2">
<div className="w-40 h-2 bg-gray-200 rounded">
<div className="h-full rounded bg-orange-500" style={{width: '35%'}}></div>
</div>
<span className="text-xs text-gray-600 font-geist" style={{}}>35%</span>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="py-3 flex items-center gap-2 font-geist" style={{}}>
<svg className="lucide lucide-settings w-4 h-4 stroke-1.5 text-gray-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    KIT COUPLER
                  </td>
<td className="font-geist" style={{}}>KITCOUP003</td>
<td>
<div className="flex items-center gap-2">
<div className="w-40 h-2 bg-gray-200 rounded">
<div className="h-full rounded bg-gray-400" style={{width: '0%'}}></div>
</div>
<span className="text-xs text-gray-600 font-geist" style={{}}>0%</span>
</div>
</td>
</tr>
</tbody>
</table>
<a className="inline-block mt-4 text-sm text-indigo-600 hover:underline font-geist" href="#" style={{}}>View More…</a>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
