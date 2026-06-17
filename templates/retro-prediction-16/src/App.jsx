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
      

<nav className="border-b-2 border-black bg-[#bdbdbd] px-4 py-3 sticky top-0 z-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

<div className="flex items-center w-full md:w-auto gap-6">

<a className="flex items-center gap-3 group decoration-none" href="#">
<div className="relative bg-black border-2 border-transparent group-hover:border-black group-hover:bg-white transition-all duration-300 p-1">
<div className="flex items-center gap-0.5 border border-white group-hover:border-black p-1">
<span className="bg-white text-black px-1.5 font-bold tracking-tighter text-xl group-hover:bg-black group-hover:text-white transition-colors">YES</span>
<span className="text-white px-0.5 text-xl group-hover:text-black font-thin">/</span>
<span className="text-white px-1.5 font-bold tracking-tighter text-xl group-hover:text-black transition-colors">NO</span>
</div>
</div>
</a>
<div className="hidden md:flex relative flex-1 min-w-[320px]">
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 flex items-center">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-white border-2 border-black py-2 pl-10 pr-12 text-sm focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-neutral-400 font-medium" placeholder="Search markets..." type="text"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 text-xs">/</span>
</div>
</div>

<div className="flex items-center gap-6 text-sm whitespace-nowrap overflow-x-auto w-full md:w-auto font-medium">
<a className="hover:underline decoration-2 underline-offset-4 text-neutral-800" href="#">How it works</a>
<a className="hover:underline decoration-2 underline-offset-4 text-black" href="#">Log In</a>
<button className="bg-black text-white border-2 border-black px-5 py-2 hover:bg-neutral-800 hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[2px_2px_0px_0px_#888] active:translate-y-0 active:translate-x-0 active:shadow-none transition-all">
                    Sign Up
                </button>
<button className="p-2 border-2 border-transparent hover:border-black hover:bg-white transition-colors flex items-center">
<iconify-icon height="20" icon="solar:globe-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="border-b-2 border-black bg-[#e0e0e0] overflow-x-auto no-scrollbar">
<div className="max-w-7xl mx-auto flex items-center px-4 h-14 gap-8 text-sm font-medium">
<a className="flex items-center gap-2 font-bold border-b-2 border-black h-full px-1 bg-white text-black" href="#">
<iconify-icon height="18" icon="solar:graph-up-linear" width="18"></iconify-icon> Trending
            </a>
<a className="text-neutral-600 hover:text-black hover:bg-white h-full flex items-center px-2 transition-colors" href="#">Breaking</a>
<a className="text-neutral-600 hover:text-black hover:bg-white h-full flex items-center px-2 transition-colors" href="#">New</a>
<span className="w-0.5 h-6 bg-neutral-400"></span>
<a className="text-neutral-600 hover:text-black hover:bg-white h-full flex items-center px-2 transition-colors" href="#">Politics</a>
<a className="text-neutral-600 hover:text-black hover:bg-white h-full flex items-center px-2 transition-colors" href="#">Sports</a>
<a className="text-neutral-600 hover:text-black hover:bg-white h-full flex items-center px-2 transition-colors" href="#">Crypto</a>
<a className="text-neutral-600 hover:text-black hover:bg-white h-full flex items-center px-2 transition-colors" href="#">Finance</a>
<a className="text-neutral-600 hover:text-black hover:bg-white h-full flex items-center px-2 transition-colors" href="#">World</a>
<a className="text-neutral-600 hover:text-black hover:bg-white h-full flex items-center px-2 transition-colors" href="#">Economy</a>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 py-6">
<div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
<div className="flex items-center gap-3 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide text-sm">
<button className="px-4 py-1.5 bg-black border-2 border-black text-white font-bold retro-shadow-sm active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all whitespace-nowrap">
                    All
                </button>
<button className="px-4 py-1.5 bg-white border-2 border-black hover:bg-neutral-100 retro-shadow-sm whitespace-nowrap font-medium">Trump</button>
<button className="px-4 py-1.5 bg-white border-2 border-black hover:bg-neutral-100 retro-shadow-sm whitespace-nowrap font-medium">Olympics</button>
<button className="px-4 py-1.5 bg-white border-2 border-black hover:bg-neutral-100 retro-shadow-sm whitespace-nowrap font-medium">Starmer</button>
<button className="px-4 py-1.5 bg-white border-2 border-black hover:bg-neutral-100 retro-shadow-sm whitespace-nowrap font-medium">Iran</button>
<button className="px-4 py-1.5 bg-white border-2 border-black hover:bg-neutral-100 retro-shadow-sm whitespace-nowrap font-medium">Epstein</button>
<button className="px-4 py-1.5 bg-white border-2 border-black hover:bg-neutral-100 retro-shadow-sm whitespace-nowrap font-medium">IPOs</button>
</div>
<div className="flex items-center gap-2 border-2 border-black bg-white px-2 py-1 retro-shadow-sm">
<button className="p-1 hover:bg-neutral-200 flex items-center"><iconify-icon height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon></button>
<button className="p-1 hover:bg-neutral-200 flex items-center"><iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon></button>
<button className="p-1 hover:bg-neutral-200 flex items-center"><iconify-icon height="20" icon="solar:tuning-2-linear" width="20"></iconify-icon></button>
<button className="p-1 hover:bg-neutral-200 flex items-center"><iconify-icon height="20" icon="solar:bookmark-linear" width="20"></iconify-icon></button>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div>
<div className="flex gap-3 mb-4">
<img alt="Fed" className="w-10 h-10 border border-black grayscale" src="https://api.dicebear.com/7.x/initials/svg?seed=FD&amp;backgroundColor=e5e5e5"/>
<h3 className="text-lg leading-tight font-bold tracking-tight">Fed decision in March?</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">50+ bps decrease</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">1%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">25 bps decrease</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">16%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-xs">
<div className="flex items-center gap-1 font-medium">
<span>$82m Vol.</span>
<iconify-icon height="14" icon="solar:restart-linear" width="14"></iconify-icon>
</div>
<div className="flex gap-3">
<iconify-icon height="16" icon="solar:gift-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div>
<div className="flex gap-3 mb-4">
<div className="w-10 h-10 border border-black bg-neutral-800 flex items-center justify-center text-white font-bold text-xs text-center leading-none">US<br/>IR</div>
<h3 className="text-lg leading-tight font-bold tracking-tight">US strikes Iran by...?</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">February 13</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">6%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">February 20</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">14%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-xs">
<div className="flex items-center gap-1 font-medium">
<span>$216m Vol.</span>
<iconify-icon height="14" icon="solar:restart-linear" width="14"></iconify-icon>
</div>
<div className="flex gap-3">
<iconify-icon height="16" icon="solar:gift-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<div className="w-10 h-10 border border-black bg-neutral-200 flex items-center justify-center text-black">
<iconify-icon height="24" icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg leading-tight font-bold max-w-[140px] tracking-tight">BTC 15 Minute Up or Down</h3>
</div>
<div className="relative w-16 h-16 rounded-full flex items-center justify-center p-1" style={{background: 'conic-gradient(#000 0% 47%, #d4d4d4 47% 100%)'}}>
<div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center">
<span className="block text-lg font-bold text-black leading-none">47%</span>
<span className="block text-[10px] text-neutral-500 uppercase font-bold">Up</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-2">
<button className="py-2 btn-yes border-2 font-bold retro-shadow-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">Up</button>
<button className="py-2 btn-no border-2 font-bold retro-shadow-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">Down</button>
</div>
<div className="mt-2 pt-2 border-t border-transparent flex items-center justify-between text-neutral-500 text-xs">
<div className="flex items-center gap-2 text-black font-bold">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse border border-black"></span>
                    LIVE
                </div>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div>
<div className="flex gap-3 mb-4">
<div className="w-10 h-10 border border-black bg-neutral-200 flex items-center justify-center text-black">
<iconify-icon height="24" icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg leading-tight font-bold tracking-tight">What price will Bitcoin hit in February?</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">↑ 85,000</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">11%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">↑ 80,000</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">22%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-xs">
<div className="flex items-center gap-1 font-medium">
<span>$44m Vol.</span>
<iconify-icon height="14" icon="solar:restart-linear" width="14"></iconify-icon>
</div>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div>
<div className="flex gap-3 mb-4">
<div className="w-10 h-10 border border-black bg-black flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:medal-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg leading-tight font-bold tracking-tight">2026 Winter Olympics: Most Gold Medals</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">Norway</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">74%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">United States</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">21%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-xs">
<span className="text-neutral-500 font-medium">$5m Vol.</span>
<div className="flex gap-3">
<iconify-icon height="16" icon="solar:gift-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div className="mb-4">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<img className="w-6 h-6 border border-black p-0.5 grayscale" src="https://api.dicebear.com/7.x/identicon/svg?seed=Hanwha"/>
<span className="font-medium text-xs">Hanwha Life</span>
</div>
<span className="font-bold text-lg text-black">79%</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<img className="w-6 h-6 border border-black p-0.5 grayscale" src="https://api.dicebear.com/7.x/identicon/svg?seed=DRX"/>
<span className="font-medium text-xs">DRX Challengers</span>
</div>
<span className="font-bold text-lg text-black">22%</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="py-2 bg-neutral-200 text-black border-2 border-black font-bold hover:bg-neutral-300 retro-shadow-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all text-xs">Hanwha Life</button>
<button className="py-2 bg-white text-black border-2 border-black font-bold hover:bg-neutral-100 retro-shadow-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all text-xs">DRX Chal.</button>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-[10px] uppercase tracking-wide font-medium">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-black rounded-full"></span>
<span>Game 2</span>
<span className="text-neutral-300">|</span>
<span>$404k</span>
</div>
<span>LoL</span>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div className="mb-4">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black text-white flex items-center justify-center text-[8px] font-bold border border-black">C</div>
<span className="font-medium text-xs">Chelsea</span>
</div>
<span className="font-bold text-lg text-black">64%</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center text-[8px] font-bold border border-black">L</div>
<span className="font-medium text-xs">Leeds United FC</span>
</div>
<span className="font-bold text-lg text-black">16%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="py-1.5 bg-neutral-800 text-white border border-black font-bold hover:bg-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none text-xs">Chelsea</button>
<button className="py-1.5 bg-white text-black border border-black font-bold hover:bg-neutral-100 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none text-xs">DRAW</button>
<button className="py-1.5 bg-neutral-300 text-black border border-black font-bold hover:bg-neutral-400 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none text-xs">Leeds</button>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-xs font-medium">
<span>$504k Vol. • EPL</span>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div className="mb-4">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black text-white flex items-center justify-center text-[8px] font-bold border border-black">W</div>
<span className="font-medium text-xs">West Ham</span>
</div>
<span className="font-bold text-lg text-black">57%</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-300 text-black flex items-center justify-center text-[8px] font-bold border border-black">M</div>
<span className="font-medium text-xs">Man Utd</span>
</div>
<span className="font-bold text-lg text-black">22%</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="py-1.5 bg-neutral-800 text-white border border-black font-bold hover:bg-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none text-xs">West Ham</button>
<button className="py-1.5 bg-white text-black border border-black font-bold hover:bg-neutral-100 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none text-xs">DRAW</button>
<button className="py-1.5 bg-neutral-300 text-black border border-black font-bold hover:bg-neutral-400 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none text-xs">Man Utd</button>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-xs font-medium">
<span>$719k Vol. • EPL</span>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div>
<div className="flex gap-3 mb-4">
<img className="w-10 h-10 border border-black bg-neutral-100 grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elon"/>
<h3 className="text-lg leading-tight font-bold tracking-tight">Elon Musk # tweets February 3 - February 10, 2026?</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">280-299</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">18%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">300-319</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">64%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-xs">
<div className="flex items-center gap-1 font-medium">
<span>$24m Vol.</span>
<iconify-icon height="14" icon="solar:restart-linear" width="14"></iconify-icon>
</div>
<div className="flex gap-3">
<iconify-icon height="16" icon="solar:gift-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div>
<div className="flex gap-3 mb-4">
<img className="w-10 h-10 border border-black bg-neutral-100 grayscale" src="https://api.dicebear.com/7.x/miniavs/svg?seed=Starmer"/>
<h3 className="text-lg leading-tight font-bold tracking-tight">Starmer out by...?</h3>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">February 28</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">11%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer hover:bg-neutral-100 p-1 -mx-1 border border-transparent hover:border-black transition-colors">
<span className="text-neutral-700 text-xs font-medium">March 31</span>
<div className="flex items-center gap-3">
<span className="font-bold text-lg text-black">30%</span>
<div className="flex gap-1">
<button className="px-2 py-1 btn-yes text-xs uppercase tracking-wider font-bold">Yes</button>
<button className="px-2 py-1 btn-no text-xs uppercase tracking-wider font-bold">No</button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-neutral-500 text-xs">
<span className="font-medium">$5m Vol.</span>
<div className="flex gap-3">
<iconify-icon height="16" icon="solar:gift-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<div className="w-10 h-10 border border-black bg-neutral-300 flex items-center justify-center">
<iconify-icon className="text-black" height="24" icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg leading-tight font-bold tracking-tight">Another US government shutdown by February 14?</h3>
</div>
<div className="relative w-16 h-16 rounded-full flex items-center justify-center p-1" style={{background: 'conic-gradient(#000 0% 70%, #d4d4d4 70% 100%)'}}>
<div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center">
<span className="block text-lg font-bold text-black leading-none">70%</span>
<span className="block text-[10px] text-neutral-500 uppercase font-bold">chance</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-2">
<button className="py-2 btn-yes border-2 font-bold retro-shadow-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">Yes</button>
<button className="py-2 btn-no border-2 font-bold retro-shadow-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">No</button>
</div>
<div className="mt-2 pt-2 border-t border-transparent flex items-center justify-between text-neutral-500 text-xs">
<div className="flex items-center gap-1 font-medium">
<span>$1m Vol.</span>
<iconify-icon height="14" icon="solar:restart-linear" width="14"></iconify-icon>
</div>
<div className="flex gap-3">
<iconify-icon height="16" icon="solar:gift-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border-2 border-black p-4 retro-shadow transition-all flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<div className="w-10 h-10 border border-black bg-black flex items-center justify-center text-white font-mono font-bold">500</div>
<h3 className="text-lg leading-tight font-bold tracking-tight">S&amp;P 500 (SPX) Opens Up or Down on February 10?</h3>
</div>
<div className="relative w-16 h-16 rounded-full flex items-center justify-center p-1" style={{background: 'conic-gradient(#000 0% 68%, #d4d4d4 68% 100%)'}}>
<div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center">
<span className="block text-lg font-bold text-black leading-none">68%</span>
<span className="block text-[10px] text-neutral-500 uppercase font-bold">Up</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-2">
<button className="py-2 btn-yes border-2 font-bold retro-shadow-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">Up</button>
<button className="py-2 btn-no border-2 font-bold retro-shadow-sm active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all">Down</button>
</div>
<div className="mt-2 pt-2 border-t border-transparent flex items-center justify-between text-neutral-500 text-xs">
<div className="flex items-center gap-2 text-black font-medium text-xs">
<iconify-icon height="14" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
                    NEW • $25k Vol.
                </div>
<div className="flex gap-3">
<iconify-icon height="16" icon="solar:gift-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:bookmark-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</main>

    </>
  );
}
