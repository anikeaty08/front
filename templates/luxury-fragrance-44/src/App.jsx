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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
letterSpacing: {
'widest': '.25em',
'tightest': '-.05em',
},
colors: {
zinc: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#09090b',
}
}
}
}
}



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
      

<div className="w-full bg-zinc-900 py-2 px-6 flex justify-center items-center overflow-hidden">
<p className="text-[10px] uppercase tracking-widest text-zinc-400 font-light">
            Complimentary discovery set with every full-size purchase   •   Free global shipping over $200
        </p>
</div>

<nav className="sticky top-0 z-[100] bg-zinc-50/70 backdrop-blur-2xl border-b border-zinc-200/40">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
<div className="flex-1 hidden lg:flex items-center gap-10">
<a className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors" href="#collections">Shop</a>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors" href="#journal">Journal</a>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
</div>
<a className="text-2xl font-normal tracking-tightest uppercase text-zinc-900 lg:absolute lg:left-1/2 lg:-translate-x-1/2" href="#">
                Aéther
            </a>
<div className="flex-1 flex items-center justify-end gap-6">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-zinc-900 flex items-center gap-2 group">
<span className="text-[11px] font-medium uppercase tracking-widest group-hover:opacity-60 transition-opacity">Bag (2)</span>
<iconify-icon className="text-xl" icon="solar:bag-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Hero" className="w-full h-full object-cover object-center grayscale brightness-[0.9]" src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&amp;w=2835&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-50/40 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
<div className="max-w-2xl">
<span className="text-[11px] font-medium tracking-[0.3em] uppercase text-zinc-600 mb-6 block">Collection Nº 04 — Obsidian</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tightest text-zinc-900 mb-8 leading-[0.9]">
                    The Scent of <br/> Silence.
                </h1>
<p className="text-base md:text-lg text-zinc-700 mb-12 max-w-md font-light leading-relaxed">
                    A structural exploration of dark woods, cold minerals, and the quiet resonance of the midnight air.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-10 py-4 text-[11px] font-medium tracking-widest uppercase text-white bg-zinc-900 hover:bg-zinc-800 transition-all" href="#collections">
                        Shop Collection
                    </a>
<a className="inline-flex items-center justify-center px-10 py-4 text-[11px] font-medium tracking-widest uppercase text-zinc-900 border border-zinc-900/10 bg-white/50 backdrop-blur-sm hover:bg-white transition-all" href="#product-detail">
                        Discovery Set
                    </a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-screen-2xl mx-auto" id="collections">
<div className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-4">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 mb-4">The Archive</h2>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Meticulously composed fragrances designed to interact with the chemistry of the individual.</p>
</div>
<div className="flex items-center gap-8 border-b border-zinc-200 pb-2 overflow-x-auto w-full md:w-auto">
<button className="text-[11px] uppercase tracking-widest font-medium text-zinc-900 whitespace-nowrap">All</button>
<button className="text-[11px] uppercase tracking-widest font-medium text-zinc-400 hover:text-zinc-900 transition-colors whitespace-nowrap">Floral</button>
<button className="text-[11px] uppercase tracking-widest font-medium text-zinc-400 hover:text-zinc-900 transition-colors whitespace-nowrap">Woody</button>
<button className="text-[11px] uppercase tracking-widest font-medium text-zinc-400 hover:text-zinc-900 transition-colors whitespace-nowrap">Fresh</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-6">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&amp;w=2716&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4">
<span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase font-medium">New</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-light tracking-tight text-zinc-900 group-hover:opacity-60 transition-opacity">Santal 01 / Concrete</h3>
<p className="text-xs text-zinc-500 font-light mt-1 uppercase tracking-widest">Sandalwood · Concrete · Iris</p>
</div>
<span className="text-sm font-light text-zinc-900">$195</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-6">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=2504&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-light tracking-tight text-zinc-900 group-hover:opacity-60 transition-opacity">Vetiver 03 / Glass</h3>
<p className="text-xs text-zinc-500 font-light mt-1 uppercase tracking-widest">Vetiver · Metal · Bergamot</p>
</div>
<span className="text-sm font-light text-zinc-900">$175</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-6">
<img alt="Product" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" src="https://images.unsplash.com/photo-1615484477201-9f4953340fab?q=80&amp;w=2835&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-light tracking-tight text-zinc-900 group-hover:opacity-60 transition-opacity">Oud 09 / Void</h3>
<p className="text-xs text-zinc-500 font-light mt-1 uppercase tracking-widest">Black Oud · Asphalt · Clove</p>
</div>
<span className="text-sm font-light text-zinc-900">$240</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-y border-zinc-100" id="product-detail">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-7 grid grid-cols-2 gap-4">
<div className="aspect-[4/5] bg-zinc-50 overflow-hidden">
<img alt="Detail 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[4/5] bg-zinc-50 overflow-hidden mt-12">
<img alt="Detail 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-5">
<nav className="flex gap-2 text-[10px] uppercase tracking-widest text-zinc-400 mb-8">
<a className="hover:text-zinc-900" href="#">Collections</a>
<span>/</span>
<span className="text-zinc-900">Santal 01</span>
</nav>
<h1 className="text-4xl md:text-5xl font-light tracking-tightest text-zinc-900 mb-4">Santal 01 / Concrete</h1>
<div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-zinc-100">
<span className="text-xl font-light">$195.00</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-400">100ml / 3.4 fl.oz</span>
</div>
<p className="text-base text-zinc-600 font-light leading-relaxed mb-10">
                        A brutalist interpretation of sandalwood. The fragrance opens with the sharpness of wet concrete and cold metal, eventually settling into a creamy, architectural santal and smoked iris.
                    </p>
<div className="space-y-6 mb-12">
<div className="flex justify-between items-center py-4 border-b border-zinc-100 group cursor-pointer">
<span className="text-xs uppercase tracking-widest font-medium">Notes Profile</span>
<iconify-icon className="text-lg text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="flex justify-between items-center py-4 border-b border-zinc-100 group cursor-pointer">
<span className="text-xs uppercase tracking-widest font-medium">Ingredients</span>
<iconify-icon className="text-lg text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="flex justify-between items-center py-4 border-b border-zinc-100 group cursor-pointer">
<span className="text-xs uppercase tracking-widest font-medium">Shipping &amp; Returns</span>
<iconify-icon className="text-lg text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-zinc-900 text-white py-5 text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-zinc-800 transition-colors shadow-2xl shadow-zinc-200">
                        Add to bag
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-screen-2xl mx-auto" id="journal">
<div className="text-center mb-24">
<span className="text-[11px] font-medium tracking-[0.3em] uppercase text-zinc-400 mb-4 block">Editorial</span>
<h2 className="text-4xl font-light tracking-tightest">The Journal</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

<article className="group">
<div className="aspect-[16/10] overflow-hidden bg-zinc-100 mb-8">
<img alt="Journal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&amp;w=2624&amp;auto=format&amp;fit=crop"/>
</div>
<time className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">October 24, 2023</time>
<h3 className="text-xl font-light tracking-tight text-zinc-900 mt-3 mb-4 leading-snug">The Architecture of Synthetic Molecules</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2">Exploring why laboratory-created elements are essential to the future of ethical and structural perfumery.</p>
<a className="inline-block mt-6 text-[10px] uppercase tracking-widest font-medium border-b border-zinc-900 pb-1" href="#">Read more</a>
</article>

<article className="group">
<div className="aspect-[16/10] overflow-hidden bg-zinc-100 mb-8">
<img alt="Journal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1490623970972-ae8bb3da4f3e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<time className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">September 12, 2023</time>
<h3 className="text-xl font-light tracking-tight text-zinc-900 mt-3 mb-4 leading-snug">Olfactive Memory: Reconstructing Grasse</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2">A photographic essay through the historic flower fields of the French Riviera through a modern lens.</p>
<a className="inline-block mt-6 text-[10px] uppercase tracking-widest font-medium border-b border-zinc-900 pb-1" href="#">Read more</a>
</article>

<article className="group">
<div className="aspect-[16/10] overflow-hidden bg-zinc-100 mb-8">
<img alt="Journal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<time className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">August 05, 2023</time>
<h3 className="text-xl font-light tracking-tight text-zinc-900 mt-3 mb-4 leading-snug">A Dialogue on Minimalist Living</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed line-clamp-2">Interior designer Marc Leoni discusses why fragrance is the final layer of spatial design.</p>
<a className="inline-block mt-6 text-[10px] uppercase tracking-widest font-medium border-b border-zinc-900 pb-1" href="#">Read more</a>
</article>
</div>
</section>

<footer className="bg-zinc-100 pt-32 pb-12">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-32">
<div className="lg:col-span-5">
<h2 className="text-3xl font-light tracking-tightest uppercase mb-8">Aéther</h2>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-sm mb-12">
                        Creating a new language of scent through architectural precision and minimalist philosophy. Based in Stockholm, shipping globally.
                    </p>
<div className="flex items-center gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:videocamera-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="lg:col-span-2">
<h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-900 mb-8">Navigation</h4>
<ul className="space-y-4">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-light" href="#">All Collections</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-light" href="#">Discovery Sets</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-light" href="#">Home Objects</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-light" href="#">The Journal</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-900 mb-8">Support</h4>
<ul className="space-y-4">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-light" href="#">Shipping Policy</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-light" href="#">Returns &amp; Exchanges</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-light" href="#">Privacy</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>
<div className="lg:col-span-3">
<h4 className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-900 mb-8">Newsletter</h4>
<p className="text-xs text-zinc-500 font-light mb-6">Join the registry for archival updates.</p>
<form className="relative">
<input className="w-full bg-transparent border-b border-zinc-300 py-3 text-xs focus:border-zinc-900 outline-none transition-colors placeholder:text-zinc-300 font-light" placeholder="Email Address" type="email"/>
<button className="absolute right-0 bottom-3 text-[10px] uppercase tracking-widest font-medium">Join</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-200 pt-8">
<span className="text-[10px] uppercase tracking-widest text-zinc-400">© 2024 AÉTHER AG</span>
<div className="flex gap-8">
<span className="text-[10px] uppercase tracking-widest text-zinc-400">Stockholm</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-400">Paris</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-400">Tokyo</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
