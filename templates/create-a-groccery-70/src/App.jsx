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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white">
<span className="text-xs font-bold">P</span>
</div>
                        PANTRY
                    </a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
<a className="text-gray-900 transition-colors" href="#">Shop</a>
<a className="hover:text-gray-900 transition-colors" href="#">Recipes</a>
<a className="hover:text-gray-900 transition-colors" href="#">Sustainability</a>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 w-64 focus-within:ring-2 focus-within:ring-gray-100 focus-within:border-gray-300 transition-all">
<iconify-icon className="text-gray-400" icon="lucide:search" width="16"></iconify-icon>
<input className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2 placeholder-gray-400 text-gray-900 outline-none" placeholder="Search essentials..." type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative p-2 text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full transition-all group">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 -mt-1 -mr-1 bg-black text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full border-2 border-white">3</span>
</button>
</div>
</div>
</div>
</div>
</nav>

<main className="pt-24 pb-20">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
<div className="relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
<div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-16">
<div className="space-y-6 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-gray-600 tracking-tight">Same-day delivery available</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1]">
                            Organic essentials,<br/>delivered fresh.
                        </h1>
<p className="text-base text-gray-500 max-w-md leading-relaxed">
                            Experience the finest selection of farm-fresh produce and pantry staples. Sourced responsibly, delivered to your doorstep.
                        </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
                                Start Shopping
                                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-full text-sm font-medium hover:border-gray-300 transition-colors">
                                View Deals
                            </button>
</div>
</div>

<div className="relative h-64 md:h-full min-h-[300px] flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-100/50 via-gray-50 to-transparent"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 transform translate-y-4">
<div className="w-32 h-32 bg-gray-50 rounded-lg mb-3 flex items-center justify-center">
<iconify-icon className="text-gray-300" icon="lucide:apple" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="h-2 w-20 bg-gray-100 rounded mb-2"></div>
<div className="h-2 w-12 bg-gray-100 rounded"></div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 transform -translate-y-4">
<div className="w-32 h-32 bg-gray-50 rounded-lg mb-3 flex items-center justify-center">
<iconify-icon className="text-gray-300" icon="lucide:carrot" strokeWidth="1" width="48"></iconify-icon>
</div>
<div className="h-2 w-20 bg-gray-100 rounded mb-2"></div>
<div className="h-2 w-12 bg-gray-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium tracking-tight">Shop by Category</h2>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon icon="lucide:chevron-left" width="18"></iconify-icon>
</button>
<button className="p-2 rounded-full border border-gray-200 hover:border-gray-300 text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon icon="lucide:chevron-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto hide-scroll pb-4">

<a className="flex-none w-32 group" href="#">
<div className="w-32 h-32 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:border-emerald-200 group-hover:bg-emerald-50/30 transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-emerald-600 transition-colors" icon="lucide:apple" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-center text-gray-700 group-hover:text-gray-900">Fruits</p>
</a>
<a className="flex-none w-32 group" href="#">
<div className="w-32 h-32 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:border-emerald-200 group-hover:bg-emerald-50/30 transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-emerald-600 transition-colors" icon="lucide:carrot" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-center text-gray-700 group-hover:text-gray-900">Vegetables</p>
</a>
<a className="flex-none w-32 group" href="#">
<div className="w-32 h-32 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:border-emerald-200 group-hover:bg-emerald-50/30 transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-emerald-600 transition-colors" icon="lucide:milk" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-center text-gray-700 group-hover:text-gray-900">Dairy &amp; Eggs</p>
</a>
<a className="flex-none w-32 group" href="#">
<div className="w-32 h-32 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:border-emerald-200 group-hover:bg-emerald-50/30 transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-emerald-600 transition-colors" icon="lucide:croissant" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-center text-gray-700 group-hover:text-gray-900">Bakery</p>
</a>
<a className="flex-none w-32 group" href="#">
<div className="w-32 h-32 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:border-emerald-200 group-hover:bg-emerald-50/30 transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-emerald-600 transition-colors" icon="lucide:beef" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-center text-gray-700 group-hover:text-gray-900">Meat</p>
</a>
<a className="flex-none w-32 group" href="#">
<div className="w-32 h-32 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:border-emerald-200 group-hover:bg-emerald-50/30 transition-all duration-300">
<iconify-icon className="text-gray-400 group-hover:text-emerald-600 transition-colors" icon="lucide:coffee" strokeWidth="1" width="32"></iconify-icon>
</div>
<p className="text-sm font-medium text-center text-gray-700 group-hover:text-gray-900">Beverages</p>
</a>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-xl font-medium tracking-tight text-gray-900">Trending this week</h2>
<p className="text-sm text-gray-500 mt-1">Popular picks from our community</p>
</div>
<a className="text-sm font-medium text-gray-900 hover:text-emerald-600 transition-colors" href="#">View all</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white rounded-xl p-4 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300">
<div className="absolute top-4 left-4 z-10">
<span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold tracking-wide px-2 py-1 rounded-md border border-emerald-100">ORGANIC</span>
</div>
<div className="relative w-full aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-300 group-hover:scale-105 transition-transform duration-500" icon="lucide:avocado" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-3 right-3 bg-white text-gray-900 p-2 rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-100">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-gray-900">Hass Avocados</h3>
<span className="text-sm font-medium text-gray-900">$4.99</span>
</div>
<p className="text-xs text-gray-500 mb-3">Bag of 4 • Ripen at home</p>
</div>
</div>

<div className="group relative bg-white rounded-xl p-4 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300">
<div className="relative w-full aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-300 group-hover:scale-105 transition-transform duration-500" icon="lucide:wheat" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-3 right-3 bg-white text-gray-900 p-2 rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-100">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-gray-900">Artisan Sourdough</h3>
<span className="text-sm font-medium text-gray-900">$6.50</span>
</div>
<p className="text-xs text-gray-500 mb-3">Freshly baked • 600g</p>
</div>
</div>

<div className="group relative bg-white rounded-xl p-4 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300">
<div className="absolute top-4 left-4 z-10">
<span className="bg-gray-900 text-white text-[10px] font-semibold tracking-wide px-2 py-1 rounded-md">SALE</span>
</div>
<div className="relative w-full aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-300 group-hover:scale-105 transition-transform duration-500" icon="lucide:milk-off" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-3 right-3 bg-white text-gray-900 p-2 rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-100">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-gray-900">Oat Milk</h3>
<div className="flex flex-col items-end">
<span className="text-sm font-medium text-gray-900">$3.20</span>
<span className="text-[10px] text-gray-400 line-through">$4.00</span>
</div>
</div>
<p className="text-xs text-gray-500 mb-3">Barista Edition • 1L</p>
</div>
</div>

<div className="group relative bg-white rounded-xl p-4 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300">
<div className="relative w-full aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-300 group-hover:scale-105 transition-transform duration-500" icon="lucide:egg" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-3 right-3 bg-white text-gray-900 p-2 rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-100">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-gray-900">Free Range Eggs</h3>
<span className="text-sm font-medium text-gray-900">$5.80</span>
</div>
<p className="text-xs text-gray-500 mb-3">Large • Dozen</p>
</div>
</div>

<div className="group relative bg-white rounded-xl p-4 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300">
<div className="relative w-full aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-300 group-hover:scale-105 transition-transform duration-500" icon="lucide:banana" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-3 right-3 bg-white text-gray-900 p-2 rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-100">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-gray-900">Bananas</h3>
<span className="text-sm font-medium text-gray-900">$0.69</span>
</div>
<p className="text-xs text-gray-500 mb-3">Fair trade • Per lb</p>
</div>
</div>

<div className="group relative bg-white rounded-xl p-4 border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300">
<div className="absolute top-4 left-4 z-10">
<span className="bg-red-50 text-red-600 text-[10px] font-semibold tracking-wide px-2 py-1 rounded-md border border-red-100">LOW STOCK</span>
</div>
<div className="relative w-full aspect-square bg-gray-50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-300 group-hover:scale-105 transition-transform duration-500" icon="lucide:wine" strokeWidth="1" width="64"></iconify-icon>
<button className="absolute bottom-3 right-3 bg-white text-gray-900 p-2 rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white border border-gray-100">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-medium text-gray-900">Pinot Noir</h3>
<span className="text-sm font-medium text-gray-900">$24.00</span>
</div>
<p className="text-xs text-gray-500 mb-3">Sonoma Coast • 750ml</p>
</div>
</div>

</div></div></main>
    </>
  );
}
