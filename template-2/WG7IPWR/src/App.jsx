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
      

<div className="relative z-40">
<div className="w-full border-b border-neutral-200/70 bg-white/70 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-2">
<p className="text-[13px] text-neutral-600">
              Introducing new global payout coverage and faster settlement. 
              <a className="ml-2 text-neutral-900 hover:underline" href="#">Learn more</a>
</p>
<div className="hidden md:flex items-center gap-4">
<button className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Status</button>
<button className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">Docs</button>
</div>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-30 bg-white/70 backdrop-blur-xl border-b border-neutral-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center ring-1 ring-neutral-900/10 group-hover:ring-neutral-900/20 transition">
<span className="tracking-tight font-semibold">S</span>
</div>
<span className="sr-only">Home</span>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Products</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Solutions</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Developers</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Resources</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors">
<i className="h-4 w-4" data-lucide="phone"></i>
              Contact sales
            </button>
<button className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors">Sign in</button>
<a className="inline-flex items-center rounded-md bg-neutral-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900/90 transition-colors ring-1 ring-neutral-900/10" href="#">
              Get started
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[980px] rounded-full bg-gradient-to-r from-neutral-200 via-white to-neutral-200 blur-3xl opacity-70"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 w-fit shadow-sm">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              Now supporting 195+ countries and 135+ currencies
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
              Financial infrastructure for ambitious teams
            </h1>
<p className="text-base sm:text-lg text-neutral-600">
              Accept payments, automate financial operations, and grow revenue with a unified platform built for scale and designed for developers.
            </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
<a className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900/90 transition-colors ring-1 ring-neutral-900/10" href="#">
                Start now
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="play-circle"></i>
                Watch demo
              </a>
</div>
<div className="pt-6">
<p className="text-[13px] text-neutral-600">Trusted by fast-growing startups and global enterprises</p>
<div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
<div className="h-10 rounded-md border border-neutral-200 bg-white grid place-items-center text-neutral-900 text-sm font-medium">ALPHA</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white grid place-items-center text-neutral-900 text-sm font-medium">NOVA</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white grid place-items-center text-neutral-900 text-sm font-medium">PIXEL</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white grid place-items-center text-neutral-900 text-sm font-medium">CIRCUIT</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white grid place-items-center text-neutral-900 text-sm font-medium">ZEN</div>
<div className="h-10 rounded-md border border-neutral-200 bg-white grid place-items-center text-neutral-900 text-sm font-medium">ARC</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-neutral-100 to-white blur-xl"></div>
<div className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-red-400"></span>
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
</div>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md bg-neutral-900 text-white">JS</button>
<button className="text-xs px-2 py-1 rounded-md border border-neutral-300 text-neutral-700">Python</button>
<button className="text-xs px-2 py-1 rounded-md border border-neutral-300 text-neutral-700">Go</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-4 sm:p-6 border-r border-neutral-200">
<div className="flex items-center gap-2 text-[13px] text-neutral-500 mb-3">
<i className="h-4 w-4" data-lucide="file-code-2"></i>
                    Checkout in 8 lines
                  </div>
<pre className="text-[12.5px] leading-6 text-neutral-800 bg-neutral-50 rounded-xl border border-neutral-200 p-4 overflow-auto">
<span className="text-fuchsia-700">import</span> {"{"} <span className="text-blue-700">loadStripe</span> {"}"} <span className="text-fuchsia-700">from</span> <span className="text-emerald-700">'@platform/stripe'</span>;

<span className="text-fuchsia-700">const</span> stripe = <span className="text-blue-700">await</span> loadStripe(<span className="text-emerald-700">'pk_live_123'</span>);

<span className="text-fuchsia-700">await</span> stripe.redirectToCheckout({"{"}
  lineItems: [{"{"} price: <span className="text-emerald-700">'price_ABC'</span>, quantity: <span className="text-amber-700">1</span> {"}"}],
  mode: <span className="text-emerald-700">'subscription'</span>,
  successUrl: <span className="text-emerald-700">'/success'</span>,
  cancelUrl: <span className="text-emerald-700">'/cancel'</span>,
{"}"});</pre>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 text-neutral-700 px-2 py-1 text-[12px] ring-1 ring-neutral-200">
<i className="h-3.5 w-3.5" data-lucide="npm"></i> npm i @platform/stripe
                    </span>
<span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 text-neutral-700 px-2 py-1 text-[12px] ring-1 ring-neutral-200">
<i className="h-3.5 w-3.5" data-lucide="terminal"></i> live in minutes
                    </span>
</div>
</div>

<div className="p-4 sm:p-6">
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-500">Authorization rate</p>
<i className="h-4 w-4 text-emerald-600" data-lucide="shield-check"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">98.3%</p>
<p className="text-[13px] text-neutral-500">Adaptive acceptance</p>
</div>
<div className="rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-500">Global reach</p>
<i className="h-4 w-4 text-neutral-700" data-lucide="globe"></i>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">135+</p>
<p className="text-[13px] text-neutral-500">Currencies supported</p>
</div>
</div>
<div className="mt-4 rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-500">Monthly volume</p>
<i className="h-4 w-4 text-neutral-700" data-lucide="line-chart"></i>
</div>
<div className="mt-2">
<div className="w-full">
<div className="relative h-28">
<div className="absolute inset-0">
<div className="h-full">
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

<div className="h-full">
<canvas className="h-full w-full" id="revenueChart"></canvas>
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
<p className="mt-2 text-[13px] text-neutral-500">Realtime reporting with automated reconciliation</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A unified suite for payments and revenue</h2>
<p className="mt-3 text-neutral-600">Use modular building blocks for checkout, subscriptions, marketplaces, fraud, cards, and more—everything works together out of the box.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md transition-shadow" href="#">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-900" data-lucide="credit-card"></i>
<h3 className="text-lg font-semibold tracking-tight">Payments</h3>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">A complete payment platform, optimized for conversion and global coverage.</p>
<div className="mt-4 flex gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Cards</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Wallets</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Bank debits</span>
</div>
</a>
<a className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md transition-shadow" href="#">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-900" data-lucide="repeat"></i>
<h3 className="text-lg font-semibold tracking-tight">Billing</h3>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">Subscriptions, invoicing, and usage-based pricing with proration handled.</p>
<div className="mt-4 flex gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Recurring</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Invoices</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Quotes</span>
</div>
</a>
<a className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md transition-shadow" href="#">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-900" data-lucide="split"></i>
<h3 className="text-lg font-semibold tracking-tight">Connect</h3>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">Onboard and pay out to marketplaces and platforms globally.</p>
<div className="mt-4 flex gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">KYC</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Split</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Payouts</span>
</div>
</a>
<a className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md transition-shadow" href="#">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-900" data-lucide="scan-line"></i>
<h3 className="text-lg font-semibold tracking-tight">Radar</h3>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">Machine learning fraud prevention trained on global network data.</p>
<div className="mt-4 flex gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Score</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Rules</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">3DS</span>
</div>
</a>
<a className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md transition-shadow" href="#">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-900" data-lucide="contact"></i>
<h3 className="text-lg font-semibold tracking-tight">Issuing</h3>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">Create, manage, and control virtual and physical cards programmatically.</p>
<div className="mt-4 flex gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Virtual</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Physical</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Controls</span>
</div>
</a>
<a className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-md transition-shadow" href="#">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-900" data-lucide="tablet-smartphone"></i>
<h3 className="text-lg font-semibold tracking-tight">Terminal</h3>
</div>
<i className="h-4 w-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-neutral-600">In-person payments with pre-certified readers and SDKs.</p>
<div className="mt-4 flex gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">POS</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">SDK</span>
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Readers</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs text-neutral-700 w-fit shadow-sm">
<i className="h-3.5 w-3.5" data-lucide="code-xml"></i>
              Built for developers
            </div>
<h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">APIs, SDKs, and tools that just work</h3>
<p className="mt-3 text-neutral-600">Ship faster with clear docs, robust client libraries, test cards, and a full-featured dashboard for every workflow.</p>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-neutral-900" data-lucide="wand-2"></i>
                Dynamic UI components for checkout, pricing tables, and more
              </li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-neutral-900" data-lucide="bug"></i>
                Rich test environment with logs, webhooks, and replay
              </li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-neutral-900" data-lucide="lock-keyhole"></i>
                Compliance and security by default
              </li>
</ul>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-800 ring-1 ring-neutral-900/10" href="#">
<i className="h-4 w-4" data-lucide="book-open-text"></i> Read the docs
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 hover:bg-neutral-50" href="#">
<i className="h-4 w-4" data-lucide="webhook"></i> Explore webhooks
              </a>
</div>
</div>
<div>
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
<div className="p-4 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2 text-[13px] text-neutral-600">
<i className="h-4 w-4" data-lucide="square-terminal"></i> API request log
                </div>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded-md bg-neutral-100 ring-1 ring-neutral-200 text-neutral-700">Live</span>
<span className="text-[11px] px-2 py-1 rounded-md border border-neutral-200 text-neutral-600">Test</span>
</div>
</div>
<div className="divide-y divide-neutral-200">
<div className="p-4 flex items-center justify-between hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<div>
<p className="text-sm font-medium">POST /v1/checkout/sessions</p>
<p className="text-[12px] text-neutral-600">200 • 128ms • id: cs_test_9K2...</p>
</div>
</div>
<button className="text-[12px] text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="external-link"></i> Inspect
                  </button>
</div>
<div className="p-4 flex items-center justify-between hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-amber-500"></span>
<div>
<p className="text-sm font-medium">POST /v1/payment_intents</p>
<p className="text-[12px] text-neutral-600">402 • 312ms • id: pi_3ME...</p>
</div>
</div>
<button className="text-[12px] text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="external-link"></i> Inspect
                  </button>
</div>
<div className="p-4 flex items-center justify-between hover:bg-neutral-50">
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<div>
<p className="text-sm font-medium">GET /v1/balance</p>
<p className="text-[12px] text-neutral-600">200 • 52ms • id: req_Rx...</p>
</div>
</div>
<button className="text-[12px] text-neutral-700 hover:text-neutral-900 inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="external-link"></i> Inspect
                  </button>
</div>
</div>
<div className="p-4 bg-neutral-50 border-t border-neutral-200 text-[13px] text-neutral-600">
                Use the CLI to listen and forward events locally. <a className="text-neutral-900 hover:underline" href="#">Get the CLI</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
<div className="lg:col-span-1">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for global scale</h3>
<p className="mt-3 text-neutral-600">Reach customers worldwide with local payment methods, optimized acceptance, and automated tax and FX handling.</p>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3"><i className="h-4 w-4 text-neutral-900 mt-0.5" data-lucide="map"></i> 47+ local methods</li>
<li className="flex items-start gap-3"><i className="h-4 w-4 text-neutral-900 mt-0.5" data-lucide="banknote"></i> Multi-currency pricing</li>
<li className="flex items-start gap-3"><i className="h-4 w-4 text-neutral-900 mt-0.5" data-lucide="file-lock-2"></i> PSD2/SCA ready</li>
</ul>
</div>
<div className="lg:col-span-2">
<div className="aspect-[16/9] w-full rounded-2xl border border-neutral-200 overflow-hidden bg-neutral-100">
<img alt="Global network" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-xl border border-neutral-200 p-3">
<p className="text-xs text-neutral-500">Countries</p>
<p className="text-xl font-semibold tracking-tight">195+</p>
</div>
<div className="rounded-xl border border-neutral-200 p-3">
<p className="text-xs text-neutral-500">Currencies</p>
<p className="text-xl font-semibold tracking-tight">135+</p>
</div>
<div className="rounded-xl border border-neutral-200 p-3">
<p className="text-xs text-neutral-500">Payments/day</p>
<p className="text-xl font-semibold tracking-tight">10M+</p>
</div>
<div className="rounded-xl border border-neutral-200 p-3">
<p className="text-xs text-neutral-500">Uptime</p>
<p className="text-xl font-semibold tracking-tight">99.99%</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
</div></section>
    </>
  );
}
