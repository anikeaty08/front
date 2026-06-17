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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                SPARK
            </a>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-white border border-white/10 bg-white/5 px-4 py-2 rounded-full hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300" href="#apply">
                Build with Spark
                <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 hero-glow pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Web3 Ecosystem Builder
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Spark
            </h1>
<p className="text-xl md:text-2xl text-neutral-200 font-medium tracking-tight mb-4">
                We build, launch &amp; scale Web3 projects.
            </p>
<p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed">
                From strategy to liquidity, from launch to growth. <br className="hidden md:block"/>We are the execution partner for the next generation of protocols.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold text-sm rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#apply">
                    Build with Spark
                    <i className="w-4 h-4 fill-black" data-lucide="zap" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/10 text-white font-medium text-sm rounded-lg hover:bg-white/5 transition-colors" href="#work">
                    Explore Ecosystem
                </a>
</div>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 mb-24">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 p-1">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-50"></div>
<div className="relative flex flex-col md:flex-row items-center justify-between p-8 gap-8">
<div className="flex-1 space-y-4">
<div className="flex items-center gap-2 text-orange-500 text-xs font-semibold uppercase tracking-wider">
<i className="w-4 h-4" data-lucide="trophy" strokeWidth="1.5"></i>
                        Latest Viral Launch
                    </div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Solana Wrapped 2025</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-lg">
                        We created the definitive onchain summary for the Solana ecosystem. A personalized journey showcasing transaction history, NFTs, and DeFi milestones.
                    </p>
</div>
<div className="flex flex-row gap-8 md:gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12 w-full md:w-auto justify-start md:justify-end">
<div>
<div className="text-3xl font-semibold text-white tracking-tight">50k+</div>
<div className="text-xs text-neutral-500 mt-1 font-medium uppercase tracking-wide">Impressions</div>
</div>
<div>
<div className="text-3xl font-semibold text-white tracking-tight">2k+</div>
<div className="text-xs text-neutral-500 mt-1 font-medium uppercase tracking-wide">Wallets Scanned</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5" id="work">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 space-y-6">
<div className="mb-8">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">What We Do</h2>
<p className="text-neutral-500">One partner. Full execution.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group p-6 rounded-xl border border-white/10 bg-neutral-900/20 hover:border-orange-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
<i className="w-5 h-5 text-orange-500" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium mb-1">Launch Tokens</h3>
<p className="text-xs text-neutral-500">Go to market strategy &amp; execution.</p>
</div>
<div className="group p-6 rounded-xl border border-white/10 bg-neutral-900/20 hover:border-orange-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
<i className="w-5 h-5 text-orange-500" data-lucide="coins" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium mb-1">Raise Capital</h3>
<p className="text-xs text-neutral-500">Connecting founders with funds.</p>
</div>
<div className="group p-6 rounded-xl border border-white/10 bg-neutral-900/20 hover:border-orange-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
<i className="w-5 h-5 text-orange-500" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium mb-1">Deploy Liquidity</h3>
<p className="text-xs text-neutral-500">Market making &amp; pool management.</p>
</div>
<div className="group p-6 rounded-xl border border-white/10 bg-neutral-900/20 hover:border-orange-500/30 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
<i className="w-5 h-5 text-orange-500" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-medium mb-1">Scale Growth</h3>
<p className="text-xs text-neutral-500">User acquisition &amp; retention.</p>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="h-full p-8 rounded-2xl border border-white/10 bg-neutral-900/20 relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 p-8 opacity-10">
<i className="w-32 h-32 text-white" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Launchpad &amp; Fundraising</h2>
<div className="space-y-6">
<div>
<div className="text-4xl font-semibold text-white tracking-tight">$3M+</div>
<div className="text-sm text-orange-500 font-medium mt-1">Capital Raised</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tight">12</div>
<div className="text-sm text-neutral-500 font-medium mt-1">Projects Launched</div>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 space-y-3">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                            Strategic tokenomics
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                            SwissBorg listings
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                            Sustainable markets
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6 py-16 text-center">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by real founders</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
<span className="text-xl font-semibold text-white tracking-tighter">VNX</span>
<span className="text-xl font-semibold text-white tracking-tighter">ZeroSpread</span>
<span className="text-xl font-semibold text-white tracking-tighter">DeathCoin</span>
<span className="text-xl font-semibold text-white tracking-tighter">Anthony</span>
<span className="text-sm text-neutral-500 italic">(+ more)</span>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div>
<div className="inline-flex items-center gap-2 text-orange-500 text-xs font-semibold uppercase tracking-wider mb-4">
<i className="w-4 h-4" data-lucide="activity" strokeWidth="1.5"></i>
                        Liquidity &amp; Growth
                    </div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Liquidity is Strategy.</h2>
<p className="text-neutral-400 leading-relaxed">
                        We don't just provide funds; we architect markets. From sourcing B2B/B2C liquidity to securing strategic partners, we ensure your token has a healthy pulse.
                    </p>
</div>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm">Liquidity Design</h4>
<p className="text-xs text-neutral-500 mt-1">Custom depth and spread optimization.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm">LP Optimization</h4>
<p className="text-xs text-neutral-500 mt-1">Incentive structures for community.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="anchor" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm">Market Stability</h4>
<p className="text-xs text-neutral-500 mt-1">Reducing volatility for sustainable growth.</p>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative p-8 bg-black border border-white/10 rounded-xl">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">Case Study</span>
<i className="w-5 h-5 text-orange-500" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Omnipair</h3>
<p className="text-sm text-neutral-400 mb-6">
                        We supported their DEX launch with liquidity provision, strategic partner acquisition, and a comprehensive growth strategy.
                    </p>
<div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
<div>
<span className="block text-xl font-semibold text-white">100%</span>
<span className="text-xs text-neutral-500">Uptime</span>
</div>
<div>
<span className="block text-xl font-semibold text-white">Top 3</span>
<span className="text-xs text-neutral-500">Category Rank</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(249,115,22,0.05))]">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium mb-6">Coming Soon</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Builder Hackathons</h2>
<p className="text-neutral-400 text-lg max-w-xl mx-auto">
                We’re launching builder-focused hackathons to create real Web3 startups. No fluff. Just shipping.
            </p>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden" id="apply">
<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
<div className="w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]"></div>
</div>
<div className="relative max-w-4xl mx-auto px-6 text-center z-10">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-8">
                Build with Spark.
            </h2>
<p className="text-xl text-neutral-400 mb-10">
                Let’s launch something real.
            </p>
<button className="group relative inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-black font-semibold text-sm rounded-lg overflow-hidden transition-all hover:bg-orange-400">
<span className="relative flex items-center gap-2">
                    Apply now
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</button>
</div>
</section>

<footer className="border-t border-white/10 bg-black py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
<span className="text-white font-semibold tracking-tighter">SPARK</span>
</div>
<div className="text-xs text-neutral-600">
                © 2024 Spark Ecosystem. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="disc" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>


    </>
  );
}
