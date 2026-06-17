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
      

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>

<header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-40 px-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<label className="p-2 -ml-2 text-gray-500 hover:text-gray-900 cursor-pointer" htmlFor="mobile-menu-toggle">
<i className="w-6 h-6" data-lucide="menu"></i>
</label>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight text-gray-900">Favlogix</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<i className="w-6 h-6 text-gray-500" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
</div>
<img alt="User" className="w-9 h-9 rounded-full border border-gray-200 shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
</header>

<label className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300" htmlFor="mobile-menu-toggle" id="overlay"></label>

<aside className="fixed top-0 left-0 bottom-0 w-72 bg-white z-50 transform -translate-x-full transition-transform duration-300 border-r border-gray-200 flex flex-col overflow-y-auto" id="mobile-sidebar">
<div className="p-5 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight">Favlogix</span>
</div>
<label className="p-1 rounded-md hover:bg-gray-100 cursor-pointer" htmlFor="mobile-menu-toggle">
<i className="w-5 h-5 text-gray-500" data-lucide="x"></i>
</label>
</div>
<div className="p-4 space-y-6 flex-1">
<button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 text-gray-500" data-lucide="clipboard-list"></i>
                Company Details
            </button>
<div>
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">Other Pages</h3>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl shadow-sm shadow-blue-200" href="#">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-400" data-lucide="package"></i>
<span>Inventory</span>
</div>
<span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">3</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="layout-grid"></i>
<span>Product</span>
</a>
<a className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-400" data-lucide="users"></i>
<span>Users</span>
</div>
<span className="bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">5</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl" href="#">
<i className="w-5 h-5 text-gray-400" data-lucide="file-text"></i>
<span>Businesses Report</span>
</a>
</nav>
</div>
<div>
<h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">Other Modules</h3>
<nav className="space-y-1">
<a className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-600" data-lucide="shopping-bag"></i>
<span>Procurement</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="external-link"></i>
</a>
<a className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-orange-500" data-lucide="package-search"></i>
<span>Inventory</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="external-link"></i>
</a>
<a className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-600" data-lucide="banknote"></i>
<span>Accounting</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="external-link"></i>
</a>
</nav>
</div>
</div>
<div className="p-4 border-t border-gray-100">
<button className="w-full flex items-center justify-between px-4 py-3 text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-100">
<span className="font-medium">Logout</span>
<i className="w-5 h-5" data-lucide="log-out"></i>
</button>
</div>
</aside>

<main className="pt-20 pb-10 px-4 max-w-lg mx-auto w-full">

<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 flex items-center gap-2">
                Welcome, <span className="text-3xl">👋</span>
</h1>
<p className="text-lg text-gray-500 mt-2 leading-snug">Welcome back! Here's your business overview.</p>
</div>

<div className="grid grid-cols-1 gap-4 mb-8">

<div className="bg-white rounded-2xl p-5 border border-gray-200/60 shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
<i className="w-6 h-6" data-lucide="dollar-sign"></i>
</div>
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-xs font-medium border border-emerald-100">
                        +20.1% <i className="w-3 h-3" data-lucide="trending-up"></i>
</span>
</div>
<div className="mb-6">
<p className="text-gray-500 text-sm font-medium">Total Revenue</p>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mt-1">$45,231.89</h2>
</div>
<div className="absolute bottom-0 left-0 right-0 h-16 opacity-80">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 Q 20 35, 30 30 T 60 20 T 100 5 L 100 40 L 0 40 Z" fill="#ecfdf5"></path>
<path d="M0 35 Q 20 35, 30 30 T 60 20 T 100 5" fill="none" stroke="#10b981" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-white rounded-2xl p-4 border border-gray-200/60 shadow-sm relative overflow-hidden h-48 flex flex-col justify-between">
<div>
<div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 border border-gray-100 mb-3">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
</div>
<p className="text-gray-500 text-xs font-medium">Order</p>
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">142</h2>
</div>
<div className="relative h-12 -mx-4 -mb-4">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 Q 30 35, 50 25 T 100 10 L 100 40 L 0 40 Z" fill="#ecfdf5"></path>
<path d="M0 35 Q 30 35, 50 25 T 100 10" fill="none" stroke="#10b981" strokeWidth="2"></path>
</svg>
<div className="absolute top-0 right-4 bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-emerald-100 flex items-center gap-0.5">
                            +12.5% <i className="w-2.5 h-2.5" data-lucide="trending-up"></i>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 border border-gray-200/60 shadow-sm relative overflow-hidden h-48 flex flex-col justify-between">
<div>
<div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 border border-rose-100 mb-3">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<p className="text-gray-500 text-xs font-medium">Inventory</p>
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">234</h2>
</div>
<div className="relative h-12 -mx-4 -mb-4">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 10 Q 30 15, 50 25 T 100 35 L 100 40 L 0 40 Z" fill="#fff1f2"></path>
<path d="M0 10 Q 30 15, 50 25 T 100 35" fill="none" stroke="#f43f5e" strokeWidth="2"></path>
</svg>
<div className="absolute top-0 right-4 bg-rose-50 text-rose-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-rose-100 flex items-center gap-0.5">
                            -3.2% <i className="w-2.5 h-2.5" data-lucide="trending-down"></i>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 border border-gray-200/60 shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start mb-2">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-600 border border-gray-100">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-xs font-medium border border-emerald-100">
                        +15.3% <i className="w-3 h-3" data-lucide="trending-up"></i>
</span>
</div>
<div className="mb-4">
<p className="text-gray-500 text-sm font-medium">Customers</p>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mt-1">892</h2>
</div>
<div className="absolute bottom-0 left-0 right-0 h-14 opacity-80">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 30 Q 40 30, 60 20 T 100 10 L 100 40 L 0 40 Z" fill="#ecfdf5"></path>
<path d="M0 30 Q 40 30, 60 20 T 100 10" fill="none" stroke="#10b981" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm mb-6 overflow-hidden">
<div className="p-5 border-b border-gray-100">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Recent Activity</h3>
<p className="text-sm text-gray-500 mt-1">Latest updates from your business</p>
</div>
<div className="p-5">
<div className="relative pl-2">

<div className="absolute left-2.5 top-2 bottom-4 w-px bg-gray-200"></div>

<div className="relative pl-8 pb-8">
<div className="absolute left-0 top-1.5 w-5 h-5 bg-white flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-white"></span>
</div>
<p className="text-gray-900 font-medium leading-tight">New invoice INV-0075 created</p>
<p className="text-gray-400 text-sm mt-1">2 hours ago</p>
</div>

<div className="relative pl-8 pb-8">
<div className="absolute left-0 top-1.5 w-5 h-5 bg-white flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white"></span>
</div>
<p className="text-gray-900 font-medium leading-tight">Payment received for INV-0075</p>
<p className="text-gray-400 text-sm mt-1">1 hour ago</p>
</div>

<div className="relative pl-8 pb-8">
<div className="absolute left-0 top-1.5 w-5 h-5 bg-white flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-white"></span>
</div>
<p className="text-gray-900 font-medium leading-tight">Invoice INV-0076 issued</p>
<p className="text-gray-400 text-sm mt-1">30 minutes ago</p>
</div>

<div className="relative pl-8 pb-8">
<div className="absolute left-0 top-1.5 w-5 h-5 bg-white flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-rose-500 ring-4 ring-white"></span>
</div>
<p className="text-gray-900 font-medium leading-tight">Reminder sent for INV-0074</p>
<p className="text-gray-400 text-sm mt-1">15 minutes ago</p>
</div>

<div className="relative pl-8 pb-0">
<div className="absolute left-0 top-1.5 w-5 h-5 bg-white flex items-center justify-center">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-white"></span>
</div>
<p className="text-gray-900 font-medium leading-tight">Invoice INV-0073 marked as paid</p>
<p className="text-gray-400 text-sm mt-1">5 minutes ago</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200/60 shadow-sm overflow-hidden">
<div className="p-5 border-b border-gray-100 flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Low Stock Alerts</h3>
<p className="text-sm text-gray-500 mt-1">Items that need restocking</p>
</div>
<div className="bg-rose-50 p-2 rounded-lg text-rose-600">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
</div>
<div className="px-5 py-4 bg-gray-50 border-b border-gray-100">
<div className="flex items-center justify-between">
<h4 className="font-semibold text-gray-900">Electronics Category</h4>
<button className="flex items-center gap-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm">
                        Electronics <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>
</div>
<div className="p-4 space-y-3">

<div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-gray-900">USB-C Cable (3-Pack)</span>
<span className="text-xs font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">3 In-stock</span>
</div>
<p className="text-sm text-gray-500">20,000 Stock sold in 10 days</p>
</div>

<div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-gray-900">Phone Case</span>
<span className="text-xs font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">3 In-stock</span>
</div>
<p className="text-sm text-gray-500">20,000 Stock sold in 10 days</p>
</div>

<div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-gray-900">HDMI Cable</span>
<span className="text-xs font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">3 In-stock</span>
</div>
<p className="text-sm text-gray-500">20,000 Stock sold in 10 days</p>
</div>

<div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100">
<div className="flex justify-between items-start mb-2">
<span className="font-medium text-gray-900">Screen Protector</span>
<span className="text-xs font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded">3 In-stock</span>
</div>
<p className="text-sm text-gray-500">20,000 Stock sold in 10 days</p>
</div>
</div>
</div>
</main>


    </>
  );
}
