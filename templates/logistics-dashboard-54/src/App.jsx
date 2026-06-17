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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with 1.5 stroke width as requested
        lucide.createIcons({
            strokeWidth: 1.5
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
      

<aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-xl font-medium tracking-tight">
<div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center text-white font-medium">K</div>
                Koli.
            </div>
</div>
<div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-8">

<div>
<div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">Menu</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="layout-dashboard"></i>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="shopping-cart"></i>
                        Orders &amp; Purchases
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base bg-purple-50 text-purple-700 font-medium transition-colors" href="#">
<i className="w-5 h-5 text-purple-500" data-lucide="plane"></i>
                        Logistics &amp; Cargos
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="users"></i>
                        Clients &amp; Wallets
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="sparkles"></i>
                        Inspiration Catalog
                    </a>
</nav>
</div>

<div>
<div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">Finance</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="wallet"></i>
                        Treasury
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="pie-chart"></i>
                        Net Margin
                    </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="bar-chart-3"></i>
                        Data &amp; Insights
                    </a>
</nav>
</div>

<div>
<div className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">System</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-2 py-2 rounded-lg text-base text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="headphones"></i>
                        Quality &amp; Support
                    </a>
</nav>
</div>
</div>

<div className="p-4 border-t border-gray-100">
<button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors ml-auto shadow-sm">
<i className="w-5 h-5" data-lucide="message-square"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Logistics &amp; Cargos</h1>
</div>
<div className="flex items-center gap-6">

<div className="relative hidden sm:block">
<i className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search"></i>
<input className="w-64 pl-9 pr-12 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden sm:inline-flex items-center justify-center px-1.5 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-400 bg-white">⌘</kbd>
<kbd className="hidden sm:inline-flex items-center justify-center px-1.5 py-0.5 border border-gray-200 rounded text-[10px] font-medium text-gray-400 bg-white">K</kbd>
</div>
</div>

<button className="relative text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>

<div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200 object-cover" src="https://i.pravatar.cc/150?img=47"/>
<span className="text-sm font-medium text-gray-700 hidden lg:block">Khadija W.</span>
<i className="w-4 h-4 text-gray-400 hidden lg:block" data-lucide="chevron-down"></i>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8">

<div className="mb-8">
<div className="flex overflow-x-auto gap-5 pb-6 -mx-4 px-4 sm:-mx-8 sm:px-8 hide-scrollbar snap-x">

<div className="shrink-0 w-72 sm:w-80 h-44 rounded-2xl border-2 border-dashed border-gray-300 bg-transparent flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-50 hover:border-purple-300 hover:text-purple-600 transition-all group snap-start" onclick="document.getElementById('create-lot-modal').classList.remove('hidden')">
<div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-purple-100 flex items-center justify-center text-gray-500 group-hover:text-purple-600 transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<span className="text-base font-medium text-gray-600 group-hover:text-purple-700">Create New Lot/Flight</span>
</div>

<div className="shrink-0 w-72 sm:w-80 h-44 rounded-2xl bg-white/70 backdrop-blur-xl border border-purple-300 p-5 flex flex-col justify-between relative shadow-[0_8px_30px_rgb(168,85,247,0.12)] ring-2 ring-purple-500/20 snap-start overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-purple-100/50 pointer-events-none"></div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">KOLI-04</h3>
<span className="inline-flex items-center gap-1.5 rounded-full bg-purple-100 px-2.5 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                    Transit <i className="w-3.5 h-3.5" data-lucide="plane-takeoff"></i>
</span>
</div>
</div>
<div className="relative z-10 flex items-end justify-between mt-auto pb-6 border-b border-purple-200/50">
<div>
<p className="text-sm text-gray-500 mb-0.5">Est. Arrival</p>
<p className="text-base font-medium text-gray-900">12 Nov</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-500 mb-0.5">Total Weight</p>
<p className="text-base font-medium text-gray-900">450 kg</p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-purple-600 py-2 px-4 flex items-center justify-between">
<span className="text-sm text-purple-50 font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Drop items here
                            </span>
<span className="text-xs text-purple-200 flex items-center gap-1 bg-purple-700/50 px-2 py-0.5 rounded-full">
                                Update Customer App?
                            </span>
</div>
</div>

<div className="shrink-0 w-72 sm:w-80 h-44 rounded-2xl bg-white border border-gray-200 p-5 flex flex-col justify-between shadow-sm snap-start">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">KOLI-05</h3>
<span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-sm font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20">
                                    Prep <i className="w-3.5 h-3.5" data-lucide="package"></i>
</span>
</div>
</div>
<div className="flex items-end justify-between mt-auto pt-4">
<div>
<p className="text-sm text-gray-500 mb-0.5">Est. Dispatch</p>
<p className="text-base font-medium text-gray-900">18 Nov</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-500 mb-0.5">Total Weight</p>
<p className="text-base font-medium text-gray-900">120 kg</p>
</div>
</div>
</div>

<div className="shrink-0 w-72 sm:w-80 h-44 rounded-2xl bg-white border border-gray-200 p-5 flex flex-col justify-between shadow-sm snap-start">
<div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">KOLI-03</h3>
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-sm font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">
                                    Delivered <i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
</span>
</div>
</div>
<div className="flex items-end justify-between mt-auto mb-3">
<div>
<p className="text-sm text-gray-500 mb-0.5">Arrived Date</p>
<p className="text-base font-medium text-gray-900">05 Nov</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-500 mb-0.5">Status</p>
<p className="text-base font-medium text-gray-900">At Point Relais</p>
</div>
</div>
<button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="bell-ring"></i> Notify Clients for Pickup
                        </button>
</div>
</div>
</div>

<div className="flex flex-col xl:flex-row gap-8 relative">

<div className="hidden xl:flex absolute top-10 right-[380px] w-72 bg-white/90 backdrop-blur-md border-2 border-purple-500 rounded-xl p-3 shadow-2xl z-50 transform -rotate-3 opacity-90 items-start gap-3 pointer-events-none transition-transform">
<div className="w-5 h-5 rounded border-2 border-purple-600 bg-purple-600 flex items-center justify-center shrink-0 mt-0.5">
<i className="w-3.5 h-3.5 text-white" data-lucide="check"></i>
</div>
<div className="flex-1">
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-sm font-medium text-blue-700 mb-1.5">Received by Forwarder</span>
<h4 className="text-base font-medium text-gray-900">Tech Accessories Box</h4>
</div>
<i className="w-6 h-6 text-purple-500 absolute -left-10 top-1/2 -translate-y-1/2 animate-pulse" data-lucide="arrow-left"></i>
</div>

<div className="flex-1 flex flex-col min-w-0 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-100 bg-gray-50/50">
<th className="py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">Order ID &amp; Client</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">Product Info</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-right">Est. Weight</th>
<th className="py-4 px-6 text-sm font-medium text-purple-600 uppercase tracking-wider text-right">Real Weight</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">Price Diff</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 uppercase tracking-wider">Wallet Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-4 px-6">
<p className="text-base font-medium text-gray-900">#519004</p>
<p className="text-sm text-gray-500">Amina D.</p>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0">
<img alt="Jacket" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&amp;h=100&amp;fit=crop"/>
</div>
<span className="text-base font-medium text-gray-900">Leather Biker Jacket</span>
</div>
</td>
<td className="py-4 px-6 text-right text-base text-gray-500">0.5 kg</td>
<td className="py-4 px-6 text-right">

<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 shadow-sm focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
<input className="w-10 text-right text-base font-medium text-gray-900 bg-transparent outline-none p-0 border-none" type="text" value="0.7"/>
<span className="text-sm text-gray-400">kg</span>
</div>
</td>
<td className="py-4 px-6 text-center">
<span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded-md">+1,500 FCFA</span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-100 transition-colors">
<i className="w-4 h-4" data-lucide="wallet"></i> Auto-Debit Wallet
                                            </button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50">
<i className="w-4 h-4" data-lucide="message-circle"></i>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-4 px-6">
<p className="text-base font-medium text-gray-900">#519005</p>
<p className="text-sm text-gray-500">Samuel E.</p>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0">
<img alt="Shirt" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&amp;h=100&amp;fit=crop"/>
</div>
<span className="text-base font-medium text-gray-900">Summer T-Shirt Pack</span>
</div>
</td>
<td className="py-4 px-6 text-right text-base text-gray-500">0.4 kg</td>
<td className="py-4 px-6 text-right">
<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 shadow-sm focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500 transition-all">
<input className="w-10 text-right text-base font-medium text-gray-900 bg-transparent outline-none p-0 border-none" type="text" value="0.2"/>
<span className="text-sm text-gray-400">kg</span>
</div>
</td>
<td className="py-4 px-6 text-center">
<span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">-500 FCFA</span>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-100 transition-colors">
<i className="w-4 h-4" data-lucide="wallet"></i> Auto-Refund Wallet
                                            </button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-50">
<i className="w-4 h-4" data-lucide="message-circle"></i>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-4 px-6">
<p className="text-base font-medium text-gray-900">#519006</p>
<p className="text-sm text-gray-500">Chloe M.</p>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0 flex items-center justify-center">
<i className="w-5 h-5 text-gray-400" data-lucide="headphones"></i>
</div>
<span className="text-base font-medium text-gray-900">Wireless Earbuds</span>
</div>
</td>
<td className="py-4 px-6 text-right text-base text-gray-500">0.1 kg</td>
<td className="py-4 px-6 text-right">
<div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-gray-400">
<span className="w-10 text-right text-base font-medium">0.1</span>
<span className="text-sm">kg</span>
</div>
</td>
<td className="py-4 px-6 text-center text-gray-400">-</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div> Settled
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-6 bg-gray-50/50 border-t border-gray-100">
<button className="w-full py-3.5 px-4 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2">
                            Generate QR Codes &amp; Dispatcher at Relay Points <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="w-full xl:w-[380px] shrink-0 flex flex-col gap-4">
<div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 h-[calc(100vh-280px)] overflow-hidden flex flex-col">
<div className="mb-5 shrink-0">
<div className="flex items-center justify-between mb-1">
<h2 className="text-lg font-medium text-gray-900 tracking-tight">Unassigned Packages</h2>
<span className="bg-gray-100 text-gray-600 text-sm font-medium px-2.5 py-0.5 rounded-full">12</span>
</div>
<p className="text-sm text-gray-500">Select all orders and slip them into the Cargo.</p>
</div>

<div className="flex-1 overflow-y-auto pr-2 -mr-2 flex flex-col gap-3 pb-4">

<div className="group bg-purple-50/30 border-2 border-purple-200 rounded-xl p-3.5 flex items-start gap-3 cursor-grab hover:shadow-md transition-all">

<label className="relative flex items-center justify-center pt-0.5 cursor-pointer shrink-0">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-gray-300 bg-white peer-checked:bg-purple-600 peer-checked:border-purple-600 transition-colors flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1.5">
<span className="inline-flex items-center rounded bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700">PKG-8892</span>
</div>
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 mb-1.5">Received by Forwarder</span>
<h4 className="text-base font-medium text-gray-900 truncate mb-1">Tech Accessories Box</h4>
<div className="flex items-center gap-3 text-sm text-gray-500">
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="scale"></i> 3.2 kg</span>
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Douala</span>
</div>
</div>

<div className="shrink-0 text-gray-400 hover:text-gray-600 cursor-grab pt-1">
<i className="w-5 h-5" data-lucide="grip-vertical"></i>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-xl p-3.5 flex items-start gap-3 cursor-grab hover:border-purple-300 hover:shadow-sm transition-all">
<label className="relative flex items-center justify-center pt-0.5 cursor-pointer shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-gray-300 bg-white peer-checked:bg-purple-600 peer-checked:border-purple-600 transition-colors flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1.5">
<span className="inline-flex items-center rounded bg-purple-50 px-1.5 py-0.5 text-xs font-medium text-purple-700">PKG-8893</span>
</div>
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 mb-1.5">Received by Forwarder</span>
<h4 className="text-base font-medium text-gray-900 truncate mb-1">Cosmetics Wholesale</h4>
<div className="flex items-center gap-3 text-sm text-gray-500">
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="scale"></i> 1.8 kg</span>
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Yaoundé</span>
</div>
</div>
<div className="shrink-0 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab pt-1">
<i className="w-5 h-5" data-lucide="grip-vertical"></i>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-xl p-3.5 flex items-start gap-3 cursor-grab hover:border-purple-300 hover:shadow-sm transition-all">
<label className="relative flex items-center justify-center pt-0.5 cursor-pointer shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-gray-300 bg-white peer-checked:bg-purple-600 peer-checked:border-purple-600 transition-colors flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1.5">
<span className="inline-flex items-center rounded bg-purple-50 px-1.5 py-0.5 text-xs font-medium text-purple-700">PKG-8894</span>
</div>
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 mb-1.5">Received by Forwarder</span>
<h4 className="text-base font-medium text-gray-900 truncate mb-1">Footwear Collection</h4>
<div className="flex items-center gap-3 text-sm text-gray-500">
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="scale"></i> 8.5 kg</span>
<span className="flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Douala</span>
</div>
</div>
<div className="shrink-0 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab pt-1">
<i className="w-5 h-5" data-lucide="grip-vertical"></i>
</div>
</div>

<div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-2 bg-gray-50/50">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400">
<i className="w-5 h-5" data-lucide="mouse-pointer-click"></i>
</div>
<p className="text-sm text-gray-500 max-w-[200px]">Select items above and slip them into the active Cargo Lot.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 z-50 transform transition-all translate-y-0 opacity-100">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>
</div>
<div>
<p className="text-sm font-medium">Success! 5 items assigned to KOLI-04.</p>
<p className="text-xs text-gray-400 mt-0.5">Customers notified: "Your package has taken the plane!" ✈️</p>
</div>
<button className="ml-4 text-gray-400 hover:text-white"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>

<div className="hidden fixed inset-0 z-[100] flex items-center justify-center" id="create-lot-modal">
<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm" onclick="document.getElementById('create-lot-modal').classList.add('hidden')"></div>
<div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden transform transition-all scale-100">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<h3 className="text-lg font-medium text-gray-900">Create Virtual Lot / Flight</h3>
<button className="text-gray-400 hover:text-gray-600" onclick="document.getElementById('create-lot-modal').classList.add('hidden')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-6 flex flex-col gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Flight ID</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base" placeholder="e.g., KOLI-06" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Expected Departure Date</label>
<div className="relative">
<i className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="calendar"></i>
<input className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base text-gray-600" type="date"/>
</div>
</div>
</div>
<div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" onclick="document.getElementById('create-lot-modal').classList.add('hidden')">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-sm transition-colors">Create Lot</button>
</div>
</div>
</div>


    </>
  );
}
