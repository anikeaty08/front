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
      
<div className="h-full flex overflow-hidden" id="app">

<aside className="w-64 border-r border-slate-200 bg-white flex flex-col">

<div className="h-16 flex items-center gap-2 px-5 border-b border-slate-100">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm font-semibold">
          MM
        </div>
<div className="flex flex-col">
<span className="text-lg tracking-tight font-semibold text-slate-900">MoneyMagics</span>
<span className="text-xs text-slate-500">Finance Suite</span>
</div>
</div>

<div className="px-5 py-4 border-b border-slate-100 flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-800 to-slate-950 text-white flex items-center justify-center text-xs font-medium tracking-tight">
          AR
        </div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-900 tracking-tight">Alex Rivera</div>
<div className="text-xs text-slate-500">Finance Manager</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-50">
<i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
</div>

<nav className="flex-1 overflow-y-auto text-sm">

<div className="mt-4">
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="dashboard">
<i className="w-4 h-4 text-slate-500" data-lucide="layout-dashboard"></i>
<span className="tracking-tight">Dashboard</span>
</button>
</div>

<div className="mt-4">
<div className="px-5 mb-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
            Sales
          </div>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="sales-quotes">
<i className="w-4 h-4 text-slate-500" data-lucide="file-input"></i>
<span className="tracking-tight">Sales Quotes</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="sales-invoices">
<i className="w-4 h-4 text-slate-500" data-lucide="file-text"></i>
<span className="tracking-tight">Sales Invoices</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="sales-payments">
<i className="w-4 h-4 text-slate-500" data-lucide="credit-card"></i>
<span className="tracking-tight">Sales Payments</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="customers">
<i className="w-4 h-4 text-slate-500" data-lucide="users"></i>
<span className="tracking-tight">Customers</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="sales-items">
<i className="w-4 h-4 text-slate-500" data-lucide="package"></i>
<span className="tracking-tight">Sales Items</span>
</button>
</div>

<div className="mt-4">
<div className="px-5 mb-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
            Purchases
          </div>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="purchase-invoices">
<i className="w-4 h-4 text-slate-500" data-lucide="file-badge"></i>
<span className="tracking-tight">Purchase Invoices</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="purchase-payments">
<i className="w-4 h-4 text-slate-500" data-lucide="wallet-cards"></i>
<span className="tracking-tight">Purchase Payments</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="suppliers">
<i className="w-4 h-4 text-slate-500" data-lucide="building-2"></i>
<span className="tracking-tight">Suppliers</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="purchase-items">
<i className="w-4 h-4 text-slate-500" data-lucide="boxes"></i>
<span className="tracking-tight">Purchase Items</span>
</button>
</div>

<div className="mt-4">
<div className="px-5 mb-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
            Common
          </div>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="journal-entry">
<i className="w-4 h-4 text-slate-500" data-lucide="book-open-text"></i>
<span className="tracking-tight">Journal Entry</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="party">
<i className="w-4 h-4 text-slate-500" data-lucide="id-card"></i>
<span className="tracking-tight">Party</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="items">
<i className="w-4 h-4 text-slate-500" data-lucide="grid-3x3"></i>
<span className="tracking-tight">Items</span>
</button>
</div>

<div className="mt-4 mb-4">
<div className="px-5 mb-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
            Reports
          </div>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="general-ledger">
<i className="w-4 h-4 text-slate-500" data-lucide="layers-3"></i>
<span className="tracking-tight">General Ledger</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="profit-loss">
<i className="w-4 h-4 text-slate-500" data-lucide="line-chart"></i>
<span className="tracking-tight">Profit and Loss</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="balance-sheet">
<i className="w-4 h-4 text-slate-500" data-lucide="clipboard-list"></i>
<span className="tracking-tight">Balance Sheet</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="trial-balance">
<i className="w-4 h-4 text-slate-500" data-lucide="table"></i>
<span className="tracking-tight">Trial Balance</span>
</button>
<button className="nav-item w-full flex items-center gap-2 px-5 py-2 text-slate-700 hover:bg-slate-50" data-view="tax-filing">
<i className="w-4 h-4 text-slate-500" data-lucide="receipt-percent"></i>
<span className="tracking-tight">TAX Filing</span>
</button>
</div>
</nav>

<div className="border-t border-slate-100 px-5 py-3 flex items-center justify-between text-xs text-slate-500">
<span>FY 2024–25</span>
<button className="flex items-center gap-1 hover:text-slate-700">
<i className="w-4 h-4" data-lucide="settings-2"></i>
<span>Settings</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0">

<header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6">
<div className="flex items-center gap-3 min-w-0">
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="hidden sm:inline">Finance</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
<span className="font-medium text-slate-900 tracking-tight truncate" id="breadcrumb">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-1.5 bg-slate-50">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent focus:outline-none text-sm text-slate-800 placeholder:text-slate-400 w-52" placeholder="Search customers, invoices, GL…" type="text"/>
</div>
<button className="h-9 w-9 flex items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50">
<i className="w-4 h-4 text-slate-500" data-lucide="bell"></i>
</button>
<button className="hidden sm:flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50 text-sm">
<i className="w-4 h-4 text-slate-500" data-lucide="plus"></i>
<span className="tracking-tight text-slate-800">New Transaction</span>
</button>
</div>
</header>

<section className="flex-1 overflow-y-auto p-6 space-y-6" id="content">

<div className="screen space-y-6" data-screen="dashboard">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="text-xs font-medium tracking-[0.12em] uppercase text-slate-400">
                  Revenue
                </div>
<span className="rounded-full bg-emerald-50 text-emerald-600 text-[0.7rem] px-2 py-0.5 font-medium tracking-tight">
                  +18.4%
                </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">
                  ₹ 1,248,500
                </span>
<span className="text-xs text-slate-400">This quarter</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Billed: ₹ 986,200</span>
<span>Unbilled: ₹ 262,300</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="text-xs font-medium tracking-[0.12em] uppercase text-slate-400">
                  Expenses
                </div>
<span className="rounded-full bg-rose-50 text-rose-600 text-[0.7rem] px-2 py-0.5 font-medium tracking-tight">
                  +6.2%
                </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">
                  ₹ 742,900
                </span>
<span className="text-xs text-slate-400">This quarter</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Paid: ₹ 624,300</span>
<span>Outstanding: ₹ 118,600</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="text-xs font-medium tracking-[0.12em] uppercase text-slate-400">
                  Profit
                </div>
<span className="rounded-full bg-emerald-50 text-emerald-600 text-[0.7rem] px-2 py-0.5 font-medium tracking-tight">
                  Margin 40.5%
                </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">
                  ₹ 505,600
                </span>
<span className="text-xs text-slate-400">Net</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Last quarter: ₹ 428,900</span>
<span className="text-emerald-600 font-medium">+17.9%</span>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="text-xs font-medium tracking-[0.12em] uppercase text-slate-400">
                  Cash Position
                </div>
<span className="rounded-full bg-slate-50 text-slate-600 text-[0.7rem] px-2 py-0.5 font-medium tracking-tight">
                  45 days runway
                </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">
                  ₹ 328,400
                </span>
<span className="text-xs text-slate-400">Available</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Receivables: ₹ 212,000</span>
<span>Payables: ₹ 96,200</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">Monthly Cash Flow</div>
<div className="text-xs text-slate-500">Last 12 months</div>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-full border border-slate-200 px-2 py-0.5 text-slate-700 bg-slate-50">
<span>Net</span>
</button>
<button className="flex items-center gap-1 rounded-full border border-slate-100 px-2 py-0.5 text-slate-500 hover:border-slate-300">
<span>Inflow</span>
</button>
<button className="flex items-center gap-1 rounded-full border border-slate-100 px-2 py-0.5 text-slate-500 hover:border-slate-300">
<span>Outflow</span>
</button>
</div>
</div>

<div className="relative h-52">
<div className="absolute inset-x-0 inset-y-3 flex flex-col justify-between text-[0.7rem] text-slate-300">
<div className="border-t border-dashed border-slate-100"></div>
<div className="border-t border-dashed border-slate-100"></div>
<div className="border-t border-dashed border-slate-100"></div>
<div className="border-t border-dashed border-slate-100"></div>
</div>
<div className="absolute inset-x-2 bottom-2 flex items-end justify-between gap-2">

<div className="w-full flex flex-col items-center gap-1">
<div className="w-full h-16 rounded-full bg-gradient-to-t from-emerald-100 to-emerald-400 opacity-80"></div>
<span className="text-[0.7rem] text-slate-400">Jan</span>
</div>
<div className="w-full flex flex-col items-center gap-1">
<div className="w-full h-24 rounded-full bg-gradient-to-t from-emerald-100 to-emerald-500 opacity-80"></div>
<span className="text-[0.7rem] text-slate-400">Feb</span>
</div>
<div className="w-full flex flex-col items-center gap-1">
<div className="w-full h-20 rounded-full bg-gradient-to-t from-emerald-100 to-emerald-400 opacity-80"></div>
<span className="text-[0.7rem] text-slate-400">Mar</span>
</div>
<div className="w-full flex flex-col items-center gap-1">
<div className="w-full h-28 rounded-full bg-gradient-to-t from-emerald-100 to-emerald-500 opacity-80"></div>
<span className="text-[0.7rem] text-slate-400">Apr</span>
</div>
<div className="w-full flex flex-col items-center gap-1">
<div className="w-full h-24 rounded-full bg-gradient-to-t from-emerald-100 to-emerald-400 opacity-80"></div>
<span className="text-[0.7rem] text-slate-400">May</span>
</div>
<div className="w-full flex flex-col items-center gap-1">
<div className="w-full h-32 rounded-full bg-gradient-to-t from-emerald-100 to-emerald-600 opacity-80"></div>
<span className="text-[0.7rem] text-slate-400">Jun</span>
</div>
</div>
</div>
</div>

<div className="space-y-4">

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">Expense Breakdown</div>
<div className="text-xs text-slate-500">This quarter</div>
</div>
<button className="h-7 w-7 rounded-lg flex items-center justify-center hover:bg-slate-50">
<i className="w-4 h-4 text-slate-500" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex items-center gap-4">
<div className="relative h-28 w-28">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-100 via-sky-100 to-amber-100"></div>
<div className="absolute inset-2 rounded-full bg-white"></div>
<div className="absolute inset-6 rounded-full bg-slate-50 flex items-center justify-center">
<span className="text-xs text-slate-600 text-center leading-tight">
                        Ops &amp; Payroll
                        <span className="block font-semibold tracking-tight text-slate-900">₹ 742k</span>
</span>
</div>
</div>
<div className="flex-1 space-y-2 text-xs">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-slate-600">Payroll</span>
</div>
<span className="text-slate-500">42%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-500"></span>
<span className="text-slate-600">Subscriptions</span>
</div>
<span className="text-slate-500">23%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-500"></span>
<span className="text-slate-600">Vendors</span>
</div>
<span className="text-slate-500">19%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
<span className="text-slate-600">Others</span>
</div>
<span className="text-slate-500">16%</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight text-slate-900">
                    Quick Actions
                  </div>
<span className="text-[0.7rem] text-slate-400">Today · 18 Nov</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
<button className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 hover:bg-slate-100">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-slate-900 text-white flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
</div>
<div className="flex flex-col text-left">
<span className="font-medium tracking-tight text-slate-900 text-xs">New Invoice</span>
<span className="text-[0.7rem] text-slate-500">Bill customer</span>
</div>
</div>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-right"></i>
</button>
<button className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 hover:bg-slate-50">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="wallet"></i>
</div>
<div className="flex flex-col text-left">
<span className="font-medium tracking-tight text-slate-900 text-xs">New Payment</span>
<span className="text-[0.7rem] text-slate-500">Record receipt</span>
</div>
</div>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-right"></i>
</button>
<button className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 hover:bg-slate-50">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-sky-50 text-sky-700 flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="book-plus"></i>
</div>
<div className="flex flex-col text-left">
<span className="font-medium tracking-tight text-slate-900 text-xs">New Journal Entry</span>
<span className="text-[0.7rem] text-slate-500">Adjust GL</span>
</div>
</div>
<i className="w-3 h-3 text-slate-400" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
<div className="flex items-center justify-between mb-3">
<div>
<div className="text-sm font-medium tracking-tight text-slate-900">Recent Transactions</div>
<div className="text-xs text-slate-500">Last 10 entries across modules</div>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-full border border-slate-100 px-2 py-1 text-slate-600 hover:border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="filter"></i>
<span>All</span>
</button>
<button className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-100 px-2 py-1 text-slate-500 hover:border-slate-200">
<span>Sales</span>
</button>
<button className="hidden sm:inline-flex items-center gap-1 rounded-full border border-slate-100 px-2 py-1 text-slate-500 hover:border-slate-200">
<span>Purchases</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pr-4 font-medium">Date</th>
<th className="text-left py-2 pr-4 font-medium">Type</th>
<th className="text-left py-2 pr-4 font-medium">Party</th>
<th className="text-left py-2 pr-4 font-medium">Ref No</th>
<th className="text-right py-2 pr-4 font-medium">Debit</th>
<th className="text-right py-2 pr-4 font-medium">Credit</th>
<th className="text-left py-2 pr-4 font-medium">Status</th>
<th className="text-right py-2 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-600">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pr-4">18 Nov 2024</td>
<td className="py-2 pr-4">
<div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<i className="w-3 h-3" data-lucide="file-text"></i>
<span>Sales Invoice</span>
</div>
</td>
<td className="py-2 pr-4">Acme Corp</td>
<td className="py-2 pr-4">INV-2024-091</td>
<td className="py-2 pr-4 text-right">—</td>
<td className="py-2 pr-4 text-right">₹ 48,900</td>
<td className="py-2 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Paid</span>
</span>
</td>
<td className="py-2 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="eye"></i>
</button>
</td>
</tr>
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pr-4">17 Nov 2024</td>
<td className="py-2 pr-4">
<div className="inline-flex items-center gap-1 rounded-full bg-sky-50 text-sky-700 px-2 py-0.5">
<i className="w-3 h-3" data-lucide="file-badge"></i>
<span>Purchase Invoice</span>
</div>
</td>
<td className="py-2 pr-4">Bright Supplies</td>
<td className="py-2 pr-4">PINV-2024-044</td>
<td className="py-2 pr-4 text-right">₹ 21,750</td>
<td className="py-2 pr-4 text-right">—</td>
<td className="py-2 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
<span>Partially Paid</span>
</span>
</td>
<td className="py-2 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="eye"></i>
</button>
</td>
</tr>
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pr-4">16 Nov 2024</td>
<td className="py-2 pr-4">
<div className="inline-flex items-center gap-1 rounded-full bg-slate-50 text-slate-700 px-2 py-0.5">
<i className="w-3 h-3" data-lucide="book-open-text"></i>
<span>Journal Entry</span>
</div>
</td>
<td className="py-2 pr-4">—</td>
<td className="py-2 pr-4">JE-2024-019</td>
<td className="py-2 pr-4 text-right">₹ 12,000</td>
<td className="py-2 pr-4 text-right">₹ 12,000</td>
<td className="py-2 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<span>Posted</span>
</span>
</td>
<td className="py-2 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="eye"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pr-4">15 Nov 2024</td>
<td className="py-2 pr-4">
<div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<i className="w-3 h-3" data-lucide="credit-card"></i>
<span>Sales Payment</span>
</div>
</td>
<td className="py-2 pr-4">Greenfield Labs</td>
<td className="py-2 pr-4">PAY-2024-112</td>
<td className="py-2 pr-4 text-right">—</td>
<td className="py-2 pr-4 text-right">₹ 35,400</td>
<td className="py-2 pr-4">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Applied</span>
</span>
</td>
<td className="py-2 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="eye"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="sales-quotes">

<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Sales Quotes</h1>
<p className="text-sm text-slate-500">Draft, send, and convert quotes into invoices.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50 text-slate-700">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Export</span>
</button>
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('quote-form')">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Create Quote</span>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 flex flex-wrap items-center gap-3 text-xs">
<div className="flex items-center gap-2">
<span className="text-slate-500">Status</span>
<div className="flex items-center gap-1">
<button className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-slate-700">All</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Draft</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Sent</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Accepted</button>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-slate-500">Period</span>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-600 flex items-center gap-1">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="calendar"></i>
<span>This quarter</span>
</button>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 border border-slate-200 rounded-lg px-2 py-1 bg-slate-50">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent focus:outline-none text-xs text-slate-800 placeholder:text-slate-400 w-32" placeholder="Search quote or customer"/>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Quote No</th>
<th className="text-left py-2 pr-3 font-medium">Customer</th>
<th className="text-left py-2 pr-3 font-medium">Date</th>
<th className="text-right py-2 pr-3 font-medium">Amount</th>
<th className="text-left py-2 pr-3 font-medium">Status</th>
<th className="text-left py-2 pr-3 font-medium">Valid Until</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">Q-2024-118</td>
<td className="py-2 pr-3">Acme Corp</td>
<td className="py-2 pr-3">18 Nov 2024</td>
<td className="py-2 pr-3 text-right">₹ 56,800</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
<span>Sent</span>
</span>
</td>
<td className="py-2 pr-3">30 Nov 2024</td>
<td className="py-2 pr-4 text-right">
<div className="inline-flex gap-1">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openDetails('quote-details')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="eye"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
                         i data-lucide="more-horizontal" className="w-3.5 h-3.5 text-slate-500"&gt;
                        </button>
</div>
</td>
</tr>
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">Q-2024-117</td>
<td className="py-2 pr-3">Greenfield Labs</td>
<td className="py-2 pr-3">15 Nov 2024</td>
<td className="py-2 pr-3 text-right">₹ 32,400</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Accepted</span>
</span>
</td>
<td className="py-2 pr-3">28 Nov 2024</td>
<td className="py-2 pr-4 text-right">
<div className="inline-flex gap-1">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openDetails('quote-details')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="eye"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">Q-2024-116</td>
<td className="py-2 pr-3">Orbit Media</td>
<td className="py-2 pr-3">14 Nov 2024</td>
<td className="py-2 pr-3 text-right">₹ 24,900</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<span>Draft</span>
</span>
</td>
<td className="py-2 pr-3">25 Nov 2024</td>
<td className="py-2 pr-4 text-right">
<div className="inline-flex gap-1">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openDetails('quote-details')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="eye"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-4 py-2 border-t border-slate-100 text-[0.75rem] text-slate-500">
<span>Showing 1–3 of 24 quotes</span>
<div className="flex items-center gap-1">
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="chevron-left"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 bg-slate-900 text-white">
                  1
                </button>
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
                  2
                </button>
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
                  3
                </button>
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[32rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="quote-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Create Sales Quote</div>
<div className="text-xs text-slate-500">Quote a customer before invoicing.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('quote-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Customer</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Acme Corp</option>
<option>Greenfield Labs</option>
<option>Orbit Media</option>
</select>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Quote No</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-slate-50 focus:outline-none" value="Q-2024-119"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Date</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" type="date"/>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Valid Until</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" type="date"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Currency</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>INR</option>
<option>USD</option>
</select>
</div>
</div>

<div className="border border-slate-200 rounded-lg">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
<span className="text-xs font-medium tracking-tight text-slate-900">Quote Items</span>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-slate-700 rounded-md border border-slate-200 px-2 py-1 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
<span>Add Row</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-[0.75rem]">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-3 pr-2 font-medium">Item</th>
<th className="text-right py-2 pr-2 font-medium">Qty</th>
<th className="text-right py-2 pr-2 font-medium">Rate</th>
<th className="text-right py-2 pr-2 font-medium">Tax %</th>
<th className="text-right py-2 pr-3 font-medium">Amount</th>
<th className="text-right py-2 pr-2 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.75rem] text-slate-700">
<tr className="border-b border-slate-50">
<td className="py-1.5 pl-3 pr-2">
<input className="w-full border border-slate-200 rounded-md px-2 py-1 bg-slate-50 focus:outline-none" value="Consulting - Implementation"/>
</td>
<td className="py-1.5 pr-2 text-right">
<input className="w-14 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none" value="10"/>
</td>
<td className="py-1.5 pr-2 text-right">
<input className="w-20 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none" value="3,500"/>
</td>
<td className="py-1.5 pr-2 text-right">
<input className="w-14 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none" value="18"/>
</td>
<td className="py-1.5 pr-3 text-right text-slate-900 font-medium">₹ 35,000</td>
<td className="py-1.5 pr-2 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="trash-2"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col gap-2 px-3 py-2 border-t border-slate-100 text-[0.75rem]">
<div className="flex items-center justify-between">
<span className="text-slate-500">Subtotal</span>
<span className="font-medium text-slate-900">₹ 35,000.00</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-500">Tax (18%)</span>
<span className="font-medium text-slate-900">₹ 6,300.00</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-dashed border-slate-200">
<span className="text-slate-500">Total</span>
<span className="font-semibold text-slate-900 tracking-tight">₹ 41,300.00</span>
</div>
</div>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Terms &amp; Conditions</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Payment due within 15 days from acceptance." rows="3"></textarea>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-slate-500">
<i className="w-3.5 h-3.5" data-lucide="info"></i>
<span>Quote can be converted to invoice when accepted.</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50" onclick="closeForm('quote-form')">Cancel</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Save &amp; Send</button>
</div>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[32rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="quote-details">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-900">Quote Q-2024-118</span>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 px-2 py-0.5 text-[0.7rem]">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
<span>Sent</span>
</span>
</div>
<div className="text-xs text-slate-500">Acme Corp · Created 18 Nov 2024</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeDetails('quote-details')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 text-xs space-y-4">
<div className="flex items-center justify-between">
<div className="space-y-1">
<div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">Customer</div>
<div className="font-medium text-slate-900">Acme Corp</div>
<div className="text-[0.75rem] text-slate-500">Billing: acme@client.com • +91 98765 43210</div>
</div>
<div className="text-right space-y-1">
<div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">Amounts</div>
<div className="font-semibold text-slate-900 tracking-tight">₹ 56,800</div>
<div className="text-[0.75rem] text-slate-500">Tax: ₹ 8,640 · Total: ₹ 65,440</div>
</div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<table className="min-w-full text-[0.75rem]">
<thead className="bg-slate-50 text-[0.7rem] uppercase text-slate-400">
<tr>
<th className="text-left py-2 pl-3 pr-2 font-medium">Item</th>
<th className="text-right py-2 pr-2 font-medium">Qty</th>
<th className="text-right py-2 pr-2 font-medium">Rate</th>
<th className="text-right py-2 pr-3 font-medium">Amount</th>
</tr>
</thead>
<tbody className="text-slate-700">
<tr className="border-b border-slate-100">
<td className="py-1.5 pl-3 pr-2">
                        Consulting - Implementation
                        <div className="text-[0.7rem] text-slate-400">Milestone-based delivery</div>
</td>
<td className="py-1.5 pr-2 text-right">8</td>
<td className="py-1.5 pr-2 text-right">₹ 3,500</td>
<td className="py-1.5 pr-3 text-right text-slate-900 font-medium">₹ 28,000</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-1.5 pl-3 pr-2">
                        Support retainer
                        <div className="text-[0.7rem] text-slate-400">3 months</div>
</td>
<td className="py-1.5 pr-2 text-right">3</td>
<td className="py-1.5 pr-2 text-right">₹ 6,000</td>
<td className="py-1.5 pr-3 text-right text-slate-900 font-medium">₹ 18,000</td>
</tr>
</tbody>
<tfoot className="text-[0.75rem]">
<tr>
<td className="py-1.5 pl-3 pr-2 text-right text-slate-500" colspan="3">Subtotal</td>
<td className="py-1.5 pr-3 text-right font-medium text-slate-900">₹ 46,000</td>
</tr>
<tr>
<td className="py-1.5 pl-3 pr-2 text-right text-slate-500" colspan="3">Tax (18%)</td>
<td className="py-1.5 pr-3 text-right font-medium text-slate-900">₹ 8,280</td>
</tr>
<tr className="border-t border-slate-200">
<td className="py-1.5 pl-3 pr-2 text-right text-slate-500" colspan="3">Total</td>
<td className="py-1.5 pr-3 text-right font-semibold text-slate-900 tracking-tight">₹ 54,280</td>
</tr>
</tfoot>
</table>
</div>
<div>
<div className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Terms</div>
<p className="text-[0.75rem] text-slate-600">
                  Payment due within 15 days from acceptance. Prices exclusive of applicable taxes. Quote valid until 30 Nov 2024.
                </p>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-slate-500">
<i className="w-3.5 h-3.5" data-lucide="clock"></i>
<span>Last updated by Alex · 2h ago</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50">Download PDF</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Convert to Invoice</button>
</div>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="sales-invoices">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Sales Invoices</h1>
<p className="text-sm text-slate-500">Manage invoices, receivables, and credit notes.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50 text-slate-700">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Export</span>
</button>
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('invoice-form')">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>New Invoice</span>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 flex flex-wrap items-center gap-3 text-xs">
<div className="flex items-center gap-2">
<span className="text-slate-500">Status</span>
<div className="flex items-center gap-1">
<button className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-slate-700">All</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Draft</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Unpaid</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Overdue</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Paid</button>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-slate-500">Date</span>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-600 flex items-center gap-1">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="calendar"></i>
<span>This month</span>
</button>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 border border-slate-200 rounded-lg px-2 py-1 bg-slate-50">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent focus:outline-none text-xs text-slate-800 placeholder:text-slate-400 w-32" placeholder="Search invoice or customer"/>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Invoice No</th>
<th className="text-left py-2 pr-3 font-medium">Customer</th>
<th className="text-left py-2 pr-3 font-medium">Date</th>
<th className="text-left py-2 pr-3 font-medium">Due Date</th>
<th className="text-left py-2 pr-3 font-medium">Status</th>
<th className="text-right py-2 pr-3 font-medium">Total</th>
<th className="text-right py-2 pr-3 font-medium">Due</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">INV-2024-091</td>
<td className="py-2 pr-3">Acme Corp</td>
<td className="py-2 pr-3">18 Nov 2024</td>
<td className="py-2 pr-3 text-rose-600">28 Nov 2024</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
<span>Unpaid</span>
</span>
</td>
<td className="py-2 pr-3 text-right">₹ 48,900</td>
<td className="py-2 pr-3 text-right font-medium text-rose-600">₹ 48,900</td>
<td className="py-2 pr-4 text-right">
<div className="inline-flex gap-1">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="file-search"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('invoice-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">INV-2024-090</td>
<td className="py-2 pr-3">Greenfield Labs</td>
<td className="py-2 pr-3">17 Nov 2024</td>
<td className="py-2 pr-3">27 Nov 2024</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Paid</span>
</span>
</td>
<td className="py-2 pr-3 text-right">₹ 35,400</td>
<td className="py-2 pr-3 text-right">₹ 0</td>
<td className="py-2 pr-4 text-right">
<div className="inline-flex gap-1">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="file-search"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('invoice-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">INV-2024-089</td>
<td className="py-2 pr-3">Orbit Media</td>
<td className="py-2 pr-3">15 Nov 2024</td>
<td className="py-2 pr-3 text-rose-600">15 Nov 2024</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-rose-50 text-rose-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
<span>Overdue</span>
</span>
</td>
<td className="py-2 pr-3 text-right">₹ 24,200</td>
<td className="py-2 pr-3 text-right font-medium text-rose-600">₹ 24,200</td>
<td className="py-2 pr-4 text-right">
<div className="inline-flex gap-1">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="file-search"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('invoice-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="more-horizontal"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between px-4 py-2 border-t border-slate-100 text-[0.75rem] text-slate-500">
<span>Total receivables: <span className="font-medium text-slate-900">₹ 73,100</span></span>
<div className="flex items-center gap-1">
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="chevron-left"></i>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 bg-slate-900 text-white">
                  1
                </button>
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
                  2
                </button>
<button className="h-7 w-7 flex items-center justify-center rounded-md border border-slate-200 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[40rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="invoice-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Create Sales Invoice</div>
<div className="text-xs text-slate-500">Bill customer for products or services.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('invoice-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Customer</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Acme Corp</option>
<option>Greenfield Labs</option>
<option>Orbit Media</option>
</select>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Invoice No</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-slate-50 focus:outline-none" value="INV-2024-092"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Invoice Date</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" type="date"/>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Due Date</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" type="date"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Payment Terms</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Due on Receipt</option>
<option>Net 15</option>
<option>Net 30</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Currency</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>INR</option>
<option>USD</option>
</select>
</div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
<span className="text-xs font-medium tracking-tight text-slate-900">Invoice Items</span>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-slate-700 rounded-md border border-slate-200 px-2 py-1 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
<span>Add Item</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-[0.75rem]">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-3 pr-2 font-medium">Item</th>
<th className="text-right py-2 pr-2 font-medium">Qty</th>
<th className="text-right py-2 pr-2 font-medium">Unit</th>
<th className="text-right py-2 pr-2 font-medium">Rate</th>
<th className="text-right py-2 pr-2 font-medium">Tax</th>
<th className="text-right py-2 pr-3 font-medium">Amount</th>
<th className="text-right py-2 pr-2 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.75rem] text-slate-700">
<tr className="border-b border-slate-50">
<td className="py-1.5 pl-3 pr-2">
<select className="w-full border border-slate-200 rounded-md px-2 py-1 bg-white focus:outline-none">
<option>Implementation - Standard</option>
<option>Support Retainer</option>
</select>
</td>
<td className="py-1.5 pr-2 text-right">
<input className="w-14 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none" value="5"/>
</td>
<td className="py-1.5 pr-2 text-right">
<select className="w-16 border border-slate-200 rounded-md px-1.5 py-1 text-right focus:outline-none">
<option>Days</option>
<option>Hours</option>
</select>
</td>
<td className="py-1.5 pr-2 text-right">
<input className="w-20 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none" value="4,000"/>
</td>
<td className="py-1.5 pr-2 text-right">
<select className="w-16 border border-slate-200 rounded-md px-1.5 py-1 text-right focus:outline-none">
<option>18%</option>
<option>12%</option>
</select>
</td>
<td className="py-1.5 pr-3 text-right text-slate-900 font-medium">₹ 20,000</td>
<td className="py-1.5 pr-2 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="trash-2"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col gap-2 px-3 py-2 border-t border-slate-100 text-[0.75rem]">
<div className="flex items-center justify-between">
<span className="text-slate-500">Subtotal</span>
<span className="font-medium text-slate-900">₹ 20,000.00</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-500">CGST (9%)</span>
<span className="font-medium text-slate-900">₹ 1,800.00</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-500">SGST (9%)</span>
<span className="font-medium text-slate-900">₹ 1,800.00</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-dashed border-slate-200">
<span className="text-slate-500">Total Invoice Value</span>
<span className="font-semibold text-slate-900 tracking-tight">₹ 23,600.00</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Notes (customer visible)</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Thank you for your business." rows="3"></textarea>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Terms &amp; Conditions</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Payment due within 15 days. Late fee 1.5% per month." rows="3"></textarea>
</div>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-slate-500">
<i className="w-3.5 h-3.5" data-lucide="info"></i>
<span>Invoice will be posted to Accounts Receivable upon save.</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50" onclick="closeForm('invoice-form')">Save as Draft</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Save &amp; Send</button>
</div>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="sales-payments">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Sales Payments</h1>
<p className="text-sm text-slate-500">Record incoming payments and match to invoices.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('sales-payment-form')">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Record Payment</span>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 flex flex-wrap items-center gap-3 text-xs">
<div className="flex items-center gap-2">
<span className="text-slate-500">Mode</span>
<div className="flex items-center gap-1">
<button className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-slate-700">All</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Bank</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Card</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">UPI</button>
</div>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 border border-slate-200 rounded-lg px-2 py-1 bg-slate-50">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent focus:outline-none text-xs text-slate-800 placeholder:text-slate-400 w-32" placeholder="Search payment or customer"/>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Payment No</th>
<th className="text-left py-2 pr-3 font-medium">Customer</th>
<th className="text-left py-2 pr-3 font-medium">Mode</th>
<th className="text-left py-2 pr-3 font-medium">Date</th>
<th className="text-right py-2 pr-3 font-medium">Amount</th>
<th className="text-left py-2 pr-3 font-medium">Applied To</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">PAY-2024-112</td>
<td className="py-2 pr-3">Greenfield Labs</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2 py-0.5">
<i className="w-3 h-3" data-lucide="building-2"></i>
<span>Bank Transfer</span>
</span>
</td>
<td className="py-2 pr-3">15 Nov 2024</td>
<td className="py-2 pr-3 text-right text-slate-900">₹ 35,400</td>
<td className="py-2 pr-3">INV-2024-090</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('sales-payment-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">PAY-2024-111</td>
<td className="py-2 pr-3">Acme Corp</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<i className="w-3 h-3" data-lucide="smartphone-nfc"></i>
<span>UPI</span>
</span>
</td>
<td className="py-2 pr-3">14 Nov 2024</td>
<td className="py-2 pr-3 text-right text-slate-900">₹ 18,900</td>
<td className="py-2 pr-3">INV-2024-088</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('sales-payment-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between px-4 py-2 border-t border-slate-100 text-[0.75rem] text-slate-500">
<span>Collected this month: <span className="font-medium text-slate-900">₹ 87,900</span></span>
<span>Unapplied credits: <span className="font-medium text-slate-900">₹ 4,200</span></span>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[32rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="sales-payment-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Record Sales Payment</div>
<div className="text-xs text-slate-500">Link customer payment to invoices.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('sales-payment-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Customer</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Acme Corp</option>
<option>Greenfield Labs</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Payment No</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-slate-50 focus:outline-none" value="PAY-2024-113"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Date</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" type="date"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Amount</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs text-right focus:outline-none focus:ring-1 focus:ring-slate-500" value="48,900"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Mode</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Bank Transfer</option>
<option>UPI</option>
<option>Card</option>
<option>Cash</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Reference</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Txn ID / Cheque No"/>
</div>
</div>

<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
<span className="text-xs font-medium tracking-tight text-slate-900">Apply to Invoices</span>
<span className="text-[0.7rem] text-slate-500">Available credits: ₹ 4,200</span>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-[0.75rem]">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-3 pr-2 font-medium">Invoice</th>
<th className="text-left py-2 pr-2 font-medium">Date</th>
<th className="text-right py-2 pr-2 font-medium">Due</th>
<th className="text-right py-2 pr-3 font-medium">Apply</th>
</tr>
</thead>
<tbody className="text-slate-700">
<tr className="border-b border-slate-50">
<td className="py-1.5 pl-3 pr-2">
                          INV-2024-091
                          <div className="text-[0.7rem] text-slate-400">Acme Corp</div>
18 Nov 2024</td>
<td className="py-1.5 pr-2 text-right text-rose-600">₹ 48,900</td>
<td className="py-1.5 pr-3 text-right">
<input className="w-20 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none focus:ring-1 focus:ring-slate-500" value="48,900"/>
</td>
</tr>
<tr>
<td className="py-1.5 pl-3 pr-2">
                          INV-2024-088
                          <div className="text-[0.7rem] text-slate-400">Acme Corp</div>
</td>
<td className="py-1.5 pr-2 text-left">10 Nov 2024</td>
<td className="py-1.5 pr-2 text-right">₹ 12,300</td>
<td className="py-1.5 pr-3 text-right">
<input className="w-20 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none focus:ring-1 focus:ring-slate-500" value="0"/>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between px-3 py-2 border-t border-slate-100 text-[0.75rem]">
<span className="text-slate-500">Unallocated balance</span>
<span className="font-medium text-slate-900">₹ 0.00</span>
</div>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Notes</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Internal note about this payment (optional)." rows="3"></textarea>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-slate-500">
<i className="w-3.5 h-3.5" data-lucide="info"></i>
<span>Payment will update Accounts Receivable and bank ledger.</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50" onclick="closeForm('sales-payment-form')">Cancel</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Save Payment</button>
</div>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="customers">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Customers</h1>
<p className="text-sm text-slate-500">Manage customer master data and credit exposure.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50 text-slate-700">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Export</span>
</button>
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('customer-form')">
<i className="w-4 h-4" data-lucide="user-plus"></i>
<span>New Customer</span>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3 flex flex-wrap items-center gap-3 text-xs">
<div className="flex items-center gap-2">
<span className="text-slate-500">Segment</span>
<div className="flex items-center gap-1">
<button className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-slate-700">All</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Enterprise</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">SMB</button>
<button className="rounded-full border border-slate-100 px-2 py-1 text-slate-500">Startup</button>
</div>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 border border-slate-200 rounded-lg px-2 py-1 bg-slate-50">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent focus:outline-none text-xs text-slate-800 placeholder:text-slate-400 w-40" placeholder="Search name, email or GSTIN"/>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Customer</th>
<th className="text-left py-2 pr-3 font-medium">Contact</th>
<th className="text-left py-2 pr-3 font-medium">Segment</th>
<th className="text-right py-2 pr-3 font-medium">Outstanding</th>
<th className="text-right py-2 pr-3 font-medium">Credit Limit</th>
<th className="text-left py-2 pr-3 font-medium">Status</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3">
<div className="font-medium text-slate-900">Acme Corp</div>
<div className="text-[0.7rem] text-slate-500">GSTIN: 22AAAAA0000A1Z5</div>
</td>
<td className="py-2 pr-3">
                      finance@acme.com
                      <div className="text-[0.7rem] text-slate-500">+91 98765 43210</div>
</td>
<td className="py-2 pr-3">Enterprise</td>
<td className="py-2 pr-3 text-right font-medium text-rose-600">₹ 48,900</td>
<td className="py-2 pr-3 text-right">₹ 250,000</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Active</span>
</span>
</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('customer-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3">
<div className="font-medium text-slate-900">Greenfield Labs</div>
<div className="text-[0.7rem] text-slate-500">GSTIN: 27BBBBB1111B1Z6</div>
</td>
<td className="py-2 pr-3">
                      accounts@greenfield.io
                      <div className="text-[0.7rem] text-slate-500">+91 95555 12345</div>
</td>
<td className="py-2 pr-3">Startup</td>
<td className="py-2 pr-3 text-right text-slate-900">₹ 0</td>
<td className="py-2 pr-3 text-right">₹ 150,000</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<span>On Hold</span>
</span>
</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('customer-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[32rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="customer-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Customer Details</div>
<div className="text-xs text-slate-500">Maintain master data and billing addresses.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('customer-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div className="space-y-2">
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">Customer Name</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Legal name"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Email</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="finance@example.com" type="email"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Phone</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="+91" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Segment</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Enterprise</option>
<option>SMB</option>
<option>Startup</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Credit Limit</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs text-right focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="₹ 0.00"/>
</div>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">GSTIN</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs uppercase tracking-[0.16em] focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="22AAAAA0000A1Z5"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Billing Address</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Street, City, State, PIN" rows="3"></textarea>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-slate-500">
<i className="w-3.5 h-3.5" data-lucide="info"></i>
<span>Customer will be available across Quotes, Invoices and Payments.</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50" onclick="closeForm('customer-form')">Cancel</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Save Customer</button>
</div>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="sales-items">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Sales Items</h1>
<p className="text-sm text-slate-500">Catalogue of products and services used on sales documents.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('sales-item-form')">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>New Item</span>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Item</th>
<th className="text-left py-2 pr-3 font-medium">Category</th>
<th className="text-left py-2 pr-3 font-medium">Unit</th>
<th className="text-right py-2 pr-3 font-medium">Rate</th>
<th className="text-left py-2 pr-3 font-medium">Tax</th>
<th className="text-left py-2 pr-3 font-medium">GL Account</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3">
<div className="font-medium text-slate-900">Implementation - Standard</div>
<div className="text-[0.7rem] text-slate-500">Standard onboarding package</div>
</td>
<td className="py-2 pr-3">Services</td>
<td className="py-2 pr-3">Days</td>
<td className="py-2 pr-3 text-right">₹ 4,000</td>
<td className="py-2 pr-3">18%</td>
<td className="py-2 pr-3">400100 · Consulting Income</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('sales-item-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3">
<div className="font-medium text-slate-900">Support Retainer</div>
<div className="text-[0.7rem] text-slate-500">Priority support, monthly</div>
</td>
<td className="py-2 pr-3">Subscription</td>
<td className="py-2 pr-3">Months</td>
<td className="py-2 pr-3 text-right">₹ 6,000</td>
<td className="py-2 pr-3">18%</td>
<td className="py-2 pr-3">400200 · Support Income</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('sales-item-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[32rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="sales-item-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Sales Item</div>
<div className="text-xs text-slate-500">Define rate, tax and GL mapping.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('sales-item-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Item Name</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Service / product name"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Category</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Services</option>
<option>Subscription</option>
<option>Product</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Unit</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Days / Hours / Qty"/>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="col-span-2">
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Rate</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs text-right focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="₹ 0.00"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Tax %</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs text-right focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="18"/>
</div>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Income GL Account</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="400100 · Consulting Income"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Description</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Short description for documents." rows="3"></textarea>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<span className="text-slate-500">Item will be available in Quotes and Invoices.</span>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50" onclick="closeForm('sales-item-form')">Cancel</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Save Item</button>
</div>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="purchase-invoices">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Purchase Invoices</h1>
<p className="text-sm text-slate-500">Track vendor bills and payables.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('purchase-invoice-form')">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>New Bill</span>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Bill No</th>
<th className="text-left py-2 pr-3 font-medium">Supplier</th>
<th className="text-left py-2 pr-3 font-medium">Date</th>
<th className="text-left py-2 pr-3 font-medium">Due Date</th>
<th className="text-left py-2 pr-3 font-medium">Status</th>
<th className="text-right py-2 pr-3 font-medium">Total</th>
<th className="text-right py-2 pr-3 font-medium">Due</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">PINV-2024-044</td>
<td className="py-2 pr-3">Bright Supplies</td>
<td className="py-2 pr-3">17 Nov 2024</td>
<td className="py-2 pr-3">27 Nov 2024</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 text-amber-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
<span>Partially Paid</span>
</span>
</td>
<td className="py-2 pr-3 text-right">₹ 21,750</td>
<td className="py-2 pr-3 text-right font-medium text-rose-600">₹ 8,200</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('purchase-invoice-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">PINV-2024-043</td>
<td className="py-2 pr-3">Office Supplies Co.</td>
<td className="py-2 pr-3">12 Nov 2024</td>
<td className="py-2 pr-3">22 Nov 2024</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Paid</span>
</span>
</td>
<td className="py-2 pr-3 text-right">₹ 8,900</td>
<td className="py-2 pr-3 text-right">₹ 0</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('purchase-invoice-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[38rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="purchase-invoice-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">New Purchase Invoice</div>
<div className="text-xs text-slate-500">Record vendor bill and input tax credit.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('purchase-invoice-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Supplier</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Bright Supplies</option>
<option>Office Supplies Co.</option>
</select>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Bill No</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-slate-50 focus:outline-none" placeholder="Vendor bill no"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Bill Date</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" type="date"/>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Due Date</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" type="date"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Currency</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>INR</option>
<option>USD</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Input Tax Credit</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Eligible</option>
<option>Ineligible</option>
</select>
</div>
</div>
<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
<span className="text-xs font-medium tracking-tight text-slate-900">Bill Items</span>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-slate-700 rounded-md border border-slate-200 px-2 py-1 hover:bg-slate-50">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
<span>Add Item</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-[0.75rem]">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-3 pr-2 font-medium">Item</th>
<th className="text-right py-2 pr-2 font-medium">Qty</th>
<th className="text-right py-2 pr-2 font-medium">Rate</th>
<th className="text-right py-2 pr-2 font-medium">Tax</th>
<th className="text-right py-2 pr-3 font-medium">Amount</th>
<th className="text-right py-2 pr-2 font-medium"></th>
</tr>
</thead>
<tbody className="text-slate-700">
<tr className="border-b border-slate-50">
<td className="py-1.5 pl-3 pr-2">
<input className="w-full border border-slate-200 rounded-md px-2 py-1 bg-white focus:outline-none" placeholder="Office supplies"/>
</td>
<td className="py-1.5 pr-2 text-right">
<input className="w-14 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none" value="10"/>
</td>
<td className="py-1.5 pr-2 text-right">
<input className="w-20 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none" value="500"/>
</td>
<td className="py-15 pr-2 text-right">
<input className="w-14 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none" value="18"/>
</td>
<td className="py-1.5 pr-3 text-right font-medium text-slate-900">₹ 5,000</td>
<td className="py-1.5 pr-2 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="trash-2"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex flex-col gap-2 px-3 py-2 border-t border-slate-100 text-[0.75rem]">
<div className="flex items-center justify-between">
<span className="text-slate-500">Subtotal</span>
<span className="font-medium text-slate-900">₹ 5,000.00</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-500">Tax (18%)</span>
<span className="font-medium text-slate-900">₹ 900.00</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-dashed border-slate-200">
<span className="text-slate-500">Total Bill Value</span>
<span className="font-semibold text-slate-900 tracking-tight">₹ 5,900.00</span>
</div>
</div>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Narration</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Optional note about this bill." rows="3"></textarea>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<span className="text-slate-500">Bill will be posted to Accounts Payable upon save.</span>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50" onclick="closeForm('purchase-invoice-form')">Cancel</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Save Bill</button>
</div>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="purchase-payments">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Purchase Payments</h1>
<p className="text-sm text-slate-500">Record outflow to suppliers and clear payables.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('purchase-payment-form')">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>Record Payment</span>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Payment No</th>
<th className="text-left py-2 pr-3 font-medium">Supplier</th>
<th className="text-left py-2 pr-3 font-medium">Mode</th>
<th className="text-left py-2 pr-3 font-medium">Date</th>
<th className="text-right py-2 pr-3 font-medium">Amount</th>
<th className="text-left py-2 pr-3 font-medium">Applied To</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">PPAY-2024-031</td>
<td className="py-2 pr-3">Bright Supplies</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2 py-0.5">
<i className="w-3 h-3" data-lucide="wallet"></i>
<span>Bank Transfer</span>
</span>
</td>
<td className="py-2 pr-3">18 Nov 2024</td>
<td className="py-2 pr-3 text-right">₹ 13,550</td>
<td className="py-2 pr-3">PINV-2024-044</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('purchase-payment-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3 font-medium text-slate-900">PPAY-2024-030</td>
<td className="py-2 pr-3">Office Supplies Co.</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<i className="w-3 h-3" data-lucide="banknote"></i>
<span>Cheque</span>
</span>
</td>
<td className="py-2 pr-3">14 Nov 2024</td>
<td className="py-2 pr-3 text-right">₹ 8,900</td>
<td className="py-2 pr-3">PINV-2024-043</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('purchase-payment-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between px-4 py-2 border-t border-slate-100 text-[0.75rem] text-slate-500">
<span>Paid this month: <span className="font-medium text-slate-900">₹ 54,100</span></span>
<span>Pending payables: <span className="font-medium text-slate-900">₹ 26,400</span></span>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[32rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="purchase-payment-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Record Purchase Payment</div>
<div className="text-xs text-slate-500">Allocate payment to vendor bills.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('purchase-payment-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Supplier</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Bright Supplies</option>
<option>Office Supplies Co.</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Payment No</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-slate-50 focus:outline-none" value="PPAY-2024-032"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Date</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" type="date"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Amount</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs text-right focus:outline-none focus:ring-1 focus:ring-slate-500" value="21,750"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Mode</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Bank Transfer</option>
<option>Cheque</option>
<option>Cash</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Reference</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Txn ID / Cheque No"/>
</div>
</div>
<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
<span className="text-xs font-medium tracking-tight text-slate-900">Apply to Bills</span>
<span className="text-[0.7rem] text-slate-500">Unpaid bills only</span>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-[0.75rem]">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-3 pr-2 font-medium">Bill</th>
<th className="text-left py-2 pr-2 font-medium">Date</th>
<th className="text-right py-2 pr-2 font-medium">Due</th>
<th className="text-right py-2 pr-3 font-medium">Apply</th>
</tr>
</thead>
<tbody className="text-slate-700">
<tr>
<td className="py-1.5 pl-3 pr-2">
                          PINV-2024-044
                          <div className="text-[0.7rem] text-slate-400">Bright Supplies</div>
</td>
<td className="py-1.5 pr-2">17 Nov 2024</td>
<td className="py-1.5 pr-2 text-right text-rose-600">₹ 8,200</td>
<td className="py-1.5 pr-3 text-right">
<input className="w-20 border border-slate-200 rounded-md px-2 py-1 text-right focus:outline-none focus:ring-1 focus:ring-slate-500" value="8,200"/>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between px-3 py-2 border-t border-slate-100 text-[0.75rem]">
<span className="text-slate-500">Unallocated balance</span>
<span className="font-medium text-slate-900">₹ 13,550.00</span>
</div>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Notes</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Internal note about this payment (optional)." rows="3"></textarea>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<span className="text-slate-500">Payment will reduce Accounts Payable and bank balance.</span>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50" onclick="closeForm('purchase-payment-form')">Cancel</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Save Payment</button>
</div>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="suppliers">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Suppliers</h1>
<p className="text-sm text-slate-500">Maintain vendor master data and payment terms.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('supplier-form')">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>New Supplier</span>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Supplier</th>
<th className="text-left py-2 pr-3 font-medium">Contact</th>
<th className="text-left py-2 pr-3 font-medium">Payment Terms</th>
<th className="text-right py-2 pr-3 font-medium">Outstanding</th>
<th className="text-left py-2 pr-3 font-medium">Status</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3">
<div className="font-medium text-slate-900">Bright Supplies</div>
<div className="text-[0.7rem] text-slate-500">GSTIN: 29CCCCC2222C1Z7</div>
</td>
<td className="py-2 pr-3">
                      ap@brightsupplies.com
                      <div className="text-[0.7rem] text-slate-500">+91 96666 33321</div>
</td>
<td className="py-2 pr-3">Net 10</td>
<td className="py-2 pr-3 text-right font-medium text-rose-600">₹ 8,200</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Active</span>
</span>
</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('supplier-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3">
<div className="font-medium text-slate-900">Office Supplies Co.</div>
<div className="text-[0.7rem] text-slate-500">GSTIN: 07DDDDD3333D1Z8</div>
</td>
<td className="py-2 pr-3">
                      billing@officeco.in
                      <div className="text-[0.7rem] text-slate-500">+91 94444 56789</div>
</td>
<td className="py-2 pr-3">Net 15</td>
<td className="py-2 pr-3 text-right text-slate-900">₹ 0</td>
<td className="py-2 pr-3">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
<span>On Hold</span>
</span>
</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('supplier-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[32rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="supplier-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Supplier Details</div>
<div className="text-xs text-slate-500">Used in purchase invoices and payments.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('supplier-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div className="space-y-2">
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">Supplier Name</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Legal name"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Email</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="billing@example.com" type="email"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Phone</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="+91" type="tel"/>
</div>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Payment Terms</label>
<select className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-slate-500">
<option>Due on Receipt</option>
<option>Net 10</option>
<option>Net 15</option>
<option>Net 30</option>
</select>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">GSTIN</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs uppercase tracking-[0.16em] focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="29CCCCC2222C1Z7"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Billing Address</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Street, City, State, PIN" rows="3"></textarea>
</div>
</div>
<div className="border-t border-slate-100 px-4 py-3 flex items-center justify-between text-xs">
<span className="text-slate-500">Supplier will appear in Purchase Invoices and Payments.</span>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-700 hover:bg-slate-50" onclick="closeForm('supplier-form')">Cancel</button>
<button className="rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800">Save Supplier</button>
</div>
</div>
</div>
</div>

<div className="screen hidden space-y-4" data-screen="purchase-items">
<div className="flex items-center justify-between flex-wrap gap-3">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Purchase Items</h1>
<p className="text-sm text-slate-500">Items and expense heads used on purchase documents.</p>
</div>
<div className="flex items-center gap-2 text-xs">
<button className="flex items-center gap-1 rounded-lg bg-slate-900 text-white px-3 py-1.5 hover:bg-slate-800" onclick="openForm('purchase-item-form')">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>New Item</span>
</button>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="overflow-x-auto">
<table className="min-w-full text-xs">
<thead className="text-[0.7rem] uppercase text-slate-400">
<tr className="border-b border-slate-100">
<th className="text-left py-2 pl-4 pr-3 font-medium">Item</th>
<th className="text-left py-2 pr-3 font-medium">Category</th>
<th className="text-right py-2 pr-3 font-medium">Rate</th>
<th className="text-left py-2 pr-3 font-medium">Tax</th>
<th className="text-left py-2 pr-3 font-medium">Expense GL</th>
<th className="text-right py-2 pr-4 font-medium"></th>
</tr>
</thead>
<tbody className="text-[0.8rem] text-slate-700">
<tr className="border-b border-slate-50 hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3">
<div className="font-medium text-slate-900">Office Stationery</div>
<div className="text-[0.7rem] text-slate-500">Paper, pens, files etc.</div>
</td>
<td className="py-2 pr-3">Office Expenses</td>
<td className="py-2 pr-3 text-right">₹ 500</td>
<td className="py-2 pr-3">18%</td>
<td className="py-2 pr-3">500100 · Office Supplies</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('purchase-item-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/60">
<td className="py-2 pl-4 pr-3">
<div className="font-medium text-slate-900">Cloud Hosting</div>
<div className="text-[0.7rem] text-slate-500">Monthly infrastructure cost</div>
</td>
<td className="py-2 pr-3">IT Expenses</td>
<td className="py-2 pr-3 text-right">₹ 25,000</td>
<td className="py-2 pr-3">18%</td>
<td className="py-2 pr-3">500200 · Hosting</td>
<td className="py-2 pr-4 text-right">
<button className="h-7 w-7 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="openForm('purchase-item-form')">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="edit-3"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="detail-panel hidden fixed inset-y-0 right-0 w-full md:w-[32rem] bg-white shadow-xl border-l border-slate-200 flex flex-col" id="purchase-item-form">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Purchase Item</div>
<div className="text-xs text-slate-500">Define expense item and GL mapping.</div>
</div>
<button className="h-8 w-8 flex items-center justify-center rounded-md hover:bg-slate-100" onclick="closeForm('purchase-item-form')">
<i className="w-4 h-4 text-slate-500" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Item Name</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Item / expense name"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Category</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Office / IT / Travel"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Default Rate</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs text-right focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="₹ 0.00"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Tax %</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs text-right focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="18"/>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Expense GL Account</label>
<input className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="500100 · Office Supplies"/>
</div>
</div>
<div>
<label className="block text-[0.7rem] uppercase tracking-[0.16em] text-slate-400 mb-1">Description</label>
<textarea className="w-full border border-slate-200 rounded-md px-2 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-slate-500" placeholder="Short description for purchase documents." rows="3"></textarea>
</div>
</div>
</div></div></section></main></div>
    </>
  );
}
