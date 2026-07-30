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



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Countdown target: September 5, 2025 23:59:59 local
    const target = new Date('September 5, 2025 23:59:59');

    function updateCountdown(prefix) {
      const now = new Date();
      let diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const mins = Math.floor(diff / (1000 * 60));
      diff -= mins * (1000 * 60);
      const secs = Math.floor(diff / 1000);

      const set = (id, val) => { const el = document.getElementById(prefix + id); if (el) el.textContent = String(val).padStart(2, '0'); };
      set('days', days);
      set('hours', hours);
      set('mins', mins);
      set('secs', secs);
    }

    // Initialize and tick for all three countdown instances
    function tickAll() {
      updateCountdown('cd-');   // hero
      updateCountdown('cd2-');  // offer
      updateCountdown('cd3-');  // final
    }
    tickAll();
    setInterval(tickAll, 1000);

    // Toasts
    function wireCTA(buttonId, inputId, toastId) {
      const btn = document.getElementById(buttonId);
      const input = document.getElementById(inputId);
      const toast = document.getElementById(toastId);
      if (!btn || !input || !toast) return;
      btn.addEventListener('click', () => {
        if (!input.checkValidity()) {
          input.reportValidity();
          return;
        }
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 4000);
        input.value = '';
      });
    }
    wireCTA('hero-cta', 'hero-email', 'hero-toast');
    wireCTA('offer-cta', 'offer-email', 'offer-toast');
    wireCTA('final-cta', 'final-email', 'final-toast');

    // Charts
    // Donut 80/20
    const donutCtx = document.getElementById('donut-8020');
    if (donutCtx) {
      new Chart(donutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Projects 80%', 'Platform 20%'],
          datasets: [{
            data: [80, 20],
            backgroundColor: ['#34d399', '#f59e0b'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          cutout: '70%',
          plugins: {
            legend: {
              display: true,
              labels: {
                color: 'rgba(255,255,255,0.75)',
                boxWidth: 12,
                usePointStyle: true,
                pointStyle: 'circle'
              }
            },
            tooltip: {
              enabled: true,
              callbacks: {
                labelColor: function(context) {
                  return { borderColor: 'transparent', backgroundColor: context.dataset.backgroundColor[context.dataIndex], borderWidth: 0 };
                }
              }
            }
          }
        }
      });
    }

    // Bars performance
    const barsCtx = document.getElementById('bars-performance');
    if (barsCtx) {
      const gradient = barsCtx.getContext('2d').createLinearGradient(0, 0, 0, 240);
      gradient.addColorStop(0, 'rgba(52,211,153,0.9)');
      gradient.addColorStop(1, 'rgba(16,185,129,0.4)');

      new Chart(barsCtx, {
        type: 'bar',
        data: {
          labels: ['Conversion', 'Retention', 'AOV'],
          datasets: [{
            data: [16, 36, 21],
            backgroundColor: gradient,
            borderRadius: 12,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: 'rgba(255,255,255,0.7)' }
            },
            y: {
              suggestedMax: 40,
              ticks: { color: 'rgba(255,255,255,0.6)', callback: (v) => v + '%' },
              grid: { color: 'rgba(255,255,255,0.08)' }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: { label: (ctx) => ` +${ctx.parsed.y}%` }
            }
          }
        }
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
      

<header className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center ring-1 ring-white/20 shadow-[0_8px_30px_rgb(16,185,129,0.25)]">

<svg className="text-white" fill="none" height="22" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M11 12c2.5-2.5 7-3 11-3-1 8-6 12-12 12A7 7 0 0 1 3 14c0-6 4-11 12-12 0 4.08-.5 8.5-4 11Z"></path>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight">Puriphy</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition" href="#how">How it works</a>
<a className="hover:text-white transition" href="#proof">Performance</a>
<a className="hover:text-white transition" href="#offer">Offer</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
<a className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 px-4 py-2 ring-1 ring-white/10 transition" href="#cta-final">

<svg className="text-white/80" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4M16 2v4M3 10h18M5 22h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z"></path>
</svg>
        Founding Partners
      </a>
</nav>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 ring-1 ring-white/10">

<svg className="text-white/80" fill="none" height="22" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
</header>

<section className="relative">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 h-96 w-96 bg-emerald-400/10 blur-3xl rounded-full"></div>
<div className="absolute top-1/3 right-0 h-[28rem] w-[28rem] bg-green-500/10 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 left-1/3 h-72 w-72 bg-emerald-300/10 blur-2xl rounded-full"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-16 lg:pb-24 relative">
<div className="grid lg:grid-cols-2 gap-10 items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] bg-white/5 ring-1 ring-white/10 text-white/80 mb-5">

<svg className="text-yellow-300" fill="none" height="16" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.9 3.9L18 9l-4.1 2.1L12 15l-1.9-3.9L6 9l4.1-2.1L12 3zM5 19l.95 1.9L8 22l-1.9.95L5 25l-.95-2.05L2 22l2.05-.95L5 19zM19 15l.95 1.9L22 18l-1.9.95L19 21l-.95-2.05L16 18l2.05-.95L19 15z"></path>
</svg>
            Founding Partners cohort closes September 5
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight font-semibold">
            Turn Climate Action into a 16% Conversion Boost
          </h1>
<p className="text-white/70 text-lg mt-5 max-w-xl">
            On September 5th, 150 founding partners will receive lifetime access to our platform. Request your invitation.
          </p>

<div className="mt-7 grid grid-cols-4 gap-3 sm:gap-4 max-w-md">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-4 text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight" id="cd-days">--</div>
<div className="text-xs uppercase text-white/60 mt-1">Days</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-4 text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight" id="cd-hours">--</div>
<div className="text-xs uppercase text-white/60 mt-1">Hours</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-4 text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight" id="cd-mins">--</div>
<div className="text-xs uppercase text-white/60 mt-1">Minutes</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-4 text-center">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight" id="cd-secs">--</div>
<div className="text-xs uppercase text-white/60 mt-1">Seconds</div>
</div>
</div>

<form className="mt-7 sm:mt-8 max-w-xl">
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40">

<svg fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m4 4 8 8 8-8"></path><path d="M22 6v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6"></path>
</svg>
</div>
<input autocomplete="email" className="w-full h-12 sm:h-12 rounded-xl bg-white/5 ring-1 ring-white/15 focus:ring-2 focus:ring-emerald-400/60 placeholder-white/40 pl-10 pr-4 text-sm outline-none transition" id="hero-email" placeholder="you@store.com" required type="email" />
</div>
<button className="inline-flex items-center justify-center gap-2 h-12 sm:h-12 px-5 sm:px-6 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-medium tracking-tight ring-1 ring-white/10 shadow-[0_8px_30px_rgb(16,185,129,0.30)] transition" id="hero-cta" type="button">
                Request My Invitation
                
<svg className="opacity-90" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</button>
</div>
<p className="hidden mt-3 text-sm text-emerald-300" id="hero-toast">Thanks! We’ll be in touch shortly.</p>
</form>

<div className="mt-8 flex items-center gap-4 text-white/60">

<svg className="text-emerald-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm">Certified climate funding. Zero code to install. 5-minute setup.</span>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/0">
<img alt="Evergreen canopy" className="h-56 sm:h-72 w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" />
<div className="p-5 sm:p-6">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 sm:p-5 backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">

<svg className="text-emerald-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 6h14l-1.5 9h-11z"></path><path d="M8 6V4a2 2 0 0 1 2-2h0"></path><circle cx="9" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle>
</svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Your order</p>
<p className="text-xs text-white/60">Eco-conscious checkout</p>
</div>
</div>
<span className="text-sm text-white/70">$84.00</span>
</div>
<div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-yellow-500/10 ring-1 ring-yellow-400/30 flex items-center justify-center">

<svg className="text-yellow-300" fill="none" height="17" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="17" xmlns="http://www.w3.org/2000/svg">
<path d="M11 12c2.5-2.5 7-3 11-3-1 8-6 12-12 12A7 7 0 0 1 3 14c0-6 4-11 12-12 0 4.08-.5 8.5-4 11Z"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Add climate contribution</p>
<p className="text-xs text-white/60">Funds verified projects</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-white/70">+$0.47</span>

<button className="h-6 w-11 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40 relative transition" type="button">
<span className="absolute left-5 top-0.5 h-5 w-5 rounded-full bg-emerald-400 shadow" style={{transition: `all .2s`}}></span>
</button>
</div>
</div>
<button className="mt-4 w-full h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 font-medium tracking-tight ring-1 ring-white/10 transition">Pay now — $84.47</button>
</div>

<div className="mt-4 flex items-center gap-3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-2 flex items-center gap-2">

<svg className="text-emerald-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-7 10h14L12 3Z"></path><path d="M9 12v2"></path><path d="M15 12v2"></path><path d="M12 22v-8"></path>
</svg>
<span className="text-sm">Reforestation funded</span>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-2 flex items-center gap-2">

<svg className="text-emerald-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 7H20a2 2 0 1 0-2-2M4 12h13a2 2 0 1 1-2 2M2 17h8a2 2 0 1 1-2 2"></path>
</svg>
<span className="text-sm">Wind power credits</span>
</div>
</div>
</div>
</div>

<div className="absolute -top-3 -right-2">
<div className="rounded-full bg-yellow-400/20 ring-1 ring-yellow-300/30 text-yellow-200 text-xs font-medium px-3 py-1 backdrop-blur">
              Proven to lift conversion
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-10 sm:py-12">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<p className="text-sm text-white/70">Certified by the most trusted names in sustainability.</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">

<div className="flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">

<svg className="text-yellow-300" fill="none" height="16" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m22 4-10 10-3-3"></path></svg>
<span className="text-sm">Verra</span>
</div>
<div className="flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<svg className="text-yellow-300" fill="none" height="16" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m22 4-10 10-3-3"></path></svg>
<span className="text-sm">Gold Standard</span>
</div>
<div className="flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<svg className="text-yellow-300" fill="none" height="16" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m22 4-10 10-3-3"></path></svg>
<span className="text-sm">Greenipath</span>
</div>
<div className="flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2">
<svg className="text-yellow-300" fill="none" height="16" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m22 4-10 10-3-3"></path></svg>
<span className="text-sm">IETA</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16" id="how">
<div className="flex items-end justify-between">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works — in 3 steps</h2>
<span className="text-xs sm:text-sm text-white/60">No redesign needed. Drop-in widget.</span>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">

<svg className="text-emerald-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1v22"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div>
<p className="text-sm text-white/60">Step 1</p>
<p className="font-medium tracking-tight">Climate Contribution</p>
</div>
</div>
<div className="mt-5 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<span className="text-sm">Customer adds $0.47 at checkout</span>
<span className="text-xs text-white/60">Optional</span>
</div>
<div className="mt-4 rounded-lg bg-white/5 ring-1 ring-white/10 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="text-yellow-300" fill="none" height="16" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 2.5a5.5 5.5 0 0 0-8 7.5L12 17l7.5-7a5.5 5.5 0 0 0-7-7.5Z"></path><path d="M2.5 13.5 12 23l9.5-9.5"></path>
</svg>
<span className="text-sm">One-click add at checkout</span>
</div>
<span className="text-xs text-white/60">+AOV</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">

<svg className="text-emerald-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
</svg>
</div>
<div>
<p className="text-sm text-white/60">Step 2</p>
<p className="font-medium tracking-tight">Transparency</p>
</div>
</div>
<div className="mt-5">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-sm text-white/70 mb-3">80% to projects / 20% platform</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="w-full">
<div className="w-full bg-emerald-500/20 rounded h-2 overflow-hidden">
<div className="h-2 bg-gradient-to-r from-emerald-400 to-green-500" style={{width: `80%`}}></div>
</div>
<div className="flex justify-between text-xs text-white/60 mt-2">
<span>Projects 80%</span><span>Platform 20%</span>
</div>
</div>

<div className="mt-4">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="grid grid-cols-1">
<div>
<canvas height="140" id="donut-8020"></canvas>
</div>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-white/60">Live reporting dashboard with receipts and certificates.</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-emerald-500/15 ring-1 ring-emerald-400/30 flex items-center justify-center">

<svg className="text-emerald-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div>
<p className="text-sm text-white/60">Step 3</p>
<p className="font-medium tracking-tight">Impact</p>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Reforestation" className="h-24 w-full object-cover" src="https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=800&auto=format&fit=crop" />
<div className="p-3">
<p className="text-sm font-medium tracking-tight">Reforestation</p>
<p className="text-xs text-white/60">2.4M trees funded</p>
</div>
</div>
<div className="rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="Wind power" className="h-24 w-full object-cover" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800&auto=format&fit=crop" />
<div className="p-3">
<p className="text-sm font-medium tracking-tight">Wind Power</p>
<p className="text-xs text-white/60">380k MWh generated</p>
</div>
</div>
</div>
<div className="mt-4 rounded-xl bg-white/5 ring-1 ring-white/10 p-3 flex items-center justify-between">
<span className="text-sm">Verified offsets issued monthly</span>

<svg className="text-yellow-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"></path><path d="M14 2v6h6"></path><path d="m9 15 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16" id="proof">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Proven to drive e‑commerce performance</h3>
<p className="text-white/70 mt-3">Real stores using Puriphy report significant lifts across conversion, retention, and average order value—while funding certified climate projects.</p>
<div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
<div className="text-2xl font-semibold tracking-tight text-emerald-300">+16%</div>
<div className="text-xs text-white/60 mt-1">Conversion</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
<div className="text-2xl font-semibold tracking-tight text-emerald-300">+36%</div>
<div className="text-xs text-white/60 mt-1">Retention</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
<div className="text-2xl font-semibold tracking-tight text-emerald-300">+21%</div>
<div className="text-xs text-white/60 mt-1">AOV</div>
</div>
</div>
</div>
<div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 sm:p-5">
<div className="flex items-center justify-between">
<span className="text-sm text-white/70">Performance vs Baseline</span>

<svg className="text-emerald-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-6 6"></path>
</svg>
</div>

<div className="mt-4">
<div>
<canvas height="220" id="bars-performance"></canvas>
</div>
</div>
<div className="mt-3 text-xs text-white/60">Aggregate results across eligible merchants; methodology available on request.</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Our mission</h3>
<p className="text-white/70 mt-4 text-lg">
          Positive impact shouldn’t be a luxury. We make climate action effortless and profitable—so every checkout can help restore forests, expand clean energy, and earn customer trust. We are your partners in purpose.
        </p>
</div>
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 flex items-center gap-4">
<img alt="Founder" className="h-16 w-16 rounded-2xl object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" />
<div>
<p className="font-medium tracking-tight">Amelia Park</p>
<p className="text-sm text-white/60">Founder & CEO, Puriphy</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16" id="offer">
<div className="rounded-3xl bg-gradient-to-br from-white/5 to-white/0 ring-1 ring-white/10 p-6 sm:p-8">
<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Special Offer for the First 150</h3>
<p className="text-white/70 mt-2">Secure lifetime access and early-mover visibility.</p>
</div>
<div className="flex items-center gap-3">

<svg className="text-yellow-300" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2h4"></path><path d="M12 14l4-4"></path><circle cx="12" cy="14" r="8"></circle>
</svg>
<span className="text-sm text-white/70">Closes September 5</span>
</div>
</div>
<div className="mt-6 grid md:grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<ul className="space-y-3">
<li className="flex items-start gap-3">

<svg className="text-emerald-300 mt-0.5" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
<span className="text-sm">Lifetime free platform access</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-emerald-300 mt-0.5" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 20V4l13 8L7 20z"></path></svg>
<span className="text-sm">“Founding Partner” badge for store display</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-emerald-300 mt-0.5" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 3 1 3 9 4 2 4-4 4 2"></path><path d="M13 13l6 6"></path></svg>
<span className="text-sm">Featured in global launch campaign</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-emerald-300 mt-0.5" fill="none" height="18" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 5l-6 6-3-3L2 15"></path><path d="M2 10v5h5"></path></svg>
<span className="text-sm">White-glove onboarding & direct founder support</span>
</li>
</ul>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<div className="grid grid-cols-4 gap-3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
<div className="text-xl font-semibold tracking-tight" id="cd2-days">--</div>
<div className="text-[11px] text-white/60 mt-1">Days</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
<div className="text-xl font-semibold tracking-tight" id="cd2-hours">--</div>
<div className="text-[11px] text-white/60 mt-1">Hours</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
<div className="text-xl font-semibold tracking-tight" id="cd2-mins">--</div>
<div className="text-[11px] text-white/60 mt-1">Mins</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
<div className="text-xl font-semibold tracking-tight" id="cd2-secs">--</div>
<div className="text-[11px] text-white/60 mt-1">Secs</div>
</div>
</div>
<form className="mt-5">
<div className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 h-12 rounded-xl bg-white/5 ring-1 ring-white/15 focus:ring-2 focus:ring-emerald-400/60 placeholder-white/40 px-4 text-sm outline-none transition" id="offer-email" placeholder="you@store.com" required type="email" />
<button className="h-12 px-6 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 font-medium tracking-tight ring-1 ring-white/10 transition" id="offer-cta" type="button">
                Join the First 150
              </button>
</div>
<p className="hidden mt-3 text-sm text-emerald-300" id="offer-toast">You're in the queue — we’ll confirm availability.</p>
</form>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16" id="faq">
<div className="max-w-3xl">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Quick FAQ</h3>
<div className="mt-6 space-y-3">
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 open:bg-white/7">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium tracking-tight">Is it really free for Founding Partners?</span>

<svg className="h-5 w-5 text-white/60 group-open:rotate-45 transition" fill="none" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="text-sm text-white/70 mt-3">Yes. The first 150 merchants receive lifetime platform access at no cost. Standard payment processing fees still apply through your provider.</p>
</details>
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium tracking-tight">Will it slow down my site?</span>
<svg className="h-5 w-5 text-white/60 group-open:rotate-45 transition" fill="none" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="text-sm text-white/70 mt-3">No. The widget is lightweight, defers loading, and is optimized for Core Web Vitals.</p>
</details>
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium tracking-tight">How do customer contributions work?</span>
<svg className="h-5 w-5 text-white/60 group-open:rotate-45 transition" fill="none" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="text-sm text-white/70 mt-3">Customers can optionally add a small amount at checkout. We allocate 80% directly to certified projects and 20% to platform and verification costs, with transparent monthly reporting.</p>
</details>
<details className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium tracking-tight">What platforms do you support?</span>
<svg className="h-5 w-5 text-white/60 group-open:rotate-45 transition" fill="none" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</summary>
<p className="text-sm text-white/70 mt-3">Most major commerce platforms and custom stacks via a copy‑paste snippet or API.</p>
</details>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16" id="cta-final">
<div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 to-green-600/10 ring-1 ring-emerald-400/20 p-6 sm:p-8">
<div className="grid lg:grid-cols-3 gap-6 items-center">
<div className="lg:col-span-2">
<h4 className="text-xl sm:text-2xl font-semibold tracking-tight">Secure your Founding Partner spot</h4>
<p className="text-white/70 mt-2">Limited to 150 merchants. Countdown to September 5:</p>
<div className="mt-4 grid grid-cols-4 gap-3 max-w-md">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center">
<div className="text-xl font-semibold tracking-tight" id="cd3-days">--</div>
<div className="text-[11px] text-white/60 mt-1">Days</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center">
<div className="text-xl font-semibold tracking-tight" id="cd3-hours">--</div>
<div className="text-[11px] text-white/60 mt-1">Hours</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center">
<div className="text-xl font-semibold tracking-tight" id="cd3-mins">--</div>
<div className="text-[11px] text-white/60 mt-1">Mins</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center">
<div className="text-xl font-semibold tracking-tight" id="cd3-secs">--</div>
<div className="text-[11px] text-white/60 mt-1">Secs</div>
</div>
</div>
</div>
<div>
<form>
<div className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 h-12 rounded-xl bg-white/5 ring-1 ring-white/15 focus:ring-2 focus:ring-emerald-400/60 placeholder-white/40 px-4 text-sm outline-none transition" id="final-email" placeholder="you@store.com" required type="email" />
<button className="h-12 px-6 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 text-black/90 hover:from-yellow-300 hover:to-yellow-400 font-medium tracking-tight transition" id="final-cta" type="button">
                Secure My Founding Partner Spot
              </button>
</div>
<p className="hidden mt-3 text-sm text-emerald-300" id="final-toast">Request received — we’ll confirm your spot.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 lg:px-8 pb-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/60">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/30 flex items-center justify-center">

<svg className="text-emerald-300" fill="none" height="16" style={{stroke: `currentColor`, strokeWidth: `1.5`, strokeLinecap: `round`, strokeLinejoin: `round`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11 12c2.5-2.5 7-3 11-3-1 8-6 12-12 12A7 7 0 0 1 3 14c0-6 4-11 12-12 0 4.08-.5 8.5-4 11Z"></path>
</svg>
</div>
<span>© <span id="year"></span> Puriphy. All rights reserved.</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
