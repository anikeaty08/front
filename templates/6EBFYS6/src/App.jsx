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
      

<div className="min-h-screen">

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-zinc-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="flex items-center">
<span className="text-[18px] sm:text-[20px] tracking-tight font-semibold">BLAVITY</span>
</div>
<span className="h-5 w-px bg-zinc-200 hidden sm:block"></span>
<div className="hidden sm:flex items-center gap-2 text-zinc-600">
<span className="text-xs uppercase tracking-wide">Global</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6">
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#">News</a>
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#">Lifestyle</a>
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#">Culture</a>
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#">Video</a>
<a className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1.5 text-sm hover:bg-zinc-50 hover:border-zinc-300 transition" href="#">
<svg className="-ml-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                Search
              </a>
</nav>
<div className="md:hidden">
<button aria-label="Open menu" className="inline-flex items-center gap-2 rounded-md border border-zinc-200 px-3 py-1.5 text-sm hover:bg-zinc-50 hover:border-zinc-300 transition">
<svg className="-ml-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                Menu
              </button>
</div>
</div>
</div>
</header>

<section className="relative border-b border-zinc-200 bg-white">
<div className="max-w-7xl sm:px-6 lg:px-8 sm:py-8 relative mr-auto ml-auto pt-4 pr-4 pb-4 pl-4">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
<div className="flex items-center gap-3 sm:gap-5">
<div className="">
<div className="flex items-center gap-2 sm:gap-3 mb-1.5">
<h1 className="text-[20px] sm:text-[32px] tracking-tight font-semibold bg-gradient-to-r from-fuchsia-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">21Ninety</h1>
<span className="text-xs sm:text-sm text-zinc-500 font-normal">by</span>
<span className="text-sm sm:text-lg font-semibold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">BLAVITY</span>
</div>
<p className="text-xs sm:text-sm text-zinc-500 font-normal">Beauty • Wellness • Hair • Relationships • Horoscopes</p>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<a className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-200" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              Follow
            </a>
<a className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300 bg-fuchsia-50 text-fuchsia-700 px-3 py-2 text-xs sm:px-4 sm:py-2.5 sm:text-sm hover:bg-fuchsia-100 hover:border-fuchsia-400 hover:shadow-[0_10px_30px_-14px_rgba(217,70,239,0.25)] transition-all duration-200 font-normal" href="#newsletter">
              Subscribe
              <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<nav aria-label="21Ninety sections" className="sticky top-16 z-40 backdrop-blur-xl bg-zinc-50/90 sm:bg-white/80 border-b border-zinc-200">
<div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
<div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto py-0.5 sm:py-1.5">

<div className="sm:hidden inline-flex items-center gap-1 pr-1">
<span className="px-1.5 py-0.5 rounded-md bg-zinc-900 text-white text-[10px] uppercase tracking-wide">21N</span>
<span className="text-[10px] text-zinc-600">Sections</span>
<span className="h-5 w-px bg-zinc-200/80 ml-1"></span>
</div>
<a className="px-3 py-1.5 sm:px-4 sm:py-2.5 text-[13px] sm:text-sm rounded-lg sm:rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 sm:hover:bg-zinc-50 transition-all duration-200 font-normal whitespace-nowrap" href="#beauty">Beauty</a>
<a className="px-3 py-1.5 sm:px-4 sm:py-2.5 text-[13px] sm:text-sm rounded-lg sm:rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 sm:hover:bg-zinc-50 transition-all duration-200 font-normal whitespace-nowrap" href="#wellness">Fitness &amp; Wellness</a>
<a className="px-3 py-1.5 sm:px-4 sm:py-2.5 text-[13px] sm:text-sm rounded-lg sm:rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 sm:hover:bg-zinc-50 transition-all duration-200 font-normal whitespace-nowrap" href="#hair">Hair</a>
<a className="px-3 py-1.5 sm:px-4 sm:py-2.5 text-[13px] sm:text-sm rounded-lg sm:rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 sm:hover:bg-zinc-50 transition-all duration-200 font-normal whitespace-nowrap" href="#relationships">Relationships</a>
<a className="px-3 py-1.5 sm:px-4 sm:py-2.5 text-[13px] sm:text-sm rounded-lg sm:rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 sm:hover:bg-zinc-50 transition-all duration-200 font-normal whitespace-nowrap" href="#horoscopes">Horoscopes</a>
<a className="px-3 py-1.5 sm:px-4 sm:py-2.5 text-[13px] sm:text-sm rounded-lg sm:rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 sm:hover:bg-zinc-50 transition-all duration-200 font-normal whitespace-nowrap" href="#motherhood">Motherhood</a>
<a className="px-3 py-1.5 sm:px-4 sm:py-2.5 text-[13px] sm:text-sm rounded-lg sm:rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 sm:hover:bg-zinc-50 transition-all duration-200 font-normal whitespace-nowrap" href="#money">Career &amp; Money</a>
<div className="ml-auto hidden sm:flex items-center">
</div>
</div>
</div>
</nav>

<main className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-20 pl-4" id="overview">

<section className="mt-6">
<div className="relative overflow-hidden rounded-xl border border-zinc-">
<div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] text-zinc-800 ring-1 ring-zinc-200">
<span className="font-medium">21Ninety</span>
<span className="opacity-50">by</span>
<span className="font-medium">BLAVITY</span>
</div>
<h2 className="mt-2 text-white text-xl sm:text-2xl tracking-tight font-semibold drop-shadow">
                Beauty. Wellness. Hair. Relationships. For us, by us.
              </h2>
<p className="max-w-xl text-sm text-white/90">Aspirational storytelling and practical tips across mind, body, and soul.</p>
</div>
</div>
</section>

<section aria-label="Featured story" className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
<div className="rounded-2xl overflow-hidden ring-1 ring-slate-200/70">
<img alt="Portrait at an art opening" className="w-full h-full object-cover aspect-[16/10] md:aspect-[4/3]" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-5 md:space-y-6">
<p className="md:text-sm text-xs text-slate-600">Featured Story</p>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Revolutionary Art Exhibition Celebrates Black Excellence Across Generations
          </h1>
<p className="text-sm text-slate-600">
            By Maya Johnson • 5 min read
          </p>
<p className="text-slate-600 md:text-base text-sm">
            The groundbreaking exhibition at the Smithsonian showcases 400 years of Black artistic achievement, featuring works from emerging contemporary artists alongside historical masters.
          </p>
<div className="">
<a className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 text-sm font-medium shadow-sm hover:bg-slate-800 transition" href="#">
              Read Story
              <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</section>

<div className="mt-6">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-500">Advertisement</span>
<button aria-label="Why am I seeing this ad?" className="text-slate-500 hover:text-slate-700">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
<a className="block" href="#">
<div className="rounded-xl bg-slate-100/90 border border-slate-200 h-24 sm:h-28 md:h-32 w-full flex items-center justify-center">
<span className="text-slate-500 text-sm">Ad • Responsive</span>
</div>
</a>
</div>
</div>

<div className="lg:hidden mt-6" id="newsletter">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white">
<div className="flex items-center gap-2 mb-2">
<i className="h-5 w-5 text-slate-900" data-lucide="mail"></i>
<h3 className="text-lg font-medium tracking-tight">Subscribe to our newsletter</h3>
</div>
<p className="text-sm text-slate-600 mb-4">
            Fresh stories every week. No spam.
          </p>
<form className="space-y-3">
<div className="relative">
<input className="w-full rounded-xl border border-slate-300/80 focus:border-slate-900 focus:ring-0 bg-white px-4 py-3 text-sm placeholder:text-slate-400 outline-none" placeholder="you@example.com" type="email"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 text-sm font-medium hover:bg-slate-800 transition" type="submit">
              Subscribe
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<p className="text-[11px] text-slate-500">By subscribing, you agree to our terms and privacy policy.</p>
</form>
</div>
</div>

<div className="mt-6 grid lg:grid-cols-12 gap-6 md:gap-10">

<div className="lg:col-span-8">

<section className="mt-6">
<div className="flex items-center justify-between">
<div className="inline-flex items-center rounded-lg bg-zinc-50 border border-zinc-200 p-1">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="opt2-feed" type="radio"/>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="opt2-feed" type="radio"/>
</label>
</div>
<a className="inline-flex items-center gap-1 text-xs text-zinc-700 hover:text-zinc-900" href="#">
                View all
                <svg className="mt-px" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-4 flex gap-3 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible">

<a className="group relative rounded-xl border border-zinc-200 overflow-hidden min-w-[80%] snap-start sm:min-w-0 sm:col-span-2" href="#">
<img alt="Editorial tile" className="h-44 w-full object-cover sm:h-44 md:h-56" src="https://images.unsplash.com/photo-1551292831-023188e78222?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" id="aura-emepicix4"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[11px] text-zinc-800 ring-1 ring-zinc-200">
                    Horoscopes &amp; Affirmations
                  </div>
<div className="text-[15px] font-medium text-white tracking-tight mt-1">
                    Your week in the stars + a morning mantra
                  </div>
</div>
</a>

<a className="group rounded-xl border border-zinc-200 overflow-hidden min-w-[80%] snap-start hover:bg-zinc-50 transition sm:min-w-0" href="#">
<img alt="Beauty story" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1556228724-4c1b4e1b4de3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-rose-700">Beauty</div>
<div className="text-sm font-medium line-clamp-2">5 vitamin C serums that won’t pill under makeup</div>
</div>
</a>

<a className="group rounded-xl border border-zinc-200 overflow-hidden min-w-[80%] snap-start hover:bg-zinc-50 transition sm:min-w-0" href="#">
<img alt="Wellness story" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1510218830377-2e994ea9081f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-rose-700">Fitness &amp; Wellness</div>
<div className="text-sm font-medium line-clamp-2">Sunday reset rituals</div>
</div>
</a>
</div>
</section>

<div className="lg:hidden mt-6">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-500">Advertisement</span>
<button aria-label="Why am I seeing this ad?" className="text-slate-500 hover:text-slate-700">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
<a className="block" href="#">
<div className="rounded-xl bg-slate-100/90 border border-slate-200 aspect-[4/3] flex items-center justify-center">
<span className="text-slate-500 text-sm">Ad • 300 × 250</span>
</div>
</a>
</div>
</div>

<div className="hidden lg:block mt-6">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-500">Advertisement</span>
<button aria-label="Why am I seeing this ad?" className="text-slate-500 hover:text-slate-700">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
<a className="block" href="#">
<div className="rounded-xl bg-slate-100/90 border border-slate-200 h-24 w-full flex items-center justify-center">
<span className="text-slate-500 text-sm">Ad • 728 × 90</span>
</div>
</a>
</div>
</div>

<section className="mt-8" id="hair">
<div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-4 sm:p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Hair</h3>
<a className="text-xs text-zinc-700 hover:text-zinc-900 inline-flex items-center gap-1" href="#">
                  View all
                  <svg className="mt-px" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
<a className="group rounded-xl border border-zinc-200 overflow-hidden bg-white hover:-translate-y-0.5 hover:shadow-sm transition" href="#">
<img alt="Knotless braids" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-rose-700">Hair</div>
<div className="mt-1 text-sm font-medium line-clamp-2">Knotless braids that last (and protect)</div>
</div>
</a>
<a className="group rounded-xl border border-zinc-200 overflow-hidden bg-white hover:-translate-y-0.5 hover:shadow-sm transition" href="#">
<img alt="Wash day" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1556229151-5d12da2a2e96?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-rose-700">Hair</div>
<div className="mt-1 text-sm font-medium line-clamp-2">Wash day products that won’t strip</div>
</div>
</a>
<a className="group rounded-xl border border-zinc-200 overflow-hidden bg-white hover:-translate-y-0.5 hover:shadow-sm transition" href="#">
<img alt="Night routine" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1513377889188-2f02c9727629?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-rose-700">Hair</div>
<div className="mt-1 text-sm font-medium line-clamp-2">Nighttime satin routines that work</div>
</div>
</a>
</div>
</div>
</section>

<section className="mt-8" id="wellness">
<div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50/60 to-white p-4 sm:p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Fitness &amp; Wellness</h3>
<a className="text-xs text-zinc-700 hover:text-zinc-900 inline-flex items-center gap-1" href="#">
                  View all
                  <svg className="mt-px" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
<a className="group rounded-xl border border-emerald-200 overflow-hidden bg-white hover:shadow-sm hover:-translate-y-0.5 transition" href="#">
<img alt="Breathwork" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-emerald-700">Fitness &amp; Wellness</div>
<div className="mt-1 text-sm font-medium line-clamp-2">Breathwork basics for busy mornings</div>
</div>
</a>
<a className="group rounded-xl border border-emerald-200 overflow-hidden bg-emerald-50/50 hover:bg-emerald-50 transition" href="#">
<img alt="Stretch flow" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1510218830377-2e994ea9081f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-emerald-700">Fitness &amp; Wellness</div>
<div className="mt-1 text-sm font-medium line-clamp-2">Sunday reset rituals</div>
</div>
</a>
<a className="group rounded-xl border border-emerald-200 overflow-hidden bg-white hover:shadow-sm hover:-translate-y-0.5 transition" href="#">
<img alt="Mindful walk" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-emerald-700">Fitness &amp; Wellness</div>
<div className="mt-1 text-sm font-medium line-clamp-2">Mindful walks to clear your head</div>
</div>
</a>
</div>
</div>
</section>

<section className="mt-8" id="relationships">
<div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 sm:p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Relationships</h3>
<a className="text-xs text-rose-700 hover:text-rose-800 inline-flex items-center gap-1" href="#">
                  View all
                  <svg className="mt-px" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
<a className="group rounded-xl bg-white border border-rose-200 overflow-hidden hover:shadow-sm transition" href="#">
<img alt="Support" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-rose-700">Relationships</div>
<div className="mt-1 text-sm font-medium line-clamp-2">How to ask for support without guilt</div>
</div>
</a>
<a className="group rounded-xl bg-white border border-rose-200 overflow-hidden hover:shadow-sm transition" href="#">
<img alt="Boundaries" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-rose-700">Relationships</div>
<div className="mt-1 text-sm font-medium line-clamp-2">Boundaries that protect your peace</div>
</div>
</a>
<a className="group rounded-xl bg-white border border-rose-200 overflow-hidden hover:shadow-sm transition" href="#">
<img alt="Community" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="text-[11px] text-rose-700">Relationships</div>
<div className="mt-1 text-sm font-medium line-clamp-2">Cultivating community IRL</div>
</div>
</a>
</div>
</div>
</section>

<div className="lg:hidden mt-6">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-500">Advertisement</span>
<button aria-label="Why am I seeing this ad?" className="text-slate-500 hover:text-slate-700">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
<a className="block" href="#">
<div className="rounded-xl bg-slate-100/90 border border-slate-200 h-16 flex items-center justify-center">
<span className="text-slate-500 text-sm">Ad • 320 × 100</span>
</div>
</a>
</div>
</div>

<div className="lg:hidden mt-6">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-900" data-lucide="flame"></i>
<h3 className="text-lg font-medium tracking-tight">Trending now</h3>
</div>
<a className="text-xs text-slate-600 hover:text-slate-900" href="#">View all</a>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">1</div>
<a className="flex items-center gap-3 group flex-1" href="#">
<img alt="Story thumbnail 1" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                        Why Craft Matters in a World of AI
                      </p>
<span className="text-xs text-slate-500">3 min read</span>
</div>
</a>
</li>
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">2</div>
<a className="flex items-center gap-3 group flex-1" href="#">
<img alt="Story thumbnail 2" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                        A New Era of Remote Studios
                      </p>
<span className="text-xs text-slate-500">4 min read</span>
</div>
</a>
</li>
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">3</div>
<a className="flex items-center gap-3 group flex-1" href="#">
<img alt="Story thumbnail 3" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                        Designing for Calm Technology
                      </p>
<span className="text-xs text-slate-500">5 min read</span>
</div>
</a>
</li>
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">4</div>
<a className="flex items-center gap-3 group- flex-1" href="#">
<img alt="Story thumbnail 4" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                        The Return of Printed Matter
                      </p>
<span className="text-xs text-slate-500">2 min read</span>
</div>
</a>
</li>
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">5</div>
<a className="flex items-center gap-3 group flex-1" href="#">
<img alt="Story thumbnail 5" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                        Crafting Delightful Dev Tools
                      </p>
<span className="text-xs text-slate-500">6 min read</span>
</div>
</a>
</li>
</ul>
</div>
</div>

</div>

<aside className="lg:col-span-4 space-y-6 hidden lg:block">
<div className="flex lg:block gap-4 overflow-x-auto snap-x lg:overflow-visible lg:snap-none [-webkit-overflow-scrolling:touch] pb-1">

<div className="min-w-[280px] lg:min-w-0 snap-start w-full">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white lg:sticky lg:top-24">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-500">Advertisement</span>
<button aria-label="Why am I seeing this ad?" className="text-slate-500 hover:text-slate-700">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
<a className="block" href="#">
<div className="rounded-xl bg-slate-100/90 border border-slate-200 aspect-[4/3] flex items-center justify-center">
<span className="text-slate-500 text-sm">Ad • 300 × 250</span>
</div>
</a>
</div>
</div>

<div className="min-w-[280px] lg:min-w-0 snap-start w-full">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-500">Advertisement</span>
<button aria-label="Why am I seeing this ad?" className="text-slate-500 hover:text-slate-700">
<i className="h-4 w-4" data-lucide="info"></i>
</button>
</div>
<a className="block" href="#">
<div className="rounded-xl bg-slate-100/90 border border-slate-200 h-[600px] flex items-center justify-center">
<span className="text-slate-500 text-sm">Ad • 300 × 600</span>
</div>
</a>
</div>
</div>

<div className="min-w-[280px] lg:min-w-0 snap-start w-full">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white lg:sticky lg:top-[calc(24px+0.75rem)]">
<div className="flex items-center gap-2 mb-2">
<i className="h-5 w-5 text-slate-900" data-lucide="mail"></i>
<h3 className="text-lg font-medium tracking-tight">Subscribe to our newsletter</h3>
</div>
<p className="text-sm text-slate-600 mb-4">
                  Fresh stories every week. No spam.
                </p>
<form className="space-y-3">
<div className="relative">
<input className="w-full rounded-xl border border-slate-300/80 focus:border-slate-900 focus:ring-0 bg-white px-4 py-3 text-sm placeholder:text-slate-400 outline-none" placeholder="you@example.com" type="email"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 text-sm font-medium hover:bg-slate-800 transition" type="submit">
                    Subscribe
                    <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<p className="text-[11px] text-slate-500">By subscribing, you agree to our terms and privacy policy.</p>
</form>
</div>
</div>

<div className="min-w-[280px] lg:min-w-0 snap-start w-full">
<div className="rounded-2xl ring-1 ring-slate-200/70 p-5 bg-white lg:sticky lg:top-[calc(24px+0.75rem)] space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-900" data-lucide="flame"></i>
<h3 className="text-lg font-medium tracking-tight">Trending now</h3>
</div>
<a className="text-xs text-slate-600 hover:text-slate-900" href="#">View all</a>
</div>
<ul className="space-y-4">

<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">1</div>
<a className="flex items-center gap-3 group flex-1" href="#">
<img alt="Story thumbnail 1" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                          Why Craft Matters in a World of AI
                        </p>
<span className="text-xs text-slate-500">3 min read</span>
</div>
</a>
</li>
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">2</div>
<a className="flex items-center gap-3 group flex-1" href="#">
<img alt="Story thumbnail 2" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                          A New Era of Remote Studios
                        </p>
<span className="text-xs text-slate-500">4 min read</span>
</div>
</a>
</li>
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">3</div>
<a className="flex items-center gap-3 group flex-1" href="#">
<img alt="Story thumbnail 3" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                          Designing for Calm Technology
                        </p>
<span className="text-xs text-slate-500">5 min read</span>
</div>
</a>
</li>
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">4</div>
<a className="flex items-center gap-3 group- flex-1" href="#">
<img alt="Story thumbnail 4" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                          The Return of Printed Matter
                        </p>
<span className="text-xs text-slate-500">2 min read</span>
</div>
</a>
</li>
<li className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white text-xs flex items-center justify-center">5</div>
<a className="flex items-center gap-3 group flex-1" href="#">
<img alt="Story thumbnail 5" className="h-12 w-12 rounded-lg object-cover ring-1 ring-slate-200/70" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium leading-snug group-hover:text-slate-900 tracking-tight">
                          Crafting Delightful Dev Tools
                        </p>
<span className="text-xs text-slate-500">6 min read</span>
</div>
</a>
</li>
</ul>
</div>
</div>
</div>
</aside>
</div>
</main>

<footer className="border-t border-zinc-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight">BLAVITY</span>
<span className="text-zinc-400">•</span>
<span className="text-sm text-zinc-600">21Ninety Microsite (Option 2)</span>
</div>
<div className="text-xs text-zinc-500">Design intent only. Imagery is placeholder.</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
