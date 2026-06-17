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
      

<aside className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col justify-between h-full shrink-0 z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-zinc-100">

<span className="text-lg font-bold tracking-tighter text-zinc-900">ORDR.</span>
</div>
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18" strokeWidth="1.5"></span>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-50 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:package" data-width="18" strokeWidth="1.5"></span>
                    All Orders
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:users" data-width="18" strokeWidth="1.5"></span>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="18" strokeWidth="1.5"></span>
                    Analytics
                </a>
</nav>
</div>
<div className="p-4 border-t border-zinc-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-500 rounded-lg hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="18" strokeWidth="1.5"></span>
                Settings
            </a>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-semibold text-zinc-600">JD</div>
<div className="text-xs">
<p className="font-medium text-zinc-900">John Doe</p>
<p className="text-zinc-500">Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-500">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<h1 className="text-sm font-medium text-zinc-500">Overview / <span className="text-zinc-900">Orders</span></h1>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</span>
<input className="pl-9 pr-4 py-1.5 text-sm bg-zinc-50 border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:border-zinc-300 w-64 placeholder:text-zinc-400 transition-all" placeholder="Search orders..." type="text"/>
</div>
<button className="bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-zinc-800 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                    Create Order
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col gap-1">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Order Management</h2>
<p className="text-sm text-zinc-500">Track and manage your orders, returns, and video proofs.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between gap-4 hover:border-zinc-300 transition-all">
<div className="flex justify-between items-start">
<div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="iconify text-zinc-900" data-icon="lucide:layers" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-green-600 flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span> 12%
                            </span>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">1,284</p>
<p className="text-xs font-medium text-zinc-500 mt-1">Total Orders</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between gap-4 hover:border-zinc-300 transition-all">
<div className="flex justify-between items-start">
<div className="p-2 bg-amber-50 rounded-lg border border-amber-100/50">
<span className="iconify text-amber-600" data-icon="lucide:clock" data-width="20" strokeWidth="1.5"></span>
</div>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">34</p>
<p className="text-xs font-medium text-zinc-500 mt-1">Pending Approval</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between gap-4 hover:border-zinc-300 transition-all">
<div className="flex justify-between items-start">
<div className="p-2 bg-blue-50 rounded-lg border border-blue-100/50">
<span className="iconify text-blue-600" data-icon="lucide:check-circle-2" data-width="20" strokeWidth="1.5"></span>
</div>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">1,142</p>
<p className="text-xs font-medium text-zinc-500 mt-1">Completed</p>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between gap-4 hover:border-zinc-300 transition-all">
<div className="flex justify-between items-start">
<div className="p-2 bg-red-50 rounded-lg border border-red-100/50">
<span className="iconify text-red-600" data-icon="lucide:alert-octagon" data-width="20" strokeWidth="1.5"></span>
</div>
<span className="text-xs font-medium text-red-600 flex items-center gap-1 bg-red-50 px-2 py-0.5 rounded-full">
                                +2 today
                            </span>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight text-zinc-900">12</p>
<p className="text-xs font-medium text-zinc-500 mt-1">Failed &amp; Overdue</p>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">

<div className="border-b border-zinc-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex items-center gap-1 bg-zinc-100/50 p-1 rounded-lg w-fit">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-900 bg-white shadow-sm rounded-md border border-zinc-200 transition-all">All Orders</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all">Pending</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all">Completed</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all">Failed</button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-600 border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
                                Filter
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-600 border border-zinc-200 rounded-md hover:bg-zinc-50 transition-colors">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                                Export
                            </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-50/50 border-b border-zinc-200 text-xs font-medium text-zinc-500 uppercase tracking-wider">
<th className="px-6 py-3 font-medium">Order ID</th>
<th className="px-6 py-3 font-medium">Customer</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Total</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200">

<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-medium text-zinc-900">#ORD-7322</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border border-blue-200"></div>
<span className="text-sm text-zinc-700">Sarah Williams</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm text-zinc-500">Oct 24, 2023</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Completed
                                        </span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium text-zinc-900">$240.00</span>
</td>
<td className="px-6 py-4 text-right relative">
<details className="group/dropdown relative inline-block text-left">
<summary className="inline-flex items-center justify-center w-8 h-8 rounded-md text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 cursor-pointer transition-colors focus:outline-none">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</summary>

<div className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in zoom-in-95 duration-100">
<div className="py-1">
<a className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50" href="#">
<span className="iconify text-zinc-400" data-icon="lucide:eye" data-width="14"></span>
                                                        View Details
                                                    </a>
<a className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50" href="#">
<span className="iconify text-zinc-400" data-icon="lucide:receipt" data-width="14"></span>
                                                        Download Invoice
                                                    </a>
<a className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100/80 border-t border-purple-100" href="#">
<span className="iconify" data-icon="lucide:video" data-width="14"></span>
                                                        View Video Proof
                                                    </a>
</div>
</div>
</details>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-medium text-zinc-900">#ORD-7321</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200"></div>
<span className="text-sm text-zinc-700">Michael Chen</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm text-zinc-500">Oct 24, 2023</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 ring-1 ring-amber-600/20">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                            Pending
                                        </span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium text-zinc-900">$125.50</span>
</td>
<td className="px-6 py-4 text-right relative">
<details className="group/dropdown relative inline-block text-left">
<summary className="inline-flex items-center justify-center w-8 h-8 rounded-md text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 cursor-pointer transition-colors focus:outline-none">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</summary>
<div className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
<div className="py-1">
<a className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-50" href="#">
<span className="iconify text-zinc-400" data-icon="lucide:video" data-width="14"></span>
                                                        View Video Proof
                                                    </a>
</div>
</div>
</details>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-medium text-zinc-900">#ORD-7320</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-100 to-red-200 border border-red-200"></div>
<span className="text-sm text-zinc-700">James Smith</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm text-zinc-500">Oct 23, 2023</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 ring-1 ring-red-600/20">
<span className="iconify" data-icon="lucide:x-circle" data-width="12"></span>
                                            Failed
                                        </span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium text-zinc-900">$89.00</span>
</td>
<td className="px-6 py-4 text-right relative">
<details className="group/dropdown relative inline-block text-left">
<summary className="inline-flex items-center justify-center w-8 h-8 rounded-md text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 cursor-pointer transition-colors focus:outline-none">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</summary>
<div className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
<div className="py-1">
<a className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100/80 border-t border-purple-100" href="#">
<span className="iconify" data-icon="lucide:video" data-width="14"></span>
                                                        View Video Proof
                                                    </a>
</div>
</div>
</details>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-4">
<span className="text-sm font-medium text-zinc-900">#ORD-7319</span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 border border-green-200"></div>
<span className="text-sm text-zinc-700">Emma Davis</span>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm text-zinc-500">Oct 23, 2023</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Completed
                                        </span>
</td>
<td className="px-6 py-4">
<span className="text-sm font-medium text-zinc-900">$1,450.00</span>
</td>
<td className="px-6 py-4 text-right relative">
<details className="group/dropdown relative inline-block text-left">
<summary className="inline-flex items-center justify-center w-8 h-8 rounded-md text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 cursor-pointer transition-colors focus:outline-none">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</summary>
<div className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
<div className="py-1">
<a className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-purple-600 bg-purple-50 hover:bg-purple-100/80 border-t border-purple-100" href="#">
<span className="iconify" data-icon="lucide:video" data-width="14"></span>
                                                        View Video Proof
                                                    </a>
</div>
</div>
</details>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-zinc-200 flex items-center justify-between">
<span className="text-xs text-zinc-500">Showing 1-4 of 1,284 orders</span>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 border border-zinc-200 rounded-md hover:bg-zinc-50 disabled:opacity-50">Previous</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-900 border border-zinc-200 rounded-md hover:bg-zinc-50">Next</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
