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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#151b2e',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-indigo-400" data-lucide="cpu" strokeWidth="1.5"></i>
<span className="text-lg font-semibold tracking-tight text-white">GROK AGENT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#tokenomics">Tokenomics</a>
<a className="hover:text-white transition-colors" href="#roadmap">Roadmap</a>
<a className="hover:text-white transition-colors" href="#staking">Staking</a>
</div>
<button className="bg-white text-slate-950 hover:bg-slate-200 px-4 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all">
                    Connect Wallet
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/20 blur-[120px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Live Presale Stage 1
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white">
                    The First Real <span className="text-indigo-400">Grok-Powered</span><br/> AI Agent for Traders
                </h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                    Detect Rug → Snipe Alpha → Copytrade KOL → Earn Lifetime Fees.
                    The ultimate AI infrastructure for BSC, ETH, and Solana.
                </p>
<div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-300">
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
<i className="w-4 h-4 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></i> Audited
                    </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
<i className="w-4 h-4 text-indigo-400" data-lucide="lock" strokeWidth="1.5"></i> KYC Verified
                    </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-slate-800">
<i className="w-4 h-4 text-yellow-400" data-lucide="zap" strokeWidth="1.5"></i> Fast TGE
                    </div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:mr-0">
<div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl shadow-indigo-500/10">
<div className="text-center mb-6">
<h3 className="text-xl font-semibold text-white tracking-tight">Presale Stage 1 Ends In</h3>
<div className="mt-2 flex justify-center gap-2 text-2xl font-mono text-indigo-400 tracking-widest">
<span>23</span><span className="text-slate-600">:</span><span>45</span><span className="text-slate-600">:</span><span>12</span>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex justify-between text-xs font-medium text-slate-400">
<span>Raised: $0</span>
<span>Target: $12,000,000</span>
</div>
<div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-[2%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
</div>
<p className="text-center text-xs text-slate-500">1 GROKA = $0.001 (Listing Price $0.004)</p>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-indigo-500/50 bg-indigo-500/10 text-white text-sm font-medium">
<i className="w-4 h-4" data-lucide="wallet" strokeWidth="1.5"></i> ETH
                        </button>
<button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-400 text-sm font-medium hover:border-slate-600">
<i className="w-4 h-4" data-lucide="credit-card" strokeWidth="1.5"></i> USDT
                        </button>
</div>
<div className="space-y-3 mb-6">
<div className="relative">
<label className="block text-xs text-slate-500 mb-1 ml-1">You Pay (USD)</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors text-sm" type="number" value="1000"/>
<div className="absolute right-4 bottom-3 text-xs text-slate-500 font-semibold">USD</div>
</div>
<div className="relative">
<label className="block text-xs text-slate-500 mb-1 ml-1">You Receive ($GROKA)</label>
<input className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-300 focus:outline-none text-sm cursor-not-allowed" readonly="" type="text" value="1,000,000"/>
</div>
</div>
<button className="w-full bg-white text-slate-950 hover:bg-indigo-50 py-3.5 rounded-xl font-semibold text-sm tracking-tight transition-all shadow-lg shadow-white/5">
                        Buy Now
                    </button>
<p className="mt-4 text-center text-xs text-slate-500">Min Buy: $50 • 10% Bonus Stage 1</p>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-slate-900/30 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium tracking-widest text-slate-500 uppercase mb-6">Confirmed Partners &amp; Listings</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
<span className="text-lg font-semibold tracking-tighter text-white">MEXC</span>
<span className="text-lg font-semibold tracking-tighter text-white">GATE.IO</span>
<span className="text-lg font-semibold tracking-tighter text-white">KUCOIN</span>
<span className="text-lg font-semibold tracking-tighter text-white">BYBIT</span>
<span className="text-lg font-semibold tracking-tighter text-slate-500">BINANCE <span className="text-[10px] align-top text-slate-600">Q4 '26</span></span>
</div>
</div>
</div>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Core Intelligence</h2>
<p className="text-slate-400">Advanced AI tools designed to give you an unfair advantage in the market.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl hover:border-indigo-500/30 transition-all group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
<i className="w-5 h-5 text-indigo-400" data-lucide="shield-alert" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Rug Detection</h3>
<p className="text-sm text-slate-400 leading-relaxed">Monitors mint authority, dev wallet movements, and LP locks to detect scams instantly.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:border-indigo-500/30 transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
<i className="w-5 h-5 text-blue-400" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Grok AI Market Analysis</h3>
<p className="text-sm text-slate-400 leading-relaxed">Generates full token reports and safety ratings in under 3 seconds using Grok LLM.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:border-indigo-500/30 transition-all group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
<i className="w-5 h-5 text-purple-400" data-lucide="crosshair" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Attraction Score &amp; Sniper</h3>
<p className="text-sm text-slate-400 leading-relaxed">Analyzes X/Twitter sentiment and trending metrics to spot pumps before they happen.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:border-indigo-500/30 transition-all group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
<i className="w-5 h-5 text-emerald-400" data-lucide="sprout" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Farming Optimizer</h3>
<p className="text-sm text-slate-400 leading-relaxed">Automatically finds the highest APR pools across chains based on your risk profile.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:border-indigo-500/30 transition-all group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
<i className="w-5 h-5 text-orange-400" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Copytrade Top KOLs</h3>
<p className="text-sm text-slate-400 leading-relaxed">Auto-follow whale wallets and KOLs in real-time to replicate their success.</p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:border-indigo-500/30 transition-all group">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
<i className="w-5 h-5 text-pink-400" data-lucide="coins" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Lifetime Fees &amp; Staking</h3>
<p className="text-sm text-slate-400 leading-relaxed">Stake $GROKA to earn 5% of network fees forever plus high APR rewards.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50 border-y border-white/5">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white">Presale Schedule</h2>
<p className="text-sm text-slate-400 mt-2">Prices increase at every stage. Early adopters secure the lowest entry.</p>
</div>
<div className="overflow-x-auto rounded-2xl border border-slate-800">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-900 text-xs uppercase tracking-wider text-slate-500 border-b border-slate-800">
<th className="px-6 py-4 font-medium">Stage</th>
<th className="px-6 py-4 font-medium">Price</th>
<th className="px-6 py-4 font-medium">Tokens</th>
<th className="px-6 py-4 font-medium">Target</th>
<th className="px-6 py-4 font-medium">Min Buy</th>
<th className="px-6 py-4 font-medium">Bonus</th>
<th className="px-6 py-4 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-800 bg-slate-950/50">
<tr className="bg-indigo-900/10">
<td className="px-6 py-4 text-white font-medium">Stage 1</td>
<td className="px-6 py-4 text-indigo-400">$0.0010</td>
<td className="px-6 py-4 text-slate-300">87.5M</td>
<td className="px-6 py-4 text-slate-300">$3.2M</td>
<td className="px-6 py-4 text-slate-300">$50</td>
<td className="px-6 py-4 text-emerald-400 font-medium">+20%</td>
<td className="px-6 py-4 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-400">LIVE 🔥</span></td>
</tr>
<tr>
<td className="px-6 py-4 text-slate-400">Stage 2</td>
<td className="px-6 py-4 text-slate-400">$0.0013</td>
<td className="px-6 py-4 text-slate-500">62.5M</td>
<td className="px-6 py-4 text-slate-500">$2.4M</td>
<td className="px-6 py-4 text-slate-500">$150</td>
<td className="px-6 py-4 text-slate-400">+15%</td>
<td className="px-6 py-4 text-right text-slate-600">Upcoming</td>
</tr>
<tr>
<td className="px-6 py-4 text-slate-400">Stage 3</td>
<td className="px-6 py-4 text-slate-400">$0.0017</td>
<td className="px-6 py-4 text-slate-500">50.0M</td>
<td className="px-6 py-4 text-slate-500">$2.2M</td>
<td className="px-6 py-4 text-slate-500">$300</td>
<td className="px-6 py-4 text-slate-400">+10%</td>
<td className="px-6 py-4 text-right text-slate-600">Upcoming</td>
</tr>
<tr>
<td className="px-6 py-4 text-slate-400">Stage 4</td>
<td className="px-6 py-4 text-slate-400">$0.0022</td>
<td className="px-6 py-4 text-slate-500">30.0M</td>
<td className="px-6 py-4 text-slate-500">$1.8M</td>
<td className="px-6 py-4 text-slate-500">$500</td>
<td className="px-6 py-4 text-slate-400">+5%</td>
<td className="px-6 py-4 text-right text-slate-600">Upcoming</td>
</tr>
<tr>
<td className="px-6 py-4 text-slate-400">Stage 5</td>
<td className="px-6 py-4 text-slate-400">$0.0028</td>
<td className="px-6 py-4 text-slate-500">20.0M</td>
<td className="px-6 py-4 text-slate-500">$2–4M</td>
<td className="px-6 py-4 text-slate-500">$750</td>
<td className="px-6 py-4 text-slate-400">0%</td>
<td className="px-6 py-4 text-right text-slate-600">Upcoming</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24" id="staking">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Staking Rewards</h2>
<p className="text-slate-400">Lock your tokens to access premium features and earn high yield.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel rounded-2xl p-8 border border-slate-800 flex flex-col">
<h3 className="text-lg font-medium text-white mb-1">Trial</h3>
<p className="text-xs text-slate-500 mb-6">For newcomers testing the waters</p>
<div className="text-4xl font-semibold text-white mb-6">20% <span className="text-sm font-normal text-slate-500">APR</span></div>
<ul className="space-y-4 text-sm text-slate-300 mb-8 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="clock"></i> 7 Days Lock</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="coins"></i> No Minimum Stake</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> 0% Early Penalty</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-slate-500" data-lucide="pie-chart"></i> 4% Rewards Pool</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-sm font-medium transition-colors">Stake Now</button>
</div>

<div className="glass-panel rounded-2xl p-8 border border-slate-800 relative flex flex-col">
<h3 className="text-lg font-medium text-white mb-1">Holder</h3>
<p className="text-xs text-slate-500 mb-6">Serious investors building positions</p>
<div className="text-4xl font-semibold text-indigo-400 mb-6">50% <span className="text-sm font-normal text-slate-500">APR</span></div>
<ul className="space-y-4 text-sm text-slate-300 mb-8 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-indigo-500" data-lucide="clock"></i> 30 Days Lock</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-indigo-500" data-lucide="coins"></i> 100k $GROKA Min</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-orange-500" data-lucide="flame"></i> 15% Burn Penalty</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-indigo-500" data-lucide="pie-chart"></i> 16% Rewards Pool</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors">Stake Now</button>
</div>

<div className="glass-panel rounded-2xl p-8 border border-indigo-500/30 bg-indigo-500/5 relative flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase">Best Value</div>
<h3 className="text-lg font-medium text-white mb-1">OG Whales</h3>
<p className="text-xs text-slate-500 mb-6">Maximum yield for long-term believers</p>
<div className="text-4xl font-semibold text-emerald-400 mb-6">100% <span className="text-sm font-normal text-slate-500">APR</span></div>
<ul className="space-y-4 text-sm text-slate-300 mb-8 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-emerald-500" data-lucide="clock"></i> 180 Days Lock</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-emerald-500" data-lucide="coins"></i> 1M $GROKA Min</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-red-500" data-lucide="alert-triangle"></i> 40% Burn + Cooldown</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-emerald-500" data-lucide="pie-chart"></i> 80% Rewards Pool</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-indigo-500/50 hover:bg-indigo-500/20 text-indigo-300 text-sm font-medium transition-colors">Stake Now</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5" id="tokenomics">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-12 text-center">Token Distribution</h2>
<div className="flex flex-col lg:flex-row items-center justify-center gap-16">

<div className="relative w-64 h-64 lg:w-80 lg:h-80 shrink-0">
<div className="conic-chart w-full h-full rounded-full"></div>
<div className="absolute inset-4 bg-slate-900 rounded-full flex flex-col items-center justify-center border border-slate-800">
<span className="text-xs text-slate-500 uppercase tracking-widest mb-1">Total Supply</span>
<span className="text-xl lg:text-2xl font-bold text-white tracking-tight">1,000,000,000</span>
<span className="text-sm font-semibold text-indigo-400 mt-1">$GROKA</span>
</div>
</div>

<div className="w-full max-w-lg">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<span className="text-sm font-medium text-slate-200">Presale</span>
</div>
<span className="text-sm font-semibold text-white">25%</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-indigo-500"></div>
<span className="text-sm font-medium text-slate-200">Liquidity</span>
</div>
<span className="text-sm font-semibold text-white">20%</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-violet-500"></div>
<span className="text-sm font-medium text-slate-200">Staking</span>
</div>
<span className="text-sm font-semibold text-white">25%</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-pink-500"></div>
<span className="text-sm font-medium text-slate-200">Team</span>
</div>
<span className="text-sm font-semibold text-white">10%</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-teal-500"></div>
<span className="text-sm font-medium text-slate-200">Marketing</span>
</div>
<span className="text-sm font-semibold text-white">10%</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-900/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-amber-500"></div>
<span className="text-sm font-medium text-slate-200">Treasury</span>
</div>
<span className="text-sm font-semibold text-white">8%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="roadmap">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-16 text-center">Roadmap 2026</h2>
<div className="relative">

<div className="absolute left-4 lg:left-0 lg:top-8 bottom-0 lg:bottom-auto w-0.5 h-full lg:w-full lg:h-0.5 bg-slate-800 lg:translate-y-1"></div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">

<div className="relative pl-12 lg:pl-0 lg:pt-12 group">
<div className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-[30px] w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-slate-950 z-10"></div>
<h3 className="text-lg font-semibold text-white">Phase 1</h3>
<div className="text-xs font-mono text-indigo-400 mb-4">Dec 2025 – Feb 2026</div>
<ul className="space-y-2 text-sm text-slate-400">
<li>• TGE + Core Tools Live</li>
<li>• PancakeSwap/Raydium</li>
<li>• Rug Detection v1</li>
<li>• Early Access AI Chat</li>
</ul>
</div>

<div className="relative pl-12 lg:pl-0 lg:pt-12 group">
<div className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-[30px] w-3 h-3 rounded-full bg-slate-700 ring-4 ring-slate-950 z-10 group-hover:bg-indigo-500 transition-colors"></div>
<h3 className="text-lg font-semibold text-white">Phase 2</h3>
<div className="text-xs font-mono text-slate-500 mb-4">Mar – May 2026</div>
<ul className="space-y-2 text-sm text-slate-400">
<li>• Full Grok AI + Copytrade</li>
<li>• Farming Optimizer</li>
<li>• Cross-Chain Support</li>
<li>• Ambassador Program</li>
</ul>
</div>

<div className="relative pl-12 lg:pl-0 lg:pt-12 group">
<div className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-[30px] w-3 h-3 rounded-full bg-slate-700 ring-4 ring-slate-950 z-10 group-hover:bg-indigo-500 transition-colors"></div>
<h3 className="text-lg font-semibold text-white">Phase 3</h3>
<div className="text-xs font-mono text-slate-500 mb-4">Jun – Aug 2026</div>
<ul className="space-y-2 text-sm text-slate-400">
<li>• MEXC • Gate.io • KuCoin</li>
<li>• Bybit Listing</li>
<li>• Mobile App Launch</li>
<li>• Treasury Buyback</li>
</ul>
</div>

<div className="relative pl-12 lg:pl-0 lg:pt-12 group">
<div className="absolute left-[11px] lg:left-1/2 lg:-translate-x-1/2 top-0 lg:top-[30px] w-3 h-3 rounded-full bg-slate-700 ring-4 ring-slate-950 z-10 group-hover:bg-indigo-500 transition-colors"></div>
<h3 className="text-lg font-semibold text-white">Phase 4</h3>
<div className="text-xs font-mono text-slate-500 mb-4">Sep 2026+</div>
<ul className="space-y-2 text-sm text-slate-400">
<li>• Binance/OKX Listing</li>
<li>• Grok Agent DAO</li>
<li>• 1M Daily Users</li>
<li>• Massive Token Burn</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/5">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="inline-block p-4 rounded-2xl bg-slate-900 border border-slate-800 mb-8 w-full max-w-lg mx-auto">
<div className="flex justify-between items-center text-sm mb-2">
<span className="text-slate-400">Raised So Far</span>
<span className="text-white font-mono">$0 / $12,000,000</span>
</div>
<div className="h-2 w-full bg-slate-800 rounded-full mb-3">
<div className="h-full w-[2%] bg-indigo-500 rounded-full"></div>
</div>
<div className="flex justify-between items-center text-xs text-slate-500">
<span>Current: $0.0010 (Stage 1)</span>
<span>Next Price In: 18h 23m</span>
</div>
</div>
<h2 className="text-2xl font-semibold text-white mb-6">Don't Miss The Next AI Revolution</h2>
<button className="bg-white text-slate-950 hover:bg-slate-200 px-8 py-4 rounded-xl font-bold text-base tracking-tight transition-all transform hover:scale-105 shadow-xl shadow-white/10">
                Connect Wallet &amp; Buy $GROKA
            </button>
<p className="mt-8 text-xs text-slate-600 max-w-lg mx-auto leading-normal">
                Disclaimer: Cryptocurrency investments carry high risk. This is not financial advice.
                Verified smart contract. KYC &amp; Audit completed.
            </p>
<div className="mt-4 text-xs text-slate-700">© 2025 Grok Agent. All rights reserved.</div>
</div>
</section>


    </>
  );
}
