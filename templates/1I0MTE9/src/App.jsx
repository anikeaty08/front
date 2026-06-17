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
      
      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      const slides = Array.from(document.querySelectorAll('.slide'));
      const total = slides.length;
      const totalSpan = document.getElementById('total');
      const counterSpan = document.getElementById('counter');
      const progressEl = document.getElementById('progress');
      const prevBtn = document.getElementById('prev');
      const nextBtn = document.getElementById('next');
      const restartBtn = document.getElementById('btn-restart');
      const helpBtn = document.getElementById('btn-help');
      const indicatorsContainer = document.getElementById('indicators');
      const indicatorsMobile = document.getElementById('indicators-mobile');
      const yearEl = document.getElementById('year');

      let index = 0; // 0-based
      totalSpan.textContent = total;
      yearEl.textContent = new Date().getFullYear();

      // Build indicators
      function buildIndicators(target) {
        target.innerHTML = '';
        for (let i = 0; i < total; i++) {
          const btn = document.createElement('button');
          btn.className =
            'h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20';
          btn.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          btn.addEventListener('click', () => goTo(i));
          target.appendChild(btn);
        }
      }
      buildIndicators(indicatorsContainer);
      buildIndicators(indicatorsMobile);

      function syncIndicators() {
        [indicatorsContainer, indicatorsMobile].forEach((wrap) => {
          Array.from(wrap.children).forEach((dot, i) => {
            dot.classList.remove('bg-white/30', 'bg-indigo-500');
            dot.classList.add('bg-white/15');
            if (i === index) {
              dot.classList.remove('bg-white/15');
              dot.classList.add('bg-indigo-500');
            } else if (Math.abs(i - index) === 1) {
              dot.classList.add('bg-white/30');
            }
          });
        });
      }

      function updateUI() {
        slides.forEach((s, i) => {
          if (i === index) {
            s.classList.remove('hidden');
            // Subtle fade/slide via Tailwind transitions
            s.style.transition = 'opacity .4s ease, transform .4s ease';
            s.style.opacity = '1';
            s.style.transform = 'translateY(0)';
          } else {
            s.style.transition = 'opacity .3s ease, transform .3s ease';
            s.style.opacity = '0';
            s.style.transform = 'translateY(6px)';
            setTimeout(() => {
              if (i !== index) s.classList.add('hidden');
            }, 250);
          }
        });
        counterSpan.textContent = index + 1;
        const pct = ((index + 1) / total) * 100;
        progressEl.style.width = pct + '%';
        prevBtn.disabled = index === 0;
        nextBtn.textContent = index === total - 1 ? 'Finish' : 'Next';
        // re-attach right arrow icon after text change
        nextBtn.innerHTML = (index === total - 1 ? 'Finish' : 'Next') + ' <i data-lucide="arrow-right" class="h-5 w-5"></i>';
        window.lucide && window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        syncIndicators();
      }

      function goTo(i) {
        if (i < 0 || i >= total) return;
        slides[index].classList.remove('hidden');
        index = i;
        updateUI();
      }

      prevBtn.addEventListener('click', () => goTo(index - 1));
      nextBtn.addEventListener('click', () => {
        if (index < total - 1) goTo(index + 1);
        else goTo(0);
      });
      restartBtn.addEventListener('click', () => goTo(0));
      helpBtn.addEventListener('click', () => {
        const msg = [
          'Navigation:',
          '• Click Next/Previous or use ← → keys',
          '• Tap dots to jump to any slide',
          '• Progress bar shows your position',
          '',
          'Pro tip: Use this as a live narrative—each slide is concise for conversation.'
        ].join('\n');
        alert(msg);
      });

      // Keyboard navigation
      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); nextBtn.click(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prevBtn.click(); }
      });

      // Initialize first render
      updateUI();

      // Chart.js: Financial Projections
      const ctx = document.getElementById('financialChart');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Q1 Y1', 'Q2 Y1', 'Q3 Y1', 'Q4 Y1', 'Q1 Y2', 'Q2 Y2', 'Q3 Y2', 'Q4 Y2', 'Q1 Y3', 'Q2 Y3', 'Q3 Y3', 'Q4 Y3'],
            datasets: [
              {
                label: 'ARR ($M)',
                data: [0.1, 0.2, 0.35, 0.55, 0.9, 1.3, 1.8, 2.3, 3.0, 4.2, 5.5, 6.5],
                borderColor: '#6366F1',
                backgroundColor: 'rgba(99,102,241,0.15)',
                tension: 0.35,
                fill: true,
                borderWidth: 2
              },
              {
                label: 'Orgs Live',
                data: [2, 4, 7, 10, 15, 22, 30, 40, 55, 70, 85, 100],
                borderColor: '#F472B6',
                backgroundColor: 'rgba(244,114,182,0.15)',
                yAxisID: 'y1',
                tension: 0.35,
                fill: true,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: { color: 'rgba(226,232,240,0.75)' },
                grid: { color: 'rgba(226,232,240,0.06)' }
              },
              y1: {
                beginAtZero: true,
                position: 'right',
                ticks: { color: 'rgba(226,232,240,0.75)' },
                grid: { drawOnChartArea: false }
              },
              x: {
                ticks: { color: 'rgba(226,232,240,0.75)', maxRotation: 0, autoSkipPadding: 16 },
                grid: { display: false }
              }
            },
            plugins: {
              legend: {
                labels: { color: 'rgba(226,232,240,0.9)', boxWidth: 12, usePointStyle: true, pointStyle: 'line' }
              },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.95)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: 'rgba(226,232,240,0.9)',
                padding: 10,
                displayColors: true
              }
            },
            elements: { point: { radius: 2, hoverRadius: 4 } }
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]"></div>
<div className="absolute -top-20 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.2),rgba(15,23,42,0.8))]"></div>
</div>

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
<div className="mx-auto max-w-6xl px-5">
<div className="flex items-center justify-between border-b border-white/10 py-4">

<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-[11px] tracking-tight font-semibold text-indigo-300">RS</span>
</div>
<div className="hidden sm:block">
<div className="text-sm text-slate-300/80">Reentry Support</div>
<div className="text-[10px] text-slate-400/70 tracking-tight">Platform Pitch</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" id="btn-restart">
<svg className="lucide lucide-rotate-ccw h-4 w-4" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
<span className="hidden sm:inline">Restart</span>
</button>
<button className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" id="btn-help">
<svg className="lucide lucide-info h-4 w-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="hidden sm:inline">Tips</span>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="mx-auto max-w-6xl px-5">

<div className="pt-6">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-400">Interactive Pitch Deck</div>
<div className="text-xs text-slate-400"><span id="counter">1</span> / <span id="total">10</span></div>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-0 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 transition-[width] duration-500 ease-out" id="progress" style={{width: '10%'}}></div>
</div>
</div>

<section className="relative mt-6" id="slides">

<article className="slide group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="1" style={{transition: 'opacity 0.4s, transform 0.4s', opacity: '1', transform: 'translateY(0px)'}}>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute right-8 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl"></div>
</div>
<div className="flex flex-col gap-5 md:gap-6">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-indigo-300 w-fit">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Launch-ready concept
                </div>
<h1 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-white tracking-tight">Pathway to Success Platform</h1>
<p className="max-w-2xl text-base sm:text-lg text-slate-300">
                  Bridging the gap from release to thriving—connecting returning citizens, providers, and employers with the tools, services, and support they need.
                </p>
<div className="flex flex-wrap items-center gap-3 pt-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition shadow-sm ring-1 ring-indigo-300/30 hover:ring-indigo-200/50" href="#">
<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle className="" cx="12" cy="12" r="10"></circle></svg>
                    Start
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 px-4 py-2.5 text-sm text-slate-200 transition ring-1 ring-white/10 hover:ring-white/20" href="#contact">
<svg className="lucide lucide-mail h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                    Get in touch
                  </a>
</div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="2" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-alert-triangle h-5 w-5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="text-sm">Problem Statement</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Reentry is fragmented and high-stakes</h2>
<p className="text-slate-300 max-w-3xl">
                  Returning citizens face systemic barriers across housing, employment, identification, healthcare, and community support—creating friction that drives avoidable recidivism and social costs.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold tracking-tight text-white">40–60%</div>
<div className="mt-1 text-sm text-slate-400">recidivism window in many jurisdictions within 3 years</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold tracking-tight text-white">70%+</div>
<div className="mt-1 text-sm text-slate-400">report difficulty securing employment within 1 year</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-3xl font-semibold tracking-tight text-white">&gt;$80B</div>
<div className="mt-1 text-sm text-slate-400">annual economic drag from justice-involvement &amp; reentry churn</div>
</div>
</div>
<div className="text-xs text-slate-500">
                  Illustrative stats from public datasets and policy research; refine with your latest regional data.
                </div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="3" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-lightbulb h-5 w-5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="text-sm">Solution Overview</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">A unified, outcomes-driven reentry platform</h2>
<p className="text-slate-300 max-w-3xl">
                  We orchestrate services, track outcomes, and align incentives—making it simple for people to access help, providers to deliver, and agencies to govern with clarity.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-indigo-300"><svg className="lucide lucide-layers h-5 w-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg><span className="text-sm">Orchestration</span></div>
<p className="mt-2 text-sm text-slate-300">Smart referrals, eligibility, and bundled care pathways across housing, ID, jobs, benefits, and health.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-indigo-300"><svg className="lucide lucide-activity h-5 w-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg><span className="text-sm">Outcomes</span></div>
<p className="mt-2 text-sm text-slate-300">Track engagement, milestone attainment, job placement, and stability with real-time dashboards.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-indigo-300"><svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg><span className="text-sm">Trust &amp; Privacy</span></div>
<p className="mt-2 text-sm text-slate-300">Consent-first data sharing, audit logs, and role-based access to protect client dignity and safety.</p>
</div>
</div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="4" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-grid h-5 w-5" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="text-sm">Platform Features</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Designed for clients, providers, and employers</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-indigo-300"><svg className="lucide lucide-user h-5 w-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span className="text-sm">For Individuals</span></div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><svg className="lucide lucide-map-pin h-4 w-4 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Personalized reentry roadmap and milestones</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-id-card h-4 w-4 mt-0.5" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg> ID restoration and benefits enrollment helpers</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-briefcase h-4 w-4 mt-0.5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Job matching, training, and résumé builder</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-home h-4 w-4 mt-0.5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> Housing search with eligibility filters</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-message-square h-4 w-4 mt-0.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Secure messaging with providers &amp; mentors</li>
</ul>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-indigo-300"><svg className="lucide lucide-building-2 h-5 w-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg><span className="text-sm">For Providers &amp; Agencies</span></div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><svg className="lucide lucide-inbox h-4 w-4 mt-0.5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg> Intake, waitlist, and smart referral management</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-workflow h-4 w-4 mt-0.5" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg> Configurable workflows and forms</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-key-round h-4 w-4 mt-0.5" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Role-based access, consent, and audit trails</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-bar-chart-3 h-4 w-4 mt-0.5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg> Outcome dashboards and reporting</li>
<li className="flex items-start gap-2"><svg className="lucide lucide-plug h-4 w-4 mt-0.5" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg> APIs and data export for grants and compliance</li>
</ul>
</div>
</div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="5" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-target h-5 w-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-sm">Market Opportunity</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Large, under-served, and measurable</h2>
<p className="text-slate-300 max-w-3xl">
                  Government, nonprofits, and employers spend billions to improve reentry outcomes. A unified platform that proves impact can unlock sustainable value across the ecosystem.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">TAM</div>
<div className="text-3xl font-semibold tracking-tight text-white">$8–12B</div>
<div className="mt-1 text-sm text-slate-400">Global reentry &amp; workforce enablement</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">SAM</div>
<div className="text-3xl font-semibold tracking-tight text-white">$2.0B</div>
<div className="mt-1 text-sm text-slate-400">U.S. correctional &amp; community reentry tech</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">SOM</div>
<div className="text-3xl font-semibold tracking-tight text-white">$200–400M</div>
<div className="mt-1 text-sm text-slate-400">Priority municipalities &amp; provider networks</div>
</div>
</div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="6" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-banknote h-5 w-5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<span className="text-sm">Business Model</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Aligned incentives and diversified revenue</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><svg className="lucide lucide-badge-dollar-sign h-5 w-5 text-indigo-300" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg><span className="text-sm text-slate-200">SaaS</span></div>
<p className="mt-2 text-sm text-slate-300">Tiered subscriptions for providers and agencies by seats, modules, and regions.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><svg className="lucide lucide-target h-5 w-5 text-indigo-300" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg><span className="text-sm text-slate-200">Outcomes</span></div>
<p className="mt-2 text-sm text-slate-300">Performance fees tied to job placement, retention, and stability metrics.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><svg className="lucide lucide-briefcase h-5 w-5 text-indigo-300" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg><span className="text-sm text-slate-200">Partnerships</span></div>
<p className="mt-2 text-sm text-slate-300">Employer &amp; credentialing partnerships, integrations, and data services.</p>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">Illustrative 3-year ramp</div>
<ul className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-300">
<li className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">Year 1: Pilot cohorts, 5–10 orgs, core modules</li>
<li className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">Year 2: Multi-city expansion, outcomes contracts</li>
<li className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">Year 3: Network effects, employer marketplace</li>
</ul>
</div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="7" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-shield h-5 w-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm">Competitive Advantage</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Why we win</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><svg className="lucide lucide-git-merge h-5 w-5 text-indigo-300" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg><span className="text-sm text-slate-200">Unified Experience</span></div>
<p className="mt-2 text-sm text-slate-300">Client-first journeys that reduce friction and improve adherence across providers.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><svg className="lucide lucide-lock h-5 w-5 text-indigo-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span className="text-sm text-slate-200">Privacy by Design</span></div>
<p className="mt-2 text-sm text-slate-300">Granular consent and transparent data use build trust with communities and agencies.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><svg className="lucide lucide-line-chart h-5 w-5 text-indigo-300" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg><span className="text-sm text-slate-200">Outcomes Engine</span></div>
<p className="mt-2 text-sm text-slate-300">Measurable impact with dashboards and exports for grants, compliance, and funding.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><svg className="lucide lucide-plug-zap h-5 w-5 text-indigo-300" data-lucide="plug-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path><path d="m2 22 3-3"></path><path d="M7.5 13.5 10 11"></path><path d="M10.5 16.5 13 14"></path><path d="m18 3-4 4h6l-4 4"></path></svg><span className="text-sm text-slate-200">Interoperability</span></div>
<p className="mt-2 text-sm text-slate-300">APIs to integrate with case management, credentialing, HRIS, and benefits systems.</p>
</div>
</div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="8" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-rocket h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="text-sm">Go-to-Market</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Land with proof, expand with outcomes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><span className="text-xs px-2 py-0.5 rounded-md bg-white/10 ring-1 ring-white/10">Phase 1</span><span className="text-sm text-slate-200">Design Partners</span></div>
<p className="mt-2 text-sm text-slate-300">Pilot with 3–5 agencies and CBOs; validate workflows and outcomes KPIs.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><span className="text-xs px-2 py-0.5 rounded-md bg-white/10 ring-1 ring-white/10">Phase 2</span><span className="text-sm text-slate-200">Regional Hubs</span></div>
<p className="mt-2 text-sm text-slate-300">Expand to multi-county networks; employer partnerships; training providers.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2"><span className="text-xs px-2 py-0.5 rounded-md bg-white/10 ring-1 ring-white/10">Phase 3</span><span className="text-sm text-slate-200">Scaled Network</span></div>
<p className="mt-2 text-sm text-slate-300">Outcomes-based contracts; marketplace for services, jobs, and credentials.</p>
</div>
</div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="9" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-bar-chart-3 h-5 w-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-sm">Financial Projections</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">3-year growth outlook</h2>
<p className="text-slate-300 max-w-3xl">
                  Conservative projections based on phased expansion and outcomes-based contracts. Update with your latest assumptions.
                </p>

<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2">
<div className="relative w-full aspect-[16/9]">
<canvas className="absolute inset-0" height="0" id="financialChart" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="text-xs text-slate-400">ARR (Y3)</div>
<div className="text-2xl font-semibold tracking-tight text-white">$6.5M</div>
</div>
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="text-xs text-slate-400">Gross Margin</div>
<div className="text-2xl font-semibold tracking-tight text-white">76%</div>
</div>
<div className="rounded-md bg-white/5 p-3 ring-1 ring-white/10">
<div className="text-xs text-slate-400">Funding Needed</div>
<div className="text-2xl font-semibold tracking-tight text-white">$2.0M</div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="slide hidden group relative overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8 md:p-10" data-slide="10" style={{transition: 'opacity 0.3s, transform 0.3s', opacity: '0', transform: 'translateY(6px)'}}>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-indigo-300">
<svg className="lucide lucide-handshake h-5 w-5" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<span className="text-sm">Closing</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Partner with us to make reentry work</h2>
<p className="text-slate-300 max-w-3xl">
                  We’re building a measurable, humane, and scalable system for successful reentry. Let’s align on a pilot, outcomes targets, and a path to scale.
                </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition shadow-sm ring-1 ring-indigo-300/30 hover:ring-indigo-200/50" href="#contact" id="scheduleBtn">
<svg className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Schedule a demo
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 px-4 py-2.5 text-sm text-slate-200 transition ring-1 ring-white/10 hover:ring-white/20" href="#">
<svg className="lucide lucide-download h-5 w-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                    Export deck
                  </a>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4" id="contact">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">Email</div>
<div className="text-sm text-slate-200">team@reentry.support</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">Website</div>
<div className="text-sm text-slate-200">www.reentry.support</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-400">HQ</div>
<div className="text-sm text-slate-200">Remote-first, U.S.</div>
</div>
</div>
</div>
</article>
</section>

<div className="mt-6 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 px-4 py-2.5 text-sm text-slate-200 transition ring-1 ring-white/10 hover:ring-white/20 disabled:opacity-40 disabled:pointer-events-none" disabled="" id="prev">
<svg className="lucide lucide-arrow-left h-5 w-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
              Previous
            </button>
<div className="hidden sm:flex items-center gap-2">

<div className="flex items-center gap-1.5" id="indicators"><button aria-label="Go to slide 1" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-indigo-500"></button><button aria-label="Go to slide 2" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15 bg-white/30"></button><button aria-label="Go to slide 3" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 4" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 5" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 6" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 7" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 8" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 9" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 10" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button></div>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition ring-1 ring-indigo-300/30 hover:ring-indigo-200/50" id="next">Next <svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>

<div className="sm:hidden mt-4">
<div className="flex items-center justify-center gap-1.5" id="indicators-mobile"><button aria-label="Go to slide 1" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-indigo-500"></button><button aria-label="Go to slide 2" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15 bg-white/30"></button><button aria-label="Go to slide 3" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 4" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 5" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 6" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 7" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 8" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 9" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button><button aria-label="Go to slide 10" className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10 transition hover:ring-white/20 bg-white/15"></button></div>
</div>

<footer className="py-10">
<div className="border-t border-white/10 pt-6 text-center text-xs text-slate-500">
              © <span id="year">2025</span> Reentry Support. All rights reserved.
            </div>
</footer>
</div>
</main>
</div>





    </>
  );
}
