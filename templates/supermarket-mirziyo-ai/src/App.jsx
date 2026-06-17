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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900 uppercase">Supermart</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-900" href="#">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>

<div className="flex items-center gap-4">

<div className="hidden lg:flex items-center relative">
<iconify-icon className="absolute left-3 text-gray-400" icon="solar:magnifier-linear" strokeWidth="1.5"></iconify-icon>
<input className="pl-10 pr-4 py-2 w-64 bg-gray-100 border-transparent rounded-full text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none" placeholder="Search products..." type="text"/>
</div>
<button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
<iconify-icon className="text-xl" icon="solar:magnifier-linear" strokeWidth="1.5"></iconify-icon>
</button>

<button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
</button>

<button className="p-2 text-gray-600 hover:text-gray-900 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
</button>

<button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-red-50 text-red-600 text-xs font-medium mb-6 border border-red-100">Fast Delivery in 15 mins</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
                            Fresh groceries, <br/> delivered to your door.
                        </h1>
<p className="text-lg text-gray-500 mb-8 max-w-lg">
                            Get your daily essentials, fresh produce, and favorite brands delivered quickly. Quality guaranteed on every order.
                        </p>
<div className="flex flex-wrap gap-4">
<button className="bg-red-600 text-white px-6 py-3 rounded-full font-medium text-sm hover:bg-red-700 transition-colors shadow-sm flex items-center gap-2">
                                Shop Now <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm">
                                Browse Categories
                            </button>
</div>
</div>
<div className="relative hidden lg:block">

<div className="w-full aspect-square max-w-md ml-auto relative">
<div className="absolute inset-0 bg-red-50 rounded-full blur-3xl opacity-50"></div>
<div className="relative h-full w-full bg-white border border-gray-100 rounded-[2.5rem] shadow-xl overflow-hidden bg-pattern flex items-center justify-center p-8">
<div className="grid grid-cols-2 gap-4 w-full h-full">
<div className="bg-green-50 rounded-2xl flex items-center justify-center border border-green-100">
<iconify-icon className="text-5xl text-green-600 opacity-80" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100 mt-8">
<iconify-icon className="text-5xl text-orange-600 opacity-80" icon="solar:bread-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 mb-8">
<iconify-icon className="text-5xl text-blue-600 opacity-80" icon="solar:bottle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-purple-50 rounded-2xl flex items-center justify-center border border-purple-100">
<iconify-icon className="text-5xl text-purple-600 opacity-80" icon="solar:bone-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Explore Categories</h2>
<a className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center gap-1" href="#">
                        View All <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="flex overflow-x-auto gap-4 sm:gap-6 pb-4 hide-scroll">

<a className="flex-shrink-0 group flex flex-col items-center gap-3 w-24 sm:w-28" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-sm transition-all">
<iconify-icon className="text-2xl sm:text-3xl text-gray-600 group-hover:text-red-600 transition-colors" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-gray-700 text-center">Fruits</span>
</a>
<a className="flex-shrink-0 group flex flex-col items-center gap-3 w-24 sm:w-28" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-sm transition-all">
<iconify-icon className="text-2xl sm:text-3xl text-gray-600 group-hover:text-red-600 transition-colors" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-gray-700 text-center">Vegetables</span>
</a>
<a className="flex-shrink-0 group flex flex-col items-center gap-3 w-24 sm:w-28" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-sm transition-all">
<iconify-icon className="text-2xl sm:text-3xl text-gray-600 group-hover:text-red-600 transition-colors" icon="solar:cup-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-gray-700 text-center">Dairy</span>
</a>
<a className="flex-shrink-0 group flex flex-col items-center gap-3 w-24 sm:w-28" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-sm transition-all">
<iconify-icon className="text-2xl sm:text-3xl text-gray-600 group-hover:text-red-600 transition-colors" icon="solar:bone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-gray-700 text-center">Meat</span>
</a>
<a className="flex-shrink-0 group flex flex-col items-center gap-3 w-24 sm:w-28" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-sm transition-all">
<iconify-icon className="text-2xl sm:text-3xl text-gray-600 group-hover:text-red-600 transition-colors" icon="solar:bread-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-gray-700 text-center">Bakery</span>
</a>
<a className="flex-shrink-0 group flex flex-col items-center gap-3 w-24 sm:w-28" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-sm transition-all">
<iconify-icon className="text-2xl sm:text-3xl text-gray-600 group-hover:text-red-600 transition-colors" icon="solar:bottle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-gray-700 text-center">Beverages</span>
</a>
<a className="flex-shrink-0 group flex flex-col items-center gap-3 w-24 sm:w-28" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-sm transition-all">
<iconify-icon className="text-2xl sm:text-3xl text-gray-600 group-hover:text-red-600 transition-colors" icon="solar:snowflake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-gray-700 text-center">Frozen</span>
</a>
<a className="flex-shrink-0 group flex flex-col items-center gap-3 w-24 sm:w-28" href="#">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-red-200 group-hover:shadow-sm transition-all">
<iconify-icon className="text-2xl sm:text-3xl text-gray-600 group-hover:text-red-600 transition-colors" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs sm:text-sm font-medium text-gray-700 text-center">Snacks</span>
</a>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
<div className="flex items-center gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 flex items-center gap-2">
                            Flash Sales
                            <iconify-icon className="text-red-500" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</h2>

<div className="flex items-center gap-1 text-sm font-medium">
<div className="bg-red-50 text-red-600 px-2 py-1 rounded-md border border-red-100">02</div>
<span className="text-gray-400">:</span>
<div className="bg-red-50 text-red-600 px-2 py-1 rounded-md border border-red-100">45</div>
<span className="text-gray-400">:</span>
<div className="bg-red-50 text-red-600 px-2 py-1 rounded-md border border-red-100">12</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

<div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">-20%</div>
<div className="aspect-square bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-5xl text-gray-300" icon="solar:bottle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">Fresh Orange Juice 1L</h3>
<span className="text-xs text-gray-500 mb-2">Beverages</span>
<div className="mt-auto flex items-end justify-between">
<div>
<span className="block text-xs text-gray-400 line-through">25,000 UZS</span>
<span className="block text-base font-semibold text-red-600">20,000 UZS</span>
</div>
<button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">-15%</div>
<div className="aspect-square bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-5xl text-gray-300" icon="solar:bread-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">Whole Wheat Bread</h3>
<span className="text-xs text-gray-500 mb-2">Bakery</span>
<div className="mt-auto flex items-end justify-between">
<div>
<span className="block text-xs text-gray-400 line-through">8,000 UZS</span>
<span className="block text-base font-semibold text-red-600">6,800 UZS</span>
</div>
<button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">-30%</div>
<div className="aspect-square bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-5xl text-gray-300" icon="solar:cup-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">Premium Milk 3.2%</h3>
<span className="text-xs text-gray-500 mb-2">Dairy</span>
<div className="mt-auto flex items-end justify-between">
<div>
<span className="block text-xs text-gray-400 line-through">15,000 UZS</span>
<span className="block text-base font-semibold text-red-600">10,500 UZS</span>
</div>
<button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all hidden md:flex">
<div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full">-10%</div>
<div className="aspect-square bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-5xl text-gray-300" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">Red Apples (Local) 1kg</h3>
<span className="text-xs text-gray-500 mb-2">Fruits</span>
<div className="mt-auto flex items-end justify-between">
<div>
<span className="block text-xs text-gray-400 line-through">12,000 UZS</span>
<span className="block text-base font-semibold text-red-600">10,800 UZS</span>
</div>
<button className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Popular Products</h2>
<p className="text-sm text-gray-500 mt-1">Most bought items this week</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">


<div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-4xl text-gray-200" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 mb-1">Everyday Pasta 500g</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="block text-base font-semibold text-gray-900">14,500 UZS</span>
<button className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-4xl text-gray-200" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 mb-1">Fresh Spinach Bunch</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="block text-base font-semibold text-gray-900">5,000 UZS</span>
<button className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-4xl text-gray-200" icon="solar:bone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 mb-1">Chicken Breast 1kg</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="block text-base font-semibold text-gray-900">45,000 UZS</span>
<button className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-4xl text-gray-200" icon="solar:cup-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 mb-1">Natural Yogurt 400g</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="block text-base font-semibold text-gray-900">12,000 UZS</span>
<button className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:flex group relative flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-4xl text-gray-200" icon="solar:bottle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 mb-1">Mineral Water 1.5L</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="block text-base font-semibold text-gray-900">4,500 UZS</span>
<button className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="hidden md:flex group relative flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-4xl text-gray-200" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 mb-1">Bananas 1kg</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="block text-base font-semibold text-gray-900">22,000 UZS</span>
<button className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="hidden lg:flex group relative flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-4xl text-gray-200" icon="solar:bread-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 mb-1">French Baguette</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="block text-base font-semibold text-gray-900">6,000 UZS</span>
<button className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="hidden lg:flex group relative flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition-all">
<div className="aspect-square bg-white flex items-center justify-center p-6 border-b border-gray-100">
<iconify-icon className="text-4xl text-gray-200" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-gray-900 mb-1">Oatmeal Cookies 300g</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="block text-base font-semibold text-gray-900">18,500 UZS</span>
<button className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                        Load More Products
                    </button>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
<div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Lightning Fast Delivery</h3>
<p className="text-sm text-gray-500">Your groceries arrive in as little as 15 minutes, perfectly packed.</p>
</div>
<div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
<div className="w-14 h-14 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Guaranteed Freshness</h3>
<p className="text-sm text-gray-500">We source daily from trusted local farmers and suppliers.</p>
</div>
<div className="flex flex-col items-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">Secure &amp; Easy Payments</h3>
<p className="text-sm text-gray-500">Pay safely online or on delivery with multiple payment options.</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-red-600 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-lg">
<div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-red-500 rounded-full opacity-50 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-red-700 rounded-full opacity-50 blur-2xl"></div>
<div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">Get 50,000 UZS off your first order!</h2>
<p className="text-red-100 text-sm sm:text-base">Use code <strong className="text-white bg-red-500/50 px-2 py-0.5 rounded ml-1">NEW50</strong> at checkout. Minimum order 200,000 UZS.</p>
</div>
<div className="relative z-10 flex-shrink-0">
<button className="bg-white text-red-600 px-8 py-3 rounded-full font-medium text-sm hover:bg-gray-50 transition-colors shadow-sm">
                            Claim Offer
                        </button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">What Our Customers Say</h2>
<p className="text-sm text-gray-500 mt-2">Join thousands of happy shoppers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 line-clamp-3">"The delivery is incredibly fast, and the vegetables are always fresh. It's exactly what I needed for my busy schedule. Highly recommend Supermart!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-sm">A</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Aziza M.</h4>
<span className="text-xs text-gray-500">Tashkent</span>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 line-clamp-3">"Great app interface and very reliable service. I love the flash sales section, always finding good deals on everyday items."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-sm">T</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Timur K.</h4>
<span className="text-xs text-gray-500">Samarkand</span>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 line-clamp-3">"Customer support is excellent. Had a minor issue with one item and they refunded it immediately without any hassle. Trustworthy store."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-sm">N</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Nargiza B.</h4>
<span className="text-xs text-gray-500">Bukhara</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 overflow-hidden border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Shop faster with our app</h2>
<p className="text-base text-gray-500 mb-8 max-w-md mx-auto lg:mx-0">Download the Supermart app to track orders in real-time, get exclusive mobile-only discounts, and reorder favorites with one tap.</p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
<iconify-icon className="text-2xl" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-left">
<span className="block text-[10px] leading-tight text-gray-300">Download on the</span>
<span className="block text-sm font-medium leading-tight">App Store</span>
</div>
</button>
<button className="bg-gray-900 text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
<iconify-icon className="text-2xl" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-left">
<span className="block text-[10px] leading-tight text-gray-300">GET IT ON</span>
<span className="block text-sm font-medium leading-tight">Google Play</span>
</div>
</button>
</div>
</div>
<div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">

<div className="w-64 h-[500px] bg-white border-[8px] border-gray-900 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col">

<div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl mx-auto w-32 z-20"></div>

<div className="flex-grow bg-gray-50 p-4 pt-10 flex flex-col gap-4">
<div className="h-8 bg-gray-200 rounded-full w-full"></div>
<div className="h-32 bg-red-100 rounded-2xl w-full"></div>
<div className="grid grid-cols-4 gap-2">
<div className="h-12 bg-gray-200 rounded-xl"></div>
<div className="h-12 bg-gray-200 rounded-xl"></div>
<div className="h-12 bg-gray-200 rounded-xl"></div>
<div className="h-12 bg-gray-200 rounded-xl"></div>
</div>
<div className="flex-grow bg-gray-200 rounded-2xl w-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<iconify-icon className="text-4xl text-gray-300 mb-4" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Stay updated on discounts</h2>
<p className="text-sm text-gray-500 mb-8">Subscribe to our newsletter to receive exclusive offers and weekly flash sale alerts.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-grow px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:bg-white focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all outline-none" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-red-700 transition-colors shadow-sm whitespace-nowrap" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900 uppercase">Supermart</span>
</div>
<p className="text-sm text-gray-500 mb-6 max-w-xs">Your trusted local supermarket, now online. Freshness delivered to your door every single day.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Store Locator</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">News &amp; Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Help</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Customer Support</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Delivery Info</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Returns &amp; Refunds</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:phone-linear"></iconify-icon>
                            +998 71 200 00 00
                        </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon className="text-gray-400" icon="solar:letter-linear"></iconify-icon>
                            info@supermart.uz
                        </li>
<li className="flex items-start gap-2 text-sm text-gray-500">
<iconify-icon className="text-gray-400 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
                            Tashkent, Yunusabad district, 12A
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2024 Supermart. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-gray-400 hover:text-gray-600" href="#">Privacy Policy</a>
<a className="text-xs text-gray-400 hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
