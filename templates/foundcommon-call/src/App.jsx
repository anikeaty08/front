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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
      // Lucide
      if (window.lucide) {
        lucide.createIcons({ attrs: { "stroke-width": "1.5" } });
      }

      // Page-load sequenced fade-in
      const loadStages = Array.from(document.querySelectorAll('.load-stage'));
      loadStages.forEach((el, idx) => {
        if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', `${idx * 70}ms`);
        requestAnimationFrame(() => el.classList.add('in'));
      });

      // Scroll reveal
      const revealElements = document.querySelectorAll('.reveal');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
      revealElements.forEach(el => revealObserver.observe(el));

      // Back to top
      const backToTopBtn = document.getElementById('backToTopBtn');
      const setBackToTop = () => {
        if (window.scrollY > 500) {
          backToTopBtn.classList.remove('opacity-0', 'translate-y-10');
          backToTopBtn.classList.add('opacity-100', 'translate-y-0');
        } else {
          backToTopBtn.classList.add('opacity-0', 'translate-y-10');
          backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
        }
      };
      window.addEventListener('scroll', setBackToTop, { passive: true });
      setBackToTop();

      // QuickMath calculator
      const elAppointments = document.getElementById('qmAppointments');
      const elTicket = document.getElementById('qmTicket');
      const outAppointments = document.getElementById('qmAppointmentsValue');
      const outTicket = document.getElementById('qmTicketValue');
      const outClosed = document.getElementById('qmClosedJobs');
      const outRevenue = document.getElementById('qmMonthlyRevenue');

      const closeRate = 0.4;

      const fmtMoney = (n) => {
        try {
          return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        } catch {
          return '$' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      };

      const setRangeProgress = (input) => {
        const min = Number(input.min || 0);
        const max = Number(input.max || 100);
        const val = Number(input.value || 0);
        const p = ((val - min) / (max - min)) * 100;
        input.style.setProperty('--p', `${p}%`);
      };

      const recalc = () => {
        const appointments = Number(elAppointments.value);
        const ticket = Number(elTicket.value);

        const closed = Math.round(appointments * closeRate);
        const revenue = closed * ticket;

        outAppointments.textContent = String(appointments);
        outTicket.textContent = fmtMoney(ticket);
        outClosed.textContent = String(closed);
        outRevenue.textContent = fmtMoney(revenue);

        setRangeProgress(elAppointments);
        setRangeProgress(elTicket);
      };

      if (elAppointments && elTicket) {
        elAppointments.addEventListener('input', recalc);
        elTicket.addEventListener('input', recalc);
        recalc();
      }
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
      
<div className="sm:px-6 sm:py-24 lg:px-8 max-w-4xl mx-auto pt-16 px-4 pb-16 space-y-32">

<section className="flex flex-col items-center text-center space-y-8 load-stage" style={{'--d': '0ms'}}>
<img alt="Foundcommon Logo" className="h-8 sm:h-10 lg:h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e2b4e38-c7a4-4c9b-ab51-07f7536ceff3_800w.png"/>
<div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full py-1 px-3 shadow-[0_0_15px_-3px_rgba(52,211,153,0.3)] backdrop-blur-sm hover:bg-emerald-500/20 hover:shadow-[0_0_20px_-3px_rgba(52,211,153,0.4)] transition-all duration-300 cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
        Your Call Is Confirmed
      </div>
<div className="space-y-6 max-w-3xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
          You’re In. <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">Watch This Before Your Call.</span>
</h1>
<p className="text-2xl sm:text-2xl leading-relaxed text-zinc-400 max-w-2xl mx-auto">
          This 5-minute video shows you exactly how we help contractors get more booked appointments so you know what to expect when we talk.
        </p>
<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-[0_0_50px_-15px_rgba(96,165,250,0.15)] ring-1 ring-white/5 transition-all duration-500 hover:shadow-[0_0_70px_-15px_rgba(96,165,250,0.3)] hover:scale-[1.01] hover:border-zinc-700/50 group mt-8">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="wistia_responsive_wrapper" style={{height: '100%', position: 'relative', width: '100%'}}>
<div className="wistia_embed wistia_async_ur16yggloq videoFoam=true" id="wistia-ur16yggloq-1" style={{height: '100%', position: 'relative', width: '100%'}}>
<div className="wistia_swatch" style={{height: '100%', left: '0', opacity: '0', overflow: 'hidden', position: 'absolute', top: '0', transition: 'opacity 200ms', width: '100%'}}>
<img alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" src="https://fast.wistia.com/embed/medias/ur16yggloq/swatch" style={{filter: 'blur(5px)', height: '100%', objectFit: 'cover', width: '100%'}}/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="reveal load-stage" style={{'--d': '60ms'}}>
<div className="text-center space-y-2">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">QuickMath</h2>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Know your <span className="text-cyan-300">numbers</span> before we talk
        </h3>
</div>
<div className="mx-auto max-w-3xl">
<div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-b from-zinc-950/35 via-zinc-950/25 to-zinc-950/10 shadow-[0_0_70px_-28px_rgba(34,211,238,0.28)] backdrop-blur-sm">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),rgba(0,0,0,0)_60%)] opacity-70"></div>
<div className="absolute inset-0 opacity-60" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.45) 100%)'}}></div>
</div>
<div className="relative p-6 sm:p-10">
<div className="flex flex-col items-center text-center">
<div className="h-12 w-12 rounded-2xl border border-white/10 bg-zinc-950/40 flex items-center justify-center shadow-[0_0_30px_-12px_rgba(34,211,238,0.35)]">
<i className="h-6 w-6 text-cyan-300" data-lucide="bar-chart-3"></i>
</div>
<h4 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">QuickMath</h4>
<p className="mt-2 text-base sm:text-lg text-zinc-400">Know your numbers before we talk</p>
</div>
<div className="mt-8 space-y-8">

<div className="space-y-3">
<div className="flex items-center justify-between gap-4">
<label className="text-sm sm:text-base font-medium text-zinc-200" htmlFor="qmAppointments">Booked appointments per month</label>
<span className="text-xs font-medium text-zinc-500 tabular-nums" id="qmAppointmentsHint">1–100</span>
</div>
<div className="relative">
<input className="qm-range" id="qmAppointments" max="100" min="1" step="1" type="range" value="25"/>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-orange-400 tabular-nums">
<span id="qmAppointmentsValue">25</span> appointments
                  </div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between gap-4">
<label className="text-sm sm:text-base font-medium text-zinc-200" htmlFor="qmTicket">Your average job ticket</label>
<span className="text-xs font-medium text-zinc-500 tabular-nums" id="qmTicketHint">$1k–$50k</span>
</div>
<div className="relative">
<input className="qm-range" id="qmTicket" max="50000" min="1000" step="500" type="range" value="8000"/>
</div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-orange-400 tabular-nums" id="qmTicketValue">$8,000</div>
</div>
</div>
<div className="h-px bg-white/5"></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-6 sm:p-7 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)]">
<div className="flex items-center justify-between">
<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-cyan-300 tabular-nums" id="qmClosedJobs">10</div>
<div className="h-10 w-10 rounded-xl border border-white/10 bg-zinc-950/40 flex items-center justify-center">
<i className="h-5 w-5 text-cyan-300" data-lucide="check-circle-2"></i>
</div>
</div>
<div className="mt-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">Closed jobs (40% close rate)</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-950/30 p-6 sm:p-7 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.8)]">
<div className="flex items-center justify-between">
<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-cyan-300 tabular-nums" id="qmMonthlyRevenue">$80,000</div>
<div className="h-10 w-10 rounded-xl border border-white/10 bg-zinc-950/40 flex items-center justify-center">
<i className="h-5 w-5 text-cyan-300" data-lucide="dollar-sign"></i>
</div>
</div>
<div className="mt-2 text-xs font-medium tracking-widest text-zinc-500 uppercase">Monthly revenue</div>
</div>
</div>
<p className="text-xs sm:text-sm text-zinc-500 text-center">
                This is a simple estimate to help you pressure-test goals. We’ll validate the real numbers on the call.
              </p>
</div>
</div>
<div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="space-y-10 reveal load-stage" style={{'--d': '80ms'}}>
<div className="text-center space-y-2">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Your Upcoming Call</h2>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          What to <span className="text-blue-400">Expect</span>
</h3>
</div>
<div className="relative max-w-2xl mx-auto pl-6 sm:pl-8">
<div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0 origin-top"></div>
<div className="space-y-8">
<div className="relative group reveal">
<div className="absolute -left-7 sm:-left-9 top-5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
</div>
<div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:border-zinc-700/60 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<span className="inline-flex w-fit shrink-0 items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 group-hover:bg-blue-500/20 transition-colors">5 min</span>
<h4 className="text-2xl font-medium text-white tracking-tight">We Learn About You</h4>
</div>
<p className="mt-2 text-xl text-zinc-400 group-hover:text-zinc-300 transition-colors">Understanding your business, your current goals, and what strategies you’ve already tried.</p>
</div>
</div>
<div className="relative group reveal delay-100">
<div className="absolute -left-7 sm:-left-9 top-5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
</div>
<div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:border-zinc-700/60 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<span className="inline-flex w-fit shrink-0 items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 group-hover:bg-blue-500/20 transition-colors">10 min</span>
<h4 className="text-2xl font-medium text-white tracking-tight">We Show You How It Works</h4>
</div>
<p className="mt-2 text-xl text-zinc-400 group-hover:text-zinc-300 transition-colors">A behind-the-scenes look at the exact system that books appointments for our partners.</p>
</div>
</div>
<div className="relative group reveal delay-200">
<div className="absolute -left-7 sm:-left-9 top-5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
</div>
<div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:border-zinc-700/60 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<span className="inline-flex w-fit shrink-0 items-center rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20 group-hover:bg-blue-500/20 transition-colors">10 min</span>
<h4 className="text-2xl font-medium text-white tracking-tight">We Map Out a Plan</h4>
</div>
<p className="mt-2 text-xl text-zinc-400 group-hover:text-zinc-300 transition-colors">We outline exactly what we would do for you, the expected timeline, and our specific targets.</p>
</div>
</div>
<div className="relative group reveal delay-300">
<div className="absolute -left-7 sm:-left-9 top-5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-zinc-800 group-hover:border-blue-400 transition-colors duration-300 flex items-center justify-center">
<div className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
</div>
<div className="rounded-2xl border border-zinc-800/50 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 group-hover:bg-zinc-900/60 group-hover:border-zinc-700/60 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<span className="inline-flex w-fit shrink-0 items-center rounded-md bg-zinc-500/10 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-inset ring-zinc-500/20 group-hover:bg-zinc-500/20 group-hover:text-white transition-colors">5 min</span>
<h4 className="text-2xl font-medium text-white tracking-tight">Honest Next Steps</h4>
</div>
<p className="mt-2 text-xl text-zinc-400 group-hover:text-zinc-300 transition-colors">If we can help, we’ll tell you. If we can’t, we’ll tell you that too and point you in the right direction.</p>
</div>
</div>
</div>
</div>
<p className="text-center text-xl text-zinc-500 pt-4 reveal delay-400 hover:text-zinc-400 transition-colors">No pressure. No 90-minute pitch. Just a real conversation.</p>
</section>

<section className="reveal load-stage" style={{'--d': '140ms'}}>
<div className="relative rounded-3xl border border-emerald-400/50 bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-zinc-950/10 p-8 sm:p-12 text-center shadow-[0_0_70px_-18px_rgba(52,211,153,0.30)] overflow-hidden group backdrop-blur-sm transition-all duration-500 hover:border-emerald-300/60 hover:shadow-[0_0_100px_-20px_rgba(52,211,153,0.42)]">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-90"></div>
<div className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-2xl pointer-events-none" style="animation: rotateGlow 16s linear infinite;
             background:
               conic-gradient(from 140deg,
                 rgba(52,211,153,0.00),
                 rgba(52,211,153,0.26),
                 rgba(59,130,246,0.18),
                 rgba(16,185,129,0.24),
                 rgba(255,255,255,0.10),
                 rgba(52,211,153,0.00));">
</div>
<div className="absolute -inset-y-10 -inset-x-16 opacity-70 pointer-events-none" style="animation: sweep 5.2s cubic-bezier(0.16, 1, 0.3, 1) infinite;
             background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);">
</div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute left-12 top-10 h-2 w-2 rounded-full bg-emerald-300/70 blur-[0.5px] animate-float"></div>
<div className="absolute right-16 top-14 h-2.5 w-2.5 rounded-full bg-blue-300/60 blur-[0.5px] animate-float-delayed"></div>
<div className="absolute left-20 bottom-14 h-2.5 w-2.5 rounded-full bg-emerald-200/50 blur-[0.5px] animate-float-delayed"></div>
<div className="absolute right-24 bottom-20 h-2 w-2 rounded-full bg-emerald-300/60 blur-[0.5px] animate-float"></div>
</div>
<div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center space-y-6">
<div className="p-3 bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 rounded-2xl border border-emerald-400/30 animate-float shadow-[0_0_30px_rgba(52,211,153,0.26)] ring-1 ring-white/10">
<i className="h-7 w-7 text-emerald-300" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors drop-shadow-[0_0_18px_rgba(52,211,153,0.18)]">
            Why We Offer This Guarantee
          </h3>
<p className="text-2xl text-zinc-200/90 max-w-2xl leading-relaxed">
            We know you’ve been burned before. That’s why we put our money on the line: We’ll confirm the exact terms on the call.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl mt-6">
<div className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-zinc-950/35 to-zinc-950/25 border border-emerald-400/25 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_18px_45px_-24px_rgba(52,211,153,0.45)]">
<i className="h-5 w-5 text-emerald-300" data-lucide="badge-check"></i>
<span className="text-xl font-medium text-zinc-100">Zero Risk</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-zinc-950/35 to-zinc-950/25 border border-emerald-400/25 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_18px_45px_-24px_rgba(52,211,153,0.45)]">
<i className="h-5 w-5 text-emerald-300" data-lucide="file-text"></i>
<span className="text-xl font-medium text-zinc-100">No BS Contracts</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-zinc-950/35 to-zinc-950/25 border border-emerald-400/25 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_18px_45px_-24px_rgba(52,211,153,0.45)]">
<i className="h-5 w-5 text-emerald-300" data-lucide="trending-up"></i>
<span className="text-xl font-medium text-zinc-100">Results Based</span>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-10 max-w-3xl mx-auto load-stage" style={{'--d': '200ms'}}>
<div className="text-center space-y-2 reveal">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Common Questions</h2>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          What You Might Be <span className="text-blue-400">Wondering</span>
</h3>
</div>
<div className="space-y-4">
<details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/60 hover:-translate-y-0.5 hover:shadow-lg reveal delay-100">
<summary className="flex cursor-pointer focus:outline-none select-none text-2xl font-medium text-white p-6 items-center justify-between">
<span className="transition-colors group-hover:text-blue-100">I’ve tried agencies before. Why would this be different?</span>
<i className="icon-plus h-6 w-6 text-zinc-500 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110" data-lucide="plus-circle"></i>
</summary>
<div className="faq-content">
<div className="px-6 pb-6 text-xl text-zinc-400 leading-relaxed">
              Those agencies gave you leads to chase. We give you booked appointments. The homeowner picks a time, confirms, and shows up at your door. You're not calling anyone. You're not texting anyone. You're closing jobs that land on your calendar automatically.
            </div>
</div>
</details>
<details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/60 hover:-translate-y-0.5 hover:shadow-lg reveal delay-200">
<summary className="flex cursor-pointer items-center justify-between p-6 text-2xl font-medium text-white focus:outline-none select-none">
<span className="transition-colors group-hover:text-blue-100">What if the appointments don’t show up?</span>
<i className="icon-plus h-6 w-6 text-zinc-500 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110" data-lucide="plus-circle"></i>
</summary>
<div className="faq-content">
<div className="px-6 pb-6 text-xl text-zinc-400 leading-relaxed">
              We hit them with 5+ reminders before the appointment. Text, email, more texts. 85%+ show rate. Compare that to the "leads" your last agency gave you, how many of those even answered the phone?
            </div>
</div>
</details>
<details className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/60 hover:-translate-y-0.5 hover:shadow-lg reveal delay-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-2xl font-medium text-white focus:outline-none select-none">
<span className="transition-colors group-hover:text-blue-100">How much does this cost?</span>
<i className="icon-plus h-6 w-6 text-zinc-500 transition-all duration-300 group-hover:text-blue-400 group-hover:scale-110" data-lucide="plus-circle"></i>
</summary>
<div className="faq-content">
<div className="px-6 pb-6 text-xl text-zinc-400 leading-relaxed">
              We offer several different services depending on what you need, so we'll build you a custom quote on the call. What I can tell you: one closed job typically pays for months of the service. Most contractors are doing 10x+ their investment. And if we don't deliver? 90-day money back. We eat the loss, not you.
            </div>
</div>
</details>
</div>
</section>

<section className="reveal space-y-10 load-stage" style={{'--d': '260ms'}}>
<div className="text-center space-y-2">
<h2 className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">You're In Good Hands</h2>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          Others Who Were <span className="text-blue-400">Skeptical Too</span>
</h3>
</div>
<div className="max-w-3xl mx-auto relative transition-transform duration-500 hover:scale-[1.02]">
<div className="aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden relative group hover:border-zinc-600 transition-colors duration-500 hover:shadow-[0_20px_50px_-15px_rgba(96,165,250,0.2)]">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 h-full w-full" frameborder="0" src="https://www.youtube-nocookie.com/embed/BPh5V_RLjbY?rel=0&amp;modestbranding=1&amp;playsinline=1" title="Testimonial video"></iframe>
</div>
<div className="mt-6 aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden relative group hover:border-zinc-600 transition-colors duration-500 hover:shadow-[0_20px_50px_-15px_rgba(96,165,250,0.2)]">
<iframe allowfullscreen="" className="absolute inset-0 h-full w-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/df0246e4e02846f9b5949fa4d47fc0b4?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true" title="Loom video" webkitallowfullscreen=""></iframe>
</div>
<div className="mt-6">
<div className="flex flex-col gap-4">
<img alt="Screenshot 1" className="w-full h-auto object-cover bg-center rounded-2xl border border-zinc-900/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb1fc864-8695-4ffd-b637-bb09b6dbf488_800w.jpg"/>
<img alt="Screenshot 2" className="w-full h-auto object-cover bg-center rounded-2xl border border-zinc-900/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/935d18f6-6f10-403b-b8c0-0d155a94170e_800w.jpg"/>
<img alt="Screenshot 3" className="w-full h-auto object-cover bg-center rounded-2xl border border-zinc-900/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04e88f7e-9287-4a79-81a2-a25bd6923685_800w.png"/>
<img alt="Screenshot 4" className="w-full h-auto object-cover bg-center rounded-2xl border border-zinc-900/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a806f0d7-edd5-4c6b-9b34-5e4f2ef6584a_800w.png"/>
</div>
</div>
<p className="group-hover:text-zinc-300 transition-colors text-xl text-zinc-400 text-center mt-6"></p>
</div>
</section>

<section className="pb-20 load-stage" style={{'--d': '320ms'}}>
<div className="max-w-2xl mx-auto">
<div className="relative rounded-3xl border border-emerald-500/40 bg-emerald-500/5 overflow-hidden backdrop-blur-sm shadow-[0_0_55px_-16px_rgba(52,211,153,0.22)] transition-all duration-500 hover:shadow-[0_0_85px_-18px_rgba(52,211,153,0.3)] hover:border-emerald-500/60">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute left-1/2 top-1/2 h-[140%] w-[140%] rounded-full opacity-80 blur-2xl" style="animation: rotateGlow 14s linear infinite;
                 background:
                   conic-gradient(from 90deg,
                     rgba(52,211,153,0.00),
                     rgba(52,211,153,0.22),
                     rgba(59,130,246,0.18),
                     rgba(16,185,129,0.20),
                     rgba(244,63,94,0.08),
                     rgba(52,211,153,0.00);">
</div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),rgba(0,0,0,0)_55%)] opacity-60"></div>
<div className="absolute inset-0 opacity-70" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0.55) 100%)'}}></div>
<div className="absolute -inset-y-8 -inset-x-16 opacity-70" style="animation: sweep 5.5s cubic-bezier(0.16, 1, 0.3, 1) infinite;
                 background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);">
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-80">
<div className="absolute left-10 top-10 h-2 w-2 rounded-full bg-emerald-400/70 blur-[0.5px] animate-float"></div>
<div className="absolute right-14 top-14 h-2.5 w-2.5 rounded-full bg-blue-400/60 blur-[0.5px] animate-float-delayed"></div>
<div className="absolute left-20 bottom-16 h-2.5 w-2.5 rounded-full bg-rose-400/40 blur-[0.5px] animate-float-delayed"></div>
<div className="absolute right-24 bottom-20 h-2 w-2 rounded-full bg-emerald-300/50 blur-[0.5px] animate-float"></div>
</div>
<div className="relative z-10 p-8 sm:p-10 text-center">
<div className="mx-auto w-fit" style={{animation: 'popIn 900ms cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '260ms'}}>
<div className="h-16 w-16 rounded-2xl bg-emerald-500/12 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shadow-[0_0_24px_rgba(52,211,153,0.22)]">
<i className="h-7 w-7" data-lucide="party-popper"></i>
</div>
</div>
<h3 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-white" style={{animation: 'popIn 900ms cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '360ms'}}>
              Mission Complete!
            </h3>
<p className="mt-3 text-2xl text-zinc-200/90 leading-relaxed max-w-xl mx-auto" style={{animation: 'popIn 900ms cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '460ms'}}>
              You’re all set! Check your email for your call details and calendar invite.
            </p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3" style={{animation: 'popIn 900ms cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '560ms'}}>
<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/35 px-4 py-3 backdrop-blur-sm">
<i className="h-5 w-5 text-emerald-300" data-lucide="mail"></i>
<span className="text-xl font-medium text-zinc-100">Email sent</span>
<span className="text-xs font-medium text-zinc-400">within a few minutes</span>
</div>
<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950/35 px-4 py-3 backdrop-blur-sm">
<i className="h-5 w-5 text-blue-300" data-lucide="calendar-check"></i>
<span className="text-xl font-medium text-zinc-100">Invite attached</span>
<span className="text-xs font-medium text-zinc-400">save it now</span>
</div>
</div>
<div className="mt-7 flex items-center justify-center gap-2 text-xs font-medium text-emerald-200/80" style={{animation: 'popIn 900ms cubic-bezier(0.16, 1, 0.3, 1) both', animationDelay: '660ms'}}>
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-60"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
</span>
                Next: watch the video above if you haven’t yet
              </span>
</div>
</div>
<div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none"></div>
</div>
</div>
</section>
</div>

<a aria-label="Back to top" className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-zinc-900 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.15)] transition-all duration-300 hover:scale-110 hover:bg-zinc-800 z-40 group opacity-0 translate-y-10" href="#top" id="backToTopBtn">
<i className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" data-lucide="arrow-up"></i>
</a>


    </>
  );
}
