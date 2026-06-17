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
      

<div className="absolute inset-0 z-[-1] bg-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-zinc-200/30 blur-[120px] rounded-full z-[-1] pointer-events-none"></div>

<header className="sticky top-0 z-50 bg-[#fcfcfc]/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tighter text-zinc-900" href="#">BSCT.</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shop</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Process</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Wholesale</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center relative">
<iconify-icon height="20" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-zinc-900 text-[10px] text-white font-medium">2</span>
</button>
<button className="md:hidden text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1 space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-zinc-600 tracking-wide">Batch #042 Freshly Baked</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
                    The elemental <br/> biscuit, refined.
                </h1>
<p className="text-lg text-zinc-500 font-light leading-relaxed max-w-lg">
                    We stripped away the noise to focus on what matters: pristine ingredients, exacting techniques, and the perfect snap.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-full hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-900/10" href="#">
                        Explore Collection
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-zinc-900 bg-transparent border border-zinc-200 rounded-full hover:bg-zinc-50 transition-all" href="#">
                        View Ingredients
                    </a>
</div>
</div>
<div className="flex-1 w-full max-w-xl lg:max-w-none relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-transparent rounded-3xl transform rotate-2 scale-105 z-[-1]"></div>
<div className="aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200/60 shadow-xl shadow-zinc-200/50 relative">
<img alt="Artisanal Biscuits" className="object-cover w-full h-full scale-[1.02] hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>

<div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white/90 backdrop-blur-md border border-zinc-200 p-4 rounded-2xl shadow-lg shadow-zinc-200/50 flex items-center gap-4">
<div className="h-12 w-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900">
<iconify-icon height="24" icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Award Winning</p>
<p className="text-xs text-zinc-500 font-light mt-0.5">Best Texture 2024</p>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200/50 bg-white">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-200/50">
<div className="flex flex-col items-center text-center space-y-4 pt-8 md:pt-0 first:pt-0 px-4">
<div className="h-10 w-10 flex items-center justify-center text-zinc-600">
<iconify-icon height="28" icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Single-Origin Butter</h3>
<p className="text-sm text-zinc-500 font-light max-w-xs">Sourced directly from pasture-raised farms for an unparalleled richness and depth of flavor.</p>
</div>
<div className="flex flex-col items-center text-center space-y-4 pt-8 md:pt-0 px-4">
<div className="h-10 w-10 flex items-center justify-center text-zinc-600">
<iconify-icon height="28" icon="solar:stopwatch-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Slow Baked</h3>
<p className="text-sm text-zinc-500 font-light max-w-xs">Our proprietary low-temperature process ensures a delicate crumb without sacrificing the crunch.</p>
</div>
<div className="flex flex-col items-center text-center space-y-4 pt-8 md:pt-0 px-4">
<div className="h-10 w-10 flex items-center justify-center text-zinc-600">
<iconify-icon height="28" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-zinc-900">Carbon Neutral Shipping</h3>
<p className="text-sm text-zinc-500 font-light max-w-xs">Delivered to your door in fully compostable packaging, minimizing our footprint.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">The Signatures</h2>
<p className="text-base text-zinc-500 font-light">Our core collection, iterated upon for years until deemed perfect. Available individually or curated.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors group" href="#">
                    View full catalog
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden mb-6 border border-zinc-200/50 group-hover:border-zinc-300 transition-colors">
<img alt="Classic Shortbread" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
<iconify-icon height="20" icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Classic Shortbread</h3>
<p className="text-sm text-zinc-500 font-light mt-1">Scottish butter, sea salt.</p>
</div>
<span className="text-sm font-medium text-zinc-900 px-2 py-1 bg-zinc-100 rounded-md">$14</span>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden mb-6 border border-zinc-200/50 group-hover:border-zinc-300 transition-colors">
<img alt="Dark Chocolate Oat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1557310717-d6bea9f36682?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
<iconify-icon height="20" icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Dark Chocolate Oat</h3>
<p className="text-sm text-zinc-500 font-light mt-1">70% Cacao, toasted oats.</p>
</div>
<span className="text-sm font-medium text-zinc-900 px-2 py-1 bg-zinc-100 rounded-md">$16</span>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden mb-6 border border-zinc-200/50 group-hover:border-zinc-300 transition-colors">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium bg-zinc-900 text-white rounded">New</span>
</div>
<img alt="Earl Grey Infused" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
<iconify-icon height="20" icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Earl Grey Infused</h3>
<p className="text-sm text-zinc-500 font-light mt-1">Bergamot, vanilla bean.</p>
</div>
<span className="text-sm font-medium text-zinc-900 px-2 py-1 bg-zinc-100 rounded-md">$15</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 mb-16">
<div className="bg-zinc-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-center text-white">
<div className="flex-1 p-12 lg:p-24 space-y-8">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                        Quality takes time.<br/>We don't rush.
                    </h2>
<p className="text-zinc-400 font-light text-lg max-w-md">
                        Every batch rests for 24 hours to let the flavors meld before baking. It's a small detail that makes all the difference in the final product.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors group pt-4" href="#">
                        Read our methodology
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="flex-1 w-full h-full min-h-[400px] bg-zinc-800 relative">
<img alt="Baking Process" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200/50 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
<div className="md:col-span-1">
<a className="text-2xl font-medium tracking-tighter text-zinc-900 block mb-6" href="#">BSCT.</a>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">
                        Elevating the humble biscuit through meticulous sourcing and obsessive baking techniques.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-6">Shop</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">All Biscuits</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Gift Boxes</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Subscriptions</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Merch</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Our Story</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Ingredients</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Wholesale</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900 mb-6">Stay Updated</h4>
<p className="text-sm text-zinc-500 font-light mb-4">Join our newsletter for early access to new batches.</p>
<form className="flex gap-2">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all" placeholder="Email address" type="email"/>
<button className="bg-zinc-900 text-white rounded-lg px-4 py-2 flex items-center justify-center hover:bg-zinc-800 transition-colors" type="submit">
<iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200/50">
<p className="text-xs text-zinc-400 font-light">© 2024 BSCT. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Instagram</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
