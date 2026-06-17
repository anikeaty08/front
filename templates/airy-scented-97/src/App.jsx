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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-stone-900 flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-stone-900 rounded-full flex items-center justify-center text-stone-50 text-xs">A</span>
                airy
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#product">Product</a>
<a className="hover:text-stone-900 transition-colors" href="#scent">Scent</a>
<a className="hover:text-stone-900 transition-colors" href="#about">Story</a>
</div>
<div className="flex items-center gap-4">
<button className="hover:text-stone-900 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-stone-900 transition-colors relative">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-yellow-50/50 to-stone-50 -z-10 blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="flex flex-col gap-6 max-w-xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 w-fit">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
<span className="text-xs font-medium uppercase tracking-wider text-stone-500">New Arrival</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-stone-900 tracking-tight leading-[1.1]">
                    Nature's scent, <br/>
<span className="text-stone-400 italic">sculpted.</span>
</h1>
<p className="text-lg text-stone-500 font-light leading-relaxed max-w-md">
                    Experience the warmth of Madagascan vanilla in a form that elevates your interior. An air freshener designed as an object of art.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group bg-stone-900 text-stone-50 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2">
                        Shop Vanilla
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 rounded-full text-sm font-medium text-stone-600 border border-stone-200 hover:border-stone-300 hover:bg-white transition-all">
                        Explore Design
                    </button>
</div>
<div className="pt-8 flex items-center gap-4 text-xs text-stone-400 font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-stone-50 bg-stone-200 flex items-center justify-center text-[10px] text-stone-500">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-stone-50 bg-stone-300 flex items-center justify-center text-[10px] text-stone-500">AS</div>
<div className="w-8 h-8 rounded-full border-2 border-stone-50 bg-stone-400 flex items-center justify-center text-[10px] text-stone-500">MK</div>
</div>
<span>Loved by 10,000+ homes</span>
</div>
</div>
<div className="relative h-[500px] lg:h-[600px] w-full fade-in-up delay-200 group cursor-pointer">

<div className="absolute inset-0 bg-stone-200 rounded-[2rem] overflow-hidden">
<img alt="Vanilla flower aesthetic" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
</div>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg shadow-stone-900/5">
<div className="flex justify-between items-start">
<div>
<h3 className="text-stone-900 font-medium tracking-tight">The Vanilla Bloom</h3>
<p className="text-sm text-stone-500 mt-1">Single Origin • 60 Days Duration</p>
</div>
<span className="text-stone-900 font-medium tracking-tight">$24</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 lg:gap-16">

<div className="flex flex-col gap-4 group">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:flower-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Sculptural Form</h3>
<p className="text-sm leading-relaxed text-stone-500">
                        Inspired by the Plumeria blossom, the shape is designed to increase surface area for optimal scent diffusion while serving as a decor piece.
                    </p>
</div>

<div className="flex flex-col gap-4 group">
<div className="w-12 h-12 rounded-xl bg-yellow-50 border border-yellow-100/50 flex items-center justify-center text-yellow-700 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Pure Vanilla Essence</h3>
<p className="text-sm leading-relaxed text-stone-500">
                        Extracted from premium Madagascan beans. Warm, sweet, and comforting without the chemical aftertone of synthetic sprays.
                    </p>
</div>

<div className="flex flex-col gap-4 group">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:wind" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Passive Diffusion</h3>
<p className="text-sm leading-relaxed text-stone-500">
                        No electricity or batteries required. The porous ceramic material releases scent slowly and consistently for up to 60 days.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-200 relative overflow-hidden" id="scent">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 order-2 lg:order-1">
<div className="aspect-square rounded-2xl overflow-hidden bg-stone-800 relative">
<img alt="Minimalist Flower Shadow" className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&amp;w=2531&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 right-6">
<div className="w-16 h-16 rounded-full bg-stone-100/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
<iconify-icon className="ml-1 text-white" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-8">
                        Not just a scent.<br/>
                        A feeling of home.
                    </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-yellow-400" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Top Notes: Orchid &amp; Cream</h4>
<p className="text-stone-400 text-sm font-light">The initial impression is light and floral, reminiscent of the orchid from which the vanilla bean grows.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-yellow-400" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Heart Notes: Pure Vanilla Bean</h4>
<p className="text-stone-400 text-sm font-light">The core of the fragrance. Rich, warm, and deeply comforting.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-yellow-400" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Base Notes: Soft Amber</h4>
<p className="text-stone-400 text-sm font-light">A subtle grounding note that adds longevity and sophistication to the sweetness.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-50" id="product">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-stone-100 grid md:grid-cols-2">

<div className="bg-stone-100 relative h-96 md:h-auto flex items-center justify-center p-8">

<div className="relative w-48 h-48 md:w-64 md:h-64 animate-spin-slow" style={{animation: 'spin 60s linear infinite'}}>

<img alt="Vanilla Flower Shape" className="w-full h-full object-cover flower-clip shadow-xl" src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&amp;w=2683&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-center">
<div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-200 text-xs font-medium text-stone-500 shadow-sm">
                            Rotation: 360° View
                        </div>
</div>
</div>

<div className="p-10 md:p-12 flex flex-col justify-center">
<div className="mb-6">
<h2 className="text-3xl font-medium text-stone-900 tracking-tight">The Airy Bloom</h2>
<div className="flex items-center gap-2 mt-2">
<div className="flex text-yellow-400 text-xs">
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star"></iconify-icon>
</div>
<span className="text-xs text-stone-400">(128 Reviews)</span>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-8">
                        The starter kit includes one ceramic flower diffuser and a 50ml bottle of our signature Vanilla essence. Refills available separately.
                    </p>
<form className="space-y-6">

<div>
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 block">Color Finish</label>
<div className="flex gap-3">
<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="color" type="radio"/>
<div className="w-10 h-10 rounded-full bg-stone-100 border border-stone-200 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-stone-900 transition-all flex items-center justify-center"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Porcelain</span>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-10 h-10 rounded-full bg-[#EADDCD] border border-stone-200 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-stone-900 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Sand</span>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-10 h-10 rounded-full bg-stone-800 border border-stone-600 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-stone-900 transition-all"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Charcoal</span>
</label>
</div>
</div>

<div>
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3 block">Quantity</label>
<div className="flex items-center border border-stone-200 rounded-lg w-fit p-1 bg-stone-50">
<button className="w-8 h-8 flex items-center justify-center rounded bg-white shadow-sm border border-stone-200 hover:text-stone-900 text-stone-400 transition-colors" type="button">
<iconify-icon icon="lucide:minus" width="14"></iconify-icon>
</button>
<input className="w-10 text-center bg-transparent text-sm font-medium text-stone-900 focus:outline-none" readonly="" type="text" value="1"/>
<button className="w-8 h-8 flex items-center justify-center rounded bg-white shadow-sm border border-stone-200 hover:text-stone-900 text-stone-400 transition-colors" type="button">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="pt-4 border-t border-stone-100 flex items-center justify-between">
<div>
<span className="block text-2xl font-medium text-stone-900 tracking-tight">$24.00</span>
<span className="text-xs text-stone-400">Free shipping</span>
</div>
<button className="bg-stone-900 text-white px-8 py-3 rounded-xl font-medium text-sm hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10 active:scale-95">
                                Add to Cart
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<a className="text-lg font-semibold tracking-tighter text-stone-900 flex items-center gap-2 mb-4" href="#">
<span className="w-5 h-5 bg-stone-900 rounded-full flex items-center justify-center text-stone-50 text-[10px]">A</span>
                    airy
                </a>
<p className="text-xs text-stone-500 leading-relaxed">
                    Airy is dedicated to transforming home fragrance into an art form. Sustainable materials, pure ingredients, and timeless design.
                </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-4">Shop</h4>
<ul className="space-y-3 text-xs text-stone-500 font-medium">
<li><a className="hover:text-stone-900 transition-colors" href="#">Diffusers</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Refills</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Sets</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-4">Company</h4>
<ul className="space-y-3 text-xs text-stone-500 font-medium">
<li><a className="hover:text-stone-900 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-stone-400 font-medium uppercase tracking-wide">
<p>© 2024 Airy Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-600 transition-colors" href="#">Terms</a>
<div className="flex gap-2 text-stone-400">
<iconify-icon icon="lucide:instagram" width="14"></iconify-icon>
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
