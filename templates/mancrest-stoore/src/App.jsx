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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/fireparticleloaderanimationdrstrangeporta-2XtNK3LbyCGmClvus9SdgnYJ/" width="100%"></iframe></div></div>

<div className="bg-zinc-900 text-white text-[10px] font-medium tracking-wider uppercase py-2 text-center">
        Free Shipping on Orders Over $250 — Season 04 Available Now
    </div>

<nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100/50">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-bold tracking-tighter uppercase leading-none" href="#">Avant</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 transition-all" href="#">Shop All</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Editorial</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Archive</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-200 focus-within:ring-1 focus-within:ring-zinc-300 transition-all w-64">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="bg-transparent border-none outline-none text-xs font-medium w-full ml-2 placeholder-zinc-400 text-zinc-900" placeholder="Search collection..." type="text"/>
</div>
<div className="flex items-center gap-5">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 hidden sm:block" href="#">Account</a>
<button className="relative group">
<svg aria-hidden="true" className="iconify text-zinc-900 transition-colors iconify--lucide" data-icon="lucide:shopping-bag" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-zinc-900 text-[8px] font-bold text-white ring-2 ring-white">2</span>
</button>
<button className="md:hidden">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<main className="max-w-[1600px] mx-auto">

<section className="md:pt-20 md:pb-24 border-zinc-100 border-b pt-12 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-[10px] font-semibold uppercase tracking-wider text-zinc-600">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        New Collection Drop
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 leading-[0.95]">
                        Form Follows<br/><span className="text-zinc-400">Function.</span>
</h1>
<p className="text-zinc-500 max-w-md text-sm leading-relaxed">
                        Season 04 explores the intersection of utilitarian design and modern tailoring. Constructed from premium Japanese textiles.
                    </p>
<div className="pt-2 flex items-center gap-4">
<button className="bg-zinc-900 text-white px-8 py-3 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-200">
                            Shop Season 04
                        </button>
<button className="text-zinc-600 px-6 py-3 text-xs font-medium hover:text-zinc-900 transition-colors flex items-center gap-2">
                            View Lookbook <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="relative aspect-[16/9] md:aspect-auto md:h-[400px] bg-zinc-100 rounded-lg overflow-hidden flex items-center justify-center border border-zinc-100">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 via-transparent to-white opacity-50"></div>
<svg aria-hidden="true" className="iconify text-zinc-300 relative z-10 iconify--lucide" data-icon="lucide:layers" data-width="120" height="120" role="img" style={{strokeWidth: '0.5'}} viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur border border-white/50 px-4 py-3 rounded shadow-sm max-w-[200px]">
<p className="text-[10px] uppercase tracking-wider text-zinc-400 mb-1">Featured Item</p>
<p className="text-xs font-semibold text-zinc-900">Technical Shell Parka</p>
<p className="text-xs text-zinc-500">$450.00</p>
</div>
</div>
</div>
</section>
<div className="px-6 py-12 flex flex-col lg:flex-row gap-12">

<aside className="hidden lg:block w-60 shrink-0 space-y-12 sticky top-32 h-fit">

<div className="flex items-center justify-between pb-4 border-b border-zinc-100">
<h3 className="text-sm font-semibold text-zinc-900">Filters</h3>
<button className="text-[10px] text-zinc-400 hover:text-zinc-900 uppercase tracking-wide transition-colors">Reset</button>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">Category</h3>
<ul className="space-y-3">
<li>
<label className="flex items-center group cursor-pointer justify-between">
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors font-medium">All Apparel</span>
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900 opacity-0 peer-checked:opacity-100 transition-opacity"></span>
</label>
</li>
<li>
<label className="flex items-center group cursor-pointer justify-between">
<span className="text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors">Tops</span>
<input className="peer sr-only" type="checkbox"/>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900 opacity-0 peer-checked:opacity-100 transition-opacity"></span>
</label>
</li>
<li>
<label className="flex items-center group cursor-pointer justify-between">
<span className="text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors">Bottoms</span>
<input className="peer sr-only" type="checkbox"/>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900 opacity-0 peer-checked:opacity-100 transition-opacity"></span>
</label>
</li>
<li>
<label className="flex items-center group cursor-pointer justify-between">
<span className="text-sm text-zinc-500 group-hover:text-zinc-900 transition-colors">Accessories</span>
<input className="peer sr-only" type="checkbox"/>
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900 opacity-0 peer-checked:opacity-100 transition-opacity"></span>
</label>
</li>
</ul>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">Price</h3>
<div className="space-y-4">
<div className="flex items-center justify-between text-xs font-medium text-zinc-900">
<span className="bg-zinc-100 px-2 py-1 rounded">$0</span>
<span className="bg-zinc-100 px-2 py-1 rounded">$1000</span>
</div>
<input className="w-full" max="1000" min="0" type="range" value="450"/>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-4">Color</h3>
<div className="flex flex-wrap gap-2">
<button className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-900 focus:ring-2 ring-offset-2 ring-zinc-300"></button>
<button className="w-6 h-6 rounded-full bg-white border border-zinc-200 hover:border-zinc-400 transition-colors"></button>
<button className="w-6 h-6 rounded-full bg-[#5d5d5d] hover:opacity-80 transition-opacity"></button>
<button className="w-6 h-6 rounded-full bg-[#3f4133] hover:opacity-80 transition-opacity"></button>
<button className="w-6 h-6 rounded-full bg-[#e3dcd3] hover:opacity-80 transition-opacity"></button>
</div>
</div>
</aside>

<div className="flex-1">

<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium text-zinc-500">Showing 24 Results</span>
<button className="flex items-center gap-2 text-xs font-medium text-zinc-900 group">
                        Sort by: Featured
                        <svg aria-hidden="true" className="iconify text-zinc-400 group-hover:text-zinc-900 transition-colors iconify--lucide" data-icon="lucide:chevron-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="group flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#f4f4f5] rounded-lg overflow-hidden mb-4">

<div className="absolute inset-0 flex items-center justify-center bg-zinc-100 group-hover:scale-105 transition-transform duration-700 ease-out">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:shirt" data-width="64" height="64" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-zinc-900 text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm z-10 shadow-sm">Best Seller</span>

<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="h-10 w-10 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-semibold text-zinc-900">Heavyweight Box Tee</h3>
<span className="text-sm font-medium text-zinc-900">$55.00</span>
</div>
<p className="text-xs text-zinc-500">Organic Cotton • 3 Colors</p>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#f4f4f5] rounded-lg overflow-hidden mb-4">
<div className="absolute inset-0 flex items-center justify-center bg-zinc-100 group-hover:scale-105 transition-transform duration-700 ease-out">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:scissors" data-width="64" height="64" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="h-10 w-10 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-semibold text-zinc-900">Technical Cargo</h3>
<span className="text-sm font-medium text-zinc-900">$140.00</span>
</div>
<p className="text-xs text-zinc-500">Water Repellent • 2 Colors</p>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#f4f4f5] rounded-lg overflow-hidden mb-4">
<div className="absolute inset-0 flex items-center justify-center bg-zinc-100 group-hover:scale-105 transition-transform duration-700 ease-out">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:watch" data-width="64" height="64" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10v2.2l1.6 1m2.53-5.54l-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05m.02 8.7l.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"></path><circle cx="12" cy="12" r="6"></circle></g></svg>
</div>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="h-10 w-10 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-semibold text-zinc-900">Chronos Timepiece</h3>
<span className="text-sm font-medium text-zinc-900">$295.00</span>
</div>
<p className="text-xs text-zinc-500">Stainless Steel • One Size</p>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#f4f4f5] rounded-lg overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm z-10 shadow-sm">Low Stock</span>
<div className="absolute inset-0 flex items-center justify-center bg-zinc-100 group-hover:scale-105 transition-transform duration-700 ease-out">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:umbrella" data-width="64" height="64" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v7a2 2 0 0 0 4 0M12 2v2"></path><path d="M20.992 13a1 1 0 0 0 .97-1.274a10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"></path></g></svg>
</div>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="h-10 w-10 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-semibold text-zinc-900">Shell Bomber</h3>
<span className="text-sm font-medium text-zinc-900">$220.00</span>
</div>
<p className="text-xs text-zinc-500">Nylon Blend • Black</p>
</div>
</div>

<div className="group flex flex-col cursor-pointer opacity-75">
<div className="relative w-full aspect-[4/5] bg-[#f4f4f5] rounded-lg overflow-hidden mb-4">
<span className="absolute inset-0 bg-white/50 z-10"></span>
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-zinc-900 text-zinc-900 bg-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-wider rounded-full z-20">Sold Out</span>
<div className="absolute inset-0 flex items-center justify-center bg-zinc-100">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:footprints" data-width="64" height="64" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-semibold text-zinc-900">Retro Runner</h3>
<span className="text-sm font-medium text-zinc-900">$180.00</span>
</div>
<p className="text-xs text-zinc-500">Waitlist Available</p>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#f4f4f5] rounded-lg overflow-hidden mb-4">
<div className="absolute inset-0 flex items-center justify-center bg-zinc-100 group-hover:scale-105 transition-transform duration-700 ease-out">
<svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:shopping-bag" data-width="64" height="64" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="h-10 w-10 bg-white text-zinc-900 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-baseline">
<h3 className="text-sm font-semibold text-zinc-900">Constructed Tote</h3>
<span className="text-sm font-medium text-zinc-900">$85.00</span>
</div>
<p className="text-xs text-zinc-500">Canvas &amp; Leather • One Size</p>
</div>
</div>
</div>

<div className="mt-20 flex justify-center">
<button className="px-8 py-3 border border-zinc-200 rounded-full text-xs font-semibold text-zinc-600 hover:text-zinc-900 hover:border-zinc-900 transition-all">
                        Load More Products
                    </button>
</div>
</div>
</div>
</main>

<section className="border-t border-zinc-100 bg-zinc-50">
<div className="max-w-[1600px] mx-auto px-6 py-20 text-center">
<svg aria-hidden="true" className="iconify mx-auto text-zinc-400 mb-6 iconify--lucide" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Join the Avant Community</h2>
<p className="text-zinc-500 text-sm mb-8 max-w-md mx-auto">Subscribe for early access to drops, exclusive collaborations, and seasonal editorials.</p>
<form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
<input className="flex-1 bg-white border border-zinc-200 rounded-full px-5 py-3 text-sm outline-none focus:border-zinc-900 transition-colors placeholder-zinc-400" placeholder="Enter your email" type="email"/>
<button className="bg-zinc-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors" type="button">Subscribe</button>
</form>
<p className="text-[10px] text-zinc-400 mt-4">By subscribing you agree to our Terms &amp; Privacy Policy.</p>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pb-12 pt-16">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2">
<a className="text-lg font-bold tracking-tighter uppercase mb-6 block" href="#">Avant</a>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-[11px] font-bold text-zinc-900 uppercase tracking-widest mb-4">Shop</h4>
<ul className="space-y-2.5">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">All Products</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-[11px] font-bold text-zinc-900 uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-2.5">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-[11px] font-bold text-zinc-900 uppercase tracking-widest mb-4">Support</h4>
<ul className="space-y-2.5">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shipping</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Returns</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-[11px] font-bold text-zinc-900 uppercase tracking-widest mb-4">Locate</h4>
<p className="text-xs text-zinc-500 leading-relaxed">102 Wooster StNew York, NY 10012</p>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-100">
<span className="text-[10px] text-zinc-400">© 2024 Avant Studios Inc.</span>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
