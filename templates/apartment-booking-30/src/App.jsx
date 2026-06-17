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



(function () {
const stored = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (stored === 'dark' || (!stored && systemDark)) {
document.documentElement.classList.add('dark');
}
})();

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
      

<div className="w-full bg-white/70 dark:bg-slate-900/60 backdrop-blur border-b border-slate-200/70 dark:border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-2 text-sm">
<p className="text-slate-600 dark:text-slate-400 animate-fade-in" style={{animationDelay: '.05s'}}>Summer stays up to 15% off — limited time.</p>
<a className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 hover:underline animate-fade-in" href="#results" style={{animationDelay: '.1s'}}>
            Explore deals
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200/70 dark:border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group animate-slide-up" href="#home" style={{animationDelay: '.05s'}}>
<div className="h-8 w-8 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 grid place-items-center tracking-tight font-semibold shadow-sm ring-1 ring-slate-200 dark:ring-slate-800">
              AB
            </div>
<span className="text-base sm:text-lg tracking-tight" style={{fontFamily: '\'Open Sans\', ui-sans-serif, system-ui', fontWeight: '600'}}>ApartmentBook</span>
</a>
<nav className="hidden md:flex items-center gap-7 animate-slide-up" style={{animationDelay: '.1s'}}>
<a className="text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#results">Explore</a>
<a className="text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#home-features">Features</a>
<a className="text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#home-hosts">Hosts</a>
<a className="text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" href="#home-pricing">Pricing</a>
</nav>
<div className="flex items-center gap-3 animate-slide-up" style={{animationDelay: '.15s'}}>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60" id="themeToggle">
<i className="w-4 h-4" data-lucide="moon"></i>
<span className="hidden sm:inline">Theme</span>
</button>
<a className="hidden sm:inline-flex items-center rounded-md border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-600/90 text-white px-3.5 py-2 text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-950" href="#">
<i className="w-4 h-4" data-lucide="plus"></i>
              List your place
            </a>
</div>
</div>
</div>
</header>

<main>

<section data-view="home" id="homeView">

<section className="relative" id="home">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 sm:py-16 lg:py-20">
<div className="space-y-6">
<h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900 dark:text-white animate-slide-up" style={{animationDelay: '.05s', fontFamily: '\'Open Sans\', ui-sans-serif, system-ui', fontWeight: '600'}}>
                  Find your next apartment stay—simple, safe, and local.
                </h1>
<p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl animate-slide-up" style={{animationDelay: '.1s'}}>
                  Explore curated apartments across top neighborhoods. Transparent pricing, flexible dates, and trusted hosts—book in minutes.
                </p>

<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-3 sm:p-4 animate-blur-in" style={{animationDelay: '.15s'}}>
<form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3" id="heroSearchForm">

<div className="col-span-1 lg:col-span-2">
<label className="text-xs font-medium text-slate-600 dark:text-slate-300 block mb-1">Location</label>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="map-pin"></i>
<input className="w-full pl-10 pr-3 py-2.5 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50" id="searchLocation" placeholder="City, area, or landmark" type="text"/>
</div>
</div>

<div>
<label className="text-xs font-medium text-slate-600 dark:text-slate-300 block mb-1">Check-in</label>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="calendar"></i>
<input className="w-full pl-10 pr-3 py-2.5 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50" id="searchCheckIn" type="date"/>
</div>
</div>

<div>
<label className="text-xs font-medium text-slate-600 dark:text-slate-300 block mb-1">Check-out</label>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="calendar-check"></i>
<input className="w-full pl-10 pr-3 py-2.5 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50" id="searchCheckOut" type="date"/>
</div>
</div>

<div>
<label className="text-xs font-medium text-slate-600 dark:text-slate-300 block mb-1">Guests</label>
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="users"></i>
<select className="w-full appearance-none pl-10 pr-9 py-2.5 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50" id="searchGuests">
<option>1 guest</option>
<option selected="">2 guests</option>
<option>3 guests</option>
<option>4 guests</option>
<option>5 guests</option>
<option>6+ guests</option>
</select>
<i className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="lg:col-span-5 flex justify-end pt-1 sm:pt-0">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-600/90 text-white px-4 py-2.5 text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-950" id="heroSearchBtn" type="button">
<i className="w-4 h-4" data-lucide="search"></i>
                        Search apartments
                      </button>
</div>
</form>
</div>
<div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 animate-slide-up" style={{animationDelay: '.2s'}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="shield-check"></i>
                    Verified hosts
                  </div>
<div className="hidden sm:flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="badge-check"></i>
                    Secure payments
                  </div>
<div className="hidden md:flex items-center gap-2">
<i className="w-4 h-4 text-purple-600" data-lucide="clock-5"></i>
                    Flexible stays
                  </div>
</div>
</div>

<div className="relative animate-blur-in" style={{animationDelay: '.1s'}}>
<div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm">
<img alt="Modern apartment living room" className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=1960&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/0 to-white/10 dark:from-slate-950/80 dark:via-slate-950/0 dark:to-slate-950/10"></div>

<div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
<div className="rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-slate-200 dark:border-slate-800 shadow-sm p-3 sm:p-4">
<div className="flex items-center gap-3">
<img alt="Guest" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-900 dark:text-slate-100" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>“Lovely &amp; spotless”</p>
<p className="text-xs text-slate-500 dark:text-slate-400">4.9 • 120 reviews</p>
</div>
<i className="w-4 h-4 text-amber-500 ml-auto" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950" id="home-features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white animate-slide-up" style={{animationDelay: '.05s', fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Why book with us</h2>
<p className="mt-2 text-slate-600 dark:text-slate-300 animate-slide-up" style={{animationDelay: '.1s'}}>Premium listings, transparent policies, and responsive support—designed to make booking delightful.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors animate-slide-up" style={{animationDelay: '.1s'}}>
<div className="flex items-center justify-between">
<div className="h-9 w-9 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 grid place-items-center ring-1 ring-blue-100 dark:ring-blue-900/40">
<i className="w-4.5 h-4.5" data-lucide="map"></i>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="sparkles"></i>
</div>
<h3 className="mt-4 text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Top neighborhoods</h3>
<p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">Curated stays in vibrant, well-connected areas close to transit and essentials.</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors animate-slide-up" style={{animationDelay: '.15s'}}>
<div className="h-9 w-9 rounded-md bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 grid place-items-center ring-1 ring-emerald-100 dark:ring-emerald-900/40">
<i className="w-4.5 h-4.5" data-lucide="shield-check"></i>
</div>
<h3 className="mt-4 text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Trusted &amp; verified</h3>
<p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">Every listing is verified. Reviews are real and protected against fraud.</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors animate-slide-up" style={{animationDelay: '.2s'}}>
<div className="h-9 w-9 rounded-md bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 grid place-items-center ring-1 ring-purple-100 dark:ring-purple-900/40">
<i className="w-4.5 h-4.5" data-lucide="badge-dollar-sign"></i>
</div>
<h3 className="mt-4 text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Clear pricing</h3>
<p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">No surprises. See full cost upfront with flexible cancellation options.</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors animate-slide-up" style={{animationDelay: '.25s'}}>
<div className="h-9 w-9 rounded-md bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 grid place-items-center ring-1 ring-amber-100 dark:ring-amber-900/40">
<i className="w-4.5 h-4.5" data-lucide="headset"></i>
</div>
<h3 className="mt-4 text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>24/7 support</h3>
<p className="mt-1.5 text-sm text-slate-600 dark:text-slate-300">Real humans ready to help—before, during, and after your stay.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white dark:bg-slate-950" id="home-pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white animate-slide-up" style={{animationDelay: '.05s', fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Featured apartments</h2>
<p className="mt-2 text-slate-600 dark:text-slate-300 animate-slide-up" style={{animationDelay: '.1s'}}>Handpicked stays with stellar reviews and amenities.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 animate-slide-up" href="#results" style={{animationDelay: '.12s'}}>
                View all
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

<a className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors animate-blur-in" data-beds="1 bed" data-city="Stockholm" data-guests="2 guests" data-image="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-listing-card="" data-price="138" data-rating="4.9" data-title="Scandinavian Loft" href="#listing" style={{animationDelay: '.1s'}}>
<div className="aspect-[4/3] overflow-hidden">
<img alt="Scandinavian loft" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Scandinavian Loft</h3>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300">4.9</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Stockholm • 2 guests • 1 bed</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-200"><span className="text-slate-900 dark:text-white font-medium">$138</span> / night</span>
<span className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 group-hover:underline">Details<i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</a>

<a className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors animate-blur-in" data-beds="1 bed" data-city="New York" data-guests="2 guests" data-image="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-listing-card="" data-price="165" data-rating="4.8" data-title="Urban Studio" href="#listing" style={{animationDelay: '.14s'}}>
<div className="aspect-[4/3] overflow-hidden">
<img alt="Urban studio" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Urban Studio</h3>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300">4.8</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">New York • 2 guests • 1 bed</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-200"><span className="text-slate-900 dark:text-white font-medium">$165</span> / night</span>
<span className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 group-hover:underline">Details<i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</a>

<a className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors animate-blur-in" data-beds="2 beds" data-city="Lisbon" data-guests="3 guests" data-image="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-listing-card="" data-price="129" data-rating="5.0" data-title="Coastal Retreat" href="#listing" style={{animationDelay: '.18s'}}>
<div className="aspect-[4/3] overflow-hidden">
<img alt="Coastal retreat" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Coastal Retreat</h3>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300">5.0</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Lisbon • 3 guests • 2 beds</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-200"><span className="text-slate-900 dark:text-white font-medium">$129</span> / night</span>
<span className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 group-hover:underline">Details<i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</a>

<a className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors animate-blur-in" data-beds="1 bed" data-city="Barcelona" data-guests="2 guests" data-image="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-listing-card="" data-price="142" data-rating="4.7" data-title="Sunlit Minimal Flat" href="#listing" style={{animationDelay: '.22s'}}>
<div className="aspect-[4/3] overflow-hidden">
<img alt="Minimal sunlight flat" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Sunlit Minimal Flat</h3>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300">4.7</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Barcelona • 2 guests • 1 bed</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-200"><span className="text-slate-900 dark:text-white font-medium">$142</span> / night</span>
<span className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 group-hover:underline">Details<i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800" id="home-hosts">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white animate-slide-up" style={{animationDelay: '.05s', fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Loved by travelers</h2>
<p className="mt-2 text-slate-600 dark:text-slate-300 animate-slide-up" style={{animationDelay: '.1s'}}>Hear from guests who’ve found their perfect stays.</p>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2">
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-5 animate-slide-up" style={{animationDelay: '.12s'}}>
<div className="flex items-center gap-3">
<img alt="Reviewer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-slate-900 dark:text-slate-100" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Maya N.</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Berlin • 5-night stay</p>
</div>
<div className="ml-auto inline-flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-slate-700 dark:text-slate-200">Booking was effortless and the apartment looked exactly like the photos. The host was super responsive—would book again!</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-5 animate-slide-up" style={{animationDelay: '.16s'}}>
<div className="flex items-center gap-3">
<img alt="Reviewer" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-900 dark:text-slate-100" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Rafael P.</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Porto • Weekend trip</p>
</div>
<div className="ml-auto inline-flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star-half"></i>
</div>
</div>
<p className="mt-3 text-slate-700 dark:text-slate-200">Great location and super clean. Payment and check-in were smooth—exactly the kind of trip planning I like.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white dark:bg-slate-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 shadow-sm grid lg:grid-cols-2 gap-6 items-center animate-slide-up" style={{animationDelay: '.1s'}}>
<div>
<h3 className="text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Ready for your next trip?</h3>
<p className="mt-2 text-slate-600 dark:text-slate-300">Create a free account to save favorites, sync across devices, and book even faster.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700" href="#results">Learn more<i className="w-4 h-4" data-lucide="chevron-right"></i></a>
<a className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-600/90 text-white px-4 py-2.5 text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-900" href="#">Create account<i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>
</section>

<section className="hidden" data-view="results" id="resultsView">
<section className="py-8 sm:py-10 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-start sm:items-end justify-between gap-4">
<div>
<p className="text-sm text-slate-500 dark:text-slate-400">Search results</p>
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white" id="resultsTitle" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Stays</h2>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1" id="resultsMeta">Dates and guests will appear here.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-slate-300 dark:hover:border-slate-700" id="toggleMap">
<i className="w-4 h-4" data-lucide="map"></i> Map
                </button>
<div className="relative">
<select className="appearance-none pl-3 pr-9 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-sm text-slate-700 dark:text-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40" id="sortSelect">
<option selected="">Recommended</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Rating</option>
</select>
<i className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="mt-5 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700">
<i className="w-4 h-4" data-lucide="filter"></i> Filters
              </button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">Free cancellation</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">Self check-in</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">Kitchen</button>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">Washer</button>
</div>
</div>
</section>
<section className="py-8 bg-white dark:bg-slate-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-3">
<div className="lg:col-span-2">
<div className="grid gap-6 sm:grid-cols-2" id="resultsGrid">

<a className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors" data-beds="1 bed" data-city="Amsterdam" data-guests="2 guests" data-image="https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-listing-card="" data-price="155" data-rating="4.9" data-title="Canal View Loft" href="#listing">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Canal view loft" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Canal View Loft</h3>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300">4.9</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Amsterdam • 2 guests • 1 bed</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-200"><span className="text-slate-900 dark:text-white font-medium">$155</span> / night</span>
<span className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 group-hover:underline">Details<i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors" data-beds="1 bed" data-city="Berlin" data-guests="2 guests" data-image="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-listing-card="" data-price="120" data-rating="4.7" data-title="Rooftop Hideout" href="#listing">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Rooftop hideout" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Rooftop Hideout</h3>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300">4.7</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Berlin • 2 guests • 1 bed</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-200"><span className="text-slate-900 dark:text-white font-medium">$120</span> / night</span>
<span className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 group-hover:underline">Details<i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors" data-beds="2 beds" data-city="San Francisco" data-guests="3 guests" data-image="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-listing-card="" data-price="210" data-rating="4.8" data-title="Bayfront Escape" href="#listing">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Bayfront escape" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Bayfront Escape</h3>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300">4.8</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">San Francisco • 3 guests • 2 beds</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-200"><span className="text-slate-900 dark:text-white font-medium">$210</span> / night</span>
<span className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 group-hover:underline">Details<i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-colors" data-beds="1 bed" data-city="Paris" data-guests="2 guests" data-image="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" data-listing-card="" data-price="190" data-rating="5.0" data-title="Garden Courtyard" href="#listing">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Garden courtyard" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Garden Courtyard</h3>
<div className="flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300">5.0</span>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Paris • 2 guests • 1 bed</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-sm text-slate-700 dark:text-slate-200"><span className="text-slate-900 dark:text-white font-medium">$190</span> / night</span>
<span className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 group-hover:underline">Details<i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</div>
</div>
</a>
</div>
<div className="mt-6 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-sm">
<i className="w-4 h-4" data-lucide="chevron-left"></i> Previous
                  </button>
<div className="text-sm text-slate-500">Page 1 of 5</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-sm">
                    Next <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<aside className="hidden lg:block rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 h-[560px] sticky top-24" id="resultsMap">
<div className="h-full w-full grid place-items-center text-slate-500">
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6" data-lucide="map"></i>
<p className="text-sm">Map coming soon</p>
</div>
</div>
</aside>
</div>
</div>
</section>
</section>

<section className="hidden" data-view="listing" id="listingView">
<section className="py-6 sm:py-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<a className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" href="#results">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to results
            </a>
<h1 className="mt-3 text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white" id="listingTitle" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Listing</h1>
<p className="text-sm text-slate-600 dark:text-slate-300" id="listingSubtitle">City • Guests • Beds</p>

<div className="mt-5 grid gap-3 grid-cols-12">
<div className="col-span-12 md:col-span-7 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
<img alt="Listing main" className="w-full h-[260px] sm:h-[420px] object-cover" id="listingHero" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
<img alt="Gallery 1" className="rounded-xl border border-slate-200 dark:border-slate-800 h-[120px] sm:h-[200px] w-full object-cover" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=1960&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 2" className="rounded-xl border border-slate-200 dark:border-slate-800 h-[120px] sm:h-[200px] w-full object-cover" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&amp;w=1960&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 3" className="rounded-xl border border-slate-200 dark:border-slate-800 h-[120px] sm:h-[200px] w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Gallery 4" className="rounded-xl border border-slate-200 dark:border-slate-800 h-[120px] sm:h-[200px] w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</section>
<section className="py-8 bg-white dark:bg-slate-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-3">
<div className="lg:col-span-2 space-y-6">

<div className="flex items-center gap-3">
<div className="inline-flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300" id="listingRating">4.9</span>
</div>
<span className="text-slate-400">•</span>
<div className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span className="text-sm" id="listingCity">City</span>
</div>
</div>

<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-4">
<div className="flex items-center gap-3">
<img alt="Host" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Hosted by Alex</p>
<p className="text-xs text-slate-600 dark:text-slate-400">Superhost • 3 years hosting</p>
</div>
<div className="ml-auto">
<a className="inline-flex items-center gap-1 text-sm text-blue-700 dark:text-blue-400 hover:underline" href="#"><i className="w-4 h-4" data-lucide="message-square"></i> Contact host</a>
</div>
</div>
</div>

<div>
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>About this place</h3>
<p className="mt-1.5 text-sm text-slate-700 dark:text-slate-200">A bright, well-connected space with natural light, fast Wi‑Fi, and a fully equipped kitchen. Minutes from cafés, transit, and parks—ideal for short or extended stays.</p>
</div>

<div>
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>What this place offers</h3>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><i className="w-4 h-4" data-lucide="wifi"></i> Fast Wi‑Fi</div>
<div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><i className="w-4 h-4" data-lucide="chef-hat"></i> Kitchen</div>
<div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><i className="w-4 h-4" data-lucide="tv"></i> Smart TV</div>
<div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><i className="w-4 h-4" data-lucide="wind"></i> Air conditioning</div>
<div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><i className="w-4 h-4" data-lucide="cup-soda"></i> Coffee maker</div>
<div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200"><i className="w-4 h-4" data-lucide="washing-machine"></i> Washer</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-500" data-lucide="star"></i>
<p className="text-sm"><span className="text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\'', fontWeight: '600'}}>4.9</span> • 120 reviews</p>
</div>
<div className="mt-3 grid gap-3">
<div className="rounded-lg bg-slate-50 dark:bg-slate-900/50 p-3">
<p className="text-sm text-slate-700 dark:text-slate-200">“Spotless, cozy, and the location was perfect. Check-in was a breeze.”</p>
<p className="text-xs text-slate-500 mt-1">— Jamie, June 2025</p>
</div>
<div className="rounded-lg bg-slate-50 dark:bg-slate-900/50 p-3">
<p className="text-sm text-slate-700 dark:text-slate-200">“Exactly like the photos. Quiet building and great host.”</p>
<p className="text-xs text-slate-500 mt-1">— Priya, May 2025</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>House rules</h3>
<ul className="mt-2 text-sm text-slate-700 dark:text-slate-200 space-y-1">
<li>• No smoking</li>
<li>• No parties or events</li>
<li>• Quiet hours after 10pm</li>
</ul>
</div>
</div>

<aside className="lg:col-span-1">
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm sticky top-24">
<div className="flex items-end justify-between">
<div>
<p><span className="text-xl text-slate-900 dark:text-white" id="listingPrice" style={{fontFamily: '\'Open Sans\'', fontWeight: '600'}}>$150</span> <span className="text-sm text-slate-600 dark:text-slate-300">/ night</span></p>
<p className="text-xs text-slate-500">Includes taxes and fees estimate</p>
</div>
<div className="inline-flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i>
<span className="text-sm text-slate-700 dark:text-slate-300" id="listingRatingSide">4.9</span>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div>
<label className="text-xs text-slate-600 dark:text-slate-300">Check-in</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" id="listingCheckIn" type="date"/>
</div>
<div>
<label className="text-xs text-slate-600 dark:text-slate-300">Check-out</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" id="listingCheckOut" type="date"/>
</div>
<div className="col-span-2">
<label className="text-xs text-slate-600 dark:text-slate-300">Guests</label>
<div className="relative mt-1">
<select className="w-full appearance-none pl-3 pr-8 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" id="listingGuests">
<option>1 guest</option>
<option selected="">2 guests</option>
<option>3 guests</option>
<option>4 guests</option>
<option>5 guests</option>
</select>
<i className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 hover:bg-blue-600/90 text-white px-4 py-2.5 text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-950" id="reserveBtn">
<i className="w-4 h-4" data-lucide="calendar-plus"></i> Reserve
                  </button>
<div className="mt-4 border-t border-slate-200 dark:border-slate-800 pt-3 text-sm">
<div className="flex items-center justify-between">
<span>Nights</span>
<span id="listingNights">1</span>
</div>
<div className="flex items-center justify-between">
<span>Subtotal</span>
<span id="listingSubtotal">$150</span>
</div>
<div className="flex items-center justify-between">
<span>Fees &amp; taxes</span>
<span id="listingFees">$28</span>
</div>
<div className="mt-2 flex items-center justify-between text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\'', fontWeight: '600'}}>
<span>Total</span>
<span id="listingTotal">$178</span>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>
</section>

<section className="hidden" data-view="checkout" id="checkoutView">
<section className="py-6 sm:py-8 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<a className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white" href="#listing">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to listing
            </a>
<h2 className="mt-3 text-2xl sm:text-3xl tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Checkout</h2>

<div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
<div className="flex items-center gap-1">
<div className="h-6 w-6 rounded-full bg-blue-600 text-white grid place-items-center">1</div>
<span>Details</span>
</div>
<span className="text-slate-400">—</span>
<div className="flex items-center gap-1">
<div className="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 grid place-items-center">2</div>
<span>Payment</span>
</div>
<span className="text-slate-400">—</span>
<div className="flex items-center gap-1">
<div className="h-6 w-6 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 grid place-items-center">3</div>
<span>Confirm</span>
</div>
</div>
</div>
</section>
<section className="py-8 bg-white dark:bg-slate-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-3">
<div className="lg:col-span-2 space-y-6">

<div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\'', fontWeight: '600'}}>Contact information</h3>
<div className="mt-3 grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600 dark:text-slate-300">First name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" placeholder="Alex" type="text"/>
</div>
<div>
<label className="text-xs text-slate-600 dark:text-slate-300">Last name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" placeholder="Johnson" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-slate-600 dark:text-slate-300">Email</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" placeholder="you@email.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-slate-600 dark:text-slate-300">Phone</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" placeholder="+1 555 000 0000" type="tel"/>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
<h3 className="text-base tracking-tight text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\'', fontWeight: '600'}}>Payment</h3>
<div className="mt-3 grid gap-3">
<div>
<label className="text-xs text-slate-600 dark:text-slate-300">Card number</label>
<div className="relative mt-1">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="credit-card"></i>
<input className="w-full pl-10 pr-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" inputmode="numeric" placeholder="4242 4242 4242 4242" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-600 dark:text-slate-300">Expiry</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" placeholder="MM/YY" type="text"/>
</div>
<div>
<label className="text-xs text-slate-600 dark:text-slate-300">CVC</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" placeholder="CVC" type="text"/>
</div>
</div>
<div>
<label className="text-xs text-slate-600 dark:text-slate-300">Billing address</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/50 text-sm" placeholder="Street, City, ZIP" type="text"/>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="shield-check"></i>
<div className="text-sm text-slate-600 dark:text-slate-300">
                      By confirming, you agree to our Terms and acknowledge the House rules and Cancellation policy.
                    </div>
</div>
<button className="mt-4 inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-600/90 text-white px-4 py-2.5 text-sm shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:focus-visible:ring-offset-slate-950" id="confirmPayBtn">
<i className="w-4 h-4" data-lucide="lock"></i> Confirm and pay
                  </button>
<p className="hidden mt-3 text-sm text-emerald-600 inline-flex items-center gap-2" id="checkoutSuccess"><i className="w-4 h-4" data-lucide="check-circle"></i> Payment successful! Your trip is booked.</p>
</div>
</div>

<aside className="lg:col-span-1">
<div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm sticky top-24">
<div className="flex items-center gap-3">
<img alt="Stay" className="h-16 w-16 rounded-lg object-cover border border-slate-200 dark:border-slate-800" id="checkoutImage" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" />
<div>
<p className="text-sm text-slate-900 dark:text-white" id="checkoutTitle" style={{fontFamily: '\'Open Sans\'', fontWeight: '600'}}>Stay title</p>
<p className="text-xs text-slate-600 dark:text-slate-400" id="checkoutCity">City</p>
</div>
</img></div>
<div className="mt-3 text-sm space-y-1">
<div className="flex items-center justify-between">
<span>Check-in</span><span id="checkoutCheckIn">—</span>
</div>
<div className="flex items-center justify-between">
<span>Check-out</span><span id="checkoutCheckOut">—</span>
</div>
<div className="flex items-center justify-between">
<span>Guests</span><span id="checkoutGuests">—</span>
</div>
</div>
<div className="mt-4 border-t border-slate-200 dark:border-slate-800 pt-3 text-sm">
<div className="flex items-center justify-between">
<span id="checkoutNightsLabel">$0 × 0 nights</span>
<span id="checkoutSubtotal">$0</span>
</div>
<div className="flex items-center justify-between">
<span>Fees &amp; taxes</span>
<span id="checkoutFees">$0</span>
</div>
<div className="mt-2 flex items-center justify-between text-slate-900 dark:text-white" style={{fontFamily: '\'Open Sans\'', fontWeight: '600'}}>
<span>Total</span>
<span id="checkoutTotal">$0</span>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>
</section>
</main>

<footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div className="space-y-3 animate-fade-in" style={{animationDelay: '.05s'}}>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 grid place-items-center tracking-tight font-semibold shadow-sm ring-1 ring-slate-200 dark:ring-slate-800">
                AB
              </div>
<span className="text-base tracking-tight" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>ApartmentBook</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-300">Book apartments you’ll love—across cities worldwide.</p>
<div className="flex items-center gap-3 text-slate-500">
<a className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
<div className="animate-fade-in" style={{animationDelay: '.08s'}}>
<h4 className="text-sm tracking-tight text-slate-900 dark:text-white mb-3" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Discover</h4>
<ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#results">Cities</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#results">Collections</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#results">New this week</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#results">For work</a></li>
</ul>
</div>
<div className="animate-fade-in" style={{animationDelay: '.11s'}}>
<h4 className="text-sm tracking-tight text-slate-900 dark:text-white mb-3" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Hosting</h4>
<ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#">Become a host</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#">Community</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#">Guidelines</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#">Responsible hosting</a></li>
</ul>
</div>
<div className="animate-fade-in" style={{animationDelay: '.14s'}}>
<h4 className="text-sm tracking-tight text-slate-900 dark:text-white mb-3" style={{fontFamily: '\'Open Sans\', ui-sans-serif', fontWeight: '600'}}>Support</h4>
<ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#">Help Center</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#">Cancellation options</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#">Report a concern</a></li>
<li><a className="hover:text-slate-900 dark:hover:text-white" href="#">Contact us</a></li>
</ul></div></div></div></footer>
    </>
  );
}
