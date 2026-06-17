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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-sm font-medium tracking-tighter uppercase" href="#">Acme<span className="text-gray-400">Store</span></a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Products</a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Craftsmanship</a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Stories</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:bag-linear" width="18"></iconify-icon>
</button>
<button className="hidden sm:flex text-xs font-medium bg-gray-900 text-white px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
                    Sign In
                </button>
</div>
</div>
</nav>

<main className="pt-32 pb-16 border-b border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gray-900"></span>
</span>
<span className="text-xs font-medium text-gray-600 tracking-tight">New Collection Available</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-gray-900 mb-6 leading-[0.9]">
                Essential <span className="text-gray-300">Objects</span><br/>
                For Daily Life.
            </h1>
<p className="text-lg md:text-xl text-gray-500 font-light tracking-tight max-w-2xl mx-auto mb-10">
                A curated assembly of high-fidelity goods designed for the modern workspace and home. Built to last, designed to disappear.
            </p>
<div className="flex items-center justify-center gap-4">
<button className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
                    Shop Collection
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-6 py-3 transition-colors">
                    View Lookbook
                </button>
</div>
</div>
</main>

<div className="w-full overflow-hidden bg-white border-b border-gray-100 py-8">
<div className="flex justify-center gap-12 md:gap-24 items-center opacity-30 grayscale">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:crown-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:cup-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:planet-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
</div>

<section className="border-b border-gray-100">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">

<div className="group relative bg-white p-8 md:p-12 transition-colors hover:bg-gray-50/50">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Audio</p>
<h3 className="text-2xl font-medium tracking-tight text-gray-900">ANC Headphones</h3>
</div>
<span className="text-sm font-medium text-gray-900">$399</span>
</div>
<div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-8 relative">
<img alt="Headphones" className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<button className="w-full py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors bg-white">
                        Add to Cart
                    </button>
</div>

<div className="group relative bg-white p-8 md:p-12 transition-colors hover:bg-gray-50/50">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Timepiece</p>
<h3 className="text-2xl font-medium tracking-tight text-gray-900">Analog Chrono</h3>
</div>
<span className="text-sm font-medium text-gray-900">$250</span>
</div>
<div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-8 relative">
<img alt="Watch" className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<button className="w-full py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors bg-white">
                        Add to Cart
                    </button>
</div>

<div className="group relative bg-white p-8 md:p-12 transition-colors hover:bg-gray-50/50">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Carry</p>
<h3 className="text-2xl font-medium tracking-tight text-gray-900">Daypack V2</h3>
</div>
<span className="text-sm font-medium text-gray-900">$180</span>
</div>
<div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-8 relative">
<img alt="Backpack" className="object-cover w-full h-full mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<button className="w-full py-3 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors bg-white">
                        Add to Cart
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 border-b border-gray-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-12 flex items-end justify-between">
<div>
<h2 className="text-3xl font-medium tracking-tighter text-gray-900">Curated Categories</h2>
<p className="text-gray-500 mt-2 font-light tracking-tight">Explore the ecosystem.</p>
</div>
<a className="text-sm font-medium text-gray-900 flex items-center gap-1 hover:opacity-70 transition-opacity" href="#">
                    View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">

<div className="md:col-span-2 relative h-96 bg-white rounded-l-2xl border border-gray-200 overflow-hidden group">
<div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
<h3 className="text-2xl font-medium text-white tracking-tight">Workspace Essentials</h3>
<p className="text-white/80 mt-2 font-light">Tools for thought.</p>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
<img alt="Workspace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-1 flex flex-col gap-1">
<div className="relative h-48 bg-white md:rounded-tr-2xl border border-gray-200 overflow-hidden group">
<div className="absolute inset-0 p-6 flex flex-col justify-center z-10">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Apparel</h3>
</div>
<img alt="Apparel" className="absolute right-0 top-0 w-1/2 h-full object-cover mix-blend-multiply opacity-10 transition-opacity group-hover:opacity-20" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative h-48 bg-white md:rounded-br-2xl border border-gray-200 overflow-hidden group">
<div className="absolute inset-0 p-6 flex flex-col justify-center z-10">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Travel</h3>
</div>
<img alt="Travel" className="absolute right-0 top-0 w-1/2 h-full object-cover mix-blend-multiply opacity-10 transition-opacity group-hover:opacity-20" src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight mb-2">Lifetime Warranty</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                        Every product is guaranteed for life against manufacturing defects. We stand by our craftsmanship.
                    </p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
<iconify-icon icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight mb-2">30-Day Returns</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                        Not perfectly satisfied? Return it within 30 days for a full refund, no questions asked.
                    </p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight mb-2">Sustainability</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                        Carbon neutral shipping on every order. We use recycled materials whenever possible.
                    </p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight mb-2">Global Shipping</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                        We ship to over 50 countries worldwide with tracked priority shipping options.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-white py-16">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<a className="text-sm font-semibold tracking-tighter uppercase mb-4 block" href="#">Acme Store</a>
<p className="text-xs text-gray-400 leading-relaxed font-light">
                    Designed in California. <br/>
                    © 2024 Acme Inc. All rights reserved.
                </p>
</div>
<div className="flex gap-12 md:gap-24 flex-wrap">
<div>
<h4 className="font-medium text-xs text-gray-900 uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Bestsellers</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-xs text-gray-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">About</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-xs text-gray-900 uppercase tracking-wider mb-4">Social</h4>
<ul className="space-y-2">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Twitter</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Instagram</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
</div>
</footer>

    </>
  );
}
