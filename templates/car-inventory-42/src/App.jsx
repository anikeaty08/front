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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<img alt="Logo" className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-lg font-semibold tracking-tight">Global Intrigue Imports</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Home</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Blog</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">About Us</a>
<a className="text-sm font-semibold text-neutral-900" href="#">Car List</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 active:scale-[.98] transition">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Get a Quote
            </button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-200 p-2" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-200 bg-white" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col gap-2">
<a className="text-sm py-2" href="#">Home</a>
<a className="text-sm py-2" href="#">Blog</a>
<a className="text-sm py-2" href="#">About Us</a>
<a className="text-sm py-2 font-semibold" href="#">Car List</a>
<a className="text-sm py-2" href="#">Contact</a>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white">
<i className="h-4 w-4" data-lucide="sparkles"></i>
            Get a Quote
          </button>
</div>
</div>
</header>

<section className="relative isolate">
<div className="absolute inset-0">
<img alt="Hero car" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
<p className="text-sm font-medium text-white/70">Home / Car List</p>
<h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Explore Our Inventory</h1>
<p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80">Curated selection of new and pre-owned vehicles. Filter by make, body, year, and price to find your next car.</p>
<div className="mt-6 flex items-center gap-3">
<div className="relative flex-1 max-w-xl">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" data-lucide="search"></i>
<input className="w-full rounded-md border border-white/20 bg-white/10 pl-10 pr-4 py-2.5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Search model, trim, keyword..." type="search"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15 border border-white/20 md:hidden" id="openFilters">
<i className="h-4 w-4" data-lucide="filter"></i>
            Filters
          </button>
</div>
</div>
</section>

<main className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="lg:col-span-3 lg:sticky lg:top-20 lg:h-[calc(100vh-6rem)] lg:overflow-auto bg-white border border-neutral-200 rounded-xl p-4 md:p-5 shadow-sm hidden lg:block" id="filtersPanel">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Filters</h2>
<button className="text-xs font-medium text-neutral-600 hover:text-neutral-900" id="clearFilters">Clear all</button>
</div>

<div className="mt-5 space-y-4">

<div className="space-y-1" data-select="">
<label className="text-xs font-medium text-neutral-600">Make</label>
<button className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<span className="text-neutral-900" data-select-label="">Any</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="make" type="hidden"/>
<div className="hidden absolute z-20 mt-1 w-[calc(100%-2.5rem)] max-w-[280px] rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="">Any</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Honda">Honda</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Toyota">Toyota</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Nissan">Nissan</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Mazda">Mazda</button>
</div>
</div>
</div>
<div className="space-y-1" data-select="">
<label className="text-xs font-medium text-neutral-600">Body</label>
<button className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<span className="text-neutral-900" data-select-label="">Any</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="body" type="hidden"/>
<div className="hidden absolute z-20 mt-1 w-[calc(100%-2.5rem)] max-w-[280px] rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="">Any</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="SUV">SUV</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Sedan">Sedan</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Hatchback">Hatchback</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Coupe">Coupe</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1" data-select="">
<label className="text-xs font-medium text-neutral-600">Year From</label>
<button className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<span className="text-neutral-900" data-select-label="">2016</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="year_from" type="hidden" value="2016"/>
<div className="hidden absolute z-20 mt-1 w-[calc(100%-2.5rem)] max-w-[280px] rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="max-h-56 overflow-auto p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2016">2016</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2018">2018</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2020">2020</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2022">2022</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2024">2024</button>
</div>
</div>
</div>
<div className="space-y-1" data-select="">
<label className="text-xs font-medium text-neutral-600">Year To</label>
<button className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<span className="text-neutral-900" data-select-label="">2024</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="year_to" type="hidden" value="2024"/>
<div className="hidden absolute z-20 mt-1 w-[calc(100%-2.5rem)] max-w-[280px] rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="max-h-56 overflow-auto p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2019">2019</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2021">2021</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2023">2023</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2024">2024</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2025">2025</button>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-neutral-600">Price Range (JPY)</label>
<div className="flex items-center justify-between text-xs">
<span className="font-medium" id="priceMinLabel">¥300,000</span>
<span className="font-medium" id="priceMaxLabel">¥4,000,000</span>
</div>
<div className="relative h-10">
<div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-neutral-200"></div>
<div className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-neutral-900" id="priceProgress" style={{left: '5%', right: '10%'}}></div>
<input className="absolute w-full appearance-none bg-transparent pointer-events-auto top-1/2 -translate-y-1/2" id="priceMin" max="4000000" min="300000" oninput="this.value=Math.min(this.value, document.getElementById('priceMax').value-100000);" step="50000" type="range" value="500000"/>
<input className="absolute w-full appearance-none bg-transparent pointer-events-auto top-1/2 -translate-y-1/2" id="priceMax" max="4000000" min="300000" oninput="this.value=Math.max(this.value, document.getElementById('priceMin').value-0)+0;" step="50000" type="range" value="3600000"/>
<style>
                  input[type="range"]::-webkit-slider-thumb{ -webkit-appearance:none; appearance:none; width:18px; height:18px; background:#0a0a0a; border-radius:9999px; border:2px solid white; box-shadow:0 1px 2px rgba(0,0,0,.15); cursor:pointer; }
                  input[type="range"]::-moz-range-thumb{ width:18px; height:18px; background:#0a0a0a; border-radius:9999px; border:2px solid white; box-shadow:0 1px 2px rgba(0,0,0,.15); cursor:pointer; }
                </style>
</div>
</div>

<div className="pt-2">
<label className="text-xs font-medium text-neutral-600">Condition</label>
<div className="mt-2 flex items-center gap-3">
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50" data-chip="" type="button">New</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50" data-chip="" type="button">Used</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50" data-chip="" type="button">Certified</button>
</div>
</div>
<div className="pt-2">
<label className="text-xs font-medium text-neutral-600">Fuel</label>
<div className="mt-2 flex flex-wrap gap-2">
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">Hybrid</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">Electric</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">Gasoline</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">Diesel</button>
</div>
</div>
<button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800">
<i className="h-4 w-4" data-lucide="filter"></i>
              Apply Filters
            </button>
</div>
</aside>

<section className="lg:col-span-9">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm md:hidden" id="mobileFiltersInline">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i>
                Filters
              </button>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">128</span> results</p>
</div>
<div className="flex items-center gap-2">

<div className="relative" data-select="">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<i className="h-4 w-4 text-neutral-500" data-lucide="arrow-up-narrow-wide"></i>
<span className="text-neutral-900" data-select-label="">Sort: Featured</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="sort" type="hidden" value="featured" />
<div className="hidden absolute right-0 z-20 mt-1 w-56 rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="featured">Featured</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="price_low">Price: Low to High</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="price_high">Price: High to Low</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="year_new">Year: Newest</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="mileage_low">Mileage: Low</button>
</div>
</div>
</input></div>
<div className="ml-1 flex items-center rounded-md border border-neutral-200 bg-white p-1">
<button className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm font-medium text-neutral-900 bg-neutral-100" id="btnGrid">
<i className="h-4 w-4" data-lucide="grid-3x3"></i>
                  Grid
                </button>
<button className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900" id="btnList">
<i className="h-4 w-4" data-lucide="rows"></i>
                  List
                </button>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" id="results">

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Honda Civic FL5" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1549921296-3fdc4b8590c7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2023</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Hybrid</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Honda Civic FL5</h3>
<span className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700">Sedan</span>
</div>
<p className="mt-1 text-sm text-neutral-600 line-clamp-1">2.0L • Automatic • FWD • White</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="gauge"></i> 12,500 km</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Okinawa</span>
</div>
<div className="text-right">
<div className="text-base font-semibold text-neutral-900 tracking-tight">¥ 3,880,000</div>
<div className="text-[11px] text-neutral-500">Incl. taxes</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="eye"></i>
                  View Details
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="scale"></i>
                    Compare
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Honda Vezel RV5" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2022</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">SUV</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Honda Vezel RV5</h3>
<span className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700">AWD</span>
</div>
<p className="mt-1 text-sm text-neutral-600 line-clamp-1">1.5L • e:HEV • AWD • Silver</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="gauge"></i> 22,300 km</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Tokyo</span>
</div>
<div className="text-right">
<div className="text-base font-semibold text-neutral-900 tracking-tight">¥ 2,800,000</div>
<div className="text-[11px] text-neutral-500">Incl. taxes</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="eye"></i>
                  View Details
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="scale"></i>
                    Compare
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Toyota Prius ZVW" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2021</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Hybrid</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Toyota Prius ZVW</h3>
<span className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700">Hatch</span>
</div>
<p className="mt-1 text-sm text-neutral-600 line-clamp-1">1.8L • FWD • Pearl</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="gauge"></i> 35,900 km</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Osaka</span>
</div>
<div className="text-right">
<div className="text-base font-semibold text-neutral-900 tracking-tight">¥ 1,900,000</div>
<div className="text-[11px] text-neutral-500">Incl. taxes</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="eye"></i>
                  View Details
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="scale"></i>
                    Compare
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Nissan Leaf ZE1" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1542280756-74b2f55e73a1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2020</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">EV</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Nissan Leaf ZE1</h3>
<span className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700">Hatch</span>
</div>
<p className="mt-1 text-sm text-neutral-600 line-clamp-1">EV • Single Speed • Blue</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="gauge"></i> 18,200 km</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Fukuoka</span>
</div>
<div className="text-right">
<div className="text-base font-semibold text-neutral-900 tracking-tight">¥ 2,300,000</div>
<div className="text-[11px] text-neutral-500">Incl. taxes</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="eye"></i>
                  View Details
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="scale"></i>
                    Compare
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Mazda 3 BP" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2019</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Sedan</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Mazda 3 BP</h3>
<span className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700">Touring</span>
</div>
<p className="mt-1 text-sm text-neutral-600 line-clamp-1">2.0L • FWD • Gray</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="gauge"></i> 44,100 km</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Nagoya</span>
</div>
<div className="text-right">
<div className="text-base font-semibold text-neutral-900 tracking-tight">¥ 1,700,000</div>
<div className="text-[11px] text-neutral-500">Incl. taxes</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="eye"></i>
                  View Details
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="scale"></i>
                    Compare
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Daihatsu Mira e:S" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2018</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Kei</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="heart"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Daihatsu Mira e:S</h3>
<span className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] font-medium text-neutral-700">CVT</span>
</div>
<p className="mt-1 text-sm text-neutral-600 line-clamp-1">0.66L • FWD • Sky Blue</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="gauge"></i> 60,800 km</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Sapporo</span>
</div>
<div className="text-right">
<div className="text-base font-semibold text-neutral-900 tracking-tight">¥ 390,000</div>
<div className="text-[11px] text-neutral-500">Incl. taxes</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="eye"></i>
                  View Details
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="scale"></i>
                    Compare
                  </button>
</div>
</div>
</article>
</div>

<div className="mt-8 flex items-center justify-between">
<p className="text-sm text-neutral-600">Page 1 of 9</p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 disabled:opacity-50" disabled="">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
                Prev
              </button>
<div className="hidden sm:flex items-center gap-1">
<button className="h-8 w-8 rounded-md bg-neutral-900 text-white text-sm font-medium">1</button>
<button className="h-8 w-8 rounded-md border border-neutral-200 bg-white text-sm">2</button>
<button className="h-8 w-8 rounded-md border border-neutral-200 bg-white text-sm">3</button>
<span className="px-2 text-neutral-500">...</span>
<button className="h-8 w-8 rounded-md border border-neutral-200 bg-white text-sm">9</button>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700">
                Next
                <i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<div className="flex items-center gap-3">
<img alt="Logo" className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-base font-semibold tracking-tight">Global Intrigue Imports</span>
</div>
<p className="mt-3 text-sm text-neutral-600">Your source for new and pre-owned vehicles—imported with care and delivered with confidence.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200" href="#">
<i className="h-4 w-4" data-lucide="instagram"></i>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200" href="#">
<i className="h-4 w-4" data-lucide="youtube"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight">Useful Links</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-600 hover:text-neutral-900" href="#">Home</a></li>
<li><a className="text-neutral-600 hover:text-neutral-900" href="#">About Us</a></li>
<li><a className="text-neutral-600 hover:text-neutral-900" href="#">Car List</a></li>
<li><a className="text-neutral-600 hover:text-neutral-900" href="#">Contact Us</a></li>
<li><a className="text-neutral-600 hover:text-neutral-900" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight">Contact</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li className="inline-flex items-start gap-2"><i className="mt-0.5 h-4 w-4" data-lucide="map-pin"></i> Yomitan prefecture, Okinawa Japan</li>
<li className="inline-flex items-center gap-2"></li></ul></div></div></div></footer>
    </>
  );
}
