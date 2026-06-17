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



      document.getElementById("year").textContent = new Date().getFullYear();
    
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
      
<div className="flex min-h-screen flex-col">

<div className="w-full bg-slate-900/70 border-b border-slate-800/80">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm">
<div className="flex flex-wrap items-center gap-2 text-slate-300">
<span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
              Mobile IV therapy
            </span>
<span className="text-slate-400">
              Same-day in-home treatments available in select cities.
            </span>
</div>
<a className="inline-flex items-center gap-2 whitespace-nowrap text-xs font-medium text-emerald-300 hover:text-emerald-200" href="tel:+18001234567">
<span className="iconify" data-height="16" data-icon="lucide:phone-call" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Call (800) 123-4567</span>
</a>
</div>
</div>

<header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">

<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/40">
<span className="text-sm font-semibold tracking-tight text-emerald-300">
                HD
              </span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight text-slate-100">
                HydraDrip
              </span>
<span className="text-xs font-medium text-slate-400">
                Mobile IV Therapy
              </span>
</div>
</a>

<nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
<a className="transition hover:text-emerald-300" href="#treatments">Treatments</a>
<a className="transition hover:text-emerald-300" href="#how-it-works">How it works</a>
<a className="transition hover:text-emerald-300" href="#locations">Locations</a>
<a className="transition hover:text-emerald-300" href="#about">About</a>
<a className="transition hover:text-emerald-300" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-slate-700 bg-slate-900/40 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm transition hover:border-slate-500 hover:bg-slate-900/80 md:inline-flex">
<span className="iconify mr-1.5" data-height="15" data-icon="lucide:calendar" data-width="15" style={{strokeWidth: '1.5'}}></span>
              Check availability
            </button>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300">
<span className="iconify" data-height="16" data-icon="lucide:droplets" data-width="16" style={{strokeWidth: '1.5'}}></span>
              Book IV therapy
            </button>

<button className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 p-1.5 text-slate-200 md:hidden">
<span className="iconify" data-height="18" data-icon="lucide:menu" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</header>

<main className="flex-1">
<section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/90">
<div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-10 md:grid-cols-2 md:py-16 lg:gap-16">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-200">
<span className="iconify" data-height="14" data-icon="lucide:zap" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>On-demand IV therapy in your home, office, or hotel</span>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Doctor-designed IV drips,
                <span className="text-emerald-300">delivered to your door.</span>
</h1>
<p className="text-base text-slate-300 sm:text-lg">
                Licensed nurses bring medical-grade IV therapy directly to you. Rehydrate, boost immunity, and recover faster with custom vitamin infusions—on your schedule.
              </p>

<div className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-lg shadow-slate-950/80 sm:p-5">
<div className="mb-4 flex items-center justify-between gap-3">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-100">
                      Book your in-home IV therapy
                    </p>
<p className="text-xs text-slate-400">
                      Enter your location to see same-day availability.
                    </p>
</div>
<div className="hidden items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.65rem] font-medium text-slate-200 sm:inline-flex">
<span className="iconify text-emerald-300" data-height="13" data-icon="lucide:clock-3" data-width="13" style={{strokeWidth: '1.5'}}></span>
<span>Under 60 seconds</span>
</div>
</div>
<form className="space-y-3">
<div className="grid gap-3 sm:grid-cols-[2fr,1.5fr]">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300">Service address</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:map-pin" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="h-full w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Enter your address" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300">Appointment date</label>
<div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100">
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:calendar-days" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="h-full w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" type="date"/>
</div>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300">Full name</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300">Mobile number</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-md shadow-emerald-500/50 transition hover:bg-emerald-300" type="submit">
<span className="iconify" data-height="18" data-icon="lucide:droplet" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    See IV options &amp; pricing
                  </button>
<p className="text-[0.7rem] text-slate-500">
                    By continuing, you agree to receive SMS updates about your appointment. Standard messaging rates apply.
                  </p>
</form>
</div>

<div className="flex flex-wrap items-center gap-4 pt-2">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify text-emerald-300" data-height="16" data-icon="lucide:shield-check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span>Supervised by board-certified physicians</span>
</div>
<div className="h-4 w-px bg-slate-800"></div>
<div className="flex items-center gap-1 text-xs text-slate-400">
<span className="iconify text-amber-300" data-height="14" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="font-semibold tracking-tight text-slate-100">4.9</span>
<span>Average rating from 2,500+ clients</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-tr from-emerald-500/10 via-cyan-400/10 to-transparent blur-3xl"></div>
<div className="relative mx-auto max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/80 sm:p-5">

<div className="mx-auto h-full max-w-[16rem] rounded-3xl border border-slate-700 bg-gradient-to-b from-slate-900 to-slate-950 p-3">
<div className="mb-2 flex items-center justify-between text-[0.65rem] text-slate-400">
<span>9:41</span>
<div className="flex items-center gap-1">
<span className="iconify" data-height="10" data-icon="lucide:wifi" data-width="10" style={{strokeWidth: '1.5'}}></span>
<span className="iconify" data-height="10" data-icon="lucide:battery" data-width="10" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10">
<span className="text-[0.7rem] font-semibold tracking-tight text-emerald-300">HD</span>
</div>
<div className="leading-tight">
<p className="text-[0.7rem] font-semibold tracking-tight text-slate-100">Your nurse is on the way</p>
<p className="text-[0.6rem] text-emerald-300">ETA 22 minutes</p>
</div>
</div>
<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.6rem] font-medium text-emerald-300">In progress</span>
</div>
<div className="mb-3 rounded-2xl border border-slate-700 bg-slate-900/60 p-2">
<p className="mb-2 text-[0.65rem] font-medium text-slate-200">
                      Immunity Boost IV
                    </p>
<div className="mb-2 flex items-center gap-1">
<span className="iconify text-amber-300" data-height="12" data-icon="lucide:sparkles" data-width="12" style={{strokeWidth: '1.5'}}></span>
<p className="text-[0.6rem] text-slate-400">
                        Vitamin C, Zinc, B-complex, and hydration to support your immune system.
                      </p>
</div>
<div className="flex items-center justify-between text-[0.65rem]">
<span className="text-slate-300">Total</span>
<span className="font-semibold tracking-tight text-slate-100">$289</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-2xl bg-slate-900/80 p-2 text-[0.6rem]">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.6),rgba(15,23,42,1))] ring-1 ring-emerald-500/50"></div>
<div>
<p className="font-medium text-slate-100">Alex, RN</p>
<p className="text-slate-400">Registered Nurse · 6 yrs exp.</p>
</div>
</div>
<div className="text-right">
<p className="font-medium text-emerald-300">Verified</p>
<p className="text-slate-500">Background checked</p>
</div>
</div>
<button className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-400 py-1.5 text-[0.7rem] font-semibold tracking-tight text-slate-950 shadow-md shadow-emerald-500/50">
<span className="iconify" data-height="13" data-icon="lucide:message-circle" data-width="13" style={{strokeWidth: '1.5'}}></span>
                      Message your nurse
                    </button>
<button className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/90 py-1.5 text-[0.7rem] font-medium text-slate-100">
<span className="iconify" data-height="13" data-icon="lucide:phone" data-width="13" style={{strokeWidth: '1.5'}}></span>
                      Call support
                    </button>
</div>
</div>

<div className="pointer-events-none absolute -left-2 top-4 hidden max-w-[11rem] rounded-2xl border border-slate-800 bg-slate-950/90 p-3 text-xs text-slate-200 shadow-lg shadow-slate-950/80 lg:block">
<p className="mb-1 text-[0.7rem] font-semibold tracking-tight text-slate-100">
                    24/7 medical oversight
                  </p>
<p className="mb-2 text-[0.65rem] text-slate-400">
                    Every treatment is reviewed by our medical director for safety and efficacy.
                  </p>
<div className="flex items-center gap-2 text-[0.6rem]">
<span className="iconify text-emerald-300" data-height="13" data-icon="lucide:stethoscope" data-width="13" style={{strokeWidth: '1.5'}}></span>
<span>MD-created protocols</span>
</div>
</div>
<div className="pointer-events-none absolute -right-4 bottom-4 hidden max-w-[11rem] rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs text-emerald-100 shadow-lg shadow-emerald-500/30 md:block">
<p className="mb-1 text-[0.7rem] font-semibold tracking-tight">
                    45–60 minute sessions
                  </p>
<p className="mb-2 text-[0.65rem]">
                    Most clients feel the effects before the drip is even finished.
                  </p>
<div className="flex items-center gap-2 text-[0.6rem]">
<span className="iconify" data-height="13" data-icon="lucide:smile-plus" data-width="13" style={{strokeWidth: '1.5'}}></span>
<span>Minimal downtime</span>
</div>
</div>
</div>

<div className="mt-8 space-y-3">
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Trusted by clients at
                </p>
<div className="flex flex-wrap items-center gap-4 text-xs font-semibold tracking-tight text-slate-400 sm:gap-6">
<span className="tracking-tight text-slate-300">UrbanWell</span>
<span className="tracking-tight">PeakFit Labs</span>
<span className="tracking-tight">Summit Recovery</span>
<span className="tracking-tight">Nova Clinics</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950/90" id="treatments">
<div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                  IV treatments
                </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Personalized IV drips for every need
                </h2>
<p className="mt-2 text-base text-slate-300 sm:max-w-lg">
                  From rapid recovery to long-term wellness, our medical team has formulated targeted IV blends backed by current research.
                </p>
</div>
<button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-100 shadow-sm hover:border-emerald-400/70 hover:text-emerald-200">
                View all IV blends
                <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="grid gap-5 md:grid-cols-3">

<article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
<div className="mb-3 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10">
<span className="iconify text-emerald-300" data-height="16" data-icon="lucide:droplets" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Hydration IV
                    </p>
</div>
<span className="rounded-full bg-slate-800 px-2 py-0.5 text-[0.65rem] font-medium text-slate-300">
                    Most popular
                  </span>
</div>
<p className="mb-3 text-sm text-slate-300">
                  Restore fluids and electrolytes quickly after travel, illness, or intense activity.
                </p>
<ul className="mb-3 space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<span className="iconify text-emerald-300" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Balanced electrolytes &amp; essential minerals
                  </li>
<li className="flex items-center gap-1.5">
<span className="iconify text-emerald-300" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Ideal for dehydration &amp; jet lag
                  </li>
</ul>
<div className="mt-auto flex items-center justify-between text-xs text-slate-300">
<span>Starting at <span className="font-semibold tracking-tight text-slate-50">$199</span></span>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.65rem] font-medium text-slate-100 hover:bg-emerald-500/20 hover:text-emerald-200">
                    Book now
                    <span className="iconify" data-height="12" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>
<article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
<div className="mb-3 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10">
<span className="iconify text-emerald-300" data-height="16" data-icon="lucide:shield" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Immunity Boost
                    </p>
</div>
<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-300">
                    Immune support
                  </span>
</div>
<p className="mb-3 text-sm text-slate-300">
                  High-dose Vitamin C, Zinc, and antioxidants to support your immune response.
                </p>
<ul className="mb-3 space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<span className="iconify text-emerald-300" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Ideal at first signs of illness or exposure
                  </li>
<li className="flex items-center gap-1.5">
<span className="iconify text-emerald-300" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Physician-reviewed dosing
                  </li>
</ul>
<div className="mt-auto flex items-center justify-between text-xs text-slate-300">
<span>Starting at <span className="font-semibold tracking-tight text-slate-50">$289</span></span>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.65rem] font-medium text-slate-100 hover:bg-emerald-500/20 hover:text-emerald-200">
                    Book now
                    <span className="iconify" data-height="12" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>
<article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
<div className="mb-3 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10">
<span className="iconify text-emerald-300" data-height="16" data-icon="lucide:glass-water" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Recovery &amp; Performance
                    </p>
</div>
<span className="rounded-full bg-slate-800 px-2 py-0.5 text-[0.65rem] font-medium text-slate-300">
                    Wellness &amp; fitness
                  </span>
</div>
<p className="mb-3 text-sm text-slate-300">
                  Amino acids, B12, and electrolytes to support recovery after intense exertion.
                </p>
<ul className="mb-3 space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<span className="iconify text-emerald-300" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Ideal for athletes &amp; busy professionals
                  </li>
<li className="flex items-center gap-1.5">
<span className="iconify text-emerald-300" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Optional add-ons like NAD+ &amp; glutathione
                  </li>
</ul>
<div className="mt-auto flex items-center justify-between text-xs text-slate-300">
<span>Starting at <span className="font-semibold tracking-tight text-slate-50">$329</span></span>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-800 px-2 py-1 text-[0.65rem] font-medium text-slate-100 hover:bg-emerald-500/20 hover:text-emerald-200">
                    Book now
                    <span className="iconify" data-height="12" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="how-it-works">
<div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
<div className="mx-auto mb-8 max-w-2xl text-center">
<p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                How it works
              </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Medical-grade care, without leaving home
              </h2>
<p className="mt-2 text-base text-slate-300">
                A streamlined process designed for safety, convenience, and transparency—overseen by our medical team every step of the way.
              </p>
</div>
<div className="grid gap-5 md:grid-cols-3">
<div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="mb-3 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold tracking-tight text-emerald-300">
                      1
                    </span>
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Tell us your goals
                    </p>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:clipboard-list" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mb-3 text-sm text-slate-300">
                  Complete a short intake form about your health history, current symptoms, and wellness goals.
                </p>
<ul className="space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:shield" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Reviewed by our clinical team
                  </li>
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:lock" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    HIPAA-compliant and secure
                  </li>
</ul>
</div>
<div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="mb-3 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold tracking-tight text-emerald-300">
                      2
                    </span>
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Nurse comes to you
                    </p>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:map" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mb-3 text-sm text-slate-300">
                  A licensed nurse arrives at your home, office, or hotel with everything needed for treatment.
                </p>
<ul className="space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:nurse" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Registered nurses with IV expertise
                  </li>
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:clock" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Sessions typically 45–60 minutes
                  </li>
</ul>
</div>
<div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="mb-3 flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold tracking-tight text-emerald-300">
                      3
                    </span>
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Relax &amp; feel better
                    </p>
</div>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:smile-plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mb-3 text-sm text-slate-300">
                  Sit back in the comfort of your own space as your nurse monitors you throughout the infusion.
                </p>
<ul className="space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:droplets" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Many feel improvement within the first 15–20 minutes
                  </li>
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:heart-pulse" data-width="12" style={{strokeWidth: '1.5'}}></span>
                    Post-treatment check-in via text
                  </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950/95" id="locations">
<div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
<div className="max-w-md">
<p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                  Locations
                </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Same-day mobile IV in major cities
                </h2>
<p className="mt-2 text-base text-slate-300">
                  Our network of nurses covers metropolitan areas and many surrounding suburbs. Enter your address to confirm availability.
                </p>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify text-emerald-300" data-height="14" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Always dispatched from the closest available nurse</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="iconify text-emerald-300" data-height="14" data-icon="lucide:clock" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Typical arrival within 2 hours</span>
</div>
</div>
<div className="mt-5 space-y-2">
<label className="text-xs font-medium text-slate-300">Check availability</label>
<div className="flex flex-col gap-2 sm:flex-row">
<div className="flex-1 rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100">
<div className="flex items-center gap-2">
<span className="iconify text-slate-500" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Enter city or ZIP code" type="text"/>
</div>
</div>
<button className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-400 px-3 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-md shadow-emerald-500/40 hover:bg-emerald-300">
                      Check
                      <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<p className="text-[0.7rem] text-slate-500">
                    If we are not yet available in your area, we will notify you as soon as we launch nearby.
                  </p>
</div>
</div>
<div className="grid flex-1 gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
<div className="mb-2 flex items-center justify-between gap-2">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      West Coast
                    </p>
<span className="rounded-full bg-slate-800 px-2 py-0.5 text-[0.65rem] font-medium text-slate-300">
                      Same-day
                    </span>
</div>
<ul className="space-y-1.5 text-xs text-slate-300">
<li>Los Angeles</li>
<li>Orange County</li>
<li>San Diego</li>
<li>San Francisco Bay Area</li>
<li>Seattle</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
<div className="mb-2 flex items-center justify-between gap-2">
<p className="text-sm font-semibold tracking-tight text-slate-50">
                      Central &amp; East
                    </p>
<span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-300">
                      Expanding
                    </span>
</div>
<ul className="space-y-1.5 text-xs text-slate-300">
<li>Austin</li>
<li>Dallas–Fort Worth</li>
<li>Denver</li>
<li>Miami</li>
<li>New York City</li>
</ul>
</div>
<div className="rounded-2xl border border-dashed border-emerald-500/40 bg-emerald-500/5 p-4 sm:col-span-2">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-sm font-semibold tracking-tight text-emerald-200">
                        Not in your city yet?
                      </p>
<p className="mt-1 text-xs text-emerald-100">
                        Join the waitlist and be the first to know when we launch near you.
                      </p>
</div>
<button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-400/60 bg-slate-950/60 px-3 py-1.5 text-xs font-semibold tracking-tight text-emerald-200 hover:bg-emerald-500/10">
                      Join waitlist
                      <span className="iconify" data-height="14" data-icon="lucide:send" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="about">
<div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
<div className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
<div>
<p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                  Medical leadership
                </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Led by physicians. Powered by nurses.
                </h2>
<p className="mt-2 text-base text-slate-300">
                  Our protocols are designed by board-certified physicians with backgrounds in emergency medicine, integrative medicine, and anesthesiology.
                </p>
<div className="mt-4 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<p className="mb-1 text-sm font-semibold tracking-tight text-slate-50">
                      Safety first
                    </p>
<p className="text-xs text-slate-300">
                      Comprehensive screening, physician oversight, and registered nurses ensure safe administration.
                    </p>
<ul className="mt-2 space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:shield-check" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        Strict protocols &amp; checklists
                      </li>
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:hospital" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        Hospital-grade supplies
                      </li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<p className="mb-1 text-sm font-semibold tracking-tight text-slate-50">
                      Transparent pricing
                    </p>
<p className="text-xs text-slate-300">
                      No hidden fees, surprise charges, or membership requirements—just clear, upfront pricing.
                    </p>
<ul className="mt-2 space-y-1.5 text-xs text-slate-400">
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:credit-card" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        Pay after nurse is dispatched
                      </li>
<li className="flex items-center gap-1.5">
<span className="iconify text-slate-500" data-height="12" data-icon="lucide:receipt" data-width="12" style={{strokeWidth: '1.5'}}></span>
                        Superbill available for reimbursement
                      </li>
</ul>
</div>
</div>
<div className="mt-5 flex flex-wrap items-center gap-4">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.7),rgba(15,23,42,1))] ring-2 ring-slate-950"></div>
<div className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.7),rgba(15,23,42,1))] ring-2 ring-slate-950"></div>
<div className="h-8 w-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,244,245,0.8),rgba(15,23,42,1))] ring-2 ring-slate-950"></div>
</div>
<div className="text-xs text-slate-400">
<p className="font-medium text-slate-200">
                      80+ clinicians nationwide
                    </p>
<p>All licensed, insured, and background checked.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5">
<p className="mb-3 text-xs font-medium uppercase tracking-wide text-emerald-300">
                  Clinical highlight
                </p>
<p className="mb-3 text-sm font-medium text-slate-100">
                  “IV therapy is not a replacement for emergency care, but when used appropriately, it can safely support hydration, recovery, and wellness from the comfort of home.”
                </p>
<div className="mb-3 flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(248,250,252,0.9),rgba(15,23,42,1))] ring-1 ring-slate-400/40"></div>
<div>
<p className="text-xs font-semibold tracking-tight text-slate-100">
                      Jordan Lee, MD
                    </p>
<p className="text-[0.7rem] text-slate-400">
                      Medical Director · Emergency Medicine
                    </p>
</div>
</div>
<div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
<div className="rounded-2xl bg-slate-950/80 p-3">
<p className="text-[0.7rem] font-medium text-slate-200">
                      25,000+
                    </p>
<p className="text-[0.7rem] text-slate-400">
                      In-home IV treatments completed with our team.
                    </p>
</div>
<div className="rounded-2xl bg-slate-950/80 p-3">
<p className="text-[0.7rem] font-medium text-slate-200">
<span className="iconify mr-1.5 text-emerald-300" data-height="11" data-icon="lucide:heart" data-width="11" style={{strokeWidth: '1.5'}}></span>
                      98%
                    </p>
<p className="text-[0.7rem] text-slate-400">
                      Of clients would recommend us to a friend or family member.
                    </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950/95" id="faq">
<div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
<div className="mx-auto mb-8 max-w-2xl text-center">
<p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                FAQ
              </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Questions about mobile IV therapy
              </h2>
<p className="mt-2 text-base text-slate-300">
                If you have specific medical concerns, we recommend talking directly with our clinical team.
              </p>
</div>
<div className="mx-auto max-w-2xl space-y-3">

<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="flex items-center justify-between gap-4">
<p className="text-sm font-medium text-slate-100">
                    Who is a good candidate for IV therapy at home?
                  </p>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mt-2 text-xs text-slate-300">
                  IV therapy may be appropriate for generally healthy adults seeking support with hydration, recovery, or wellness. Our screening process helps identify if treatment is appropriate or if we recommend urgent or emergency care instead.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="flex items-center justify-between gap-4">
<p className="text-sm font-medium text-slate-100">
                    Is mobile IV therapy covered by insurance?
                  </p>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mt-2 text-xs text-slate-300">
                  We are not currently in-network with insurance. However, we can provide a superbill that you may submit for potential reimbursement or apply toward FSA/HSA accounts, depending on your plan.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="flex items-center justify-between gap-4">
<p className="text-sm font-medium text-slate-100">
                    What if I start feeling unwell during the treatment?
                  </p>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mt-2 text-xs text-slate-300">
                  Your nurse is trained to monitor for and respond to side effects. If at any point your nurse or our medical team has safety concerns, the infusion will be paused or stopped, and we may recommend further evaluation in an urgent or emergency setting.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="flex items-center justify-between gap-4">
<p className="text-sm font-medium text-slate-100">
                    How far in advance should I book my appointment?
                  </p>
<span className="iconify text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mt-2 text-xs text-slate-300">
                  Many clients book same-day appointments, and we typically can accommodate within a few hours in covered areas. For groups, events, or peak times (weekends and holidays), we recommend booking at least 24–48 hours in advance.
                </p>
</div>
</div>
<div className="mt-6 flex flex-col items-center gap-3 text-center">
<p className="text-xs text-slate-300">
                Still have questions? Our care team is here to help.
              </p>
<div className="flex flex-wrap items-center justify-center gap-3">
<button className="inline-flex items-center justify-center gap-1.5 rounded-full bg-emerald-400 px-4 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-md shadow-emerald-500/40 hover:bg-emerald-300">
<span className="iconify" data-height="14" data-icon="lucide:message-circle" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Text with a nurse
                </button>
<button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-100 hover:border-emerald-400/80 hover:text-emerald-200">
<span className="iconify" data-height="14" data-icon="lucide:phone" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Schedule a call
                </button>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-emerald-500/15 via-slate-950 to-cyan-400/10">
<div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
<div className="flex flex-col gap-6 rounded-3xl border border-emerald-500/40 bg-slate-950/80 p-5 sm:p-7 md:flex-row md:items-center md:justify-between">
<div className="max-w-md">
<p className="text-xs font-medium uppercase tracking-wide text-emerald-300">
                  Ready to book?
                </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Rehydrate, recover, and feel better—without the waiting room.
                </h2>
<p className="mt-2 text-base text-slate-200">
                  Answer a few questions to see which IV therapy is right for you and get real-time pricing in your area.
                </p>
</div>
<div className="flex flex-col gap-3 md:w-72">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 shadow-lg shadow-emerald-500/50 hover:bg-emerald-300">
<span className="iconify" data-height="18" data-icon="lucide:droplets" data-width="18" style={{strokeWidth: '1.5'}}></span>
                  Start your IV booking
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 hover:border-emerald-400/80 hover:text-emerald-200">
<span className="iconify" data-height="16" data-icon="lucide:users" data-width="16" style={{strokeWidth: '1.5'}}></span>
                  Plan IV therapy for a group or event
                </button>
<p className="text-[0.7rem] text-slate-400">
                  For medical emergencies such as chest pain, difficulty breathing, or severe symptoms, call 911 or go to the nearest emergency room.
                </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 py-8">
<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
<div className="max-w-sm space-y-3">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/40">
<span className="text-sm font-semibold tracking-tight text-emerald-300">
                    HD
                  </span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight text-slate-100">
                    HydraDrip
                  </span>
<span className="text-xs font-medium text-slate-400">
                    Mobile IV Therapy
                  </span>
</div>
</div>
<p className="text-xs text-slate-400">
                HydraDrip is a mobile IV therapy service. We do not replace your primary care provider or emergency medical services. If you are experiencing a medical emergency, call 911 immediately.
              </p>
<div className="flex items-center gap-3 text-[0.7rem] text-slate-400">
<span className="iconify text-emerald-300" data-height="13" data-icon="lucide:shield-check" data-width="13" style={{strokeWidth: '1.5'}}></span>
<span>HIPAA-compliant · All clinicians fully licensed and insured</span>
</div>
</div>
<div className="grid gap-6 text-xs text-slate-300 sm:grid-cols-3">
<div>
<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Company
                </p>
<ul className="space-y-1.5">
<li><a className="hover:text-emerald-300" href="#">About</a></li>
<li><a className="hover:text-emerald-300" href="#">Medical team</a></li>
<li><a className="hover:text-emerald-300" href="#">Careers</a></li>
<li><a className="hover:text-emerald-300" href="#">Press</a></li>
</ul>
</div>
<div>
<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Support
                </p>
<ul className="space-y-1.5">
<li><a className="hover:text-emerald-300" href="#faq">FAQ</a></li>
<li><a className="hover:text-emerald-300" href="#">Contact</a></li>
<li><a className="hover:text-emerald-300" href="#">Safety &amp; eligibility</a></li>
<li><a className="hover:text-emerald-300" href="#">Group bookings</a></li>
</ul>
</div>
<div>
<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Legal
                </p>
<ul className="space-y-1.5">
<li><a className="hover:text-emerald-300" href="#">Terms of service</a></li>
<li><a className="hover:text-emerald-300" href="#">Privacy policy</a></li>
<li><a className="hover:text-emerald-300" href="#">Consent forms</a></li>
<li><a className="hover:text-emerald-300" href="#">Telehealth</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 border-t border-slate-900 pt-4 text-[0.7rem] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
<p>© <span id="year">2024</span> HydraDrip Health, Inc. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-300 hover:border-emerald-400/80 hover:text-emerald-200" href="#">
<span className="iconify" data-height="14" data-icon="lucide:instagram" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-300 hover:border-emerald-400/80 hover:text-emerald-200" href="#">
<span className="iconify" data-height="14" data-icon="lucide:twitter" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-300 hover:border-emerald-400/80 hover:text-emerald-200" href="#">
<span className="iconify" data-height="14" data-icon="lucide:linkedin" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
