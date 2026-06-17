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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center sm:hidden">
<button className="text-zinc-500 hover:text-zinc-900 focus:outline-none p-2 -ml-2" type="button">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter" href="#">NOVA</a>
</div>

<nav className="hidden sm:flex space-x-8 items-center absolute left-1/2 transform -translate-x-1/2">
<a className="text-sm font-medium text-zinc-900" href="#">Shop</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Journal</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a>
</nav>

<div className="flex items-center space-x-4 sm:space-x-6">
<div className="hidden md:flex relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="block w-full pl-9 pr-3 py-1.5 border border-zinc-200 rounded-full text-sm placeholder-zinc-400 bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 focus:bg-white transition-all w-48 group-hover:w-64" placeholder="Search products..." type="text"/>
</div>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors md:hidden">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-[0.65rem] font-medium rounded-full h-4 w-4 flex items-center justify-center">3</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-white border-b border-zinc-200 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-100 via-transparent to-transparent opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40 relative z-10 flex flex-col items-center text-center">
<span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 mb-6 border border-zinc-200">
<span className="flex w-2 h-2 bg-green-500 rounded-full mr-2"></span> New Fall Collection Available
            </span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 max-w-3xl">
                Refined essentials for <br className="hidden md:block"/> everyday life.
            </h1>
<p className="mt-6 text-base md:text-lg text-zinc-500 max-w-xl font-normal">
                Discover our latest collection of meticulously crafted objects designed to elevate your daily routines through minimalist aesthetics and superior materials.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
<a className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-all w-full sm:w-auto" href="#">
                    Shop Collection
                </a>
<a className="inline-flex justify-center items-center px-6 py-3 border border-zinc-200 text-sm font-medium rounded-full text-zinc-700 bg-white hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-200 transition-all w-full sm:w-auto" href="#">
                    Explore Journal
                </a>
</div>
</div>
</section>

<section className="bg-white border-b border-zinc-200 py-12 md:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Trending Now</h2>
<div className="flex items-center space-x-2">
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x snap-mandatory">

<div className="group relative flex flex-col w-[260px] sm:w-72 flex-shrink-0 snap-start">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur text-zinc-900 text-[0.65rem] font-medium px-2 py-1 rounded-md uppercase tracking-wider shadow-sm border border-zinc-100">Bestseller</div>
<img alt="Canvas Tote" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Everyday Canvas Tote
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Natural / Heavyweight</p>
</div>
<p className="text-sm font-medium text-zinc-900">$65</p>
</div>
</div>

<div className="group relative flex flex-col w-[260px] sm:w-72 flex-shrink-0 snap-start">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<img alt="Wireless Headphones" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Acoustic Over-Ear
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Matte Silver / ANC</p>
</div>
<p className="text-sm font-medium text-zinc-900">$299</p>
</div>
</div>

<div className="group relative flex flex-col w-[260px] sm:w-72 flex-shrink-0 snap-start">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<div className="absolute top-3 left-3 z-10 bg-zinc-900 text-white text-[0.65rem] font-medium px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">New</div>
<img alt="Leather Wallet" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Slim Card Holder
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Saddle Brown / Full-grain</p>
</div>
<p className="text-sm font-medium text-zinc-900">$58</p>
</div>
</div>

<div className="group relative flex flex-col w-[260px] sm:w-72 flex-shrink-0 snap-start">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<img alt="Minimalist Watch" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Chronograph Watch
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Matte Black / Leather</p>
</div>
<p className="text-sm font-medium text-zinc-900">$249</p>
</div>
</div>

<div className="group relative flex flex-col w-[260px] sm:w-72 flex-shrink-0 snap-start">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<img alt="Ceramic Mug" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Handcrafted Ceramic Mug
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Speckled White / 12oz</p>
</div>
<p className="text-sm font-medium text-zinc-900">$32</p>
</div>
</div>
</div>
</div>
</section>

<main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full flex flex-col lg:flex-row gap-10">

<aside className="hidden lg:block w-64 flex-shrink-0">
<div className="sticky top-24 space-y-10">

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4 tracking-tight">Categories</h3>
<div className="space-y-3">

<label className="flex items-center group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4 mr-3">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-full h-full border border-zinc-300 rounded bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none transition-opacity" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">All Products</span>
<span className="ml-auto text-xs text-zinc-400">124</span>
</label>
<label className="flex items-center group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4 mr-3">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full h-full border border-zinc-300 rounded bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none transition-opacity" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Apparel</span>
<span className="ml-auto text-xs text-zinc-400">42</span>
</label>
<label className="flex items-center group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4 mr-3">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full h-full border border-zinc-300 rounded bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none transition-opacity" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Accessories</span>
<span className="ml-auto text-xs text-zinc-400">56</span>
</label>
<label className="flex items-center group cursor-pointer">
<div className="relative flex items-center justify-center w-4 h-4 mr-3">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full h-full border border-zinc-300 rounded bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 text-xs pointer-events-none transition-opacity" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Home Objects</span>
<span className="ml-auto text-xs text-zinc-400">26</span>
</label>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4 tracking-tight">Price Range</h3>
<div className="px-1">
<div className="relative w-full h-1 bg-zinc-200 rounded-full mb-4">
<div className="absolute left-1/4 right-1/4 h-full bg-zinc-900 rounded-full"></div>
<div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border border-zinc-300 rounded-full shadow-sm cursor-grab"></div>
<div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 bg-white border border-zinc-300 rounded-full shadow-sm cursor-grab"></div>
</div>
<div className="flex items-center justify-between text-xs text-zinc-500">
<span>$50</span>
<span>$250</span>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4 tracking-tight">Availability</h3>
<div className="space-y-4">

<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">In Stock Only</span>
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="block w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer-checked:bg-zinc-900 transition-colors"></div>
<div className="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">On Sale</span>
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="block w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer-checked:bg-zinc-900 transition-colors"></div>
<div className="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
</div>
</label>
</div>
</div>
</div>
</aside>

<div className="flex-1">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">All Products</h2>
<div className="flex items-center space-x-4 w-full sm:w-auto">
<button className="lg:hidden flex items-center space-x-2 text-sm font-medium text-zinc-700 px-3 py-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-50">
<iconify-icon icon="solar:tuning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Filters</span>
</button>

<div className="relative inline-block text-left w-full sm:w-auto">
<button className="inline-flex justify-between w-full sm:w-48 rounded-lg border border-zinc-200 px-4 py-2 bg-white text-sm font-medium text-zinc-700 hover:bg-zinc-50 focus:outline-none items-center shadow-sm" type="button">
                            Sort by: Featured
                            <iconify-icon className="-mr-1 ml-2 h-4 w-4" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<img alt="Minimalist Watch" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Chronograph Watch
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Matte Black / Leather</p>
</div>
<p className="text-sm font-medium text-zinc-900">$249</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur text-zinc-900 text-[0.65rem] font-medium px-2 py-1 rounded-md uppercase tracking-wider shadow-sm border border-zinc-100">Bestseller</div>
<img alt="Canvas Tote" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Everyday Canvas Tote
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Natural / Heavyweight</p>
</div>
<p className="text-sm font-medium text-zinc-900">$65</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<img alt="Ceramic Mug" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Handcrafted Ceramic Mug
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Speckled White / 12oz</p>
</div>
<p className="text-sm font-medium text-zinc-900">$32</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<img alt="Wool Beanie" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Merino Wool Beanie
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Charcoal / Ribbed knit</p>
</div>
<p className="text-sm font-medium text-zinc-900">$45</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<div className="absolute top-3 left-3 z-10 bg-zinc-900 text-white text-[0.65rem] font-medium px-2 py-1 rounded-md uppercase tracking-wider shadow-sm">New</div>
<img alt="Leather Wallet" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Slim Card Holder
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Saddle Brown / Full-grain</p>
</div>
<p className="text-sm font-medium text-zinc-900">$58</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-4 isolate">
<img alt="Wireless Headphones" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
<button className="w-full bg-white/90 backdrop-blur-sm text-zinc-900 font-medium text-sm py-3 rounded-xl shadow-lg border border-white/20 hover:bg-white flex items-center justify-center space-x-2">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Add to Cart</span>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0 z-0"></span>
                                    Acoustic Over-Ear
                                </a>
</h3>
<p className="mt-1 text-sm text-zinc-500">Matte Silver / ANC</p>
</div>
<p className="text-sm font-medium text-zinc-900">$299</p>
</div>
</div>
</div>

<div className="mt-16 flex items-center justify-center space-x-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 transition-colors cursor-not-allowed" disabled="">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 text-white font-medium text-sm shadow-sm">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent text-zinc-600 hover:bg-zinc-100 font-medium text-sm transition-colors">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent text-zinc-600 hover:bg-zinc-100 font-medium text-sm transition-colors">3</button>
<span className="text-zinc-400 px-2">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</main>

<footer className="bg-white border-t border-zinc-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

<div className="md:col-span-2">
<span className="text-xl font-semibold tracking-tighter block mb-4">NOVA</span>
<p className="text-sm text-zinc-500 mb-6 max-w-sm font-normal">
                        Curated essentials for the modern lifestyle. Quality over quantity, designed to last.
                    </p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md">
<input className="flex-1 appearance-none border border-zinc-200 rounded-lg px-4 py-2.5 text-sm bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:bg-white transition-colors" placeholder="Email address" required="" type="email"/>
<button className="px-4 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors whitespace-nowrap" type="submit">
                            Subscribe
                        </button>
</form>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-4">Shop</h3>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">All Products</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Apparel</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-4">Support</h3>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">
                    © 2023 Nova Essentials Inc. All rights reserved.
                </p>
<div className="flex space-x-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-lg" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:text-zinc-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
