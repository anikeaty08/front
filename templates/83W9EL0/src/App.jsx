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
      
      // Render Lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        // Line Chart
        const lineCtx = document.getElementById('heroLineChart');
        if (lineCtx) {
          new Chart(lineCtx, {
            type: 'line',
            data: {
              labels: Array.from({ length: 12 }, (_, i) => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]),
              datasets: [
                {
                  label: 'Projected',
                  data: [12, 14, 15, 17, 20, 23, 26, 29, 31, 34, 38, 42],
                  borderColor: '#7C3AED',
                  backgroundColor: 'rgba(124,58,237,0.15)',
                  tension: 0.35,
                  fill: true,
                  pointRadius: 0
                },
                {
                  label: 'Baseline',
                  data: [12, 12.2, 12.6, 13.1, 13.5, 14.2, 15.1, 16.2, 17.5, 18.9, 20.2, 21.4],
                  borderColor: '#94A3B8',
                  backgroundColor: 'rgba(148,163,184,0.12)',
                  borderDash: [4, 4],
                  tension: 0.35,
                  fill: false,
                  pointRadius: 0
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
              scales: {
                x: { ticks: { color: '#64748B', maxRotation: 0 }, grid: { display: false } },
                y: { ticks: { color: '#64748B' }, grid: { color: 'rgba(226,232,240,0.6)', drawBorder: false } }
              }
            }
          });
        }

        // Bar Chart
        const barCtx = document.getElementById('heroBarChart');
        if (barCtx) {
          new Chart(barCtx, {
            type: 'bar',
            data: {
              labels: ['Brand A', 'Brand B', 'Brand C', 'Brand D'],
              datasets: [
                {
                  label: 'Perception',
                  data: [68, 75, 59, 81],
                  backgroundColor: ['#7C3AED','#8B5CF6','#A78BFA','#C4B5FD'],
                  borderRadius: 8,
                  maxBarThickness: 28
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: '#64748B' }, grid: { display: false } },
                y: { ticks: { color: '#64748B' }, grid: { color: 'rgba(226,232,240,0.6)', drawBorder: false } }
              }
            }
          });
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
      

<div className="min-h-screen">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center">
<span className="text-white text-sm tracking-tight font-semibold">Rz</span>
</div>
<span className="text-slate-900 text-base tracking-tight font-semibold">Rwazi</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#">Company</a>
<a className="hover:text-slate-900 transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 px-4 h-10 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Security</span>
</button>
<a className="inline-flex items-center justify-center gap-2 px-5 h-10 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition text-sm font-medium shadow-sm" href="#demo">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Book a Demo</span>
</a>
</div>
</div>
</header>

<section className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-violet-200 blur-3xl opacity-40"></div>
<div className="absolute -bottom-32 -left-16 h-96 w-96 rounded-full bg-blue-200 blur-3xl opacity-40"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-8 md:pt-20 md:pb-14">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 backdrop-blur px-3 py-1.5 text-xs text-slate-700">
<i className="w-3.5 h-3.5 text-violet-600" data-lucide="sparkles"></i>
<span>Real-Time Consumer Data. Smarter Growth.</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
                Unlock Growth with Real‑Time Consumer Insights
              </h1>
<p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-600 max-w-2xl">
                Rwazi helps global brands collect live, on‑the‑ground data from 190+ countries so you can make faster, smarter business decisions.
              </p>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition text-base font-medium shadow-sm" href="#cta" id="demo">
<i className="w-5 h-5" data-lucide="mouse-pointer-click"></i>
<span>Book a Demo</span>
</a>
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Get a tailored walkthrough in under 30 minutes</span>
</div>
</div>

<div className="mt-10">
<p className="text-sm text-slate-500">Trusted by global leaders</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
<div className="h-10 rounded-lg border border-slate-200/70 bg-white/70 flex items-center justify-center text-slate-700 text-sm font-medium">
                    Coca‑Cola
                  </div>
<div className="h-10 rounded-lg border border-slate-200/70 bg-white/70 flex items-center justify-center text-slate-700 text-sm font-medium">
                    Visa
                  </div>
<div className="h-10 rounded-lg border border-slate-200/70 bg-white/70 flex items-center justify-center text-slate-700 text-sm font-medium">
                    Unilever
                  </div>
<div className="h-10 rounded-lg border border-slate-200/70 bg-white/70 flex items-center justify-center text-slate-700 text-sm font-medium">
                    Diageo
                  </div>
<div className="h-10 rounded-lg border border-slate-200/70 bg-white/70 flex items-center justify-center text-slate-700 text-sm font-medium">
                    Mastercard
                  </div>
<div className="h-10 rounded-lg border border-slate-200/70 bg-white/70 flex items-center justify-center text-slate-700 text-sm font-medium">
                    Nestlé
                  </div>
</div>
</div>
</div>

<div className="relative">
<div className="mx-auto w-full max-w-xl lg:max-w-none">
<div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
</div>
<div className="text-sm text-slate-500">Rwazi Dashboard</div>
<div className="flex items-center gap-2 text-slate-500">
<i className="w-4 h-4" data-lucide="search"></i>
<i className="w-4 h-4" data-lucide="settings"></i>
</div>
</div>

<div className="p-4 sm:p-6">
<div className="grid grid-cols-1 md:grid-cols-5 gap-4">

<div className="md:col-span-2 rounded-xl border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Live Data Points (Monthly)</div>
<i className="w-4 h-4 text-violet-600" data-lucide="database"></i>
</div>
<div className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                          2.4B
                        </div>
<div className="mt-2 inline-flex items-center gap-1 text-emerald-600 text-xs">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>+12% MoM</span>
</div>
</div>

<div className="md:col-span-3 rounded-xl border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Revenue Simulation</div>
<div className="text-xs text-slate-500">Last 12 months</div>
</div>
<div className="mt-3">
<div className="relative h-40 w-full">
<canvas className="absolute inset-0" id="heroLineChart"></canvas>
</div>
</div>
</div>

<div className="md:col-span-3 rounded-xl border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Global Coverage</div>
<i className="w-4 h-4 text-violet-600" data-lucide="globe"></i>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="col-span-2">
<div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 h-32 flex items-center justify-center">
<img alt="World map" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="relative z-10 flex items-center gap-2 text-slate-700 text-sm">
<i className="w-4 h-4 text-emerald-600" data-lucide="radio"></i>
<span>Live signals streaming…</span>
</div>
</div>
</div>
<div className="col-span-1">
<div className="rounded-lg border border-slate-200 p-3 h-32 flex flex-col justify-between">
<div className="text-xs text-slate-500">Markets</div>
<div className="text-xl font-semibold tracking-tight">190+</div>
<div className="text-xs text-slate-500">on-the-ground sources</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-xl border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-500">Brand Perception</div>
<i className="w-4 h-4 text-violet-600" data-lucide="bar-chart-3"></i>
</div>
<div className="mt-3">
<div className="relative h-40 w-full">
<canvas className="absolute inset-0" id="heroBarChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mx-auto mt-6 h-6 w-11/12 rounded-full bg-slate-200/60 blur"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 lg:py-20 border-t border-slate-200/70 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Turn Real‑Time Data Into Real Revenue
            </h2>
<p className="mt-3 text-lg text-slate-600">
              From predictive insights to global coverage, Rwazi powers growth for the world’s most innovative brands.
            </p>
</div>

<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
<i className="w-5 h-5 text-violet-600" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Real‑Time Data Collection</h3>
</div>
<p className="mt-3 text-slate-600">
                Access billions of data points monthly across 190+ countries.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="rss"></i>
                  Live, on‑the‑ground sources
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="map-pin"></i>
                  Granular location coverage
                </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
<i className="w-5 h-5 text-violet-600" data-lucide="line-chart"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Predictive Insights</h3>
</div>
<p className="mt-3 text-slate-600">
                Forecast consumer trends and plan with confidence.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="panel-right"></i>
                  Scenario simulations
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="sparkles"></i>
                  Anomaly detection
                </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
<i className="w-5 h-5 text-violet-600" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Faster Decisions, Higher ROI</h3>
</div>
<p className="mt-3 text-slate-600">
                Transform data into action and accelerate your revenue growth.
              </p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="target"></i>
                  Outcome‑first recommendations
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="timer"></i>
                  Time‑to‑insight in minutes
                </li>
</ul>
</div>
</div>

<div className="mt-10">
<a className="inline-flex items-center gap-2 px-6 h-12 rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition text-base font-medium shadow-sm" href="#cta">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
<span>Book a Demo</span>
</a>
<p className="mt-3 text-sm text-slate-500">No spam. A focused walkthrough tailored to your use case.</p>
</div>
</div>
</section>

<footer className="py-10 border-t border-slate-200" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">© Rwazi. All rights reserved.</p>
<div className="flex items-center gap-4 text-sm text-slate-600">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Contact</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
