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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
},
spacing: {
'128': '32rem',
}
}
}
}

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
      

<div className="bg-slate-50 border-b border-slate-100 py-2">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
<p className="text-xs font-medium text-slate-600 flex items-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
                Free shipping on orders over $150
            </p>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-900 p-2 -ml-2" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center">
<a className="text-lg font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<iconify-icon height="20" icon="solar:bonfire-linear" width="20"></iconify-icon>
                        CAMPER’S HAVEN
                    </a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Equipment</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Apparel</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Footwear</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-slate-900 transition-colors relative">
<iconify-icon height="20" icon="solar:bag-3-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
</button>
</div>
</div>
</div>
</nav>

<div className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">New Collection</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6">
                Forge your own path <br className="hidden md:block"/> into the wilderness.
            </h1>
<p className="max-w-2xl mx-auto text-lg text-slate-500 font-light mb-10 leading-relaxed">
                Premium camping gear designed for the modern explorer. Lightweight, durable, and crafted for those who seek solace in nature without compromising on comfort.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all" href="#">
                    Shop Collection
                </a>
<a className="inline-flex justify-center items-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 transition-all" href="#">
                    View Lookbook
                </a>
</div>
</div>

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-full h-full opacity-30 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
</div>
</div>

<div className="sticky top-16 z-40 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
<div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
<button className="px-3 py-1.5 text-xs font-medium bg-slate-900 text-white rounded-full">All Gear</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap">Tents &amp; Shelters</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap">Sleeping Bags</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap">Cooking</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap">Navigation</button>
</div>
<div className="flex items-center gap-2 border-l border-slate-100 pl-4 ml-4">
<button className="flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900">
<iconify-icon icon="solar:sort-vertical-linear"></iconify-icon>
                    Sort
                </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="hidden lg:block space-y-8">
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Availability</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 opacity-0 absolute" type="checkbox"/>
<div className="h-4 w-4 border border-slate-300 rounded bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">In Stock</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 opacity-0 absolute" type="checkbox"/>
<div className="h-4 w-4 border border-slate-300 rounded bg-white peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Pre-order</span>
</label>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Price Range</h3>
<div className="space-y-4">
<div className="relative h-1 bg-slate-200 rounded-full">
<div className="absolute left-0 w-1/2 h-full bg-slate-900 rounded-full"></div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-slate-900 rounded-full shadow cursor-pointer"></div>
</div>
<div className="flex justify-between text-xs text-slate-500 font-medium">
<span>$0</span>
<span>$500+</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:tent-linear" width="48"></iconify-icon>
</div>

<img alt="Tent" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3C/svg%3E"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                Alpine Dome Tent
                            </a>
</h3>
<p className="mt-1 text-sm text-slate-500">Ultralight 2-Person</p>
<p className="mt-2 text-sm font-medium text-slate-900">$299.00</p>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100 relative mb-4">
<div className="absolute top-3 left-3 bg-slate-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm z-10">New</div>
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:backpack-linear" width="48"></iconify-icon>
</div>
<img alt="Backpack" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3C/svg%3E"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                Trailblazer 40L
                            </a>
</h3>
<p className="mt-1 text-sm text-slate-500">Waterproof Fabric</p>
<p className="mt-2 text-sm font-medium text-slate-900">$145.00</p>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:flame-linear" width="48"></iconify-icon>
</div>
<img alt="Stove" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3C/svg%3E"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                Titan Portable Stove
                            </a>
</h3>
<p className="mt-1 text-sm text-slate-500">Compact System</p>
<p className="mt-2 text-sm font-medium text-slate-900">$89.00</p>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:sleeping-square-linear" width="48"></iconify-icon>
</div>
<img alt="Sleeping Bag" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3C/svg%3E"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                Down Sleeping Bag
                            </a>
</h3>
<p className="mt-1 text-sm text-slate-500">-5°C Rated</p>
<p className="mt-2 text-sm font-medium text-slate-900">$210.00</p>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:flashlight-linear" width="48"></iconify-icon>
</div>
<img alt="Headlamp" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3C/svg%3E"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                Lumen 400 Headlamp
                            </a>
</h3>
<p className="mt-1 text-sm text-slate-500">Rechargeable</p>
<p className="mt-2 text-sm font-medium text-slate-900">$45.00</p>
</div>

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-100 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:cup-linear" width="48"></iconify-icon>
</div>
<img alt="Mug" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3C/svg%3E"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-slate-900 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-slate-900">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                Titanium Mug 450
                            </a>
</h3>
<p className="mt-1 text-sm text-slate-500">Double Wall</p>
<p className="mt-2 text-sm font-medium text-slate-900">$35.00</p>
</div>
</div>

<div className="mt-12 flex justify-center">
<nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
<a className="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus:z-20 focus:outline-offset-0" href="#">
<span className="sr-only">Previous</span>
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</a>
<a aria-current="page" className="relative z-10 inline-flex items-center bg-slate-900 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600" href="#">1</a>
<a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus:z-20 focus:outline-offset-0" href="#">2</a>
<a className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus:z-20 focus:outline-offset-0" href="#">3</a>
<a className="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus:z-20 focus:outline-offset-0" href="#">
<span className="sr-only">Next</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</nav>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="p-3 bg-slate-50 rounded-full mb-4 text-slate-900">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Fast Shipping</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">Free delivery on all orders over $150. Shipped within 24 hours.</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="p-3 bg-slate-50 rounded-full mb-4 text-slate-900">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Lifetime Warranty</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">We stand behind our gear. Every item is guaranteed for life.</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="p-3 bg-slate-50 rounded-full mb-4 text-slate-900">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Easy Returns</h3>
<p className="mt-2 text-sm text-slate-500 leading-relaxed">Not the right fit? Return it within 30 days for a full refund.</p>
</div>
</div>
</div>
</div>

<footer className="bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<a className="text-sm font-semibold tracking-tight text-slate-900 flex items-center gap-2 mb-4" href="#">
<iconify-icon height="18" icon="solar:bonfire-linear" width="18"></iconify-icon>
                        CAMPER’S HAVEN
                    </a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Equipping adventurers for the journey ahead. Born in the mountains, raised in the wild.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Tents</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Sleeping Bags</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Apparel</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Journal</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Stay Updated</h4>
<form className="flex gap-2">
<input className="w-full min-w-0 appearance-none rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900" placeholder="Enter your email" type="email"/>
<button className="flex-none rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Camper’s Haven. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600" href="#">
<iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600" href="#">
<iconify-icon icon="brandico:facebook" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
