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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
<div className="w-full max-w-7xl rounded-[2rem] border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] overflow-hidden">

<header className="flex flex-col gap-4 border-b border-slate-200/70 bg-white/60 px-5 py-4 sm:px-6 lg:px-8 lg:py-5">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-10">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-blue-200/60">
<iconify-icon height="22" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">SALESLY</div>
<div className="text-xs text-slate-400">Management Suite</div>
</div>
</div>
<nav className="hidden md:flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50/80 p-1">
<a className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm" href="#">Dashboard</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-white/80 hover:text-slate-900" href="#">Analytics</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-white/80 hover:text-slate-900" href="#">Reports</a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-white/80 hover:text-slate-900" href="#">Customers</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 text-slate-500 shadow-sm transition hover:text-slate-800">
<iconify-icon height="20" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="hidden sm:flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 text-slate-500 shadow-sm transition hover:text-slate-800">
<iconify-icon height="20" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-3 py-2 shadow-sm">
<div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 overflow-hidden flex items-center justify-center text-slate-600 font-medium">
                JS
              </div>
<div className="hidden sm:block">
<div className="text-sm font-medium text-slate-900">James Smith</div>
<div className="text-xs text-slate-400">Admin</div>
</div>
</div>
</div>
</div>
</header>

<main className="p-5 sm:p-6 lg:p-8">

<section className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
<div>
<p className="text-sm font-medium text-blue-600">Sales Management Dashboard</p>
<h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Overview of business performance</h1>
<p className="mt-2 max-w-2xl text-sm sm:text-base text-slate-500">Track revenue, customer growth, sales trends, and recent orders with a clean executive overview designed for modern teams.</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-white">
<iconify-icon height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              This Month
            </button>
<button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-blue-200/70">
<iconify-icon height="18" icon="solar:download-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Export
            </button>
</div>
</section>

<section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
<div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 p-5 text-white shadow-[0_20px_50px_rgba(59,130,246,0.28)]">
<div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
<div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
<iconify-icon height="24" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-blue-100">Total Sales</p>
<div className="mt-8 text-3xl font-semibold tracking-tight">$128.4K</div>
<div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
<iconify-icon height="16" icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
              +12.8% vs last month
            </div>
</div>
<div className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
<div className="flex items-start justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">+8.2%</span>
</div>
<p className="mt-6 text-sm text-slate-500">New Customers</p>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">1,284</div>
<p className="mt-1 text-xs text-slate-400">Acquired in the last 30 days</p>
</div>
<div className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
<div className="flex items-start justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
<iconify-icon height="24" icon="solar:refresh-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-600">-2.4%</span>
</div>
<p className="mt-6 text-sm text-slate-500">Return Products</p>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">324</div>
<p className="mt-1 text-xs text-slate-400">Lower return rate this cycle</p>
</div>
<div className="rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
<div className="flex items-start justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
<iconify-icon height="24" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">+14.6%</span>
</div>
<p className="mt-6 text-sm text-slate-500">Total Revenue</p>
<div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">$84.2K</div>
<p className="mt-1 text-xs text-slate-400">Across all active sales channels</p>
</div>
</section>

<section className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">

<div className="xl:col-span-2 rounded-[1.75rem] border border-slate-200/70 bg-white/75 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Performance Overview</h2>
<p className="mt-1 text-sm text-slate-500">Monthly sales performance across the current year</p>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-blue-500"></span>Sales</span>
<span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span>Target</span>
</div>
</div>
<div className="mt-8">
<div className="flex h-72 items-end gap-3 sm:gap-4">
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '42%'}}></div>
<span className="text-xs text-slate-400">Jan</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '56%'}}></div>
<span className="text-xs text-slate-400">Feb</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '48%'}}></div>
<span className="text-xs text-slate-400">Mar</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '68%'}}></div>
<span className="text-xs text-slate-400">Apr</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '62%'}}></div>
<span className="text-xs text-slate-400">May</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '76%'}}></div>
<span className="text-xs text-slate-400">Jun</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '70%'}}></div>
<span className="text-xs text-slate-400">Jul</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '82%'}}></div>
<span className="text-xs text-slate-400">Aug</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '66%'}}></div>
<span className="text-xs text-slate-400">Sep</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '88%'}}></div>
<span className="text-xs text-slate-400">Oct</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '74%'}}></div>
<span className="text-xs text-slate-400">Nov</span>
</div>
<div className="flex h-full flex-1 flex-col justify-end items-center gap-3">
<div className="w-full rounded-t-[1rem] bg-gradient-to-t from-blue-600 to-cyan-400 shadow-md" style={{height: '92%'}}></div>
<span className="text-xs text-slate-400">Dec</span>
</div>
</div>
</div>
</div>

<div className="rounded-[1.75rem] border border-slate-200/70 bg-white/75 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Sales Growth</h2>
<p className="mt-1 text-sm text-slate-500">Progress toward quarterly growth target</p>
</div>
<div className="mt-8 flex items-center justify-center">
<div className="relative h-56 w-56">
<svg className="h-full w-full -rotate-90" viewbox="0 0 120 120">
<defs>
<lineargradient id="salesGrowthGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#2563eb"></stop>
<stop offset="100%" stop-color="#22d3ee"></stop>
</lineargradient>
</defs>
<circle cx="60" cy="60" fill="none" r="44" stroke="#e2e8f0" strokeWidth="10"></circle>
<circle cx="60" cy="60" fill="none" r="44" stroke="url(#salesGrowthGradient)" stroke-dasharray="276.46" stroke-dashoffset="72" strokeLinecap="round" strokeWidth="10"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="rounded-full bg-blue-50 p-3 text-blue-600">
<iconify-icon height="24" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">74%</div>
<div className="mt-1 text-xs text-slate-400">Sales Growth</div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-2xl bg-slate-50 p-4">
<p className="text-xs text-slate-400">Target</p>
<p className="mt-1 text-base font-semibold text-slate-900">$150K</p>
</div>
<div className="rounded-2xl bg-blue-50 p-4">
<p className="text-xs text-blue-400">Achieved</p>
<p className="mt-1 text-base font-semibold text-blue-700">$111K</p>
</div>
</div>
</div>
</section>

<section className="mt-6 rounded-[1.75rem] border border-slate-200/70 bg-white/80 p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Recent Orders</h2>
<p className="mt-1 text-sm text-slate-500">Latest transactions across products and categories</p>
</div>
<button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:text-slate-900">
<iconify-icon height="18" icon="solar:filter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
              Filter Orders
            </button>
</div>
<div className="mt-6 overflow-x-auto">
<table className="min-w-full border-separate border-spacing-y-3">
<thead>
<tr className="text-left">
<th className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">Product</th>
<th className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">Order ID</th>
<th className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">Date</th>
<th className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">Customer</th>
<th className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">Category</th>
<th className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">Status</th>
<th className="px-4 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">Amount</th>
</tr>
</thead>
<tbody>
<tr className="bg-slate-50/80 shadow-sm">
<td className="rounded-l-2xl px-4 py-4">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
<iconify-icon height="20" icon="solar:laptop-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">MacBook Pro</div>
<div className="text-xs text-slate-400">High performance laptop</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-sm text-slate-600">#ORD-10248</td>
<td className="px-4 py-4 text-sm text-slate-600">12 Mar 2026</td>
<td className="px-4 py-4 text-sm text-slate-600">Olivia Martin</td>
<td className="px-4 py-4 text-sm text-slate-600">Electronics</td>
<td className="px-4 py-4">
<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">Delivered</span>
</td>
<td className="rounded-r-2xl px-4 py-4 text-sm font-medium text-slate-900">$2,499</td>
</tr>
<tr className="bg-slate-50/80 shadow-sm">
<td className="rounded-l-2xl px-4 py-4">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
<iconify-icon height="20" icon="solar:headphones-round-sound-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Wireless Headphones</div>
<div className="text-xs text-slate-400">Noise cancelling</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-sm text-slate-600">#ORD-10249</td>
<td className="px-4 py-4 text-sm text-slate-600">13 Mar 2026</td>
<td className="px-4 py-4 text-sm text-slate-600">Noah Wilson</td>
<td className="px-4 py-4 text-sm text-slate-600">Audio</td>
<td className="px-4 py-4">
<span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">Pending</span>
</td>
<td className="rounded-r-2xl px-4 py-4 text-sm font-medium text-slate-900">$349</td>
</tr>
<tr className="bg-slate-50/80 shadow-sm">
<td className="rounded-l-2xl px-4 py-4">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
<iconify-icon height="20" icon="solar:smartphone-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Smartphone X</div>
<div className="text-xs text-slate-400">Flagship mobile device</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-sm text-slate-600">#ORD-10250</td>
<td className="px-4 py-4 text-sm text-slate-600">14 Mar 2026</td>
<td className="px-4 py-4 text-sm text-slate-600">Sophia Lee</td>
<td className="px-4 py-4 text-sm text-slate-600">Mobile</td>
<td className="px-4 py-4">
<span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">Shipped</span>
</td>
<td className="rounded-r-2xl px-4 py-4 text-sm font-medium text-slate-900">$999</td>
</tr>
<tr className="bg-slate-50/80 shadow-sm">
<td className="rounded-l-2xl px-4 py-4">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
<iconify-icon height="20" icon="solar:bag-4-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Travel Backpack</div>
<div className="text-xs text-slate-400">Premium carry system</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-sm text-slate-600">#ORD-10251</td>
<td className="px-4 py-4 text-sm text-slate-600">15 Mar 2026</td>
<td className="px-4 py-4 text-sm text-slate-600">Liam Brown</td>
<td className="px-4 py-4 text-sm text-slate-600">Accessories</td>
<td className="px-4 py-4">
<span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">Returned</span>
</td>
<td className="rounded-r-2xl px-4 py-4 text-sm font-medium text-slate-900">$189</td>
</tr>
<tr className="bg-slate-50/80 shadow-sm">
<td className="rounded-l-2xl px-4 py-4">
<div className="flex items-center gap-3">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
<iconify-icon height="20" icon="solar:watch-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Smart Watch</div>
<div className="text-xs text-slate-400">Fitness edition</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-sm text-slate-600">#ORD-10252</td>
<td className="px-4 py-4 text-sm text-slate-600">16 Mar 2026</td>
<td className="px-4 py-4 text-sm text-slate-600">Emma Davis</td>
<td className="px-4 py-4 text-sm text-slate-600">Wearables</td>
<td className="px-4 py-4">
<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600">Delivered</span>
</td>
<td className="rounded-r-2xl px-4 py-4 text-sm font-medium text-slate-900">$429</td>
</tr>
</tbody>
</table>
</div>
</section>
</main>
</div>
</div>

    </>
  );
}
