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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-white" href="#">HOOD.</a>
<div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#">Collection_01</a>
<a className="hover:text-white transition-colors duration-200" href="#">Heavyweight</a>
<a className="hover:text-white transition-colors duration-200" href="#">Technical</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-zinc-400 hover:text-white transition-colors group">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative p-2 text-zinc-400 hover:text-white transition-colors group">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden border-white/5 border-b pt-32 pb-20 relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-end justify-between gap-12">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="">New Drop Available</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-5xl font-medium text-white tracking-tighter mb-6">
                        STRUCTURED<br/>
<span className="text-zinc-600">SILHOUETTES.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-md font-light leading-relaxed mb-8">
                        Engineered 500gsm French Terry. Designed for the modern minimalist. 
                        No logos, just form.
                    </p>
<div className="flex items-center gap-4">
<button className="h-10 px-6 bg-white text-zinc-950 text-sm font-medium rounded hover:bg-zinc-200 transition-colors flex items-center gap-2">
                            Shop Collection
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 border border-zinc-800 text-zinc-300 text-sm font-medium rounded hover:bg-zinc-900 transition-colors">
                            View Lookbook
                        </button>
</div>
</div>

<div className="w-full md:w-1/3 aspect-[4/5] md:aspect-square relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 rounded-lg border border-white/5 overflow-hidden">
<div className="grain-bg absolute inset-0 opacity-20"></div>
<img alt="Hoodie Texture" className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div>
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Fabric</p>
<p className="text-sm font-medium text-zinc-200">French Terry</p>
</div>
<div className="text-right">
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Weight</p>
<p className="text-sm font-medium text-zinc-200">500 GSM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 sticky top-16 bg-zinc-950/90 backdrop-blur z-40">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between overflow-x-auto no-scrollbar">
<div className="flex items-center gap-6 text-xs font-medium text-zinc-500">
<button className="text-white">All Items</button>
<button className="hover:text-zinc-300 transition-colors">Zip-Up</button>
<button className="hover:text-zinc-300 transition-colors">Pullover</button>
<button className="hover:text-zinc-300 transition-colors">Oversized</button>
</div>
<div className="flex items-center gap-4 pl-4 border-l border-white/5 ml-auto md:ml-0">
<div className="flex items-center gap-2 text-xs text-zinc-400 cursor-pointer hover:text-zinc-200">
<span>Sort by</span>
<iconify-icon icon="solar:sort-vertical-linear" width="14"></iconify-icon>
</div>
<div className="w-px h-4 bg-white/10"></div>
<div className="flex gap-2">
<button className="text-zinc-400 hover:text-white"><iconify-icon icon="solar:list-linear" width="16"></iconify-icon></button>
<button className="text-white"><iconify-icon icon="solar:menu-dots-square-linear" width="16"></iconify-icon></button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">

<div className="group bg-zinc-950 p-6 flex flex-col hover:bg-zinc-900/50 transition-colors duration-300 relative">
<div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-white text-black p-1.5 rounded-full hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
<div className="aspect-[4/5] bg-zinc-900 rounded mb-6 overflow-hidden relative">
<img alt="Hoodie" className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 flex gap-1">
<div className="w-2 h-2 rounded-full bg-zinc-950 border border-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-500 border border-zinc-700"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300 border border-zinc-700"></div>
</div>
</div>
<div className="mt-auto">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-sm tracking-tight text-white">Core Heavyweight</h3>
<span className="text-sm text-zinc-400">$120</span>
</div>
<p className="text-xs text-zinc-500 line-clamp-1 mb-4">500gsm French Terry, Drop Shoulder</p>

<div className="grid grid-cols-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<input className="hidden custom-radio" id="s1-s" name="size1" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s1-s">S</label>
<input className="hidden custom-radio" id="s1-m" name="size1" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s1-m">M</label>
<input className="hidden custom-radio" id="s1-l" name="size1" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s1-l">L</label>
<button className="h-8 bg-white text-zinc-950 rounded flex items-center justify-center text-xs font-medium hover:bg-zinc-200">
                            Add
                        </button>
</div>
</div>
</div>

<div className="group bg-zinc-950 p-6 flex flex-col hover:bg-zinc-900/50 transition-colors duration-300 relative">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-0.5 rounded border border-indigo-500/30 bg-indigo-500/10 text-[10px] font-medium text-indigo-400 uppercase tracking-wide">Best Seller</span>
</div>
<div className="aspect-[4/5] bg-zinc-900 rounded mb-6 overflow-hidden relative">
<img alt="Hoodie" className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-auto">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-sm tracking-tight text-white">Technical Zip</h3>
<span className="text-sm text-zinc-400">$145</span>
</div>
<p className="text-xs text-zinc-500 line-clamp-1 mb-4">Water-resistant, nylon overlay</p>
<div className="grid grid-cols-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<input className="hidden custom-radio" id="s2-s" name="size2" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s2-s">S</label>
<input className="hidden custom-radio" id="s2-m" name="size2" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s2-m">M</label>
<input className="hidden custom-radio" id="s2-l" name="size2" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s2-l">L</label>
<button className="h-8 bg-white text-zinc-950 rounded flex items-center justify-center text-xs font-medium hover:bg-zinc-200">Add</button>
</div>
</div>
</div>

<div className="group bg-zinc-950 p-6 flex flex-col hover:bg-zinc-900/50 transition-colors duration-300 relative">
<div className="aspect-[4/5] bg-zinc-900 rounded mb-6 overflow-hidden relative">
<img alt="Hoodie" className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1020&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-auto">
<div className="flex justify-between items-start mb-2">
<h3 className="font-medium text-sm tracking-tight text-white">Washed Boxy</h3>
<span className="text-sm text-zinc-400">$110</span>
</div>
<p className="text-xs text-zinc-500 line-clamp-1 mb-4">Vintage wash, cropped hem</p>
<div className="grid grid-cols-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<input className="hidden custom-radio" id="s3-s" name="size3" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s3-s">S</label>
<input className="hidden custom-radio" id="s3-m" name="size3" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s3-m">M</label>
<input className="hidden custom-radio" id="s3-l" name="size3" type="radio"/>
<label className="h-8 border border-white/10 rounded flex items-center justify-center text-xs text-zinc-400 cursor-pointer hover:border-zinc-700 transition-all" htmlFor="s3-l">L</label>
<button className="h-8 bg-white text-zinc-950 rounded flex items-center justify-center text-xs font-medium hover:bg-zinc-200">Add</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="p-6 rounded-lg border border-white/5 bg-zinc-950/50 hover:border-zinc-800 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4 mx-auto md:mx-0">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Lifetime Guarantee</h3>
<p className="text-xs text-zinc-500 leading-relaxed">If seams fail, we repair it. Built to outlast your rotation.</p>
</div>
<div className="p-6 rounded-lg border border-white/5 bg-zinc-950/50 hover:border-zinc-800 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4 mx-auto md:mx-0">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Sustainable Cotton</h3>
<p className="text-xs text-zinc-500 leading-relaxed">100% organic cotton grown without synthetic pesticides.</p>
</div>
<div className="p-6 rounded-lg border border-white/5 bg-zinc-950/50 hover:border-zinc-800 transition-colors">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 mb-4 mx-auto md:mx-0">
<iconify-icon icon="solar:ruler-angular-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Precision Fit</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Laser-measured cuts for a fit that never warps after washing.</p>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="text-2xl font-semibold tracking-tighter text-white mb-6 block" href="#">HOOD.</a>
<p className="text-sm text-zinc-500 mb-6">
                        Redefining the essential. Minimalist aesthetic, maximalist quality.
                    </p>

<div className="relative">
<input className="w-full h-10 bg-zinc-900 border border-zinc-800 rounded px-3 text-sm text-white focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600 transition-colors" placeholder="email@address.com" type="email"/>
<button className="absolute right-1 top-1 h-8 w-8 flex items-center justify-center bg-white rounded text-zinc-950 hover:bg-zinc-200">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Heavyweight</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Lightweight</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-zinc-600">© 2024 Hood Apparel Inc. All rights reserved.</p>
<div className="flex gap-4 text-zinc-600">
<a className="hover:text-zinc-400" href="#"><iconify-icon icon="solar:camera-linear" width="18"></iconify-icon></a>
<a className="hover:text-zinc-400" href="#"><iconify-icon icon="solar:brand-x-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
