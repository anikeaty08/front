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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-blue-200/40 via-purple-200/40 to-teal-100/40 blur-[100px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-bl from-pink-200/30 via-purple-100/30 to-blue-100/30 blur-[120px]"></div>
</div>

<nav className="relative z-50 w-full px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight">FINQ</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Products</a>
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Developers</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Sign in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow" href="#">Open Account</a>
</div>
<button className="md:hidden text-slate-900">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<section className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/60 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-purple-500"></span>
<span className="text-xs font-medium text-slate-600">Announcing global multi-currency accounts</span>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-6">
            Financial clarity, <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-teal-500">beautifully designed.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Manage your corporate spend, automate accounting, and scale your growth with a single, modern financial operating system.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto text-base font-medium bg-slate-900 text-white px-8 py-3.5 rounded-full hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="#">
                Get Started
                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-base font-medium bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                View Demo
            </a>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl -z-10 rounded-[3rem]"></div>
<div className="relative bg-white/70 backdrop-blur-xl border border-white/80 shadow-2xl rounded-[2.5rem] p-4 md:p-8 overflow-hidden transform perspective-1000 rotate-x-2">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-2xl text-purple-500" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Balance</p>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900">$142,394.00</h3>
</div>
</div>
<div className="hidden md:flex gap-2">
<button className="px-4 py-2 text-xs font-medium bg-white border border-slate-200 rounded-full shadow-sm">Send</button>
<button className="px-4 py-2 text-xs font-medium bg-slate-900 text-white rounded-full shadow-sm">Add Funds</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="md:col-span-2 bg-slate-50/50 rounded-3xl p-6 border border-slate-100/50">
<div className="flex justify-between items-center mb-6">
<h4 className="text-sm font-semibold text-slate-900">Cash Flow</h4>
<span className="text-xs text-slate-400 bg-white px-2 py-1 rounded-md shadow-sm border border-slate-100">Last 30 Days</span>
</div>

<div className="flex items-end justify-between h-32 gap-2 mt-4">
<div className="w-full bg-blue-100 rounded-t-md h-12 relative group cursor-pointer hover:bg-blue-200 transition-colors"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$2k</div></div>
<div className="w-full bg-blue-100 rounded-t-md h-20 relative group cursor-pointer hover:bg-blue-200 transition-colors"></div>
<div className="w-full bg-blue-500 rounded-t-md h-32 shadow-sm relative group cursor-pointer hover:bg-blue-600 transition-colors"></div>
<div className="w-full bg-blue-100 rounded-t-md h-16 relative group cursor-pointer hover:bg-blue-200 transition-colors"></div>
<div className="w-full bg-blue-100 rounded-t-md h-24 relative group cursor-pointer hover:bg-blue-200 transition-colors"></div>
<div className="w-full bg-blue-100 rounded-t-md h-10 relative group cursor-pointer hover:bg-blue-200 transition-colors"></div>
<div className="w-full bg-purple-400 rounded-t-md h-28 shadow-sm relative group cursor-pointer hover:bg-purple-500 transition-colors"></div>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Recent Activity</h4>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Stripe</p>
<p className="text-xs text-slate-400">Today, 2:45 PM</p>
</div>
</div>
<span className="text-sm font-semibold text-slate-900">+$4,200</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:monitor-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Apple Store</p>
<p className="text-xs text-slate-400">Yesterday</p>
</div>
</div>
<span className="text-sm font-medium text-slate-600">-$2,199</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">AWS</p>
<p className="text-xs text-slate-400">Oct 12</p>
</div>
</div>
<span className="text-sm font-medium text-slate-600">-$845</span>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 md:-right-12 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100/50 hidden md:flex items-center gap-4 animate-bounce text-left" style={{animationDuration: '4s'}}>
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Payment received</p>
<p className="text-sm font-semibold text-slate-900">$12,500.00</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-200/50 bg-white/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Powering modern financial teams</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
<span className="text-xl font-semibold tracking-tight text-slate-800">ACME</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">GLOBEX</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">SOYUZ</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">INITECH</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">VANDELAY</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need to scale</h2>
<p className="text-base text-slate-500">A complete toolkit built for modern businesses. Move fast, stay compliant, and keep your finances in perfect sync.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 group-hover:bg-blue-100 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100">
<iconify-icon className="text-2xl" icon="solar:card-send-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Smart Corporate Cards</h3>
<p className="text-sm text-slate-500 leading-relaxed">Issue physical and virtual cards instantly. Set custom spending limits and automate receipt collection.</p>
</div>
<div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -z-10 group-hover:bg-purple-100 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border border-purple-100">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">AI Financial Insights</h3>
<p className="text-sm text-slate-500 leading-relaxed">Get real-time visibility into your burn rate, runway, and cash flow with automated categorization.</p>
</div>
<div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -z-10 group-hover:bg-teal-100 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 border border-teal-100">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Bank-grade Security</h3>
<p className="text-sm text-slate-500 leading-relaxed">Your funds are held safely with partner banks. Enjoy enterprise-level encryption and fraud protection.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200/50">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Programmable financial infrastructure</h2>
<p className="text-base text-slate-500 max-w-2xl">Go beyond basic banking. Establish complex rules, automate multi-entity accounting, and build directly on top of our API.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">

<div className="md:col-span-12 lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Zero-touch compliance</h3>
</div>
<p className="text-sm text-slate-500 mb-8 max-w-md">Enforce your company's expense policy programmatically. Transactions that violate rules are flagged or declined instantly before they occur.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-semibold text-slate-900">Block weekend spending</p>
<p className="text-xs text-slate-500">Decline card sweeps automatically</p>
</div>
<div>
<input checked="" className="hidden toggle-checkbox" id="rule1" type="checkbox"/>
<label className="toggle-label block" htmlFor="rule1"></label>
</div>
</div>
<div className="w-full h-px bg-slate-200/60"></div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-semibold text-slate-900">Require receipts &gt; $50</p>
<p className="text-xs text-slate-500">Hold reimbursements until uploaded</p>
</div>
<div>
<input checked="" className="hidden toggle-checkbox" id="rule2" type="checkbox"/>
<label className="toggle-label block" htmlFor="rule2"></label>
</div>
</div>
<div className="w-full h-px bg-slate-200/60"></div>
<div className="flex items-center justify-between opacity-60">
<div>
<p className="text-sm font-semibold text-slate-900">Auto-approve SaaS subscriptions</p>
<p className="text-xs text-slate-500">Bypass manager review for known vendors</p>
</div>
<div>
<input className="hidden toggle-checkbox" id="rule3" type="checkbox"/>
<label className="toggle-label block" htmlFor="rule3"></label>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Granular controls</h3>
<p className="text-sm text-slate-500 mb-8">Set highly specific limits by team, individual, category, or merchant.</p>
</div>

<div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-12 h-12 rounded-full border border-slate-100" src="https://i.pravatar.cc/150?img=47"/>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Marketing Dept • Virtual Card</p>
</div>
</div>
<div className="mb-2 flex justify-between items-end">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Monthly Limit</span>
<span className="text-lg font-semibold tracking-tight text-slate-900">$8,500</span>
</div>
<input className="custom-slider mb-4" max="20000" min="1000" type="range" value="8500"/>
<div className="flex justify-between text-[10px] text-slate-400 font-medium">
<span>$1K</span>
<span>$10K</span>
<span>$20K+</span>
</div>
</div>
</div>

<div className="md:col-span-12 lg:col-span-5 bg-slate-900 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 group-hover:bg-purple-500/20 transition-all"></div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Headless finance</h3>
<p className="text-sm text-slate-400 mb-6">Automate payouts, provision cards, and read transaction data programmatically using our RESTful API.</p>

<div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800 font-mono text-xs overflow-hidden text-slate-300">
<pre><code><span className="text-purple-400">POST</span> /v1/transfers
{
  <span className="text-blue-300">"amount"</span>: <span className="text-green-400">45000</span>,
  <span className="text-blue-300">"currency"</span>: <span className="text-green-300">"USD"</span>,
  <span className="text-blue-300">"destination"</span>: <span className="text-green-300">"acc_8x99z2"</span>,
  <span className="text-blue-300">"metadata"</span>: {
    <span className="text-blue-300">"invoice_id"</span>: <span className="text-green-300">"INV-2023-14A"</span>,
    <span className="text-blue-300">"auto_reconcile"</span>: <span className="text-orange-300">true</span>
  }
}</code></pre>
</div>
</div>

<div className="md:col-span-12 lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Multi-entity liquidity</h3>
<p className="text-sm text-slate-500 mb-6">Hold balances in 30+ currencies. Move money across borders instantly without correspondent banking fees.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex justify-between items-center mb-4">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-semibold text-slate-900 text-xs">US</div>
<span className="text-[10px] font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded-full border border-green-200">Active</span>
</div>
<p className="text-xs text-slate-500 mb-1">USD Account</p>
<p className="text-lg font-semibold tracking-tight text-slate-900">$1.2M</p>
</div>
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex justify-between items-center mb-4">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-semibold text-slate-900 text-xs">EU</div>
<span className="text-[10px] font-medium px-2 py-0.5 bg-green-100 text-green-700 rounded-full border border-green-200">Active</span>
</div>
<p className="text-xs text-slate-500 mb-1">EUR Account</p>
<p className="text-lg font-semibold tracking-tight text-slate-900">€450K</p>
</div>
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex justify-between items-center mb-4">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center font-semibold text-slate-900 text-xs">GB</div>
<span className="text-[10px] font-medium px-2 py-0.5 bg-slate-200 text-slate-600 rounded-full border border-slate-300">Syncing</span>
</div>
<p className="text-xs text-slate-500 mb-1">GBP Account</p>
<p className="text-lg font-semibold tracking-tight text-slate-900">£82K</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Plays perfectly with your stack</h2>
<p className="text-base text-slate-500">Native bi-directional integrations ensure your general ledger is always up to date, eliminating manual data entry.</p>
</div>
<div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-2 md:p-6 shadow-sm overflow-hidden">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left min-w-[600px] border-collapse">
<thead>
<tr className="border-b border-slate-200 text-xs font-semibold text-slate-400 uppercase tracking-wider">
<th className="p-4 font-medium">Integration</th>
<th className="p-4 font-medium">Category</th>
<th className="p-4 font-medium">Sync Data</th>
<th className="p-4 font-medium">Status</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-200/60">

<tr className="group hover:bg-white transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm">
<span className="font-semibold tracking-tight text-sm">NS</span>
</div>
<div>
<p className="font-semibold text-slate-900">Oracle NetSuite</p>
<p className="text-xs text-slate-500">Continuous sync</p>
</div>
</div>
</td>
<td className="p-4 text-slate-600">ERP &amp; Accounting</td>
<td className="p-4">
<div className="flex items-center gap-4 text-slate-500 text-xs">
<label className="flex items-center gap-1.5 cursor-pointer">
<input checked="" className="custom-check" type="checkbox"/>
                                            Transactions
                                        </label>
<label className="flex items-center gap-1.5 cursor-pointer">
<input checked="" className="custom-check" type="checkbox"/>
                                            Receipts
                                        </label>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Connected
                                    </span>
</td>
</tr>

<tr className="group hover:bg-white transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-500 shadow-sm">
<iconify-icon className="text-xl" icon="solar:calculator-linear"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">QuickBooks Online</p>
<p className="text-xs text-slate-500">Daily batch sync</p>
</div>
</div>
</td>
<td className="p-4 text-slate-600">Accounting</td>
<td className="p-4">
<div className="flex items-center gap-4 text-slate-500 text-xs">
<label className="flex items-center gap-1.5 cursor-pointer">
<input checked="" className="custom-check" type="checkbox"/>
                                            Transactions
                                        </label>
<label className="flex items-center gap-1.5 cursor-pointer">
<input className="custom-check" type="checkbox"/>
                                            Receipts
                                        </label>
</div>
</td>
<td className="p-4">
<button className="px-3 py-1.5 rounded-full text-xs font-medium bg-white text-slate-600 border border-slate-200 hover:border-slate-300 transition-colors shadow-sm">
                                        Connect
                                    </button>
</td>
</tr>

<tr className="group hover:bg-white transition-colors">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-pink-500 shadow-sm">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">Workday HRIS</p>
<p className="text-xs text-slate-500">Employee lifecycle</p>
</div>
</div>
</td>
<td className="p-4 text-slate-600">HR &amp; Identity</td>
<td className="p-4">
<div className="flex items-center gap-4 text-slate-500 text-xs">
<label className="flex items-center gap-1.5 cursor-pointer">
<input checked="" className="custom-check" type="checkbox"/>
                                            Roster
                                        </label>
<label className="flex items-center gap-1.5 cursor-pointer">
<input checked="" className="custom-check" type="checkbox"/>
                                            Departments
                                        </label>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Connected
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-6 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
                    View all 140+ integrations
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-100/50 overflow-hidden relative border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Designed for velocity</h2>
<p className="text-base text-slate-500 mb-10">We've stripped away the complexity of traditional banking so you can focus on building your business.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 font-semibold text-sm">1</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Open an account in minutes</h4>
<p className="text-sm text-slate-500">Fully digital onboarding. No branch visits, no paperwork. Get approved in under 10 minutes.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-900 font-semibold text-sm">2</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Fund and distribute</h4>
<p className="text-sm text-slate-500">Connect your existing accounts, wire funds globally, and issue virtual cards to your team instantly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-900 shadow-md flex items-center justify-center text-white font-semibold text-sm">3</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">Automate bookkeeping</h4>
<p className="text-sm text-slate-500">Native integrations with modern accounting software mean zero manual data entry at month-end.</p>
</div>
</div>
</div>
</div>

<div className="relative flex justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-[80px] -z-10"></div>

<div className="w-[300px] h-[600px] bg-white border-[8px] border-slate-100 rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-100 rounded-b-xl z-20"></div>

<div className="flex-1 bg-slate-50 pt-12 pb-6 px-6 flex flex-col">
<div className="flex justify-between items-center mb-8">
<div>
<p className="text-xs text-slate-400">Available Balance</p>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">$42,850.00</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-slate-100">
<iconify-icon className="text-slate-600" icon="solar:bell-linear"></iconify-icon>
</div>
</div>

<div className="w-full aspect-[1.58] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white p-5 flex flex-col justify-between shadow-lg mb-6 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-center relative z-10">
<span className="tracking-widest font-semibold text-sm">FINQ</span>
<iconify-icon className="text-xl rotate-90" icon="solar:wifi-router-linear"></iconify-icon>
</div>
<div className="relative z-10">
<p className="text-xs text-slate-300 mb-1">Virtual Card</p>
<p className="font-mono text-sm tracking-widest">**** **** **** 4092</p>
</div>
</div>

<h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Today</h4>
<div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
<div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center"><iconify-icon icon="solar:cup-hot-linear"></iconify-icon></div>
<div><p className="text-xs font-medium text-slate-900">Coffee Shop</p><p className="text-[10px] text-slate-400">Food &amp; Drink</p></div>
</div>
<span className="text-xs font-medium text-slate-900">-$4.50</span>
</div>
<div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><iconify-icon icon="solar:monitor-linear"></iconify-icon></div>
<div><p className="text-xs font-medium text-slate-900">Software Sub</p><p className="text-[10px] text-slate-400">SaaS</p></div>
</div>
<span className="text-xs font-medium text-slate-900">-$49.00</span>
</div>
<div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center"><iconify-icon icon="solar:taxi-linear"></iconify-icon></div>
<div><p className="text-xs font-medium text-slate-900">Uber</p><p className="text-[10px] text-slate-400">Travel</p></div>
</div>
<span className="text-xs font-medium text-slate-900">-$24.20</span>
</div>
</div>

<div className="mt-4 bg-white rounded-2xl py-3 px-6 shadow-sm border border-slate-100 flex justify-between items-center text-slate-400">
<iconify-icon className="text-slate-900 text-xl" icon="solar:home-2-linear"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:card-linear"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 text-center">
<div className="px-4">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">$10B+</h3>
<p className="text-sm text-slate-500">Volume processed</p>
</div>
<div className="px-4">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">99.99%</h3>
<p className="text-sm text-slate-500">System uptime</p>
</div>
<div className="px-4">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">2M+</h3>
<p className="text-sm text-slate-500">Active users</p>
</div>
<div className="px-4">
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">150+</h3>
<p className="text-sm text-slate-500">Countries supported</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden border-t border-slate-200/50">

<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 -z-20"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTUsIDIzLCA0MiwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Ready to upgrade your financial stack?</h2>
<p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">Join thousands of forward-thinking companies that rely on FINQ to manage their finances, scale faster, and save time.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-base font-medium bg-slate-900 text-white px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transform" href="#">
                    Open an Account — It's Free
                </a>
<p className="text-sm text-slate-500 sm:ml-4 mt-4 sm:mt-0 flex items-center justify-center gap-2">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                    No credit card required
                </p>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
<div className="col-span-2">
<div className="flex items-center gap-2 text-slate-900 mb-6">
<div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-sm">
<iconify-icon className="text-sm" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tight">FINQ</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">Building the financial infrastructure for the next generation of internet businesses.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:minimalistic-twitter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:linkedin-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-sm text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Corporate Cards</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Expense Management</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Bill Pay</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
<p>© 2023 FINQ Technologies Inc. All rights reserved.</p>
<p className="mt-4 md:mt-0">FINQ is a financial technology company, not a bank. Banking services provided by partner banks.</p>
</div>
</footer>

    </>
  );
}
