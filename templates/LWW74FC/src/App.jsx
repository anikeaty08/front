import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons with stroke width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: {
            'stroke-width': 1.5
          }
        });
      });

      // Charts setup
      const textColor = 'rgba(226,232,240,0.8)'; // neutral-200
      const gridColor = 'rgba(148,163,184,0.15)'; // slate-ish
      const cyan = 'rgba(34,211,238,1)'; // cyan-400
      const cyanFill = 'rgba(34,211,238,0.15)';
      const emerald = 'rgba(16,185,129,1)';
      const emeraldFill = 'rgba(16,185,129,0.12)';
      const fuchsia = 'rgba(217,70,239,1)';
      const fuchsiaFill = 'rgba(217,70,239,0.12)';

      // Trend chart
      const trendCtx = document.getElementById('crashTrend').getContext('2d');
      const labels = Array.from({ length: 14 }, (_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (13 - i));
        return `${d.getMonth() + 1}/${d.getDate()}`;
      });

      new Chart(trendCtx, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Android',
              data: [620, 580, 640, 590, 660, 640, 700, 690, 720, 760, 740, 780, 800, 820],
              borderColor: cyan,
              backgroundColor: cyanFill,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            },
            {
              label: 'iOS',
              data: [290, 300, 280, 310, 295, 320, 330, 315, 340, 355, 360, 370, 365, 380],
              borderColor: emerald,
              backgroundColor: emeraldFill,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            },
            {
              label: 'Web',
              data: [140, 150, 160, 145, 155, 165, 170, 168, 175, 180, 178, 182, 186, 190],
              borderColor: fuchsia,
              backgroundColor: fuchsiaFill,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: textColor, boxWidth: 10, usePointStyle: true, pointStyle: 'line' }
            },
            tooltip: {
              mode: 'index',
              intersect: false,
              backgroundColor: 'rgba(17,24,39,0.9)',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#e5e7eb',
              padding: 10
            }
          },
          interaction: { mode: 'index', intersect: false },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: { color: textColor, maxTicksLimit: 7 }
            },
            y: {
              grid: { color: gridColor, drawBorder: false },
              ticks: { color: textColor, maxTicksLimit: 5 }
            }
          }
        }
      });

      // Platform share chart
      const platformCtx = document.getElementById('platformShare').getContext('2d');
      new Chart(platformCtx, {
        type: 'doughnut',
        data: {
          labels: ['iOS', 'Android', 'Web'],
          datasets: [
            {
              data: [34, 48, 18],
              backgroundColor: ['rgba(16,185,129,0.85)', 'rgba(34,211,238,0.85)', 'rgba(217,70,239,0.85)'],
              borderColor: ['rgba(16,185,129,0.2)', 'rgba(34,211,238,0.2)', 'rgba(217,70,239,0.2)'],
              borderWidth: 1,
              hoverOffset: 4
            }
          ]
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(17,24,39,0.9)',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#e5e7eb',
              padding: 10
            }
          },
          cutout: '64%'
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-3">
<div className="flex items-center gap-4">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 ring-1 ring-white/10 grid place-items-center">
<span className="text-cyan-400 text-[11px] font-semibold tracking-tight">CR</span>
</div>
<span className="text-sm text-neutral-300">Crash Analytics</span>
</div>

<nav className="hidden md:flex items-center gap-1 ml-4">
<button className="px-3 py-1.5 rounded-md text-sm text-neutral-200 bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800 transition-colors">
                Overview
              </button>
<button className="px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white border border-transparent hover:border-white/10 hover:bg-neutral-900/60 transition-colors">
                Issues
              </button>
<button className="px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white border border-transparent hover:border-white/10 hover:bg-neutral-900/60 transition-colors">
                Devices
              </button>
<button className="px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white border border-transparent hover:border-white/10 hover:bg-neutral-900/60 transition-colors">
                Releases
              </button>
</nav>

<div className="relative ml-auto hidden lg:block">
<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
<i className="h-4 w-4 text-neutral-400" data-lucide="search"></i>
</div>
<input className="w-80 pl-9 pr-3 py-2 rounded-md bg-neutral-900 text-sm text-neutral-200 placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition" placeholder="Search crash IDs, messages, devices..." type="text"/>
</div>

<div className="flex items-center gap-2 ml-auto lg:ml-4">

<details className="relative group">
<summary className="list-none cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800 transition text-sm text-neutral-200">
<i className="h-4 w-4 text-neutral-400" data-lucide="calendar"></i>
<span>Last 14 days</span>
<i className="h-4 w-4 text-neutral-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<div className="absolute right-0 mt-2 w-56 rounded-md bg-neutral-950 border border-white/10 shadow-xl p-1">
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900">Today</button>
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900">Last 7 days</button>
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900">Last 14 days</button>
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900">Last 30 days</button>
<div className="my-1 h-px bg-white/10"></div>
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900 flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="calendar-range"></i>
                    Custom range…
                  </button>
</div>
</details>

<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-600/25 hover:border-cyan-400/40 transition text-sm">
<i className="h-4 w-4" data-lucide="download"></i>
                Export
              </button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-6">

<div className="mb-6">
<div className="flex items-end justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">Crash overview</h1>
<p className="text-sm text-neutral-400 mt-1">Realtime insights and weekly trends across platforms and app versions.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20 transition">
<i className="h-4 w-4 mr-1.5 inline text-neutral-400" data-lucide="sliders-horizontal"></i>
                Filters
              </button>
<button className="px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20 transition">
<i className="h-4 w-4 mr-1.5 inline text-neutral-400" data-lucide="refresh-ccw"></i>
                Refresh
              </button>
</div>
</div>
</div>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

<div className="rounded-xl bg-neutral-950/60 border border-white/10 p-4 hover:border-white/15 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-md bg-cyan-600/15 border border-cyan-500/30 grid place-items-center">
<i className="h-4 w-4 text-cyan-400" data-lucide="activity"></i>
</span>
<span className="text-sm text-neutral-400">Total crashes</span>
</div>
<span className="text-xs text-emerald-400">+8.2%</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-semibold text-white">12,847</span>
<span className="text-xs text-neutral-500">last 14d</span>
</div>
<div className="mt-3 h-1.5 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full w-3/5 bg-cyan-500/60"></div>
</div>
</div>

<div className="rounded-xl bg-neutral-950/60 border border-white/10 p-4 hover:border-white/15 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-md bg-cyan-600/15 border border-cyan-500/30 grid place-items-center">
<i className="h-4 w-4 text-cyan-400" data-lucide="shield-check"></i>
</span>
<span className="text-sm text-neutral-400">Crash-free sessions</span>
</div>
<span className="text-xs text-emerald-400">+0.9%</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-semibold text-white">98.4%</span>
<span className="text-xs text-neutral-500">goal ≥ 99%</span>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="h-1.5 flex-1 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full w-[84%] bg-cyan-500/60"></div>
</div>
<span className="text-xs text-neutral-500">84/100</span>
</div>
</div>

<div className="rounded-xl bg-neutral-950/60 border border-white/10 p-4 hover:border-white/15 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-md bg-cyan-600/15 border border-cyan-500/30 grid place-items-center">
<i className="h-4 w-4 text-cyan-400" data-lucide="users"></i>
</span>
<span className="text-sm text-neutral-400">Affected users</span>
</div>
<span className="text-xs text-rose-400">+2.1%</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-semibold text-white">5,103</span>
<span className="text-xs text-neutral-500">unique</span>
</div>
<div className="mt-3 h-1.5 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full w-2/5 bg-cyan-500/60"></div>
</div>
</div>

<div className="rounded-xl bg-neutral-950/60 border border-white/10 p-4 hover:border-white/15 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-md bg-cyan-600/15 border border-cyan-500/30 grid place-items-center">
<i className="h-4 w-4 text-cyan-400" data-lucide="bug"></i>
</span>
<span className="text-sm text-neutral-400">New issues</span>
</div>
<span className="text-xs text-emerald-400">-4</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl tracking-tight font-semibold text-white">37</span>
<span className="text-xs text-neutral-500">last 7d</span>
</div>
<div className="mt-3 h-1.5 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-cyan-500/60"></div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

<div className="lg:col-span-2 rounded-xl bg-neutral-950/60 border border-white/10 p-4">
<div className="flex items-start justify-between">
<div>
<h2 className="text-lg tracking-tight font-semibold text-white">Crashes over time</h2>
<p className="text-xs text-neutral-400 mt-1">Daily crash count, grouped by platform</p>
</div>
<details className="relative">
<summary className="list-none cursor-pointer text-sm text-neutral-300 hover:text-white px-2 py-1 rounded-md border border-white/10 hover:border-white/20 bg-neutral-900/70">All platforms</summary>
<div className="absolute right-0 mt-2 w-44 rounded-md bg-neutral-950 border border-white/10 shadow-xl p-1">
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900">All platforms</button>
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900">iOS</button>
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900">Android</button>
<button className="w-full text-left px-3 py-2 rounded-sm text-sm text-neutral-200 hover:bg-neutral-900">Web</button>
</div>
</details>
</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-950 border border-white/10">
<div className="h-full">
<canvas id="crashTrend"></canvas>
</div>
</div>
</div>

<div className="rounded-xl bg-neutral-950/60 border border-white/10 p-4">
<div className="flex items-start justify-between">
<div>
<h2 className="text-lg tracking-tight font-semibold text-white">Platforms</h2>
<p className="text-xs text-neutral-400 mt-1">Share of crashes by platform</p>
</div>
<i className="h-5 w-5 text-neutral-400" data-lucide="pie-chart"></i>
</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-950 border border-white/10">
<div className="h-full">
<canvas id="platformShare"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2 text-xs text-neutral-300">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-cyan-400"></span> iOS
              </div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> Android
              </div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-fuchsia-400"></span> Web
              </div>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">

<div className="xl:col-span-2 rounded-xl bg-neutral-950/60 border border-white/10 p-4">
<div className="flex items-start justify-between">
<div>
<h2 className="text-lg tracking-tight font-semibold text-white">Top crash signatures</h2>
<p className="text-xs text-neutral-400 mt-1">Most frequent error groups</p>
</div>
<i className="h-5 w-5 text-neutral-400" data-lucide="alert-triangle"></i>
</div>
<div className="mt-4 space-y-3">

<div className="p-3 rounded-lg bg-neutral-950 border border-white/10 hover:border-white/20 transition">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 text-[10px] rounded bg-cyan-600/15 border border-cyan-500/30 text-cyan-300">Critical</span>
<p className="text-sm text-neutral-200 truncate">NullPointerException • HomeViewModel.kt:124</p>
</div>
<div className="mt-2 h-1.5 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500/60" style={{width: '58%'}}></div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">1,248</p>
<p className="text-xs text-neutral-500">+3.9%</p>
</div>
</div>
</div>
<div className="p-3 rounded-lg bg-neutral-950 border border-white/10 hover:border-white/20 transition">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 text-[10px] rounded bg-neutral-900 border border-white/10 text-neutral-300">High</span>
<p className="text-sm text-neutral-200 truncate">TypeError: Cannot read properties of undefined (reading 'map')</p>
</div>
<div className="mt-2 h-1.5 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500/60" style={{width: '41%'}}></div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">986</p>
<p className="text-xs text-neutral-500">+1.4%</p>
</div>
</div>
</div>
<div className="p-3 rounded-lg bg-neutral-950 border border-white/10 hover:border-white/20 transition">
<div className="flex items-center justify-between gap-3">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="px-1.5 py-0.5 text-[10px] rounded bg-neutral-900 border border-white/10 text-neutral-300">Medium</span>
<p className="text-sm text-neutral-200 truncate">SIGABRT • libc.so • abort</p>
</div>
<div className="mt-2 h-1.5 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500/60" style={{width: '28%'}}></div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">421</p>
<p className="text-xs text-neutral-500">-0.8%</p>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl bg-neutral-950/60 border border-white/10 p-4">
<div className="flex items-start justify-between">
<div>
<h2 className="text-lg tracking-tight font-semibold text-white">Top affected versions</h2>
<p className="text-xs text-neutral-400 mt-1">Crash count by release</p>
</div>
<i className="h-5 w-5 text-neutral-400" data-lucide="package-search"></i>
</div>
<div className="mt-4 divide-y divide-white/5">
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-6 w-6 grid place-items-center rounded bg-neutral-900 border border-white/10 text-[10px] text-neutral-300">v</span>
<div>
<p className="text-sm text-neutral-200">2.14.0</p>
<p className="text-xs text-neutral-500">Build 21400</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-white">4,103</p>
<p className="text-xs text-neutral-500">32%</p>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-6 w-6 grid place-items-center rounded bg-neutral-900 border border-white/10 text-[10px] text-neutral-300">v</span>
<div>
<p className="text-sm text-neutral-200">2.13.2</p>
<p className="text-xs text-neutral-500">Build 21320</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-white">3,231</p>
<p className="text-xs text-neutral-500">25%</p>
</div>
</div>
<div className="py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-6 w-6 grid place-items-center rounded bg-neutral-900 border border-white/10 text-[10px] text-neutral-300">v</span>
<div>
<p className="text-sm text-neutral-200">2.12.9</p>
<p className="text-xs text-neutral-500">Build 21290</p>
</div>
</div>
<div className="text-right">
<p className="text-sm text-white">1,980</p>
<p className="text-xs text-neutral-500">15%</p>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-xl bg-neutral-950/60 border border-white/10">
<div className="p-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<div className="flex-1">
<h2 className="text-lg tracking-tight font-semibold text-white">Recent crash reports</h2>
<p className="text-xs text-neutral-400 mt-1">Newest events with status and occurrence</p>
</div>
<div className="flex items-center gap-2">
<details className="relative">
<summary className="list-none cursor-pointer px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20 transition">
<i className="h-4 w-4 mr-1.5 inline text-neutral-400" data-lucide="filter"></i>
                  Filters
                </summary>
<div className="absolute right-0 mt-2 w-72 rounded-md bg-neutral-950 border border-white/10 shadow-xl p-3">
<div className="text-xs text-neutral-400 mb-2">Quick filters</div>
<div className="grid grid-cols-2 gap-2">
<button className="px-2.5 py-1.5 rounded bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20">Unresolved</button>
<button className="px-2.5 py-1.5 rounded bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20">Regressions</button>
<button className="px-2.5 py-1.5 rounded bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20">iOS</button>
<button className="px-2.5 py-1.5 rounded bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20">Android</button>
</div>
</div>
</details>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
<i className="h-4 w-4 text-neutral-400" data-lucide="search"></i>
</div>
<input className="w-56 pl-9 pr-3 py-2 rounded-md bg-neutral-900 text-sm text-neutral-200 placeholder:text-neutral-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/40 transition" placeholder="Search ID or message" type="text"/>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs uppercase text-neutral-400">
<tr className="border-b border-white/10">
<th className="text-left font-medium px-4 py-3">Crash ID</th>
<th className="text-left font-medium px-4 py-3">Message</th>
<th className="text-left font-medium px-4 py-3">Platform</th>
<th className="text-left font-medium px-4 py-3">App Version</th>
<th className="text-left font-medium px-4 py-3">Last seen</th>
<th className="text-right font-medium px-4 py-3">Occurrences</th>
<th className="text-right font-medium px-4 py-3">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-neutral-900/40">
<td className="px-4 py-3 font-medium text-white">cr_8fd1a</td>
<td className="px-4 py-3 text-neutral-300">NullPointerException HomeViewModel.kt:124</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-600/15 border border-cyan-500/30 text-cyan-300">Android</span>
</td>
<td className="px-4 py-3 text-neutral-300">2.14.0</td>
<td className="px-4 py-3 text-neutral-300">2m ago</td>
<td className="px-4 py-3 text-right text-neutral-200">142</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300">Unresolved</span>
</td>
</tr>
<tr className="hover:bg-neutral-900/40">
<td className="px-4 py-3 font-medium text-white">cr_7ab94</td>
<td className="px-4 py-3 text-neutral-300">TypeError reading 'map' in dashboard.jsx</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-fuchsia-600/15 border border-fuchsia-500/30 text-fuchsia-300">Web</span>
</td>
<td className="px-4 py-3 text-neutral-300">2.14.0</td>
<td className="px-4 py-3 text-neutral-300">15m ago</td>
<td className="px-4 py-3 text-right text-neutral-200">63</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300">Unresolved</span>
</td>
</tr>
<tr className="hover:bg-neutral-900/40">
<td className="px-4 py-3 font-medium text-white">cr_c12ff</td>
<td className="px-4 py-3 text-neutral-300">SIGABRT • libc.so • abort</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-600/15 border border-emerald-500/30 text-emerald-300">iOS</span>
</td>
<td className="px-4 py-3 text-neutral-300">2.13.2</td>
<td className="px-4 py-3 text-neutral-300">1h ago</td>
<td className="px-4 py-3 text-right text-neutral-200">28</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300">Investigating</span>
</td>
</tr>
<tr className="hover:bg-neutral-900/40">
<td className="px-4 py-3 font-medium text-white">cr_0a6e2</td>
<td className="px-4 py-3 text-neutral-300">OutOfMemoryError • ImageDecoder</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-600/15 border border-cyan-500/30 text-cyan-300">Android</span>
</td>
<td className="px-4 py-3 text-neutral-300">2.12.9</td>
<td className="px-4 py-3 text-neutral-300">3h ago</td>
<td className="px-4 py-3 text-right text-neutral-200">12</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-300">Resolved</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-white/10 flex items-center justify-between">
<p className="text-xs text-neutral-500">Showing 1–20 of 1,204</p>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20 transition">Previous</button>
<button className="px-3 py-1.5 rounded-md bg-neutral-900 border border-white/10 text-sm text-neutral-200 hover:bg-neutral-800 hover:border-white/20 transition">Next</button>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
