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
      
    (function () {
      // Set a target end time 5 days from now by default (can be replaced with a fixed date)
      const now = new Date();
      const target = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);

      const els = {
        days: document.getElementById('cd-days'),
        hours: document.getElementById('cd-hours'),
        mins: document.getElementById('cd-mins'),
        secs: document.getElementById('cd-secs'),
        inline: document.getElementById('cd-inline'),
        inline2: document.getElementById('cd-inline-2'),
        daysCTA: document.getElementById('cd-days-cta'),
        hoursCTA: document.getElementById('cd-hours-cta'),
        minsCTA: document.getElementById('cd-mins-cta'),
        secsCTA: document.getElementById('cd-secs-cta'),
      };

      function pad(n) { return String(n).padStart(2, '0'); }

      function render(diffMs) {
        let remaining = Math.max(0, diffMs);
        const d = Math.floor(remaining / (1000 * 60 * 60 * 24));
        remaining -= d * 24 * 60 * 60 * 1000;
        const h = Math.floor(remaining / (1000 * 60 * 60));
        remaining -= h * 60 * 60 * 1000;
        const m = Math.floor(remaining / (1000 * 60));
        remaining -= m * 60 * 1000;
        const s = Math.floor(remaining / 1000);

        // Top bar
        if (els.days) els.days.textContent = d;
        if (els.hours) els.hours.textContent = pad(h);
        if (els.mins) els.mins.textContent = pad(m);
        if (els.secs) els.secs.textContent = pad(s);

        // Inline spans
        const inlineStr = `${pad(d)}:${pad(h)}:${pad(m)}:${pad(s)}`;
        if (els.inline) els.inline.textContent = inlineStr;
        if (els.inline2) els.inline2.textContent = inlineStr;

        // CTA band
        if (els.daysCTA) els.daysCTA.textContent = d;
        if (els.hoursCTA) els.hoursCTA.textContent = pad(h);
        if (els.minsCTA) els.minsCTA.textContent = pad(m);
        if (els.secsCTA) els.secsCTA.textContent = pad(s);
      }

      function tick() {
        const now = new Date();
        const diff = target - now;
        render(diff);
        if (diff <= 0) clearInterval(int);
      }

      const int = setInterval(tick, 1000);
      tick();

      // Year in footer
      document.getElementById('year').textContent = new Date().getFullYear();
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div>

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(closest-side,rgba(138,92,246,0.55),rgba(10,10,18,0))]"></div>
<div className="absolute bottom-0 right-0 w-[700px] h-[700px] translate-x-1/3 translate-y-1/3 rounded-full blur-3xl opacity-30 bg-[radial-gradient(closest-side,rgba(99,102,241,0.45),rgba(10,10,18,0))]"></div>
</div>

<div className="relative z-50 backdrop-blur border-b bg-black/40 border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
<div className="flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm text-gray-200">
<span className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-sans border-white/10 bg-white/5" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-party-popper h-4 w-4 text-violet-300" data-lucide="party-popper" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
            Limited‑time launch promo
          </span>
<span className="hidden sm:inline font-sans text-gray-400" style={{transition: `outline 0.1s ease-in-out`}}>Save 40% for 12 months</span>
</div>
<div className="flex items-center gap-3">
<div aria-live="polite" className="flex items-center gap-1.5 text-xs font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
<span className="rounded-md ring-1 px-2 py-1.5 font-medium font-sans bg-white/5 ring-white/10" id="cd-days" style={{transition: `outline 0.1s ease-in-out`}}>5</span>d
            <span className="rounded-md ring-1 px-2 py-1.5 font-medium font-sans bg-white/5 ring-white/10" id="cd-hours" style={{transition: `outline 0.1s ease-in-out`}}>00</span>h
            <span className="rounded-md ring-1 px-2 py-1.5 font-medium font-sans bg-white/5 ring-white/10" id="cd-mins" style={{transition: `outline 0.1s ease-in-out`}}>00</span>m
            <span className="rounded-md ring-1 px-2 py-1.5 font-medium font-sans bg-white/5 ring-white/10" id="cd-secs" style={{transition: `outline 0.1s ease-in-out`}}>00</span>s
          </div>
<a className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium bg-gradient-to-br from-blue-500 rounded-full px-4 py-2 shadow-[0_8px_16px_-6px_rgba(139,92,246,0.35)] hover:shadow-[0_12px_24px_-8px_rgba(139,92,246,0.45)] transform-gpu hover:-translate-y-0.5 transition font-sans text-white to-purple-600" href="#pricing" style={{transition: `outline 0.1s ease-in-out`}}>
            Claim offer
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>

<header className="relative z-40 sticky top-0 backdrop-blur-xl bg-[#0a0a12]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset] to-purple-600">
<svg className="lucide lucide-asterisk w-4 h-4 text-white" data-lucide="asterisk" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Nova</span>
</a>
<nav className="hidden md:flex gap-1 border rounded-full px-4 items-center border-white/10">
<a className="text-sm font-medium px-3 py-2 font-sans hover:text-white text-gray-300" href="#features" style={{transition: `outline 0.1s ease-in-out`}}>Product</a>
<a className="text-sm font-medium px-3 py-2 font-sans hover:text-white text-gray-300" href="#pricing" style={{transition: `outline 0.1s ease-in-out`}}>Pricing</a>
<a className="text-sm font-medium px-3 py-2 font-sans hover:text-white text-gray-300" href="#testimonials" style={{transition: `outline 0.1s ease-in-out`}}>Testimonials</a>
<a className="text-sm font-medium px-3 py-2 font-sans hover:text-white text-gray-300" href="#faq" style={{transition: `outline 0.1s ease-in-out`}}>FAQ</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Login" className="group relative inline-flex transition select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-md p-[1px] items-center justify-center text-white" style={{backgroundImage: `linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)`}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-md px-4 py-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Login
            </span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-br from-blue-500 rounded-full px-4 py-2 shadow-lg transform-gpu transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.4)] font-sans shadow-blue-900/25 text-white to-purple-600" href="#pricing" style={{transition: `outline 0.1s ease-in-out`}}>
            Get 40% off
            <svg className="lucide lucide-badge-percent h-4 w-4" data-lucide="badge-percent" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
<div className="grid md:grid-cols-12 gap-10 md:gap-8">
<div className="md:col-span-7 lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur font-sans border-white/10 bg-white/5 text-gray-200" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-violet-300" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Launch promotion — auto‑applied at checkout
          </div>
<h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-bricolage font-bold text-white" style={{}}>
            Smarter notes, now 40% off
          </h1>
<p className="mt-4 max-w-xl text-base sm:text-lg font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
            Capture ideas, link them with effortless backlinks, and recall anything in milliseconds—across devices, even offline. For a limited time, get your first 12 months at an exclusive discount.
          </p>
<div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-br from-blue-500 rounded-full px-5 py-2.5 shadow-lg transform-gpu transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.45)] font-sans text-white to-purple-600 shadow-blue-900/25" href="#pricing" style={{transition: `outline 0.1s ease-in-out`}}>
              Claim 40% off
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium font-sans border-white/10 text-gray-200 hover:bg-white/5" href="#features" style={{transition: `outline 0.1s ease-in-out`}}>
              Explore features
              <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
<div className="mt-6 flex items-center gap-4 text-sm text-gray-300">
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-shield h-4 w-4 text-violet-300" data-lucide="shield" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Private by default
            </div>
<div className="h-px w-20 bg-white/10"></div>
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-sparkles h-4 w-4 text-violet-300" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Offline‑first
            </div>
</div>
</div>

<div className="md:col-span-5 lg:col-span-5">
<div className="relative rounded-3xl ring-1 backdrop-blur overflow-hidden ring-white/10 bg-white/5">
<div className="absolute inset-0 -top-6 h-40 w-full bg-gradient-to-r from-blue-500/20 via-fuchsia-500/10 to-purple-500/20 blur-2xl"></div>
<div className="relative p-6 sm:p-7">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 bg-white/10 ring-white/10">
<svg className="lucide lucide-badge-percent h-4 w-4 text-white" data-lucide="badge-percent" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
<span className="text-xs font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Launch Offer</span>
</div>
<span className="text-xs font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>Ends soon</span>
</div>
<h2 className="mt-4 text-2xl font-bricolage font-bold" style={{}}>Pro plan — 40% off</h2>
<p className="mt-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
                Full power for individuals: unlimited notes, backlinks, graph view, and end‑to‑end encryption.
              </p>
<div className="mt-5 flex items-end gap-3">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-bricolage font-bold" style={{}}>$6</span>
<span className="text-sm font-sans text-gray-400" style={{transition: `outline 0.1s ease-in-out`}}>/mo</span>
</div>
<div className="text-sm line-through font-sans text-gray-400" style={{transition: `outline 0.1s ease-in-out`}}>$10/mo</div>
</div>
<div className="mt-5 grid grid-cols-1 gap-2 text-sm">
<div className="flex items-center gap-2 font-sans text-gray-200" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  Unlimited notes & backlinks
                </div>
<div className="flex items-center gap-2 font-sans text-gray-200" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-lock h-4 w-4 text-emerald-400" data-lucide="lock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  End‑to‑end encryption
                </div>
<div className="flex items-center gap-2 font-sans text-gray-200" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-zap h-4 w-4 text-emerald-400" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                  Local‑first sync, offline
                </div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg active:bg-gray-200 transition px-4 py-2.5 text-sm font-medium font-sans bg-white text-gray-900 hover:bg-gray-100" href="#pricing" style={{transition: `outline 0.1s ease-in-out`}}>
                  Start with offer
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-2 text-xs font-sans text-gray-400" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  14‑day trial · No credit card to try
                </div>
</div>
</div>
<div className="relative border-t p-5 border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-sparkles h-4 w-4 text-violet-300" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Code NOVA40 auto‑applied
                </div>
<div className="flex items-center gap-2 text-xs text-gray-300">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-sans" id="cd-inline" style={{transition: `outline 0.1s ease-in-out`}}>05:00:00:00</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-gradient-to-b from-[#0a0a12] to-[#0d0d16]" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<h2 className="text-3xl sm:text-4xl text-center font-bricolage font-bold tracking-tight" style={{}}>Everything you need to think clearly</h2>
<p className="mt-3 text-center max-w-2xl mx-auto font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
        From instant capture to graph insights—built to stay fast, private, and reliable.
      </p>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="ring-1 rounded-3xl backdrop-blur p-6 h-full ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-zap h-5 w-5 text-violet-300" data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Fast capture
          </div>
<h3 className="mt-3 text-xl font-semibold tracking-tight font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Open anywhere, type instantly</h3>
<p className="mt-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
            Global shortcut. Zero friction. Works offline and syncs when you’re back.
          </p>
<div className="mt-4 rounded-2xl overflow-hidden ring-1 p-4 ring-white/10 bg-black/20">
<div className="flex items-center gap-2 text-sm font-sans text-gray-200" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-file-text h-4 w-4 text-zinc-300" data-lucide="file-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              Launch checklist — beta cohort
            </div>
<div className="mt-2 text-xs font-sans text-gray-400" style={{transition: `outline 0.1s ease-in-out`}}>Updated 2h ago</div>
</div>
</div>

<div className="ring-1 rounded-3xl backdrop-blur p-6 h-full ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-network h-5 w-5 text-violet-300" data-lucide="network" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
            Backlinks & graph
          </div>
<h3 className="mt-3 text-xl font-semibold tracking-tight font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Connect ideas effortlessly</h3>
<p className="mt-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
            Type to link. Explore relationships with a real‑time interactive graph.
          </p>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="h-16 rounded-xl ring-1 bg-gradient-to-br from-blue-500/20 to-purple-500/10 ring-white/10"></div>
<div className="h-16 rounded-xl ring-1 bg-gradient-to-br from-blue-500/20 to-purple-500/10 ring-white/10"></div>
<div className="h-16 rounded-xl ring-1 bg-gradient-to-br from-blue-500/20 to-purple-500/10 ring-white/10"></div>
</div>
</div>

<div className="ring-1 rounded-3xl backdrop-blur p-6 h-full ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-shield-check h-5 w-5 text-violet-300" data-lucide="shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Security
          </div>
<h3 className="mt-3 text-xl font-semibold tracking-tight font-sans" style={{transition: `outline 0.1s ease-in-out`}}>End‑to‑end encrypted</h3>
<p className="mt-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>
            Local keys. Zero‑knowledge sync. Your notes stay yours—everywhere.
          </p>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs ring-1 font-sans bg-pink-400/10 text-pink-300 ring-pink-400/20" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-lock h-3.5 w-3.5" data-lucide="lock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Private
            </span>
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs ring-1 font-sans bg-purple-400/10 text-purple-300 ring-purple-400/20" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
              On‑device
            </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl font-bricolage font-bold tracking-tight" style={{}}>Choose your plan</h2>
<p className="mt-2 font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>Launch promotion applies automatically at checkout.</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="ring-1 rounded-3xl backdrop-blur p-6 flex flex-col ring-white/10 bg-white/5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Starter</h3>
<span className="text-xs font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>Free</span>
</div>
<p className="mt-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>For quick notes and personal ideas.</p>
<div className="mt-4 space-y-2 text-sm">
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Up to 1,000 notes
            </div>
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Basic backlinks
            </div>
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-x h-4 w-4 text-zinc-400" data-lucide="x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              Advanced graph
            </div>
</div>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium font-sans border-white/10 text-white hover:bg-white/5" href="#" style={{transition: `outline 0.1s ease-in-out`}}>
            Get started
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative ring-1 rounded-3xl backdrop-blur p-6 flex flex-col border border-blue-500/30 ring-white/10 bg-white/5">
<div className="absolute -top-3 right-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 px-3 py-1 text-[11px] shadow-md font-sans to-purple-600 text-white" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-flame h-3.5 w-3.5" data-lucide="flame" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
            40% OFF
          </div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Pro</h3>
<span className="text-xs font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>Most popular</span>
</div>
<p className="mt-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>Unlimited power for individuals.</p>
<div className="mt-4 flex items-end gap-3">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-bricolage font-bold" style={{}}>$6</span>
<span className="text-sm font-sans text-gray-400" style={{transition: `outline 0.1s ease-in-out`}}>/mo</span>
</div>
<div className="text-sm line-through font-sans text-gray-400" style={{transition: `outline 0.1s ease-in-out`}}>$10/mo</div>
</div>
<div className="mt-4 space-y-2 text-sm">
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Unlimited notes & attachments
            </div>
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Real‑time backlinks & graph
            </div>
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              End‑to‑end encryption & local keys
            </div>
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Local‑first sync, works offline
            </div>
<div className="flex items-center gap-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Priority support
            </div>
</div>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold bg-gradient-to-br from-blue-500 shadow-lg transform-gpu transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.45)] font-sans text-white to-purple-600" href="#" style={{transition: `outline 0.1s ease-in-out`}}>
            Choose Pro
            <svg className="lucide lucide-arrow-right h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<p className="mt-2 text-xs font-sans text-gray-400" style={{transition: `outline 0.1s ease-in-out`}}>Cancel anytime. 14‑day trial included.</p>
</div>

<div className="ring-1 rounded-3xl backdrop-blur p-6 flex flex-col ring-white/10 bg-white/5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Team</h3>
<span className="inline-flex items-center gap-1.5 rounded-full ring-1 px-2.5 py-1 text-xs font-sans ring-white/10 bg-white/10 text-gray-200" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-users h-3.5 w-3.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Early access
            </span>
</div>
<p className="mt-2 text-sm font-sans text-gray-300" style={{transition: `outline 0.1s ease-in-out`}}>Collaborate with roles, shared spaces, and permissions.</p>
<div className="mt-4 flex items-end gap-3">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-bricolage-bold">$12</span>
<span className="text-sm font-sans text-gray-400">/user/mo</span>
</div>
<div className="text-sm line-through font-sans text-gray-400">$20</div>
</div>
<div className="mt-4 space-y-2 text-sm">
<div className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Shared workspaces & permissions
            </div>
<div className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Real‑time multiplayer editing
            </div>
<div className="flex items-center gap-2 font-sans">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              SSO & admin controls
            </div>
</div>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium font-sans border-white/10 text-white hover:bg-white/5" href="#">
            Contact sales
            <svg className="lucide lucide-arrow-right h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<p className="mt-2 text-xs font-sans text-gray-400">Volume discounts available.</p>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl ring-1 p-5 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg className="lucide lucide-bolt h-5 w-5 text-violet-300" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m13 3-8 8h7l-1 9 8-8h-7z"></path></svg>
            Instant setup
          </div>
<p className="mt-2 text-sm text-gray-300">Create an account and sync across devices in under a minute.</p>
</div>
<div className="rounded-2xl ring-1 p-5 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg className="lucide lucide-shield-check h-5 w-5 text-violet-300" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Private by default
          </div>
<p className="mt-2 text-sm text-gray-300">Local keys with zero‑knowledge sync keep your notes yours.</p>
</div>
<div className="rounded-2xl ring-1 p-5 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm text-gray-300">
<svg className="lucide lucide-sparkles h-5 w-5 text-violet-300" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Launch bonus
          </div>
<p className="mt-2 text-sm text-gray-300">Founders badge + premium template pack included.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-gradient-to-b from-[#0d0d16] to-[#0a0a12]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-8">
<div>
<h3 className="text-2xl sm:text-3xl font-bricolage font-bold">Limited‑time bonuses</h3>
<p className="mt-2 font-sans text-gray-300">Available only during the launch window.</p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-gift h-5 w-5 mt-0.5 text-emerald-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M3 12v6a2 2 0 0 0 2 2h6"></path><path d="M21 12v6a2 2 0 0 1-2 2h-6"></path><path d="M7.5 7A2.5 2.5 0 1 1 12 5.5V8H7.5z"></path><path d="M16.5 7A2.5 2.5 0 1 0 12 5.5V8h4.5z"></path></svg>
              Premium template pack (10+ note systems)
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-badge-check h-5 w-5 mt-0.5 text-emerald-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 4.21 6 2l-1.5 2.21L2 3l.5 2.61L1 l2.21 1.5L2 11l2.61-.5L6 12.99l1.5-2.49L10.11 11 9 9.5 11.21 8 9 6.5l1.11-1.5z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Founders badge on your profile
            </li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-headphones h-5 w-5 mt-0.5 text-emerald-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM6 19a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2z"></path></svg>
              Priority support for 90 days
            </li>
</ul>
</div>
<div className="rounded-3xl ring-1 p-6 ring-white/10 bg-white/5">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 text-xs ring-white/10 bg-white/10 text-gray-200">
              Limited window
            </div>
<div className="flex items-center gap-2 text-xs text-gray-300">
<svg className="lucide lucide-clock h-4 w-4" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span id="cd-inline-2">05:00:00:00</span>
</div>
</div>
<h4 className="mt-4 text-xl font-semibold font-bricolage">Redeem before time runs out</h4>
<p className="mt-2 text-sm text-gray-300">Your code NOVA40 is auto‑applied at checkout. Offer ends when the countdown hits zero.</p>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold bg-gradient-to-br from-blue-500 shadow-lg transform-gpu transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.45)] text-white to-purple-600" href="#pricing">
            Claim bonus + offer
            <svg className="lucide lucide-arrow-right h-4 w-4" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="text-center">
<h3 className="text-2xl sm:text-3xl font-bricolage font-bold">Redeem in 3 quick steps</h3>
<p className="mt-2 font-sans text-gray-300">Takes less than 60 seconds.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl ring-1 p-6 ring-white/10 bg-white/5">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 font-semibold to-purple-600">1</div>
<h4 className="mt-4 font-semibold">Choose a plan</h4>
<p className="mt-1 text-sm text-gray-300">Select Starter, Pro, or Team on the pricing section.</p>
</div>
<div className="rounded-2xl ring-1 p-6 ring-white/10 bg-white/5">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 font-semibold to-purple-600">2</div>
<h4 className="mt-4 font-semibold">Create your account</h4>
<p className="mt-1 text-sm text-gray-300">NOVA40 is automatically applied. No coupon entry required.</p>
</div>
<div className="rounded-2xl ring-1 p-6 ring-white/10 bg-white/5">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 font-semibold to-purple-600">3</div>
<h4 className="mt-4 font-semibold">Start capturing</h4>
<p className="mt-1 text-sm text-gray-300">Install apps, set your shortcut, and take your first note.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-gradient-to-b from-[#0a0a12] to-[#0d0d16]" id="testimonials">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center">
<h3 className="text-3xl sm:text-4xl font-bricolage font-bold">Loved by early users</h3>
<p className="mt-2 font-sans text-gray-300">Here’s what our beta cohort is saying.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<figure className="rounded-3xl ring-1 p-6 ring-white/10 bg-white/5">
<blockquote className="text-sm text-gray-200">“The global shortcut and offline search changed how I capture ideas. It’s instant.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"></span>
<div>
<div className="text-sm font-medium">Amara P.</div>
<div className="text-xs text-gray-400">Product Designer</div>
</div>
</figcaption>
</figure>
<figure className="rounded-3xl ring-1 p-6 ring-white/10 bg-white/5">
<blockquote className="text-sm text-gray-200">“Backlinks feel natural and the graph view helps me spot patterns fast.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600"></span>
<div>
<div className="text-sm font-medium">Liam H.</div>
<div className="text-xs text-gray-400">Researcher</div>
</div>
</figcaption>
</figure>
<figure className="rounded-3xl ring-1 p-6 ring-white/10 bg-white/5">
<blockquote className="text-sm text-gray-200">“Local encryption + sync is the combo I’ve wanted for years. Five stars.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600"></span>
<div>
<div className="text-sm font-medium">Noah V.</div>
<div className="text-xs text-gray-400">Engineer</div>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="relative" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="text-center">
<h3 className="text-3xl sm:text-4xl font-bricolage font-bold">Frequently asked questions</h3>
<p className="mt-2 font-sans text-gray-300">Quick answers about the launch promotion and product.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
<details className="group rounded-2xl ring-1 p-5 open:bg-white/10 transition ring-white/10 bg-white/5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">How long does the 40% off last?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">The discount applies for your first 12 billing cycles from the date you redeem the offer.</p>
</details>
<details className="group rounded-2xl ring-1 p-5 ring-white/10 bg-white/5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">Is there a free trial?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">Yes. All paid plans include a 14‑day trial. No credit card required to try.</p>
</details>
<details className="group rounded-2xl ring-1 p-5 ring-white/10 bg-white/5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">Do you offer student or nonprofit pricing?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">Yes. Contact us to verify eligibility and we’ll extend special rates.</p>
</details>
<details className="group rounded-2xl ring-1 p-5 ring-white/10 bg-white/5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">What happens when the countdown ends?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-gray-300">The launch bonuses and discounted pricing expire. You can still subscribe at standard rates.</p>
</details>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium border-white/10 text-gray-200 hover:bg-white/5" href="#pricing">
          Still have questions? See plans
          <svg className="lucide lucide-arrow-right h-4 w-4" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-fuchsia-500/10 to-purple-500/10 blur-2xl"></div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="rounded-3xl ring-1 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ring-white/10 bg-white/5">
<div>
<h4 className="text-2xl font-bricolage font-bold">Grab40% off before it’s gone</h4>
<p className="mt-2 text-sm text-gray-300">Code NOVA40 auto‑applied · 12 months discounted</p>
</div>
<div className="flex items-center gap-4">
<div aria-live="polite" className="flex items-center gap-1.5 text-xs text-gray-300">
<span className="rounded-md ring-1 px-2 py-1.5 font-medium bg-white/5 ring-white/10" id="cd-days-cta">5</span>d
            <span className="rounded-md ring-1 px-2 py-1.5 font-medium bg-white/5 ring-white/10" id="cd-hours-cta">00</span>h
            <span className="rounded-md ring-1 px-2 py-1.5 font-medium bg-white/5 ring-white/10" id="cd-mins-cta">00</span>m
            <span className="rounded-md ring-1 px-2 py-1.5 font-medium bg-white/5 ring-white/10" id="cd-secs-cta">00</span>s
          </div>
<a className="inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-br from-blue-500 rounded-full px-5 py-2.5 shadow-lg transform-gpu transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-6px_rgba(139,92,246,0.45)] to-purple-600 text-white" href="#pricing">
            Claim the offer
            <svg className="lucide lucide-arrow-right h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<p className="text-center text-xs text-gray-400">
        Offer valid for new subscriptions only. 40% discount applies to the first 12 billing cycles on Pro and Team plans.
        Taxes may apply. You can cancel anytime. Additional terms may apply.
      </p>
</div>
</section>

<footer className="relative border-t border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 shadow-[0_0_0_2px_rgba(255,255,255,0.06)_inset] to-purple-600">
<svg className="lucide lucide-asterisk w-4 h-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</span>
<span className="text-lg font-semibold">Nova</span>
</a>
<nav className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
<a className="hover:text-white" href="#features">Product</a>
<a className="hover:text-white" href="#pricing">Pricing</a>
<a className="hover:text-white" href="#testimonials">Testimonials</a>
<a className="hover:text-white" href="#faq">FAQ</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</nav>
</div>
<div className="mt-6 text-xs text-gray-500">© <span id="year"></span> Nova Labs. All rights reserved.</div>
</div>
</footer>



    </>
  );
}
