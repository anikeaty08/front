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



        lucide.createIcons();
    
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
      
<div className="noise-bg"></div>

<div className="orb w-[600px] h-[600px] bg-[#1DA1F2] top-[-200px] left-[50%] -translate-x-1/2 opacity-20"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center fade-in-up">
<div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
<span className="text-base font-semibold tracking-tight text-white flex items-center gap-2">
<i className="text-[#1DA1F2] w-5 h-5" data-lucide="bar-chart-2"></i>
                KAL Ai
            </span>
<div className="h-4 w-[1px] bg-white/10 hidden md:block"></div>
<div className="hidden md:flex gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#problem">Risk Analysis</a>
<a className="hover:text-white transition-colors" href="#workflow">How it Works</a>
<a className="hover:text-white transition-colors" href="#solution">Intelligence</a>
</div>
<a className="ml-2 bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-[#1DA1F2] hover:text-white transition-colors duration-300" href="mailto:info@kal.ai">
                Contact Sales
            </a>
</div>
</nav>
<main className="relative z-10 pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">

<header className="text-center mb-24 fade-in-up delay-100 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1DA1F2]/30 bg-[#1DA1F2]/10 text-[#1DA1F2] text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DA1F2] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DA1F2]"></span>
</span>
                Housing Risk Intelligence
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 text-glow leading-[0.95]">
<span className="text-gradient">Predict risk.</span><br/>
<span className="text-[#1DA1F2]">Protect revenue.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                AI-driven analytics for builders and lenders to navigate market corrections, minimize defaults, and secure cash flow.
            </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-4">
<a className="group relative overflow-hidden rounded-lg bg-white px-8 py-3.5 text-black transition-all hover:bg-[#1DA1F2] hover:text-white hover:shadow-[0_0_40px_-10px_rgba(29,161,242,0.6)]" href="mailto:info@kal.ai">
<span className="relative z-10 text-sm font-semibold flex items-center gap-2">
                        Get Started
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</a>
<button className="px-8 py-3.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white transition-colors border border-transparent hover:border-white/10">
                    View Methodology
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl rounded-t-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl overflow-hidden aspect-[16/8] group">
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-20"></div>
<div className="h-full w-full rounded-xl bg-neutral-900/50 relative overflow-hidden flex flex-col p-6 gap-6">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-neutral-500 font-mono flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            LIVE ANALYSIS FEED
                        </div>
</div>
<div className="grid grid-cols-3 gap-6 h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
<div className="col-span-2 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1DA1F2]/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
</div>
<div className="col-span-1 bg-white/5 rounded-lg border border-white/5"></div>
<div className="col-span-1 bg-white/5 rounded-lg border border-white/5"></div>
<div className="col-span-2 bg-white/5 rounded-lg border border-white/5"></div>
</div>
</div>
</div>
</header>

<div className="mb-32 fade-in-up delay-200">
<div className="max-w-4xl mx-auto">
<div className="glass-card rounded-2xl border border-white/10 p-8 md:p-12 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#1DA1F2] blur-[120px] opacity-5 pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 relative z-10">
<div>
<div className="flex items-center gap-2 text-[#1DA1F2] mb-2">
<i className="w-5 h-5" data-lucide="trending-down"></i>
<span className="text-xs font-semibold uppercase tracking-wider">Market Intelligence</span>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight">Peak-to-Bottom Price Declines</h3>
<p className="text-sm text-neutral-400 mt-1">Ontario Housing Market Correction (2022-2025)</p>
</div>
<div className="flex gap-4 text-xs text-neutral-500">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#1DA1F2]"></div> Singles
                            </div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div> Towns
                            </div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-400"></div> Condos
                            </div>
</div>
</div>

<div className="relative h-[280px] w-full border-b border-white/10 mt-8">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-neutral-600 font-mono pointer-events-none pb-0">
<div className="border-b border-dashed border-white/5 w-full flex items-end pb-1"><span className="-translate-y-1/2">25%</span></div>
<div className="border-b border-dashed border-white/5 w-full flex items-end pb-1"><span className="-translate-y-1/2">20%</span></div>
<div className="border-b border-dashed border-white/5 w-full flex items-end pb-1"><span className="-translate-y-1/2">15%</span></div>
<div className="border-b border-dashed border-white/5 w-full flex items-end pb-1"><span className="-translate-y-1/2">10%</span></div>
<div className="border-b border-dashed border-white/5 w-full flex items-end pb-1"><span className="-translate-y-1/2">5%</span></div>
<div className="w-full flex items-end pb-1 opacity-0"><span>0%</span></div>
</div>

<div className="absolute inset-0 flex items-end justify-around px-2 md:px-12 pt-6 pb-[1px]">

<div className="relative flex flex-col items-center group w-full max-w-[120px]">
<span className="absolute -top-8 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">-22.2%</span>
<div className="w-full grow-bar bg-gradient-to-t from-[#1DA1F2]/10 to-[#1DA1F2] rounded-t-sm border-t border-x border-[#1DA1F2]/30 relative overflow-hidden group-hover:brightness-125 transition-all duration-300" style={{height: '88.8%', animationDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="mt-4 text-[10px] uppercase tracking-wider font-medium text-neutral-500 group-hover:text-white transition-colors">Singles (GTA)</span>
</div>

<div className="relative flex flex-col items-center group w-full max-w-[120px]">
<span className="absolute -top-8 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">-23.0%</span>
<div className="w-full grow-bar bg-gradient-to-t from-indigo-900/40 to-indigo-500 rounded-t-sm border-t border-x border-indigo-500/30 relative overflow-hidden group-hover:brightness-125 transition-all duration-300" style={{height: '92%', animationDelay: '350ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="mt-4 text-[10px] uppercase tracking-wider font-medium text-neutral-500 group-hover:text-white transition-colors">Towns (Est.)</span>
</div>

<div className="relative flex flex-col items-center group w-full max-w-[120px]">
<span className="absolute -top-8 text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">-19.5%</span>
<div className="w-full grow-bar bg-gradient-to-t from-amber-900/40 to-amber-400 rounded-t-sm border-t border-x border-amber-400/30 relative overflow-hidden group-hover:brightness-125 transition-all duration-300" style={{height: '78%', animationDelay: '500ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="mt-4 text-[10px] uppercase tracking-wider font-medium text-neutral-500 group-hover:text-white transition-colors">Condos (GTA)</span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="mb-32 fade-in-up delay-300" id="problem">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                        The market is <span className="text-[#1DA1F2]">unforgiving.</span>
</h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                        Ontario’s housing market has shifted from unprecedented growth to severe correction. Builders with sold-out projects face a critical question: How many agreements will convert to closings?
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="text-red-400 w-4 h-4" data-lucide="x-circle"></i>
                            Heightened default risks
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="text-red-400 w-4 h-4" data-lucide="x-circle"></i>
                            Exposure to mortgage fraud
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="text-red-400 w-4 h-4" data-lucide="x-circle"></i>
                            Unpredictable cash flows
                        </li>
</ul>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass-card p-6 rounded-2xl relative group">
<div className="absolute top-4 right-4 text-neutral-600 group-hover:text-[#1DA1F2] transition-colors">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 mt-2">Financial Volatility</h3>
<p className="text-sm text-neutral-500">Buyers qualifying in 2021 may fail stress tests in today's rate environment.</p>
</div>
<div className="glass-card p-6 rounded-2xl relative group">
<div className="absolute top-4 right-4 text-neutral-600 group-hover:text-[#1DA1F2] transition-colors">
<i className="w-5 h-5" data-lucide="trending-down"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 mt-2">Valuation Gaps</h3>
<p className="text-sm text-neutral-500">Appraisal shortfalls forcing buyers to bridge impossible equity gaps.</p>
</div>
<div className="glass-card p-6 rounded-2xl relative group md:col-span-2">
<div className="absolute top-4 right-4 text-neutral-600 group-hover:text-[#1DA1F2] transition-colors">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2 mt-2">The "Unknown" Buyer</h3>
<p className="text-sm text-neutral-500">Lack of transparency into the true intent and capacity of assignors and end-users.</p>
</div>
</div>
</div>
</section>

<section className="mb-32 fade-in-up delay-400 relative" id="workflow">
<div className="text-center mb-16">
<span className="text-[#1DA1F2] text-xs font-semibold tracking-wide uppercase mb-2 block">Workflow</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">From Data to Decisions</h2>
<p className="text-sm text-neutral-400 mt-4 max-w-lg mx-auto">A seamless end-to-end process transforming raw documentation into clear, actionable risk intelligence.</p>
</div>

<div className="relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-[28%] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-[#1DA1F2]/30 to-transparent -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="group relative flex flex-col items-center">
<div className="glass-card w-full aspect-square md:aspect-[4/3] max-w-[240px] rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:bg-white/5 transition-all duration-300 border hover:border-[#1DA1F2]/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#1DA1F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#1DA1F2]/10 rounded-full flex items-center justify-center text-[#1DA1F2] mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="file-scan"></i>
</div>
<h3 className="text-base font-medium text-white">Data Ingestion</h3>
<div className="mt-4 flex gap-2 justify-center opacity-60">
<i className="w-4 h-4 text-neutral-400" data-lucide="file-text"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="home"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="user-square"></i>
</div>
</div>
<div className="mt-6 text-center">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Process Data</span>
</div>

<div className="md:hidden mt-4 text-neutral-600 animate-bounce">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</div>

<div className="hidden md:block absolute top-[28%] -right-[15%] -translate-y-1/2 text-neutral-600">
<i className="w-5 h-5 text-[#1DA1F2]" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group relative flex flex-col items-center">
<div className="glass-card w-full aspect-square md:aspect-[4/3] max-w-[240px] rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:bg-white/5 transition-all duration-300 border hover:border-[#1DA1F2]/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#1DA1F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#1DA1F2]/10 rounded-full flex items-center justify-center text-[#1DA1F2] mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-base font-medium text-white">AI Analysis</h3>
<div className="mt-4 flex flex-col gap-1 w-1/2 mx-auto">
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-[#1DA1F2] w-[60%] animate-pulse"></div>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-[#1DA1F2] w-[80%] animate-pulse delay-100"></div>
</div>
</div>
</div>
<div className="mt-6 text-center">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Apply Algorithms</span>
</div>

<div className="md:hidden mt-4 text-neutral-600 animate-bounce">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</div>

<div className="hidden md:block absolute top-[28%] -right-[15%] -translate-y-1/2 text-neutral-600">
<i className="w-5 h-5 text-[#1DA1F2]" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group relative flex flex-col items-center">
<div className="glass-card w-full aspect-square md:aspect-[4/3] max-w-[240px] rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:bg-white/5 transition-all duration-300 border hover:border-[#1DA1F2]/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#1DA1F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#1DA1F2]/10 rounded-full flex items-center justify-center text-[#1DA1F2] mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="pie-chart"></i>
</div>
<h3 className="text-base font-medium text-white">Risk Profile</h3>
<div className="mt-4 flex gap-2 items-center text-[10px] text-neutral-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Low
                                <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Med
                                <span className="w-2 h-2 rounded-full bg-red-500"></span> High
                            </div>
</div>
<div className="mt-6 text-center">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Provide Insights</span>
</div>

<div className="md:hidden mt-4 text-neutral-600 animate-bounce">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</div>

<div className="hidden md:block absolute top-[28%] -right-[15%] -translate-y-1/2 text-neutral-600">
<i className="w-5 h-5 text-[#1DA1F2]" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group relative flex flex-col items-center">
<div className="glass-card w-full aspect-square md:aspect-[4/3] max-w-[240px] rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:bg-white/5 transition-all duration-300 border hover:border-[#1DA1F2]/50 relative overflow-hidden bg-[#1DA1F2]/5 shadow-[0_0_20px_-5px_rgba(29,161,242,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-[#1DA1F2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white mb-5 shadow-lg shadow-[#1DA1F2]/30 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="lightbulb"></i>
</div>
<h3 className="text-base font-medium text-white">Recommendations</h3>
<div className="mt-4 text-[10px] text-[#1DA1F2] uppercase tracking-wider font-semibold">
                                Actionable
                            </div>
</div>
<div className="mt-6 text-center">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Decisions</span>
</div>
</div>
</div>

<div className="hidden md:block absolute bottom-2 left-[12.5%] right-[12.5%] h-8 border-b border-x border-[#1DA1F2]/30 rounded-b-3xl -z-10 opacity-60"></div>
<div className="hidden md:flex justify-center mt-6">
<span className="px-3 py-1 bg-[#030303] text-[10px] font-mono text-[#1DA1F2] border border-[#1DA1F2]/30 rounded-full relative z-20">Continuous Feedback Loop</span>
</div>
</div>
</section>

<section className="mb-32 fade-in-up delay-500" id="solution">
<div className="mb-12 max-w-2xl">
<span className="text-[#1DA1F2] text-xs font-semibold tracking-wide uppercase mb-2 block">The Solution</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight">Intelligence at scale.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">

<div className="glass-card md:col-span-4 md:row-span-2 p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#1DA1F2] rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div>
<i className="text-[#1DA1F2] w-8 h-8 mb-6" data-lucide="cpu"></i>
<h3 className="text-2xl font-medium text-white mb-3">Holistic AI Assessment</h3>
<p className="text-neutral-400 max-w-md">Our common-sense algorithms analyze financial capacity, information accuracy, age, and marital status to paint a complete picture of buyer risk.</p>
</div>
<div className="mt-8 flex gap-2">
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Fraud Detection</span>
<span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-neutral-300">Capacity Check</span>
</div>
</div>

<div className="glass-card md:col-span-2 md:row-span-1 p-6 rounded-3xl flex flex-col justify-center">
<i className="text-white w-6 h-6 mb-4" data-lucide="shield-check"></i>
<h3 className="text-lg font-medium text-white mb-1">Reduced Exposure</h3>
<p className="text-xs text-neutral-500">Mitigate inventory gluts before they happen.</p>
</div>

<div className="glass-card md:col-span-2 md:row-span-1 p-6 rounded-3xl flex flex-col justify-center">
<i className="text-white w-6 h-6 mb-4" data-lucide="timer"></i>
<h3 className="text-lg font-medium text-white mb-1">Rapid Due Diligence</h3>
<p className="text-xs text-neutral-500">From days to minutes with minimal overhead.</p>
</div>

<div className="glass-card md:col-span-3 p-6 rounded-3xl">
<div className="flex items-center gap-4 mb-4">
<div className="p-2 bg-[#1DA1F2]/10 rounded-lg text-[#1DA1F2]">
<i className="w-5 h-5" data-lucide="id-card"></i>
</div>
<h3 className="text-lg font-medium text-white">Insider Design</h3>
</div>
<p className="text-sm text-neutral-400">Developed by industry veterans with decades of sales &amp; development experience.</p>
</div>

<div className="glass-card md:col-span-3 p-6 rounded-3xl">
<div className="flex items-center gap-4 mb-4">
<div className="p-2 bg-[#1DA1F2]/10 rounded-lg text-[#1DA1F2]">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-medium text-white">Govt. Incentives</h3>
</div>
<p className="text-sm text-neutral-400">Data-backed access to First Time Home Buyer programs and other incentives.</p>
</div>
</div>
</section>

<section className="mb-32">
<h2 className="text-2xl font-medium tracking-tight mb-8 flex items-center gap-3">
<i className="text-neutral-500 w-5 h-5" data-lucide="users"></i>
                Leadership
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl border-t-2 border-t-transparent hover:border-t-[#1DA1F2]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold text-white">JA</div>
<div>
<div className="font-medium text-white">Jahan Ali</div>
<div className="text-[10px] uppercase tracking-wider text-[#1DA1F2]">Tech Leader</div>
</div>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Visionary &amp; Tech Leader. Founder of mobileLIVE &amp; HachiAI. 20+ years in Data &amp; AI. EY Entrepreneur of the Year finalist.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl border-t-2 border-t-transparent hover:border-t-[#1DA1F2]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold text-white">DY</div>
<div>
<div className="font-medium text-white">Danish Yusuf</div>
<div className="text-[10px] uppercase tracking-wider text-[#1DA1F2]">CEO, Zensurance</div>
</div>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Former McKinsey digital insurance leader. Software architect at IBM. MBA from Harvard Business School.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl border-t-2 border-t-transparent hover:border-t-[#1DA1F2]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold text-white">KY</div>
<div>
<div className="font-medium text-white">Khalid Yusuf</div>
<div className="text-[10px] uppercase tracking-wider text-[#1DA1F2]">CEO, Neuhaus</div>
</div>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
                        26 years as developer/builder. Expert in land acquisition, sales, and financing. The industry insight behind KAL Ai.
                    </p>
</div>
</div>
</section>

<section className="relative rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/5 p-8 md:p-16 text-center mb-24" id="vision">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1DA1F2] to-transparent"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<i className="text-[#1DA1F2] w-10 h-10 mb-6 mx-auto" data-lucide="globe"></i>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">Vision 2030</h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                    We aim to mitigate billions in sector-wide exposures, supporting more predictable revenue realization and smoother housing delivery across Ontario.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-[#1DA1F2] pb-0.5 hover:text-[#1DA1F2] transition-colors" href="mailto:info@kal.ai">
                    Join the future of housing
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>
<footer className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500">
<div>
                © 2025 KAL Ai. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="mailto:info@kal.ai">Contact</a>
</div>
</footer>
</main>
<style>
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
    </style>


    </>
  );
}
