import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function () {
      // Initialize lucide icons with stroke width 1.5
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      const chips = Array.from(document.querySelectorAll('[data-filter-tag]'));
      const clearBtn = document.getElementById('clearFilters');
      const cards = Array.from(document.querySelectorAll('[data-tags]'));
      const countEl = document.getElementById('resultCount');
      const active = new Set();

      function render() {
        let visible = 0;
        cards.forEach((card) => {
          const tags = card.getAttribute('data-tags').split(',').map(s => s.trim());
          const matches = active.size === 0 || tags.some(t => active.has(t));
          card.classList.toggle('hidden', !matches);
          if (matches) visible++;
        });
        countEl.textContent = String(visible);
      }

      chips.forEach((chip) => {
        chip.addEventListener('click', () => {
          const tag = chip.getAttribute('data-filter-tag');
          const isActive = chip.getAttribute('aria-pressed') === 'true';
          if (isActive) {
            active.delete(tag);
            chip.setAttribute('aria-pressed', 'false');
            chip.classList.remove('bg-pink-100','text-pink-900','ring-pink-300');
            chip.classList.add('bg-white','text-slate-700','ring-slate-200');
          } else {
            active.add(tag);
            chip.setAttribute('aria-pressed', 'true');
            chip.classList.remove('bg-white','text-slate-700','ring-slate-200');
            chip.classList.add('bg-pink-100','text-pink-900','ring-pink-300');
          }
          render();
        });
      });

      clearBtn.addEventListener('click', () => {
        active.clear();
        chips.forEach((chip) => {
          chip.setAttribute('aria-pressed', 'false');
          chip.classList.remove('bg-pink-100','text-pink-900','ring-pink-300');
          chip.classList.add('bg-white','text-slate-700','ring-slate-200');
        });
        render();
      });

      render();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[#FDE2E4] opacity-60 blur-3xl"></div>
<div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#E2F6F0] opacity-60 blur-3xl"></div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#FFF5CC] opacity-60 blur-3xl"></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur-xl bg-white/70 border-b border-pink-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">

<div className="flex items-center gap-3">
<div className="relative">
<svg aria-label="Bao the dumpling mascot" className="drop-shadow-sm" height="44" role="img" viewbox="0 0 120 120" width="44" xmlns="http://www.w3.org/2000/svg">
<defs>
<radialgradient cx="50%" cy="40%" id="baoBody" r="70%">
<stop offset="0%" stop-color="#FFFFFF"></stop>
<stop offset="70%" stop-color="#F9FAFB"></stop>
<stop offset="100%" stop-color="#F1F5F9"></stop>
</radialgradient>
<radialgradient cx="30%" cy="25%" id="baoGloss" r="40%">
<stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"></stop>
<stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"></stop>
</radialgradient>
</defs>
<g>
<ellipse cx="60" cy="65" fill="url(#baoBody)" rx="50" ry="44" stroke="#E5E7EB" strokeWidth="2"></ellipse>
<path d="M60 22 C50 28, 42 34, 38 42" fill="none" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="3"></path>
<path d="M60 22 C62 30, 66 36, 74 42" fill="none" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="3"></path>
<path d="M60 22 C56 30, 54 36, 52 44" fill="none" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="3"></path>
<path d="M60 22 C68 28, 76 34, 82 42" fill="none" stroke="#E2E8F0" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="45" cy="67" fill="#0F172A" r="7.5"></circle>
<circle cx="75" cy="67" fill="#0F172A" r="7.5"></circle>
<circle cx="42.5" cy="64.5" fill="#FFFFFF" r="2.3"></circle>
<circle cx="72.5" cy="64.5" fill="#FFFFFF" r="2.3"></circle>
<path d="M46 81 C56 88, 64 88, 74 81" fill="none" stroke="#F43F5E" strokeLinecap="round" strokeWidth="4"></path>
<ellipse cx="45" cy="52" fill="url(#baoGloss)" rx="22" ry="14"></ellipse>
</g>
</svg>
</div>
<div className="leading-none"></div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

<div className="bg-white/80 backdrop-blur rounded-xl border border-pink-200/60 shadow-sm">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-pink-600" data-lucide="filter"></i>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Fredoka, Nunito, ui-sans-serif'}}>Explore Walking Routes</h1>
</div>
<div className="text-sm text-slate-500">
<span className="font-medium text-slate-700" id="resultCount">6</span> routes
              </div>
</div>
<div className="mt-4 sm:mt-5">
<p className="text-sm text-slate-600">Filter by Interest Tags</p>
<div className="mt-3 flex flex-wrap gap-2">

<button aria-pressed="false" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700 hover:bg-pink-50 px-3 py-1.5 text-sm ring-1 ring-slate-200 transition aria-pressed:false" data-filter-tag="Historical Sites" type="button">
<i className="w-4 h-4 text-pink-600" data-lucide="landmark"></i>
<span>Historical Sites</span>
</button>
<button aria-pressed="false" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700 hover:bg-pink-50 px-3 py-1.5 text-sm ring-1 ring-slate-200 transition" data-filter-tag="Temples" type="button">
<i className="w-4 h-4 text-pink-600" data-lucide="sun"></i>
<span>Temples</span>
</button>
<button aria-pressed="false" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700 hover:bg-pink-50 px-3 py-1.5 text-sm ring-1 ring-slate-200 transition" data-filter-tag="Foodies" type="button">
<i className="w-4 h-4 text-pink-600" data-lucide="utensils"></i>
<span>Foodies</span>
</button>
<button aria-pressed="false" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700 hover:bg-pink-50 px-3 py-1.5 text-sm ring-1 ring-slate-200 transition" data-filter-tag="Art Lovers" type="button">
<i className="w-4 h-4 text-pink-600" data-lucide="palette"></i>
<span>Art Lovers</span>
</button>
<button aria-pressed="false" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-700 hover:bg-pink-50 px-3 py-1.5 text-sm ring-1 ring-slate-200 transition" data-filter-tag="Tea Lovers" type="button">
<i className="w-4 h-4 text-pink-600" data-lucide="cup-soda"></i>
<span>Tea Lovers</span>
</button>
<div className="grow"></div>
<button className="inline-flex items-center gap-2 rounded-full bg-white text-slate-600 hover:text-slate-800 hover:bg-slate-50 px-3 py-1.5 text-sm ring-1 ring-slate-200 transition" id="clearFilters" type="button">
<i className="w-4 h-4" data-lucide="x"></i>
                  Clear
                </button>
</div>
</div>
</div>
<div className="border-t border-slate-200/70"></div>

<div className="p-4 sm:p-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" id="routesGrid">

<article className="group rounded-xl bg-white/90 backdrop-blur border border-slate-200 hover:border-pink-300 focus:border-pink-400 hover:shadow-md focus:shadow-md transition p-4 sm:p-5 cursor-pointer outline-none" data-tags="Historical Sites,Tea Lovers,Foodies" tabindex="0">
<div className="flex items-start justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Old Town Heritage Stroll</h2>
<i className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-3 space-y-2.5 text-sm">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="clock"></i>
<span className="font-medium text-slate-800">Total Duration:</span>
<span>2.5 hours</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="mountain"></i>
<span className="font-medium text-slate-800">Difficulty:</span>
<span>Easy</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="map"></i>
<span className="font-medium text-slate-800">Neighborhoods:</span>
<span>Dadaocheng, Ximending</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="tag"></i>
<span className="font-medium text-slate-800">Primary Interest Tags:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 ring-1 ring-pink-200 text-xs">Historical Sites</span>
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 text-xs">Tea Lovers</span>
<span className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 ring-1 ring-orange-200 text-xs">Foodies</span>
</div>
</div>
</div>
</article>
<article className="group rounded-xl bg-white/90 backdrop-blur border border-slate-200 hover:border-pink-300 focus:border-pink-400 hover:shadow-md focus:shadow-md transition p-4 sm:p-5 cursor-pointer outline-none" data-tags="Temples,Historical Sites" tabindex="0">
<div className="flex items-start justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Temple Hopping in Wanhua</h2>
<i className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-3 space-y-2.5 text-sm">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="clock"></i>
<span className="font-medium text-slate-800">Total Duration:</span>
<span>2 hours</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="mountain"></i>
<span className="font-medium text-slate-800">Difficulty:</span>
<span>Easy</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="map"></i>
<span className="font-medium text-slate-800">Neighborhoods:</span>
<span>Wanhua, Longshan</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="tag"></i>
<span className="font-medium text-slate-800">Primary Interest Tags:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 ring-1 ring-violet-200 text-xs">Temples</span>
<span className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 ring-1 ring-pink-200 text-xs">Historical Sites</span>
</div>
</div>
</div>
</article>
<article className="group rounded-xl bg-white/90 backdrop-blur border border-slate-200 hover:border-pink-300 focus:border-pink-400 hover:shadow-md focus:shadow-md transition p-4 sm:p-5 cursor-pointer outline-none" data-tags="Art Lovers,Foodies" tabindex="0">
<div className="flex items-start justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Art &amp; Alleyways</h2>
<i className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-3 space-y-2.5 text-sm">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="clock"></i>
<span className="font-medium text-slate-800">Total Duration:</span>
<span>3 hours</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="mountain"></i>
<span className="font-medium text-slate-800">Difficulty:</span>
<span>Moderate</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="map"></i>
<span className="font-medium text-slate-800">Neighborhoods:</span>
<span>Zhongshan, Huashan</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="tag"></i>
<span className="font-medium text-slate-800">Primary Interest Tags:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200 text-xs">Art Lovers</span>
<span className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 ring-1 ring-orange-200 text-xs">Foodies</span>
</div>
</div>
</div>
</article>
<article className="group rounded-xl bg-white/90 backdrop-blur border border-slate-200 hover:border-pink-300 focus:border-pink-400 hover:shadow-md focus:shadow-md transition p-4 sm:p-5 cursor-pointer outline-none" data-tags="Tea Lovers" tabindex="0">
<div className="flex items-start justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Riverside Tea Trail</h2>
<i className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-3 space-y-2.5 text-sm">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="clock"></i>
<span className="font-medium text-slate-800">Total Duration:</span>
<span>1.5 hours</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="mountain"></i>
<span className="font-medium text-slate-800">Difficulty:</span>
<span>Easy</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="map"></i>
<span className="font-medium text-slate-800">Neighborhoods:</span>
<span>Dadaocheng Riverside</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="tag"></i>
<span className="font-medium text-slate-800">Primary Interest Tags:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 text-xs">Tea Lovers</span>
</div>
</div>
</div>
</article>
<article className="group rounded-xl bg-white/90 backdrop-blur border border-slate-200 hover:border-pink-300 focus:border-pink-400 hover:shadow-md focus:shadow-md transition p-4 sm:p-5 cursor-pointer outline-none" data-tags="Foodies" tabindex="0">
<div className="flex items-start justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Night Market Nibbles</h2>
<i className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-3 space-y-2.5 text-sm">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="clock"></i>
<span className="font-medium text-slate-800">Total Duration:</span>
<span>2 hours</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="mountain"></i>
<span className="font-medium text-slate-800">Difficulty:</span>
<span>Easy</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="map"></i>
<span className="font-medium text-slate-800">Neighborhoods:</span>
<span>Ningxia Night Market</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="tag"></i>
<span className="font-medium text-slate-800">Primary Interest Tags:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 ring-1 ring-orange-200 text-xs">Foodies</span>
</div>
</div>
</div>
</article>
<article className="group rounded-xl bg-white/90 backdrop-blur border border-slate-200 hover:border-pink-300 focus:border-pink-400 hover:shadow-md focus:shadow-md transition p-4 sm:p-5 cursor-pointer outline-none" data-tags="Art Lovers,Historical Sites" tabindex="0">
<div className="flex items-start justify-between">
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Creative Parks Circuit</h2>
<i className="w-4 h-4 text-slate-400 group-hover:text-pink-600 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-3 space-y-2.5 text-sm">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="clock"></i>
<span className="font-medium text-slate-800">Total Duration:</span>
<span>2.5 hours</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="mountain"></i>
<span className="font-medium text-slate-800">Difficulty:</span>
<span>Moderate</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="map"></i>
<span className="font-medium text-slate-800">Neighborhoods:</span>
<span>Huashan 1914, Songshan</span>
</div>
<div className="flex items-center gap-2 text-slate-700">
<i className="w-4 h-4 text-pink-600" data-lucide="tag"></i>
<span className="font-medium text-slate-800">Primary Interest Tags:</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200 text-xs">Art Lovers</span>
<span className="px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 ring-1 ring-pink-200 text-xs">Historical Sites</span>
</div>
</div>
</div>
</article>
</div>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
