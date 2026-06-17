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
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col flex-shrink-0 fixed h-full z-10">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-indigo-600">
<i className="w-6 h-6 fill-current" data-lucide="zap"></i>
<span className="text-lg font-semibold tracking-tight text-gray-900">SyncGram</span>
</div>
</div>
<nav className="flex-1 px-4 py-6 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-dashboard"></i>
<span className="font-medium text-base">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 bg-gray-100 text-gray-900 rounded-lg transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="package"></i>
<span className="font-medium text-base">Products</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="users"></i>
<span className="font-medium text-base">Customers</span>
</a>
<div className="pt-4 mt-4 border-t border-gray-100">
<p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Financials</p>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="wallet"></i>
<span className="font-medium text-base">Accounts</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="receipt"></i>
<span className="font-medium text-base">Invoices</span>
</a>
</div>
</nav>
<div className="p-4 border-t border-gray-200">
<button className="flex items-center gap-3 w-full px-2 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors">
<img alt="Profile" className="w-8 h-8 rounded-full" src="https://ui-avatars.com/api/?name=Omotola+Joseph&amp;background=random"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Omotola Joseph</p>
<p className="text-xs text-gray-500 truncate">Pro Plan</p>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
</aside>

<main className="flex-1 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Products</h1>
<p className="text-base text-gray-500 mt-2">Manage revenue, access rights, and member groups.</p>
</div>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 shadow-sm transition-all active:scale-[0.98]">
<i className="w-4 h-4" data-lucide="plus"></i>
                Create Product
            </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Active Members</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">1,995</span>
<span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
<i className="w-3 h-3 mr-0.5" data-lucide="arrow-up"></i> 5.2%
                    </span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Monthly Recurring (MRR)</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">$54,376</span>
<span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
<i className="w-3 h-3 mr-0.5" data-lucide="arrow-up"></i> 8.1%
                    </span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-center">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">One-Time Sales (30d)</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">$1,240</span>
<span className="text-xs font-medium text-gray-500 flex items-center bg-gray-100 px-1.5 py-0.5 rounded">
                         0.0%
                    </span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 w-full mb-8">
<div className="relative group flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-gray-600 transition-colors" data-lucide="search"></i>
<input className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300 transition-all placeholder:text-gray-400" placeholder="Search products..." type="text"/>
</div>
<div className="flex gap-3">
<div className="relative">
<button className="w-full sm:w-auto flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all whitespace-nowrap">
<span>Status: All</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
<div className="relative">
<button className="w-full sm:w-auto flex items-center justify-between gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all whitespace-nowrap">
<span>Sort: Revenue</span>
<i className="w-4 h-4 text-gray-400" data-lucide="arrow-down-narrow-wide"></i>
</button>
</div>
</div>
</div>

<section className="mb-12">
<div className="flex items-center gap-3 mb-5">
<button className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
<span className="text-lg font-medium tracking-tight">Active</span>
</button>
<span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">3</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-200 group flex flex-col h-full">
<div className="p-5 flex flex-col flex-1">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#24A1DE]/10 flex items-center justify-center text-[#24A1DE]">
<i className="w-5 h-5 fill-current" data-lucide="send"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">VIP Forex Signals</h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs text-green-700 font-medium">Active</span>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-50">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                            Daily high-precision setups for GBP/USD and EUR/USD pairs.
                        </p>
<div className="mt-auto space-y-4">
<div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md border border-gray-100">
<i className="w-4 h-4 text-gray-400" data-lucide="link"></i>
<span className="truncate">Linked to: <span className="font-medium text-gray-900">Global FX Channel</span></span>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
<div>
<p className="text-xs text-gray-500 mb-1">Members</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-gray-900 tracking-tight">842</span>
</div>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Revenue/mo</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-gray-900 tracking-tight">$42,100</span>
<span className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded flex items-center" title="Month over Month">
<i className="w-3 h-3 mr-0.5" data-lucide="arrow-up"></i>12%
                                        </span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 px-5 py-3 border-t border-gray-100 rounded-b-xl flex items-center justify-between">
<span className="text-sm font-medium text-gray-900">$50.00 <span className="text-gray-500 font-normal">/ month</span></span>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 group-hover:text-indigo-600">
                            View Members
                            <i className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-200 group flex flex-col h-full">
<div className="p-5 flex flex-col flex-1">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
<i className="w-5 h-5 fill-current" data-lucide="message-circle"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">Crypto Inner Circle</h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-xs text-green-700 font-medium">Active</span>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-50">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                            Exclusive altcoin alerts and weekly AMA sessions.
                        </p>
<div className="mt-auto space-y-4">
<div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md border border-gray-100">
<i className="w-4 h-4 text-gray-400" data-lucide="link"></i>
<span className="truncate">Linked to: <span className="font-medium text-gray-900">Whale Alert Group</span></span>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
<div>
<p className="text-xs text-gray-500 mb-1">Members</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-gray-900 tracking-tight">124</span>
</div>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Revenue/mo</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-gray-900 tracking-tight">$12,276</span>
<span className="text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded flex items-center" title="No change">
                                           0%
                                        </span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 px-5 py-3 border-t border-gray-100 rounded-b-xl flex items-center justify-between">
<span className="text-sm font-medium text-gray-900">$99.00 <span className="text-gray-500 font-normal">/ month</span></span>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 group-hover:text-indigo-600">
                            View Members
                            <i className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-gray-300 transition-all duration-200 group flex flex-col h-full">
<div className="p-5 flex flex-col flex-1">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 leading-tight">SMC Trading Course</h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-xs text-green-700 font-medium">Active</span>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-50">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                            Lifetime access to the smart money concepts PDF library.
                        </p>
<div className="mt-auto space-y-4">
<div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-md border border-gray-100">
<i className="w-4 h-4 text-gray-400" data-lucide="link"></i>
<span className="truncate">Linked to: <span className="font-medium text-gray-900">SMC Resources</span></span>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
<div>
<p className="text-xs text-gray-500 mb-1">Members</p>
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-gray-900 tracking-tight">1,029</span>
</div>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Total Sales</p>
<div>
<p className="text-lg font-semibold text-gray-900 tracking-tight">$30,870</p>
<span className="text-[10px] text-gray-500 uppercase tracking-wide">+$1,240 last 30d</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gray-50 px-5 py-3 border-t border-gray-100 rounded-b-xl flex items-center justify-between">
<span className="text-sm font-medium text-gray-900">$30.00 <span className="text-gray-500 font-normal">one-time</span></span>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 group-hover:text-indigo-600">
                            View Sales
                            <i className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-3 mb-5">
<button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down"></i>
<span className="text-lg font-medium tracking-tight">Inactive</span>
</button>
<span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 text-xs font-medium">2</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-gray-50/50 rounded-xl border border-gray-200 border-dashed flex flex-col h-full opacity-90 hover:opacity-100 transition-opacity">
<div className="p-5 flex flex-col flex-1">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3 opacity-60">
<div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
<i className="w-5 h-5 fill-current" data-lucide="send"></i>
</div>
<div>
<h3 className="text-base font-medium text-gray-700">Stock Alerts - Legacy</h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-xs text-amber-700 font-medium">Paused</span>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-lg p-3 mb-6">
<i className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" data-lucide="alert-circle"></i>
<p className="text-xs text-amber-800 leading-snug">
                                This product is currently paused. New members cannot subscribe. Existing members retain access.
                            </p>
</div>
<div className="mt-auto grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/60 opacity-60">
<div>
<p className="text-xs text-gray-500 mb-1">Members</p>
<span className="text-lg font-semibold text-gray-700 tracking-tight">12</span>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Price</p>
<p className="text-lg font-semibold text-gray-700 tracking-tight">$25/mo</p>
</div>
</div>
</div>
<div className="px-5 py-3 border-t border-gray-200 flex items-center justify-end">
<button className="text-sm font-medium text-amber-700 hover:text-amber-800 flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                            Resume Product
                        </button>
</div>
</div>

<div className="bg-gray-50/50 rounded-xl border border-gray-200 border-dashed flex flex-col h-full opacity-90 hover:opacity-100 transition-opacity">
<div className="p-5 flex flex-col flex-1">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<div>
<h3 className="text-base font-medium text-gray-700">Untitled Bundle</h3>
<div className="flex items-center gap-1.5 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
<span className="text-xs text-gray-500 font-medium">Draft</span>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex flex-col items-center justify-center py-6 text-center">
<p className="text-sm text-gray-500 mb-1">Missing Connection</p>
<p className="text-xs text-gray-400">Link a Telegram channel or WhatsApp group to activate.</p>
</div>
<div className="mt-auto pt-4 border-t border-gray-200/60 opacity-40">
<div className="h-8 bg-gray-200 rounded animate-pulse w-2/3"></div>
</div>
</div>
<div className="px-5 py-3 border-t border-gray-200 flex items-center justify-end">
<button className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-2 transition-colors">
<i className="w-4 h-4" data-lucide="settings-2"></i>
                            Finish Setup
                        </button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
