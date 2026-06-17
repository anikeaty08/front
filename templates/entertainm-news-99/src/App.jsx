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



    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
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
      

<header className="bg-white/80 border-slate-200 border-b backdrop-blur" data-element-id="aura-emfvhh9pz">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-sm bg-slate-900"></div>
<span className="text-lg font-semibold tracking-tight">Blavity</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
<a className="hover:text-slate-900" href="#">Entertainment</a>
<a className="hover:text-slate-900" href="#">Culture</a>
<a className="hover:text-slate-900" href="#">Film</a>
<a className="hover:text-slate-900" href="#">Interviews</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span>Search</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm hover:bg-slate-800">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Newsletter</span>
</button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Explore Shadow and Act</h2>
<div className="flex items-center gap-3 text-slate-500">
<a className="hover:text-slate-900 text-sm inline-flex items-center gap-1" href="#">Follow <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<aside className="md:col-span-4" data-element-id="aura-emfvhgqte">
<section aria-labelledby="what-to-watch" className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 sm:px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-content-center">
<svg className="lucide lucide-clapperboard h- w-4" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight" id="what-to-watch">What to watch</h3>
</div>
<a className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
              See all <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="p-3 sm:p-4">
<ul className="space-y-2 hidden md:block">

<li className="">
<a className="group flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50" href="#">
<img alt="Neon cinema" className="h-16 w-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1496080174650-637e3f22fa03?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="text-xs rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">New</span>
<span className="text-xs text-slate-500">Today</span>
</div>
<p className="mt-1 text-sm font-medium text-slate-900 line-clamp-2 group-hover:underline tracking-tight">Five new series premieres to queue up this week</p>
</div>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50" href="#">
<img alt="Projector" className="h-16 w-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<span className="text-xs text-slate-500">Sep 18</span>
<p className="mt-1 text-sm font-medium text-slate-900 line-clamp-2 group-hover:underline tracking-tight">Indie gems you might have missed in theaters</p>
</div>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50" href="#">
<img alt="Streaming app" className="h-16 w-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<span className="text-xs text-slate-500">Sep 16</span>
<p className="mt-1 text-sm font-medium text-slate-900 line-clamp-2 group-hover:underline tracking-tight">Top streaming picks for your weekend marathon</p>
</div>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50" href="#">
<img alt="Mountains still" className="h-16 w-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1502139214986-d0ad755818d8?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<span className="text-xs text-slate-500">Sep 15</span>
<p className="mt-1 text-sm font-medium text-slate-900 line-clamp-2 group-hover:underline tracking-tight">Stunning nature documentaries to unwind with</p>
</div>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50" href="#">
<img alt="Minimal portrait" className="h-16 w-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<span className="text-xs text-slate-500">Sep 12</span>
<p className="mt-1 text-sm font-medium text-slate-900 line-clamp-2 group-hover:underline tracking-tight">Essential debut performances to catch now</p>
</div>
</a>
</li>
</ul>

<div className="md:hidden">
<div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2">
<a className="min-w-[84%] snap-start rounded-lg overflow-hidden bg-white border border-slate-200" href="#">
<img alt="Neon cinema" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1496080174650-637e3f22fa03?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<p className="text-sm font-medium tracking-tight">Five new series premieres to queue up this week</p>
<p className="text-xs text-slate-500 mt-1">Today</p>
</div>
</a>
<a className="min-w-[84%] snap-start rounded-lg overflow-hidden bg-white border border-slate-200" href="#">
<img alt="Projector" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<p className="text-sm font-medium tracking-tight">Indie gems you might have missed in theaters</p>
<p className="text-xs text-slate-500 mt-1">Sep 18</p>
</div>
</a>
<a className="min-w-[84%] snap-start rounded-lg overflow-hidden bg-white border border-slate-200" href="#">
<img alt="Streaming app" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<p className="text-sm font-medium tracking-tight">Top streaming picks for your weekend marathon</p>
<p className="text-xs text-slate-500 mt-1">Sep 16</p>
</div>
</a>
</div>
</div>
</div>
</section>

<section aria-labelledby="live-tv" className="overflow-hidden bg-white border-slate-200 border rounded-xl mt-6" data-element-id="aura-emfvhhcvs">
<div className="sm:px-5 flex border-slate-200 border-b pt-4 pr-4 pb-4 pl-4 items-center justify-between" data-element-id="aura-emfvhgkny">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-content-center">
<svg className="lucide lucide-tv-2 h-4 w-4" data-lucide="tv-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 21h10"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight" id="live-tv">What to Stream</h3>
</div>
<a className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
      Stream now <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
<div className="px-4 sm:px-5 py-2 border-b border-slate-200">
<div className="flex items-center gap-2">
<span className="text-xs text-slate-600">Platforms</span>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md text-[10px] font-medium text-white" style={{backgroundColor: '#E50914'}} title="Netflix">N</span>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md text-[10px] font-medium text-slate-900" style={{backgroundColor: '#1CE783'}} title="Hulu">h</span>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md text-[10px] font-medium text-white" style={{backgroundColor: '#3A00FF'}} title="Max">MAX</span>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md text-[10px] font-medium text-white" style={{backgroundColor: '#00A8E1'}} title="Prime Video">prime</span>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-md text-[10px] font-medium text-white" style={{backgroundColor: '#113CCF'}} title="Disney+">D+</span>
</div>
</div>
<div className="">
<ul className="divide-y divide-slate-200">
<li className="">
<a className="block px-4 sm:px-5 py-3 hover:bg-slate-50" href="#">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Halloween Baking Championship</p>
<p className="mt-0.5 text-xs text-slate-600">S11 E01 · 7:00 PM · FOODTV</p>
</div>
<span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] font-medium text-slate-700 hover:border-slate-300">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Stream
            </span>
</div>
</a>
</li>
<li className="">
<a className="block px-4 sm:px-5 py-3 hover:bg-slate-50" href="#">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Anderson Cooper 360°</p>
<p className="mt-0.5 text-xs text-slate-600">8:00 PM · CNN</p>
</div>
<span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] font-medium text-slate-700 hover:border-slate-300">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Stream
            </span>
</div>
</a>
</li>
<li className="">
<a className="block px-4 sm:px-5 py-3 hover:bg-slate-50" href="#">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Futurama</p>
<p className="mt-0.5 text-xs text-slate-600">S13 E03 · 8:00 PM · FXX</p>
</div>
<span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] font-medium text-slate-700 hover:border-slate-300">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Stream
            </span>
</div>
</a>
</li>
<li className="">
<a className="block sm:px-5 hover:bg-slate-50 pt-3 pr-4 pb-3 pl-4" data-element-id="aura-emfvhgu2k" href="#">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm font-semibold text-slate-900 tracking-tight">The Voice</p>
<p className="mt-0.5 text-xs text-slate-600">S28 E01 · 8:00 PM · NBC</p>
</div>
<span className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] font-medium text-slate-700 hover:border-slate-300">
<svg className="lucide lucide-play h-3.5 w-3.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Stream
            </span>
</div>
</a>
</li>
</ul>
</div>
</section>

<section aria-labelledby="get-tickets" className="mt-6 bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 sm:px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-content-center">
<svg className="lucide lucide-ticket h-4 w-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold tracking-tight" id="get-tickets">Get Tickets</h3>
</div>
<a className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
              View all <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<ul className="p-3 sm:p-4 space-y-3">
<li className="group flex items-center gap-3 rounded-lg border border-slate-200 hover:border-slate-300 p-2">
<img alt="Theater seats" className="h-16 w-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium tracking-tight text-slate-900 group-hover:underline">Maybe Happy Ending — Broadway</p>
<div className="mt-0.5 flex items-center gap-3 text-xs text-slate-600">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Tonight, 7:30 PM</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> NYC</span>
</div>
</div>
<a className="shrink-0 inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-1.5 text-xs font-medium hover:bg-slate-800" href="#">
<svg className="lucide lucide-ticket h-3.5 w-3.5" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                Get Tickets
              </a>
</li>
<li className="group flex items-center gap-3 rounded-lg border border-slate-200 hover:border-slate-300 p-2">
<img alt="Cinema" className="h-16 w-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium tracking-tight text-slate-900 group-hover:underline">Indie Showcase — Limited Screening</p>
<div className="mt-0.5 flex items-center gap-3 text-xs text-slate-600">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Fri, 9:15 PM</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> LA</span>
</div>
</div>
<a className="shrink-0 inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-1.5 text-xs font-medium hover:bg-slate-800" href="#">
<svg className="lucide lucide-ticket h-3.5 w-3.5" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                Get Tickets
              </a>
</li>
<li className="group flex items-center gap-3 rounded-lg border border-slate-200 hover:border-slate-300 p-2">
<img alt="Concert hall" className="h-16 w-16 rounded-md object-cover" src="https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium tracking-tight text-slate-900 group-hover:underline">Live Score: Cinema in Concert</p>
<div className="mt-0.5 flex items-center gap-3 text-xs text-slate-600">
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-calendar h-3.5 w-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Sat, 8:00 PM</span>
<span className="inline-flex items-center gap-1"><svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Chicago</span>
</div>
</div>
<a className="shrink-0 inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-1.5 text-xs font-medium hover:bg-slate-800" href="#">
<svg className="lucide lucide-ticket h-3.5 w-3.5" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                Get Tickets
              </a>
</li>
</ul>
</section>
</aside>

<section className="md:col-span-8">
<div className="flex items-center justify-between mb-4">
<h1 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase">
            Andrew Barth Feldman's 'Maybe Happy Ending' Casting Condemned by Constance...
          </h1>
<a className="hidden sm:inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 text-sm font-medium" href="#">
            Read full story <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mb-4">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-medium">
<svg className="lucide lucide-badge-check h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Entertainment
          </span>
</div>

<div className="grid grid-cols-2 gap-3 rounded-xl overflow-hidden">
<img alt="Portrait A" className="w-full h-64 sm:h-96 object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Portrait B" className="w-full h-64 sm:h-96 object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="mt-8">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Film</h2>
<a className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
              See all stories <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
<a className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-sm transition" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="3D render" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<p className="text-sm font-medium tracking-tight line-clamp-2">Behind the scenes: how this sci‑fi world came to life</p>
<p className="mt-1 text-xs text-slate-500">7 min read</p>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-sm transition" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Mountains" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<p className="text-sm font-medium tracking-tight line-clamp-2">New adventure epic captures the scale of the wild</p>
<p className="mt-1 text-xs text-slate-500">5 min read</p>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-sm transition" href="#">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Minimal face" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<p className="text-sm font-medium tracking-tight line-clamp-2">Breakout performance we're still thinking about</p>
<p className="mt-1 text-xs text-slate-500">4 min read</p>
</div>
</a>
</div>
</div>
</section>
</div>
</main>
<footer className="mt-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-500">
<div className="flex items-center justify-between">
<p>© 2025 Shadow and Act</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-900" href="#"><svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-slate-900" href="#"><svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-slate-900" href="#"><svg className="lucide lucide-youtube h-4 w-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
