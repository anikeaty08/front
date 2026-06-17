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



    // Init icons
    lucide.createIcons();

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileBtn?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Mode toggle
    const modeSearchBtn = document.getElementById('modeSearch');
    const modeGenBtn = document.getElementById('modeGenerate');
    const searchForm = document.getElementById('searchForm');
    const genForm = document.getElementById('genForm');

    function setMode(mode) {
      const active = 'text-white bg-zinc-900 ring-1 ring-white/10';
      const idle = 'text-zinc-300 hover:text-white bg-transparent';
      if (mode === 'search') {
        modeSearchBtn.className = 'px-3.5 h-8 rounded-full text-sm font-medium ' + active;
        modeGenBtn.className = 'px-3.5 h-8 rounded-full text-sm font-medium ' + idle;
        searchForm.classList.remove('hidden');
        genForm.classList.add('hidden');
      } else {
        modeGenBtn.className = 'px-3.5 h-8 rounded-full text-sm font-medium ' + active;
        modeSearchBtn.className = 'px-3.5 h-8 rounded-full text-sm font-medium ' + idle;
        searchForm.classList.add('hidden');
        genForm.classList.remove('hidden');
      }
    }
    modeSearchBtn?.addEventListener('click', () => setMode('search'));
    modeGenBtn?.addEventListener('click', () => setMode('generate'));

    // Model selector
    const modelButtons = document.querySelectorAll('.model-btn');
    modelButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modelButtons.forEach(b => b.className = 'model-btn h-9 rounded-md text-xs font-medium bg-white/5 ring-1 ring-white/10 text-zinc-300 hover:text-white');
        btn.className = 'model-btn h-9 rounded-md text-xs font-medium bg-zinc-900 ring-1 ring-white/10 text-white';
      });
    });

    // Bookmark demo
    document.querySelectorAll('.bookmark-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle('text-rose-300');
        btn.classList.toggle('text-zinc-400');
      });
    });

    // Chart.js - Generation time
    const ctx = document.getElementById('genChart');
    if (ctx) {
      const data = [2.4, 2.2, 2.0, 1.9, 1.7, 1.8, 1.6, 1.7, 1.5, 1.6, 1.4, 1.5];
      const avg = (data.reduce((a, b) => a + b, 0) / data.length).toFixed(1);
      const avgEl = document.getElementById('avgTime');
      if (avgEl) avgEl.textContent = avg + 's';
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','Now'],
          datasets: [{
            data,
            borderColor: 'rgba(255,255,255,0.9)',
            backgroundColor: 'rgba(255,255,255,0.1)',
            tension: 0.35,
            pointRadius: 0,
            fill: true
          }]
        },
        options: {
          plugins: { legend: { display: false }, tooltip: { intersect: false, mode: 'index' } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(200,200,200,0.6)', font: { size: 10 } } },
            y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(200,200,200,0.6)', font: { size: 10 } }, suggestedMin: 1, suggestedMax: 3 }
          }
        }
      });
    }

    // Demo submit handlers
    searchForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Searching assets…');
    });
    genForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Generating with selected model…');
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-10%,rgba(88,125,255,0.20),transparent_70%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(255,0,122,0.12),transparent_70%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_60%,rgba(0,219,222,0.12),transparent_70%)]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
<i className="h-4 w-4 text-white" data-lucide="sparkles"></i>
</span>
<span className="text-zinc-100 text-base font-semibold tracking-tight">Pickogen</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">All Assets</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Library</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Support</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-3.5 h-9 rounded-md text-sm font-medium text-zinc-200 bg-white/0 hover:bg-white/5 ring-1 ring-white/10 transition">Log in</button>
<button className="px-3.5 h-9 rounded-md text-sm font-medium text-black bg-white hover:bg-zinc-100 transition">Sign up</button>
</div>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-white/5" id="mobileMenu">
<nav className="py-3 grid gap-2">
<a className="px-2 py-2 rounded-md text-sm font-medium text-zinc-200 hover:bg-white/5" href="#">All Assets</a>
<a className="px-2 py-2 rounded-md text-sm font-medium text-zinc-200 hover:bg-white/5" href="#">Library</a>
<a className="px-2 py-2 rounded-md text-sm font-medium text-zinc-200 hover:bg-white/5" href="#">Collections</a>
<a className="px-2 py-2 rounded-md text-sm font-medium text-zinc-200 hover:bg-white/5" href="#">Support</a>
<div className="flex gap-2 pt-2">
<button className="flex-1 h-9 rounded-md text-sm font-medium text-zinc-200 bg-white/0 hover:bg-white/5 ring-1 ring-white/10 transition">Log in</button>
<button className="flex-1 h-9 rounded-md text-sm font-medium text-black bg-white hover:bg-zinc-100 transition">Sign up</button>
</div>
</nav>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 md:pt-20 md:pb-14">
<div className="mx-auto max-w-3xl text-center">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/5 text-xs font-medium text-zinc-300">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
<i className="h-3 w-3" data-lucide="bolt"></i>
</span>
          Introducing Pickogen
        </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-50">Your AI Powered Stock Library</h1>
<p className="mt-4 text-base sm:text-lg text-zinc-400">Search, generate, and organize high‑quality images &amp; icons — all in one fast, creative workspace.</p>

<div className="mt-8 bg-white/5 ring-1 ring-white/10 rounded-xl p-2 sm:p-3">

<div className="flex items-center justify-between gap-3">
<div className="inline-flex p-1 rounded-full bg-white/5 ring-1 ring-white/10">
<button className="px-3.5 h-8 rounded-full text-sm font-medium text-white bg-zinc-900 ring-1 ring-white/10" id="modeSearch">Search assets</button>
<button className="px-3.5 h-8 rounded-full text-sm font-medium text-zinc-300 hover:text-white" id="modeGenerate">Generate with AI</button>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10">
<i className="w-3.5 h-3.5" data-lucide="image"></i> Photos
              </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 ring-1 ring-white/10">
<i className="w-3.5 h-3.5" data-lucide="square"></i> Icons
              </span>
</div>
</div>

<form className="mt-3 grid gap-3" id="searchForm">
<div className="flex items-center gap-2 bg-black/40 ring-1 ring-white/10 rounded-lg px-3 py-2.5">
<i className="w-5 h-5 text-zinc-400" data-lucide="search"></i>
<input className="flex-1 bg-transparent outline-none placeholder-zinc-500 text-zinc-100 text-sm" placeholder="Search 175M+ photos, vectors, and icons..." type="text"/>
<button className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md text-sm font-medium text-black bg-white hover:bg-zinc-100" type="submit">
<i className="w-4 h-4" data-lucide="arrow-right"></i> Search
              </button>
</div>
<div className="flex flex-wrap items-center gap-2">
<span className="text-xs text-zinc-500">Trending:</span>
<button className="text-xs px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10">3D gradient</button>
<button className="text-xs px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Minimal icon set</button>
<button className="text-xs px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Abstract render</button>
<button className="text-xs px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10">Mountain dusk</button>
</div>
</form>

<form className="hidden mt-3 grid gap-3" id="genForm">
<div className="grid md:grid-cols-3 gap-3">
<div className="md:col-span-2 bg-black/40 ring-1 ring-white/10 rounded-lg px-3 py-2.5">
<div className="flex items-start gap-2">
<i className="w-5 h-5 mt-0.5 text-zinc-400" data-lucide="wand-2"></i>
<textarea className="flex-1 bg-transparent outline-none placeholder-zinc-500 text-zinc-100 text-sm" placeholder="Describe what you want to create — e.g., 'isometric 3D icon of a rocket, neon edges, dark canvas'" rows="2"></textarea>
</div>
<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="text-xs text-zinc-500">Styles:</span>
<button className="text-xs px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10" type="button">Realistic</button>
<button className="text-xs px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10" type="button">3D Render</button>
<button className="text-xs px-2.5 py-1 rounded-md bg-white/5 ring-1 ring-white/10" type="button">Flat Icon</button>
</div>
</div>
<div className="grid gap-3">
<div className="p-2 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="text-xs text-zinc-400 mb-2">Model</div>
<div className="grid grid-cols-3 gap-2" id="modelGroup">
<button className="model-btn h-9 rounded-md text-xs font-medium bg-zinc-900 ring-1 ring-white/10 text-white" data-model="classic">Classic Fast</button>
<button className="model-btn h-9 rounded-md text-xs font-medium bg-white/5 ring-1 ring-white/10 text-zinc-300 hover:text-white" data-model="flux">Flux Dev</button>
<button className="model-btn h-9 rounded-md text-xs font-medium bg-white/5 ring-1 ring-white/10 text-zinc-300 hover:text-white" data-model="imagen">Imagen 3</button>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 h-10 rounded-md text-sm font-medium text-black bg-white hover:bg-zinc-100" type="submit">
<i className="w-4 h-4" data-lucide="play"></i> Generate
                </button>
</div>
</div>
</form>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
<img alt="3D" className="aspect-[4/3] object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="render" className="aspect-[4/3] object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="mountains" className="hidden sm:block aspect-[4/3] object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="face" className="hidden md:block aspect-[4/3] object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="minimal" className="hidden md:block aspect-[4/3] object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="abstract" className="hidden md:block aspect-[4/3] object-cover rounded-lg ring-1 ring-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="mt-8 flex items-center justify-center gap-4">
<a className="px-4 h-10 rounded-md text-sm font-medium text-black bg-white hover:bg-zinc-100" href="#">Get started for free</a>
<a className="px-4 h-10 rounded-md text-sm font-medium text-zinc-300 bg-white/0 hover:bg-white/5 ring-1 ring-white/10" href="#">Explore Features</a>
</div>
</div>
</div>
</section>

<section className="py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-center gap-8 opacity-70">
<div className="text-xs text-zinc-500">Powered by</div>
<div className="flex items-center gap-6 text-zinc-400">
<span className="text-sm">Freepik</span>
<span className="text-sm">Flux Dev</span>
<span className="text-sm">Imagen 3</span>
<span className="text-sm">Classic Fast</span>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50 text-center">Core features</h2>
<p className="text-zinc-400 text-center mt-2">Search, generate, and save assets without leaving your flow.</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-indigo-400/20 ring-1 ring-indigo-400/30 flex items-center justify-center text-indigo-300">
<i className="w-4 h-4" data-lucide="search-code"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100">Stock Image + Icon Search</h3>
</div>
<p className="mt-3 text-sm text-zinc-400">Access 175M+ photos, vectors, and icons. Filters for license, color, orientation, and type.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
<i className="w-4 h-4" data-lucide="filter"></i> Advanced filters
          </div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-emerald-400/20 ring-1 ring-emerald-400/30 flex items-center justify-center text-emerald-300">
<i className="w-4 h-4" data-lucide="wand-2"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100">AI Image &amp; Icon Generator</h3>
</div>
<p className="mt-3 text-sm text-zinc-400">Generate visuals with Classic Fast, Flux Dev, and Imagen 3. Real‑time preview and style presets.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
<i className="w-4 h-4" data-lucide="cpu"></i> Multi‑model routing
          </div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg bg-sky-400/20 ring-1 ring-sky-400/30 flex items-center justify-center text-sky-300">
<i className="w-4 h-4" data-lucide="bookmark"></i>
</span>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100">Smart Bookmarking</h3>
</div>
<p className="mt-3 text-sm text-zinc-400">Save assets into Collections, auto‑tag by theme, and collaborate with teammates.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
<i className="w-4 h-4" data-lucide="sparkles"></i> Auto‑tag &amp; dedupe
          </div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-zinc-100">Collections</h3>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md text-sm font-medium text-black bg-white hover:bg-zinc-100">
<i className="w-4 h-4" data-lucide="plus"></i> New
          </button>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="group rounded-xl bg-black/40 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">Landing Hero</div>
<button aria-label="Bookmark" className="bookmark-btn text-zinc-400 hover:text-rose-300">
<i className="w-4 h-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 text-xs text-zinc-500">12 items · Auto‑tagged</div>
</div>
<div className="group rounded-xl bg-black/40 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">Iconography</div>
<button aria-label="Bookmark" className="bookmark-btn text-zinc-400 hover:text-rose-300">
<i className="w-4 h-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 text-xs text-zinc-500">34 items · Shared</div>
</div>
<div className="group rounded-xl bg-black/40 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">Campaign Q4</div>
<button aria-label="Bookmark" className="bookmark-btn text-zinc-400 hover:text-rose-300">
<i className="w-4 h-4" data-lucide="bookmark"></i>
</button>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="thumb" className="h-16 w-full rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="mt-3 text-xs text-zinc-500">9 items · Private</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-zinc-100">Speed matters</h3>
<div className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 bg-emerald-400/15 ring-1 ring-emerald-400/30 text-xs text-emerald-300">
<i className="w-3.5 h-3.5" data-lucide="timer"></i> Avg gen <span className="font-medium" id="avgTime">1.8s</span>
</div>
</div>
<p className="text-sm text-zinc-400 mt-1">Real sessions sampled from the last 24h across models.</p>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-4">
<h4 className="text-sm font-medium text-zinc-200">Generation time</h4>
<p className="text-xs text-zinc-500">Lower is better</p>
<div className="mt-3 h-36 rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
<div className="h-full">
<canvas id="genChart"></canvas>
</div>
</div>
</div>
<div className="rounded-xl bg-black/40 ring-1 ring-white/10 p-4">
<h4 className="text-sm font-medium text-zinc-200">Most used models</h4>
<p className="text-xs text-zinc-500">Last 7 days</p>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-center">
<div className="text-xs text-zinc-400">Classic</div>
<div className="text-lg font-semibold tracking-tight text-zinc-100">48%</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-center">
<div className="text-xs text-zinc-400">Flux Dev</div>
<div className="text-lg font-semibold tracking-tight text-zinc-100">33%</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-center">
<div className="text-xs text-zinc-400">Imagen 3</div>
<div className="text-lg font-semibold tracking-tight text-zinc-100">19%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50 text-center">Made for modern teams</h2>
<p className="text-zinc-400 text-center mt-2">Use cases across the creative lifecycle.</p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<a className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5" href="#">
<img alt="Marketers" className="h-40 w-full object-cover opacity-90 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<div className="text-sm font-medium text-zinc-200">Marketers</div>
<div className="text-xs text-zinc-400">Ad creatives, A/B sets</div>
</div>
</img></a>
<a className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5" href="#">
<img alt="Designers" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<div className="text-sm font-medium text-zinc-200">Designers</div>
<div className="text-xs text-zinc-400">Boards, hero imagery</div>
</div>
</img></a>
<a className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5" href="#">
<img alt="E-commerce" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<div className="text-sm font-medium text-zinc-200">E‑commerce</div>
<div className="text-xs text-zinc-400">Product visuals</div>
</div>
</img></a>
<a className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5" href="#">
<img alt="Creators" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<div className="text-sm font-medium text-zinc-200">Creators</div>
<div className="text-xs text-zinc-400">Thumbnails &amp; banners</div>
</div>
</img></a>
<a className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5" href="#">
<img alt="SaaS" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3">
<div className="text-sm font-medium text-zinc-200">SaaS teams</div>
<div className="text-xs text-zinc-400">Visual prototyping</div>
</div>
</img></a>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50">Shrink the time between idea and output</h2>
<p className="mt-4 text-zinc-400 text-base">Pickogen blends world‑class search with fast, reliable generation so AI feels like part of your creative workflow — not a replacement for it.</p>
<ul className="mt-6 grid gap-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Unified search and generation</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Opinionated defaults, designer‑friendly</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Collections, sharing, and versioning</li>
</ul>
<div className="mt-6 flex gap-3">
<a className="px-4 h-10 rounded-md text-sm font-medium text-black bg-white hover:bg-zinc-100" href="#">Start free</a>
<a className="px-4 h-10 rounded-md text-sm font-medium text-zinc-300 bg-white/0 hover:bg-white/5 ring-1 ring-white/10" href="#">View pricing</a>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Workspace" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" />
</img></div>
</div>
</section>

<section className="py-12 md:py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50">Join the waitlist</h3>
<p className="text-sm text-zinc-400 mt-2">Be first to access the AI stock library for fast, premium creative work.</p>
</div>
<form className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 bg-white/5 ring-1 ring-white/10 rounded-md px-3 h-10 flex items-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="mail"></i>
<input className="ml-2 flex-1 bg-transparent outline-none placeholder-zinc-500 text-sm text-zinc-100" placeholder="Your email" required="" type="email"/>
</div>
<button className="h-10 px-4 rounded-md text-sm font-medium text-black bg-white hover:bg-zinc-100">Get early access</button>
</form>
</div>
</section>
<footer className="py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
<i className="h-4 w-4 text-white" data-lucide="sparkles"></i>
</span>
<span className="text-zinc-100 text-base font-semibold tracking-tight">Pickogen</span>
</div>
<p className="text-sm text-zinc-500 mt-3 max-w-md">The first AI‑powered stock library where you can search and generate high‑quality photos and icons — all in one place.</p>
<div className="mt-4 flex items-center gap-3 text-zinc-400">
<a className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
<div>
<div className="text-sm font-medium text-zinc-300">Product</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white" href="#">Search</a></li>
<li><a className="hover:text-white" href="#">AI Generator</a></li>
<li><a className="hover:text-white" href="#">Collections</a></li>
<li><a className="hover:text-white" href="#">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-zinc-300">Company</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
<li><a className="hover:text-white" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="mt-8 text-center text-xs text-zinc-500">© 2025 Pickogen. All rights reserved.</div>
</footer>


    </>
  );
}
