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
      

<div className="bg-zinc-900 text-white py-2 text-center">
<p className="text-[10px] uppercase tracking-widest font-medium">Complimentary Shipping on Orders Over $200</p>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/90 backdrop-blur-xl">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

<button className="block lg:hidden text-zinc-500 hover:text-zinc-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>

<a className="flex flex-col items-center lg:items-start group" href="#">
<span className="text-xl font-medium tracking-tight text-zinc-900 uppercase group-hover:text-amber-700 transition-colors">AP Collections</span>
</a>

<div className="hidden lg:flex items-center gap-10 text-sm font-medium text-zinc-500">
<a className="text-zinc-900 underline decoration-amber-700 decoration-2 underline-offset-8" href="#">Shop</a>
<a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Collections</a>
<a className="hover:text-zinc-900 transition-colors" href="#">About Us</a>
</div>

<div className="flex items-center gap-5">
<button className="hidden sm:block p-1 text-zinc-400 hover:text-zinc-900 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20"></span>
</button>
<a className="hidden sm:block p-1 text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:user" data-width="20"></span>
</a>
<div className="relative cursor-pointer">
<span className="iconify text-zinc-900" data-height="20" data-icon="lucide:shopping-bag" data-width="20"></span>
<span className="absolute -right-1 -top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-amber-700 text-[9px] font-bold text-white">3</span>
</div>
</div>
</div>
</nav>

<header className="relative w-full bg-zinc-50 overflow-hidden">
<div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
<div className="flex flex-col justify-center px-6 py-16 md:py-24 lg:px-12">
<span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-amber-700">Autumn / Winter 2024</span>
<h1 className="mb-6 text-5xl font-medium tracking-tight text-zinc-900 lg:text-6xl">
                    Timeless Essentials.<br/>Modern Form.
                </h1>
<p className="mb-8 max-w-md text-base text-zinc-500 leading-relaxed font-light">
                    Curated apparel and objects designed for the sophisticated lifestyle. Experience the new standard of luxury with AP Collections.
                </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center gap-2 bg-zinc-900 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800">
                        Shop Collection
                        <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-8 py-3 text-sm font-medium text-zinc-900 transition-all hover:border-zinc-300">
                        View Lookbook
                    </button>
</div>
</div>
<div className="relative h-64 w-full bg-zinc-200 md:h-auto">
<img alt="Hero Image" className="absolute inset-0 h-full w-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<main className="flex-grow mx-auto max-w-7xl w-full px-6 py-12">

<div className="flex flex-col gap-4 border-b border-zinc-100 pb-8 sm:flex-row sm:items-center sm:justify-between">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">All Products</h2>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 rounded-sm border border-zinc-200 bg-white px-3 py-2 text-xs font-medium uppercase tracking-wider text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 lg:hidden">
<span className="iconify" data-height="14" data-icon="lucide:filter" data-width="14"></span>
                    Filters
                </button>
<div className="relative group">
<select className="appearance-none rounded-none border-b border-zinc-200 bg-transparent py-2 pl-2 pr-8 text-sm font-medium text-zinc-600 focus:border-zinc-900 focus:outline-none cursor-pointer">
<option>Sort by: Featured</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest Arrivals</option>
</select>
<span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400">
<span className="iconify" data-height="14" data-icon="lucide:chevron-down" data-width="14"></span>
</span>
</div>
</div>
</div>
<div className="mt-8 flex gap-12">

<aside className="hidden w-60 shrink-0 lg:block space-y-10">

<div className="relative">
<input className="w-full border-b border-zinc-200 bg-transparent py-2 pl-0 pr-8 text-sm text-zinc-900 placeholder-zinc-400 focus:border-amber-700 focus:outline-none" placeholder="Search..." type="text"/>
<span className="absolute right-0 top-2.5 text-zinc-400">
<span className="iconify" data-height="16" data-icon="lucide:search" data-width="16"></span>
</span>
</div>

<div>
<h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-4">Categories</h3>
<ul className="space-y-3">
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-zinc-300 bg-white transition-all peer-checked:border-zinc-900 peer-checked:bg-zinc-900"></div>
<span className="iconify absolute left-0.5 top-0.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-height="12" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">View All</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-zinc-300 bg-white transition-all peer-checked:border-zinc-900 peer-checked:bg-zinc-900"></div>
<span className="iconify absolute left-0.5 top-0.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-height="12" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Clothing</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-zinc-300 bg-white transition-all peer-checked:border-zinc-900 peer-checked:bg-zinc-900"></div>
<span className="iconify absolute left-0.5 top-0.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-height="12" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Accessories</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 border border-zinc-300 bg-white transition-all peer-checked:border-zinc-900 peer-checked:bg-zinc-900"></div>
<span className="iconify absolute left-0.5 top-0.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-height="12" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Home Objects</span>
</label>
</li>
</ul>
</div>

<div>
<h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-4">Color</h3>
<div className="flex flex-wrap gap-3">
<button aria-label="Black" className="h-6 w-6 rounded-full border border-zinc-300 bg-zinc-900 shadow-sm ring-2 ring-transparent ring-offset-2 hover:ring-zinc-300 focus:ring-zinc-900"></button>
<button aria-label="White" className="h-6 w-6 rounded-full border border-zinc-300 bg-white shadow-sm ring-2 ring-transparent ring-offset-2 hover:ring-zinc-300 focus:ring-zinc-900"></button>
<button aria-label="Gold" className="h-6 w-6 rounded-full border border-zinc-300 bg-[#B8860B] shadow-sm ring-2 ring-transparent ring-offset-2 hover:ring-zinc-300 focus:ring-amber-700"></button>
<button aria-label="Taupe" className="h-6 w-6 rounded-full border border-zinc-300 bg-[#78716c] shadow-sm ring-2 ring-transparent ring-offset-2 hover:ring-zinc-300 focus:ring-zinc-500"></button>
</div>
</div>

<div>
<h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-4">Price</h3>
<input className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900" max="1000" min="0" type="range"/>
<div className="mt-2 flex justify-between text-xs text-zinc-500 font-medium">
<span>$0</span>
<span>$1000+</span>
</div>
</div>
</aside>

<div className="flex-1">
<div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 relative">
<div className="absolute right-0 top-0 z-10 p-3">
<button className="rounded-full bg-white/80 p-2 text-zinc-400 backdrop-blur-sm transition hover:text-red-500">
<span className="iconify" data-height="16" data-icon="lucide:heart" data-width="16"></span>
</button>
</div>
<img alt="Leather Bag" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
<button className="w-full bg-white/95 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-900 shadow-lg backdrop-blur-sm hover:bg-zinc-900 hover:text-white transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">Signature Tote</h3>
<p className="text-sm text-zinc-500">Italian Leather</p>
</div>
<p className="text-sm font-medium text-zinc-900">$295</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 relative">

<span className="absolute left-0 top-0 z-10 bg-amber-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Best Seller</span>
<div className="absolute right-0 top-0 z-10 p-3">
<button className="rounded-full bg-white/80 p-2 text-zinc-400 backdrop-blur-sm transition hover:text-red-500">
<span className="iconify" data-height="16" data-icon="lucide:heart" data-width="16"></span>
</button>
</div>
<img alt="Gold Watch" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
<button className="w-full bg-white/95 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-900 shadow-lg backdrop-blur-sm hover:bg-zinc-900 hover:text-white transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">Minimalist Chrono</h3>
<p className="text-sm text-zinc-500">Gold Plated</p>
</div>
<p className="text-sm font-medium text-zinc-900">$180</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 relative">
<div className="absolute right-0 top-0 z-10 p-3">
<button className="rounded-full bg-white/80 p-2 text-zinc-400 backdrop-blur-sm transition hover:text-red-500">
<span className="iconify" data-height="16" data-icon="lucide:heart" data-width="16"></span>
</button>
</div>
<img alt="Perfume" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
<button className="w-full bg-white/95 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-900 shadow-lg backdrop-blur-sm hover:bg-zinc-900 hover:text-white transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">No. 05 Essence</h3>
<p className="text-sm text-zinc-500">50ml Eau de Parfum</p>
</div>
<p className="text-sm font-medium text-zinc-900">$120</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 relative">
<div className="absolute right-0 top-0 z-10 p-3">
<button className="rounded-full bg-white/80 p-2 text-zinc-400 backdrop-blur-sm transition hover:text-red-500">
<span className="iconify" data-height="16" data-icon="lucide:heart" data-width="16"></span>
</button>
</div>
<img alt="Sunglasses" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577041265463-20302605e66b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
<button className="w-full bg-white/95 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-900 shadow-lg backdrop-blur-sm hover:bg-zinc-900 hover:text-white transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">Acetate Frames</h3>
<p className="text-sm text-zinc-500">Tortoise Shell</p>
</div>
<p className="text-sm font-medium text-zinc-900">$145</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 relative">
<div className="absolute right-0 top-0 z-10 p-3">
<button className="rounded-full bg-white/80 p-2 text-zinc-400 backdrop-blur-sm transition hover:text-red-500">
<span className="iconify" data-height="16" data-icon="lucide:heart" data-width="16"></span>
</button>
</div>
<img alt="Black T-Shirt" className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
<button className="w-full bg-white/95 py-3 text-xs font-semibold uppercase tracking-widest text-zinc-900 shadow-lg backdrop-blur-sm hover:bg-zinc-900 hover:text-white transition-colors">
                                    Add to Cart
                                </button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">Mercerized Cotton</h3>
<p className="text-sm text-zinc-500">Relaxed Fit</p>
</div>
<p className="text-sm font-medium text-zinc-900">$55</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100 relative">
<span className="absolute left-0 top-0 z-10 bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">Sold Out</span>
<div className="absolute right-0 top-0 z-10 p-3">
<button className="rounded-full bg-white/80 p-2 text-zinc-400 backdrop-blur-sm transition hover:text-red-500">
<span className="iconify" data-height="16" data-icon="lucide:heart" data-width="16"></span>
</button>
</div>
<img alt="Heels" className="h-full w-full object-cover object-center opacity-60 transition-transform duration-700 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-400">Evening Strap</h3>
<p className="text-sm text-zinc-400">Suede Black</p>
</div>
<p className="text-sm font-medium text-zinc-400 line-through">$190</p>
</div>
</div>
</div>

<div className="mt-16 border-t border-zinc-100 pt-10 text-center">
<button className="inline-flex h-10 w-32 items-center justify-center border border-zinc-900 bg-white text-xs font-semibold uppercase tracking-widest text-zinc-900 transition hover:bg-zinc-900 hover:text-white">
                        Load More
                     </button>
</div>
</div>
</div>
</main>

<section className="bg-zinc-900 py-20 text-center text-white">
<div className="mx-auto max-w-2xl px-6">
<span className="mb-4 block text-3xl font-light italic text-amber-600 font-serif">"The Art of Living"</span>
<h2 className="text-2xl font-medium tracking-tight">Join the Inner Circle</h2>
<p className="mx-auto mt-4 max-w-md text-zinc-400 font-light">
                Subscribe to receive early access to new collections, exclusive events, and styling tips.
            </p>
<form className="mx-auto mt-8 flex max-w-sm gap-2">
<input className="w-full border-b border-zinc-700 bg-transparent py-2 text-sm text-white placeholder-zinc-500 focus:border-amber-600 focus:outline-none" placeholder="Enter your email" type="email"/>
<button className="text-xs font-semibold uppercase tracking-widest text-white hover:text-amber-600" type="submit">Join</button>
</form>
</div>
</section>

<footer className="border-t border-zinc-100 bg-white pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-bold tracking-tight text-zinc-900 uppercase" href="#">AP Collections</a>
<p className="mt-6 text-sm leading-relaxed text-zinc-500 max-w-xs">
                        Refining the everyday through design and quality. We believe in products that last a lifetime and stories that inspire.
                    </p>
<div className="mt-6 flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900" href="#"><span className="iconify" data-height="18" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><span className="iconify" data-height="18" data-icon="lucide:facebook" data-width="18"></span></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><span className="iconify" data-height="18" data-icon="lucide:twitter" data-width="18"></span></a>
</div>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">Shop</h3>
<ul className="mt-4 space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-amber-700 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">Gift Cards</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">Sale</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">Customer Care</h3>
<ul className="mt-4 space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-amber-700 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">Order Status</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">Legal</h3>
<ul className="mt-4 space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-amber-700 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-amber-700 transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between border-t border-zinc-100 pt-8 sm:flex-row">
<p className="text-xs text-zinc-400">© 2024 AP Collections. All rights reserved.</p>
<div className="mt-4 flex gap-4 sm:mt-0">
<span className="iconify text-zinc-300" data-height="20" data-icon="lucide:credit-card" data-width="20"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
