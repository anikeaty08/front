import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener("DOMContentLoaded", function () {
      if (window.lucide) {
        lucide.createIcons();
      }

      const ctx = document.getElementById("revenueChart");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "Net interest",
                data: [28, 32, 30, 35, 38, 42, 45, 47, 49, 51, 53, 56],
                borderColor: "#22c55e",
                backgroundColor: "rgba(34,197,94,0.15)",
                borderWidth: 2,
                tension: 0.35,
                pointRadius: 0,
                fill: true
              },
              {
                label: "Fees",
                data: [5, 7, 6, 8, 9, 10, 10, 11, 12, 13, 14, 15],
                borderColor: "#f5d35f",
                backgroundColor: "rgba(245,211,95,0.1)",
                borderWidth: 1.8,
                borderDash: [4, 3],
                tension: 0.35,
                pointRadius: 0,
                fill: true
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "#020617",
                borderColor: "rgba(148,163,184,0.4)",
                borderWidth: 1,
                titleColor: "#e5e7eb",
                bodyColor: "#cbd5f5",
                padding: 8,
                displayColors: false
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: {
                  color: "#64748b",
                  font: { size: 10 }
                }
              },
              y: {
                grid: { color: "rgba(148,163,184,0.15)" },
                ticks: {
                  color: "#64748b",
                  font: { size: 10 },
                  callback: (value) => "£" + value + "k"
                }
              }
            }
          }
        });
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen">

<aside className="hidden lg:flex lg:flex-col lg:w-64 xl:w-72 border-r border-white/5 bg-[#050721]">

<div className="flex items-center gap-3 px-6 py-5 border-b border-white/5">
<div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#f5d35f] via-[#f0b93a] to-[#f0932b] flex items-center justify-center shadow-lg shadow-yellow-500/20">
<span className="text-sm font-medium text-[#050721] tracking-tight">M</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-white">MCL Finance</span>
<span className="text-[11px] font-medium text-slate-400">Loan Management Studio</span>
</div>
</div>

<nav className="flex-1 px-3 py-4 space-y-2 text-xs">
<p className="px-3 mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">Main</p>

<button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 bg-[#f5d35f] text-[#050721] shadow-[0_0_0_1px_rgba(0,0,0,0.1)] shadow-yellow-300/40">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#050721]/5 text-[#050721]">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
</span>
<div className="flex flex-1 flex-col items-start">
<span className="text-xs font-semibold tracking-tight leading-none">Dashboard</span>
<span className="mt-0.5 text-[11px] font-medium text-[#23213b]">Portfolio overview</span>
</div>
<span className="rounded-full bg-[#050721]/10 px-2.5 py-0.5 text-[10px] font-medium leading-none">
            Live
          </span>
</button>

<button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-slate-300 group-hover:bg-white/10">
<i className="h-4 w-4" data-lucide="users"></i>
</span>
<div className="flex flex-1 flex-col items-start">
<span className="text-xs font-semibold tracking-tight leading-none">Customers</span>
<span className="mt-0.5 text-[11px] font-medium text-slate-500 group-hover:text-slate-300">Profiles &amp; KYC</span>
</div>
<i className="h-3 w-3 text-slate-500 group-hover:text-slate-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-slate-300 group-hover:bg-white/10">
<i className="h-4 w-4" data-lucide="credit-card"></i>
</span>
<div className="flex flex-1 flex-col items-start">
<span className="text-xs font-semibold tracking-tight leading-none">Loans</span>
<span className="mt-0.5 text-[11px] font-medium text-slate-500 group-hover:text-slate-300">Origination &amp; servicing</span>
</div>
<i className="h-3 w-3 text-slate-500 group-hover:text-slate-300" data-lucide="chevron-right"></i>
</button>

<button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-slate-300 group-hover:bg-white/10">
<i className="h-4 w-4" data-lucide="wallet-cards"></i>
</span>
<div className="flex flex-1 flex-col items-start">
<span className="text-xs font-semibold tracking-tight leading-none">Payments</span>
<span className="mt-0.5 text-[11px] font-medium text-slate-500 group-hover:text-slate-300">Collections &amp; reconciliations</span>
</div>
<span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 leading-none">
            +2 new
          </span>
</button>

<button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-slate-300 group-hover:bg-white/10">
<i className="h-4 w-4" data-lucide="settings-2"></i>
</span>
<div className="flex flex-1 flex-col items-start">
<span className="text-xs font-semibold tracking-tight leading-none">Settings</span>
<span className="mt-0.5 text-[11px] font-medium text-slate-500 group-hover:text-slate-300">Workflows &amp; risk rules</span>
</div>
</button>

<div className="pt-5 mt-4 border-t border-white/5">
<p className="px-3 mb-2 text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500">Snapshots</p>
<button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#1e2755] text-[#f5d35f]">
<i className="h-4 w-4" data-lucide="activity"></i>
</span>
<div className="flex flex-1 flex-col items-start">
<span className="text-xs font-semibold tracking-tight leading-none">Risk Monitor</span>
<span className="mt-0.5 text-[11px] font-medium text-slate-500 group-hover:text-slate-300">Early warning signals</span>
</div>
</button>
<button className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 text-slate-300 group-hover:bg-white/10">
<i className="h-4 w-4" data-lucide="line-chart"></i>
</span>
<div className="flex flex-1 flex-col items-start">
<span className="text-xs font-semibold tracking-tight leading-none">Funding Lines</span>
<span className="mt-0.5 text-[11px] font-medium text-slate-500 group-hover:text-slate-300">Utilisation by lender</span>
</div>
</button>
</div>
</nav>

<div className="px-4 py-4 border-t border-white/5">
<div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#050b2a]/80 px-3 py-2.5 backdrop-blur">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=80')] bg-cover bg-center"></div>
<div className="flex flex-col">
<span className="text-xs font-semibold tracking-tight text-slate-50">Demo Owner</span>
<span className="text-[11px] font-medium text-slate-500">Portfolio Manager</span>
</div>
</div>
<button className="inline-flex h-7 items-center rounded-full border border-white/10 px-3 text-[11px] font-medium text-slate-200 hover:bg-white/5 transition">
<i className="mr-1.5 h-3.5 w-3.5" data-lucide="log-out"></i>
            Logout
          </button>
</div>
<div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
<span>Version 0.9.1</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Phase 1 · MVP
          </span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col">

<header className="flex items-center justify-between border-b border-white/5 bg-[#050721]/95 px-4 sm:px-6 lg:px-8 py-3 sticky top-0 z-20 backdrop-blur">

<div className="flex items-center gap-3">

<button className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#050b2a] text-slate-200 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="menu"></i>
</button>
<div className="hidden sm:flex flex-col">
<div className="flex items-center gap-2 text-[11px] font-medium text-slate-500">
<span>LMS</span>
<i className="h-3 w-3" data-lucide="chevron-right"></i>
<span>Portfolio</span>
<i className="h-3 w-3" data-lucide="chevron-right"></i>
<span className="text-slate-200">Dashboard</span>
</div>
<div className="mt-1 flex items-center gap-2">
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">Portfolio Dashboard</h1>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Realtime sync
              </span>
</div>
</div>
<div className="flex sm:hidden flex-col">
<h1 className="text-lg font-semibold tracking-tight text-slate-50">Dashboard</h1>
<p className="text-[11px] text-slate-500 font-medium">Live portfolio metrics</p>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3">
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#050b2a] px-3 py-1.5 text-[11px] font-medium text-slate-200 hover:bg-white/5">
<i className="h-3.5 w-3.5" data-lucide="search"></i>
            Global search
            <span className="ml-1 hidden md:inline-flex items-center rounded-full border border-white/10 bg-[#050721] px-1.5 text-[9px] font-medium text-slate-500">
              ⌘K
            </span>
</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#050b2a] text-slate-200 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="bell"></i>
</button>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#f5d35f] px-4 py-1.5 text-xs font-semibold tracking-tight text-[#050721] shadow-lg shadow-yellow-500/30 hover:brightness-110 transition">
<i className="h-3.5 w-3.5" data-lucide="plus"></i>
            New loan
          </button>
</div>
</header>

<section className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5 space-y-6">

<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0f34] to-[#050721] px-4 py-4">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.16em]">Total Loans</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white">1,284</p>
<p className="mt-1 text-[11px] font-medium text-slate-400">Across all active products</p>
</div>
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1e2755] text-[#f5d35f]">
<i className="h-4 w-4" data-lucide="layers"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px]">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300 font-medium">
<i className="h-3 w-3" data-lucide="trending-up"></i>
                +6.2% MoM
              </span>
<span className="text-slate-500">vs. last month</span>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0f34] to-[#050721] px-4 py-4">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.16em]">Total Disbursed</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white">£3,819,000</p>
<p className="mt-1 text-[11px] font-medium text-slate-400">Principal across all lenders</p>
</div>
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1e2755] text-[#f5d35f]">
<i className="h-4 w-4" data-lucide="piggy-bank"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px]">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300 font-medium">
<i className="h-3 w-3" data-lucide="arrow-up-right"></i>
                £210k this week
              </span>
<span className="text-slate-500">11 new drawdowns</span>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0f34] to-[#050721] px-4 py-4">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.16em]">Available Liquidity</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white">£98,613,940</p>
<p className="mt-1 text-[11px] font-medium text-slate-400">Undrawn facility capacity</p>
</div>
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1e2755] text-[#f5d35f]">
<i className="h-4 w-4" data-lucide="vault"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px]">
<span className="inline-flex items-center gap-1 rounded-full bg-sky-500/10 px-2 py-0.5 text-sky-300 font-medium">
<i className="h-3 w-3" data-lucide="shield-check"></i>
                82% facility utilisation
              </span>
<span className="text-slate-500">Within target band</span>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0a0f34] to-[#050721] px-4 py-4">
<div className="flex items-start justify-between">
<div>
<p className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.16em]">Collection Rate</p>
<p className="mt-2 text-2xl font-semibold tracking-tight text-white">97.3%</p>
<p className="mt-1 text-[11px] font-medium text-slate-400">Last 30 days, by value</p>
</div>
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#1e2755] text-[#f5d35f]">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-[11px]">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300 font-medium">
<i className="h-3 w-3" data-lucide="sparkles"></i>
                +1.4 pts vs target
              </span>
<span className="text-slate-500">Strong performance</span>
</div>
</div>
</div>

<div className="grid gap-4 xl:grid-cols-3">

<div className="xl:col-span-2 rounded-2xl border border-white/10 bg-[#050721] px-4 py-4">
<div className="flex flex-wrap items-center justify-between gap-3">
<div>
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Revenue Metrics</h2>
<p className="text-[11px] font-medium text-slate-500 mt-1">Interest &amp; fee performance over the last 12 months</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#050b2a] px-2.5 py-1 text-[11px] font-medium text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Net interest
                </button>
<button className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-100">
<span className="h-1.5 w-1.5 rounded-full bg-[#f5d35f]"></span>
                  Fees
                </button>
</div>
</div>
<div className="mt-4 grid gap-4 sm:grid-cols-3">
<div className="rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<p className="text-[11px] font-medium text-slate-400">Interest Charged (YTD)</p>
<p className="mt-2 text-lg font-semibold tracking-tight text-white">£482,390</p>
<p className="mt-1 text-[11px] font-medium text-emerald-300 inline-flex items-center gap-1">
<i className="h-3 w-3" data-lucide="trending-up"></i>
                  +18.4% vs PY
                </p>
</div>
<div className="rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<p className="text-[11px] font-medium text-slate-400">Fees Charged (YTD)</p>
<p className="mt-2 text-lg font-semibold tracking-tight text-white">£92,680</p>
<p className="mt-1 text-[11px] font-medium text-slate-300 inline-flex items-center gap-1">
<i className="h-3 w-3" data-lucide="equal"></i>
                  Stable vs PY
                </p>
</div>
<div className="rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<p className="text-[11px] font-medium text-slate-400">Total Revenue (YTD)</p>
<p className="mt-2 text-lg font-semibold tracking-tight text-white">£575,070</p>
<p className="mt-1 text-[11px] font-medium text-slate-300 inline-flex items-center gap-1">
<i className="h-3 w-3" data-lucide="percent"></i>
                  12.3% yield on principal
                </p>
</div>
</div>

<div className="mt-4 rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between mb-2">
<p className="text-[11px] font-medium text-slate-400">Revenue trend · last 12 months</p>
<div className="inline-flex items-center gap-1 rounded-full bg-[#050721] px-2 py-0.5 text-[10px] font-medium text-slate-400">
<i className="h-3 w-3" data-lucide="calendar"></i>
                  Rolling 12M
                </div>
</div>
<div className="h-40">
<canvas id="revenueChart"></canvas>
</div>
</div>
</div>

<div className="space-y-4">

<div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 via-[#050b2a] to-[#050721] px-4 py-4">
<div className="flex items-start justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">Portfolio Health</h2>
<p className="text-[11px] font-medium text-slate-400 mt-1">Instant health score across all cohorts</p>
</div>
<div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
<i className="h-4 w-4" data-lucide="heart-pulse"></i>
</div>
</div>
<div className="mt-4 flex items-center gap-4">
<div className="relative h-18 w-18">
<svg className="h-20 w-20 -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-700" d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path>
<path className="text-emerald-400" d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831" fill="transparent" stroke="currentColor" stroke-dasharray="86, 100" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs font-medium text-slate-400">Score</span>
<span className="text-lg font-semibold tracking-tight text-slate-50">8.6</span>
</div>
</div>
<div className="space-y-2 flex-1">
<div className="flex items-center justify-between text-[11px] font-medium">
<span className="text-slate-400">On schedule</span>
<span className="text-slate-50">91.2%</span>
</div>
<div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-[91%] rounded-full bg-emerald-400"></div>
</div>
<div className="flex items-center justify-between text-[11px] font-medium mt-1">
<span className="text-slate-400">Past due &gt; 30d</span>
<span className="text-amber-300">3.4%</span>
</div>
<div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-[18%] rounded-full bg-amber-300"></div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[11px] font-medium text-slate-400">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="alert-octagon"></i>
                  9 high‑risk accounts monitored
                </span>
<button className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-100 hover:underline">
                  View risk queue
                  <i className="h-3 w-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#050721] px-4 py-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">Portfolio Composition</h2>
<p className="text-[11px] font-medium text-slate-500 mt-1">By status and product type</p>
</div>
<div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#050b2a] px-2 py-0.5 text-[10px] font-medium text-slate-400">
<i className="h-3 w-3" data-lucide="filter"></i>
                  Today
                </div>
</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-[11px] font-medium">
<div className="flex flex-col rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between">
<span className="text-slate-400">Active</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">A</span>
</div>
<span className="mt-2 text-lg font-semibold tracking-tight text-white">1,082</span>
<span className="mt-0.5 text-[11px] text-slate-500">84.3% of book</span>
</div>
<div className="flex flex-col rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between">
<span className="text-slate-400">Paid Off</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-300 text-[10px]">P</span>
</div>
<span className="mt-2 text-lg font-semibold tracking-tight text-white">178</span>
<span className="mt-0.5 text-[11px] text-slate-500">11.7% of book</span>
</div>
<div className="flex flex-col rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between">
<span className="text-slate-400">In Arrears</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-300 text-[10px]">R</span>
</div>
<span className="mt-2 text-lg font-semibold tracking-tight text-white">21</span>
<span className="mt-0.5 text-[11px] text-slate-500">&gt; 30 days</span>
</div>
<div className="flex flex-col rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between">
<span className="text-slate-400">Written Off</span>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 text-[10px]">W</span>
</div>
<span className="mt-2 text-lg font-semibold tracking-tight text-white">3</span>
<span className="mt-0.5 text-[11px] text-slate-500">0.12% of book</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid gap-4 xl:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-[#050721] px-4 py-4 xl:col-span-2">
<div className="flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">Origination Pipeline</h2>
<p className="mt-1 text-[11px] font-medium text-slate-500">From new enquiry to funded</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#050b2a] px-2.5 py-1 text-[11px] font-medium text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                  All segments
                </button>
<button className="hidden md:inline-flex items-center gap-1 rounded-full bg-[#f5d35f] px-3 py-1.5 text-[11px] font-semibold tracking-tight text-[#050721]">
<i className="h-3 w-3" data-lucide="plus"></i>
                  New application
                </button>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-4">

<div className="rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between text-[11px] font-medium">
<span className="text-slate-400">Enquiries</span>
<span className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-100">24</span>
</div>
<p className="mt-2 text-xs text-slate-300">Lead capture from all channels.</p>
</div>
<div className="rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between text-[11px] font-medium">
<span className="text-slate-400">Underwriting</span>
<span className="rounded-full bg-slate-800 px-2 py-0.5 text-slate-100">11</span>
</div>
<p className="mt-2 text-xs text-slate-300">In credit assessment &amp; KYC.</p>
</div>
<div className="rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between text-[11px] font-medium">
<span className="text-slate-400">Approved</span>
<span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-200">8</span>
</div>
<p className="mt-2 text-xs text-slate-300">Ready to sign &amp; fund.</p>
</div>
<div className="rounded-xl border border-white/5 bg-[#050b2a] px-3 py-3">
<div className="flex items-center justify-between text-[11px] font-medium">
<span className="text-slate-400">Funded</span>
<span className="rounded-full bg-[#f5d35f]/20 px-2 py-0.5 text-[#f5d35f]">6</span>
</div>
<p className="mt-2 text-xs text-slate-300">Completed in last 7 days.</p>
</div>
</div>

<div className="mt-4 rounded-xl border border-white/5 bg-[#050b2a] overflow-hidden">
<div className="flex items-center justify-between px-3 py-2">
<p className="text-[11px] font-medium text-slate-400">High‑value deals in underwriting</p>
<button className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-200 hover:underline">
                  View all
                  <i className="h-3 w-3" data-lucide="arrow-right"></i>
</button>
</div>
<div className="border-t border-white/5 text-[11px]">
<div className="grid grid-cols-5 gap-2 px-3 py-2 text-slate-500">
<span>Customer</span>
<span>Product</span>
<span className="text-right">Amount</span>
<span className="text-right">Stage</span>
<span className="text-right">Owner</span>
</div>
<div className="border-t border-white/5/80"></div>

<div className="divide-y divide-white/5">
<div className="grid grid-cols-5 gap-2 px-3 py-2.5">
<div className="flex flex-col">
<span className="font-medium text-slate-100">Brightfield Group</span>
<span className="text-[10px] text-slate-500">SME · Manufacturing</span>
</div>
<span className="self-center text-slate-300">Term Loan 36m</span>
<span className="self-center text-right font-medium text-slate-100">£420,000</span>
<span className="self-center text-right">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                        Credit review
                      </span>
</span>
<span className="self-center text-right text-slate-300">J. Patel</span>
</div>
<div className="grid grid-cols-5 gap-2 px-3 py-2.5">
<div className="flex flex-col">
<span className="font-medium text-slate-100">Nova Healthcare</span>
<span className="text-[10px] text-slate-500">SME · Healthcare</span>
</div>
<span className="self-center text-slate-300">Revolving Facility</span>
<span className="self-center text-right font-medium text-slate-100">£750,000</span>
<span className="self-center text-right">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Approved
                      </span>
</span>
<span className="self-center text-right text-slate-300">L. Osei</span>
</div>
<div className="grid grid-cols-5 gap-2 px-3 py-2.5">
<div className="flex flex-col">
<span className="font-medium text-slate-100">Urban Homes Ltd</span>
<span className="text-[10px] text-slate-500">Property · Residential</span>
</div>
<span className="self-center text-slate-300">Bridge Finance</span>
<span className="self-center text-right font-medium text-slate-100">£1,150,000</span>
<span className="self-center text-right">
<span className="inline-flex items-center gap-1 rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-medium text-rose-300">
<span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
                        Exception
                      </span>
</span>
<span className="self-center text-right text-slate-300">A. Green</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">

<div className="rounded-2xl border border-white/10 bg-[#050721] px-4 py-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">Today’s Tasks</h2>
<p className="mt-1 text-[11px] font-medium text-slate-500">Keep the portfolio on track</p>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#050b2a] text-slate-200 hover:bg-white/5">
<i className="h-3.5 w-3.5" data-lucide="plus"></i>
</button>
</div>
<div className="mt-3 space-y-2 text-[11px]">
<div className="flex items-start gap-2 rounded-xl border border-white/5 bg-[#050b2a] px-3 py-2.5">
<span className="mt-0.5 h-3 w-3 rounded border border-emerald-400/60 bg-transparent"></span>
<div className="flex-1">
<p className="font-medium text-slate-100">Call clients with payments due today</p>
<p className="mt-0.5 text-slate-500">7 accounts · £18,930 expected</p>
</div>
<span className="mt-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">Priority</span>
</div>
<div className="flex items-start gap-2 rounded-xl border border-white/5 bg-[#050b2a] px-3 py-2.5">
<span className="mt-0.5 h-3 w-3 rounded border border-slate-500 bg-transparent"></span>
<div className="flex-1">
<p className="font-medium text-slate-100">Review 30+ day arrears queue</p>
<p className="mt-0.5 text-slate-500">Escalate or reschedule where needed</p>
</div>
<span className="mt-0.5 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300">4 cases</span>
</div>
<div className="flex items-start gap-2 rounded-xl border border-white/5 bg-[#050b2a] px-3 py-2.5">
<span className="mt-0.5 h-3 w-3 rounded-full bg-emerald-500"></span>
<div className="flex-1">
<p className="font-medium text-slate-400 line-through">Approve Nova Healthcare facility</p>
<p className="mt-0.5 text-slate-500">Completed · 09:32</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#050721] px-4 py-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-base font-semibold tracking-tight text-slate-50">Recent Activity</h2>
<p className="mt-1 text-[11px] font-medium text-slate-500">Transparent audit trail</p>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#050b2a] px-2.5 py-1 text-[10px] font-medium text-slate-300">
<i className="h-3 w-3" data-lucide="history"></i>
                  Last 24h
                </button>
</div>
<div className="mt-3 space-y-3 text-[11px]">
<div className="flex gap-3">
<div className="flex flex-col items-center">
<span className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
<i className="h-3 w-3" data-lucide="check"></i>
</span>
<span className="mt-1 h-8 w-px bg-slate-700"></span>
</div>
<div className="flex-1">
<p className="font-medium text-slate-100">Payment received · Urban Homes Ltd</p>
<p className="text-slate-500 mt-0.5">£38,400 applied to principal · Loan #UHL‑0031</p>
<p className="mt-0.5 text-slate-500">09:17 · via Direct Debit</p>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<span className="h-6 w-6 rounded-full bg-[#f5d35f]/20 text-[#f5d35f] flex items-center justify-center">
<i className="h-3 w-3" data-lucide="file-pen-line"></i>
</span>
<span className="mt-1 h-8 w-px bg-slate-700"></span>
</div>
<div className="flex-1">
<p className="font-medium text-slate-100">New application created · Kaleidoscope Retail</p>
<p className="text-slate-500 mt-0.5">£150,000 · Working capital · Owner: S. Martin</p>
<p className="mt-0.5 text-slate-500">08:41 · Imported from broker portal</p>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<span className="h-6 w-6 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center">
<i className="h-3 w-3" data-lucide="alert-triangle"></i>
</span>
</div>
<div className="flex-1">
<p className="font-medium text-slate-100">Risk alert created · Brightfield Group</p>
<p className="text-slate-500 mt-0.5">Missed scheduled payment · 14 days overdue</p>
<p className="mt-0.5 text-slate-500">08:05 · Auto‑generated by rules engine</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-[#f5d35f]/40 bg-gradient-to-r from-[#f5d35f]/10 via-[#050b2a] to-[#050721] px-4 py-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[#f5d35f]/20 text-[#f5d35f]">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<p className="text-sm font-semibold tracking-tight text-slate-50">Show this in your demo</p>
<p className="mt-1 text-[11px] font-medium text-slate-200">
                    Highlight how the dashboard connects origination, collections and risk monitoring in one place. 
                    Emphasise the live health score, revenue trends and origination pipeline to demonstrate end‑to‑end control.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
