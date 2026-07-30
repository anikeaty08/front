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
      
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="relative min-h-screen overflow-hidden">

<div aria-hidden="true" className="pointer-events-none absolute inset-0">

<div className="absolute inset-x-0 top-0 h-20 border-t border-b" style={{borderColor: `#ECEFF4`}}></div>

<div className="absolute inset-x-0 bottom-0 h-20 border-t" style={{borderColor: `#ECEFF4`}}></div>

<div className="absolute left-0 top-20 bottom-20 w-20 border-l border-r overflow-hidden" style={{borderColor: `#ECEFF4`}}>
<div className="absolute -inset-x-10 inset-y-0" style={{transform: `rotate(-9.4deg)`, backgroundImage: `repeating-linear-gradient(to bottom, rgba(0,0,0,0.06) 0 1px, transparent 1px 12px)`}}></div>
</div>

<div className="absolute right-0 top-20 bottom-20 w-20 border-l border-r overflow-hidden" style={{borderColor: `#ECEFF4`}}>
<div className="absolute -inset-x-10 inset-y-0" style={{transform: `rotate(-9.4deg)`, backgroundImage: `repeating-linear-gradient(to bottom, rgba(0,0,0,0.06) 0 1px, transparent 1px 12px)`}}></div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-neutral-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white shadow-sm ring-1 ring-black/5">
<i className="h-5 w-5" data-lucide="bot"></i>
</span>
<span className="text-lg tracking-tight font-semibold">elsa</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#">About Us</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Build With Us</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Resources</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-800 transition" href="#">
<span>Try HeyElsa</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
<div className="mx-auto max-w-3xl text-center">
<h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight font-semibold leading-[1.05]">
              Crypto’s AI-<br className="hidden sm:block" />Powered Agent
            </h1>
<p className="mt-5 text-base sm:text-lg text-neutral-600">
              Trade, invest, and automate across chains—just by saying what you want. No wallets to install. No jargon. No friction.
            </p>
<div className="mt-8 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 transition" href="#">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>Try Hey Elsa</span>
</a>
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition">
<i className="h-4 w-4" data-lucide="play"></i> Watch Demo
              </button>
</div>
<div className="mt-6 flex flex-col items-center justify-center gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
<i className="h-4 w-4" data-lucide="twitter"></i>
</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
<i className="h-4 w-4" data-lucide="send"></i>
</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
<i className="h-4 w-4" data-lucide="github"></i>
</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
<i className="h-4 w-4" data-lucide="globe"></i>
</span>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white">
<i className="h-4 w-4" data-lucide="activity"></i>
</span>
</div>
<p className="text-sm text-neutral-500">$220M+ Volume Tracked</p>
</div>
</div>

<div className="relative mt-12 sm:mt-16">
<div className="mx-auto max-w-xl">
<div className="rounded-2xl border border-neutral-200 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04),0_25px_60px_-30px_rgba(0,0,0,0.25)]">
<div className="p-5 border-b border-neutral-200 flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="bot"></i>
</span>
<div className="text-sm">
<p className="font-medium text-neutral-900">Hey Elsa</p>
<p className="text-neutral-500">Online • Multi-chain</p>
</div>
<div className="ml-auto flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 ring-1 ring-black/5">
<i className="h-4 w-4" data-lucide="mic"></i>
</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 ring-1 ring-black/5">
<i className="h-4 w-4" data-lucide="settings"></i>
</span>
</div>
</div>
<div className="p-5 space-y-4">
<div className="flex items-start gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" />
<div className="rounded-2xl rounded-tl-none bg-neutral-100 px-4 py-3 text-sm text-neutral-800 max-w-[80%]">
                      Set a stop loss for my portfolio.
                    </div>
</div>
<div className="flex items-start gap-3 justify-end">
<div className="rounded-2xl rounded-tr-none bg-neutral-900 px-4 py-3 text-sm text-white max-w-[80%] shadow-sm">
                      I’ll place 15% stop losses on your ETH, SOL, and ARB positions. Confirm?
                    </div>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="bot"></i>
</span>
</div>
<div className="mt-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
<button className="text-xs sm:text-sm inline-flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-700 hover:bg-neutral-50">
<span>Stop loss 15%</span> <i className="h-4 w-4 text-neutral-500" data-lucide="shield-check"></i>
</button>
<button className="text-xs sm:text-sm inline-flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-700 hover:bg-neutral-50">
<span>Swap 0.3 ETH → ARB</span> <i className="h-4 w-4 text-neutral-500" data-lucide="arrow-left-right"></i>
</button>
<button className="text-xs sm:text-sm inline-flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-700 hover:bg-neutral-50">
<span>Bridge to Base</span> <i className="h-4 w-4 text-neutral-500" data-lucide="traffic-cone"></i>
</button>
</div>
</div>
<div className="p-4 border-t border-neutral-200">
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2">
<i className="h-5 w-5 text-neutral-500" data-lucide="message-square"></i>
<input className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400" placeholder="Ask anything…" />
<button className="inline-flex items-center gap-1 rounded-full bg-neutral-900 text-white px-3 py-1.5 text-xs font-medium hover:bg-neutral-800">
<span>Send</span><i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 -z-[1]">
<div className="hidden sm:block absolute -left-6 top-12">
<div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-700 shadow-sm">
<span className="rounded-md bg-neutral-100 px-1.5 py-0.5 text-[10px]">15%</span>
                  Set a Stop Loss for Portfolio
                </div>
</div>
<div className="hidden sm:block absolute right-0 sm:right-6 top-6">
<div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-700 shadow-sm">
                  Swap 2001 ETH • $9,123K
                </div>
</div>
<div className="hidden sm:block absolute left-6 -bottom-2">
<div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-700 shadow-sm">
<i className="h-3.5 w-3.5" data-lucide="banknote"></i> Bought 0.384 ETH 2m ago
                </div>
</div>
<div className="hidden sm:block absolute right-6 -bottom-6">
<div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-700 shadow-sm">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Beta Stop Loss for Portfolio
                </div>
</div>
</div>
</div>

<div className="mt-14 sm:mt-16">
<p className="text-center text-sm text-neutral-500">Backed By</p>
<div className="mt-3 flex flex-wrap items-center justify-center gap-8 opacity-80 grayscale">
<img alt="logo" className="h-6 w-auto rounded" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="logo" className="h-6 w-auto rounded" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<img alt="logo" className="h-6 w-auto rounded" src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=300&auto=format&fit=crop" />
<img alt="logo" className="h-6 w-auto rounded" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=300&auto=format&fit=crop" />
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Say it. Elsa does it.</h2>
<p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
              HeyElsa turns complex crypto actions like swapping, bridging, staking, or yield farming into simple, natural‑language requests.
            </p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="h-12 w-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="coins"></i>
</div>
<p className="mt-4 font-medium">Invest $100 in crypto</p>
<p className="text-sm text-neutral-600 mt-1">Tap once to allocate across blue‑chip assets.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="h-12 w-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="arrows-left-right"></i>
</div>
<p className="mt-4 font-medium">Arbitrage across DEXs</p>
<p className="text-sm text-neutral-600 mt-1">Scan, route, and execute the best path.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="h-12 w-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="line-chart"></i>
</div>
<p className="mt-4 font-medium">Build a low‑risk DeFi portfolio</p>
<p className="text-sm text-neutral-600 mt-1">Risk‑aware strategies with auto rebalancing.</p>
</div>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-800 transition" href="#">
              Get Started <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
<div className="max-w-4xl">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold leading-snug">
              The Onchain Brain is here.<br />
              The future of <span className="inline-flex items-center gap-2 align-middle">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white"><i className="h-4 w-4" data-lucide="check-check"></i></span>
                Crypto
              </span> isn’t about contracts or gas fees.<br /></h3>
</div>
<p className="mt-6 max-w-3xl text-neutral-600">
            HeyElsa is building the intelligent execution layer for Web3 where users state what they want, and agents figure out the how.
          </p>
</div>
</section>

<section className="relative scroll-mt-24" id="key-features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
<h4 className="text-center text-2xl sm:text-3xl tracking-tight font-semibold">Key Features</h4>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="rounded-xl bg-neutral-50 p-4 ring-1 ring-inset ring-black/5">
<div className="mx-auto max-w-sm">
<div className="h-11 rounded-full bg-white ring-1 ring-neutral-200 shadow-[inset_0_1px_0_rgba(0,0,0,0.03)] flex items-center px-4">
<i className="h-4 w-4 text-neutral-500" data-lucide="search"></i>
<span className="ml-2 text-sm text-neutral-500">Swap 100 USDC to ETH on the best route…</span>
<div className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
<div className="mt-5">
<p className="font-medium">Multi‑Chain Support</p>
<p className="text-sm text-neutral-600 mt-1">Trade, stake, and invest across EVMs, Solana, Base and more with a single input.</p>
<a className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-xs font-medium hover:bg-neutral-800" href="#">Get Started <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="rounded-xl bg-neutral-50 p-4 ring-1 ring-inset ring-black/5">
<div className="mx-auto max-w-sm">
<div className="h-11 rounded-full bg-white ring-1 ring-neutral-200 shadow-[inset_0_1px_0_rgba(0,0,0,0.03)] flex items-center px-4">
<i className="h-4 w-4 text-neutral-500" data-lucide="route"></i>
<span className="ml-2 text-sm text-neutral-500">Bridge to Base and set 10% stop loss…</span>
<div className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
<div className="mt-5">
<p className="font-medium">Autonomous Workflows</p>
<p className="text-sm text-neutral-600 mt-1">Chain actions together—swap, bridge, stake, hedge—in one natural sentence.</p>
<a className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-xs font-medium hover:bg-neutral-800" href="#">Get Started <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="rounded-xl bg-neutral-50 p-4 ring-1 ring-inset ring-black/5">
<div className="mx-auto max-w-sm">
<div className="h-11 rounded-full bg-white ring-1 ring-neutral-200 shadow-[inset_0_1px_0_rgba(0,0,0,0.03)] flex items-center px-4">
<i className="h-4 w-4 text-neutral-500" data-lucide="shield"></i>
<span className="ml-2 text-sm text-neutral-500">Audit route, simulate gas & slippage…</span>
<div className="ml-auto inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
<div className="mt-5">
<p className="font-medium">Risk‑Aware Execution</p>
<p className="text-sm text-neutral-600 mt-1">Simulations, limits, and guardrails by default to protect your capital.</p>
<a className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-xs font-medium hover:bg-neutral-800" href="#">Get Started <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20">
<div className="text-center">
<h4 className="text-2xl sm:text-3xl tracking-tight font-semibold">Agentic UX for the Onchain World</h4>
<p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
              Powered by a natural‑language interface on top of open‑source LLMs. Connect data, actions, and outcomes with a single agent.
            </p>
</div>
<div className="relative mt-10">
<div className="mx-auto max-w-4xl">
<div className="relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">

<div className="hidden md:flex absolute left-6 top-8 flex-col gap-4">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 shadow-sm">
<i className="h-4 w-4" data-lucide="brain-circuit"></i> Custom Multi‑Model LLM
                  </div>
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 shadow-sm">
<i className="h-4 w-4" data-lucide="trending-up"></i> Get market trends and sentiment
                  </div>
</div>

<div className="hidden md:flex absolute right-6 top-8 flex-col gap-4 items-end">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 shadow-sm">
<i className="h-4 w-4" data-lucide="database"></i> Live blockchain & DeFi data
                  </div>
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 shadow-sm">
<i className="h-4 w-4" data-lucide="network"></i> Onchain activity across 8+ networks
                  </div>
</div>

<div className="pointer-events-none absolute inset-0 hidden md:block">
<div className="absolute left-48 right-48 top-1/2 -translate-y-1/2 h-px bg-neutral-200"></div>
<div className="absolute left-48 right-48 top-[calc(50%-16px)] h-px bg-neutral-100"></div>
<div className="absolute left-48 right-48 top-[calc(50%+16px)] h-px bg-neutral-100"></div>
</div>

<div className="relative flex items-center justify-center">
<div className="h-20 w-20 rounded-2xl bg-neutral-900 text-white flex items-center justify-center shadow-lg ring-1 ring-black/10">
<i className="h-7 w-7" data-lucide="bot"></i>
</div>
</div>

<div className="mt-6 border-t border-neutral-200 pt-6">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="eye"></i>
</span>
<p className="text-sm font-medium">Perception</p>
</div>
<p className="mt-2 text-xs text-neutral-600">Parse prompt, fetch live onchain data, assess market state.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="workflow"></i>
</span>
<p className="text-sm font-medium">Planning</p>
</div>
<p className="mt-2 text-xs text-neutral-600">Simulate paths, evaluate slippage, gas, and risk constraints.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900 text-white">
<i className="h-4 w-4" data-lucide="play-circle"></i>
</span>
<p className="text-sm font-medium">Execution</p>
</div>
<p className="mt-2 text-xs text-neutral-600">Route and execute with guardrails, return verifiable results.</p>
</div>
</div>
</div>

</div>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm text-neutral-700 hover:bg-neutral-50 transition" href="#">
                Explore Supported Chains <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden">
<div aria-hidden="true" className="pointer-events-none absolute inset-0">
<div className="absolute -bottom-10 left-0 right-0 text-[16vw] sm:text-[12vw] font-semibold tracking-tight text-neutral-900/5 select-none leading-none">
            Try HeyElsa
          </div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
<div className="flex items-center justify-between py-10 border-t border-neutral-200">
<div className="flex items-center gap-3 text-neutral-500 text-sm">
<a className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700" href="#">
<i className="h-4 w-4" data-lucide="x"></i>
</a>
<a className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700" href="#">
<i className="h-4 w-4" data-lucide="send"></i>
</a>
<a className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700" href="#">
<i className="h-4 w-4" data-lucide="bot"></i>
</a>
</div>
<div className="text-xs text-neutral-500">
<a className="hover:text-neutral-900" href="#">Privacy Policy</a>
<span className="px-2">|</span>
<a className="hover:text-neutral-900" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
