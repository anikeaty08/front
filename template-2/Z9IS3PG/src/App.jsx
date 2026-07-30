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
      
      // Initialize lucide icons
      lucide.createIcons();
    
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
      

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -top-24 -left-24 h-80 w-80 bg-gradient-to-br from-sky-300/30 via-cyan-300/25 to-teal-300/25 blur-3xl rounded-full"></div>
<div className="absolute top-1/3 -right-20 h-72 w-72 bg-gradient-to-tr from-teal-300/25 via-cyan-300/25 to-sky-300/25 blur-3xl rounded-full"></div>
<div className="absolute bottom-10 left-1/4 h-64 w-64 bg-gradient-to-br from-teal-300/20 via-sky-300/20 to-cyan-300/20 blur-3xl rounded-full"></div>
</div>
<main className="relative z-10 flex items-center justify-center p-6 sm:p-10">

<section className="w-full max-w-sm">
<div className="mx-auto rounded-[32px] bg-gradient-to-br from-white/80 to-white/60 shadow-xl shadow-sky-100/50 ring-1 ring-slate-200/60 backdrop-blur">
<div className="rounded-[30px] overflow-hidden">

<div className="relative px-5 pt-4 pb-1">
<div className="flex items-center justify-between text-slate-700">
<span className="text-[13px] font-medium tracking-tight">9:41</span>
<div className="flex items-center gap-2">
<i className="h-4 w-4 opacity-80 stroke-[1.5]" data-lucide="wifi"></i>
<i className="h-4 w-4 opacity-80 stroke-[1.5]" data-lucide="signal"></i>
<i className="h-4 w-4 opacity-80 stroke-[1.5]" data-lucide="battery"></i>
</div>
</div>
</div>

<div className="relative mx-4 mb-4 rounded-3xl bg-white/95 ring-1 ring-slate-200/70 overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-20 -left-16 h-60 w-60 rounded-full blur-3xl" style={{background: `radial-gradient(120px 120px at 40% 40%, rgba(56,189,248,0.35), transparent 70%), radial-gradient(140px 140px at 90% 20%, rgba(45,212,191,0.35), transparent 70%)`}}></div>
<div className="absolute -bottom-16 -right-12 h-72 w-72 rounded-full blur-3xl" style={{background: `radial-gradient(160px 160px at 30% 60%, rgba(14,165,233,0.25), transparent 70%), radial-gradient(120px 120px at 70% 40%, rgba(34,197,94,0.15), transparent 75%)`}}></div>
<div className="absolute inset-0 opacity-[0.35]" style={{background: `linear-gradient(180deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.75) 32%, rgba(255,255,255,0.65) 65%, rgba(255,255,255,0.55) 100%)`}}></div>
</div>

<div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-slate-200/70 backdrop-blur shadow-sm">
<div className="h-6 w-6 rounded-lg bg-sky-600 text-white text-[12px] font-medium leading-none tracking-tight flex items-center justify-center">EX</div>
<span className="text-[12px] font-medium text-slate-700">Place your logo</span>
</div>

<div className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-slate-900/5 px-2.5 py-1 ring-1 ring-slate-200/70 backdrop-blur text-[11px] text-slate-700 shadow-sm">
<i className="h-3.5 w-3.5 text-emerald-600 stroke-[1.5]" data-lucide="shield-check"></i>
                HIPAA-ready
              </div>

<div className="relative px-6 pt-10 pb-24">
<div className="mx-auto h-56 w-56 rounded-full bg-gradient-to-b from-sky-100/70 to-teal-100/50 ring-1 ring-white shadow-inner shadow-black/5"></div>

<div className="pointer-events-none absolute inset-x-0 -bottom-2 flex justify-center">
<div className="h-[360px] w-[270px] rounded-[28px] bg-white/60 backdrop-blur-sm ring-1 ring-slate-200/70 overflow-hidden shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)]">
<img alt="Happy professional doctor portrait, background removed" className="h-full w-full object-contain object-center" src="https://pngimg.com/uploads/doctor/doctor_PNG16038.png" />
</div>
</div>

<div className="absolute inset-0">
<div className="absolute left-6 top-12">
<div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-white to-slate-100 ring-1 ring-slate-200 shadow-[6px_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] flex items-center justify-center">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-50 to-slate-50 ring-1 ring-white flex items-center justify-center">
<i className="h-5 w-5 text-sky-600 stroke-[1.5]" data-lucide="stethoscope"></i>
</div>
</div>
</div>
<div className="absolute right-7 top-20">
<div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-white to-slate-100 ring-1 ring-slate-200 shadow-[6px_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] flex items-center justify-center">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-50 to-slate-50 ring-1 ring-white flex items-center justify-center">
<i className="h-5 w-5 text-emerald-600 stroke-[1.5]" data-lucide="pill"></i>
</div>
</div>
</div>
<div className="absolute left-10 bottom-28">
<div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-white to-slate-100 ring-1 ring-slate-200 shadow-[6px_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] flex items-center justify-center">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-rose-50 to-slate-50 ring-1 ring-white flex items-center justify-center">
<i className="h-5 w-5 text-rose-600 stroke-[1.5]" data-lucide="heart-pulse"></i>
</div>
</div>
</div>
<div className="absolute right-10 bottom-24">
<div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-white to-slate-100 ring-1 ring-slate-200 shadow-[6px_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] flex items-center justify-center">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-50 to-slate-50 ring-1 ring-white flex items-center justify-center">
<i className="h-5 w-5 text-violet-600 stroke-[1.5]" data-lucide="syringe"></i>
</div>
</div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-7">
<div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-white to-slate-100 ring-1 ring-slate-200 shadow-[6px_8px_24px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] flex items-center justify-center">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-50 to-slate-50 ring-1 ring-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-cyan-600 stroke-[1.5]" data-lucide="shield-plus"></i>
</div>
</div>
</div>
</div>
</div>

<div className="relative px-6 pb-6">
<div className="rounded-2xl bg-white/95 backdrop-blur p-5 shadow-lg ring-1 ring-slate-200/80">
<div className="mb-2 flex items-center justify-between">
<span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-100">
<i className="h-3.5 w-3.5 stroke-[1.5]" data-lucide="calendar-check"></i>
                      Instant Booking
                    </span>

<span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-1 text-[11px] text-slate-600 ring-1 ring-slate-200">
<i className="h-3.5 w-3.5 text-amber-500 stroke-[1.5]" data-lucide="sparkles"></i>
                      Your Logo Here
                    </span>
</div>
<h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-slate-900">
                    EclinicX
                  </h2>
<p className="mt-1 text-[13px] leading-5 text-slate-600">
                    Start your wellness journey with easy doctor consultations, instant bookings, and expert care.
                  </p>
<div className="mt-4 flex items-center gap-3">
<button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 px-4 py-3 text-sm font-medium text-white shadow-md shadow-sky-500/20 ring-1 ring-white/10 transition hover:brightness-105 active:scale-[0.99]">
                      Get Started
                      <i className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-3 flex items-center justify-center gap-2 text-[12px] text-slate-500">
<span>Already have an account?</span>
<a className="font-medium text-sky-600 hover:text-sky-700" href="#">Sign In</a>
</div>
</div>
</div>
</div>

<div className="h-4"></div>
</div>
</div>

<div className="mx-auto mt-6 h-3 w-56 rounded-full bg-slate-900/5 blur-[2px]"></div>
</section>
</main>


    </>
  );
}
