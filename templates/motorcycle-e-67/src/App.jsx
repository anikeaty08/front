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



        lucide.createIcons();
    
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
      

<div className="w-full bg-black border-b border-white/5 relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-xs font-medium">
<div className="hidden md:flex items-center gap-2 text-zinc-400">
<span className="text-green-500"><i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="check"></i></span>
<span className="uppercase tracking-wider">Free shipping NL &amp; BE over €79</span>
</div>
<div className="flex-1 text-center md:text-left md:flex-none uppercase tracking-wider text-zinc-400">
                We are located in Ravenstein
            </div>
<div className="hidden md:flex items-center gap-3">
<div className="bg-pink-600 text-white font-medium text-xs px-1.5 py-0.5 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(219,39,119,0.4)]">
                    9.6 <span className="bg-white rounded-full p-0.5"><i className="w-1.5 h-1.5 text-pink-600 stroke-[3]" data-lucide="check"></i></span>
</div>
<div className="flex gap-0.5 text-yellow-400">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<span className="text-zinc-500 text-xs">793 reviews</span>
</div>
</div>
</div>

<div className="w-full bg-zinc-950/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center gap-6 lg:gap-12 justify-between">

<a className="group flex-shrink-0 flex items-center gap-2" href="#">
<div className="relative">
<span className="text-4xl font-semibold tracking-tighter text-white transition-colors">mdi</span>
<div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
</div>
<div className="flex flex-col border-l border-zinc-800 pl-2">
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-[0.2em] leading-none">Motorcycle</span>
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-[0.2em] leading-none mt-0.5">Equipment</span>
</div>
</a>

<div className="hidden md:block w-full max-w-xl relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<i className="w-4 h-4 text-zinc-500 group-focus-within:text-white transition-colors stroke-[1.5]" data-lucide="search"></i>
</div>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all shadow-inner" placeholder="Search store..." type="text"/>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
<kbd className="hidden sm:inline-block px-1.5 py-0.5 border border-zinc-800 rounded text-[10px] font-medium text-zinc-600">⌘K</kbd>
</div>
</div>

<div className="flex items-center gap-3 flex-shrink-0">
<div className="flex items-center gap-1">
<button className="p-2 hover:bg-zinc-900 rounded-md text-zinc-400 hover:text-white transition-colors group relative">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user"></i>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full ring-2 ring-zinc-950"></span>
</button>
<button className="p-2 hover:bg-zinc-900 rounded-md text-zinc-400 hover:text-white transition-colors relative">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="heart"></i>
<span className="absolute top-1 right-1 flex items-center justify-center min-w-[14px] h-[14px] bg-red-600 text-[9px] font-bold text-white rounded-full">0</span>
</button>
</div>
<button className="bg-red-600 hover:bg-red-500 text-white p-2.5 rounded-lg shadow-lg shadow-red-900/20 transition-all hover:scale-105 active:scale-95 relative flex items-center justify-center group ml-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shopping-cart"></i>
<span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white text-red-600 text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-zinc-950 group-hover:scale-110 transition-transform">1</span>
</button>
</div>
</div>
</div>
</div>

<div className="relative w-full h-[600px] lg:h-[700px] bg-zinc-900 overflow-hidden group">

<div className="absolute inset-0 select-none">

<img alt="Motorcycle background" className="w-full h-full object-cover object-center opacity-80 scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/20 to-zinc-950/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-tr from-red-900/10 via-transparent to-transparent mix-blend-overlay"></div>
<div className="absolute -left-20 top-20 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] animate-pulse"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-24 lg:pb-32">

<div className="mb-10 max-w-2xl opacity-0 animate-[slideUpFade_1s_ease-out_forwards]">
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tighter mb-4 drop-shadow-2xl">
                    Ride with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Passion</span>
</h1>
<p className="text-zinc-300 text-lg lg:text-xl font-light drop-shadow-lg max-w-lg">
                    Discover premium parts and accessories tailored to your machine.
                </p>
</div>

<div className="w-full max-w-5xl bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5 flex flex-col lg:flex-row items-stretch lg:items-center gap-3 animate-[slideUpFade_0.8s_ease-out_0.2s_forwards] translate-y-10 opacity-0 transform transition-all hover:border-white/20">

<div className="flex items-center gap-4 px-4 py-2 lg:border-r border-white/10 lg:mr-2 flex-shrink-0">
<div className="relative group/icon">
<div className="absolute inset-0 bg-red-500/20 rounded-lg blur group-hover/icon:blur-md transition-all"></div>
<div className="relative bg-zinc-900 border border-white/10 p-2 rounded-lg">
<i className="w-6 h-6 text-red-500 stroke-[1.5] group-hover/icon:-rotate-12 transition-transform" data-lucide="bike"></i>
</div>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-zinc-400 font-medium">Select</span>
<span className="text-lg font-bold text-white tracking-tight whitespace-nowrap">YOUR BIKE</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-2 flex-grow">

<div className="relative group/field">
<select className="w-full bg-zinc-900/60 border border-zinc-700/50 text-white text-sm rounded-lg py-3.5 pl-4 pr-10 hover:bg-zinc-800 hover:border-zinc-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all cursor-pointer appearance-none">
<option disabled="" selected="" value="">Select make</option>
<option>Honda</option>
<option>Yamaha</option>
<option>Kawasaki</option>
<option>BMW</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500 group-hover/field:text-zinc-300 transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</div>

<div className="relative group/field">
<select className="w-full bg-zinc-900/60 border border-zinc-700/50 text-white text-sm rounded-lg py-3.5 pl-4 pr-10 hover:bg-zinc-800 hover:border-zinc-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all cursor-pointer appearance-none disabled:opacity-50">
<option disabled="" selected="" value="">Select model</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500 group-hover/field:text-zinc-300 transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</div>

<div className="relative group/field">
<select className="w-full bg-zinc-900/60 border border-zinc-700/50 text-white text-sm rounded-lg py-3.5 pl-4 pr-10 hover:bg-zinc-800 hover:border-zinc-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all cursor-pointer appearance-none disabled:opacity-50">
<option disabled="" selected="" value="">Select year</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500 group-hover/field:text-zinc-300 transition-colors">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="flex items-center gap-2 flex-shrink-0 lg:pl-2 pt-2 lg:pt-0">

<button className="flex-1 lg:flex-none bg-red-600 hover:bg-red-500 text-white font-semibold py-3.5 px-6 rounded-lg shadow-[0_4px_20px_rgba(220,38,38,0.4)] hover:shadow-[0_4px_25px_rgba(220,38,38,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 min-w-[140px] group/btn">
<i className="w-4 h-4 stroke-[2.5] group-hover/btn:scale-110 transition-transform" data-lucide="search"></i>
<span>Select</span>
</button>

<button className="flex-none bg-white hover:bg-zinc-100 text-zinc-900 font-semibold py-3.5 px-5 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 min-w-[100px] group/clear">
<i className="w-4 h-4 stroke-[2.5] group-hover/clear:rotate-90 transition-transform" data-lucide="x"></i>
<span>Clear</span>
</button>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 py-16 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold tracking-tight text-white">Popular Categories</h2>
<a className="text-sm text-red-500 hover:text-red-400 font-medium flex items-center gap-1 group" href="#">
                    View all <i className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">

<div className="group relative bg-zinc-900/50 border border-white/5 hover:border-red-500/30 rounded-2xl p-6 transition-all hover:bg-zinc-900 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="bg-zinc-950 rounded-xl h-32 mb-4 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-600 group-hover:text-red-500 transition-colors stroke-[1.5]" data-lucide="wrench"></i>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white mb-1">Maintenance</h3>
<p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Oils, filters, chains</p>
</div>
</div>

<div className="group relative bg-zinc-900/50 border border-white/5 hover:border-red-500/30 rounded-2xl p-6 transition-all hover:bg-zinc-900 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="bg-zinc-950 rounded-xl h-32 mb-4 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-600 group-hover:text-red-500 transition-colors stroke-[1.5]" data-lucide="disc"></i>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white mb-1">Brakes</h3>
<p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Pads, discs, fluids</p>
</div>
</div>

<div className="group relative bg-zinc-900/50 border border-white/5 hover:border-red-500/30 rounded-2xl p-6 transition-all hover:bg-zinc-900 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="bg-zinc-950 rounded-xl h-32 mb-4 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-600 group-hover:text-red-500 transition-colors stroke-[1.5]" data-lucide="battery"></i>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white mb-1">Electronics</h3>
<p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Batteries, lights</p>
</div>
</div>

<div className="group relative bg-zinc-900/50 border border-white/5 hover:border-red-500/30 rounded-2xl p-6 transition-all hover:bg-zinc-900 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="bg-zinc-950 rounded-xl h-32 mb-4 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-600 group-hover:text-red-500 transition-colors stroke-[1.5]" data-lucide="shield"></i>
</div>
<div className="relative z-10">
<h3 className="text-base font-medium text-white mb-1">Protection</h3>
<p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">Locks, covers</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
