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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    const searchInput = document.getElementById('country-search');
    const cards = Array.from(document.querySelectorAll('.country-card'));
    const tabs = Array.from(document.querySelectorAll('.region-tab'));
    const noResults = document.getElementById('no-results');
    let activeRegion = 'All';

    function filterCards() {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach(card => {
        const name = (card.dataset.name || '').toLowerCase();
        const region = card.dataset.region || '';
        const matchesQuery = name.includes(query);
        const matchesRegion = activeRegion === 'All' || region
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
      
<a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-2xl focus:bg-white focus:px-4 focus:py-3 focus:text-base focus:shadow-lg" href="#destination-list">Skip to destination list</a>
<header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<a className="text-lg font-medium tracking-tight text-slate-950" href="https://helloroam.com">HR</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-normal text-slate-600 transition hover:text-slate-950" href="#travel-hub">Travel</a>
<a className="text-sm font-normal text-slate-600 transition hover:text-slate-950" href="#country-hub">Country Hub</a>
<a className="text-sm font-normal text-slate-600 transition hover:text-slate-950" href="/all-plans">Plans</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-normal text-slate-700 transition hover:border-slate-300 hover:text-slate-950 sm:inline-flex" href="/travel">Browse Guides</a>
<a className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-normal text-white transition hover:bg-slate-800" href="/all-plans">Browse eSIM Plans</a>
</div>
</div>
</header>
<main className="w-full">
<section className="border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_58%)]" id="travel-hub">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
<div className="grid items-start gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:gap-10">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-normal text-sky-900">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
              HelloRoam Travel Discovery
            </div>
<h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight text-slate-950 sm:text-5xl">
              Travel guides, country hubs, and eSIM plans for 175+ destinations
            </h1>
<p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Discover where to go, when to visit, what it costs, how to stay safe, and which mobile plan to use. Every destination page brings trip planning and connectivity together in one place.
            </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-normal text-white transition hover:bg-emerald-700" href="/all-plans">
                Find eSIM plans
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-normal text-slate-700 transition hover:border-slate-300 hover:text-slate-950" href="#destination-list">
                Explore destinations
              </a>
</div>
<div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="globe-2"></i>175+ countries</span>
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="languages"></i>63 languages</span>
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="signal"></i>200+ networks</span>
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="badge-dollar-sign"></i>Plans from $2/day</span>
</div>
</div>
<div className="relative">
<div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_1rem_3rem_rgba(15,23,42,0.08)] sm:p-5">
<div className="rounded-[1.5rem] bg-slate-50 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-normal uppercase tracking-[0.12em] text-slate-500">Trip overview</p>
<p className="mt-2 text-lg font-medium tracking-tight text-slate-950">One app for travel planning + mobile data</p>
</div>
<div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
<i className="h-5 w-5" data-lucide="smartphone"></i>
</div>
</div>
<div className="mt-5 grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl bg-white p-4">
<p className="text-xs font-normal uppercase tracking-[0.12em] text-slate-500">Featured guide</p>
<p className="mt-2 text-base font-medium text-slate-950">Japan Travel &amp; eSIM Guide</p>
<p className="mt-2 text-sm text-slate-600">Best time, itinerary, safety, budget, and local network coverage.</p>
</div>
<div className="rounded-2xl bg-white p-4">
<p className="text-xs font-normal uppercase tracking-[0.12em] text-slate-500">Best value plan</p>
<p className="mt-2 text-base font-medium text-slate-950">Japan from $4/day</p>
<p className="mt-2 text-sm text-slate-600">Fast setup for city travel, rail routes, and daily maps use.</p>
</div>
<div className="rounded-2xl bg-white p-4">
<p className="text-xs font-normal uppercase tracking-[0.12em] text-slate-500">Most searched</p>
<p className="mt-2 text-base font-medium text-slate-950">USA, France, Italy</p>
<p className="mt-2 text-sm text-slate-600">Popular picks for roaming comparisons and trip planning.</p>
</div>
<div className="rounded-2xl bg-slate-950 p-4 text-white">
<p className="text-xs font-normal uppercase tracking-[0.12em] text-slate-400">Coverage quality</p>
<p className="mt-2 text-3xl font-medium tracking-tight">82%</p>
<p className="mt-2 text-sm text-slate-300">High 4G and 5G availability across major traveler routes.</p>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
<p className="text-2xl font-medium tracking-tight text-slate-950">175+</p>
<p className="mt-1 text-sm text-slate-500">Destination hubs</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
<p className="text-2xl font-medium tracking-tight text-slate-950">100K+</p>
<p className="mt-1 text-sm text-slate-500">Travelers served</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
<p className="text-2xl font-medium tracking-tight text-slate-950">24/7</p>
<p className="mt-1 text-sm text-slate-500">Global support</p>
</div>
</div>
</div>
</div>
<div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
<div>
<h2 className="text-xl font-medium text-slate-950">Search by country or browse by region</h2>
<p className="mt-2 text-base text-slate-600">Quickly jump to travel guides, compare plan prices, and find destination-specific resources.</p>
</div>
<div className="text-sm text-slate-500">Crawlable destination pages with instant filtering</div>
</div>
<div className="mt-5 grid gap-4 lg:grid-cols-[1fr,auto]">
<div>
<label className="sr-only" htmlFor="country-search">Search a country</label>
<div className="flex h-12 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 focus-within:border-slate-300 focus-within:bg-white">
<i className="mr-3 h-5 w-5 text-slate-400" data-lucide="search"></i>
<input className="w-full border-0 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400" id="country-search" placeholder="Search country guides, e.g. Japan, France, Thailand" type="text"/>
</div>
<p className="mt-3 hidden text-base text-slate-600" id="no-results">
                We cover <a className="font-normal text-emerald-700 hover:text-emerald-800" href="/esim-japan">Japan — view eSIM plans</a>
</p>
</div>
<div className="overflow-x-auto">
<div aria-label="Filter destinations by region" className="flex min-w-max items-center gap-2" role="tablist">
<button aria-selected="true" className="region-tab rounded-full bg-slate-950 px-4 py-2 text-xs font-normal text-white" data-region="All" role="tab">All</button>
<button aria-selected="false" className="region-tab rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-normal text-slate-700" data-region="Asia Pacific" role="tab">Asia Pacific</button>
<button aria-selected="false" className="region-tab rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-normal text-slate-700" data-region="Europe" role="tab">Europe</button>
<button aria-selected="false" className="region-tab rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-normal text-slate-700" data-region="Middle East &amp; Africa" role="tab">Middle East &amp; Africa</button>
<button aria-selected="false" className="region-tab rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-normal text-slate-700" data-region="Americas" role="tab">Americas</button>
<button aria-selected="false" className="region-tab rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-normal text-slate-700" data-region="Caribbean" role="tab">Caribbean</button>
<button aria-selected="false" className="region-tab rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-normal text-slate-700" data-region="Oceania" role="tab">Oceania</button>
<button aria-selected="false" className="region-tab rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-normal text-slate-700" data-region="Central Asia" role="tab">Central Asia</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-slate-200 bg-[#fcfcfb]">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs font-normal uppercase tracking-[0.12em] text-slate-500">Editor’s picks</p>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">Featured destinations for trip planning</h2>
<p className="mt-3 max-w-2xl text-base text-slate-600">A different format for discovery: larger visual summaries, quick decision points, and direct links into country hubs.</p>
</div>
<a className="text-sm font-normal text-emerald-700 hover:text-emerald-800" href="/travel">See all travel guides</a>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-12">
<a className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md lg:col-span-5" href="/travel/japan">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-4xl">🇯🇵</div>
<h3 className="mt-4 text-2xl font-medium tracking-tight text-slate-950">Japan</h3>
<p className="mt-3 text-base leading-7 text-slate-600">Cherry blossoms, fast trains, city neighborhoods, and reliable 5G across major routes.</p>
</div>
<span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-normal text-emerald-700">From $4/day</span>
</div>
<div className="mt-8 grid grid-cols-3 gap-3">
<div className="rounded-2xl bg-slate-50 p-3">
<p className="text-xs text-slate-500">Best time</p>
<p className="mt-1 text-sm font-normal text-slate-950">Mar–May</p>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<p className="text-xs text-slate-500">Budget</p>
<p className="mt-1 text-sm font-normal text-slate-950">$85–$160/day</p>
</div>
<div className="rounded-2xl bg-slate-50 p-3">
<p className="text-xs text-slate-500">Network</p>
<p className="mt-1 text-sm font-normal text-slate-950">NTT Docomo</p>
</div>
</div>
</a>
<div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
<a className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md" href="/travel/usa">
<div className="flex items-center justify-between">
<span className="text-3xl">🇺🇸</span>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-normal text-slate-700">From $5/day</span>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-slate-950">USA</h3>
<p className="mt-2 text-base text-slate-600">Road trips, national parks, broad 5G reach, and easy dual-SIM use.</p>
</a>
<a className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md" href="/travel/france">
<div className="flex items-center justify-between">
<span className="text-3xl">🇫🇷</span>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-normal text-slate-700">From $4/day</span>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-slate-950">France</h3>
<p className="mt-2 text-base text-slate-600">Rail-friendly city breaks, cafés, museums, and simple travel routing.</p>
</a>
<a className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md" href="/travel/italy">
<div className="flex items-center justify-between">
<span className="text-3xl">🇮🇹</span>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-normal text-slate-700">From $4/day</span>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-slate-950">Italy</h3>
<p className="mt-2 text-base text-slate-600">Historic cities, coastlines, efficient rail travel, and simple setup for maps.</p>
</a>
<a className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md" href="/travel/thailand">
<div className="flex items-center justify-between">
<span className="text-3xl">🇹🇭</span>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-normal text-slate-700">From $3/day</span>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-slate-950">Thailand</h3>
<p className="mt-2 text-base text-slate-600">Value-focused trips, island travel, street food, and flexible local data options.</p>
</a>
</div>
</div>
</div>
</section>
<section className="border-b border-slate-200 bg-white" id="destination-list">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs font-normal uppercase tracking-[0.12em] text-slate-500">Destination index</p>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">Browse all destinations</h2>
<p className="mt-3 max-w-2xl text-base text-slate-600">All country hubs remain in the source for discoverability, while visitors can instantly filter by name or region.</p>
</div>
</div>
<div aria-label="Country list, filtered by region" className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" id="country-grid">
<a aria-label="Japan travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Japan" data-region="Asia Pacific" href="/travel/japan">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="text-2xl">🇯🇵</span>
<div>
<span className="block text-base font-normal text-slate-950">Japan</span>
<span className="text-sm text-slate-500">Asia Pacific</span>
</div>
</div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="France travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="France" data-region="Europe" href="/travel/france">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇫🇷</span><div><span className="block text-base font-normal text-slate-950">France</span><span className="text-sm text-slate-500">Europe</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="Thailand travel guide, eSIM from $3/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Thailand" data-region="Asia Pacific" href="/travel/thailand">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇹🇭</span><div><span className="block text-base font-normal text-slate-950">Thailand</span><span className="text-sm text-slate-500">Asia Pacific</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $3/day</span>
</div>
</a>
<a aria-label="Spain travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Spain" data-region="Europe" href="/travel/spain">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇪🇸</span><div><span className="block text-base font-normal text-slate-950">Spain</span><span className="text-sm text-slate-500">Europe</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="Germany travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Germany" data-region="Europe" href="/travel/germany">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇩🇪</span><div><span className="block text-base font-normal text-slate-950">Germany</span><span className="text-sm text-slate-500">Europe</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="Italy travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Italy" data-region="Europe" href="/travel/italy">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇮🇹</span><div><span className="block text-base font-normal text-slate-950">Italy</span><span className="text-sm text-slate-500">Europe</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="USA travel guide, eSIM from $5/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="USA" data-region="Americas" href="/travel/usa">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇺🇸</span><div><span className="block text-base font-normal text-slate-950">USA</span><span className="text-sm text-slate-500">Americas</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $5/day</span>
</div>
</a>
<a aria-label="United Kingdom travel guide, eSIM from $5/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="United Kingdom" data-region="Europe" href="/travel/uk">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇬🇧</span><div><span className="block text-base font-normal text-slate-950">United Kingdom</span><span className="text-sm text-slate-500">Europe</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $5/day</span>
</div>
</a>
<a aria-label="Australia travel guide, eSIM from $5/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Australia" data-region="Oceania" href="/travel/australia">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇦🇺</span><div><span className="block text-base font-normal text-slate-950">Australia</span><span className="text-sm text-slate-500">Oceania</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $5/day</span>
</div>
</a>
<a aria-label="Greece travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Greece" data-region="Europe" href="/travel/greece">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇬🇷</span><div><span className="block text-base font-normal text-slate-950">Greece</span><span className="text-sm text-slate-500">Europe</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="Singapore travel guide, eSIM from $5/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Singapore" data-region="Asia Pacific" href="/travel/singapore">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇸🇬</span><div><span className="block text-base font-normal text-slate-950">Singapore</span><span className="text-sm text-slate-500">Asia Pacific</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $5/day</span>
</div>
</a>
<a aria-label="South Korea travel guide, eSIM from $3/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="South Korea" data-region="Asia Pacific" href="/travel/south-korea">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇰🇷</span><div><span className="block text-base font-normal text-slate-950">South Korea</span><span className="text-sm text-slate-500">Asia Pacific</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $3/day</span>
</div>
</a>
<a aria-label="United Arab Emirates travel guide, eSIM from $5/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="United Arab Emirates" data-region="Middle East &amp; Africa" href="/travel/uae">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇦🇪</span><div><span className="block text-base font-normal text-slate-950">United Arab Emirates</span><span className="text-sm text-slate-500">Middle East &amp; Africa</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $5/day</span>
</div>
</a>
<a aria-label="Morocco travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Morocco" data-region="Middle East &amp; Africa" href="/travel/morocco">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇲🇦</span><div><span className="block text-base font-normal text-slate-950">Morocco</span><span className="text-sm text-slate-500">Middle East &amp; Africa</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="Kazakhstan travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Kazakhstan" data-region="Central Asia" href="/travel/kazakhstan">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇰🇿</span><div><span className="block text-base font-normal text-slate-950">Kazakhstan</span><span className="text-sm text-slate-500">Central Asia</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="Jamaica travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Jamaica" data-region="Caribbean" href="/travel/jamaica">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇯🇲</span><div><span className="block text-base font-normal text-slate-950">Jamaica</span><span className="text-sm text-slate-500">Caribbean</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
<a aria-label="Canada travel guide, eSIM from $5/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Canada" data-region="Americas" href="/travel/canada">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇨🇦</span><div><span className="block text-base font-normal text-slate-950">Canada</span><span className="text-sm text-slate-500">Americas</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $5/day</span>
</div>
</a>
<a aria-label="Mexico travel guide, eSIM from $4/day" className="country-card rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white" data-name="Mexico" data-region="Americas" href="/travel/mexico">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3"><span className="text-2xl">🇲🇽</span><div><span className="block text-base font-normal text-slate-950">Mexico</span><span className="text-sm text-slate-500">Americas</span></div></div>
<span className="text-sm font-normal text-emerald-700">From $4/day</span>
</div>
</a>
</div>
</div>
</section>
<section className="border-b border-slate-200 bg-slate-50/60">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-3">
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<div className="rounded-2xl bg-sky-50 p-3 text-sky-700 w-fit">
<i className="h-5 w-5" data-lucide="shuffle"></i>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-slate-950">Popular comparisons</h3>
<p className="mt-3 text-base text-slate-600">Pages built for common traveler decisions around connectivity and roaming value.</p>
<div className="mt-5 space-y-3">
<a className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100" href="/travel/japan/esim-guide">
<span>eSIM vs SIM card in Japan</span>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100" href="/travel/italy/esim-guide">
<span>eSIM vs SIM card in Italy</span>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100" href="/travel/usa/esim-guide">
<span>eSIM vs SIM card in the USA</span>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700 w-fit">
<i className="h-5 w-5" data-lucide="sim-card"></i>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight text-slate-950">Best eSIM guides</h3>
<p className="mt-3 text-base text-slate-600">Country-specific buying guides with pricing, validity, network details, and setup advice.</p>
<div className="mt-5 space-y-3">
<a className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100" href="/travel/japan/esim-guide">
<span>Best eSIM for Japan</span>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100" href="/travel/thailand/esim-guide">
<span>Best eSIM for Thailand</span>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700 hover:bg-slate-100" href="/travel/uk/esim-guide">
<span>Best eSIM for the UK</span>
<i className="h-4 w-4 text-slate-400" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
<div className="rounded-2xl bg-white/10 p-3 text-white w-fit">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<h3 className="mt-5 text-xl font-medium tracking-tight">Why this structure works</h3>
<p className="mt-3 text-base text-slate-300">Country hubs support destination SEO while helping travelers move from inspiration to purchase without leaving the page ecosystem.</p>
<ul className="mt-5 space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>Travel content + product intent on one destination path</span></li>
<li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>Internal links for itineraries, budgets, safety, and eSIM guides</span></li>
<li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span><span>Fast scan layouts with stronger semantic sections</span></li>
</ul>
</div>
</div>
</div>
</section>
<section className="bg-white" id="country-hub">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-slate-500">
<a className="hover:text-slate-950" href="https://helloroam.com">Home</a>
<span>/</span>
<a className="hover:text-slate-950" href="/travel">Travel Guides</a>
<span>/</span>
<span className="text-slate-950">Japan</span>
</nav>
<div className="grid gap-8 lg:grid-cols-[1fr,22rem]">
<div>
<div className="flex items-start gap-4">
<div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] border border-slate-200 bg-slate-50 text-4xl">🇯🇵</div>
<div>
<h1 className="text-4xl font-medium tracking-tight text-slate-950 sm:text-5xl">Japan Travel &amp; eSIM Guide</h1>
<p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">Plan your trip to Japan with practical travel advice, pricing previews, itinerary resources, and local mobile coverage details in one organized destination hub.</p>
</div>
</div>
<div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
<div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-sky-100 p-2.5 text-sky-800"><i className="h-4 w-4" data-lucide="wallet"></i></div>
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Currency</p>
<p className="mt-1 text-base font-normal text-slate-950">JPY (¥)</p>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-sky-100 p-2.5 text-sky-800"><i className="h-4 w-4" data-lucide="languages"></i></div>
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Language</p>
<p className="mt-1 text-base font-normal text-slate-950">Japanese</p>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-sky-100 p-2.5 text-sky-800"><i className="h-4 w-4" data-lucide="plug-zap"></i></div>
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Voltage</p>
<p className="mt-1 text-base font-normal text-slate-950">100V</p>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-sky-100 p-2.5 text-sky-800"><i className="h-4 w-4" data-lucide="clock-3"></i></div>
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Timezone</p>
<p className="mt-1 text-base font-normal text-slate-950">UTC+9</p>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-sky-100 p-2.5 text-sky-800"><i className="h-4 w-4" data-lucide="signal"></i></div>
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Best network</p>
<p className="mt-1 text-base font-normal text-slate-950">NTT Docomo</p>
</div>
</div>
</div>
<div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-sky-100 p-2.5 text-sky-800"><i className="h-4 w-4" data-lucide="sim-card"></i></div>
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">eSIM from</p>
<p className="mt-1 text-base font-normal text-slate-950">$4/day</p>
</div>
</div>
</div>
</div>
</div>
<aside className="rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,#f0fdf4_0%,#ffffff_100%)] p-6 shadow-sm">
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Quick action</p>
<h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-950">Ready for Japan?</h2>
<p className="mt-3 text-base text-slate-600">Browse plans, compare validity, and choose the right data option before you fly.</p>
<div className="mt-6 space-y-3">
<div className="rounded-2xl bg-white p-4">
<p className="text-sm text-slate-500">Starting price</p>
<p className="mt-1 text-xl font-medium tracking-tight text-slate-950">$4/day</p>
</div>
<div className="rounded-2xl bg-white p-4">
<p className="text-sm text-slate-500">Popular validity</p>
<p className="mt-1 text-xl font-medium tracking-tight text-slate-950">12–30 days</p>
</div>
</div>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-normal text-white transition hover:bg-emerald-700" href="/esim-japan">View Japan eSIM plans</a>
</aside>
</div>
<section className="pt-12">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs font-normal uppercase tracking-[0.12em] text-slate-500">Destination content cluster</p>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">Everything you need for Japan</h2>
<p className="mt-3 max-w-2xl text-base text-slate-600">A modular guide system linking seasonal planning, itinerary building, mobile access, safety, and budgeting.</p>
</div>
</div>
<div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
<a className="rounded-[2rem] border border-slate-200 bg-[#fff8dc] p-5 transition hover:-translate-y-0.5 hover:shadow-sm" href="/travel/japan/best-time-to-visit">
<div className="rounded-2xl bg-white/80 p-3 text-amber-700 w-fit"><i className="h-5 w-5" data-lucide="calendar-days"></i></div>
<h3 className="mt-5 text-lg font-medium text-slate-950">Best Time to Visit</h3>
<p className="mt-2 text-base text-slate-600">Best months, weather, festivals, and seasonal tradeoffs.</p>
<p className="mt-5 text-sm font-normal text-slate-950">March–May</p>
</a>
<a className="rounded-[2rem] border border-slate-200 bg-[#f4efff] p-5 transition hover:-translate-y-0.5 hover:shadow-sm" href="/travel/japan/10-day-itinerary">
<div className="rounded-2xl bg-white/80 p-3 text-violet-700 w-fit"><i className="h-5 w-5" data-lucide="map"></i></div>
<h3 className="mt-5 text-lg font-medium text-slate-950">Itinerary</h3>
<p className="mt-2 text-base text-slate-600">Day-by-day ideas for 7, 10, and 14-day routes.</p>
<p className="mt-5 text-sm font-normal text-slate-950">Tokyo to Kyoto routes</p>
</a>
<a className="rounded-[2rem] border border-slate-200 bg-[#e8f8ff] p-5 transition hover:-translate-y-0.5 hover:shadow-sm" href="/travel/japan/esim-guide">
<div className="rounded-2xl bg-white/80 p-3 text-sky-700 w-fit"><i className="h-5 w-5" data-lucide="signal"></i></div>
<h3 className="mt-5 text-lg font-medium text-slate-950">eSIM Guide</h3>
<p className="mt-2 text-base text-slate-600">Compare eSIM providers, plans, prices, and setup steps.</p>
<p className="mt-5 text-sm font-normal text-slate-950">Plans from $4/day</p>
</a>
<a className="rounded-[2rem] border border-slate-200 bg-[#fff1e7] p-5 transition hover:-translate-y-0.5 hover:shadow-sm" href="/travel/japan/safety">
<div className="rounded-2xl bg-white/80 p-3 text-orange-700 w-fit"><i className="h-5 w-5" data-lucide="shield-check"></i></div>
<h3 className="mt-5 text-lg font-medium text-slate-950">Safety Guide</h3>
<p className="mt-2 text-base text-slate-600">Safety ratings, common scams, and emergency information.</p>
<p className="mt-5 text-sm font-normal text-slate-950">Low-risk destination</p>
</a>
<a className="rounded-[2rem] border border-slate-200 bg-[#f6efe3] p-5 transition hover:-translate-y-0.5 hover:shadow-sm" href="/travel/japan/budget">
<div className="rounded-2xl bg-white/80 p-3 text-stone-700 w-fit"><i className="h-5 w-5" data-lucide="credit-card"></i></div>
<h3 className="mt-5 text-lg font-medium text-slate-950">Travel Budget</h3>
<p className="mt-2 text-base text-slate-600">Average daily costs, planning tips, and savings ideas.</p>
<p className="mt-5 text-sm font-normal text-slate-950">$85–$160/day</p>
</a>
</div>
</section>
<section className="pt-12">
<div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Coverage overview</p>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">Network coverage in Japan</h2>
<p className="mt-3 text-base text-slate-600">Operator visibility and radio access details help explain real-world traveler connectivity.</p>
</div>
<div className="rounded-2xl bg-slate-950 px-4 py-3 text-white">
<p className="text-xs uppercase tracking-[0.12em] text-slate-400">Quality</p>
<p className="mt-1 text-2xl font-medium tracking-tight">82%</p>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
<span className="text-base font-normal text-slate-950">NTT Docomo</span>
<span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-normal text-white">5G</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
<span className="text-base font-normal text-slate-950">SoftBank</span>
<span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-normal text-white">5G</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
<span className="text-base font-normal text-slate-950">au KDDI</span>
<span className="rounded-full bg-sky-500 px-3 py-1 text-xs font-normal text-white">4G</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
<span className="text-base font-normal text-slate-950">Rakuten Mobile</span>
<span className="rounded-full bg-sky-500 px-3 py-1 text-xs font-normal text-white">4G</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
<span className="text-base font-normal text-slate-950">Y!mobile</span>
<span className="rounded-full bg-sky-500 px-3 py-1 text-xs font-normal text-white">4G</span>
</div>
<div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
<span className="text-base font-normal text-slate-950">b-mobile</span>
<span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-normal text-slate-800">3G</span>
</div>
</div>
<p className="mt-6 text-base text-slate-600">HelloRoam connects via 8 networks in Japan, including NTT Docomo and SoftBank.</p>
</div>
<div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Coverage score</p>
<div className="mt-4 rounded-full bg-slate-200">
<div className="h-3 rounded-full bg-emerald-600" style={{width: '82%'}}></div>
</div>
<p className="mt-3 text-base text-slate-600">High 4G and 5G availability across major operators.</p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl bg-white p-4">
<p className="text-sm text-slate-500">Best for cities</p>
<p className="mt-1 text-base font-normal text-slate-950">NTT Docomo</p>
</div>
<div className="rounded-2xl bg-white p-4">
<p className="text-sm text-slate-500">Best for speed</p>
<p className="mt-1 text-base font-normal text-slate-950">SoftBank</p>
</div>
<div className="rounded-2xl bg-white p-4">
<p className="text-sm text-slate-500">Best trip type</p>
<p className="mt-1 text-base font-normal text-slate-950">Rail + city travel</p>
</div>
<div className="rounded-2xl bg-white p-4">
<p className="text-sm text-slate-500">Setup style</p>
<p className="mt-1 text-base font-normal text-slate-950">Instant eSIM activation</p>
</div>
</div>
</div>
</div>
</section>
<section className="pt-12">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Plan selection</p>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">eSIM plans for Japan</h2>
<p className="mt-3 text-base text-slate-600">Three popular tiers with direct purchase paths for fast checkout.</p>
</div>
<a className="text-sm font-normal text-emerald-700 hover:text-emerald-800" href="/esim-japan">See all Japan plans</a>
</div>
<div className="mt-8 grid gap-4 md:grid-cols-3">
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Starter</p>
<p className="mt-3 text-4xl font-medium tracking-tight text-slate-950">3GB</p>
<p className="mt-2 text-base text-slate-600">12 days</p>
<div className="mt-6 flex items-end justify-between gap-4">
<p className="text-2xl font-medium tracking-tight text-slate-950">$9.00</p>
<a className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-normal text-white hover:bg-slate-800" href="/esim-japan?plan=3gb-12d">Add to cart</a>
</div>
</div>
<div className="rounded-[2rem] border border-emerald-200 bg-[linear-gradient(180deg,#f0fdf4_0%,#ffffff_100%)] p-6 shadow-sm">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-[0.12em] text-emerald-700">Most popular</p>
<span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-normal text-white">Best value</span>
</div>
<p className="mt-3 text-4xl font-medium tracking-tight text-slate-950">5GB</p>
<p className="mt-2 text-base text-slate-600">15 days</p>
<div className="mt-6 flex items-end justify-between gap-4">
<p className="text-2xl font-medium tracking-tight text-slate-950">$14.00</p>
<a className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-normal text-white hover:bg-emerald-700" href="/esim-japan?plan=5gb-15d">Add to cart</a>
</div>
</div>
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Extended trip</p>
<p className="mt-3 text-4xl font-medium tracking-tight text-slate-950">10GB</p>
<p className="mt-2 text-base text-slate-600">30 days</p>
<div className="mt-6 flex items-end justify-between gap-4">
<p className="text-2xl font-medium tracking-tight text-slate-950">$19.00</p>
<a className="inline-flex items-center rounded-full bg-slate-950 px-4 py-2 text-sm font-normal text-white hover:bg-slate-800" href="/esim-japan?plan=10gb-30d">Add to cart</a>
</div>
</div>
</div>
</section>
<section className="pt-12 pb-4">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Regional discovery</p>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">Also popular in Asia Pacific</h2>
<p className="mt-3 text-base text-slate-600">Keep exploring nearby destinations with similar traveler demand and strong regional connectivity.</p>
</div>
<a className="text-sm font-normal text-emerald-700 hover:text-emerald-800" href="/travel?region=asia-pacific">Browse all Asia Pacific destinations</a>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
<a className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:bg-white" href="/travel/south-korea">
<div className="flex items-center gap-3"><span className="text-2xl">🇰🇷</span><span className="text-base font-normal text-slate-950">South Korea</span></div>
<p className="mt-3 text-sm text-emerald-700">From $3/day</p>
</a>
<a className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:bg-white" href="/travel/thailand">
<div className="flex items-center gap-3"><span className="text-2xl">🇹🇭</span><span className="text-base font-normal text-slate-950">Thailand</span></div>
<p className="mt-3 text-sm text-emerald-700">From $3/day</p>
</a>
<a className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:bg-white" href="/travel/singapore">
<div className="flex items-center gap-3"><span className="text-2xl">🇸🇬</span><span className="text-base font-normal text-slate-950">Singapore</span></div>
<p className="mt-3 text-sm text-emerald-700">From $5/day</p>
</a>
<a className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:bg-white" href="/travel/china">
<div className="flex items-center gap-3"><span className="text-2xl">🇨🇳</span><span className="text-base font-normal text-slate-950">China</span></div>
<p className="mt-3 text-sm text-emerald-700">From $4/day</p>
</a>
<a className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:bg-white" href="/travel/vietnam">
<div className="flex items-center gap-3"><span className="text-2xl">🇻🇳</span><span className="text-base font-normal text-slate-950">Vietnam</span></div>
<p className="mt-3 text-sm text-emerald-700">From $3/day</p>
</a>
<a className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 transition hover:bg-white" href="/travel/india">
<div className="flex items-center gap-3"><span className="text-2xl">🇮🇳</span><span className="text-base font-normal text-slate-950">India</span></div>
<p className="mt-3 text-sm text-emerald-700">From $4/day</p>
</a>
</div>
</section>
</div>
</section>
<section className="bg-slate-50/70">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8">
<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
<div>
<p className="text-xs uppercase tracking-[0.12em] text-slate-500">Final call</p>
<h2 className="mt-2 text-3xl font-medium tracking-tight text-slate-950">Ready to stay connected anywhere?</h2>
<p className="mt-3 max-w-2xl text-base text-slate-600">Browse plans for 175+ countries and move from destination research to checkout in a few clicks.</p>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-normal text-white hover:bg-slate-800" href="/all-plans">Browse eSIM Plans</a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-normal text-slate-700 hover:border-slate-300 hover:text-slate-950" href="/travel">Explore Travel Guides</a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-lg font-medium tracking-tight text-slate-950">HR</div>
<p className="mt-1 text-sm text-slate-500">Travel discovery and eSIM planning for global trips.</p>
</div>
<div className="flex flex-wrap gap-4 text-sm text-slate-600">
<a className="hover:text-slate-950" href="/travel">Travel Guides</a>
<a className="hover:text-slate-950" href="/all-plans">All Plans</a>
<a className="hover:text-slate-950" href="https://helloroam.com">helloroam.com</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
