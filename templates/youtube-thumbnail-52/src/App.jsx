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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-zinc-100 font-semibold tracking-tighter text-lg flex items-center gap-2 group" href="#">
<span className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-bold text-sm group-hover:bg-zinc-200 transition-colors">W</span>
                WAJAHAT<span className="text-zinc-500 font-normal">DESIGNER</span>
</a>
<div className="hidden md:flex text-sm font-medium text-zinc-400 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-200 transition-transform active:scale-95 flex items-center gap-2" href="#">
                    Start Project
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative"></header>

<section className="border-y border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
<div className="p-8 text-center space-y-2">
<div className="text-3xl font-semibold text-white tracking-tight font-merriweather" style={{}}>1B+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Views Generated</div>
</div>
<div className="p-8 text-center space-y-2">
<div className="text-3xl font-semibold text-white tracking-tight font-merriweather" style={{}}>24h</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Turnaround</div>
</div>
<div className="p-8 text-center space-y-2">
<div className="text-3xl font-semibold text-white tracking-tight font-merriweather" style={{}}>500+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Happy Creators</div>
</div>
<div className="p-8 text-center space-y-2">
<div className="text-3xl font-semibold text-white tracking-tight font-merriweather" style={{}}>15%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Avg CTR Increase</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative" id="work">
<div className="max-w-7xl mx-auto space-y-16">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="space-y-2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-merriweather" style={{}}>Curated Designs</h2>
<p className="text-zinc-400 text-sm max-w-md">Browse our latest high-performance templates currently on sale.</p>
</div>

<div className="flex p-1 bg-zinc-900/50 border border-white/5 rounded-lg w-fit">
<button className="px-4 py-1.5 rounded-md bg-zinc-800 text-white text-xs font-medium shadow-sm ring-1 ring-white/10">All</button>
<button className="hover:text-white transition-colors text-xs font-medium text-zinc-400 rounded-md pt-1.5 pr-4 pb-1.5 pl-4">Gaming</button>
<button className="px-4 py-1.5 rounded-md text-zinc-400 hover:text-white text-xs font-medium transition-colors">Tech</button>
<button className="px-4 py-1.5 rounded-md text-zinc-400 hover:text-white text-xs font-medium transition-colors">Vlog</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative block rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-indigo-500/30 transition-all duration-300">
<div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
<div className="absolute top-4 right-4 z-20">
<div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">Sale -50%</div>
</div>
<div className="absolute inset-0 flex items-center justify-center z-10 p-6 group-hover:scale-105 transition-transform duration-500">
<h3 className="text-3xl font-black text-white italic uppercase tracking-tighter leading-none text-center drop-shadow-2xl font-merriweather" style={{}}>
<span className="text-yellow-400 font-merriweather" style={{}}>INSANE</span>GROWTH
                             </h3>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-white group-hover:text-indigo-400 transition-colors">Viral Growth Pack</h3>
<p className="text-xs text-zinc-500 mt-1">Tech / Education</p>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-white">$15</span>
<span className="block text-xs text-zinc-600 line-through">$30</span>
</div>
</div>
<button className="w-full mt-4 py-2 rounded-lg border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white hover:text-black transition-colors">View Details</button>
</div>
</div>

<div className="group relative block rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
<div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-900 to-zinc-900"></div>
<div className="absolute top-4 right-4 z-20">
<div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">Sale -50%</div>
</div>
<div className="absolute inset-0 flex items-center justify-center z-10 p-6 group-hover:scale-105 transition-transform duration-500">

<div className="bg-zinc-800/50 w-2/3 h-full absolute right-0 bottom-0 blur-xl"></div>
<h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none relative z-10 -rotate-2 drop-shadow-xl border-l-4 border-purple-500 pl-3 font-merriweather" style={{}}>
                                I QUIT<span className="text-purple-400 font-merriweather">GAMING?</span>
</h3>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-white group-hover:text-purple-400 transition-colors">Gaming Essentials</h3>
<p className="text-xs text-zinc-500 mt-1">Gaming / Stream</p>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-white">$12</span>
<span className="block text-xs text-zinc-600 line-through">$24</span>
</div>
</div>
<button className="w-full mt-4 py-2 rounded-lg border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white hover:text-black transition-colors">View Details</button>
</div>
</div>

<div className="group relative block rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden hover:border-green-500/30 transition-all duration-300">
<div className="aspect-video w-full bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-zinc-900"></div>
<div className="absolute top-4 right-4 z-20">
<div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">Sale -50%</div>
</div>
<div className="absolute inset-0 flex items-center justify-center z-10 p-6 group-hover:scale-105 transition-transform duration-500">
<h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none text-center drop-shadow-2xl font-merriweather" style={{}}>
                                100 DAYS<span className="text-emerald-400 text-xl font-bold bg-black/50 px-2 rounded mt-1 inline-block">CHALLENGE</span>
</h3>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">Lifestyle Vlog Pack</h3>
<p className="text-xs text-zinc-500 mt-1">Vlog / Daily</p>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-white">$18</span>
<span className="block text-xs text-zinc-600 line-through">$36</span>
</div>
</div>
<button className="w-full mt-4 py-2 rounded-lg border border-white/10 text-xs font-medium text-zinc-300 hover:bg-white hover:text-black transition-colors">View Details</button>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                    View All 40+ Templates
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/20 border-t border-white/5" id="pricing">
<div className="max-w-3xl mx-auto">
<div className="text-center space-y-4 mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-merriweather" style={{}}>Simple Pricing</h2>
<p className="text-zinc-400 text-sm">One time payment. Lifetime access. Commercial rights included.</p>

<div className="flex items-center justify-center gap-3 pt-4">
<span className="text-xs font-medium text-zinc-400">Single Packs</span>
<button className="w-11 h-6 bg-zinc-700 rounded-full relative transition-colors hover:bg-zinc-600">
<span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
</button>
<span className="text-xs font-medium text-white">All Access Bundle</span>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-zinc-950 rounded-xl border border-white/10 p-8 md:p-12 overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<div className="bg-indigo-500/10 text-indigo-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-indigo-500/20">
                            Best Value
                        </div>
</div>
<div className="flex flex-col md:flex-row gap-12">
<div className="flex-1 space-y-6">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight font-merriweather" style={{}}>Designer Bundle</h3>
<p className="text-sm text-zinc-400 mt-2">Get access to every thumbnail template in the store + future updates.</p>
</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                    50+ Premium PSD Templates
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                    Free Fonts Included
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                    Commercial License
                                </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                    24/7 Support via Discord
                                </li>
</ul>
</div>
<div className="flex flex-col justify-center items-start md:items-end border-t md:border-t-0 md:border-l border-white/5 pt-8 md:pt-0 md:pl-12">
<div className="text-left md:text-right mb-6">
<div className="text-sm text-zinc-500 line-through decoration-red-500 decoration-1">$199</div>
<div className="text-5xl font-bold text-white tracking-tighter font-merriweather" style={{}}>$49</div>
<div className="text-xs text-indigo-400 mt-1">One-time payment</div>
</div>
<button className="w-full md:w-auto px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all active:scale-95 text-sm">
                                Get Access Now
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="space-y-4 text-center md:text-left">
<div className="text-zinc-100 font-semibold tracking-tighter text-lg flex items-center justify-center md:justify-start gap-2">
<span className="w-6 h-6 rounded bg-zinc-800 text-white flex items-center justify-center font-bold text-xs">W</span>
                    WAJAHAT
                </div>
<p className="text-xs text-zinc-500">
                    © 2023 Wajahat Designer. <br className="hidden md:inline"/>All rights reserved.
                </p>
</div>
<div className="flex gap-8">
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">License</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</footer>

    </>
  );
}
