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
      

<header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-black/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a aria-label="Brand Magics Home" className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
<span className="tracking-tight text-[13px] font-medium" style={{letterSpacing: '-0.02em'}}>BM</span>
</div>
<span className="text-[15px] tracking-tight font-medium text-white">Brand Magics</span>
</a>

<nav className="hidden md:flex items-center gap-2">

<details className="relative group">
<summary className="list-none cursor-pointer px-3 py-2 rounded-md text-[14px] font-medium text-white/90 hover:text-white hover:bg-white/5 outline-none hover:outline hover:outline-1 hover:outline-white/10 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="grid-3x3"></i>
                Products
                <i className="h-4 w-4 opacity-70" data-lucide="chevron-down"></i>
</summary>
<div className="absolute left-0 mt-2 w-[720px] rounded-lg border border-white/10 bg-[#0b0b0d] shadow-2xl p-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-[12px] uppercase tracking-wide text-white/60">
<i className="h-4 w-4" data-lucide="compass"></i>
                    By Purpose
                  </div>
<span className="text-[11px] text-white/40">Explore by outcome</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">Leads</div>
<div className="text-[12px] text-white/60">Generate and nurture demand</div>
</div>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="mouse-pointer-click"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">Revenue</div>
<div className="text-[12px] text-white/60">Convert and expand accounts</div>
</div>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="wallet"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">Fulfillments</div>
<div className="text-[12px] text-white/60">Deliver and retain value</div>
</div>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="package-check"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">Finance</div>
<div className="text-[12px] text-white/60">Cash flow, payouts, controls</div>
</div>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="banknote"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">Productivity</div>
<div className="text-[12px] text-white/60">Tasks, automation, delivery</div>
</div>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="zap"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">Legal</div>
<div className="text-[12px] text-white/60">Contracts, risk, compliance</div>
</div>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="scale"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">Discoveries</div>
<div className="text-[12px] text-white/60">Research and innovation</div>
</div>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="flask-conical"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">Goals</div>
<div className="text-[12px] text-white/60">Strategy and execution</div>
</div>
<i className="h-4 w-4 opacity-70 group-hover:opacity-100" data-lucide="goal"></i>
</a>
</div>
<div className="my-4 border-t border-white/10"></div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-[12px] uppercase tracking-wide text-white/60">
<i className="h-4 w-4" data-lucide="workflow"></i>
                    By Function
                  </div>
<span className="text-[11px] text-white/40">Explore by team</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">LeadMagics for Marketing</div>
<div className="text-[12px] text-white/60">Demand-gen, campaigns, attribution</div>
</div>
<i className="h-4 w-4" data-lucide="megaphone"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">SalesMagics for Sales</div>
<div className="text-[12px] text-white/60">Pipelines, quotes, closures</div>
</div>
<i className="h-4 w-4" data-lucide="handshake"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">TaskMagics for Operations</div>
<div className="text-[12px] text-white/60">Workflows, SLAs, projects</div>
</div>
<i className="h-4 w-4" data-lucide="check-square"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">HireMagics for HR</div>
<div className="text-[12px] text-white/60">Hiring, onboarding, culture</div>
</div>
<i className="h-4 w-4" data-lucide="users"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">MoneyMagics for Finance</div>
<div className="text-[12px] text-white/60">Payables, receivables, controls</div>
</div>
<i className="h-4 w-4" data-lucide="coins"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">LexMagics for Legal</div>
<div className="text-[12px] text-white/60">Docs, e-sign, compliance</div>
</div>
<i className="h-4 w-4" data-lucide="file-text"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">ScaleMagics for Research &amp; Development</div>
<div className="text-[12px] text-white/60">Research, experiments, insights</div>
</div>
<i className="h-4 w-4" data-lucide="beaker"></i>
</a>
<a className="group flex items-center justify-between rounded-md border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06]" href="#products">
<div>
<div className="text-[13px] font-medium">GoalMagics for Management</div>
<div className="text-[12px] text-white/60">OKRs, governance, reviews</div>
</div>
<i className="h-4 w-4" data-lucide="target"></i>
</a>
</div>
</div>
</details>
<a className="px-3 py-2 rounded-md text-[14px] font-medium text-white/90 hover:text-white hover:bg-white/5 outline-none hover:outline hover:outline-1 hover:outline-white/10" href="#services">Services</a>
<a className="px-3 py-2 rounded-md text-[14px] font-medium text-white/90 hover:text-white hover:bg-white/5 outline-none hover:outline hover:outline-1 hover:outline-white/10" href="#about">About</a>
<a className="px-3 py-2 rounded-md text-[14px] font-medium text-white/90 hover:text-white hover:bg-white/5 outline-none hover:outline hover:outline-1 hover:outline-white/10" href="#support">Support</a>
</nav>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-2 text-[13px] rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" href="#">Sign in</a>
<a className="px-3 py-2 text-[13px] rounded-md bg-[#025ba5] text-white hover:bg-[#025ba5]/90 outline-none hover:outline hover:outline-1 hover:outline-[#8cd7f6]/40" href="#products">Get started</a>
</div>

<div className="md:hidden">
<input className="hidden peer/mobile" id="mobile-open" type="checkbox"/>
<label className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 hover:bg-white/5" htmlFor="mobile-open">
<i className="h-5 w-5" data-lucide="menu"></i>
<span className="text-[13px]">Menu</span>
</label>
<div className="fixed inset-x-0 top-16 hidden peer-checked/mobile:block bg-[#0b0b0d] border-t border-white/10">
<div className="px-4 py-3 space-y-2">
<details>
<summary className="list-none flex items-center justify-between px-3 py-2 rounded-md hover:bg-white/5 border border-white/10">
<span className="text-[14px] font-medium">Products</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</summary>
<div className="mt-2 p-2 space-y-2 border-t border-white/10">
<div className="text-[12px] uppercase tracking-wide text-white/50">By Purpose</div>
<div className="grid grid-cols-2 gap-2">
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">Leads</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">Revenue</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">Fulfillments</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">Finance</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">Productivity</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">Legal</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">Discoveries</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">Goals</a>
</div>
<div className="text-[12px] uppercase tracking-wide text-white/50 pt-2 border-t border-white/10">By Function</div>
<div className="grid grid-cols-1 gap-2">
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">LeadMagics for Marketing</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">SalesMagics for Sales</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">TaskMagics for Operations</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">HireMagics for HR</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">MoneyMagics for Finance</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">LexMagics for Legal</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">ScaleMagics for Research &amp; Development</a>
<a className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.06] text-[13px]" href="#products">GoalMagics for Management</a>
</div>
</div>
</details>
<a className="block px-3 py-2 rounded-md hover:bg-white/5 border border-white/10" href="#services">Services</a>
<a className="block px-3 py-2 rounded-md hover:bg-white/5 border border-white/10" href="#about">About</a>
<a className="block px-3 py-2 rounded-md hover:bg-white/5 border border-white/10" href="#support">Support</a>
<div className="flex gap-2 pt-2 border-t border-white/10">
<a className="flex-1 px-3 py-2 text-[13px] rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 text-center" href="#">Sign in</a>
<a className="flex-1 px-3 py-2 text-[13px] rounded-md bg-[#025ba5] text-white hover:bg-[#025ba5]/90 text-center" href="#products">Get started</a>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="min-h-[68vh] grid place-items-center">
<div className="w-full max-w-3xl text-center">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-[#8cd7f6]/30 bg-[#025ba5]/20 text-[#8cd7f6] text-[12px] mb-4">
<i className="h-3.5 w-3.5" data-lucide="search"></i>
              BMeX ID Lookup • 8 digits + XX1
            </div>
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-white mb-3">
              Search BMeX ID of a Brand
            </h1>
<p className="text-white/70 text-[15px] max-w-2xl mx-auto">
              BMeX (Brand Magics Exchange) provides a global 8-digit ID with an XX1 suffix to identify entities under a brand.
              Use it to enable transactions without exposing account numbers in banking or fintech apps — including Paymagics.
            </p>

<form className="mt-8" id="bmex-form">
<div className="flex items-stretch gap-2 bg-white/[0.04] border border-white/10 rounded-xl p-2 focus-within:border-[#8cd7f6]/40 focus-within:ring-1 focus-within:ring-[#025ba5]/50">
<div className="hidden sm:flex items-center px-3 rounded-lg border border-white/10 bg-white/[0.03] text-white/60">
<span className="text-[12px]">BMeX ID</span>
</div>
<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" data-lucide="search"></i>
<input aria-describedby="bmex-help" autocomplete="off" className="w-full bg-transparent pl-10 pr-24 py-3.5 text-[15px] outline-none placeholder:text-white/40" id="bmex-input" inputmode="text" pattern="^[0-9]{8}XX1$" placeholder="Enter 8 digits + XX1 (e.g., 12345678XX1)" required="" type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex">
<span className="px-2 py-1 text-[12px] rounded-md border border-white/10 bg-white/[0.03] text-white/60">XX1</span>
</div>
</div>
<button className="px-5 py-3.5 rounded-lg bg-[#025ba5] hover:bg-[#025ba5]/90 text-white text-[14px] font-medium outline-none hover:outline hover:outline-1 hover:outline-[#8cd7f6]/40" type="submit">
                  Search
                </button>
</div>
<div className="text-[12px] text-white/50 mt-2" id="bmex-help">
                Exact format required: 8 digits followed by XX1. Example: 87654321XX1
              </div>
</form>

<div className="hidden mt-6 text-left" id="bmex-result">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-start justify-between">
<div>
<div className="text-[12px] uppercase tracking-wide text-white/50">Lookup Result</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-white" id="bmex-result-id">—</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 text-[13px] inline-flex items-center gap-2" id="copy-id">
<i className="h-4 w-4" data-lucide="copy"></i> Copy ID
                    </button>
<a className="px-3 py-2 rounded-md bg-[#025ba5] hover:bg-[#025ba5]/90 text-[13px] inline-flex items-center gap-2" href="#products">
<i className="h-4 w-4" data-lucide="arrow-right"></i> Explore Products
                    </a>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-[12px] text-white/50">Brand</div>
<div className="text-[14px] mt-1" id="bmex-brand">—</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-[12px] text-white/50">Entity</div>
<div className="text-[14px] mt-1" id="bmex-entity">—</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-[12px] text-white/50">Status</div>
<div className="text-[13px] mt-1 inline-flex items-center gap-2" id="bmex-status">
<span className="h-2 w-2 rounded-full bg-white/20"></span> —
                    </div>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<a className="px-3 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 text-[13px] inline-flex items-center gap-2" href="#paymagics">
<i className="h-4 w-4" data-lucide="credit-card"></i> Open in Paymagics
                  </a>
<a className="px-3 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 text-[13px] inline-flex items-center gap-2" href="#services">
<i className="h-4 w-4" data-lucide="shield-check"></i> Automated Due Diligence
                  </a>
<a className="px-3 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 text-[13px] inline-flex items-center gap-2" href="#support">
<i className="h-4 w-4" data-lucide="life-buoy"></i> Raise Ticket
                  </a>
</div>
</div>
</div>

<div className="mt-6 text-[13px] text-white/60">
              Visiting bossmagics.com shows the same central BMeX search to start due diligence instantly.
            </div>
</div>
</div>
</div>
</section>

<section className="py-14 border-t border-white/10 bg-black" id="products">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Products</h2>
<p className="text-white/60 text-[14px] mt-1">Showcasing the Brand Magics suite with flexible pricing: Always On Freemium and Pay As You Go.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="px-2 py-1 text-[12px] rounded-md border border-white/10 bg-white/[0.03]">Always On Freemium</span>
<span className="px-2 py-1 text-[12px] rounded-md border border-white/10 bg-white/[0.03]">Pay As You Go</span>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="building-2"></i>
</div>
<div>
<div className="text-[15px] font-medium">BMeX — Brand Exchange</div>
<div className="text-[12px] text-white/60">List, trade, or pledge equity units of brands</div>
</div>
</div>
<a className="px-3 py-2 text:[13px] text-[13px] rounded-md bg-[#025ba5] hover:bg-[#025ba5]/90" href="#">Enter Exchange</a>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-[12px] text-white/60">Listing</div>
<div className="text-[14px] mt-1">Primary &amp; secondary units</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-[12px] text-white/60">Trading</div>
<div className="text-[14px] mt-1">Market &amp; private deals</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
<div className="text-[12px] text-white/60">Pledging</div>
<div className="text-[14px] mt-1">Asset-backed financing</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="brain-circuit"></i>
</div>
<div>
<div className="text-[15px] font-medium">BossMagics — Automated Due Diligence</div>
<div className="text-[12px] text-white/60">Start with a BMeX search on bossmagics.com</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
<a className="ml-auto px-3 py-2 text-[13px] rounded-md border border-white/10 hover:bg-white/5" href="#">Open</a>
</div>
</div>
</div>

<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors group" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="megaphone"></i>
</div>
<div>
<div className="text-[15px] font-medium">LeadMagics — Marketing</div>
<div className="text-[12px] text-white/60">Leads, campaigns, attribution</div>
</div>
<span className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors group" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="handshake"></i>
</div>
<div>
<div className="text-[15px] font-medium">SalesMagics — Sales</div>
<div className="text-[12px] text-white/60">Pipelines, quotes, closures</div>
</div>
<span className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors group" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="check-square"></i>
</div>
<div>
<div className="text-[15px] font-medium">TaskMagics — Operations</div>
<div className="text-[12px] text-white/60">Projects, tasks, SLAs</div>
</div>
<span className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors group" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="users"></i>
</div>
<div>
<div className="text-[15px] font-medium">HireMagics — HR</div>
<div className="text-[12px] text-white/60">Hiring, onboarding, reviews</div>
</div>
<span className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors group" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="coins"></i>
</div>
<div>
<div className="text-[15px] font-medium">MoneyMagics — Finance</div>
<div className="text-[12px] text-white/60">Billing, payouts, controls</div>
</div>
<span className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors group" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="file-text"></i>
</div>
<div>
<div className="text-[15px] font-medium">LexMagics — Legal</div>
<div className="text-[12px] text-white/60">Contracts, e-sign, governance</div>
</div>
<span className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors group" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="beaker"></i>
</div>
<div>
<div className="text-[15px] font-medium">ScaleMagics — R&amp;D</div>
<div className="text-[12px] text-white/60">Experiments, insights, R&amp;D</div>
</div>
<span className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors group" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="target"></i>
</div>
<div>
<div className="text-[15px] font-medium">GoalMagics — Management</div>
<div className="text-[12px] text-white/60">Strategy, OKRs, reviews</div>
</div>
<span className="ml-auto px-2 py-1 text-[11px] rounded-md border border-white/10">Pay As You Go</span>
</div>
</a>
</div>

<div className="mt-8">
<h3 className="text-xl tracking-tight font-semibold">Always On Freemium</h3>
<p className="text-white/60 text-[14px] mt-1">No subscription plans. Others are Pay As You Go.</p>
<div className="mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="rounded-xl border border-white/10 bg-[#025ba5]/10 p-5 hover:bg-[#025ba5]/15 transition-colors" href="#" id="paymagics">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-[#8cd7f6]/30 bg-[#025ba5]/30">
<i className="h-5 w-5" data-lucide="credit-card"></i>
</div>
<div>
<div className="text-[15px] font-medium">Paymagics</div>
<div className="text-[12px] text-white/70">Transact with BMeX IDs</div>
</div>
</div>
<div className="mt-3 text-[12px] text-white/70">Secure payments without exposing account numbers.</div>
<div className="mt-3">
<span className="px-2 py-1 text-[11px] rounded-md border border-[#8cd7f6]/40 text-[#8cd7f6]">Always On Freemium</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="sprout"></i>
</div>
<div>
<div className="text-[15px] font-medium">Growmagics</div>
<div className="text-[12px] text-white/70">Growth utilities</div>
</div>
</div>
<div className="mt-3 text-[12px] text-white/70">Playbooks, benchmarks, checklists.</div>
<div className="mt-3">
<span className="px-2 py-1 text-[11px] rounded-md border border-[#8cd7f6]/40 text-[#8cd7f6]">Always On Freemium</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="signature"></i>
</div>
<div>
<div className="text-[15px] font-medium">Signmagics</div>
<div className="text-[12px] text-white/70">E-sign essentials</div>
</div>
</div>
<div className="mt-3 text-[12px] text-white/70">Sign, store, track agreements.</div>
<div className="mt-3">
<span className="px-2 py-1 text-[11px] rounded-md border border-[#8cd7f6]/40 text-[#8cd7f6]">Always On Freemium</span>
</div>
</a>

<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="contact"></i>
</div>
<div>
<div className="text-[15px] font-medium">Basic CRM</div>
<div className="text-[12px] text-white/70">Always On Freemium</div>
</div>
</div>
<div className="mt-3 text-[12px] text-white/70">Contacts, activities, simple pipelines.</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-14 border-t border-white/10 bg-[#0b0b0d]" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Services</h2>
<p className="text-white/60 text-[14px] mt-1">Advisory and execution to accelerate your outcomes.</p>
<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05]" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="sliders-horizontal"></i>
</div>
<div>
<div className="text-[15px] font-medium">Functional Consulting</div>
<div className="text-[12px] text-white/60">Systems, processes, enablement</div>
</div>
</div>
</a>
<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05]" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="goal"></i>
</div>
<div>
<div className="text-[15px] font-medium">Goal Orientation</div>
<div className="text-[12px] text-white/60">OKRs and operating cadence</div>
</div>
</div>
</a>
<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05]" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-[15px] font-medium">Sales Acceleration</div>
<div className="text-[12px] text-white/60">Pipeline, velocity, win-rate</div>
</div>
</div>
</a>
<a className="rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05]" href="#">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="merge"></i>
</div>
<div>
<div className="text-[15px] font-medium">M&amp;A Advisory</div>
<div className="text-[12px] text-white/60">Evaluate, structure, integrate</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-14 border-t border-white/10 bg-black" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">About us</h2>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="text-[12px] text-white/60">Who we are</div>
<div className="text-[14px] mt-2 text-white/80">A product company building interoperable brand systems around the BMeX standard.</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="text-[12px] text-white/60">What we do</div>
<div className="text-[14px] mt-2 text-white/80">Provide exchange, apps, and services for growth, governance, and transactions.</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="text-[12px] text-white/60">Why we do it</div>
<div className="text-[14px] mt-2 text-white/80">To make brand equity usable—safely, transparently, and at internet scale.</div>
</div>
</div>
<div className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="text-[12px] text-white/60">How we work</div>
<ul className="mt-2 space-y-2 text-[14px]">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-[#8cd7f6]" data-lucide="check"></i> Standards first: BMeX across apps</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-[#8cd7f6]" data-lucide="check"></i> Privacy by design: transact without account exposure</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-[#8cd7f6]" data-lucide="check"></i> Outcome-driven: leads, revenue, fulfillment, goals</li>
</ul>
</div>
</div>

<div>
<h3 className="text-xl tracking-tight font-semibold">Team</h3>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 overflow-hidden">
<img alt="Team Member" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="text-[14px] font-medium">Aarav K.</div>
<div className="text-[12px] text-white/60">Founder &amp; CEO</div>
</div>
</div>
<div className="rounded-lg border border-white/10 overflow-hidden">
<img alt="Team Member" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-3">
<div className="text-[14px] font-medium">Maya S.</div>
<div className="text-[12px] text-white/60">Product Lead</div>
</div>
</div>
<div className="rounded-lg border border-white/10 overflow-hidden">
<img alt="Team Member" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="text-[14px] font-medium">Ishaan D.</div>
<div className="text-[12px] text-white/60">Engineering</div>
</div>
</div>
<div className="rounded-lg border border-white/10 overflow-hidden">
<img alt="Team Member" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="text-[14px] font-medium">Neha R.</div>
<div className="text-[12px] text-white/60">Operations</div>
</div>
</div>
</div>
<a className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 hover:bg-white/5 text-[13px]" href="#support">
<i className="h-4 w-4" data-lucide="mail"></i> Contact us
            </a>
</div>
</div>
</div>
</section>

<section className="py-14 border-t border-white/10 bg-[#0b0b0d]" id="support">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Support</h2>
<p className="text-white/60 text-[14px] mt-1">Raise tickets for assistance. Our team will respond promptly.</p>
<div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="text-[12px] text-white/60">Help Center</div>
<ul className="mt-2 space-y-2 text-[14px]">
<li><a className="inline-flex items-center gap-2 hover:underline" href="#"><i className="h-4 w-4" data-lucide="book-open"></i> Getting started with BMeX</a></li>
<li><a className="inline-flex items-center gap-2 hover:underline" href="#"><i className="h-4 w-4" data-lucide="lock"></i> Security and privacy</a></li>
<li><a className="inline-flex items-center gap-2 hover:underline" href="#"><i className="h-4 w-4" data-lucide="layers"></i> Integrations</a></li>
</ul>
</div>
</div>
<div className="lg:col-span-2">
<form className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-[12px] text-white/60">Full name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 outline-none focus:ring-1 focus:ring-[#025ba5]/60 focus:border-[#8cd7f6]/40 text-[14px]" placeholder="Enter your name" required="" type="text"/>
</div>
<div>
<label className="text-[12px] text-white/60">Email</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 outline-none focus:ring-1 focus:ring-[#025ba5]/60 focus:border-[#8cd7f6]/40 text-[14px]" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-[12px] text-white/60">Subject</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 outline-none focus:ring-1 focus:ring-[#025ba5]/60 focus:border-[#8cd7f6]/40 text-[14px]" placeholder="How can we help?" required="" type="text"/>
</div>
<div>
<label className="text-[12px] text-white/60">Category</label>
<div className="relative mt-1">
<i className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down"></i>
<select className="appearance-none w-full px-3 py-2 pr-9 rounded-md bg-black/40 border border-white/10 outline-none focus:ring-1 focus:ring-[#025ba5]/60 focus:border-[#8cd7f6]/40 text-[14px]">
<option>General</option>
<option>Billing</option>
<option>Technical</option>
<option>Account</option>
</select>
</div>
</div>
<div>
<label className="text-[12px] text-white/60">BMeX ID (optional)</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 outline-none focus:ring-1 focus:ring-[#025ba5]/60 focus:border-[#8cd7f6]/40 text-[14px]" pattern="^[0-9]{8}XX1$" placeholder="12345678XX1" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-[12px] text-white/60">Message</label>
<textarea className="mt-1 w-full px-3 py-2 rounded-md bg-black/40 border border-white/10 outline-none focus:ring-1 focus:ring-[#025ba5]/60 focus:border-[#8cd7f6]/40 text-[14px]" placeholder="Describe your issue..." rows="5"></textarea>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-[12px] text-white/50">Response within 1–2 business days.</div>
<button className="px-4 py-2 rounded-md bg-[#025ba5] hover:bg-[#025ba5]/90 text-[13px]" type="submit">Submit ticket</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md flex items-center justify-center border border-white/10 bg-white/5">
<span className="tracking-tight text-[12px]" style={{letterSpacing: '-0.02em'}}>BM</span>
</div>
<span className="text-[14px] font-medium">Brand Magics</span>
</div>
<p className="text-[13px] text-white/60 mt-3">Interoperable brand systems powered by BMeX.</p>
</div>
<div>
<div className="text-[12px] uppercase tracking-wide text-white/50">Products</div>
<ul className="mt-2 space-y-2 text-[13px]">
<li><a className="hover:underline" href="#products">BMeX</a></li>
<li><a className="hover:underline" href="#products">BossMagics</a></li>
<li><a className="hover:underline" href="#products">LeadMagics</a></li>
<li><a className="hover:underline" href="#products">SalesMagics</a></li>
<li><a className="hover:underline" href="#products">TaskMagics</a></li>
<li><a className="hover:underline" href="#products">HireMagics</a></li>
<li><a className="hover:underline" href="#products">MoneyMagics</a></li>
<li><a className="hover:underline" href="#products">LexMagics</a></li>
<li><a className="hover:underline" href="#products">ScaleMagics</a></li>
<li><a className="hover:underline" href="#products">GoalMagics</a></li>
</ul>
</div>
<div>
<div className="text-[12px] uppercase tracking-wide text-white/50">Free Modules</div>
<ul className="mt-2 space-y-2 text-[13px]">
<li><a className="hover:underline" href="#paymagics">Paymagics</a></li>
<li><a className="hover:underline" href="#products">Growmagics</a></li>
<li><a className="hover:underline" href="#products">Signmagics</a></li>
<li><a className="hover:underline" href="#products">Basic</a></li></ul></div></div></div></footer>
    </>
  );
}
