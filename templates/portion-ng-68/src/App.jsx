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



      // Mobile sidebar toggle
      const menuBtn = document.getElementById('mobileMenuBtn');
      const sidebar = document.getElementById('sidebar');
      if (menuBtn && sidebar) {
        menuBtn.addEventListener('click', () => {
          const hidden = sidebar.classList.contains('translate-x-[-100%]');
          sidebar.classList.toggle('translate-x-[-100%]', !hidden);
          sidebar.classList.toggle('translate-x-0', hidden);
        });
        // Close on outside click (mobile)
        document.addEventListener('click', (e) => {
          if (window.innerWidth >= 1024) return;
          if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebar.classList.add('translate-x-[-100%]');
            sidebar.classList.remove('translate-x-0');
          }
        });
      }

      // Lucide Icons
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Charts colors
      const primaryRGB = getComputedStyle(document.body).getPropertyValue('--p').trim() || '9,92,39';
      const primary = `rgb(${primaryRGB})`;
      const primarySoft = `rgba(${primaryRGB},0.15)`;
      const primaryFill = `rgba(${primaryRGB},0.10)`;

      // GMV Line Chart
      const gmvCtx = document.getElementById('gmvChart');
      if (gmvCtx) {
        const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
        const values = [
          1.9, 2.1, 2.4, 2.0, 2.6, 2.8, 3.1, 2.7, 2.9, 3.4,
          3.0, 2.6, 3.2, 3.1, 3.7, 3.4, 3.6, 3.8, 3.5, 3.9,
          4.1, 4.0, 3.8, 4.2, 4.4, 4.5, 4.3, 4.7, 4.9, 5.0
        ].map(v => v * 1_000_000);

        new Chart(gmvCtx, {
          type: 'line',
          data: {
            labels: days,
            datasets: [{
              label: 'GMV (₦)',
              data: values,
              borderColor: primary,
              backgroundColor: primaryFill,
              borderWidth: 2,
              fill: true,
              tension: 0.35,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: ctx => '₦' + Intl.NumberFormat('en-NG').format(Math.round(ctx.parsed.y))
                }
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#475569', font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(15,23,42,0.06)' },
                ticks: {
                  color: '#475569',
                  font: { size: 11 },
                  callback: value => '₦' + Intl.NumberFormat('en-NG', { notation: 'compact' }).format(value)
                }
              }
            }
          }
        });
      }

      // Category Doughnut Chart
      const catCtx = document.getElementById('categoryChart');
      if (catCtx) {
        new Chart(catCtx, {
          type: 'doughnut',
          data: {
            labels: ['Grains & Staples', 'Proteins', 'Fruits', 'Vegetables'],
            datasets: [{
              data: [42, 27, 15, 16],
              backgroundColor: [
                primary,
                'rgb(16,185,129)',
                'rgb(245,158,11)',
                'rgb(56,189,248)'
              ],
              borderColor: ['white'],
              borderWidth: 2,
              hoverOffset: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '62%',
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true }
            }
          }
        });
      }

      // DateRange demo (you can wire to fetch real data)
      const dr = document.getElementById('dateRange');
      if (dr) {
        dr.addEventListener('change', () => {
          // Placeholder for dynamic reload; visuals only
          // In production, fetch new data and update charts
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
      

<div className="min-h-screen">

<header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex items-center">
<div className="inline-flex items-center justify-center w-8 h-8 rounded-md" style={{backgroundColor: 'rgba(var(--p), 0.12)', color: 'rgb(var(--p))'}}>
<span className="text-sm font-semibold tracking-tight">P</span>
</div>
<div className="ml-2">
<div className="text-base font-semibold tracking-tight" style={{color: 'rgb(var(--p))'}}>Portion.ng</div>
<div className="text-[11px] text-slate-500 -mt-0.5">Admin</div>
</div>
</div>
</div>
<div className="hidden lg:flex items-center flex-1 max-w-2xl mx-6">
<div className="relative w-full">
<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
</div>
<input className="w-full pl-10 pr-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 text-sm placeholder:text-slate-400" placeholder="Search orders, merchants, products..." type="text"/>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors text-sm">
<i className="w-4 h-4" data-lucide="download"></i>
                Export
              </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-white transition-colors text-sm shadow-sm" style={{backgroundColor: 'rgb(var(--p))'}}>
<i className="w-4 h-4" data-lucide="plus"></i>
                Add Product
              </button>
<div className="hidden sm:flex items-center gap-1">
<button className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 hover:bg-slate-50 hover:border-slate-300">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="bell"></i>
</button>
<button className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 hover:bg-slate-50 hover:border-slate-300">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="settings"></i>
</button>
</div>
<div className="ml-1">
<img alt="Admin Avatar" className="h-9 w-9 rounded-md border border-slate-200 object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="lg:hidden pb-3">
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
</div>
<input className="w-full pl-10 pr-4 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 text-sm placeholder:text-slate-400" placeholder="Search orders, merchants, products..." type="text"/>
</div>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex">

<aside className="fixed inset-y-16 left-0 w-72 border-r border-slate-200 bg-white translate-x-[-100%] lg:translate-x-0 transition-transform duration-200 z-20" id="sidebar">
<nav className="px-3 py-4">
<div className="mb-3 px-2">
<div className="text-[11px] uppercase tracking-wide text-slate-500">Overview</div>
</div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium tracking-tight" href="#" style={{color: 'rgb(var(--p))', backgroundColor: 'rgba(var(--p), 0.08)', border: '1px solid rgba(var(--p), 0.15)'}}>
<i className="w-4.5 h-4.5" data-lucide="layout-dashboard"></i>
                    Dashboard
                  </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors" href="#">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="shopping-bag"></i>
                    Orders
                  </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors" href="#">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="store"></i>
                    Merchants
                  </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors" href="#">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="boxes"></i>
                    Products
                  </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors" href="#">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="users"></i>
                    Customers
                  </a>
</li>
</ul>
<div className="mt-6 mb-3 px-2">
<div className="text-[11px] uppercase tracking-wide text-slate-500">Finance</div>
</div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors" href="#">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="wallet"></i>
                    Payouts
                  </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors" href="#">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="line-chart"></i>
                    Reports
                  </a>
</li>
</ul>
<div className="mt-6 mb-3 px-2">
<div className="text-[11px] uppercase tracking-wide text-slate-500">System</div>
</div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors" href="#">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="shield-check"></i>
                    Moderation
                  </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-slate-700 hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors" href="#">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="settings-2"></i>
                    Settings
                  </a>
</li>
</ul>
<div className="mt-8 p-3 rounded-lg border border-slate-200">
<div className="flex items-center gap-2">
<div className="w-8 h-8 inline-flex items-center justify-center rounded-md" style={{backgroundColor: 'rgba(var(--p), 0.12)', color: 'rgb(var(--p))'}}>
<i className="w-4 h-4" data-lucide="leaf"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Marketplace Live</div>
<div className="text-xs text-slate-500">Control platform availability</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-slate-600">Status</div>

<div className="flex items-center">
<input checked="" className="peer sr-only" id="liveToggle" type="checkbox"/>
<label className="block w-10 h-6 rounded-full transition-all cursor-pointer relative" htmlFor="liveToggle" style={{backgroundColor: 'rgba(var(--p), 0.25)'}}>
<span className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white border border-slate-200 transition-all peer-checked:translate-x-4" style={{}}></span>
</label>
<span className="ml-2 text-xs font-medium text-slate-700">On</span>
</div>
</div>
</div>
</nav>
</aside>

<main className="flex-1 lg:ml-72 w-full">

<section className="py-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Dashboard</h1>
<p className="text-sm text-slate-600 mt-1">Monitor orders, merchants, and portion-based sales.</p>
</div>
<div className="flex items-center gap-2">

<div className="relative">
<select className="appearance-none pl-3 pr-8 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10" id="dateRange">
<option value="7">Last 7 days</option>
<option selected="" value="30">Last 30 days</option>
<option value="90">Last 90 days</option>
<option value="365">Last 12 months</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>

<div className="relative">
<select className="appearance-none pl-3 pr-10 py-2 rounded-md border border-slate-200 text-sm text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
<option>All statuses</option>
<option>Pending</option>
<option>Fulfilled</option>
<option>Cancelled</option>
<option>Refunded</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-4 rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">GMV</p>
<h3 className="text-xl font-semibold tracking-tight">₦42,580,900</h3>
</div>
<div className="w-10 h-10 inline-flex items-center justify-center rounded-md" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<i className="w-5 h-5" data-lucide="credit-card"></i>
</div>
</div>
<div className="mt-3 text-xs">
<span className="px-1.5 py-0.5 rounded border" style={{backgroundColor: 'rgba(16, 185, 129, 0.08)', borderColor: 'rgba(16, 185, 129, 0.25)', color: 'rgb(16,185,129)'}}>+8.2%</span>
<span className="text-slate-500 ml-2">vs last period</span>
</div>
</div>
<div className="p-4 rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Orders</p>
<h3 className="text-xl font-semibold tracking-tight">12,482</h3>
</div>
<div className="w-10 h-10 inline-flex items-center justify-center rounded-md" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
</div>
</div>
<div className="mt-3 text-xs">
<span className="px-1.5 py-0.5 rounded border" style={{backgroundColor: 'rgba(34, 197, 94, 0.08)', borderColor: 'rgba(34, 197, 94, 0.25)', color: 'rgb(34,197,94)'}}>+3.9%</span>
<span className="text-slate-500 ml-2">completion rate 96%</span>
</div>
</div>
<div className="p-4 rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Active Merchants</p>
<h3 className="text-xl font-semibold tracking-tight">713</h3>
</div>
<div className="w-10 h-10 inline-flex items-center justify-center rounded-md" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<i className="w-5 h-5" data-lucide="store"></i>
</div>
</div>
<div className="mt-3 text-xs text-slate-600">New this month: 42</div>
</div>
<div className="p-4 rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Portions Sold</p>
<h3 className="text-xl font-semibold tracking-tight">68,431</h3>
</div>
<div className="w-10 h-10 inline-flex items-center justify-center rounded-md" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<i className="w-5 h-5" data-lucide="pie-chart"></i>
</div>
</div>
<div className="mt-3 text-xs text-slate-600">Avg per order: 5.5</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">

<div className="lg:col-span-2 p-4 rounded-lg border border-slate-200 bg-white">
<div className="flex items-start justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight">GMV Trend</h2>
<p className="text-xs text-slate-600 mt-0.5">Daily gross merchandise value</p>
</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md text-xs border border-slate-200 hover:bg-slate-50">D</button>
<button className="px-2.5 py-1.5 rounded-md text-xs border border-slate-200 hover:bg-slate-50">W</button>
<button className="px-2.5 py-1.5 rounded-md text-xs text-white" style={{backgroundColor: 'rgb(var(--p))'}}>M</button>
</div>
</div>
<div className="mt-3">
<div className="relative h-64">
<div className="h-full">
<canvas id="gmvChart"></canvas>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-lg border border-slate-200 bg-white">
<h2 className="text-lg font-semibold tracking-tight">Category Split</h2>
<p className="text-xs text-slate-600 mt-0.5">Portions sold by category</p>
<div className="mt-3">
<div className="relative h-64">
<div className="h-full">
<canvas id="categoryChart"></canvas>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-y-2 text-xs">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm" style={{backgroundColor: 'rgba(var(--p), 1)'}}></span>
                    Grains &amp; Staples
                  </div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></span>
                    Proteins
                  </div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm bg-amber-500"></span>
                    Fruits
                  </div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-sm bg-sky-500"></span>
                    Vegetables
                  </div>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">

<div className="xl:col-span-2 p-4 rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight">Recent Orders</h2>
<p className="text-xs text-slate-600 mt-0.5">Latest portion purchases</p>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-2 rounded-md border border-slate-200 text-xs text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900/10">
<option>All</option>
<option>Pending</option>
<option>Fulfilled</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
<button className="px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 text-xs">View all</button>
</div>
</div>
<div className="mt-3 overflow-x-auto">
<table className="min-w-full text-sm">
<thead>
<tr className="text-left text-[11px] uppercase tracking-wide text-slate-500">
<th className="py-2.5 border-b border-slate-200">Order</th>
<th className="py-2.5 border-b border-slate-200">Customer</th>
<th className="py-2.5 border-b border-slate-200">Merchant</th>
<th className="py-2.5 border-b border-slate-200">Portions</th>
<th className="py-2.5 border-b border-slate-200">Total</th>
<th className="py-2.5 border-b border-slate-200">Status</th>
<th className="py-2.5 border-b border-slate-200"></th>
</tr>
</thead>
<tbody className="align-middle">
<tr className="hover:bg-slate-50">
<td className="py-3 border-b border-slate-100 font-medium">#PNG-10482</td>
<td className="py-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<img className="w-7 h-7 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Adaeze U.</div>
<div className="text-xs text-slate-500">ada@example.com</div>
</div>
</div>
</td>
<td className="py-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md inline-flex items-center justify-center" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<span className="text-xs font-semibold">J</span>
</div>
                            Jollof Hub
                          </div>
</td>
<td className="py-3 border-b border-slate-100">Rice x3, Chicken x2</td>
<td className="py-3 border-b border-slate-100 font-medium">₦8,200</td>
<td className="py-3 border-b border-slate-100">
<span className="px-2 py-1 rounded-md text-xs font-medium" style={{backgroundColor: 'rgba(34, 197, 94, 0.08)', color: 'rgb(22, 163, 74)', border: '1px solid rgba(34,197,94,0.25)'}}>
                            Fulfilled
                          </span>
</td>
<td className="py-3 border-b border-slate-100 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-xs">Details</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 border-b border-slate-100 font-medium">#PNG-10481</td>
<td className="py-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<img className="w-7 h-7 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Tunde O.</div>
<div className="text-xs text-slate-500">tunde@example.com</div>
</div>
</div>
</td>
<td className="py-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md inline-flex items-center justify-center" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<span className="text-xs font-semibold">F</span>
</div>
                            FreshMart
                          </div>
</td>
<td className="py-3 border-b border-slate-100">Beans x2, Plantain x4</td>
<td className="py-3 border-b border-slate-100 font-medium">₦5,450</td>
<td className="py-3 border-b border-slate-100">
<span className="px-2 py-1 rounded-md text-xs font-medium" style={{backgroundColor: 'rgba(245, 158, 11, 0.10)', color: 'rgb(217, 119, 6)', border: '1px solid rgba(245,158,11,0.25)'}}>
                            Pending
                          </span>
</td>
<td className="py-3 border-b border-slate-100 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-xs">Details</button>
</td>
</tr>
<tr className="hover:bg-slate-50">
<td className="py-3 border-b border-slate-100 font-medium">#PNG-10480</td>
<td className="py-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<img className="w-7 h-7 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Chioma N.</div>
<div className="text-xs text-slate-500">chioma@example.com</div>
</div>
</div>
</td>
<td className="py-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-md inline-flex items-center justify-center" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<span className="text-xs font-semibold">G</span>
</div>
                            GreenBite
                          </div>
</td>
<td className="py-3 border-b border-slate-100">Yam x1, Veggies x3</td>
<td className="py-3 border-b border-slate-100 font-medium">₦3,700</td>
<td className="py-3 border-b border-slate-100">
<span className="px-2 py-1 rounded-md text-xs font-medium" style={{backgroundColor: 'rgba(239, 68, 68, 0.08)', color: 'rgb(220, 38, 38)', border: '1px solid rgba(239,68,68,0.25)'}}>
                            Cancelled
                          </span>
</td>
<td className="py-3 border-b border-slate-100 text-right">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-xs">Details</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="p-4 rounded-lg border border-slate-200 bg-white">
<h2 className="text-lg font-semibold tracking-tight">Top Merchants</h2>
<p className="text-xs text-slate-600 mt-0.5">By portions sold</p>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium">Jollof Hub</div>
<div className="text-xs text-slate-500">African Staples</div>
</div>
</div>
<div className="text-sm font-medium">9,830</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">FreshMart</div>
<div className="text-xs text-slate-500">Proteins &amp; Veg</div>
</div>
</div>
<div className="text-sm font-medium">8,215</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-9 h-9 rounded-md object-cover border border-slate-200" src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">GreenBite</div>
<div className="text-xs text-slate-500">Fruits &amp; Veg</div>
</div>
</div>
<div className="text-sm font-medium">6,907</div>
</div>
</div>
<div className="mt-4 p-3 rounded-lg border border-slate-200" style={{backgroundColor: 'rgba(var(--p), 0.04)'}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="badge-check" style={{color: 'rgb(var(--p))'}}></i>
<div className="text-xs text-slate-700">3 merchants awaiting verification</div>
</div>
<button className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">
                    Review
                    <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 mb-10">

<div className="p-4 rounded-lg border border-slate-200 bg-white">
<h2 className="text-lg font-semibold tracking-tight">Inventory Alerts</h2>
<p className="text-xs text-slate-600 mt-0.5">Low stock items</p>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md inline-flex items-center justify-center bg-amber-50 border border-amber-200">
<i className="w-4.5 h-4.5 text-amber-600" data-lucide="wheat"></i>
</div>
<div>
<div className="text-sm font-medium">Rice (5kg portions)</div>
<div className="text-xs text-slate-500">Jollof Hub</div>
</div>
</div>
<div className="text-xs">
<span className="px-1.5 py-0.5 rounded border border-amber-200 text-amber-700 bg-amber-50">12 left</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md inline-flex items-center justify-center bg-rose-50 border border-rose-200">
<i className="w-4.5 h-4.5 text-rose-600" data-lucide="beef"></i>
</div>
<div>
<div className="text-sm font-medium">Beef (250g portions)</div>
<div className="text-xs text-slate-500">FreshMart</div>
</div>
</div>
<div className="text-xs">
<span className="px-1.5 py-0.5 rounded border border-rose-200 text-rose-700 bg-rose-50">5 left</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md inline-flex items-center justify-center bg-sky-50 border border-sky-200">
<i className="w-4.5 h-4.5 text-sky-600" data-lucide="salad"></i>
</div>
<div>
<div className="text-sm font-medium">Vegetable Mix (200g)</div>
<div className="text-xs text-slate-500">GreenBite</div>
</div>
</div>
<div className="text-xs">
<span className="px-1.5 py-0.5 rounded border border-sky-200 text-sky-700 bg-sky-50">20 left</span>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-lg border border-slate-200 bg-white">
<h2 className="text-lg font-semibold tracking-tight">Approvals Queue</h2>
<p className="text-xs text-slate-600 mt-0.5">New products and edits</p>
<div className="mt-3 space-y-3">
<div className="p-3 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md inline-flex items-center justify-center" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<i className="w-4.5 h-4.5" data-lucide="package-plus"></i>
</div>
<div>
<div className="text-sm font-medium">Plantain (1pc) — Portion</div>
<div className="text-xs text-slate-500">FreshMart • New product</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Decline</button>
<button className="px-2.5 py-1.5 rounded-md text-xs text-white" style={{backgroundColor: 'rgb(var(--p))'}}>Approve</button>
</div>
</div>
</div>
<div className="p-3 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md inline-flex items-center justify-center" style={{backgroundColor: 'rgba(var(--p), 0.10)', color: 'rgb(var(--p))'}}>
<i className="w-4.5 h-4.5" data-lucide="edit-3"></i>
</div>
<div>
<div className="text-sm font-medium">Chicken Breast (500g) — Price update</div>
<div className="text-xs text-slate-500">FreshMart • Edit</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-2.5 py-1.5 rounded-md border border-slate-200 text-xs hover:bg-slate-50">Decline</button>
<button className="px-2.5 py-1.5 rounded-md text-xs text-white" style={{backgroundColor: 'rgb(var(--p))'}}>Approve</button>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 rounded-lg border border-slate-200 bg-white">
<h2 className="text-lg font-semibold tracking-tight">Payouts</h2>
<p className="text-xs text-slate-600 mt-0.5">Upcoming settlements</p>
<div className="mt-3">
<div className="flex items-center justify-between py-2 border-b border-slate-100">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="banknote"></i>
<div className="text-sm">Next payout</div>
</div>
<div className="text-sm font-medium">₦6,230,000 • Sep 28</div>
</div>
<div className="flex items-center justify-between py-2 border-b border-slate-100">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="wallet-cards"></i>
<div className="text-sm">Pending transfers</div>
</div>
<div className="text-sm font-medium">₦820,450</div>
</div>
<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-2">
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="receipt"></i>
<div className="text-sm">Refund balance</div>
</div>
<div className="text-sm font-medium">₦102,300</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="px-3 py-2 rounded-md text-white text-sm" style={{backgroundColor: 'rgb(var(--p))'}}>Settle Now</button>
<button className="px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 text-sm">View Ledger</button>
</div>
</div>
</section>
</main>
</div>
</div>
</div>


    </>
  );
}
