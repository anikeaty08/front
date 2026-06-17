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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597250861267-3398dc3a7433?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 blur-sm scale-105"></div>

<div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/80 to-stone-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c0a09_100%)] opacity-80"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-stone-950/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-stone-400 hover:text-amber-100 transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>

<div className="flex flex-col items-center md:items-start group cursor-pointer">
<span className="serif text-xl tracking-widest text-stone-100 font-medium group-hover:text-amber-500/80 transition-colors duration-500">BARON &amp; CASK</span>
<span className="text-[0.6rem] uppercase tracking-[0.3em] text-stone-500 group-hover:text-stone-400 transition-colors">Est. 1892 • London</span>
</div>

<div className="hidden md:flex items-center gap-10 text-xs tracking-widest uppercase font-medium text-stone-400">
<a className="hover:text-amber-100 transition-colors" href="#">Cellar</a>
<a className="hover:text-amber-100 transition-colors" href="#">Regions</a>
<a className="text-amber-500/90 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:rounded-full after:bg-amber-500" href="#">Rare Finds</a>
<a className="hover:text-amber-100 transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center gap-6">
<button className="text-stone-400 hover:text-amber-100 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20"></span>
</button>
<button className="flex items-center gap-2 text-stone-400 hover:text-amber-100 transition-colors group">
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-height="20" data-icon="lucide:shopping-bag" data-width="20"></span>
<span className="hidden md:inline text-xs font-medium bg-stone-800 px-2 py-0.5 rounded-full text-stone-300">2</span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">

<header className="mb-24 flex flex-col items-center text-center space-y-6 animate-fade-in-up">
<span className="text-amber-500/80 text-xs uppercase tracking-[0.2em] font-medium border border-amber-500/20 px-4 py-1.5 rounded-full backdrop-blur-sm">New Arrivals from Bordeaux</span>
<h1 className="text-5xl md:text-7xl serif text-stone-100 font-medium tracking-tight leading-[1.1]">
                Curated Elegance <br/> <span className="text-stone-500 italic font-normal">for the</span> Discerning Palate
            </h1>
<p className="max-w-xl text-stone-400 font-light text-lg leading-relaxed">
                Experience a collection where heritage meets taste. From the rolling hills of Tuscany to the prestigious chateaus of France.
            </p>
<div className="pt-4 flex gap-6">
<button className="group relative px-8 py-3 overflow-hidden rounded-sm bg-amber-700/10 border border-amber-600/30 text-amber-100 transition-all hover:bg-amber-700/20 hover:border-amber-500/50">
<span className="relative text-xs uppercase tracking-widest font-medium flex items-center gap-2">
                        View Collection 
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
</div>
</header>

<div className="sticky top-20 z-40 mb-12 py-4 border-b border-white/5 backdrop-blur-xl bg-stone-950/40 -mx-6 px-6 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none md:border-b-0 flex items-center justify-between">
<div className="flex items-center gap-2 md:gap-4 overflow-x-auto no-scrollbar pb-2 md:pb-0">
<button className="whitespace-nowrap px-4 py-2 rounded-sm border border-stone-700/50 bg-stone-800/40 text-stone-100 text-xs uppercase tracking-wider font-medium hover:border-amber-500/30 transition-colors">All Wines</button>
<button className="whitespace-nowrap px-4 py-2 rounded-sm border border-transparent hover:bg-stone-800/30 text-stone-400 hover:text-stone-200 text-xs uppercase tracking-wider font-medium transition-colors">Red</button>
<button className="whitespace-nowrap px-4 py-2 rounded-sm border border-transparent hover:bg-stone-800/30 text-stone-400 hover:text-stone-200 text-xs uppercase tracking-wider font-medium transition-colors">White</button>
<button className="whitespace-nowrap px-4 py-2 rounded-sm border border-transparent hover:bg-stone-800/30 text-stone-400 hover:text-stone-200 text-xs uppercase tracking-wider font-medium transition-colors">Sparkling</button>
<button className="whitespace-nowrap px-4 py-2 rounded-sm border border-transparent hover:bg-stone-800/30 text-stone-400 hover:text-stone-200 text-xs uppercase tracking-wider font-medium transition-colors">Dessert</button>
</div>
<div className="hidden md:flex items-center gap-3 border-l border-white/10 pl-6">
<span className="text-stone-500 text-xs uppercase tracking-wider">Sort by</span>
<button className="flex items-center gap-1 text-stone-300 text-xs font-medium hover:text-amber-200">
                    Vintage <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-900/40 border border-white/5 rounded-sm mb-5 transition-all duration-500 group-hover:border-amber-500/20 group-hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.1)]">

<div className="absolute top-3 left-3 z-20">
<span className="px-2 py-1 bg-stone-950/80 backdrop-blur border border-white/10 text-[10px] uppercase tracking-widest text-stone-300">98 Pts</span>
</div>

<img alt="Wine Bottle" className="object-cover w-full h-full mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60"></div>

<button className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-amber-600/90 text-white p-2.5 rounded-full hover:bg-amber-500 shadow-lg">
<span className="iconify" data-icon="lucide:plus" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="serif text-xl text-stone-200 group-hover:text-amber-100 transition-colors">Château Latour</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Pauillac, 2010</p>
</div>
<span className="serif text-lg text-amber-500/90 font-medium">$1,450</span>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-900/40 border border-white/5 rounded-sm mb-5 transition-all duration-500 group-hover:border-amber-500/20 group-hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.1)]">
<img alt="Wine Bottle" className="object-cover w-full h-full mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60"></div>
<button className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-amber-600/90 text-white p-2.5 rounded-full hover:bg-amber-500 shadow-lg">
<span className="iconify" data-icon="lucide:plus" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="serif text-xl text-stone-200 group-hover:text-amber-100 transition-colors">Penfolds Grange</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider font-medium">South Australia, 2016</p>
</div>
<span className="serif text-lg text-amber-500/90 font-medium">$850</span>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-900/40 border border-white/5 rounded-sm mb-5 transition-all duration-500 group-hover:border-amber-500/20 group-hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.1)]">
<div className="absolute top-3 left-3 z-20">
<span className="px-2 py-1 bg-amber-900/30 backdrop-blur border border-amber-500/30 text-[10px] uppercase tracking-widest text-amber-200">Limited</span>
</div>
<img alt="Wine Bottle" className="object-cover w-full h-full mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60"></div>
<button className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-amber-600/90 text-white p-2.5 rounded-full hover:bg-amber-500 shadow-lg">
<span className="iconify" data-icon="lucide:plus" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="serif text-xl text-stone-200 group-hover:text-amber-100 transition-colors">Tignanello</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Tuscany, 2018</p>
</div>
<span className="serif text-lg text-amber-500/90 font-medium">$225</span>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-900/40 border border-white/5 rounded-sm mb-5 transition-all duration-500 group-hover:border-amber-500/20 group-hover:shadow-[0_0_40px_-10px_rgba(251,191,36,0.1)]">
<img alt="Wine Bottle" className="object-cover w-full h-full mix-blend-overlay opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out grayscale-[30%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-60"></div>
<button className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-amber-600/90 text-white p-2.5 rounded-full hover:bg-amber-500 shadow-lg">
<span className="iconify" data-icon="lucide:plus" data-width="18"></span>
</button>
</div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<h3 className="serif text-xl text-stone-200 group-hover:text-amber-100 transition-colors">Opus One</h3>
<p className="text-xs text-stone-500 uppercase tracking-wider font-medium">Napa Valley, 2017</p>
</div>
<span className="serif text-lg text-amber-500/90 font-medium">$410</span>
</div>
</div>
</div>

<section className="mt-32">
<div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4">
<div>
<span className="block text-amber-600 text-xs font-semibold uppercase tracking-widest mb-1">The Vault</span>
<h2 className="text-3xl serif text-stone-100 tracking-tight">Rare Collection</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-amber-200 transition-colors" href="#">
                    View Entire Vault <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>

<div className="relative bg-stone-950/80 border border-amber-900/20 rounded-sm overflow-hidden p-8 md:p-12">

<div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/30 border border-amber-900/30 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold">One Bottle Remaining</span>
</div>
<h3 className="text-4xl md:text-5xl serif text-stone-100 leading-tight">
                            Domaine de la Romanée-Conti, <br/> <span className="italic text-stone-500">1999</span>
</h3>
<div className="space-y-4 text-stone-400 font-light leading-relaxed">
<p>An exceptional vintage from the most prestigious estate in Burgundy. Known for its ethereal structure, complex aromatics of rose petals and dark spice, and a finish that lingers for minutes.</p>
<ul className="grid grid-cols-2 gap-4 py-4">
<li className="flex items-center gap-3">
<span className="iconify text-amber-600/80" data-icon="lucide:thermometer" data-width="18"></span>
<span className="text-sm">Cellared at 55°F</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-amber-600/80" data-icon="lucide:check-circle-2" data-width="18"></span>
<span className="text-sm">Verified Provenance</span>
</li>
</ul>
</div>
<div className="flex items-center gap-8 pt-4">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-stone-500">Price</span>
<span className="serif text-2xl text-amber-400">$24,500</span>
</div>
<button className="flex-1 bg-stone-100 text-stone-950 hover:bg-amber-500 hover:text-stone-950 transition-colors py-4 px-6 text-xs uppercase tracking-widest font-semibold flex justify-center items-center gap-3">
<span className="iconify" data-icon="lucide:lock" data-width="14"></span>
                                Inquire to Purchase
                            </button>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center bg-gradient-to-b from-stone-900/50 to-stone-950/50 rounded-sm border border-white/5">
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<span className="serif text-[200px] leading-none text-white font-bold select-none">DRC</span>
</div>
<img alt="Rare Vintage" className="relative z-10 h-[90%] w-auto object-contain drop-shadow-2xl opacity-90 hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="mt-32 border-t border-white/5 pt-20 pb-10 text-center">
<h4 className="serif text-2xl text-stone-200 mb-4">Join the Inner Circle</h4>
<p className="text-stone-500 font-light mb-8 max-w-md mx-auto">Access to allocation-only releases and private tastings.</p>
<form className="flex max-w-sm mx-auto border-b border-stone-700 focus-within:border-amber-500 transition-colors pb-2">
<input className="bg-transparent w-full outline-none text-stone-300 placeholder-stone-600 font-light text-sm" placeholder="Email Address" type="email"/>
<button className="text-stone-400 hover:text-amber-500 transition-colors text-xs uppercase tracking-widest font-medium" type="button">Subscribe</button>
</form>
<div className="mt-20 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-600 gap-4">
<span>© 2024 Baron &amp; Cask</span>
<div className="flex gap-6">
<a className="hover:text-stone-400 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-400 transition-colors" href="#">Contact</a>
</div>
</div>
</section>
</main>

    </>
  );
}
