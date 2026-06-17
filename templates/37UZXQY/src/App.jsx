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
      
    // Initialize lucide icons with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    // Mobile menu toggle
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
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
      

<header className="sticky top-0 z-50">
<nav className="relative bg-gradient-to-b from-neutral-900/90 to-neutral-800/70 backdrop-blur-2xl ring-1 ring-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_18px_50px_rgba(0,0,0,0.55)]">
<div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(800px 200px at 50% 0%, rgba(59,130,246,0.18), transparent 60%)'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="inline-flex items-center space-x-2" href="/">
<div className="text-neutral-100 text-lg sm:text-xl font-semibold tracking-tight leading-none">CloudQuote</div>
<span className="sr-only">CloudQuote Home</span>
</a>

<div className="hidden lg:flex items-center gap-1">
<a className="px-3 py-2 text-sm font-medium text-neutral-100/90 hover:text-white hover:bg-white/10 rounded-md transition-colors" href="/products/api">API Directory</a>
<a className="px-3 py-2 text-sm font-medium text-neutral-100/90 hover:text-white hover:bg-white/10 rounded-md transition-colors" href="/data-coverage">Data Coverage</a>

<div className="relative group">
<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-neutral-100/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Billing
                <i className="ml-1 h-4 w-4 text-neutral-300" data-lucide="chevron-down"></i>
</button>
<div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 ease-out absolute right-0 mt-2 w-48 rounded-lg bg-neutral-900/90 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 p-1">
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/invoice">Invoices</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/correspondence">Correspondence</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/ledger">Ledger</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/newsrpm">NewsRPM</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/usage">API Usage</a>
</div>
</div>

<div className="relative group">
<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-neutral-100/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Admin
                <i className="ml-1 h-4 w-4 text-neutral-300" data-lucide="chevron-down"></i>
</button>
<div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 ease-out absolute right-0 mt-2 w-48 rounded-lg bg-neutral-900/90 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 p-1">
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/account">Accounts</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/article">Articles</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/platform">Platform</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/product">Products</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/user">Users</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/vendor">Vendor</a>
</div>
</div>

<div className="relative group">
<button className="inline-flex items-center px-3 py-2 text-sm font-medium text-neutral-100/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                My Account
                <i className="ml-1 h-4 w-4 text-neutral-300" data-lucide="chevron-down"></i>
</button>
<div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 ease-out absolute right-0 mt-2 w-56 rounded-lg bg-neutral-900/90 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 p-1">
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/password">Change Password</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/deployment">Deployments</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/invoice">Invoices</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/profile">My Profile</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/syndicatedContent">Syndicated Content</a>
</div>
</div>
<a className="px-3 py-2 text-sm font-medium text-neutral-100/90 hover:text-white hover:bg-white/10 rounded-md transition-colors" href="/logout">Logout</a>
<a className="px-3 py-2 text-sm font-medium text-neutral-100/90 hover:text-white hover:bg-white/10 rounded-md transition-colors" href="/contact">Contact Us</a>
</div>

<button aria-label="Open Menu" className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-200 hover:text-white hover:bg-white/10 transition-colors" id="mobileMenuBtn">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="lg:hidden hidden border-t border-white/10 bg-neutral-900/80 backdrop-blur-xl" id="mobileMenu">
<div className="px-4 py-3 space-y-1">
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/products/api">API Directory</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/data-coverage">Data Coverage</a>
<details className="px-1">
<summary className="px-2 py-2 text-sm text-neutral-200 cursor-pointer rounded-md hover:bg-white/10">Billing</summary>
<div className="pl-4 py-1 space-y-1">
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/invoice">Invoices</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/correspondence">Correspondence</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/ledger">Ledger</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/newsrpm">NewsRPM</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/billing/usage">API Usage</a>
</div>
</details>
<details className="px-1">
<summary className="px-2 py-2 text-sm text-neutral-200 cursor-pointer rounded-md hover:bg-white/10">Admin</summary>
<div className="pl-4 py-1 space-y-1">
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/account">Accounts</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/article">Articles</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/platform">Platform</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/product">Products</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/user">Users</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/admin/vendor">Vendor</a>
</div>
</details>
<details className="px-1">
<summary className="px-2 py-2 text-sm text-neutral-200 cursor-pointer rounded-md hover:bg-white/10">My Account</summary>
<div className="pl-4 py-1 space-y-1">
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/password">Change Password</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/deployment">Deployments</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/invoice">Invoices</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/profile">My Profile</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/account/syndicatedContent">Syndicated Content</a>
</div>
</details>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/logout">Logout</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 text-neutral-200" href="/contact">Contact Us</a>
</div>
</div>

<div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</nav>
</header>

<section className="relative">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute inset-0 opacity-90" style={{background: 'radial-gradient(1200px 600px at 10% 10%, rgba(59, 130, 246, 0.28), transparent 60%), radial-gradient(1000px 500px at 90% 20%, rgba(56, 189, 248, 0.22), transparent 60%), radial-gradient(900px 500px at 50% 90%, rgba(168, 85, 247, 0.22), transparent 60%)', filter: 'blur(20px)', animation: 'fadeInBlur 1.2s ease-out both'}}></div>
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-50" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(59, 130, 246, 0.25), rgba(168, 85, 247, 0.15), rgba(56, 189, 248, 0.25), rgba(59, 130, 246, 0.25))', filter: 'blur(32px)', animation: 'gradientShift 20s ease-in-out infinite'}}></div>
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0px, rgba(255, 255, 255, 0.04) 1px, transparent 1px, transparent 26px)', maskImage: 'radial-gradient(70% 60% at 50% 30%, black, transparent)'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/40 to-neutral-950"></div>
<div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-24">
<div className="grid lg:grid-cols-2 gap-8 items-center">

<div className="space-y-6" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.05s'}}>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            On‑Demand Financial APIs
          </h1>
<p className="text-neutral-300 text-base sm:text-lg">
            Instant access to millions of datapoints in JSON format. Build faster with reliable, enterprise-grade market data.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
<a className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2.5 text-sm font-medium hover:from-blue-400 hover:to-indigo-400 transition-colors shadow-[0_8px_30px_rgba(59,130,246,0.45)] focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-0" href="/products/api">
              Explore API Directory
              <i className="ml-2 h-4 w-4 text-white" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md bg-white/5 backdrop-blur-xl ring-1 ring-white/15 px-5 py-2.5 text-sm text-neutral-200 hover:bg-white/10 hover:ring-white/20 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" href="/data-coverage">
              View Data Coverage
            </a>
</div>

<div className="pt-4">
<p className="text-xs uppercase tracking-wide text-neutral-400 mb-3">Trusted by data-driven teams</p>
<div className="flex flex-wrap items-center gap-3">
<div className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/15 shadow-sm text-xs font-medium tracking-tight text-neutral-200">SDS</div>
<div className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/15 shadow-sm text-xs font-medium tracking-tight text-neutral-200">BATS</div>
<div className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/15 shadow-sm text-xs font-medium tracking-tight text-neutral-200">NASDAQ</div>
<div className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/15 shadow-sm text-xs font-medium tracking-tight text-neutral-200">NYSE</div>
<div className="px-3 py-1.5 rounded-md bg-white/5 ring-1 ring-white/15 shadow-sm text-xs font-medium tracking-tight text-neutral-200">TMX</div>
</div>
</div>
</div>

<div className="relative" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.15s'}}>
<div className="rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-5" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-400" data-lucide="cloud"></i>
<span className="text-sm text-neutral-300">CloudQuote REST</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400/90 animate-pulse"></span>
<span className="text-xs text-neutral-400">Live</span>
</div>
</div>
<div className="mt-4 rounded-lg bg-neutral-900/70 ring-1 ring-white/10 overflow-hidden shadow-inner">
<div className="flex items-center gap-1 px-3 py-2 border-b border-white/10">
<span className="h-2 w-2 rounded-full bg-neutral-500/60"></span>
<span className="h-2 w-2 rounded-full bg-neutral-500/60"></span>
<span className="h-2 w-2 rounded-full bg-neutral-500/60"></span>
<span className="ml-2 text-xs text-neutral-400">GET /v1/quotes</span>
</div>
<pre className="text-[12px] leading-5 p-4 overflow-x-auto text-neutral-100"><code>{
  "symbol": "AAPL",
  "price": 222.37,
  "change": -0.41,
  "timestamp": "2024-08-01T14:32:10Z"
}</code></pre>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-white/5 backdrop-blur-xl p-3 ring-1 ring-white/10 shadow-sm" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-400" data-lucide="zap"></i>
<p className="text-xs text-neutral-300">Latency</p>
</div>
<p className="text-xs font-medium text-white">~60ms</p>
</div>
</div>
<div className="rounded-lg bg-white/5 backdrop-blur-xl p-3 ring-1 ring-white/10 shadow-sm" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-400" data-lucide="shield-check"></i>
<p className="text-xs text-neutral-300">SLA</p>
</div>
<p className="text-xs font-medium text-white">99.9%</p>
</div>
</div>
<div className="rounded-lg bg-white/5 backdrop-blur-xl p-3 ring-1 ring-white/10 shadow-sm" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-400" data-lucide="database"></i>
<p className="text-xs text-neutral-300">Datapoints</p>
</div>
<p className="text-xs font-medium text-white">Millions</p>
</div>
</div>
<div className="rounded-lg bg-white/5 backdrop-blur-xl p-3 ring-1 ring-white/10 shadow-sm" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-400" data-lucide="lock"></i>
<p className="text-xs text-neutral-300">Auth</p>
</div>
<p className="text-xs font-medium text-white">API Key</p>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-neutral-300">
<i className="h-4 w-4 text-blue-400" data-lucide="check-circle"></i>
<span>JSON • XML • CSV</span>
</div>
<a className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300" href="/products/api">
                View endpoints
                <i className="ml-1 h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-blue-500/25 blur-2xl" style={{animation: 'float 6s ease-in-out infinite'}}></div>
</div>
</div>
</div>
</section>

<section className="relative py-12 sm:py-16 border-t border-white/10">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0px, rgba(255, 255, 255, 0.035) 1px, transparent 1px, transparent 28px)', maskImage: 'radial-gradient(80% 60% at 50% 40%, black, transparent)'}}></div>
<div className="absolute -top-24 right-[-10%] w-[600px] h-[600px] rounded-full opacity-30 blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(59,130,246,0.25), transparent 70%)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-8">
<div className="space-y-2" style={{animation: 'fadeIn .8s ease-out both'}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Our Data</h2>
<p className="text-neutral-300 text-sm sm:text-base">Top quality data from exchanges and providers worldwide, delivered in realtime.</p>
</div>
<a className="hidden sm:inline-flex items-center text-sm text-blue-400 hover:text-blue-300" href="/data-coverage" style={{animation: 'fadeIn .8s ease-out both', animationDelay: '.05s'}}>
          Data Coverage
          <i className="ml-1 h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-4 sm:gap-6" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.05s'}}>

<div className="rounded-xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-5" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-blue-400" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Timely and Accurate</h3>
</div>
<p className="text-sm text-neutral-300">Top quality data, delivered in realtime from exchanges &amp; providers around the world.</p>
</div>

<div className="rounded-xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-5" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-blue-400" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Lightning-fast development</h3>
</div>
<p className="text-sm text-neutral-300">Easy to implement APIs that output JSON, XML, and CSV, ready for platforms like Excel and CMS.</p>
</div>

<div className="rounded-xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-5" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-blue-400" data-lucide="badge-dollar-sign"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">One Contract, Low Pricing</h3>
</div>
<p className="text-sm text-neutral-300">Get everything you need under a single contract with discounts for multiple datasets.</p>
</div>
</div>

<div className="mt-10 sm:mt-12">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white mb-4">Data Sources</h3>
<div className="rounded-xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-4" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'}}>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">

<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.sagedataservice.com" target="_blank">Sage Data</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.financialcontent.com" target="_blank">FinancialContent</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.streetinsider.com" target="_blank">StreetInsider</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.barchart.com" target="_blank">Barchart</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.exchange-data.com" target="_blank">X-Data</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.bravenewcoin.com" target="_blank">BraveNewCoin</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.nasdaqomx.com" target="_blank">NASDAQ OMX</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.nyse.com" target="_blank">NYSE</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="https://www.tmx.com/" target="_blank">TMX</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.finra.org" target="_blank">FINRA</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-12 sm:py-16 border-t border-white/10">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 opacity-18" style={{backgroundImage: 'repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.035) 0px, rgba(255, 255, 255, 0.035) 1px, transparent 1px, transparent 28px)', maskImage: 'radial-gradient(80% 60% at 50% 40%, black, transparent)'}}></div>
<div className="absolute -bottom-32 left-[-10%] w-[640px] h-[640px] rounded-full opacity-25 blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(168,85,247,0.28), transparent 70%)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="space-y-2 mb-8" style={{animation: 'fadeIn .8s ease-out both'}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">News Solutions</h2>
<p className="text-neutral-300 text-sm sm:text-base">Deliver timely, high-quality news with private hosting and monetization options.</p>
</div>
<div className="grid md:grid-cols-3 gap-4 sm:gap-6" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.05s'}}>

<div className="rounded-xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-5" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-blue-400" data-lucide="newspaper"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Quality News</h3>
</div>
<p className="text-sm text-neutral-300">NewsRPM delivers timely news from 100+ major publishers worldwide.</p>
</div>

<div className="rounded-xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-5" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-blue-400" data-lucide="server"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Privately Hosted</h3>
</div>
<p className="text-sm text-neutral-300">Each customer has a private NewsRPM instance to control and filter content.</p>
</div>

<div className="rounded-xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-5" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4 text-blue-400" data-lucide="banknote"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Monetization Opportunities</h3>
</div>
<p className="text-sm text-neutral-300">Run paid placements to add an additional revenue stream to your site.</p>
</div>
</div>

<div className="mt-10 sm:mt-12">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white mb-4">Content Providers</h3>
<div className="rounded-xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 p-4" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'}}>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.prconnect.com" target="_blank">PRConnect</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.prbuzz.com" target="_blank">PRBuzz</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.prnewswire.com" target="_blank">PR Newswire</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.businesswire.com" target="_blank">Business Wire</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.marketwired.com" target="_blank">Marketwired</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="https://www.actusnews.com/en/" target="_blank">Actusnews</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="https://newsdirect.com/" target="_blank">NewsDirect</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.accesswire.com" target="_blank">Accesswire</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.prweb.com" target="_blank">PRWeb</a>
<a className="flex items-center justify-center h-12 rounded-md bg-white/5 ring-1 ring-white/10 text-xs font-medium text-neutral-200 hover:bg-white/10 transition-colors" href="http://www.globenewswire.com" target="_blank">GlobeNewswire</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-10 border-t border-white/10">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 top-0 h-1/2 opacity-30" style={{background: 'linear-gradient(180deg, rgba(59,130,246,0.15), transparent)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl ring-1 ring-white/15 px-6 py-6 sm:px-8 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.05s', background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'}}>
<div>
<h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">Build with confidence</h3>
<p className="text-sm text-neutral-300 mt-1">Start integrating financial data in minutes.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2.5 text-sm font-medium hover:from-blue-400 hover:to-indigo-400 transition-colors shadow-[0_8px_30px_rgba(59,130,246,0.45)] focus:outline-none focus:ring-2 focus:ring-blue-400/50" href="/products/api">
            Browse APIs
            <i className="ml-2 h-4 w-4 text-white" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md bg-white/5 backdrop-blur-xl ring-1 ring-white/15 px-4 py-2.5 text-sm text-neutral-200 hover:bg-white/10 hover:ring-white/20 transition-colors" href="/contact">
            Contact Sales
          </a>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-x-0 -top-8 h-32 opacity-20" style={{background: 'radial-gradient(800px 80px at 50% 0%, rgba(255,255,255,0.12), transparent 70%)'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-3 gap-8">
<div>
<div className="text-white text-lg font-semibold tracking-tight mb-3">FinancialContent</div>
<ul className="space-y-2 text-sm">
<li>
<a className="text-neutral-300 hover:text-white" href="https://www.google.com/maps/place/FinancialContent/@37.5141456,-122.2639589,15z/data=!4m2!3m1!1s0x0:0xaff3350de005c778?sa=X&amp;ved=2ahUKEwiz45CC79_iAhUZHjQIHZZ2AIIQ_BIwDXoECAgQCA" target="_blank">
                195 Glenn Way Suite 250<br/>San Carlos, CA 94070
              </a>
</li>
<li><a className="text-neutral-300 hover:text-white" href="tel:888-688-9880">(888) 688-9880</a></li>
</ul>
</div>
<div>
<div className="text-white text-lg font-medium tracking-tight mb-3">Learn More</div>
<ul className="space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white" href="/article/tutorials">Tutorials &amp; Integration Guides</a></li>
<li><a className="text-neutral-300 hover:text-white" href="/products/api">API Directory</a></li>
<li><a className="text-neutral-300 hover:text-white" href="/data-coverage">Data Coverage</a></li>
</ul>
</div>
<div>
<div className="text-white text-lg font-medium tracking-tight mb-3">Company</div>
<ul className="space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white" href="/article/about-us">About Us</a></li>
<li><a className="text-neutral-300 hover:text-white" href="/contact">Contact Us</a></li>
<li><a className="text-neutral-300 hover:text-white" href="/article/jobs">Jobs</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs text-neutral-400">© Copyright 2024 FinancialContent Services, Inc.</p>
<div className="flex items-center gap-4 text-xs">
<a className="text-neutral-300 hover:text-white" href="/article/5">Terms</a>
<span className="text-neutral-600">|</span>
<a className="text-neutral-300 hover:text-white" href="/article/6">Privacy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
