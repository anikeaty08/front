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
      

<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:flex-col lg:w-72 border-r border-white/10 bg-black/40 backdrop-blur-md">
<div className="px-5 py-5 flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[#FFCA00] flex items-center justify-center text-black font-semibold tracking-tight">MM</div>
<div className="flex-1">
<div className="text-sm text-white/80">Money Magics</div>
<div className="text-[11px] text-white/50 -mt-0.5">Smarter Finance. Seamless Control.</div>
</div>
<button className="px-2.5 py-1.5 rounded-md text-[11px] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors" id="replayOnboardingDesktop">Replay</button>
</div>
<div className="px-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-white/60 mb-2">Company</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg">🏢</span>
<div>
<div className="text-sm">Acme Global LLC</div>
<div className="text-[11px] text-white/50">ID: AC-23941</div>
</div>
</div>
<button className="text-xs px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10">Switch</button>
</div>
</div>
</div>
<nav className="mt-4 px-2 space-y-1" id="sidebarNav">

<button aria-selected="true" className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors aria-selected:bg-white/10 aria-selected:text-white" data-section="dashboard">
<i className="w-4.5 h-4.5" data-lucide="home"></i>
<span>Dashboard</span>
</button>
<button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors" data-section="chart-of-accounts">
<i className="w-4.5 h-4.5" data-lucide="folder-tree"></i>
<span>Chart of Accounts</span>
</button>
<button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors" data-section="general-ledger">
<i className="w-4.5 h-4.5" data-lucide="book-text"></i>
<span>Ledger</span>
</button>
<button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors" data-section="billing">
<i className="w-4.5 h-4.5" data-lucide="credit-card"></i>
<span>Billing</span>
</button>
<button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors" data-section="reports">
<i className="w-4.5 h-4.5" data-lucide="bar-chart-3"></i>
<span>Reports</span>
</button>
<button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors" data-section="assets">
<i className="w-4.5 h-4.5" data-lucide="boxes"></i>
<span>Assets</span>
</button>
<button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors" data-section="reconciliation">
<i className="w-4.5 h-4.5" data-lucide="refresh-ccw"></i>
<span>Reconciliation</span>
</button>
<button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors" data-section="paymagics">
<i className="w-4.5 h-4.5 text-[#FFCA00]" data-lucide="zap"></i>
<span>PayMagics</span>
</button>
<button className="group w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-white/5 hover:text-white/90 transition-colors" data-section="settings">
<i className="w-4.5 h-4.5" data-lucide="settings"></i>
<span>Settings</span>
</button>
</nav>
<div className="mt-auto p-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="text-xs text-white/60 mb-2">Shortcuts</div>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#FFCA00]/10 hover:bg-[#FFCA00]/15 text-[#FFCA00] border border-[#FFCA00]/20 text-xs transition-colors" data-quick="invoice">
<i className="w-4 h-4" data-lucide="file-plus"></i> Invoice
              </button>
<button className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs" data-quick="payment">
<i className="w-4 h-4" data-lucide="plus"></i> Payment
              </button>
<button className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs" data-quick="asset">
<i className="w-4 h-4" data-lucide="plus-square"></i> Asset
              </button>
<button className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs" data-quick="report">
<i className="w-4 h-4" data-lucide="bar-chart-big"></i> Report
              </button>
</div>
</div>
<div className="mt-3 text-[11px] text-white/50 text-center">v1.0.0 • © 2025</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<header className="sticky top-0 z-30 bg-[#0B0B0C]/80 backdrop-blur-md border-b border-white/10">
<div className="px-4 lg:px-6 py-3 flex items-center gap-3">
<button className="lg:hidden p-2 rounded-lg hover:bg-white/10 border border-white/10" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="hidden lg:flex items-center gap-2 text-white/70">
<i className="w-4.5 h-4.5" data-lucide="sunrise"></i>
<span className="text-sm">Good Morning, Ajay 👋</span>
</div>
<div className="flex-1"></div>

<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
<span className="text-base">🇺🇸</span>
<span className="text-xs text-white/70">USD</span>
<span className="text-white/30">•</span>
<span className="text-xs text-[#FFCA00]">1 USD = ₹83.2</span>
</div>

<div className="relative">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors" id="currencyBtn">
<span className="text-base">🌍</span>
<span className="text-xs">Currency</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-[#121214] shadow-xl overflow-hidden" id="currencyMenu">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5" data-currency="USD">
<span className="text-lg">🇺🇸</span> USD
                </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5" data-currency="EUR">
<span className="text-lg">🇪🇺</span> EUR
                </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5" data-currency="AED">
<span className="text-lg">🇦🇪</span> AED
                </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-white/5" data-currency="INR">
<span className="text-lg">🇮🇳</span> INR
                </button>
</div>
</div>

<div className="flex items-center gap-3 ml-2">
<button className="p-2 rounded-lg hover:bg-white/10 border border-white/10">
<i className="w-4.5 h-4.5" data-lucide="bell"></i>
</button>
<div className="h-8 w-8 rounded-lg overflow-hidden border border-white/10">
<img alt="Avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" />
</div>
</div>
</div>
</header>

<main className="flex-1 p-4 lg:p-6 space-y-6">

<section className="space-y-6" id="section-dashboard">
<div className="flex flex-col sm:flex-row sm:items-end gap-3">
<div>
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">Dashboard</h1>
<p className="text-sm text-white/60 mt-0.5">Good Morning, Ajay 👋</p>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-[#FFCA00]/10 border border-[#FFCA00]/25 text-[#FFCA00] hover:bg-[#FFCA00]/15 transition-colors text-sm">
<i className="inline w-4 h-4 mr-1" data-lucide="plus"></i> New
                </button>
<button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm">Customize</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-white/70">Cash Flow Today</span>
<i className="w-4.5 h-4.5 text-[#FFCA00]" data-lucide="banknote"></i>
</div>
<div className="text-2xl tracking-tight font-semibold">$24,380</div>
<div className="text-xs text-emerald-400 mt-1">+12.4% vs yesterday</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-white/70">Pending Receivables</span>
<i className="w-4.5 h-4.5 text-[#FFCA00]" data-lucide="inbox"></i>
</div>
<div className="text-2xl tracking-tight font-semibold">$82,140</div>
<div className="text-xs text-white/60 mt-1">32 invoices</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-white/70">Payables Due</span>
<i className="w-4.5 h-4.5 text-[#FFCA00]" data-lucide="calendar-clock"></i>
</div>
<div className="text-2xl tracking-tight font-semibold">$41,560</div>
<div className="text-xs text-orange-400 mt-1">7 due this week</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-white/70">Asset Value</span>
<i className="w-4.5 h-4.5 text-[#FFCA00]" data-lucide="boxes"></i>
</div>
<div className="text-2xl tracking-tight font-semibold">$1.24M</div>
<div className="text-xs text-white/60 mt-1">Net of depreciation</div>
</div>
</div>

<div className="flex flex-wrap gap-2">
<button className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-[#FFCA00]/10 hover:bg-[#FFCA00]/15 border border-[#FFCA00]/25 text-[#FFCA00] transition-colors text-sm">
<i className="w-4.5 h-4.5" data-lucide="file-plus"></i> + Invoice
              </button>
<button className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
<i className="w-4.5 h-4.5" data-lucide="wallet"></i> + Payment
              </button>
<button className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
<i className="w-4.5 h-4.5" data-lucide="plus-square"></i> + Asset
              </button>
<button className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm">
<i className="w-4.5 h-4.5" data-lucide="bar-chart-big"></i> + Report
              </button>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="xl:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg tracking-tight font-semibold">Recent Activity</h3>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10">View All</button>
</div>
<div className="divide-y divide-white/10">
<div className="flex items-center gap-3 py-2">
<div className="h-9 w-9 rounded-lg bg-[#FFCA00]/10 border border-[#FFCA00]/20 flex items-center justify-center text-[#FFCA00]">
<i className="w-4.5 h-4.5" data-lucide="file-text"></i>
</div>
<div className="flex-1">
<div className="text-sm">Invoice INV-1042 sent to Stark Industries</div>
<div className="text-xs text-white/50">2m ago • $12,400</div>
</div>
<span className="text-xs px-2 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">Sent</span>
</div>
<div className="flex items-center gap-3 py-2">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-white/80" data-lucide="wallet"></i>
</div>
<div className="flex-1">
<div className="text-sm">Payment received from Wayne Enterprises</div>
<div className="text-xs text-white/50">1h ago • $6,200</div>
</div>
<span className="text-xs px-2 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">Matched</span>
</div>
<div className="flex items-center gap-3 py-2">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4.5 h-4.5 text-white/80" data-lucide="calendar-clock"></i>
</div>
<div className="flex-1">
<div className="text-sm">Payable due to Parker Supplies</div>
<div className="text-xs text-white/50">Today • $3,950</div>
</div>
<span className="text-xs px-2 py-1 rounded bg-orange-500/15 text-orange-300 border border-orange-500/20">Due</span>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg tracking-tight font-semibold">Cash Position</h3>
<div className="text-xs text-white/50">Last 7d</div>
</div>
<div className="relative">
<div className="relative w-full h-40">
<canvas id="cashChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="section-chart-of-accounts">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Chart of Accounts</h2>
<p className="text-sm text-white/60">Flexible hierarchy with multi-company and currency.</p>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">

<div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
<button className="text-xs px-2 py-1 rounded-md bg-[#FFCA00]/15 text-[#FFCA00] border border-[#FFCA00]/25">Acme</button>
<button className="text-xs px-2 py-1 rounded-md hover:bg-white/10">Northwind</button>
</div>

<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs">
<i className="w-4 h-4 text-[#FFCA00]" data-lucide="coins"></i>
<select className="bg-transparent outline-none">
<option>USD</option>
<option>EUR</option>
<option>AED</option>
<option>INR</option>
</select>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5">
<div className="p-3 border-b border-white/10 flex items-center justify-between">
<div className="text-sm text-white/70">Accounts Tree</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs">
<i className="w-4 h-4 inline mr-1" data-lucide="upload"></i> Import
                  </button>
<button className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs">
<i className="w-4 h-4 inline mr-1" data-lucide="download"></i> Export
                  </button>
</div>
</div>
<div className="p-2">
<ul className="space-y-1 text-sm">

<li className="rounded-lg hover:bg-white/5 px-2 py-1">
<div className="flex items-center gap-2">
<button className="toggle-node p-1 rounded hover:bg-white/10" data-target="#assetsNode">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<i className="w-4 h-4 text-[#FFCA00]" data-lucide="vault"></i>
<span className="font-medium">1000 · Assets</span>
<span className="ml-auto text-white/50">$1,240,000</span>
</div>
<ul className="hidden pl-6 mt-1 border-l-2 border-[#FFCA00]/30" id="assetsNode">
<li className="px-2 py-1 rounded hover:bg-white/5 flex items-center gap-2">
<i className="w-4 h-4 opacity-0" data-lucide="chevron-right"></i>
<span className="text-white/80">1100 · Cash & Cash Equivalents</span>
<span className="ml-auto text-white/50">$240,000</span>
</li>
<li className="px-2 py-1 rounded hover:bg-white/5">
<div className="flex items-center gap-2">
<button className="toggle-node p-1 rounded hover:bg-white/10" data-target="#fixedNode">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<span className="text-white/80">1200 · Fixed Assets</span>
<span className="ml-auto text-white/50">$1,000,000</span>
</div>
<ul className="hidden pl-6 mt-1 border-l-2 border-[#FFCA00]/20" id="fixedNode">
<li className="px-2 py-1 rounded hover:bg-white/5 flex items-center">
<span className="text-white/70">1210 · Machinery</span>
<span className="ml-auto text-white/50">$700,000</span>
</li>
<li className="px-2 py-1 rounded hover:bg-white/5 flex items-center">
<span className="text-white/70">1220 · IT Equipment</span>
<span className="ml-auto text-white/50">$300,000</span>
</li>
</ul>
</li>
</ul>
</li>
<li className="rounded-lg hover:bg-white/5 px-2 py-1">
<div className="flex items-center gap-2">
<button className="toggle-node p-1 rounded hover:bg-white/10" data-target="#liabNode">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<i className="w-4 h-4 text-[#FFCA00]" data-lucide="scale"></i>
<span className="font-medium">2000 · Liabilities</span>
<span className="ml-auto text-white/50">$520,000</span>
</div>
<ul className="hidden pl-6 mt-1 border-l-2 border-[#FFCA00]/30" id="liabNode">
<li className="px-2 py-1 rounded hover:bg-white/5 flex items-center">
<span className="text-white/70">2100 · Accounts Payable</span>
<span className="ml-auto text-white/50">$210,000</span>
</li>
<li className="px-2 py-1 rounded hover:bg-white/5 flex items-center">
<span className="text-white/70">2200 · Loans</span>
<span className="ml-auto text-white/50">$310,000</span>
</li>
</ul>
</li>
<li className="rounded-lg hover:bg-white/5 px-2 py-1">
<div className="flex items-center gap-2">
<button className="toggle-node p-1 rounded hover:bg-white/10" data-target="#incomeNode">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<i className="w-4 h-4 text-[#FFCA00]" data-lucide="arrow-up-right"></i>
<span className="font-medium">4000 · Income</span>
<span className="ml-auto text-white/50">$3,120,000</span>
</div>
<ul className="hidden pl-6 mt-1 border-l-2 border-[#FFCA00]/30" id="incomeNode">
<li className="px-2 py-1 rounded hover:bg-white/5 flex items-center">
<span className="text-white/70">4100 · Product Sales</span>
<span className="ml-auto text-white/50">$2,720,000</span>
</li>
<li className="px-2 py-1 rounded hover:bg-white/5 flex items-center">
<span className="text-white/70">4200 · Services</span>
<span className="ml-auto text-white/50">$400,000</span>
</li>
</ul>
</li>
</ul>
</div>

<button className="fixed bottom-24 right-4 lg:bottom-8 lg:right-8 px-4 py-2 rounded-lg bg-[#FFCA00] text-black font-medium shadow-lg hover:shadow-xl hover:bg-[#ffd333] transition-all">
<i className="w-4.5 h-4.5 inline mr-1" data-lucide="plus"></i> Add Account / Ledger
              </button>
</div>
</section>

<section className="hidden space-y-6" id="section-general-ledger">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">General Ledger</h2>
<p className="text-sm text-white/60">Filter and drill down to transactions.</p>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs"><i className="w-4 h-4 inline mr-1" data-lucide="file-down"></i> PDF</button>
<button className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs"><i className="w-4 h-4 inline mr-1" data-lucide="table"></i> Excel</button>
<button className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs"><i className="w-4 h-4 inline mr-1" data-lucide="printer"></i> Print</button>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4 grid grid-cols-1 md:grid-cols-4 gap-3">
<div>
<div className="text-xs text-white/50 mb-1">Company</div>
<select className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
<option>Acme Global LLC</option>
<option>Northwind Traders</option>
</select>
</div>
<div>
<div className="text-xs text-white/50 mb-1">Period</div>
<input className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm" type="month" />
</div>
<div>
<div className="text-xs text-white/50 mb-1">Ledger</div>
<select className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
<option>All</option>
<option>Cash & Cash Equivalents</option>
<option>Accounts Receivable</option>
</select>
</div>
<div>
<div className="text-xs text-white/50 mb-1">Currency</div>
<select className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
<option>USD</option>
<option>EUR</option>
<option>AED</option>
</select>
</div>
</div>

<div className="text-xs text-white/60">
<span className="hover:text-white cursor-pointer">General Ledger</span>
<span className="text-white/30">/</span>
<span className="hover:text-white cursor-pointer">Customer Ledger</span>
<span className="text-white/30">/</span>
<span className="text-white">Invoice INV-1042</span>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white/5">
<tr className="text-left text-white/70">
<th className="px-4 py-3">Date</th>
<th className="px-4 py-3">Account</th>
<th className="px-4 py-3">Description</th>
<th className="px-4 py-3 text-right">Debit</th>
<th className="px-4 py-3 text-right">Credit</th>
<th className="px-4 py-3 text-right">Balance</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/5">
<td className="px-4 py-3">2025-08-25</td>
<td className="px-4 py-3">Accounts Receivable</td>
<td className="px-4 py-3">Invoice INV-1042</td>
<td className="px-4 py-3 text-right">$12,400</td>
<td className="px-4 py-3 text-right">—</td>
<td className="px-4 py-3 text-right">$12,400</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3">2025-08-26</td>
<td className="px-4 py-3">Sales</td>
<td className="px-4 py-3">Revenue Recognition</td>
<td className="px-4 py-3 text-right">—</td>
<td className="px-4 py-3 text-right">$12,400</td>
<td className="px-4 py-3 text-right">$0</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="hidden space-y-6" id="section-billing">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Billing</h2>
<p className="text-sm text-white/60">Payables and Receivables at a glance.</p>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-[#FFCA00] text-black font-medium hover:bg-[#ffd333]">+ Invoice</button>
<button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">Settings</button>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5">
<div className="border-b border-white/10 flex">
<button className="px-4 py-2 text-sm border-b-2 border-[#FFCA00] text-white" data-billing-tab="overview">Overview</button>
<button className="px-4 py-2 text-sm text-white/70 hover:text-white" data-billing-tab="payables">Payables</button>
<button className="px-4 py-2 text-sm text-white/70 hover:text-white" data-billing-tab="receivables">Receivables</button>
</div>

<div className="p-4 grid grid-cols-1 xl:grid-cols-3 gap-4" id="billing-overview">
<div className="rounded-lg border border-white/10 bg-black/30 p-4">
<div className="text-sm text-white/70 mb-1">Payables</div>
<div className="text-2xl tracking-tight font-semibold">$41,560</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-4">
<div className="text-sm text-white/70 mb-1">Receivables</div>
<div className="text-2xl tracking-tight font-semibold">$82,140</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-4">
<div className="text-sm text-white/70 mb-1">Overdue</div>
<div className="text-2xl tracking-tight font-semibold text-red-300">$9,320</div>
</div>
<div className="xl:col-span-2 rounded-lg border border-white/10 bg-black/30 p-4">
<div className="flex items-center justify-between mb-2">
<div className="text-sm text-white/80">Receivables Aging</div>
<div className="text-xs text-white/50">As of today</div>
</div>
<div className="relative">
<div className="relative w-full h-56">
<canvas id="receivablesAgingChart"></canvas>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-4">
<div className="text-sm text-white/80 mb-2">Aging Breakdown</div>
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between"><span>0-30d</span><span className="text-white/60">$41,000</span></div>
<div className="flex items-center justify-between"><span>31-60d</span><span className="text-white/60">$24,000</span></div>
<div className="flex items-center justify-between"><span>61-90d</span><span className="text-white/60">$12,000</span></div>
<div className="flex items-center justify-between"><span>90+d</span><span className="text-white/60">$5,140</span></div>
</div>
</div>
</div>

<div className="hidden p-4 space-y-4" id="billing-payables">
<div className="flex items-center gap-2">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-2.5 text-white/40" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-lg bg-black/30 border border-white/10 text-sm" placeholder="Search vendors…" />
</div>
<button className="px-3 py-2 rounded-lg bg-[#FFCA00] text-black font-medium hover:bg-[#ffd333]">
<i className="w-4 h-4 inline mr-1" data-lucide="calendar-check-2"></i> Schedule Payment
                  </button>
</div>
<div className="rounded-xl border border-white/10 overflow-hidden">
<table className="min-w-full text-sm">
<thead className="bg-white/5">
<tr className="text-left text-white/70">
<th className="px-4 py-3">Vendor</th>
<th className="px-4 py-3">Invoice</th>
<th className="px-4 py-3">Due</th>
<th className="px-4 py-3">Amount</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3"></th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/5">
<td className="px-4 py-3 flex items-center gap-2">
<span className="h-8 w-8 rounded-md border border-white/10 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=80&auto=format&fit=crop" />
</span> Parker Supplies
                        </td>
<td className="px-4 py-3">BILL-9032</td>
<td className="px-4 py-3">Today</td>
<td className="px-4 py-3">$3,950</td>
<td className="px-4 py-3"><span className="text-xs px-2 py-1 rounded bg-red-500/15 text-red-300 border border-red-500/20">Overdue</span></td>
<td className="px-4 py-3 text-right"><button className="text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10">Pay</button></td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 flex items-center gap-2">
<span className="h-8 w-8 rounded-md border border-white/10 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop" />
</span> Stark Logistics
                        </td>
<td className="px-4 py-3">BILL-9011</td>
<td className="px-4 py-3">In 2d</td>
<td className="px-4 py-3">$5,600</td>
<td className="px-4 py-3"><span className="text-xs px-2 py-1 rounded bg-orange-500/15 text-orange-300 border border-orange-500/20">Due Soon</span></td>
<td className="px-4 py-3 text-right"><button className="text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10">Pay</button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden p-4 space-y-4" id="billing-receivables">
<div className="flex items-center gap-2">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-2.5 text-white/40" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-lg bg-black/30 border border-white/10 text-sm" placeholder="Search customers…" />
</div>
<button className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
<i className="w-4 h-4 inline mr-1" data-lucide="mail"></i> Send Reminder
                  </button>
</div>
<div className="rounded-xl border border-white/10 overflow-hidden">
<table className="min-w-full text-sm">
<thead className="bg-white/5">
<tr className="text-left text-white/70">
<th className="px-4 py-3">Customer</th>
<th className="px-4 py-3">Invoice</th>
<th className="px-4 py-3">Issued</th>
<th className="px-4 py-3">Amount</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3"></th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/5">
<td className="px-4 py-3 flex items-center gap-2">
<span className="h-8 w-8 rounded-md border border-white/10 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=80&auto=format&fit=crop" />
</span> Stark Industries
                        </td>
<td className="px-4 py-3">INV-1042</td>
<td className="px-4 py-3">Aug 24</td>
<td className="px-4 py-3">$12,400</td>
<td className="px-4 py-3"><span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">Sent</span></td>
<td className="px-4 py-3 text-right"><button className="text-xs px-2 py-1 rounded bg-[#FFCA00]/10 text-[#FFCA00] border border-[#FFCA00]/20">Remind</button></td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3 flex items-center gap-2">
<span className="h-8 w-8 rounded-md border border-white/10 overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</span> Wayne Enterprises
                        </td>
<td className="px-4 py-3">INV-1039</td>
<td className="px-4 py-3">Aug 20</td>
<td className="px-4 py-3">$6,200</td>
<td className="px-4 py-3"><span className="text-xs px-2 py-1 rounded bg-green-500/15 text-green-300 border border-green-500/20">Paid</span></td>
<td className="px-4 py-3 text-right"><button className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">View</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="section-reports">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Reports</h2>
<p className="text-sm text-white/60">GL, TB, Balance Sheet, P&L, Cash Flow, Ratios.</p>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm"><i className="w-4 h-4 inline mr-1" data-lucide="sliders"></i> Filters</button>
<button className="px-3 py-1.5 rounded-lg bg-[#FFCA00] text-black font-medium hover:bg-[#ffd333]">Export</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-1 rounded-xl border border-white/10 bg-white/5">
<div className="p-3 border-b border-white/10 text-sm text-white/70">Available Reports</div>
<ul className="p-2 text-sm space-y-1">
<li><button className="report-item w-full text-left px-3 py-2 rounded hover:bg-white/5" data-report="pl">Profit & Loss</button></li>
<li><button className="report-item w-full text-left px-3 py-2 rounded hover:bg-white/5" data-report="bs">Balance Sheet</button></li>
<li><button className="report-item w-full text-left px-3 py-2 rounded hover:bg-white/5" data-report="cf">Cash Flow</button></li>
<li><button className="report-item w-full text-left px-3 py-2 rounded hover:bg-white/5" data-report="tb">Trial Balance</button></li>
<li><button className="report-item w-full text-left px-3 py-2 rounded hover:bg-white/5" data-report="ratios">Ratios</button></li>
</ul>
</div>
<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Report Preview</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs" id="toggleReportChart">
<i className="w-4 h-4 inline mr-1" data-lucide="activity"></i> Graph
                    </button>
<button className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs">
<i className="w-4 h-4 inline mr-1" data-lucide="download"></i> Download
                    </button>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
<select className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-xs">
<option>Company: Acme</option>
<option>Northwind</option>
</select>
<input className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-xs" type="date" />
<select className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-xs">
<option>All Dimensions</option>
<option>Online</option>
<option>Retail</option>
</select>
<select className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-xs">
<option>USD</option>
<option>EUR</option>
<option>AED</option>
</select>
</div>
<div className="rounded-lg border border-white/10 overflow-hidden">
<div className="bg-white/5 px-3 py-2 text-xs text-white/60">Table</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white/5">
<tr className="text-left text-white/70">
<th className="px-3 py-2">Account</th>
<th className="px-3 py-2 text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/5">
<td className="px-3 py-2">Revenue</td>
<td className="px-3 py-2 text-right">$210,000</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-3 py-2">COGS</td>
<td className="px-3 py-2 text-right">$120,000</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-3 py-2">Gross Profit</td>
<td className="px-3 py-2 text-right">$90,000</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="hidden" id="reportChartWrap">
<div className="relative w-full h-56 mt-2 rounded-lg border border-white/10">
<div className="relative w-full h-full">
<canvas id="fsChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="section-assets">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Assets</h2>
<p className="text-sm text-white/60">Register, lifecycle, and depreciation.</p>
</div>
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-[#FFCA00] text-black font-medium hover:bg-[#ffd333]">+ Asset</button>
<button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">Import</button>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
<div className="xl:col-span-2 rounded-xl border border-white/10 bg-white/5">
<div className="p-3 border-b border-white/10 flex items-center gap-2">
<div className="text-sm text-white/70">Asset Register</div>
<div className="flex-1"></div>
<select className="bg-black/30 border border-white/10 rounded-lg px-2 py-1.5 text-xs">
<option>All Types</option>
<option>Machinery</option>
<option>IT</option>
<option>Furniture</option>
</select>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-white/5">
<tr className="text-left text-white/70">
<th className="px-4 py-3">Asset</th>
<th className="px-4 py-3">Type</th>
<th className="px-4 py-3">Status</th>
<th className="px-4 py-3">Value</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="hover:bg-white/5">
<td className="px-4 py-3">Lathe Machine LM-200</td>
<td className="px-4 py-3">Machinery</td>
<td className="px-4 py-3"><span className="text-xs px-2 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">Active</span></td>
<td className="px-4 py-3">$420,000</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-3">MacBook Pro 16"</td>
<td className="px-4 py-3">IT</td>
<td className="px-4 py-3"><span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">Active</span></td>
<td className="px-4 py-3">$3,200</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
<div className="text-sm text-white/80">Depreciation (Straight-line)</div>
<div className="relative w-full h-48">
<canvas id="depreciationChart"></canvas>
</div>
<div className="text-sm text-white/80">Lifecycle</div>
<div className="relative pl-6">
<div className="absolute left-2 top-0 bottom-0 w-px bg-white/10"></div>
<div className="space-y-3">
<div className="relative">
<div className="absolute -left-3 top-1.5 h-2 w-2 rounded-full bg-[#FFCA00] shadow-[0_0_0_3px_rgba(255,202,0,0.15)]"></div>
<div className="text-sm">Purchase</div>
<div className="text-xs text-white/50">Jan 2024</div>
</div>
<div className="relative">
<div className="absolute -left-3 top-1.5 h-2 w-2 rounded-full bg-white/30"></div>
<div className="text-sm">Active</div>
<div className="text-xs text-white/50">Since Feb 2024</div>
</div>
<div className="relative">
<div className="absolute -left-3 top-1.5 h-2 w-2 rounded-full bg-white/30"></div>
<div className="text-sm">Depreciation</div>
<div className="text-xs text-white/50">Monthly</div>
</div>
<div className="relative">
<div className="absolute -left-3 top-1.5 h-2 w-2 rounded-full bg-white/30"></div>
<div className="text-sm">Disposal</div>
<div className="text-xs text-white/50">Planned 2028</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="section-reconciliation">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Account Reconciliation</h2>
<p className="text-sm text-white/60">Import statements and match transactions.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4 space-y-4">
<div className="text-sm text-white/80">Import Bank Statement (CSV)</div>
<label className="border-2 border-dashed border-white/10 hover:border-white/20 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer bg-black/20">
<i className="w-6 h-6 text-white/70 mb-2" data-lucide="upload-cloud"></i>
<span className="text-sm">Drag & drop or click to upload</span>
<input className="hidden" type="file" />
</label>
<div className="text-sm text-white/80">Match Transactions</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 p-3">
<div className="text-xs text-white/60 mb-2">Bank Transactions</div>
<div className="space-y-2">
<div className="rounded-md bg-black/30 border border-white/10 p-2 flex items-center justify-between">
<div>
<div className="text-sm">+$6,200 • Wayne Ent.</div>
<div className="text-xs text-white/50">Ref: 8812</div>
</div>
<button className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs">Match</button>
</div>
<div className="rounded-md bg-black/30 border border-white/10 p-2 flex items-center justify-between">
<div>
<div className="text-sm">-$3,950 • Parker Supplies</div>
<div className="text-xs text-white/50">Ref: 7741</div>
</div>
<button className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-xs">Match</button>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3">
<div className="text-xs text-white/60 mb-2">Suggested Matches</div>
<div className="space-y-2">
<div className="rounded-md bg-black/30 border border-white/10 p-2 flex items-center justify-between">
<div>
<div className="text-sm">INV-1039 • Wayne Ent.</div>
<div className="text-xs text-white/50">Amount: $6,200</div>
</div>
<span className="text-xs px-2 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">Matched</span>
</div>
<div className="rounded-md bg-black/30 border border-white/10 p-2 flex items-center justify-between">
<div>
<div className="text-sm">BILL-9032 • Parker Supplies</div>
<div className="text-xs text-white/50">Amount: $3,950</div>
</div>
<span className="text-xs px-2 py-1 rounded bg-yellow-500/15 text-yellow-300 border border-yellow-500/20">Pending</span>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">Skip</button>
<button className="px-3 py-1.5 rounded-lg bg-[#FFCA00] text-black font-medium hover:bg-[#ffd333]">
<i className="w-4 h-4 inline mr-1" data-lucide="check-circle-2"></i> Confirm & Reconcile
                  </button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-3">
<div className="text-sm text-white/80">Status</div>
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between"><span>Matched</span><span className="text-emerald-300">12</span></div>
<div className="flex items-center justify-between"><span>Pending</span><span className="text-yellow-300">3</span></div>
<div className="flex items-center justify-between"><span>Error</span><span className="text-red-300">1</span></div>
</div>
<div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-200 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="circle-check-big"></i> Reconciliation ready to finalize
                </div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="section-paymagics">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">PayMagics ⚡</h2>
<p className="text-sm text-white/60">Set up beneficiaries and generate payment files.</p>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Beneficiaries</div>
<button className="px-3 py-1.5 rounded-lg bg-[#FFCA00] text-black font-medium hover:bg-[#ffd333]"><i className="w-4 h-4 inline mr-1" data-lucide="user-plus"></i> Add Beneficiary</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-black/30 p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#FFCA00]/10 border border-[#FFCA00]/20 flex items-center justify-center text-[#FFCA00]"><i className="w-5 h-5" data-lucide="building-2"></i></div>
<div className="flex-1">
<div className="text-sm">Stark Industries</div>
<div className="text-xs text-white/50">Bank • **** 2901</div>
</div>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 border border-white/10">Pay</button>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#FFCA00]/10 border border-[#FFCA00]/20 flex items-center justify-center text-[#FFCA00]"><i className="w-5 h-5" data-lucide="wallet-cards"></i></div>
<div className="flex-1">
<div className="text-sm">Wayne Enterprises</div>
<div className="text-xs text-white/50">Wallet • UPI</div>
</div>
<button className="px-2 py-1 text-xs rounded bg-white/5 hover:bg-white/10 border border-white/10">Pay</button>
</div>
</div>
<div className="rounded-lg border border-white/10 overflow-hidden">
<div className="bg-white/5 px-3 py-2 text-sm text-white/70">Payment Setup</div>
<div className="p-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
<select className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
<option>Select Beneficiary</option>
<option>Stark Industries</option>
<option>Wayne Enterprises</option>
</select>
<input className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm" placeholder="Amount" type="number" />
<button className="px-3 py-2 rounded-lg bg-[#FFCA00] text-black font-medium hover:bg-[#ffd333]">
<i className="w-4 h-4 inline mr-1" data-lucide="file-cog"></i> Generate Payment File
                      </button>
</div>
<div className="px-3 pb-3 text-xs text-white/50">A small processing fee applies. Instant payments show a ⚡ confirmation.</div>
</div>
</div>
<div className="space-y-3">
<div className="text-sm text-white/80">Transaction History</div>
<div className="space-y-2">
<div className="rounded-lg border border-white/10 bg-black/30 p-3 flex items-center justify-between">
<div>
<div className="text-sm">Paid • Parker Supplies</div>
<div className="text-xs text-white/50">$3,950 • Today</div>
</div>
<div className="text-[#FFCA00] text-sm">⚡ Instant</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-3 flex items-center justify-between">
<div>
<div className="text-sm">Paid • Wayne Enterprises</div>
<div className="text-xs text-white/50">$6,200 • Yesterday</div>
</div>
<div className="text-white/60 text-sm">File</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" id="section-taxes">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Taxes & Compliance</h2>
<p className="text-sm text-white/60">Configure tax ledgers and generate e-invoices.</p>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-4">
<div className="text-sm text-white/80">Tax Ledger Setup Wizard</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<select className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
<option>Choose Tax Regime</option>
<option>GST</option>
<option>VAT</option>
<option>Regional</option>
</select>
<select className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm">
<option>Template</option>
<option>Standard</option>
<option>Reverse Charge</option>
</select>
<button className="px-3 py-2 rounded-lg bg-[#FFCA00] text-black font-medium hover:bg-[#ffd333]">Apply</button>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-white/60">Automations enabled for invoice tagging.</div>
<button className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
<i className="w-4 h-4 inline mr-1" data-lucide="file-badge-2"></i> Generate e-Invoice
                </button>
</div>
</div>
</section>

<section className="hidden space-y-6" id="section-cost-centers">
<div className="flex items-end gap-3">
<div>
<h2 className="text-2xl tracking-tight font-semibold">Cost Centers & Budgeting</h2>
<p className="text-sm text-white/60">Track tags per transaction with budget alerts.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
</div></section></main></div></div>
    </>
  );
}
