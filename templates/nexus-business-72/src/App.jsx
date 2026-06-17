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
      

<aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-800 bg-black/40 flex-shrink-0 flex flex-col h-auto md:h-screen z-20">
<div className="h-14 flex items-center px-6 border-b border-zinc-800/50">
<div className="flex items-center gap-2 text-zinc-100">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-black rounded-full"></div>
</div>
<span className="font-semibold tracking-tight text-sm">NEXUS</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
<div className="px-3 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-100 bg-zinc-800/50 rounded-md group transition-all" href="#">
<span className="iconify" data-icon="lucide:layout-dashboard" data-inline="false" data-width="16"></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-all" href="#">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="16"></span>
                Orders
                <span className="ml-auto text-xs bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded border border-zinc-700">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-all" href="#">
<span className="iconify" data-icon="lucide:package" data-width="16"></span>
                Products
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-all" href="#">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
                Customers
            </a>
<div className="px-3 mt-6 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Management</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-all" href="#">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="16"></span>
                Analytics
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 rounded-md transition-all" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="16"></span>
                Settings
            </a>
</nav>
<div className="p-4 border-t border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-500 flex items-center justify-center text-xs text-white font-medium">AB</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">Admin User</span>
<span className="text-xs text-zinc-500">admin@nexus.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#09090b]">

<header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Business</span>
<span className="iconify text-zinc-600" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-zinc-100 font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 rounded-md">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
                    Oct 24, 2023
                </button>
<div className="relative">
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#09090b]"></span>
<span className="iconify text-zinc-400 hover:text-white cursor-pointer transition-colors" data-icon="lucide:bell" data-width="18"></span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold text-zinc-100 tracking-tight">Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your inventory, track sales, and view reports.</p>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-all">Export</button>
<button className="text-sm font-medium text-black bg-white hover:bg-zinc-200 px-4 py-2 rounded-lg shadow-lg shadow-zinc-900/20 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                        Add Product
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="18"></span>
</div>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                            +12.5% <span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span>
</span>
</div>
<div className="text-zinc-500 text-xs font-medium mb-1">Total Revenue</div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">$42,389.00</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<span className="iconify" data-icon="lucide:shopping-cart" data-width="18"></span>
</div>
<span className="text-xs font-medium text-zinc-500">Today</span>
</div>
<div className="text-zinc-500 text-xs font-medium mb-1">Products Sold</div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">142</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<span className="iconify" data-icon="lucide:box" data-width="18"></span>
</div>
<span className="text-xs font-medium text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded-full">Low Stock</span>
</div>
<div className="text-zinc-500 text-xs font-medium mb-1">Inventory Alert</div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">8 Items</div>
</div>

<div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
</div>
</div>
<div className="text-zinc-500 text-xs font-medium mb-1">Active Customers</div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">1,203</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 flex flex-col gap-6">

<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="w-full bg-transparent border border-zinc-800 rounded-lg py-2 pl-10 pr-4 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600 transition-colors" placeholder="Search products, orders..." type="text"/>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 border border-zinc-800 rounded-lg bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all flex items-center gap-2 text-sm">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span> Filter
                            </button>
<button className="px-3 py-2 border border-zinc-800 rounded-lg bg-zinc-900/30 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-all flex items-center gap-2 text-sm">
<span className="iconify" data-icon="lucide:arrow-up-down" data-width="14"></span> Sort
                            </button>
</div>
</div>

<div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/20">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800/80 bg-zinc-900/50">
<th className="py-3 px-4 w-10"><input className="custom-checkbox" type="checkbox"/></th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Product Name</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Stock</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Sold</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Price</th>
<th className="py-3 px-4 w-10"></th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-zinc-800/50">

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="py-3 px-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<span className="iconify text-zinc-500" data-icon="lucide:image" data-width="14"></span>
</div>
<div>
<div className="font-medium text-zinc-200">Wireless Headphones</div>
<div className="text-xs text-zinc-600">Electronics</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> In Stock
                                            </span>
</td>
<td className="py-3 px-4 text-right font-medium text-zinc-400">124</td>
<td className="py-3 px-4 text-right font-medium text-zinc-400">850</td>
<td className="py-3 px-4 text-right text-zinc-200">$129.00</td>
<td className="py-3 px-4 text-center">
<button className="text-zinc-600 hover:text-zinc-300 transition-colors"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</td>
</tr>

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="py-3 px-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<span className="iconify text-zinc-500" data-icon="lucide:shirt" data-width="14"></span>
</div>
<div>
<div className="font-medium text-zinc-200">Cotton T-Shirt</div>
<div className="text-xs text-zinc-600">Apparel</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span> Low Stock
                                            </span>
</td>
<td className="py-3 px-4 text-right font-medium text-zinc-400">12</td>
<td className="py-3 px-4 text-right font-medium text-zinc-400">1,240</td>
<td className="py-3 px-4 text-right text-zinc-200">$25.00</td>
<td className="py-3 px-4 text-center">
<button className="text-zinc-600 hover:text-zinc-300 transition-colors"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</td>
</tr>

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="py-3 px-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<span className="iconify text-zinc-500" data-icon="lucide:watch" data-width="14"></span>
</div>
<div>
<div className="font-medium text-zinc-200">Smart Watch Series 5</div>
<div className="text-xs text-zinc-600">Electronics</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Out of Stock
                                            </span>
</td>
<td className="py-3 px-4 text-right font-medium text-zinc-400">0</td>
<td className="py-3 px-4 text-right font-medium text-zinc-400">320</td>
<td className="py-3 px-4 text-right text-zinc-200">$399.00</td>
<td className="py-3 px-4 text-center">
<button className="text-zinc-600 hover:text-zinc-300 transition-colors"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</td>
</tr>

<tr className="group hover:bg-zinc-900/50 transition-colors">
<td className="py-3 px-4"><input className="custom-checkbox" type="checkbox"/></td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<span className="iconify text-zinc-500" data-icon="lucide:coffee" data-width="14"></span>
</div>
<div>
<div className="font-medium text-zinc-200">Ceramic Coffee Mug</div>
<div className="text-xs text-zinc-600">Home</div>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> In Stock
                                            </span>
</td>
<td className="py-3 px-4 text-right font-medium text-zinc-400">430</td>
<td className="py-3 px-4 text-right font-medium text-zinc-400">45</td>
<td className="py-3 px-4 text-right text-zinc-200">$18.00</td>
<td className="py-3 px-4 text-center">
<button className="text-zinc-600 hover:text-zinc-300 transition-colors"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-4 py-3 border-t border-zinc-800 bg-zinc-900/30 flex items-center justify-between">
<span className="text-xs text-zinc-500">Showing 4 of 24 products</span>
<div className="flex gap-1">
<button className="p-1 rounded text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 disabled:opacity-50"><span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span></button>
<button className="p-1 rounded text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800"><span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span></button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/20">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-200">Daily Sales Activity</h3>
<button className="text-zinc-500 hover:text-zinc-300"><span className="iconify" data-icon="lucide:more-vertical" data-width="16"></span></button>
</div>
<div className="flex items-end justify-between h-32 gap-2">

<div className="w-full bg-zinc-800/50 rounded-sm relative group h-[40%] hover:bg-zinc-700 transition-colors cursor-pointer">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded border border-zinc-700 whitespace-nowrap z-10">40 Sold</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-sm relative group h-[65%] hover:bg-zinc-700 transition-colors cursor-pointer">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded border border-zinc-700 whitespace-nowrap z-10">65 Sold</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-sm relative group h-[45%] hover:bg-zinc-700 transition-colors cursor-pointer"></div>
<div className="w-full bg-zinc-800/50 rounded-sm relative group h-[90%] hover:bg-zinc-700 transition-colors cursor-pointer"></div>
<div className="w-full bg-white rounded-sm relative group h-[70%] shadow-[0_0_10px_rgba(255,255,255,0.2)] cursor-pointer">
<div className="opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black font-semibold text-[10px] px-2 py-1 rounded whitespace-nowrap z-10">Today</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-sm relative group h-[50%] hover:bg-zinc-700 transition-colors cursor-pointer"></div>
<div className="w-full bg-zinc-800/50 rounded-sm relative group h-[60%] hover:bg-zinc-700 transition-colors cursor-pointer"></div>
</div>
<div className="flex justify-between mt-3 text-[10px] text-zinc-600 uppercase font-medium tracking-wide">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span className="text-zinc-200">Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="p-5 border border-zinc-800 rounded-xl bg-zinc-900/20">
<h3 className="text-sm font-medium text-zinc-200 mb-4 flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:edit-3" data-width="14"></span>
                            Quick Update
                        </h3>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Product Name</label>
<input className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-300 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-800 transition-all" type="text" value="Wireless Headphones"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Price ($)</label>
<input className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-300 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-800 transition-all" type="number" value="129.00"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Stock Left</label>
<input className="w-full bg-black/40 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-300 focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-800 transition-all" type="number" value="124"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Status</label>
<div className="flex gap-2">
<label className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-700 bg-zinc-800 text-xs text-zinc-200">
<input checked="" className="accent-white" name="status" type="radio"/> In Stock
                                    </label>
<label className="cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded border border-zinc-800 hover:border-zinc-700 bg-transparent text-xs text-zinc-500">
<input className="accent-white" name="status" type="radio"/> Low
                                    </label>
</div>
</div>
<button className="w-full mt-2 bg-white text-black text-sm font-medium py-2 rounded-md hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">Update Product</button>
</form>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
