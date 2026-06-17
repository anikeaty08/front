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



        lucide.createIcons();
    
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
      

<aside className="w-64 bg-white border-r border-gray-100 flex-col h-full hidden lg:flex shrink-0">
<div className="h-16 flex items-center px-6 border-b border-gray-100 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white font-medium text-base">K</div>
<span className="font-medium text-lg tracking-tight">Koli.</span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-8">

<div>
<h3 className="px-3 text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Menu</h3>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span>Orders &amp; Purchases</span>
</a>

<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-purple-50 text-purple-700" href="#">
<i className="w-4 h-4 text-purple-600" data-lucide="plane" strokeWidth="1.5"></i>
<span>Logistics &amp; Cargos</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="users" strokeWidth="1.5"></i>
<span>Clients &amp; Wallets</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>Inspiration Catalog</span>
</a>
</nav>
</div>

<div>
<h3 className="px-3 text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">Finance</h3>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="briefcase" strokeWidth="1.5"></i>
<span>Treasury</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="pie-chart" strokeWidth="1.5"></i>
<span>Net Margin</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span>Data &amp; Insights</span>
</a>
</nav>
</div>

<div>
<h3 className="px-3 text-sm font-medium text-gray-400 uppercase tracking-wider mb-3">System</h3>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors" href="#">
<i className="w-4 h-4 text-gray-400" data-lucide="headphones" strokeWidth="1.5"></i>
<span>Quality &amp; Support</span>
</a>
</nav>
</div>
</div>
<div className="p-4 border-t border-gray-100 mt-auto">
<button className="w-10 h-10 ml-auto bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full min-w-0">

<header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 lg:px-8 shrink-0">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Logistics &amp; Cargos</h1>
<div className="flex items-center gap-6">

<div className="hidden md:flex relative items-center">
<i className="w-4 h-4 text-gray-400 absolute left-3" data-lucide="search" strokeWidth="1.5"></i>
<input className="pl-9 pr-12 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all w-64 placeholder:text-gray-400" placeholder="Search..." type="text"/>
<div className="absolute right-2 flex items-center gap-1">
<kbd className="px-1.5 py-0.5 text-xs font-medium text-gray-400 bg-white border border-gray-200 rounded shadow-sm">⌘</kbd>
<kbd className="px-1.5 py-0.5 text-xs font-medium text-gray-400 bg-white border border-gray-200 rounded shadow-sm">K</kbd>
</div>
</div>

<button className="relative text-gray-400 hover:text-gray-600 transition-colors">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
</button>

<div className="flex items-center gap-3 pl-6 border-l border-gray-200 cursor-pointer">
<img alt="User Avatar" className="w-8 h-8 rounded-full border border-gray-200 object-cover" src="https://i.pravatar.cc/150?img=47"/>
<span className="text-sm font-medium text-gray-700 hidden sm:block">Khadija W.</span>
<i className="w-4 h-4 text-gray-400 hidden sm:block" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8 flex flex-col gap-6">

<div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar w-full">

<div className="min-w-[340px] bg-white border border-purple-200 ring-1 ring-purple-50 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-start mb-8 relative z-10">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">KOLI-04</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                            Transit <i className="w-3.5 h-3.5" data-lucide="plane" strokeWidth="1.5"></i>
</span>
</div>
<div className="flex justify-between items-end relative z-10">
<div>
<p className="text-sm text-gray-500 mb-1">Est. Arrival</p>
<p className="text-base font-medium text-gray-900">12 Nov</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-500 mb-1">Total Weight</p>
<p className="text-base font-medium text-gray-900">450 kg</p>
</div>
</div>
</div>

<div className="min-w-[340px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
<div className="flex justify-between items-start mb-8">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">KOLI-05</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700">
                            Prep <i className="w-3.5 h-3.5" data-lucide="package" strokeWidth="1.5"></i>
</span>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-sm text-gray-500 mb-1">Est. Dispatch</p>
<p className="text-base font-medium text-gray-900">18 Nov</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-500 mb-1">Total Weight</p>
<p className="text-base font-medium text-gray-900">120 kg</p>
</div>
</div>
</div>

<div className="min-w-[340px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">KOLI-03</h3>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                            Delivered <i className="w-3.5 h-3.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</span>
</div>
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-sm text-gray-500 mb-1">Arrived Date</p>
<p className="text-base font-medium text-gray-900">05 Nov</p>
</div>
<div className="text-right">
<p className="text-sm text-gray-500 mb-1">Status</p>
<p className="text-base font-medium text-gray-900">At Point Relais</p>
</div>
</div>
<button className="w-full bg-[#10b981] hover:bg-[#059669] text-white py-2 rounded-xl text-sm font-medium flex justify-center items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="bell" strokeWidth="1.5"></i> Notify Clients for Pickup
                    </button>
</div>
</div>

<div className="flex flex-col xl:flex-row gap-6 items-start">

<div className="flex-1 w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-6 lg:p-8 flex flex-col overflow-hidden">
<div className="overflow-x-auto">
<div className="min-w-[800px]">

<div className="flex items-center text-xs font-medium text-gray-500 uppercase tracking-wider mb-4 pb-4 border-b border-gray-100">
<div className="w-48 shrink-0">Order ID &amp; Client</div>
<div className="flex-1 min-w-[200px]">Product Info</div>
<div className="w-24 shrink-0 text-center">Est. Weight</div>
<div className="w-32 shrink-0 text-center text-purple-600 font-semibold">Real Weight</div>
<div className="w-32 shrink-0 text-center">Price Diff</div>
<div className="w-48 shrink-0 text-right pr-2">Wallet Action</div>
</div>

<div className="flex flex-col">

<div className="flex items-center py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
<div className="w-48 shrink-0 flex flex-col">
<span className="text-sm font-medium text-gray-900">#519004</span>
<span className="text-sm text-gray-500 mt-0.5">Amina D.</span>
</div>
<div className="flex-1 min-w-[200px] flex items-center gap-4">
<img className="w-10 h-10 rounded-lg object-cover border border-gray-100 shrink-0" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-sm font-medium text-gray-900 truncate">Leather Biker Jacket</span>
</div>
<div className="w-24 shrink-0 text-center text-sm text-gray-600">0.5 kg</div>
<div className="w-32 shrink-0 flex justify-center">
<div className="flex items-center border border-purple-200 rounded-lg overflow-hidden bg-purple-50/30 transition-all focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-400">
<input className="w-12 text-center text-sm font-semibold text-gray-900 bg-transparent py-1.5 focus:outline-none" type="text" value="0.7"/>
<span className="pr-3 text-sm text-purple-400 font-medium">kg</span>
</div>
</div>
<div className="w-32 shrink-0 text-center text-sm font-medium text-rose-500">+1,500 FCFA</div>
<div className="w-48 shrink-0 flex items-center justify-end gap-2 pr-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 border border-rose-200 text-rose-600 rounded-lg text-xs font-medium hover:bg-rose-50 transition-colors bg-white">
<i className="w-3.5 h-3.5" data-lucide="file-minus" strokeWidth="1.5"></i> Auto-Debit Wallet
                                        </button>
<button className="w-8 h-8 rounded-full border border-emerald-100 flex items-center justify-center text-emerald-500 hover:bg-emerald-50 bg-emerald-50/30 transition-colors shrink-0">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex items-center py-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
<div className="w-48 shrink-0 flex flex-col">
<span className="text-sm font-medium text-gray-900">#519005</span>
<span className="text-sm text-gray-500 mt-0.5">Samuel E.</span>
</div>
<div className="flex-1 min-w-[200px] flex items-center gap-4">
<img className="w-10 h-10 rounded-lg object-cover border border-gray-100 shrink-0" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-sm font-medium text-gray-900 truncate">Summer T-Shirt Pack</span>
</div>
<div className="w-24 shrink-0 text-center text-sm text-gray-600">0.4 kg</div>
<div className="w-32 shrink-0 flex justify-center">
<div className="flex items-center border border-purple-200 rounded-lg overflow-hidden bg-purple-50/30 transition-all focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-400">
<input className="w-12 text-center text-sm font-semibold text-gray-900 bg-transparent py-1.5 focus:outline-none" type="text" value="0.2"/>
<span className="pr-3 text-sm text-purple-400 font-medium">kg</span>
</div>
</div>
<div className="w-32 shrink-0 flex justify-center">
<span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-md text-sm font-medium">-500 FCFA</span>
</div>
<div className="w-48 shrink-0 flex items-center justify-end gap-2 pr-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 border border-emerald-200 text-emerald-600 rounded-lg text-xs font-medium hover:bg-emerald-50 transition-colors bg-white">
<i className="w-3.5 h-3.5" data-lucide="file-plus" strokeWidth="1.5"></i> Auto-Refund Wallet
                                        </button>
<button className="w-8 h-8 rounded-full border border-emerald-100 flex items-center justify-center text-emerald-500 hover:bg-emerald-50 bg-emerald-50/30 transition-colors shrink-0">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex items-center py-4 hover:bg-gray-50/50 transition-colors">
<div className="w-48 shrink-0 flex flex-col">
<span className="text-sm font-medium text-gray-900">#519006</span>
<span className="text-sm text-gray-500 mt-0.5">Chloe M.</span>
</div>
<div className="flex-1 min-w-[200px] flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-gray-400" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium text-gray-900 truncate">Wireless Earbuds</span>
</div>
<div className="w-24 shrink-0 text-center text-sm text-gray-600">0.1 kg</div>
<div className="w-32 shrink-0 flex justify-center">
<div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50 transition-all">
<input className="w-12 text-center text-sm font-medium text-gray-500 bg-transparent py-1.5 focus:outline-none cursor-not-allowed" disabled="" type="text" value="0.1"/>
<span className="pr-3 text-sm text-gray-400 font-medium">kg</span>
</div>
</div>
<div className="w-32 shrink-0 text-center text-sm text-gray-400">-</div>
<div className="w-48 shrink-0 flex items-center justify-end pr-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-500 bg-gray-50 rounded-lg text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Settled
                                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-gray-100">
<button className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white py-3.5 rounded-xl text-base font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm shadow-orange-500/20">
                            Generate QR Codes &amp; Dispatcher at Relay Points
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="w-full xl:w-[360px] shrink-0 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col h-[600px] xl:h-auto xl:self-stretch">
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Unassigned Packages</h3>
<span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">12</span>
</div>
<p className="text-sm text-gray-500 mb-6">Drag items to assign to a cargo flight.</p>
<div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3 custom-scrollbar">

<div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:border-purple-300 hover:shadow-md transition-all group flex gap-3 cursor-grab active:cursor-grabbing">

<div className="mt-0.5 relative flex items-center justify-center w-4 h-4 border border-gray-300 rounded focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-500 bg-white shrink-0 group-hover:border-purple-400 transition-colors cursor-pointer">
<input className="opacity-0 absolute inset-0 cursor-pointer w-full h-full z-10" type="checkbox"/>

<i className="w-3 h-3 text-white hidden pointer-events-none" data-lucide="check"></i>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<span className="inline-block px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-xs font-medium">PKG-8892</span>
<i className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" data-lucide="grip-vertical" strokeWidth="1.5"></i>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-2.5">Tech Accessories Box</h4>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="weight" strokeWidth="1.5"></i> 3.2 kg</span>
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Douala</span>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:border-purple-300 hover:shadow-md transition-all group flex gap-3 cursor-grab active:cursor-grabbing">

<div className="mt-0.5 relative flex items-center justify-center w-4 h-4 border border-gray-300 rounded focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-500 bg-white shrink-0 group-hover:border-purple-400 transition-colors cursor-pointer">
<input className="opacity-0 absolute inset-0 cursor-pointer w-full h-full z-10" type="checkbox"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<span className="inline-block px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-xs font-medium">PKG-8893</span>
<i className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" data-lucide="grip-vertical" strokeWidth="1.5"></i>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-2.5">Cosmetics Wholesale</h4>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="weight" strokeWidth="1.5"></i> 1.8 kg</span>
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Yaoundé</span>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:border-purple-300 hover:shadow-md transition-all group flex gap-3 cursor-grab active:cursor-grabbing">

<div className="mt-0.5 relative flex items-center justify-center w-4 h-4 border border-gray-300 rounded focus-within:ring-2 focus-within:ring-purple-500/20 focus-within:border-purple-500 bg-white shrink-0 group-hover:border-purple-400 transition-colors cursor-pointer">
<input className="opacity-0 absolute inset-0 cursor-pointer w-full h-full z-10" type="checkbox"/>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<span className="inline-block px-2 py-0.5 bg-purple-50 text-purple-600 rounded text-xs font-medium">PKG-8894</span>
<i className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" data-lucide="grip-vertical" strokeWidth="1.5"></i>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-2.5">Footwear Collection</h4>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="weight" strokeWidth="1.5"></i> 8.5 kg</span>
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Douala</span>
</div>
</div>
</div>
</div>

<div className="mt-4 border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-gray-50/50 group hover:border-purple-300 hover:bg-purple-50/20 transition-colors cursor-pointer">
<i className="w-5 h-5 text-gray-400 mb-3 group-hover:text-purple-500 transition-colors" data-lucide="sparkles" strokeWidth="1.5"></i>
<p className="text-sm text-gray-500 max-w-[200px] group-hover:text-gray-700 transition-colors">Drag more items here to assign to KOLI-04</p>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
