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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-bold tracking-tighter text-lg">Fy</span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Fynapse</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#">Customers</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">Login</button>
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-900/20">
                    Get a demo
                </button>
</div>
</div>
</nav>

<section className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="max-w-xl fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-8 border border-slate-200">
<span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
                    New: AI-Native Reconciliation
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-8">
                    The ERP for <br/> <span className="text-slate-400">real-time</span> Finance
                </h1>
<p className="text-lg md:text-xl leading-relaxed text-slate-500 mb-10 max-w-lg font-normal">
                    Fynapse gives Finance a single system of record to run the full cycle continuously. Stop rebuilding numbers at month end.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#FFD700] hover:bg-[#e6c200] text-slate-900 px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2">
                        Start now
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors bg-white">
                        View documentation
                    </button>
</div>
</div>

<div className="relative h-[500px] w-full fade-in-up" style={{animationDelay: '0.3s'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-[3rem] -rotate-3 scale-95 border border-slate-100"></div>

<div className="absolute inset-4 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-500">

<div className="h-14 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
<div className="h-2 w-24 bg-slate-200 rounded-full"></div>
</div>
<div className="flex gap-2">
<iconify-icon className="text-slate-400" icon="solar:bell-linear" width="20"></iconify-icon>
</div>
</div>

<div className="p-8 flex-1 bg-slate-50/30 relative">

<div className="flex gap-6 mb-8">
<div className="flex-1 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
<p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">Revenue (ARR)</p>
<div className="text-2xl font-semibold tracking-tight text-slate-900">$12.4M</div>
<div className="flex items-center gap-1 text-green-600 text-xs mt-2">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
<span>+12% vs last month</span>
</div>
</div>
<div className="flex-1 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
<p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wider">Cash Position</p>
<div className="text-2xl font-semibold tracking-tight text-slate-900">$4.2M</div>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>Real-time sync</span>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:bill-check-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Invoice #4092 Cleared</div>
<div className="text-xs text-slate-500">Stripe Integration • Just now</div>
</div>
</div>
<div className="text-sm font-semibold text-slate-900">+$2,400.00</div>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:card-send-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">AWS Infrastructure</div>
<div className="text-xs text-slate-500">Corporate Card • 2m ago</div>
</div>
</div>
<div className="text-sm font-semibold text-slate-900">-$840.50</div>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
<iconify-icon className="text-[#FFD700]" icon="solar:check-circle-bold"></iconify-icon>
                            Books Balanced
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 py-12 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 mb-8 tracking-wide">TRUSTED BY MODERN FINANCE TEAMS</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-slate-800 font-sans">Acme<span className="font-normal text-slate-500">Corp</span></span>
<span className="text-xl font-semibold tracking-tight text-slate-800 italic">Globex</span>
<span className="text-xl font-bold tracking-tight text-slate-800">Soylent<span className="text-[#FFD700]">.</span></span>
<span className="text-xl font-extrabold tracking-tighter text-slate-800 uppercase">Umbrella</span>
<span className="text-xl font-medium tracking-widest text-slate-800">MASSIVE</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-16 lg:p-20 overflow-hidden relative">
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="order-2 lg:order-1">
<div className="w-14 h-14 bg-white text-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-slate-100">
<iconify-icon icon="solar:history-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Stop living in the past with <br/>periodic reporting.
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Most finance systems were designed for periodic reporting, not continuous operation. Finance teams waste days reconciling and explaining numbers after the fact.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-red-500 text-xl" icon="solar:close-circle-linear"></iconify-icon>
                            Delayed visibility into cash flow
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-red-500 text-xl" icon="solar:close-circle-linear"></iconify-icon>
                            Manual reconciliation at month-end
                        </li>
<li className="flex items-center gap-3 text-slate-600 font-medium">
<iconify-icon className="text-red-500 text-xl" icon="solar:close-circle-linear"></iconify-icon>
                            Fragmented data sources
                        </li>
</ul>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
<div className="relative w-full max-w-md aspect-square">

<div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white rounded-2xl shadow-xl border border-slate-100 p-6 z-10 rotate-3">
<div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-4">
<span className="text-sm font-semibold text-red-500">Discrepancy Detected</span>
<span className="text-xs text-slate-400">Oct 31</span>
</div>
<div className="space-y-3 opacity-50">
<div className="h-2 bg-slate-100 rounded w-full"></div>
<div className="h-2 bg-slate-100 rounded w-5/6"></div>
<div className="h-2 bg-slate-100 rounded w-4/6"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-white rounded-2xl shadow-lg border border-slate-100 p-6 -rotate-2">
<div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-4">
<span className="text-sm font-semibold text-slate-900">Month End Close</span>
<span className="text-xs text-slate-400">Pending</span>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-slate-500">Bank</span>
<span className="font-mono text-slate-900">$10,420</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Ledger</span>
<span className="font-mono text-slate-900">$10,100</span>
</div>
<div className="flex justify-between text-xs pt-2 border-t border-slate-50">
<span className="text-red-500 font-medium">Variance</span>
<span className="font-mono text-red-500">-$320</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-24 px-6 max-w-7xl mx-auto">
<div className="bg-[#051124] rounded-[2.5rem] p-8 md:p-16 lg:p-20 overflow-hidden relative text-white">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">

<div className="relative flex items-center justify-center">
<div className="relative w-full max-w-md aspect-square bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm p-8 flex flex-col items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
<div className="h-[1px] w-full absolute bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
</div>

<div className="relative z-10 bg-slate-950 border border-slate-700 shadow-[0_0_50px_rgba(37,99,235,0.2)] rounded-xl p-6 text-center w-48">
<iconify-icon className="text-[#FFD700] mb-2" icon="solar:layers-minimalistic-bold-duotone" width="32"></iconify-icon>
<div className="text-white font-semibold text-sm">Super Ledger</div>
<div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Single Truth</div>
</div>

<div className="absolute top-8 left-8 bg-slate-800/80 border border-slate-700 p-3 rounded-lg flex items-center gap-2 text-xs text-slate-300">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Events
                        </div>
<div className="absolute bottom-8 right-8 bg-slate-800/80 border border-slate-700 p-3 rounded-lg flex items-center gap-2 text-xs text-slate-300">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> Audit
                        </div>
</div>
</div>

<div>
<div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-medium mb-6">
                        CORE TECHNOLOGY
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                        The Super Ledger. <br/>
<span className="text-slate-400">Aligned by default.</span>
</h2>
<p className="text-lg text-slate-300 leading-relaxed mb-8">
                        The Super Ledger is a single, real-time financial record that links every business event directly to its financial impact. No fragmented subledgers. No reconciliation gaps.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-slate-800/40 p-5 rounded-xl border border-slate-800">
<iconify-icon className="text-[#FFD700] text-2xl mb-3" icon="solar:check-read-linear"></iconify-icon>
<h4 className="font-medium text-white mb-1">Total Control</h4>
<p className="text-sm text-slate-400">The closure role of a general ledger.</p>
</div>
<div className="bg-slate-800/40 p-5 rounded-xl border border-slate-800">
<iconify-icon className="text-[#FFD700] text-2xl mb-3" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
<h4 className="font-medium text-white mb-1">Granularity</h4>
<p className="text-sm text-slate-400">Transaction-level detail of a subledger.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                What Finance can run on Fynapse
            </h2>
<p className="text-xl text-slate-500 font-light">
                Replace fragmented systems with one platform Finance can operate on day to day.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:banknote-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Revenue &amp; Order to Cash</h3>
<p className="text-slate-500 text-sm leading-relaxed">Price, bill and recognise revenue from a single financial truth.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:card-recive-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Accounts Receivable</h3>
<p className="text-slate-500 text-sm leading-relaxed">Keep receivables aligned to billing, settlements and cash automatically.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AP &amp; Procure to Pay</h3>
<p className="text-slate-500 text-sm leading-relaxed">Turn payables into a clean, explainable financial flow.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Cash Management</h3>
<p className="text-slate-500 text-sm leading-relaxed">Make cash explainable across banks, entities and currencies instantly.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Allocations &amp; Adjustments</h3>
<p className="text-slate-500 text-sm leading-relaxed">Give controllers numbers they can trace, defend, and trust.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group bg-gradient-to-br from-slate-50 to-white">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Reporting &amp; BI</h3>
<p className="text-slate-500 text-sm leading-relaxed">Transaction-level, finance-grade data ready for BI, FP&amp;A and AI without re-engineering.</p>
</div>
</div>
</section>

<section className="bg-slate-50 py-24 border-y border-slate-100">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="mb-8 flex justify-center text-[#FFD700]">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-900 mb-10 leading-tight">
                "Financial truth is created once and maintained continuously. We no longer need to reconstruct or explain numbers at the end of the period."
            </h2>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-slate-200 rounded-full mb-4 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=051124&amp;color=fff"/>
</div>
<div className="font-semibold text-slate-900">Sarah Jenkins</div>
<div className="text-slate-500 text-sm">CFO, TechGrowth Inc.</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/40">
<div className="grid lg:grid-cols-2">
<div className="p-12 md:p-20 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
                        AI-Ready Infrastructure
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Built for AI-ready Finance
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Because financial data in Fynapse is structured, deterministic and fully traceable, it provides a safe foundation for AI in Finance. Enable automation and forecasting without compromising control.
                    </p>
<a className="text-slate-900 font-medium hover:text-blue-600 inline-flex items-center gap-2 transition-colors" href="#">
                        Learn about our AI Engine 
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="bg-slate-50 border-l border-slate-100 p-12 md:p-20 flex items-center justify-center">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-full max-w-sm space-y-4">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">Structured Data Lake</span>
</div>
<div className="space-y-2">
<div className="flex gap-2">
<div className="h-8 w-8 bg-slate-100 rounded"></div>
<div className="h-8 flex-1 bg-slate-50 rounded border border-slate-100"></div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 bg-slate-100 rounded"></div>
<div className="h-8 flex-1 bg-slate-50 rounded border border-slate-100"></div>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 bg-slate-100 rounded"></div>
<div className="h-8 flex-1 bg-slate-50 rounded border border-slate-100"></div>
</div>
</div>
<div className="pt-4 mt-4 border-t border-slate-50">
<div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs p-3 rounded-lg flex justify-between items-center">
<span>AI Forecast confidence</span>
<span className="font-bold">98.4%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#051124] py-32 text-center px-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8">
                Ready for real-time finance?
            </h2>
<p className="text-xl text-slate-400 mb-12 font-light">
                Join the finance teams operating in the present, not the past.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-[#FFD700] text-slate-900 hover:bg-[#e6c200] px-10 py-4 rounded-full text-lg font-medium transition-colors inline-flex items-center justify-center gap-2">
                    Request a demo
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white/10 text-white hover:bg-white/20 px-10 py-4 rounded-full text-lg font-medium transition-colors border border-white/10">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 text-sm text-slate-500">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs">F</div>
<span className="font-bold text-slate-900">Fynapse</span>
</div>
<p className="mb-6">The Finance ERP for real-time Finance.</p>
<div className="flex gap-4">
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:brand-twitter-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-slate-900 cursor-pointer" icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Platform</h4>
<ul className="space-y-3">
<li><a className="hover:text-slate-900 transition-colors" href="#">Super Ledger</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Revenue</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Payables</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Treasury</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
</footer>

    </>
  );
}
