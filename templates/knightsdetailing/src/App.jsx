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
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-zinc-800/20 rounded-full blur-[120px]"></div>
</div>

<div className="relative z-10 min-h-screen w-full p-4 md:p-6 flex flex-col justify-center">

<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] md:grid-rows-2 md:gap-6 flex-grow md:h-[calc(100vh-3rem)] w-full h-full max-w-[1600px] mr-auto ml-auto gap-x-4 gap-y-4">

<div className="group relative flex flex-col justify-between p-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden">

<nav className="flex flex-wrap items-center justify-between gap-4 mb-12">
<a className="text-lg font-medium tracking-tight text-white uppercase" href="#">Obsidian</a>
<div className="hidden sm:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="/about-us">About Us</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Detailing</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<button className="sm:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-wide text-zinc-300 mb-6 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        AVAILABLE FOR BOOKING
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                        Automotive <br/> <span className="text-zinc-500">Perfectionism.</span>
</h1>
<p className="text-sm text-zinc-400 max-w-sm leading-relaxed mb-8">
                        Experience the pinnacle of paint correction and ceramic protection. We don't just clean cars; we curate them.
                    </p>
<div className="flex items-center gap-4">
<button className="hover:bg-zinc-200 transition-colors text-xs font-medium text-black bg-white rounded-full pt-3 pr-6 pb-3 pl-6">
                            Book Appointment
                        </button>
<button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-colors backdrop-blur-md">
                            View Portfolio
                        </button>
</div>
</div>
</div>

<div className="relative group rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 h-64 md:h-auto">
<img alt="Car Detailing" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1721188480840-c08717c32ebb?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-6 right-6 flex flex-col items-end">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 text-white mb-2">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-medium tracking-widest uppercase text-zinc-400 bg-black/50 px-2 py-1 rounded border border-white/5 backdrop-blur-sm">Showroom Finish</span>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-end justify-between">
<div>
<h3 className="text-xl font-medium text-white tracking-tight">Porsche 911 GT3</h3>
<p className="text-xs text-zinc-400 mt-1">Full Paint Protection Film</p>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-zinc-800 flex items-center justify-center text-[10px] text-white">NP</div>
<div className="w-8 h-8 rounded-full border border-black bg-zinc-700 flex items-center justify-center text-[10px] text-white">JD</div>
</div>
</div>
</div>
</div>

<div className="relative p-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-colors flex flex-col">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-medium text-white tracking-tight">Our Expertise</h3>
<iconify-icon className="text-zinc-500" icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="grid grid-cols-1 gap-3 flex-grow">

<div className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Ceramic Coating</h4>
<p className="text-[10px] text-zinc-500">5-Year Protection</p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>

<div className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Paint Correction</h4>
<p className="text-[10px] text-zinc-500">Swirl &amp; Scratch Removal</p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>

<div className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:armchair" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white">Interior Detail</h4>
<p className="text-[10px] text-zinc-500">Leather &amp; Upholstery</p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-white -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="relative p-8 rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Quick Estimate</h3>
<p className="text-xs text-zinc-500 mb-8">Customize your care package.</p>

<div className="mb-8">
<div className="flex justify-between text-xs font-medium text-zinc-400 mb-3">
<span>Protection Level</span>
<span className="text-white">Premium</span>
</div>
<input className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="75"/>
<div className="flex justify-between mt-2 text-[10px] text-zinc-600 font-medium uppercase tracking-wider">
<span>Wax</span>
<span>Sealant</span>
<span>Ceramic</span>
</div>
</div>

<label className="custom-checkbox flex items-center gap-3 cursor-pointer group select-none">
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-zinc-700 bg-zinc-900 transition-all flex items-center justify-center group-hover:border-zinc-500">
<svg className="hidden w-3 h-3 text-black pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-xs text-zinc-300 group-hover:text-white transition-colors">Include Wheels &amp; Calipers</span>
</label>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Total Estimate</span>
<span className="text-2xl font-medium text-white tracking-tight">$850<span className="text-zinc-600 text-lg">.00</span></span>
</div>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
