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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenuBtn && mobileMenu) {
          mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        }

        // Basic mobile filters open (toggle sidebar on small screens)
        const openFilters = document.getElementById('openFilters');
        const mobileFiltersInline = document.getElementById('mobileFiltersInline');
        const filtersPanel = document.getElementById('filtersPanel');
        [openFilters, mobileFiltersInline].forEach(btn => {
          if (btn && filtersPanel) {
            btn.addEventListener('click', () => filtersPanel.classList.toggle('hidden'));
          }
        });

        // Custom selects
        document.querySelectorAll('[data-select]').forEach(wrapper => {
          const btn = wrapper.querySelector('button');
          const menu = wrapper.querySelector('[data-select-menu]');
          const label = wrapper.querySelector('[data-select-label]');
          const input = wrapper.querySelector('input[type="hidden"]');
          if (!btn || !menu || !label || !input) return;

          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('hidden');
          });

          menu.querySelectorAll('button[data-value]').forEach(opt => {
            opt.addEventListener('click', () => {
              const val = opt.getAttribute('data-value') || '';
              label.textContent = opt.textContent.trim();
              input.value = val;
              menu.classList.add('hidden');
            });
          });

          document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) menu.classList.add('hidden');
          });
        });

        // Chips toggle
        document.querySelectorAll('[data-chip]').forEach(chip => {
          chip.addEventListener('click', () => {
            const active = chip.classList.toggle('bg-neutral-900');
            chip.classList.toggle('text-white', active);
            chip.classList.toggle('border-neutral-900', active);
          });
        });

        // Reading time range dual slider
        const min = document.getElementById('timeMin');
        const max = document.getElementById('timeMax');
        const prog = document.getElementById('timeProgress');
        const minLabel = document.getElementById('timeMinLabel');
        const maxLabel = document.getElementById('timeMaxLabel');

        function clampValues() {
          if (!min || !max) return;
          if (+min.value > +max.value - 1) min.value = (+max.value - 1).toString();
          if (+max.value < +min.value + 1) max.value = (+min.value + 1).toString();
        }

        function updateRangeUI() {
          if (!min || !max || !prog || !minLabel || !maxLabel) return;
          const minV = +min.value, maxV = +max.value, minR = +min.min, maxR = +min.max;
          const left = ((minV - minR) / (maxR - minR)) * 100;
          const right = 100 - ((maxV - minR) / (maxR - minR)) * 100;
          prog.style.left = left + '%';
          prog.style.right = right + '%';
          minLabel.textContent = minV + ' min';
          maxLabel.textContent = maxV + ' min';
        }

        ['input', 'change'].forEach(evt => {
          min && min.addEventListener(evt, () => { clampValues(); updateRangeUI(); });
          max && max.addEventListener(evt, () => { clampValues(); updateRangeUI(); });
        });
        updateRangeUI();
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<img alt="Logo" className="h-8 w-8 rounded-md object-cover" src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-lg font-semibold tracking-tight">Global Intrigue Imports</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Home</a>
<a className="text-sm font-semibold text-neutral-900" href="#">Blog</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">About Us</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Car List</a>
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
<a className="text-sm py-2 font-semibold" href="#">Blog</a>
<a className="text-sm py-2" href="#">About Us</a>
<a className="text-sm py-2" href="#">Car List</a>
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
<img alt="Blog hero" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1518779573815-3455a9c02128?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
<p className="text-sm font-medium text-white/70">Home / Blog</p>
<h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Insights &amp; Stories</h1>
<p className="mt-3 max-w-2xl text-sm sm:text-base text-white/80">News, guides, and opinions on imports, EVs, maintenance, and the culture around cars.</p>
<div className="mt-6 flex items-center gap-3">
<div className="relative flex-1 max-w-xl">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/70" data-lucide="search"></i>
<input className="w-full rounded-md border border-white/20 bg-white/10 pl-10 pr-4 py-2.5 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Search articles, topics, or keywords..." type="search"/>
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

<div className="space-y-1 relative" data-select="">
<label className="text-xs font-medium text-neutral-600">Category</label>
<button className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<span className="text-neutral-900" data-select-label="">Any</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="category" type="hidden"/>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="">Any</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="News">News</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Guides">Guides</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Reviews">Reviews</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Opinion">Opinion</button>
</div>
</div>
</div>

<div className="space-y-1 relative" data-select="">
<label className="text-xs font-medium text-neutral-600">Topic</label>
<button className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<span className="text-neutral-900" data-select-label="">Any</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="topic" type="hidden"/>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="">Any</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="EV">EV</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Hybrid">Hybrid</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="JDM">JDM</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Buying">Buying</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="Maintenance">Maintenance</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="space-y-1 relative" data-select="">
<label className="text-xs font-medium text-neutral-600">Year From</label>
<button className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<span className="text-neutral-900" data-select-label="">2018</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="year_from" type="hidden" value="2018"/>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="max-h-56 overflow-auto p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2018">2018</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2019">2019</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2020">2020</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2022">2022</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2024">2024</button>
</div>
</div>
</div>

<div className="space-y-1 relative" data-select="">
<label className="text-xs font-medium text-neutral-600">Year To</label>
<button className="w-full flex items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<span className="text-neutral-900" data-select-label="">2025</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="year_to" type="hidden" value="2025"/>
<div className="hidden absolute z-20 mt-1 w-full rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="max-h-56 overflow-auto p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2021">2021</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2022">2022</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2023">2023</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2024">2024</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="2025">2025</button>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-neutral-600">Reading Time (minutes)</label>
<div className="flex items-center justify-between text-xs">
<span className="font-medium" id="timeMinLabel">1 min</span>
<span className="font-medium" id="timeMaxLabel">20 min</span>
</div>
<div className="relative h-10">
<div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-neutral-200"></div>
<div className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-neutral-900" id="timeProgress" style={{left: '0%', right: '0%'}}></div>
<input className="absolute w-full appearance-none bg-transparent pointer-events-auto top-1/2 -translate-y-1/2" id="timeMin" max="20" min="1" step="1" type="range" value="3"/>
<input className="absolute w-full appearance-none bg-transparent pointer-events-auto top-1/2 -translate-y-1/2" id="timeMax" max="20" min="1" step="1" type="range" value="12"/>
</div>
</div>

<div className="pt-2">
<label className="text-xs font-medium text-neutral-600">Format</label>
<div className="mt-2 flex items-center gap-3">
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50" data-chip="" type="button">Article</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50" data-chip="" type="button">Tutorial</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 hover:bg-neutral-50" data-chip="" type="button">News</button>
</div>
</div>
<div className="pt-2">
<label className="text-xs font-medium text-neutral-600">Tags</label>
<div className="mt-2 flex flex-wrap gap-2">
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">Importing</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">EV</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">Hybrid</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">JDM</button>
<button className="rounded-full border border-neutral-300 px-3 py-1.5 text-xs font-medium" data-chip="" type="button">Maintenance</button>
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
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">128</span> posts</p>
</div>
<div className="flex items-center gap-2">

<div className="relative" data-select="">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm" type="button">
<i className="h-4 w-4 text-neutral-500" data-lucide="arrow-up-narrow-wide"></i>
<span className="text-neutral-900" data-select-label="">Sort: Newest</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<input name="sort" type="hidden" value="newest" />
<div className="hidden absolute right-0 z-20 mt-1 w-56 rounded-md border border-neutral-200 bg-white shadow-lg" data-select-menu="">
<div className="p-1">
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="newest">Newest</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="popular">Most Popular</button>
<button className="w-full text-left rounded-md px-3 py-2 text-sm hover:bg-neutral-50" data-value="featured">Featured</button>
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
<img alt="EV Outlook 2025" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2025</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">News</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">The EV Outlook for 2025: Charging, Range, and Policy</h3>
<p className="mt-1 text-sm text-neutral-600 line-clamp-2">A quick primer on what’s changing for EV buyers this year and how it affects long-distance travel.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="calendar"></i> Jan 12</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> A. Tanaka</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-900 tracking-tight inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 6 min
                    </div>
<div className="text-[11px] text-neutral-500">Read time</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="book-open"></i>
                  Read Article
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="share-2"></i>
                    Share
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="JDM Import Guide" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1517026575980-3e1e2b1e5b36?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2024</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Guides</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">How to Import a JDM Classic: A Step‑by‑Step Checklist</h3>
<p className="mt-1 text-sm text-neutral-600 line-clamp-2">From auction sheets to shipping logistics—everything you need to land your dream car smoothly.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="calendar"></i> Nov 28</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> M. Sato</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-900 tracking-tight inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 8 min
                    </div>
<div className="text-[11px] text-neutral-500">Read time</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="book-open"></i>
                  Read Article
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="share-2"></i>
                    Share
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Hybrid Maintenance" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1550355191-025a9d5505d5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2024</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Maintenance</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Hybrid Battery Care: What Actually Extends Lifespan</h3>
<p className="mt-1 text-sm text-neutral-600 line-clamp-2">We separate myth from maintenance routine so your hybrid stays efficient for years.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="calendar"></i> Oct 05</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> R. Nakamura</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-900 tracking-tight inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 5 min
                    </div>
<div className="text-[11px] text-neutral-500">Read time</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="book-open"></i>
                  Read Article
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="share-2"></i>
                    Share
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Auction Sheets" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2023</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Guides</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Decoding Auction Sheets: Grading, Notes, and Pitfalls</h3>
<p className="mt-1 text-sm text-neutral-600 line-clamp-2">Understand condition grades and remarks so you can bid with confidence.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="calendar"></i> Aug 19</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> L. Takahashi</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-900 tracking-tight inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 10 min
                    </div>
<div className="text-[11px] text-neutral-500">Read time</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="book-open"></i>
                  Read Article
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="share-2"></i>
                    Share
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="Winter Prep" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2023</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Maintenance</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">Winter Prep Checklist: Fluids, Tires, and Storage</h3>
<p className="mt-1 text-sm text-neutral-600 line-clamp-2">Simple steps to keep your car reliable and safe through colder months.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="calendar"></i> Dec 02</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> K. Ito</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-900 tracking-tight inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 4 min
                    </div>
<div className="text-[11px] text-neutral-500">Read time</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-" data-lucide="book-open"></i>
                  Read Article
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="share-2"></i>
                    Share
                  </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
<div className="relative aspect-[16/10]">
<img alt="AWD vs FWD" className="h-full w-full object-cover transition group-hover:scale-105" src="https://images.unsplash.com/photo-1511396275270-0ac8870e2b00?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 top-3 flex gap-2">
<span className="rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">2022</span>
<span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-neutral-900">Reviews</span>
</div>
<button className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white p-2 text-neutral-700 hover:text-red-500" data-fav="">
<i className="h-4 w-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900">AWD vs. FWD: Real‑World Traction and Efficiency</h3>
<p className="mt-1 text-sm text-neutral-600 line-clamp-2">We compare drivetrains in mixed conditions and share what matters for daily driving.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-neutral-600">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="calendar"></i> May 14</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> S. Fujimoto</span>
</div>
<div className="text-right">
<div className="text-sm font-medium text-neutral-900 tracking-tight inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="clock"></i> 7 min
                    </div>
<div className="text-[11px] text-neutral-500">Read time</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 p-3 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:underline" href="#">
<i className="h-4 w-4" data-lucide="book-open"></i>
                  Read Article
                </a>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-md border border-neutral-200 px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="share-2"></i>
                    Share
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

<footer className="border-top border-neutral-200 bg-white border-t">
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
<li className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="phone"></i> +81 00 0000 0000</li>
<li className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="mail"></i> hello@globalintrigueimports.co</li>
</ul>
</div>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6 flex items-center justify-between">
<p className="text-xs text-neutral-500">© 2025 Global Intrigue Imports. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<a className="hover:text-neutral-700" href="#">Terms</a>
<span aria-hidden="true">•</span>
<a className="hover:text-neutral-700" href="#">Privacy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
