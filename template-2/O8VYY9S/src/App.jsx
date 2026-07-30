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
      {

      lucide.createIcons();

      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      const btnIn = document.getElementById('btn-inperson');
      const btnDist = document.getElementById('btn-distance');
      const prices = document.querySelectorAll('.price');

      function setMode(mode) {
        prices.forEach(p => {
          p.textContent = p.dataset[mode];
        });
        if (mode === 'inperson') {
          btnIn.className = 'px-3 py-1.5 text-sm rounded-full bg-neutral-900 text-white';
          btnDist.className = 'px-3 py-1.5 text-sm rounded-full text-neutral-700 hover:bg-neutral-50';
        } else {
          btnDist.className = 'px-3 py-1.5 text-sm rounded-full bg-neutral-900 text-white';
          btnIn.className = 'px-3 py-1.5 text-sm rounded-full text-neutral-700 hover:bg-neutral-50';
        }
      }

      btnIn?.addEventListener('click', () => setMode('inperson'));
      btnDist?.addEventListener('click', () => setMode('distance'));
    
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
      {"<"} charset="utf-8" /{">"}
<meta content="width=device-width, initial-scale=1" name="viewport" />
<title>Serene Flow Reiki — Restore, Rebalance, Renew</title>
<meta content="Reiki sessions to restore balance and calm. In‑person and distance healing with a certified Reiki Master." name="description" />
<link href="https://fonts.googleapis.com" rel="preconnect" />
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />


<div className="text-neutral-800 bg-gradient-to-r from-amber-100/70 via-rose-100/70 to-teal-100/70">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center text-sm">
        Distance Reiki available worldwide. New clients get 15% off with code SERENE15.
      </div>
</div>

<header className="sticky top-4 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="backdrop-blur-xl bg-white/70 border border-neutral-200/70 shadow-sm rounded-full px-4 py-2.5 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 text-white">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</span>
<span className="text-lg font-medium tracking-tight">Serene Flow Reiki</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm">
<a className="text-neutral-600 hover:text-neutral-900 transition" href="#about">About</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" href="#treatments">Treatments</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" href="#process">Process</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" href="#benefits">Benefits</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" href="#testimonials">Testimonials</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" href="#pricing">Pricing</a>
<a className="text-neutral-600 hover:text-neutral-900 transition" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50 transition" href="#pricing">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg> View Sessions
            </a>
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 transition" href="#contact">
<svg className="lucide lucide-hand h-4 w-4" data-lucide="hand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg> Book Now
            </a>
</div>
</nav>
</div>
</header>

<section className="md:pt-12 pt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6:px-8">
<div className="rounded-[28px] overflow-hidden bg-neutral-900 relative">
<img alt="Calming minimalist interior" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2060&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/80 via-neutral-900/30 to-transparent"></div>
<div className="relative p-6 sm:p-10 md:p-14 lg:p-16 text-white">
<div className="max-w-2xl">
<span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-medium">
<svg className="lucide lucide-leaf h-4 w-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Reiki for deep rest and balance
              </span>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                Restore your energy. Rebalance your mind. Renew your body.
              </h1>
<p className="mt-4 text-base/7 text-white/90">
                Gentle, non‑invasive sessions guided by a certified Reiki Master. In‑person in studio or distance healing from anywhere.
              </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 transition" href="#contact">
<svg className="lucide lucide-sparkle h-4 w-4" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Start Your Healing Journey
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-5 py-3 text-sm font-medium hover:bg-white/15 transition" href="#about">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Learn More
                </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4">
<div className="text-2xl font-semibold tracking-tight">1500+</div>
<div className="text-xs text-white/80">Sessions completed</div>
</div>
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4">
<div className="text-2xl font-semibold tracking-tight">15 yrs</div>
<div className="text-xs text-white/80">Practice experience</div>
</div>
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4">
<div className="text-2xl font-semibold tracking-tight">4.9/5</div>
<div className="text-xs text-white/80">Client satisfaction</div>
</div>
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4">
<div className="text-2xl font-semibold tracking-tight">Global</div>
<div className="text-xs text-white/80">Distance sessions</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="rounded-2xl p-6 bg-gradient-to-br from-amber-50 to-rose-50 border border-neutral-200">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-neutral-200">
<svg className="lucide lucide-award h-5 w-5 text-amber-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="8"></circle></svg>
</span>
<div>
<div className="text-sm text-neutral-600">Accreditations</div>
<div className="text-lg font-semibold tracking-tight">Certified Reiki Master</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-700">
              Usui/Holy Fire III lineage with continual professional development and ethics-first practice.
            </p>
</div>
<div className="rounded-2xl p-6 bg-white border border-neutral-200">
<h3 className="text-xl font-semibold tracking-tight">Who I Am</h3>
<p className="mt-2 text-sm text-neutral-700">
              I help sensitive, high-performing people release stress, improve sleep, and reconnect with calm through a grounded, evidence‑aware Reiki approach.
            </p>
<div className="mt-3 inline-flex items-center gap-2 text-sm text-teal-700">
<svg className="lucide lucide-feather h-4 w-4" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> Gentle, client‑led, trauma‑aware
            </div>
</div>
<div className="rounded-2xl p-4 overflow-hidden border border-neutral-200">
<div className="relative h-40 w-full rounded-xl overflow-hidden">
<img alt="Hands and journal" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<p className="mt-3 text-sm text-neutral-700">
              Sessions blend intuitive Reiki with breath cues and aftercare so you leave resourced, not rushed.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How Sessions Unfold</h2>
<p className="mt-2 text-neutral-600">Simple, supportive and paced for your nervous system.</p>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-3xl bg-white border border-neutral-200 p-6">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-teal-100">
<span className="text-base font-medium">1</span>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight">Intake & intention</h3>
<p className="mt-1 text-sm text-neutral-700">
                  Brief conversation to align on focus areas, accessibility needs, and desired outcomes.
                </p>
</div>
</div>
<div className="mt-6 flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-teal-100">
<span className="text-base font-medium">2</span>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight">Reiki session</h3>
<p className="mt-1 text-sm text-neutral-700">
                  Light, non‑invasive hand placements (or distance work) promoting flow where energy feels stuck.
                </p>
</div>
</div>
<div className="mt-6 flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center ring-1 ring-teal-100">
<span className="text-base font-medium">3</span>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight">Integration & aftercare</h3>
<p className="mt-1 text-sm text-neutral-700">
                  Grounding, hydration and simple practices to support the days following your session.
                </p>
</div>
</div>
</div>
<div className="rounded-3xl overflow-hidden bg-neutral-900 relative">
<div className="absolute inset-0">
<img alt="Soft ambient space" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2060&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent"></div>
</div>
<div className="relative p-6 md:p-10 text-white">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">A space for deep rest</h3>
<p className="mt-2 text-sm text-white/90">
                Thoughtful lighting, quiet soundscape and consent‑led touch help your system unwind safely.
              </p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-moon h-4 w-4" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm">Sleep quality</span>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight">Improves</div>
</div>
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-sm">Stress load</span>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight">Eases</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-neutral-100" id="treatments">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Treatments</h2>
<p className="mt-2 text-neutral-600">Choose the format that meets you where you are.</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
<article className="rounded-3xl overflow-hidden border border-neutral-200 bg-white">
<div className="h-36 w-full overflow-hidden">
<img alt="Calm studio" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2060&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-teal-700 text-sm">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg> In‑Studio
              </div>
<h3 className="mt-1 text-xl font-semibold tracking-tight">Reiki Session</h3>
<p className="mt-1 text-sm text-neutral-700">60 minutes of hands‑on Reiki with optional breath & sound.</p>
</div>
</article>
<article className="rounded-3xl overflow-hidden border border-neutral-200 bg-white">
<div className="h-36 w-full overflow-hidden">
<img alt="Mountain sunrise" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2060&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-teal-700 text-sm">
<svg className="lucide lucide-wifi h-4 w-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg> Distance
              </div>
<h3 className="mt-1 text-xl font-semibold tracking-tight">Distance Reiki</h3>
<p className="mt-1 text-sm text-neutral-700">Receive from home. Guided arrival and post‑session notes included.</p>
</div>
</article>
<article className="rounded-3xl overflow-hidden border border-neutral-200 bg-white">
<div className="h-36 w-full overflow-hidden">
<img alt="Chakra stones" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-teal-700 text-sm">
<svg className="lucide lucide-gem h-4 w-4" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> Alignment
              </div>
<h3 className="mt-1 text-xl font-semibold tracking-tight">Chakra Balancing</h3>
<p className="mt-1 text-sm text-neutral-700">Focused work across major energy centers to restore flow.</p>
</div>
</article>
<article className="rounded-3xl overflow-hidden border border-neutral-200 bg-white">
<div className="h-36 w-full overflow-hidden">
<img alt="Sound bowls" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2060&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-teal-700 text-sm">
<i className="h-4 w-4" data-lucide="soundcloud"></i> Add‑On
              </div>
<h3 className="mt-1 text-xl font-semibold tracking-tight">Sound Bath</h3>
<p className="mt-1 text-sm text-neutral-700">Gentle tones to support nervous system downshift.</p>
</div>
</article>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why Reiki with Serene Flow</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="rounded-3xl p-6 bg-white border border-neutral-200">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-xl bg-teal-50 ring-1 ring-teal-100 inline-flex items-center justify-center text-teal-700">
<svg className="lucide lucide-hand-heart h-5 w-5" data-lucide="hand-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Trauma‑aware care</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">Consent‑led touch, options at every step, and paced sessions to avoid overwhelm.</p>
</div>
<div className="rounded-3xl p-6 bg-white border border-neutral-200">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-xl bg-teal-50 ring-1 ring-teal-100 inline-flex items-center justify-center text-teal-700">
<svg className="lucide lucide-stethoscope h-5 w-5" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><circle cx="20" cy="10"></circle></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Evidence‑aware</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">Grounded language and simple, measurable outcomes like sleep and stress markers.</p>
</div>
<div className="rounded-3xl p-6 bg-white border border-neutral-200">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-xl bg-teal-50 ring-1 ring-teal-100 inline-flex items-center justify-center text-teal-700">
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Community pricing</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">Sliding scale slots reserved monthly to improve access to care.
          </p></div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-neutral-100" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Client Words</h2>
<p classmt-2="">Real experiences from recent sessions.</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
<figure className="rounded-3xl p-6 bg-white border border-neutral-200">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1000&auto=format&fit=crop" />
<figcaption>
<div className="text-sm font-medium">A.</div>
<div className="text-xs text-neutral-600">Distance Session</div>
</figcaption>
</div>
<blockquote className="mt-3 text-sm text-neutral-800">
              “I felt deeply calm for the first time in months. I slept through the night and woke up clear.”
            </blockquote>
</figure>
<figure className="rounded-3xl p-6 bg-white border border-neutral-200">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" />
<figcaption>
<div className="text-sm font-medium">J.</div>
<div className="text-xs text-neutral-600">In‑Studio</div>
</figcaption>
</div>
<blockquote className="mt-3 text-sm text-neutral-800">
              “Grounded, kind, and professional. My anxiety dropped noticeably after the session.”
            </blockquote>
</figure>
<figure className="rounded-3xl p-6 bg-white border border-neutral-200">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop" />
<figcaption>
<div className="text-sm font-medium">M.</div>
<div className="text-xs text-neutral-600">Chakra Balance</div>
</figcaption>
</div>
<blockquote className="mt-3 text-sm text-neutral-800">
              “Felt an immediate sense of clarity and lightness. The aftercare tips were so helpful.”
            </blockquote>
</figure>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4 flex-wrap">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Session Options</h2>
<p className="mt-2 text-neutral-600">Choose in‑studio or distance. Packages include integration support.</p>
</div>

<div className="rounded-full border border-neutral-200 bg-white p-1 flex items-center gap-1">
<button className="px-3 py-1.5 text-sm rounded-full bg-neutral-900 text-white" id="btn-inperson">In‑Person</button>
<button className="px-3 py-1.5 text-sm rounded-full text-neutral-700 hover:bg-neutral-50" id="btn-distance">Distance</button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="rounded-3xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-2 text-teal-700">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="text-sm">60 minutes</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Single Session</h3>
<div className="mt-3">
<span className="text-3xl font-semibold tracking-tight">$<span className="price" data-distance="85" data-inperson="95">95</span></span>
<span className="text-sm text-neutral-600">USD</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-4 w-4 text-teal-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Intake + intention setting</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-4 w-4 text-teal-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Personalized aftercare</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-2.5 text-sm hover:bg-neutral-800 transition" href="#contact">Book</a>
</div>
<div className="rounded-3xl border-2 border-neutral-900 bg-white p-6">
<div className="flex items-center gap-2 text-teal-700">
<svg className="lucide lucide-stars h-4 w-4" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<span className="text-sm">Save 10%</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">3‑Session Series</h3>
<div className="mt-3">
<span className="text-3xl font-semibold tracking-tight">$<span className="price" data-distance="230" data-inperson="255">255</span></span>
<span className="text-sm text-neutral-600">USD</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-4 w-4 text-teal-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Progress‑based plan</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-4 w-4 text-teal-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Email support between sessions</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-2.5 text-sm hover:bg-neutral-800 transition" href="#contact">Start Series</a>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-2 text-teal-700">
<svg className="lucide lucide-flower h-4 w-4" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
<span className="text-sm">Deep dive</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">90‑Minute Reset</h3>
<div className="mt-3">
<span className="text-3xl font-semibold tracking-tight">$<span className="price" data-distance="125" data-inperson="140">140</span></span>
<span className="text-sm text-neutral-600">USD</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-4 w-4 text-teal-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Extended hands‑on time</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check h-4 w-4 text-teal-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Optional sound bath</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-2.5 text-sm hover:bg-neutral-800 transition" href="#contact">Reserve</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-neutral-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
<div className="rounded-3xl overflow-hidden bg-neutral-900 relative">
<div className="absolute inset-0">
<img alt="Ambient room" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2060&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/80 via-neutral-900/30 to-transparent"></div>
</div>
<div className="relative p-6 md:p-10 text-white">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">A calm, modern practice</h3>
<p className="mt-2 text-sm text-white/90">Minimal, sensory‑aware space with filtered air, weighted blankets and adjustable sound levels.</p>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 md:p-10">
<h3 className="text-2xl font-semibold tracking-tight">Values</h3>
<ul className="mt-4 space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-shield-check h-5 w-5 text-teal-700 mt-0.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div>
<div className="font-medium">Safety and consent</div>
<p className="text-sm text-neutral-700">Clear boundaries and choices throughout your visit.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-book-open h-5 w-5 text-teal-700 mt-0.5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div>
<div className="font-medium">Clarity over claims</div>
<p className="text-sm text-neutral-700">No grand promises—just thoughtful care and honest feedback loops.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-globe h-5 w-5 text-teal-700 mt-0.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
<div>
<div className="font-medium">Access matters</div>
<p className="text-sm text-neutral-700">Community slots, remote sessions, and sensory accommodations.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-3xl bg-white border border-neutral-200 p-6 md:p-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Book a Session</h2>
<p className="mt-2 text-neutral-600">Fill out the form and I’ll confirm your time within 24 hours.</p>
<form className="mt-6 grid grid-cols-1 gap-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-700">Full name</label>
<input className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Your name" type="text" />
</div>
<div>
<label className="text-sm text-neutral-700">Email</label>
<input className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="you@domain.com" type="email" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-700">Preferred date</label>
<input className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" type="date" />
</div>
<div>
<label className="text-sm text-neutral-700">Preferred time</label>
<input className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" type="time" />
</div>
</div>
<div>
<label className="text-sm text-neutral-700">Session focus</label>
<input className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Stress, sleep, clarity..." type="text" />
</div>
<div>
<label className="text-sm text-neutral-700">Notes</label>
<textarea className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Anything I should know before we begin?" rows="4"></textarea>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm hover:bg-neutral-800 transition" type="submit">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Submit
                </button>
<span className="text-xs text-neutral-500">By submitting, you agree to the terms and privacy policy.</span>
</div>
</form>
</div>
<div className="rounded-3xl overflow-hidden border border-neutral-200">
<div className="relative h-full min-h-[380px]">
<img alt="Minimal zen stones" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2060&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20"></div>
<div className="relative p-6 md:p-10">
<h3 className="text-2xl font-semibold tracking-tight">Studio</h3>
<p className="mt-2 text-sm text-neutral-700">123 Calm Street, Suite 4 • Mon–Sat</p>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4">
<div className="text-sm text-neutral-600">Email</div>
<div className="font-medium">hello@sereneflow.co</div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-4">
<div className="text-sm text-neutral-600">Phone</div>
<div className="font-medium">+1 (555) 014‑8899</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<span className="inline-flex items-center gap-2 text-sm text-neutral-700">
<svg className="lucide lucide-accessibility h-4 w-4" data-lucide="accessibility" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="4"></circle><path></path><path></path><path></path><path></path></svg> Wheelchair accessible
                  </span>
<span className="inline-flex items-center gap-2 text-sm text-neutral-700">
<svg className="lucide lucide-droplets h-4 w-4" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> HEPA filtered
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
</span>
<span className="text-sm font-medium">Serene Flow Reiki</span>
</div>
<div className="text-xs text-neutral-600">
            © <span id="year">2025</span> Serene Flow Reiki. All rights reserved.
          </div>
<div className="flex items-center gap-3 text-neutral-600">
<a className="hover:text-neutral-900 text-sm" href="#">Terms</a>
<a className="hover:text-neutral-900 text-sm" href="#">Privacy</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
