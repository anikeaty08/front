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
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Mobile sidebar toggle
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      const openSidebar = document.getElementById('openSidebar');

      function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        sidebar.classList.remove('translate-x-0');
        overlay.classList.add('opacity-0','pointer-events-none');
        overlay.classList.remove('opacity-100');
      }
      function openSidebarFn() {
        sidebar.classList.remove('-translate-x-full');
        sidebar.classList.add('translate-x-0');
        overlay.classList.remove('opacity-0','pointer-events-none');
        overlay.classList.add('opacity-100');
      }
      openSidebar?.addEventListener('click', openSidebarFn);
      overlay?.addEventListener('click', closeSidebar);
      // Ensure correct initial state on resize
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
          sidebar.classList.remove('-translate-x-full');
          overlay.classList.add('opacity-0','pointer-events-none');
        } else {
          sidebar.classList.add('-translate-x-full');
        }
      });

      // Date dropdown
      const dateDropdown = document.getElementById('dateDropdown');
      const dateLabel = document.getElementById('dateLabel');
      dateDropdown?.querySelectorAll('[data-range]').forEach(btn => {
        btn.addEventListener('click', () => {
          const val = btn.getAttribute('data-range');
          dateLabel.textContent = val;
          dateDropdown.removeAttribute('open');
          // You can trigger data refresh here if needed
        });
      });

      // Charts
      const fmtCurrency = (v) => {
        return '$' + v.toLocaleString(undefined, { maximumFractionDigits: 0 });
      };

      // Revenue chart
      const revCtx = document.getElementById('revenueChart').getContext('2d');
      const revGradient = revCtx.createLinearGradient(0, 0, 0, 300);
      revGradient.addColorStop(0, 'rgba(99, 102, 241, 0.25)');
      revGradient.addColorStop(1, 'rgba(99, 102, 241, 0.02)');

      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      const revenue = [32000, 35200, 38000, 36500, 40200, 41800, 44700, 46200, 48800, 50500, 52200, 54000];
      // Simple 3-month moving average
      const movingAvg = revenue.map((_, i, arr) => {
        const start = Math.max(0, i - 2);
        const slice = arr.slice(start, i + 1);
        const avg = slice.reduce((a, b) => a + b, 0) / slice.length;
        return Math.round(avg);
      });

      new Chart(revCtx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            {
              label: 'Revenue',
              data: revenue,
              borderColor: 'rgb(99,102,241)',
              backgroundColor: revGradient,
              fill: true,
              pointRadius: 2.5,
              pointHoverRadius: 4,
              tension: 0.35,
              borderWidth: 2
            },
            {
              label: 'Moving Avg',
              data: movingAvg,
              borderColor: 'rgb(148,163,184)',
              backgroundColor: 'transparent',
              fill: false,
              pointRadius: 0,
              borderDash: [4,4],
              tension: 0.2,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(17,24,39,0.92)',
              titleFont: { size: 12, weight: '600' },
              bodyFont: { size: 12 },
              padding: 10,
              callbacks: {
                label: (ctx) => `${ctx.dataset.label}: ${fmtCurrency(ctx.parsed.y)}`
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#6b7280', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(17,24,39,0.06)' },
              ticks: {
                color: '#6b7280',
                font: { size: 11 },
                callback: (v) => fmtCurrency(v)
              }
            }
          }
        }
      });

      // Churn chart (doughnut)
      const churnCtx = document.getElementById('churnChart').getContext('2d');
      new Chart(churnCtx, {
        type: 'doughnut',
        data: {
          labels: ['Active', 'Churned'],
          datasets: [
            {
              data: [1208, 76],
              backgroundColor: ['#10b981', '#ef4444'],
              borderColor: ['#d1fae5', '#fee2e2'],
              borderWidth: 2,
              hoverOffset: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '62%',
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(17,24,39,0.92)',
              titleFont: { size: 12, weight: '600' },
              bodyFont: { size: 12 },
              padding: 10,
              callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.parsed} companies`
              }
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
      

<div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 opacity-0 pointer-events-none transition-opacity duration-300" id="overlay"></div>

<aside className="fixed z-40 inset-y-0 left-0 w-72 bg-white border-r border-gray-200 translate-x-[-100%] md:translate-x-0 transition-transform duration-300 ease-out" id="sidebar">

<div className="h-16 flex items-center px-5 border-b border-gray-100">
<div className="flex items-center space-x-2">
<div className="h-8 w-8 rounded-md bg-gray-900 text-white grid place-items-center text-sm tracking-tighter">HR</div>
<div className="text-lg tracking-tight font-semibold text-gray-900">Backoffice</div>
</div>
</div>

<nav className="px-3 py-3">
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-md bg-gray-900 text-white border border-gray-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
<span className="text-[15px] font-medium">Dashboard</span>
<span className="ml-auto inline-flex items-center gap-1 text-xs text-white/80">
<i className="w-4 h-4" data-lucide="sparkles"></i>New
              </span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all" href="#">
<i className="w-5 h-5" data-lucide="building-2"></i>
<span className="text-[15px] font-medium">Company Management</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all" href="#">
<i className="w-5 h-5" data-lucide="credit-card"></i>
<span className="text-[15px] font-medium">Subscription & Package</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
<span className="text-[15px] font-medium">Analytics & Reporting</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all" href="#">
<i className="w-5 h-5" data-lucide="life-buoy"></i>
<span className="text-[15px] font-medium">Support</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all" href="#">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="text-[15px] font-medium">Settings</span>
</a>
</li>
</ul>
</nav>

<div className="px-5 py-3">
<div className="h-px bg-gray-100"></div>
</div>

<div className="px-5 pb-5 space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-gray-50/60">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=160&auto=format&fit=crop" />
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-900 truncate">Alex Morgan</div>
<div className="text-xs text-gray-500 truncate">Admin</div>
</div>
<button className="p-2 rounded-md hover:bg-white border border-transparent hover:border-gray-200 transition-colors" title="Profile">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
</div>
</div>
</aside>

<div className="md:pl-72">

<header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-200">
<div className="h-16 px-4 md:px-8 flex items-center gap-3">
<button aria-label="Open sidebar" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-gray-200 bg-white hover:bg-gray-50 active:scale-[0.98] transition" id="openSidebar">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<h1 className="text-[22px] sm:text-[24px] md:text-[26px] tracking-tight font-semibold text-gray-900">Dashboard</h1>
<span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs border border-gray-200 text-gray-600 bg-gray-50">Internal</span>
</div>
<div className="flex items-center gap-2 sm:gap-3">

<details className="relative" id="dateDropdown">
<summary className="list-none">
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-sm text-gray-700" id="dateButton">
<i className="w-4.5 h-4.5" data-lucide="calendar"></i>
<span className="font-medium" id="dateLabel">This month</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down"></i>
</button>
</summary>
<div className="absolute right-0 mt-2 w-56 rounded-lg border border-gray-200 bg-white shadow-sm p-1.5">
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-50" data-range="This month">This month</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-50" data-range="This quarter">This quarter</button>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-50" data-range="This year">This year</button>
<div className="my-1 border-t border-gray-100"></div>
<button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-gray-50 flex items-center gap-2" data-range="Custom…">
<i className="w-4 h-4 text-gray-500" data-lucide="edit-3"></i> Custom…
                    </button>
</div>
</details>

<div className="hidden md:flex items-center h-9 w-56 rounded-md border border-gray-200 bg-white px-3">
<i className="w-4.5 h-4.5 text-gray-500" data-lucide="search"></i>
<input className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400" placeholder="Search companies…" type="text" />
</div>

<button className="h-9 w-9 rounded-full overflow-hidden border border-gray-200 hover:shadow-sm transition">
<img alt="user" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1684369175246-ff0a44510aae?q=80&w=160&auto=format&fit=crop" />
</button>
</div>
</div>
</div>
</div>
</header>

<main className="px-4 md:px-8 py-6 space-y-8">

<section className="space-y-3">
<div className="flex items-baseline justify-between">
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-gray-900">Key metrics</h2>
<p className="text-sm text-gray-500 hidden sm:block">Overview for selected period</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Total Companies</div>
<div className="h-9 w-9 rounded-md bg-indigo-50 text-indigo-600 grid place-items-center border border-indigo-100">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
</div>
<div className="mt-3 flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tight">1,284</div>
<span className="inline-flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i> 3.2%
                </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-md border border-gray-200 bg-gray-50/60 p-2">
<div className="flex items-center gap-1.5 text-xs text-gray-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Active
                  </div>
<div className="mt-1 text-sm font-medium">1,112</div>
</div>
<div className="rounded-md border border-gray-200 bg-gray-50/60 p-2">
<div className="flex items-center gap-1.5 text-xs text-gray-600">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Pending
                  </div>
<div className="mt-1 text-sm font-medium">96</div>
</div>
<div className="rounded-md border border-gray-200 bg-gray-50/60 p-2">
<div className="flex items-center gap-1.5 text-xs text-gray-600">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span> Churned
                  </div>
<div className="mt-1 text-sm font-medium">76</div>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Total Revenue</div>
<div className="h-9 w-9 rounded-md bg-emerald-50 text-emerald-600 grid place-items-center border border-emerald-100">
<i className="w-5 h-5" data-lucide="dollar-sign"></i>
</div>
</div>
<div className="mt-3 flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tight">$482k</div>
<span className="inline-flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i> 6.8%
                </span>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="rounded-md border border-gray-200 bg-gray-50/60 p-2">
<div className="text-xs text-gray-600">MRR</div>
<div className="mt-1 text-sm font-medium">$40.2k</div>
</div>
<div className="rounded-md border border-gray-200 bg-gray-50/60 p-2">
<div className="text-xs text-gray-600">ARR</div>
<div className="mt-1 text-sm font-medium">$482.4k</div>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Churn Rate</div>
<div className="h-9 w-9 rounded-md bg-rose-50 text-rose-600 grid place-items-center border border-rose-100">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
</div>
<div className="mt-3 flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tight">2.4%</div>
<span className="inline-flex items-center gap-1 text-xs text-rose-600 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded">
<i className="w-4 h-4" data-lucide="arrow-down-right"></i> 0.3%
                </span>
</div>
<p className="mt-3 text-xs text-gray-500">Monthly customer churn compared to last period</p>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Active Subscriptions</div>
<div className="h-9 w-9 rounded-md bg-sky-50 text-sky-600 grid place-items-center border border-sky-100">
<i className="w-5 h-5" data-lucide="package"></i>
</div>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight">1,214</div>
<div className="mt-4">
<div className="flex items-center justify-between text-xs text-gray-600">
<span>By package tier</span>
<span>Basic / Pro / Enterprise</span>
</div>
<div className="mt-2 h-2.5 w-full rounded-full bg-gray-100 overflow-hidden border border-gray-200">
<div className="h-full bg-sky-400" style={{width: `48%`}}></div>
<div className="h-full bg-indigo-500" style={{width: `38%`}}></div>
<div className="h-full bg-violet-500" style={{width: `14%`}}></div>
</div>
<div className="mt-2 grid grid-cols-3 gap-2">
<div className="flex items-center gap-1.5 text-xs text-gray-600">
<span className="h-2 w-2 rounded-full bg-sky-400"></span> 582 Basic
                  </div>
<div className="flex items-center gap-1.5 text-xs text-gray-600">
<span className="h-2 w-2 rounded-full bg-indigo-500"></span> 461 Pro
                  </div>
<div className="flex items-center gap-1.5 text-xs text-gray-600">
<span className="h-2 w-2 rounded-full bg-violet-500"></span> 171 Ent.
                  </div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex items-baseline justify-between">
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-gray-900">Charts</h2>
<p className="text-sm text-gray-500 hidden sm:block">Revenue trend and churn overview</p>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<div className="xl:col-span-2 rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-gray-600">Revenue Trend</div>
<div className="text-lg font-semibold tracking-tight text-gray-900">Monthly revenue</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-gray-600 px-2 py-1 rounded-md bg-gray-50 border border-gray-200">
<span className="h-2 w-2 rounded-full bg-indigo-500"></span> Revenue
                  </span>
<span className="inline-flex items-center gap-1 text-xs text-gray-600 px-2 py-1 rounded-md bg-gray-50 border border-gray-200">
<span className="h-2 w-2 rounded-full bg-slate-300"></span> Moving Avg
                  </span>
</div>
</div>
<div className="mt-4 border-t border-gray-100"></div>
<div className="mt-4">
<div className="h-72 w-full">
<canvas id="revenueChart"></canvas>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-gray-600">Churn Overview</div>
<div className="text-lg font-semibold tracking-tight text-gray-900">Active vs Churned</div>
</div>
<div className="inline-flex items-center gap-1 text-xs text-gray-600 px-2 py-1 rounded-md bg-gray-50 border border-gray-200">
<i className="w-4 h-4" data-lucide="users"></i> Clients
                </div>
</div>
<div className="mt-4 border-t border-gray-100"></div>
<div className="mt-4">
<div className="h-72 w-full">
<canvas id="churnChart"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="rounded-md border border-gray-200 bg-gray-50/60 p-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<div className="text-xs text-gray-600">Active</div>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-gray-900">1,208</div>
</div>
<div className="rounded-md border border-gray-200 bg-gray-50/60 p-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
<div className="text-xs text-gray-600">Churned</div>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-gray-900">76</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex items-baseline justify-between">
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-gray-900">Quick links</h2>
<p className="text-sm text-gray-500 hidden sm:block">Common actions</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
<a className="group rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition" href="#">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-md bg-gray-900 text-white grid place-items-center border border-gray-800">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-4 text-base font-medium text-gray-900">Register New Company</div>
<p className="mt-1 text-sm text-gray-500">Create a new company account and assign a subscription</p>
</a>
<a className="group rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition" href="#">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-md bg-indigo-50 text-indigo-600 grid place-items-center border border-indigo-100">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-4 text-base font-medium text-gray-900">View All Companies</div>
<p className="mt-1 text-sm text-gray-500">Search, filter, and manage company profiles</p>
</a>
<a className="group rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition" href="#">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-md bg-sky-50 text-sky-600 grid place-items-center border border-sky-100">
<i className="w-5 h-5" data-lucide="package"></i>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-4 text-base font-medium text-gray-900">Manage Subscriptions</div>
<p className="mt-1 text-sm text-gray-500">Upgrade, downgrade, or cancel company plans</p>
</a>
<a className="group rounded-xl border border-gray-200 bg-white p-4 hover:border-gray-300 hover:shadow-sm transition" href="#">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-md bg-emerald-50 text-emerald-600 grid place-items-center border border-emerald-100">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition" data-lucide="arrow-right"></i>
</div>
<div className="mt-4 text-base font-medium text-gray-900">View Analytics</div>
<p className="mt-1 text-sm text-gray-500">KPIs, revenue insights, and retention analytics</p>
</a>
</div>
</section>

<footer className="pt-4 border-t border-gray-200 text-xs text-gray-500">
          © 2025 HR Backoffice. All rights reserved.
        </footer>
</main>
</div>


    </>
  );
}
