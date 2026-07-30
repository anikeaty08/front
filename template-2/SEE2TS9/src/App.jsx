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
      
      // Init icons
      lucide.createIcons();

      // Dropdowns
      const metricBtn = document.getElementById('metricBtn');
      const metricMenu = document.getElementById('metricMenu');
      const rangeBtn = document.getElementById('rangeBtn');
      const rangeMenu = document.getElementById('rangeMenu');

      function toggleMenu(btn, menu) {
        menu.classList.toggle('hidden');
        const handler = (e) => {
          if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.add('hidden');
            document.removeEventListener('click', handler);
          }
        };
        setTimeout(() => document.addEventListener('click', handler), 0);
      }

      metricBtn.addEventListener('click', () => toggleMenu(metricBtn, metricMenu));
      rangeBtn.addEventListener('click', () => toggleMenu(rangeBtn, rangeMenu));

      metricMenu.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          metricBtn.querySelector('span').textContent = b.textContent.trim();
          metricMenu.classList.add('hidden');
        });
      });
      rangeMenu.querySelectorAll('button').forEach(b => {
        b.addEventListener('click', () => {
          rangeBtn.querySelector('span').textContent = b.textContent.trim();
          rangeMenu.classList.add('hidden');
        });
      });

      // Tabs
      const tabButtons = document.querySelectorAll('[data-tab]');
      const panels = {
        calendar: document.getElementById('panel-calendar'),
        profitability: document.getElementById('panel-profitability'),
        completed: document.getElementById('panel-completed'),
        fills: document.getElementById('panel-fills'),
        funding: document.getElementById('panel-funding'),
      };
      function setActiveTab(key) {
        tabButtons.forEach(btn => {
          const active = btn.getAttribute('data-tab') === key;
          btn.classList.toggle('text-emerald-300', active);
          btn.classList.toggle('border-b-2', active);
          btn.classList.toggle('border-emerald-400', active);
          btn.classList.toggle('text-neutral-400', !active);
        });
        Object.entries(panels).forEach(([k, el]) => {
          el.classList.toggle('hidden', k !== key);
        });
      }
      tabButtons.forEach(btn => btn.addEventListener('click', () => setActiveTab(btn.getAttribute('data-tab'))));
      setActiveTab('profitability');

      // Chart.js P&L chart
      const ctx = document.getElementById('pnlChart').getContext('2d');
      const grad = ctx.createLinearGradient(0, 0, 0, 220);
      grad.addColorStop(0, 'rgba(52, 211, 153, 0.35)');   // emerald-400/35
      grad.addColorStop(1, 'rgba(52, 211, 153, 0.03)');   // fade

      const gridColor = 'rgba(255,255,255,0.06)';
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
          datasets: [{
            label: 'P&L',
            data: [-1200,-600,-950,400,1250,980,1600,1200,300,-450,200,650],
            tension: 0.35,
            borderColor: 'rgba(52, 211, 153, 0.9)',
            backgroundColor: grad,
            pointRadius: 0,
            fill: true,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(23,23,23,0.95)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              padding: 10,
              titleColor: '#e5e5e5',
              bodyColor: '#d4d4d4',
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: { color: gridColor },
              ticks: { color: '#9ca3af', maxTicksLimit: 6, font: { family: 'Inter' } }
            },
            y: {
              grid: { color: gridColor },
              ticks: { color: '#9ca3af', maxTicksLimit: 5, font: { family: 'Inter' } }
            }
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
      
<div className="flex">

<aside className="hidden lg:flex lg:w-64 xl:w-72 flex-col border-r border-white/10 bg-neutral-950/90 backdrop-blur sticky top-0 h-screen">
<div className="px-5 pt-5 pb-4 flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
<i className="h-5 w-5 text-emerald-300" data-lucide="line-chart"></i>
</div>
<div className="flex flex-col leading-tight">
<span className="text-lg font-semibold tracking-tight">Nebula Trade</span>
<span className="text-xs text-neutral-500 tracking-tight">Crypto Portfolio</span>
</div>
</div>
<nav className="px-3 py-2 space-y-1">
<a className="group flex items-center gap-3 px-3 h-11 rounded-lg text-neutral-400 hover:text-neutral-200 border border-transparent hover:border-white/10 hover:bg-neutral-900/60" href="#">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
<span className="text-sm tracking-tight">Overview</span>
</a>
<a className="group flex items-center gap-3 px-3 h-11 rounded-lg text-emerald-300 bg-emerald-500/10 border border-emerald-500/20" href="#">
<i className="h-4 w-4" data-lucide="activity"></i>
<span className="text-sm tracking-tight">Analysis</span>
</a>
<a className="group flex items-center gap-3 px-3 h-11 rounded-lg text-neutral-400 hover:text-neutral-200 border border-transparent hover:border-white/10 hover:bg-neutral-900/60" href="#">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
<span className="text-sm tracking-tight">Orders</span>
</a>
<a className="group flex items-center gap-3 px-3 h-11 rounded-lg text-neutral-400 hover:text-neutral-200 border border-transparent hover:border-white/10 hover:bg-neutral-900/60" href="#">
<i className="h-4 w-4" data-lucide="layers"></i>
<span className="text-sm tracking-tight">Staking</span>
</a>
</nav>
<div className="mt-auto p-4">
<div className="p-3 rounded-2xl bg-neutral-900/70 border border-white/10 shadow-2xl flex items-center gap-3">
<img alt="User avatar" className="h-9 w-9 rounded-lg object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=96&auto=format&fit=crop" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">alex@nebula.dev</p>
<p className="text-xs text-neutral-500">Team Pro</p>
</div>
<button aria-label="Settings" className="h-9 px-3 rounded-lg border border-white/10 bg-neutral-800/70 hover:bg-neutral-800 text-neutral-300">
<i className="h-4 w-4" data-lucide="settings"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 min-w-0">

<header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight">Analysis</h1>
<span className="text-neutral-500 text-sm hidden sm:inline">/</span>
<span className="text-sm text-emerald-300 hidden sm:inline tracking-tight">Asset Profitability</span>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<button className="h-11 px-3 rounded-lg bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 text-sm text-neutral-300 flex items-center gap-2" id="metricBtn">
<i className="h-4 w-4" data-lucide="percent"></i>
<span className="tracking-tight">P&L</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-44 rounded-lg border border-white/10 bg-neutral-900 shadow-xl p-1" id="metricMenu">
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800 text-neutral-300" data-value="pnl">P&L</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800 text-neutral-300" data-value="roi">ROI</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800 text-neutral-300" data-value="winrate">Win rate</button>
</div>
</div>
<div className="relative">
<button className="h-11 px-3 rounded-lg bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 text-sm text-neutral-300 flex items-center gap-2" id="rangeBtn">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span className="tracking-tight">30D</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-44 rounded-lg border border-white/10 bg-neutral-900 shadow-xl p-1" id="rangeMenu">
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800 text-neutral-300" data-value="24h">24H</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800 text-neutral-300" data-value="7d">7D</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800 text-neutral-300" data-value="30d">30D</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-neutral-800 text-neutral-300" data-value="90d">90D</button>
</div>
</div>
<button className="h-11 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 text-emerald-300 text-sm flex items-center gap-2">
<i className="h-4 w-4" data-lucide="download"></i>
<span className="tracking-tight">Export</span>
</button>
</div>
</div>
</header>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

<section className="rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl p-5 sm:p-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="space-y-4">
<div>
<p className="text-sm text-neutral-500 tracking-tight">Account Value</p>
<p className="text-3xl sm:text-4xl font-semibold tracking-tight">$87,663.35</p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-xl border border-white/10 bg-neutral-900">
<p className="text-xs text-neutral-500 tracking-tight">Total P&L</p>
<p className="text-sm text-rose-300 font-medium tracking-tight">-2,848.90 (-0.28%)</p>
</div>
<div className="p-3 rounded-xl border border-white/10 bg-neutral-900">
<p className="text-xs text-neutral-500 tracking-tight">Spot P&L</p>
<p className="text-sm text-rose-300 font-medium tracking-tight">-257.02 (-0.02%)</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10">
<p className="text-xs text-neutral-400 tracking-tight">Win Rate</p>
<p className="text-sm text-emerald-300 font-medium tracking-tight">54.01% (101/187)</p>
</div>
<div className="p-3 rounded-xl border border-white/10 bg-neutral-900">
<p className="text-xs text-neutral-400 tracking-tight">Style</p>
<p className="text-sm text-neutral-300 font-medium tracking-tight">Swing Trader</p>
</div>
</div>
</div>
<div className="lg:col-span-2">
<div className="h-56 sm:h-64 rounded-xl border border-white/10 bg-neutral-900 p-3">
<div className="h-full w-full">
<div className="h-full w-full relative">
<div className="absolute inset-0 p-1">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas aria-label="P&L Line Chart" id="pnlChart" role="img"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="mt-2 text-xs text-neutral-500 tracking-tight">P&L over selected range. Hover for details.</p>
</div>
</div>
</section>

<section className="space-y-3">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Historical Breakdown</h2>

<div className="flex items-center gap-2 overflow-x-auto">
<button className="h-11 px-3 rounded-lg text-sm text-neutral-400 hover:text-neutral-200 border border-transparent" data-tab="calendar">
                Trading Calendar
              </button>
<button className="h-11 px-3 rounded-lg text-sm text-emerald-300 border-b-2 border-emerald-400" data-tab="profitability">
                Asset Profitability
              </button>
<button className="h-11 px-3 rounded-lg text-sm text-neutral-400 hover:text-neutral-200 border border-transparent" data-tab="completed">
                Completed Trades
              </button>
<button className="h-11 px-3 rounded-lg text-sm text-neutral-400 hover:text-neutral-200 border border-transparent" data-tab="fills">
                Fills History
              </button>
<button className="h-11 px-3 rounded-lg text-sm text-neutral-400 hover:text-neutral-200 border border-transparent" data-tab="funding">
                Funding History
              </button>
</div>


<div className="rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl" id="panel-profitability">
<div className="p-4 sm:p-5">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="coins"></i>
<p className="text-sm text-neutral-400 tracking-tight">Per-asset performance across the selected range</p>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 text-xs text-neutral-300 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i>
                      Columns
                    </button>
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 text-xs text-neutral-300 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="refresh-cw"></i>
                      Sync Range
                    </button>
</div>
</div>
</div>
<div className="border-t border-white/10">

<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-3 text-xs text-neutral-500">
<div className="col-span-4 sm:col-span-3 flex items-center gap-2">
<button className="flex items-center gap-1">
<span className="tracking-tight">Coin</span>
<i className="h-3.5 w-3.5" data-lucide="chevrons-up-down"></i>
</button>
</div>
<div className="col-span-2 sm:col-span-2 flex items-center">
<span className="tracking-tight">P&L</span>
</div>
<div className="col-span-3 sm:col-span-3">
<span className="tracking-tight">Win Rate</span>
</div>
<div className="col-span-3 sm:col-span-2">
<span className="tracking-tight">Volume</span>
</div>
<div className="hidden sm:flex col-span-2">
<span className="tracking-tight">Biggest Win</span>
</div>
<div className="hidden sm:flex col-span-2">
<span className="tracking-tight">Biggest Loss</span>
</div>
</div>

<div className="divide-y divide-white/10">

<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-3 items-center hover:bg-neutral-900/60">
<div className="col-span-4 sm:col-span-3 flex items-center gap-3 min-w-0">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<span className="text-emerald-300 text-xs font-medium">ETH</span>
</div>
<div className="min-w-0">
<p className="text-sm font-medium truncate tracking-tight">ETH-USD</p>
<p className="text-xs text-neutral-500">Perp + Spot</p>
</div>
</div>
<div className="col-span-2 sm:col-span-2">
<p className="text-sm text-emerald-300 font-medium tracking-tight">+27,323.35</p>
</div>
<div className="col-span-3 sm:col-span-3">
<div className="flex items-center gap-2">
<p className="text-sm text-neutral-300 w-16">51.6%</p>
<div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: `51.6%`}}></div>
</div>
</div>
</div>
<div className="col-span-3 sm:col-span-2">
<p className="text-sm text-neutral-300 tracking-tight">$5.86M</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-emerald-300 tracking-tight">+25,341.05</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-rose-300 tracking-tight">-32,839.45</p>
</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-3 items-center hover:bg-neutral-900/60">
<div className="col-span-4 sm:col-span-3 flex items-center gap-3 min-w-0">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/10 border border-amber-500/20 flex items-center justify-center">
<span className="text-amber-300 text-xs font-medium">BTC</span>
</div>
<div className="min-w-0">
<p className="text-sm font-medium truncate tracking-tight">BTC-USD</p>
<p className="text-xs text-neutral-500">Perp</p>
</div>
</div>
<div className="col-span-2 sm:col-span-2">
<p className="text-sm text-emerald-300 font-medium tracking-tight">+3,027.14</p>
</div>
<div className="col-span-3 sm:col-span-3">
<div className="flex items-center gap-2">
<p className="text-sm text-neutral-300 w-16">54.3%</p>
<div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: `54.3%`}}></div>
</div>
</div>
</div>
<div className="col-span-3 sm:col-span-2">
<p className="text-sm text-neutral-300 tracking-tight">$10.68M</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-emerald-300 tracking-tight">+8,234.23</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-rose-300 tracking-tight">-16,450.55</p>
</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-3 items-center hover:bg-neutral-900/60">
<div className="col-span-4 sm:col-span-3 flex items-center gap-3 min-w-0">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500/20 to-sky-500/10 border border-sky-500/20 flex items-center justify-center">
<span className="text-sky-300 text-xs font-medium">SOL</span>
</div>
<div className="min-w-0">
<p className="text-sm font-medium truncate tracking-tight">SOL-USD</p>
<p className="text-xs text-neutral-500">Spot</p>
</div>
</div>
<div className="col-span-2 sm:col-span-2">
<p className="text-sm text-emerald-300 font-medium tracking-tight">+2,140.47</p>
</div>
<div className="col-span-3 sm:col-span-3">
<div className="flex items-center gap-2">
<p className="text-sm text-neutral-300 w-16">70.1%</p>
<div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: `70.1%`}}></div>
</div>
</div>
</div>
<div className="col-span-3 sm:col-span-2">
<p className="text-sm text-neutral-300 tracking-tight">$4.73M</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-emerald-300 tracking-tight">+1,077.04</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-rose-300 tracking-tight">-</p>
</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-3 items-center hover:bg-neutral-900/60">
<div className="col-span-4 sm:col-span-3 flex items-center gap-3 min-w-0">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-lime-500/20 to-lime-500/10 border border-lime-500/20 flex items-center justify-center">
<span className="text-lime-300 text-xs font-medium">DOGE</span>
</div>
<div className="min-w-0">
<p className="text-sm font-medium truncate tracking-tight">DOGE-USD</p>
<p className="text-xs text-neutral-500">Perp + Spot</p>
</div>
</div>
<div className="col-span-2 sm:col-span-2">
<p className="text-sm text-emerald-300 font-medium tracking-tight">+1,120.58</p>
</div>
<div className="col-span-3 sm:col-span-3">
<div className="flex items-center gap-2">
<p className="text-sm text-neutral-300 w-16">43.8%</p>
<div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: `43.8%`}}></div>
</div>
</div>
</div>
<div className="col-span-3 sm:col-span-2">
<p className="text-sm text-neutral-300 tracking-tight">$3.78M</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-emerald-300 tracking-tight">+1,220.58</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-rose-300 tracking-tight">-</p>
</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-3 items-center hover:bg-neutral-900/60">
<div className="col-span-4 sm:col-span-3 flex items-center gap-3 min-w-0">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500/20 to-rose-500/10 border border-rose-500/20 flex items-center justify-center">
<span className="text-rose-300 text-xs font-medium">ENA</span>
</div>
<div className="min-w-0">
<p className="text-sm font-medium truncate tracking-tight">ENA-USD</p>
<p className="text-xs text-neutral-500">Spot</p>
</div>
</div>
<div className="col-span-2 sm:col-span-2">
<p className="text-sm text-emerald-300 font-medium tracking-tight">+10,178.93</p>
</div>
<div className="col-span-3 sm:col-span-3">
<div className="flex items-center gap-2">
<p className="text-sm text-neutral-300 w-16">66.7%</p>
<div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full bg-emerald-400" style={{width: `66.7%`}}></div>
</div>
</div>
</div>
<div className="col-span-3 sm:col-span-2">
<p className="text-sm text-neutral-300 tracking-tight">$56.64M</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-emerald-300 tracking-tight">+10,898.89</p>
</div>
<div className="hidden sm:block col-span-2">
<p className="text-sm text-rose-300 tracking-tight">-740.75</p>
</div>
</div>
</div>

<div className="px-4 sm:px-5 py-3 border-t border-white/10 flex items-center justify-between">
<p className="text-xs text-neutral-500 tracking-tight">Showing 5 of 48 assets</p>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 text-xs text-neutral-300">
                      Previous
                    </button>
<button className="h-9 px-3 rounded-lg bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 text-xs text-neutral-300">
                      Next
                    </button>
</div>
</div>
</div>
</div>

<div className="hidden rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl" id="panel-calendar">
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="calendar-days"></i>
<h3 className="text-base font-semibold tracking-tight">Trading Calendar</h3>
</div>
<div className="flex items-center gap-2">
<button aria-label="Prev month" className="h-9 w-9 rounded-lg bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Next month" className="h-9 w-9 rounded-lg bg-neutral-800/70 border border-white/10 hover:bg-neutral-800 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<p className="text-sm text-neutral-500 mt-1">Color-coded by daily P&L</p>
<div className="mt-4 rounded-xl border border-white/10 overflow-hidden">
<div className="grid grid-cols-7 text-xs text-neutral-500">
<div className="px-3 py-2">Mon</div>
<div className="px-3 py-2">Tue</div>
<div className="px-3 py-2">Wed</div>
<div className="px-3 py-2">Thu</div>
<div className="px-3 py-2">Fri</div>
<div className="px-3 py-2">Sat</div>
<div className="px-3 py-2">Sun</div>
</div>
<div className="grid grid-cols-7 divide-x divide-y divide-white/10">


<div className="h-20 p-2 bg-neutral-900"></div>
<div className="h-20 p-2 bg-neutral-900"></div>
<div className="h-20 p-2 bg-neutral-900"></div>
<div className="h-20 p-2 bg-neutral-900">
<span className="text-xs text-neutral-500">1</span>
</div>
<div className="h-20 p-2 bg-neutral-900">
<span className="text-xs text-neutral-500">2</span>
<div className="mt-2 h-2 rounded bg-emerald-500/40"></div>
</div>
<div className="h-20 p-2 bg-neutral-900">
<span className="text-xs text-neutral-500">3</span>
<div className="mt-2 h-2 rounded bg-rose-500/40"></div>
</div>
<div className="h-20 p-2 bg-neutral-900">
<span className="text-xs text-neutral-500">4</span>
</div>

<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">5</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">6</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">7</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">8</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">9</span><div className="mt-2 h-2 rounded bg-emerald-500/40"></div></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">10</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">11</span></div>

<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">12</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">13</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">14</span><div className="mt-2 h-2 rounded bg-emerald-500/40"></div></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">15</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">16</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">17</span><div className="mt-2 h-2 rounded bg-rose-500/40"></div></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">18</span></div>

<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">19</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">20</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">21</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">22</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">23</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">24</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">25</span></div>

<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">26</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">27</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">28</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">29</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">30</span></div>
<div className="h-20 p-2 bg-neutral-900"><span className="text-xs text-neutral-500">31</span></div>
<div className="h-20 p-2 bg-neutral-900"></div>
</div>
</div>
</div>
</div>

<div className="hidden rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl overflow-hidden" id="panel-completed">
<div className="px-4 sm:px-5 py-3 text-sm text-neutral-400 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
<span className="tracking-tight">Completed Trades (sample)</span>
</div>
<div className="divide-y divide-white/10">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 hover:bg-neutral-900/60">
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500">#1042</span>
<p className="text-sm font-medium tracking-tight">ETH-USD Long</p>
</div>
<div className="flex items-center gap-6">
<p className="text-sm text-neutral-400">Entry: 3,212.40</p>
<p className="text-sm text-neutral-400">Exit: 3,356.12</p>
<p className="text-sm text-emerald-300 font-medium">+1,852.10</p>
</div>
</div>
<div className="flex items-center justify-between px-4 sm:px-5 py-3 hover:bg-neutral-900/60">
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500">#1041</span>
<p className="text-sm font-medium tracking-tight">BTC-USD Short</p>
</div>
<div className="flex items-center gap-6">
<p className="text-sm text-neutral-400">Entry: 62,410</p>
<p className="text-sm text-neutral-400">Exit: 63,220</p>
<p className="text-sm text-rose-300 font-medium">-1,120.00</p>
</div>
</div>
</div>
</div>

<div className="hidden rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl overflow-hidden" id="panel-fills">
<div className="px-4 sm:px-5 py-3 text-sm text-neutral-400 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="list-checks"></i>
<span className="tracking-tight">Fills History (sample)</span>
</div>
<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-2 text-xs text-neutral-500">
<div className="col-span-3">Timestamp</div>
<div className="col-span-3">Market</div>
<div className="col-span-2">Side</div>
<div className="col-span-2">Price</div>
<div className="col-span-2">Size</div>
</div>
<div className="divide-y divide-white/10">
<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-3 hover:bg-neutral-900/60">
<div className="col-span-3 text-sm">2025-05-22 14:12</div>
<div className="col-span-3 text-sm">ETH-USD</div>
<div className="col-span-2 text-sm text-emerald-300">Buy</div>
<div className="col-span-2 text-sm">$3,228.12</div>
<div className="col-span-2 text-sm">2.5</div>
</div>
<div className="grid grid-cols-12 gap-2 px-4 sm:px-5 py-3 hover:bg-neutral-900/60">
<div className="col-span-3 text-sm">2025-05-22 09:05</div>
<div className="col-span-3 text-sm">BTC-USD</div>
<div className="col-span-2 text-sm text-rose-300">Sell</div>
<div className="col-span-2 text-sm">$62,980</div>
<div className="col-span-2 text-sm">0.08</div>
</div>
</div>
</div>

<div className="hidden rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl overflow-hidden" id="panel-funding">
<div className="px-4 sm:px-5 py-3 text-sm text-neutral-400 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="wallet"></i>
<span className="tracking-tight">Funding History (sample)</span>
</div>
<div className="divide-y divide-white/10">
<div className="flex items-center justify-between px-4 sm:px-5 py-3 hover:bg-neutral-900/60">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">2025-05-21 08:00</span>
<p className="text-sm">ETH-USD</p>
</div>
<div className="text-sm text-emerald-300">+42.14</div>
</div>
<div className="flex items-center justify-between px-4 sm:px-5 py-3 hover:bg-neutral-900/60">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">2025-05-20 08:00</span>
<p className="text-sm">BTC-USD</p>
</div>
<div className="text-sm text-rose-300">-15.09</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>


    </>
  );
}
