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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-lines"></div>

<nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 gap-8">

<div className="flex-shrink-0 flex items-center cursor-pointer">
<span className="text-xl font-semibold tracking-tighter text-white">MESHOP</span>
</div>

<div className="hidden md:flex flex-1 max-w-lg relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-500 group-focus-within:text-pink-400 transition-colors" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-800 rounded-lg leading-5 bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/50 sm:text-sm transition-all duration-200" placeholder="Search for products, brands and more" type="text"/>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:flex flex-col items-center group cursor-pointer hover:text-white transition-colors">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] mt-0.5 font-medium">App</span>
</div>
<div className="flex flex-col items-center group cursor-pointer hover:text-white transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] mt-0.5 font-medium">Profile</span>
</div>
<div className="flex flex-col items-center group cursor-pointer hover:text-white transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-pink-500 text-[8px] text-white font-bold">2</span>
<span className="text-[10px] mt-0.5 font-medium">Cart</span>
</div>
</div>
</div>

<div className="md:hidden pb-3">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-500" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-9 pr-3 py-2 border border-slate-800 rounded-lg bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-pink-500/50 sm:text-xs" placeholder="Search by Keyword or Product ID" type="text"/>
</div>
</div>
</div>

<div className="border-t border-slate-800 bg-slate-950/50 hidden md:block">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3 text-sm text-slate-400 font-normal">
<a className="hover:text-pink-400 transition-colors" href="#">Women Ethnic</a>
<a className="hover:text-pink-400 transition-colors" href="#">Women Western</a>
<a className="hover:text-pink-400 transition-colors" href="#">Men</a>
<a className="hover:text-pink-400 transition-colors" href="#">Kids</a>
<a className="hover:text-pink-400 transition-colors" href="#">Home &amp; Kitchen</a>
<a className="hover:text-pink-400 transition-colors" href="#">Beauty &amp; Health</a>
<a className="hover:text-pink-400 transition-colors" href="#">Jewellery &amp; Accessories</a>
<a className="hover:text-pink-400 transition-colors" href="#">Electronics</a>
</div>
</div>
</div>
</nav>

<main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="rounded-2xl bg-gradient-to-r from-pink-900/40 via-purple-900/40 to-slate-900 border border-slate-800/60 p-6 md:p-10 mb-8 relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
<div className="relative z-10 max-w-xl">
<span className="inline-block px-2 py-1 bg-pink-500/20 text-pink-300 rounded text-xs font-medium mb-3 border border-pink-500/20">Lowest Prices</span>
<h1 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-2">
                    Best Quality, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Direct From Manufacturers</span>
</h1>
<p className="text-slate-400 text-sm md:text-base font-light mb-6">Shop the latest trends in fashion and electronics with free delivery and cash on delivery options.</p>
<button className="bg-white text-slate-950 hover:bg-slate-200 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    Start Shopping
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6">

<div className="w-full md:w-64 flex-shrink-0 space-y-6">

<div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
<h3 className="text-sm font-semibold text-white mb-3">Sort By</h3>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-pink-500">
<div className="w-2 h-2 rounded-full bg-pink-500 hidden"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200">Relevance</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">

<div className="w-4 h-4 rounded-full border border-pink-500 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-pink-500"></div>
</div>
<span className="text-sm text-white font-medium">New Arrivals</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-pink-500"></div>
<span className="text-sm text-slate-400 group-hover:text-slate-200">Price (Low to High)</span>
</label>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-white">Filters</h3>
<button className="text-xs text-pink-400 hover:text-pink-300">Reset</button>
</div>
<div className="space-y-4">

<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Category</p>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group mb-2">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-600 rounded flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-sm text-slate-300">T-Shirts</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-600 rounded flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-300">Watches</span>
</label>
</div>
<div className="w-full h-px bg-slate-800"></div>

<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Price</p>
<div className="relative h-1 bg-slate-800 rounded-full mb-4 mt-2">
<div className="absolute left-1/4 right-1/4 h-full bg-pink-600 rounded-full"></div>
<div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer"></div>
<div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer"></div>
</div>
<div className="flex justify-between text-xs text-slate-400">
<span>$10</span>
<span>$500+</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1">
<div className="flex items-center gap-2 mb-4">
<h2 className="text-lg font-semibold text-white">Products For You</h2>
<span className="text-xs text-slate-500 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-full">1,204 Items</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="group bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-slate-900/50 flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-800">
<img alt="T-Shirt" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 backdrop-blur text-slate-950 text-[10px] font-semibold rounded flex items-center gap-1">
                                4.2 <iconify-icon className="text-green-600" icon="solar:star-bold" width="10"></iconify-icon>
</div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3 flex flex-col flex-1">
<h3 className="text-sm text-slate-300 font-normal truncate group-hover:text-pink-400 transition-colors">Men's Cotton T-Shirt</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-base font-semibold text-white">$149</span>
<span className="text-xs text-slate-500 line-through">$399</span>
<span className="text-xs text-green-400 font-medium">62% off</span>
</div>
<div className="mt-auto pt-3 flex items-center gap-1">
<span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">Free Delivery</span>
</div>
</div>
</div>

<div className="group bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-slate-900/50 flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-800">
<img alt="Shoes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 backdrop-blur text-slate-950 text-[10px] font-semibold rounded flex items-center gap-1">
                                4.5 <iconify-icon className="text-green-600" icon="solar:star-bold" width="10"></iconify-icon>
</div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3 flex flex-col flex-1">
<h3 className="text-sm text-slate-300 font-normal truncate group-hover:text-pink-400 transition-colors">Red Sports Sneakers</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-base font-semibold text-white">$499</span>
<span className="text-xs text-slate-500 line-through">$999</span>
<span className="text-xs text-green-400 font-medium">50% off</span>
</div>
<div className="mt-auto pt-3 flex items-center gap-1">
<span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">Best Seller</span>
</div>
</div>
</div>

<div className="group bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-slate-900/50 flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-800">
<img alt="Decor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 backdrop-blur text-slate-950 text-[10px] font-semibold rounded flex items-center gap-1">
                                3.8 <iconify-icon className="text-green-600" icon="solar:star-bold" width="10"></iconify-icon>
</div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3 flex flex-col flex-1">
<h3 className="text-sm text-slate-300 font-normal truncate group-hover:text-pink-400 transition-colors">Abstract Ceramic Vase</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-base font-semibold text-white">$210</span>
<span className="text-xs text-slate-500 line-through">$400</span>
<span className="text-xs text-green-400 font-medium">47% off</span>
</div>
</div>
</div>

<div className="group bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-slate-900/50 flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-800">
<img alt="Headphones" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 backdrop-blur text-slate-950 text-[10px] font-semibold rounded flex items-center gap-1">
                                4.8 <iconify-icon className="text-green-600" icon="solar:star-bold" width="10"></iconify-icon>
</div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3 flex flex-col flex-1">
<h3 className="text-sm text-slate-300 font-normal truncate group-hover:text-pink-400 transition-colors">Wireless Noise Cancelling</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-base font-semibold text-white">$1,299</span>
<span className="text-xs text-slate-500 line-through">$2,999</span>
<span className="text-xs text-green-400 font-medium">56% off</span>
</div>
<div className="mt-auto pt-3 flex items-center gap-1">
<span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">Only 2 left</span>
</div>
</div>
</div>

<div className="group bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-slate-900/50 flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-800">
<img alt="Black Shirt" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 backdrop-blur text-slate-950 text-[10px] font-semibold rounded flex items-center gap-1">
                                4.0 <iconify-icon className="text-green-600" icon="solar:star-bold" width="10"></iconify-icon>
</div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3 flex flex-col flex-1">
<h3 className="text-sm text-slate-300 font-normal truncate group-hover:text-pink-400 transition-colors">Cotton Regular Fit</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-base font-semibold text-white">$249</span>
<span className="text-xs text-slate-500 line-through">$699</span>
<span className="text-xs text-green-400 font-medium">64% off</span>
</div>
</div>
</div>

<div className="group bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-slate-900/50 flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-slate-800">
<img alt="Polaroid" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 backdrop-blur text-slate-950 text-[10px] font-semibold rounded flex items-center gap-1">
                                4.6 <iconify-icon className="text-green-600" icon="solar:star-bold" width="10"></iconify-icon>
</div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-slate-900/50 backdrop-blur border border-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:border-pink-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="p-3 flex flex-col flex-1">
<h3 className="text-sm text-slate-300 font-normal truncate group-hover:text-pink-400 transition-colors">Retro Instant Camera</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-base font-semibold text-white">$5,999</span>
<span className="text-xs text-slate-500 line-through">$8,000</span>
<span className="text-xs text-green-400 font-medium">25% off</span>
</div>
<div className="mt-auto pt-3 flex items-center gap-1">
<span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">Free Delivery</span>
</div>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
<button className="text-sm text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-white px-6 py-2 rounded-full transition-all">
                        Load More Products
                    </button>
</div>
</div>
</div>
</main>

<div className="border-t border-slate-800 bg-slate-950/80 mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h2 className="text-lg md:text-xl font-semibold text-white tracking-tight">Shop on the Go</h2>
<p className="text-sm text-slate-400 mt-1">Download the MeShop app for exclusive offers and faster checkout.</p>
</div>
<div className="flex gap-4">
<button className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-lg transition-colors">
<iconify-icon className="text-white" icon="solar:apple-linear" width="20"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] text-slate-400 uppercase">Download on the</span>
<span className="text-xs font-semibold text-white">App Store</span>
</div>
</button>
<button className="flex items-center gap-2 bg-slate-900 border border-slate-700 hover:border-slate-500 px-4 py-2 rounded-lg transition-colors">
<iconify-icon className="text-white" icon="solar:play-linear" width="20"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] text-slate-400 uppercase">Get it on</span>
<span className="text-xs font-semibold text-white">Google Play</span>
</div>
</button>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2023 MeShop Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Terms</a>
<a className="hover:text-slate-300" href="#">Sitemap</a>
</div>
</div>
</div>
</div>

    </>
  );
}
