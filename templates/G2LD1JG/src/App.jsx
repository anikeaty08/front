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
      
      // Config
      const eventTitle = "Vashon Island Group Ride";
      // Local timezone assumed
      const eventStart = new Date("2025-09-13T08:00:00-07:00");
      const eventEnd = new Date("2025-09-13T15:00:00-07:00");
      const eventLocation = "Fauntleroy Ferry Terminal, 4829 SW Barton St, Seattle, WA 98136";

      // Helpers
      const el = (sel) => document.querySelector(sel);
      const list = (sel) => document.querySelectorAll(sel);

      // Copy link
      el("#copyLink")?.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(location.href);
          toast("Link copied");
        } catch {
          toast("Copy failed");
        }
      });

      // Toast (lightweight)
      function toast(msg) {
        let t = document.createElement("div");
        t.textContent = msg;
        t.className =
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-3.5 py-2 rounded-md text-sm text-neutral-900 bg-emerald-400 border border-emerald-300 shadow-lg";
        document.body.appendChild(t);
        setTimeout(() => {
          t.style.opacity = "0";
          t.style.transform = "translate(-50%, 6px)";
          t.style.transition = "all .35s ease";
        }, 1200);
        setTimeout(() => t.remove(), 1650);
      }

      // Add to Calendar (ICS download)
      function toICSDate(d) {
        const pad = (n) => String(n).padStart(2, "0");
        const y = d.getUTCFullYear();
        const m = pad(d.getUTCMonth() + 1);
        const day = pad(d.getUTCDate());
        const h = pad(d.getUTCHours());
        const min = pad(d.getUTCMinutes());
        const s = pad(d.getUTCSeconds());
        return `${y}${m}${day}T${h}${min}${s}Z`;
      }
      el("#addToCalendar")?.addEventListener("click", (e) => {
        e.preventDefault();
        const ics = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//Vashon Ride//EN",
          "CALSCALE:GREGORIAN",
          "METHOD:PUBLISH",
          "BEGIN:VEVENT",
          `UID:${crypto.randomUUID?.() ||
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 flex items-center justify-center text-emerald-300 tracking-tighter font-semibold text-sm">VR</div>
<div className="hidden sm:block h-5 w-px bg-white/10"></div>
<p className="text-sm text-neutral-300/90">Community Ride</p>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30 rounded" href="#details">Details</a>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30 rounded" href="#schedule">Schedule</a>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30 rounded" href="#ferry">Ferry</a>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30 rounded" href="#route">Route</a>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30 rounded" href="#rsvp">RSVP</a>
<a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/30 rounded" href="#safety">Safety</a>
</nav>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400/30" id="copyLink">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 1 0-7.07-7.07L10 5"></path><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L14 19"></path></svg>
              Copy link
            </button>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium tracking-tight text-emerald-100 bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/60 hover:border-emerald-400/70 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/40 hover:-translate-y-0.5" href="#rsvp">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              RSVP
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0">
<img alt="Cyclists on a coastal road at sunrise" className="w-full h-full object-cover opacity-35" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-neutral-950/70 to-neutral-950"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-neutral-300 mb-5">

<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><path d="M12 17.5V10h3l3 4"></path><path d="M2 17.5h3"></path><path d="M18.5 17.5H22"></path></svg>
            Group Ride
            <span className="mx-1 opacity-50">•</span>
            No-drop pace
          </div>
<h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
            Vashon Island Group Ride
          </h1>
<p className="mt-4 text-base sm:text-lg text-neutral-300">
            West Seattle → Vashon → West Seattle. Scenic climbs, coastal views, coffee stop on Vashon, and ferry fun.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-300">
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
              Sat, Sep 13, 2025 · 8:00 AM – 3:00 PM
            </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 10.61a8 8 0 1 0-13.73 5.36L12 21l4.89-5.03a8 8 0 0 0 3.95-5.36z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Meet: Fauntleroy Ferry Terminal, West Seattle
            </span>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium tracking-tight text-neutral-950 bg-emerald-400 hover:bg-emerald-300 transition-all border border-emerald-300/70 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" href="#rsvp">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M19 8v6"></path><path d="M22 11h-6"></path></svg>
              Reserve your spot
            </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/30" href="#" id="addToCalendar">

<svg className="h-4.5 w-4.5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M10 16h4"></path><path d="M12 14v4"></path></svg>
              Add to Calendar
            </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/30" href="#route">

<svg className="h-4.5 w-4.5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7H8.5a3.5 3.5 0 0 1 0-7H18"></path><circle cx="18" cy="5" r="3"></circle></svg>
              See route
            </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" id="details">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Distance</p>

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><path d="M4 22v-7"></path></svg>
</div>
<p className="mt-2 text-2xl tracking-tight font-semibold text-white">38 mi</p>
<p className="text-xs text-neutral-400">Including Vashon loop and ferry legs</p>
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Elevation</p>

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<p className="mt-2 text-2xl tracking-tight font-semibold text-white">2,600 ft</p>
<p className="text-xs text-neutral-400">Rolling climbs on Vashon</p>
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Pace</p>

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14V6"></path><path d="M10 2h4"></path><path d="M12 14a8 8 0 1 0 8 8"></path></svg>
</div>
<p className="mt-2 text-2xl tracking-tight font-semibold text-white">12–15 mph</p>
<p className="text-xs text-neutral-400">No-drop, regroup at tops</p>
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400">Difficulty</p>

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 6 18H1L8 3Z"></path></svg>
</div>
<p className="mt-2 text-2xl tracking-tight font-semibold text-white">Intermediate</p>
<p className="text-xs text-neutral-400">Comfort with hills recommended</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" id="schedule">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">Schedule</h2>
<span className="text-xs text-neutral-400">Times approximate; we regroup often</span>
</div>
<ol className="mt-6 relative">
<div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-white/10"></div>

<li className="relative pl-12 sm:pl-14 py-4 group">
<span className="absolute left-0 sm:left-1 h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</span>
<div className="flex flex-wrap items-center gap-2">
<p className="text-neutral-300 text-sm">7:45 AM</p>
<div className="h-4 w-px bg-white/10"></div>
<p className="text-white text-sm">Meet + pre-ride checks at Fauntleroy Ferry Terminal</p>
</div>
<p className="mt-1 text-xs text-neutral-400">Briefing, tire pressure, route overview</p>
</li>
<li className="relative pl-12 sm:pl-14 py-4 group">
<span className="absolute left-0 sm:left-1 h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h20"></path><path d="M22 20c-.61-2.44-2.66-4-5-4H7c-2.34 0-4.39 1.56-5 4"></path><path d="M6 16l1-2h10l1 2"></path><path d="M6 8h12l-1 6H7z"></path><path d="M6 8V5h12v3"></path></svg>
</span>
<div className="flex flex-wrap items-center gap-2">
<p className="text-neutral-300 text-sm">8:15 AM</p>
<div className="h-4 w-px bg-white/10"></div>
<p className="text-white text-sm">Ferry to Vashon Island (Fauntleroy → Vashon)</p>
</div>
<p className="mt-1 text-xs text-neutral-400">Have fare ready; bikes board first-come</p>
</li>
<li className="relative pl-12 sm:pl-14 py-4 group">
<span className="absolute left-0 sm:left-1 h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7H8.5a3.5 3.5 0 0 1 0-7H18"></path><circle cx="18" cy="5" r="3"></circle></svg>
</span>
<div className="flex flex-wrap items-center gap-2">
<p className="text-neutral-300 text-sm">9:00 AM</p>
<div className="h-4 w-px bg-white/10"></div>
<p className="text-white text-sm">Vashon loop ride (regroups at climbs)</p>
</div>
<p className="mt-1 text-xs text-neutral-400">Scenic loop with viewpoints and rolling terrain</p>
</li>
<li className="relative pl-12 sm:pl-14 py-4 group">
<span className="absolute left-0 sm:left-1 h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v6a4 4 0 1 1-8 0V8"></path><path d="M5 22h10"></path></svg>
</span>
<div className="flex flex-wrap items-center gap-2">
<p className="text-neutral-300 text-sm">11:00 AM</p>
<div className="h-4 w-px bg-white/10"></div>
<p className="text-white text-sm">Coffee + snack stop in town</p>
</div>
<p className="mt-1 text-xs text-neutral-400">Refill water, optional pastry</p>
</li>
<li className="relative pl-12 sm:pl-14 py-4 group">
<span className="absolute left-0 sm:left-1 h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">

<svg className="h-4.5 w-4.5 -scale-x-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h20"></path><path d="M22 20c-.61-2.44-2.66-4-5-4H7c-2.34 0-4.39 1.56-5 4"></path><path d="M6 16l1-2h10l1 2"></path><path d="M6 8h12l-1 6H7z"></path><path d="M6 8V5h12v3"></path></svg>
</span>
<div className="flex flex-wrap items-center gap-2">
<p className="text-neutral-300 text-sm">1:30 PM</p>
<div className="h-4 w-px bg-white/10"></div>
<p className="text-white text-sm">Return ferry (Vashon → Fauntleroy)</p>
</div>
<p className="mt-1 text-xs text-neutral-400">We’ll adjust to the live schedule if needed</p>
</li>
<li className="relative pl-12 sm:pl-14 py-4 group">
<span className="absolute left-0 sm:left-1 h-8 w-8 rounded-full bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m2 22 3.5-3.5"></path><path d="m3 21 6-6"></path><path d="m6.5 15.5 4-4"></path><path d="M8 12c0 1.5 1 3 3 3s3-1.5 3-3-1-3-3-3-3 1.5-3 3Z"></path><path d="M14 4h.01"></path><path d="M22 8h.01"></path><path d="M20 2h.01"></path><path d="M22 20h.01"></path></svg>
</span>
<div className="flex flex-wrap items-center gap-2">
<p className="text-neutral-300 text-sm">3:00 PM</p>
<div className="h-4 w-px bg-white/10"></div>
<p className="text-white text-sm">Wrap in West Seattle</p>
</div>
<p className="mt-1 text-xs text-neutral-400">Optional post-ride hang at Lincoln Park</p>
</li>
</ol>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6" id="rsvp">
<div className="flex items-start justify-between">
<div>
<h2 className="text-xl tracking-tight font-semibold text-white">RSVP</h2>
<p className="text-sm text-neutral-400 mt-1">Free to join. Helmets required.</p>
</div>
<div className="text-right">
<p className="text-xs text-neutral-400">Spots</p>
<p className="text-2xl tracking-tight font-semibold text-white"><span id="attendeeCount">0</span>/<span id="capacity">30</span></p>
</div>
</div>
<form className="mt-5 space-y-4" id="rsvpForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-neutral-400 mb-1.5">Full name</label>
<input className="w-full rounded-md bg-neutral-900/60 border border-white/10 focus:border-emerald-400/40 focus:ring-0 px-3 py-2 text-sm placeholder:text-neutral-500" name="name" placeholder="Alex Rider" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1.5">Email</label>
<input className="w-full rounded-md bg-neutral-900/60 border border-white/10 focus:border-emerald-400/40 focus:ring-0 px-3 py-2 text-sm placeholder:text-neutral-500" name="email" placeholder="alex@example.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-neutral-400 mb-1.5">Preferred pace</label>
<select className="w-full rounded-md bg-neutral-900/60 border border-white/10 focus:border-emerald-400/40 focus:ring-0 px-3 py-2 text-sm" name="pace">
<option>12–13 mph</option>
<option>13–14 mph</option>
<option>14–15 mph</option>
</select>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1.5">Emergency contact</label>
<input className="w-full rounded-md bg-neutral-900/60 border border-white/10 focus:border-emerald-400/40 focus:ring-0 px-3 py-2 text-sm placeholder:text-neutral-500" name="emergency" placeholder="Name + phone" type="text"/>
</div>
</div>
<div className="flex items-start gap-3">

<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="peer sr-only" id="waiver" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-white/15 bg-neutral-900/60 peer-checked:bg-emerald-500 peer-checked:border-emerald-400/80 transition-all flex items-center justify-center">

<svg className="h-3.5 w-3.5 text-neutral-950 opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="ml-3 text-xs text-neutral-300">I agree to ride at my own risk and will follow all traffic laws.</span>
</label>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 text-neutral-950 px-4 py-2.5 text-sm font-medium tracking-tight hover:bg-emerald-400 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/40 hover:-translate-y-0.5" type="submit">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              Submit RSVP
            </button>
<p className="hidden text-xs mt-2 text-emerald-300" id="formMsg">Thanks! You’re on the list. Check your inbox for details.</p>
</form>

<div className="mt-6 pt-5 border-t border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-300">Attendees</p>
<button className="text-xs text-neutral-400 hover:text-neutral-200 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-400/30 rounded" id="clearAttendees">clear (local)</button>
</div>
<div className="mt-3 flex flex-wrap gap-3" id="attendeeList"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" id="ferry">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between flex-wrap gap-3">
<div className="flex items-center gap-3">

<div className="h-9 w-9 rounded-md bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h20"></path><path d="M22 20c-.61-2.44-2.66-4-5-4H7c-2.34 0-4.39 1.56-5 4"></path><path d="M6 16l1-2h10l1 2"></path><path d="M6 8h12l-1 6H7z"></path><path d="M6 8V5h12v3"></path></svg>
</div>
<div>
<h3 className="text-lg tracking-tight font-semibold text-white">Fauntleroy ↔ Vashon Ferry</h3>
<p className="text-xs text-neutral-400">Bikes roll on with foot passengers. Arrive early.</p>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-300">

<svg className="h-4.5 w-4.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="m10.29 3.86-8.4 14.48A2 2 0 0 0 3.53 21h16.94a2 2 0 0 0 1.74-2.66L13.82 3.86a2 2 0 0 0-3.53 0Z"></path></svg>
            Schedules can change—check live status before departure
          </div>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-400">Outbound</p>
<p className="mt-1 text-sm text-white">Target: 8:15 AM</p>
<p className="text-xs text-neutral-400">Fauntleroy → Vashon</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-400">Return</p>
<p className="mt-1 text-sm text-white">Target: 1:30 PM</p>
<p className="text-xs text-neutral-400">Vashon → Fauntleroy</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-400">Fares</p>
<p className="mt-1 text-sm text-white">Bicycle + rider fare applies</p>
<p className="text-xs text-neutral-400">Cards accepted; have time for ticketing</p>
</div>
</div>
<div className="mt-5 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/30" href="https://wsdot.com/ferries/schedule/" rel="noopener" target="_blank">

<svg className="h-4.5 w-4.5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path></svg>
            Check live ferry schedules
          </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/30" href="https://wsdot.com/ferries/fares/" rel="noopener" target="_blank">

<svg className="h-4.5 w-4.5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 10h18"></path><path d="M8 2v2"></path><path d="M16 2v2"></path><rect height="16" rx="2" width="18" x="3" y="4"></rect></svg>
            See fares
          </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" id="route">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<h3 className="text-xl tracking-tight font-semibold text-white">Route overview</h3>
<p className="text-sm text-neutral-300 mt-2">
            We’ll roll from the Vashon terminal into a scenic island loop with a regroup at major climbs and a coffee stop in town. Expect rolling terrain, short steep sections, and great views.
          </p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="M22 4 12 14.01l-3-3"></path></svg>
              Turn-by-turn route shared at start; cue sheet optional
            </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              No-drop policy—regroup at intersections and tops of climbs
            </li>
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v6a4 4 0 1 1-8 0V8"></path><path d="M5 22h10"></path></svg>
              Coffee stop mid-ride; bring card/cash
            </li>
</ul>
<div className="mt-5 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/30" href="https://www.google.com/maps/dir/?api=1&amp;origin=Fauntleroy+Ferry+Terminal&amp;destination=Vashon+Island&amp;travelmode=bicycling" rel="noopener" target="_blank">

<svg className="h-4.5 w-4.5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l-6 2v13l6-2 6 2 6-2V5l-6 2v13z"></path></svg>
              Open in Google Maps
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400/30" href="https://ridewithgps.com/" rel="noopener" target="_blank">

<svg className="h-4.5 w-4.5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51 15.42 17.49"></path><path d="M15.41 6.51 8.59 10.49"></path></svg>
              Shareable route file (RWGPS/GPX)
            </a>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-white/10">
<div className="aspect-[16/10] w-full bg-neutral-900">
<img alt="Aerial of an island road with cyclists" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 bg-white/[0.03]">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-300">Vashon loop highlights</p>
<div className="flex items-center gap-3 text-xs text-neutral-400">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-3h8l2 3h3a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                Photo ops galore
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" id="safety">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<h3 className="text-xl tracking-tight font-semibold text-white">Plan for the day</h3>
<ul className="mt-4 space-y-3 text-sm text-neutral-300">
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.54 6.46-1.41-1.41M7.87 7.88 6.46 6.46m10.1 0-1.41 1.41M7.87 16.12 6.46 17.54"></path></svg>
              Weather varies—bring layers and a lightweight shell
            </li>
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              Helmets mandatory. Lights recommended for ferry terminals.
            </li>
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 1-7-7c0-5 7-11 7-11s7 6 7 11a7 7 0 0 1-7 7z"></path></svg>
              Two bottles, snacks, and electrolytes
            </li>
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.7 6.3 3 3-8.4 8.4a2 2 0 0 1-2.83 0l-2.1-2.1a2 2 0 0 1 0-2.83l8.4-8.4z"></path><path d="m16 5 3 3"></path></svg>
              Flat kit: tube/plug, levers, pump/CO₂, multi-tool
            </li>
<li className="flex items-start gap-2">

<svg className="mt-0.5 h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="18" x="3" y="4"></rect><path d="M7 8h10"></path><path d="M7 12h8"></path></svg>
              Bring fare/payment for ferry + coffee stop
            </li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<h3 className="text-xl tracking-tight font-semibold text-white">Meeting point</h3>
<p className="text-sm text-neutral-300 mt-2">Fauntleroy Ferry Terminal (West Seattle). We’ll meet near the bike holding area before the toll booths.</p>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-3 text-sm text-neutral-200 inline-flex items-center justify-between" href="https://maps.app.goo.gl/5qf9m5k5cFerry" rel="noopener" target="_blank">
<span className="inline-flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 10.61a8 8 0 1 0-13.73 5.36L12 21l4.89-5.03a8 8 0 0 0 3.95-5.36z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Open in Maps
              </span>

<svg className="h-4.5 w-4.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-3 text-sm text-neutral-200 inline-flex items-center justify-between" href="https://twitter.com/wsferries" rel="noopener" target="_blank">
<span className="inline-flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 4-9.5 11"></path><circle cx="4.5" cy="19.5" r="2.5"></circle><path d="m8 19 3-3"></path><path d="M5 8l-3 3"></path></svg>
                Live service updates
              </span>
<svg className="h-4.5 w-4.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<h3 className="text-xl tracking-tight font-semibold text-white">Contact</h3>
<p className="text-sm text-neutral-300 mt-2">Questions or running late? Message the ride lead.</p>
<div className="mt-4 space-y-2 text-sm">
<a className="flex items-center gap-2 text-neutral-300 hover:text-white" href="mailto:ridelead@example.com">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 6-10 7L2 6"></path><rect height="12" rx="2" width="20" x="2" y="6"></rect></svg>
              ridelead@example.com
            </a>
<a className="flex items-center gap-2 text-neutral-300 hover:text-white" href="tel:+12065551234">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.92-5-1.5a2 2 0 0 0-1.9.5l-2.8 2.8a16 16 0 0 1-7.2-7.2l2.8-2.8a2 2 0 0 0 .5-1.9l-1.5-5A2 2 0 0 0 4.2 1H3a2 2 0 0 0-2 2 19 19 0 0 0 19 19 2 2 0 0 0 2-2v-1.2a2 2 0 0 0-1.08-1.88z"></path></svg>
              +1 (206) 555‑1234
            </a>
</div>
<div className="mt-5 rounded-lg border border-white/10 bg-neutral-900/50 p-4">
<div className="flex items-start gap-3">

<svg className="h-5 w-5 text-amber-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="m10.29 3.86-8.4 14.48A2 2 0 0 0 3.53 21h16.94a2 2 0 0 0 1.74-2.66L13.82 3.86a2 2 0 0 0-3.53 0Z"></path></svg>
<p className="text-xs text-neutral-300">This is a friendly community ride on public roads. You are responsible for your own safety, equipment, and adherence to traffic laws.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20 flex items-center justify-center text-emerald-300 tracking-tight font-semibold text-xs">VR</div>
<p className="text-xs text-neutral-400">Vashon Island Group Ride · West Seattle</p>
</div>
<div className="flex items-center gap-5 text-xs text-neutral-400">
<a className="hover:text-neutral-200" href="#rsvp">RSVP</a>
<a className="hover:text-neutral-200" href="#ferry">Ferry info</a>
<a className="hover:text-neutral-200" href="#safety">Safety</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
