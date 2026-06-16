import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Lucide Icons
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5, class: 'icon' }
        });
      });

      // Chart.js: SME Credit Gap visualization
      window.addEventListener('load', () => {
        const ctx = document.getElementById('gapChart');
        if (!ctx) return;

        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, ctx.height || 220);
        gradient.addColorStop(0, 'rgba(34,211,238,0.35)');
        gradient.addColorStop(1, 'rgba(34,211,238,0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
              label: 'Credit Gap (T$)',
              data: [4.1, 4.2, 4.5, 4.7, 4.9, 5.1, 5.0],
              fill: true,
              backgroundColor: gradient,
              borderColor: 'rgba(59,130,246,0.9)',
              pointBackgroundColor: 'rgba(34,211,238,1)',
              pointBorderColor: 'rgba(34,211,238,0.7)',
              pointRadius: 2.5,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(8,12,20,0.95)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#e2e8f0',
                bodyColor: '#cbd5e1',
                padding: 10,
                displayColors: false
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(148,163,184,0.08)' },
                ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Inter', weight: '500' } }
              },
              y: {
                grid: { color: 'rgba(148,163,184,0.08)' },
                ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Inter', weight: '500' } }
              }
            }
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 pointer-events-none">

<div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.35)_1px,transparent_1.5px)] [background-size:22px_22px]"></div>

<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40 bg-cyan-500/30 animate-pulse"></div>
<div className="absolute top-1/3 -right-16 h-80 w-80 rounded-full blur-3xl opacity-30 bg-blue-600/30" style={{animation: 'pulse 6s ease-in-out infinite'}}></div>
<div className="absolute bottom-[-6rem] left-1/3 h-96 w-96 rounded-full blur-3xl opacity-25 bg-indigo-600/30" style={{animation: 'pulse 8s ease-in-out infinite'}}></div>

<div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>
</div>

<header className="sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-6">
<div className="mt-4 mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-[#0a0d14]/60 p-3 backdrop-blur supports-[backdrop-filter]:bg-[#0a0d14]/40">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan-500/10 ring-1 ring-cyan-400/30">
<span className="text-cyan-400 font-semibold tracking-tight">ZK</span>
</div>
<span className="text-sm sm:text-base font-medium text-slate-200 tracking-tight">ZINK Capital</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#solution">Solution</a>
<a className="hover:text-white transition-colors" href="#rwa">RWA</a>
<a className="hover:text-white transition-colors" href="#pilot">Pilot</a>
<a className="hover:text-white transition-colors" href="#about">Team</a>
</nav>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-cyan-500/15 px-3 py-2 text-sm font-medium text-cyan-300 ring-1 ring-cyan-400/30 hover:bg-cyan-500/25 hover:text-cyan-200 hover:ring-cyan-300/40 transition-all" href="#pilot">
<i className="h-4 w-4" data-lucide="zap"></i>
<span>Join Pilot</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">

<div className="absolute inset-0 -z-10 opacity-50">
<svg className="h-full w-full" style={{filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.15))'}} viewbox="0 0 1200 600">
<defs>
<lineargradient id="g1" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.45"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0.1"></stop>
</lineargradient>
</defs>
<g fill="none" stroke="url(#g1)" strokeWidth="0.6">
<path d="M0,120 C300,60 600,180 900,120 C1050,90 1120,110 1200,130"></path>
<path d="M0,260 C300,200 600,320 900,260 C1050,230 1120,250 1200,270"></path>
<path d="M0,400 C300,340 600,460 900,400 C1050,370 1120,390 1200,410"></path>
</g>
<g fill="#22d3ee" opacity="0.4">
<circle cx="180" cy="120" r="2">
<animate attributename="cx" dur="6s" repeatcount="indefinite" values="180;190;180"></animate>
</circle>
<circle cx="620" cy="260" r="2">
<animate attributename="cx" dur="7s" repeatcount="indefinite" values="620;640;620"></animate>
</circle>
<circle cx="980" cy="400" r="2">
<animate attributename="cx" dur="5s" repeatcount="indefinite" values="980;995;980"></animate>
</circle>
</g>
</svg>
</div>
<div className="mx-auto max-w-7xl px-6 pt-10 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28">
<div className="relative">

<div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-2xl opacity-40 animate-pulse"></div>
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Borderless Stablecoin Liquidity Rails for SMEs.
            </h1>
<p className="mt-5 text-base sm:text-lg text-slate-300">
              Empowering fintech lenders with instant, transparent, and compliant stablecoin liquidity.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/20 px-5 py-3 text-sm font-medium text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-500/30 hover:text-white hover:ring-cyan-300/60 transition-all" href="#pilot">
<i className="h-4 w-4" data-lucide="rocket"></i>
                Join Pilot
              </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white hover:ring-white/20 transition-all" href="#">
<i className="h-4 w-4" data-lucide="presentation"></i>
                View Deck
              </a>
</div>
</div>

<div className="mt-12 md:mt-0 md:absolute md:right-0 md:top-0 md:h-full md:w-[48%]">
<div className="relative h-72 sm:h-80 md:h-[420px] rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-white/[0.01] p-0 overflow-hidden">

<div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full border border-cyan-400/30 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.15),transparent_55%)] shadow-[0_0_80px_rgba(34,211,238,0.12)]">

<div className="absolute inset-6 rounded-full border border-cyan-300/20"></div>
<div className="absolute inset-6 rounded-full border border-cyan-300/20 animate-spin" style={{animationDuration: '18s'}}></div>
<div className="absolute inset-6 rounded-full border border-cyan-300/20 animate-spin" style={{animationDuration: '28s', animationDirection: 'reverse'}}></div>

<div className="absolute inset-0">
<div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-pulse"></div>
<div className="absolute right-6 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.7)] animate-pulse" style={{animationDuration: '3s'}}></div>
<div className="absolute left-8 bottom-8 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.7)] animate-pulse" style={{animationDuration: '4s'}}></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 text-center text-xs text-slate-400/90">
                Real-time rails visualized: capital → pool → lenders → SMEs
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="problem">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="alert-triangle"></i>
              Problem
            </div>
<h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              $5 Trillion SME Credit Gap — Still Untapped.
            </h2>
<p className="mt-4 text-slate-300">
              SMEs across Asia struggle with high-cost credit and cross-border friction. Existing rails are slow, opaque, and capital-inefficient.
            </p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-slate-400">Avg. SME Lending APR</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">18–30%</div>
<div className="mt-2 text-xs text-slate-400">Fragmented liquidity + FX fees</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-xs text-slate-400">Cross-Border Settlement</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">T+2–T+5</div>
<div className="mt-2 text-xs text-slate-400">Delays and reconciliation risk</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.02] p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-200">SME Credit Gap (Est.)</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="h-4 w-4 text-cyan-300" data-lucide="globe-2"></i>
                Global
              </div>
</div>
<div className="mt-4">
<div className="relative h-56 w-full overflow-hidden rounded-lg ring-1 ring-white/10">
<div className="h-full w-full p-3">
<div className="h-full w-full rounded-md bg-[#0b0f18]">
<div className="h-full w-full p-2">
<div className="relative h-full w-full">
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
<div className="h-full w-full">

<div className="h-full w-full">
<canvas className="h-full w-full" id="gapChart"></canvas>
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
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-slate-400">
<span>Source: Public estimates</span>
<span className="inline-flex items-center gap-1 text-cyan-300">
<i className="h-3.5 w-3.5" data-lucide="activity"></i> Real-time render
              </span>
</div>
</div>
</div>
</div>
</div></section>

<section className="relative" id="solution">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:py-20">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-cyan-300" data-lucide="sparkles"></i>
          Solution
        </div>
<h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
          ZINK Connects Global Capital to Licensed SME Lenders.
        </h2>
<p className="mt-4 max-w-3xl text-slate-300">
          Instant funding, transparent yield, and compliant flow — delivered through stablecoin rails purpose-built for SME lending markets.
        </p>

<div className="mt-10 grid grid-cols-1 gap-6">
<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
<div className="grid grid-cols-1 md:grid-cols-7 items-center gap-4 md:gap-2">

<div className="md:col-span-2">
<div className="group rounded-xl border border-white/10 bg-[#0b0f18] p-4 hover:border-cyan-400/40 transition-all">
<div className="flex items-center gap-3">
<div className="rounded-md bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="globe"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Global LPs</div>
<div className="text-xs text-slate-400">Funds, DAOs, family offices</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex items-center justify-center">
<i className="h-5 w-5 text-cyan-300" data-lucide="arrow-right"></i>
</div>

<div className="md:col-span-3">
<div className="group relative rounded-xl border border-cyan-400/30 bg-[#071018] p-4 ring-1 ring-cyan-400/20 hover:ring-cyan-300/40 transition-all">
<div className="absolute -inset-px rounded-xl pointer-events-none" style={{boxShadow: '0 0 40px rgba(34,211,238,0.12)'}}></div>
<div className="flex items-center gap-3">
<div className="rounded-md bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="coins"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">ZINK Stablecoin Pool</div>
<div className="text-xs text-slate-400">Segregated, auditable, realtime telemetry</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex items-center justify-center">
<i className="h-5 w-5 text-cyan-300" data-lucide="arrow-right"></i>
</div>

<div className="md:col-span-2">
<div className="group rounded-xl border border-white/10 bg-[#0b0f18] p-4 hover:border-cyan-400/40 transition-all">
<div className="flex items-center gap-3">
<div className="rounded-md bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="building-2"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Licensed Lenders</div>
<div className="text-xs text-slate-400">Origination + servicing</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-center">
<i className="h-5 w-5 text-cyan-300" data-lucide="arrow-down"></i>
</div>

<div className="mt-6 grid grid-cols-1">
<div className="group rounded-xl border border-white/10 bg-[#0b0f18] p-4 hover:border-cyan-400/40 transition-all">
<div className="flex items-center gap-3">
<div className="rounded-md bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="store"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">SMEs</div>
<div className="text-xs text-slate-400">Fast working capital and settlement</div>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
<i className="h-4 w-4 text-cyan-300" data-lucide="bolt"></i>
<div className="text-sm text-slate-300">Instant funding</div>
</div>
<div className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
<i className="h-4 w-4 text-cyan-300" data-lucide="layers"></i>
<div className="text-sm text-slate-300">Transparent yield</div>
</div>
<div className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
<i className="h-4 w-4 text-cyan-300" data-lucide="shield-check"></i>
<div className="text-sm text-slate-300">Compliant flow</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="rwa">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:py-20">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-cyan-300" data-lucide="banknote"></i>
          RWA Integration
        </div>
<div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
<div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Idle Liquidity, Reinvented.
            </h2>
<p className="mt-3 max-w-3xl text-slate-300">
              Idle funds are reinvested into tokenized U.S. Treasuries (Ondo, Matrixdock) to generate extra yield — while maintaining on-chain visibility and redemption liquidity.
            </p>
</div>
<div className="text-xs text-slate-400">
            Segregated accounts · Risk-first · On-chain attestations
          </div>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-3">
<div className="rounded-md bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="vault"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Tokenized Treasuries</div>
<div className="text-xs text-slate-400">UST bill exposure via RWA issuers</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-3">
<div className="rounded-md bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="eye"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Transparent Yield</div>
<div className="text-xs text-slate-400">Programmatic accounting and proofs</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center gap-3">
<div className="rounded-md bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="unlock"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Liquidity First</div>
<div className="text-xs text-slate-400">Funding priority for lender drawdowns</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="pilot">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:py-20">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-cyan-300" data-lucide="timeline"></i>
          2025 Pilot
        </div>
<div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="md:col-span-2">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
              2025 Pilot: $500K Liquidity with Licensed Lender.
            </h2>
<p className="mt-3 text-slate-300">
              Financing ~50 SMEs, validating the liquidity model with real-world cash flows.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-400/30">
<i className="h-3.5 w-3.5" data-lucide="percent"></i> LP Yield 7–9%
              </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5" data-lucide="activity"></i> ZINK Spread 2–3%
              </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5" data-lucide="shield"></i> Licensed partner
              </span>
</div>

<div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300">Committed</span>
<span className="text-slate-200 font-medium">$320,000 / $500,000</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[64%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
</div>
<div className="mt-2 text-xs text-slate-400">Target close: Q2 2025</div>
</div>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/20 px-4 py-2.5 text-sm font-medium text-cyan-200 ring-1 ring-cyan-400/40 hover:bg-cyan-500/30 hover:text-white hover:ring-cyan-300/60 transition-all" href="#">
<i className="h-4 w-4" data-lucide="file-text"></i>
                Download One-Pager
              </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:text-white hover:ring-white/20 transition-all" href="#">
<i className="h-4 w-4" data-lucide="calendar"></i>
                Book Intro Call
              </a>
</div>
</div>

<div className="md:col-span-1">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-5">
<div className="flex items-center gap-3">
<div className="rounded-md bg-cyan-500/10 p-2 ring-1 ring-cyan-400/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="badge-check"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-200">Licensed Lender</div>
<div className="text-xs text-slate-400">SEA market</div>
</div>
</div>
<div className="mt-4 text-xs text-slate-400">
                Underwriting, KYC/AML, servicing and collections performed by regulated local partner. ZINK provides liquidity, telemetry, and reconciliation.
              </div>
<div className="mt-4 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-slate-400 text-xs">Avg Ticket</div>
<div className="text-slate-200 font-medium">$10k</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-slate-400 text-xs">Tenor</div>
<div className="text-slate-200 font-medium">60–120d</div>
</div>
</div>
<div className="mt-4 rounded-lg border border-cyan-400/20 bg-[#071018] p-3 text-xs text-cyan-200 ring-1 ring-cyan-400/10">
<i className="mr-2 inline h-3.5 w-3.5" data-lucide="scan-line"></i>
                On-chain disbursement + repayment proofs
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 md:py-20">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wide text-slate-300 ring-1 ring-white/10">
<i className="h-3.5 w-3.5 text-cyan-300" data-lucide="users"></i>
          Founders
        </div>
<h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">
          About ZINK
        </h2>
<p className="mt-3 max-w-3xl text-slate-300">
          We’re building trusted stablecoin liquidity rails that connect global capital to high-quality SME lending, with transparency baked in.
        </p>
<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">

<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/40 transition-all">
<div className="flex items-center gap-4">
<img alt="Masashi Leon Tanaka" className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-base font-medium text-slate-200">Masashi “Leon” Tanaka</div>
<div className="text-xs text-slate-400">Co-Founder &amp; CEO</div>
<div className="mt-2">
<a className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200" href="https://www.linkedin.com" target="_blank">
<i className="h-3.5 w-3.5" data-lucide="linkedin"></i>
                    LinkedIn
                  </a>
</div>
</div>
</div>
</div>

<div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-cyan-400/40 transition-all">
<div className="flex items-center gap-4">
<img alt="Mohit Kapadiya" className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-base font-medium text-slate-200">Mohit Kapadiya</div>
<div className="text-xs text-slate-400">Co-Founder &amp; CTO</div>
<div className="mt-2">
<a className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200" href="https://www.linkedin.com" target="_blank">
<i className="h-3.5 w-3.5" data-lucide="linkedin"></i>
                    LinkedIn
                  </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-6 pb-10">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<div className="text-xs text-slate-400">
              © 2025 ZINK Capital | Borderless Liquidity. Real World Finance.
            </div>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="rounded-md border border-white/10 p-2 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="X" className="rounded-md border border-white/10 p-2 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a aria-label="Telegram" className="rounded-md border border-white/10 p-2 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="send"></i>
</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
