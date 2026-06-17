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
      
<div className="min-h-screen flex" id="app">

<aside className="hidden lg:flex lg:flex-col w-72 border-r border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="flex items-center gap-3 px-5 h-16 border-b border-slate-200">
<div className="h-8 w-8 rounded-md bg-green-700 text-white flex items-center justify-center text-sm tracking-tight font-semibold">SM</div>
<div>
<p className="text-slate-900 text-[15px] tracking-tight font-medium">Sales Magics</p>
<p className="text-slate-500 text-xs">Grow and convert, elegantly</p>
</div>
</div>
<nav className="flex-1 overflow-y-auto">
<div className="px-4 py-4">
<p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Core</p>
<ul className="space-y-1">
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="dashboard">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span className="text-sm">Dashboard</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="collections">
<i className="h-4 w-4" data-lucide="boxes"></i>
<span className="text-sm">Collections</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="payment-links">
<i className="h-4 w-4" data-lucide="link"></i>
<span className="text-sm">Payment Links</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="qtc">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span className="text-sm">QTC Billing</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="funnel">
<i className="h-4 w-4" data-lucide="workflow"></i>
<span className="text-sm">Funnel</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="customers">
<i className="h-4 w-4" data-lucide="users"></i>
<span className="text-sm">Customers</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="reports">
<i className="h-4 w-4" data-lucide="bar-chart-3"></i>
<span className="text-sm">Reports</span>
</button>
</li>
</ul>
</div>
<div className="px-4 pt-2 pb-4">
<p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Grow Magics</p>
<ul className="space-y-1">
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="communities">
<i className="h-4 w-4" data-lucide="users2"></i>
<span className="text-sm">Communities</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="events">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span className="text-sm">Events</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="content">
<i className="h-4 w-4" data-lucide="file-plus"></i>
<span className="text-sm">Content</span>
</button>
</li>
<li>
<button className="nav-btn w-full px-3 py-2 rounded-md flex items-center gap-3 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" data-route="monetization">
<i className="h-4 w-4" data-lucide="wallet"></i>
<span className="text-sm">Monetization</span>
</button>
</li>
</ul>
</div>
</nav>
<div className="px-4 py-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="truncate text-sm font-medium tracking-tight text-slate-900">Ava Patel</p>
<p className="truncate text-xs text-slate-500">ava@salesmagics.app</p>
</div>
<button className="ml-auto p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20">
<i className="h-4 w-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<div className="flex-1 min-w-0 flex flex-col">

<header className="flex items-center gap-3 px-4 sm:px-6 h-16 border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<button className="lg:hidden p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="panel-left-open"></i>
</button>
<div className="flex-1 flex items-center gap-3">
<div className="relative flex-1 max-w-xl">
<i className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-700" placeholder="Search customers, orders, campaigns..." type="search"/>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600/20">
<span className="hidden sm:inline">Create</span>
<span className="sm:hidden">New</span>
</button>
<button className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20 relative">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-green-700 rounded-full ring-2 ring-white"></span>
</button>
<button className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-green-600/20" id="userMenuBtn">
<i className="h-5 w-5" data-lucide="ellipsis-vertical"></i>
</button>
</div>
</div>

<div className="hidden absolute right-4 top-14 z-20 w-56 rounded-md border border-slate-200 bg-white shadow-lg" id="userMenu">
<div className="py-2">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-100 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="user"></i> Profile
              </button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-100 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="settings"></i> Settings
              </button>
<div className="my-2 border-t border-slate-200"></div>
<button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="log-out"></i> Log out
              </button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">
<div className="px-4 sm:px-6 py-6 space-y-8">

<section className="space-y-6" data-page="dashboard">
<div className="flex items-start justify-between gap-4">
<div>
<h1 className="text-[22px] sm:text-2xl tracking-tight text-slate-900 font-semibold">Welcome back, Ava</h1>
<p className="text-slate-500 text-sm">Login → Dashboard → Quick Actions / Analytics / Notifications</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">This Week</button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Custom Range</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
<button className="group flex items-center gap-3 px-4 py-3 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 transition">
<i className="h-4 w-4 text-green-700" data-lucide="megaphone"></i>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 tracking-tight">Create Campaign</p>
<p className="text-xs text-slate-500">Discount, Coupon, Flash Sale</p>
</div>
</button>
<button className="group flex items-center gap-3 px-4 py-3 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 transition" data-route="payment-links">
<i className="h-4 w-4 text-green-700" data-lucide="link-2"></i>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 tracking-tight">Generate Payment Link</p>
<p className="text-xs text-slate-500">Share via Copy/WhatsApp/Email</p>
</div>
</button>
<button className="group flex items-center gap-3 px-4 py-3 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 transition" data-route="funnel">
<i className="h-4 w-4 text-green-700" data-lucide="workflow"></i>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 tracking-tight">Add Funnel</p>
<p className="text-xs text-slate-500">Sales, Upsell, Order Bump</p>
</div>
</button>
<button className="group flex items-center gap-3 px-4 py-3 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 transition" data-route="collections">
<i className="h-4 w-4 text-green-700" data-lucide="package-plus"></i>
<div className="text-left">
<p className="text-sm font-medium text-slate-900 tracking-tight">Add Product</p>
<p className="text-xs text-slate-500">Catalogue, Pricing, Images</p>
</div>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-500">Revenue</p>
<i className="h-4 w-4 text-green-700" data-lucide="banknote"></i>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-[22px] tracking-tight font-semibold text-slate-900 tabular-nums">$124,920</p>
<span className="text-xs text-green-700">+12.4%</span>
</div>
<div className="mt-3 h-14 rounded bg-green-50/60 border border-green-100 flex items-end gap-0.5 p-1">
<div className="h-6 w-2 bg-green-600/70 rounded"></div>
<div className="h-10 w-2 bg-green-600/80 rounded"></div>
<div className="h-8 w-2 bg-green-600/60 rounded"></div>
<div className="h-12 w-2 bg-green-700 rounded"></div>
<div className="h-7 w-2 bg-green-600/60 rounded"></div>
<div className="h-5 w-2 bg-green-600/50 rounded"></div>
<div className="h-10 w-2 bg-green-600/80 rounded"></div>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-500">Orders</p>
<i className="h-4 w-4 text-green-700" data-lucide="shopping-bag"></i>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-[22px] tracking-tight font-semibold text-slate-900 tabular-nums">2,481</p>
<span className="text-xs text-green-700">+6.2%</span>
</div>
<div className="mt-3 h-14 rounded bg-slate-50 border border-slate-100 flex items-end gap-0.5 p-1">
<div className="h-4 w-2 bg-slate-300 rounded"></div>
<div className="h-8 w-2 bg-slate-400 rounded"></div>
<div className="h-6 w-2 bg-slate-300 rounded"></div>
<div className="h-10 w-2 bg-slate-400 rounded"></div>
<div className="h-7 w-2 bg-slate-300 rounded"></div>
<div className="h-5 w-2 bg-slate-300 rounded"></div>
<div className="h-9 w-2 bg-slate-400 rounded"></div>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-500">Conversion Rate</p>
<i className="h-4 w-4 text-green-700" data-lucide="target"></i>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-[22px] tracking-tight font-semibold text-slate-900 tabular-nums">3.72%</p>
<span className="text-xs text-green-700">+0.3%</span>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="flex-1 h-2 rounded bg-slate-100 overflow-hidden">
<div className="h-full w-[37%] bg-green-600"></div>
</div>
<span className="text-xs text-slate-500">Goal 5%</span>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-500">Refunds</p>
<i className="h-4 w-4 text-green-700" data-lucide="rotate-ccw"></i>
</div>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-[22px] tracking-tight font-semibold text-slate-900 tabular-nums">$1,380</p>
<span className="text-xs text-amber-600">-0.4%</span>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="flex-1 h-2 rounded bg-slate-100 overflow-hidden">
<div className="h-full w-[9%] bg-amber-500"></div>
</div>
<span className="text-xs text-slate-500">Under 2%</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="xl:col-span-2 rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Revenue &amp; Orders</h3>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">7d</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">30d</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">90d</button>
</div>
</div>
<p className="text-xs text-slate-500 mt-1">Trend of gross revenue vs. order count</p>
<div className="mt-3">
<div className="rounded-md border border-slate-100">
<div className="h-64"><canvas id="revOrdersChart"></canvas></div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Notifications</h3>
<span className="text-xs text-slate-500">3 new</span>
</div>
<ul className="mt-3 divide-y divide-slate-200">
<li className="py-3 flex items-start gap-3">
<i className="h-4 w-4 text-green-700 mt-0.5" data-lucide="zap"></i>
<div className="min-w-0">
<p className="text-sm text-slate-900">Flash sale ended — 17% uplift</p>
<p className="text-xs text-slate-500">Campaign MAG-FS-09 completed</p>
</div>
</li>
<li className="py-3 flex items-start gap-3">
<i className="h-4 w-4 text-amber-600 mt-0.5" data-lucide="alert-triangle"></i>
<div className="min-w-0">
<p className="text-sm text-slate-900">Low stock: Hoodie Olive (S)</p>
<p className="text-xs text-slate-500">12 remaining — reorder suggested</p>
</div>
</li>
<li className="py-3 flex items-start gap-3">
<i className="h-4 w-4 text-green-700 mt-0.5" data-lucide="badge-check"></i>
<div className="min-w-0">
<p className="text-sm text-slate-900">Payment link paid</p>
<p className="text-xs text-slate-500">INV-PL-8842 — $149.00</p>
</div>
</li>
</ul>
</div>
</div>
<div className="rounded-lg border border-slate-200">
<div className="flex items-center justify-between p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Activity Log</h3>
<button className="px-3 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">View all</button>
</div>
<div className="border-t border-slate-200">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Time</th>
<th className="py-2.5 px-4">Event</th>
<th className="py-2.5 px-4">Details</th>
<th className="py-2.5 px-4 text-right">User</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-500">09:12</td>
<td className="py-2.5 px-4 text-slate-900">New Order</td>
<td className="py-2.5 px-4 text-slate-600">#SM-20491 — $89.00</td>
<td className="py-2.5 px-4 text-right text-slate-500">Checkout</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-500">08:50</td>
<td className="py-2.5 px-4 text-slate-900">Campaign Updated</td>
<td className="py-2.5 px-4 text-slate-600">Flash Sale — +5% reach</td>
<td className="py-2.5 px-4 text-right text-slate-500">Ava</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-500">08:21</td>
<td className="py-2.5 px-4 text-slate-900">Inventory Sync</td>
<td className="py-2.5 px-4 text-slate-600">SKU HOD-OLV-S → 12</td>
<td className="py-2.5 px-4 text-right text-slate-500">System</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="collections">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Collections</h2>
<p className="text-slate-500 text-sm">Dashboard → Collections → Catalogue / Inventory / Campaigns</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-sm text-slate-600">Enable</span>

<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" id="collectionsToggle" type="checkbox"/>
<div className="h-6 w-11 rounded-full border border-slate-300 bg-slate-100 peer-checked:bg-green-700 transition-all"></div>
<div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white border border-slate-300 transition-all peer-checked:translate-x-5 peer-checked:border-green-600"></div>
</label>
</div>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Sync</button>
</div>
</div>

<div className="rounded-lg border border-slate-200 p-6 bg-slate-50" id="collectionsDisabled">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-slate-500 mt-0.5" data-lucide="info"></i>
<div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Collections are currently disabled</p>
<p className="text-sm text-slate-600">Toggle on to manage your Catalogue, Inventory, and Campaigns in one place.</p>
</div>
</div>
</div>

<div className="hidden" id="collectionsEnabled">
<div className="flex flex-wrap items-center gap-2 border-b border-slate-200">
<button className="coltab px-3 py-2 text-sm rounded-t-md border border-transparent hover:bg-slate-50" data-coltab="catalogue">Catalogue</button>
<button className="coltab px-3 py-2 text-sm rounded-t-md border border-transparent hover:bg-slate-50" data-coltab="inventory">Inventory</button>
<button className="coltab px-3 py-2 text-sm rounded-t-md border border-transparent hover:bg-slate-50" data-coltab="campaigns">Campaigns</button>
</div>

<div className="space-y-4 pt-4" data-colpanel="catalogue">
<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline-block mr-1" data-lucide="package-plus"></i> Add Product
                    </button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Categories</button>
<div className="ml-auto flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
<i className="h-4 w-4 inline-block mr-1" data-lucide="import"></i> Import
                      </button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">
<i className="h-4 w-4 inline-block mr-1" data-lucide="export"></i> Export
                      </button>
</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Product</th>
<th className="py-2.5 px-4">Category</th>
<th className="py-2.5 px-4">Price</th>
<th className="py-2.5 px-4">Stock</th>
<th className="py-2.5 px-4">Status</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Hoodie — Forest</td>
<td className="py-2.5 px-4 text-slate-600">Apparel</td>
<td className="py-2.5 px-4 text-slate-900 tabular-nums">$59.00</td>
<td className="py-2.5 px-4 text-slate-600">124</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Active</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Edit</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Bottle — Stainless 750ml</td>
<td className="py-2.5 px-4 text-slate-600">Accessories</td>
<td className="py-2.5 px-4 text-slate-900 tabular-nums">$29.00</td>
<td className="py-2.5 px-4 text-slate-600">42</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Draft</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Edit</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden space-y-4 pt-4" data-colpanel="inventory">
<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">
<i className="h-4 w-4 inline-block mr-1" data-lucide="plus"></i> Add SKU
                    </button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Suppliers</button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Sync with Catalogue</button>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-slate-500">Alerts</span>
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Low</span>
<span className="text-xs px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100">Out</span>
</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">SKU</th>
<th className="py-2.5 px-4">Product</th>
<th className="py-2.5 px-4">Supplier</th>
<th className="py-2.5 px-4">In Stock</th>
<th className="py-2.5 px-4">Threshold</th>
<th className="py-2.5 px-4">Status</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">HOD-OLV-S</td>
<td className="py-2.5 px-4 text-slate-600">Hoodie — Forest (S)</td>
<td className="py-2.5 px-4 text-slate-600">Evergreen Co.</td>
<td className="py-2.5 px-4 text-slate-900">12</td>
<td className="py-2.5 px-4 text-slate-600">20</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Low Stock</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Reorder</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">BOTT-SS-750</td>
<td className="py-2.5 px-4 text-slate-600">Bottle — Stainless 750ml</td>
<td className="py-2.5 px-4 text-slate-600">Northbase Ltd.</td>
<td className="py-2.5 px-4 text-slate-900">0</td>
<td className="py-2.5 px-4 text-slate-600">15</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100">Out of Stock</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Reorder</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden space-y-4 pt-4" data-colpanel="campaigns">
<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800" id="createCampaignBtn">
<i className="h-4 w-4 inline-block mr-1" data-lucide="megaphone"></i> Create Campaign
                    </button>
<div className="ml-auto flex items-center gap-2">
<input className="px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20" placeholder="Search campaigns..." type="search"/>
</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Name</th>
<th className="py-2.5 px-4">Type</th>
<th className="py-2.5 px-4">Assigned Products</th>
<th className="py-2.5 px-4">Engagement</th>
<th className="py-2.5 px-4">Sales</th>
<th className="py-2.5 px-4 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Forest Friday</td>
<td className="py-2.5 px-4 text-slate-600">Discount (15%)</td>
<td className="py-2.5 px-4 text-slate-600">Hoodie, Bottle</td>
<td className="py-2.5 px-4 text-slate-900">8.2k</td>
<td className="py-2.5 px-4 text-slate-900">$12.4k</td>
<td className="py-2.5 px-4 text-right"><span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Active</span></td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Welcome10</td>
<td className="py-2.5 px-4 text-slate-600">Coupon</td>
<td className="py-2.5 px-4 text-slate-600">All Catalogue</td>
<td className="py-2.5 px-4 text-slate-900">3.1k</td>
<td className="py-2.5 px-4 text-slate-900">$4.9k</td>
<td className="py-2.5 px-4 text-right"><span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Paused</span></td>
</tr>
</tbody>
</table>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<h4 className="text-[16px] tracking-tight font-semibold text-slate-900">Performance</h4>
<p className="text-xs text-slate-500">Engagement vs Sales</p>
<div className="mt-3 rounded-md border border-slate-100">
<div className="h-56"><canvas id="campaignChart"></canvas></div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="payment-links">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Payment Links</h2>
<p className="text-slate-500 text-sm">Dashboard → Payment Links → Generate / Manage / Track</p>
</div>
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800" id="newLinkBtn">
<i className="h-4 w-4 inline-block mr-1" data-lucide="plus"></i> New Link
                </button>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<div className="xl:col-span-1 rounded-lg border border-slate-200 p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Generate new payment link</h3>
<form className="mt-3 space-y-3" id="paymentLinkForm">
<div>
<label className="text-xs text-slate-600">Amount</label>
<div className="mt-1 relative">
<span className="absolute left-3 top-2 text-slate-500 text-sm">$</span>
<input className="w-full pl-6 pr-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20" id="plAmount" placeholder="149.00" required="" step="0.01" type="number"/>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Product / Service</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20" id="plName" placeholder="Forest Hoodie (M)" required="" type="text"/>
</div>
<div>
<label className="text-xs text-slate-600">Expiry date</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20" id="plExpiry" type="date"/>
</div>
<div className="pt-2 flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800" type="submit">Generate Link</button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50" type="reset">Reset</button>
</div>
</form>
</div>

<div className="xl:col-span-2 rounded-lg border border-slate-200">
<div className="flex items-center justify-between p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Manage &amp; Track</h3>
<div className="flex items-center gap-2">
<input className="px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20" id="plSearch" placeholder="Search links..." type="search"/>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">History</button>
</div>
</div>
<div className="border-t border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Link</th>
<th className="py-2.5 px-4">Item</th>
<th className="py-2.5 px-4">Amount</th>
<th className="py-2.5 px-4">Status</th>
<th className="py-2.5 px-4 text-right">Share</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200" id="plTableBody">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900 truncate max-w-[180px]">https://sm.link/pl/8X29KM</td>
<td className="py-2.5 px-4 text-slate-600">Forest Hoodie (M)</td>
<td className="py-2.5 px-4 text-slate-900 tabular-nums">$149.00</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Paid</span>
</td>
<td className="py-2.5 px-4 text-right">
<div className="inline-flex items-center gap-1">
<button className="pl-copy px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50" data-href="https://sm.link/pl/8X29KM">
<i className="h-3.5 w-3.5 inline-block mr-1" data-lucide="copy"></i> Copy
                              </button>
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50" onclick="window.open('https://wa.me/?text=' + encodeURIComponent('Pay here: https://sm.link/pl/8X29KM'))">
<i className="h-3.5 w-3.5 inline-block mr-1" data-lucide="send"></i> WhatsApp
                              </button>
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50" onclick="window.location.href='mailto:?subject=Payment Link&amp;body=Pay here: https://sm.link/pl/8X29KM'">
<i className="h-3.5 w-3.5 inline-block mr-1" data-lucide="mail"></i> Email
                              </button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900 truncate max-w-[180px]">https://sm.link/pl/2H17AA</td>
<td className="py-2.5 px-4 text-slate-600">Bottle — Stainless 750ml</td>
<td className="py-2.5 px-4 text-slate-900 tabular-nums">$29.00</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Unpaid</span>
</td>
<td className="py-2.5 px-4 text-right">
<div className="inline-flex items-center gap-1">
<button className="pl-copy px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50" data-href="https://sm.link/pl/2H17AA">
<i className="h-3.5 w-3.5 inline-block mr-1" data-lucide="copy"></i> Copy
                              </button>
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50" onclick="window.open('https://wa.me/?text=' + encodeURIComponent('Pay here: https://sm.link/pl/2H17AA'))">
<i className="h-3.5 w-3.5 inline-block mr-1" data-lucide="send"></i> WhatsApp
                              </button>
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50" onclick="window.location.href='mailto:?subject=Payment Link&amp;body=Pay here: https://sm.link/pl/2H17AA'">
<i className="h-3.5 w-3.5 inline-block mr-1" data-lucide="mail"></i> Email
                              </button>
</div>
</td>
</tr>

</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="qtc">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">QTC Billing</h2>
<p className="text-slate-500 text-sm">Dashboard → QTC Billing → Quotes → Invoice → Payment Status</p>
</div>
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800" id="createQuoteBtn">
<i className="h-4 w-4 inline-block mr-1" data-lucide="file-plus-2"></i> Create Quote
                </button>
</div>

<div className="rounded-lg border border-slate-200 p-4">
<div className="grid grid-cols-3 gap-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-green-700 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="file-text"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-900">Quote</p>
<p className="text-xs text-slate-500">Create &amp; send</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="receipt"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-900">Invoice</p>
<p className="text-xs text-slate-500">Convert</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-900">Payment</p>
<p className="text-xs text-slate-500">Mark paid</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="xl:col-span-2 rounded-lg border border-slate-200">
<div className="flex items-center justify-between p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Quotes</h3>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">All</button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Pending</button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Accepted</button>
</div>
</div>
<div className="border-t border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Quote #</th>
<th className="py-2.5 px-4">Client</th>
<th className="py-2.5 px-4">Amount</th>
<th className="py-2.5 px-4">Status</th>
<th className="py-2.5 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Q-10092</td>
<td className="py-2.5 px-4 text-slate-600">Fern Studio</td>
<td className="py-2.5 px-4 text-slate-900 tabular-nums">$1,249.00</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100">Pending</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Send</button>
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Convert</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-2.5 px-4 text-slate-900">Q-10091</td>
<td className="py-2.5 px-4 text-slate-600">Moss &amp; Co</td>
<td className="py-2.5 px-4 text-slate-900 tabular-nums">$980.00</td>
<td className="py-2.5 px-4">
<span className="text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border border-green-100">Accepted</span>
</td>
<td className="py-2.5 px-4 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Invoice</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="xl:col-span-1 rounded-lg border border-slate-200 p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Status</h3>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-600">Pending</span>
<span className="text-sm text-slate-900 tabular-nums">7</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-600">Accepted</span>
<span className="text-sm text-slate-900 tabular-nums">14</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-600">Paid</span>
<span className="text-sm text-slate-900 tabular-nums">11</span>
</div>
<div className="mt-3 rounded-md border border-slate-100">
<div className="h-40"><canvas id="qtcChart"></canvas></div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="funnel">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Funnel Builder</h2>
<p className="text-slate-500 text-sm">Dashboard → Funnel → Build / Manage / Analytics</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Manage</button>
<button className="px-3 py-2 rounded-md bg-green-700 text-white text-sm hover:bg-green-800">Preview</button>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<div className="rounded-lg border border-slate-200 p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Steps Library</h3>
<div className="mt-3 space-y-2">
<div className="cursor-move px-3 py-2 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 flex items-center gap-2" draggable="true">
<i className="h-4 w-4 text-green-700" data-lucide="shopping-cart"></i>
<span className="text-sm">Sales Funnel</span>
</div>
<div className="cursor-move px-3 py-2 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 flex items-center gap-2" draggable="true">
<i className="h-4 w-4 text-green-700" data-lucide="chevrons-up"></i>
<span className="text-sm">Upsell</span>
</div>
<div className="cursor-move px-3 py-2 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 flex items-center gap-2" draggable="true">
<i className="h-4 w-4 text-green-700" data-lucide="chevrons-down"></i>
<span className="text-sm">Downsell</span>
</div>
<div className="cursor-move px-3 py-2 rounded-md border border-slate-200 hover:border-green-700 hover:bg-green-50/50 flex items-center gap-2" draggable="true">
<i className="h-4 w-4 text-green-700" data-lucide="plus-circle"></i>
<span className="text-sm">Order Bump</span>
</div>
</div>
<div className="mt-4">
<label className="text-xs text-slate-600">Connect to Product</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20" placeholder="Search catalogue..." type="text"/>
</div>
</div>

<div className="xl:col-span-2 rounded-lg border border-slate-200 p-4">
<h3 className="text-[18px] tracking-tight font-semibold text-slate-900">Journey Canvas</h3>
<p className="text-xs text-slate-500">Drag steps from the library into the canvas</p>
<div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3 min-h-[220px]" id="funnelCanvas">
<div className="rounded-md border border-slate-200 p-3 bg-slate-50/50">
<p className="text-sm font-medium tracking-tight text-slate-900">Landing</p>
<p className="text-xs text-slate-500">Hero, USP, CTA</p>
</div>
<div className="rounded-md border border-slate-200 p-3 bg-slate-50/50">
<p className="text-sm font-medium tracking-tight text-slate-900">Checkout</p>
<p className="text-xs text-slate-500">Payment form</p>
</div>
<div className="rounded-md border border-slate-200 p-3 bg-slate-50/50">
<p className="text-sm font-medium tracking-tight text-slate-900">Upsell</p>
<p className="text-xs text-slate-500">Boost AOV</p>
</div>
</div>
<div className="mt-4 rounded-md border border-slate-100">
<div className="h-56"><canvas id="funnelChart"></canvas></div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="customers">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Customers</h2>
<p className="text-slate-500 text-sm">Dashboard → Customers → List / Profile / Segments</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Import</button>
<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50">Export</button>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="xl:col-span-2 rounded-lg border border-slate-200">
<div className="flex flex-wrap items-center gap-2 p-4">
<input className="flex-1 min-w-[180px] px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20" placeholder="Search customers..." type="search"/>
<div className="relative">

<button className="px-3 py-2 rounded-md border border-slate-200 text-sm hover:bg-slate-50 flex items-center gap-2" id="segmentBtn">
<i className="h-4 w-4" data-lucide="layers"></i>
                        Segments
                        <i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-10 mt-1 w-44 rounded-md border border-slate-200 bg-white shadow-sm" id="segmentMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50">VIP</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50">New</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50">Returning</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50">At Risk</button>
</div>
</div>
</div>
<div className="border-t border-slate-200 overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-slate-500">
<th className="py-2.5 px-4">Customer</th>
<th className="py-2.5 px-4">Email</th>
<th className="py-2.5 px-4">Total Spend</th>
<th className="py-2.5 px-4">Funnel Stage</th>
<th className="py-2.5 px-4 text-right">Last Order</th>
</tr>
</thead>
</table></div></div></div></section></div></main></div></div>
    </>
  );
}
