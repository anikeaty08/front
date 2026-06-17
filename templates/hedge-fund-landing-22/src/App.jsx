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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/90 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-4 flex gap-[3px]">
<div className="w-[2px] h-full bg-white/40 group-hover:bg-white transition-colors"></div>
<div className="w-[2px] h-full bg-white/40 group-hover:bg-white transition-colors delay-75"></div>
</div>
<span className="text-xs font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">11 CAPITAL</span>
</a>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="#strategy">Strategy</a>
<a className="hidden sm:block text-xs font-medium text-neutral-500 hover:text-white transition-colors" href="#team">Team</a>
<a className="px-3 py-1.5 border border-white/10 rounded text-xs font-medium text-neutral-300 hover:bg-white hover:text-black hover:border-transparent transition-all duration-300" href="#contact">
                    LP Access
                </a>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow pt-32 pb-24 px-6">
<div className="max-w-7xl mx-auto space-y-32">

<section className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-end min-h-[60vh] pb-12 border-b border-white/5">
<div className="space-y-8 fade-in">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] uppercase tracking-widest text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                        Systematic Digital Assets
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9]">
                        Pure Alpha.<br/>
<span className="text-neutral-600">Zero Noise.</span>
</h1>
<p className="text-sm md:text-base text-neutral-400 max-w-md leading-relaxed">
                        A quantitative hedge fund exploiting structural inefficiencies in digital asset markets through rigorous statistical arbitrage and market-neutral strategies.
                    </p>
</div>
<div className="flex flex-col justify-end items-start lg:items-end gap-6 fade-in delay-200">

<div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 w-full max-w-sm">
<div className="bg-[#080808] p-6 hover:bg-[#0c0c0c] transition-colors group">
<span className="block text-xs text-neutral-500 mb-1 group-hover:text-neutral-400">Strategy</span>
<span className="block text-xl text-white font-medium tracking-tight">Market Neutral</span>
</div>
<div className="bg-[#080808] p-6 hover:bg-[#0c0c0c] transition-colors group">
<span className="block text-xs text-neutral-500 mb-1 group-hover:text-neutral-400">Focus</span>
<span className="block text-xl text-white font-medium tracking-tight">Liquidity</span>
</div>
<div className="bg-[#080808] p-6 hover:bg-[#0c0c0c] transition-colors group">
<span className="block text-xs text-neutral-500 mb-1 group-hover:text-neutral-400">Exposure</span>
<span className="block text-xl text-white font-medium tracking-tight">Algorithmic</span>
</div>
<div className="bg-[#080808] p-6 hover:bg-[#0c0c0c] transition-colors group">
<span className="block text-xs text-neutral-500 mb-1 group-hover:text-neutral-400">Structure</span>
<span className="block text-xl text-white font-medium tracking-tight">Cayman / BVI</span>
</div>
</div>
</div>
</section>

<section className="space-y-8 fade-in delay-300" id="strategy">
<div className="flex items-center justify-between">
<h2 className="text-2xl text-white font-medium tracking-tight">Investment Framework</h2>
<span className="hidden md:block text-xs text-neutral-600 uppercase tracking-widest">Process — 01</span>
</div>
<div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">

<div className="bg-[#050505] p-8 md:p-10 h-full hover:bg-[#0a0a0a] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 text-neutral-700 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:cpu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="mt-16">
<h3 className="text-lg text-white font-medium mb-3">High-Frequency Execution</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Proprietary low-latency infrastructure collocated with major exchanges to capture fleeting inefficiencies across fragmented liquidity pools.
                            </p>
</div>
</div>

<div className="bg-[#050505] p-8 md:p-10 h-full hover:bg-[#0a0a0a] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 text-neutral-700 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:git-branch" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="mt-16">
<h3 className="text-lg text-white font-medium mb-3">Statistical Arbitrage</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Quantitative models deriving signal from noise. We trade mean reversion and momentum strategies without directional bias on the underlying assets.
                            </p>
</div>
</div>

<div className="bg-[#050505] p-8 md:p-10 h-full hover:bg-[#0a0a0a] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 text-neutral-700 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:shield" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="mt-16">
<h3 className="text-lg text-white font-medium mb-3">Risk Engineering</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Automated risk parameters enforce strict drawdown limits. Counterparty risk is mitigated through diversified custody and off-exchange settlement networks.
                            </p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl space-y-8 fade-in delay-200" id="team">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<h2 className="text-2xl text-white font-medium tracking-tight">Managing Partners</h2>
<span className="hidden md:block text-xs text-neutral-600 uppercase tracking-widest">Leadership — 02</span>
</div>
<div className="space-y-px bg-white/5 border border-white/5">

<div className="bg-[#050505] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-[#0a0a0a] transition-colors">
<div className="flex items-center gap-6">
<div className="h-10 w-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 border border-white/5">
<span className="text-xs font-semibold">AJ</span>
</div>
<div>
<h3 className="text-white font-medium tracking-tight">Amrit Jagan</h3>
<p className="text-xs text-neutral-500 mt-1">Portfolio Management &amp; Strategy</p>
</div>
</div>
<a className="flex items-center gap-2 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors border border-transparent group-hover:border-white/10 px-3 py-1.5 rounded" href="mailto:amrit@11.capital">
                            amrit@11.capital
                            <span className="iconify opacity-0 group-hover:opacity-100 transition-opacity" data-height="12" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</a>
</div>

<div className="bg-[#050505] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-[#0a0a0a] transition-colors">
<div className="flex items-center gap-6">
<div className="h-10 w-10 bg-neutral-900 rounded-full flex items-center justify-center text-neutral-500 border border-white/5">
<span className="text-xs font-semibold">AY</span>
</div>
<div>
<h3 className="text-white font-medium tracking-tight">Alec Yu</h3>
<p className="text-xs text-neutral-500 mt-1">Operations &amp; Risk</p>
</div>
</div>
<a className="flex items-center gap-2 text-xs font-medium text-neutral-500 group-hover:text-white transition-colors border border-transparent group-hover:border-white/10 px-3 py-1.5 rounded" href="mailto:alec@11.capital">
                            alec@11.capital
                            <span className="iconify opacity-0 group-hover:opacity-100 transition-opacity" data-height="12" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-16 grid md:grid-cols-2 gap-12" id="contact">
<div className="space-y-6">
<div className="h-6 w-6 flex gap-[2px] opacity-50">
<div className="w-[2px] h-full bg-white"></div>
<div className="w-[2px] h-full bg-white"></div>
</div>
<div>
<h2 className="text-white font-medium tracking-tight">Restricted Access</h2>
<p className="text-sm text-neutral-500 mt-2 max-w-xs">
                            Our funds are currently closed to new capital. For institutional inquiries regarding future tranches:
                        </p>
</div>
<a className="inline-flex text-white hover:text-neutral-300 transition-colors border-b border-white/30 hover:border-white pb-0.5 text-sm" href="mailto:contact@11.capital">
                        contact@11.capital
                    </a>
</div>
<div className="flex flex-col justify-end">
<div className="bg-neutral-900/20 p-6 border border-white/5 rounded-sm">
<p className="text-[10px] text-neutral-600 leading-relaxed text-justify">
                            This website is intended solely for the use of the person to whom it has been made available. The information contained herein does not constitute an offer to sell or the solicitation of an offer to buy any securities or interests in 11 Capital. Such an offer can only be made by way of a private placement memorandum. Past performance is not necessarily indicative of future results.
                        </p>
<div className="mt-4 flex items-center justify-between text-[10px] text-neutral-700 uppercase tracking-wider">
<span>© 2025 11 Capital</span>
<span>All rights reserved</span>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
