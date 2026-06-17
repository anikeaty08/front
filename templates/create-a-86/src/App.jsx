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
      

<div className="mx-auto max-w-7xl px-4 py-6 lg:py-10">

<header className="mb-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div aria-label="App logo" className="h-9 w-9 rounded-md bg-blue-600 text-white flex items-center justify-center text-sm tracking-tight shadow-sm ring-1 ring-blue-500/50">BS</div>
<div>
<h1 className="text-xl md:text-2xl tracking-tight font-semibold text-slate-900">BlogShare — Mobile App Design</h1>
<p className="text-sm text-slate-500">High-fidelity mobile screens in light and dark modes with blue theming</p>
</div>
</div>
<div className="hidden md:flex items-center gap-2 text-sm">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md ring-1 ring-slate-200 bg-white text-slate-700">
<i className="h-4 w-4" data-lucide="smartphone"></i>
          Mobile first
        </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md ring-1 ring-slate-200 bg-white text-slate-700">
<i className="h-4 w-4" data-lucide="accessibility"></i>
          Accessible
        </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md ring-1 ring-slate-200 bg-white text-slate-700">
<i className="h-4 w-4" data-lucide="droplets"></i>
          Blue theme
        </span>
</div>
</header>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

<section aria-label="Light mode screens" className="space-y-5">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-blue-600"></div>
<h2 className="text-lg tracking-tight font-semibold text-slate-900">Light Mode</h2>
</div>
<div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">

<div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="relative w-full max-w-[380px] mx-auto aspect-[9/19.5] bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">

<div className="absolute top-0 inset-x-0 px-4 pt-3 flex items-center justify-between text-white/90 text-[12px]">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="wifi"></i>
<i className="h-3.5 w-3.5" data-lucide="signal"></i>
<i className="h-3.5 w-3.5" data-lucide="battery"></i>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-between pb-10 pt-16">
<div className="w-full flex flex-col items-center px-6 text-center">
<div className="h-12 w-12 rounded-xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center mb-4 backdrop-blur">
<span className="text-white text-lg tracking-tight">BS</span>
</div>
<h3 className="text-2xl tracking-tight font-semibold text-white">Welcome to BlogShare</h3>
<p className="text-white/80 text-sm mt-2 leading-relaxed">Discover, read, and share insightful articles across technology, design, travel, and more — no login required.</p>
</div>
<div className="w-full px-6">
<div className="relative h-40 w-full rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-lg">
<img alt="Abstract blue 3D render" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
</div>
</div>
<div className="w-full px-6">
<button aria-label="Get Started" className="w-full h-12 min-h-[44px] rounded-xl bg-white text-blue-700 font-medium hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/80 focus-visible:ring-offset-blue-700 transition shadow-sm">
                    Get Started
                  </button>
<p className="text-[12px] text-white/70 text-center mt-3">By continuing, you agree to our community guidelines.</p>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200">
<p className="text-[13px] text-slate-600">
                Onboarding: Blue gradient establishes theme; single action reduces friction. Button meets 44px touch target.
              </p>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="relative w-full max-w-[380px] mx-auto aspect-[9/19.5] bg-white">

<div className="absolute top-0 inset-x-0 px-4 pt-3 flex items-center justify-between text-slate-600 text-[12px]">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="wifi"></i>
<i className="h-3.5 w-3.5" data-lucide="signal"></i>
<i className="h-3.5 w-3.5" data-lucide="battery"></i>
</div>
</div>

<div className="absolute top-6 inset-x-0 px-4 pt-4">
<div className="flex items-center gap-3">
<label className="flex-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input aria-label="Search articles" className="w-full h-11 min-h-[44px] pl-9 pr-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500/60 focus:outline-none bg-white placeholder:text-slate-400 text-slate-900" placeholder="Search articles" type="text"/>
</label>
<button aria-label="Open settings" className="h-11 w-11 min-w-[44px] min-h-[44px] rounded-xl ring-1 ring-slate-200 hover:bg-slate-50 text-slate-700 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
</div>
</div>

<div className="absolute inset-x-0 top-[96px] bottom-[76px] overflow-y-auto px-4 pb-4">

<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-2">
<span className="text-sm text-slate-500">Filter by date</span>
<div className="relative">
<button aria-expanded="true" aria-haspopup="listbox" className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-200 hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-4 w-4" data-lucide="calendar"></i>
                        Past month
                        <i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>

<div className="absolute z-10 mt-2 w-44 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden" role="listbox">
<button className="w-full text-left px-3 py-2.5 hover:bg-blue-50 text-slate-700" role="option">Any time</button>
<button className="w-full text-left px-3 py-2.5 hover:bg-blue-50 text-slate-700" role="option">Past week</button>
<button aria-selected="true" className="w-full text-left px-3 py-2.5 bg-blue-50 text-blue-700" role="option">Past month</button>
<button className="w-full text-left px-3 py-2.5 hover:bg-blue-50 text-slate-700" role="option">Past year</button>
</div>
</div>
</div>
<div className="flex items-center gap-2 text-[12px] text-slate-500">
<i className="h-4 w-4 animate-spin" data-lucide="loader-2"></i>
                    Loading ...
                  </div>
</div>

<article className="mb-4 overflow-hidden rounded-2xl ring-1 ring-slate-200">
<div className="relative h-40 w-full">
<img alt="Developer workspace with laptop" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] ring-1 ring-blue-500/60">Featured</span>
<h3 className="mt-2 text-white tracking-tight font-semibold leading-snug">Unveiling the Future of TypeScript in 2025</h3>
<p className="text-white/80 text-[12px]">Nov 2, 2025 · 5 min read</p>
</div>
</div>
</article>

<div className="space-y-3">

<article className="relative rounded-2xl ring-1 ring-slate-200 p-3 bg-white hover:bg-slate-50 transition">
<div className="flex gap-3">
<img alt="Stylized blue AI brain illustration" className="h-20 w-24 rounded-xl object-cover" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=1987&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<h4 className="text-[15px] tracking-tight font-semibold text-slate-900 line-clamp-2">How AI Assistants Change Daily Workflows</h4>
<button aria-label="Open card menu" className="h-9 w-9 min-h-[36px] min-w-[36px] rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-[13px] text-slate-600 mt-1 line-clamp-2">From drafting emails to planning, see how assistants streamline tasks without replacing your voice.</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[12px] text-slate-500">Nov 3, 2025</span>
<div className="flex items-center gap-3 text-[12px] text-slate-500">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="eye"></i>2.1k</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i>340</span>
</div>
</div>
</div>
</div>

<div className="absolute right-3 top-12 z-10 w-48 rounded-xl bg-white ring-1 ring-slate-200 shadow-sm overflow-hidden">
<button className="w-full text-left px-3 py-2.5 hover:bg-blue-50 text-slate-700 inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="star"></i>Add to Favorites</button>
<button className="w-full text-left px-3 py-2.5 hover:bg-blue-50 text-slate-700 inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="share-2"></i>Share to Friends</button>
</div>
</article>

<article className="rounded-2xl ring-1 ring-slate-200 p-3 bg-white hover:bg-slate-50 transition">
<div className="flex gap-3">
<img alt="Blue toned workspace" className="h-20 w-24 rounded-xl object-cover" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<h4 className="text-[15px] tracking-tight font-semibold text-slate-900 line-clamp-2">Design Systems: Balancing Consistency with Creativity</h4>
<button aria-label="Open card menu" className="h-9 w-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-[13px] text-slate-600 mt-1 line-clamp-2">A practical approach to scale design while leaving room for experimentation.</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[12px] text-slate-500">Oct 28, 2025</span>
<div className="flex items-center gap-3 text-[12px] text-slate-500">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="eye"></i>1.4k</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i>182</span>
</div>
</div>
</div>
</div>
</article>

<article className="rounded-2xl ring-1 ring-slate-200 p-3 bg-white hover:bg-slate-50 transition">
<div className="flex gap-3">
<img alt="Traveler looking at blue ocean" className="h-20 w-24 rounded-xl object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<h4 className="text-[15px] tracking-tight font-semibold text-slate-900 line-clamp-2">Travel Writing: Finding Stories Between Destinations</h4>
<button aria-label="Open card menu" className="h-9 w-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-[13px] text-slate-600 mt-1 line-clamp-2">Learn to capture moments that make journeys unforgettable.</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[12px] text-slate-500">Oct 20, 2025</span>
<div className="flex items-center gap-3 text-[12px] text-slate-500">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="eye"></i>980</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i>76</span>
</div>
</div>
</div>
</div>
</article>
</div>

<div className="mt-4 space-y-2">
<div className="h-4 w-28 bg-slate-100 rounded animate-pulse"></div>
<div className="flex gap-3">
<div className="h-20 w-24 bg-slate-100 rounded-xl animate-pulse"></div>
<div className="flex-1 space-y-2">
<div className="h-4 w-3/4 bg-slate-100 rounded animate-pulse"></div>
<div className="h-3 w-full bg-slate-100 rounded animate-pulse"></div>
<div className="h-3 w-2/3 bg-slate-100 rounded animate-pulse"></div>
</div>
</div>
</div>
</div>

<nav className="absolute bottom-0 inset-x-0 h-[76px] bg-white/90 backdrop-blur border-t border-slate-200 px-6">
<div className="grid grid-cols-3 h-full items-center">
<button aria-current="page" className="flex flex-col items-center gap-1 text-blue-700">
<i className="h-5 w-5" data-lucide="clock"></i>
<span className="text-xs font-medium">Recent</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="grid"></i>
<span className="text-xs">Category</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="star"></i>
<span className="text-xs">Favorite</span>
</button>
</div>
</nav>
</div>

<div className="p-4 border-t border-slate-200">
<ul className="text-[13px] text-slate-600 space-y-1.5">
<li>- Top bar: Search + Settings for quick access.</li>
<li>- Date filter: custom dropdown with clear states.</li>
<li>- Cards: 3-dot menu exposes favorite/share actions.</li>
<li>- Spotlight: most recent post with strong visual hierarchy.</li>
</ul>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="relative w-full max-w-[380px] mx-auto aspect-[9/19.5] bg-white">

<div className="absolute top-0 inset-x-0 px-4 pt-3 flex items-center justify-between text-slate-600 text-[12px]">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="wifi"></i>
<i className="h-3.5 w-3.5" data-lucide="signal"></i>
<i className="h-3.5 w-3.5" data-lucide="battery"></i>
</div>
</div>

<div className="absolute top-6 inset-x-0 px-4 pt-4">
<div className="flex items-center gap-3">
<label className="flex-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input aria-label="Search categories" className="w-full h-11 min-h-[44px] pl-9 pr-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500/60 focus:outline-none bg-white placeholder:text-slate-400 text-slate-900" placeholder="Search categories" type="text"/>
</label>
<button aria-label="Open settings" className="h-11 w-11 rounded-xl ring-1 ring-slate-200 hover:bg-slate-50 text-slate-700 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
</div>
</div>

<div className="absolute inset-x-0 top-[96px] bottom-[76px] overflow-y-auto px-4 pb-4">
<div className="grid grid-cols-2 gap-3">

<button className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:bg-blue-50 transition p-3 text-left">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="code-2"></i>
</div>
<div>
<p className="text-[13px] text-slate-500">Category</p>
<h4 className="tracking-tight font-semibold text-slate-900">Technology</h4>
</div>
</div>
<img alt="Technology category" className="absolute right-0 bottom-0 h-16 w-24 object-cover opacity-30 rounded-tl-xl hidden sm:block" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:bg-blue-50 transition p-3 text-left">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="palette"></i>
</div>
<div>
<p className="text-[13px] text-slate-500">Category</p>
<h4 className="tracking-tight font-semibold text-slate-900">Design</h4>
</div>
</div>
<img alt="Design category" className="absolute right-0 bottom-0 h-16 w-24 object-cover opacity-30 rounded-tl-xl hidden sm:block" src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:bg-blue-50 transition p-3 text-left">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="plane"></i>
</div>
<div>
<p className="text-[13px] text-slate-500">Category</p>
<h4 className="tracking-tight font-semibold text-slate-900">Travel</h4>
</div>
</div>
<img alt="Travel category" className="absolute right-0 bottom-0 h-16 w-24 object-cover opacity-30 rounded-tl-xl hidden sm:block" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:bg-blue-50 transition p-3 text-left">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="check-square"></i>
</div>
<div>
<p className="text-[13px] text-slate-500">Category</p>
<h4 className="tracking-tight font-semibold text-slate-900">Productivity</h4>
</div>
</div>
<img alt="Productivity category" className="absolute right-0 bottom-0 h-16 w-24 object-cover opacity-30 rounded-tl-xl hidden sm:block" src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:bg-blue-50 transition p-3 text-left">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="heart-pulse"></i>
</div>
<div>
<p className="text-[13px] text-slate-500">Category</p>
<h4 className="tracking-tight font-semibold text-slate-900">Health</h4>
</div>
</div>
<img alt="Health category" className="absolute right-0 bottom-0 h-16 w-24 object-cover opacity-30 rounded-tl-xl hidden sm:block" src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&amp;w=1940&amp;auto=format&amp;fit=crop"/>
</button>
<button className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-white hover:bg-blue-50 transition p-3 text-left">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center ring-1 ring-blue-200">
<i className="h-5 w-5" data-lucide="book-open"></i>
</div>
<div>
<p className="text-[13px] text-slate-500">Category</p>
<h4 className="tracking-tight font-semibold text-slate-900">Culture</h4>
</div>
</div>
<img alt="Culture category" className="absolute right-0 bottom-0 h-16 w-24 object-cover opacity-30 rounded-tl-xl hidden sm:block" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</div>

<nav className="absolute bottom-0 inset-x-0 h-[76px] bg-white/90 backdrop-blur border-t border-slate-200 px-6">
<div className="grid grid-cols-3 h-full items-center">
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="clock"></i>
<span className="text-xs">Recent</span>
</button>
<button aria-current="page" className="flex flex-col items-center gap-1 text-blue-700">
<i className="h-5 w-5" data-lucide="grid"></i>
<span className="text-xs font-medium">Category</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="star"></i>
<span className="text-xs">Favorite</span>
</button>
</div>
</nav>
</div>

<div className="p-4 border-t border-slate-200">
<p className="text-[13px] text-slate-600">
                Category grid uses icons + imagery for recognition; tap navigates to a filtered list.
              </p>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="relative w-full max-w-[380px] mx-auto aspect-[9/19.5] bg-white">

<div className="absolute top-0 inset-x-0 px-4 pt-3 flex items-center justify-between text-slate-600 text-[12px]">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="wifi"></i>
<i className="h-3.5 w-3.5" data-lucide="signal"></i>
<i className="h-3.5 w-3.5" data-lucide="battery"></i>
</div>
</div>

<div className="absolute top-6 inset-x-0 px-4 pt-4">
<div className="flex items-center gap-3">
<label className="flex-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input aria-label="Search favorites" className="w-full h-11 min-h-[44px] pl-9 pr-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500/60 focus:outline-none bg-white placeholder:text-slate-400 text-slate-900" placeholder="Search favorites" type="text"/>
</label>
<button aria-label="Open settings" className="h-11 w-11 rounded-xl ring-1 ring-slate-200 hover:bg-slate-50 text-slate-700 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
</div>
</div>

<div className="absolute inset-x-0 top-[96px] bottom-[76px] overflow-y-auto px-4 pb-4">
<div className="flex items-center justify-between py-3">
<h3 className="tracking-tight font-semibold text-slate-900">Your Favorites</h3>
<span className="text-[12px] text-slate-500">2 saved</span>
</div>

<article className="rounded-2xl ring-1 ring-slate-200 p-3 bg-white hover:bg-slate-50 transition mb-3">
<div className="flex gap-3">
<img alt="Coffee and notebook" className="h-20 w-24 rounded-xl object-cover" src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<h4 className="text-[15px] tracking-tight font-semibold text-slate-900 line-clamp-2">Morning Routines of Highly Effective Creators</h4>
<button aria-label="Open card menu" className="h-9 w-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-[13px] text-slate-600 mt-1 line-clamp-2">Simple habits to spark momentum and keep you in flow.</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[12px] text-slate-500">Oct 10, 2025</span>
<div className="flex items-center gap-3 text-[12px] text-slate-500">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="eye"></i>1.1k</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i>210</span>
</div>
</div>
</div>
</div>
</article>
<article className="rounded-2xl ring-1 ring-slate-200 p-3 bg-white hover:bg-slate-50 transition">
<div className="flex gap-3">
<img alt="Blue neon keyboard" className="h-20 w-24 rounded-xl object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<h4 className="text-[15px] tracking-tight font-semibold text-slate-900 line-clamp-2">Keyboard Shortcuts to Cut Editing Time in Half</h4>
<button aria-label="Open card menu" className="h-9 w-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-[13px] text-slate-600 mt-1 line-clamp-2">A quick-start guide for creators and developers.</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[12px] text-slate-500">Sep 21, 2025</span>
<div className="flex items-center gap-3 text-[12px] text-slate-500">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="eye"></i>3.2k</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i>540</span>
</div>
</div>
</div>
</div>
</article>

<div className="my-4 border-t border-slate-200"></div>

<div className="rounded-2xl ring-1 ring-slate-200 p-4 bg-blue-50/50">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-xl bg-white text-blue-700 ring-1 ring-blue-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="star"></i>
</div>
<div>
<h5 className="tracking-tight font-semibold text-slate-900">No favorites yet</h5>
<p className="text-[13px] text-slate-600">Tap the star from any article’s menu to save it here.</p>
</div>
</div>
</div>
</div>

<nav className="absolute bottom-0 inset-x-0 h-[76px] bg-white/90 backdrop-blur border-t border-slate-200 px-6">
<div className="grid grid-cols-3 h-full items-center">
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="clock"></i>
<span className="text-xs">Recent</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="grid"></i>
<span className="text-xs">Category</span>
</button>
<button aria-current="page" className="flex flex-col items-center gap-1 text-blue-700">
<i className="h-5 w-5" data-lucide="star"></i>
<span className="text-xs font-medium">Favorite</span>
</button>
</div>
</nav>
</div>

<div className="p-4 border-t border-slate-200">
<p className="text-[13px] text-slate-600">
                Favorites mirrors the home card pattern; includes an accessible empty state for first-time users.
              </p>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="relative w-full max-w-[380px] mx-auto aspect-[9/19.5] bg-white">

<div className="absolute top-0 inset-x-0 px-4 pt-3 flex items-center justify-between text-slate-600 text-[12px]">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="wifi"></i>
<i className="h-3.5 w-3.5" data-lucide="signal"></i>
<i className="h-3.5 w-3.5" data-lucide="battery"></i>
</div>
</div>

<div className="absolute top-6 inset-x-0 px-4 pt-4">
<div className="flex items-center gap-3">
<label className="flex-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input aria-label="Search Technology" className="w-full h-11 min-h-[44px] pl-9 pr-3 rounded-xl ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500/60 focus:outline-none bg-white placeholder:text-slate-400 text-slate-900" type="text" value="Technology"/>
</label>
<button aria-label="Open settings" className="h-11 w-11 rounded-xl ring-1 ring-slate-200 hover:bg-slate-50 text-slate-700 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
</div>
</div>

<div className="absolute inset-x-0 top-[96px] bottom-[76px] overflow-y-auto px-4 pb-4">
<div className="py-3 flex items-center gap-2">
<span className="inline-flex items-center gap-2 px-3 h-9 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200">
<i className="h-4 w-4" data-lucide="code-2"></i> Technology
                  </span>
<span className="text-[12px] text-slate-500">12 articles</span>
</div>

<article className="rounded-2xl ring-1 ring-slate-200 p-3 bg-white hover:bg-slate-50 transition mb-3">
<div className="flex gap-3">
<img alt="Blue code on screen" className="h-20 w-24 rounded-xl object-cover" src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<h4 className="text-[15px] tracking-tight font-semibold text-slate-900 line-clamp-2">Edge Computing: Bringing Intelligence Closer</h4>
<button aria-label="Open card menu" className="h-9 w-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-[13px] text-slate-600 mt-1 line-clamp-2">Latency, privacy, and new UX patterns powered by the edge.</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[12px] text-slate-500">Oct 29, 2025</span>
<div className="flex items-center gap-3 text-[12px] text-slate-500">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="eye"></i>1.8k</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i>210</span>
</div>
</div>
</div>
</div>
</article>
<article className="rounded-2xl ring-1 ring-slate-200 p-3 bg-white hover:bg-slate-50 transition">
<div className="flex gap-3">
<img alt="Circuit board close up" className="h-20 w-24 rounded-xl object-cover" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1956&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<h4 className="text-[15px] tracking-tight font-semibold text-slate-900 line-clamp-2">The State of WebAssembly for Frontend Engineers</h4>
<button aria-label="Open card menu" className="h-9 w-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-[13px] text-slate-600 mt-1 line-clamp-2">What’s possible today and where performance wins matter most.</p>
<div className="mt-2 flex items-center justify-between">
<span className="text-[12px] text-slate-500">Oct 14, 2025</span>
<div className="flex items-center gap-3 text-[12px] text-slate-500">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="eye"></i>1.2k</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i>103</span>
</div>
</div>
</div>
</div>
</article>
</div>

<nav className="absolute bottom-0 inset-x-0 h-[76px] bg-white/90 backdrop-blur border-t border-slate-200 px-6">
<div className="grid grid-cols-3 h-full items-center">
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="clock"></i>
<span className="text-xs">Recent</span>
</button>
<button aria-current="page" className="flex flex-col items-center gap-1 text-blue-700">
<i className="h-5 w-5" data-lucide="grid"></i>
<span className="text-xs font-medium">Category</span>
</button>
<button className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-700">
<i className="h-5 w-5" data-lucide="star"></i>
<span className="text-xs">Favorite</span>
</button>
</div>
</nav>
</div>

<div className="p-4 border-t border-slate-200">
<p className="text-[13px] text-slate-600">
                Filtered list inherits card pattern; category chip communicates active filter and count.
              </p>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="relative w-full max-w-[380px] mx-auto aspect-[9/19.5] bg-white">

<div className="absolute top-0 inset-x-0 px-4 pt-3 flex items-center justify-between text-slate-600 text-[12px]">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="wifi"></i>
<i className="h-3.5 w-3.5" data-lucide="signal"></i>
<i className="h-3.5 w-3.5" data-lucide="battery"></i>
</div>
</div>

<header className="absolute top-6 inset-x-0 px-2 pt-2">
<div className="mx-2 h-12 min-h-[44px] rounded-xl ring-1 ring-slate-200 bg-white flex items-center justify-between px-1">
<button aria-label="Go back" className="h-10 w-10 rounded-lg hover:bg-slate-50 flex items-center justify-center text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="arrow-left"></i>
</button>

<div className="flex items-center gap-1">
<button aria-label="Decrease font size" className="h-10 min-w-[44px] rounded-lg px-2 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">A-</button>
<div className="w-px h-5 bg-slate-200"></div>
<button aria-label="Increase font size" className="h-10 min-w-[44px] rounded-lg px-2 text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">A+</button>
</div>
<div className="flex items-center">
<button aria-label="Like" className="h-10 w-10 rounded-lg hover:bg-slate-50 flex items-center justify-center text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
<button aria-label="More actions" className="h-10 w-10 rounded-lg hover:bg-slate-50 flex items-center justify-center text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</header>

<main className="absolute inset-x-0 top-[108px] bottom-0 overflow-y-auto">
<img alt="Developer desk with code" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="px-4 pb-40">
<div className="mt-3">
<h1 className="text-[22px] md:text-2xl tracking-tight font-semibold text-slate-900">Unveiling the Future of TypeScript in 2025</h1>
<div className="mt-1 flex items-center gap-3 text-[12px] text-slate-500">
<span>Nov 2, 2025</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="eye"></i> 2.1k</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="heart"></i> 340</span>
</div>
</div>
<article className="prose prose-sm max-w-none text-slate-700 mt-3">
<p>TypeScript continues to evolve, focusing on ergonomics, performance, and strong developer tooling. In 2025, we expect deeper editor integration and faster type-checking pipelines powered by incremental builds and smarter caches.</p>
<p>On the framework side, expect first-class patterns for server components and edge runtimes, enabling apps to choose the right execution model per feature without sacrificing DX. Libraries are pushing for predictable escape hatches that keep types intact even across boundaries.</p>
<h3 className="text-base tracking-tight font-semibold text-slate-900 mt-5">Key Improvements</h3>
<ul className="list-disc pl-5">
<li>Faster project-wide type inference</li>
<li>Better interop with WebAssembly and data views</li>
<li>Toolkit APIs for editor-time refactors</li>
</ul>
<p className="mt-3">For teams, stricter configurations remain important, but the defaults are more ergonomic. Tooling provides actionable guidance instead of broad errors.</p>
</article>

<div className="mt-6">
<h4 className="tracking-tight font-semibold text-slate-900">Suggested Articles</h4>
<div className="mt-3 grid grid-cols-2 gap-3">
<a className="group block rounded-xl ring-1 ring-slate-200 overflow-hidden bg-white hover:bg-blue-50 transition" href="#">
<img alt="Code on blue screen" className="h-20 w-full object-cover" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="p-2">
<p className="text-[12px] text-slate-500">Technology</p>
<h5 className="text-[13px] tracking-tight font-semibold text-slate-900 line-clamp-2">Static Typing for Rapid Prototyping</h5>
</div>
</a>
<a className="group block rounded-xl ring-1 ring-slate-200 overflow-hidden bg-white hover:bg-blue-50 transition" href="#">
<img alt="Laptop with design sketches" className="h-20 w-full object-cover" src="https://images.unsplash.com/photo-1515734674582-29010bb37906?q=80&amp;w=1870&amp;auto=format&amp;fit=crop"/>
<div className="p-2">
<p className="text-[12px] text-slate-500">Design</p>
<h5 className="text-[13px] tracking-tight font-semibold text-slate-900 line-clamp-2">Design Tokens that Scale Across Platforms</h5>
</div>
</a>
</div>
</div>
</div>
</main>
</div>

<div className="p-4 border-t border-slate-200">
<ul className="text-[13px] text-slate-600 space-y-1.5">
<li>- Header tools: font size control, like, share/favorite menu.</li>
<li>- Clear hierarchy with hero, title, metadata, and readable body text.</li>
<li>- Suggested articles encourage continued engagement.</li>
</ul>
</div>
</div>
</div>
</section>

<section aria-label="Dark mode screens" className="dark space-y-5">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<h2 className="text-lg tracking-tight font-semibold text-slate-100">Dark Mode</h2>
</div>
<div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">

<div className="rounded-3xl border border-slate-800 bg-slate-950 shadow-sm overflow-hidden">
<div className="relative w-full max-w-[380px] mx-auto aspect-[9/19.5] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700">

<div className="absolute top-0 inset-x-0 px-4 pt-3 flex items-center justify-between text-slate-200 text-[12px]">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="wifi"></i>
<i className="h-3.5 w-3.5" data-lucide="signal"></i>
<i className="h-3.5 w-3.5" data-lucide="battery"></i>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-between pb-10 pt-16">
<div className="w-full flex flex-col items-center px-6 text-center">
<div className="h-12 w-12 rounded-xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center mb-4 backdrop-blur">
<span className="text-white text-lg tracking-tight">BS</span>
</div>
<h3 className="text-2xl tracking-tight font-semibold text-white">Welcome to BlogShare</h3>
<p className="text-white/80 text-sm mt-2 leading-relaxed">Discover, read, and share insightful articles — no login required.</p>
</div>
<div className="w-full px-6">
<div className="relative h-40 w-full rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-lg">
<img alt="Abstract blue 3D render" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
</div>
</div>
<div className="w-full px-6">
<button aria-label="Get Started" className="w-full h-12 min-h-[44px] rounded-xl bg-blue-500 text-white font-medium hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300 focus-visible:ring-offset-blue-900 transition shadow-sm">
                    Get Started
                  </button>
<p className="text-[12px] text-slate-300 text-center mt-3">By continuing, you agree to our community guidelines.</p>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-800 bg-slate-950">
<p className="text-[13px] text-slate-300">
                Dark onboarding maintains contrast and preserves the blue brand.
              </p>
</div>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-950 shadow-sm overflow-hidden">
<div className="relative w-full max-w-[380px] mx-auto aspect-[9/19.5] bg-slate-950">

<div className="absolute top-0 inset-x-0 px-4 pt-3 flex items-center justify-between text-slate-300 text-[12px]">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="wifi"></i>
<i className="h-3.5 w-3.5" data-lucide="signal"></i>
<i className="h-3.5 w-3.5" data-lucide="battery"></i>
</div>
</div>

<div className="absolute top-6 inset-x-0 px-4 pt-4">
<div className="flex items-center gap-3">
<label className="flex-1 relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" data-lucide="search"></i>
<input aria-label="Search articles" className="w-full h-11 min-h-[44px] pl-9 pr-3 rounded-xl ring-1 ring-slate-800 focus:ring-2 focus:ring-blue-500/60 focus:outline-none bg-slate-900 placeholder:text-slate-500 text-slate-100" placeholder="Search articles" type="text"/>
</label>
<button aria-label="Open settings" className="h-11 w-11 rounded-xl ring-1 ring-slate-800 hover:bg-slate-900 text-slate-100 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
<i className="h-5 w-5" data-lucide="settings"></i>
</button>
</div>
</div>

<div className="absolute inset-x-0 top-[96px] bottom-[76px] overflow-y-auto px-4 pb-4">

<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-2">
<span className="text-sm text-slate-400">Filter by date</span>
<div className="relative">
<button aria-expanded="true" aria-haspopup="listbox" className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-blue-900/40 text-blue-300 ring-1 ring-blue-800 hover:bg-blue-900/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60">
<i className="h-4 w-4" data-lucide="calendar"></i>
                        Past month
                        <i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>

<div className="absolute z-10 mt-2 w-44 rounded-xl bg-slate-900 ring-1 ring-slate-800 shadow-sm overflow-hidden" role="listbox">
<button className="w-full text-left px-3 py-2.5 hover:bg-slate-800 text-slate-200" role="option">Any time</button>
<button className="w-full text-left px-3 py-2.5 hover:bg-slate-800 text-slate-200" role="option">Past week</button>
<button aria-selected="true" className="w-full text-left px-3 py-2.5 bg-slate-800 text-blue-300" role="option">Past month</button>
<button className="w-full text-left px-3 py-2.5 hover:bg-slate-800 text-slate-200" role="option">Past year</button>
</div>
</div>
</div>
<div className="flex items-center gap-2 text-[12px] text-slate-400">
<i className="h-4 w-4 animate-spin" data-lucide="loader-2"></i>
                    Loading ...
                  </div>
</div>

<article className="mb-4 overflow-hidden rounded-2xl ring-1 ring-slate-800 bg-slate-900">
<div className="relative h-40 w-full">
<img alt="Developer workspace with laptop" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-600 text-white text-[11px] ring-1 ring-blue-500/60">Featured</span>
<h3 className="mt-2 text-slate-50 tracking-tight font-semibold leading-snug">Unveiling the Future of TypeScript in 2025</h3>
<p className="text-slate-300 text-[12px]">Nov 2, 2025 · 5 min read</p>
</div>
</div>
</article>

<article className="relative rounded-2xl ring-1 ring-slate-800 p-3 bg-slate-900 hover:bg-slate-800 transition mb-3">
<div className="flex gap-3">
<img alt="Stylized blue AI brain illustration" className="h-20 w-24 rounded-xl object-cover" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=1987&amp;auto=format&amp;fit=crop"/>
<div className="flex-1"></div></div></article></div></div></div></div></section></div></div>
    </>
  );
}
