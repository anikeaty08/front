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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="lg:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900 transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Shop</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Collections</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Editorial</a>
</div>

<a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold tracking-tighter text-xl" href="#">
                AURA
            </a>

<div className="flex items-center gap-4 lg:gap-6">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="hidden lg:block text-zinc-500 hover:text-zinc-900 transition-colors">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
<button className="relative text-zinc-500 hover:text-zinc-900 transition-colors group">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zinc-900"></span>
</span>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-16">

<section className="relative w-full h-[85vh] overflow-hidden flex items-end justify-start">
<div className="absolute inset-0 z-0">
<img alt="Hero Background" className="w-full h-full object-cover object-center brightness-[0.85] grayscale-[20%]" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 pb-16 md:pb-24">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white mb-6">
                        Fall / Winter 2024
                    </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.95]">
                        Silent forms.<br/>Loud texture.
                    </h1>
<p className="text-zinc-300 text-sm md:text-base font-normal max-w-md mb-8 leading-relaxed">
                        A study in reduction. Curated essentials crafted from premium heavyweight organic cotton. Designed for the modern uniform.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="bg-white text-zinc-950 px-8 py-3 rounded text-sm font-medium hover:bg-zinc-100 transition-all flex items-center gap-2" href="#">
                            Shop New Arrivals <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="border border-white/30 text-white px-8 py-3 rounded text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm" href="#">
                            View Lookbook
                        </a>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-100 bg-white sticky top-16 z-40">
<div className="max-w-screen-2xl mx-auto px-6 h-14 flex items-center justify-between overflow-x-auto no-scrollbar">
<div className="flex items-center gap-6 text-xs font-medium text-zinc-500 whitespace-nowrap">
<button className="text-zinc-900 border-b border-zinc-900 pb-0.5">All Products</button>
<button className="hover:text-zinc-900 transition-colors">Outerwear</button>
<button className="hover:text-zinc-900 transition-colors">Knitwear</button>
<button className="hover:text-zinc-900 transition-colors">Trousers</button>
<button className="hover:text-zinc-900 transition-colors">Accessories</button>
</div>
<div className="hidden md:flex items-center gap-4 text-xs text-zinc-400">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="globe"></i> Worldwide Shipping</span>
<span className="w-px h-3 bg-zinc-200"></span>
<span>Designed in Tokyo</span>
</div>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-6 py-20">
<div className="flex items-end justify-between mb-12">
<h2 className="text-2xl font-medium tracking-tight">Curated Selection</h2>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                    View all <i className="w-3 h-3" data-lucide="chevron-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group relative">
<div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden rounded-sm mb-4">
<img alt="Oversized Coat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white/90 backdrop-blur text-zinc-900 py-3 text-xs font-medium shadow-sm hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm">
<i className="w-3 h-3" data-lucide="plus"></i> Quick Add
                            </button>
</div>
<div className="absolute top-4 left-4">
<span className="bg-zinc-900 text-white text-[10px] font-medium px-2 py-1 uppercase tracking-wide rounded-sm">New</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Structure Wool Coat</h3>
<p className="text-xs text-zinc-500 mt-1">Charcoal / Wool Blend</p>
</div>
<span className="text-sm font-medium text-zinc-900">$320</span>
</div>

<div className="mt-3 flex gap-2">
<div className="flex items-center gap-1">
<input className="hidden size-radio" id="s1-s" name="size1" type="radio"/>
<label className="w-6 h-6 flex items-center justify-center text-[10px] border border-zinc-200 text-zinc-500 rounded cursor-pointer hover:border-zinc-400 transition-colors" htmlFor="s1-s">S</label>
<input checked="" className="hidden size-radio" id="s1-m" name="size1" type="radio"/>
<label className="w-6 h-6 flex items-center justify-center text-[10px] border border-zinc-200 text-zinc-500 rounded cursor-pointer hover:border-zinc-400 transition-colors" htmlFor="s1-m">M</label>
<input className="hidden size-radio" id="s1-l" name="size1" type="radio"/>
<label className="w-6 h-6 flex items-center justify-center text-[10px] border border-zinc-200 text-zinc-500 rounded cursor-pointer hover:border-zinc-400 transition-colors" htmlFor="s1-l">L</label>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden rounded-sm mb-4">
<img alt="Pleated Trousers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white/90 backdrop-blur text-zinc-900 py-3 text-xs font-medium shadow-sm hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm">
<i className="w-3 h-3" data-lucide="plus"></i> Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Relaxed Pleat Trouser</h3>
<p className="text-xs text-zinc-500 mt-1">Sand / Heavy Cotton</p>
</div>
<span className="text-sm font-medium text-zinc-900">$180</span>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden rounded-sm mb-4">
<img alt="Boxy Tee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white/90 backdrop-blur text-zinc-900 py-3 text-xs font-medium shadow-sm hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm">
<i className="w-3 h-3" data-lucide="plus"></i> Quick Add
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Boxy Heavyweight Tee</h3>
<p className="text-xs text-zinc-500 mt-1">White / 280GSM</p>
</div>
<span className="text-sm font-medium text-zinc-900">$85</span>
</div>
<div className="mt-3 flex gap-2">

<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full border border-zinc-200 bg-white cursor-pointer ring-1 ring-zinc-900 ring-offset-2"></div>
<div className="w-4 h-4 rounded-full border border-zinc-200 bg-black cursor-pointer hover:scale-110 transition-transform"></div>
<div className="w-4 h-4 rounded-full border border-zinc-200 bg-zinc-400 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-[3/4] bg-zinc-100 overflow-hidden rounded-sm mb-4">
<img alt="Hoodie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="w-full bg-white/90 backdrop-blur text-zinc-900 py-3 text-xs font-medium shadow-sm hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-sm">
<i className="w-3 h-3" data-lucide="plus"></i> Quick Add
                            </button>
</div>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur text-zinc-900 text-[10px] font-medium px-2 py-1 uppercase tracking-wide rounded-sm border border-zinc-100">Limited</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Essential Hoodie</h3>
<p className="text-xs text-zinc-500 mt-1">Onyx / French Terry</p>
</div>
<span className="text-sm font-medium text-zinc-900">$140</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 border-y border-zinc-100">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative overflow-hidden rounded-sm aspect-square md:aspect-[4/3] lg:aspect-square">
<img alt="Fabric Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-md p-6 rounded-sm border border-white/40">
<div className="flex items-center gap-3 mb-2">
<i className="w-4 h-4 text-zinc-900" data-lucide="scissors"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Craftsmanship</span>
</div>
<p className="text-sm text-zinc-700 leading-relaxed">
                                        Each garment is constructed with high-density threading and reinforced seams to ensure longevity beyond the season.
                                    </p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 lg:pl-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Designed for the<br/>everyday ritual.</h2>
<p className="text-zinc-500 mb-8 leading-relaxed max-w-md">
                            We believe that the clothes you wear should empower your daily motion, not hinder it. AURA focuses on the intersection of utility and luxury, stripping away the unnecessary to reveal the essential.
                        </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-zinc-600" data-lucide="leaf"></i>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Sustainable Sourcing</h4>
<p className="text-xs text-zinc-500 mt-1">100% Organic Cotton and Recycled Polyesters.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-zinc-600" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Lifetime Guarantee</h4>
<p className="text-xs text-zinc-500 mt-1">We stand by the quality of every stitch.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-1 hover:border-zinc-900 transition-colors" href="#">Read our story</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-xl mx-auto text-center">
<i className="w-6 h-6 text-zinc-400 mx-auto mb-4" data-lucide="mail"></i>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">Join the list</h3>
<p className="text-zinc-500 text-sm mb-8">Receive early access to collections and exclusive editorial content.</p>
<form className="flex w-full max-w-sm mx-auto relative group">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg py-3 pl-4 pr-12 text-sm outline-none focus:border-zinc-400 focus:bg-white transition-all placeholder:text-zinc-400" placeholder="email@address.com" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-zinc-900 rounded-md text-white hover:bg-zinc-800 transition-colors" type="button">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Social</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">TikTok</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Pinterest</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<a className="font-semibold tracking-tighter text-xl block mb-4" href="#">AURA</a>
<p className="text-xs text-zinc-400 leading-relaxed max-w-xs">
                         Defining the modern silhouette through texture, form, and function. 
                         <br/><br/>
                         © 2024 Aura Studios.<br/>All rights reserved.
                     </p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 text-xs text-zinc-400">
<div className="flex gap-4 mb-4 md:mb-0">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
