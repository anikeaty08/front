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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<header className="flex-none h-16 bg-white/80 backdrop-blur-md border-b border-stone-200 px-6 flex items-center justify-between z-50">
<div className="flex items-center gap-8">

<div className="text-2xl font-bold tracking-tighter text-stone-900 select-none cursor-pointer">HEY</div>

<div className="hidden md:flex bg-stone-100 p-1 rounded-lg border border-stone-200">
<button className="px-4 py-1 text-sm font-medium bg-white shadow-sm rounded-md text-stone-900 transition-all">Week</button>
<button className="px-4 py-1 text-sm font-medium text-stone-500 hover:text-stone-700 transition-all">Day</button>
</div>

<div className="flex items-center gap-2">
<button className="p-1.5 hover:bg-stone-100 rounded-md text-stone-500 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="text-lg font-semibold tracking-tight text-stone-800 hover:bg-stone-100 px-3 py-1 rounded-md transition-colors flex items-center gap-2">
                    October 2023
                    <i className="w-4 h-4 text-stone-400" data-lucide="chevron-down"></i>
</button>
<button className="p-1.5 hover:bg-stone-100 rounded-md text-stone-500 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<button className="ml-2 text-sm font-medium text-stone-500 hover:text-stone-900 px-3 py-1 border border-stone-200 rounded-md bg-white hover:bg-stone-50 transition-colors">
                    Today
                </button>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-400 hover:text-stone-600 transition-colors relative">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<div className="h-6 w-px bg-stone-200"></div>
<button className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-200 shadow-sm">
                    JD
                </div>
</button>
<button className="md:hidden">
<i className="w-6 h-6 text-stone-600" data-lucide="menu"></i>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden relative bg-stone-100 px-4 md:px-8 py-6 scroll-smooth">

<div className="max-w-7xl mx-auto opacity-40 mb-8 pointer-events-none grayscale scale-95 origin-bottom transition-transform duration-500">
<div className="bg-white rounded-2xl border border-stone-200 h-32 flex items-end pb-4 justify-center text-stone-300">
<span className="text-sm font-medium">Last Week (Sep 25 - Oct 1)</span>
</div>
</div>

<div className="max-w-7xl mx-auto relative group">

<div className="absolute inset-0 bg-blue-50/50 z-10 hidden border-2 border-blue-400 border-dashed rounded-2xl items-center justify-center">
<span className="text-blue-600 font-medium bg-white px-4 py-2 rounded-full shadow-sm">Drop to schedule</span>
</div>

<div className="bg-white rounded-2xl shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px] border-[3px] border-stone-900 overflow-hidden">

<div className="grid grid-cols-1 md:grid-cols-7 divide-y md:divide-y-0 md:divide-x divide-stone-100 min-h-[500px]">

<div className="flex flex-col relative group/day hover:bg-stone-50/50 transition-colors">

<div className="p-3 pb-1 flex flex-col items-center border-b border-transparent md:border-b-0">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Mon</span>
<div className="relative mt-1">
<span className="text-xl font-semibold text-stone-900 relative z-10">2</span>

<span className="absolute -left-10 top-0.5 text-lg font-bold text-stone-300 tracking-tighter hidden md:block">Oct</span>
</div>

<div className="flex gap-1 mt-3 mb-1">
<button className="text-stone-300 hover:text-green-500 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="droplets"></i>
</button>
<button className="text-stone-300 hover:text-blue-500 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="book-open"></i>
</button>
</div>
</div>

<div className="flex-1 p-2 space-y-2 pb-12">

<div className="bg-blue-50 border border-blue-100 p-2 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group/event">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-bold text-blue-600">09:00</span>
</div>
<div className="text-sm font-medium text-stone-800 leading-tight">Weekly Sync</div>
</div>

<div className="flex items-center gap-2 px-1 py-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
<div className="h-1.5 w-1.5 rounded-full bg-stone-400"></div>
<span className="text-xs text-stone-500">3h 20m tracked</span>
</div>
</div>

<button className="absolute inset-x-0 bottom-0 h-8 flex items-center justify-center text-stone-400 opacity-0 group-hover/day:opacity-100 transition-opacity hover:text-stone-600 hover:bg-stone-100">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>

<div className="flex flex-col relative group/day hover:bg-stone-50/50 transition-colors">
<div className="p-3 pb-1 flex flex-col items-center">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Tue</span>
<div className="relative mt-1">
<span className="text-xl font-semibold text-stone-900 z-10">3</span>
</div>

<div className="flex gap-1 mt-3 mb-1">
<button className="text-green-500 transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="droplets"></i>
</button>
<button className="text-stone-300 hover:text-blue-500 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="book-open"></i>
</button>
</div>
</div>
<div className="flex-1 p-2 space-y-2 pb-12">

<div className="bg-stone-50 pattern-hatch border border-stone-200/60 p-2 rounded-lg cursor-pointer hover:border-stone-300 transition-all">
<div className="flex items-center gap-1.5">
<i className="w-3 h-3 text-stone-400" data-lucide="help-circle"></i>
<span className="text-sm font-hand text-stone-600 text-lg leading-none pt-1">Lunch w/ Sarah?</span>
</div>
</div>
<div className="bg-emerald-50 border border-emerald-100 p-2 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
<span className="text-xs font-bold text-emerald-600 block mb-0.5">14:00</span>
<div className="text-sm font-medium text-stone-800 leading-tight">Design Review</div>
</div>
</div>
</div>

<div className="flex flex-col relative group/day hover:bg-stone-50/50 transition-colors">
<div className="p-3 pb-1 flex flex-col items-center">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Wed</span>
<div className="relative mt-1">
<span className="text-xl font-semibold text-stone-900 z-10">4</span>
</div>
<div className="flex gap-1 mt-3 mb-1">
<button className="text-stone-300 hover:text-green-500 transition-colors"><i className="w-3.5 h-3.5" data-lucide="droplets"></i></button>
<button className="text-stone-300 hover:text-blue-500 transition-colors"><i className="w-3.5 h-3.5" data-lucide="book-open"></i></button>
</div>
</div>
<div className="flex-1 p-2 space-y-2 pb-12">

<div className="bg-indigo-50 border border-indigo-100 p-2 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
<span className="text-xs font-bold text-indigo-600 block mb-0.5">10:30 - 12:00</span>
<div className="text-sm font-medium text-stone-800 leading-tight">Q4 Strategy Planning</div>
<div className="text-xs text-stone-500 mt-1 flex items-center gap-1"><i className="w-3 h-3" data-lucide="map-pin"></i> Room 404</div>
</div>
</div>
</div>

<div className="flex flex-col relative bg-white md:bg-transparent">
<div className="p-3 pb-1 flex flex-col items-center">
<span className="text-xs font-bold text-orange-600 uppercase tracking-wide">Thu</span>
<div className="relative mt-1 flex items-center justify-center w-10 h-10">

<div className="absolute inset-0 bg-orange-400/25 splotch"></div>
<span className="text-xl font-bold text-stone-900 z-10">5</span>
</div>
<div className="flex gap-1 mt-3 mb-1">
<button className="text-stone-300 hover:text-green-500 transition-colors"><i className="w-3.5 h-3.5" data-lucide="droplets"></i></button>
<button className="text-stone-300 hover:text-blue-500 transition-colors"><i className="w-3.5 h-3.5" data-lucide="book-open"></i></button>
</div>
</div>
<div className="flex-1 p-2 space-y-2 pb-12 bg-orange-50/30">

<div className="w-full h-24 rounded-lg bg-cover bg-center mb-2 shadow-sm relative group overflow-hidden" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1498956461944-9333917639c0?auto=format&amp'}}>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<span className="absolute bottom-1 left-2 text-white text-xs font-medium drop-shadow-md">Focus Day</span>
</div>

<div className="relative p-2 py-3 text-center cursor-pointer group/circle">
<svg className="hand-circle text-red-500 opacity-80 group-hover/circle:scale-105 transition-transform" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M5,50 C5,25 25,5 50,5 C75,5 95,25 95,50 C95,75 75,95 50,95 C25,95 5,75 5,50 Z" fill="none" stroke-dasharray="300" stroke-dashoffset="0" vector-effect="non-scaling-stroke"></path>
</svg>
<span className="text-sm font-bold text-stone-900 relative z-10">Doctor Appt</span>
<span className="text-xs text-stone-500 block relative z-10">15:00</span>
</div>

<div className="relative w-full border-t border-red-400 mt-8">
<div className="absolute -top-1.5 -left-1 w-3 h-3 rounded-full bg-red-400"></div>
</div>
</div>
</div>

<div className="flex flex-col relative group/day hover:bg-stone-50/50 transition-colors">
<div className="p-3 pb-1 flex flex-col items-center">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Fri</span>
<div className="relative mt-1">
<span className="text-xl font-semibold text-stone-900 z-10">6</span>
</div>
<div className="flex gap-1 mt-3 mb-1">
<button className="text-stone-300 hover:text-green-500 transition-colors"><i className="w-3.5 h-3.5" data-lucide="droplets"></i></button>
<button className="text-stone-300 hover:text-blue-500 transition-colors"><i className="w-3.5 h-3.5" data-lucide="book-open"></i></button>
</div>
</div>
<div className="flex-1 p-2 space-y-2 pb-12">
<div className="bg-purple-50 border border-purple-100 p-2 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
<span className="text-xs font-bold text-purple-600 block mb-0.5">17:00</span>
<div className="text-sm font-medium text-stone-800 leading-tight">Team Happy Hour</div>
</div>
</div>
</div>

<div className="flex flex-col relative group/day hover:bg-stone-50/50 transition-colors bg-stone-50/30">
<div className="p-3 pb-1 flex flex-col items-center">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Sat</span>
<div className="relative mt-1">
<span className="text-xl font-semibold text-stone-500 z-10">7</span>
</div>

<div className="h-4 mt-3 mb-1"></div>
</div>
<div className="flex-1 p-2 space-y-2 pb-12">

<div className="p-2 rounded-lg border border-dashed border-stone-300 bg-white/50 text-stone-500 text-xs italic text-center cursor-pointer hover:bg-white hover:border-stone-400 transition-all">
<i className="w-3 h-3 mx-auto mb-1 opacity-50" data-lucide="pen-tool"></i>
                                Write journal...
                            </div>
</div>
</div>

<div className="flex flex-col relative group/day hover:bg-stone-50/50 transition-colors bg-stone-50/30">
<div className="p-3 pb-1 flex flex-col items-center">
<span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">Sun</span>
<div className="relative mt-1">
<span className="text-xl font-semibold text-stone-500 z-10">8</span>
</div>
<div className="h-4 mt-3 mb-1"></div>
</div>
<div className="flex-1 p-2 space-y-2 pb-12">
<div className="bg-amber-50 border border-amber-100 p-2 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer">
<span className="text-xs font-bold text-amber-600 block mb-0.5">10:00</span>
<div className="text-sm font-medium text-stone-800 leading-tight">Brunch</div>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 border-t border-stone-200 p-4 md:px-6">
<div className="flex flex-col md:flex-row md:items-start gap-4">
<div className="flex-none w-32 pt-1">
<h3 className="text-sm font-bold text-stone-400 uppercase tracking-wide mb-1">Sometime</h3>
<p className="text-xs text-stone-400">This Week</p>
</div>

<div className="flex-1 flex flex-wrap gap-3 items-start">

<div className="group flex items-center bg-white border border-stone-200 shadow-sm rounded-md pl-2 pr-3 py-1.5 cursor-grab active:cursor-grabbing hover:border-stone-300 hover:shadow transition-all">
<button className="text-stone-300 hover:text-blue-500 transition-colors mr-2">
<i className="w-4 h-4" data-lucide="square"></i>
</button>
<span className="text-sm text-stone-700">Call Mom</span>
<i className="w-3 h-3 ml-2 text-stone-300 opacity-0 group-hover:opacity-100" data-lucide="grip-vertical"></i>
</div>

<div className="group flex items-center bg-white border border-stone-200 shadow-sm rounded-md pl-2 pr-3 py-1.5 cursor-grab active:cursor-grabbing hover:border-stone-300 hover:shadow transition-all">
<button className="text-stone-300 hover:text-blue-500 transition-colors mr-2">
<i className="w-4 h-4" data-lucide="square"></i>
</button>
<span className="text-sm text-stone-700">Buy birthday gift</span>
<i className="w-3 h-3 ml-2 text-stone-300 opacity-0 group-hover:opacity-100" data-lucide="grip-vertical"></i>
</div>

<div className="group flex items-center bg-stone-50 border border-stone-100 rounded-md pl-2 pr-3 py-1.5 opacity-60">
<button className="text-blue-500 mr-2">
<i className="w-4 h-4" data-lucide="check-square"></i>
</button>
<span className="text-sm text-stone-400 line-through">Pay bills</span>
</div>

<div className="relative flex items-center">
<input className="bg-transparent border-b border-stone-200 text-sm py-1.5 px-2 w-40 focus:w-60 focus:outline-none focus:border-stone-400 transition-all placeholder:text-stone-400 text-stone-700" placeholder="Add a task..." type="text"/>
<button className="absolute right-0 text-stone-400 hover:text-stone-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 opacity-40 pointer-events-none grayscale scale-95 origin-top transition-transform duration-500">
<div className="bg-white rounded-2xl border border-stone-200 h-32 flex items-start pt-4 justify-center text-stone-300">
<span className="text-sm font-medium">Next Week (Oct 9 - Oct 15)</span>
</div>
</div>
</div>
</main>

<button className="fixed bottom-8 right-8 bg-stone-900 text-white p-4 rounded-full shadow-lg hover:bg-stone-800 hover:scale-105 transition-all z-40 group">
<i className="w-6 h-6" data-lucide="plus"></i>

<span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-stone-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Add Event</span>
</button>


    </>
  );
}
