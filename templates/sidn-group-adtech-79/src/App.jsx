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
      
<div className="flex min-h-screen flex-col">

<header className="border-b border-slate-800/70 bg-slate-950/90 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-sky-500/40">
<span className="text-sm font-semibold tracking-tight text-sky-400">S</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight text-slate-50">SIDN Group</span>
<span className="text-xs font-medium text-slate-400">Signal • Intelligence • Demand • Network</span>
</div>
</div>

<nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex">
<a className="transition-colors hover:text-sky-400" href="#adexchange">AdExchange</a>
<a className="transition-colors hover:text-sky-400" href="#ssp">SSP</a>
<a className="transition-colors hover:text-sky-400" href="#ecosystem">Ecosystem</a>
<a className="transition-colors hover:text-sky-400" href="#about">About</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-200 shadow-sm transition hover:border-sky-500/70 hover:text-sky-100 sm:inline-flex">
            Contact Us
          </button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-4 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400">
            Book a Demo
            <i className="lucide lucide-arrow-right h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="border-b border-slate-900/80 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95">
<div className="flex flex-col sm:px-6 md:flex-row md:items-center md:pt-20 lg:px-8 lg:pb-20 max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-16 pl-4 gap-x-12 gap-y-12">

<div className="flex-1 space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[0.7rem] font-medium text-slate-300 shadow-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Enterprise AdTech infrastructure for both publishers and advertisers
            </div>
<div className="space-y-4">
<h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                SIDN Group —
                <span className="bg-gradient-to-r from-sky-400 via-emerald-300 to-sky-200 bg-clip-text text-transparent">
                  Signal-Driven AdTech
                </span>
                for a Smarter Marketplace
              </h1>
<p className="text-base font-medium text-slate-300 sm:text-lg">
                We unite Signal, Intelligence, Demand, and Network into one ecosystem that empowers publishers and advertisers to grow with precision, performance, and transparency.
              </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400">
                Explore AdExchange
              </button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs font-semibold tracking-tight text-slate-100 transition hover:border-sky-500/80 hover:text-sky-100">
                Discover SSP
              </button>
</div>
<p className="max-w-xl text-sm font-medium text-slate-400 sm:text-base">
              A next-generation advertising infrastructure built for efficiency at scale. SIDN Group turns data signals into meaningful outcomes across every impression, every device, every channel.
            </p>

<div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
<div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] font-semibold uppercase tracking-tight text-slate-400">Events</span>
<i className="lucide lucide-activity h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-50">Billions+</div>
<p className="mt-1 text-xs font-medium text-slate-500">Auction signals processed every day.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] font-semibold uppercase tracking-tight text-slate-400">Reach</span>
<i className="lucide lucide-globe-2 h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-50">Global</div>
<p className="mt-1 text-xs font-medium text-slate-500">Connected across major markets and channels.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] font-semibold uppercase tracking-tight text-slate-400">Latency</span>
<i className="lucide lucide-timer h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-slate-50">&lt;100ms</div>
<p className="mt-1 text-xs font-medium text-slate-500">Optimized real-time bidding paths.</p>
</div>
</div>
</div>

<div className="flex-1">
<div className="relative mx-auto max-w-md md:max-w-lg">

<div className="pointer-events-none absolute inset-0 -translate-y-6 scale-110 bg-radial from-sky-500/25 via-transparent to-transparent blur-3xl"></div>
<div className="overflow-hidden bg-slate-950/90 border-slate-800/80 border rounded-2xl relative shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_40px_120px_rgba(15,23,42,1)]">
<div className="border-b border-slate-800/70 bg-slate-950/90 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[0.65rem] font-semibold tracking-tight text-slate-300">SIDN Signal Graph</span>
</div>
<div className="flex items-center gap-1.5 text-[0.6rem] text-slate-500">
<span className="h-1 w-1 rounded-full bg-sky-400/80"></span> Real-time
                  </div>
</div>
<div className="grid gap-4 border-b border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900/90 p-4 sm:grid-cols-2">
<div className="space-y-3">
<div className="">
<div className="text-[0.7rem] font-semibold uppercase tracking-tight text-slate-400">Signal Stream</div>
<div className="mt-1 flex h-20 items-end gap-0.5 overflow-hidden rounded-lg bg-slate-900/80 p-1">
<div className="w-full rounded-t bg-sky-500/60" style={{height: '45%'}}></div>
<div className="w-full rounded-t bg-sky-400/70" style={{height: '80%'}}></div>
<div className="w-full rounded-t bg-emerald-400/80" style={{height: '60%'}}></div>
<div className="w-full rounded-t bg-sky-500/80" style={{height: '90%'}}></div>
<div className="w-full rounded-t bg-sky-300/70" style={{height: '55%'}}></div>
<div className="w-full rounded-t bg-emerald-400/80" style={{height: '75%'}}></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-[0.7rem]">
<div className="rounded-md border border-slate-800 bg-slate-950/80 p-2">
<div className="text-[0.65rem] font-semibold text-slate-400">Signal</div>
<div className="mt-0.5 text-xs font-semibold tracking-tight text-slate-50">User Events</div>
<p className="mt-0.5 text-[0.65rem] text-slate-500">Pageviews, clicks, viewability.</p>
</div>
<div className="rounded-md border border-slate-800 bg-slate-950/80 p-2">
<div className="text-[0.65rem] font-semibold text-slate-400">Intelligence</div>
<div className="mt-0.5 text-xs font-semibold tracking-tight text-slate-50">ML Scoring</div>
<p className="mt-0.5 text-[0.65rem] text-slate-500">Bid prediction and routing.</p>
</div>
<div className="rounded-md border border-slate-800 bg-slate-950/80 p-2">
<div className="text-[0.65rem] font-semibold text-slate-400">Outcome</div>
<div className="mt-0.5 text-xs font-semibold tracking-tight text-slate-50">Monetization</div>
<p className="mt-0.5 text-[0.65rem] text-slate-500">Yield and performance.</p>
</div>
</div>
</div>
<div className="space-y-3">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="flex items-center justify-between text-[0.65rem]">
<span className="font-semibold uppercase tracking-tight text-slate-400">Programmatic Path</span>
<span className="text-sky-400">Optimized</span>
</div>
<div className="mt-2 space-y-2 text-[0.7rem] text-slate-300">
<div className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-sky-400/80"></span>
<span>Publisher</span>
<i className="lucide lucide-chevrons-right ml-auto h-3 w-3 text-slate-500" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-emerald-400/80"></span>
<span>SIDN SSP</span>
<i className="lucide lucide-chevrons-right ml-auto h-3 w-3 text-slate-500" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-sky-500/80"></span>
<span>SIDN AdExchange</span>
<i className="lucide lucide-chevrons-right ml-auto h-3 w-3 text-slate-500" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-sky-300/80"></span>
<span>Buyer</span>
</div>
</div>
</div>
<div className="grid gap-2 rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-[0.7rem] text-slate-300">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] font-semibold uppercase tracking-tight text-slate-400">Real-Time KPIs</span>
<i className="lucide lucide-bar-chart-3 h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="grid grid-cols-3 gap-2">
<div>
<div className="text-[0.65rem] text-slate-400">Win Rate</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">74%</div>
</div>
<div>
<div className="text-[0.65rem] text-slate-400">Viewability</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">91%</div>
</div>
<div>
<div className="text-[0.65rem] text-slate-400">Fill Rate</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">98%</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-slate-800 bg-slate-950/90 px-4 py-2 text-[0.65rem] text-slate-400">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
<span>Latency optimized • Privacy-safe • Transparent</span>
</div>
<div className="hidden items-center gap-1 sm:flex">
<i className="lucide lucide-lock h-3 w-3" style={{strokeWidth: '1.5'}}></i>
<span>Secure by design</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950" id="why">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)]">
<div className="space-y-4">
<h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Why SIDN Group
              </h2>
<p className="text-base font-medium text-slate-400 sm:text-lg">
                We engineer a signal-first, intelligence-led marketplace that aligns incentives for publishers and advertisers.
              </p>
</div>
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm">
<div className="flex items-center gap-2">
<i className="lucide lucide-waveform h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                    Signal-First Performance
                  </h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                  We translate user signals into clear monetization opportunities.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm">
<div className="flex items-center gap-2">
<i className="lucide lucide-cpu h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                    Intelligence That Scales
                  </h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                  Technology that optimizes billions of auction events.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm">
<div className="flex items-center gap-2">
<i className="lucide lucide-network h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">
                    Demand-Ready Network
                  </h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                  Access to premium demand and high-quality inventory.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950" id="adexchange">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.4fr)] md:items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/5 px-2.5 py-1 text-[0.7rem] font-semibold tracking-tight text-sky-300">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                AdExchange
              </div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                SIDN AdExchange — Where Signal Meets Opportunity
              </h2>
<p className="mt-3 text-base font-medium text-slate-400 sm:text-lg">
                High-performance, transparent, real-time trading environment.
              </p>
<ul className="mt-6 space-y-2 text-sm font-medium text-slate-300">
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Real-Time Auctions</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Premium Inventory Access</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Full Transparency Layer</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Efficient Monetization Pipeline</span>
</li>
</ul>
<div className="mt-6">
<button className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400">
                  Get Started with AdExchange
                  <i className="lucide lucide-arrow-right h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="relative">
<div className="pointer-events-none absolute inset-0 bg-radial from-sky-500/20 via-transparent to-transparent blur-3xl"></div>
<div className="relative space-y-4">
<div className="rounded-2xl border border-sky-500/40 bg-slate-950/90 p-4 shadow-[0_0_0_1px_rgba(8,47,73,0.6),0_30px_80px_rgba(15,23,42,0.9)]">
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<div className="flex items-center gap-2">
<i className="lucide lucide-activity-square h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<span className="font-semibold tracking-tight">Live Auction Heatmap</span>
</div>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.6rem] text-slate-400">RTB 2.5 / 3.0</span>
</div>
<div className="mt-3 grid grid-cols-4 gap-2">
<div className="h-16 rounded-lg bg-gradient-to-b from-sky-400/80 via-sky-500/40 to-slate-900/0"></div>
<div className="h-16 rounded-lg bg-gradient-to-b from-emerald-400/80 via-emerald-500/40 to-slate-900/0"></div>
<div className="h-16 rounded-lg bg-gradient-to-b from-sky-300/80 via-sky-500/30 to-slate-900/0"></div>
<div className="h-16 rounded-lg bg-gradient-to-b from-cyan-400/80 via-cyan-500/40 to-slate-900/0"></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-[0.65rem] text-slate-300">
<div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2">
<div className="text-slate-400">QPS</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">2.1M</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2">
<div className="text-slate-400">Timeouts</div>
<div className="text-xs font-semibold tracking-tight text-emerald-400">0.2%</div>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-950/80 p-2">
<div className="text-slate-400">Fraud</div>
<div className="text-xs font-semibold tracking-tight text-emerald-400">&lt;0.1%</div>
</div>
</div>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 text-[0.7rem] text-slate-300">
<div className="flex items-center justify-between">
<span className="font-semibold uppercase tracking-tight text-slate-400">Buyer Types</span>
<i className="lucide lucide-users h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="mt-2 space-y-1.5">
<div className="flex items-center justify-between">
<span>Agencies &amp; Trading Desks</span>
<span className="rounded-full bg-slate-900 px-2 py-0.5 text-[0.6rem] text-sky-300">Premium</span>
</div>
<div className="flex items-center justify-between">
<span>DSPs &amp; Platforms</span>
<span className="text-[0.65rem] text-slate-400">Open &amp; Private</span>
</div>
<div className="flex items-center justify-between">
<span>Direct Buyers</span>
<span className="text-[0.65rem] text-slate-400">Programmatic Guaranteed</span>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 text-[0.7rem] text-slate-300">
<div className="flex items-center justify-between">
<span className="font-semibold uppercase tracking-tight text-slate-400">Transparency Layer</span>
<i className="lucide lucide-shield-check h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
</div>
<ul className="mt-2 space-y-1.5">
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400/90"></span>
                        Full bid path visibility
                      </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                        Log-level reporting
                      </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-cyan-400/90"></span>
                        Brand safety &amp; fraud protection
                      </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-gradient-to-b from-slate-950 to-slate-950" id="ssp">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] md:items-center">

<div className="relative order-2 md:order-1">
<div className="pointer-events-none absolute inset-0 bg-radial from-emerald-500/20 via-transparent to-transparent blur-3xl"></div>
<div className="relative rounded-2xl border border-emerald-500/40 bg-slate-950/90 p-4 shadow-[0_0_0_1px_rgba(6,78,59,0.5),0_30px_80px_rgba(15,23,42,0.9)]">
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<div className="flex items-center gap-2">
<i className="lucide lucide-layout-dashboard h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span className="font-semibold tracking-tight">Publisher Yield Console</span>
</div>
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[0.6rem] text-emerald-300">SIDN SSP</span>
</div>
<div className="mt-3 grid gap-3 sm:grid-cols-3 text-[0.7rem]">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="text-[0.65rem] uppercase tracking-tight text-slate-400">Holistic Inventory</div>
<div className="mt-1 text-xs font-semibold tracking-tight text-slate-50">Web • App • CTV</div>
<p className="mt-1 text-[0.65rem] text-slate-500">Unified controls for every surface.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="text-[0.65rem] uppercase tracking-tight text-slate-400">Yield Optimization</div>
<div className="mt-1 text-xs font-semibold tracking-tight text-slate-50">Algorithmic</div>
<p className="mt-1 text-[0.65rem] text-slate-500">Dynamic floors and routing.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="text-[0.65rem] uppercase tracking-tight text-slate-400">Reporting</div>
<div className="mt-1 text-xs font-semibold tracking-tight text-slate-50">Transparent</div>
<p className="mt-1 text-[0.65rem] text-slate-500">Log-level and aggregate.</p>
</div>
</div>
<div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="flex items-center justify-between text-[0.65rem] text-slate-400">
<span className="font-semibold uppercase tracking-tight">Revenue Overview</span>
<span className="text-emerald-400">+18% vs baseline</span>
</div>
<div className="mt-2 flex items-end gap-1.5">
<div className="h-12 flex-1 rounded-t bg-gradient-to-t from-emerald-500/10 via-emerald-500/50 to-emerald-300/80"></div>
<div className="h-9 flex-1 rounded-t bg-gradient-to-t from-sky-500/10 via-sky-500/50 to-sky-300/80"></div>
<div className="h-10 flex-1 rounded-t bg-gradient-to-t from-emerald-500/10 via-emerald-500/50 to-emerald-300/80"></div>
<div className="h-8 flex-1 rounded-t bg-gradient-to-t from-sky-500/10 via-sky-500/50 to-sky-300/80"></div>
<div className="h-11 flex-1 rounded-t bg-gradient-to-t from-emerald-500/10 via-emerald-500/50 to-emerald-300/80"></div>
</div>
<div className="mt-2 grid grid-cols-3 gap-2 text-[0.65rem] text-slate-300">
<div>
<div className="text-slate-400">eCPM</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">$3.42</div>
</div>
<div>
<div className="text-slate-400">Fill Rate</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">99.1%</div>
</div>
<div>
<div className="text-slate-400">Ad Requests</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">1.9B</div>
</div>
</div>
</div>
<div className="mt-3 grid gap-2 text-[0.65rem] text-slate-300 sm:grid-cols-2">
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/80 p-2.5">
<i className="lucide lucide-plug h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-semibold tracking-tight">Flexible Integration Options</div>
<p className="text-[0.65rem] text-slate-500">Header bidding, SDK, S2S.</p>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/80 p-2.5">
<i className="lucide lucide-file-bar-chart h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-semibold tracking-tight">Transparent Reporting</div>
<p className="text-[0.65rem] text-slate-500">Control and clarity by default.</p>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 md:order-2">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/5 px-2.5 py-1 text-[0.7rem] font-semibold tracking-tight text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                SSP
              </div>
<h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                SIDN SSP — Powering Smarter Monetization for Publishers
              </h2>
<p className="mt-3 text-base font-medium text-slate-400 sm:text-lg">
                Unlock the full value of your inventory with intelligence-driven optimization.
              </p>
<ul className="mt-6 space-y-2 text-sm font-medium text-slate-300">
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Holistic Inventory Management</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Advanced Yield Optimization</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Flexible Integration Options</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-check-circle-2 mt-0.5 h-3.5 w-3.5 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<span>Transparent Reporting</span>
</li>
</ul>
<div className="mt-6">
<button className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/70 bg-emerald-500/10 px-4 py-2 text-xs font-semibold tracking-tight text-emerald-200 transition hover:bg-emerald-500/20">
                  Explore the SSP
                  <i className="lucide lucide-arrow-right h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950" id="ecosystem">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="lg:flex lg:items-start lg:justify-between lg:gap-12">
<div className="max-w-xl space-y-4">
<h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                The SIDN Engine — Four Forces Driving Growth
              </h2>
<p className="text-base font-medium text-slate-400 sm:text-lg">
                An ecosystem built on four principles.
              </p>
</div>
<div className="mt-8 grid flex-1 gap-4 md:grid-cols-2 lg:mt-0">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="flex items-center gap-2">
<i className="lucide lucide-rss h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Signal</h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                  Real-time, privacy-safe user signals powering smarter decisions for every impression.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="flex items-center gap-2">
<i className="lucide lucide-brain h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Intelligence</h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                  Machine learning and optimization engines built to scale across billions of auctions.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="flex items-center gap-2">
<i className="lucide lucide-trending-up h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Demand</h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                  Deep connections to premium demand ensuring quality, scale, and predictable reach.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="flex items-center gap-2">
<i className="lucide lucide-hexagon h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Network</h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                  A connected fabric of publishers, buyers, and partners that share aligned incentives.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="space-y-4 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Built for Both Sides of the Ecosystem
            </h2>
<p className="mx-auto max-w-2xl text-base font-medium text-slate-400 sm:text-lg">
              One infrastructure that respects the needs of publishers and advertisers without compromise.
            </p>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2">

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
<div className="flex items-center gap-2">
<i className="lucide lucide-layout-template h-4 w-4 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">For Publishers</h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                For Publishers: higher yield, stable revenue, pricing control, transparent reporting, easy integration.
              </p>
<ul className="mt-4 grid gap-2 text-sm font-medium text-slate-300 sm:grid-cols-2">
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                  Yield-focused optimization
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                  Multi-channel inventory support
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                  Floor price and deal controls
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                  Deep reporting and APIs
                </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
<div className="flex items-center gap-2">
<i className="lucide lucide-target h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">For Advertisers</h3>
</div>
<p className="mt-2 text-sm font-medium text-slate-400">
                For Advertisers: quality inventory, predictable reach, transparency, efficient spend, real-time insights.
              </p>
<ul className="mt-4 grid gap-2 text-sm font-medium text-slate-300 sm:grid-cols-2">
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400/90"></span>
                  Curated, brand-safe supply
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400/90"></span>
                  Predictable, scalable reach
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400/90"></span>
                  Transparent fee structures
                </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400/90"></span>
                  Real-time performance analytics
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] md:items-center">
<div className="space-y-4">
<h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Trusted by Partners Who Value Precision
              </h2>
<p className="text-base font-medium text-slate-400 sm:text-lg">
                Trusted by Partners Who Value Precision
              </p>
<p className="text-sm font-medium text-slate-400">
                Content: enterprise-grade tech, global footprint, billions of events processed, transparency-focused.
              </p>
</div>
<div className="grid gap-4 sm:grid-cols-3 text-center text-sm font-medium text-slate-300">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-xs uppercase tracking-tight text-slate-400">Enterprise-Grade Tech</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-slate-50">99.99%</div>
<p className="mt-1 text-xs text-slate-500">Availability across core services.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-xs uppercase tracking-tight text-slate-400">Global Footprint</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-slate-50">Multi-Region</div>
<p className="mt-1 text-xs text-slate-500">Optimized routing and latency.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-xs uppercase tracking-tight text-slate-400">Transparency-Focused</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-slate-50">Log-Level</div>
<p className="mt-1 text-xs text-slate-500">Access to auction paths and pricing.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-gradient-to-b from-slate-950 to-slate-950">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.3fr)] md:items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Fast to Integrate. Easy to Scale.
              </h2>
<p className="mt-3 text-base font-medium text-slate-400 sm:text-lg">
                Content: seamless integration via S2S, header bidding, API.
              </p>
<ul className="mt-6 space-y-2 text-sm font-medium text-slate-300">
<li className="flex items-start gap-2">
<i className="lucide lucide-plug mt-0.5 h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<span>Server-to-Server connections for maximum performance.</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-columns-3 mt-0.5 h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<span>Header bidding adapters for leading wrappers.</span>
</li>
<li className="flex items-start gap-2">
<i className="lucide lucide-code mt-0.5 h-3.5 w-3.5 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<span>Robust APIs for configuration, reporting, and optimization.</span>
</li>
</ul>
<div className="mt-6">
<button className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400">
                  Talk to Our Integration Team
                  <i className="lucide lucide-message-circle h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="relative">
<div className="pointer-events-none absolute inset-0 bg-radial from-sky-500/20 via-transparent to-transparent blur-3xl"></div>
<div className="relative rounded-2xl border border-slate-800 bg-slate-950/90 p-4 text-[0.7rem] text-slate-300 shadow-[0_0_0_1px_rgba(15,23,42,0.9),0_30px_80px_rgba(15,23,42,1)]">
<div className="flex items-center justify-between">
<span className="font-semibold uppercase tracking-tight text-slate-400">Integration Paths</span>
<span className="rounded-full bg-slate-900 px-2 py-0.5 text-[0.6rem] text-slate-400">SIDN Group</span>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-3">
<div className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-center">
<i className="lucide lucide-server h-4 w-4 text-emerald-400" style={{strokeWidth: '1.5'}}></i>
<div className="mt-2 text-xs font-semibold tracking-tight text-slate-100">S2S</div>
<p className="mt-1 text-[0.65rem] text-slate-500">Low-latency, high-throughput connections.</p>
</div>
<div className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-center">
<i className="lucide lucide-columns-3 h-4 w-4 text-sky-400" style={{strokeWidth: '1.5'}}></i>
<div className="mt-2 text-xs font-semibold tracking-tight text-slate-100">Header Bidding</div>
<p className="mt-1 text-[0.65rem] text-slate-500">Prebid and custom wrapper support.</p>
</div>
<div className="flex flex-col items-center rounded-xl border border-slate-800 bg-slate-950/80 p-3 text-center">
<i className="lucide lucide-code-2 h-4 w-4 text-cyan-400" style={{strokeWidth: '1.5'}}></i>
<div className="mt-2 text-xs font-semibold tracking-tight text-slate-100">API</div>
<p className="mt-1 text-[0.65rem] text-slate-500">Configuration, reporting, and insights.</p>
</div>
</div>
<div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<div className="text-[0.65rem] font-semibold uppercase tracking-tight text-slate-400">Deployment</div>
<div className="mt-2 flex flex-wrap items-center gap-2 text-[0.65rem]">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Cloud-native
                    </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span> Autoscaling
                    </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-0.5 text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span> Observability
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-slate-950" id="about">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1.2fr)] md:items-center">
<div className="space-y-4">
<h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                About SIDN Group
              </h2>
<p className="text-base font-medium text-slate-400 sm:text-lg">
                Content: AdTech company built on the principles of Signal, Intelligence, Demand, Network.
              </p>
<p className="text-sm font-medium text-slate-400">
                Focused on efficiency, transparency, scalable tech, and innovation.
              </p>
</div>
<div className="grid gap-4 text-sm font-medium text-slate-300 sm:grid-cols-2">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-xs uppercase tracking-tight text-slate-400">Principles</div>
<ul className="mt-2 space-y-1.5 text-sm">
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400/90"></span>
                    Signal-first architecture
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400/90"></span>
                    Intelligence-led optimization
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-sky-400/90"></span>
                    Demand and network alignment
                  </li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-xs uppercase tracking-tight text-slate-400">Focus Areas</div>
<ul className="mt-2 space-y-1.5 text-sm">
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                    Efficiency and performance
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                    Radical transparency
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                    Scalable, modern infrastructure
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-3 rounded-full bg-emerald-400/90"></span>
                    Continuous innovation
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900/80 bg-gradient-to-r from-sky-950 via-slate-950 to-emerald-950">
<div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
<div className="flex flex-col items-center gap-6 rounded-3xl border border-sky-500/30 bg-slate-950/90 px-6 py-8 text-center shadow-[0_0_0_1px_rgba(8,47,73,0.6),0_30px_80px_rgba(15,23,42,0.9)] sm:px-8">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[0.7rem] font-semibold tracking-tight text-sky-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              SIDN Ecosystem
            </div>
<div className="max-w-2xl space-y-3">
<h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
                Ready to Activate the SIDN Ecosystem?
              </h2>
<p className="text-base font-medium text-slate-300 sm:text-lg">
                Move from fragmented setups to a unified, signal-driven marketplace built for sustainable growth.
              </p>
</div>
<div className="flex flex-wrap items-center justify-center gap-3">
<button className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-5 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400">
                Book a Demo
                <i className="lucide lucide-calendar-check h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/90 px-5 py-2 text-xs font-semibold tracking-tight text-slate-100 transition hover:border-sky-500/70 hover:text-sky-100">
                Contact Us
                <i className="lucide lucide-mail h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950">
<div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-slate-100">SIDN Group</span>
<span className="text-[0.65rem] rounded-full border border-slate-800 bg-slate-900 px-2 py-0.5 font-medium text-slate-400">AdTech Infrastructure</span>
</div>
<p className="text-xs font-medium text-slate-500">
            SIDN Group — Where Signal Becomes Performance
          </p>
</div>
<nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-400">
<a className="transition-colors hover:text-sky-400" href="#adexchange">AdExchange</a>
<a className="transition-colors hover:text-sky-400" href="#ssp">SSP</a>
<a className="transition-colors hover:text-sky-400" href="#about">About</a>
<a className="transition-colors hover:text-sky-400" href="#contact">Contact</a>
<span className="h-3 w-px bg-slate-800"></span>
<a className="transition-colors hover:text-sky-400" href="#">Privacy</a>
<a className="transition-colors hover:text-sky-400" href="#">Terms</a>
</nav>
</div>
</footer>
</div>

    </>
  );
}
