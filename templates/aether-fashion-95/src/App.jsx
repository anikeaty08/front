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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<button className="lg:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>

<a className="text-lg font-medium tracking-tighter uppercase z-10" href="#">Aether</a>

<nav className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="text-sm font-normal text-zinc-900 transition-colors" href="#">Apparel</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Accessories</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Editorial</a>
</nav>

<div className="flex items-center space-x-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="relative text-zinc-500 hover:text-zinc-900 transition-colors group">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-zinc-900 rounded-full group-hover:scale-110 transition-transform"></span>
</button>
</div>
</div>
</header>

<main className="pt-24 pb-20 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tighter text-zinc-900 mb-4">
                    Autumn / Winter
                </h1>
<p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-lg">
                    A curated selection of technical fabrics and minimalist silhouettes designed for the modern metropolitan environment.
                </p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium border border-zinc-200 px-4 py-2 rounded-full hover:border-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:arrow-down" data-strokeWidth="1.5" data-width="14"></span>
                    Latest Drop
                </button>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0">
<div className="lg:sticky lg:top-32 space-y-8">

<div className="pb-6 border-b border-zinc-100">
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">Category</h3>
<ul className="space-y-2.5">
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-zinc-300 rounded-[4px] peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all group-hover:border-zinc-500"></div>
<span className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="10"></span>
</span>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">All Products</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-zinc-300 rounded-[4px] peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all group-hover:border-zinc-500"></div>
<span className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="10"></span>
</span>
</div>
<span className="text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors">Outerwear</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-zinc-300 rounded-[4px] peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all group-hover:border-zinc-500"></div>
<span className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="10"></span>
</span>
</div>
<span className="text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors">Knitwear</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-zinc-300 rounded-[4px] peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all group-hover:border-zinc-500"></div>
<span className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="10"></span>
</span>
</div>
<span className="text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors">Trousers</span>
</label>
</li>
</ul>
</div>

<div className="pb-6 border-b border-zinc-100">
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">Price Range</h3>
<div className="relative h-1 w-full bg-zinc-100 rounded-full">
<div className="absolute left-0 h-1 bg-zinc-900 rounded-full" style={{width: '60%', left: '20%'}}></div>
<div className="absolute h-3 w-3 bg-white border border-zinc-300 shadow-sm rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer" style={{left: '20%'}}></div>
<div className="absolute h-3 w-3 bg-white border border-zinc-300 shadow-sm rounded-full top-1/2 transform -translate-y-1/2 cursor-pointer" style={{left: '80%'}}></div>
</div>
<div className="flex justify-between mt-3 text-xs text-zinc-500 font-mono">
<span>$120</span>
<span>$850</span>
</div>
</div>

<div>
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-4">Color</h3>
<div className="flex flex-wrap gap-2">
<button className="w-6 h-6 rounded-full bg-black border border-zinc-200 focus:ring-1 focus:ring-offset-2 focus:ring-zinc-900 ring-offset-1"></button>
<button className="w-6 h-6 rounded-full bg-zinc-500 border border-zinc-200 hover:ring-1 hover:ring-offset-2 hover:ring-zinc-300 transition-all"></button>
<button className="w-6 h-6 rounded-full bg-[#F5F5DC] border border-zinc-200 hover:ring-1 hover:ring-offset-2 hover:ring-zinc-300 transition-all"></button>
<button className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-200 hover:ring-1 hover:ring-offset-2 hover:ring-zinc-300 transition-all"></button>
</div>
</div>
</div>
</aside>

<div className="flex-1">
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-6">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4 rounded-sm">
<img alt="Wool Coat" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-xs font-medium uppercase tracking-wide rounded-sm hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/5">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                    Add to Bag
                                </button>
</div>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] uppercase tracking-widest font-semibold text-zinc-900">New</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-1">Structured Wool Overcoat</h3>
<p className="text-xs text-zinc-500">Charcoal / Wool Blend</p>
</div>
<span className="text-sm font-medium text-zinc-900">$450</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4 rounded-sm">
<img alt="Linen Shirt" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-xs font-medium uppercase tracking-wide rounded-sm hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/5">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                    Add to Bag
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-1">Relaxed Linen Shirt</h3>
<p className="text-xs text-zinc-500">Stone / 100% Linen</p>
</div>
<span className="text-sm font-medium text-zinc-900">$180</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4 rounded-sm">
<img alt="Pleated Trousers" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-xs font-medium uppercase tracking-wide rounded-sm hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/5">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                    Add to Bag
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-1">Wide Leg Pleated Trousers</h3>
<p className="text-xs text-zinc-500">White / Cotton Drill</p>
</div>
<span className="text-sm font-medium text-zinc-900">$220</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4 rounded-sm">
<img alt="Knit Sweater" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-xs font-medium uppercase tracking-wide rounded-sm hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/5">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                    Add to Bag
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-1">Heavyweight Cotton Knit</h3>
<p className="text-xs text-zinc-500">Cream / Organic Cotton</p>
</div>
<span className="text-sm font-medium text-zinc-900">$195</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4 rounded-sm">
<img alt="Leather Tote" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-xs font-medium uppercase tracking-wide rounded-sm hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/5">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                    Add to Bag
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-1">Minimalist Leather Tote</h3>
<p className="text-xs text-zinc-500">Black / Full Grain</p>
</div>
<span className="text-sm font-medium text-zinc-900">$350</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4 rounded-sm">
<img alt="Puffer Jacket" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-xs font-medium uppercase tracking-wide rounded-sm hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/5">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                    Add to Bag
                                </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight mb-1">Technical Down Puffer</h3>
<p className="text-xs text-zinc-500">Slate / Water Resistant</p>
</div>
<span className="text-sm font-medium text-zinc-900">$550</span>
</div>
</div>
</div>

<div className="mt-20 flex justify-center">
<button className="px-8 py-3 bg-zinc-900 text-white text-xs font-medium uppercase tracking-wider rounded-sm hover:bg-zinc-800 transition-colors shadow-sm">
                        Load More Products
                    </button>
</div>
</div>
</div>
</main>

<footer className="bg-zinc-50 border-t border-zinc-200 py-16">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<a className="text-lg font-medium tracking-tighter uppercase mb-6 block" href="#">Aether</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                        Defining the intersection of utility and luxury. Designed in Copenhagen.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Apparel</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Footwear</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-6">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 mb-6">Newsletter</h4>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-white border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-sm transition-all" placeholder="email@address.com" type="email"/>
</div>
<button className="w-full bg-zinc-900 text-white px-4 py-2.5 text-xs font-medium uppercase tracking-wider rounded-sm hover:bg-zinc-800 transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="mt-16 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2024 Aether Archive. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
