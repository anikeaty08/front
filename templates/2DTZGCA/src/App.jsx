import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50">
<nav className="border-b border-zinc-200/80 bg-white/70 backdrop-blur-xl shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="inline-flex items-center space-x-2" href="/">
<div className="text-zinc-900 text-lg sm:text-xl font-semibold tracking-tight leading-none">CloudQuote</div>
<span className="sr-only">CloudQuote Home</span>
</a>

<div className="hidden lg:flex items-center space-x-2">
<a className="px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="/products/api">API Directory</a>
<a className="px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="/data-coverage">Data Coverage</a>

<div className="relative group">
<button className="inline-flex items-center px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
                Billing
                <i className="ml-1 h-4 w-4 text-zinc-600" data-lucide="chevron-down"></i>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 ease-out absolute right-0 mt-2 w-48 rounded-lg border border-zinc-200 bg-white/80 backdrop-blur-xl shadow-sm p-1">
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/invoice">Invoices</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/correspondence">Correspondence</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/ledger">Ledger</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/newsrpm">NewsRPM</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/usage">API Usage</a>
</div>
</div>

<div className="relative group">
<button className="inline-flex items-center px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
                Admin
                <i className="ml-1 h-4 w-4 text-zinc-600" data-lucide="chevron-down"></i>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 ease-out absolute right-0 mt-2 w-48 rounded-lg border border-zinc-200 bg-white/80 backdrop-blur-xl shadow-sm p-1">
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/account">Accounts</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/article">Articles</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/platform">Platform</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/product">Products</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/user">Users</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/vendor">Vendor</a>
</div>
</div>

<div className="relative group">
<button className="inline-flex items-center px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
                My Account
                <i className="ml-1 h-4 w-4 text-zinc-600" data-lucide="chevron-down"></i>
</button>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 ease-out absolute right-0 mt-2 w-56 rounded-lg border border-zinc-200 bg-white/80 backdrop-blur-xl shadow-sm p-1">
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/password">Change Password</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/deployment">Deployments</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/invoice">Invoices</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/profile">My Profile</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/syndicatedContent">Syndicated Content</a>
</div>
</div>
<a className="px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="/logout">Logout</a>
<a className="px-3 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="/contact">Contact Us</a>
</div>

<button aria-label="Open Menu" className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-colors" id="mobileMenuBtn">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="lg:hidden hidden border-t border-zinc-200 bg-white/70 backdrop-blur-xl" id="mobileMenu">
<div className="px-4 py-3 space-y-1">
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/products/api">API Directory</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/data-coverage">Data Coverage</a>
<details className="px-1">
<summary className="px-2 py-2 text-sm text-zinc-700 cursor-pointer rounded-md hover:bg-zinc-100">Billing</summary>
<div className="pl-4 py-1 space-y-1">
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/invoice">Invoices</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/correspondence">Correspondence</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/ledger">Ledger</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/newsrpm">NewsRPM</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/billing/usage">API Usage</a>
</div>
</details>
<details className="px-1">
<summary className="px-2 py-2 text-sm text-zinc-700 cursor-pointer rounded-md hover:bg-zinc-100">Admin</summary>
<div className="pl-4 py-1 space-y-1">
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/account">Accounts</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/article">Articles</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/platform">Platform</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/product">Products</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/user">Users</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/admin/vendor">Vendor</a>
</div>
</details>
<details className="px-1">
<summary className="px-2 py-2 text-sm text-zinc-700 cursor-pointer rounded-md hover:bg-zinc-100">My Account</summary>
<div className="pl-4 py-1 space-y-1">
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/password">Change Password</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/deployment">Deployments</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/invoice">Invoices</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/profile">My Profile</a>
<a className="block px-2 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/account/syndicatedContent">Syndicated Content</a>
</div>
</details>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/logout">Logout</a>
<a className="block px-3 py-2 text-sm rounded-md hover:bg-zinc-100 text-zinc-700" href="/contact">Contact Us</a>
</div>
</div>
</nav>
</header>

<section className="relative">

<div className="absolute inset-0">
<img alt="" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{animation: 'fadeInBlur 1.2s ease-out both'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-zinc-100/90"></div>
<div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-24">
<div className="grid lg:grid-cols-2 gap-8 items-center">

<div className="space-y-6" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.05s'}}>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900">
            On‑Demand Financial APIs
          </h1>
<p className="text-zinc-700 text-base sm:text-lg">
            Instant access to millions of datapoints in JSON format. Build faster with reliable, enterprise-grade market data.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
<a className="inline-flex items-center justify-center rounded-md bg-blue-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-blue-600 transition-colors border border-blue-500 shadow-sm" href="/products/api">
              Explore API Directory
              <i className="ml-2 h-4 w-4 text-white" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md bg-white/60 backdrop-blur-xl border border-zinc-200 px-5 py-2.5 text-sm text-zinc-800 hover:bg-white transition-colors shadow-sm" href="/data-coverage">
              View Data Coverage
            </a>
</div>

<div className="pt-4">
<p className="text-xs uppercase tracking-wide text-zinc-500 mb-3">Trusted by data-driven teams</p>
<div className="flex flex-wrap items-center gap-3">
<div className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white/70 shadow-sm text-xs font-medium tracking-tight text-zinc-700">SDS</div>
<div className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white/70 shadow-sm text-xs font-medium tracking-tight text-zinc-700">BATS</div>
<div className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white/70 shadow-sm text-xs font-medium tracking-tight text-zinc-700">NASDAQ</div>
<div className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white/70 shadow-sm text-xs font-medium tracking-tight text-zinc-700">NYSE</div>
<div className="px-3 py-1.5 rounded-md border border-zinc-200 bg-white/70 shadow-sm text-xs font-medium tracking-tight text-zinc-700">TMX</div>
</div>
</div>
</div>

<div className="relative" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.15s'}}>
<div className="rounded-2xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-500" data-lucide="cloud"></i>
<span className="text-sm text-zinc-700">CloudQuote REST</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-green-500/80"></span>
<span className="text-xs text-zinc-500">Live</span>
</div>
</div>
<div className="mt-4 rounded-lg bg-zinc-50 border border-zinc-200 overflow-hidden">
<div className="flex items-center gap-1 px-3 py-2 border-b border-zinc-200">
<span className="h-2 w-2 rounded-full bg-zinc-300"></span>
<span className="h-2 w-2 rounded-full bg-zinc-300"></span>
<span className="h-2 w-2 rounded-full bg-zinc-300"></span>
<span className="ml-2 text-xs text-zinc-500">GET /v1/quotes</span>
</div>
<pre className="text-[12px] leading-5 p-4 overflow-x-auto text-zinc-800"><code>{
  "symbol": "AAPL",
  "price": 222.37,
  "change": -0.41,
  "timestamp": "2024-08-01T14:32:10Z"
}</code></pre>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-zinc-200 bg-white/60 backdrop-blur-xl p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-500" data-lucide="zap"></i>
<p className="text-xs text-zinc-700">Latency</p>
</div>
<p className="text-xs font-medium text-zinc-900">~60ms</p>
</div>
</div>
<div className="rounded-lg border border-zinc-200 bg-white/60 backdrop-blur-xl p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-500" data-lucide="shield-check"></i>
<p className="text-xs text-zinc-700">SLA</p>
</div>
<p className="text-xs font-medium text-zinc-900">99.9%</p>
</div>
</div>
<div className="rounded-lg border border-zinc-200 bg-white/60 backdrop-blur-xl p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-500" data-lucide="database"></i>
<p className="text-xs text-zinc-700">Datapoints</p>
</div>
<p className="text-xs font-medium text-zinc-900">Millions</p>
</div>
</div>
<div className="rounded-lg border border-zinc-200 bg-white/60 backdrop-blur-xl p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-500" data-lucide="lock"></i>
<p className="text-xs text-zinc-700">Auth</p>
</div>
<p className="text-xs font-medium text-zinc-900">API Key</p>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-600">
<i className="h-4 w-4 text-blue-500" data-lucide="check-circle"></i>
<span>JSON • XML • CSV</span>
</div>
<a className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700" href="/products/api">
                View endpoints
                <i className="ml-1 h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-zinc-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-8">
<div className="space-y-2" style={{animation: 'fadeIn .8s ease-out both'}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Our Data</h2>
<p className="text-zinc-600 text-sm sm:text-base">Top quality data from exchanges and providers worldwide, delivered in realtime.</p>
</div>
<a className="hidden sm:inline-flex items-center text-sm text-blue-600 hover:text-blue-700" href="/data-coverage" style={{animation: 'fadeIn .8s ease-out both', animationDelay: '.05s'}}>
          Data Coverage
          <i className="ml-1 h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-4 sm:gap-6" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.05s'}}>

<div className="rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-5">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg border border-zinc-200 bg-white/70 flex items-center justify-center">
<i className="h-4 w-4 text-blue-500" data-lucide="clock"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Timely and Accurate</h3>
</div>
<p className="text-sm text-zinc-700">Top quality data, delivered in realtime from exchanges &amp; providers around the world.</p>
</div>

<div className="rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-5">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg border border-zinc-200 bg-white/70 flex items-center justify-center">
<i className="h-4 w-4 text-blue-500" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Lightning-fast development</h3>
</div>
<p className="text-sm text-zinc-700">Easy to implement APIs that output JSON, XML, and CSV, ready for platforms like Excel and CMS.</p>
</div>

<div className="rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-5">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg border border-zinc-200 bg-white/70 flex items-center justify-center">
<i className="h-4 w-4 text-blue-500" data-lucide="badge-dollar-sign"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">One Contract, Low Pricing</h3>
</div>
<p className="text-sm text-zinc-700">Get everything you need under a single contract with discounts for multiple datasets.</p>
</div>
</div>

<div className="mt-10 sm:mt-12">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-zinc-900 mb-4">Data Sources</h3>
<div className="rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-4">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">

<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.sagedataservice.com" target="_blank">Sage Data</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.financialcontent.com" target="_blank">FinancialContent</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.streetinsider.com" target="_blank">StreetInsider</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.barchart.com" target="_blank">Barchart</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.exchange-data.com" target="_blank">X-Data</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.bravenewcoin.com" target="_blank">BraveNewCoin</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.nasdaqomx.com" target="_blank">NASDAQ OMX</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.nyse.com" target="_blank">NYSE</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="https://www.tmx.com/" target="_blank">TMX</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.finra.org" target="_blank">FINRA</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-zinc-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="space-y-2 mb-8" style={{animation: 'fadeIn .8s ease-out both'}}>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">News Solutions</h2>
<p className="text-zinc-600 text-sm sm:text-base">Deliver timely, high-quality news with private hosting and monetization options.</p>
</div>
<div className="grid md:grid-cols-3 gap-4 sm:gap-6" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.05s'}}>

<div className="rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-5">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg border border-zinc-200 bg-white/70 flex items-center justify-center">
<i className="h-4 w-4 text-blue-500" data-lucide="newspaper"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Quality News</h3>
</div>
<p className="text-sm text-zinc-700">NewsRPM delivers timely news from 100+ major publishers worldwide.</p>
</div>

<div className="rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-5">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg border border-zinc-200 bg-white/70 flex items-center justify-center">
<i className="h-4 w-4 text-blue-500" data-lucide="server"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Privately Hosted</h3>
</div>
<p className="text-sm text-zinc-700">Each customer has a private NewsRPM instance to control and filter content.</p>
</div>

<div className="rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-5">
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-lg border border-zinc-200 bg-white/70 flex items-center justify-center">
<i className="h-4 w-4 text-blue-500" data-lucide="banknote"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Monetization Opportunities</h3>
</div>
<p className="text-sm text-zinc-700">Run paid placements to add an additional revenue stream to your site.</p>
</div>
</div>

<div className="mt-10 sm:mt-12">
<h3 className="text-base sm:text-lg font-medium tracking-tight text-zinc-900 mb-4">Content Providers</h3>
<div className="rounded-xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm p-4">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.prconnect.com" target="_blank">PRConnect</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.prbuzz.com" target="_blank">PRBuzz</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.prnewswire.com" target="_blank">PR Newswire</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.businesswire.com" target="_blank">Business Wire</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.marketwired.com" target="_blank">Marketwired</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="https://www.actusnews.com/en/" target="_blank">Actusnews</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="https://newsdirect.com/" target="_blank">NewsDirect</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.accesswire.com" target="_blank">Accesswire</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.prweb.com" target="_blank">PRWeb</a>
<a className="flex items-center justify-center h-12 rounded-md border border-zinc-200 bg-white/70 text-xs font-medium text-zinc-700 hover:border-zinc-300 transition-colors" href="http://www.globenewswire.com" target="_blank">GlobeNewswire</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-zinc-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-zinc-200 bg-white/60 backdrop-blur-xl shadow-sm px-6 py-6 sm:px-8 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{animation: 'fadeUp .8s ease-out both', animationDelay: '.05s'}}>
<div>
<h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900">Build with confidence</h3>
<p className="text-sm text-zinc-600 mt-1">Start integrating financial data in minutes.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-blue-500 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-600 transition-colors border border-blue-500 shadow-sm" href="/products/api">
            Browse APIs
            <i className="ml-2 h-4 w-4 text-white" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md bg-white/60 backdrop-blur-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-800 hover:bg-white transition-colors shadow-sm" href="/contact">
            Contact Sales
          </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-3 gap-8">
<div>
<div className="text-zinc-900 text-lg font-semibold tracking-tight mb-3">FinancialContent</div>
<ul className="space-y-2 text-sm">
<li>
<a className="text-zinc-600 hover:text-zinc-900" href="https://www.google.com/maps/place/FinancialContent/@37.5141456,-122.2639589,15z/data=!4m2!3m1!1s0x0:0xaff3350de005c778?sa=X&amp;ved=2ahUKEwiz45CC79_iAhUZHjQIHZZ2AIIQ_BIwDXoECAgQCA" target="_blank">
                195 Glenn Way Suite 250<br/>San Carlos, CA 94070
              </a>
</li>
<li><a className="text-zinc-600 hover:text-zinc-900" href="tel:888-688-9880">(888) 688-9880</a></li>
</ul>
</div>
<div>
<div className="text-zinc-900 text-lg font-medium tracking-tight mb-3">Learn More</div>
<ul className="space-y-2 text-sm">
<li><a className="text-zinc-600 hover:text-zinc-900" href="/article/tutorials">Tutorials &amp; Integration Guides</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900" href="/products/api">API Directory</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900" href="/data-coverage">Data Coverage</a></li>
</ul>
</div>
<div>
<div className="text-zinc-900 text-lg font-medium tracking-tight mb-3">Company</div>
<ul className="space-y-2 text-sm">
<li><a className="text-zinc-600 hover:text-zinc-900" href="/article/about-us">About Us</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900" href="/contact">Contact Us</a></li>
<li><a className="text-zinc-600 hover:text-zinc-900" href="/article/jobs">Jobs</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs text-zinc-500">© Copyright 2024 FinancialContent Services, Inc.</p>
<div className="flex items-center gap-4 text-xs">
<a className="text-zinc-600 hover:text-zinc-900" href="/article/5">Terms</a>
<span className="text-zinc-300">|</span>
<a className="text-zinc-600 hover:text-zinc-900" href="/article/6">Privacy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
