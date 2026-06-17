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



      // Icons
      lucide.createIcons();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Charts
      const lrCtx = document.getElementById('lrChart');
      const raCtx = document.getElementById('raChart');
      const plCtx = document.getElementById('plChart');

      const gray = 'rgba(148,163,184,0.25)';
      const emerald = 'rgba(16,185,129,0.9)';
      const emeraldFill = 'rgba(16,185,129,0.15)';
      const cyan = 'rgba(56,189,248,0.9)';
      const cyanFill = 'rgba(56,189,248,0.15)';

      if (lrCtx) {
        new Chart(lrCtx, {
          type: 'line',
          data: {
            labels: Array.from({length: 12}, (_, i) => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]),
            datasets: [{
              label: 'Loss Ratio',
              data: [66, 64, 63, 65, 62, 61, 60, 59, 61, 60, 58, 57],
              borderColor: emerald,
              backgroundColor: emeraldFill,
              fill: true,
              pointRadius: 0,
              tension: 0.35
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
              y: { grid: { color: gray }, ticks: { color: '#94a3b8', callback: v => v + '%' }, suggestedMin: 50, suggestedMax: 70 }
            }
          }
        });
      }

      if (raCtx) {
        new Chart(raCtx, {
          type: 'bar',
          data: {
            labels: ['AY18','AY19','AY20','AY21','AY22'],
            datasets: [{
              label: 'A/E',
              data: [1.05, 1.02, 0.98, 0.96, 0.94],
              backgroundColor: [cyan, cyan, emerald, emerald, emerald],
              borderRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
              y: { grid: { color: gray }, ticks: { color: '#94a3b8' }, suggestedMin: 0.8, suggestedMax: 1.2 }
            }
          }
        });
      }

      if (plCtx) {
        const months = Array.from({length: 24}, (_, i) => i + 1);
        new Chart(plCtx, {
          type: 'line',
          data: {
            labels: months.map(m => 'M' + m),
            datasets: [
              {
                label: 'Earned Premium',
                data: months.map(m => 20 + m * 0.6 + (Math.sin(m/2) * 2)),
                borderColor: emerald,
                backgroundColor: emeraldFill,
                fill: true,
                pointRadius: 0,
                tension: 0.35
              },
              {
                label: 'Incurred Losses',
                data: months.map(m => 12 + m * 0.45 + (Math.cos(m/3) * 2.2)),
                borderColor: cyan,
                backgroundColor: cyanFill,
                fill: true,
                pointRadius: 0,
                tension: 0.35
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: true, labels: { color: '#64748b' } } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
              y: { grid: { color: 'rgba(226,232,240,0.6)' }, ticks: { color: '#94a3b8', callback: v => '$' + v + 'M' } }
            }
          }
        });
      }

      // Simple triangle heatmap generation
      (function buildHeatmap(){
        const container = document.querySelector('#insights .grid.grid-cols-12');
        if (!container) return;
        const rows = 10, cols = 12;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            const value = Math.max(0, 1 - (c < r ? (r - c) * 0.12 : 0) + (Math.random()-0.5)*0.15);
            const hue = 160; // emerald-ish
            const alpha = 0.12 + value * 0.5;
            cell.className = 'aspect-square w-full rounded';
            cell.style.backgroundColor = `hsla(${hue}, 80%, 40%, ${alpha})`;
            cell.title = `AY${rows-r} Age ${c+1} • ${value.toFixed(2)}`;
            container.appendChild(cell);
          }
        }
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
      

<header className="relative">
<div className="absolute inset-0 -z-10 bg-slate-950">
<div className="absolute inset-0 opacity-40" style={{background: 'radial-gradient(800px 400px at 70% 20%, rgba(16,185,129,0.18), transparent 60%), radial-gradient(600px 300px at 10% 10%, rgba(56,189,248,0.15), transparent 60%)'}}></div>
<div className="absolute right-[-15%] top-[15%] h-[520px] w-[520px] rounded-2xl border border-emerald-500/10" style={{transform: 'rotate(35deg) translateZ(0)'}}></div>
<div className="absolute right-[-10%] top-[22%] h-[420px] w-[420px] rounded-2xl border border-emerald-500/10" style={{transform: 'rotate(35deg) translateZ(0)'}}></div>
</div>
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-6 md:px-8">
<a className="inline-flex items-center gap-2" href="#">
<span className="relative inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20">
<i className="h-5 w-5 text-emerald-400" data-lucide="sigma"></i>
</span>
<span className="text-lg font-semibold tracking-tight text-white">Example Actuaries</span>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#services">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#sectors">Sectors</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#insights">Insights</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#cases">Case studies</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition" href="#careers">Careers</a>
</div>
<div className="hidden items-center gap-3 md:flex">
<button className="inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium text-slate-200 hover:text-white">
<i className="h-4 w-4 text-slate-300" data-lucide="search"></i>
            Search
          </button>
<a className="inline-flex h-10 items-center justify-center rounded-md border border-slate-700/60 px-4 text-sm font-medium text-white hover:border-slate-600" href="#contact">Client portal</a>
<a className="inline-flex h-10 items-center justify-center rounded-md bg-emerald-500/90 px-4 text-sm font-semibold text-slate-950 hover:bg-emerald-400" href="#contact">Contact</a>
</div>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-slate-700/60">
<i className="h-5 w-5 text-white" data-lucide="menu"></i>
</button>
</nav>

<section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-20 pt-16 md:grid-cols-2 md:px-8 lg:pt-24">
<div className="max-w-xl">
<p className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-4 w-4" data-lucide="shield-check"></i>
            FSA • FCAS • SOC 2 Type II
          </p>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Quantify risk. Build certainty.
          </h1>
<p className="mt-5 text-base md:text-lg text-slate-300">
            Example Actuaries is a consulting partner for insurers, health plans, pensions, and fintech—delivering pricing, reserving, and capital solutions with clarity and rigor.
          </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-md bg-emerald-500/90 px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400" href="#contact">
              Talk to an actuary
              <i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-slate-700/60 px-5 py-3 text-sm font-medium text-white hover:border-slate-600" href="#credentials">
              View credentials
              <i className="ml-2 h-4 w-4" data-lucide="id-card"></i>
</a>
</div>
<div className="mt-8 grid grid-cols-2 gap-6 text-slate-300 sm:grid-cols-3">
<div>
<div className="text-2xl font-semibold tracking-tight text-white">98.7%</div>
<div className="text-xs">Model validation pass rate</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white">120+</div>
<div className="text-xs">Carrier &amp; PE engagements</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white">30B+</div>
<div className="text-xs">Annual premium analyzed</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-5 backdrop-blur">
<div className="grid gap-5 sm:grid-cols-2">
<div className="rounded-lg border border-slate-700/50 bg-slate-900/60 p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-200">Loss ratio trend</div>
<i className="h-4 w-4 text-emerald-400" data-lucide="activity"></i>
</div>
<div className="mt-3">
<div className="relative h-28">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<canvas className="h-full w-full" id="lrChart"></canvas>
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
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="mt-2 text-[11px] text-slate-400">12-month rolling, Net of reinsurance</p>
</div>
</div>
<div className="rounded-lg border border-slate-700/50 bg-slate-900/60 p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-200">Reserve adequacy</div>
<i className="h-4 w-4 text-cyan-300" data-lucide="gauge"></i>
</div>
<div className="mt-3">
<div className="relative h-28">

<div className="h-full w-full">
<canvas className="h-full w-full" id="raChart"></canvas>
</div>
</div>
<p className="mt-2 text-[11px] text-slate-400">IBNR vs. ultimate indication</p>
</div>
</div>
<div className="rounded-lg border border-slate-700/50 bg-slate-900/60 p-4 sm:col-span-2">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-200">Underwriting dashboard</div>
<div className="inline-flex items-center gap-2 text-[11px] text-slate-400">
<i className="h-3.5 w-3.5" data-lucide="clock"></i>
                  Updated 5m ago
                </div>
</div>
<div className="mt-3 grid grid-cols-3 gap-4 text-slate-200 sm:grid-cols-6">
<div className="rounded-md bg-slate-900/70 p-3 ring-1 ring-slate-700/50">
<div className="text-xs text-slate-400">EP</div>
<div className="mt-1 text-lg font-semibold tracking-tight">$842M</div>
</div>
<div className="rounded-md bg-slate-900/70 p-3 ring-1 ring-slate-700/50">
<div className="text-xs text-slate-400">Freq</div>
<div className="mt-1 text-lg font-semibold tracking-tight">2.3%</div>
</div>
<div className="rounded-md bg-slate-900/70 p-3 ring-1 ring-slate-700/50">
<div className="text-xs text-slate-400">Sev (P90)</div>
<div className="mt-1 text-lg font-semibold tracking-tight">$128k</div>
</div>
<div className="rounded-md bg-slate-900/70 p-3 ring-1 ring-slate-700/50">
<div className="text-xs text-slate-400">LR</div>
<div className="mt-1 text-lg font-semibold tracking-tight">61.4%</div>
</div>
<div className="rounded-md bg-slate-900/70 p-3 ring-1 ring-slate-700/50">
<div className="text-xs text-slate-400">Combined</div>
<div className="mt-1 text-lg font-semibold tracking-tight">94.8%</div>
</div>
<div className="rounded-md bg-slate-900/70 p-3 ring-1 ring-slate-700/50">
<div className="text-xs text-slate-400">A/E</div>
<div className="mt-1 text-lg font-semibold tracking-tight">0.97x</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-400">
<i className="h-4 w-4" data-lucide="fingerprint"></i>
              AES-256 at rest • GDPR-compliant processing
            </div>
<a className="text-xs font-medium text-emerald-300 hover:text-emerald-200" href="#insights">See methodology →</a>
</div>
</div>
</section>
</header>

<section className="bg-white">
<div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
<p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">Trusted by teams across insurance, health, and finance</p>
<div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
<div className="flex items-center justify-center rounded-md border border-slate-200 px-4 py-3">
<i className="h-5 w-5 text-slate-500" data-lucide="building-2"></i>
<span className="ml-2 text-sm font-medium text-slate-600">Carrier</span>
</div>
<div className="flex items-center justify-center rounded-md border border-slate-200 px-4 py-3">
<i className="h-5 w-5 text-slate-500" data-lucide="banknote"></i>
<span className="ml-2 text-sm font-medium text-slate-600">Reinsurer</span>
</div>
<div className="flex items-center justify-center rounded-md border border-slate-200 px-4 py-3">
<i className="h-5 w-5 text-slate-500" data-lucide="wallet"></i>
<span className="ml-2 text-sm font-medium text-slate-600">PE</span>
</div>
<div className="flex items-center justify-center rounded-md border border-slate-200 px-4 py-3">
<i className="h-5 w-5 text-slate-500" data-lucide="activity"></i>
<span className="ml-2 text-sm font-medium text-slate-600">Health</span>
</div>
<div className="flex items-center justify-center rounded-md border border-slate-200 px-4 py-3">
<i className="h-5 w-5 text-slate-500" data-lucide="credit-card"></i>
<span className="ml-2 text-sm font-medium text-slate-600">Fintech</span>
</div>
<div className="flex items-center justify-center rounded-md border border-slate-200 px-4 py-3">
<i className="h-5 w-5 text-slate-500" data-lucide="factory"></i>
<span className="ml-2 text-sm font-medium text-slate-600">Pension</span>
</div>
</div>
</div>
</section>

<section className="bg-white" id="services">
<div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Expertise that scales with your risk</h2>
<p className="mt-3 text-slate-600">Independent advice, fit-for-purpose models, and documentation that stands up to audit and board review.</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm">
<i className="h-5 w-5 text-emerald-600" data-lucide="calculator"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Pricing &amp; product</h3>
<p className="mt-2 text-sm text-slate-600">GLMs, credibility, telematics, rate filings, and portfolio optimization.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm">
<i className="h-5 w-5 text-emerald-600" data-lucide="layers"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Reserving</h3>
<p className="mt-2 text-sm text-slate-600">Triangle analyses, Bornhuetter–Ferguson, MPTF, diagnostics, and peer review.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm">
<i className="h-5 w-5 text-emerald-600" data-lucide="shield"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Capital &amp; ERM</h3>
<p className="mt-2 text-sm text-slate-600">Economic capital, ORSA, reinsurance optimization, and catastrophe modeling.</p>
</div>
<div className="rounded-xl border border-slate-200 p-6 hover:shadow-sm">
<i className="h-5 w-5 text-emerald-600" data-lucide="database"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Data &amp; ML</h3>
<p className="mt-2 text-sm text-slate-600">Data pipelines, geospatial enrichment, feature stores, and MLOps for actuarial models.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50" id="sectors">
<div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
<div className="grid items-center gap-10 md:grid-cols-2">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Focused where risk meets strategy</h2>
<p className="mt-3 text-slate-600">Property &amp; casualty, life &amp; annuity, health, and pensions. We align with your risk appetite and speed of execution.</p>
<ul className="mt-6 space-y-3 text-slate-700">
<li className="flex items-start gap-3">
<i className="mt-0.5 h-5 w-5 text-emerald-600" data-lucide="check-circle-2"></i>
<span className="text-sm">Regulatory-ready documentation and control mapping</span>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-5 w-5 text-emerald-600" data-lucide="check-circle-2"></i>
<span className="text-sm">Transparent assumptions, parameter stability, and monitoring</span>
</li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-5 w-5 text-emerald-600" data-lucide="check-circle-2"></i>
<span className="text-sm">Hands-on collaboration with underwriting, finance, and data</span>
</li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800" href="#cases">View case studies<i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</div>
<div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
<img alt="Mountain range symbolizing stability" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-white" id="insights">
<div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Actuarial insights in real time</h2>
<p className="mt-3 text-slate-600">Interactive dashboards keep leadership aligned on drivers of performance and risk—updated as data arrives.</p>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-2">
<div className="rounded-xl border border-slate-200 p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Premium vs. losses</h3>
<div className="text-xs text-slate-500 inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="line-chart"></i> Last 24 months
              </div>
</div>
<p className="mt-1 text-sm text-slate-600">Monitor earned premium and paid/incurred losses to detect drift early.</p>
<div className="mt-4">

<div className="h-56 w-full">
<canvas className="h-full w-full" id="plChart"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Reserve triangle heatmap</h3>
<div className="text-xs text-slate-500 inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="grid-2x2"></i> By accident year
              </div>
</div>
<p className="mt-1 text-sm text-slate-600">Identify development anomalies by age and origin period.</p>
<div className="mt-4 grid grid-cols-12 gap-1">


<template id="heatmap-template"></template>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50" id="cases">
<div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Delivering measurable outcomes</h2>
<p className="mt-3 text-slate-600">A snapshot of how we help clients move faster with confidence.</p>
</div>
<a className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 md:inline-flex" href="#">Browse all</a>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<article className="overflow-hidden rounded-xl border border-slate-200">
<img alt="Minimal 3D shapes" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="text-xs font-medium text-emerald-700">Pricing</div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">GLM uplift increased hit ratio by 6.2%</h3>
<p className="mt-2 text-sm text-slate-600">Rebuilt rating for regional carrier; deployed monitoring to maintain lift.</p>
<div className="mt-4 inline-flex items-center text-sm font-medium text-slate-900">
                Read case <i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</article>
<article className="overflow-hidden rounded-xl border border-slate-200">
<img alt="Abstract render" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="text-xs font-medium text-emerald-700">Reserving</div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Reduced adverse development by 18%</h3>
<p className="mt-2 text-sm text-slate-600">Introduced diagnostics and segmentation to stabilize selections.</p>
<div className="mt-4 inline-flex items-center text-sm font-medium text-slate-900">
                Read case <i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</article>
<article className="overflow-hidden rounded-xl border border-slate-200">
<img alt="Calm landscape" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="text-xs font-medium text-emerald-700">Capital</div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Optimized reinsurance saved $14.3M</h3>
<p className="mt-2 text-sm text-slate-600">Structured layers and attachment points tuned to risk appetite.</p>
<div className="mt-4 inline-flex items-center text-sm font-medium text-slate-900">
                Read case <i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-white">
<div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
<div className="grid items-center gap-10 md:grid-cols-2">
<div className="order-2 overflow-hidden rounded-xl ring-1 ring-slate-200 md:order-1">
<img alt="Collaborative workspace" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Clear process, defensible results</h2>
<div className="mt-4 grid gap-4 sm:grid-cols-2">
<div className="rounded-lg border border-slate-200 p-5">
<i className="h-5 w-5 text-emerald-600" data-lucide="workflow"></i>
<h3 className="mt-3 text-base font-semibold tracking-tight">Design</h3>
<p className="mt-1 text-sm text-slate-600">Scope, data readiness, and success metrics defined up front.</p>
</div>
<div className="rounded-lg border border-slate-200 p-5">
<i className="h-5 w-5 text-emerald-600" data-lucide="beaker"></i>
<h3 className="mt-3 text-base font-semibold tracking-tight">Build</h3>
<p className="mt-1 text-sm text-slate-600">Robust models with diagnostics, versioning, and tests.</p>
</div>
<div className="rounded-lg border border-slate-200 p-5">
<i className="h-5 w-5 text-emerald-600" data-lucide="file-check-2"></i>
<h3 className="mt-3 text-base font-semibold tracking-tight">Validate</h3>
<p className="mt-1 text-sm text-slate-600">Independent review, controls mapping, and audit readiness.</p>
</div>
<div className="rounded-lg border border-slate-200 p-5">
<i className="h-5 w-5 text-emerald-600" data-lucide="rocket"></i>
<h3 className="mt-3 text-base font-semibold tracking-tight">Deploy</h3>
<p className="mt-1 text-sm text-slate-600">Operationalized with dashboards and ongoing monitoring.</p>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center rounded-md bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400" href="#contact">Book a consultation<i className="ml-2 h-4 w-4" data-lucide="calendar"></i></a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950" id="careers">
<div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
<div className="grid items-center gap-10 md:grid-cols-2">
<div>
<p className="text-xs font-medium uppercase tracking-wider text-emerald-300">Careers</p>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white">Join a team that values rigor and empathy</h2>
<p className="mt-3 text-slate-300">We hire actuaries and data scientists who love clear thinking and real-world impact. Mentorship, study support, and interesting problems included.</p>
<div className="mt-6 grid gap-4 sm:grid-cols-3">
<div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
<i className="h-5 w-5 text-emerald-400" data-lucide="handshake"></i>
<p className="mt-2 text-sm text-slate-300">Integrity</p>
</div>
<div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
<i className="h-5 w-5 text-emerald-400" data-lucide="sparkles"></i>
<p className="mt-2 text-sm text-slate-300">Clarity</p>
</div>
<div className="rounded-lg border border-slate-700/60 bg-slate-900/40 p-4">
<i className="h-5 w-5 text-emerald-400" data-lucide="compass"></i>
<p className="mt-2 text-sm text-slate-300">Curiosity</p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100" href="#">Open roles<i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i></a>
<a className="inline-flex items-center rounded-md border border-slate-700/60 px-4 py-3 text-sm font-medium text-white hover:border-slate-600" href="#">Life at EA</a>
</div>
</div>
<div className="overflow-hidden rounded-xl ring-1 ring-slate-800">
<img alt="Team member portrait" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-white" id="contact">
<div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
<div className="grid gap-10 md:grid-cols-2">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Start a conversation</h2>
<p className="mt-3 text-slate-600">Tell us about your project. We’ll respond within one business day.</p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-600" data-lucide="mail"></i>
<div>
<div className="text-sm font-medium text-slate-900">engage@exampleactuaries.com</div>
<div className="text-sm text-slate-600">Secure email preferred</div>
</div>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-600" data-lucide="phone"></i>
<div>
<div className="text-sm font-medium text-slate-900">+1 (555) 013-4400</div>
<div className="text-sm text-slate-600">Mon–Fri, 9:00–18:00</div>
</div>
</div>
<div className="flex items-start gap-3">
<i className="h-5 w-5 text-emerald-600" data-lucide="map-pin"></i>
<div>
<div className="text-sm font-medium text-slate-900">New York • Chicago • Remote</div>
<div className="text-sm text-slate-600">Global client coverage</div>
</div>
</div>
</div>
</div>
<form className="rounded-xl border border-slate-200 p-6">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="text-sm text-slate-700">First name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="Alex" type="text"/>
</div>
<div>
<label className="text-sm text-slate-700">Last name</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="Lee" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-700">Work email</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="you@company.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-700">How can we help?</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="Briefly describe your goals and timeline" rows="4"></textarea>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<p className="text-xs text-slate-500">By submitting, you agree to our privacy policy.</p>
<button className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800" type="submit">
                Send request <i className="ml-2 h-4 w-4" data-lucide="send"></i>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-slate-50">
<div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
<div className="grid gap-10 md:grid-cols-4">
<div>
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/20">
<i className="h-4 w-4 text-emerald-600" data-lucide="sigma"></i>
</span>
<span className="text-base font-semibold tracking-tight text-slate-900">Example Actuaries</span>
</div>
<p className="mt-3 text-sm text-slate-600">Independent actuarial consulting for modern risk.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-white" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-white" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Services</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#services">Pricing &amp; product</a></li>
<li><a className="hover:text-slate-900" href="#services">Reserving</a></li>
<li><a className="hover:text-slate-900" href="#services">Capital &amp; ERM</a></li>
<li><a className="hover:text-slate-900" href="#services">Data &amp; ML</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#careers">Careers</a></li>
<li><a className="hover:text-slate-900" href="#cases">Case studies</a></li>
<li><a className="hover:text-slate-900" href="#insights">Insights</a></li>
<li><a className="hover:text-slate-900" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Newsletter</h4>
<p className="mt-3 text-sm text-slate-600">Quarterly insights on pricing, reserving, and capital.</p>
<div className="mt-3 flex gap-2">
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" placeholder="Work email" type="email"/>
<button className="whitespace-nowrap rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400">Subscribe</button>
</div>
</div>
</div>
<div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          © <span id="year"></span> Example Actuaries. All rights reserved.
        </div>
</div>
</footer>



    </>
  );
}
