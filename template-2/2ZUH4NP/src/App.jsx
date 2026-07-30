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
      {

    // Icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    // View switching
    const views = Array.from(document.querySelectorAll('.view'));
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    function showView(id) {
      views.forEach(v => v.classList.toggle('hidden', v.id !== id));
      // Active state on sidebar and any other nav-link
      document.querySelectorAll('[data-view]').forEach(btn => {
        if (btn.dataset.view === id) {
          btn.classList.add('bg-white/10','ring-white/20','text-white');
        } else {
          btn.classList.remove('bg-white/10','ring-white/20','text-white');
        }
      });
      // Re-render icons in case new nodes appeared
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
    // Default view
    showView('dashboardView');

    // Delegate clicks for data-view (sidebar + in-content)
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-view]');
      if (btn) {
        const targetView = btn.dataset.view;
        showView(targetView);
        // Optional: open subtab when navigating to Billing from dashboard shortcuts
        if (targetView === 'billingView' && btn.dataset.subtab) {
          switchBilling(btn.dataset.subtab);
        }
      }
    });

    // Billing tabs
    const billingTabs = Array.from(document.querySelectorAll('.billing-tab'));
    function switchBilling(tab) {
      // Completed manually to fix truncation
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
      
<div className="min-h-screen w-full flex">
<aside className="hidden md:flex md:flex-col w-72 shrink-0 border-r border-white/10 bg-neutral-950/80 backdrop-blur-xl">
<div className="flex items-center gap-3 px-5 h-16 border-b border-white/10">
<div className="h-8 w-8 grid place-items-center rounded-md bg-yellow-400/10 text-yellow-400 ring-1 ring-inset ring-yellow-400/30 tracking-tight font-semibold">MM</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight">Money Magics</span>
<span className="text-xs text-neutral-400">+ PayMagics</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-3">
<div className="px-3 space-y-1">
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="dashboardView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Dashboard</span>
</button>
<div className="pt-2 pb-1 px-2 text-[11px] uppercase tracking-wider text-neutral-400/70">Accounting</div>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="coaView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="tree-deciduous"></i>
<span className="text-sm font-medium">Chart of Accounts</span>
</button>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="glView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="book-open-text"></i>
<span className="text-sm font-medium">General Ledger</span>
</button>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="billingView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="file-input"></i>
<span className="text-sm font-medium">Billing</span>
</button>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="taxView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Taxes & Compliance</span>
</button>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="costCenterView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="rows-3"></i>
<span className="text-sm font-medium">Cost Centers & Budgets</span>
</button>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="reportsView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="bar-chart-3"></i>
<span className="text-sm font-medium">Financial Reports</span>
</button>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="assetsView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="package"></i>
<span className="text-sm font-medium">Assets</span>
</button>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="reconView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="refresh-ccw"></i>
<span className="text-sm font-medium">Reconciliation</span>
</button>
<div className="pt-2 pb-1 px-2 text-[11px] uppercase tracking-wider text-neutral-400/70">Payments</div>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="paymagicsView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="send"></i>
<span className="text-sm font-medium">PayMagics</span>
</button>
<div className="pt-2 pb-1 px-2 text-[11px] uppercase tracking-wider text-neutral-400/70">Governance</div>
<button className="nav-link group w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10 transition" data-view="periodCloseView">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="lock"></i>
<span className="text-sm font-medium">Period Close & Audit</span>
</button>
</div>
</nav>
<div className="px-4 py-3 border-t border-white/10 flex items-center justify-between">
<div className="text-xs text-neutral-400">v0.9 • Sandbox</div>
<button className="px-2 py-1 text-xs rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="themeToggle">Theme</button>
</div>
</aside>
<div className="flex-1 flex flex-col">
<header className="flex items-center gap-3 px-4 md:px-6 h-16 border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
<button className="md:hidden p-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="mobileNav">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="relative">
<button className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="companyBtn">
<div className="h-6 w-6 grid place-items-center rounded bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/30 tracking-tight text-xs font-semibold" id="companyBadge">A1</div>
<div className="text-sm">
<div className="font-medium leading-4" id="companyName">Acme Holdings</div>
<div className="text-[11px] text-neutral-400 leading-3" id="companyCurrency">Group Currency: USD</div>
</div>
<i className="w-4 h-4 text-neutral-300" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-30 mt-2 w-64 rounded-md bg-neutral-900 ring-1 ring-white/10 shadow-2xl" id="companyMenu">
<div className="p-2">
<button className="w-full flex items-center gap-2 px-2 py-2 rounded hover:bg-white/5" data-company="Acme Holdings|USD|A1">
<div className="h-6 w-6 grid place-items-center rounded bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/30 text-xs font-semibold">A1</div>
<div className="text-left">
<div className="text-sm font-medium">Acme Holdings</div>
<div className="text-[11px] text-neutral-400">USD • Parent</div>
</div>
</button>
<button className="w-full flex items-center gap-2 px-2 py-2 rounded hover:bg-white/5" data-company="Beacon Retail|EUR|B2">
<div className="h-6 w-6 grid place-items-center rounded bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/30 text-xs font-semibold">B2</div>
<div className="text-left">
<div className="text-sm font-medium">Beacon Retail</div>
<div className="text-[11px] text-neutral-400">EUR • Subsidiary</div>
</div>
</button>
<button className="w-full flex items-center gap-2 px-2 py-2 rounded hover:bg-white/5" data-company="Nimbus Labs|INR|N3">
<div className="h-6 w-6 grid place-items-center rounded bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/30 text-xs font-semibold">N3</div>
<div className="text-left">
<div className="text-sm font-medium">Nimbus Labs</div>
<div className="text-[11px] text-neutral-400">INR • Subsidiary</div>
</div>
</button>
<div className="my-2 border-t border-white/10"></div>
<button className="w-full flex items-center justify-between px-2 py-2 rounded hover:bg-white/5" id="consolidatedBtn">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300" data-lucide="layers"></i>
<span className="text-sm">Consolidated Report</span>
</div>
<span className="text-[11px] text-neutral-400">Group: USD</span>
</button>
</div>
</div>
</div>
<div className="hidden md:flex flex-1">
<div className="relative w-full max-w-xl">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-400" data-lucide="search"></i>
<input className="w-full h-10 pl-10 pr-4 rounded-md bg-white/5 ring-1 ring-white/10 focus:ring-yellow-400/40 outline-none placeholder:text-neutral-500 text-sm" id="globalSearch" placeholder="Search ledgers, invoices, batches..." />
</div>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="currencyToggle">Multi-currency: On</button>
<button className="p-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<button className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">
<img alt="user" className="h-6 w-6 rounded object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=120&auto=format&fit=crop" />
<span className="text-sm font-medium hidden sm:inline-block">Avery</span>
<i className="w-4 h-4 text-neutral-300" data-lucide="chevron-down"></i>
</button>
</div>
</header>
<main className="flex-1 overflow-y-auto">
<section className="view px-4 md:px-6 py-6 space-y-6" id="dashboardView">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Welcome back</h1>
<p className="text-sm text-neutral-400">Overview of cash, payables, receivables and approvals</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 transition ring-1 ring-yellow-300/60" id="quickGenerateFile">
<i className="w-4.5 h-4.5" data-lucide="file-down"></i>
<span className="text-sm font-medium">Generate Payment File</span>
</button>
<button className="nav-link flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" data-view="paymagicsView">
<i className="w-4.5 h-4.5" data-lucide="send"></i>
<span className="text-sm font-medium">Open PayMagics</span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Today’s Payables</h3>
<span className="text-xs text-neutral-400">Due</span>
</div>
<div className="mt-3 space-y-2.5">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Vendor: Northwind</span>
<span className="font-medium text-yellow-300">$12,450</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Vendor: Apex Parts</span>
<span className="font-medium text-yellow-300">$4,980</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/10">
<button className="text-xs text-yellow-300 hover:underline" data-subtab="payables" data-view="billingView">Review payables →</button>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Today’s Receivables</h3>
<span className="text-xs text-neutral-400">Due</span>
</div>
<div className="mt-3 space-y-2.5">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Customer: Helix</span>
<span className="font-medium text-green-300">$6,120</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Customer: Orbit</span>
<span className="font-medium text-green-300">$2,870</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/10">
<button className="text-xs text-yellow-300 hover:underline" data-subtab="receivables" data-view="billingView">Review receivables →</button>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Cash Position</h3>
<span className="text-xs text-neutral-400" id="cashCurrency">USD</span>
</div>
<div className="mt-3">
<div className="h-24">
<div className="h-full w-full rounded bg-white/5 p-2">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas className="h-full w-full" id="cashChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
<span>7-day trend</span>
<span className="text-neutral-200 font-medium" id="cashTotal">$2.18M</span>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Pending Approvals</h3>
<span className="text-xs text-neutral-400">Action</span>
</div>
<div className="mt-3 space-y-2.5">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Vendor Bill #V-882</span>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Approve</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Invoice #INV-304</span>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Approve</button>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Reconciliation Alerts</h3>
<span className="text-xs text-neutral-400">2</span>
</div>
<div className="mt-3 space-y-2.5">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Bank Mismatch: 1 item</span>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" data-view="reconView">Open</button>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Payment Unmatched: 1 item</span>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" data-view="reconView">Fix</button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 lg:col-span-2">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Recent GL Entries</h3>
<button className="text-xs text-yellow-300 hover:underline" data-view="glView">Open GL →</button>
</div>
<div className="mt-3 divide-y divide-white/10">
<div className="flex items-center justify-between py-2.5 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="hash"></i>
<span className="text-neutral-300">JE-1045 • Sales Revenue</span>
</div>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10 openGlRow" data-entry="JE-1045">View</button>
</div>
<div className="flex items-center justify-between py-2.5 text-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="hash"></i>
<span className="text-neutral-300">JE-1046 • Vendor Payment</span>
</div>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10 openGlRow" data-entry="JE-1046">View</button>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Liquidity Ratios</h3>
<button className="text-xs text-yellow-300 hover:underline" data-view="reportsView">Open Reports →</button>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Current Ratio</span>
<span className="font-medium">1.8</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Quick Ratio</span>
<span className="font-medium">1.3</span>
</div>
</div>
</div>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="coaView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Chart of Accounts</h2>
<p className="text-sm text-neutral-400">Manage account hierarchy and dimensions</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="coaCompanyToggle">Multi-company: On</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="addLedgerBtn">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="text-sm font-medium">Add Ledger</span>
</button>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between mb-2.5">
<div className="text-sm text-neutral-400">Parent → Child Ledgers</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="expandAll">Expand all</button>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="collapseAll">Collapse all</button>
</div>
</div>
<ul className="space-y-1.5 text-sm" id="coaTree">
<li className="pl-1">
<div className="flex items-center gap-2">
<button aria-expanded="true" className="toggleNode h-6 w-6 grid place-items-center rounded hover:bg-white/5 ring-1 ring-white/10">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<span className="font-medium">1000 • Assets</span>
<span className="ml-2 text-xs text-neutral-400">USD</span>
<div className="ml-auto flex items-center gap-1">
<button className="actionEdit px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Edit</button>
<button className="actionArchive px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Archive</button>
<button className="actionMerge px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Merge</button>
</div>
</div>
<ul className="children pl-8 mt-1 space-y-1">
<li className="flex items-center gap-2">
<div className="h-6 w-6"></div>
<span>1100 • Cash</span>
<span className="ml-2 text-xs text-neutral-400">USD</span>
</li>
<li>
<div className="flex items-center gap-2">
<button aria-expanded="true" className="toggleNode h-6 w-6 grid place-items-center rounded hover:bg-white/5 ring-1 ring-white/10">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<span className="font-medium">1200 • Accounts Receivable</span>
<span className="ml-2 text-xs text-neutral-400">USD</span>
</div>
<ul className="children pl-8 mt-1 space-y-1">
<li className="flex items-center gap-2">
<div className="h-6 w-6"></div>
<span>1210 • Trade Debtors</span>
<span className="ml-2 text-xs text-neutral-400">USD</span>
</li>
<li className="flex items-center gap-2">
<div className="h-6 w-6"></div>
<span>1220 • Intercompany Receivables</span>
<span className="ml-2 text-xs text-neutral-400">USD</span>
</li>
</ul>
</li>
</ul>
</li>
<li className="pl-1">
<div className="flex items-center gap-2">
<button aria-expanded="false" className="toggleNode h-6 w-6 grid place-items-center rounded hover:bg-white/5 ring-1 ring-white/10">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<span className="font-medium">2000 • Liabilities</span>
<span className="ml-2 text-xs text-neutral-400">USD</span>
</div>
<ul className="children pl-8 mt-1 space-y-1 hidden">
<li className="flex items-center gap-2">
<div className="h-6 w-6"></div>
<span>2100 • Accounts Payable</span>
<span className="ml-2 text-xs text-neutral-400">USD</span>
</li>
</ul>
</li>
</ul>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="glView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">General Ledger</h2>
<p className="text-sm text-neutral-400">Filter and drill down transactions</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Export PDF</button>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Export Excel</button>
<button className="px-3 py-2 text-sm rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="saveGlView">Save Report View</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-3">
<input className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm" placeholder="Start Date" type="date" />
<input className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm" placeholder="End Date" type="date" />
<input className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm" placeholder="Customer/Supplier" />
<select className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm">
<option>USD</option>
<option>EUR</option>
<option>INR</option>
</select>
</div>
<div className="mt-3 rounded-lg bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 px-3 py-2 text-xs text-neutral-400 border-b border-white/10">
<div className="col-span-2">Date</div>
<div className="col-span-3">Account</div>
<div className="col-span-3">Description</div>
<div className="col-span-2 text-right">Debit</div>
<div className="col-span-2 text-right">Credit</div>
</div>
<div className="divide-y divide-white/10">
<button className="gl-row grid grid-cols-12 w-full px-3 py-2.5 text-sm hover:bg-white/5 text-left" data-entry="JE-1045">
<div className="col-span-2">2025-08-21</div>
<div className="col-span-3">4000 • Sales Revenue</div>
<div className="col-span-3 text-neutral-300">Invoice INV-304</div>
<div className="col-span-2 text-right">—</div>
<div className="col-span-2 text-right font-medium">$8,500</div>
</button>
<button className="gl-row grid grid-cols-12 w-full px-3 py-2.5 text-sm hover:bg-white/5 text-left" data-entry="JE-1046">
<div className="col-span-2">2025-08-22</div>
<div className="col-span-3">2100 • Accounts Payable</div>
<div className="col-span-3 text-neutral-300">Vendor Bill V-882</div>
<div className="col-span-2 text-right font-medium">$4,980</div>
<div className="col-span-2 text-right">—</div>
</button>
</div>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="billingView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Billing</h2>
<p className="text-sm text-neutral-400">Create and manage invoices and bills</p>
</div>
</div>
<div className="flex border-b border-white/10">
<button className="billing-tab px-4 py-2 text-sm font-medium border-b-2 border-yellow-400 text-yellow-300" data-btab="receivables">Receivables</button>
<button className="billing-tab px-4 py-2 text-sm text-neutral-300 hover:text-white" data-btab="payables">Payables</button>
</div>
<div className="space-y-3" id="receivablesTab">
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="newInvoiceBtn">
<i className="w-4 h-4" data-lucide="file-plus"></i><span className="text-sm font-medium">New Invoice</span>
</button>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="agingBtn">View Aging Report</button>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 px-3 py-2 text-xs text-neutral-400 border-b border-white/10">
<div className="col-span-2">Invoice</div>
<div className="col-span-3">Customer</div>
<div className="col-span-2">Due</div>
<div className="col-span-2 text-right">Amount</div>
<div className="col-span-3 text-right">Actions</div>
</div>
<div className="divide-y divide-white/10">
<div className="grid grid-cols-12 px-3 py-2.5 text-sm">
<div className="col-span-2">INV-304</div>
<div className="col-span-3">Helix Corp</div>
<div className="col-span-2 text-yellow-300">Today</div>
<div className="col-span-2 text-right font-medium">$6,120</div>
<div className="col-span-3 flex justify-end gap-2">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10 sendInvoiceBtn">Send</button>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10 recordPaymentBtn">Record Payment</button>
</div>
</div>
<div className="grid grid-cols-12 px-3 py-2.5 text-sm">
<div className="col-span-2">INV-305</div>
<div className="col-span-3">Orbit LLC</div>
<div className="col-span-2 text-neutral-400">+3 days</div>
<div className="col-span-2 text-right font-medium">$2,870</div>
<div className="col-span-3 flex justify-end gap-2">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10 sendInvoiceBtn">Send</button>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10 recordPaymentBtn">Record Payment</button>
</div>
</div>
</div>
</div>
</div>
<div className="hidden space-y-3" id="payablesTab">
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="newBillBtn">
<i className="w-4 h-4" data-lucide="file-plus-2"></i><span className="text-sm font-medium">New Vendor Bill</span>
</button>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 px-3 py-2 text-xs text-neutral-400 border-b border-white/10">
<div className="col-span-2">Bill</div>
<div className="col-span-3">Vendor</div>
<div className="col-span-2">Status</div>
<div className="col-span-2 text-right">Amount</div>
<div className="col-span-3 text-right">Actions</div>
</div>
<div className="divide-y divide-white/10">
<div className="grid grid-cols-12 px-3 py-2.5 text-sm">
<div className="col-span-2">V-882</div>
<div className="col-span-3">Northwind</div>
<div className="col-span-2"><span className="px-2 py-0.5 text-[11px] rounded bg-white/5 ring-1 ring-white/10">Pending</span></div>
<div className="col-span-2 text-right font-medium">$4,980</div>
<div className="col-span-3 flex justify-end gap-2">
<button className="approveBillBtn px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Approve</button>
<button className="sendToPaymagicsBtn px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" data-view="paymagicsView">Schedule Payment</button>
</div>
</div>
<div className="grid grid-cols-12 px-3 py-2.5 text-sm">
<div className="col-span-2">V-883</div>
<div className="col-span-3">Apex Parts</div>
<div className="col-span-2"><span className="px-2 py-0.5 text-[11px] rounded bg-white/5 ring-1 ring-white/10">Approved</span></div>
<div className="col-span-2 text-right font-medium">$12,450</div>
<div className="col-span-3 flex justify-end gap-2">
<button className="sendToPaymagicsBtn px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" data-view="paymagicsView">Schedule Payment</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="taxView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Taxes & Compliance</h2>
<p className="text-sm text-neutral-400">Manage tax templates and returns</p>
</div>
<button className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="addTaxBtn">
<i className="w-4 h-4" data-lucide="plus"></i><span className="text-sm font-medium">Add Tax</span>
</button>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 px-3 py-2 text-xs text-neutral-400 border-b border-white/10">
<div className="col-span-3">Tax</div>
<div className="col-span-3">Type</div>
<div className="col-span-2">Rate</div>
<div className="col-span-2">Jurisdiction</div>
<div className="col-span-2 text-right">Actions</div>
</div>
<div className="divide-y divide-white/10">
<div className="grid grid-cols-12 px-3 py-2.5 text-sm">
<div className="col-span-3">Sales VAT</div>
<div className="col-span-3">Sales Tax Template</div>
<div className="col-span-2">12%</div>
<div className="col-span-2">EU</div>
<div className="col-span-2 flex justify-end gap-2">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Edit</button>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="generateReturnBtn">Generate Return</button>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="einvoiceBtn">Generate e-Invoice</button>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="costCenterView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Cost Centers & Budgets</h2>
<p className="text-sm text-neutral-400">Dimensions, tagging and budget control</p>
</div>
<button className="flex items-center gap-2 px-3 py-2 rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="createBudgetBtn">
<i className="w-4 h-4" data-lucide="wallet"></i><span className="text-sm font-medium">Create Budget</span>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Dimensions</h3>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="addDimensionBtn">Add</button>
</div>
<div className="mt-3 space-y-2 text-sm">
<div className="flex items-center justify-between">
<span>Department</span>
<span className="text-neutral-400">Sales • Ops • R&D</span>
</div>
<div className="flex items-center justify-between">
<span>Region</span>
<span className="text-neutral-400">NA • EU • APAC</span>
</div>
<div className="flex items-center justify-between">
<span>Channel</span>
<span className="text-neutral-400">Direct • Partner</span>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Budget vs Actual</h3>
<span className="text-xs text-neutral-400">FY 2025</span>
</div>
<div className="mt-3 h-40">
<div className="h-full w-full rounded bg-white/5 p-2">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas className="h-full w-full" id="budgetChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="inline-block h-2.5 w-2.5 rounded bg-yellow-300"></span><span className="text-neutral-400">Budget</span>
<span className="inline-block h-2.5 w-2.5 rounded bg-green-400"></span><span className="text-neutral-400">Actual</span>
</div>
<div className="flex items-center gap-2">
<span className="text-neutral-400">Alerts</span>
<button className="relative inline-flex items-center h-5 w-9 rounded-full ring-1 ring-white/10 bg-white/10" id="budgetAlertToggle">
<span className="sr-only">Toggle Alerts</span>
<span className="dot translate-x-4 inline-block h-4 w-4 rounded-full bg-yellow-300 transition"></span>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="reportsView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Financial Reports</h2>
<p className="text-sm text-neutral-400">Click a card to open full report</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Share</button>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Export</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<button className="report-card rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 text-left hover:bg-white/5" data-report="pnl">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Profit & Loss</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs text-neutral-400 mt-1">YTD: +$420k</p>
<div className="mt-3 h-20 rounded bg-white/5"></div>
</button>
<button className="report-card rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 text-left hover:bg-white/5" data-report="bs">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Balance Sheet</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs text-neutral-400 mt-1">Assets: $3.2M</p>
<div className="mt-3 h-20 rounded bg-white/5"></div>
</button>
<button className="report-card rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 text-left hover:bg-white/5" data-report="tb">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Trial Balance</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs text-neutral-400 mt-1">Balanced</p>
<div className="mt-3 h-20 rounded bg-white/5"></div>
</button>
<button className="report-card rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 text-left hover:bg-white/5" data-report="cf">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Cash Flow</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs text-neutral-400 mt-1">Ops: +$220k</p>
<div className="mt-3 h-20 rounded bg-white/5"></div>
</button>
<button className="report-card rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 text-left hover:bg-white/5" data-report="liq">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Liquidity Ratios</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-up-right"></i>
</div>
<p className="text-xs text-neutral-400 mt-1">Current: 1.8</p>
<div className="mt-3 h-20 rounded bg-white/5"></div>
</button>
</div>
<div className="hidden rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5" id="fullReport">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight" id="fullReportTitle">Report</h3>
<p className="text-xs text-neutral-400">Filters below</p>
</div>
<div className="flex items-center gap-2">
<select className="h-9 px-2 rounded-md bg-white/5 ring-1 ring-white/10 text-sm" id="reportCurrency">
<option>USD</option>
<option>EUR</option>
<option>INR</option>
</select>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Export</button>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Share</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3">
<input className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm" type="date" />
<input className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm" type="date" />
<select className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm">
<option>Company: Current</option>
<option>Consolidated</option>
</select>
<button className="h-10 px-3 rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60 text-sm font-medium" id="runReportBtn">Run</button>
</div>
<div className="mt-4 h-64 rounded bg-white/5 p-2">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas className="h-full w-full" id="reportChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="assetsView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Assets</h2>
<p className="text-sm text-neutral-400">Register assets and schedule depreciation</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="registerAssetBtn">Register Asset</button>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="runDepBtn">Run Depreciation</button>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 px-3 py-2 text-xs text-neutral-400 border-b border-white/10">
<div className="col-span-3">Asset</div>
<div className="col-span-3">Cost Center</div>
<div className="col-span-2">Method</div>
<div className="col-span-2">Status</div>
<div className="col-span-2 text-right">Value</div>
</div>
<div className="divide-y divide-white/10">
<div className="grid grid-cols-12 px-3 py-2.5 text-sm">
<div className="col-span-3">Server Rack SR-21</div>
<div className="col-span-3">IT - DC</div>
<div className="col-span-2">SLM 36mo</div>
<div className="col-span-2"><span className="px-2 py-0.5 text-[11px] rounded bg-white/5 ring-1 ring-white/10">Active</span></div>
<div className="col-span-2 text-right font-medium">$18,000</div>
</div>
</div>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="reconView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Reconciliation</h2>
<p className="text-sm text-neutral-400">Auto-match statements and confirm balances</p>
</div>
</div>
<div className="flex border-b border-white/10">
<button className="recon-tab px-4 py-2 text-sm font-medium border-b-2 border-yellow-400 text-yellow-300" data-rtab="pay">Payment Reconciliation</button>
<button className="recon-tab px-4 py-2 text-sm text-neutral-300 hover:text-white" data-rtab="bank">Bank Reconciliation</button>
</div>
<div className="space-y-3" id="payRecon">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Import Bank Statement</h3>
<input className="text-xs file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-white/10 file:text-neutral-200 hover:file:bg-white/20" type="file" />
</div>
<div className="mt-3 text-sm text-neutral-300">Auto-matched 2 of 3 payments. 1 requires manual fix.</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 px-3 py-2 text-xs text-neutral-400 border-b border-white/10">
<div className="col-span-3">Statement</div>
<div className="col-span-3">Ledger</div>
<div className="col-span-3">Match</div>
<div className="col-span-3 text-right">Action</div>
</div>
<div className="divide-y divide-white/10 text-sm">
<div className="grid grid-cols-12 px-3 py-2.5">
<div className="col-span-3">Payment #P-100</div>
<div className="col-span-3">INV-304</div>
<div className="col-span-3 text-green-400">Auto</div>
<div className="col-span-3 text-right"><span className="px-2 py-1 text-xs rounded bg-white/5 ring-1 ring-white/10">OK</span></div>
</div>
<div className="grid grid-cols-12 px-3 py-2.5">
<div className="col-span-3">Payment #P-101</div>
<div className="col-span-3">V-882</div>
<div className="col-span-3 text-yellow-300">Manual</div>
<div className="col-span-3 text-right">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Fix</button>
</div>
</div>
</div>
</div>
</div>
<div className="hidden space-y-3" id="bankRecon">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Statement vs Ledger</h3>
<button className="px-3 py-2 text-sm rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="confirmBankBtn">Confirm</button>
</div>
<div className="mt-3 text-sm">
<span className="text-neutral-300">Ending Balance</span>
<span className="ml-2 font-medium">$1,204,320</span>
<span className="ml-3 text-neutral-400">Difference: <span className="text-yellow-300">$-1,240</span></span>
</div>
</div>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="paymagicsView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">PayMagics</h2>
<p className="text-sm text-neutral-400">Beneficiaries, batches, files and tracking</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 text-sm rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="newPaymentBtn">New Payment</button>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="generateFileBtn">Generate File</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 lg:col-span-1">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Beneficiaries</h3>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="addBeneBtn">Add</button>
</div>
<div className="mt-3 space-y-2.5 text-sm" id="beneList">
<div className="flex items-center justify-between">
<div>
<div className="font-medium">Northwind</div>
<div className="text-xs text-neutral-400">USD • SWIFT NWDRUS33</div>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Edit</button>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Deactivate</button>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="font-medium">Apex Parts</div>
<div className="text-xs text-neutral-400">EUR • IBAN DE89…</div>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Edit</button>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Deactivate</button>
</div>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5 lg:col-span-2">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Create Payment Batch</h3>
<button className="px-3 py-1.5 text-xs rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="saveBatchBtn">Save</button>
</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-3">
<input className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm" placeholder="Batch Name" />
<select className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm">
<option>Payment Method: SEPA</option>
<option>SWIFT</option>
<option>ACH</option>
</select>
<select className="h-10 px-3 rounded-md bg-white/5 ring-1 ring-white/10 text-sm">
<option>Currency: USD</option>
<option>EUR</option>
</select>
<button className="h-10 px-3 rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60 text-sm font-medium" id="addToBatchBtn">Add Items</button>
</div>
<div className="mt-3 rounded-lg bg-neutral-950 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 px-3 py-2 text-xs text-neutral-400 border-b border-white/10">
<div className="col-span-3">Beneficiary</div>
<div className="col-span-3">Reference</div>
<div className="col-span-2">Due</div>
<div className="col-span-2 text-right">Amount</div>
<div className="col-span-2 text-right">Action</div>
</div>
<div className="divide-y divide-white/10 text-sm">
<div className="grid grid-cols-12 px-3 py-2.5">
<div className="col-span-3">Northwind</div>
<div className="col-span-3">V-883</div>
<div className="col-span-2 text-neutral-400">Today</div>
<div className="col-span-2 text-right font-medium">$12,450</div>
<div className="col-span-2 text-right">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Remove</button>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-end gap-2">
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="validateBatchBtn">Validate</button>
<button className="px-3 py-2 text-sm rounded-md bg-yellow-400 text-neutral-900 hover:bg-yellow-300 ring-1 ring-yellow-300/60" id="generatePaymentFileBtn">Generate File</button>
</div>
</div>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium">Batches & Files</h3>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="refreshBatchesBtn">Refresh</button>
</div>
<div className="mt-3 rounded-lg bg-neutral-950 ring-1 ring-white/10 overflow-hidden">
<div className="grid grid-cols-12 px-3 py-2 text-xs text-neutral-400 border-b border-white/10">
<div className="col-span-3">Batch</div>
<div className="col-span-3">Status</div>
<div className="col-span-3">File</div>
<div className="col-span-3 text-right">Actions</div>
</div>
<div className="divide-y divide-white/10 text-sm">
<div className="grid grid-cols-12 px-3 py-2.5">
<div className="col-span-3">BATCH-2025-08-22</div>
<div className="col-span-3"><span className="px-2 py-0.5 text-[11px] rounded bg-white/5 ring-1 ring-white/10">Generated</span></div>
<div className="col-span-3">payments_0822.xml</div>
<div className="col-span-3 text-right">
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Download</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="view hidden px-4 md:px-6 py-6 space-y-5" id="periodCloseView">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Period Close & Audit</h2>
<p className="text-sm text-neutral-400">Tasks, sign-offs and audit trail</p>
</div>
<button className="px-3 py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Open Checklist</button>
</div>
<div className="rounded-lg bg-neutral-900 ring-1 ring-white/10 p-5">
<div className="text-sm text-neutral-300">Coming soon</div>
</div>
</section>
</main>
</div>
</div>

    </>
  );
}
