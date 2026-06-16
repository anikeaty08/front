import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwindcss.config = {
theme: {
extend: {
colors: {
primary: '#14264F',
accent: '#00E6B8',
dark: '#0F1724',
muted: '#64748B',
surface: '#FFFFFF',
page: '#F7FAFC',
success: '#1FA66A',
danger: '#FF6B6B',
warning: '#F59E0B',
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
boxShadow: {
card: '0 8px 24px rgba(11,16,30,0.06)',
},
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-200 -translate-x-full lg:translate-x-0 lg:static lg:flex-shrink-0" id="sidebar">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<span className="text-xl font-semibold tracking-tight text-primary">Just<span className="text-accent">Pay</span></span>
</div>
<nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-accent/10 text-primary font-medium text-sm" href="#">
<iconify-icon height="20" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
        Overview
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:bg-gray-50 hover:text-primary transition text-sm" href="#">
<iconify-icon height="20" icon="solar:wallet-money-linear" width="20"></iconify-icon>
        Tokens
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:bg-gray-50 hover:text-primary transition text-sm" href="#">
<iconify-icon height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
        Invoices
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:bg-gray-50 hover:text-primary transition text-sm" href="#">
<iconify-icon height="20" icon="solar:transfer-horizontal-linear" width="20"></iconify-icon>
        Transactions
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:bg-gray-50 hover:text-primary transition text-sm" href="#">
<iconify-icon height="20" icon="solar:key-linear" width="20"></iconify-icon>
        API Keys
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:bg-gray-50 hover:text-primary transition text-sm" href="#">
<iconify-icon height="20" icon="solar:link-round-linear" width="20"></iconify-icon>
        Payment Links
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:bg-gray-50 hover:text-primary transition text-sm" href="#">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
        Notifications
      </a>
</nav>
<div className="p-3 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:bg-gray-50 hover:text-primary transition text-sm" href="#">
<iconify-icon height="20" icon="solar:settings-linear" width="20"></iconify-icon>
        Settings
      </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted hover:bg-gray-50 hover:text-primary transition text-sm" href="#">
<iconify-icon height="20" icon="solar:question-circle-linear" width="20"></iconify-icon>
        Support
      </a>
</div>
</aside>

<div className="fixed inset-0 bg-black/30 z-30 hidden lg:hidden" id="sidebarOverlay" onclick="toggleSidebar()"></div>

<div className="flex-1 flex flex-col min-w-0">

<header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-20">
<div className="flex items-center gap-3">
<button className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-gray-50 text-muted" onclick="toggleSidebar()">
<iconify-icon height="22" icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-2 bg-page rounded-lg px-3 py-2 w-72 border border-gray-100">
<iconify-icon className="text-muted" height="18" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="bg-transparent outline-none text-sm text-primary placeholder:text-muted/60 w-full" placeholder="Search transactions, invoices…" type="text"/>
<kbd className="hidden md:inline text-xs text-muted bg-white border border-gray-200 rounded px-1.5 py-0.5 font-medium">⌘K</kbd>
</div>
</div>
<div className="flex items-center gap-3">
<button className="relative p-2 rounded-lg hover:bg-gray-50 text-muted transition">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full"></span>
</button>
<div className="w-px h-6 bg-gray-100"></div>
<button className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-gray-50 transition">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">M</div>
<div className="hidden sm:flex flex-col items-start">
<span className="text-sm font-medium text-primary leading-tight">Merchant</span>
<span className="text-xs text-muted leading-tight">#8294710</span>
</div>
<iconify-icon className="text-muted hidden sm:block" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 p-4 lg:p-8 overflow-y-auto">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-dark">Dashboard</h1>
<p className="text-sm text-muted mt-1">Welcome back. Here's your financial summary.</p>
</div>
<div className="flex items-center gap-2 flex-wrap">
<button className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-accent/90 transition shadow-card" onclick="openInvoiceModal()">
<iconify-icon height="18" icon="solar:document-add-linear" width="18"></iconify-icon>
            Create Invoice
          </button>
<button className="inline-flex items-center gap-2 bg-white border border-gray-200 text-primary px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition" onclick="openPaymentLinkModal()">
<iconify-icon height="18" icon="solar:link-round-linear" width="18"></iconify-icon>
            Payment Link
          </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">

<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-card">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-muted uppercase tracking-wide">Total Balance</span>
<div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
<iconify-icon height="18" icon="solar:wallet-money-linear" style={{color: '#00E6B8'}} width="18"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-dark">$12,345.89</div>
<p className="text-xs text-muted mt-1">Across all supported tokens</p>
<div className="mt-3 flex items-center gap-1.5">
<span className="inline-flex items-center text-xs font-medium text-success">
<iconify-icon height="14" icon="solar:arrow-up-linear" width="14"></iconify-icon>
              12.5%
            </span>
<span className="text-xs text-muted">vs last 7d</span>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-card">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-muted uppercase tracking-wide">Pending</span>
<div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
<iconify-icon height="18" icon="solar:clock-circle-linear" style={{color: '#F59E0B'}} width="18"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-dark">$1,230.00</div>
<p className="text-xs text-muted mt-1">3 awaiting confirmation</p>
<div className="mt-3 flex items-center gap-1.5">
<span className="inline-flex items-center text-xs font-medium text-warning">
<iconify-icon height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
              ~12 min
            </span>
<span className="text-xs text-muted">avg confirm time</span>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-card">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-muted uppercase tracking-wide">Confirmed (24h)</span>
<div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
<iconify-icon height="18" icon="solar:check-circle-linear" style={{color: '#1FA66A'}} width="18"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-dark">$4,812.50</div>
<p className="text-xs text-muted mt-1">18 transactions confirmed</p>
<div className="mt-3 flex items-center gap-1.5">
<span className="inline-flex items-center text-xs font-medium text-success">
<iconify-icon height="14" icon="solar:arrow-up-linear" width="14"></iconify-icon>
              8.3%
            </span>
<span className="text-xs text-muted">vs yesterday</span>
</div>
</div>

<div className="bg-white rounded-xl p-5 border border-gray-100 shadow-card">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-muted uppercase tracking-wide">24h Volume</span>
<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
<iconify-icon height="18" icon="solar:graph-up-linear" style={{color: '#14264F'}} width="18"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-dark">$6,042.50</div>
<p className="text-xs text-muted mt-1">21 total transactions</p>
<div className="mt-3 h-8">
<svg className="w-full h-full" fill="none" viewbox="0 0 120 32">
<polyline fill="none" points="0,28 10,24 20,26 30,18 40,20 50,12 60,16 70,8 80,14 90,6 100,10 110,4 120,8" stroke="#00E6B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
<lineargradient id="spark" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00E6B8" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#00E6B8" stop-opacity="0"></stop>
</lineargradient>
<polygon fill="url(#spark)" points="0,28 10,24 20,26 30,18 40,20 50,12 60,16 70,8 80,14 90,6 100,10 110,4 120,8 120,32 0,32"></polygon>
</svg>
</div>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 bg-white rounded-xl border border-gray-100 shadow-card">
<div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
<h2 className="text-base font-semibold text-dark">Recent Transactions</h2>
<a className="text-sm text-accent font-medium hover:underline inline-flex items-center gap-1" href="#">
              View all
              <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-xs text-muted uppercase tracking-wide border-b border-gray-50">
<th className="text-left font-medium px-5 py-3">Asset</th>
<th className="text-left font-medium px-3 py-3 hidden sm:table-cell">TX ID</th>
<th className="text-right font-medium px-3 py-3">Amount</th>
<th className="text-right font-medium px-5 py-3">Status</th>
</tr>
</thead>
<tbody id="txBody">
</tbody>
</table>
</div>

<div className="px-5 py-3 border-t border-gray-50 flex items-center gap-2">
<iconify-icon className="text-muted/60" height="14" icon="solar:lock-linear" width="14"></iconify-icon>
<span className="text-xs text-muted">Transactions are immutable and cannot be modified</span>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
<h2 className="text-base font-semibold text-dark mb-4">Quick Actions</h2>
<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-100 hover:border-accent/40 hover:bg-accent/5 transition group" onclick="openInvoiceModal()">
<div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
<iconify-icon height="20" icon="solar:document-add-linear" style={{color: '#00E6B8'}} width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-dark">Create Invoice</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-100 hover:border-accent/40 hover:bg-accent/5 transition group" onclick="openPaymentLinkModal()">
<div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
<iconify-icon height="20" icon="solar:link-round-linear" style={{color: '#00E6B8'}} width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-dark">Payment Link</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-100 hover:border-accent/40 hover:bg-accent/5 transition group" onclick="openApiKeyModal()">
<div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
<iconify-icon height="20" icon="solar:key-linear" style={{color: '#00E6B8'}} width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-dark">API Key</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 rounded-lg border border-gray-100 hover:border-accent/40 hover:bg-accent/5 transition group" onclick="openNotificationModal()">
<div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition">
<iconify-icon height="20" icon="solar:bell-bing-linear" style={{color: '#00E6B8'}} width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-dark">Notification</span>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-accent" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
<h2 className="text-base font-semibold text-dark">Fee Transparency</h2>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between py-2 border-b border-gray-50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-accent"></div>
<span className="text-sm text-dark">Platform Fee</span>
</div>
<span className="text-sm font-semibold text-dark">0.4%</span>
</div>
<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-muted/40"></div>
<span className="text-sm text-dark">Network Fee</span>
</div>
<span className="text-sm font-medium text-muted">Varies</span>
</div>
<div className="bg-page rounded-lg p-3 mt-1">
<p className="text-xs text-muted leading-relaxed">Network fees are paid to the blockchain, not JustPay. Platform fees are deducted per transaction.</p>
</div>
</div>
</div>

<div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
<div className="flex items-start gap-3">
<iconify-icon className="text-primary mt-0.5 flex-shrink-0" height="18" icon="solar:lock-keyhole-linear" width="18"></iconify-icon>
<div>
<p className="text-xs font-medium text-dark">Ledger-Like Immutability</p>
<p className="text-xs text-muted mt-1 leading-relaxed">Invoices, transactions, and payment links cannot be edited after creation. You may only view or delete them.</p>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



<div className="fixed inset-0 z-50 hidden" id="invoiceModal">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick="closeAllModals()"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative" style={{animation: 'modalIn 0.2s ease-out'}}>
<div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
<h3 className="text-lg font-semibold tracking-tight text-dark">Create Invoice</h3>
<button className="p-1.5 rounded-lg hover:bg-gray-100 text-muted transition" onclick="closeAllModals()">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="mx-6 mt-5 bg-warning/10 border border-warning/20 rounded-lg p-3 flex items-start gap-2.5">
<iconify-icon className="text-warning mt-0.5 flex-shrink-0" height="16" icon="solar:lock-linear" width="16"></iconify-icon>
<p className="text-xs text-dark"><span className="font-semibold">Immutable</span> — this cannot be changed after creation. You may only delete.</p>
</div>
<form className="px-6 py-5 space-y-4" onsubmit="event.preventDefault(); closeAllModals()">
<div>
<label className="block text-xs font-medium text-dark mb-1.5">Title</label>
<input className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-dark placeholder:text-muted/50 outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition" placeholder="Invoice title" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-dark mb-1.5">Fiat Amount (USD)</label>
</div></form></div></div></div>
    </>
  );
}
