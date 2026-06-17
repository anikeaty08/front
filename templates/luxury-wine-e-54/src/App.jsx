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
      

<div className="fixed inset-0 z-0">

<img alt="Luxury Interior" className="w-full h-full object-cover opacity-30 blur-[3px] scale-105 transform origin-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/80 to-stone-950"></div>

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-30 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-stone-950/70 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<button className="md:hidden text-stone-400 hover:text-amber-500 transition-colors">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>

<div className="hidden md:flex items-center space-x-8 text-xs tracking-[0.2em] uppercase text-stone-400 font-light">
<a className="hover:text-amber-500 transition-colors duration-300" href="#">Shop</a>
<a className="hover:text-amber-500 transition-colors duration-300" href="#">Regions</a>
<a className="hover:text-amber-500 transition-colors duration-300" href="#">Producers</a>
</div>

<div className="logo-font text-2xl tracking-tighter text-white flex flex-col items-center leading-none absolute left-1/2 transform -translate-x-1/2 cursor-pointer group">
<span className="group-hover:text-amber-500 transition-colors duration-500">THE RESERVE</span>
<span className="text-[0.5rem] tracking-[0.4em] text-stone-500 font-sans uppercase mt-1.5 group-hover:text-amber-500/70 transition-colors duration-500">Est. 1984</span>
</div>

<div className="flex items-center space-x-8 text-stone-400">
<a className="hidden md:block text-xs tracking-[0.2em] uppercase hover:text-amber-500 transition-colors duration-300" href="#">Concierge</a>
<div className="flex items-center space-x-6 border-l border-white/10 pl-8">
<button className="hover:text-amber-500 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="relative hover:text-amber-500 transition-colors group">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="18"></span>
<span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
</button>
</div>
</div>
</div>
</nav>

<main className="relative z-10 pt-40 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
<span className="text-amber-500 text-xs tracking-[0.3em] uppercase font-medium border-y border-amber-900/30 py-2 px-6">Autumn Collection Release</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-stone-100 font-light tracking-tight leading-[1.1] max-w-4xl mx-auto">
                    Curators of the <br/>
<span className="serif italic text-stone-500 font-normal">Exceptional</span> &amp; Rare.
                </h1>
<p className="text-stone-400 font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed pt-2">
                    An exclusive portfolio of investment-grade vintages, sourced directly from the subterranean cellars of the world's most prestigious châteaux.
                </p>
<div className="flex items-center gap-6 pt-6">
<button className="group relative px-10 py-4 bg-transparent border border-stone-600 hover:border-amber-600 text-stone-200 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 w-0 bg-stone-100 transition-all duration-[300ms] ease-out group-hover:w-full"></div>
<span className="relative z-10 text-xs uppercase tracking-[0.2em] group-hover:text-stone-950 font-medium">Explore Cellar</span>
</button>
</div>
</div>
</section>

<section className="sticky top-24 z-40 mb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel px-6 py-4 flex flex-wrap justify-between items-center gap-4 rounded-sm">
<div className="flex items-center space-x-6 md:space-x-10 text-xs uppercase tracking-widest font-medium text-stone-500 overflow-x-auto no-scrollbar whitespace-nowrap">
<button className="text-amber-500 flex items-center gap-2 border-b border-amber-500 pb-0.5">
                            All Wines
                        </button>
<button className="hover:text-stone-300 transition-colors">Red</button>
<button className="hover:text-stone-300 transition-colors">White</button>
<button className="hover:text-stone-300 transition-colors">Champagne</button>
<button className="hover:text-stone-300 transition-colors">Fine Spirits</button>
</div>
<div className="hidden md:flex items-center gap-6 border-l border-white/5 pl-6">
<div className="flex items-center gap-2 text-stone-500">
<span className="text-[10px] uppercase tracking-widest">Sort</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="12"></span>
</div>
<div className="flex items-center gap-2 text-stone-500">
<span className="text-[10px] uppercase tracking-widest">Filter</span>
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="12"></span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900/50 border border-white/5 p-8 flex items-center justify-center">

<img alt="Tignanello" className="h-full w-auto object-contain filter brightness-[0.85] contrast-[1.1] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="bg-stone-100 text-stone-950 text-[0.6rem] px-2 py-1 uppercase tracking-widest font-medium">98 Points</span>
</div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<button className="text-stone-300 hover:text-amber-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>

<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
<button className="w-full h-12 bg-stone-100/95 backdrop-blur text-stone-950 text-xs uppercase tracking-[0.15em] hover:bg-amber-500 hover:text-white transition-colors duration-300 font-medium border border-transparent">
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-6 text-center space-y-2">
<p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-light">Tuscany, Italy</p>
<h3 className="text-xl text-stone-200 serif font-normal tracking-tight group-hover:text-amber-500 transition-colors duration-300">Tignanello 2019</h3>
<p className="text-sm text-amber-500/90 font-serif italic">$145.00</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900/50 border border-white/5 p-8 flex items-center justify-center">
<img alt="Opus One" className="h-full w-auto object-contain filter brightness-[0.85] contrast-[1.1] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="bg-amber-900/40 text-amber-500 border border-amber-500/30 text-[0.6rem] px-2 py-1 uppercase tracking-widest font-medium">Cult</span>
</div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<button className="text-stone-300 hover:text-amber-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
<button className="w-full h-12 bg-stone-100/95 backdrop-blur text-stone-950 text-xs uppercase tracking-[0.15em] hover:bg-amber-500 hover:text-white transition-colors duration-300 font-medium border border-transparent">
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-6 text-center space-y-2">
<p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-light">Napa Valley, USA</p>
<h3 className="text-xl text-stone-200 serif font-normal tracking-tight group-hover:text-amber-500 transition-colors duration-300">Opus One 2018</h3>
<p className="text-sm text-amber-500/90 font-serif italic">$385.00</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900/50 border border-white/5 p-8 flex items-center justify-center">
<img alt="Beaucastel" className="h-full w-auto object-contain filter brightness-[0.85] contrast-[1.1] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<button className="text-stone-300 hover:text-amber-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
<button className="w-full h-12 bg-stone-100/95 backdrop-blur text-stone-950 text-xs uppercase tracking-[0.15em] hover:bg-amber-500 hover:text-white transition-colors duration-300 font-medium border border-transparent">
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-6 text-center space-y-2">
<p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-light">Rhone, France</p>
<h3 className="text-xl text-stone-200 serif font-normal tracking-tight group-hover:text-amber-500 transition-colors duration-300">Châteauneuf-du-Pape</h3>
<p className="text-sm text-amber-500/90 font-serif italic">$115.00</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative w-full aspect-[4/5] overflow-hidden bg-stone-900/50 border border-white/5 p-8 flex items-center justify-center">
<img alt="Sassicaia" className="h-full w-auto object-contain filter brightness-[0.85] contrast-[1.1] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b3303d8-5541-471e-84fa-b40b631d87e0_1600w.webp"/>
<div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="bg-stone-100 text-stone-950 text-[0.6rem] px-2 py-1 uppercase tracking-widest font-medium">Limited</span>
</div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
<button className="text-stone-300 hover:text-amber-500 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="18"></span>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
<button className="w-full h-12 bg-stone-100/95 backdrop-blur text-stone-950 text-xs uppercase tracking-[0.15em] hover:bg-amber-500 hover:text-white transition-colors duration-300 font-medium border border-transparent">
                                Add to Cart
                            </button>
</div>
</div>
<div className="mt-6 text-center space-y-2">
<p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] font-light">Bolgheri, Italy</p>
<h3 className="text-xl text-stone-200 serif font-normal tracking-tight group-hover:text-amber-500 transition-colors duration-300">Sassicaia 2018</h3>
<p className="text-sm text-amber-500/90 font-serif italic">$295.00</p>
</div>
</div>
</div>
<div className="flex justify-center mt-16">
<button className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-stone-400 hover:text-amber-500 transition-colors group">
<span>View Full Catalogue</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</section>

<section className="mb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="relative w-full border border-amber-900/20 bg-gradient-to-br from-stone-900 via-black to-stone-900 overflow-hidden">

<div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">

<div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
<div className="inline-flex items-center space-x-3 mb-6">
<span className="w-8 h-[1px] bg-amber-600"></span>
<span className="text-amber-500 text-xs tracking-[0.3em] uppercase">The Vault</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-stone-100 serif font-normal tracking-tight leading-none mb-8">
                                Rare <span className="italic text-stone-600 font-light">&amp;</span><br/>
<span className="text-gold-gradient">Legendary</span>
</h2>
<p className="text-stone-400 font-light leading-relaxed max-w-md mb-10">
                                Access our private collection of auction-grade wines. From Domaine de la Romanée-Conti to Screaming Eagle, discover bottles that define history.
                            </p>
<div className="flex items-center gap-8">
<a className="px-8 py-3 bg-amber-900/20 border border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-stone-950 transition-all duration-300 text-xs uppercase tracking-[0.2em]" href="#">
                                    Request Access
                                </a>
<div className="flex flex-col">
<span className="text-[10px] text-stone-500 uppercase tracking-widest">Global Sourcing</span>
<span className="text-xs text-stone-300 font-serif italic mt-1">London • Paris • New York</span>
</div>
</div>
</div>

<div className="relative h-[500px] lg:h-auto bg-stone-950 flex items-center justify-center overflow-hidden group">

<div className="absolute w-64 h-64 bg-amber-600/10 rounded-full blur-[100px] group-hover:bg-amber-600/20 transition-all duration-1000"></div>

<img alt="Rare Wine" className="relative z-10 h-[70%] object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transform group-hover:scale-105 group-hover:-rotate-2 transition-all duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute bottom-12 right-12 z-20 glass-panel px-6 py-4 border-l-2 border-l-amber-500">
<p className="text-xs text-stone-400 uppercase tracking-widest mb-1">Featured Lot</p>
<p className="text-lg text-white serif">Château Margaux 1996</p>
<p className="text-amber-500 serif italic mt-1">$1,250.00</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-stone-950 relative z-10">
<div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<div className="logo-font text-xl tracking-tighter text-white">THE RESERVE</div>
<p className="text-[10px] text-stone-600 uppercase tracking-widest mt-2">Fine Wines &amp; Spirits</p>
</div>
<div className="flex space-x-8 text-xs tracking-[0.15em] uppercase text-stone-500">
<a className="hover:text-amber-500 transition-colors" href="#">Shipping</a>
<a className="hover:text-amber-500 transition-colors" href="#">Returns</a>
<a className="hover:text-amber-500 transition-colors" href="#">Contact</a>
<a className="hover:text-amber-500 transition-colors" href="#">Legal</a>
</div>
<div className="flex space-x-6 text-stone-500">
<a className="hover:text-amber-500 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="hover:text-amber-500 transition-colors" href="#"><span className="iconify" data-icon="lucide:mail" data-width="18"></span></a>
</div>
</div>
<div className="w-full h-1 bg-gradient-to-r from-stone-950 via-amber-900/30 to-stone-950"></div>
</footer>
</main>

    </>
  );
}
