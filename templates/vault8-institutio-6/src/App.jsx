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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-40 -left-40 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-3xl"></div>
<div className="absolute -bottom-40 -right-40 h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.14),transparent_60%)] blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(168,85,247,0.06),transparent),radial-gradient(900px_420px_at_10%_110%,rgba(59,130,246,0.06),transparent)]"></div>

<div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-xs font-semibold tracking-tighter">V8</span>
</div>
<span className="text-sm font-medium tracking-tight text-white/90 group-hover:text-white transition">Vault8</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
<a className="hover:text-white transition" href="#vaults">Vaults</a>
<a className="hover:text-white transition" href="#strategies">Strategies</a>
<a className="hover:text-white transition" href="#performance">Performance</a>
<a className="hover:text-white transition" href="#transparency">Transparency</a>
<a className="hover:text-white transition" href="#team">Team</a>
<a className="hover:text-white transition" href="#docs">Docs</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 transition" href="#">Join Early Access</a>
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-3.5 py-2 text-sm font-semibold tracking-tight text-white hover:bg-indigo-500 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400 transition" href="#">
              Start a Vault
              <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 transition">
<svg className="h-5 w-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-3 py-2 text-xs text-white/70">
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-1 text-emerald-300 ring-1 ring-emerald-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live Feed
            </span>
<div className="flex-1 overflow-x-auto whitespace-nowrap scrollbar-none">
<div className="inline-flex items-center gap-6">
<span>Vault MAYA +0.82% last 24h</span>
<span>SHOLO drawdown 2.1% (within band)</span>
<span>OPTIM APY 34.8% rolling</span>
<span>STABLE YIELD utilization 73%</span>
<span>Total Liquidity $42.3M</span>
</div>
</div>
<a className="inline-flex items-center gap-1 text-white/80 hover:text-white transition" href="#dashboard">
              Open Dashboard
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10M17 7v10H7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="relative">

<div className="pointer-events-none absolute inset-0 -z-0">
<svg className="absolute left-1/2 top-10 -translate-x-1/2 opacity-20" fill="none" height="400" viewbox="0 0 1200 400" width="1200">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="g1" x1="0" x2="1200" y1="0" y2="0">
<stop stop-color="#6366F1" stop-opacity="0.5"></stop>
<stop offset="1" stop-color="#60A5FA" stop-opacity="0.4"></stop>
</lineargradient>
</defs>
<g stroke="url(#g1)" strokeWidth="0.6">
<path d="M0 280 C200 200 400 360 600 260 C800 160 1000 320 1200 240"></path>
<path d="M0 180 C220 120 380 260 620 200 C860 140 980 220 1200 160"></path>
<path d="M0 340 C260 260 420 320 640 300 C860 280 1000 340 1200 280"></path>
</g>
<g fill="#8B5CF6">
<circle cx="180" cy="230" opacity="0.7" r="2.2"></circle>
<circle cx="540" cy="210" opacity="0.7" r="2.2"></circle>
<circle cx="880" cy="260" opacity="0.7" r="2.2"></circle>
</g>
</svg>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-8">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-5">
<svg className="h-3.5 w-3.5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h7l-7 7V3Z"></path><path d="M3 3l7 7"></path></svg>
              Ex‑AlgoBoola founders • Fund‑grade infrastructure • Non‑custodial
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Institutional Returns. Retail Access.
            </h1>
<p className="mt-5 max-w-2xl text-base sm:text-lg text-white/70">
              Built by ex‑AlgoBoola founders, Vault8 brings fund‑grade algo trading to everyone — with vaults starting at just $100.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-4 py-2.5 text-sm font-semibold tracking-tight text-white hover:bg-indigo-500 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400 transition" href="#start">
                Start a Vault
                <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 transition" href="#early">
                Join Early Access
                <svg className="h-4.5 w-4.5 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10M17 7v10H7"></path></svg>
</a>
<div className="inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-emerald-300 ring-1 ring-emerald-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Audited in real‑time
              </div>
</div>

<div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 transition">
<div className="text-xs text-white/60">Avg APY (rolling)</div>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-white">28.3%</span>
<span className="text-emerald-300 text-xs inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 14 5-5 5 5"></path></svg>
                    +1.2%
                  </span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 transition">
<div className="text-xs text-white/60">Active Vaults</div>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-white">12</span>
<span className="text-white/60 text-[11px]">4 cycles active</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 transition">
<div className="text-xs text-white/60">Total Liquidity</div>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-white">$42.3M</span>
<span className="text-emerald-300 text-xs">+$3.1M</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] overflow-hidden">
<div className="absolute -inset-16 bg-[conic-gradient(from_0deg,rgba(99,102,241,0.06),rgba(56,189,248,0.06),transparent_30%)] blur-2xl"></div>
<div className="relative">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70">Dynamic Vault Network</div>
<div className="inline-flex items-center gap-2 text-xs text-white/60">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    live
                  </div>
</div>

<div className="mt-5 grid grid-cols-6 gap-3">

<div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-indigo-400/30 transition">
<div className="flex items-center justify-between">
<span className="text-xs text-white/60">MAYA</span>
<span className="text-[10px] text-emerald-300">+0.8%</span>
</div>
<svg className="mt-2 h-16 w-full" viewbox="0 0 120 40">
<path d="M0 25 C20 5,40 35,60 15 S100 30,120 10" fill="none" stroke="url(#gr1)" strokeWidth="1.5"></path>
<defs>
<lineargradient id="gr1" x1="0" x2="120" y1="0" y2="0">
<stop offset="0" stop-color="#8B5CF6"></stop><stop offset="1" stop-color="#60A5FA"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-indigo-400/30 transition">
<div className="flex items-center justify-between">
<span className="text-xs text-white/60">SHOLO</span>
<span className="text-[10px] text-amber-300">-2.1%</span>
</div>
<svg className="mt-2 h-16 w-full" viewbox="0 0 120 40">
<path d="M0 15 C20 25,40 12,60 20 S100 10,120 22" fill="none" stroke="#94A3B8" strokeWidth="1.5"></path>
</svg>
</div>
<div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 hover:border-indigo-400/30 transition">
<div className="flex items-center justify-between">
<span className="text-xs text-white/60">OPTIM</span>
<span className="text-[10px] text-emerald-300">+1.3%</span>
</div>
<svg className="mt-2 h-16 w-full" viewbox="0 0 120 40">
<path d="M0 27 C20 20,40 30,60 18 S100 25,120 12" fill="none" stroke="url(#gr2)" strokeWidth="1.5"></path>
<defs>
<lineargradient id="gr2" x1="0" x2="120" y1="0" y2="0">
<stop offset="0" stop-color="#60A5FA"></stop><stop offset="1" stop-color="#22D3EE"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="col-span-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-white/60">Risk Engine</span>
<span className="text-[10px] text-emerald-300 inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path></svg>
                        healthy
                      </span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/5">
<div className="h-2 rounded-full bg-emerald-400/50" style={{width: '74%'}}></div>
</div>
</div>
<div className="col-span-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-white/60">Utilization</span>
<span className="text-[10px] text-white/60">73%</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/5">
<div className="h-2 rounded-full bg-indigo-400/50" style={{width: '73%'}}></div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs text-white/60">
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3z"></path><path d="M9 9h6v6H9z"></path></svg>
                    Autonomous AI execution
                  </div>
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg>
                    Non‑custodial
                  </div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-white/50">Real data coming from auditor oracles at cycle close.</p>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-18" id="team">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Built by the Architects of Institutional Algo Funds.</h2>
<p className="mt-2 text-white/70 max-w-2xl text-sm">Decades of combined trading, AI, and fund management experience — now building for you.</p>
</div>
<div className="hidden md:flex items-center gap-4 text-xs text-white/60">
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg> SOC‑2 aligned
            </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path></svg> Real‑time auditing
            </span>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition">
<div className="flex items-center gap-4">
<img alt="Founder" className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Aria K.</div>
<div className="text-xs text-white/60">Co‑Founder, Ex‑AlgoBoola • Quant PM</div>
</div>
</div>
<div className="mt-4 text-xs text-white/70">Led &gt;$500M systematic multi‑asset programs, risk frameworks used across 3 funds.</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition">
<div className="flex items-center gap-4">
<img alt="Founder" className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Noah V.</div>
<div className="text-xs text-white/60">Co‑Founder, ML Systems • Ex‑HFT</div>
</div>
</div>
<div className="mt-4 text-xs text-white/70">Built low‑latency alpha discovery pipeline, adaptive execution, and market microstructure models.</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition">
<div className="flex items-center gap-4">
<img alt="Founder" className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Mina T.</div>
<div className="text-xs text-white/60">Risk &amp; Infra • Ex‑Fund Ops</div>
</div>
</div>
<div className="mt-4 text-xs text-white/70">Designed non‑custodial controls, continuous audit trails, and risk kill‑switches.</div>
</div>
</div>

<div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-tight text-white/60">
<span className="inline-flex items-center gap-2">
<span className="rounded-sm bg-white/5 px-1.5 py-0.5 ring-1 ring-white/10 text-white/80">G</span> Graviton
            </span>
<span className="inline-flex items-center gap-2">
<span className="rounded-sm bg-white/5 px-1.5 py-0.5 ring-1 ring-white/10 text-white/80">N</span> Nomura
            </span>
<span className="inline-flex items-center gap-2">
<span className="rounded-sm bg-white/5 px-1.5 py-0.5 ring-1 ring-white/10 text-white/80">5S</span> 5 Swans
            </span>
<span className="inline-flex items-center gap-2">
<span className="rounded-sm bg-white/5 px-1.5 py-0.5 ring-1 ring-white/10 text-white/80">AB</span> AlgoBoola
            </span>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-18">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 items-start">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Institutional wealth management demands millions. Retail investors are locked out.</h3>
<p className="mt-3 text-white/70 text-sm">Until now, the smartest money stayed institutional. Vault8 changes that.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<span className="text-sm text-white/80">Fund Access</span>
<span className="text-[11px] text-white/60">$1M+</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-white/70">
<li className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5 text-white/50" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 5 14 14M19 5 5 19"></path></svg>
                    Gatekept strategies
                  </li>
<li className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5 text-white/50" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 5 14 14M19 5 5 19"></path></svg>
                    Opaque reporting
                  </li>
<li className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5 text-white/50" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 5 14 14M19 5 5 19"></path></svg>
                    Capital lock‑ups
                  </li>
</ul>
</div>
<div className="rounded-xl border border-indigo-400/30 bg-indigo-400/[0.06] p-5">
<div className="flex items-center justify-between">
<span className="text-sm text-white">Vault8 Access</span>
<span className="text-[11px] text-indigo-200">$100+</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-white/80">
<li className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg>
                    Fund‑grade strategies
                  </li>
<li className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg>
                    Real‑time transparency
                  </li>
<li className="inline-flex items-center gap-2">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg>
                    Weekly cycles
                  </li>
</ul>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Cycle Overview</div>
<div className="text-xs text-white/60 inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg>
                weekly snapshots
              </div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-xs text-white/60">Cycle APY</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-white">31.2%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-xs text-white/60">Max DD</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-white">3.9%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-xs text-white/60">Sharpe</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-white">1.84</div>
</div>
</div>
<div className="mt-4 h-28 rounded-lg border border-white/10 bg-gradient-to-tr from-indigo-400/10 to-cyan-400/10 p-3">
<svg className="h-full w-full" viewbox="0 0 300 80">
<defs>
<lineargradient id="gridStroke" x1="0" x2="0" y1="0" y2="1">
<stop offset="0" stop-color="#93C5FD" stop-opacity="0.15"></stop>
<stop offset="1" stop-color="#A78BFA" stop-opacity="0.15"></stop>
</lineargradient>
<lineargradient id="apyLine" x1="0" x2="1" y1="0" y2="0">
<stop offset="0" stop-color="#60A5FA"></stop><stop offset="1" stop-color="#8B5CF6"></stop>
</lineargradient>
</defs>
<g stroke="url(#gridStroke)" strokeWidth="0.6">
<path d="M0 10 H300"></path><path d="M0 30 H300"></path><path d="M0 50 H300"></path><path d="M0 70 H300"></path>
</g>
<path d="M0 60 C30 45,60 65,90 40 S150 25,180 35 S240 30,300 20" fill="none" stroke="url(#apyLine)" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-18" id="vaults">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Choose a Vault. Let the Algorithms Work.</h3>
<p className="mt-2 text-white/70 text-sm max-w-2xl">Vault8 vaults run fully autonomous, adaptive AI strategies built on fund‑grade infrastructure.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition" href="#dashboard">
            View Full Dashboard
            <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10M17 7v10H7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-indigo-400/30 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-4.5 w-4.5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">MAYA</div>
<div className="text-[11px] text-white/60">Adaptive Trend</div>
</div>
</div>
<span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-300 ring-1 ring-emerald-400/20">Stable</span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-white/60">APY</div>
<div className="mt-0.5 text-white font-semibold">24.9%</div>
</div>
<div>
<div className="text-white/60">Drawdown</div>
<div className="mt-0.5 text-amber-300">2.6%</div>
</div>
<div>
<div className="text-white/60">Min</div>
<div className="mt-0.5 text-white">$100</div>
</div>
</div>
<div className="mt-3 h-16 rounded-lg border border-white/10 bg-white/[0.02] p-2">

<svg className="h-full w-full" viewbox="0 0 120 40">
<path d="M0 30 C15 18,32 25,50 15 S95 18,120 10" fill="none" stroke="#8B5CF6" strokeWidth="2"></path>
</svg>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-[11px] text-white/60">Vault Health</div>
<div className="w-24 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-emerald-400/60" style={{width: '78%'}}></div>
</div>
</div>

<div className="absolute inset-0 hidden group-hover:flex items-end">
<div className="w-full rounded-2xl p-3 bg-gradient-to-t from-black/70 to-transparent">
<div className="text-[11px] text-white/70 mb-1">3M: +42.1% • Winrate 63%</div>
<div className="h-14 rounded-md border border-white/10 bg-white/[0.02] p-1.5">
<svg className="h-full w-full" viewbox="0 0 160 40">
<path d="M0 28 C20 10,40 35,60 22 S110 14,160 8" fill="none" stroke="url(#gr3)" strokeWidth="2"></path>
<defs><lineargradient id="gr3" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#60A5FA"></stop><stop offset="1" stop-color="#8B5CF6"></stop></lineargradient></defs>
</svg>
</div>
</div>
</div>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-indigo-400/30 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-4.5 w-4.5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18M12 3v18"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">SHOLO</div>
<div className="text-[11px] text-white/60">Mean‑Rev Hybrid</div>
</div>
</div>
<span className="rounded-full bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300 ring-1 ring-amber-400/20">Growth</span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div><div className="text-white/60">APY</div><div className="mt-0.5 text-white font-semibold">31.8%</div></div>
<div><div className="text-white/60">Drawdown</div><div className="mt-0.5 text-amber-300">4.2%</div></div>
<div><div className="text-white/60">Min</div><div className="mt-0.5 text-white">$250</div></div>
</div>
<div className="mt-3 h-16 rounded-lg border border-white/10 bg-white/[0.02] p-2">
<svg className="h-full w-full" viewbox="0 0 120 40">
<path d="M0 22 C20 30,40 12,60 20 S100 12,120 22" fill="none" stroke="#22D3EE" strokeWidth="2"></path>
</svg>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-[11px] text-white/60">Vault Health</div>
<div className="w-24 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-amber-300/70" style={{width: '64%'}}></div>
</div>
</div>
<div className="absolute inset-0 hidden group-hover:flex items-end">
<div className="w-full rounded-2xl p-3 bg-gradient-to-t from-black/70 to-transparent">
<div className="text-[11px] text-white/70 mb-1">3M: +55.7% • Winrate 58%</div>
<div className="h-14 rounded-md border border-white/10 bg-white/[0.02] p-1.5">
<svg className="h-full w-full" viewbox="0 0 160 40">
<path d="M0 30 C20 35,40 14,60 20 S110 15,160 18" fill="none" stroke="url(#gr4)" strokeWidth="2"></path>
<defs><lineargradient id="gr4" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#22D3EE"></stop><stop offset="1" stop-color="#60A5FA"></stop></lineargradient></defs>
</svg>
</div>
</div>
</div>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-indigo-400/30 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-4.5 w-4.5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7-7 7-7-7Z"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">OPTIM</div>
<div className="text-[11px] text-white/60">Multi‑Factor</div>
</div>
</div>
<span className="rounded-full bg-purple-400/10 px-2 py-1 text-[11px] text-purple-300 ring-1 ring-purple-400/20">Aggressive</span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div><div className="text-white/60">APY</div><div className="mt-0.5 text-white font-semibold">38.4%</div></div>
<div><div className="text-white/60">Drawdown</div><div className="mt-0.5 text-amber-300">6.7%</div></div>
<div><div className="text-white/60">Min</div><div className="mt-0.5 text-white">$500</div></div>
</div>
<div className="mt-3 h-16 rounded-lg border border-white/10 bg-white/[0.02] p-2">
<svg className="h-full w-full" viewbox="0 0 120 40">
<path d="M0 35 C20 15,40 30,60 12 S100 10,120 8" fill="none" stroke="#A78BFA" strokeWidth="2"></path>
</svg>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-[11px] text-white/60">Vault Health</div>
<div className="w-24 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-purple-300/80" style={{width: '58%'}}></div>
</div>
</div>
<div className="absolute inset-0 hidden group-hover:flex items-end">
<div className="w-full rounded-2xl p-3 bg-gradient-to-t from-black/70 to-transparent">
<div className="text-[11px] text-white/70 mb-1">3M: +72.9% • Winrate 55%</div>
<div className="h-14 rounded-md border border-white/10 bg-white/[0.02] p-1.5">
<svg className="h-full w-full" viewbox="0 0 160 40">
<path d="M0 34 C20 14,40 30,60 10 S110 16,160 6" fill="none" stroke="url(#gr5)" strokeWidth="2"></path>
<defs><lineargradient id="gr5" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#8B5CF6"></stop><stop offset="1" stop-color="#A78BFA"></stop></lineargradient></defs>
</svg>
</div>
</div>
</div>
</div>
<div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-indigo-400/30 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7v10a8 8 0 1 1-16 0V7"></path><path d="M4 7h16"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-white">STABLE YIELD</div>
<div className="text-[11px] text-white/60">Market‑Neutral</div>
</div>
</div>
<span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-300 ring-1 ring-emerald-400/20">Stable</span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div><div className="text-white/60">APY</div><div className="mt-0.5 text-white font-semibold">14.2%</div></div>
<div><div className="text-white/60">Drawdown</div><div className="mt-0.5 text-emerald-300">0.9%</div></div>
<div><div className="text-white/60">Min</div><div className="mt-0.5 text-white">$100</div></div>
</div>
<div className="mt-3 h-16 rounded-lg border border-white/10 bg-white/[0.02] p-2">
<svg className="h-full w-full" viewbox="0 0 120 40">
<path d="M0 24 C20 24,40 24,60 24 S100 24,120 24" fill="none" stroke="#34D399" strokeWidth="2"></path>
</svg>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-[11px] text-white/60">Vault Health</div>
<div className="w-24 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-emerald-300/70" style={{width: '90%'}}></div>
</div>
</div>
<div className="absolute inset-0 hidden group-hover:flex items-end">
<div className="w-full rounded-2xl p-3 bg-gradient-to-t from-black/70 to-transparent">
<div className="text-[11px] text-white/70 mb-1">3M: +12.9% • Winrate 71%</div>
<div className="h-14 rounded-md border border-white/10 bg-white/[0.02] p-1.5">
<svg className="h-full w-full" viewbox="0 0 160 40">
<path d="M0 24 C20 24,40 24,60 24 S110 24,160 24" fill="none" stroke="url(#gr6)" strokeWidth="2"></path>
<defs><lineargradient id="gr6" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#34D399"></stop><stop offset="1" stop-color="#22D3EE"></stop></lineargradient></defs>
</svg>
</div>
</div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-white/60">Allocation bands, risk targets, and execution venues are disclosed in each vault’s docs.</p>
</div>
</section>

<section className="relative py-14 sm:py-18">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Can You Beat the Vaults?</h3>
<p className="mt-2 text-white/70 text-sm">7 vaults succeeded last cycle — bet on Vault 8.</p>
</div>
<div className="text-xs text-white/60">Join the next vault cycle before it locks.</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Leaderboard</div>
<span className="rounded-md bg-white/5 px-2 py-1 text-[11px] text-white/60 ring-1 ring-white/10">last cycle</span>
</div>
<div className="mt-4 space-y-3">

<div className="flex items-center justify-between text-sm">
<div className="inline-flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center text-emerald-300 text-[11px]">1</span>
<span className="text-white/90">OPTIM</span>
</div>
<div className="text-emerald-300 text-sm">+18.2%</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="inline-flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center text-emerald-300 text-[11px]">2</span>
<span className="text-white/90">MAYA</span>
</div>
<div className="text-emerald-300 text-sm">+12.6%</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="inline-flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center text-emerald-300 text-[11px]">3</span>
<span className="text-white/90">STABLE YIELD</span>
</div>
<div className="text-emerald-300 text-sm">+3.9%</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="text-sm text-white/80">Vault Doors</div>
<div className="mt-4 grid grid-cols-4 gap-4">

<button className="group relative aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-2 hover:border-indigo-400/30 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 transition">
<div className="absolute inset-0 rounded-xl ring-1 ring-indigo-400/20"></div>
<div className="flex h-full items-center justify-center">
<div className="h-10 w-10 rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/30 shadow-[0_0_24px_rgba(16,185,129,0.35)]"></div>
</div>
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-white/70">1</span>
</button>
<button className="group relative aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-2 hover:border-indigo-400/30 transition">
<div className="flex h-full items-center justify-center">
<div className="h-10 w-10 rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/30 shadow-[0_0_24px_rgba(16,185,129,0.35)]"></div>
</div>
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-white/70">2</span>
</button>
<button className="group relative aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-2 hover:border-indigo-400/30 transition">
<div className="flex h-full items-center justify-center">
<div className="h-10 w-10 rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/30 shadow-[0_0_24px_rgba(16,185,129,0.35)]"></div>
</div>
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-white/70">3</span>
</button>
<button className="group relative aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-2 hover:border-indigo-400/30 transition">
<div className="flex h-full items-center justify-center">
<div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15"></div>
</div>
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-white/70">4</span>
</button>
<button className="group relative aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-2 hover:border-indigo-400/30 transition">
<div className="flex h-full items-center justify-center">
<div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15"></div>
</div>
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-white/70">5</span>
</button>
<button className="group relative aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-2 hover:border-indigo-400/30 transition">
<div className="flex h-full items-center justify-center">
<div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15"></div>
</div>
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-white/70">6</span>
</button>
<button className="group relative aspect-square rounded-xl border border-indigo-400/30 bg-indigo-400/[0.06] p-2 transition">
<div className="flex h-full items-center justify-center">
<div className="h-10 w-10 rounded-full bg-indigo-400/30 ring-1 ring-indigo-400/40 shadow-[0_0_26px_rgba(99,102,241,0.35)]"></div>
</div>
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-indigo-200">7</span>
</button>
<button className="group relative aspect-square rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-2 hover:border-indigo-400/30 transition">
<div className="flex h-full items-center justify-center">
<div className="h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/15"></div>
</div>
<span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[11px] text-white/70">8</span>
</button>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Next Vault Unlocks In…</div>
<div className="inline-flex items-center gap-1 text-[11px] text-white/60">
<svg className="h-3.5 w-3.5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                weekly cadence
              </div>
</div>
<div className="mt-4 flex items-baseline gap-3">
<div className="text-3xl font-semibold tracking-tight text-white">03:14:26</div>
<span className="text-xs text-white/60">HH:MM:SS</span>
</div>
<div className="mt-4 flex gap-3">
<a className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-indigo-500/90 px-4 py-2.5 text-sm font-semibold tracking-tight text-white hover:bg-indigo-500 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400 transition" href="#start">
                Start a Vault Now
                <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:border-white/20 hover:bg-white/10 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 transition" href="#early">
                Join Waitlist
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-18" id="dashboard">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Live Dashboard</h3>
<p className="mt-2 text-white/70 text-sm">Transparent. Verified. Audited in real‑time.</p>
</div>
<div className="hidden sm:flex items-center gap-3 text-xs">
<span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-1 text-emerald-300 ring-1 ring-emerald-400/20">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> oracle online
            </span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-white/60 ring-1 ring-white/10">
<svg className="h-3.5 w-3.5 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h7l7 7v11H3V3Z"></path><path d="M10 3v7h7"></path></svg>
              export CSV
            </span>
</div>
</div>
<div className="mt-8 grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">APY Fluctuation</div>
<div className="inline-flex items-center gap-2 text-xs text-white/60">
<span>24h</span>
<span className="text-white/40">•</span>
<span>7d</span>
<span className="text-white/40">•</span>
<span className="text-white/90">30d</span>
</div>
</div>
<div className="mt-4 h-56 rounded-lg border border-white/10 bg-gradient-to-tr from-indigo-400/10 to-cyan-400/10 p-4">
<svg className="h-full w-full" viewbox="0 0 640 200">
<defs>
<lineargradient id="area" x1="0" x2="0" y1="0" y2="1">
<stop offset="0" stop-color="#6366F1" stop-opacity="0.25"></stop>
<stop offset="1" stop-color="#22D3EE" stop-opacity="0.05"></stop>
</lineargradient>
<lineargradient id="line" x1="0" x2="1" y1="0" y2="0">
<stop offset="0" stop-color="#60A5FA"></stop><stop offset="1" stop-color="#8B5CF6"></stop>
</lineargradient>
</defs>
<path d="M0 160 C80 110,160 170,240 120 S400 90,480 110 S560 90,640 70 L640 200 L0 200 Z" fill="url(#area)"></path>
<path d="M0 160 C80 110,160 170,240 120 S400 90,480 110 S560 90,640 70" fill="none" stroke="url(#line)" strokeWidth="2"></path>
</svg>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-xs text-white/60">Stable</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">+12.4%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-xs text-white/60">Growth</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">+28.7%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="text-xs text-white/60">Aggressive</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">+41.3%</div>
</div>
</div>
</div>
<div className="lg:col-span-4 grid gap-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Vault Health</div>
<span className="text-xs text-white/60">updated 5m ago</span>
</div>
<div className="mt-4 space-y-4">
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/70">MAYA</span>
<span className="text-white/60">78%</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5">
<div className="h-2 rounded-full bg-emerald-400/60" style={{width: '78%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/70">SHOLO</span>
<span className="text-white/60">64%</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5">
<div className="h-2 rounded-full bg-amber-300/70" style={{width: '64%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/70">OPTIM</span>
<span className="text-white/60">58%</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5">
<div className="h-2 rounded-full bg-purple-300/80" style={{width: '58%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/70">STABLE YIELD</span>
<span className="text-white/60">90%</span>
</div>
<div className="mt-1 h-2 w-full rounded-full bg-white/5">
<div className="h-2 rounded-full bg-emerald-300/70" style={{width: '90%'}}></div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Compliance &amp; Audit</div>
<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 7-8 10-5-5"></path></svg>
</div>
<ul className="mt-4 space-y-2 text-xs text-white/70">
<li className="flex items-center justify-between">
<span className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path></svg>
                    Real‑time strategy attestations
                  </span>
<span className="text-emerald-300">pass</span>
</li>
<li className="flex items-center justify-between">
<span className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3z"></path><path d="M7 7h10v10H7z"></path></svg>
                    Non‑custodial architecture
                  </span>
<span className="text-emerald-300">pass</span>
</li>
<li className="flex items-center justify-between">
<span className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 21v-7l8-4 8 4v7"></path><path d="M4 10V7l8-4 8 4v3"></path></svg>
                    Risk kill‑switches &amp; limits
                  </span>
<span className="text-emerald-300">pass</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-18" id="transparency">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">No Hidden Yields. No Black Boxes.</h3>
<p className="mt-2 text-white/70 text-sm">Every yield, every risk model, every strategy — open, auditable, and verifiable.</p>
</div>

<div className="mt-8 grid md:grid-cols-4 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
<div className="mx-auto mb-3 h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-5 w-5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg>
</div>
<div className="text-sm text-white/80">Market Feed</div>
<p className="mt-1 text-xs text-white/60">Tick‑level data, venues, and depth.</p>
</div>
<div className="relative md:mt-0 mt-2 flex items-center justify-center">
<div className="h-0.5 w-full bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 md:rotate-0 rotate-90"></div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
<div className="mx-auto mb-3 h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-5 w-5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h7l7 7v11H3V3Z"></path><path d="M10 3v7h7"></path></svg>
</div>
<div className="text-sm text-white/80">AI Engine</div>
<p className="mt-1 text-xs text-white/60">Policy gradients, risk overlays, execution alpha.</p>
</div>
<div className="relative md:mt-0 mt-2 flex items-center justify-center">
<div className="h-0.5 w-full bg-gradient-to-r from-indigo-400/30 to-fuchsia-400/30 md:rotate-0 rotate-90"></div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center md:col-span-1 col-span-2">
<div className="mx-auto mb-3 h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="h-5 w-5 text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
</div>
<div className="text-sm text-white/80">Performance Log</div>
<p className="mt-1 text-xs text-white/60">Every fill, pnl, fee — streamed &amp; signed.</p>
</div>
</div>
</div>
</section>

<section className="relative py-14 sm:py-18" id="performance">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Proof. Not Promises.</h3>
<p className="mt-2 text-white/70 text-sm">Same category as HyperLiquid Vaults or NeuraVaults — except fully open and real‑time auditable.</p>
<div className="mt-6 space-y-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Case Study — Vault7</div>
<span className="text-xs text-white/60">last 3 months</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-3 text-xs">
<div><div className="text-white/60">APY</div><div className="mt-0.5 text-white font-semibold">+142%</div></div>
<div><div className="text-white/60">Max DD</div><div className="mt-0.5 text-amber-300">7.1%</div></div>
<div><div className="text-white/60">Sharpe</div><div className="mt-0.5 text-white font-semibold">2.11</div></div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white/90">“The easiest institutional tool I’ve ever used.”</div>
<div className="text-[11px] text-white/50">Retail PM • 2 yrs</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm text-white/90">“Transparent yields. Finally.”</div>
<div className="text-[11px] text-white/50">Ops Lead • 5 yrs</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6">
<div className="flex items-center justify-between">
<div className="text-sm text-white/80">Get Early Access</div>
<span className="text-xs text-white/60">limited cohorts</span>
</div>
<p className="mt-2 text-sm text-white/70">Be first to new vaults, weekly performance drops, and strategy unlocks.</p>
<form className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
<input className="col-span-2 w-full rounded-md border border-white/10 bg-white/[0.06] px-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-indigo-400/40 focus:outline-none focus:ring-0" placeholder="you@domain.com" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-500/90 px-4 py-2.5 text-sm font-semibold tracking-tight text-white hover:bg-indigo-500 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400 transition">
                Join Early Access
                <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></button></form></div></div></div></section>
    </>
  );
}
