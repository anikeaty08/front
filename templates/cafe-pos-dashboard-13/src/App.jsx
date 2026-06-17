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
        
        // Simple Clock Script
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            document.getElementById('clock').textContent = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();
    
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
      

<header className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-6">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<span className="font-semibold tracking-tighter text-sm">NX</span>
</div>
<h1 className="font-semibold tracking-tight text-sm text-zinc-900">NEXUS POS</h1>
</div>

<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-zinc-50 rounded-md border border-zinc-200">
<i className="w-4 h-4 text-zinc-500" data-lucide="store"></i>
<span className="text-xs font-medium text-zinc-700">Siam Paragon (HQ)</span>
</div>

<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-500">System Normal</span>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden lg:flex flex-col items-end mr-2">
<span className="text-xs font-semibold text-zinc-900 tracking-tight" id="clock">10:42 AM</span>
<span className="text-[10px] text-zinc-500 font-medium">Oct 24, 2023</span>
</div>
<div className="flex items-center gap-1">
<button className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
<button className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="printer"></i>
</button>
<button className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="wifi"></i>
</button>
</div>
<div className="h-8 w-[1px] bg-zinc-200 mx-1"></div>
<button className="flex items-center gap-2 pl-1 pr-2 py-1 hover:bg-zinc-100 rounded-md transition-colors">
<div className="w-7 h-7 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 border border-indigo-100">
<span className="text-[10px] font-bold">JD</span>
</div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium leading-none">John Doe</span>
<span className="text-[10px] text-zinc-500 leading-none mt-1">Cashier #4</span>
</div>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<section className="flex-1 flex flex-col bg-zinc-50 border-r border-zinc-200 relative">

<div className="px-6 py-4 bg-white border-b border-zinc-200 sticky top-0 z-10 shadow-[0_1px_2px_0_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between gap-4 mb-4">
<div className="relative flex-1 max-w-lg">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 transition-all" placeholder="Search menu items..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 border border-zinc-200 bg-white rounded text-[10px] text-zinc-400 font-medium shadow-sm">/</div>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-lg text-xs font-medium text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="maximize"></i>
<span>Fullscreen</span>
</button>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide select-none">
<button className="px-3.5 py-1.5 bg-zinc-900 text-white border border-zinc-900 rounded-md text-xs font-medium shadow-sm whitespace-nowrap transition-transform active:scale-95">Coffee</button>
<button className="px-3.5 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors whitespace-nowrap shadow-sm active:scale-95">Non-Coffee</button>
<button className="px-3.5 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors whitespace-nowrap shadow-sm active:scale-95">Signature</button>
<button className="px-3.5 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors whitespace-nowrap shadow-sm active:scale-95">Bakery</button>
<button className="px-3.5 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors whitespace-nowrap shadow-sm active:scale-95">Brunch</button>
<button className="px-3.5 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors whitespace-nowrap shadow-sm active:scale-95">Add-ons</button>
<button className="px-3.5 py-1.5 bg-white border border-zinc-200 text-zinc-600 rounded-md text-xs font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-colors whitespace-nowrap shadow-sm active:scale-95">Retail</button>
</div>
</div>

<div className="p-6 overflow-y-auto flex-1">

<div className="flex items-center gap-2 mb-4">
<h2 className="text-sm font-semibold text-zinc-900">Hot Coffee</h2>
<div className="h-px bg-zinc-200 flex-1"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-amber-50 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-amber-700 opacity-60" data-lucide="coffee"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Espresso</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Single Shot</span>
<span className="text-sm font-semibold text-zinc-900">$3.00</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-orange-50/50 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-orange-800 opacity-60" data-lucide="coffee"></i>
<div className="absolute top-2 right-2 px-1.5 py-0.5 bg-zinc-900 text-white text-[9px] font-medium rounded uppercase tracking-wide">Pop</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Americano</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Hot / Iced</span>
<span className="text-sm font-semibold text-zinc-900">$4.00</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative ring-1 ring-zinc-900/5">
<div className="aspect-square bg-stone-100 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-stone-600 opacity-60" data-lucide="cup-soda"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Caffe Latte</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Mild Roast</span>
<span className="text-sm font-semibold text-zinc-900">$4.50</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-stone-50 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-stone-500 opacity-60" data-lucide="cup-soda"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Cappuccino</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Foam</span>
<span className="text-sm font-semibold text-zinc-900">$4.50</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-orange-50 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-orange-900 opacity-40" data-lucide="coffee"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Flat White</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Double Ristretto</span>
<span className="text-sm font-semibold text-zinc-900">$4.75</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-amber-950/5 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-amber-900 opacity-40" data-lucide="coffee"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Caffe Mocha</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Chocolate</span>
<span className="text-sm font-semibold text-zinc-900">$5.25</span>
</div>
</div>
</div>

<div className="flex items-center gap-2 mb-4">
<h2 className="text-sm font-semibold text-zinc-900">Signature &amp; Non-Coffee</h2>
<div className="h-px bg-zinc-200 flex-1"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-zinc-100 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-zinc-600 opacity-60" data-lucide="droplets"></i>
<div className="absolute top-2 right-2 px-1.5 py-0.5 bg-amber-500 text-white text-[9px] font-medium rounded uppercase tracking-wide">New</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Dirty Coffee</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Special</span>
<span className="text-sm font-semibold text-zinc-900">$5.50</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-emerald-50 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-emerald-600 opacity-60" data-lucide="cup-soda"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Uji Matcha</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Premium</span>
<span className="text-sm font-semibold text-zinc-900">$5.50</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-yellow-50 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-yellow-600 opacity-60" data-lucide="citrus"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Yuzu Cold Brew</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Refresher</span>
<span className="text-sm font-semibold text-zinc-900">$6.00</span>
</div>
</div>

<div className="group bg-zinc-50 border border-zinc-200 rounded-xl p-3 cursor-not-allowed relative opacity-60">
<div className="aspect-square bg-zinc-100 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<span className="px-2 py-1 bg-zinc-800 text-white text-[10px] font-semibold rounded uppercase tracking-wider">Sold Out</span>
</div>
<h3 className="text-sm font-medium text-zinc-500 truncate">Hojicha Latte</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-400">Roasted Tea</span>
<span className="text-sm font-semibold text-zinc-400">$5.50</span>
</div>
</div>
</div>

<div className="flex items-center gap-2 mb-4">
<h2 className="text-sm font-semibold text-zinc-900">Bakery</h2>
<div className="h-px bg-zinc-200 flex-1"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-amber-50 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-amber-500 opacity-60" data-lucide="croissant"></i>
<div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500 border border-white"></div>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Butter Croissant</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">French Butter</span>
<span className="text-sm font-semibold text-zinc-900">$3.50</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-amber-100/50 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-amber-700 opacity-60" data-lucide="cookie"></i>
<div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-500 border border-white"></div>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Pain Au Chocolat</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-amber-600 font-medium">Low Stock</span>
<span className="text-sm font-semibold text-zinc-900">$3.75</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-xl p-3 cursor-pointer hover:border-zinc-400 hover:shadow-md transition-all duration-200 relative">
<div className="aspect-square bg-stone-100 rounded-lg mb-3 overflow-hidden relative flex items-center justify-center">
<i className="w-8 h-8 text-stone-500 opacity-60" data-lucide="disc"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Sesame Bagel</h3>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500">Cream Cheese</span>
<span className="text-sm font-semibold text-zinc-900">$4.00</span>
</div>
</div>
</div>
</div>
</section>

<aside className="w-[400px] bg-white flex flex-col h-full shadow-[-1px_0_4px_0_rgba(0,0,0,0.02)] z-30">

<div className="p-4 border-b border-zinc-200 bg-white">
<div className="flex items-center justify-between mb-3">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 font-medium">Order ID</span>
<span className="text-sm font-semibold text-zinc-900 tracking-tight">#NEX-8821</span>
</div>
<div className="px-2 py-1 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded text-[10px] font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="utensils"></i> Dine-in (T-12)
                    </div>
</div>
<button className="w-full flex items-center justify-between p-3 bg-zinc-50 border border-zinc-200 rounded-lg hover:border-zinc-300 hover:bg-zinc-100 transition-all group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-200 text-zinc-600 rounded-full flex items-center justify-center border border-zinc-300">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<div className="flex flex-col items-start">
<span className="text-xs font-semibold text-zinc-900 group-hover:text-black">Add Customer</span>
<span className="text-[10px] text-zinc-500">Guest User</span>
</div>
</div>
<i className="w-4 h-4 text-zinc-400" data-lucide="plus-circle"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-2">

<div className="flex items-start gap-2 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100 hover:border-indigo-200 group transition-all mb-1">
<div className="flex flex-col items-center gap-1 mt-1">
<button className="w-5 h-5 flex items-center justify-center rounded bg-white border border-indigo-100 text-zinc-600 hover:bg-indigo-100 text-xs">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
<span className="text-sm font-semibold text-indigo-900">1</span>
<button className="w-5 h-5 flex items-center justify-center rounded bg-white border border-indigo-100 text-zinc-600 hover:bg-indigo-100 text-xs">
<i className="w-3 h-3" data-lucide="minus"></i>
</button>
</div>
<div className="flex-1 ml-2">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-zinc-900">Iced Americano</h4>
<span className="text-sm font-semibold text-zinc-900">$4.50</span>
</div>
<div className="flex flex-wrap gap-1 mt-1.5">
<span className="px-1.5 py-0.5 bg-white border border-indigo-100 rounded text-[10px] text-zinc-600 font-medium">House Blend</span>
<span className="px-1.5 py-0.5 bg-white border border-indigo-100 rounded text-[10px] text-zinc-600 font-medium">Less Ice</span>
</div>
<div className="mt-2 flex gap-2">
<button className="text-[10px] text-indigo-400 hover:text-indigo-600 font-medium underline">Edit</button>
<button className="text-[10px] text-indigo-400 hover:text-indigo-600 font-medium underline">Note</button>
</div>
</div>
<button className="mt-1 text-indigo-200 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="flex items-start gap-2 p-3 rounded-lg hover:bg-zinc-50 group transition-colors border border-transparent hover:border-zinc-200 mb-1">
<div className="flex flex-col items-center gap-1 mt-1">
<button className="w-5 h-5 flex items-center justify-center rounded bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-xs">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
<span className="text-sm font-semibold text-zinc-900">2</span>
<button className="w-5 h-5 flex items-center justify-center rounded bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-xs">
<i className="w-3 h-3" data-lucide="minus"></i>
</button>
</div>
<div className="flex-1 ml-2">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-zinc-900">Butter Croissant</h4>
<span className="text-sm font-semibold text-zinc-900">$7.00</span>
</div>
<div className="flex flex-wrap gap-1 mt-1.5">
<span className="px-1.5 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium">Warmed</span>
</div>
</div>
<button className="mt-1 text-zinc-300 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="flex items-start gap-2 p-3 rounded-lg hover:bg-zinc-50 group transition-colors border border-transparent hover:border-zinc-200 mb-1">
<div className="flex flex-col items-center gap-1 mt-1">
<button className="w-5 h-5 flex items-center justify-center rounded bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-xs">
<i className="w-3 h-3" data-lucide="plus"></i>
</button>
<span className="text-sm font-semibold text-zinc-900">1</span>
<button className="w-5 h-5 flex items-center justify-center rounded bg-zinc-100 text-zinc-600 hover:bg-zinc-200 text-xs">
<i className="w-3 h-3" data-lucide="minus"></i>
</button>
</div>
<div className="flex-1 ml-2">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-zinc-900">Seasonal Beans (250g)</h4>
<span className="text-sm font-semibold text-zinc-900">$18.00</span>
</div>
<div className="mt-1">
<span className="px-1.5 py-0.5 bg-zinc-100 rounded text-[10px] text-zinc-600 font-medium">Whole Bean</span>
</div>
</div>
<button className="mt-1 text-zinc-300 hover:text-red-500 transition-colors">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>

<div className="bg-zinc-50 border-t border-zinc-200 p-4 space-y-2.5">
<div className="flex justify-between items-center text-xs text-zinc-500">
<span>Subtotal (4 items)</span>
<span className="font-medium text-zinc-700">$29.50</span>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500">
<span>Discount</span>
<span className="font-medium text-zinc-400">--</span>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500">
<span>Tax (7%)</span>
<span className="font-medium text-zinc-700">$2.07</span>
</div>
<div className="h-px bg-zinc-200 my-2"></div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-medium text-zinc-900">Grand Total</span>
<span className="text-2xl font-bold tracking-tight text-zinc-900">$31.57</span>
</div>

<div className="grid grid-cols-4 gap-2 mb-2">
<button className="flex flex-col items-center justify-center p-2 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all text-zinc-600">
<i className="w-4 h-4 mb-1" data-lucide="percent"></i>
<span className="text-[10px] font-medium">Disc.</span>
</button>
<button className="flex flex-col items-center justify-center p-2 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all text-zinc-600">
<i className="w-4 h-4 mb-1" data-lucide="sticky-note"></i>
<span className="text-[10px] font-medium">Note</span>
</button>
<button className="relative flex flex-col items-center justify-center p-2 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 hover:border-zinc-300 transition-all text-zinc-600">
<i className="w-4 h-4 mb-1" data-lucide="pause-circle"></i>
<span className="text-[10px] font-medium">Hold</span>
</button>
<button className="flex flex-col items-center justify-center p-2 bg-white border border-zinc-200 rounded-lg hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all text-zinc-600">
<i className="w-4 h-4 mb-1" data-lucide="trash-2"></i>
<span className="text-[10px] font-medium">Clear</span>
</button>
</div>

<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white h-12 rounded-lg font-semibold text-sm shadow-md shadow-zinc-900/10 flex items-center justify-between px-6 transition-all active:scale-[0.99]">
<span>Charge</span>
<div className="flex items-center gap-2">
<span>$31.57</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</button>
</div>
</aside>
</main>

<footer className="h-10 bg-white border-t border-zinc-200 flex items-center justify-between px-4 text-xs font-medium text-zinc-500 shrink-0">
<div className="flex items-center gap-4">
<button className="hover:text-zinc-900 flex items-center gap-1.5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="history"></i> Orders (F1)
            </button>
<div className="h-4 w-[1px] bg-zinc-200"></div>
<button className="hover:text-zinc-900 flex items-center gap-1.5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="archive-restore"></i> Drawer (F2)
            </button>
<div className="h-4 w-[1px] bg-zinc-200"></div>
<button className="hover:text-zinc-900 flex items-center gap-1.5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw"></i> Sync
            </button>
</div>
<div className="flex items-center gap-4">
<span className="text-zinc-400">v2.4.1</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="hidden md:inline">Connected</span>
</div>
</div>
</footer>


    </>
  );
}
