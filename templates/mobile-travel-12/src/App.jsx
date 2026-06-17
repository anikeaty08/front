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
      

<div className="w-full max-w-[400px] bg-white sm:rounded-3xl shadow-2xl relative overflow-hidden flex flex-col h-[850px]">

<header className="px-6 pt-12 pb-4 bg-white sticky top-0 z-20">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 overflow-hidden border border-zinc-200">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<p className="text-xs text-zinc-500 font-medium">Welcome back</p>
<h1 className="text-base font-semibold tracking-tight text-zinc-900">Alex Morgan</h1>
</div>
</div>
<button className="p-2 rounded-full hover:bg-zinc-50 border border-transparent hover:border-zinc-200 transition-all text-zinc-600">
<span className="iconify" data-height="20" data-icon="lucide:bell" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
<span className="iconify" data-height="18" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<input className="w-full pl-10 pr-12 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:bg-white transition-all shadow-sm" placeholder="Where to next?" type="text"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-800">
<span className="iconify" data-height="18" data-icon="lucide:sliders-horizontal" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-24">

<section className="px-6 mb-8">
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-medium whitespace-nowrap shadow-md shadow-zinc-200">
<span className="iconify" data-height="14" data-icon="lucide:globe" data-width="14"></span>
                        All
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-full text-xs font-medium whitespace-nowrap hover:border-zinc-300">
<span className="iconify" data-height="14" data-icon="lucide:mountain" data-width="14"></span>
                        Mountains
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-full text-xs font-medium whitespace-nowrap hover:border-zinc-300">
<span className="iconify" data-height="14" data-icon="lucide:waves" data-width="14"></span>
                        Beach
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-600 rounded-full text-xs font-medium whitespace-nowrap hover:border-zinc-300">
<span className="iconify" data-height="14" data-icon="lucide:building-2" data-width="14"></span>
                        City
                    </button>
</div>
</section>

<section className="px-6 mb-8">
<div className="flex justify-between items-end mb-4">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Trending Now</h2>
<a className="text-xs text-zinc-500 hover:text-zinc-900 font-medium" href="#">See all</a>
</div>
<div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
<img alt="Switzerland" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/20 p-2 rounded-full text-white">
<span className="iconify" data-height="20" data-icon="lucide:heart" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex justify-between items-end">
<div>
<span className="px-2 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-md text-[10px] uppercase tracking-wider text-white font-semibold mb-2 inline-block">7 Days Package</span>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Swiss Alps</h3>
<div className="flex items-center gap-1 text-zinc-200 text-xs">
<span className="iconify" data-height="12" data-icon="lucide:map-pin" data-width="12"></span>
                                    Interlaken, Switzerland
                                </div>
</div>
<div className="text-right">
<p className="text-xs text-zinc-300 mb-0.5">From</p>
<p className="text-xl font-semibold text-white">$1,250</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 mb-10">
<div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-zinc-900" data-height="18" data-icon="lucide:calendar-days" data-width="18"></span>
<h3 className="text-sm font-semibold text-zinc-900">Plan your dates</h3>
</div>
<div className="flex gap-4">
<div className="flex-1">
<label className="text-[10px] uppercase tracking-wide text-zinc-400 font-semibold mb-1 block">Check-in</label>
<div className="bg-white border border-zinc-200 rounded-lg p-2.5 flex items-center justify-between shadow-sm">
<span className="text-xs font-medium text-zinc-700">Oct 24</span>
<span className="iconify text-zinc-300" data-height="14" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
<div className="flex-1">
<label className="text-[10px] uppercase tracking-wide text-zinc-400 font-semibold mb-1 block">Check-out</label>
<div className="bg-white border border-zinc-200 rounded-lg p-2.5 flex items-center justify-between shadow-sm">
<span className="text-xs font-medium text-zinc-700">Oct 30</span>
<span className="iconify text-zinc-300" data-height="14" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<button className="w-full mt-4 bg-zinc-900 text-white text-xs font-medium py-3 rounded-lg hover:bg-zinc-800 transition-colors shadow-sm">
                        Find Available Packages
                    </button>
</div>
</section>

<section className="px-6 mb-8">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900 mb-4">Popular Packages</h2>
<div className="space-y-4">

<div className="group bg-white border border-zinc-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex gap-3 items-center">
<div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute top-1 left-1 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-semibold flex items-center gap-0.5">
<span className="iconify text-amber-400" data-height="10" data-icon="lucide:star" data-width="10"></span>
                                4.9
                            </div>
</div>
<div className="flex-1 min-w-0 py-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold text-zinc-900 truncate">Kyoto Autumn</h4>
<span className="text-xs font-semibold text-zinc-900">$850</span>
</div>
<p className="text-xs text-zinc-500 mb-2 truncate">5 Days • Cultural Tour • Flight Incl.</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] text-zinc-500 font-medium">History</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] text-zinc-500 font-medium">Food</span>
</div>
</div>
</div>

<div className="group bg-white border border-zinc-100 rounded-xl p-3 shadow-sm hover:shadow-md transition-all flex gap-3 items-center">
<div className="w-24 h-24 rounded-lg overflow-hidden shrink-0 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute top-1 left-1 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[10px] font-semibold flex items-center gap-0.5">
<span className="iconify text-amber-400" data-height="10" data-icon="lucide:star" data-width="10"></span>
                                4.7
                            </div>
</div>
<div className="flex-1 min-w-0 py-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-semibold text-zinc-900 truncate">Santorini Escape</h4>
<span className="text-xs font-semibold text-zinc-900">$1,400</span>
</div>
<p className="text-xs text-zinc-500 mb-2 truncate">7 Days • Luxury Resort • Breakfast</p>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] text-zinc-500 font-medium">Relax</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] text-zinc-500 font-medium">Beach</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-8">
<div className="px-6 mb-4 flex justify-between items-end">
<h2 className="text-lg font-semibold tracking-tight text-zinc-900">Travel Tips</h2>
<div className="flex gap-2">
<button className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:border-zinc-400 hover:text-zinc-600">
<span className="iconify" data-icon="lucide:arrow-left" data-width="12"></span>
</button>
<button className="w-6 h-6 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:border-zinc-400 hover:text-zinc-600">
<span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar px-6 pb-4">

<div className="w-48 shrink-0 bg-blue-50 border border-blue-100 rounded-xl p-4 flex flex-col justify-between h-32">
<div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-blue-600 shadow-sm mb-2">
<span className="iconify" data-icon="lucide:shield-check" data-width="16"></span>
</div>
<div>
<h5 className="text-xs font-semibold text-blue-900 mb-1">Safety First</h5>
<p className="text-[10px] text-blue-700 leading-tight">Essential documents to carry abroad.</p>
</div>
</div>

<div className="w-48 shrink-0 bg-orange-50 border border-orange-100 rounded-xl p-4 flex flex-col justify-between h-32">
<div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-orange-600 shadow-sm mb-2">
<span className="iconify" data-icon="lucide:camera" data-width="16"></span>
</div>
<div>
<h5 className="text-xs font-semibold text-orange-900 mb-1">Photography</h5>
<p className="text-[10px] text-orange-700 leading-tight">Best times for golden hour shots.</p>
</div>
</div>
</div>
</section>

<section className="px-6 mb-10">
<h2 className="text-sm font-semibold tracking-tight text-zinc-900 mb-4">Preferences</h2>
<div className="bg-white border border-zinc-100 rounded-xl p-4 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-zinc-600 font-medium">Direct Flights Only</span>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-600 font-medium">Include Local Guide</span>

<label className="custom-checkbox flex items-center cursor-pointer relative">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-300 rounded-md flex items-center justify-center transition-colors">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</div>
</div>
</section>
</main>

<nav className="absolute bottom-0 w-full glass-nav z-30 pb-safe">
<div className="flex justify-around items-center h-16 px-2">
<a className="flex flex-col items-center gap-1 p-2 text-zinc-900" href="#">
<span className="iconify" data-height="22" data-icon="lucide:home" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<span className="iconify" data-height="22" data-icon="lucide:compass" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-[10px] font-medium">Explore</span>
</a>

<div className="relative -top-5">
<button className="w-12 h-12 bg-zinc-900 rounded-full shadow-lg shadow-zinc-400/50 flex items-center justify-center text-white transform transition-transform active:scale-95">
<span className="iconify" data-height="24" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<a className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<span className="iconify" data-height="22" data-icon="lucide:bookmark" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-[10px] font-medium">Saved</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<span className="iconify" data-height="22" data-icon="lucide:user" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-[10px] font-medium">Profile</span>
</a>
</div>

<div className="h-4 w-full"></div>
</nav>
</div>

    </>
  );
}
