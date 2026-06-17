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



    // Icons
    function setLucideStroke() {
      document.querySelectorAll('svg.lucide').forEach(icon => icon.setAttribute('stroke-width', '1.5'));
    }
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
      setLucideStroke();
    });

    // Countdown to June 1, 2026 noon local
    (function () {
      const target = new Date('2026-06-01T12:00:00');
      const dEl = document.getElementById('cd-days');
      const hEl = document.getElementById('cd-hours');
      const mEl = document.getElementById('cd-min');
      const sEl = document.getElementById('cd-sec');

      function tick() {
        const now = new Date();
        const diff = Math.max(0, target - now);
        const sec = Math.floor(diff / 1000);
        const days = Math.floor(sec / 86400);
        const hours = Math.floor((sec % 86400) / 3600);
        const mins = Math.floor((sec % 3600) / 60);
        const secs = sec % 60;

        dEl.textContent = String(days);
        hEl.textContent = String(hours).padStart(2, '0');
        mEl.textContent = String(mins).padStart(2, '0');
        sEl.textContent = String(secs).padStart(2, '0');
      }
      tick();
      setInterval(tick, 1000);
    })();

    // Subscribe form (demo)
    (function () {
      const form = document.getElementById('subscribeForm');
      const status = document.getElementById('subscribeStatus');
      const hint = document.getElementById('subscribeHint');

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = new FormData(form).get('email');
        status.textContent = '';
        hint.textContent = 'Processing…';
        hint.className = 'mt-2 text-[12px] text-white/70';

        // Simple email validation
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!valid) {
          hint.textContent = 'Please enter a valid email.';
          hint.className = 'mt-2 text-[12px] text-red-400/90';
          return;
        }

        // Simulate async subscribe
        await new Promise(r => setTimeout(r, 900));

        hint.textContent = 'No spam — unsubscribe anytime.';
        hint.className = 'mt-2 text-[12px] text-white/60';
        status.innerHTML = `
          <div class="inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-emerald-3 00">
            <svg data-lucide="check-circle-2" class="h-4 w-4"></svg>
            <span>Thanks! You’re on the list for Mexico City updates.</span>
          </div>
        `;
        lucide.createIcons();
        setLucideStroke();
        form.reset();
      });
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-white/10">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="relative">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-500 via-emerald-400 to-red-500 ring-1 ring-white/20 shadow-lg shadow-emerald-500/20"></div>
<div className="absolute inset-0 rounded-lg ring-1 ring-white/20"></div>
</div>
<div className="leading-tight">
<div className="text-base tracking-tight font-semibold">Mexico City 2026</div>
<div className="text-xs text-white/60">FIFA World Cup</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
<a className="hover:text-white transition" href="#highlights">Highlights</a>
<a className="hover:text-white transition" href="#host">Host City</a>
<a className="hover:text-white transition" href="#updates">Subscribe</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-white/90 transition" href="#updates">
<i className="h-4 w-4" data-lucide="bell-ring"></i>
        Get Updates
      </a>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(79,70,229,0.25),transparent_60%)]"></div>
<img alt="Mexico City stadium atmosphere" className="h-full w-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950"></div>
</div>

<div className="pointer-events-none absolute right-6 top-10 hidden md:block">
<div className="relative h-72 w-72 rounded-full border border-purple-300/30">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neutral-950 px-1">
<i className="h-5 w-5 text-purple-300/70" data-lucide="sun"></i>
</div>

<div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-neutral-950 px-1">
<i className="h-5 w-5 text-purple-300/70" data-lucide="skull"></i>
</div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-neutral-950 px-1">
<svg className="h-6 w-6 text-purple-300/70" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 64 64">
<path d="M4 56h56M10 48h44M16 40h32M22 32h20M28 24h8M24 56l8-32 8 32"></path>
</svg>
</div>

<div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-neutral-950 px-1">
<svg className="h-6 w-6 text-purple-300/70" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 64 64">
<path d="M32 12v40M32 20c0-6 10-6 10 0v8c0 6-10 6-10 0M32 24c0-6-10-6-10 0v8c0 6 10 6 10 0M24 52h16"></path>
</svg>
</div>

<div className="absolute -top-1 right-14 bg-neutral-950 px-1">
<svg className="h-5 w-5 text-purple-300/70" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 64 64">
<path d="M6 40c8-8 16 8 24 0s16-8 28-2"></path>
<path d="M36 38c2 4-2 6-4 6"></path>
</svg>
</div>
<div className="absolute bottom-2 left-14 bg-neutral-950 px-1">
<i className="h-5 w-5 text-purple-300/70" data-lucide="trophy"></i>
</div>
</div>
</div>
<div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
<i className="h-3.5 w-3.5 text-emerald-400" data-lucide="map-pin"></i>
          Mexico City · Estadio Azteca
        </div>
<h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          FIFA World Cup 2026
        </h1>
<p className="mt-4 text-white/70 text-base md:text-lg">
          Celebrate the beautiful game in the heart of CDMX. Experience iconic culture, legendary football nights, and unforgettable fan energy.
        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-neutral-950 px-5 py-3 text-sm font-medium transition" href="#updates">
<i className="h-4 w-4 mr-2" data-lucide="bell"></i>
            Subscribe for host-city updates
          </a>
<a className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-medium transition" href="#highlights">
<i className="h-4 w-4 mr-2" data-lucide="play-circle"></i>
            See highlights
          </a>
</div>

<div className="mt-10 grid grid-cols-4 max-w-md gap-2 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight" id="cd-days">–</div>
<div className="text-[11px] text-white/60">Days</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight" id="cd-hours">–</div>
<div className="text-[11px] text-white/60">Hours</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight" id="cd-min">–</div>
<div className="text-[11px] text-white/60">Minutes</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight" id="cd-sec">–</div>
<div className="text-[11px] text-white/60">Seconds</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 md:py-20" id="highlights">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Culture meets football</h2>
<p className="mt-3 text-white/70">
        A host-city experience shaped by heritage. From ancient pyramids to modern murals — and match nights that echo across the valley.
      </p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-purple-400/20 p-2 ring-1 ring-purple-300/30">
<svg className="h-5 w-5 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 64 64">
<path d="M4 56h56M10 48h44M16 40h32M22 32h20M28 24h8M24 56l8-32 8 32"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Heritage Pyramids</h3>
</div>
<p className="mt-3 text-sm text-white/70">
          Day trips to Teotihuacan and Templo Mayor — historic backdrops for a global tournament.
        </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-purple-400/20 p-2 ring-1 ring-purple-300/30">
<i className="h-5 w-5 text-purple-300" data-lucide="skull"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">Vibrant Traditions</h3>
</div>
<p className="mt-3 text-sm text-white/70">
          Colors, music, and food inspired by Día de Muertos and beyond — curated fan zones across the city.
        </p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-purple-400/20 p-2 ring-1 ring-purple-300/30">
<svg className="h-5 w-5 text-purple-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewbox="0 0 64 64">
<path d="M32 12v40M32 20c0-6 10-6 10 0v8c0 6-10 6-10 0M32 24c0-6-10-6-10 0v8c0 6 10 6 10 0M24 52h16"></path>
</svg>
</div>
<h3 className="text-xl font-semibold tracking-tight">Local Flavor</h3>
</div>
<p className="mt-3 text-sm text-white/70">
          Street food routes and agave tastings near fan areas — savor the city between matches.
        </p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 md:py-20" id="host">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Mexico City · Estadio Azteca</h2>
<p className="mt-3 text-white/70">
          One of football’s most storied cathedrals. Expect upgraded transport links, enhanced accessibility, and city-wide fan celebrations.
        </p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-3 text-white/80">
<i className="h-4 w-4 text-emerald-400" data-lucide="trophy"></i>
            Historic venue with world-class atmosphere
          </li>
<li className="flex items-center gap-3 text-white/80">
<i className="h-4 w-4 text-emerald-400" data-lucide="map"></i>
            Fan zones across Centro, Roma/Condesa, and Coyoacán
          </li>
<li className="flex items-center gap-3 text-white/80">
<i className="h-4 w-4 text-emerald-400" data-lucide="train"></i>
            Metro and BRT access with extended matchday service
          </li>
</ul>
</div>
<div className="grid grid-cols-2 gap-3">
<img alt="Mexico City skyline" className="h-64 md:h-80 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Stadium scene" className="h-64 md:h-80 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Culture in CDMX" className="h-40 md:h-48 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Fans celebrating" className="h-40 md:h-48 w-full object-cover rounded-xl border border-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
</section>

<section className="relative overflow-hidden" id="updates">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-500/10 via-transparent to-purple-500/10"></div>
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
<i className="h-3.5 w-3.5 text-emerald-400" data-lucide="calendar"></i>
              Host-city updates &amp; match alerts
            </div>
<h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">Be first to know</h3>
<p className="mt-2 text-white/70 text-sm">
              Get fixtures, ticketing windows, fan-zone maps, and transport info for Mexico City matches.
            </p>
</div>
<form className="w-full" id="subscribeForm">
<label className="sr-only" htmlFor="email">Email</label>
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 relative">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
<i className="h-4 w-4 text-white/50" data-lucide="mail"></i>
</div>
<input className="w-full rounded-md border border-white/15 bg-neutral-900/60 pl-9 pr-3 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400/40" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<button className="inline-flex items-center justify-center rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-neutral-950 px-5 py-3 text-sm font-medium transition" type="submit">
<i className="h-4 w-4 mr-2" data-lucide="send"></i>
                Subscribe
              </button>
</div>
<p className="mt-2 text-[12px] text-white/60" id="subscribeHint">No spam — unsubscribe anytime.</p>
<div aria-live="polite" className="mt-3 text-sm" id="subscribeStatus"></div>
</form>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-16 md:py-20" id="faq">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Questions</h3>
<div className="mt-6 grid gap-6 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-400 mt-0.5" data-lucide="ticket"></i>
<div>
<div className="font-semibold tracking-tight">Tickets</div>
<p className="mt-1 text-sm text-white/70">Official ticketing is handled by the tournament organizer. Subscribe for reminders and local guidance for matchdays in CDMX.</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-400 mt-0.5" data-lucide="map-pin"></i>
<div>
<div className="font-semibold tracking-tight">Getting around</div>
<p className="mt-1 text-sm text-white/70">Expect expanded Metro and BRT service, with clear wayfinding to fan zones and the stadium.</p>
</div>
</div>
</div>
</div>
<p className="mt-8 text-xs text-white/50">
      This page is a concept fan experience for Mexico City host matches.
    </p>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-sm text-white/60">
        © 2026 Mexico City Host Experience · All rights reserved.
      </div>
<div className="flex items-center gap-4 text-sm text-white/70">
<a className="hover:text-white transition" href="#updates">Get updates</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
</div>
</div>
</footer>


    </>
  );
}
