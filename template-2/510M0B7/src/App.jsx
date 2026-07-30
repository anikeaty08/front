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
      

<div className="flex h-screen" id="app">

<aside className="w-72 flex-shrink-0 border-r backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 transition-all duration-300 overflow-y-auto border-zinc-800 bg-neutral-950/60" id="sidebar">
<div className="px-5 py-4 border-b border-zinc-800">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br flex items-center justify-center ring-1 shadow-sm shadow-amber-500/20 from-amber-400 to-amber-600 ring-amber-300/40">
<i className="h-5 w-5 text-neutral-950" data-lucide="coins"></i>
</div>
<div className="min-w-0">
<div className="text-xl tracking-tight font-semibold text-zinc-100">Money Magics</div>
<div className="text-xs text-zinc-400">Accounting OS</div>
</div>
</div>
</div>
<nav className="py-3">
<div className="px-3 text-[11px] uppercase tracking-wide text-zinc-500/70 mb-1">Overview</div>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="dashboard">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 transition-colors bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="layout-dashboard"></i>
</div>
<span className="truncate">Dashboard</span>
</button>
<div className="px-3 text-[11px] uppercase tracking-wide text-zinc-500/70 mt-3 mb-1">Core</div>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="chart-accounts">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="sitemap"></i>
</div>
<span className="truncate">Chart of Accounts</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="general-ledger">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="book-open-text"></i>
</div>
<span className="truncate">General Ledger</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="billing">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="file-invoice"></i>
</div>
<span className="truncate">Billing & Receivables</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="payables">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="wallet"></i>
</div>
<span className="truncate">Payables</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="taxes">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="receipt-percent"></i>
</div>
<span className="truncate">Taxes & Compliance</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="cost-centers">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="building-2"></i>
</div>
<span className="truncate">Cost Centers</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="budgeting">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="piggy-bank"></i>
</div>
<span className="truncate">Budgeting</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="reports">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="bar-chart-3"></i>
</div>
<span className="truncate">Financial Reports</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="assets">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="boxes"></i>
</div>
<span className="truncate">Assets</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="reconciliation">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="scale"></i>
</div>
<span className="truncate">Reconciliation</span>
</button>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="multi-currency">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="globe-2"></i>
</div>
<span className="truncate">Multi-Currency</span>
</button>
<div className="mx-3 my-3 h-px bg-gradient-to-r from-transparent to-transparent via-zinc-800"></div>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="paymagics">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-500/15 border border-amber-500/30 flex items-center justify-center to-amber-600/10">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="wand-2"></i>
</div>
<span className="truncate">PayMagics</span>
</button>
<div className="mx-3 my-3 h-px bg-gradient-to-r from-transparent to-transparent via-zinc-800"></div>
<button className="nav-item w-full px-3 py-2.5 flex items-center gap-3 text-sm rounded-md mx-2 group text-zinc-300 hover:bg-zinc-900/70" data-section="settings">
<div className="h-8 w-8 rounded-md border flex items-center justify-center group-hover:border-amber-500/40 bg-zinc-900/60 border-zinc-800">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="settings"></i>
</div>
<span className="truncate">Settings</span>
</button>
</nav>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<header className="sticky top-0 z-30 border-b backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-zinc-800/80 bg-neutral-950/70">
<div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-3">
<div className="flex items-center gap-3 min-w-0">
<button className="h-9 w-9 flex items-center justify-center rounded-md border transition-colors border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-amber-400" id="btnCollapse">
<i className="h-5 w-5" data-lucide="panel-left-close"></i>
</button>
<div className="relative hidden md:block">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-zinc-500" data-lucide="search"></i>
<input className="pl-10 pr-3 h-10 w-[320px] lg:w-[420px] rounded-md border text-sm placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 bg-zinc-950 border-zinc-800/80 text-zinc-200" placeholder="Search transactions, accounts, reports..." />
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="relative h-9 w-9 flex items-center justify-center rounded-md border transition-colors border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-amber-400">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-amber-500 text-[10px] leading-4 font-medium text-center text-black">3</span>
</button>
<button className="h-9 w-9 flex items-center justify-center rounded-md border transition-colors border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-amber-400">
<i className="h-5 w-5" data-lucide="mail"></i>
</button>
<button className="h-9 w-9 flex items-center justify-center rounded-md border transition-colors border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-amber-400">
<i className="h-5 w-5" data-lucide="user-round"></i>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto">

<section className="content-section px-4 sm:px-6 lg:px-8 py-6 space-y-6" id="dashboard">
<div className="">
<h1 className="md:text-3xl text-2xl font-semibold text-zinc-100 tracking-tight">Dashboard</h1>
<p className="text-sm mt-1 text-zinc-400">Welcome back! Here’s your financial overview.</p>
</div>

<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border p-4 hover:border-amber-500/30 transition-colors border-zinc-800 bg-zinc-950">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Total Revenue</span>
<div className="h-9 w-9 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="dollar-sign"></i>
</div>
</div>
<div className="mt-3 text-2xl font-semibold text-zinc-100">$248,320</div>
<div className="mt-1 text-xs flex items-center gap-1 text-emerald-400">
<i className="h-4 w-4" data-lucide="arrow-up-right"></i> 12.5% from last month
              </div>
</div>
<div className="rounded-xl border p-4 hover:border-amber-500/30 transition-colors border-zinc-800 bg-zinc-950">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Total Expenses</span>
<div className="h-9 w-9 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="wallet"></i>
</div>
</div>
<div className="mt-3 text-2xl font-semibold text-zinc-100">$84,210</div>
<div className="mt-1 text-xs flex items-center gap-1 text-rose-400">
<i className="h-4 w-4" data-lucide="arrow-up-right"></i> 3.2% from last month
              </div>
</div>
<div className="rounded-xl border p-4 hover:border-amber-500/30 transition-colors border-zinc-800 bg-zinc-950">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Net Profit</span>
<div className="h-9 w-9 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="line-chart"></i>
</div>
</div>
<div className="mt-3 text-2xl font-semibold text-zinc-100">$164,110</div>
<div className="mt-1 text-xs flex items-center gap-1 text-emerald-400">
<i className="h-4 w-4" data-lucide="arrow-up-right"></i> 18.7% from last month
              </div>
</div>
<div className="rounded-xl border p-4 hover:border-amber-500/30 transition-colors border-zinc-800 bg-zinc-950">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Cash Balance</span>
<div className="h-9 w-9 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center">
<i className="h-4.5 w-4.5 text-amber-400" data-lucide="banknote"></i>
</div>
</div>
<div className="mt-3 text-2xl font-semibold text-zinc-100">$521,400</div>
<div className="mt-1 text-xs flex items-center gap-1 text-emerald-400">
<i className="h-4 w-4" data-lucide="arrow-up-right"></i> 5.4% from last month
              </div>
</div>
</div>

<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
<button className="rounded-xl border p-4 hover:border-amber-500/30 transition-colors group text-left border-zinc-800 bg-zinc-950 hover:bg-zinc-900/50" onClick={(e) => { showSection('billing') }}>
<div className="h-10 w-10 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-3">
<i className="h-5 w-5 text-amber-400" data-lucide="file-plus-2"></i>
</div>
<div className="font-medium text-zinc-100">Create Invoice</div>
<div className="text-sm text-zinc-400">Send to customers in seconds</div>
</button>
<button className="rounded-xl border p-4 hover:border-amber-500/30 transition-colors group text-left border-zinc-800 bg-zinc-950 hover:bg-zinc-900/50" onClick={(e) => { showSection('payables') }}>
<div className="h-10 w-10 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-3">
<i className="h-5 w-5 text-amber-400" data-lucide="credit-card"></i>
</div>
<div className="font-medium text-zinc-100">Record Payment</div>
<div className="text-sm text-zinc-400">Apply receipts to invoices</div>
</button>
<button className="rounded-xl border p-4 hover:border-amber-500/30 transition-colors group text-left border-zinc-800 bg-zinc-950 hover:bg-zinc-900/50" onClick={(e) => { showSection('reports') }}>
<div className="h-10 w-10 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-3">
<i className="h-5 w-5 text-amber-400" data-lucide="chart-no-axes-column"></i>
</div>
<div className="font-medium text-zinc-100">View Reports</div>
<div className="text-sm text-zinc-400">P&L, Balance Sheet, and more</div>
</button>
<button className="rounded-xl border p-4 hover:border-amber-500/30 transition-colors group text-left border-zinc-800 bg-zinc-950 hover:bg-zinc-900/50" onClick={(e) => { showSection('reconciliation') }}>
<div className="h-10 w-10 rounded-md bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mb-3">
<i className="h-5 w-5 text-amber-400" data-lucide="refresh-ccw"></i>
</div>
<div className="font-medium text-zinc-100">Bank Reconciliation</div>
<div className="text-sm text-zinc-400">Match statements quickly</div>
</button>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-950">
<div className="px-4 py-3 border-b flex items-center gap-2 border-zinc-800">
<i className="h-5 w-5 text-amber-400" data-lucide="history"></i>
<h3 className="text-sm font-medium">Recent Transactions</h3>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="text-xs uppercase border-b text-zinc-400 bg-zinc-950/60 border-zinc-800">
<tr>
<th className="text-left px-4 py-2.5">Date</th>
<th className="text-left px-4 py-2.5">Description</th>
<th className="text-left px-4 py-2.5">Account</th>
<th className="text-left px-4 py-2.5">Amount</th>
<th className="text-left px-4 py-2.5">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800">
<tr className="hover:bg-zinc-900/40">
<td className="px-4 py-3 text-zinc-300">2024-01-15</td>
<td className="px-4 py-3">Invoice #INV-2024-001</td>
<td className="px-4 py-3 text-zinc-300">Accounts Receivable</td>
<td className="px-4 py-3 font-medium text-emerald-400">+$5,420</td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs text-amber-300">Pending</span>
</td>
</tr>
<tr className="hover:bg-zinc-900/40">
<td className="px-4 py-3 text-zinc-300">2024-01-14</td>
<td className="px-4 py-3">Supplier Payment</td>
<td className="px-4 py-3 text-zinc-300">Accounts Payable</td>
<td className="px-4 py-3 font-medium text-rose-400">-$2,150</td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-300">Completed</span>
</td>
</tr>
<tr className="hover:bg-zinc-900/40">
<td className="px-4 py-3 text-zinc-300">2024-01-13</td>
<td className="px-4 py-3">Salary Payment</td>
<td className="px-4 py-3 text-zinc-300">Payroll</td>
<td className="px-4 py-3 font-medium text-rose-400">-$18,500</td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-300">Completed</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="content-section hidden px-4 sm:px-6 lg:px-8 py-6 space-y-6" id="chart-accounts">
<div>
<h1 className="text-2xl md:text-3xl tracking-tight font-semibold text-zinc-100">Chart of Accounts</h1>
<p className="text-sm mt-1 text-zinc-400">Manage your flexible chart with a clean tree view.</p>
</div>
<div className="rounded-xl border border-zinc-800 bg-zinc-950">
<div className="px-4 py-3 border-b flex items-center justify-between border-zinc-800">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-400" data-lucide="sitemap"></i>
<h3 className="text-sm font-medium">Account Structure</h3>
</div>
</div></div></section></main></div></div>
    </>
  );
}
