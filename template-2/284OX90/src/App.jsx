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
      
        document.addEventListener('DOMContentLoaded', () => {
          // Initialize open states
          document.querySelectorAll('#faq [data-accordion-item]').forEach(item => {
            const open = item.hasAttribute('data-open');
            const btn = item.querySelector('[data-accordion="faq"]');
            const a = item.querySelector('[data-qa="a"]');
            const plus = item.querySelector('[data-icon="plus"]');
            const minus = item.querySelector('[data-icon="minus"]');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            a.classList.toggle('hidden', !open);
            plus.classList.toggle('hidden', open);
            minus.classList.toggle('hidden', !open);
          });

          // Toggle behavior
          document.querySelectorAll('#faq [data-accordion="faq"]').forEach(btn => {
            btn.addEventListener('click', () => {
              const item = btn.closest('[data-accordion-item]');
              const content = item.querySelector('[data-qa="a"]');
              const plus = item.querySelector('[data-icon="plus"]');
              const minus = item.querySelector('[data-icon="minus"]');
              const expanded = btn.getAttribute('aria-expanded') === 'true';
              btn.setAttribute('aria-expanded', String(!expanded));
              content.classList.toggle('hidden');
              plus.classList.toggle('hidden');
              minus.classList.toggle('hidden');
            });
          });

          // Render icons (safe multiple times)
          if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
      


    // Mobile nav toggle
    (function () {
      const btn = document.getElementById('menuBtn');
      const panel = document.getElementById('mobileNav');
      if (!btn || !panel) return;
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', () => {
        const isOpen = !panel.classList.contains('hidden');
        panel.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
      // Close on escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !panel.classList.contains('hidden')) {
          panel.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    })();

    // Dynamic year
    (function () {
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
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
      
<header className="relative">
<div className="absolute inset-0">
<img alt="Aerial coastline at golden hour" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=3840&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-b from-[#070B0F]/60 via-[#070B0F]/30 to-[#070B0F]/90"></div>
<div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_60%_0%,rgba(34,211,238,0.15),transparent_60%)]"></div>
</div>
<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a aria-label="WAYFINDR Home" className="group inline-flex items-center gap-2" href="#">
<span className="uppercase tracking-[-0.04em] text-lg font-semibold font-geist">WAYFINDR</span>
<span className="hidden sm:inline-flex items-center text-xs px-2 py-0.5 rounded-md ring-1 ring-cyan-400/20 bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-400/15 transition">Agency</span>
</a>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/90 hover:bg-white/10 hover:ring-white/25 transition font-geist" href="#">Destinations</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 hover:ring-white/25 transition font-geist" href="#">Experiences</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 hover:ring-white/25 transition font-geist" href="#">Services</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 hover:ring-white/25 transition font-geist" href="#">Journal</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white transition font-geist" href="#">Client login</a>
<a className="inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-cyan-300 transition font-geist ring-1 ring-cyan-200/30 hover:ring-cyan-200/60" href="#">
              Start planning
              <svg className="lucide h-4 w-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 hover:ring-white/25 transition" id="menuBtn">
<svg className="lucide h-5 w-5 text-white/90" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 mt-2 pt-2 pb-3" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/90 hover:bg-white/10 transition font-geist" href="#">Destinations</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 hover:bg-white/10 transition font-geist" href="#">Experiences</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 hover:bg-white/10 transition font-geist" href="#">Services</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 hover:bg-white/10 transition font-geist" href="#">Journal</a>
<div className="flex items-center justify-between gap-2 pt-2">
<a className="text-sm font-medium text-white/80 hover:text-white transition font-geist" href="#">Client login</a>
<a className="inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-cyan-300 transition font-geist ring-1 ring-cyan-200/30 hover:ring-cyan-200/60" href="#">
<svg className="lucide h-4 w-4" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Start
              </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative z-10">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-24 lg:pb-40 text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 ring-1 ring-cyan-400/20 backdrop-blur">
<svg className="lucide h-4 w-4 text-cyan-300" data-lucide="route" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="text-xs font-medium text-cyan-200/90 font-geist">Concierge travel planning</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-white font-geist font-light tracking-tighter">Travel, intentionally.</h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80 font-geist">WAYFINDR crafts tailored journeys with live-aware logistics, fair budgets, and a human concierge. Your world, curated.</p>
<div className="flex gap-3 mt-8 items-center justify-center">
<a className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-900 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-cyan-300 transition font-geist ring-1 ring-cyan-200/30 hover:ring-cyan-200/60" href="#">
            Plan a trip
            <svg className="lucide h-4 w-4" data-lucide="compass" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-white/10 hover:ring-white/25 ring-1 ring-white/15 transition text-sm font-medium text-white font-geist bg-white/5 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur" href="#">
            See services
            <svg className="lucide h-4 w-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1.003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60">
<svg className="lucide h-3 w-3" data-lucide="shield-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="uppercase tracking-wider font-geist">Trusted & private</span>
</div>
</div>
</section>
</header>

<section className="relative z-10 -mt-12 -top-20 pb-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-2xl bg-slate-800/40 ring-1 ring-slate-700/60 p-4 backdrop-blur hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)] hover:ring-cyan-400/30 transition">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/20 text-cyan-300">
<svg className="lucide h-4 w-4" data-lucide="map" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="1" width="7" x="3" y="3"></rect><path d="M10 3v13"></path><path d="M17 3v13"></path><rect height="13" rx="1" width="7" x="14" y="3"></rect></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Tailored itineraries</p>
<p className="text-xs text-white/70 font-geist">Curated to your pace and interests.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-slate-800/40 ring-1 ring-slate-700/60 p-4 backdrop-blur hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)] hover:ring-cyan-400/30 transition">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/20 text-cyan-300">
<svg className="lucide h-4 w-4" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Live-aware timing</p>
<p className="text-xs text-white/70 font-geist">Optimized for seasons, crowds, and weather.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-slate-800/40 ring-1 ring-slate-700/60 p-4 backdrop-blur hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)] hover:ring-cyan-400/30 transition">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/20 text-cyan-300">
<svg className="lucide h-4 w-4" data-lucide="wallet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</span>
<div className="">
<p className="text-sm font-semibold tracking-tight font-geist">Transparent pricing</p>
<p className="text-xs text-white/70 font-geist">Smart value across flights, stays, and tours.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-slate-800/40 ring-1 ring-slate-700/60 p-4 backdrop-blur hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)] hover:ring-cyan-400/30 transition">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/20 text-cyan-300">
<svg className="lucide h-4 w-4" data-lucide="user-square-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="12" cy="10" r="3"></circle><path d="M7 21a5 5 0 0 1 10 0"></path></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Dedicated concierge</p>
<p className="text-xs text-white/70 font-geist">Human support before and during travel.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 bg-slate-800/40 ring-1 ring-slate-700/60 backdrop-blur rounded-3xl mx-8 py-6">
<div className="flex items-center gap-2 text-sm text-white/70 px-2 sm:px-0">
<svg className="lucide h-4 w-4 text-cyan-300" data-lucide="route" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="font-normal font-geist">Our Process</span>
</div>
<div className="mt-2 px-2 sm:px-0">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium text-white tracking-tighter font-geist">From idea to itinerary.</h2>
<p className="mt-1 text-sm sm:text-base text-white/70 font-normal font-geist">We blend insight, logistics, and care—so all you do is show up.</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="sm:p-6 flex flex-col min-h-[420px] bg-slate-900/40 ring-1 ring-slate-700/60 backdrop-blur rounded-2xl p-5 justify-between hover:ring-cyan-400/30 transition">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-cyan-400/15 ring-1 ring-cyan-400/25 flex items-center justify-center text-cyan-300">
<svg className="lucide h-5 w-5" data-lucide="message-circle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 1.094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">01. Consult</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Discovery Call</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Share your goals, vibe, and constraints. We listen first, then advise with clarity.</p>
<div className="flex items-center gap-2 text-white/60">
<svg className="lucide h-4 w-4" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-geist">15–30 minutes</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-cyan-300/50 rounded-full" style={{width: `25%`}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-slate-900/40 ring-1 ring-slate-700/60 backdrop-blur rounded-2xl p-5 justify-between hover:ring-cyan-400/30 transition">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-cyan-400/15 ring-1 ring-cyan-400/25 flex items-center justify-center text-cyan-300">
<svg className="lucide h-5 w-5" data-lucide="sparkles" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">02. Design</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Itinerary Build</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">We craft options across routes, stays, and experiences—with rationale and clear costs.</p>
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-white/10 flex items-center justify-center">
<svg className="lucide h-3.5 w-3.5 text-white/70" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-white/10 flex items-center justify-center">
<svg className="lucide h-3.5 w-3.5 text-white/70" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="h-6 w-6 rounded-full bg-white/10 ring-2 ring-white/10 flex items-center justify-center">
<svg className="lucide h-3.5 w-3.5 text-white/70" data-lucide="heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3.019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
<span className="text-xs text-white/60 font-geist">Personalized options</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-cyan-300/50 rounded-full" style={{width: `50%`}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-slate-900/40 ring-1 ring-slate-700/60 backdrop-blur rounded-2xl p-5 justify-between hover:ring-cyan-400/30 transition">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-cyan-400/15 ring-1 ring-cyan-400/25 flex items-center justify-center text-cyan-300">
<svg className="lucide h-5 w-5" data-lucide="camera" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">03. Travel</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Go Live</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">We handle adjustments in real time and support you 24/7—so the experience stays effortless.</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-green-400"></div>
<span className="text-xs font-geist">Real-time updates</span>
</div>
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<span className="text-xs font-geist">Adaptive routing</span>
</div>
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-purple-400"></div>
<span className="text-xs font-geist">Concierge chat</span>
</div>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-cyan-300/50 rounded-full" style={{width: `75%`}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[420px] bg-slate-900/40 ring-1 ring-slate-700/60 backdrop-blur rounded-2xl p-5 justify-between hover:ring-cyan-400/30 transition">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-cyan-400/15 ring-1 ring-cyan-400/25 flex items-center justify-center text-cyan-300">
<svg className="lucide h-5 w-5" data-lucide="book-open" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">04. Reflect</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Better Next Time</p>
</div>
</div>
<p className="text-sm text-white/80 font-geist">Capture highlights and feedback. We refine your profile to make each trip even more you.</p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15">
<svg className="lucide h-3.5 w-3.5 text-white/70" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-white/70 font-geist">Concierge follow‑up</span>
</div>
</div>
<div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-cyan-300/50 rounded-full" style={{width: `100%`}}></div>
</div>
</article>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-900 px-6 py-3 text-sm font-semibold hover:bg-cyan-300 transition font-geist ring-1 ring-cyan-200/30 hover:ring-cyan-200/60">
<svg className="lucide h-4 w-4" data-lucide="plane" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m17.5 6.5-10 10L3 21l4.5-4.5 10-10 2-2a2.83 2.83 0 0 0-4-4l-2 2Z"></path><path d="m7.5 12.5 4 4"></path></svg>
        Begin your journey
      </button>
<p className="mt-2 text-xs text-white/60 font-geist">Get a proposal within 48 hours</p>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mx-auto mb-24 px-4" id="faq">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-slate-700/60 bg-slate-800/40 backdrop-blur">
<div className="relative p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-5">
<h2 className="text-[56px] sm:text-[80px] leading-none font-semibold text-white tracking-tighter font-geist">Questions.</h2>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">Answers about WAYFINDR, concierge services, and how we tailor every trip to you.</p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white/90 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 backdrop-blur" href="#contact">
<span className="font-geist">Get in touch</span>
<svg className="lucide w-4 h-4" data-lucide="message-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 1.094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>

<div className="md:col-span-7">
<div className="space-y-3">

<div className="rounded-2xl ring-1 ring-slate-700/60 bg-slate-900/40 backdrop-blur" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">How do you tailor trips to my preferences?</span>
<span className="shrink-0">
<svg className="lucide w-5 h-5 text-white/70 hidden" data-icon="plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide w-5 h-5 text-white/70" data-icon="minus" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist" data-qa="a">
                  We start with a concise consult to learn your travel rhythm—pace, interests, must‑haves. Then we design options with rationale and iterate until it feels unmistakably you.
                </div>
</div>

<div className="rounded-2xl ring-1 ring-slate-700/60 bg-slate-900/40 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">Do you plan group or family trips?</span>
<span className="shrink-0">
<svg className="lucide w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                  Absolutely. We balance different preferences, build age‑appropriate options, and keep logistics smooth—shared calendars, holds, and simple approvals.
                </div>
</div>

<div className="rounded-2xl ring-1 ring-slate-700/60 bg-slate-900/40 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">What if plans change mid‑trip?</span>
<span className="shrink-0">
<svg className="lucide w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                  Your concierge replans in real time—weather, closures, or a change of heart—while safeguarding reservations and budget.
                </div>
</div>

<div className="rounded-2xl ring-1 ring-slate-700/60 bg-slate-900/40 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">Can I access plans offline?</span>
<span className="shrink-0">
<svg className="lucide w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                  Yes. We share downloadable PDFs and offline map packs so your key details travel with you—no signal required.
                </div>
</div>

<div className="rounded-2xl ring-1 ring-slate-700/60 bg-slate-900/40 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">How do you keep budgets on track?</span>
<span className="shrink-0">
<svg className="lucide w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                  We present transparent line items, timing recommendations, and tiered choices—balancing splurges with smart saves.
                </div>
</div>

<div className="rounded-2xl ring-1 ring-slate-700/60 bg-slate-900/40 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white font-geist">What makes WAYFINDR different?</span>
<span className="shrink-0">
<svg className="lucide w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 font-geist hidden" data-qa="a">
                  We merge high‑touch service with modern tools. Expect thoughtful design, proactive support, and privacy by default.
                </div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="w-full mx-auto mb-8" id="contact">
<div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
<div className="relative overflow-hidden ring-1 ring-slate-700/60 bg-slate-800/40 rounded-3xl backdrop-blur">

<div className="relative z-10 p-8 md:p-12 lg:p-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-6">
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] text-neutral-500 font-geist uppercase tracking-wider">WAYFINDR Concierge</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 font-geist">Have a question?</h3>
</div>
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<svg className="lucide h-4 w-4" data-lucide="message-square" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
<form action="#" className="mt-6 space-y-4" method="POST">
<div>
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-name">Your name<span className="text-neutral-400"> *</span></label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-name" name="name" placeholder="Alex Morgan" required type="text" />
</div>
<div>
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-email">Email<span className="text-neutral-400"> *</span></label>
<div className="relative mt-1">
<svg className="lucide h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-email" name="email" placeholder="you@example.com" required type="email" />
</div>
</div>
<div>
<label className="block text-xs text-neutral-600 font-geist" htmlFor="ct-msg">Message</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400 font-geist" id="ct-msg" name="message" placeholder="Tell us about your trip" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition-colors font-geist" type="submit">
                    Send message
                    <svg className="lucide h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500 font-geist">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tight font-geist">Let's talk.</h2>
<p className="text-base sm:text-lg max-w-2xl text-white/80 mt-4 font-geist">Partnerships, family escapes, or once‑in‑a‑lifetime expeditions—we reply within one business day.</p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 backdrop-blur ring-1 ring-white/10 flex items-center justify-center text-cyan-300">
<svg className="lucide h-4 w-4" data-lucide="clock-3" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-white font-semibold text-sm font-geist">Quick response</p>
<p className="text-white/70 text-xs font-geist">Most messages answered under 24 hours.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 backdrop-blur ring-1 ring-white/10 flex items-center justify-center text-cyan-300">
<svg className="lucide h-4 w-4" data-lucide="route" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<div>
<p className="text-white font-semibold text-sm font-geist">Clear next steps</p>
<p className="text-white/70 text-xs font-geist">We send an outline, timeline, and transparent fees.</p>
</div>
</div>
</div>

<div className="mt-8">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3">
<img alt="Concierge lead" className="h-12 w-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop" />
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none font-geist uppercase tracking-wider">Concierge Lead</p>
<p className="text-neutral-900 font-semibold tracking-tight truncate font-geist">Maya Chen</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-semibold hover:bg-neutral-800 transition-colors font-geist" href="mailto:hello@wayfindr.agency">
                    Ask directly
                    <svg className="lucide h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 1.094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 pb-12">
<div className="p-12 lg:p-16 border border-slate-700/60 rounded-3xl bg-slate-900/40 backdrop-blur-2xl">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<div className="flex items-center mb-6">
<span className="uppercase text-lg font-semibold tracking-[-0.04em] font-geist text-white">WAYFINDR</span>
</div>
<p className="text-sm text-white/70 leading-relaxed mb-8 font-geist">A modern travel agency for intentional journeys—curated by humans, enhanced by live-aware logistics.</p>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/5 bg-white/[0.03]" href="#">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Explore</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Signature Journeys</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">City Breaks</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Remote Escapes</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Culinary Trails</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Concierge Planning</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Visa & Logistics</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Group Coordination</a>
</li><li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Corporate Retreats</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">24/7 Concierge</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide font-geist">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">About</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Journal</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#">Careers</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors duration-300 font-geist" href="#contact">Contact</a></li>
</ul>
</div>
</div>

<div className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6 sm:p-8 hover:ring-white/20 transition">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div>
<p className="text-xs uppercase tracking-wider text-white/60 font-geist">Updates</p>
<h5 className="mt-1 text-xl sm:text-2xl font-semibold tracking-tight text-white font-geist">Stay in the loop.</h5>
<p className="mt-1 text-sm text-white/70 font-geist">New destinations, seasonal tips, and member-only perks—no spam.</p>
</div>
<form action="#" aria-label="Subscribe to newsletter" className="w-full lg:w-auto flex-1 max-w-xl" method="POST">
<div className="flex items-stretch gap-2">
<label className="sr-only" htmlFor="newsletter-email">Email address</label>
<div className="relative flex-1">
<svg className="lucide h-4 w-4 text-white/50 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-3 text-sm rounded-xl bg-white/5 text-white placeholder:text-white/50 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none font-geist" id="newsletter-email" placeholder="you@example.com" required type="email" />
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 text-slate-900 px-4 py-3 text-sm font-semibold hover:bg-cyan-300 transition font-geist ring-1 ring-cyan-200/30 hover:ring-cyan-200/60" type="submit">
                Subscribe
                <svg className="lucide h-4 w-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="mt-2 text-[11px] text-white/50 font-geist">We respect your privacy. Unsubscribe anytime.</p>
</form>
</div>
</div>

<div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<span className="uppercase tracking-[-0.04em] text-sm font-semibold font-geist text-white">WAYFINDR</span>
<span className="text-white/50">© <span id="year">2025</span> All rights reserved.</span>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-white/70 hover:text-white transition-colors font-geist" href="#">Terms</a>
<a className="text-sm text-white/70 hover:text-white transition-colors font-geist" href="#">Privacy</a>
<a className="text-sm text-white/70 hover:text-white transition-colors font-geist" href="#faq">FAQ</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
