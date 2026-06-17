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
      
lucide.createIcons();

/* TAB LOGIC */
const tabButtons=document.querySelectorAll('.tab-btn');
const tabPanels=document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target=btn.dataset.tab;
    tabButtons.forEach(b=>b.setAttribute('aria-selected',b===btn));
    tabPanels.forEach(p=>p.classList.toggle('hidden',p.dataset.panel!==target));
  });
});

/* Transport pass select handler */
const status=document.getElementById('pass-status');
document.querySelectorAll('.select-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=btn.closest('.pass-card');
    const selected=card.classList.toggle('pass-selected');
    btn.textContent=selected?'Selected':'Select';
    btn.setAttribute('aria-pressed',selected);
    status.textContent=`${card.querySelector('h4').textContent} ${selected?'selected':'deselected'}.`;
  });
});

/* Hotel selection logic */
const hotelStatus=document.getElementById('hotel-status');
const totalEl=document.getElementById('hotel-total').querySelector('strong');
let currentSelected=null;

function updateTotal(price){totalEl.textContent=price?`¥${price.toLocaleString()}`:'—';}

document.querySelectorAll('.hotel-select-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=btn.closest('.hotel-card');
    const priceText=card.querySelector('summary span.text-sm').textContent.replace(/[^\d]/g,'');
    const price=parseInt(priceText,10);

    if(currentSelected && currentSelected!==card){
      currentSelected.classList.remove('hotel-selected');
      const prevBtn=currentSelected.querySelector('.hotel-select-btn');
      prevBtn.textContent='Select This Hotel';
      prevBtn.setAttribute('aria-pressed','false');
      currentSelected.querySelector('.selected-badge').classList.add('hidden');
    }

    const selected=card.classList.toggle('hotel-selected');
    btn.textContent=selected?'Selected':'Select This Hotel';
    btn.setAttribute('aria-pressed',selected);
    card.querySelector('.selected-badge').classList.toggle('hidden',!selected);

    updateTotal(selected?price:null);
    hotelStatus.textContent=`${card.querySelector('h4').textContent} ${selected?'selected':'deselected'}.`;
    currentSelected=selected?card:null;
  });
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
      

<section className="w-full md:w-1/2 flex flex-col overflow-y-auto p-6 space-y-8">

<article className="animate-fadeUp bg-gray-900/60 backdrop-blur rounded-2xl ring-1 ring-gray-800 p-6 space-y-8">

<header className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="route"></i>
        Trip Essentials
      </h2>
<nav className="flex gap-1 text-sm font-medium rounded-md ring-1 ring-gray-800">
<button aria-selected="true" className="tab-btn px-3 py-1.5 rounded-l-md border-b-2 border-transparent transition" data-tab="transport">Transport</button>
<button aria-selected="false" className="tab-btn px-3 py-1.5 rounded-r-md border-b-2 border-transparent transition" data-tab="hotel">Hotel</button>
</nav>
</header>
<div className="space-y-8">

<section className="tab-panel space-y-6" data-panel="transport">

<h3 className="text-sm font-medium tracking-tight flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="train"></i>
          JR Pass Options
        </h3>
<div className="grid sm:grid-cols-2 gap-4">

<div className="pass-card rounded-2xl ring-1 ring-gray-800 p-4 flex flex-col justify-between gap-4 transition hover:ring-indigo-500">
<div className="space-y-2">
<h4 className="text-base font-semibold tracking-tight flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="calendar"></i>
                7-Day Pass
              </h4>
<p className="text-xs text-gray-400">Unlimited nationwide rides for seven consecutive days.</p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-indigo-400">¥29 650</span>
<button aria-pressed="false" className="select-btn bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold rounded-md px-3 py-1.5 transition">Select</button>
</div>
</div>

<div className="pass-card rounded-2xl ring-1 ring-gray-800 p-4 flex flex-col justify-between gap-4 transition hover:ring-indigo-500">
<div className="space-y-2">
<h4 className="text-base font-semibold tracking-tight flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="calendar-range"></i>
                14-Day Pass
              </h4>
<p className="text-xs text-gray-400">Ideal for two-week explorations across Japan.</p>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-indigo-400">¥47 250</span>
<button aria-pressed="false" className="select-btn bg-indigo-600 hover:bg-indigo-700 text-xs font-semibold rounded-md px-3 py-1.5 transition">Select</button>
</div>
</div>
</div>
<footer className="pt-2">
<p className="text-xs text-gray-400">Pass cost will be merged into overall budget.</p>
</footer>

<p aria-live="polite" className="sr-only" id="pass-status"></p>
</section>

<section className="tab-panel hidden space-y-6" data-panel="hotel">

<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<h3 className="text-sm font-medium tracking-tight flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="bed-double"></i>
            AI Recommended Hotels
          </h3>
<div className="flex items-center gap-3 text-xs">
<span className="flex items-center gap-1">
<i className="w-3 h-3 text-indigo-400" data-lucide="moon"></i>
              1 night
            </span>
<span className="flex items-center gap-1" id="hotel-total">
<i className="w-3 h-3 text-indigo-400" data-lucide="wallet"></i>
<strong className="font-medium">—</strong>
</span>
</div>
</div>

<div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto pb-1 no-scrollbar snap-x snap-mandatory scroll-smooth">

<details className="hotel-card snap-center shrink-0 md:shrink md:min-w-0 rounded-2xl ring-1 ring-gray-800 overflow-hidden transition hover:ring-indigo-500 group">
<summary className="cursor-pointer select-none">
<div className="relative h-48 md:h-56 w-full">
<img alt="Shibuya Sky Hotel exterior" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent group-hover:from-gray-950/50 transition"></div>
<span className="absolute top-3 left-3 bg-indigo-600/80 text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
<i className="w-3 h-3" data-lucide="tag"></i>20 % Off Today
                </span>
<span className="selected-badge hidden absolute top-3 right-3 bg-emerald-600/80 px-2 py-0.5 rounded-md text-xs font-semibold gap-1 items-center">
<i className="w-3 h-3" data-lucide="check"></i>Selected
                </span>
</div>
<div className="p-4 space-y-2 bg-gray-900">
<div className="flex items-center justify-between gap-2">
<h4 className="text-base font-semibold tracking-tight line-clamp-1">Shibuya Sky Hotel</h4>
<span className="text-sm font-medium text-indigo-400">¥12 000</span>
</div>
<p className="text-xs text-gray-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>Shibuya
                </p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-0.5">
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-gray-600" data-lucide="star"></i>
</div>
<span className="text-xs text-gray-400">8.7 / 10</span>
</div>
</div>
</summary>
<div className="bg-gray-900 px-4 pb-4 space-y-4 text-sm text-gray-300">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="bed-double"></i>
<p>Double Room · 1 Queen Bed</p>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="shield-check"></i>
<p>Free cancellation until 24 h before check-in</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1 text-xs bg-gray-800/80 px-2 py-0.5 rounded-md">
<i className="w-3 h-3" data-lucide="wifi"></i>Wi-Fi
                </span>
<span className="flex items-center gap-1 text-xs bg-gray-800/80 px-2 py-0.5 rounded-md">
<i className="w-3 h-3" data-lucide="sun"></i>AC
                </span>
<span className="flex items-center gap-1 text-xs bg-gray-800/80 px-2 py-0.5 rounded-md">
<i className="w-3 h-3" data-lucide="coffee"></i>Breakfast
                </span>
</div>
<button aria-pressed="false" className="hotel-select-btn w-full bg-indigo-600 hover:bg-indigo-700 font-semibold text-sm rounded-md py-2 transition">
                Select This Hotel
              </button>
</div>
</details>

<details className="hotel-card snap-center shrink-0 md:shrink md:min-w-0 rounded-2xl ring-1 ring-gray-800 overflow-hidden transition hover:ring-indigo-500 group">
<summary className="cursor-pointer select-none">
<div className="relative h-48 md:h-56 w-full">
<img alt="Asakusa Riverside Inn" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent group-hover:from-gray-950/50 transition"></div>
<span className="absolute top-3 left-3 bg-emerald-600/80 text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
<i className="w-3 h-3" data-lucide="tag"></i>Lowest Price
                </span>
<span className="selected-badge hidden absolute top-3 right-3 bg-emerald-600/80 px-2 py-0.5 rounded-md text-xs font-semibold gap-1 items-center">
<i className="w-3 h-3" data-lucide="check"></i>Selected
                </span>
</div>
<div className="p-4 space-y-2 bg-gray-900">
<div className="flex items-center justify-between gap-2">
<h4 className="text-base font-semibold tracking-tight line-clamp-1">Asakusa Riverside Inn</h4>
<span className="text-sm font-medium text-indigo-400">¥8 400</span>
</div>
<p className="text-xs text-gray-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>Asakusa
                </p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-0.5">
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400" data-lucide="star"></i>
</div>
<span className="text-xs text-gray-400">7.9 / 10</span>
</div>
</div>
</summary>
<div className="bg-gray-900 px-4 pb-4 space-y-4 text-sm text-gray-300">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="bed-single"></i>
<p>Twin Room · 2 Single Beds</p>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-indigo-400 mt-0.5" data-lucide="shield-check"></i>
<p>Free cancellation until 48 h before check-in</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="flex items-center gap-1 text-xs bg-gray-800/80 px-2 py-0.5 rounded-md">
<i className="w-3 h-3" data-lucide="wifi"></i>Wi-Fi
                </span>
<span className="flex items-center gap-1 text-xs bg-gray-800/80 px-2 py-0.5 rounded-md">
<i className="w-3 h-3" data-lucide="tv"></i>Smart TV
                </span>
</div>
<button aria-pressed="false" className="hotel-select-btn w-full bg-indigo-600 hover:bg-indigo-700 font-semibold text-sm rounded-md py-2 transition">
                Select This Hotel
              </button>
</div>
</details>
</div>

<footer className="sticky bottom-0 left-0 bg-gray-900/80 backdrop-blur -mx-6 px-6 py-4 rounded-b-2xl flex items-center justify-between">
<p className="text-sm text-gray-400">Hotel cost will be added to daily budget.</p>
<button className="bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold rounded-md px-4 py-2 transition">
            Confirm Hotel Selection
          </button>
</footer>

<p aria-live="polite" className="sr-only" id="hotel-status"></p>
</section>
</div>
</article>
</section>

<aside className="hidden md:block w-1/2 bg-gray-900 relative">
<div className="absolute inset-0 flex items-center justify-center text-gray-600">
<span className="text-sm">Interactive map placeholder</span>
</div>
</aside>



    </>
  );
}
