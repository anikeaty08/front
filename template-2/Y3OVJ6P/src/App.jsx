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

    // Icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) window.lucide.createIcons();
    });

    // Ratings search filter
    const ratingsSearch = document.getElementById('ratingsSearch');
    if (ratingsSearch) {
      ratingsSearch.addEventListener('input', () => {
        const query = ratingsSearch.value.toLowerCase();
        document.querySelectorAll('#ratings .divide-y > div').forEach(row => {
          const text = row.innerText.toLowerCase();
          row.style.display = text.includes(query) ? '' : 'none';
        });
      });
    }

    // Hero Chart
    function createHeroChart() {
      const ctx = document.getElementById('heroChart');
      if (!ctx) return;
      const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
      const base = [1.32, 1.38, 1.42, 1.47];
      const bull = [1.36, 1.43, 1.49, 1.56];
      const bear = [1.27, 1.31, 1.35, 1.39];
      const bandUpper = [1.38, 1.46, 1.51, 1.58];
      const bandLower = [1.26, 1.30, 1.34, 1.38];
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            // Confidence band fill using two datasets approach
            {
              label: 'Band Upper',
              data: bandUpper,
              borderColor: 'rgba(99,102,241,0)', // transparent line
              pointRadius: 0,
              fill: '+1',
              backgroundColor: 'rgba(99,102,241,0.10)',
              tension: 0.35
            },
            {
              label: 'Band Lower',
              data: bandLower,
              borderColor: 'rgba(99,102,241,0)',
              pointRadius: 0,
              fill: false,
              backgroundColor: 'rgba(99,102,241,0.10)',
              tension: 0.35
            },
            {
              label: 'Base',
              data: base,
              borderColor: 'rgba(99,102,241,1)',
              backgroundColor: 'rgba(99,102,241,1)',
              pointRadius: 0,
              tension: 0.35
            },
            {
              label: 'Bull',
              data: bull,
              borderColor: 'rgba(16,185,129,0.9)',
              backgroundColor: 'rgba(16,185,129,0.9)',
              pointRadius: 0,
              tension: 0.35,
              hidden: true
            },
            {
              label: 'Bear',
              data: bear,
              borderColor: 'rgba(244,63,94,0.9)',
              backgroundColor: 'rgba(244,63,94,0.9)',
              pointRadius: 0,
              tension: 0.35,
              hidden: true
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(24,24,27,0.95)',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              titleColor: '#e5e7eb',
              bodyColor: '#cbd5e1',
              padding: 10
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(209,213,219,0.9)', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(209,213,219,0.9)', font: { size: 11 } }
            }
          }
        }
      });

      // Scenario buttons
      document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const scenario = btn.getAttribute('data-hero-scenario');
          document.querySelectorAll('.scenario-btn').forEach(b => b.setAttribute('aria-pressed', 'false'));
          btn.setAttribute('aria-pressed', 'true');

          // Dataset indices: 0 upper, 1 lower, 2 base, 3 bull, 4 bear
          chart.data.datasets[2].hidden = !(scenario === 'base');
          chart.data.datasets[3].hidden = !(scenario === 'bull');
          chart.data.datasets[4].hidden = !(scenario === 'bear');

          // Always show band
          chart.data.datasets[0].hidden = false;
          chart.data.datasets[1].hidden = false;

          chart.update();
        });
      });
    }

    // App Chart
    function createAppChart() {
      const ctx = document.getElementById('appChart');
      if (!ctx) return;
      const labels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'];
      const base = [1.32, 1.38, 1.42, 1.47, 1.50, 1.54];
      const bull = [1.36, 1.43, 1.49, 1.56, 1.61, 1.66];
      const bear = [1.27, 1.31, 1.35, 1.39, 1.41, 1.43];
      const bandUpper = [1.38, 1.46, 1.51, 1.58, 1.63, 1.68];
      const bandLower = [1.26, 1.30, 1.34, 1.38, 1.40, 1.42];

      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: 'Band Upper', data: bandUpper, borderColor: 'rgba(99,102,241,0)', pointRadius: 0, fill: '+1', backgroundColor: 'rgba(99,102,241,0.10)', tension: 0.35 },
            { label: 'Band Lower', data: bandLower, borderColor: 'rgba(99,102,241,0)', pointRadius: 0, fill: false, backgroundColor: 'rgba(99,102,241,0.10)', tension: 0.35 },
            { label: 'Base', data: base, borderColor: 'rgba(99,102,241,1)', backgroundColor: 'rgba'}]}})}
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
      

<div className="w-full border-b border-white/10 bg-zinc-950/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<i className="h-4 w-4" data-lucide="folder-search" strokeWidth="1.5"></i>
<span>Content placeholders active — connect your product docs to auto-fill copy and page details.</span>
</div>
<a className="inline-flex items-center gap-1 text-xs text-indigo-300 hover:text-indigo-200 transition-colors" href="#docs">
<span>Open Docs</span>
<i className="h-3.5 w-3.5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">
<a className="group inline-flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 ring-1 ring-white/10 group-hover:ring-white/20 transition-colors">
<span className="text-sm font-semibold tracking-tight text-zinc-100">PS</span>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-200">PredictStreet</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#product">Product</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#ratings">Ratings</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#estimates">Estimates</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#how">How it works</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#docs">Docs</a>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors" href="#app">App</a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-transparent px-3 py-1.5 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-900 hover:ring-white/20 transition">
<i className="h-4 w-4" data-lucide="log-in" strokeWidth="1.5"></i>
<span>Sign in</span>
</button>
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500/10 px-3 py-1.5 text-sm text-indigo-300 ring-1 ring-indigo-500/30 hover:bg-indigo-500/20 hover:text-indigo-200 transition" href="#app">
<i className="h-4 w-4" data-lucide="rocket" strokeWidth="1.5"></i>
<span>Launch App</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute -bottom-32 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_60%)]"></div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 md:py-20 lg:py-24">
<div className="flex flex-col justify-center">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/60 px-2.5 py-1 text-xs text-zinc-300">
<i className="h-3.5 w-3.5 text-indigo-300" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>PredictStreet — The AI Street for Earnings & Ratings</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-100">
            Turn a swarm of specialist AI analysts into fast, explainable earnings estimates and clear “AI Analyst Ratings.”
          </h1>
<p className="mt-4 text-base md:text-lg text-zinc-400">
            Get the signal sooner — with confidence bands, scenarios, and the why behind every call.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition ring-1 ring-white/10" href="#app">
<i className="h-4 w-4" data-lucide="play" strokeWidth="1.5"></i>
<span>Try Interactive Demo</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-transparent px-4 py-2 text-sm text-zinc-300 hover:text-zinc-100 transition ring-1 ring-white/10 hover:bg-zinc-900" href="#how">
<i className="h-4 w-4" data-lucide="wand-2" strokeWidth="1.5"></i>
<span>See How it Works</span>
</a>
</div>
<div className="mt-6 text-xs text-zinc-500">
            [Placeholder from documents: add compliance disclaimer and intended audience]
          </div>
</div>

<div className="rounded-xl border border-white/10 bg-zinc-900/50 p-5 shadow-2xl ring-1 ring-black/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-zinc-800 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-semibold text-zinc-200 tracking-tight">AAPL</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">AI Analyst Rating</div>
<div className="text-xs text-zinc-400">Updated 2m ago</div>
</div>
</div>
<div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1">
<i className="h-4 w-4 text-emerald-300" data-lucide="trending-up" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-emerald-300">Strong Buy</span>
</div>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-3">
<div className="md:col-span-2 rounded-lg border border-white/10 bg-zinc-900/60 p-3">
<h3 className="text-sm font-medium text-zinc-200 tracking-tight">EPS Estimate with Confidence Bands</h3>
<p className="mt-1 text-xs text-zinc-400">Next 4 quarters, scenario-aware</p>
<div className="mt-3 rounded-md bg-zinc-950/50 p-2 ring-1 ring-white/5">
<div className="relative">
<div className="aspect-[16/9] w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div>
<div className="relative">
<div className="rounded-md border border-white/5 bg-zinc-950/60 p-1">
<div>
<canvas id="heroChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-zinc-400">Scenarios</div>
<div className="inline-flex rounded-md border border-white/10 bg-zinc-950/50 p-1">
<button aria-pressed="true" className="scenario-btn inline-flex items-center gap-1 rounded [--state-bg:theme(colors.indigo.500/0.15)] px-2 py-1 text-xs text-zinc-300 hover:text-zinc-100 hover:bg-white/5 aria-pressed:bg-[color:var(--state-bg)] aria-pressed:text-zinc-100" data-hero-scenario="base">
<i className="h-3.5 w-3.5 text-indigo-300" data-lucide="circle-dot" strokeWidth="1.5"></i>
                    Base
                  </button>
<button aria-pressed="false" className="scenario-btn inline-flex items-center gap-1 rounded [--state-bg:theme(colors.emerald.500/0.12)] px-2 py-1 text-xs text-zinc-300 hover:text-zinc-100 hover:bg-white/5" data-hero-scenario="bull">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
                    Bull
                  </button>
<button aria-pressed="false" className="scenario-btn inline-flex items-center gap-1 rounded [--state-bg:theme(colors.rose.500/0.12)] px-2 py-1 text-xs text-zinc-300 hover:text-zinc-100 hover:bg-white/5" data-hero-scenario="bear">
<i className="h-3.5 w-3.5 text-rose-300" data-lucide="arrow-down-right" strokeWidth="1.5"></i>
                    Bear
                  </button>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-3">
<h3 className="text-sm font-medium text-zinc-200 tracking-tight">Why this call</h3>
<ul className="mt-2 space-y-2 text-xs text-zinc-300">
<li className="flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>[Placeholder from documents: driver #1 — e.g., channel checks, demand signals]</span>
</li>
<li className="flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>[Placeholder from documents: driver #2 — e.g., margin dynamics, cost cadence]</span>
</li>
<li className="flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span>[Placeholder from documents: driver #3 — e.g., guidance setup vs. consensus]</span>
</li>
</ul>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="rounded-md border border-white/10 bg-zinc-950/40 p-2">
<div className="text-[10px] uppercase tracking-wide text-zinc-400">Surprise prob.</div>
<div className="mt-1 text-sm font-medium text-zinc-100">64%</div>
</div>
<div className="rounded-md border border-white/10 bg-zinc-950/40 p-2">
<div className="text-[10px] uppercase tracking-wide text-zinc-400">Confidence</div>
<div className="mt-1 text-sm font-medium text-zinc-100">High</div>
</div>
</div>
<div className="mt-3 text-[11px] text-zinc-500">
                [Placeholder from documents: add methodology + coverage notes]
              </div>
</div>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6">
<div className="flex items-center justify-center rounded-md border border-white/10 bg-zinc-900/40 px-3 py-2">
<span className="text-xs font-medium tracking-tight text-zinc-400">ALPHA</span>
</div>
<div className="flex items-center justify-center rounded-md border border-white/10 bg-zinc-900/40 px-3 py-2">
<span className="text-xs font-medium tracking-tight text-zinc-400">QUANT</span>
</div>
<div className="flex items-center justify-center rounded-md border border-white/10 bg-zinc-900/40 px-3 py-2">
<span className="text-xs font-medium tracking-tight text-zinc-400">RESEARCH</span>
</div>
<div className="flex items-center justify-center rounded-md border border-white/10 bg-zinc-900/40 px-3 py-2">
<span className="text-xs font-medium tracking-tight text-zinc-400">PM LABS</span>
</div>
<div className="flex items-center justify-center rounded-md border border-white/10 bg-zinc-900/40 px-3 py-2">
<span className="text-xs font-medium tracking-tight text-zinc-400">DELTA</span>
</div>
<div className="flex items-center justify-center rounded-md border border-white/10 bg-zinc-900/40 px-3 py-2">
<span className="text-xs font-medium tracking-tight text-zinc-400">ARC</span>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="product">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">From noisy data to clear calls</h2>
<p className="mt-3 text-zinc-400">
          [Placeholder from documents: product narrative — data sources, analyst swarm orchestration, consensus modeling, human-in-the-loop.]
        </p>
</div>
<div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-300" data-lucide="network" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Swarm Estimates</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Blend specialist agents to project EPS/Rev with uncertainty.</p>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-300" data-lucide="badge-check" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">AI Analyst Ratings</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Clear Buy/Sell with conviction score and time horizon.</p>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-cyan-300" data-lucide="activity" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Confidence Bands</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Probabilistic bands with scenario overlays.</p>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-violet-300" data-lucide="message-square-text" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Explainability</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Driver-level rationale, sources, and sensitivity.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="ratings">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-100">AI Analyst Ratings</h2>
<p className="mt-2 text-zinc-400">[Placeholder from documents: rating scales, update cadence, coverage.]</p>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-zinc-500" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-64 rounded-md border border-white/10 bg-zinc-900/60 py-2 pl-9 pr-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30" id="ratingsSearch" placeholder="Filter by symbol or name" />
</div>
</div>
</div>
<div className="mt-6 overflow-hidden rounded-xl border border-white/10">
<div className="divide-y divide-white/10">

<div className="grid grid-cols-12 items-center gap-3 bg-zinc-900/40 px-4 py-3">
<div className="col-span-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-zinc-800 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-zinc-100">AAPL</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Apple Inc.</div>
<div className="text-xs text-zinc-500">Updated 2h ago</div>
</div>
</div>
<div className="col-span-3">
<div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1">
<i className="h-4 w-4 text-emerald-300" data-lucide="trending-up" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-emerald-300">Strong Buy</span>
</div>
</div>
<div className="col-span-3">
<div className="h-2 w-40 overflow-hidden rounded bg-zinc-800 ring-1 ring-white/10">
<div className="h-full w-3/4 bg-emerald-500/60"></div>
</div>
<div className="mt-1 text-xs text-zinc-400">Conviction: 75</div>
</div>
<div className="col-span-3 flex items-center justify-end gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-zinc-950/40 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 transition" href="#app">
<i className="h-3.5 w-3.5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
                Open
              </a>
</div>
</div>
<div className="grid grid-cols-12 items-center gap-3 bg-zinc-950/40 px-4 py-3">
<div className="col-span-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-zinc-800 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-zinc-100">MSFT</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Microsoft</div>
<div className="text-xs text-zinc-500">Updated 30m ago</div>
</div>
</div>
<div className="col-span-3">
<div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1">
<i className="h-4 w-4 text-emerald-300" data-lucide="trending-up" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-emerald-300">Buy</span>
</div>
</div>
<div className="col-span-3">
<div className="h-2 w-40 overflow-hidden rounded bg-zinc-800 ring-1 ring-white/10">
<div className="h-full w-2/3 bg-emerald-500/60"></div>
</div>
<div className="mt-1 text-xs text-zinc-400">Conviction: 66</div>
</div>
<div className="col-span-3 flex items-center justify-end gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-zinc-950/40 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 transition" href="#app">
<i className="h-3.5 w-3.5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
                Open
              </a>
</div>
</div>
<div className="grid grid-cols-12 items-center gap-3 bg-zinc-900/40 px-4 py-3">
<div className="col-span-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-zinc-800 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-zinc-100">TSLA</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Tesla</div>
<div className="text-xs text-zinc-500">Updated 5m ago</div>
</div>
</div>
<div className="col-span-3">
<div className="inline-flex items-center gap-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1">
<i className="h-4 w-4 text-amber-300" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-amber-300">Hold</span>
</div>
</div>
<div className="col-span-3">
<div className="h-2 w-40 overflow-hidden rounded bg-zinc-800 ring-1 ring-white/10">
<div className="h-full w-1/2 bg-amber-500/60"></div>
</div>
<div className="mt-1 text-xs text-zinc-400">Conviction: 50</div>
</div>
<div className="col-span-3 flex items-center justify-end gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-zinc-950/40 px-2 py-1 text-xs text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 transition" href="#app">
<i className="h-3.5 w-3.5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
                Open
              </a>
</div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-zinc-500">[Placeholder from documents: methodology for ratings, e.g., horizon, features used, recalibration cadence.]</div>
</div>
</section>

<section className="border-t border-white/10" id="estimates">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">Earnings estimates with scenarios</h2>
<p className="mt-2 text-zinc-400">[Placeholder from documents: coverage, cadence, inputs, scenario priors.]</p>
</div>
<div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-300" data-lucide="layers" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Base case</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Balanced macro and steady execution.</p>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-300" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Bull</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Upside demand and mix tailwinds.</p>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-rose-300" data-lucide="arrow-down-right" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Bear</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Macro drag and cost friction.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">How it works</h2>
<p className="mt-2 text-zinc-400">[Placeholder from documents: system diagram and workflow.]</p>
</div>
<div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-cyan-300" data-lucide="database" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Ingest</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Filings, transcripts, alt data, pricing, expert checks.</p>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-300" data-lucide="brain" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Synthesize</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Specialist agents debate, calibrate, and consensus is formed.</p>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-300" data-lucide="shield-check" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-zinc-100 tracking-tight">Explain</h3>
</div>
<p className="mt-2 text-sm text-zinc-400">Calls justified with drivers, confidence, and scenarios.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">Pricing</h2>
<p className="mt-2 text-zinc-400">[Placeholder from documents: plans, seat limits, fair use.]</p>
</div>
<div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Starter</h3>
<p className="mt-1 text-sm text-zinc-400">For individuals validating the signal.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">$0</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>5 tickers</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>Daily ratings</li>
</ul>
<button className="mt-5 w-full rounded-md bg-zinc-100 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition ring-1 ring-white/10">Get started</button>
</div>
<div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-6 ring-1 ring-indigo-500/20">
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Pro</h3>
<p className="mt-1 text-sm text-zinc-300">For active investors.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">$79<span className="text-sm text-zinc-400">/mo</span></div>
<ul className="mt-4 space-y-2 text-sm text-zinc-200">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>Unlimited ratings</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>Scenario estimates</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>Explainability</li>
</ul>
<button className="mt-5 w-full rounded-md bg-zinc-100 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition ring-1 ring-white/10">Upgrade</button>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
<h3 className="text-lg font-medium tracking-tight text-zinc-100">Team</h3>
<p className="mt-1 text-sm text-zinc-400">For research desks.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100">Custom</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>Seats & SSO</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>API access</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>Coverage SLA</li>
</ul>
<button className="mt-5 w-full rounded-md border border-white/10 bg-zinc-950 py-2 text-sm text-zinc-200 hover:bg-zinc-900 transition">Contact sales</button>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="docs">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">Docs & methodology</h2>
<p className="mt-2 text-zinc-400">Attach your internal briefs to populate this site: product narrative, rating definitions, disclosures, and brand guidelines.</p>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-indigo-300" data-lucide="file-text" strokeWidth="1.5"></i>Brand & voice [Placeholder from documents]</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-indigo-300" data-lucide="file-text" strokeWidth="1.5"></i>Rating scale & horizon [Placeholder from documents]</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-indigo-300" data-lucide="file-text" strokeWidth="1.5"></i>Estimate inputs & scenario priors [Placeholder from documents]</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-indigo-300" data-lucide="file-text" strokeWidth="1.5"></i>Compliance & disclosures [Placeholder from documents]</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-zinc-300" data-lucide="upload" strokeWidth="1.5"></i>
<h3 className="text-base font-medium tracking-tight text-zinc-100">Connect documents</h3>
</div>
<span className="text-xs text-zinc-400">Private & secure</span>
</div>
<div className="mt-4 rounded-md border border-white/10 bg-zinc-950/60 p-4 text-sm text-zinc-400">
            Drag & drop your briefs here or click to select.
          </div>
<button className="mt-4 inline-flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition ring-1 ring-white/10">
<i className="h-4 w-4" data-lucide="link" strokeWidth="1.5"></i>
            Link from drive
          </button>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="app">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">Interactive App</h2>
<p className="mt-1 text-zinc-400">Explore ratings, estimates, scenarios, and rationale.</p>
</div>
<div className="inline-flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-300 hover:bg-zinc-900 transition">
<i className="h-4 w-4" data-lucide="settings-2" strokeWidth="1.5"></i>
            Settings
          </button>
<button className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-200 transition ring-1 ring-white/10">
<i className="h-4 w-4" data-lucide="download" strokeWidth="1.5"></i>
            Export
          </button>
</div>
</div>
<div className="grid grid-cols-1 gap-5 lg:grid-cols-4">

<aside className="lg:col-span-1 rounded-xl border border-white/10 bg-zinc-900/60 p-4">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-zinc-500" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full rounded-md border border-white/10 bg-zinc-950/60 py-2 pl-9 pr-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30" id="watchSearch" placeholder="Search tickers" />
</div>
<div className="mt-4 divide-y divide-white/10">
<button className="w-full text-left px-3 py-2 hover:bg-white/5 transition flex items-center justify-between" data-ticker="AAPL">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-zinc-800 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight text-zinc-100">AAPL</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Apple</div>
<div className="text-[11px] text-zinc-500">Strong Buy</div>
</div>
</div>
<span className="text-[11px] text-emerald-300">+1.2%</span>
</button>
<button className="w-full text-left px-3 py-2 hover:bg-white/5 transition flex items-center justify-between" data-ticker="MSFT">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-zinc-800 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight text-zinc-100">MSFT</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Microsoft</div>
<div className="text-[11px] text-zinc-500">Buy</div>
</div>
</div>
<span className="text-[11px] text-emerald-300">+0.7%</span>
</button>
<button className="w-full text-left px-3 py-2 hover:bg-white/5 transition flex items-center justify-between" data-ticker="TSLA">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-zinc-800 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight text-zinc-100">TSLA</span>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Tesla</div>
<div className="text-[11px] text-zinc-500">Hold</div>
</div>
</div>
<span className="text-[11px] text-rose-300">-0.4%</span>
</button>
</div>
</aside>

<main className="lg:col-span-3 grid grid-cols-1 gap-5">
<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex flex-wrap items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-zinc-800 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-zinc-100" id="appSymbol">AAPL</span>
</div>
<div>
<div className="text-lg font-medium tracking-tight text-zinc-100" id="appCompany">Apple Inc.</div>
<div className="text-xs text-zinc-500" id="appUpdated">Updated just now</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1" id="appRatingPill">
<i className="h-4 w-4 text-emerald-300" data-lucide="trending-up" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-emerald-300" id="appRating">Strong Buy</span>
</div>
<div className="rounded-md border border-white/10 bg-zinc-950/40 px-2 py-1">
<div className="text-[11px] text-zinc-400">Conviction</div>
<div className="text-sm font-medium text-zinc-100" id="appConviction">75</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-3">
<div className="lg:col-span-2 rounded-lg border border-white/10 bg-zinc-900/60 p-3">
<h3 className="text-sm font-medium text-zinc-200 tracking-tight">Forecast</h3>
<p className="mt-1 text-xs text-zinc-400">EPS estimate with confidence bands and scenarios</p>
<div className="mt-3 rounded-md bg-zinc-950/50 p-2 ring-1 ring-white/5">
<div>
<div className="rounded-md border border-white/5 bg-zinc-950/60 p-1">
<div>
<canvas id="appChart"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-3 flex flex-wrap items-center justify-between gap-3">
<div className="inline-flex rounded-md border border-white/10 bg-zinc-950/50 p-1">
<button aria-pressed="true" className="app-scenario-btn inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-zinc-300 hover:text-zinc-100 hover:bg-white/5" data-app-scenario="base">
<i className="h-3.5 w-3.5 text-indigo-300" data-lucide="circle-dot" strokeWidth="1.5"></i> Base
                    </button>
<button aria-pressed="false" className="app-scenario-btn inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-zinc-300 hover:text-zinc-100 hover:bg-white/5" data-app-scenario="bull">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="arrow-up-right" strokeWidth="1.5"></i> Bull
                    </button>
<button aria-pressed="false" className="app-scenario-btn inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-zinc-300 hover:text-zinc-100 hover:bg-white/5" data-app-scenario="bear">
<i className="h-3.5 w-3.5 text-rose-300" data-lucide="arrow-down-right" strokeWidth="1.5"></i> Bear
                    </button>
<button aria-pressed="false" className="app-scenario-btn inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-zinc-300 hover:text-zinc-100 hover:bg-white/5" data-app-scenario="all">
<i className="h-3.5 w-3.5 text-zinc-300" data-lucide="layers" strokeWidth="1.5"></i> All
                    </button>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="rounded-md border border-white/10 bg-zinc-950/40 px-2 py-1">
<div className="text-[10px] uppercase tracking-wide text-zinc-400">Next EPS</div>
<div className="text-sm font-medium text-zinc-100" id="appNextEps">$1.42</div>
</div>
<div className="rounded-md border border-white/10 bg-zinc-950/40 px-2 py-1">
<div className="text-[10px] uppercase tracking-wide text-zinc-400">Surprise</div>
<div className="text-sm font-medium text-zinc-100" id="appSurprise">+3.1%</div>
</div>
<div className="rounded-md border border-white/10 bg-zinc-950/40 px-2 py-1">
<div className="text-[10px] uppercase tracking-wide text-zinc-400">Conf.</div>
<div className="text-sm font-medium text-zinc-100" id="appConf">High</div>
</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/60 p-3">
<h3 className="text-sm font-medium text-zinc-200 tracking-tight">Why</h3>
<ul className="mt-2 space-y-2 text-xs text-zinc-300" id="appWhyList">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle-2" strokeWidth="1.5"></i>iPhone mix shift to Pro sustains ASPs.</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle-2" strokeWidth="1.5"></i>Services momentum offsets hardware cyclicality.</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check-circle-2" strokeWidth="1.5"></i>Opex discipline supports incremental margins.</li>
</ul>
<div className="mt-4 text-[11px] text-zinc-500">[Placeholder from documents: add sources and coverage caveats.]</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-zinc-300" data-lucide="notepad-text" strokeWidth="1.5"></i>
<h3 className="text-base font-medium tracking-tight text-zinc-100">Recent updates</h3>
</div>
<div className="mt-3 space-y-2 text-sm text-zinc-300">
<div className="rounded-md border border-white/10 bg-zinc-950/40 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Model</div>
<div className="text-xs text-zinc-500">2h ago</div>
</div>
<div className="mt-1">Refreshed transcripts and alt data. Confidence +2 pts.</div>
</div>
<div className="rounded-md border border-white/10 bg-zinc-950/40 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-zinc-400">Analyst rationale</div>
<div className="text-xs text-zinc-500">1d ago</div>
</div>
<div className="mt-1">Added supply chain checks indicating lead-time normalization.</div>
</div>
</div>
</div>
</main>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-zinc-100">PS</span>
</div>
<span className="text-sm text-zinc-400">PredictStreet</span>
</div>
<div className="text-xs text-zinc-500">
          [Placeholder from documents: legal, risk, and disclosures]
        </div>
</div>
</div>
</footer>

    </>
  );
}
