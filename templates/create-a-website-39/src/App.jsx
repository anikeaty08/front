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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-gray-950/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-lg font-semibold tracking-tighter hover:opacity-80 transition-opacity text-white" href="#">
                    NOX
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm transition-colors duration-200 text-gray-400 hover:text-white" href="#collection">Collection</a>
<a className="text-sm transition-colors duration-200 text-gray-400 hover:text-white" href="#series-x">Series X</a>
<a className="text-sm transition-colors duration-200 text-gray-400 hover:text-white" href="#about">Craftsmanship</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="transition-colors text-gray-400 hover:text-white">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="relative transition-colors text-gray-400 hover:text-white">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-white"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-[120px] rounded-full pointer-events-none -z-10 bg-gray-800/20"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium w-fit border-white/10 bg-white/5 text-gray-300">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                    New Series X Available
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-white">
                    Precision for the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">darkest hours.</span>
</h1>
<p className="text-lg max-w-md leading-relaxed text-gray-400">
                    Engineered with aerospace-grade titanium and sapphire crystal. The NOX collection redefines minimalism through complexity.
                </p>
<div className="flex items-center gap-4 pt-2">
<button className="px-6 py-3 rounded text-sm font-medium transition-colors bg-white text-black hover:bg-gray-200">
                        Shop Collection
                    </button>
<button className="px-6 py-3 rounded text-sm font-medium border transition-colors text-white border-white/10 hover:bg-white/5">
                        View Lookbook
                    </button>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr via-transparent to-transparent z-10 from-gray-950"></div>

<img alt="NOX Watch Hero" className="rounded-xl grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out border shadow-2xl border-white/5 shadow-black/50" src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute -left-6 bottom-12 z-20 hidden md:block">
<div className="backdrop-blur border p-4 rounded-lg shadow-xl bg-gray-950/90 border-white/10">
<div className="flex items-center gap-3 mb-1">
<iconify-icon className="text-white" icon="solar:stopwatch-linear"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-gray-400">Movement</span>
</div>
<p className="text-sm font-medium text-white">Swiss Automatic</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y sticky top-16 z-40 border-white/5 bg-gray-950" id="collection">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
<button className="text-sm font-medium border-b pb-5 translate-y-[1px] text-white border-white">All Watches</button>
<button className="text-sm text-gray-500 pb-5 whitespace-nowrap hover:text-gray-300">Series X</button>
<button className="text-sm text-gray-500 pb-5 whitespace-nowrap hover:text-gray-300">Carbon Edition</button>
<button className="text-sm text-gray-500 pb-5 whitespace-nowrap hover:text-gray-300">Straps</button>
</div>
<div className="hidden md:flex items-center gap-4">

<label className="flex items-center cursor-pointer gap-3">
<span className="text-xs font-medium text-gray-400">In Stock Only</span>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 rounded-full peer peer-checked:bg-white transition-colors duration-200 bg-gray-800"></div>
<div className="absolute left-1 top-1 w-3 h-3 rounded-full peer-checked:translate-x-4 peer-checked:bg-black transition-transform duration-200 bg-gray-400"></div>
</div>
</label>
<div className="h-4 w-px bg-white/10"></div>
<button className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white">
                    Filter
                    <iconify-icon icon="solar:filter-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">

<aside className="w-full md:w-64 shrink-0 space-y-8 hidden md:block">

<div>
<h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Price Range</h3>
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer bg-gray-800" max="10000" min="0" type="range" value="7500"/>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>$0</span>
<span>$10k+</span>
</div>
</div>

<div>
<h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-white">Material</h3>
<div className="space-y-3">
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border flex items-center justify-center group-hover:border-gray-500 transition-colors border-gray-700 bg-gray-900">
<svg className="w-2.5 h-2.5 hidden pointer-events-none text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm group-hover:text-white transition-colors text-gray-400">Titanium</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border flex items-center justify-center group-hover:border-gray-500 transition-colors border-gray-700 bg-gray-900">
<svg className="w-2.5 h-2.5 hidden pointer-events-none text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm group-hover:text-white transition-colors text-gray-400">Carbon Fiber</span>
</label>
<label className="custom-checkbox flex items-center gap-3 cursor-pointer group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border flex items-center justify-center group-hover:border-gray-500 transition-colors border-gray-700 bg-gray-900">
<svg className="w-2.5 h-2.5 hidden pointer-events-none text-black" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-sm group-hover:text-white transition-colors text-gray-400">Ceramic</span>
</label>
</div>
</div>
</aside>

<div className="flex-1">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative flex flex-col gap-3">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border bg-gray-900 border-white/5">
<img alt="Watch" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1619134778706-7015533a6150?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<button className="flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-all bg-black/20 text-white hover:bg-white hover:text-black">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-xs font-medium py-3 rounded shadow-lg transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white">NOX Chrono Alpha</h3>
<p className="text-xs text-gray-500">Titanium / 42mm</p>
</div>
<p className="text-sm font-medium text-white">$1,295</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border bg-gray-900 border-white/5">
<span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-sm bg-white text-black">Bestseller</span>
<img alt="Watch" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1548171915-e79a380a2a4b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<button className="flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-all bg-black/20 text-white hover:bg-white hover:text-black">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-xs font-medium py-3 rounded shadow-lg transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white">NOX Stealth Diver</h3>
<p className="text-xs text-gray-500">Ceramic / 300m</p>
</div>
<p className="text-sm font-medium text-white">$2,450</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border bg-gray-900 border-white/5">
<img alt="Watch" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1623998021446-45cd9b269056?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<button className="flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-all bg-black/20 text-white hover:bg-white hover:text-black">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-xs font-medium py-3 rounded shadow-lg transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white">NOX Lunar Pilot</h3>
<p className="text-xs text-gray-500">Steel / Chronograph</p>
</div>
<p className="text-sm font-medium text-white">$3,100</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border bg-gray-900 border-white/5">
<div className="absolute inset-0 flex items-center justify-center z-10 bg-black/60">
<span className="text-xs font-medium border px-3 py-1 rounded-full backdrop-blur-sm text-white border-white">Sold Out</span>
</div>
<img alt="Watch" className="h-full w-full object-cover object-center grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start opacity-60">
<div>
<h3 className="text-sm font-medium text-white">NOX Shadow</h3>
<p className="text-xs text-gray-500">PVD Coated / Ltd Ed.</p>
</div>
<p className="text-sm font-medium text-white">$4,500</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border bg-gray-900 border-white/5">
<img alt="Watch" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<button className="flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-all bg-black/20 text-white hover:bg-white hover:text-black">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-xs font-medium py-3 rounded shadow-lg transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white">NOX Automata</h3>
<p className="text-xs text-gray-500">Sapphire / Skeleton</p>
</div>
<p className="text-sm font-medium text-white">$5,200</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border bg-gray-900 border-white/5">
<img alt="Watch" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3">
<button className="flex h-8 w-8 items-center justify-center rounded-full backdrop-blur transition-all bg-black/20 text-white hover:bg-white hover:text-black">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full text-xs font-medium py-3 rounded shadow-lg transition-colors flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200">
<iconify-icon icon="solar:bag-plus-linear" width="16"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white">NOX Field Ops</h3>
<p className="text-xs text-gray-500">Nylon / Date</p>
</div>
<p className="text-sm font-medium text-white">$895</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="text-sm transition-colors border-b pb-1 text-gray-400 hover:text-white border-gray-800 hover:border-white">
                    Load More Products
                </button>
</div>
</div>
</section>

<section className="border-t py-24 border-white/5 bg-gray-950">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">Engineering Standards</h2>
<p className="max-w-xl text-gray-400">Every NOX timepiece undergoes rigorous testing to ensure it withstands the pressures of the deep and the altitude of the sky.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-xl border transition-colors bg-gray-900/30 border-white/5 hover:border-white/10">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-gray-800 text-white">
<iconify-icon icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-white">Sapphire Crystal</h3>
<p className="text-sm leading-relaxed text-gray-400">Scratch-resistant synthetic sapphire with anti-reflective coating on both sides for maximum clarity.</p>
</div>

<div className="p-6 rounded-xl border transition-colors bg-gray-900/30 border-white/5 hover:border-white/10">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-gray-800 text-white">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-white">30 ATM Water Resistant</h3>
<p className="text-sm leading-relaxed text-gray-400">Engineered to withstand pressures equivalent to a depth of 300 meters. Ready for the ocean.</p>
</div>

<div className="p-6 rounded-xl border transition-colors bg-gray-900/30 border-white/5 hover:border-white/10">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-gray-800 text-white">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 text-white">Swiss Movement</h3>
<p className="text-sm leading-relaxed text-gray-400">Powered by high-precision Swiss automatic movements with a 72-hour power reserve.</p>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 border-white/5 bg-gray-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-bold tracking-tighter mb-6 block text-white" href="#">NOX</a>
<p className="text-sm text-gray-500 mb-6 max-w-sm">
                        Defining the intersection of utility and luxury. Designed in Tokyo, engineered in Switzerland.
                    </p>
<div className="flex gap-4">
<a className="text-gray-500 transition-colors hover:text-white" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-500 transition-colors hover:text-white" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 text-white">Shop</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 transition-colors hover:text-white" href="#">New Arrivals</a></li>
<li><a className="text-xs text-gray-500 transition-colors hover:text-white" href="#">Best Sellers</a></li>
<li><a className="text-xs text-gray-500 transition-colors hover:text-white" href="#">Straps &amp; Accessories</a></li>
<li><a className="text-xs text-gray-500 transition-colors hover:text-white" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4 text-white">Support</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 transition-colors hover:text-white" href="#">Warranty</a></li>
<li><a className="text-xs text-gray-500 transition-colors hover:text-white" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-xs text-gray-500 transition-colors hover:text-white" href="#">Service Centers</a></li>
<li><a className="text-xs text-gray-500 transition-colors hover:text-white" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4 border-white/5">
<p className="text-[10px] text-gray-600">© 2024 NOX Watch Co. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-[10px] text-gray-600 hover:text-gray-400" href="#">Privacy Policy</a>
<a className="text-[10px] text-gray-600 hover:text-gray-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
