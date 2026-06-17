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



    const yearSpan = document.getElementById('year-span');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
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
      
<div className="min-h-screen flex flex-col bg-slate-950/5">

<div className="flex-1 flex flex-col">

<header className="border-b border-slate-200/70 bg-white/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-red-700 flex items-center justify-center">
<span className="text-white font-semibold tracking-tight text-sm">RR</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-900">Redline Restoration</span>
<span className="text-xs text-slate-500">Fire • Water • Mold</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end">
<span className="text-[0.7rem] uppercase tracking-wide text-slate-500">Emergency Hotline</span>
<a className="text-sm font-semibold tracking-tight text-slate-900" href="tel:18005551234">1 (800) 555‑1234</a>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/80 px-3 py-1">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-600"></span>
<span className="text-xs font-medium tracking-tight text-red-800">24/7 Emergency Response</span>
</div>
</div>
</div>
</header>

<section className="relative border-b border-slate-200/70 bg-slate-950">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">

<div className="flex flex-col justify-center gap-6">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1 w-fit">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
<span className="text-xs font-medium tracking-tight text-slate-100">Fire, Water &amp; Mold Damage Restoration</span>
</div>
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Full-Service Restoration,<br className="hidden sm:block"/> From Disaster To Move‑In Ready.
              </h1>
<p className="text-base sm:text-lg text-slate-200">
                24/7 emergency response for fire, water, and mold damage. Our certified crews restore your home or business quickly, safely, and with minimal disruption.
              </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 transition-colors px-5 py-2.5 text-sm sm:text-base font-semibold tracking-tight text-white shadow-sm shadow-red-900/40" href="#quote">
                Get a Free Quote
                <span className="iconify ml-2 text-sm" data-height="18" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-slate-500/60 bg-transparent hover:bg-slate-900/70 transition-colors px-4 py-2.5 text-sm sm:text-base font-medium tracking-tight text-slate-100" href="tel:18005551234">
<span className="iconify mr-2 text-sm" data-height="18" data-icon="lucide:phone" data-width="18"></span>
                Call Now: 1 (800) 555‑1234
              </a>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
<div className="inline-flex items-center gap-1.5">
<span className="iconify text-slate-300" data-height="16" data-icon="lucide:badge-check" data-width="16"></span>
<span>Certified, Licensed &amp; Insured</span>
</div>
<div className="inline-flex items-center gap-1.5">
<span className="iconify text-slate-300" data-height="16" data-icon="lucide:clock" data-width="16"></span>
<span>Average on-site response under 60 minutes</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative h-full min-h-[16rem] sm:min-h-[18rem] lg:min-h-[22rem] rounded-xl overflow-hidden border border-slate-800/80 bg-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">

<div className="absolute inset-y-0 left-0 w-1/2">
<div className="w-full h-full bg-[url('https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg')] bg-cover bg-center grayscale-[0.4] contrast-125 brightness-[0.65]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
</div>

<div className="absolute inset-y-0 right-0 w-1/2">
<div className="w-full h-full bg-[url('https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg')] bg-cover bg-center contrast-110 brightness-105"></div>
<div className="absolute inset-0 bg-gradient-to-l from-slate-900/50 via-slate-900/10 to-transparent"></div>
</div>

<div className="absolute inset-y-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="h-full w-[1px] bg-slate-100/40"></div>
<div className="absolute -top-3 flex items-center justify-center rounded-full bg-slate-900 border border-slate-500 w-7 h-7 shadow-lg">
<span className="iconify text-slate-100" data-height="18" data-icon="lucide:chevrons-left-right" data-width="18"></span>
</div>
</div>

<div className="absolute top-4 left-4">
<span className="inline-flex items-center rounded-full bg-black/70 px-2.5 py-1 text-[0.65rem] font-medium tracking-tight text-slate-100">
<span className="iconify mr-1 text-slate-200" data-height="14" data-icon="lucide:alert-triangle" data-width="14"></span>
                  Before Damage
                </span>
</div>
<div className="absolute top-4 right-4">
<span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur px-2.5 py-1 text-[0.65rem] font-medium tracking-tight text-slate-900">
<span className="iconify mr-1 text-emerald-600" data-height="14" data-icon="lucide:sparkles" data-width="14"></span>
                  After Restoration
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200/70 bg-white">
<div className="max-w-6xl mx-auto py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
<div className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="18" data-icon="lucide:clock-4" data-width="18"></span>
<span className="font-medium tracking-tight text-slate-800">24/7 Emergency Service</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="18" data-icon="lucide:shield-check" data-width="18"></span>
<span className="font-medium tracking-tight text-slate-800">Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="18" data-icon="lucide:files" data-width="18"></span>
<span className="font-medium tracking-tight text-slate-800">Insurance Claim Experts</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="18" data-icon="lucide:map-pin" data-width="18"></span>
<span className="font-medium tracking-tight text-slate-800">Local Trusted Professionals</span>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200/70 bg-slate-50" id="services">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 sm:mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Comprehensive Restoration Services</h2>
<p className="mt-3 text-base text-slate-600">
                From the first call to final walkthrough, we manage every phase of fire, water, and mold restoration with precision and care.
              </p>
</div>
<div className="flex flex-wrap gap-2 text-xs text-slate-500">
<span className="inline-flex rounded-full bg-white border border-slate-200 px-2.5 py-1">Residential</span>
<span className="inline-flex rounded-full bg-white border border-slate-200 px-2.5 py-1">Commercial</span>
<span className="inline-flex rounded-full bg-white border border-slate-200 px-2.5 py-1">Insurance Preferred</span>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-32 sm:h-36 bg-[url('https://images.pexels.com/photos/949592/pexels-photo949592.jpeg')] bg-cover bg-center grayscale-[0.3] brightness-[0.8]"></div>
<div className="p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center rounded-md bg-red-50 text-red-700 h-8 w-8">
<span className="iconify" data-height="18" data-icon="lucide:flame" data-width="18"></span>
</div>
<span className="text-[0.65rem] uppercase tracking-wide text-slate-400">Fire</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Fire Damage Restoration</h3>
<p className="text-sm text-slate-600">
                  Remove soot, debris, and structural damage while restoring your property safely and efficiently.
                </p>
</div>
</article>

<article className="group rounded-xl border border-s-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-32 sm:h- bg-[url('https://images.pexels.com/photos/9897382/pexels-photo-9897382.jpeg')] bg bg-center grayscale-[0.2] brightness-[0.9]"></div>
<div className="p-4 sm-5 space-y-3">
<div className="flex items-center justify-between">
<div className="inline-flex items-center-center rounded-md bg-red-50 text-red-700 h-8 w-8">
<span className="iconify" data-height="18" data-icon="lucide:droplets" data-width="18"></span>
</div>
<span className="text-[0.65rem] uppercase tracking-wide text-slate-400">Water</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Water Damage Restoration</h3>
<p className="text-sm text-slate-600">
                  Rapid extraction, drying, and dehumidification to prevent further damage and mold growth.
                </p>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-32 sm:h-36 bg-[url('https://images.pexels.com/photos/4107293/pexels-photo-4107293.jpeg')] bg-cover bg-center grayscale-[0.3] brightness-[0.9]"></div>
<div className="p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center rounded-md bg-red-50 text-red-700 h-8 w-8">
<span className="iconify" data-height="18" data-icon="lucide:sprout" data-width="18"></span>
</div>
<span className="text-[0.65rem] uppercase tracking-wide text-slate-400">Mold</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Mold Remediation</h3>
<p className="text-sm text-slate-600">
                  Containment, removal, and prevention to ensure a healthy, mold-free environment.
                </p>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-32 sm:h-36 bg-[url('https://images.pexels.com/photos/2716390/pexels-photo-2716390.jpeg')] bg-cover bg-center grayscale-[0.3] brightness-[0.9]"></div>
<div className="p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center rounded-md bg-red-50 text-red-700 h-8 w-8">
<span className="iconify" data-height="18" data-icon="lucide:wind" data-width="18"></span>
</div>
<span className="text-[0.65rem] uppercase tracking-wide text-slate-400">Smoke</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Smoke &amp; Odor Removal</h3>
<p className="text-sm text-slate-600">
                  Advanced filtration and deodorization to eliminate lingering smoke and odor from every surface.
                </p>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="h-32 sm:h-36 bg-[url('https://images.pexels.com/photos/3935331/pexels-photo-3935331.jpeg')] bg-cover bg-center grayscale-[0.2] brightness-[0.95]"></div>
<div className="p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center rounded-md bg-red-50 text-red-700 h-8 w-8">
<span className="iconify" data-height="18" data-icon="lucide:warehouse" data-width="18"></span>
</div>
<span className="text-[0.65rem] uppercase tracking-wide text-slate-400">Drying</span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Structural Drying</h3>
<p className="text-sm text-slate-600">
                  Industrial-grade drying equipment to protect framing, subfloors, and foundations.
                </p>
</div>
</article>

<article className="group rounded-xl border border-dashed border-slate-300 bg-slate-50/80 overflow-hidden flex flex-col justify-center">
<div className="p-4 sm:p-5 space-y-3">
<div className="inline-flex items-center justify-center rounded-md bg-slate-900 text-slate-100 h-8 w-8">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18"></span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">Additional Restoration Services</h3>
<p className="text-sm text-slate-600">
                  Board‑up, contents cleaning, reconstruction, and more. We tailor every project to your property.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-200/70 bg-white">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Our Simple Restoration Process</h2>
<p className="mt-3 text-base text-slate-600">
              A clear, proven workflow to guide you from the moment of loss to complete restoration—with support at every step.
            </p>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-5">

<div className="relative flex flex-col gap-3">
<div className="inline-flex items-center justify-center rounded-full bg-red-600 text-white w-9 h-9 shadow-sm shadow-red-900/40">
<span className="text-xs font-semibold tracking-tight">1</span>
</div>
<div className="inline-flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 w-9 h-9">
<span className="iconify text-slate-800" data-height="18" data-icon="lucide:phone-call" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Call Us 24/7</h3>
<p className="text-sm text-slate-600">
                Reach our live team any time of day or night. We dispatch crews immediately.
              </p>
</div>

<div className="relative flex flex-col gap-3">
<div className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white w-9 h-9">
<span className="text-xs font-semibold tracking-tight">2</span>
</div>
<div className="inline-flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 w-9 h-9">
<span className="iconify text-slate-800" data-height="18" data-icon="lucide:search-check" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Inspection &amp; Assessment</h3>
<p className="text-sm text-slate-600">
                We assess damage, document conditions, and create a clear restoration plan.
              </p>
</div>

<div className="relative flex flex-col gap-3">
<div className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white w-9 h-9">
<span className="text-xs font-semibold tracking-tight">3</span>
</div>
<div className="inline-flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 w-9 h-9">
<span className="iconify text-slate-800" data-height="18" data-icon="lucide:sparkles" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Cleanup &amp; Mitigation</h3>
<p className="text-sm text-slate-600">
                We extract water, remove debris, and stabilize the property to prevent further loss.
              </p>
</div>

<div className="relative flex flex-col gap-3">
<div className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white w-9 h-9">
<span className="text-xs font-semibold tracking-tight">4</span>
</div>
<div className="inline-flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 w-9 h-9">
<span className="iconify text-slate-800" data-height="18" data-icon="lucide:home" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Full Restoration</h3>
<p className="text-sm text-slate-600">
                Repairs, reconstruction, and finishing work to return your space to pre-loss condition.
              </p>
</div>

<div className="relative flex flex-col gap-3">
<div className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white w-9 h-9">
<span className="text-xs font-semibold tracking-tight">5</span>
</div>
<div className="inline-flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 w-9 h-9">
<span className="iconify text-slate-800" data-height="18" data-icon="lucide:file-check-2" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Insurance Assistance</h3>
<p className="text-sm text-slate-600">
                We coordinate directly with your insurer to streamline approvals and payments.
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200/70 bg-slate-950">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Before &amp; After: Real Restoration Results</h2>
<p className="mt-3 text-base text-slate-300">
                See how we transform heavily damaged interiors into safe, clean, and fully restored spaces.
              </p>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-2">

<div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black min-h-[13rem] sm:min-h-[15rem] lg:min-h-[16rem]">
<div className="h-full w-full bg-[url('https://images.pexels.com/photos/2119717/pexels-photo-2119717.jpeg')] bg-cover bg-center grayscale contrast-125 brightness-[0.55]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-2">
<span className="inline-flex rounded-full bg-red-600/90 px-2.5 py-1 text-[0.65rem] font-medium tracking-tight text-white">
                  Before Restoration
                </span>
</div>
<div className="absolute bottom-4 left-4 right-4">
<p className="text-xs sm:text-sm text-slate-200 max-w-sm">
                  Extensive fire and smoke damage affecting structural elements, finishes, and indoor air quality.
                </p>
</div>
</div>

<div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black min-h-[13rem] sm:min-h-[15rem] lg:min-h-[16rem]">
<div className="h-full w-full bg-[url('https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg')] bg-cover bg-center contrast-110 brightness-[1.1]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-2">
<span className="inline-flex rounded-full bg-emerald-500/95 px-2.5 py-1 text-[0.65rem] font-medium tracking-tight text-white">
                  After Restoration
                </span>
</div>
<div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
<p className="text-xs sm:text-sm text-slate-50 max-w-sm">
                  Fully restored interior with new finishes, improved ventilation, and complete odor removal.
                </p>
<div className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1">
<span className="iconify text-amber-500" data-height="16" data-icon="lucide:star" data-width="16"></span>
<span className="text-[0.7rem] font-medium tracking-tight text-slate-900">Insurance Approved Project</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200/70 bg-white">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Why Homeowners Trust Redline Restoration</h2>
<p className="mt-3 text-base text-slate-600">
              We combine industry certifications, advanced equipment, and local expertise to deliver reliable results every time.
            </p>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

<div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 flex flex-col gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-700">
<span className="iconify" data-height="18" data-icon="lucide:award" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Certified Experts</h3>
<p className="text-sm text-slate-600">
                IICRC‑trained technicians following the latest fire, water, and mold remediation standards.
              </p>
</div>

<div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 flex flex-col gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-700">
<span className="iconify" data-height="18" data-icon="lucide:timer" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Fast Response</h3>
<p className="text-sm text-slate-600">
                On‑call crews ready to respond within hours to minimize damage and downtime.
              </p>
</div>

<div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 flex flex-col gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-700">
<span className="iconify" data-height="18" data-icon="lucide:hand-coins" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Hassle‑Free Insurance</h3>
<p className="text-sm text-slate-600">
                We document damage, submit estimates, and communicate directly with your adjuster.
              </p>
</div>

<div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 flex flex-col gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-700">
<span className="iconify" data-height="18" data-icon="lucide:building-2" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Local &amp; Experienced</h3>
<p className="text-sm text-slate-600">
                Years of experience with Arizona homes, materials, and climate‑specific challenges.
              </p>
</div>

<div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 flex flex-col gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-50 text-red-700">
<span className="iconify" data-height="18" data-icon="lucide:smile-plus" data-width="18"></span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Customer Satisfaction</h3>
<p className="text-sm text-slate-600">
                Transparent updates, detailed walkthroughs, and a clean jobsite at project completion.
              </p>
</div>
</div>
</div>
</section>

<section className="relative border-b border-slate-200/70 bg-slate-900">
<div className="absolute inset-0 opacity-30">
<div className="h-full w-full bg-[url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/90 to-slate-900/95"></div>
</div>
<div className="relative max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">What Our Clients Are Saying</h2>
<p className="mt-3 text-base text-slate-200">
                Homeowners and property managers across the Valley trust us to restore their most important spaces.
              </p>
</div>
<div className="flex flex-col items-start md:items-end gap-1">
<div className="flex items-center gap-1.5">
<span className="iconify text-amber-400" data-height="18" data-icon="lucide:star" data-width="18"></span>
<span className="iconify text-amber-400" data-height="18" data-icon="lucide:star" data-width="18"></span>
<span className="iconify text-amber-400" data-height="18" data-icon="lucide:star" data-width="18"></span>
<span className="iconify text-amber-400" data-height="18" data-icon="lucide:star" data-width="18"></span>
<span className="iconify text-amber-400" data-height="18" data-icon="lucide:star" data-width="18"></span>
</div>
<span className="text-xs text-slate-200">Average 5.0 rating from local customers</span>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<article className="rounded-xl border border-slate-700 bg-slate-900/80 backdrop-blur p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-slate-700 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-white">JM</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">J. Martinez</span>
<span className="text-xs text-slate-400">Phoenix, AZ • Fire Damage</span>
</div>
</div>
<div className="flex items-center gap-0.5">
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
</div>
</div>
<p className="text-sm text-slate-200">
                “They were on site within an hour of our call. From cleanup to working with our insurance, everything was handled professionally and with care.”
              </p>
</article>

<article className="rounded-xl border border-slate-700 bg-slate-900/80 backdrop-blur p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-slate-700 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-white">LK</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">L. Kim</span>
<span className="text-xs text-slate-400">Scottsdale, AZ • Water Damage</span>
</div>
</div>
<div className="flex items-center gap-0.5">
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
</div>
</div>
<p className="text-sm text-slate-200">
                “They coordinated directly with our insurance, explained every step, and left our home spotless. Highly recommended.”
              </p>
</article>

<article className="rounded-xl border border-slate-700 bg-slate-900/80 backdrop-blur p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-red-500 to-slate-700 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-white">RS</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">R. Singh</span>
<span className="text-xs text-slate-400">Mesa, AZ • Mold</span>
</div>
</div>
<div className="flex items-center gap-0.5">
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
<span className="iconify text-amber-400" data-height="14" data-icon="lucide:star" data-width="14"></span>
</div>
</div>
<p className="text-sm text-slate-200">
                “Mold remediation was thorough and well documented. We felt informed and confident throughout the process.”
              </p>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-200/70 bg-white">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">We Work With All Major Insurance Companies</h2>
<p className="mt-3 text-base text-slate-600">
                Our team speaks the language of insurance. We provide detailed estimates, photos, and documentation to help your claim move quickly.
              </p>
<ul className="mt-5 space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="iconify mt-0.5 text-emerald-500" data-height="16" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Direct communication with adjusters and carriers.</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="iconify mt-0.5 text-emerald-500" data-height="16" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Transparent, line‑item estimates using industry‑standard pricing.</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<span className="iconify mt-0.5 text-emerald-500" data-height="16" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Assistance with documentation and required approvals.</span>
</li>
</ul>
</div>
<div className="relative">
<div className="relative rounded-xl border border-slate-200 bg-slate-50 overflow-hidden min-h-[14rem]">
<div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200"></div>

<div className="relative h-full w-full p-5 flex flex-col gap-4">
<div className="flex gap-4">
<div className="flex-1 rounded-lg bg-white border border-slate-200 shadow-sm p-3 flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5">
<span className="iconify text-red-600" data-height="16" data-icon="lucide:file-text" data-width="16"></span>
<span className="text-xs font-medium tracking-tight text-slate-800">Claim File</span>
</div>
<span className="inline-flex rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[0.65rem] font-medium tracking-tight">In Review</span>
</div>
<div className="h-16 rounded-md bg-slate-100/80"></div>
</div>
<div className="w-24 rounded-lg bg-white border border-slate-200 shadow-sm p-3 flex flex-col gap-2">
<span className="iconify text-slate-700" data-height="18" data-icon="lucide:clipboard-list" data-width="18"></span>
<div className="flex-1 rounded-md bg-slate-100/90"></div>
</div>
</div>
<div className="flex gap-4 items-end">
<div className="flex-1 rounded-lg bg-white border border-slate-200 shadow-sm p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-slate-700" data-height="18" data-icon="lucide:building" data-width="18"></span>
<span className="text-xs font-medium tracking-tight text-slate-800">Insurance Partner Portal</span>
</div>
<div className="flex -space-x-1">
<span className="h-5 w-5 rounded-full bg-slate-200 border border-white"></span>
<span className="h-5 w-5 rounded-full bg-slate-300 border border-white"></span>
<span className="h-5 w-5 rounded-full bg-slate-400 border border-white"></span>
</div>
</div>
<div className="w-20 rounded-full bg-slate-900 text-slate-50 flex items-center justify-center">
<span className="iconify" data-height="18" data-icon="lucide:handshake" data-width="18"></span>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-4 -right-2 hidden sm:block">
<div className="rounded-lg bg-white shadow-lg border border-slate-200 px-3 py-2 flex items-center gap-2">
<span className="iconify text-emerald-500" data-height="16" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-[0.7rem] font-medium tracking-tight text-slate-800">Claim support from day one</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200/70 bg-slate-50">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
<div className="relative rounded-xl overflow-hidden border border-slate-200 bg-black min-h-[14rem]">
<div className="h-full w-full bg-[url('https://images.pexels.com/photos/1962116/pexels-photo-1962116.jpeg')] bg-cover bg-center contrast-105 brightness-[1.02]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>

<div className="absolute left-6 bottom-6 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 shadow-md">
<span className="iconify text-red-600" data-height="18" data-icon="lucide:map-pin" data-width="18"></span>
<span className="text-xs font-medium tracking-tight text-slate-900">Greater Phoenix &amp; Surrounding Areas</span>
</div>
</div>
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Local Restoration, Arizona‑Focused</h2>
<p className="mt-3 text-base text-slate-600">
                We understand the unique challenges of Arizona properties—from monsoon storms and plumbing leaks to heat‑driven wear and tear.
              </p>
<div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
<ul className="space-y-2">
<li className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="16" data-icon="lucide:dot" data-width="16"></span>
<span>Phoenix</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="16" data-icon="lucide:dot" data-width="16"></span>
<span>Scottsdale</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="16" data-icon="lucide:dot" data-width="16"></span>
<span>Mesa</span>
</li>
</ul>
<ul className="space-y-2">
<li className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="16" data-icon="lucide:dot" data-width="16"></span>
<span>Chandler</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="16" data-icon="lucide:dot" data-width="16"></span>
<span>Gilbert</span>
</li>
<li className="flex items-center gap-2">
<span className="iconify text-red-600" data-height="16" data-icon="lucide:dot" data-width="16"></span>
<span>Surrounding Communities</span>
</li>
</ul>
</div>
<p className="mt-4 text-sm text-slate-600">
                Not sure if we cover your neighborhood? Call us and we’ll confirm availability within minutes.
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200/70 bg-gradient-to-br from-red-800 via-red-700 to-slate-900" id="quote">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:items-center">

<div className="text-white">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-red-200/40 px-3 py-1 mb-4">
<span className="iconify text-red-100" data-height="16" data-icon="lucide:alert-triangle" data-width="16"></span>
<span className="text-xs font-medium tracking-tight text-red-50">Immediate Help Available</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Fire or Water Damage? Act Fast.</h2>
<p className="mt-3 text-base text-red-50/95">
                Every minute counts. Our emergency response team is ready to secure your property, prevent further damage, and begin the restoration process.
              </p>
<div className="mt-6 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center rounded-md bg-white text-red-700 hover:bg-red-50 transition-colors px-5 py-2.5 text-sm sm:text-base font-semibold tracking-tight shadow-sm shadow-slate-950/30" href="tel:18005551234">
<span className="iconify mr-2 text-red-700" data-height="18" data-icon="lucide:phone-call" data-width="18"></span>
                  Call Now: 1 (800) 555‑1234
                </a>
<div className="flex flex-col text-xs text-red-100/90">
<span>Average response time under 60 minutes within our service area.</span>
<span>No‑obligation on‑site assessment.</span>
</div>
</div>
</div>

<div className="rounded-xl bg-white shadow-xl border border-red-100/80 p-5 sm:p-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Request Your Free Damage Assessment</h3>
<p className="text-sm text-slate-600 mb-4">
                Share a few details and our team will contact you within minutes to schedule an on‑site visit.
              </p>
<form className="space-y-4">
<div className="grid gap-3 sm:grid-cols-2">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium tracking-tight text-slate-700">Full Name</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500/70" placeholder="Jane Doe" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium tracking-tight text-slate-700">Phone Number</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500/70" placeholder="(555) 123‑4567" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium tracking-tight text-slate-700">Service Address</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500/70" placeholder="Street, City, ZIP" type="text"/>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium tracking-tight text-slate-700">Type of Damage</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500/70">
<option>Fire Damage</option>
<option>Water Damage</option>
<option>Mold</option>
<option>Smoke &amp; Odor</option>
<option>Multiple / Unsure</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium tracking-tight text-slate-700">Damage Timeline</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500/70">
<option>Within the last 24 hours</option>
<option>1‑3 days ago</option>
<option>Over 3 days ago</option>
<option>Ongoing issue</option>
</select>
<span className="iconify absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" data-height="16" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium tracking-tight text-slate-700">Brief Description</label>
<textarea className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/70 focus:border-red-500/70" placeholder="Share what happened and any urgent concerns." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 transition-colors px-4 py-2.5 text-sm font-semibold tracking-tight text-white shadow-sm shadow-red-900/40" type="submit">
                  Get My Free Assessment
                  <span className="iconify ml-2 text-sm" data-height="18" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<p className="text-[0.7rem] text-slate-500 text-center">
                  By submitting, you agree to be contacted by phone, text, or email. No spam—just restoration support.
                </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-300">
<div className="max-w-6xl mx-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-red-700 flex items-center justify-center">
<span className="text-white font-semibold tracking-tight text-sm">RR</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-white">Redline Restoration</span>
<span className="text-xs text-slate-400">Fire • Water • Mold Damage Specialists</span>
</div>
</div>
<div className="flex flex-wrap gap-6 text-xs">
<div className="flex flex-col gap-1">
<span className="font-medium tracking-tight text-slate-100">Contact</span>
<a className="text-slate-300 hover:text-white transition-colors" href="tel:18005551234">1 (800) 555‑1234</a>
<a className="text-slate-300 hover:text-white transition-colors" href="mailto:help@redlinerestore.com">help@redlinerestore.com</a>
</div>
<div className="flex flex-col gap-1">
<span className="font-medium tracking-tight text-slate-100">Certifications</span>
<div className="flex items-center gap-2 mt-1">
<div className="h-6 w-6 rounded-full border border-slate-500 flex items-center justify-center">
<span className="iconify text-slate-200" data-height="16" data-icon="lucide:shield-check" data-width="16"></span>
</div>
<div className="h-6 w-6 rounded-full border border-slate-500 flex items-center justify-center">
<span className="iconify text-slate-200" data-height="16" data-icon="lucide:award" data-width="16"></span>
</div>
<div className="h-6 w-6 rounded-full border border-slate-500 flex items-center justify-center">
<span className="iconify text-slate-200" data-height="16" data-icon="lucide:check-circle-2" data-width="16"></span>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-medium tracking-tight text-slate-100">Service Hours</span>
<span>Emergency: 24/7</span>
<span>Office: Mon‑Fri, 8am‑5pm</span>
</div>
</div>
</div>
<div className="mt-6 border-t border-slate-800 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<span className="text-[0.7rem] text-slate-500">
              © <span id="year-span">2026</span> Redline Restoration. All rights reserved.
            </span>
<div className="flex gap-4 text-[0.7rem] text-slate-500">
<a className="hover:text-slate-200 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-200 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-200 transition-colors" href="#services">Services</a>
</div>
</div>
</div>
</footer>
</div>
</div>


    </>
  );
}
