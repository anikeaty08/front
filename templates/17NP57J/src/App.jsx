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
      lucide.createIcons();

      // Toast demo
      const toast = document.getElementById('toast');
      const btnDeposit = document.getElementById('btnDeposit');
      btnDeposit?.addEventListener('click', () => {
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 3500);
      });

      // Custom checkbox (Hide dust)
      const dust = document.getElementById('toggleDust');
      dust?.addEventListener('click', () => {
        dust.classList.toggle('checked');
      });

      // Tabs underline interaction
      function activateTabs(selector) {
        const tabs = document.querySelectorAll(selector);
        function setActive(el) {
          tabs.forEach(t => {
            const u = t.querySelector('span');
            u.style.width = (t === el) ? '100%' : '0';
            t.classList.toggle('text-neutral-200', t === el);
            t.classList.toggle('text-neutral-400', t !== el);
          });
        }
        tabs.forEach((t, i) => {
          if (i === 0) setActive(t);
          t.addEventListener('click', () => setActive(t));
        });
      }
      activateTabs('.time-tab');
      activateTabs('.perf-tab');

      // Charts
      const gridColor = 'rgba(255,255,255,0.06)';
      const tickColor = '#9CA3AF';
      const ctx1 = document.getElementById('equityChart');
      const ctx2 = document.getElementById('perfChart');

      function gradient(ctx, color) {
        const g = ctx.createLinearGradient(0, 0, 0, 160);
        g.addColorStop(0, color.replace('1)', '0.35)'));
        g.addColorStop(1, color.replace('1)', '0)'));
        return g;
      }

      const eq = new Chart(ctx1, {
        type: 'line',
        data: {
          labels: Array.from({ length: 60 }, (_, i) => i),
          datasets: [{
            data: [87,86,85,84,84.5,83,84.2,83.9,85,86,85.2,85.6,86.7,87.4,87.2,87.8,88.4,89,87.9,88.6,89.5,90.7,90.1,89.9,90.8,91.2,90.4,90.9,91.8,92.5,91.7,92.2,92.9,93.4,93.1,94.2,93.9,94.4,94.9,94.2,94.5,95.1,95.6,95.2,95.9,96.3,96.1,96.7,97.2,97.8,97.3,97.9,98.6,98.2,98.9,99.1,99.6,99.2,100],
            tension: 0.35,
            borderColor: 'rgba(52,211,153,1)',
            backgroundColor: (c) => gradient(c.chart.ctx, 'rgba(52,211,153,1)'),
            fill: true,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { intersect: false, mode: 'index' } },
          scales: {
            x: { display: false, grid: { display: false } },
            y: {
              display: false,
              grid: { color: gridColor },
              ticks: { color: tickColor }
            }
          },
          interaction: { intersect: false, mode: 'nearest' }
        }
      });

      const perf = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            label: 'P&L',
            data: [1200, -400, 900, 1800, -200, 600, 2100],
            backgroundColor: (ctx) => ctx.raw >= 0 ? 'rgba(52,211,153,0.6)' : 'rgba(244,63,94,0.6)',
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: tickColor } },
            y: { grid: { color: gridColor }, ticks: { color: tickColor } }
          }
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
      

<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:w-64 flex-col border-r border-white/10 bg-neutral-950/60">
<div className="px-4 py-4">
<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-xl bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center">
<i aria-label="Logo" className="h-4 w-4 text-emerald-300" data-lucide="wallet"></i>
</div>
<span className="text-lg font-semibold tracking-tight">Vault</span>
</a>
</div>
<nav className="px-2 py-2 space-y-1">
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg bg-neutral-900/70 border border-white/10 backdrop-blur hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20 transition" href="#">
<i aria-label="Overview" className="h-4 w-4 text-neutral-300" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Overview</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-900/50 border border-transparent hover:border-white/10 transition" href="#">
<i aria-label="Analysis" className="h-4 w-4 text-neutral-400 group-hover:text-neutral-200" data-lucide="line-chart"></i>
<span className="text-sm text-neutral-400 group-hover:text-neutral-200">Analysis</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-900/50 border border-transparent hover:border-white/10 transition" href="#">
<i aria-label="Orders" className="h-4 w-4 text-neutral-400 group-hover:text-neutral-200" data-lucide="list-ordered"></i>
<span className="text-sm text-neutral-400 group-hover:text-neutral-200">Orders</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-900/50 border border-transparent hover:border-white/10 transition" href="#">
<i aria-label="Staking" className="h-4 w-4 text-neutral-400 group-hover:text-neutral-200" data-lucide="sparkles"></i>
<span className="text-sm text-neutral-400 group-hover:text-neutral-200">Staking</span>
</a>
</nav>
<div className="mt-auto p-4">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur p-4 shadow-2xl">
<div className="flex items-start gap-3">
<img alt="Minimal 3D" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="text-sm font-medium tracking-tight">Yield Booster</p>
<p className="text-xs text-neutral-500">Stake assets to earn extra APY</p>
</div>
</div>
<button className="mt-3 h-11 w-full rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/20">
              Explore Staking
            </button>
</div>
</div>
</aside>

<main className="flex-1">

<header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
<div className="px-4 lg:px-6 py-3 flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg bg-neutral-900/70 border border-white/10 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20">
<i aria-label="Open navigation" className="h-4 w-4" data-lucide="menu"></i>
</button>
<div className="hidden sm:flex items-center gap-2 text-neutral-400">
<span className="text-sm">Dashboard</span>
<i className="h-4 w-4" data-lucide="chevron-right"></i>
<span className="text-sm text-neutral-200">Portfolio</span>
</div>
<div className="ml-auto flex items-center gap-3">
<div className="relative hidden md:block">
<input className="h-11 w-72 rounded-lg bg-neutral-800 border border-white/10 placeholder-neutral-500 text-neutral-100 text-sm pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Search assets, pairs..." type="text"/>
<i aria-label="Search icon" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" data-lucide="search"></i>
</div>
<div className="hidden sm:flex items-center gap-2 rounded-lg bg-neutral-900/70 border border-white/10 px-3 h-11">
<i aria-label="Connected" className="h-4 w-4 text-emerald-300" data-lucide="shield-check"></i>
<span className="text-sm font-medium tracking-tight">0xD6F5…f42A</span>
<button aria-label="Copy address" className="ml-1 p-1 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20">
<i className="h-4 w-4 text-neutral-400" data-lucide="copy"></i>
</button>
</div>
<button className="h-11 rounded-xl px-4 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20" id="btnDeposit">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="download"></i>
<span>Deposit</span>
</div>
</button>
<button className="h-11 rounded-xl px-4 bg-rose-500/10 hover:bg-rose-500/15 border border-rose-500/20 text-rose-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="upload"></i>
<span>Withdraw</span>
</div>
</button>
<button className="h-11 rounded-lg px-4 bg-neutral-800/70 hover:bg-neutral-800 border border-white/10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="repeat"></i>
<span>Transfer</span>
</div>
</button>
</div>
</div>
</header>

<section className="px-4 lg:px-6 py-6 space-y-6">

<div className="rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur shadow-2xl p-5 sm:p-6">
<div className="flex flex-col lg:flex-row lg:items-start gap-6">
<div className="flex-1 space-y-4">
<div className="flex flex-wrap items-center gap-3">
<span className="text-sm text-neutral-400">Wallet</span>
<span className="text-sm font-medium tracking-tight px-2 py-1 rounded-md bg-neutral-800 border border-white/10">0xD6F5…f42A</span>
<span className="hidden sm:inline h-4 w-px bg-white/10"></span>
<span className="text-sm text-neutral-400">14D Volume</span>
<span className="text-sm font-medium tracking-tight">$803,422.70</span>
<span className="hidden sm:inline h-4 w-px bg-white/10"></span>
<span className="text-sm text-neutral-400">Fee Tier</span>
<span className="text-sm font-medium tracking-tight">0.015% / 0.025%</span>
</div>
<div className="space-y-2">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">$87,638.39</h2>
<div className="flex items-center gap-4 text-sm">
<span className="text-rose-300">-$2,783.07 (3.1%)</span>
<span className="text-neutral-500">24h</span>
<span className="text-emerald-300">+$32,158.37 (57.6%)</span>
<span className="text-neutral-500">Overall</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-xl bg-neutral-900/60 border border-white/10 p-4">
<p className="text-xs text-neutral-500 tracking-tight">Perpetuals</p>
<p className="mt-1 text-lg font-semibold tracking-tight">$86,065.91</p>
</div>
<div className="rounded-xl bg-neutral-900/60 border border-white/10 p-4">
<p className="text-xs text-neutral-500 tracking-tight">Spot</p>
<p className="mt-1 text-lg font-semibold tracking-tight">$3.25</p>
</div>
<div className="rounded-xl bg-neutral-900/60 border border-white/10 p-4">
<p className="text-xs text-neutral-500 tracking-tight">Staked</p>
<p className="mt-1 text-lg font-semibold tracking-tight">$548.09</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center gap-1">
<button className="time-tab relative px-2 py-1 text-sm text-neutral-400 hover:text-neutral-200" data-tab="24h">
                      24h
                      <span className="tab-underline absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 rounded-full"></span>
</button>
<button className="time-tab relative px-2 py-1 text-sm text-neutral-400 hover:text-neutral-200" data-tab="7d">
                      7d
                      <span className="tab-underline absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 rounded-full"></span>
</button>
<button className="time-tab relative px-2 py-1 text-sm text-neutral-400 hover:text-neutral-200" data-tab="30d">
                      30d
                      <span className="tab-underline absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 rounded-full"></span>
</button>
<button className="time-tab relative px-2 py-1 text-sm text-neutral-400 hover:text-neutral-200" data-tab="1y">
                      1y
                      <span className="tab-underline absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 rounded-full"></span>
</button>
</div>
<div className="ml-auto flex items-center gap-3">

<button className="flex items-center gap-2 group select-none" id="toggleDust">
<span aria-label="Hide dust" className="inline-flex items-center justify-center h-4 w-4 rounded-[6px] bg-neutral-800 border border-white/10 group-[.checked]:bg-emerald-500/20 group-[.checked]:border-emerald-500/30 transition">
<svg className="hidden group-[.checked]:block h-3 w-3 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</span>
<span className="text-xs text-neutral-400 group-[.checked]:text-neutral-200">Hide dust</span>
</button>
</div>
</div>
</div>

<div className="w-full lg:w-[420px]">
<div className="rounded-xl bg-neutral-900/60 border border-white/10 p-3">
<p className="text-xs text-neutral-500 tracking-tight">Equity Curve</p>

<div className="mt-2 relative h-40">
<canvas className="absolute inset-0" id="equityChart"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur shadow-2xl">
<div className="p-5 sm:p-6 flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Spot</h3>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 border border-white/10 text-sm">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="search"></i>
<span className="text-neutral-300">Find asset</span>
</div>
</button>
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 border border-white/10 text-sm">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="plus"></i>
<span>Add</span>
</div>
</button>
</div>
</div>
<div className="px-5 sm:px-6 pb-5">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-neutral-500">
<tr className="text-left">
<th className="font-medium py-2">Coin</th>
<th className="font-medium py-2">Total</th>
<th className="font-medium py-2">Value</th>
<th className="font-medium py-2">Entry / Price</th>
<th className="font-medium py-2 text-right">P&amp;L</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-neutral-800/40">
<td className="py-3">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 inline-flex items-center justify-center text-xs font-medium">USDC</span>
<div className="flex items-center gap-2">
<span className="font-medium">USDC</span>
<span className="text-xs px-2 py-0.5 rounded-md bg-neutral-800 border border-white/10 text-neutral-400">Spot</span>
</div>
</div>
</td>
<td className="py-3">3.25 USDC</td>
<td className="py-3">$3.25</td>
<td className="py-3">$1.00</td>
<td className="py-3 text-right text-neutral-400">—</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur shadow-2xl">
<div className="p-5 sm:p-6 flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Perpetuals</h3>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 border border-white/10 text-sm">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="settings-2"></i>
<span>Manage</span>
</div>
</button>
</div>
</div>
<div className="px-5 sm:px-6 pb-5">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-neutral-500">
<tr className="text-left">
<th className="font-medium py-2">Coin</th>
<th className="font-medium py-2">Size</th>
<th className="font-medium py-2">Value</th>
<th className="font-medium py-2">Entry / Price</th>
<th className="font-medium py-2 text-right">Unrealized P&amp;L</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-neutral-800/40">
<td className="py-3">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-flex items-center justify-center">
<i className="h-4 w-4 text-emerald-300" data-lucide="trending-up"></i>
</span>
<div className="flex items-center gap-2">
<span className="font-medium">HYPE-USD</span>
<span className="text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">10x Long</span>
</div>
</div>
</td>
<td className="py-3">6,210.67 HYPE</td>
<td className="py-3">$273,884.34</td>
<td className="py-3">$44.667 → $44.099</td>
<td className="py-3 text-right text-rose-300">-$3,529.52 (12.72%)</td>
</tr>
<tr className="hover:bg-neutral-800/40">
<td className="py-3">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 inline-flex items-center justify-center text-xs font-medium">USDC</span>
<div className="flex items-center gap-2">
<span className="font-medium">USDC</span>
</div>
</div>
</td>
<td className="py-3">58,658.83 USDC</td>
<td className="py-3">$58,658.83</td>
<td className="py-3">$1.00</td>
<td className="py-3 text-right text-neutral-400">—</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur shadow-2xl p-5 sm:p-6 xl:col-span-2">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Performance</h3>
<div className="flex items-center gap-2">
<button className="perf-tab relative px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-200" data-perf="pnl">
                    P&amp;L
                    <span className="perf-underline absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 rounded-full"></span>
</button>
<button className="perf-tab relative px-3 py-1.5 text-sm text-neutral-400 hover:text-neutral-200" data-perf="vol">
                    Volume
                    <span className="perf-underline absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-400 rounded-full"></span>
</button>
</div>
</div>
<div className="mt-3">
<div className="relative h-56">
<canvas className="absolute inset-0" id="perfChart"></canvas>
</div>
</div>
</div>
<div className="rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur shadow-2xl p-5 sm:p-6">
<h3 className="text-lg font-semibold tracking-tight">Allocation</h3>
<div className="mt-3 grid grid-cols-1 gap-3">
<div className="rounded-xl bg-neutral-900/60 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-flex items-center justify-center">
<i className="h-4 w-4 text-emerald-300" data-lucide="coins"></i>
</span>
<div>
<p className="text-sm font-medium">Perps</p>
<p className="text-xs text-neutral-500">$86,065.91</p>
</div>
</div>
<span className="text-sm text-neutral-400">98.2%</span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 inline-flex items-center justify-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="coin"></i>
</span>
<div>
<p className="text-sm font-medium">Spot</p>
<p className="text-xs text-neutral-500">$3.25</p>
</div>
</div>
<span className="text-sm text-neutral-400">0.0%</span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 inline-flex items-center justify-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="shield"></i>
</span>
<div>
<p className="text-sm font-medium">Staked</p>
<p className="text-xs text-neutral-500">$548.09</p>
</div>
</div>
<span className="text-sm text-neutral-400">1.8%</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur shadow-2xl">
<div className="p-5 sm:p-6 flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Transfers</h3>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 border border-white/10 text-sm">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="filter"></i>
<span>Filters</span>
</div>
</button>
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 hover:bg-neutral-800 border border-white/10 text-sm">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="download"></i>
<span>Export</span>
</div>
</button>
</div>
</div>
<div className="px-5 sm:px-6 pb-5">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-neutral-500">
<tr className="text-left">
<th className="font-medium py-2">Type</th>
<th className="font-medium py-2">Value</th>
<th className="font-medium py-2">Fee</th>
<th className="font-medium py-2">Account</th>
<th className="font-medium py-2">Status</th>
<th className="font-medium py-2">Time</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">

<tr className="hover:bg-neutral-800/40">
<td className="py-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 inline-flex items-center justify-center">
<i aria-label="Deposit" className="h-4 w-4 text-emerald-300" data-lucide="circle-arrow-down"></i>
</span>
<span className="font-medium">USDC • Deposit</span>
</div>
</td>
<td className="py-3 text-emerald-300">+1,000 USDC</td>
<td className="py-3">—</td>
<td className="py-3">Perpetuals</td>
<td className="py-3">
<span className="text-emerald-300 text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">Complete</span>
</td>
<td className="py-3">Aug 21, 2025, 7:39 PM</td>
</tr>
<tr className="hover:bg-neutral-800/40">
<td className="py-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 inline-flex items-center justify-center">
<i aria-label="Send" className="h-4 w-4 text-neutral-300" data-lucide="send"></i>
</span>
<span className="font-medium">HYPE • Send</span>
</div>
</td>
<td className="py-3 text-rose-300">-90.66 HYPE</td>
<td className="py-3">—</td>
<td className="py-3">Spot</td>
<td className="py-3">
<span className="text-neutral-300 text-xs px-2 py-0.5 rounded-md bg-neutral-800 border border-white/10">Pending</span>
</td>
<td className="py-3">Aug 17, 2025, 9:13 PM</td>
</tr>
<tr className="hover:bg-neutral-800/40">
<td className="py-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 inline-flex items-center justify-center">
<i aria-label="Transfer" className="h-4 w-4 text-neutral-300" data-lucide="repeat"></i>
</span>
<span className="font-medium">USDC • Transfer</span>
</div>
</td>
<td className="py-3 text-neutral-300">1,000 USDC</td>
<td className="py-3">—</td>
<td className="py-3">Perpetuals → Spot</td>
<td className="py-3">
<span className="text-emerald-300 text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">Complete</span>
</td>
<td className="py-3">Aug 17, 2025, 9:12 PM</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
<img alt="Mountains" className="h-24 w-full sm:w-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-lg font-semibold tracking-tight">Level up your execution</p>
<p className="text-sm text-neutral-400">Smart routing, slippage-aware orders and unified balances across accounts.</p>
</div>
<button className="h-11 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 text-sm font-medium">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Try Pro</span>
</div>
</button>
</div>
</section>
</main>
</div>

<div className="fixed bottom-5 right-5 hidden items-center gap-3 p-4 rounded-xl bg-neutral-900/95 border border-white/10 shadow-xl" id="toast">
<i className="h-5 w-5 text-emerald-300" data-lucide="check-circle-2"></i>
<div>
<p className="text-sm font-medium tracking-tight">Deposit queued</p>
<p className="text-xs text-neutral-400">Funds will appear once confirmed.</p>
</div>
</div>


    </>
  );
}
