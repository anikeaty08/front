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



      // Replace icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons();
        }
      });

      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          const isOpen = !mobileMenu.classList.contains('hidden');
          mobileBtn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        });
      }

      // Simple listing filter demo
      const searchBtn = document.getElementById('searchBtn');
      const q = document.getElementById('q');
      const type = document.getElementById('type');
      const min = document.getElementById('min');
      const max = document.getElementById('max');
      const cards = Array.from(document.querySelectorAll('.listing'));

      function applyFilters() {
        const query = (q.value || '').toLowerCase();
        const typeVal = (type.value || '').toLowerCase();
        const minVal = parseInt(min.value || '0', 10);
        const maxVal = parseInt(max.value || '999999999', 10);

        cards.forEach(card => {
          const cType = (card.dataset.type || '').toLowerCase();
          const cLoc = (card.dataset.location || '').toLowerCase();
          const cPrice = parseInt(card.dataset.price || '0', 10);

          const matchQuery = !query || cLoc.includes(query);
          const matchType = !typeVal || cType === typeVal;
          const matchPrice = cPrice >= minVal && cPrice <= maxVal;

          if (matchQuery && matchType && matchPrice) {
            card.classList.remove('opacity-30', 'pointer-events-none');
          } else {
            card.classList.add('opacity-30', 'pointer-events-none');
          }
        });
      }

      if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
          e.preventDefault();
          applyFilters();
        });
      }

      // Quick chips filtering by flags
      document.querySelectorAll('.quickchip').forEach(chip => {
        chip.addEventListener('click', () => {
          const flag = chip.dataset.quick;
          const active = chip.classList.toggle('ring-1') && chip.classList.toggle('ring-white/30');

          // If activating this chip, deactivate others to keep it simple
          if (active) {
            document.querySelectorAll('.quickchip').forEach(other => {
              if (other !== chip) other.classList.remove('ring-1', 'ring-white/30');
            });
          }

          cards.forEach(card => {
            const flags = (card.dataset.flags || '').toLowerCase();
            const show = !active || flags.includes(flag);
            card.classList.toggle('hidden', !show);
          });
        });
      });

      // Contact form mock submit
      const contactForm = document.getElementById('contactForm');
      const formNotice = document.getElementById('formNotice');
      if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
          e.preventDefault();
          formNotice.classList.remove('sr-only');
          formNotice.textContent = 'Thanks! Your message has been sent.';
          contactForm.reset();
          setTimeout(() => formNotice.classList.add('sr-only'), 3500);
        });
      }

      // Valuation form mock submit
      const valuationForm = document.getElementById('valuationForm');
      if (valuationForm) {
        valuationForm.addEventListener('submit', (e) => {
          e.preventDefault();
          alert('Thanks! I\'ll send your valuation to your email shortly.');
          valuationForm.reset();
        });
      }
    
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
<div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-cyan-500/15 via-fuchsia-500/10 to-transparent blur-3xl opacity-70 motion-safe:animate-pulse"></div>
<div className="absolute -bottom-24 -right-24 h-[38rem] w-[38rem] rounded-full bg-gradient-to-tr from-indigo-500/15 via-emerald-500/10 to-transparent blur-3xl opacity-60 motion-safe:animate-pulse"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]"></div>
</div>

<div className="hidden sm:flex items-center justify-center gap-2 text-sm text-gray-300 bg-transparent border-b border-white/10 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/5">
<svg className="w-4 h-4 text-gray-300" data-lucide="phone" strokeWidth="1.5"></svg>
<span className="tabular-nums">(+1) 555-0148</span>
<span className="w-px h-4 bg-white/10"></span>
<svg className="w-4 h-4 text-gray-300" data-lucide="mail" strokeWidth="1.5"></svg>
<span>hello@emilyhomes.com</span>
</div>

<header className="sticky top-0 z-50 backdrop-blur bg-gray-950/70 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3" href="#">
<div className="flex items-center justify-center h-9 w-9 rounded-md bg-white text-gray-900 text-sm tracking-tight font-semibold">EC</div>
<div className="hidden sm:flex flex-col">
<span className="text-base tracking-tight font-semibold text-white">Emily Carter</span>
<span className="text-xs text-gray-400">Real Estate</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition" href="#listings">Listings</a>
<a className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition" href="#buy">Buy</a>
<a className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition" href="#sell">Sell</a>
<a className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition" href="#about">About</a>
<a className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex group relative overflow-hidden items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition" href="#contact">
<span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 group-hover:translate-x-[260%] transition-transform duration-700 ease-out"></span>
<svg className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></svg>
              Book a consult
            </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" id="mobileMenuBtn">
<svg className="w-5 h-5 text-white" data-lucide="menu" strokeWidth="1.5"></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-gray-950/80 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="grid gap-2">
<a className="flex items-center gap-2 py-2 text-gray-200 hover:text-white transition" href="#listings">
<svg className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></svg> Listings
            </a>
<a className="flex items-center gap-2 py-2 text-gray-200 hover:text-white transition" href="#buy">
<svg className="w-4 h-4" data-lucide="key" strokeWidth="1.5"></svg> Buy
            </a>
<a className="flex items-center gap-2 py-2 text-gray-200 hover:text-white transition" href="#sell">
<svg className="w-4 h-4" data-lucide="banknote" strokeWidth="1.5"></svg> Sell
            </a>
<a className="flex items-center gap-2 py-2 text-gray-200 hover:text-white transition" href="#about">
<svg className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></svg> About
            </a>
<a className="flex items-center gap-2 py-2 text-gray-200 hover:text-white transition" href="#contact">
<svg className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></svg> Contact
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.12]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 text-xs text-gray-300 border border-white/10 rounded-full px-3 py-1 mb-4 bg-white/5 backdrop-blur">
<svg className="w-3.5 h-3.5 text-white" data-lucide="sparkles" strokeWidth="1.5"></svg>
              Handpicked homes. Seamless closings.
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-300">
              Find your next home with confidence
            </h1>
<p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
              I combine market expertise with concierge-level service to help you buy or sell with clarity. Explore curated listings and personalized guidance.
            </p>

<div className="mt-8 rounded-xl border border-white/10 p-3 sm:p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] bg-white/5 backdrop-blur">
<div className="grid md:grid-cols-12 gap-3">

<div className="md:col-span-4">
<label className="block text-sm text-gray-300 mb-1" htmlFor="q">Location or keyword</label>
<div className="relative">
<svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" data-lucide="search" strokeWidth="1.5"></svg>
<input className="w-full pl-9 pr-3 py-2.5 rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20 text-sm transition" id="q" placeholder="City, neighborhood, street..." type="text"/>
</div>
</div>

<div className="md:col-span-3">
<label className="block text-sm text-gray-300 mb-1" htmlFor="type">Property type</label>
<div className="relative">
<select className="w-full appearance-none pr-9 pl-3 py-2.5 rounded-md border border-white/10 bg-white/5 text-gray-100 focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20 text-sm" id="type">
<option value="">Any</option>
<option>House</option>
<option>Condo</option>
<option>Townhome</option>
<option>Apartment</option>
</select>
<svg className="pointer-events-none absolute right-3 top-2.5 w-4 h-4 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></svg>
</div>
</div>

<div className="md:col-span-2">
<label className="block text-sm text-gray-300 mb-1" htmlFor="min">Min price</label>
<input className="w-full pl-3 pr-3 py-2.5 rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20 text-sm transition" id="min" inputmode="numeric" placeholder="$250k" type="number"/>
</div>

<div className="md:col-span-2">
<label className="block text-sm text-gray-300 mb-1" htmlFor="max">Max price</label>
<input className="w-full pl-3 pr-3 py-2.5 rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20 text-sm transition" id="max" inputmode="numeric" placeholder="$1.2M" type="number"/>
</div>

<div className="md:col-span-1 flex items-end">
<button className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2.5 text-sm hover:bg-gray-100 transition" id="searchBtn">
<span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 group-hover:translate-x-[260%] transition-transform duration-700 ease-out"></span>
<svg className="w-4 h-4" data-lucide="filter" strokeWidth="1.5"></svg>
                    Search
                  </button>
</div>
</div>

<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="quickchip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200 hover:bg-white/10 hover:border-white/20 transition" data-quick="new">
<svg className="w-3.5 h-3.5" data-lucide="sparkle" strokeWidth="1.5"></svg> New this week
                </button>
<button className="quickchip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200 hover:bg-white/10 hover:border-white/20 transition" data-quick="open">
<svg className="w-3.5 h-3.5" data-lucide="door-open" strokeWidth="1.5"></svg> Open house
                </button>
<button className="quickchip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200 hover:bg-white/10 hover:border-white/20 transition" data-quick="pricecut">
<svg className="w-3.5 h-3.5" data-lucide="scissors" strokeWidth="1.5"></svg> Price drop
                </button>
</div>
</div>

<div className="mt-6 flex items-center gap-6 text-sm text-gray-300">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-white" data-lucide="shield-check" strokeWidth="1.5"></svg>
                Top Producer 2024
              </div>
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-white" data-lucide="badge-check" strokeWidth="1.5"></svg>
                Certified Negotiation Expert
              </div>
</div>
</div>

<div className="relative">
<div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] bg-white/5 backdrop-blur group">
<img alt="Modern home exterior" className="w-full h-[360px] sm:h-[440px] object-cover transform transition duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white/5 border border-white/10 rounded-xl shadow backdrop-blur p-4 items-center gap-4">
<img alt="Agent headshot" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-white">Emily Carter</p>
<p className="text-xs text-gray-300">Your trusted local agent</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/10 bg-transparent" id="listings">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Featured Listings</h2>
<p className="mt-1 text-gray-400 text-sm">Curated properties that blend design, location, and value.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition" href="#">
            View all
            <svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</a>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="listingsGrid">

<article className="listing group rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition backdrop-blur" data-flags="new,open" data-location="San Francisco" data-price="1750000" data-type="House">
<div className="relative">
<img alt="Listing photo" className="h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="text-[11px] uppercase tracking-wide bg-white text-gray-900 px-2.5 py-1 rounded-full">New</span>
<span className="text-[11px] uppercase tracking-wide bg-white/80 text-gray-900 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur">Open House</span>
</div>
<button aria-label="Save" className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 border border-white/20 backdrop-blur hover:bg-white transition">
<svg className="w-4.5 h-4.5 text-gray-900" data-lucide="heart" strokeWidth="1.5"></svg>
</button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-lg font-semibold tracking-tight text-white">$1,750,000</p>
<p className="text-xs text-gray-400">San Francisco, CA</p>
</div>
<p className="mt-1 text-sm text-gray-200">4 bd • 3 ba • 2,250 sqft</p>
<p className="mt-2 text-sm text-gray-300/90 line-clamp-2">Light-filled modern house in Noe Valley with city views and private deck.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-300">
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></svg> Noe Valley
                  </span>
<span className="w-px h-4 bg-white/10"></span>
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="car" strokeWidth="1.5"></svg> 2-car
                  </span>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-white transition" href="#">Details
                  <svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</article>

<article className="listing group rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition backdrop-blur" data-flags="pricecut" data-location="Seattle" data-price="825000" data-type="Condo">
<div className="relative">
<img alt="Listing photo" className="h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="text-[11px] uppercase tracking-wide bg-white/80 text-gray-900 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur">Price Drop</span>
</div>
<button aria-label="Save" className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 border border-white/20 backdrop-blur hover:bg-white transition">
<svg className="w-4.5 h-4.5 text-gray-900" data-lucide="heart" strokeWidth="1.5"></svg>
</button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-lg font-semibold tracking-tight text-white">$825,000</p>
<p className="text-xs text-gray-400">Seattle, WA</p>
</div>
<p className="mt-1 text-sm text-gray-200">2 bd • 2 ba • 1,150 sqft</p>
<p className="mt-2 text-sm text-gray-300/90 line-clamp-2">Top-floor condo with lake views, high ceilings, and designer finishes.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-300">
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></svg> Eastlake
                  </span>
<span className="w-px h-4 bg-white/10"></span>
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="tram-front" strokeWidth="1.5"></svg> Transit 2 min
                  </span>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-white transition" href="#">Details
                  <svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</article>

<article className="listing group rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition backdrop-blur" data-flags="new" data-location="Austin" data-price="649000" data-type="Townhome">
<div className="relative">
<img alt="Listing photo" className="h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="text-[11px] uppercase tracking-wide bg-white text-gray-900 px-2.5 py-1 rounded-full">New</span>
</div>
<button aria-label="Save" className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 border border-white/20 backdrop-blur hover:bg-white transition">
<svg className="w-4.5 h-4.5 text-gray-900" data-lucide="heart" strokeWidth="1.5"></svg>
</button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-lg font-semibold tracking-tight text-white">$649,000</p>
<p className="text-xs text-gray-400">Austin, TX</p>
</div>
<p className="mt-1 text-sm text-gray-200">3 bd • 2.5 ba • 1,820 sqft</p>
<p className="mt-2 text-sm text-gray-300/90 line-clamp-2">Contemporary townhome near Zilker with private yard and covered parking.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-300">
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></svg> Zilker
                  </span>
<span className="w-px h-4 bg-white/10"></span>
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="trees" strokeWidth="1.5"></svg> Trails
                  </span>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-white transition" href="#">Details
                  <svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</article>

<article className="listing group rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition backdrop-blur" data-flags="open" data-location="Denver" data-price="989000" data-type="House">
<div className="relative">
<img alt="Listing photo" className="h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="text-[11px] uppercase tracking-wide bg-white/80 text-gray-900 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur">Open House</span>
</div>
<button aria-label="Save" className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 border border-white/20 backdrop-blur hover:bg-white transition">
<svg className="w-4.5 h-4.5 text-gray-900" data-lucide="heart" strokeWidth="1.5"></svg>
</button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-lg font-semibold tracking-tight text-white">$989,000</p>
<p className="text-xs text-gray-400">Denver, CO</p>
</div>
<p className="mt-1 text-sm text-gray-200">4 bd • 3 ba • 2,040 sqft</p>
<p className="mt-2 text-sm text-gray-300/90 line-clamp-2">Updated craftsman in Highlands with chef's kitchen and covered porch.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-300">
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></svg> Highlands
                  </span>
<span className="w-px h-4 bg-white/10"></span>
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="sun" strokeWidth="1.5"></svg> South-facing
                  </span>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-white transition" href="#">Details
                  <svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</article>

<article className="listing group rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition backdrop-blur" data-flags="" data-location="New York" data-price="1295000" data-type="Apartment">
<div className="relative">
<img alt="Listing photo" className="h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button aria-label="Save" className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 border border-white/20 backdrop-blur hover:bg-white transition">
<svg className="w-4.5 h-4.5 text-gray-900" data-lucide="heart" strokeWidth="1.5"></svg>
</button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-lg font-semibold tracking-tight text-white">$1,295,000</p>
<p className="text-xs text-gray-400">New York, NY</p>
</div>
<p className="mt-1 text-sm text-gray-200">1 bd • 1 ba • 820 sqft</p>
<p className="mt-2 text-sm text-gray-300/90 line-clamp-2">Sun-drenched loft in SoHo with brick walls, beams, and skylights.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-300">
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></svg> SoHo
                  </span>
<span className="w-px h-4 bg-white/10"></span>
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="train-front" strokeWidth="1.5"></svg> Subway 3 min
                  </span>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-white transition" href="#">Details
                  <svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</article>

<article className="listing group rounded-xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition backdrop-blur" data-flags="new" data-location="Miami" data-price="2150000" data-type="House">
<div className="relative">
<img alt="Listing photo" className="h-52 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="text-[11px] uppercase tracking-wide bg-white text-gray-900 px-2.5 py-1 rounded-full">New</span>
</div>
<button aria-label="Save" className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/80 border border-white/20 backdrop-blur hover:bg-white transition">
<svg className="w-4.5 h-4.5 text-gray-900" data-lucide="heart" strokeWidth="1.5"></svg>
</button>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-lg font-semibold tracking-tight text-white">$2,150,000</p>
<p className="text-xs text-gray-400">Miami, FL</p>
</div>
<p className="mt-1 text-sm text-gray-200">5 bd • 4 ba • 3,200 sqft</p>
<p className="mt-2 text-sm text-gray-300/90 line-clamp-2">Waterfront home with pool, floor-to-ceiling glass, and dock access.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-xs text-gray-300">
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></svg> Biscayne
                  </span>
<span className="w-px h-4 bg-white/10"></span>
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5" data-lucide="waves" strokeWidth="1.5"></svg> Waterfront
                  </span>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-gray-200 hover:text-white transition" href="#">Details
                  <svg className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</article>
</div>

<div className="mt-8 text-center">
<button className="group relative overflow-hidden inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-100 hover:bg-white/10 transition">
<span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 group-hover:translate-x-[260%] transition-transform duration-700 ease-out"></span>
<svg className="w-4 h-4" data-lucide="refresh-ccw" strokeWidth="1.5"></svg>
            Load more
          </button>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-white/5 border-t border-white/10 backdrop-blur" id="buy">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">How I help you win</h2>
<p className="mt-2 text-sm text-gray-300">From first viewing to closing day, I’m your advocate at every step.</p>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-gray-900 inline-flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="compass" strokeWidth="1.5"></svg>
</div>
<p className="font-medium tracking-tight text-white">Buyer Strategy</p>
</div>
<p className="mt-2 text-sm text-gray-300">Local insights, private tours, and competitive offer strategies tailored to you.</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-gray-900 inline-flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="gavel" strokeWidth="1.5"></svg>
</div>
<p className="font-medium tracking-tight text-white">Sell for More</p>
</div>
<p className="mt-2 text-sm text-gray-300">Staging, photography, and pricing models that maximize your return.</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-gray-900 inline-flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="file-check-2" strokeWidth="1.5"></svg>
</div>
<p className="font-medium tracking-tight text-white">Stress-free Closings</p>
</div>
<p className="mt-2 text-sm text-gray-300">Trusted lenders, inspectors, and closing teams to simplify the process.</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-gray-900 inline-flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="messages-square" strokeWidth="1.5"></svg>
</div>
<p className="font-medium tracking-tight text-white">Clear Communication</p>
</div>
<p className="mt-2 text-sm text-gray-300">Transparent updates, fast responses, and expert guidance end-to-end.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-transparent border-t border-white/10" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Meet Emily</h2>
<p className="mt-3 text-gray-300">Over the past decade, I’ve helped hundreds of clients find homes they love. My approach blends data-driven pricing with an eye for design and a deep network of local partners.</p>
<ul className="mt-4 space-y-2 text-sm text-gray-300">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-white" data-lucide="check" strokeWidth="1.5"></svg>
                98% list-to-sale ratio across the last 24 months
              </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-white" data-lucide="check" strokeWidth="1.5"></svg>
                Exclusive access to off-market opportunities
              </li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 mt-0.5 text-white" data-lucide="check" strokeWidth="1.5"></svg>
                Concierge services: staging, repairs, moving logistics
              </li>
</ul>
<div className="mt-6 flex items-center gap-3">
<a className="group relative overflow-hidden inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2.5 text-sm hover:bg-gray-100 transition" href="#contact">
<span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 group-hover:translate-x-[260%] transition-transform duration-700 ease-out"></span>
<svg className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></svg>
                Schedule a call
              </a>
<a className="group relative overflow-hidden inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10 transition" href="#listings">
<span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 group-hover:translate-x-[260%] transition-transform duration-700 ease-out"></span>
<svg className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></svg>
                Browse listings
              </a>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<div className="rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] bg-white/5 backdrop-blur group">
<img alt="Agent portrait" className="w-full h-[420px] object-cover transition duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-5 -right-5 bg-white/5 border border-white/10 rounded-xl shadow-sm p-4 backdrop-blur">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full overflow-hidden">
<img alt="Award" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-white">Top 1% Agent</p>
<p className="text-xs text-gray-300">By volume, 2023–2024</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-white/5 border-t border-white/10 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Clients say it best</h2>
<p className="mt-1 text-sm text-gray-300">Reviews from recent buyers and sellers.</p>
</div>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">

<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-white">Jordan W.</p>
<p className="text-xs text-gray-300">Buyer, Austin</p>
</div>
</div>
<div className="mt-3 flex items-center gap-1">
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
</div>
<p className="mt-3 text-sm text-gray-300">Emily guided us through a tight market and negotiated a fantastic deal. Professional, calm, and always two steps ahead.</p>
</div>

<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-white">Sofia L.</p>
<p className="text-xs text-gray-300">Seller, Seattle</p>
</div>
</div>
<div className="mt-3 flex items-center gap-1">
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" star"="" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
</div>
<p className="mt-3 text-sm text-gray-300">From staging to strategy, Emily handled everything. We sold in five days with multiple offers and a smooth closing.</p>
</div>

<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1548536904-6d0d6f43f5d1?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight text-white">Marcus R.</p>
<p className="text-xs text-gray-300">Buyer, Denver</p>
</div>
</div>
<div className="mt-3 flex items-center gap-1">
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
<svg className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star" strokeWidth="1.5"></svg>
</div>
<p className="mt-3 text-sm text-gray-300">Knowledgeable, responsive, and kind. Emily found us an off‑market gem and negotiated terms we didn’t think were possible.</p>
</div>
</div>

<div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<p className="text-base sm:text-lg font-medium tracking-tight text-white">Ready to make your move?</p>
<p className="text-sm text-gray-300 mt-1">Get a custom plan to buy or sell with confidence—no pressure, just clarity.</p>
</div>
<div className="flex items-center gap-3">
<a className="group relative overflow-hidden inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2.5 text-sm hover:bg-gray-100 transition" href="#contact">
<span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 group-hover:translate-x-[260%] transition-transform duration-700 ease-out"></span>
<svg className="w-4 h-4" data-lucide="message-square" strokeWidth="1.5"></svg>
              Start a conversation
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white hover:bg-white/10 transition" href="#sell">
<svg className="w-4 h-4" data-lucide="chart-line" strokeWidth="1.5"></svg>
              Free valuation
            </a>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-transparent border-t border-white/10" id="sell">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-6 items-start">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font text-white">Sell smarter, net more</h2>
<p className="mt-2 text-sm text-gray-300">A proven process designed to attract qualified buyers and maximize your return.</p>
<div className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-100">
<svg className="w-4 h-4" data-lucide="trophy" strokeWidth="1.5"></svg>
              Avg. 7 days on market • 102% list-to-sale
            </div>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-gray-900 inline-flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="wand-2" strokeWidth="1.5"></svg>
</div>
<p className="font-medium tracking-tight text-white">Prep &amp; Presentation</p>
</div>
<p className="mt-2 text-sm text-gray-300">Staging, repairs, and editorial photography that showcase your home’s best features.</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-gray-900 inline-flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="megaphone" strokeWidth="1.5"></svg>
</div>
<p className="font-medium tracking-tight text-white">Targeted Marketing</p>
</div>
<p className="mt-2 text-sm text-gray-300">Paid placements, social campaigns, and private network previews to drive demand.</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-gray-900 inline-flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="banknote" strokeWidth="1.5"></svg>
</div>
<p className="font-medium tracking-tight text-white">Pricing Strategy</p>
</div>
<p className="mt-2 text-sm text-gray-300">Data-backed pricing models calibrated to your neighborhood and seasonality.</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white text-gray-900 inline-flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="handshake" strokeWidth="1.5"></svg>
</div>
<p className="font-medium tracking-tight text-white">Negotiation &amp; Close</p>
</div>
<p className="mt-2 text-sm text-gray-300">Offer management, inspection strategy, and clear communication to closing day.</p>
</div>
</div>
</div>
<div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6">
<form className="grid sm:grid-cols-4 gap-3" id="valuationForm">
<div className="sm:col-span-2">
<label className="block text-sm text-gray-300 mb-1" htmlFor="address">Property address</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20" id="address" placeholder="123 Main St, City" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="beds">Beds</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20" id="beds" min="0" placeholder="3" step="1" type="number"/>
</div>
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="baths">Baths</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20" id="baths" min="0" placeholder="2" step="0.5" type="number"/>
</div>
<div className="sm:col-span-3">
<label className="block text-sm text-gray-300 mb-1" htmlFor="emailSell">Email</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20" id="emailSell" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="sm:col-span-1 flex items-end">
<button className="group relative w-full overflow-hidden inline-flex items-center justify-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2.5 text-sm hover:bg-gray-100 transition">
<span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 group-hover:translate-x-[260%] transition-transform duration-700 ease-out"></span>
<svg className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></svg>
                Get valuation
              </button>
</div>
</form>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-white/5 border-t border-white/10 backdrop-blur" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Let’s connect</h2>
<p className="mt-2 text-sm text-gray-300">Tell me a bit about your goals and I’ll follow up within one business day.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center gap-2 text-gray-200">
<svg className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></svg> (+1) 555-0148
                </div>
<div className="mt-2 flex items-center gap-2 text-gray-300">
<svg className="w-4 h-4" data-lucide="calendar-clock" strokeWidth="1.5"></svg> Mon–Fri, 9am–6pm
                </div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center gap-2 text-gray-200">
<svg className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></svg> hello@emilyhomes.com
                </div>
<div className="mt-2 flex items-center gap-2 text-gray-300">
<svg className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></svg> Austin, TX
                </div>
</div>
</div>
</div>
<div>
<form className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]" id="contactForm">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="name">Full name</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="email">Email</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="phone">Phone</label>
<input className="w-full rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20" id="phone" name="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-sm text-gray-300 mb-1" htmlFor="interest">I’m interested in</label>
<div className="relative">
<select className="w-full appearance-none pr-9 pl-3 py-2.5 rounded-md border border-white/10 bg-white/5 text-gray-100 focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20 text-sm" id="interest" name="interest">
<option value="buying">Buying</option>
<option value="selling">Selling</option>
<option value="both">Both</option>
<option value="consult">Consultation</option>
</select>
<svg className="pointer-events-none absolute right-3 top-2.5 w-4 h-4 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></svg>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-gray-300 mb-1" htmlFor="message">Message</label>
<textarea className="w-full rounded-md border border-white/10 bg-white/5 text-gray-100 placeholder:text-gray-400 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/15 focus:border-white/20" id="message" name="message" placeholder="Tell me about your timeline and goals..." rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-xs text-gray-300">
<input className="h-4 w-4 rounded border-white/20 bg-white/5 text-white focus:ring-white/30" required="" type="checkbox"/>
                    I agree to the privacy policy
                  </label>
<button className="group relative overflow-hidden inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-4 py-2.5 text-sm hover:bg-gray-100 transition">
<span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 group-hover:translate-x-[260%] transition-transform duration-700 ease-out"></span>
<svg className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></svg>
                    Send message
                  </button>
</div>
</div>
<p className="sr-only mt-3 text-sm text-emerald-300" id="formNotice">Thanks! Your message has been sent.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-gray-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-3" href="#">
<div className="flex items-center justify-center h-9 w-9 rounded-md bg-white text-gray-900 text-sm tracking-tight font-semibold">EC</div>
<div className="flex flex-col">
<span className="text-base tracking-tight font-semibold text-white">Emily Carter</span>
<span className="text-xs text-gray-400">Real Estate</span>
</div>
</a>
<p className="mt-3 text-sm text-gray-300 max-w-md">Personalized real estate services across Austin, Seattle, Denver, and beyond. Boutique attention, big‑market results.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<svg className="w-4.5 h-4.5" data-lucide="instagram" strokeWidth="1.5"></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<svg className="w-4.5 h-4.5" data-lucide="linkedin" strokeWidth="1.5"></svg>
</a>
<a aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<svg className="w-4.5 h-4.5" data-lucide="twitter" strokeWidth="1.5"></svg>
</a>
</div>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Explore</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-gray-300 hover:text-white transition" href="#listings">Listings</a></li>
<li><a className="text-gray-300 hover:text-white transition" href="#buy">Buy</a></li>
<li><a className="text-gray-300 hover:text-white transition" href="#sell">Sell</a></li>
<li><a className="text-gray-300 hover:text-white transition" href="#about">About</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Contact</p>
<ul className="mt-3 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></svg> (+1) 555-0148
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></svg> hello@emilyhomes.com
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></svg> Austin, TX
              </li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-gray-400">
<p>© <span id="year"></span> Emily Carter. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white transition" href="#">Privacy</a>
<span className="w-px h-3.5 bg-white/10"></span>
<a className="hover:text-white transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
