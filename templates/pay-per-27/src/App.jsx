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



    // Initialize lucide icons with stroke-width 1.5
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Calculator logic
      const viewsInput = document.getElementById('viewsInput');
      const ecpmInput = document.getElementById('ecpmInput');
      const categorySelect = document.getElementById('categorySelect');
      const earningsOutput = document.getElementById('earningsOutput');
      const rpmOutput = document.getElementById('rpmOutput');
      const feeOutput = document.getElementById('feeOutput');
      const netOutput = document.getElementById('netOutput');
      const decBtn = document.getElementById('viewsDec');
      const incBtn = document.getElementById('viewsInc');
      const presets = Array.from(document.querySelectorAll('.preset-btn'));
      const platformFee = 0.10;

      function toMoney(n) {
        return '$' + (Math.round(n * 100) / 100).toFixed(2);
      }

      function categoryMultiplier(value) {
        switch (value) {
          case 'finance': return 1.20;
          case 'tech': return 1.10;
          default: return 1.00;
        }
      }

      function recalc() {
        const views = Math.max(0, parseFloat(viewsInput.value || '0'));
        const baseEcpm = Math.max(0, parseFloat(ecpmInput.value || '0'));
        const mult = categoryMultiplier(categorySelect.value);
        const effectiveRpm = baseEcpm * mult;
        const gross = (views / 1000) * effectiveRpm;
        const fee = gross * platformFee;
        const net = gross - fee;

        earningsOutput.textContent = toMoney(gross);
        rpmOutput.textContent = toMoney(effectiveRpm);
        feeOutput.textContent = (platformFee * 100).toFixed(0) + '%';
        netOutput.textContent = toMoney(net);
      }

      decBtn.addEventListener('click', () => {
        const step = 1000;
        viewsInput.value = Math.max(0, parseFloat(viewsInput.value || '0') - step);
        recalc();
      });
      incBtn.addEventListener('click', () => {
        const step = 1000;
        viewsInput.value = Math.max(0, parseFloat(viewsInput.value || '0') + step);
        recalc();
      });
      [viewsInput, ecpmInput, categorySelect].forEach(el => el.addEventListener('input', recalc));
      presets.forEach(btn => btn.addEventListener('click', () => {
        const v = parseInt(btn.getAttribute('data-preset'), 10);
        if (!isNaN(v)) {
          viewsInput.value = v;
          recalc();
        }
      }));

      recalc();
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
      

<div className="min-h-screen flex flex-col">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 40%, rgba(99,102,241,0.25), rgba(56,189,248,0.1) 60%, rgba(0,0,0,0) 70%)'}}></div>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '48px 48px'}}></div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
<a className="group inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-white/[0.08] ring-1 ring-white/10 grid place-items-center text-white/90 group-hover:bg-white/[0.12] group-hover:ring-white/20 transition-colors">
<span className="text-[11px] font-semibold tracking-tight font-quicksand" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>PPV</span>
</div>
<span className="text-sm md:text-base font-medium tracking-tight text-white/90 font-quicksand">Pay Per View</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
<a className="hover:text-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1 py-1 font-quicksand" href="#features">Features</a>
<a className="hover:text-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1 py-1 font-quicksand" href="#creators">Creators</a>
<a className="hover:text-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1 py-1 font-quicksand" href="#pricing">Pricing</a>
<a className="hover:text-white/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded px-1 py-1 font-quicksand" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium text-white/85 ring-1 ring-white/15 hover:ring-white/25 hover:text-white transition font-quicksand">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Sign in
          </button>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium text-black bg-white hover:bg-white/90 active:bg-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 font-quicksand" href="#get-started">
            Get started <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/70 mb-5 font-quicksand">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Instant payouts. Transparent rates. No guesswork.
            </div>
<h1 className="text-4xl md:text-6xl tracking-tight leading-[1.05] text-white font-quicksand font-medium">
              Get paid for every view.
            </h1>
<p className="md:text-lg text-base text-white/70 font-quicksand max-w-xl mt-4">
              A creator-first UGC platform with real-time analytics and weekly payouts. Upload content, set your rate, and earn automatically per view.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-black bg-white hover:bg-white/90 active:bg-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 font-quicksand" href="#get-started">
                Create free account <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white/85 ring-1 ring-white/15 hover:ring-white/25 hover:text-white transition font-quicksand" href="#demo">
                View demo <svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>

<div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
<div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
<div className="text-xs text-white/60 font-quicksand">Avg RPM</div>
<div className="text-xl font-semibold tracking-tight font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>$5.80</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
<div className="text-xs text-white/60 font-quicksand">Creators</div>
<div className="text-xl font-semibold tracking-tight font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>38,214</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
<div className="text-xs text-white/60 font-quicksand">Payouts weekly</div>
<div className="text-xl font-semibold tracking-tight font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>Fri 09:00 UTC</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 md:-inset-6 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent blur-xl opacity-40"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0f1117]/80 backdrop-blur p-5 md:p-6">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-white/60 font-quicksand">Available balance</div>
<div className="mt-1 text-3xl tracking-tight font-quicksand font-medium" style={{fontVariantNumeric: 'tabular-nums'}}>$1,284.22</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium bg-white/10 hover:bg-white/15 transition ring-1 ring-white/10 font-quicksand">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Export
                </button>
</div>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center justify-between text-xs text-white/60 font-quicksand">
                    Views <svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>221,944</div>
<div className="text-xs text-emerald-400/80 font-quicksand">+12.4%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center justify-between text-xs text-white/60 font-quicksand">
                    RPM <svg className="lucide lucide-activity w-3.5 h-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>$6.12</div>
<div className="text-xs text-emerald-400/80 font-quicksand">+0.8%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center justify-between text-xs text-white/60 font-quicksand">
                    Pending <svg className="lucide lucide-wallet w-3.5 h-3.5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>$432.10</div>
<div className="text-xs text-white/60 font-quicksand">Next Fri</div>
</div>
</div>

<div className="mt-6 grid grid-cols-2 gap-3">
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Creator clip" className="h-28 w-full object-cover opacity-90 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<div className="text-xs font-medium font-quicksand">Street Interview</div>
<div className="inline-flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 text-[11px] ring-1 ring-white/10">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>18.2k</span>
</div>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Creator clip" className="h-28 w-full object-cover opacity-90 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<div className="text-xs font-medium font-quicksand">Desk Setup</div>
<div className="inline-flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 text-[11px] ring-1 ring-white/10">
<svg className="lucide lucide-eye w-3.5 h-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>12.9k</span>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-sm text-white/80 font-quicksand">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  2FA &amp; fraud detection enabled
                </div>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-xs font-medium hover:bg-white/90 transition font-quicksand">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Payout
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="features">
<div className="mx-auto max-w-7xl px-6 pb-8">
<div className="grid md:grid-cols-4 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.055] transition">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 mb-3">
<svg className="lucide lucide-coins w-4.5 h-4.5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-quicksand">Pay per view</h3>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">Set your RPM and earn automatically for every qualified view across web and mobile.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.055] transition">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 mb-3">
<svg className="lucide lucide-bar-chart-3 w-4.5 h-4.5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-quicksand">Live analytics</h3>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">Real-time views, RPM, and retention with geographic and device breakdowns.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.055] transition">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 mb-3">
<svg className="lucide lucide-shield w-4.5 h-4.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-quicksand">Anti‑fraud</h3>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">Bot, VPN, and rapid‑refresh detection ensure you’re paid for authentic engagement.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.055] transition">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10 mb-3">
<svg className="lucide lucide-banknote w-4.5 h-4.5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight font-quicksand">Weekly payouts</h3>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">Get paid via bank transfer or wallet every Friday with transparent statements.</p>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative z-10" id="creators">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="grid lg:grid-cols-2 gap-8">

<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 md:p-7">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-quicksand">Earnings calculator</h3>
<div className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1 text-[11px] ring-1 ring-white/10 text-white/80 font-quicksand">
<svg className="lucide lucide-info w-3.5 h-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Estimations only
              </div>
</div>
<div className="mt-5 grid gap-4">
<label className="text-xs font-medium text-white/70 font-quicksand">Monthly views</label>
<div className="flex items-center gap-2">
<button aria-label="Decrease views" className="h-9 w-9 rounded-md ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 transition flex items-center justify-center" id="viewsDec" type="button">
<svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<input className="flex-1 h-9 rounded-md bg-white/5 ring-1 ring-white/15 px-3 text-sm text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/25" id="viewsInput" inputmode="numeric" min="0" placeholder="e.g. 100000" step="1000" type="number" value="100000"/>
<button aria-label="Increase views" className="h-9 w-9 rounded-md ring-1 ring-white/15 bg-white/5 hover:bg-white/10 hover:ring-white/25 transition flex items-center justify-center" id="viewsInc" type="button">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs font-medium text-white/70 font-quicksand">ECPM (per 1,000 views)</label>
<div className="mt-1 relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 text-sm font-quicksand">$</span>
<input className="w-full h-9 rounded-md bg-white/5 ring-1 ring-white/15 pl-7 pr-3 text-sm text-white/90 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/25" id="ecpmInput" min="0" step="0.1" type="number" value="6.00"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-white/70 font-quicksand">Category</label>
<div className="mt-1 relative">
<select className="appearance-none w-full h-9 rounded-md bg-white/5 ring-1 ring-white/15 pl-3 pr-9 text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-white/25" id="categorySelect">
<option className="font-quicksand" value="standard">General</option>
<option className="font-quicksand" value="finance">Finance (+20%)</option>
<option className="font-quicksand" value="tech">Tech (+10%)</option>
<option className="font-quicksand" value="lifestyle">Lifestyle</option>
<option className="font-quicksand" value="gaming">Gaming</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="mt-5 rounded-lg border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70 font-quicksand">Estimated monthly earnings</div>
<div className="text-2xl tracking-tight font-quicksand font-medium" id="earningsOutput" style={{fontVariantNumeric: 'tabular-nums'}}>$600.00</div>
</div>
<div className="mt-2 grid grid-cols-3 gap-3 text-xs text-white/70">
<div className="rounded-md bg-black/30 p-2 ring-1 ring-white/10">
<div className="font-quicksand">Effective RPM</div>
<div className="mt-0.5 text-white/90 font-medium font-quicksand" id="rpmOutput" style={{fontVariantNumeric: 'tabular-nums'}}>$6.00</div>
</div>
<div className="rounded-md bg-black/30 p-2 ring-1 ring-white/10">
<div className="font-quicksand">Platform fee</div>
<div className="mt-0.5 text-white/90 font-medium font-quicksand" id="feeOutput" style={{fontVariantNumeric: 'tabular-nums'}}>10%</div>
</div>
<div className="rounded-md bg-black/30 p-2 ring-1 ring-white/10">
<div className="font-quicksand">After fees</div>
<div className="mt-0.5 text-white/90 font-medium font-quicksand" id="netOutput" style={{fontVariantNumeric: 'tabular-nums'}}>$540.00</div>
</div>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<button className="preset-btn inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-3 py-1.5 text-xs text-white/85 transition font-quicksand" data-preset="50000">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> 50k views
                </button>
<button className="preset-btn inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-3 py-1.5 text-xs text-white/85 transition font-quicksand" data-preset="100000">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> 100k views
                </button>
<button className="preset-btn inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-3 py-1.5 text-xs text-white/85 transition font-quicksand" data-preset="500000">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> 500k views
                </button>
<button className="preset-btn inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 px-3 py-1.5 text-xs text-white/85 transition font-quicksand" data-preset="1000000">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> 1M views
                </button>
</div>
</div>
</div>

<div className="grid gap-4">
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.035]">
<div className="p-6 flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight font-quicksand">Creators get priority</h3>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">Upload shorts, clips, threads, or galleries. We handle hosting, distribution, and payouts.</p>
</div>
<div className="hidden md:flex -space-x-2">
<img alt="Creator" className="h-9 w-9 rounded-full ring-2 ring-[#0b0c10]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Creator" className="h-9 w-9 rounded-full ring-2 ring-[#0b0c10]" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<img alt="Creator" className="h-9 w-9 rounded-full ring-2 ring-[#0b0c10]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="grid sm:grid-cols-3 gap-3 p-3">
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Tech" className="h-40 w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<span className="text-xs font-medium font-quicksand">AI Tools</span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 text-[11px] ring-1 ring-white/10 font-quicksand">
<svg className="lucide lucide-coins w-3.5 h-3.5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg> $7.20 RPM
                    </span>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Finance" className="h-40 w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<span className="text-xs font-medium font-quicksand">Finance 101</span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 text-[11px] ring-1 ring-white/10 font-quicksand">
<svg className="lucide lucide-coins w-3.5 h-3.5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg> $8.40 RPM
                    </span>
</div>
</div>
<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Lifestyle" className="h-40 w-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
<span className="text-xs font-medium font-quicksand">Day in life</span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 text-[11px] ring-1 ring-white/10 font-quicksand">
<svg className="lucide lucide-coins w-3.5 h-3.5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg> $5.10 RPM
                    </span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between border-t border-white/10">
<div className="text-xs text-white/70 font-quicksand">Transparent per‑view monetization, no ads required.</div>
<a className="inline-flex items-center gap-2 text-xs font-medium rounded-md px-3 py-1.5 ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/5 transition font-quicksand" href="#get-started">
                  Start earning <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/20 text-emerald-300">
<svg className="lucide lucide-lock w-4.5 h-4.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<div className="font-medium font-quicksand">Payouts that scale</div>
<div className="text-sm text-white/70 font-quicksand">KYC, invoicing, and compliance built‑in. Multi‑currency and tax summaries included.</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative z-10" id="pricing">
<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
<div className="text-center max-w-2xl mx-auto">
<h3 className="text-3xl tracking-tight font-quicksand font-medium">Simple, creator‑first pricing</h3>
<p className="mt-2 text-white/70 font-quicksand">No subscriptions for creators. We take a small fee only when you get paid.</p>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-5">
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:bg-white/[0.055] transition">
<div className="text-sm text-white/60 font-quicksand">Creator</div>
<div className="mt-1 text-3xl tracking-tight font-quicksand font-medium">Free</div>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited uploads</li>
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Weekly payouts</li>
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Real‑time analytics</li>
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Anti‑fraud protection</li>
</ul>
<div className="mt-5 rounded-lg bg-black/30 ring-1 ring-white/10 p-3 text-sm flex items-center justify-between">
<span className="font-quicksand">Platform fee</span>
<span className="font-medium font-quicksand">10% on payouts</span>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition font-quicksand" href="#get-started">
              Start free <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative rounded-2xl border border-indigo-400/30 bg-indigo-400/10 p-6 ring-1 ring-indigo-400/20">
<div className="absolute -top-3 right-4 rounded-full bg-white text-black px-2 py-0.5 text-[11px] font-medium ring-1 ring-black/10 font-quicksand">Most popular</div>
<div className="text-sm text-white/70 font-quicksand">Creator Pro</div>
<div className="mt-1 text-3xl tracking-tight font-quicksand font-medium">$19/mo</div>
<ul className="mt-4 space-y-2 text-sm text-white/85">
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-star w-4 h-4 text-indigo-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Priority distribution</li>
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-star w-4 h-4 text-indigo-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Higher RPM brackets</li>
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-star w-4 h-4 text-indigo-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Advanced export &amp; API</li>
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-star w-4 h-4 text-indigo-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Priority support</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition font-quicksand" href="#get-started">
              Upgrade <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 hover:bg-white/[0.055] transition">
<div className="text-sm text-white/60 font-quicksand">Brands</div>
<div className="mt-1 text-3xl tracking-tight font-quicksand font-medium">Custom</div>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Sponsor creators</li>
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Audience targeting</li>
<li className="flex items-center gap-2 font-quicksand"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Brand safety controls</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/5 transition font-quicksand" href="#contact">
              Contact sales <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</section>

<section className="relative z-10" id="faq">
<div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.055] transition">
<div className="flex items-start gap-3">
<svg className="lucide lucide-help-circle w-5 h-5 mt-0.5 text-white/70" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div>
<h4 className="font-medium tracking-tight font-quicksand">How are views counted?</h4>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">Unique, human views with minimum watch time and scroll depth. Bots and repeated rapid refreshes are filtered out.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.055] transition">
<div className="flex items-start gap-3">
<svg className="lucide lucide-help-circle w-5 h-5 mt-0.5 text-white/70" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div>
<h4 className="font-medium tracking-tight font-quicksand">When do I get paid?</h4>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">Payouts are processed every Friday once your balance crosses the minimum threshold.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.055] transition">
<div className="flex items-start gap-3">
<svg className="lucide lucide-help-circle w-5 h-5 mt-0.5 text-white/70" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div>
<h4 className="font-medium tracking-tight font-quicksand">Can I set my own RPM?</h4>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">Yes. You can use suggested brackets by category or set a custom RPM for each piece.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.035] p-5 hover:bg-white/[0.055] transition">
<div className="flex items-start gap-3">
<svg className="lucide lucide-help-circle w-5 h-5 mt-0.5 text-white/70" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div>
<h4 className="font-medium tracking-tight font-quicksand">What about rights and licensing?</h4>
<p className="mt-1.5 text-sm text-white/70 font-quicksand">You keep ownership. You grant us the license to distribute and monetize your content on-platform.</p>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" id="get-started">
<div>
<div className="text-sm text-white/70 font-quicksand">Ready to earn more?</div>
<h4 className="text-2xl tracking-tight mt-1 font-quicksand font-medium">Join thousands of creators getting paid per view</h4>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition font-quicksand" href="#">
              Create account <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/5 transition font-quicksand" href="#demo">
              Watch demo <svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</a>
</div>
</div>
</div>
</section>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/[0.08] ring-1 ring-white/10 grid place-items-center text-white/90">
<span className="text-[11px] font-semibold tracking-tight font-quicksand" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>PPV</span>
</div>
<div className="text-sm text-white/70 font-quicksand">© <span className="font-quicksand" style={{fontVariantNumeric: 'tabular-nums'}}>2025</span> PPV, Inc.</div>
</div>
<div className="flex items-center gap-4 text-sm text-white/60">
<a className="hover:text-white/90 font-quicksand" href="#">Terms</a>
<a className="hover:text-white/90 font-quicksand" href="#">Privacy</a>
<a className="hover:text-white/90 font-quicksand" href="#">Status</a>
</div>
</div>
</div>
</footer>
</div>



<div style={{position: 'fixed', inset: '-1px', pointerEvents: 'none', opacity: '0', fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}></div>

    </>
  );
}
