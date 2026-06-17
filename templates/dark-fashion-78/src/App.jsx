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
      

<div className="bg-[#111111] text-zinc-400 text-xs text-center py-2.5 tracking-wide font-medium border-b border-white/5">
        COMPLIMENTARY SHIPPING ON ALL DOMESTIC ORDERS OVER R1000
    </div>

<header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<button className="sm:hidden text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>

<nav className="hidden sm:flex gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Shop All</a>
<a className="hover:text-white transition-colors" href="#">New Arrivals</a>
<a className="hover:text-white transition-colors" href="#">Collections</a>
</nav>

<a className="text-lg tracking-tighter font-semibold text-white uppercase flex items-center gap-2" href="#">
                FRIENDS OF GOD
            </a>

<div className="flex items-center gap-5 text-zinc-400">
<button className="hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="hidden sm:block hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="hover:text-white transition-colors relative">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
</button>
</div>
</div>
</header>
<main>

<section className="pt-16 pb-8 px-4 sm:px-6 max-w-screen-2xl mx-auto">
<div className="flex flex-col gap-8">
<div className="flex flex-col items-center justify-center gap-4 text-center mb-6">
<span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-zinc-400 font-medium">New Drop</span>
<h1 className="text-4xl md:text-5xl tracking-tighter font-semibold text-white">
                        The Black Collection
                    </h1>
<p className="text-zinc-400 text-sm max-w-md font-normal leading-relaxed">
                        Ethically made, faith-inspired apparel designed for the everyday believer. Minimalist monochrome meeting kingdom purpose.
                    </p>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-y border-white/5 py-3 gap-4">

<div className="flex gap-2 overflow-x-auto hide-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
<button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.1)]">All Products</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap">T-Shirts</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap">Hoodies</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:bg-white/10 hover:text-white transition-all text-xs font-medium whitespace-nowrap">Headwear</button>
</div>

<div className="flex items-center gap-3 ml-auto sm:ml-0">
<span className="text-xs text-zinc-600 font-medium uppercase tracking-wide">Sort by</span>
<div className="relative group">
<button className="flex items-center gap-1 text-xs font-medium text-white hover:text-zinc-300">
                                Featured
                                <span className="iconify group-hover:rotate-180 transition-transform duration-200" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 pb-24 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-md mb-4 border border-white/5">

<img alt="F.O.G Black Tee" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black shadow-lg hover:scale-110">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>

<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-white/10 backdrop-blur border border-white/10 text-[10px] font-medium uppercase tracking-wider text-white rounded">New In</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">F.O.G Signature Tee</h3>
<p className="text-xs text-zinc-500 mt-1">Heavyweight Cotton - Black</p>
</div>
<span className="text-sm font-medium text-white">R350.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-md mb-4 border border-white/5">

<img alt="Beanie and Tee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale-[50%] contrast-125" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black shadow-lg hover:scale-110">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Essentials Beanie</h3>
<p className="text-xs text-zinc-500 mt-1">Ribbed Knit - Jet Black</p>
</div>
<span className="text-sm font-medium text-white">R180.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-md mb-4 border border-white/5">
<img alt="Tee Back" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale-[40%]" src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black shadow-lg hover:scale-110">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-zinc-800/80 backdrop-blur text-[10px] font-medium uppercase tracking-wider text-white rounded border border-white/5">Best Seller</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Smile Curve Tee</h3>
<p className="text-xs text-zinc-500 mt-1">Oversized - Charcoal</p>
</div>
<span className="text-sm font-medium text-white">R350.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-md mb-4 border border-white/5">
<img alt="Black Shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale-[30%]" src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black shadow-lg hover:scale-110">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Kingdom Culture Tee</h3>
<p className="text-xs text-zinc-500 mt-1">Regular Fit - Black</p>
</div>
<span className="text-sm font-medium text-white">R350.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-md mb-4 border border-white/5">
<img alt="Black Tee Flat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black shadow-lg hover:scale-110">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Abide In Me Tee</h3>
<p className="text-xs text-zinc-500 mt-1">Boxy Fit - Black</p>
</div>
<span className="text-sm font-medium text-white">R350.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-md mb-4 border border-white/5">
<img alt="Black Tee Back" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out opacity-80" src="https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black shadow-lg hover:scale-110">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-zinc-900 text-[10px] font-medium uppercase tracking-wider text-zinc-400 rounded border border-zinc-800">Sold Out</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-600 line-through">Salt &amp; Light Hoodie</h3>
<p className="text-xs text-zinc-700 mt-1">Fleece - Black</p>
</div>
<span className="text-sm font-medium text-zinc-600">R650.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-md mb-4 border border-white/5">
<img alt="Black Cap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out grayscale-[20%]" src="https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black shadow-lg hover:scale-110">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Faith Over Fear</h3>
<p className="text-xs text-zinc-500 mt-1">Soft Cotton - Black</p>
</div>
<span className="text-sm font-medium text-white">R350.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden rounded-md mb-4 border border-white/5">
<img alt="Black Accessories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1512353087810-25dfcd100962?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-black shadow-lg hover:scale-110">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">F.O.G Tote</h3>
<p className="text-xs text-zinc-500 mt-1">Canvas - Black</p>
</div>
<span className="text-sm font-medium text-white">R150.00</span>
</div>
</div>
</div>

<div className="mt-20 flex justify-center">
<button className="px-8 py-3 bg-[#111] border border-white/10 text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all rounded-sm shadow-md">
                    Load More Products
                </button>
</div>
</section>

<section className="bg-[#080808] py-20 px-4 sm:px-6 border-t border-white/5">
<div className="max-w-md mx-auto text-center">
<h2 className="text-xl tracking-tight font-medium text-white mb-3">Join the F.O.G Community</h2>
<p className="text-zinc-500 text-sm mb-8 font-normal">Subscribe to receive updates on new drops and exclusive black label deals.</p>
<form className="flex gap-2 relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
</span>
<input className="flex-1 bg-[#111] border border-white/10 px-4 pl-10 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/30 focus:ring-0 rounded-md transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-zinc-200 transition-colors rounded-md shadow-[0_0_10px_rgba(255,255,255,0.1)]" type="button">
                        Subscribe
                    </button>
</form>
</div>
</section>

<footer className="bg-[#050505] text-zinc-500 pt-16 pb-8 border-t border-white/5">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg tracking-tighter font-semibold text-white uppercase block mb-6" href="#">
                        FRIENDS OF GOD
                    </a>
<p className="text-xs leading-relaxed max-w-xs mb-6 text-zinc-500">
                        Minimalist aesthetics meeting kingdom purpose. Designed in-house, ethically produced, and worn by believers worldwide.
                    </p>
<div className="flex gap-5 text-zinc-400">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="18"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="18"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-strokeWidth="1.5" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-5">Shop</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-5">Support</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-5">Legal</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-wide">
<span>© 2023 Friends of God. All rights reserved.</span>
<div className="flex gap-4 opacity-40">
<span className="hover:text-white cursor-pointer">Visa</span>
<span className="hover:text-white cursor-pointer">Mastercard</span>
<span className="hover:text-white cursor-pointer">Amex</span>
<span className="hover:text-white cursor-pointer">PayPal</span>
</div>
</div>
</footer>
</main>

    </>
  );
}
