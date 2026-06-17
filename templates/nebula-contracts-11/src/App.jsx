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



      document.addEventListener('DOMContentLoaded', () => {
        // Replace icons and enforce 1.5 stroke-width
        if (window.lucide) {
          lucide.createIcons();
          requestAnimationFrame(() => {
            document.querySelectorAll('svg.lucide').forEach(svg => svg.setAttribute('stroke-width','1.5'));
          });
        }

        // Update last update timestamp
        const lastUpdate = document.getElementById('lastUpdate');
        if (lastUpdate) {
          const now = new Date();
          const pad = n => String(n).padStart(2, '0');
          lastUpdate.textContent = pad(now.getHours()) + ':' + pad(now.getMinutes());
        }

        // Chart.js setup
        const ctx = document.getElementById('signedChart');
        if (ctx) {
          const gradient1 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 240);
          gradient1.addColorStop(0, 'rgba(129, 140, 248, 0.25)');
          gradient1.addColorStop(1, 'rgba(129, 140, 248, 0.02)');

          const gradient2 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 240);
          gradient2.addColorStop(0, 'rgba(52, 211, 153, 0.25)');
          gradient2.addColorStop(1, 'rgba(52, 211, 153, 0.02)');

          const labels30 = ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'];
          const dataSets = {
            '7': {
              labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
              signed: [8, 12, 9, 15, 11, 6, 10],
              completed: [5, 9, 7, 11, 9, 5, 8],
            },
            '30': {
              labels: labels30,
              signed: [22, 28, 24, 31, 29, 33, 27, 30, 34, 36, 32, 38],
              completed: [18, 24, 20, 27, 25, 29, 22, 26, 30, 31, 28, 35],
            },
            '90': {
              labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
              signed: [120, 140, 135, 152, 160, 172, 168, 178, 185, 190, 202, 210],
              completed: [100, 122, 118, 136, 145, 156, 151, 162, 170, 176, 188, 198],
            }
          };

          const chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: dataSets['30'].labels,
              datasets: [
                {
                  label: 'Signed',
                  data: dataSets['30'].signed,
                  borderColor: '#818CF8',
                  backgroundColor: gradient1,
                  fill: true,
                  tension: 0.35,
                  pointRadius: 0,
                  borderWidth: 2
                },
                {
                  label: 'Completed',
                  data: dataSets['30'].completed,
                  borderColor: '#34D399',
                  backgroundColor: gradient2,
                  fill: true,
                  tension: 0.35,
                  pointRadius: 0,
                  borderWidth: 2
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false, // height controlled by wrapper
              plugins: {
                legend: { display: false },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                  backgroundColor: 'rgba(23,23,23,0.95)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  borderWidth: 1,
                  titleColor: '#E5E7EB',
                  bodyColor: '#D1D5DB',
                  padding: 10,
                  displayColors: false
                }
              },
              interaction: { mode: 'index', intersect: false },
              scales: {
                x: {
                  grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                  ticks: { color: '#9CA3AF', font: { size: 11 } }
                },
                y: {
                  grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                  ticks: { color: '#9CA3AF', font: { size: 11 }, beginAtZero: true }
                }
              }
            }
          });

          // Range buttons
          document.querySelectorAll('.range-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              const sel = btn.getAttribute('data-range');
              document.querySelectorAll('.range-btn').forEach(b => b.classList.remove('bg-white/10','text-neutral-100'));
              btn.classList.add('bg-white/10','text-neutral-100');

              const ds = dataSets[sel];
              chart.data.labels = ds.labels;
              chart.data.datasets[0].data = ds.signed;
              chart.data.datasets[1].data = ds.completed;
              chart.update();
            });
          });
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
      
<div className="min-h-screen grid grid-cols-1 lg:grid-cols-[260px_1fr]">

<aside className="hidden lg:flex flex-col border-r border/10 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">

<div className="flex items-center gap-3 px-5 h-16 border-b border-white/10">
<div className="relative">
<span className="block h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500"></span>
<span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-neutral-950"></span>
</div>
<div className="leading-tight">
<div className="text-lg tracking-tight font-semibold">Nebula</div>
<div className="text-xs text-neutral-400">Contracts Platform</div>
</div>
</div>

<div className="p-4">
<label className="relative block">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-900/70 border border-white/10 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40" placeholder="Search" type="text"/>
</label>
</div>

<nav className="px-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="search"></i>
<span className="text-sm font-medium">Search</span>
<span className="ml-auto text-[10px] leading-none px-1.5 py-0.5 rounded-md border border-white/10 text-neutral-400">/</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium">Reports</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="file-text"></i>
<span className="text-sm font-medium">Contracts</span>
</a>
</nav>
<div className="my-3 mx-4 h-px bg-white/10"></div>

<nav className="px-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-neutral-100" href="#">
<i className="h-[18px] w-[18px]" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="activity"></i>
<span className="text-sm font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="file-pen-line"></i>
<span className="text-sm font-medium">Templates</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="users"></i>
<span className="text-sm font-medium">Clients</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="plug"></i>
<span className="text-sm font-medium">Integrations</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<i className="h-[18px] w-[18px]" data-lucide="settings"></i>
<span className="text-sm font-medium">Settings</span>
</a>
</nav>

<div className="my-4 mx-4 h-px bg-white/10"></div>
<div className="px-2 space-y-1">
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-blue-400" data-lucide="folder"></i>
<span className="text-sm">Company contracts</span>
</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<span className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="folder"></i>
<span className="text-sm">Onboarding templates</span>
</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5" href="#">
<span className="inline-flex items-center gap-">
<i className="h-4 w-4 text-amber-400" data-lucide="folder"></i>
<span className="text-sm">Extra fees/legal stuff</span>
</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-right"></i>
</a>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-neutral-300 hover:text-neutral-100 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="folder-plus"></i>
<span className="text-sm">Create folder</span>
</button>
</div>

<div className="mt-auto p-4">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-900/40 p-4">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="text-sm">
<div className="font-semibold tracking-tight">Upgrade to Pro</div>
<div className="text-neutral-400">Unlimited contracts, custom branding</div>
</div>
</div>
<button className="mt-3 w-full rounded-lg bg-white text-neutral-900 text-sm font-medium py-2 hover:bg-neutral-200 transition">
              Upgrade Now
            </button>
</div>
</div>
</aside>

<main className="flex flex-col">

<header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 border-b border-white/10">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-400" data-lucide="compass"></i>
<div className="text-sm text-neutral-400">Last update at <span id="lastUpdate">—</span></div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="download"></i>
              Export
            </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 px-3.5 py-2 text-sm font-medium hover:bg-neutral-200 transition">
<i className="h-4 w-4" data-lucide="plus"></i>
              Create Contract
            </button>
</div>
</header>

<div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">

<div className="space-y-4">
<div className="flex items-end justify-between">
<div>
<h1 className="text-3xl md:text-4xl tracking-tight font-semibold">Welcome back, Alex Kim!</h1>
<p className="text-neutral-400 text-sm mt-1">Here’s a snapshot of your contract operations today.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-neutral-400 text-xs">Active Contracts</p>
<p className="mt-1 text-3xl tracking-tight font-semibold">152</p>
</div>
<div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="h-5 w-5 text-neutral-300" data-lucide="files"></i>
</div>
</div>
<div className="mt-3 text-xs text-emerald-400">+12 this week</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-neutral-400 text-xs">Pending Signatures</p>
<p className="mt-1 text-3xl tracking-tight font-semibold">281</p>
</div>
<div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="h-5 w-5 text-neutral-300" data-lucide="check-square"></i>
</div>
</div>
<div className="mt-3 text-xs text-amber-400">15 awaiting review</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-neutral-400 text-xs">Total Contracts</p>
<p className="mt-1 text-3xl tracking-tight font-semibold">712</p>
</div>
<div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="h-5 w-5 text-neutral-300" data-lucide="database"></i>
</div>
</div>
<div className="mt-3 text-xs text-neutral-400">All-time</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-neutral-400 text-xs">Expiring Soon</p>
<p className="mt-1 text-3xl tracking-tight font-semibold">19</p>
</div>
<div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="h-5 w-5 text-neutral-300" data-lucide="timer"></i>
</div>
</div>
<div className="mt-3 text-xs text-rose-400">Within 30 days</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

<section className="xl:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/40">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div>
<h2 className="text-lg tracking-tight font-semibold">Signed over time</h2>
<p className="text-xs text-neutral-400">Monthly signatures and completions</p>
</div>
<div className="inline-flex items-center rounded-lg border border-white/10 bg-neutral-900/60 p-0.5">
<button className="range-btn px-2.5 py-1.5 text-xs rounded-md text-neutral-300 hover:text-white hover:bg-white/5" data-range="7">7d</button>
<button className="range-btn px-2.5 py-1.5 text-xs rounded-md text-neutral-100 bg-white/10" data-range="30">30d</button>
<button className="range-btn px-2.5 py-1.5 text-xs rounded-md text-neutral-300 hover:text-white hover:bg-white/5" data-range="90">90d</button>
</div>
</div>
<div className="p-4">

<div className="relative h-[260px] sm:h-[300px]">
<canvas className="absolute inset-0 block w-full h-full" id="signedChart"></canvas>
</div>
<div className="mt-3 flex items-center gap-4 text-xs text-neutral-400">
<div className="inline-flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-indigo-400"></span> Signed
                  </div>
<div className="inline-flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> Completed
                  </div>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/40">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold">Recent activity</h2>
<button className="px-2.5 py-1.5 text-xs rounded-md border border-white/10 hover:bg-white/5">View all</button>
</div>
<ul className="p-2 divide-y divide-white/10">
<li className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&amp;q=80"/>
<div className="min-w-0">
<p className="text-sm truncate"><span className="text-neutral-200">Dana Whitfield</span> signed <span className="text-neutral-200">MSA — Horizon Labs</span></p>
<p className="text-xs text-neutral-500">2m ago</p>
</div>
<span className="ml-auto inline-flex items-center gap-1 text-emerald-400 text-xs">
<i className="h-3.5 w-3.5" data-lucide="check"></i> Signed
                  </span>
</li>
<li className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&amp;q=80"/>
<div className="min-w-0">
<p className="text-sm truncate"><span className="text-neutral-200">Orion Ventures</span> requested changes on <span className="text-neutral-200">NDA</span></p>
<p className="text-xs text-neutral-500">1h ago</p>
</div>
<span className="ml-auto inline-flex items-center gap-1 text-amber-400 text-xs">
<i className="h-3.5 w-3.5" data-lucide="message-square-more"></i> Review
                  </span>
</li>
<li className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&amp;q=80"/>
<div className="min-w-0">
<p className="text-sm truncate"><span className="text-neutral-200">Alex Kim</span> created <span className="text-neutral-200">SOW — Q4 Expansion</span></p>
<p className="text-xs text-neutral-500">3h ago</p>
</div>
<span className="ml-auto inline-flex items-center gap-1 text-indigo-400 text-xs">
<i className="h-3.5 w-3.5" data-lucide="file-plus-2"></i> New
                  </span>
</li>
<li className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl">
<img alt="" className="h-8 w-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=200&amp;q=80"/>
<div className="min-w-0">
<p className="text-sm truncate"><span className="text-neutral-200">Rivian</span> completed <span className="text-neutral-200">Supplier Agreement</span></p>
<p className="text-xs text-neutral-500">Yesterday</p>
</div>
<span className="ml-auto inline-flex items-center gap-1 text-emerald-400 text-xs">
<i className="h-3.5 w-3.5" data-lucide="badge-check"></i> Completed
                  </span>
</li>
</ul>
</section>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<section className="lg:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/40 overflow-hidden">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div>
<h2 className="text-lg tracking-tight font-semibold">Contracts pipeline</h2>
<p className="text-xs text-neutral-400">High-level status of active contracts</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md border border-white/10 hover:bg-white/5">
<i className="h-3.5 w-3.5" data-lucide="filter"></i>
                    Filters
                  </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md border border-white/10 hover:bg-white/5">
<i className="h-3.5 w-3.5" data-lucide="columns-3"></i>
                    Columns
                  </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead className="text-xs text-neutral-400 bg-neutral-900/60">
<tr className="border-b border-white/10">
<th className="text-left font-medium px-4 py-3">Contract</th>
<th className="text-left font-medium px-4 py-3">Client</th>
<th className="text-left font-medium px-4 py-3">Owner</th>
<th className="text-left font-medium px-4 py-3">Status</th>
<th className="text-left font-medium px-4 py-3">Value</th>
<th className="text-right font-medium px-4 py-3">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-white/10 hover:bg-white/5">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="file-text"></i>
<span className="text-neutral-200">MSA — Horizon Labs</span>
</div>
</td>
<td className="px-4 py-3 text-neutral-300">Horizon Labs</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-md object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&amp;q=80"/>
<span className="text-neutral-300">A. Kim</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 border border-emerald-500/20 text-emerald-300 text-[11px]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Signed
                        </span>
</td>
<td className="px-4 py-3 text-neutral-200">$180,000</td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="download"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
<tr className="border-b border-white/10 hover:bg-white/5">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="file-text"></i>
<span className="text-neutral-200">SOW — Q4 Expansion</span>
</div>
</td>
<td className="px-4 py-3 text-neutral-300">Orion Ventures</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-md object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&amp;q=80"/>
<span className="text-neutral-300">D. Lee</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 border border-amber-500/20 text-amber-300 text-[11px]">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span> In Review
                        </span>
</td>
<td className="px-4 py-3 text-neutral-200">$92,500</td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="download"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
<tr className="border-b border-white/10 hover:bg-white/5">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="file-text"></i>
<span className="text-neutral-200">NDA — Supplier Onboarding</span>
</div>
</td>
<td className="px-4 py-3 text-neutral-300">Rivian</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-md object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&amp;q=80"/>
<span className="text-neutral-300">M. Patel</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 border border-sky-500/20 text-sky-300 text-[11px]">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span> Sent
                        </span>
</td>
<td className="px-4 py-3 text-neutral-200">$—</td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="download"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="file-text"></i>
<span className="text-neutral-200">Renewal — Data Processing Addendum</span>
</div>
</td>
<td className="px-4 py-3 text-neutral-300">Nebula Internal</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<img alt="" className="h-6 w-6 rounded-md object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&amp;q=80"/>
<span className="text-neutral-300">K. Nguyen</span>
</div>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 border border-rose-500/20 text-rose-300 text-[11px]">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span> Blocked
                        </span>
</td>
<td className="px-4 py-3 text-neutral-200">$12,000</td>
<td className="px-4 py-3 text-right">
<div className="inline-flex items-center gap-1">
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="download"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
<div>Showing 1–4 of 128</div>
<div className="inline-flex items-center gap-1">
<button className="px-2 py-1 rounded-md border border-white/10 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
</button>
<button className="px-2 py-1 rounded-md border border-white/10 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/40">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold">Expiring soon</h2>
<button className="px-2.5 py-1.5 text-xs rounded-md border border-white/10 hover:bg-white/5">Manage</button>
</div>
<ul className="p-2 divide-y divide-white/10">
<li className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-rose-300" data-lucide="timer"></i>
</div>
<div className="min-w-0">
<p className="text-sm truncate text-neutral-200">Support &amp; Maintenance — Apex Labs</p>
<p className="text-xs text-neutral-500">Expires in 7 days</p>
</div>
<span className="ml-auto inline-flex items-center gap-1 text-rose-300 text-xs">
<i className="h-3.5 w-3.5" data-lucide="alert-triangle"></i> Urgent
                  </span>
</li>
<li className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-amber-300" data-lucide="timer"></i>
</div>
<div className="min-w-0">
<p className="text-sm truncate text-neutral-200">NDA — Nimbus Robotics</p>
<p className="text-xs text-neutral-500">Expires in 18 days</p>
</div>
<span className="ml-auto inline-flex items-center gap-1 text-amber-300 text-xs">
<i className="h-3.5 w-3.5" data-lucide="clock-8"></i> Soon
                  </span>
</li>
<li className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-neutral-300" data-lucide="timer"></i>
</div>
<div className="min-w-0">
<p className="text-sm truncate text-neutral-200">MSA — Delta Partners</p>
<p className="text-xs text-neutral-500">Expires in 29 days</p>
</div>
<span className="ml-auto inline-flex items-center gap-1 text-neutral-300 text-xs">
<i className="h-3.5 w-3.5" data-lucide="calendar-clock"></i> Plan
                  </span>
</li>
</ul>
<div className="p-3 border-t border-white/10">
<button className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-sm text-neutral-200 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="list-plus"></i>
                  Add reminder
                </button>
</div>
</section>
</div>
</div>
</main>
</div>


    </>
  );
}
