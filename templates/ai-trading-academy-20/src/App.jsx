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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium text-lg tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center text-[10px] text-white font-bold">G</div>
                GPT TRADE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-normal hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#join">
                    Start Learning
                </a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 mb-8 font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: Real-time Signal Processor V2
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-6 leading-[1.1]">
                Predict markets with <br className="hidden md:block"/>
<span className="text-white">algorithmic precision.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Join the only trading academy that combines institutional-grade technical analysis with proprietary AI models. Stop guessing, start calculating.
            </p>

<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8" onsubmit="event.preventDefault()">
<div className="relative flex-grow group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400 transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600 font-light" placeholder="Enter your email address" required="" type="email"/>
</div>
<button className="bg-indigo-600 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)]" type="submit">
                    Get Free Access
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</form>
<p className="text-xs text-slate-500">
                Join 14,000+ traders. No credit card required for intro course.
            </p>
</div>

<div className="mt-20 border-t border-white/5 pt-10">
<p className="text-center text-xs text-slate-600 font-medium tracking-wide uppercase mb-6">Trusted by analysts from</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale mix-blend-screen">

<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"><iconify-icon icon="solar:graph-new-linear"></iconify-icon> ALPHA</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"><iconify-icon icon="solar:shield-star-linear"></iconify-icon> FORTRESS</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"><iconify-icon icon="solar:global-linear"></iconify-icon> NEXUS</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"><iconify-icon icon="solar:chart-2-linear"></iconify-icon> QUANTUM</div>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="absolute inset-0 bg-grid opacity-20 mask-image-gradient"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3 tracking-tight">AI Signal Detection</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Our GPT-4 customized model scans 50+ market indicators in real-time to identify breakout patterns before they happen.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3 tracking-tight">Backtesting Engine</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Validate your strategies against 10 years of historical data instantly. Code-free interface for rapid iteration.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-all duration-300 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-3 tracking-tight">Expert Curriculum</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        20+ hours of deep-dive content on technical analysis, risk management, and algorithmic trading psychology.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">

<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-64 aspect-[3/4] bg-gradient-to-br from-slate-800 to-black border border-white/10 rounded-lg shadow-2xl flex flex-col items-center justify-center p-6 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 group">

<div className="absolute inset-0 bg-indigo-500/20 blur-xl -z-10 group-hover:bg-indigo-500/30 transition-all"></div>
<div className="text-indigo-400 mb-4">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<h4 className="text-white font-semibold text-xl text-center mb-2 tracking-tight">The AI Trading<br/>Blueprint</h4>
<p className="text-xs text-slate-500 text-center uppercase tracking-widest mt-auto">2024 Edition</p>
</div>
</div>

<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Download the cheat sheet used by top quants.</h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                        Get our proprietary "AI Pattern Recognition Guide" completely free. Learn the top 5 reversal signals that our AI detects with 87% accuracy.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            PDF Guide + Video Walkthrough
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            3 Pre-built Tradingview Scripts
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Weekly Market AI Analysis
                        </li>
</ul>
<div className="flex gap-4">
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                            Download Now
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Customize your risk profile</h2>
<p className="text-slate-400 font-light">Adjust the AI's sensitivity to market volatility.</p>
</div>

<div className="bg-[#0F0F11] border border-white/5 rounded-xl p-8 shadow-2xl">
<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:tuning-2-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">Model Parameters</div>
<div className="text-xs text-slate-500">Live Configuration</div>
</div>
</div>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs text-emerald-500 font-medium">System Active</span>
</div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Risk Tolerance</span>
<span className="text-white font-mono">Conservative</span>
</div>
<input className="w-full" max="100" min="1" type="range" value="30"/>
</div>
<div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>AI Confidence Threshold</span>
<span className="text-white font-mono">85%</span>
</div>
<input className="w-full" max="100" min="1" type="range" value="85"/>
</div>
<div className="flex items-center justify-between pt-4">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">

<iconify-icon className="text-indigo-400 opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-300 group-hover:text-white transition-colors">Enable Stop-Loss Auto-calc</span>
</label>
<button className="text-xs font-medium text-indigo-400 hover:text-indigo-300">Reset Defaults</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/[0.01]">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">

<details className="group bg-white/[0.02] border border-white/5 rounded-lg open:bg-white/[0.04] transition-colors duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-medium text-white select-none">
                        Do I need coding experience?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed">
                        No. Our platform is designed for discretionary traders. The AI signals are presented visually on your charts, and our curriculum explains how to interpret them without writing a single line of code.
                    </div>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-lg open:bg-white/[0.04] transition-colors duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-medium text-white select-none">
                        Does this work for Crypto and Forex?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed">
                        Yes. Our models are trained on price action data across Stocks, Forex, Commodities, and Crypto. The patterns we teach are universal to liquid markets.
                    </div>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-lg open:bg-white/[0.04] transition-colors duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6 text-sm font-medium text-white select-none">
                        What is included in the free trial?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-400 font-light leading-relaxed">
                        You get access to the "Foundation" module of our course and 7 days of live signals from our GPT Trade Lite model. No credit card required.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-[#050505] text-slate-500 text-sm">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-medium tracking-tight flex items-center gap-2 mb-4" href="#">
                    GPT TRADE
                </a>
<p className="text-xs font-light max-w-[160px]">
                    Merging artificial intelligence with human trading intuition.
                </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium text-xs uppercase tracking-wide">Platform</h4>
<a className="hover:text-white transition-colors" href="#">Live Signals</a>
<a className="hover:text-white transition-colors" href="#">Backtesting</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium text-xs uppercase tracking-wide">Resources</h4>
<a className="hover:text-white transition-colors" href="#">Academy</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium text-xs uppercase tracking-wide">Legal</h4>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Risk Disclosure</a>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<div className="text-xs">
                © 2024 GPT Trade Inc. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
