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
      

<aside className="w-64 bg-white border-r border-slate-200/70 flex flex-col justify-between hidden md:flex h-full">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="text-xs font-medium tracking-tight">V</span>
</div>
<span className="text-sm font-medium tracking-tight">VENTURA POS</span>
</div>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-900 bg-slate-50 rounded-md transition-colors font-medium" href="#">
<iconify-icon icon="solar:shop-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Point of Sale
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Inventory
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Analytics
                </a>
</nav>
</div>

<div className="p-4 border-t border-slate-100">
<div className="mb-4 flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-100/50">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium">Database Synced</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-medium">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">John Doe</span>
<span className="text-[10px] text-slate-400">Store Manager</span>
</div>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full min-w-0">

<header className="h-16 flex items-center justify-between px-6 bg-white border-b border-slate-200/70 shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-lg font-medium tracking-tight text-slate-900">New Sale</h1>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex items-center gap-2 text-slate-400 text-sm">
<span>#INV-2024-0892</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all w-64 placeholder:text-slate-400" placeholder="Search global inventory..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden group-focus-within:inline-flex items-center h-5 px-1.5 text-[10px] font-medium text-slate-500 bg-slate-100 border border-slate-200 rounded">⌘K</kbd>
</div>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 flex flex-col bg-slate-50/50 p-6 overflow-y-auto">

<div className="mb-6 flex gap-4">
<div className="flex-1 bg-amber-50 border border-amber-100 rounded-lg p-3 flex items-start gap-3">
<iconify-icon className="text-amber-600 mt-0.5" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-amber-900">Low Stock Alert</h3>
<p className="text-xs text-amber-700/80 mt-1">3 items are below reorder threshold. Inventory updates are queued.</p>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-6">
<div className="flex gap-2">
<button className="px-4 py-1.5 text-xs font-medium bg-slate-900 text-white rounded-md shadow-sm">All Items</button>
<button className="px-4 py-1.5 text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-md transition-colors">Electronics</button>
<button className="px-4 py-1.5 text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-md transition-colors">Accessories</button>
<button className="px-4 py-1.5 text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-md transition-colors">Services</button>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-500">Sort by:</span>
<div className="relative flex items-center">
<select className="appearance-none bg-transparent pl-2 pr-6 py-1 text-xs font-medium text-slate-700 cursor-pointer focus:outline-none">
<option>Popularity</option>
<option>Price: Low to High</option>
</select>
<iconify-icon className="absolute right-0 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all cursor-pointer relative">
<div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900 truncate">MacBook Air M2</h3>
<span className="text-sm font-semibold text-slate-900">$1,199</span>
</div>
<div className="flex justify-between items-center mt-3">
<span className="text-xs text-slate-500">Stock: <span className="text-slate-900 font-medium">12</span></span>
<button className="w-6 h-6 rounded flex items-center justify-center bg-slate-50 text-slate-600 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all cursor-pointer relative">
<div className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-rose-50 text-rose-600 border border-rose-100 rounded text-[10px] font-medium uppercase tracking-wide">Low Stock</div>
<div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:keyboard-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900 truncate">Mechanical Keyboard</h3>
<span className="text-sm font-semibold text-slate-900">$149</span>
</div>
<div className="flex justify-between items-center mt-3">
<span className="text-xs text-rose-600 font-medium">Only 2 left</span>
<button className="w-6 h-6 rounded flex items-center justify-center bg-slate-50 text-slate-600 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all cursor-pointer relative">
<div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:mouse-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900 truncate">Wireless Mouse</h3>
<span className="text-sm font-semibold text-slate-900">$89</span>
</div>
<div className="flex justify-between items-center mt-3">
<span className="text-xs text-slate-500">Stock: <span className="text-slate-900 font-medium">45</span></span>
<button className="w-6 h-6 rounded flex items-center justify-center bg-slate-50 text-slate-600 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all cursor-pointer relative">
<div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:headphones-round-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900 truncate">Noise Cancelling Headset</h3>
<span className="text-sm font-semibold text-slate-900">$349</span>
</div>
<div className="flex justify-between items-center mt-3">
<span className="text-xs text-slate-500">Stock: <span className="text-slate-900 font-medium">8</span></span>
<button className="w-6 h-6 rounded flex items-center justify-center bg-slate-50 text-slate-600 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all cursor-pointer relative">
<div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:smartphone-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-3">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-slate-900 truncate">Phone Stand Aluminum</h3>
<span className="text-sm font-semibold text-slate-900">$29</span>
</div>
<div className="flex justify-between items-center mt-3">
<span className="text-xs text-slate-500">Stock: <span className="text-slate-900 font-medium">150</span></span>
<button className="w-6 h-6 rounded flex items-center justify-center bg-slate-50 text-slate-600 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-96 bg-white border-l border-slate-200/70 flex flex-col shrink-0 z-20">

<div className="p-4 border-b border-slate-100">
<label className="block text-xs font-medium text-slate-500 mb-2">Customer</label>
<div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Walk-in Customer</p>
<p className="text-xs text-slate-400">Guest</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="flex gap-3 group">
<div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-400" icon="solar:keyboard-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<h4 className="text-sm font-medium text-slate-900">Mechanical Keyboard</h4>
<span className="text-sm font-medium text-slate-900">$149.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center border border-slate-200 rounded-md bg-white">
<button className="px-2 py-0.5 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:minus-linear" width="12"></iconify-icon>
</button>
<span className="text-xs font-medium text-slate-900 px-1 w-6 text-center">1</span>
<button className="px-2 py-0.5 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="12"></iconify-icon>
</button>
</div>
<button className="text-slate-400 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex gap-3 group">
<div className="w-12 h-12 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-400" icon="solar:mouse-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<h4 className="text-sm font-medium text-slate-900">Wireless Mouse</h4>
<span className="text-sm font-medium text-slate-900">$178.00</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center border border-slate-200 rounded-md bg-white">
<button className="px-2 py-0.5 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:minus-linear" width="12"></iconify-icon>
</button>
<span className="text-xs font-medium text-slate-900 px-1 w-6 text-center">2</span>
<button className="px-2 py-0.5 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="12"></iconify-icon>
</button>
</div>
<button className="text-slate-400 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-all">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-4 border-t border-slate-200">
<div className="space-y-2 mb-4">
<div className="flex justify-between text-xs text-slate-500">
<span>Subtotal</span>
<span>$327.00</span>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Tax (8%)</span>
<span>$26.16</span>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Discount</span>
<span>- $0.00</span>
</div>
<div className="h-px bg-slate-200 my-2"></div>
<div className="flex justify-between text-sm font-medium text-slate-900">
<span>Total</span>
<span className="text-base tracking-tight">$353.16</span>
</div>
</div>
<div className="grid grid-cols-4 gap-2 mb-3">
<button className="col-span-1 bg-white border border-slate-200 rounded-md py-2 flex items-center justify-center text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-all">
<iconify-icon icon="solar:printer-linear" width="18"></iconify-icon>
</button>
<button className="col-span-3 bg-slate-900 text-white rounded-md py-2 text-sm font-medium hover:bg-slate-800 transition-all shadow-sm flex items-center justify-center gap-2">
<span>Complete Sale</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-center text-slate-400">Receipt will be generated automatically via PDF service.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
