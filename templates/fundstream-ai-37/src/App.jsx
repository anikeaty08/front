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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-[2000px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="bg-gradient-to-br from-emerald-400 to-violet-500 w-6 h-6 rounded flex items-center justify-center text-black text-[10px] font-bold shadow-[0_0_15px_rgba(52,211,153,0.3)]">
<i className="w-3.5 h-3.5 text-white fill-white" data-lucide="zap"></i>
</div>
                    FUNDSTREAM
                </a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400 uppercase tracking-wide">
<a className="text-white hover:text-emerald-400 transition-colors" href="#">Startups</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Vote</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Portfolio</a>
<a className="flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors" href="#">
<i className="w-3 h-3" data-lucide="sparkles"></i> AI Analyst
                    </a>
</div>
</div>
<div className="flex items-center gap-5">
<div className="hidden md:flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-3 py-1.5 focus-within:border-zinc-600 transition-colors">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-xs w-48 placeholder-zinc-600 text-zinc-200" placeholder="Find startups..." type="text"/>
<span className="text-[10px] text-zinc-700 border border-zinc-800 rounded px-1.5 py-0.5">⌘K</span>
</div>
<div className="flex items-center gap-3 pl-3 border-l border-zinc-800">
<div className="text-right hidden sm:block">
<div className="text-xs font-medium text-white">0.45 ETH</div>
<div className="text-[10px] text-zinc-500 font-mono">0x71...8A2</div>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 p-[1px]">
<div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white" data-lucide="wallet"></i>
</div>
</div>
</div>
</div>
</div>
</nav>

<header className="relative w-full min-h-[90vh] flex flex-col justify-end overflow-hidden pb-12 pt-24">

<div className="absolute inset-0 z-0">

<img alt="Startup Intro Video" className="w-full h-full object-cover opacity-60 scale-105" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 hero-gradient"></div>
</div>

<div className="absolute top-28 right-8 md:right-16 z-20 hidden lg:block animate-fade-in">
<div className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-lg p-4 w-72 shadow-2xl">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-violet-400" data-lucide="bot"></i>
<span className="text-xs font-semibold text-violet-100">AI Investment Memo</span>
</div>
<span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded border border-emerald-500/20 font-mono">SCORE: 9.2</span>
</div>
<p className="text-xs text-zinc-400 leading-relaxed mb-3">
                    "High potential. Codebase analysis shows active commits. Team verified. Market fit strong in DePIN sector."
                </p>
<div className="space-y-2">
<div className="flex justify-between text-[10px] text-zinc-500">
<span>Team Strength</span>
<span className="text-white">High</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-violet-500 w-[85%]"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-500">
<span>Smart Contract Risk</span>
<span className="text-emerald-400">Low Audit Passed</span>
</div>
</div>
</div>
</div>

<div className="relative z-10 px-4 sm:px-8 max-w-[2000px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-7 space-y-6">
<div className="flex items-center gap-3">
<span className="bg-white/10 backdrop-blur border border-white/10 px-2 py-1 rounded text-[10px] font-medium text-white uppercase tracking-wider">Series A</span>
<span className="text-emerald-400 text-xs font-medium flex items-center gap-1">
<i className="w-3 h-3" data-lucide="shield-check"></i> KYC Verified
                    </span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[0.95]">
                    Nebula <span className="text-zinc-500">Protocol</span>
</h1>
<p className="text-lg text-zinc-300 font-light max-w-xl leading-relaxed">
                    Decentralized GPU compute grid for AI training. Building the infrastructure layer for the next generation of autonomous agents.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="flex items-center gap-2 bg-white text-black pl-5 pr-6 py-3 rounded hover:bg-zinc-200 transition-colors font-medium text-sm">
<i className="w-4 h-4 fill-black" data-lucide="zap"></i>
                        Invest in Seed Round
                    </button>
<button className="group flex items-center gap-2 bg-zinc-900/40 backdrop-blur border border-zinc-700 text-white pl-4 pr-5 py-3 rounded hover:bg-zinc-800 transition-colors font-medium text-sm">
<i className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" data-lucide="presentation"></i>
                        View Pitch Deck
                    </button>
<button className="flex items-center justify-center w-11 h-11 rounded border border-zinc-700 bg-zinc-900/40 backdrop-blur hover:bg-zinc-800 hover:border-violet-500/50 transition-all group relative">
<i className="w-4 h-4 text-violet-400" data-lucide="sparkles"></i>
<span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Ask AI Agent</span>
</button>
</div>
</div>

<div className="lg:col-span-5 flex items-end">
<div className="w-full bg-zinc-950/40 backdrop-blur-xl border border-zinc-800/50 p-6 rounded-xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Project Roadmap &amp; Vesting</h3>
<span className="text-[10px] text-zinc-400 font-mono">Next Release: 14 Days</span>
</div>

<div className="relative flex justify-between items-start mb-8">

<div className="absolute top-2.5 left-0 w-full h-0.5 bg-zinc-800 -z-10"></div>

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 rounded-full bg-emerald-500 border-2 border-zinc-950 shadow-[0_0_0_2px_rgba(16,185,129,0.3)] flex items-center justify-center">
<i className="w-3 h-3 text-black stroke-[3]" data-lucide="check"></i>
</div>
<div className="text-center">
<div className="text-[10px] font-semibold text-emerald-400">Funded</div>
<div className="text-[10px] text-zinc-500">$2.5M</div>
</div>
</div>

<div className="flex flex-col items-center gap-2 relative">
<div className="w-5 h-5 rounded-full bg-violet-500 border-2 border-white shadow-[0_0_10px_rgba(139,92,246,0.5)] z-10 animate-pulse"></div>
<div className="text-center">
<div className="text-[10px] font-semibold text-white">Dev Alpha</div>
<div className="text-[10px] text-zinc-400">In Progress</div>
</div>
</div>

<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-5 h-5 rounded-full bg-zinc-800 border-2 border-zinc-600"></div>
<div className="text-center">
<div className="text-[10px] font-medium text-zinc-400">Beta Review</div>
<div className="text-[10px] text-zinc-600">Unlocks 25%</div>
</div>
</div>

<div className="flex flex-col items-center gap-2 opacity-50">
<div className="w-5 h-5 rounded-full bg-zinc-800 border-2 border-zinc-600"></div>
<div className="text-center">
<div className="text-[10px] font-medium text-zinc-400">TGE</div>
<div className="text-[10px] text-zinc-600">Public Launch</div>
</div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs">
<span className="text-zinc-400">Current Round (Development)</span>
<span className="text-white font-mono">85% Complete</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{width: '85%'}}></div>
</div>
<p className="text-[10px] text-zinc-500 mt-2">
<i className="w-3 h-3 inline mr-1 align-middle" data-lucide="lock"></i>
                            Investors' tokens are vested. Milestone review required to unlock next tranche.
                        </p>
</div>
</div>
</div>
</div>
</header>

<main className="relative z-20 pb-20 space-y-20 px-4 sm:px-8 max-w-[2000px] mx-auto mt-8">

<section>
<div className="flex items-center gap-3 mb-6">
<div className="bg-orange-500/10 p-1.5 rounded text-orange-400">
<i className="w-4 h-4" data-lucide="alert-circle"></i>
</div>
<h2 className="text-lg font-semibold text-white tracking-tight">Milestone Reviews Pending</h2>
<span className="text-xs text-zinc-500 border-l border-zinc-800 pl-3">Your vote decides if funds are released.</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 flex flex-col sm:flex-row gap-5 hover:border-zinc-700 transition-all">

<div className="w-full sm:w-48 aspect-video bg-zinc-950 rounded border border-zinc-800 relative overflow-hidden shrink-0 group cursor-pointer">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1558494949-efc5e60fc549?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/10 backdrop-blur w-8 h-8 rounded-full flex items-center justify-center border border-white/20">
<i className="w-3 h-3 fill-white text-white ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-1 right-1 bg-black/80 text-[9px] px-1 rounded text-zinc-300 font-mono">DEMO DAY</div>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-white">CyberCore Logistics</h3>
<span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">Milestone 2</span>
</div>
<p className="text-xs text-zinc-400 line-clamp-2 mb-3">Deliverable: Automated warehouse routing algorithm optimized for 500+ units.</p>

<div className="flex items-start gap-2 bg-violet-500/5 border border-violet-500/10 p-2 rounded mb-3">
<i className="w-3 h-3 text-violet-400 mt-0.5 shrink-0" data-lucide="sparkles"></i>
<p className="text-[10px] text-violet-200 leading-tight">AI Analysis: Code commits verified. Performance metrics match proposal. Recommended: <span className="font-bold text-emerald-400">PASS</span>.</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 py-1.5 rounded text-xs font-medium hover:bg-emerald-500 hover:text-black transition-colors">
                                Approve (Release Funds)
                            </button>
<button className="px-3 border border-zinc-700 rounded text-xs text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors">
                                Discuss
                            </button>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 flex flex-col sm:flex-row gap-5 hover:border-zinc-700 transition-all">
<div className="w-full sm:w-48 aspect-video bg-zinc-950 rounded border border-zinc-800 relative overflow-hidden shrink-0 group cursor-pointer">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" data-lucide="file-text"></i>
</div>
<div className="absolute bottom-1 right-1 bg-black/80 text-[9px] px-1 rounded text-zinc-300 font-mono">Q3 REPORT</div>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-white">FinFlow Analytics</h3>
<span className="text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-400">Milestone 1</span>
</div>
<p className="text-xs text-zinc-400 line-clamp-2 mb-3">Deliverable: Beta launch of dashboard with integration for top 5 DEXs.</p>
<div className="flex items-start gap-2 bg-red-500/5 border border-red-500/10 p-2 rounded mb-3">
<i className="w-3 h-3 text-red-400 mt-0.5 shrink-0" data-lucide="alert-triangle"></i>
<p className="text-[10px] text-red-200 leading-tight">AI Analysis: Active users 40% below target. High churn rate detected. Recommended: <span className="font-bold text-red-400">REVIEW</span>.</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-zinc-800 text-zinc-300 border border-zinc-700 py-1.5 rounded text-xs font-medium hover:bg-white hover:text-black transition-colors">
                                Vote
                            </button>
<button className="px-3 border border-zinc-700 rounded text-xs text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors">
                                Details
                            </button>
</div>
</div>
</div>
</div>
</section>

<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 items-center">
<span className="text-xs font-semibold text-white mr-2 shrink-0">Sectors:</span>
<button className="whitespace-nowrap bg-white text-black px-3 py-1.5 rounded text-xs font-medium transition-colors">All</button>
<button className="whitespace-nowrap bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded text-xs font-medium transition-colors">DeFi</button>
<button className="whitespace-nowrap bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded text-xs font-medium transition-colors">AI &amp; Infra</button>
<button className="whitespace-nowrap bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded text-xs font-medium transition-colors">GameFi</button>
<button className="whitespace-nowrap bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-3 py-1.5 rounded text-xs font-medium transition-colors">Real World Assets</button>
<div className="h-4 w-[1px] bg-zinc-800 mx-2"></div>
<button className="whitespace-nowrap bg-violet-500/10 text-violet-300 border border-violet-500/20 px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="sparkles"></i> Top Rated by AI
            </button>
</div>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold text-white tracking-tight">Open for Investment</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<article className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300 flex flex-col">

<div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-black/60 backdrop-blur border border-white/10 text-white text-[10px] font-medium px-2 py-0.5 rounded">Seed</span>
</div>

<div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur border border-violet-500/30 text-violet-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-lg">
<i className="w-3 h-3" data-lucide="bot"></i> 8.9
                        </div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-white/90 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
<i className="w-4 h-4 fill-black text-black ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">Sentience Labs</h3>
<p className="text-[11px] text-zinc-500 font-mono">AI • Infrastructure</p>
</div>
</div>
<p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                            Developing a standardized protocol for AI agents to communicate and trade resources autonomously on-chain.
                        </p>
<div className="mt-auto space-y-3">

<div>
<div className="flex justify-between text-[11px] font-medium mb-1.5">
<span className="text-white">$850k <span className="text-zinc-500 font-normal">/ $1.2M</span></span>
<span className="text-emerald-400">71%</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '71%'}}></div>
</div>
</div>

<div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-800/50">
<div>
<div className="text-[10px] text-zinc-500">Valuation</div>
<div className="text-xs text-zinc-300">$12M</div>
</div>
<div className="text-right">
<div className="text-[10px] text-zinc-500">Min Ticket</div>
<div className="text-xs text-zinc-300">500 USDC</div>
</div>
</div>
</div>
</div>
</article>

<article className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300 flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-black/60 backdrop-blur border border-white/10 text-white text-[10px] font-medium px-2 py-0.5 rounded">Pre-Seed</span>
</div>
<div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur border border-violet-500/30 text-violet-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-lg">
<i className="w-3 h-3" data-lucide="bot"></i> 7.4
                        </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

<div className="bg-zinc-900/90 backdrop-blur border border-zinc-700 px-3 py-1.5 rounded flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
<i className="w-3 h-3 text-white" data-lucide="presentation"></i>
<span className="text-[10px] font-medium text-white">12 Slides</span>
</div>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">Vortex DEX</h3>
<p className="text-[11px] text-zinc-500 font-mono">DeFi • Layer 2</p>
</div>
</div>
<p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                            Zero-slippage stablecoin trading with concentrated liquidity on the new Monad chain.
                        </p>
<div className="mt-auto space-y-3">
<div>
<div className="flex justify-between text-[11px] font-medium mb-1.5">
<span className="text-white">$240k <span className="text-zinc-500 font-normal">/ $500k</span></span>
<span className="text-zinc-400">48%</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full" style={{width: '48%'}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-800/50">
<div>
<div className="text-[10px] text-zinc-500">Valuation</div>
<div className="text-xs text-zinc-300">$5M</div>
</div>
<div className="text-right">
<div className="text-[10px] text-zinc-500">Min Ticket</div>
<div className="text-xs text-zinc-300">100 USDC</div>
</div>
</div>
</div>
</div>
</article>

<article className="group ai-border bg-zinc-900 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(167,139,250,0.15)] transition-all duration-300 flex flex-col relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[9px] px-2 py-0.5 rounded-b z-10 font-medium tracking-wide">AI PICK OF THE WEEK</div>
<div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer mt-[1px]">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-black/60 backdrop-blur border border-white/10 text-white text-[10px] font-medium px-2 py-0.5 rounded">Series A</span>
</div>
<div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur border border-violet-500/30 text-violet-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-lg">
<i className="w-3 h-3" data-lucide="bot"></i> 9.8
                        </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-white/90 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
<i className="w-4 h-4 fill-black text-black ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">BlockEstate</h3>
<p className="text-[11px] text-zinc-500 font-mono">RWA • Real Estate</p>
</div>
</div>
<p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                            Fractionalized ownership of commercial real estate in Singapore and Dubai. 12% APY expected.
                        </p>
<div className="mt-auto space-y-3">
<div>
<div className="flex justify-between text-[11px] font-medium mb-1.5">
<span className="text-white">$4.2M <span className="text-zinc-500 font-normal">/ $5M</span></span>
<span className="text-emerald-400">92%</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-800/50">
<div>
<div className="text-[10px] text-zinc-500">Valuation</div>
<div className="text-xs text-zinc-300">$40M</div>
</div>
<div className="text-right">
<div className="text-[10px] text-zinc-500">Risk</div>
<div className="text-xs text-emerald-400">Low</div>
</div>
</div>
</div>
</div>
</article>

<article className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300 flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1555664424-778a18433566?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="bg-black/60 backdrop-blur border border-white/10 text-white text-[10px] font-medium px-2 py-0.5 rounded">Seed</span>
</div>
<div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur border border-violet-500/30 text-violet-300 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-lg">
<i className="w-3 h-3" data-lucide="bot"></i> 6.2
                        </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-zinc-900/90 backdrop-blur border border-zinc-700 px-3 py-1.5 rounded flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
<i className="w-3 h-3 text-white" data-lucide="presentation"></i>
<span className="text-[10px] font-medium text-white">Deck</span>
</div>
</div>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">IronShield Wallet</h3>
<p className="text-[11px] text-zinc-500 font-mono">Security • Tooling</p>
</div>
</div>
<p className="text-xs text-zinc-400 mb-4 line-clamp-2 leading-relaxed">
                            Hardware security module embedded in browser extension.
                        </p>
<div className="mt-auto space-y-3">
<div>
<div className="flex justify-between text-[11px] font-medium mb-1.5">
<span className="text-white">$120k <span className="text-zinc-500 font-normal">/ $800k</span></span>
<span className="text-zinc-400">15%</span>
</div>
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full" style={{width: '15%'}}></div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 pt-1 border-t border-zinc-800/50">
<div>
<div className="text-[10px] text-zinc-500">Valuation</div>
<div className="text-xs text-zinc-300">$8M</div>
</div>
<div className="text-right">
<div className="text-[10px] text-zinc-500">Min Ticket</div>
<div className="text-xs text-zinc-300">200 USDC</div>
</div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-violet-400" data-lucide="brain-circuit"></i>
<span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">AI Due Diligence</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        Invest with <span className="ai-gradient-text">Machine Intelligence</span>
</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
                        Our AI analyzes 50+ data points including GitHub commits, team background, on-chain activity, and whitepaper feasibility to generate a risk score for every startup.
                    </p>
<div className="space-y-4 max-w-sm mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="file-search"></i>
</div>
<div className="text-sm text-zinc-300">Pitch Deck Scanning &amp; Summary</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="github"></i>
</div>
<div className="text-sm text-zinc-300">Codebase &amp; Developer Activity Audit</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="users"></i>
</div>
<div className="text-sm text-zinc-300">Founder Track Record Verification</div>
</div>
</div>
<button className="w-fit bg-white text-black px-6 py-2.5 rounded font-medium text-sm hover:bg-zinc-200 transition-colors">
                        Try AI Analyst Demo
                    </button>
</div>

<div className="bg-zinc-950/50 border-l border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden">
<div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-lg shadow-2xl p-4 space-y-4 relative z-10">

<div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-violet-400" data-lucide="sparkles"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Analyst Bot</div>
<div className="text-[10px] text-zinc-500">Asking about Nebula Protocol</div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-end">
<div className="bg-zinc-800 text-zinc-200 text-xs px-3 py-2 rounded-lg rounded-tr-none max-w-[80%]">
                                    Is the tokenomics model sustainable long-term?
                                </div>
</div>
<div className="flex justify-start">
<div className="bg-violet-500/10 border border-violet-500/20 text-zinc-200 text-xs px-3 py-2 rounded-lg rounded-tl-none max-w-[90%]">
<p className="mb-2">Based on the whitepaper, the burn mechanism correlates with compute usage.</p>
<ul className="list-disc list-inside space-y-1 text-zinc-400">
<li>Deflationary pressure increases with adoption</li>
<li>40% of tokens locked for 4 years (Vesting)</li>
</ul>
<div className="mt-2 text-[10px] text-emerald-400 font-mono">CONFIDENCE: HIGH</div>
</div>
</div>
</div>
<div className="pt-2">
<div className="bg-zinc-950 border border-zinc-800 rounded px-3 py-2 flex items-center justify-between">
<span className="text-xs text-zinc-600">Ask a follow up question...</span>
<i className="w-3 h-3 text-zinc-600" data-lucide="send"></i>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800 bg-black py-16 px-4 sm:px-8">
<div className="max-w-[2000px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<div className="bg-gradient-to-br from-emerald-400 to-violet-500 w-5 h-5 rounded flex items-center justify-center text-black text-[9px] font-bold">
<i className="w-3 h-3 text-white fill-white" data-lucide="zap"></i>
</div>
                    FundStream
                </a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
                    The first AI-powered decentralized launchpad with milestone-based vesting.
                </p>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Invest</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Trending Startups</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">New Listings</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Real World Assets</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Secondary Market</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Startups</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Apply for Funding</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Creator Handbook</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Token Standards</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Governance</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Vote on Milestones</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">DAO Proposals</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Dispute Resolution</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">Resources</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Smart Contracts</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Audit Reports</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
</div>
<div className="max-w-[2000px] mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-zinc-600">© 2024 FundStream Decentralized Org.</p>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-600 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-zinc-600 hover:text-white" href="#"><i className="w-4 h-4" data-lucide="disc"></i></a>
</div>
</div>
</footer>


    </>
  );
}
