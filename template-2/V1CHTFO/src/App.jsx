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



    // Icon init after DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // ---------- Tabs (ARIA + Tailwind aria-selected:) ----------
    const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));
    const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

    function setActiveTab(target) {
      panels.forEach(p => p.classList.toggle('hidden', p.dataset.tabPanel !== target));
      tabButtons.forEach(btn => {
        const isActive = btn.dataset.tabTarget === target;
        btn.setAttribute('aria-selected', String(isActive));
        btn.setAttribute('tabindex', isActive ? '0' : '-1');
      });
      // Lazy initialize charts when opening "analysis"
      if (target === 'analysis') maybeInitAnalysisCharts();
    }

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => setActiveTab(btn.dataset.tabTarget));
      btn.addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        e.preventDefault();
        const i = tabButtons.indexOf(btn);
        const next = e.key === 'ArrowRight' ? (i + 1) % tabButtons.length : (i - 1 + tabButtons.length) % tabButtons.length;
        tabButtons[next].focus();
        setActiveTab(tabButtons[next].dataset.tabTarget);
      });
    });

    // Default active
    setActiveTab('assets');

    // ---------- Charts ----------
    const baseGrid = { color: 'rgba(148,163,184,0.15)' };
    const tickColor = 'rgba(100,116,139,0.9)';
    const labelColor = '#0f172a';

    // Allocation chart (in Assets tab – visible by default)
    const allocationCtx = document.getElementById('allocationChart');
    if (allocationCtx) {
      new Chart(allocationCtx, {
        type: 'doughnut',
        data: {
          labels: ['Thai Stocks', "Global Stocks", 'Fixed Income', 'Mutual Funds', 'Structured Notes', 'Other'],
          datasets: [{
            data: [38, 27, 14, 9, 7, 5],
            backgroundColor: ['#3597de','#f6bb43','#eb3eaa','#ec5564','#35d1ac','#EA580C'],
            borderWidth: 0
          }]
        },
        options: {
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(2,6,23,0.9)',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              padding: 10,
              titleColor: '#FFFFFF',
              bodyColor: '#FFFFFF'
            }
          },
          cutout: '64%',
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }

    // Lazy init for Analysis charts (to avoid 0×0 canvas when hidden)
    let analysisInitialized = false;
    function maybeInitAnalysisCharts() {
      if (analysisInitialized) return;
      analysisInitialized = true;

      // Equity Curve
      const equityCtx = document.getElementById('equityCurveChart');
      if (equityCtx) {
        new Chart(equityCtx, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              label: 'Equity',
              data: [100,103,105,102,108,112,118,121,125,129,133,138],
              borderColor: '#0A6EE7',
              backgroundColor: 'rgba(10,110,231,0.15)',
              fill: true, tension: 0.35, pointRadius: 0
            }]
          },
          options: {
            scales: {
              x: { grid: { display: false }, ticks: { color: tickColor } },
              y: { grid: { color: baseGrid.color }, ticks: { color: tickColor } }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1, padding: 10,
                titleColor: labelColor, bodyColor: '#475569'
              }
            },
            responsive: true, maintainAspectRatio: false
          }
        });
      }

      // Monthly / Annual toggle
      const returnCtx = document.getElementById('returnChart');
      let returnChart;
      function buildMonthlyChart() {
        return new Chart(returnCtx, {
          type: 'bar',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              label: 'Monthly Return %',
              data: [1.2, -0.5, 0.8, -1.1, 2.3, 1.6, 0.9, 1.1, -0.3, 1.4, 0.7, 1.8],
              backgroundColor: (ctx) => (ctx.raw ?? 0) >= 0 ? 'rgba(16,185,129,0.7)' : 'rgba(244,63,94,0.7)',
              borderRadius: 6
            }]
          },
          options: {
            scales: {
              x: { grid: { display: false }, ticks: { color: tickColor } },
              y: { grid: { color: baseGrid.color }, ticks: { color: tickColor } }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1, padding: 10,
                titleColor: labelColor, bodyColor: '#475569',
                callbacks: { label: (ctx) => `${ctx.raw}%` }
              }
            },
            responsive: true, maintainAspectRatio: false
          }
        });
      }
      function buildAnnualChart() {
        return new Chart(returnCtx, {
          type: 'bar',
          data: {
            labels: ['2022','2023','2024','2025 YTD'],
            datasets: [{
              label: 'Annual Return %',
              data: [7.5, 12.2, 9.8, 6.1],
              backgroundColor: '#0A6EE7',
              borderRadius: 6
            }]
          },
          options: {
            scales: {
              x: { grid: { display: false }, ticks: { color: tickColor } },
              y: { grid: { color: baseGrid.color }, ticks: { color: tickColor } }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1, padding: 10,
                titleColor: labelColor, bodyColor: '#475569',
                callbacks: { label: (ctx) => `${ctx.raw}%` }
              }
            },
            responsive: true, maintainAspectRatio: false
          }
        });
      }
      if (returnCtx) {
        returnChart = buildMonthlyChart();
        const toggleBtn = document.getElementById('toggleReturnView');
        let annual = false;
        toggleBtn?.addEventListener('click', () => {
          returnChart.destroy();
          annual = !annual;
          returnChart = annual ? buildAnnualChart() : buildMonthlyChart();
        });
      }

      // Volatility
      const volCtx = document.getElementById('volChart');
      if (volCtx) {
        const data = Array.from({ length: 24 }, () => Number((Math.random() * 6 + 8).toFixed(2)));
        new Chart(volCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => `W${i+1}`),
            datasets: [{
              label: 'Volatility %',
              data,
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245,158,11,0.15)',
              fill: true, tension: 0.35, pointRadius: 0
            }]
          },
          options: {
            scales: {
              x: { grid: { display: false }, ticks: { color: tickColor } },
              y: { grid: { color: baseGrid.color }, ticks: { color: tickColor } }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1, padding: 10,
                titleColor: labelColor, bodyColor: '#475569',
                callbacks: { label: (ctx) => `${ctx.raw}%` }
              }
            },
            responsive: true, maintainAspectRatio: false
          }
        });
      }
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
      
<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
<div className="flex h-16 items-center gap-6">

<a className="shrink-0 inline-flex items-center gap-2" href="#">
<img alt="Yuanta Securities logo" className="h-8 w-auto" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg" />
</a>

<nav className="hidden md:flex items-center gap-4 mx-auto text-sm">
<a className="px-2 py-1 rounded-md text-slate-600 hover:text-slate-900" href="#">Main Page</a>
<a className="px-2 py-1 rounded-md text-slate-600 hover:text-slate-900" href="#">Feed</a>
<a className="px-2 py-1 rounded-md text-slate-600 hover:text-slate-900" href="#">Markets</a>
<a className="px-2 py-1 rounded-md font-semibold text-blue-600 bg-blue-50" href="#">Asset</a>
<a className="px-2 py-1 rounded-md text-slate-600 hover:text-slate-900" href="#">Wallet</a>
</nav>

<nav className="hidden md:flex items-center gap-2">
<button aria-label="Search" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<i className="w-[18px] h-[18px]" data-lucide="search"></i>
</button>
<button aria-label="Messages" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<i className="w-[18px] h-[18px]" data-lucide="message-square"></i>
</button>
<button aria-label="Notifications" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<i className="w-[18px] h-[18px]" data-lucide="bell"></i>
</button>
<button aria-label="Profile" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg fill="none" height="18" stroke="currentColor" strokeWidth="12" viewBox="0 0 256 256" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="128" cy="128" r="96"></circle>
<circle cx="128" cy="108" r="28"></circle>
<path d="M64 200a64 64 0 0 1 128 0" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</nav>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto pt-8 pb-8 px-5 md:px-6 lg:px-8 space-y-8">


<section className="space-y-6">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold">Portfolio Summary</h1>
<p className="text-sm text-slate-500 mt-1">A consolidated view of assets, plans, analysis, and income.</p>
</div>
<div className="text-xs text-slate-500 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Last Updated:</span>
<span className="text-slate-800">Sep 8, 2025, 10:24 AM</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded-xl border p-4 bg-white border-slate-200 hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-500">Total Portfolio Value</div>
<div className="h-8 w-8 rounded-md border grid place-items-center bg-slate-50 border-slate-200">
<i className="w-4.5 h-4.5 text-slate-700" data-lucide="wallet"></i>
</div>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">$1,234,567</div>
<div className="mt-2 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 text-emerald-600">
<i className="w-4 h-4" data-lucide="trending-up"></i>
                  +$23,456 (+1.94%)
                </span>
<span className="text-slate-500">vs last close</span>
</div>
</div>
<div className="rounded-xl border p-4 bg-white border-slate-200 hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-500">Total Profit/Loss</div>
<div className="h-8 w-8 rounded-md border grid place-items-center bg-slate-50 border-slate-200">
<i className="w-4.5 h-4.5 text-slate-700" data-lucide="percent"></i>
</div>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold text-emerald-600">+$123,456 (+10.01%)</div>
<div className="mt-2 text-xs text-slate-500">Realized + Unrealized</div>
</div>
<div className="rounded-xl border p-4 bg-white border-slate-200 hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-500">Total Liabilities</div>
<div className="h-8 w-8 rounded-md border grid place-items-center bg-slate-50 border-slate-200">
<i className="w-4.5 h-4.5 text-slate-700" data-lucide="shield"></i>
</div>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold text-rose-600">$8,765</div>
<div className="mt-2 text-xs text-slate-500">Margin, Loans, and Other</div>
</div>
<div className="rounded-xl border p-4 bg-white border-slate-200 hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-500">Total Credit Line</div>
<div className="h-8 w-8 rounded-md border grid place-items-center bg-slate-50 border-slate-200">
<i className="w-4.5 h-4.5 text-slate-700" data-lucide="banknote"></i>
</div>
</div>
<div className="mt-2 text-2xl tracking-tight font-semibold">$2,000,000</div>
<div className="mt-2 text-xs text-slate-500">Available for allocation</div>
</div>
</div>
</section>

<section className="space-y-4">

<div aria-label="Data Categories" className="flex gap-6 overflow-x-auto items-center border-b border-slate-200" role="tablist">
<button aria-selected="true" className="tab-btn relative h-[42px] px-3 text-sm flex items-center gap-2 whitespace-nowrap transition-colors text-slate-500 aria-selected:text-blue-600" data-tab-target="assets" role="tab" tabindex="0">
<i className="w-4.5 h-4.5" data-lucide="briefcase"></i>
              Assets
              <span className="tab-underline absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 transition-transform aria-selected:scale-x-100"></span>
</button>
<button aria-selected="false" className="tab-btn relative h-[42px] px-3 text-sm flex items-center gap-2 whitespace-nowrap transition-colors text-slate-500 aria-selected:text-blue-600" data-tab-target="plan" role="tab" tabindex="-1">
<i className="w-4.5 h-4.5" data-lucide="target"></i>
              Investment Plan
              <span className="tab-underline absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 transition-transform aria-selected:scale-x-100"></span>
</button>
<button aria-selected="false" className="tab-btn relative h-[42px] px-3 text-sm flex items-center gap-2 whitespace-nowrap transition-colors text-slate-500 aria-selected:text-blue-600" data-tab-target="analysis" role="tab" tabindex="-1">
<i className="w-4.5 h-4.5" data-lucide="line-chart"></i>
              Analysis
              <span className="tab-underline absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 transition-transform aria-selected:scale-x-100"></span>
</button>
<button aria-selected="false" className="tab-btn relative h-[42px] px-3 text-sm flex items-center gap-2 whitespace-nowrap transition-colors text-slate-500 aria-selected:text-blue-600" data-tab-target="income" role="tab" tabindex="-1">
<i className="w-4.5 h-4.5" data-lucide="coins"></i>
              Dividends / Interest
              <span className="tab-underline absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 transition-transform aria-selected:scale-x-100"></span>
</button>
</div>

<div className="space-y-10">

<section className="space-y-8" data-tab-panel="assets" role="tabpanel">

<div className="rounded-xl border p-5 bg-white border-slate-200">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl tracking-tight font-semibold">Assets Overview</h2>
<p className="text-sm text-slate-500 mt-1">Total value of all assets held across categories.</p>
</div>
<div className="flex items-center gap-2">
<div className="text-xs text-slate-500">Total</div>
<div className="text-lg font-semibold tracking-tight">$1,234,567</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 rounded-xl border p-5 bg-white border-slate-200">
<h3 className="text-lg tracking-tight font-semibold">Asset Allocation</h3>
<p className="text-sm text-slate-500 mt-1">Distribution of holdings by category.</p>
<div className="mt-4">
<div className="h-72">
<canvas className="w-full h-full" id="allocationChart"></canvas>
</div>

<div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm" style={{backgroundColor: `#3597de`}}></span><span>Thai Stocks</span></div>
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm" style={{backgroundColor: `#f6bb43`}}></span><span>Global Stocks</span></div>
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm" style={{backgroundColor: `#eb3eaa`}}></span><span>Fixed Income</span></div>
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm" style={{backgroundColor: `#ec5564`}}></span><span>Mutual Funds</span></div>
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm" style={{backgroundColor: `#35d1ac`}}></span><span>Structured Notes</span></div>
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-sm" style={{backgroundColor: `#ff905f`}}></span><span>Derivative</span></div>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border overflow-hidden bg-white border-slate-200">
<div className="px-5 py-4 border-b flex items-center justify-between border-slate-200">
<h3 className="text-lg tracking-tight font-semibold">Asset List</h3>
<div className="hidden md:flex items-center gap-2">
<div className="text-xs text-slate-500">Sort</div>
<select className="h-[42px] px-3 rounded-[8px] text-sm border focus:outline-none focus:ring-2 focus:ring-[#0A6EE7]/40 bg-white border-slate-200 text-slate-700">
<option>By Category</option>
<option>By Market Value</option>
<option>By P/L</option>
</select>
</div>
</div>

<div className="hidden md:block">
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-xs uppercase tracking-wide text-slate-500 border-b bg-slate-50 border-slate-200">
<tr className="">
<th className="text-left px-5 py-3 font-medium">Category</th>
<th className="text-left px-5 py-3 font-medium">Account</th>
<th className="text-left px-5 py-3 font-medium">Symbol / Name</th>
<th className="text-right px-5 py-3 font-medium">Qty</th>
<th className="text-right px-5 py-3 font-medium">Price</th>
<th className="text-right px-5 py-3 font-medium">Market Value</th>
<th className="text-right px-5 py-3 font-medium">P/L</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="bg-slate-50">
<td className="px-5 py-3 align-top font-medium" style={{color: `#0284C7`}}>Thai Stocks</td>
<td className="px-5 py-3 align-top text-slate-700">Cash Balance</td>
<td className="px-5 py-3 text-slate-800">PTT</td>
<td className="px-5 py-3 text-right">1,000</td>
<td className="px-5 py-3 text-right">$32.10</td>
<td className="px-5 py-3 text-right">$32,100</td>
<td className="px-5 py-3 text-right text-emerald-600">+$1,200</td>
</tr>
<tr>
<td className="px-5 py-3" style={{color: `#0284C7`}}></td>
<td className="px-5 py-3 text-slate-700">Cash Balance</td>
<td className="px-5 py-3 text-slate-800">SCB</td>
<td className="px-5 py-3 text-right">500</td>
<td className="px-5 py-3 text-right">$78.00</td>
<td className="px-5 py-3 text-right">$39,000</td>
<td className="px-5 py-3 text-right text-rose-600">-$350</td>
</tr>
<tr className="bg-slate-50">
<td className="px-5 py-3 font-medium" style={{color: `#0284C7`}}>Thai Stocks</td>
<td className="px-5 py-3 text-slate-700">Cash Account</td>
<td className="px-5 py-3 text-slate-800">CPALL</td>
<td className="px-5 py-3 text-right">2,000</td>
<td className="px-5 py-3 text-right">$18.40</td>
<td className="px-5 py-3 text-right">$36,800</td>
<td className="px-5 py-3 text-right text-emerald-600">+$520</td>
</tr>
<tr>
<td className="px-5 py-3" style={{color: `#0284C7`}}>Thai Stocks</td>
<td className="px-5 py-3 text-slate-700">Credit Balance</td>
<td className="px-5 py-3 text-slate-800">KBANK</td>
<td className="px-5 py-3 text-right">300</td>
<td className="px-5 py-3 text-right">$145.20</td>
<td className="px-5 py-3 text-right">$43,560</td>
<td className="px-5 py-3 text-right text-emerald-600">+$310</td>
</tr>

<tr className="bg-slate-50">
<td className="px-5 py-3 font-medium" style={{color: `#CA8A04`}}>Global Stocks</td>
<td className="px-5 py-3 text-slate-700">Cash Account</td>
<td className="px-5 py-3 text-slate-800">AAPL</td>
<td className="px-5 py-3 text-right">120</td>
<td className="px-5 py-3 text-right">$188.15</td>
<td className="px-5 py-3 text-right">$22,578</td>
<td className="px-5 py-3 text-right text-emerald-600">+$2,140</td>
</tr>
<tr>
<td className="px-5 py-3" style={{color: `#CA8A04`}}></td>
<td className="px-5 py-3 text-slate-700">Cash Account</td>
<td className="px-5 py-3 text-slate-800">MSFT</td>
<td className="px-5 py-3 text-right">80</td>
<td className="px-5 py-3 text-right">$414.22</td>
<td className="px-5 py-3 text-right">$33,137</td>
<td className="px-5 py-3 text-right text-emerald-600">+$1,760</td>
</tr>

<tr className="bg-slate-50">
<td className="px-5 py-3 font-medium" style={{color: `#DB2777`}}>Fixed Income</td>
<td className="px-5 py-3 text-slate-700">Gov't Bond</td>
<td className="px-5 py-3 text-slate-800">TH Gov 2028 2.5%</td>
<td className="px-5 py-3 text-right">100,000</td>
<td className="px-5 py-3 text-right">$1.01</td>
<td className="px-5 py-3 text-right">$101,000</td>
<td className="px-5 py-3 text-right text-slate-700">$0</td>
</tr>

<tr>
<td className="px-5 py-3 font-medium" style={{color: `#DC2626`}}>Mutual Funds</td>
<td className="px-5 py-3 text-slate-700">Equity Fund</td>
<td className="px-5 py-3 text-slate-800">ABC Growth Fund</td>
<td className="px-5 py-3 text-right">5,000</td>
<td className="px-5 py-3 text-right">$12.18</td>
<td className="px-5 py-3 text-right">$60,900</td>
<td className="px-5 py-3 text-right text-emerald-600">+$380</td>
</tr>

<tr className="bg-slate-50">
<td className="px-5 py-3 font-medium" style={{color: `#0D9488`}}>Structured Notes</td>
<td className="px-5 py-3 text-slate-700">Yield-Linked</td>
<td className="px-5 py-3 text-slate-800">Note XYZ 12m</td>
<td className="px-5 py-3 text-right">1</td>
<td className="px-5 py-3 text-right">$100,000</td>
<td className="px-5 py-3 text-right">$100,000</td>
<td className="px-5 py-3 text-right text-slate-700">$0</td>
</tr>

<tr>
<td className="px-5 py-3 font-medium" style={{color: `#EA580C`}}>Derivative</td>
<td className="px-5 py-3 text-slate-700">Futures</td>
<td className="px-5 py-3 text-slate-800">SET50 Futures</td>
<td className="px-5 py-3 text-right">2</td>
<td className="px-5 py-3 text-right">960.0</td>
<td className="px-5 py-3 text-right">$19,200</td>
<td className="px-5 py-3 text-right text-emerald-600">+$180</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
</section>

<section className="hidden space-y-6" data-tab-panel="plan" role="tabpanel">
<div className="border rounded-xl p-5 bg-white border-slate-200">
<h2 className="text-xl font-semibold tracking-tight text-blue-600">แผนลงทุนของฉัน</h2>
<p className="text-sm mt-1 text-slate-500">Plans or automations provided by your broker.</p>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border p-4 bg-white border-slate-200">
<div className="flex gap-2 font-medium items-center text-slate-800">
<i className="w-4.5 h-4.5 text-sky-500" data-lucide="bot"></i>
                      Robo Advisory
                    </div>
<p className="mt-2 text-sm text-slate-700">Quarterly rebalance to target allocation with tax-aware selling.</p>
</div>
<div className="rounded-lg border p-4 bg-white border-slate-200">
<div className="flex items-center gap-2 font-medium text-slate-800">
<i className="w-4.5 h-4.5 text-emerald-500" data-lucide="shield-check"></i>
                      Drawdown Guard
                    </div>
<p className="mt-2 text-sm text-slate-700">Reduce equity exposure by 30% if 20D MA {">"} 50D MA and VIX {">"} 25.</p>
</div>
<div className="rounded-lg border p-4 bg-white border-slate-200">
<div className="flex items-center gap-2 font-medium text-slate-800">
<i className="w-4.5 h-4.5 text-fuchsia-500" data-lucide="radio"></i>
                      Income Booster
                    </div>
<p className="mt-2 text-sm text-slate-700">Systematic covered calls on top 3 holdings; 30–45 DTE.</p>
</div>
</div>
</div>
</section>

<section className="hidden space-y-8" data-tab-panel="analysis" role="tabpanel">

<div className="rounded-xl border p-5 bg-white border-slate-200">
<h2 className="text-xl tracking-tight font-semibold text-blue-600">Equity Curve</h2>
<p className="text-sm mt-1 text-slate-500">Portfolio growth over time.</p>
<div className="mt-4 h-72">
<canvas className="w-full h-full" id="equityCurveChart"></canvas>
</div>
</div>

<div className="rounded-xl border p-5 bg-white border-slate-200">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl tracking-tight font-semibold text-blue-600">Monthly & Annual Returns</h2>
<p className="text-sm mt-1 text-slate-500">Performance by month and aggregated by year.</p>
</div>
<button className="h-[42px] px-3 rounded-[8px] text-sm border bg-white hover:bg-slate-50 text-slate-700 border-slate-200" id="toggleReturnView">
<span className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5" data-lucide="switch-camera"></i>
                      Toggle View
                    </span>
</button>
</div>
<div className="mt-4 h-72">
<canvas className="w-full h-full" id="returnChart"></canvas>
</div>
</div>

<div className="rounded-xl border p-5 bg-white border-slate-200">
<h2 className="text-xl tracking-tight font-semibold text-blue-600">Portfolio Volatility</h2>
<p className="text-sm mt-1 text-slate-500">Rolling 30-day annualized volatility.</p>
<div className="mt-4 h-72">
<canvas className="w-full h-full" id="volChart"></canvas>
</div>
</div>
</section>

<section className="hidden space-y-6" data-tab-panel="income" role="tabpanel">
<div className="rounded-xl border p-5 bg-white border-slate-200">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl tracking-tight font-semibold">Dividends & Interest</h2>
<p className="text-sm mt-1 text-slate-500">Total income received.</p>
</div>
<div className="text-right">
<div className="text-xs text-slate-500">Total</div>
<div className="text-lg font-semibold tracking-tight text-emerald-700">$12,345</div>
</div>
</div>
</div>
<div className="rounded-xl border overflow-hidden bg-white border-slate-200">
<div className="px-5 py-4 border-b flex items-center justify-between border-slate-200">
<h3 className="text-lg tracking-tight font-semibold">Payment Details</h3>
<div className="flex items-center gap-2">
<input className="h-[42px] w-44 px-3 rounded-[8px] text-sm border placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0A6EE7]/40 bg-white border-slate-200 text-slate-700" placeholder="Search source..." type="text" />
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-xs uppercase tracking-wide text-slate-500 border-b bg-slate-50 border-slate-200">
<tr>
<th className="text-left px-5 py-3 font-medium">Date</th>
<th className="text-left px-5 py-3 font-medium">Type</th>
<th className="text-left px-5 py-3 font-medium">Source</th>
<th className="text-right px-5 py-3 font-medium">Amount</th>
<th className="text-right px-5 py-3 font-medium">Currency</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-5 py-3 text-slate-700">2025-09-05</td>
<td className="px-5 py-3 text-slate-700">Dividend</td>
<td className="px-5 py-3 text-slate-800">AAPL</td>
<td className="px-5 py-3 text-right text-emerald-700">$240.00</td>
<td className="px-5 py-3 text-right text-slate-700">USD</td>
</tr>
<tr className="bg-slate-50">
<td className="px-5 py-3 text-slate-700">2025-08-30</td>
<td className="px-5 py-3 text-slate-700">Interest</td>
<td className="px-5 py-3 text-slate-800">TH Gov 2028</td>
<td className="px-5 py-3 text-right text-emerald-700">$520.00</td>
<td className="px-5 py-3 text-right text-slate-700">THB</td>
</tr>
<tr>
<td className="px-5 py-3 text-slate-700">2025-08-18</td>
<td className="px-5 py-3 text-slate-700">Dividend</td>
<td className="px-5 py-3 text-slate-800">MSFT</td>
<td className="px-5 py-3 text-right text-emerald-700">$180.00</td>
<td className="px-5 py-3 text-right text-slate-700">USD</td>
</tr>
<tr className="bg-slate-50">
<td className="px-5 py-3 text-slate-700">2025-07-27</td>
<td className="px-5 py-3 text-slate-700">Dividend</td>
<td className="px-5 py-3 text-slate-800">PTT</td>
<td className="px-5 py-3 text-right text-emerald-700">$95.00</td>
<td className="px-5 py-3 text-right text-slate-700">THB</td>
</tr>
<tr>
<td className="px-5 py-3 text-slate-700">2025-07-10</td>
<td className="px-5 py-3 text-slate-700">Interest</td>
<td className="px-5 py-3 text-slate-800">Note XYZ 12m</td>
<td className="px-5 py-3 text-right text-emerald-700">$1,120.00</td>
<td className="px-5 py-3 text-right text-slate-700">USD</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-8 text-xs text-slate-500 flex items-center justify-between">
<div>© 2025 PX</div>
<div className="flex items-center gap-4">
<a className="transition-colors hover:text-slate-700" href="#">Privacy</a>
<a className="transition-colors hover:text-slate-700" href="#">Terms</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
