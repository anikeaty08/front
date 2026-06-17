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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">

<div className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[90vh] w-[90vw] rounded-full blur-3xl" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(159,248,228,0.12) 0%, rgba(46,160,183,0.10) 35%, rgba(7,18,22,0.0) 70%)', animation: 'glowPulse 8s ease-in-out infinite'}}></div>

<div className="absolute inset-0 opacity-[0.18]" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '50px 50px', animation: 'panGrid 40s linear infinite'}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-[#05090b] via-transparent to-[#05090b]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-[#05090b]/55 border-b border-white/5">
<div className="mx-auto max-w-7xl px-5">
<div className="flex items-center justify-between h-16">
<a className="group inline-flex items-center gap-3" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-white/[0.02] outline outline-1 outline-white/5 transition-colors group-hover:bg-white/[0.04]">
<span className="text-[11px] font-medium tracking-[0.08em] text-[#061012]" style={{background: '#9ff8e4', borderRadius: '4px', padding: '2px 4px'}}>HL</span>
</span>
<span className="text-sm md:text-base font-semibold tracking-tight">HypurrLink</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
<a className="hover:text-zinc-100 transition-colors">Products</a>
<a className="hover:text-zinc-100 transition-colors">Docs</a>
<a className="hover:text-zinc-100 transition-colors">Security</a>
<a className="hover:text-zinc-100 transition-colors">Community</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-white/[0.02] px-3.5 py-2 text-sm text-zinc-200 transition-colors hover:bg-white/[0.04]" href="#waitlist">
<i className="h-4 w-4" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
              Join waitlist
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-[#061012] transition hover:shadow-[0_0_0_3px_var(--ring)]" style={{background: '#9ff8e4'}}>
              Launch app
              <i className="h-4 w-4" data-lucide="arrow-up-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-5 pt-16 md:pt-24">
<div className="grid md:grid-cols-12 gap-10 items-center">
<div className="md:col-span-7">
<div style={{animation: 'blurIn .9s ease-out both', animationDelay: '.05s'}}>
<p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.02] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-zinc-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full" style={{background: '#9ff8e4', boxShadow: '0 0 0 3px rgba(159,248,228,0.15)'}}></span>
                Prime brokerage for Hyperliquid
              </p>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white" style={{animation: 'fadeInUp .85s ease-out both', animationDelay: '.1s'}}>
              Unified liquidity. 
              <span className="text-[#9ff8e4]">Institutional execution.</span>
</h1>
<p className="mt-6 max-w-2xl text-base md:text-lg text-zinc-300" style={{animation: 'fadeInUp .85s ease-out both', animationDelay: '.18s'}}>
              HypurrLink brings clearing, netting, risk, and settlement under one roof — purpose-built for Hyperliquid markets. Route intelligently, access portfolio margin, and scale with confidence.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3" style={{animation: 'fadeInUp .85s ease-out both', animationDelay: '.24s'}}>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-[#061012] transition hover:shadow-[0_0_0_4px_var(--ring)]" style={{background: '#9ff8e4'}}>
                Get early access
                <i className="h-4 w-4" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-white/[0.02] px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/[0.04]" href="#features">
<i className="h-4 w-4" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
                Explore features
              </a>
</div>

<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl" style={{animation: 'fadeInUp .85s ease-out both', animationDelay: '.32s'}}>
<div className="rounded-lg border border-[var(--border)] bg-white/[0.02] px-4 py-3">
<p className="text-xs text-zinc-400">Latency</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white">Sub-20ms</p>
</div>
<div className="rounded-lg border border-[var(--border)] bg-white/[0.02] px-4 py-3">
<p className="text-xs text-zinc-400">Markets</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white">1000+</p>
</div>
<div className="rounded-lg border border-[var(--border)] bg-white/[0.02] px-4 py-3">
<p className="text-xs text-zinc-400">Margin</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white">Portfolio</p>
</div>
<div className="rounded-lg border border-[var(--border)] bg-white/[0.02] px-4 py-3">
<p className="text-xs text-zinc-400">Security</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white">Audited</p>
</div>
</div>
</div>

<div className="md:col-span-5 relative">
<div className="relative rounded-xl border border-[var(--border)] bg-white/[0.02] p-4 md:p-5 backdrop-blur" style={{animation: 'blurIn 1s ease-out both', animationDelay: '.2s'}}>
<div className="absolute -inset-px rounded-xl" style={{background: 'radial-gradient(60% 60% at 30% 10%, rgba(159, 248, 228, 0.18), transparent 60%)', filter: 'blur(22px)'}}></div>
<div className="relative rounded-lg border border-white/5 bg-[#071015]/70 p-4">

<div className="flex items-center justify-between border-b border-white/5 pb-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full" style={{background: '#9ff8e4'}}></span>
<span className="text-xs text-zinc-300">Session • Prime</span>
</div>
<div className="flex items-center gap-2 text-zinc-400">
<i className="h-4 w-4" data-lucide="wifi" style={{strokeWidth: '1.5'}}></i>
<i className="h-4 w-4" data-lucide="lock" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="mt-4 space-y-2 font-mono text-[12px] leading-6">
<div className="flex items-start gap-2">
<span className="text-emerald-300/90">$</span>
<span className="text-zinc-300">connect prime --network hyperliquid</span>
</div>
<div className="flex items-start gap-2">
<span className="text-emerald-300/90">$</span>
<span className="text-zinc-300">route --symbol ETH-PERP --size 250k --post-only</span>
</div>
<div className="flex items-start gap-2">
<span className="text-emerald-300/90">$</span>
<span className="text-zinc-300">risk --portfolio-margin --netting cross</span>
</div>
<div className="mt-3 rounded-md border border-white/5 bg-black/40 p-3">
<div className="flex items-center justify-between text-[11px] text-zinc-300">
<span>Route quality</span>
<span className="text-[#061012] rounded px-1.5" style={{background: '#9ff8e4'}}>smart</span>
</div>
<div className="mt-2 h-1.5 w-full rounded bg-white/5 overflow-hidden">
<div className="h-full rounded" style={{width: '78%', background: 'linear-gradient(90deg, #9ff8e4, #78e1c9)', animation: 'floatY 3s ease-in-out infinite'}}></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded border border-white/5 bg-white/5 px-2 py-1.5 text-[11px] text-zinc-300">
<span className="text-zinc-400">Slippage</span>
<span className="float-right text-emerald-300">-2.1 bps</span>
</div>
<div className="rounded border border-white/5 bg-white/5 px-2 py-1.5 text-[11px] text-zinc-300">
<span className="text-zinc-400">Fill</span>
<span className="float-right text-zinc-100">99.2%</span>
</div>
<div className="rounded border border-white/5 bg-white/5 px-2 py-1.5 text-[11px] text-zinc-300">
<span className="text-zinc-400">Risk</span>
<span className="float-right text-sky-300">OK</span>
</div>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-zinc-300">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
                    Self-custodial
                  </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] text-zinc-300">
<i className="h-3.5 w-3.5 text-sky-300" data-lucide="git-branch" style={{strokeWidth: '1.5'}}></i>
                    Hyperliquid-native
                  </span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 md:mt-24 border-t border-white/5">
<div className="mx-auto max-w-7xl px-0 py-8 md:py-10">
<p className="text-xs uppercase tracking-[0.12em] text-zinc-400">Optimized for</p>
<div className="mt-4 flex flex-wrap items-center gap-6 text-sm">
<div className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-white/[0.02] px-3 py-2 text-zinc-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-sm text-[#061012]" style={{background: '#9ff8e4', fontSize: '10px', fontWeight: '600', letterSpacing: '.04em'}}>HL</span>
                HypurrLink Core
              </div>
<div className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-white/[0.02] px-3 py-2 text-zinc-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-sm border border-white/10 text-sky-300">H</span>
                Hyperliquid Perps
              </div>
<div className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-white/[0.02] px-3 py-2 text-zinc-300">
<i className="h-4 w-4 text-emerald-300" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
                Portfolio Margin
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="features">
<div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
<div className="grid md:grid-cols-3 gap-5">
<div className="rounded-xl border border-[var(--border)] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors" style={{animation: 'fadeInUp .8s ease-out both', animationDelay: '.05s'}}>
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#9ff8e4]/10">
<i className="h-5 w-5 text-[#9ff8e4]" data-lucide="zap" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-[10px] text-zinc-400">Execution</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Smart order routing</h3>
<p className="mt-2 text-sm text-zinc-300">Aggregate depth and minimize slippage with latency-aware routing across Hyperliquid venues and pools.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-[#9ff8e4]">
              Learn more
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="rounded-xl border border-[var(--border)] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors" style={{animation: 'fadeInUp .8s ease-out both', animationDelay: '.12s'}}>
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-sky-400/10">
<i className="h-5 w-5 text-sky-300" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-[10px] text-zinc-400">Risk</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Portfolio margin</h3>
<p className="mt-2 text-sm text-zinc-300">Cross-asset netting and real-time VaR keep capital efficient while maintaining strict risk thresholds.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-[#9ff8e4]">
              Learn more
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="rounded-xl border border-[var(--border)] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors" style={{animation: 'fadeInUp .8s ease-out both', animationDelay: '.18s'}}>
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-400/10">
<i className="h-5 w-5 text-emerald-300" data-lucide="lock" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-[10px] text-zinc-400">Security</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Self-custody first</h3>
<p className="mt-2 text-sm text-zinc-300">Non-custodial controls with programmatic approvals. Audit trails, attestations, and circuit breakers.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-[#9ff8e4]">
              Learn more
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="mt-5 grid md:grid-cols-2 gap-5">
<div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-white/[0.02] p-5" style={{animation: 'fadeInUp .8s ease-out both', animationDelay: '.24s'}}>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5 text-sky-300" data-lucide="cpu" style={{strokeWidth: '1.5'}}></i>
<h4 className="text-lg font-semibold tracking-tight">Unified clearing</h4>
</div>
<span className="text-[10px] text-zinc-400">Settlement</span>
</div>
<p className="mt-2 text-sm text-zinc-300">Real-time netting, fee compression, and programmable settlements aligned with Hyperliquid primitives.</p>
<div className="mt-4 h-28 rounded-lg border border-white/5 bg-gradient-to-br from-[#0a1720] to-[#0b1315] p-3">
<div className="flex items-center justify-between text-[11px] text-zinc-300">
<span>Net exposure</span>
<span className="text-emerald-300">-0.42 β</span>
</div>
<div className="mt-2 h-1.5 w-full overflow-hidden rounded bg-white/5">
<div className="h-full rounded" style={{width: '64%', background: 'linear-gradient(90deg,#9ff8e4,#60d2ba)', animation: 'floatY 3.6s ease-in-out infinite'}}></div>
</div>
<div className="mt-2 flex items-center gap-3 text-[11px] text-zinc-400">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="arrow-down-right" style={{strokeWidth: '1.5'}}></i> Fees</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5 text-sky-300" data-lucide="gauge" style={{strokeWidth: '1.5'}}></i> Throughput</span>
</div>
</div>
</div>
<div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-white/[0.02] p-5" style={{animation: 'fadeInUp .8s ease-out both', animationDelay: '.3s'}}>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5 text-emerald-300" data-lucide="line-chart" style={{strokeWidth: '1.5'}}></i>
<h4 className="text-lg font-semibold tracking-tight">Quant APIs</h4>
</div>
<span className="text-[10px] text-zinc-400">Developers</span>
</div>
<p className="mt-2 text-sm text-zinc-300">Low-latency gateways with canonical schemas. Stream, backtest, and simulate with reproducible states.</p>
<div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
<div className="rounded-md border border-white/5 bg-white/5 p-2 text-zinc-300">WebSocket market data</div>
<div className="rounded-md border border-white/5 bg-white/5 p-2 text-zinc-300">Order + risk engine</div>
<div className="rounded-md border border-white/5 bg-white/5 p-2 text-zinc-300">Sandbox + fixtures</div>
<div className="rounded-md border border-white/5 bg-white/5 p-2 text-zinc-300">Type-safe SDKs</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="waitlist">
<div className="mx-auto max-w-7xl px-5 pb-20">
<div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-b from-white/[0.02] to-white/[0.03]">
<div className="absolute -inset-px rounded-2xl opacity-70" style={{background: 'radial-gradient(80% 80% at 80% 10%, rgba(159,248,228,0.18), transparent 60%)'}}></div>
<div className="relative grid lg:grid-cols-2 gap-0">
<div className="p-6 sm:p-8 lg:p-10">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Be first in line</h2>
<p className="mt-2 text-sm sm:text-base text-zinc-300">Access the private beta, integration support, and migration credits for early teams.</p>
<form className="mt-6 flex flex-col sm:flex-row gap-3">
<div className="group relative flex-1">
<input className="w-full rounded-md border border-[var(--border)] bg-white/[0.02] px-3.5 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-[#9ff8e4]/60 focus:ring-4" onblur="this.style.boxShadow='0 0 0 0 rgba(0,0,0,0)';" onfocus="this.style.boxShadow='0 0 0 6px var(--ring)';" placeholder="you@fund.xyz" style={{boxShadow: '0 0 0 0 rgba(0,0,0,0)', transition: 'box-shadow .2s ease, border-color .2s ease'}} type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-[#061012] transition hover:shadow-[0_0_0_6px_var(--ring)]" style={{background: '#9ff8e4'}} type="button">
                  Request access
                  <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</form>
<div className="mt-4 flex items-center gap-3 text-xs text-zinc-400">
<i className="h-4 w-4 text-emerald-300" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
                No spam. You can unsubscribe anytime.
              </div>
</div>
<div className="relative p-6 sm:p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-white/5">
<div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-zinc-400">
<i className="h-4 w-4 text-emerald-300" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
                What you get
              </div>
<ul className="mt-4 space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-[#9ff8e4]" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
                  Private beta access and early feature flags
                </li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-sky-300" data-lucide="download" style={{strokeWidth: '1.5'}}></i>
                  Migration credits for eligible teams
                </li>
<li className="flex items-start gap-3">
<i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="headphones" style={{strokeWidth: '1.5'}}></i>
                  Priority support and integration guidance
                </li>
</ul>
<div className="mt-6 rounded-lg border border-white/5 bg-[#071015]/70 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-zinc-300">Hyperliquid compatibility</span>
<span className="rounded-md px-2 py-1 text-[11px] text-[#061012]" style={{background: '#9ff8e4'}}>native</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-zinc-300">
<div className="rounded border border-white/5 bg-white/5 px-2 py-1.5">Perps</div>
<div className="rounded border border-white/5 bg-white/5 px-2 py-1.5">Spot</div>
<div className="rounded border border-white/5 bg-white/5 px-2 py-1.5">Funding</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-5 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--border)] bg-white/[0.02]">
<span className="text-[11px] font-medium tracking-[0.08em] text-[#061012]" style={{background: '#9ff8e4', borderRadius: '4px', padding: '2px 4px'}}>HL</span>
</span>
<span className="text-sm font-semibold tracking-tight">HypurrLink</span>
</div>
<div className="flex items-center gap-5 text-sm text-zinc-400">
<a className="hover:text-zinc-200 transition-colors">Terms</a>
<a className="hover:text-zinc-200 transition-colors">Privacy</a>
<a className="hover:text-zinc-200 transition-colors">Status</a>
<a className="hover:text-zinc-200 transition-colors">Contact</a>
</div>
<div className="text-xs text-zinc-500">© <span id="year">2025</span> HypurrLink Protocol</div>
</div>
</div>
</footer>


    </>
  );
}
