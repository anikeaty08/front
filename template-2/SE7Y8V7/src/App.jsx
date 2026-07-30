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
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      });

      // Charts
      const makeLine = () => {
        const el = document.getElementById('lineChart');
        if (!el) return;
        const ctx = el.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Day 1','2','3','4','5','6','7','8','9','10','11','12','13','14'],
            datasets: [
              {
                label: 'Inflow',
                data: [300,420,280,520,610,480,530,580,640,720,690,750,800,860],
                borderColor: '#0ea5e9',
                backgroundColor: 'rgba(14,165,233,0.08)',
                fill: true,
                tension: 0.35,
                pointRadius: 0
              },
              {
                label: 'Outflow',
                data: [200,260,240,360,400,420,410,450,460,480,500,520,540,560],
                borderColor: '#94a3b8',
                backgroundColor: 'rgba(148,163,184,0.08)',
                fill: true,
                tension: 0.35,
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { intersect: false, mode: 'index' }
            },
            scales: {
              x: {
                ticks: { display: false },
                grid: { display: false }
              },
              y: {
                ticks: { display: true, color: '#64748b', font: { size: 10 } },
                grid: { color: 'rgba(226,232,240,0.6)' }
              }
            }
          }
        });
      };

      const makeBar = () => {
        const el = document.getElementById('barChart');
        if (!el) return;
        const ctx = el.getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Software','Contractors','Rent','Ads','Taxes'],
            datasets: [{
              label: 'Amount',
              data: [420, 780, 900, 560, 1100],
              backgroundColor: ['#6366f1','#0ea5e9','#10b981','#f59e0b','#ef4444'],
              borderRadius: 6,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#64748b', font: { size: 10 } }
              },
              y: {
                grid: { color: 'rgba(226,232,240,0.6)' },
                ticks: { color: '#64748b', font: { size: 10 } }
              }
            }
          }
        });
      };

      window.addEventListener('load', () => {
        makeLine();
        makeBar();
        const y = document.getElementById('yearSpan');
        if (y) y.textContent = new Date().getFullYear();
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
      

<div className="relative z-50 bg-slate-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 text-center text-sm">
<span className="opacity-90">Exclusive: 14‑day free trial. No credit card.</span>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 grid place-items-center rounded-md bg-slate-900 text-white text-[11px] tracking-tighter">FL</div>
<span className="text-base font-medium tracking-tight group-hover:opacity-80 transition">Flowly</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-slate-600 transition" href="#features">Features</a>
<a className="hover:text-slate-600 transition" href="#how-it-works">How it works</a>
<a className="hover:text-slate-600 transition" href="#pricing">Pricing</a>
<a className="hover:text-slate-600 transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition" href="#pricing">
<i className="w-4 h-4" data-lucide="credit-card"></i><span>Pricing</span>
</a>
<a className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 hover:shadow-sm transition" href="#cta">
<i className="w-4 h-4" data-lucide="zap"></i><span>Start free</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-16">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold leading-tight">
              Ditch the spreadsheet. See your cash flow in minutes.
            </h1>
<p className="mt-5 text-base sm:text-lg text-slate-600">
              Built for freelancers, self‑employed pros, and micro‑businesses. Track money in/out, reconcile your bank, and avoid late fees—without the complexity.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 hover:shadow-sm transition" href="#cta">
<i className="w-5 h-5" data-lucide="zap"></i><span className="text-sm">Start free trial</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition" href="#demo">
<i className="w-5 h-5" data-lucide="play-circle"></i><span className="text-sm">Watch a 90‑sec demo</span>
</a>
</div>
<div className="mt-6 flex items-center gap-5">
<div className="flex -space-x-2">
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" />
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop" />
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=100&auto=format&fit=crop" />
</div>
<p className="text-sm text-slate-600">Trusted by 4,000+ independents and micro‑teams</p>
</div>
<div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="shield-check"></i><span>No credit card</span>
<span aria-hidden="true">•</span>
<i className="w-4 h-4" data-lucide="clock"></i><span>Setup in under 5 minutes</span>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight">Cash Flow Overview</h3>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Last 30 days</span>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs text-slate-500">Inflow</div>
<div className="mt-1 text-xl font-semibold tracking-tight">$12,480</div>
<div className="mt-2 flex items-center gap-2 text-emerald-600 text-xs">
<i className="w-4 h-4" data-lucide="trending-up"></i><span>+12%</span>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs text-slate-500">Outflow</div>
<div className="mt-1 text-xl font-semibold tracking-tight">$8,920</div>
<div className="mt-2 flex items-center gap-2 text-rose-600 text-xs">
<i className="w-4 h-4" data-lucide="trending-down"></i><span>-3%</span>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs text-slate-500">Balance</div>
<div className="mt-1 text-xl font-semibold tracking-tight">$3,560</div>
<div className="mt-2 flex items-center gap-2 text-slate-600 text-xs">
<i className="w-4 h-4" data-lucide="wallet"></i><span>Available</span>
</div>
</div>
</div>
<div className="mt-6">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight">Daily Cash Flow</h4>
<div className="text-xs text-slate-500 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="line-chart"></i><span>Trend</span>
</div>
</div>
<div className="mt-3">
<div>
<canvas height="140" id="lineChart"></canvas>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight">Top 5 Expenses</h4>
<div className="text-xs text-slate-500 flex items-center gap-1">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i><span>Analysis</span>
</div>
</div>
<div className="mt-3">
<div>
<canvas height="140" id="barChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:block">
<div className="rounded-xl border border-slate-200 bg-white shadow-sm p-4">
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4 text-emerald-600" data-lucide="check-circle-2"></i>
<span>Bank reconciled</span>
</div>
<div className="mt-2 text-sm font-medium tracking-tight">3 new matches found</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-200"></div>
</section>

<section aria-label="logos" className="py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm text-slate-500">Helping independents from</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 text-slate-400">
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-xs tracking-tighter">ALFA</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-xs tracking-tighter">NOVA</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-xs tracking-tighter">LUMO</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-xs tracking-tighter">KITE</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-xs tracking-tighter">PIXEL</div>
<div className="h-10 rounded-md border border-slate-200 grid place-items-center text-xs tracking-tighter">ORBIT</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50" id="how-it-works">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">From messy spreadsheets to clear, confident cash flow</h2>
<p className="mt-4 text-slate-600">Spreadsheets and notebooks are fragile and time‑consuming. Flowly automates the tedious bits so you can focus on the work that pays.</p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-600 mt-0.5" data-lucide="alert-triangle"></i>
<div>
<div className="text-sm font-medium">Manual errors cost money</div>
<p className="text-sm text-slate-600 mt-1">Bank mismatches and missed invoices create surprises. Flowly flags differences and keeps you aligned.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-600 mt-0.5" data-lucide="timer"></i>
<div>
<div className="text-sm font-medium">Hours lost every week</div>
<p className="text-sm text-slate-600 mt-1">Quick entry forms, templates, and smart defaults speed up your routines.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="eye"></i>
<div>
<div className="text-sm font-medium">Know your runway</div>
<p className="text-sm text-slate-600 mt-1">Daily and monthly views show what’s coming, what’s due, and what’s safe to spend.</p>
</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition" href="#cta">
<i className="w-5 h-5" data-lucide="sparkles"></i><span className="text-sm">Get organized today</span>
</a>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
<img alt="Clean dashboard preview" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop" />
<div className="p-6">
<ul className="grid sm:grid-cols-2 gap-4 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span>Import bank statements (CSV/OFX) for fast reconciliation</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span>One‑click overdue reminders to clients</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span>Preset chart of accounts and cost centers</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>
<span>Mobile‑friendly, works anywhere</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to run a healthy cash flow</h2>
<p className="mt-3 text-slate-600">Simple inputs. Clear outputs. Real‑time answers.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="list-plus"></i>
<h3 className="text-base font-medium tracking-tight">Simplified Entries</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Quickly add income and expenses with chart of accounts, cost center, customer/supplier, and payment status.</p>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
<h3 className="text-base font-medium tracking-tight">Bank Reconciliation</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Compare entries with your bank statement and auto‑match transactions to eliminate errors.</p>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="calendar-range"></i>
<h3 className="text-base font-medium tracking-tight">Daily & Monthly Cash Flow</h3>
</div>
<p className="mt-2 text-sm text-slate-600">See inflows/outflows, day/month balances, and cumulative totals at a glance.</p>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="file-bar-chart"></i>
<h3 className="text-base font-medium tracking-tight">Management DRE Report</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Understand profitability by separating revenues, costs, and expenses across periods.</p>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="receipt"></i>
<h3 className="text-base font-medium tracking-tight">Payables & Receivables</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Dashboards for due dates, avoid late fines, and streamline customer collection.</p>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="pie-chart"></i>
<h3 className="text-base font-medium tracking-tight">Visual & Graphic Dashboards</h3>
</div>
<ul className="mt-2 text-sm text-slate-600 list-disc pl-5 space-y-1">
<li>Revenue and expense evolution</li>
<li>Top 5 expenses by account</li>
<li>Default rate analysis</li>
<li>Goals and budget planning</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="database"></i>
<h3 className="text-base font-medium tracking-tight">Essential Records</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Account Plans, Cost Centers, Customers & Suppliers, Banks—all organized and consistent.</p>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="lock"></i>
<h3 className="text-base font-medium tracking-tight">Secure by default</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Your data is encrypted in transit and at rest. Export anytime.</p>
</div>

<div className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition">
<div className="flex items-center gap-2 text-slate-700">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<h3 className="text-base font-medium tracking-tight">Fast, human support</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Get answers from specialists who understand small business finance.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12">
<div className="grid md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<blockquote className="text-xl sm:text-2xl tracking-tight font-medium">
                “I moved from a tangle of spreadsheets to Flowly and reconciled two months in one afternoon. Now I always know if I can say yes to a project.”
              </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Customer" className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" />
<div>
<div className="text-sm font-medium">Marina Alves</div>
<div className="text-xs text-slate-500">Freelance Designer</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs text-slate-500">Time saved/week</div>
<div className="text-2xl font-semibold tracking-tight">4h</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs text-slate-500">Late fees avoided</div>
<div className="text-2xl font-semibold tracking-tight">90%</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs text-slate-500">Cash clarity</div>
<div className="text-2xl font-semibold tracking-tight">Real‑time</div>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs text-slate-500">Setup time</div>
<div className="text-2xl font-semibold tracking-tight">{"<"}5m</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple pricing that pays for itself</h2>
<p className="mt-3 text-slate-600">Start free for 14 days. Upgrade anytime. Cancel whenever.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-6">

<div className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-sm transition">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Solo</h3>
<span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded">Most popular</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<div className="text-4xl font-semibold tracking-tight">$9</div>
<div className="text-sm text-slate-500">/month</div>
</div>
<p className="mt-2 text-sm text-slate-600">For freelancers and self‑employed.</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>Simplified entries & bank reconciliation</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>Daily & monthly cash flow</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>DRE report & visual dashboards</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>Accounts receivable/payable</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition" href="#cta">
<i className="w-4 h-4" data-lucide="zap"></i><span className="text-sm">Start free</span>
</a>
</div>

<div className="rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-sm transition">
<h3 className="text-lg font-medium tracking-tight">Business</h3>
<div className="mt-4 flex items-baseline gap-2">
<div className="text-4xl font-semibold tracking-tight">$19</div>
<div className="text-sm text-slate-500">/month</div>
</div>
<p className="mt-2 text-sm text-slate-600">For micro‑enterprises needing more control.</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>Everything in Solo</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>Multi‑bank support & bulk imports</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>Advanced dashboards & budget goals</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>Priority support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-md border border-slate-300 hover:bg-slate-50 transition" href="#cta">
<i className="w-4 h-4" data-lucide="credit-card"></i><span className="text-sm">Choose Business</span>
</a>
</div>
</div>
<p className="mt-6 text-center text-xs text-slate-500">Prices in USD. Save 20% with annual billing.</p>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-900 text-white" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get cash clarity in under 5 minutes</h3>
<p className="mt-3 text-slate-300">Create your account, import a bank file, and see your trends instantly.</p>
<ul className="mt-6 space-y-2 text-sm text-slate-300">
<li className="flex items-center gap-2"><i className="w-5 h-5 text-emerald-400" data-lucide="check-circle-2"></i>14‑day free trial</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-emerald-400" data-lucide="check-circle-2"></i>No credit card</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-emerald-400" data-lucide="check-circle-2"></i>Cancel anytime</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<form className="space-y-4">
<div>
<label className="block text-sm mb-1">Email</label>
<input className="w-full px-3 py-2 rounded-md bg-white text-slate-900 border border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400" placeholder="you@company.com" required type="email" />
</div>
<div>
<label className="block text-sm mb-1">Business type</label>
<select className="w-full px-3 py-2 rounded-md bg-white text-slate-900 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400">
<option>Freelancer</option>
<option>Self‑employed</option>
<option>Micro‑enterprise</option>
</select>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-white text-slate-900 hover:bg-slate-100 transition" type="submit">
<i className="w-4 h-4" data-lucide="zap"></i><span className="text-sm">Create free account</span>
</button>
<p className="text-xs text-slate-300">By continuing you agree to our Terms and Privacy.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24" id="faq">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Frequently asked questions</h3>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="rounded-lg border border-slate-200 p-5">
<h4 className="text-base font-medium tracking-tight">Can I import from spreadsheets?</h4>
<p className="mt-2 text-sm text-slate-600">Yes. Import CSV/OFX files from your bank or spreadsheet and map fields once.</p>
</div>
<div className="rounded-lg border border-slate-200 p-5">
<h4 className="text-base font-medium tracking-tight">Does it support multiple accounts?</h4>
<p className="mt-2 text-sm text-slate-600">Connect and reconcile across multiple bank accounts in the Business plan.</p>
</div>
<div className="rounded-lg border border-slate-200 p-5">
<h4 className="text-base font-medium tracking-tight">Is my data safe?</h4>
<p className="mt-2 text-sm text-slate-600">We use industry‑standard encryption. You can export your data anytime.</p>
</div>
<div className="rounded-lg border border-slate-200 p-5">
<h4 className="text-base font-medium tracking-tight">What about taxes?</h4>
<p className="mt-2 text-sm text-slate-600">Use the DRE and chart of accounts to categorize revenue, costs, and expenses for your accountant.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<a className="flex items-center gap-2" href="#">
<div className="h-7 w-7 grid place-items-center rounded-md bg-slate-900 text-white text-[11px] tracking-tighter">FL</div>
<span className="text-sm font-medium tracking-tight">Flowly</span>
</a>
<div className="text-xs text-slate-500">© <span id="yearSpan"></span> Flowly, Inc. All rights reserved.</div>
<div className="flex items-center gap-4 text-sm">
<a className="hover:text-slate-600 transition" href="#">Privacy</a>
<a className="hover:text-slate-600 transition" href="#">Terms</a>
<a className="hover:text-slate-600 transition" href="#">Support</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
