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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560611441-1bbdb0984922?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 blur-sm scale-110"></div>

<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/80 to-neutral-950"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950/50 via-transparent to-neutral-950/50"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden text-neutral-400 hover:text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden lg:flex items-center space-x-8 text-xs tracking-widest uppercase font-medium text-neutral-400">
<a className="hover:text-gold transition-colors duration-300" href="#">Shop</a>
<a className="hover:text-gold transition-colors duration-300" href="#">Regions</a>
<a className="hover:text-gold transition-colors duration-300" href="#">Producers</a>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
<a className="text-xl tracking-[0.2em] font-light text-white font-serif uppercase whitespace-nowrap" href="#">
                    Bishopsgate
                </a>
<span className="text-[0.6rem] tracking-[0.3em] text-amber-500/80 uppercase">Cellars &amp; Co.</span>
</div>

<div className="flex items-center space-x-6 text-neutral-400">
<button className="hidden lg:block hover:text-gold transition-colors duration-300">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-gold transition-colors duration-300 relative">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
</button>
</div>
</div>
</nav>

<main className="pt-32 pb-20 relative z-10">

<header className="max-w-7xl mx-auto px-6 mb-24 text-center">
<span className="inline-block py-1 px-3 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-amber-500/90 mb-6 bg-white/5 backdrop-blur-sm">
                Established 1892
            </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[0.9] mb-8 serif">
                The Curated <br/> <i className="font-thin text-neutral-400">Collection</i>
</h1>
<p className="text-neutral-400 max-w-lg mx-auto text-sm leading-relaxed font-light mb-10">
                An exclusive selection of the world's finest viticulture. Sourced from private estates and rare archives for the discerning collector.
            </p>

<div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs tracking-widest uppercase border-y border-white/5 py-6 max-w-4xl mx-auto">
<button className="text-white border-b border-amber-500/50 pb-0.5">All Wines</button>
<button className="text-neutral-500 hover:text-white transition-colors">Bordeaux</button>
<button className="text-neutral-500 hover:text-white transition-colors">Burgundy</button>
<button className="text-neutral-500 hover:text-white transition-colors">Tuscany</button>
<button className="text-neutral-500 hover:text-white transition-colors">Napa Valley</button>
<button className="text-neutral-500 hover:text-white transition-colors">Champagne</button>
</div>
</header>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32">

<div className="group relative flex flex-col glass-panel p-6 rounded-sm transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">France</span>
<button className="text-neutral-600 hover:text-amber-500 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="h-64 w-full flex items-center justify-center mb-8 relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent rounded-full blur-xl transform translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<img alt="Wine Bottle" className="h-full object-contain grayscale-[30%] group-hover:grayscale-0 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-auto">
<div className="flex items-baseline justify-between mb-1">
<span className="text-xs text-amber-500/80 font-mono">2015</span>
<span className="text-sm text-gold font-light font-serif italic">$840</span>
</div>
<h3 className="text-lg text-white font-normal serif tracking-tight leading-snug mb-4 group-hover:text-amber-100 transition-colors">Château Margaux Premier Grand Cru</h3>
<button className="w-full py-3 border border-white/10 text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:border-amber-500/30 hover:bg-amber-900/10 transition-all duration-300">
                        Add to Cellar
                    </button>
</div>
</div>

<div className="group relative flex flex-col glass-panel p-6 rounded-sm transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Italy</span>
<button className="text-neutral-600 hover:text-amber-500 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="h-64 w-full flex items-center justify-center mb-8 relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent rounded-full blur-xl transform translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Wine Bottle" className="h-full object-contain grayscale-[30%] group-hover:grayscale-0 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-auto">
<div className="flex items-baseline justify-between mb-1">
<span className="text-xs text-amber-500/80 font-mono">2010</span>
<span className="text-sm text-gold font-light font-serif italic">$520</span>
</div>
<h3 className="text-lg text-white font-normal serif tracking-tight leading-snug mb-4 group-hover:text-amber-100 transition-colors">Tenuta San Guido Sassicaia Bolgheri</h3>
<button className="w-full py-3 border border-white/10 text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:border-amber-500/30 hover:bg-amber-900/10 transition-all duration-300">
                        Add to Cellar
                    </button>
</div>
</div>

<div className="group relative flex flex-col glass-panel p-6 rounded-sm transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">USA</span>
<button className="text-neutral-600 hover:text-amber-500 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="h-64 w-full flex items-center justify-center mb-8 relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent rounded-full blur-xl transform translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Wine Bottle" className="h-full object-contain grayscale-[30%] group-hover:grayscale-0 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="mt-auto">
<div className="flex items-baseline justify-between mb-1">
<span className="text-xs text-amber-500/80 font-mono">2018</span>
<span className="text-sm text-gold font-light font-serif italic">$1,250</span>
</div>
<h3 className="text-lg text-white font-normal serif tracking-tight leading-snug mb-4 group-hover:text-amber-100 transition-colors">Screaming Eagle Cabernet Sauvignon</h3>
<button className="w-full py-3 border border-white/10 text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:border-amber-500/30 hover:bg-amber-900/10 transition-all duration-300">
                        Add to Cellar
                    </button>
</div>
</div>

<div className="group relative flex flex-col glass-panel p-6 rounded-sm transition-all duration-500">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Australia</span>
<button className="text-neutral-600 hover:text-amber-500 transition-colors">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="h-64 w-full flex items-center justify-center mb-8 relative">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent rounded-full blur-xl transform translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Wine Bottle" className="h-full object-contain grayscale-[30%] group-hover:grayscale-0 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="mt-auto">
<div className="flex items-baseline justify-between mb-1">
<span className="text-xs text-amber-500/80 font-mono">2016</span>
<span className="text-sm text-gold font-light font-serif italic">$695</span>
</div>
<h3 className="text-lg text-white font-normal serif tracking-tight leading-snug mb-4 group-hover:text-amber-100 transition-colors">Penfolds Grange Bin 95</h3>
<button className="w-full py-3 border border-white/10 text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:border-amber-500/30 hover:bg-amber-900/10 transition-all duration-300">
                        Add to Cellar
                    </button>
</div>
</div>
</div>

<section className="relative border-y border-white/5 py-24 bg-neutral-950/40 backdrop-blur-sm">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<span className="text-amber-500/60 text-[10px] tracking-[0.2em] uppercase block mb-3">Limited Availability</span>
<h2 className="text-3xl md:text-5xl text-white font-normal serif tracking-tight">The Reserve Wall</h2>
</div>
<a className="group flex items-center space-x-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white mt-6 md:mt-0 transition-colors" href="#">
<span>View Vault</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar">

<div className="min-w-[280px] md:min-w-[340px] border border-amber-900/20 bg-gradient-to-b from-neutral-900/80 to-neutral-950/80 p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4">
<span className="flex items-center gap-1 text-[10px] text-amber-500 border border-amber-500/30 px-2 py-0.5 rounded-full bg-amber-950/30">
<iconify-icon icon="lucide:gem" width="10"></iconify-icon> Rare
                            </span>
</div>
<div className="h-56 flex items-center justify-center mb-6">
<img className="h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="text-center">
<h3 className="serif text-xl text-white mb-1">Domaine de la Romanée-Conti</h3>
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4">Grand Cru 2009</p>
<p className="text-gold font-serif text-2xl italic">$24,500</p>
</div>

<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amber-500/40"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amber-500/40"></div>
</div>

<div className="min-w-[280px] md:min-w-[340px] border border-white/5 bg-neutral-900/40 p-8 relative group hover:border-white/10 transition-colors">
<div className="h-56 flex items-center justify-center mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
<img className="h-full object-contain grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="text-center">
<h3 className="serif text-xl text-white mb-1">Petrus Pomerol</h3>
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4">Vintage 2005</p>
<p className="text-gold font-serif text-2xl italic">$5,200</p>
</div>
</div>

<div className="min-w-[280px] md:min-w-[340px] border border-white/5 bg-neutral-900/40 p-8 relative group hover:border-white/10 transition-colors">
<div className="h-56 flex items-center justify-center mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
<img className="h-full object-contain grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="text-center">
<h3 className="serif text-xl text-white mb-1">Harlan Estate</h3>
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-4">Proprietary Red 2012</p>
<p className="text-gold font-serif text-2xl italic">$1,450</p>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
</section>

<footer className="max-w-7xl mx-auto px-6 pt-24 pb-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-16">
<div className="col-span-1 md:col-span-2">
<h4 className="text-white serif text-2xl mb-6">Join the Registry</h4>
<p className="text-neutral-500 font-light text-sm mb-6 max-w-sm">Receive priority access to allocation-only releases and private tasting events at our Bishopsgate location.</p>
<div className="flex items-center border-b border-white/20 pb-2 max-w-sm">
<input className="bg-transparent w-full text-sm text-white focus:outline-none placeholder:text-neutral-600 font-light" placeholder="Email Address" type="email"/>
<button className="text-neutral-400 hover:text-gold uppercase text-[10px] tracking-widest">Subscribe</button>
</div>
</div>
<div>
<h5 className="text-white text-[10px] uppercase tracking-widest mb-6 font-medium">Boutique</h5>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-amber-500 transition-colors" href="#">The Cellar</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Gifts &amp; Accessories</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Corporate Services</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-[10px] uppercase tracking-widest mb-6 font-medium">Contact</h5>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li>15 Bishopsgate, London</li>
<li>+44 (0) 20 7123 4567</li>
<li><a className="hover:text-amber-500 transition-colors" href="#">concierge@bishopsgate.co</a></li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-600 uppercase tracking-widest">
<p>© 2024 Bishopsgate Cellars. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Terms</a>
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Cookie Policy</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
