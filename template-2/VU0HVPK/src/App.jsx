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
      
      // Icons
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mini Trend Chart (simple synthetic intraday)
      const ctx = document.getElementById('miniTrendChart');
      if (ctx) {
        const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
        const base = 100;
        const series = labels.map((_, i) => {
          const drift = Math.sin(i / 3) * 0.8;
          const noise = (Math.random() - 0.5) * 0.8;
          return base + i * 0.12 + drift + noise;
        });
        new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                data: series,
                borderColor: '#3B82F6',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.35,
                fill: true,
                backgroundColor: 'rgba(59, 130, 246, 0.08)'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
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
      

<header className="sticky top-0 z-40 backdrop-blur border-b border-neutral-200/80 bg-white/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white font-semibold tracking-tight">FC</div>
<span className="text-neutral-800 text-lg sm:text-xl tracking-tight" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope, ui-sans-serif`, fontWeight: `600`}}>
              Markets
            </span>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2" href="#">
<i data-lucide="layout-grid"></i><span>Markets</span>
</a>
<a className="text-sm text-neutral-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2" href="#">
<i data-lucide="line-chart"></i><span>Stocks</span>
</a>
<a className="text-sm text-neutral-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2" href="#">
<i data-lucide="boxes"></i><span>ETFs</span>
</a>
<a className="text-sm text-neutral-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2" href="#">
<i data-lucide="wrench"></i><span>Tools</span>
</a>
</nav>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center">
<label className="sr-only">Get Quote</label>
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="search"></i>
<input className="w-56 md:w-72 pl-10 pr-3 h-9 rounded-md bg-white border border-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all" placeholder="Search symbol (e.g., AAPL)" type="text" />
</div>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600 active:bg-blue-700 transition-colors">
<i data-lucide="sparkles"></i><span>Sign In</span>
</button>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200 hover:border-neutral-300 bg-white">
<i data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

<div className="mb-6 sm:mb-8">
<div className="flex items-center gap-2 text-sm text-neutral-500">
<a className="hover:text-neutral-700" href="#">Home</a>
<span>/</span>
<a className="hover:text-neutral-700" href="#">Markets</a>
<span>/</span>
<span className="text-neutral-700">Overview</span>
</div>
<div className="mt-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h1 className="text-2xl sm:text-3xl tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope, ui-sans-serif`, fontWeight: `600`}}>
              Markets Overview
            </h1>
<p className="text-sm text-neutral-600 mt-1">
              Real-time quotes, news, and indicators across major indices, sectors, and currencies.
            </p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-neutral-900 transition-colors">
<i data-lucide="refresh-ccw"></i><span className="text-sm">Refresh</span>
</button>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 transition-colors">
<i data-lucide="bell"></i><span className="text-sm">Alerts</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_20rem] gap-6">

<section className="space-y-6">

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope, ui-sans-serif`, fontWeight: `600`}}>
                Major Indices
              </h2>
</div>
<div className="p-4 sm:p-5">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="rounded-lg border border-neutral-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700">DJIA ETF</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
<i className="text-red-600" data-lucide="arrow-down-right"></i>-0.06%
                    </span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-2xl tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>449.16</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">-0.26</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
<i data-lucide="clock-3"></i><span>Delayed 20m</span>
</div>
</div>

<div className="rounded-lg border border-neutral-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700">S&P 500 ETF</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
<i className="text-green-600" data-lucide="arrow-up-right"></i>+0.01%
                    </span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-2xl tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>644.95</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-100">+0.06</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
<i data-lucide="clock-3"></i><span>Delayed 20m</span>
</div>
</div>

<div className="rounded-lg border border-neutral-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700">NASDAQ QQQ</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
<i className="text-red-600" data-lucide="arrow-down-right"></i>-0.08%
                    </span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-2xl tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>579.89</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">-0.45</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
<i data-lucide="clock-3"></i><span>Delayed 20m</span>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="rounded-lg border border-neutral-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700">Gold</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
<i className="text-red-600" data-lucide="arrow-down-right"></i>-0.08%
                    </span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-xl tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>3,380.50</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">-2.70</span>
</div>
</div>

<div className="rounded-lg border border-neutral-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700">Crude Oil</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-red-600">
<i className="text-red-600" data-lucide="arrow-down-right"></i>-0.11%
                    </span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-xl tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>63.89</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-red-50 text-red-600 border border-red-100">-0.07</span>
</div>
</div>

<div className="rounded-lg border border-neutral-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-neutral-700">Bitcoin</div>
<span className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
<i className="text-green-600" data-lucide="arrow-up-right"></i>+0.52%
                    </span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-xl tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>118,589.00</div>
<span className="text-xs px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-100">+614.00</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>Market News</h2>
<a className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                View more <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<ul className="divide-y divide-neutral-200">

<li className="p-4 sm:p-5 hover:bg-neutral-50 transition-colors">
<a className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-4" href="#">
<div>
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Today</span>
<span className="text-xs text-neutral-500">19:25 EDT</span>
</div>
<h3 className="mt-2 text-base sm:text-lg tracking-tight text-neutral-900 line-clamp-2" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>
                      Why Kratos Stock Bumped Higher Today
                    </h3>
<div className="mt-1 text-sm text-neutral-600 line-clamp-2">Defense contractor gains after upbeat guidance and bookings momentum.</div>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-500">
<div className="inline-flex items-center gap-1">
<i data-lucide="tags"></i><span>Ticker:</span>
<span className="text-neutral-700">KTOS</span>
</div>
<div className="inline-flex items-center gap-1">
<i data-lucide="newspaper"></i><span>Source:</span>
<span className="text-neutral-700">The Motley Fool</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200">
<img alt="Stock news thumbnail" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1120&auto=format&fit=crop" />
</div>
</div>
</a>
</li>

<li className="p-4 sm:p-5 hover:bg-neutral-50 transition-colors">
<a className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-4" href="#">
<div>
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Today</span>
<span className="text-xs text-neutral-500">19:09 EDT</span>
</div>
<h3 className="mt-2 text-base sm:text-lg tracking-tight text-neutral-900 line-clamp-2" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>
                      Texas Pacific Land Zooms 4% Higher on Royalty Upside
                    </h3>
<div className="mt-1 text-sm text-neutral-600 line-clamp-2">Higher energy volumes and strong pricing drive upside surprise.</div>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-500">
<div className="inline-flex items-center gap-1">
<i data-lucide="tags"></i><span>Ticker:</span>
<span className="text-neutral-700">TPL</span>
</div>
<div className="inline-flex items-center gap-1">
<i data-lucide="newspaper"></i><span>Source:</span>
<span className="text-neutral-700">The Motley Fool</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200">
<img alt="Market headline image" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</a>
</li>

<li className="p-4 sm:p-5 hover:bg-neutral-50 transition-colors">
<a className="grid grid-cols-1 sm:grid-cols-[1fr_160px] gap-4" href="#">
<div>
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Today</span>
<span className="text-xs text-neutral-500">19:05 EDT</span>
</div>
<h3 className="mt-2 text-base sm:text-lg tracking-tight text-neutral-900 line-clamp-2" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>
                      Invivyd Revenue Jumps 413% in Q2
                    </h3>
<div className="mt-1 text-sm text-neutral-600 line-clamp-2">Therapeutics maker surges on stronger commercial ramp and guidance hike.</div>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-500">
<div className="inline-flex items-center gap-1">
<i data-lucide="tags"></i><span>Ticker:</span>
<span className="text-neutral-700">IVVD</span>
</div>
<div className="inline-flex items-center gap-1">
<i data-lucide="newspaper"></i><span>Source:</span>
<span className="text-neutral-700">The Motley Fool</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-neutral-200">
<img alt="Financial chart image" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1120&auto=format&fit=crop" />
</div>
</div>
</a>
</li>
</ul>
</div>

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>Sector ETFs</h2>
<a className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                More sectors <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="p-4 sm:p-5">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left text-neutral-600">
<tr className="border-b border-neutral-200">
<th className="py-2 pr-4 font-medium">Sector</th>
<th className="py-2 pr-4 font-medium">% Change</th>
<th className="py-2 font-medium">YTD %</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200">
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Basic Materials (IYM)</td>
<td className="py-2 pr-4 text-red-600">-0.58%</td>
<td className="py-2 text-green-700">+13.50%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Consumer Goods (IYK)</td>
<td className="py-2 pr-4 text-red-600">-0.65%</td>
<td className="py-2 text-green-700">+7.09%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Energy (IYE)</td>
<td className="py-2 pr-4 text-red-600">-0.11%</td>
<td className="py-2 text-red-600">-1.30%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Financial Services (IYG)</td>
<td className="py-2 pr-4 text-green-700">+0.62%</td>
<td className="py-2 text-green-700">+13.37%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Healthcare (IYH)</td>
<td className="py-2 pr-4 text-green-700">+0.46%</td>
<td className="py-2 text-red-600">-3.19%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Industrial (IYJ)</td>
<td className="py-2 pr-4 text-red-600">-0.73%</td>
<td className="py-2 text-green-700">+8.89%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Technology (IYW)</td>
<td className="py-2 pr-4 text-red-600">-0.23%</td>
<td className="py-2 text-green-700">+15.89%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Telecom (IYZ)</td>
<td className="py-2 pr-4 text-red-600">-1.36%</td>
<td className="py-2 text-green-700">+13.35%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Utilities (IDU)</td>
<td className="py-2 pr-4 text-red-600">-0.70%</td>
<td className="py-2 text-green-700">+13.08%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>World Markets</h2>
<a className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                  More <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="p-4 sm:p-5">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left text-neutral-600">
<tr className="border-b border-neutral-200">
<th className="py-2 pr-4 font-medium">Index</th>
<th className="py-2 pr-4 font-medium">Price</th>
<th className="py-2 pr-4 font-medium">Change</th>
<th className="py-2 font-medium">% Chg</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200">
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">FTSE 100</td>
<td className="py-2 pr-4">9,177.24</td>
<td className="py-2 pr-4 text-green-700">+12.01</td>
<td className="py-2 text-green-700">+0.13%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">CAC 40</td>
<td className="py-2 pr-4">4,779.13</td>
<td className="py-2 pr-4 text-green-700">+32.98</td>
<td className="py-2 text-green-700">+0.69%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Nikkei 225</td>
<td className="py-2 pr-4">42,649.26</td>
<td className="py-2 pr-4 text-red-600">-625.41</td>
<td className="py-2 text-red-600">-1.45%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">Hang Seng</td>
<td className="py-2 pr-4">25,519.32</td>
<td className="py-2 pr-4 text-red-600">-94.35</td>
<td className="py-2 text-red-600">-0.37%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-4">S&P/TSX</td>
<td className="py-2 pr-4">27,915.99</td>
<td className="py-2 pr-4 text-red-600">-77.44</td>
<td className="py-2 text-red-600">-0.28%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>Currencies</h2>
<a className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1" href="#">
                  More currencies <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="p-4 sm:p-5">
<div className="grid grid-cols-1 gap-3">
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="text-xl">🇪🇺</span>
<i className="text-neutral-400" data-lucide="arrow-right-left"></i>
<span className="text-xl">🇺🇸</span>
<div className="ml-2">
<div className="text-sm font-medium text-neutral-800">Euro to Dollar</div>
<div className="text-xs text-neutral-500">1 → 1.1651</div>
</div>
</div>
<a className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1" href="#">
                      View <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="text-xl">🇺🇸</span>
<i className="text-neutral-400" data-lucide="arrow-right-left"></i>
<span className="text-xl">🇯🇵</span>
<div className="ml-2">
<div className="text-sm font-medium text-neutral-800">Dollar to Yen</div>
<div className="text-xs text-neutral-500">1 → 147.75</div>
</div>
</div>
<a className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1" href="#">
                      View <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="text-xl">🇬🇧</span>
<i className="text-neutral-400" data-lucide="arrow-right-left"></i>
<span className="text-xl">🇺🇸</span>
<div className="ml-2">
<div className="text-sm font-medium text-neutral-800">GBP to Dollar</div>
<div className="text-xs text-neutral-500">1 → 1.3529</div>
</div>
</div>
<a className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1" href="#">
                      View <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3 hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="text-xl">🇺🇸</span>
<i className="text-neutral-400" data-lucide="arrow-right-left"></i>
<span className="text-xl">🇨🇦</span>
<div className="ml-2">
<div className="text-sm font-medium text-neutral-800">Dollar to CAD</div>
<div className="text-xs text-neutral-500">1 → 1.3814</div>
</div>
</div>
<a className="text-blue-600 hover:text-blue-700 text-sm inline-flex items-center gap-1" href="#">
                      View <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<aside className="space-y-6">

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>Get Quote</h2>
</div>
<div className="p-4 sm:p-5">
<label className="sr-only">Enter symbol</label>
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-3 h-10 rounded-md bg-white border border-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all" placeholder="Symbol (e.g., TSLA)" type="text" />
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-neutral-500">Try: AAPL, MSFT, NVDA</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:text-neutral-900 transition-colors">
<i data-lucide="history"></i><span className="text-sm">Recent</span>
</button>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-4 sm:p-5 border-b border-neutral-200">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>Market Indicators</h2>
<p className="mt-1 text-xs text-neutral-500">Today’s snapshot with intraday trend.</p>
</div>
<div className="p-4 sm:p-5 space-y-4">

<div className="rounded-lg border border-neutral-200 p-3">
<div className="h-32">
<canvas className="h-full w-full" id="miniTrendChart"></canvas>
</div>
</div>

<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-left text-neutral-600">
<tr className="border-b border-neutral-200">
<th className="py-2 pr-3 font-medium">Name</th>
<th className="py-2 pr-3 font-medium">Price</th>
<th className="py-2 pr-3 font-medium">Change</th>
<th className="py-2 font-medium">% Chg</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200">
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-3">DJIA ETF</td>
<td className="py-2 pr-3">449.16</td>
<td className="py-2 pr-3 text-red-600">-0.26</td>
<td className="py-2 text-red-600">-0.06%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-3">S&P 500 ETF</td>
<td className="py-2 pr-3">644.95</td>
<td className="py-2 pr-3 text-green-700">+0.06</td>
<td className="py-2 text-green-700">+0.01%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-3">NASDAQ QQQ</td>
<td className="py-2 pr-3">579.89</td>
<td className="py-2 pr-3 text-red-600">-0.45</td>
<td className="py-2 text-red-600">-0.08%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-3">Gold</td>
<td className="py-2 pr-3">3,380.50</td>
<td className="py-2 pr-3 text-red-600">-2.70</td>
<td className="py-2 text-red-600">-0.08%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-3">Crude Oil</td>
<td className="py-2 pr-3">63.89</td>
<td className="py-2 pr-3 text-red-600">-0.07</td>
<td className="py-2 text-red-600">-0.11%</td>
</tr>
<tr className="hover:bg-neutral-50 transition-colors">
<td className="py-2 pr-3">Bitcoin</td>
<td className="py-2 pr-3">118,589.00</td>
<td className="py-2 pr-3 text-green-700">+614.00</td>
<td className="py-2 text-green-700">+0.52%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl shadow-sm">
<div className="p-4 sm:p-5 border-b border-neutral-200">
<h2 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: `Geist, 'Geist Sans', GeistSans, Manrope`, fontWeight: `600`}}>Quick Links</h2>
</div>
<div className="p-4 sm:p-5">
<div className="grid grid-cols-2 gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:border-neutral-300 hover:text-neutral-900" href="#">
<i data-lucide="list-checks"></i>Watchlist
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:border-neutral-300 hover:text-neutral-900" href="#">
<i data-lucide="newspaper"></i>News
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:border-neutral-300 hover:text-neutral-900" href="#">
<i data-lucide="wallet"></i>Treasuries
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:border-neutral-300 hover:text-neutral-900" href="#">
<i data-lucide="globe"></i>International
                </a>
</div>
</div>
</div>
</aside>
</div>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-2">
<img alt="FC logo" className="h-5 w-auto" src="https://images.financialcontent.com/investcenter/fcon_dark.svg" />
<span className="text-sm text-neutral-600">Quotes delayed at least 20 minutes.</span>
</div>
<div className="text-sm text-neutral-600">
            Stock Quote API & Stock News API supplied by
            <a className="text-blue-600 hover:text-blue-700" href="https://www.cloudquote.io">www.cloudquote.io</a>
            • <a className="text-blue-600 hover:text-blue-700" href="https://www.financialcontent.com/privacy" target="_blank">Privacy</a>
            • <a className="text-blue-600 hover:text-blue-700" href="https://www.financialcontent.com/tos" target="_blank">Terms</a>
</div>
</div>
<div className="mt-4 text-xs text-neutral-500">© <span id="year"></span> FinancialContent Services, Inc.</div>
</div>
</footer>



    </>
  );
}
