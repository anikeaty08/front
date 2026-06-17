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
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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

<aside className="hidden lg:flex w-72 flex-col border-r border-white/10 bg-[#0b0f19]">
<div className="px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">IN</span>
</div>
<div className="flex flex-col">
<span className="text-sm text-zinc-300">Inventory</span>
<span className="text-xs text-zinc-500 -mt-1">Analytics</span>
</div>
</div>
<button aria-label="Collapse" className="h-8 w-8 rounded-md hover:bg-white/5 border border-white/10 flex items-center justify-center transition-colors">
<i className="w-4 h-4" data-lucide="chevrons-left" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<nav className="px-3 py-2 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-100" href="#">
<i className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" data-lucide="layout-dashboard" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition-all" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" data-lucide="boxes" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Inventory</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition-all" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" data-lucide="warehouse" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Warehousing</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition-all" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" data-lucide="shopping-cart" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Orders</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition-all" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" data-lucide="truck" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Suppliers</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition-all" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Reports</span>
</a>
<div className="pt-2 mt-2 border-t border-white/10"></div>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10 transition-all" href="#">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm">Settings</span>
</a>
</nav>
<div className="mt-auto p-4">
<div className="p-3 rounded-lg bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10">
<div className="flex items-center gap-3">
<img alt="User" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-medium truncate">Jordan Patel</div>
<div className="text-xs text-zinc-500">Ops Manager</div>
</div>
<button className="ml-auto h-8 w-8 rounded-md hover:bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="log-out" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col">

<header className="sticky top-0 z-30 bg-[#0b0f19]/80 backdrop-blur border-b border-white/10">
<div className="px-4 lg:px-8 py-4 flex items-center gap-3">
<div className="lg:hidden">
<button className="h-9 w-9 rounded-md hover:bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="panel-left" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex-1 flex items-center gap-3">
<h1 className="text-xl md:text-2xl font-semibold tracking-tight">Inventory &amp; Warehousing</h1>
<span className="hidden md:inline-flex text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">Live</span>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
<input className="pl-9 pr-3 h-9 w-64 rounded-md bg-white/5 border border-white/10 placeholder:text-zinc-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40" placeholder="Search SKUs, PO, DN..." type="text"/>
</div>
<button className="h-9 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
                Last 30 days
                <i className="w-4 h-4 opacity-70" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="h-9 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
                Export
              </button>
</div>
</div>
<div className="px-4 lg:px-8 pb-4">
<div className="flex flex-wrap gap-2">
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i>
                All Warehouses
                <i className="w-4 h-4 opacity-70" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="tag" style={{strokeWidth: '1.5'}}></i>
                All Categories
                <i className="w-4 h-4 opacity-70" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="filter" style={{strokeWidth: '1.5'}}></i>
                Filters
              </button>
</div>
</div>
</header>

<section className="px-4 lg:px-8 py-6 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
<div className="flex items-start justify-between">
<div>
<div className="text-sm text-zinc-400">Current Stock Valuation</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">$4.82M</div>
</div>
<div className="h-9 w-9 rounded-md bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-indigo-300" data-lucide="wallet" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">By Cost</div>
<div className="text-sm font-medium">$3.15M</div>
</div>
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">By Retail</div>
<div className="text-sm font-medium">$4.82M</div>
</div>
</div>
<div className="mt-4">
<div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-cyan-400"></div>
</div>
<div className="mt-2 flex items-center gap-2 text-xs text-zinc-500">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="arrow-up-right" style={{strokeWidth: '1.5'}}></i>
                  +4.2% vs last period
                </div>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
<div className="flex items-start justify-between">
<div>
<div className="text-sm text-zinc-400">Stock Coverage</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">36 days</div>
</div>
<div className="h-9 w-9 rounded-md bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-cyan-300" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between text-xs text-zinc-500">
<span>Runway</span>
<span>Target: 45d</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/[0.06]">
<div className="h-2 rounded-full bg-cyan-400" style={{width: '80%'}}></div>
</div>
<div className="mt-2 text-xs text-amber-300/90">Slightly below target</div>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
<div className="flex items-start justify-between">
<div>
<div className="text-sm text-zinc-400">Stock Alerts</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">78</div>
</div>
<div className="h-9 w-9 rounded-md bg-amber-500/10 border border-amber-400/20 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-amber-300" data-lucide="alert-triangle" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Below Reorder</div>
<div className="text-sm font-medium text-rose-300">54</div>
</div>
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Overstocked</div>
<div className="text-sm font-medium text-emerald-300">24</div>
</div>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/[0.06] overflow-hidden">
<div className="h-full bg-rose-400" style={{width: '69%'}}></div>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
<div className="flex items-start justify-between">
<div>
<div className="text-sm text-zinc-400">Inventory Adjustments</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">112</div>
</div>
<div className="h-9 w-9 rounded-md bg-fuchsia-500/10 border border-fuchsia-400/20 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-fuchsia-300" data-lucide="scales" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Increases</div>
<div className="text-sm font-medium text-emerald-300">68</div>
</div>
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Decreases</div>
<div className="text-sm font-medium text-rose-300">44</div>
</div>
</div>
<div className="mt-3 flex gap-1 h-14 items-end">
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-emerald-400 rounded-sm" style={{height: '50%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-emerald-400 rounded-sm" style={{height: '70%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-rose-400 rounded-sm" style={{height: '35%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-emerald-400 rounded-sm" style={{height: '80%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-rose-400 rounded-sm" style={{height: '45%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-emerald-400 rounded-sm" style={{height: '60%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-rose-400 rounded-sm" style={{height: '30%'}}></div></div>
</div>
<div className="mt-2 text-xs text-zinc-500">Last 7 days</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<div className="xl:col-span-2 p-4 rounded-lg bg-white/5 border border-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-zinc-400">Top Moving Items</div>
<h2 className="mt-1 text-lg md:text-xl font-semibold tracking-tight">Best-selling SKUs by qty/value</h2>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="list-filter" style={{strokeWidth: '1.5'}}></i>
                    All
                  </button>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
                    By Category
                  </button>
</div>
</div>
<div className="mt-4 overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-zinc-400 border-b border-white/10">
<th className="text-left font-medium py-2">SKU</th>
<th className="text-left font-medium py-2">Name</th>
<th className="text-right font-medium py-2">Qty</th>
<th className="text-right font-medium py-2">Value</th>
<th className="text-left font-medium py-2">Velocity</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3 text-zinc-300">SKU-8821</td>
<td className="py-2 pr-3">Wireless Headset Pro</td>
<td className="py-2 pr-3 text-right font-medium">12,340</td>
<td className="py-2 pr-3 text-right font-medium">$493k</td>
<td className="py-2">
<div className="h-2 w-48 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-indigo-400" style={{width: '88%'}}></div>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3 text-zinc-300">SKU-7310</td>
<td className="py-2 pr-3">Smartwatch X2</td>
<td className="py-2 pr-3 text-right font-medium">9,805</td>
<td className="py-2 pr-3 text-right font-medium">$392k</td>
<td className="py-2">
<div className="h-2 w-48 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-indigo-400" style={{width: '74%'}}></div>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3 text-zinc-300">SKU-4655</td>
<td className="py-2 pr-3">4K Action Cam</td>
<td className="py-2 pr-3 text-right font-medium">7,410</td>
<td className="py-2 pr-3 text-right font-medium">$276k</td>
<td className="py-2">
<div className="h-2 w-48 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-indigo-400" style={{width: '63%'}}></div>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3 text-zinc-300">SKU-1198</td>
<td className="py-2 pr-3">Portable Speaker</td>
<td className="py-2 pr-3 text-right font-medium">6,280</td>
<td className="py-2 pr-3 text-right font-medium">$159k</td>
<td className="py-2">
<div className="h-2 w-48 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-indigo-400" style={{width: '52%'}}></div>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3 text-zinc-300">SKU-2234</td>
<td className="py-2 pr-3">USB-C Hub Max</td>
<td className="py-2 pr-3 text-right font-medium">5,940</td>
<td className="py-2 pr-3 text-right font-medium">$121k</td>
<td className="py-2">
<div className="h-2 w-48 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-indigo-400" style={{width: '46%'}}></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-zinc-400">Slow/Dead Stock</div>
<h2 className="mt-1 text-lg md:text-xl font-semibold tracking-tight">Zero movement in X months</h2>
</div>
<div className="flex items-center gap-1 p-1 rounded-md bg-white/5 border border-white/10">
<button className="h-8 px-2.5 rounded-md bg-white/10 text-xs">3M</button>
<button className="h-8 px-2.5 rounded-md hover:bg-white/10 text-xs">6M</button>
<button className="h-8 px-2.5 rounded-md hover:bg-white/10 text-xs">12M</button>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 p-3 rounded-md bg-white/5 border border-white/10 hover:border-white/20">
<div className="h-9 w-9 rounded-md bg-rose-500/10 border border-rose-400/20 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-rose-300" data-lucide="archive-x" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium truncate">SKU-0981 • VR Headset Gen1</div>
<div className="text-xs text-zinc-500">No movement for 5.4 months</div>
</div>
<div className="ml-auto text-sm text-zinc-300">$38.2k tied up</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-md bg-white/5 border border-white/10 hover:border-white/20">
<div className="h-9 w-9 rounded-md bg-rose-500/10 border border-rose-400/20 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-rose-300" data-lucide="archive-x" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium truncate">SKU-5120 • HDMI Cable 1.4</div>
<div className="text-xs text-zinc-500">No movement for 7.9 months</div>
</div>
<div className="ml-auto text-sm text-zinc-300">$9.7k tied up</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-md bg-white/5 border border-white/10 hover:border-white/20">
<div className="h-9 w-9 rounded-md bg-rose-500/10 border border-rose-400/20 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-rose-300" data-lucide="archive-x" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium truncate">SKU-7401 • Classic Mouse</div>
<div className="text-xs text-zinc-500">No movement for 6.1 months</div>
</div>
<div className="ml-auto text-sm text-zinc-300">$4.3k tied up</div>
</div>
</div>
<div className="mt-4 text-xs text-zinc-500 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="info" style={{strokeWidth: '1.5'}}></i>
                Based on last outbound transaction date.
              </div>
</div>
</div>

<div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">

<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-zinc-400">Stock Alerts</div>
<h2 className="mt-1 text-lg md:text-xl font-semibold tracking-tight">Items below reorder / overstocked</h2>
</div>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="bell" style={{strokeWidth: '1.5'}}></i>
                  Manage
                </button>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
<div className="rounded-md border border-white/10 p-3">
<div className="flex items-center gap-2 text-sm font-medium text-rose-300">
<i className="w-4 h-4" data-lucide="trending-down" style={{strokeWidth: '1.5'}}></i> Below Reorder (54)
                  </div>
<div className="mt-3 space-y-2">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 w-24">SKU-3110</span>
<div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-rose-400" style={{width: '18%'}}></div>
</div>
<span className="text-xs w-12 text-right">18%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 w-24">SKU-5023</span>
<div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-rose-400" style={{width: '25%'}}></div>
</div>
<span className="text-xs w-12 text-right">25%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 w-24">SKU-9022</span>
<div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-rose-400" style={{width: '10%'}}></div>
</div>
<span className="text-xs w-12 text-right">10%</span>
</div>
</div>
</div>
<div className="rounded-md border border-white/10 p-3">
<div className="flex items-center gap-2 text-sm font-medium text-emerald-300">
<i className="w-4 h-4" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i> Overstocked (24)
                  </div>
<div className="mt-3 space-y-2">
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 w-24">SKU-1102</span>
<div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '140%'}}></div>
</div>
<span className="text-xs w-12 text-right">140%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 w-24">SKU-7710</span>
<div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '170%'}}></div>
</div>
<span className="text-xs w-12 text-right">170%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 w-24">SKU-3329</span>
<div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '120%'}}></div>
</div>
<span className="text-xs w-12 text-right">120%</span>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-zinc-400">Delivery Notes (DN)</div>
<h2 className="mt-1 text-lg md:text-xl font-semibold tracking-tight">Pending vs Fulfilled</h2>
</div>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="file-text" style={{strokeWidth: '1.5'}}></i>
                  View DNs
                </button>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Pending DN</div>
<div className="text-lg font-semibold tracking-tight">37</div>
</div>
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Partially / Fully Delivered</div>
<div className="text-lg font-semibold tracking-tight">14 / 96</div>
</div>
</div>
<div className="mt-4">
<div className="h-2 w-full rounded-full bg-white/[0.06] overflow-hidden flex">
<div className="h-full bg-amber-400" style={{width: '22%'}}></div>
<div className="h-full bg-indigo-400" style={{width: '16%'}}></div>
<div className="h-full bg-emerald-400 flex-1"></div>
</div>
<div className="mt-2 text-xs text-zinc-500 flex items-center justify-between">
<span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400"></span> Pending</span>
<span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-400"></span> Partial</span>
<span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"></span> Full</span>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>Oldest pending DN</span><span className="text-zinc-300">DN-20418 • 9 days</span>
</div>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>Avg. fulfillment time</span><span className="text-zinc-300">2.1 days</span>
</div>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-zinc-400">Goods Receipts (GR)</div>
<h2 className="mt-1 text-lg md:text-xl font-semibold tracking-tight">PO Receipts &amp; Throughput</h2>
</div>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="package-plus" style={{strokeWidth: '1.5'}}></i>
                  New GR
                </button>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Pending from POs</div>
<div className="text-lg font-semibold tracking-tight">23</div>
</div>
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Received Today</div>
<div className="text-lg font-semibold tracking-tight text-emerald-300">7</div>
</div>
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">This Week</div>
<div className="text-lg font-semibold tracking-tight text-emerald-300">32</div>
</div>
</div>
<div className="mt-4 flex gap-1 h-20 items-end">
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-indigo-400 rounded-sm" style={{height: '40%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-indigo-400 rounded-sm" style={{height: '55%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-emerald-400 rounded-sm" style={{height: '65%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-emerald-400 rounded-sm" style={{height: '70%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-emerald-400 rounded-sm" style={{height: '60%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-indigo-400 rounded-sm" style={{height: '45%'}}></div></div>
<div className="flex-1 bg-white/[0.06] rounded-sm"><div className="w-full bg-emerald-400 rounded-sm" style={{height: '80%'}}></div></div>
</div>
<div className="mt-2 text-xs text-zinc-500">Daily receipts over last 7 days</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-zinc-400">Goods Receipts</div>
<h2 className="mt-1 text-lg md:text-xl font-semibold tracking-tight">Pending GRs from Purchase Orders</h2>
</div>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="filter" style={{strokeWidth: '1.5'}}></i>
                  Filter
                </button>
</div>
<div className="mt-4 overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-zinc-400 border-b border-white/10">
<th className="text-left font-medium py-2">PO</th>
<th className="text-left font-medium py-2">Supplier</th>
<th className="text-right font-medium py-2">Lines</th>
<th className="text-right font-medium py-2">Due</th>
<th className="text-right font-medium py-2">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3">PO-11820</td>
<td className="py-2 pr-3">TechSource Ltd</td>
<td className="py-2 pr-3 text-right">12</td>
<td className="py-2 pr-3 text-right">Oct 18</td>
<td className="py-2 pr-3 text-right">
<span className="text-xs px-2 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-400/20">Pending</span>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3">PO-11847</td>
<td className="py-2 pr-3">Nova Components</td>
<td className="py-2 pr-3 text-right">6</td>
<td className="py-2 pr-3 text-right">Oct 20</td>
<td className="py-2 pr-3 text-right">
<span className="text-xs px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-400/20">Partially</span>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3">PO-11859</td>
<td className="py-2 pr-3">Zenith Traders</td>
<td className="py-2 pr-3 text-right">9</td>
<td className="py-2 pr-3 text-right">Oct 22</td>
<td className="py-2 pr-3 text-right">
<span className="text-xs px-2 py-1 rounded-md bg-rose-500/10 text-rose-300 border border-rose-400/20">Overdue</span>
</td>
</tr>
<tr className="hover:bg-white/[0.03]">
<td className="py-2 pr-3">PO-11863</td>
<td className="py-2 pr-3">Bright Electronics</td>
<td className="py-2 pr-3 text-right">4</td>
<td className="py-2 pr-3 text-right">Oct 24</td>
<td className="py-2 pr-3 text-right">
<span className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">Ready</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="p-4 rounded-lg bg-white/5 border border-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-zinc-400">Delivery Notes</div>
<h2 className="mt-1 text-lg md:text-xl font-semibold tracking-tight">Partially vs Fully Delivered</h2>
</div>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="refresh-ccw" style={{strokeWidth: '1.5'}}></i>
                  Sync
                </button>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Pending</div>
<div className="text-lg font-semibold tracking-tight text-amber-300">37</div>
</div>
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Partial</div>
<div className="text-lg font-semibold tracking-tight text-indigo-300">14</div>
</div>
<div className="p-3 rounded-md bg-white/5 border border-white/10">
<div className="text-[11px] text-zinc-500">Full</div>
<div className="text-lg font-semibold tracking-tight text-emerald-300">96</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-md border border-white/10 p-3">
<div className="text-xs text-zinc-500">Top pending DN</div>
<div className="mt-1 text-sm font-medium">DN-20418 • 9 days</div>
<div className="mt-2 h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-amber-400" style={{width: '76%'}}></div>
</div>
</div>
<div className="rounded-md border border-white/10 p-3">
<div className="text-xs text-zinc-500">On-time delivery rate</div>
<div className="mt-1 text-sm font-medium">92%</div>
<div className="mt-2 h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: '92%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="pt-2 mt-2 border-t border-white/10 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
              Data refreshed 2 min ago
            </div>
<div className="flex items-center gap-3">
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="history" style={{strokeWidth: '1.5'}}></i>
                Change Log
              </button>
<button className="h-8 px-3 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 text-xs flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sliders-horizontal" style={{strokeWidth: '1.5'}}></i>
                Configure
              </button>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
