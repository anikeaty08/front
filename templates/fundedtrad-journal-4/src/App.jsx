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
colors: {
bg: '#0b0f14',
surface: '#0f1720',
accent: '#00d1ff',
accentSec: '#ff6b6b',
text: '#e6eef6',
muted: '#9aa8b2',
success: '#38d89b',
warning: '#ffb020',
border: 'rgba(255, 255, 255, 0.06)'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
fontSize: {
xxs: '0.65rem',
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-border bg-bg/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-accent" data-icon="lucide:book-key" data-strokeWidth="1.5" data-width="20"></span>
<span className="font-medium tracking-tight text-sm">FundedTrader Journal</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-muted">
<a className="hover:text-text transition-colors" href="#features">Features</a>
<a className="hover:text-text transition-colors" href="#dashboard">Dashboard</a>
<a className="hover:text-text transition-colors" href="#strategies">Strategies</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-muted hover:text-text hidden sm:block" href="#">Log In</a>
<a className="bg-surface border border-border hover:border-accent/50 text-text text-xs font-medium px-4 py-2 rounded-lg transition-all flex items-center gap-2 group" href="#">
<span>Create Journal</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 hero-glow overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/20 text-accent text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:shield-check" data-width="12"></span>
                Local-First &amp; Private
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter-custom mb-6 leading-[1.1]">
                Manage Your Funded Accounts.<br/>
<span className="text-muted">Perfect Your Strategy.</span>
</h1>
<p className="text-muted text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                A private, dark-themed trader workspace that centralizes multiple funded accounts, automated journaling, in-depth performance analytics, and strategy tracking.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-accent text-bg hover:bg-[#33c2ff] font-semibold text-sm px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="18"></span>
                    Create Your Journal
                </button>
<button className="w-full sm:w-auto bg-surface border border-border text-text hover:border-muted font-medium text-sm px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="18"></span>
                    Import Trades
                </button>
</div>
<p className="mt-8 text-xs text-muted/60">
                Compatible with MT4, MT5, cTrader CSVs • No Membership Required
            </p>
</div>
</header>

<section className="px-4 md:px-6 pb-24 -mt-10" id="dashboard">
<div className="max-w-6xl mx-auto bg-bg border border-border rounded-xl shadow-2xl overflow-hidden relative group">
<div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

<div className="h-8 bg-surface border-b border-border flex items-center px-3 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-accentSec/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-warning/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-success/50"></div>
</div>
<div className="flex h-[600px] md:h-[700px]">

<div className="w-16 md:w-64 bg-surface border-r border-border flex flex-col justify-between py-6">
<div className="px-4 flex flex-col gap-6">
<div className="flex items-center gap-3 px-2 text-accent">
<span className="iconify" data-icon="lucide:layout-grid" data-width="20"></span>
<span className="hidden md:block font-medium text-sm">Dashboard</span>
</div>
<div className="flex flex-col gap-1">
<div className="text-xs font-medium text-muted/50 px-2 mb-2 hidden md:block">JOURNALS</div>
<a className="flex items-center gap-3 px-2 py-2 text-muted hover:text-text hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
<span className="hidden md:block text-sm">Trade Log</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-muted hover:text-text hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:layers" data-width="18"></span>
<span className="hidden md:block text-sm">Strategies</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-muted hover:text-text hover:bg-white/5 rounded-md transition-colors" href="#">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="18"></span>
<span className="hidden md:block text-sm">Analytics</span>
</a>
</div>
</div>
<div className="px-4">
<div className="flex items-center gap-3 px-2 py-2 text-muted hover:text-text cursor-pointer">
<span className="iconify" data-icon="lucide:settings" data-width="18"></span>
<span className="hidden md:block text-sm">Settings</span>
</div>
</div>
</div>

<div className="flex-1 bg-bg p-6 overflow-auto">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="bg-surface border border-border p-4 rounded-lg">
<div className="text-xs text-muted mb-1">Total Equity</div>
<div className="text-xl font-semibold tracking-tight">$104,217.50</div>
<div className="text-xs text-success flex items-center gap-1 mt-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> +1.2%
                            </div>
</div>
<div className="bg-surface border border-border p-4 rounded-lg">
<div className="text-xs text-muted mb-1">Win Rate (Mon)</div>
<div className="text-xl font-semibold tracking-tight">62.5%</div>
<div className="text-xs text-muted mt-1">16 Trades</div>
</div>
<div className="bg-surface border border-border p-4 rounded-lg">
<div className="text-xs text-muted mb-1">Avg R:R</div>
<div className="text-xl font-semibold tracking-tight">1:2.4</div>
<div className="text-xs text-muted mt-1">Target: 1:2.0</div>
</div>
<div className="bg-surface border border-border p-4 rounded-lg relative overflow-hidden">
<div className="absolute right-0 top-0 p-4 opacity-10">
<span className="iconify text-accentSec" data-icon="lucide:alert-triangle" data-width="40"></span>
</div>
<div className="text-xs text-muted mb-1">Daily Drawdown</div>
<div className="text-xl font-semibold tracking-tight text-text">-0.8%</div>
<div className="text-xs text-muted mt-1">Limit: 3.0%</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 bg-surface border border-border rounded-lg p-5">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium">Equity Curve</h3>
<div className="flex gap-2">
<span className="text-xs text-muted bg-bg px-2 py-1 rounded border border-border">1W</span>
<span className="text-xs text-text bg-bg px-2 py-1 rounded border border-accent/30">1M</span>
</div>
</div>
<div className="h-48 flex items-end justify-between gap-1 px-2 border-b border-l border-border/50 relative">

<div className="w-full bg-gradient-to-t from-accent/10 to-transparent h-[40%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-accent/10 to-transparent h-[55%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-accent/10 to-transparent h-[45%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-accent/10 to-transparent h-[70%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-accent/10 to-transparent h-[60%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-accent/10 to-transparent h-[85%] rounded-t-sm bg-accent/20"></div>

<svg className="absolute inset-0 w-full h-full p-2" preserveaspectratio="none">
<path d="M0 150 L50 120 L100 130 L150 90 L200 100 L250 40" fill="none" stroke="#00d1ff" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="bg-surface border border-border rounded-lg p-5">
<h3 className="text-sm font-medium mb-4">Top Strategy</h3>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-text">1m Breakout</span>
<span className="text-xs text-success bg-success/10 px-2 py-0.5 rounded-full">Active</span>
</div>
<div className="space-y-3 mt-4">
<div className="flex justify-between text-xs">
<span className="text-muted">Exp. Value</span>
<span className="text-text font-medium">0.6R</span>
</div>
<div className="w-full bg-bg h-1.5 rounded-full overflow-hidden">
<div className="bg-accent h-full w-[60%]"></div>
</div>
<div className="flex justify-between text-xs">
<span className="text-muted">Win Rate</span>
<span className="text-text font-medium">58%</span>
</div>
<div className="w-full bg-bg h-1.5 rounded-full overflow-hidden">
<div className="bg-success h-full w-[58%]"></div>
</div>
</div>
</div>
</div>

<div className="bg-surface border border-border rounded-lg overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-border">
<h3 className="text-sm font-medium">Recent Trades</h3>
<button className="text-xs text-accent hover:underline">View Log</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="bg-bg text-muted border-b border-border">
<tr>
<th className="p-3 font-medium">Time</th>
<th className="p-3 font-medium">Symbol</th>
<th className="p-3 font-medium">Side</th>
<th className="p-3 font-medium">Setup</th>
<th className="p-3 font-medium text-right">Size</th>
<th className="p-3 font-medium text-right">P&amp;L</th>
<th className="p-3 font-medium text-center">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-border">
<tr className="hover:bg-bg/50 transition-colors group">
<td className="p-3 text-muted">14:32</td>
<td className="p-3 font-medium">XAUUSD</td>
<td className="p-3"><span className="text-success">Buy</span></td>
<td className="p-3"><span className="bg-border px-1.5 py-0.5 rounded text-xxs uppercase tracking-wide">Breakout</span></td>
<td className="p-3 text-right">0.03</td>
<td className="p-3 text-right text-accentSec">- $3.32</td>
<td className="p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-muted hover:text-text"><span className="iconify" data-icon="lucide:edit-2" data-width="14"></span></button>
</td>
</tr>
<tr className="hover:bg-bg/50 transition-colors group">
<td className="p-3 text-muted">11:15</td>
<td className="p-3 font-medium">EURUSD</td>
<td className="p-3"><span className="text-accentSec">Sell</span></td>
<td className="p-3"><span className="bg-border px-1.5 py-0.5 rounded text-xxs uppercase tracking-wide">Supply</span></td>
<td className="p-3 text-right">1.50</td>
<td className="p-3 text-right text-success">+ $142.10</td>
<td className="p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-muted hover:text-text"><span className="iconify" data-icon="lucide:edit-2" data-width="14"></span></button>
</td>
</tr>
<tr className="hover:bg-bg/50 transition-colors group">
<td className="p-3 text-muted">09:41</td>
<td className="p-3 font-medium">NAS100</td>
<td className="p-3"><span className="text-success">Buy</span></td>
<td className="p-3"><span className="bg-border px-1.5 py-0.5 rounded text-xxs uppercase tracking-wide">FVG</span></td>
<td className="p-3 text-right">0.50</td>
<td className="p-3 text-right text-success">+ $85.50</td>
<td className="p-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-muted hover:text-text"><span className="iconify" data-icon="lucide:edit-2" data-width="14"></span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Built for Funded Traders</h2>
<p className="text-muted max-w-2xl">Connect multiple accounts, log trades automatically, and analyze performance in one private dashboard.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/30 transition-all duration-300 card-hover">
<div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center mb-4 text-accent">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-2">Multi-Account Management</h3>
<p className="text-sm text-muted leading-relaxed">
                    View all your funded accounts in one dashboard. Track balances, equity, and used margin across different providers.
                </p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/30 transition-all duration-300 card-hover">
<div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center mb-4 text-accent">
<span className="iconify" data-icon="lucide:download-cloud" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-2">Automated Trade Import</h3>
<p className="text-sm text-muted leading-relaxed">
                    Sync trades via CSV, MT4/MT5, or API. Stop manually entering numbers and focus on reviewing execution.
                </p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/30 transition-all duration-300 card-hover">
<div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center mb-4 text-accent">
<span className="iconify" data-icon="lucide:book-open-check" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-2">Strategy Journals</h3>
<p className="text-sm text-muted leading-relaxed">
                    Define entry rules, track setups, and calculate expectancy per strategy to know exactly where your edge lies.
                </p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/30 transition-all duration-300 card-hover">
<div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center mb-4 text-accent">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-2">Performance Analytics</h3>
<p className="text-sm text-muted leading-relaxed">
                    Deep dive into P&amp;L, win rate, drawdown curves, and hour-of-day heatmaps to optimize your trading habits.
                </p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/30 transition-all duration-300 card-hover">
<div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center mb-4 text-accentSec">
<span className="iconify" data-icon="lucide:shield-alert" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-2">Risk Management</h3>
<p className="text-sm text-muted leading-relaxed">
                    Position sizing calculators and daily loss limit alerts help you protect your capital and keep your funded account.
                </p>
</div>

<div className="bg-surface border border-border p-6 rounded-xl hover:border-accent/30 transition-all duration-300 card-hover">
<div className="w-10 h-10 rounded-lg bg-bg border border-border flex items-center justify-center mb-4 text-accent">
<span className="iconify" data-icon="lucide:lock" data-width="20"></span>
</div>
<h3 className="text-lg font-medium mb-2">Private &amp; Secure</h3>
<p className="text-sm text-muted leading-relaxed">
                    Local-first design. Your data belongs to you. No memberships, no public sharing, and optional encrypted backups.
                </p>
</div>
</div>
</section>

<section className="border-y border-border bg-surface/30">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="relative">
<div className="text-4xl font-bold text-border absolute -top-8 -left-4 md:-left-6 opacity-40">01</div>
<h4 className="text-lg font-medium mb-3 relative z-10">Connect Accounts</h4>
<p className="text-sm text-muted">Import your funded accounts via CSV, MT4/MT5, or API integration in seconds.</p>
</div>
<div className="relative">
<div className="text-4xl font-bold text-border absolute -top-8 -left-4 md:-left-6 opacity-40">02</div>
<h4 className="text-lg font-medium mb-3 relative z-10">Log &amp; Tag</h4>
<p className="text-sm text-muted">Trades sync automatically. Add your notes, screenshots, tags, and emotional state.</p>
</div>
<div className="relative">
<div className="text-4xl font-bold text-border absolute -top-8 -left-4 md:-left-6 opacity-40">03</div>
<h4 className="text-lg font-medium mb-3 relative z-10">Refine Edge</h4>
<p className="text-sm text-muted">Analyze the data. Cut losing strategies, scale winning setups, and export reports.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-3xl mx-auto bg-[#0b0f14] border border-accent/20 rounded-2xl p-8 text-center shadow-[0_0_40px_-10px_rgba(0,209,255,0.1)]">
<div className="inline-block p-3 rounded-full bg-surface mb-4">
<span className="iconify text-accent" data-icon="lucide:fingerprint" data-width="24"></span>
</div>
<h2 className="text-2xl font-semibold tracking-tight mb-3">Personal Use Only — No Memberships</h2>
<p className="text-muted mb-8 leading-relaxed">
                This website is built for your personal trading use. By default your data is private, stored locally or encrypted. No monthly fees, no data selling, and you control all exports and backups.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors" href="#">
                Learn about our security architecture <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</section>

<footer className="border-t border-border bg-bg py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-muted" data-icon="lucide:book-key" data-width="18"></span>
<span className="text-sm font-medium text-muted">FundedTrader Journal</span>
</div>
<div className="flex gap-6 text-xs text-muted">
<a className="hover:text-text transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-text transition-colors" href="#">Terms of Service</a>
<a className="hover:text-text transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-muted/50">
                © 2024 FundedTrader Journal. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
