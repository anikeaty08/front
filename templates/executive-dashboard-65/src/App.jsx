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
      

<div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="font-semibold text-lg tracking-tight text-slate-900">NEXUS</div>
<button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex h-screen overflow-hidden">

<aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-100 h-full fixed left-0 top-0 z-10">
<div className="p-8 pb-6">
<a className="flex items-center gap-2 text-slate-900 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-medium tracking-tight group-hover:bg-indigo-600 transition-colors">
                        N
                    </div>
<span className="font-semibold text-xl tracking-tight">NEXUS</span>
</a>
</div>
<nav className="flex-1 px-4 space-y-1 mt-4">
<p className="px-4 text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">Platform</p>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-900 bg-slate-50 rounded-xl transition-all shadow-sm ring-1 ring-slate-200/50" href="#">
<iconify-icon height="20" icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all" href="#">
<iconify-icon height="20" icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Performance
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all" href="#">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Team
                    <span className="ml-auto bg-slate-100 text-slate-600 py-0.5 px-2 rounded-md text-xs">4</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all" href="#">
<iconify-icon height="20" icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Inventory
                </a>
<p className="px-4 text-xs font-medium text-slate-400 uppercase tracking-widest mt-8 mb-4">System</p>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all" href="#">
<iconify-icon height="20" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Settings
                </a>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 px-4 py-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-medium">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Jane Doe</p>
<p className="text-xs text-slate-400 truncate">Regional Manager</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto lg:ml-64 p-6 lg:p-10">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
<div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900">Dashboard Overview</h1>
<p className="text-sm text-slate-500 mt-1">Here's what's happening with your store today.</p>
</div>
<div className="flex items-center gap-3">
<div className="relative group">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400 transition-colors group-focus-within:text-slate-600" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-100 focus:border-slate-300 w-full md:w-64 transition-all placeholder:text-slate-400 text-slate-700" placeholder="Search data..." type="text"/>
</div>
<button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all relative">
<div className="w-2 h-2 bg-rose-500 rounded-full absolute top-2 right-2 border-2 border-white"></div>
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<iconify-icon height="24" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                            +12.5%
                            <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
<div className="text-slate-500 text-sm font-medium">Total Revenue</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mt-1">$124,592</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<iconify-icon height="24" icon="solar:bag-3-linear" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                            +8.2%
                            <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
<div className="text-slate-500 text-sm font-medium">Active Orders</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mt-1">1,493</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-50 rounded-lg text-amber-600">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
                            -2.4%
                            <iconify-icon icon="solar:arrow-right-down-linear" width="12"></iconify-icon>
</span>
</div>
<div className="text-slate-500 text-sm font-medium">New Customers</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mt-1">342</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-violet-50 rounded-lg text-violet-600">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                            +4.1%
                            <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
<div className="text-slate-500 text-sm font-medium">Avg Order Value</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mt-1">$84.20</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-base font-semibold text-slate-900">Sales Performance</h3>
<p className="text-xs text-slate-400 mt-1">Revenue trend over the last 12 months</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">Year</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">Month</button>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 h-48 md:h-64 pt-4 border-b border-slate-50">

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[32px] bg-slate-100 h-24 rounded-t-sm group-hover:bg-indigo-500 transition-all duration-500 relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded mb-1 transition-opacity">$24k</div>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase">Jan</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[32px] bg-slate-100 h-32 rounded-t-sm group-hover:bg-indigo-500 transition-all duration-500 relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded mb-1 transition-opacity">$32k</div>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase">Feb</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[32px] bg-slate-100 h-28 rounded-t-sm group-hover:bg-indigo-500 transition-all duration-500 relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded mb-1 transition-opacity">$28k</div>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase">Mar</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[32px] bg-slate-100 h-40 rounded-t-sm group-hover:bg-indigo-500 transition-all duration-500 relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded mb-1 transition-opacity">$40k</div>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase">Apr</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[32px] bg-slate-100 h-36 rounded-t-sm group-hover:bg-indigo-500 transition-all duration-500 relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded mb-1 transition-opacity">$36k</div>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase">May</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[32px] bg-indigo-500 h-52 rounded-t-sm shadow-[0_4px_20px_-2px_rgba(99,102,241,0.4)] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded mb-1">$52k</div>
</div>
<span className="text-[10px] font-medium text-slate-900 uppercase">Jun</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[32px] bg-slate-100 h-44 rounded-t-sm group-hover:bg-indigo-500 transition-all duration-500 relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded mb-1 transition-opacity">$44k</div>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase">Jul</span>
</div>

<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[32px] bg-slate-100 h-48 rounded-t-sm group-hover:bg-indigo-500 transition-all duration-500 relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded mb-1 transition-opacity">$48k</div>
</div>
<span className="text-[10px] font-medium text-slate-400 uppercase">Aug</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-semibold text-slate-900">Approvals</h3>
<span className="bg-amber-50 text-amber-600 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-amber-100">3 Pending</span>
</div>
<div className="space-y-4">

<div className="flex flex-col gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-600">AK</div>
<div>
<p className="text-sm font-medium text-slate-900">Large Purchase</p>
<p className="text-xs text-slate-500">$12,400 • Tech Equipment</p>
</div>
</div>
</div>
<div className="flex gap-2 mt-1">
<button className="flex-1 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors">Approve</button>
<button className="flex-1 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors">Reject</button>
</div>
</div>

<div className="flex flex-col gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-semibold text-emerald-700">SR</div>
<div>
<p className="text-sm font-medium text-slate-900">Refund Request</p>
<p className="text-xs text-slate-500">Order #4922 • Damaged</p>
</div>
</div>
</div>
<div className="flex gap-2 mt-1">
<button className="flex-1 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors">Approve</button>
<button className="flex-1 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors">Reject</button>
</div>
</div>
</div>
<button className="w-full text-center mt-5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">View all requests</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
<h3 className="text-base font-semibold text-slate-900 mb-6">Stock Level</h3>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">Pro Wireless Headphones</span>
<span className="text-slate-500">24/100</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 w-[24%] rounded-full"></div>
</div>
<p className="text-[10px] text-rose-500 mt-1 font-medium">Low Stock Warning</p>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">Smart Home Hub</span>
<span className="text-slate-500">86/100</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[86%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-700">Mechanical Keyboard</span>
<span className="text-slate-500">54/100</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[54%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
<div className="p-6 pb-4 border-b border-slate-50 flex justify-between items-center">
<h3 className="text-base font-semibold text-slate-900">Recent Activity</h3>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">Export</button>
</div>
<div className="flex-1 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs font-medium text-slate-400 border-b border-slate-50">
<th className="px-6 py-3 font-medium">Transaction</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium text-right">Amount</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-slate-50/50 transition-colors border-b border-slate-50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:laptop-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900">Apple MacBook Pro</p>
<p className="text-xs text-slate-400">Electronics</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Completed
                                        </span>
</td>
<td className="px-6 py-4 text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$2,499.00</td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors border-b border-slate-50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:chair-2-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900">Herman Miller Aeron</p>
<p className="text-xs text-slate-400">Furniture</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                            Processing
                                        </span>
</td>
<td className="px-6 py-4 text-slate-500">Oct 23, 2023</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$1,250.00</td>
</tr>
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900">Sony Alpha a7 III</p>
<p className="text-xs text-slate-400">Photography</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Completed
                                        </span>
</td>
<td className="px-6 py-4 text-slate-500">Oct 21, 2023</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$1,998.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="mt-10 text-center">
<p className="text-xs text-slate-400">© 2023 Nexus Inc. All rights reserved.</p>
</div>
</main>
</div>

    </>
  );
}
