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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg aria-hidden="true" className="iconify text-orange-700 group-hover:rotate-45 transition-transform duration-500 iconify--lucide" data-icon="lucide:compass" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="uppercase text-lg font-semibold text-neutral-900 tracking-tighter text-left">Morocco Sunny Aventures</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-500" href="#">The Sahara</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Imperial Cities</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">High Atlas</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Riads</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:languages" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>EN/FR</span>
</button>
<a className="bg-neutral-900 hover:bg-neutral-800 text-neutral-50 text-sm font-medium px-4 py-2 rounded-full transition-all active:scale-95" href="#">
                    Book Tour
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end gap-8 mb-12 gap-x-8 gap-y-8 justify-between">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-600 tracking-wide uppercase">Desert Season Open</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-neutral-900 tracking-tight leading-[1.05] mb-6">
                        The spirit of <br className="hidden md:block"/> the Maghreb.
                    </h1>
<p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-lg">
                        Authentic, guided expeditions through the ancient medinas, snow-capped Atlas peaks, and the endless dunes of Merzouga.
                    </p>
</div>

<div className="w-full md:w-auto bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100">
<div className="flex flex-col md:flex-row gap-2">
<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify text-stone-400 iconify--lucide" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<input className="w-full md:w-48 pl-10 pr-4 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-900/10 transition-colors appearance-none" placeholder="Marrakech..." type="text"/>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify text-stone-400 iconify--lucide" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</div>
<input className="w-full md:w-48 pl-10 pr-4 py-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-900/10 transition-colors appearance-none" placeholder="Dates" type="text"/>
</div>
<button className="bg-neutral-900 hover:bg-neutral-800 text-white p-3 rounded-xl transition-colors flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden group shadow-xl shadow-neutral-200">
<img alt="Moroccan Desert Camel" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
<p className="text-xs font-medium tracking-widest uppercase mb-2 opacity-80 text-indigo-200">Featured Expedition</p>
<p className="text-xl md:text-3xl font-medium tracking-tight">Sunset at Erg Chebbi Dunes</p>
</div>
<div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-neutral-900 transition-all flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        See the Journey
                    </button>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FDFCF8] p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between h-64 md:h-80 group hover:border-indigo-200 transition-colors">
<div className="flex justify-between items-start">
<svg aria-hidden="true" className="iconify text-orange-600 iconify--lucide" data-icon="lucide:sun" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
<span className="text-xs font-medium text-neutral-400 border border-neutral-200 px-2 py-1 rounded-full bg-white">01</span>
</div>
<div>
<h3 className="text-2xl font-medium text-neutral-900 tracking-tight mb-2">Sahara Nights</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Sleep under a canopy of stars in our luxury Berber camps. Traditional music, cuisine, and absolute silence.</p>
</div>
</div>

<div className="bg-neutral-900 p-8 rounded-3xl shadow-sm flex flex-col justify-between h-64 md:h-80 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div className="relative z-10 flex justify-between items-start">
<svg aria-hidden="true" className="iconify text-stone-200 iconify--lucide" data-icon="lucide:mountain" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m8 3l4 8l5-5l5 15H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">High Atlas</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Scale Mount Toubkal, North Africa's highest peak (4,167m), with certified local mountaineering guides.</p>
</div>
</div>

<div className="bg-[#FDFCF8] p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between h-64 md:h-80 group hover:border-indigo-200 transition-colors">
<div className="flex justify-between items-start">
<svg aria-hidden="true" className="iconify text-stone-600 iconify--lucide" data-icon="lucide:gem" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
<span className="text-xs font-medium text-neutral-400 border border-neutral-200 px-2 py-1 rounded-full bg-white">03</span>
</div>
<div>
<h3 className="text-2xl font-medium text-neutral-900 tracking-tight mb-2">Hidden Medinas</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Navigate the labyrinthine souks of Fes and Marrakech with locals who know every artisan and secret garden.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 bg-[#FDFCF8]">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight mb-4">Curated Itineraries</h2>
<p className="text-neutral-500 max-w-sm">From the Atlantic coast to the deep desert, hand-picked experiences for the modern explorer.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-indigo-700 transition-colors group" href="#">
                    View all tours
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Sahara" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1549141093-b6c867a508fa?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="flex items-center gap-1 text-xs font-semibold text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 5.0
                            </span>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Merzouga Luxury Camp</h3>
<span className="text-sm font-medium text-neutral-500">€320</span>
</div>
<p className="text-sm text-neutral-500 mb-3">Erg Chebbi, Sahara</p>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> 3 Days</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:tent" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21L14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Glamping</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Toubkal" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1577791466037-e6f7c80521e1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="flex items-center gap-1 text-xs font-semibold text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 4.9
                            </span>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Mt. Toubkal Summit</h3>
<span className="text-sm font-medium text-neutral-500">€180</span>
</div>
<p className="text-sm text-neutral-500 mb-3">Imlil, High Atlas</p>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> 2 Days</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:footprints" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Hard</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Chefchaouen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1533552882950-8919632d4367?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="flex items-center gap-1 text-xs font-semibold text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 4.8
                            </span>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">The Blue Pearl</h3>
<span className="text-sm font-medium text-neutral-500">€90</span>
</div>
<p className="text-sm text-neutral-500 mb-3">Chefchaouen, Rif Mts</p>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> 1 Day</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:camera" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg> Scenic</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Ait Ben Haddou" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="flex items-center gap-1 text-xs font-semibold text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 4.9
                            </span>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-neutral-900 tracking-tight">Road of Kasbahs</h3>
<span className="text-sm font-medium text-neutral-500">€140</span>
</div>
<p className="text-sm text-neutral-500 mb-3">Ouarzazate &amp; Dades</p>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-400">
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> 2 Days</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:history" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5m4-1v5l4 2"></path></g></svg> Culture</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 bg-white border-t border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight mb-4">Travel without compromise.</h2>
<p className="text-neutral-500 text-lg leading-relaxed">
                             We combine the rugged beauty of Morocco with seamless logistics and premium comfort. Your only job is to soak in the views.
                         </p>
</div>
<div className="space-y-4">

<div className="group bg-[#FDFCF8] border border-neutral-200 p-4 rounded-xl hover:border-indigo-200 transition-colors cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</div>
<span className="font-medium text-neutral-900">4x4 Land Cruiser Transport</span>
</div>
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors iconify--lucide" data-icon="lucide:chevron-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="group bg-[#FDFCF8] border border-neutral-200 p-4 rounded-xl hover:border-indigo-200 transition-colors cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<span className="font-medium text-neutral-900">Certified Berber Guides</span>
</div>
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors iconify--lucide" data-icon="lucide:chevron-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="group bg-[#FDFCF8] border border-neutral-200 p-4 rounded-xl hover:border-indigo-200 transition-colors cursor-pointer flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:utensils" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-medium text-neutral-900">Authentic Moroccan Dining</span>
</div>
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors iconify--lucide" data-icon="lucide:chevron-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-neutral-200/50">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1531513289016-563b711d9607?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden bg-neutral-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<p className="font-medium">"The most magical week of my life. The team took care of every single detail."</p>
<p className="text-xs text-indigo-200 mt-1 uppercase tracking-wider">Elena R. — Verified Traveler</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#FDFCF8]">
<div className="max-w-3xl mx-auto text-center">
<svg aria-hidden="true" className="iconify mx-auto mb-6 text-orange-600 iconify--lucide" data-icon="lucide:palmtree" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1l1 1h4m3-.86A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1l-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25l.7-.7l.71-.71l2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></g></svg>
<h2 className="text-3xl md:text-5xl font-medium text-neutral-900 tracking-tight mb-6">Your adventure awaits.</h2>
<p className="text-neutral-500 mb-10">Sign up for exclusive offers on Sahara camps and Atlas trekking packages.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white border border-neutral-200 text-neutral-900 text-sm rounded-lg focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 block w-full p-3 outline-none transition-shadow shadow-sm" placeholder="email@address.com" required="" type="email"/>
<button className="bg-neutral-900 text-white text-sm font-medium rounded-lg px-6 py-3 hover:bg-neutral-800 transition-colors shadow-sm" type="submit">
                    Subscribe
                </button>
</form>
<p className="text-xs text-neutral-400 mt-4">We respect your privacy.</p>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<svg aria-hidden="true" className="iconify text-orange-700 iconify--lucide" data-icon="lucide:compass" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-neutral-900 font-semibold tracking-tighter text-lg uppercase">ATLAS &amp; SANDS</span>
</a>
<p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                        Premier tour operator based in Marrakech, specializing in sustainable, authentic travel experiences across the Kingdom of Morocco.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Destinations</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Marrakech</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Sahara Desert</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Fes &amp; Meknes</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Essaouira</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Our Guides</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Social</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Facebook</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">TripAdvisor</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 gap-4">
<p className="text-xs text-neutral-400">© 2024 Atlas &amp; Sands. Licensed Tour Operator.</p>
<div className="flex gap-6">
<a className="text-xs text-neutral-400 hover:text-neutral-600" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-400 hover:text-neutral-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
