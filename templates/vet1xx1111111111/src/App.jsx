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
extend: {
colors: {
brass: {
400: '#E5C580',
500: '#D4AF37',
600: '#B59026',
900: '#4A3B10',
},
oak: {
950: '#0F0E0D', // Very dark warm black
900: '#1A1816',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<img alt="Dark oak wine cellar" className="w-full h-full object-cover opacity-30 filter blur-sm scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-oak-950/80 via-oak-950/60 to-oak-950"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-oak-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center space-x-8">
<a className="text-xs tracking-widest uppercase text-neutral-400 hover:text-brass-400 transition-colors" href="#">Shop</a>
<a className="text-xs tracking-widest uppercase text-neutral-400 hover:text-brass-400 transition-colors" href="#">Regions</a>
<a className="text-xs tracking-widest uppercase text-neutral-400 hover:text-brass-400 transition-colors" href="#">Vintages</a>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2 text-center">
<h1 className="font-serif text-2xl tracking-widest text-white uppercase font-medium">L'Oak &amp; Cask</h1>
</div>

<div className="flex items-center space-x-6">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors hidden md:block">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors relative">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-brass-500 rounded-full"></span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">

<section className="mb-24 text-center relative">
<span className="block text-brass-500 text-xs tracking-[0.2em] uppercase mb-4 font-medium opacity-80 animate-fade-in">Est. 1924 • London</span>
<h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight leading-[0.9] font-normal">
                Curated <i className="font-light text-neutral-400">Excellence</i>
</h2>
<p className="text-neutral-400 max-w-md mx-auto mb-10 text-sm font-light leading-relaxed">
                An uncompromising collection of rare vintages and premier crus from the world's most distinguished terroirs.
            </p>
<div className="flex justify-center gap-6">
<button className="group relative px-8 py-3 overflow-hidden border border-white/10 hover:border-brass-500/50 transition-all duration-500 rounded-sm">
<div className="absolute inset-0 w-0 bg-white/5 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="relative text-xs tracking-widest uppercase text-white group-hover:text-brass-400">View Collection</span>
</button>
</div>
</section>

<section className="mb-32 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-brass-900/0 via-brass-900/20 to-brass-900/0 blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
<div className="relative bg-neutral-900/40 backdrop-blur-md border border-white/10 p-8 md:p-12 overflow-hidden rounded-sm">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 space-y-6">
<div className="flex items-center gap-3">
<span className="h-px w-8 bg-brass-500"></span>
<span className="text-brass-500 text-xs tracking-widest uppercase">The Rare Collection</span>
</div>
<h3 className="font-serif text-4xl md:text-5xl text-white font-normal tracking-tight">Château Margaux 2009</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
                            A legendary vintage of extraordinary concentration and finesse. Notes of blackcurrant, violets, and graphite with a finish that lingers for minutes. Sourced directly from the estate's private cellar.
                        </p>
<div className="pt-4 flex items-center gap-8">
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-wide">Origin</span>
<span className="text-neutral-200 text-sm">Bordeaux, France</span>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-wide">Alcohol</span>
<span className="text-neutral-200 text-sm">13.5%</span>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-wide">Score</span>
<span className="text-neutral-200 text-sm">99 RP</span>
</div>
</div>
<div className="pt-6 flex items-center justify-between border-t border-white/5 mt-6">
<span className="font-serif text-2xl text-brass-400">£1,250.00</span>
<button className="text-xs uppercase tracking-widest text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors">Acquire</button>
</div>
</div>
<div className="order-1 md:order-2 relative h-96 flex items-center justify-center">

<div className="absolute inset-0 bg-radial-gradient from-brass-600/10 to-transparent opacity-50 blur-2xl"></div>
<img alt="Premium Wine Bottle" className="h-full object-contain drop-shadow-2xl relative z-10 brightness-90 contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<div className="flex flex-col md:flex-row gap-12">

<aside className="w-full md:w-64 shrink-0 space-y-10">
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-white mb-6">Varietal</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 group cursor-pointer">
<div className="w-3 h-3 border border-neutral-600 group-hover:border-brass-500 rounded-sm flex items-center justify-center transition-colors">
<div className="w-1.5 h-1.5 bg-brass-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Cabernet Sauvignon</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<div className="w-3 h-3 border border-neutral-600 group-hover:border-brass-500 rounded-sm flex items-center justify-center transition-colors"></div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Pinot Noir</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<div className="w-3 h-3 border border-neutral-600 group-hover:border-brass-500 rounded-sm flex items-center justify-center transition-colors"></div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Syrah</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<div className="w-3 h-3 border border-neutral-600 group-hover:border-brass-500 rounded-sm flex items-center justify-center transition-colors"></div>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Chardonnay</span>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-white mb-6">Price Range</h4>
<div className="px-1">
<input className="w-full bg-neutral-800 h-0.5 appearance-none rounded-lg" max="5000" min="0" type="range"/>
<div className="flex justify-between mt-4 text-xs text-neutral-400 font-sans">
<span>£50</span>
<span>£5,000+</span>
</div>
</div>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-white mb-6">Region</h4>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1.5 text-neutral-400 hover:text-white hover:border-white/30 cursor-pointer transition-colors">Bordeaux</span>
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1.5 text-neutral-400 hover:text-white hover:border-white/30 cursor-pointer transition-colors">Tuscany</span>
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1.5 text-neutral-400 hover:text-white hover:border-white/30 cursor-pointer transition-colors">Napa</span>
<span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1.5 text-neutral-400 hover:text-white hover:border-white/30 cursor-pointer transition-colors">Burgundy</span>
</div>
</div>
</aside>

<div className="flex-1">

<div className="flex justify-between items-end mb-8 border-b border-white/5 pb-4">
<span className="text-xs text-neutral-500 font-light">Showing 12 exquisite wines</span>
<div className="flex items-center gap-2 cursor-pointer group">
<span className="text-xs text-neutral-300 group-hover:text-white transition-colors">Sort by: Featured</span>
<iconify-icon className="text-neutral-500 group-hover:text-white" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-900/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden mb-5">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<img alt="Wine Bottle" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4">
<button className="p-2 text-white/50 hover:text-brass-400 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-neutral-900/90 border-t border-white/10">
<button className="w-full py-2 text-xs uppercase tracking-widest text-white hover:text-brass-400 flex items-center justify-center gap-2">
<span>Add to Cellar</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="text-center space-y-1">
<h3 className="font-serif text-xl text-white font-normal group-hover:text-brass-400 transition-colors">Opus One 2018</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Napa Valley</p>
<p className="text-sm text-brass-500 font-medium pt-1 font-serif">£345.00</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-900/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden mb-5">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<img alt="Wine Bottle" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 right-4">
<button className="p-2 text-white/50 hover:text-brass-400 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-neutral-900/90 border-t border-white/10">
<button className="w-full py-2 text-xs uppercase tracking-widest text-white hover:text-brass-400 flex items-center justify-center gap-2">
<span>Add to Cellar</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="text-center space-y-1">
<h3 className="font-serif text-xl text-white font-normal group-hover:text-brass-400 transition-colors">Tignanello 2019</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Tuscany</p>
<p className="text-sm text-brass-500 font-medium pt-1 font-serif">£145.00</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-900/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden mb-5">
<div className="absolute top-3 left-3 z-10">
<span className="bg-brass-900/80 text-brass-400 text-[10px] uppercase tracking-wider px-2 py-1 border border-brass-500/20">Limited</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<img alt="Wine Bottle" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-4 right-4">
<button className="p-2 text-white/50 hover:text-brass-400 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-neutral-900/90 border-t border-white/10">
<button className="w-full py-2 text-xs uppercase tracking-widest text-white hover:text-brass-400 flex items-center justify-center gap-2">
<span>Add to Cellar</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="text-center space-y-1">
<h3 className="font-serif text-xl text-white font-normal group-hover:text-brass-400 transition-colors">Penfolds Grange 2016</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">South Australia</p>
<p className="text-sm text-brass-500 font-medium pt-1 font-serif">£650.00</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-900/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden mb-5">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<img alt="Wine Bottle" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4">
<button className="p-2 text-white/50 hover:text-brass-400 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-neutral-900/90 border-t border-white/10">
<button className="w-full py-2 text-xs uppercase tracking-widest text-white hover:text-brass-400 flex items-center justify-center gap-2">
<span>Add to Cellar</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="text-center space-y-1">
<h3 className="font-serif text-xl text-white font-normal group-hover:text-brass-400 transition-colors">Sassicaia 2017</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Bolgheri</p>
<p className="text-sm text-brass-500 font-medium pt-1 font-serif">£280.00</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-900/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden mb-5">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<img alt="Wine Bottle" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4">
<button className="p-2 text-white/50 hover:text-brass-400 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-neutral-900/90 border-t border-white/10">
<button className="w-full py-2 text-xs uppercase tracking-widest text-white hover:text-brass-400 flex items-center justify-center gap-2">
<span>Add to Cellar</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="text-center space-y-1">
<h3 className="font-serif text-xl text-white font-normal group-hover:text-brass-400 transition-colors">Dom Pérignon 2010</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Champagne</p>
<p className="text-sm text-brass-500 font-medium pt-1 font-serif">£195.00</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] bg-neutral-900/20 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden mb-5">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<img alt="Wine Bottle" className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4">
<button className="p-2 text-white/50 hover:text-brass-400 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-neutral-900/90 border-t border-white/10">
<button className="w-full py-2 text-xs uppercase tracking-widest text-white hover:text-brass-400 flex items-center justify-center gap-2">
<span>Add to Cellar</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
</div>
<div className="text-center space-y-1">
<h3 className="font-serif text-xl text-white font-normal group-hover:text-brass-400 transition-colors">Vega Sicilia Único</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Ribera del Duero</p>
<p className="text-sm text-brass-500 font-medium pt-1 font-serif">£390.00</p>
</div>
</div>
</div>

<div className="mt-20 flex justify-center">
<button className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 px-8 py-3 transition-colors">
                        View Complete Cellar
                    </button>
</div>
</div>
</div>
</main>

<footer className="relative z-10 border-t border-white/5 bg-oak-950/90 backdrop-blur-lg pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="space-y-4">
<h5 className="font-serif text-lg text-white">L'Oak &amp; Cask</h5>
<p className="text-xs text-neutral-500 leading-relaxed font-light">
                        Purveyors of the world's finest vintages, serving the refined palate with heritage and distinction.
                    </p>
</div>
<div>
<h5 className="text-xs font-medium uppercase tracking-widest text-white mb-4">Collection</h5>
<ul className="space-y-2 text-xs text-neutral-500 font-light">
<li><a className="hover:text-brass-400 transition-colors" href="#">Red Wines</a></li>
<li><a className="hover:text-brass-400 transition-colors" href="#">White Wines</a></li>
<li><a className="hover:text-brass-400 transition-colors" href="#">Champagne</a></li>
<li><a className="hover:text-brass-400 transition-colors" href="#">Rare Vintages</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium uppercase tracking-widest text-white mb-4">Services</h5>
<ul className="space-y-2 text-xs text-neutral-500 font-light">
<li><a className="hover:text-brass-400 transition-colors" href="#">Cellar Valuation</a></li>
<li><a className="hover:text-brass-400 transition-colors" href="#">Private Events</a></li>
<li><a className="hover:text-brass-400 transition-colors" href="#">Concierge</a></li>
<li><a className="hover:text-brass-400 transition-colors" href="#">Trade</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium uppercase tracking-widest text-white mb-4">Newsletter</h5>
<div className="flex border-b border-white/10 pb-2">
<input className="bg-transparent text-xs text-white placeholder-neutral-600 w-full focus:outline-none" placeholder="Email Address" type="email"/>
<button className="text-neutral-400 hover:text-white">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 uppercase tracking-wider border-t border-white/5 pt-8">
<p>© 2024 L'Oak &amp; Cask. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
<a className="hover:text-neutral-400" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
