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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="gradient-orb-green absolute top-20 right-1/4 w-96 h-96"></div>
<div className="gradient-orb-blue absolute bottom-40 left-1/4 w-96 h-96"></div>
<div className="gradient-orb-silver absolute top-1/2 right-1/3 w-80 h-80"></div>
</div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

<div className="absolute top-32 left-24 floating-token float-1">
<div className="flex items-center gap-3 glass rounded-full px-5 py-3 shadow-lg border border-purple-500/20">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center pulse-node">
<i className="w-3 h-3 text-white" data-lucide="triangle" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Cortex</div>
<div className="text-xs text-slate-400">20,945</div>
</div>
</div>
</div>

<div className="absolute top-32 right-24 floating-token float-2">
<div className="flex items-center gap-3 glass rounded-full px-5 py-3 shadow-lg border border-blue-500/20">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center pulse-node">
<i className="w-3 h-3 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Quant</div>
<div className="text-xs text-slate-400">2,945</div>
</div>
</div>
</div>

<div className="absolute top-96 left-16 floating-token float-3">
<div className="flex items-center gap-3 glass rounded-full px-5 py-3 shadow-lg border border-emerald-500/20">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center pulse-node">
<i className="w-3 h-3 text-white" data-lucide="hexagon" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Aelf</div>
<div className="text-xs text-slate-400">19,346</div>
</div>
</div>
</div>

<div className="absolute top-96 right-16 floating-token float-4">
<div className="flex items-center gap-3 glass rounded-full px-5 py-3 shadow-lg border border-orange-500/20">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center pulse-node">
<i className="w-3 h-3 text-white" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-medium text-white">Meeton</div>
<div className="text-xs text-slate-400">440</div>
</div>
</div>
</div>


</div>

<nav className="relative z-50 px-6 py-6">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<span className="text-base font-semibold tracking-tight">
            AssetDefense
          </span>
</div>
<button className="glass px-6 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
          Connect Wallet
        </button>
</div>
</nav>

<section className="relative z-10 px-6 py-24 md:py-32">
<div className="max-w-7xl mx-auto text-center relative">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="particle absolute top-20 left-10 w-1 h-1 rounded-full bg-cyan-400/40" style={{animationDelay: '0s'}}></div>
<div className="particle absolute top-40 right-20 w-1 h-1 rounded-full bg-emerald-400/40" style={{animationDelay: '1s'}}></div>
<div className="particle absolute top-60 left-1/4 w-1 h-1 rounded-full bg-slate-400/40" style={{animationDelay: '2s'}}></div>
<div className="particle absolute top-32 right-1/3 w-1 h-1 rounded-full bg-blue-400/40" style={{animationDelay: '1.5s'}}></div>
<div className="particle absolute bottom-40 left-1/3 w-1 h-1 rounded-full bg-cyan-400/40" style={{animationDelay: '0.5s'}}></div>
<div className="particle absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-emerald-400/40" style={{animationDelay: '2.5s'}}></div>
</div>

<div className="spotlight absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-96 pointer-events-none"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '1'}}>
<defs>
<lineargradient id="line-gradient-1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(16, 185, 129, 0)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(16, 185, 129, 0.4)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(16, 185, 129, 0)', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="line-gradient-2" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(6, 182, 212, 0)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(6, 182, 212, 0.4)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(6, 182, 212, 0)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="connection-line" d="M 100 150 Q 300 100 500 200" fill="none" stroke="url(#line-gradient-1)" strokeWidth="1" style={{animationDelay: '0.5s'}}></path>
<path className="connection-line" d="M 900 150 Q 700 100 500 200" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1" style={{animationDelay: '1s'}}></path>
<path className="connection-line" d="M 150 400 Q 350 350 500 450" fill="none" stroke="url(#line-gradient-1)" strokeWidth="1" style={{animationDelay: '1.5s'}}></path>
<path className="connection-line" d="M 850 400 Q 650 350 500 450" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1" style={{animationDelay: '2s'}}></path>
</svg>

<div className="inline-flex items-center justify-center mb-8 relative" style={{zIndex: '10'}}>
<div className="glass w-16 h-16 rounded-full flex items-center justify-center group cursor-pointer transition-all hover:scale-110">
<div className="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl group-hover:bg-emerald-500/20 transition-all"></div>
<i className="w-6 h-6 text-emerald-400 relative" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
<div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-10 relative" style={{zIndex: '10'}}>
<div className="w-2 h-2 rounded-full bg-emerald-400 pulse-node"></div>
<span className="text-xs font-medium text-slate-300 tracking-wide">
            Unlock Your Assets Spark!
          </span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tight mb-8 relative" style={{zIndex: '10'}}>
          One-click for Asset
          <span className="text-glow text-emerald-400">Defense</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-14 font-light leading-relaxed relative" style={{zIndex: '10'}}>
          Dive into the art assets, where innovative blockchain technology meets
          financial expertise
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20 relative" style={{zIndex: '10'}}>
<button className="bg-black border border-white/10 text-white px-10 py-4 rounded-full text-base font-medium hover:bg-white/5 transition-all flex items-center gap-2 group btn-dark-glow">
            Open App
            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="bg-white text-black px-10 py-4 rounded-full text-base font-semibold hover:bg-slate-100 transition-all btn-glow">
            Discover More
          </button>
</div>

<div className="absolute bottom-8 left-8 flex items-center gap-3 text-slate-500 text-sm" style={{zIndex: '10'}}>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
</div>
<span className="font-medium">02/03</span>
<span>•</span>
<span>Scroll down</span>
<i className="w-4 h-4 animate-bounce" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>

<div className="absolute bottom-8 right-8 flex items-center gap-3 glass px-5 py-3 rounded-full" style={{zIndex: '10'}}>
<span className="text-sm font-medium text-slate-300">DeFi Horizons</span>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-node"></div>
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 pulse-node" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 pulse-node" style={{animationDelay: '0.4s'}}></div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Analytics Insights
          </h2>
<p className="text-lg text-slate-400 font-light">
            Real-time protocol metrics and performance data
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass glow-green rounded-3xl p-8 hover:bg-white/5 transition-all">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
<i className="w-6 h-6 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-emerald-400">+2.4%</span>
</div>
<div className="mb-6">
<div className="text-5xl font-semibold tracking-tight mb-2">
                98.2%
              </div>
<div className="text-sm text-slate-400">Transaction Success</div>
</div>

<div className="flex items-end gap-1 h-16">
<div className="flex-1 bg-emerald-500/20 rounded-t" style={{height: '45%'}}></div>
<div className="flex-1 bg-emerald-500/30 rounded-t" style={{height: '60%'}}></div>
<div className="flex-1 bg-emerald-500/40 rounded-t" style={{height: '75%'}}></div>
<div className="flex-1 bg-emerald-500/60 rounded-t" style={{height: '90%'}}></div>
<div className="flex-1 bg-emerald-500 rounded-t" style={{height: '100%'}}></div>
</div>
</div>

<div className="glass glow-blue rounded-3xl p-8 hover:bg-white/5 transition-all">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
<i className="w-6 h-6 text-blue-400" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-blue-400">+18.6%</span>
</div>
<div className="mb-6">
<div className="text-5xl font-semibold tracking-tight mb-2">
                $847M
              </div>
<div className="text-sm text-slate-400">Total Liquidity</div>
</div>

<div className="relative w-full h-16">
<svg className="w-full h-full" viewbox="0 0 200 80">
<path d="M 20 60 Q 100 -20 180 60" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeLinecap="round" strokeWidth="8"></path>
<path d="M 20 60 Q 100 -20 180 60" fill="none" stroke="rgba(59, 130, 246, 0.8)" stroke-dasharray="250" stroke-dashoffset="70" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</div>
</div>

<div className="glass glow-silver rounded-3xl p-8 hover:bg-white/5 transition-all">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-2xl bg-slate-500/10 flex items-center justify-center">
<i className="w-6 h-6 text-slate-400" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-slate-400">+34.2%</span>
</div>
<div className="mb-6">
<div className="text-5xl font-semibold tracking-tight mb-2">142K</div>
<div className="text-sm text-slate-400">Active Users</div>
</div>

<div className="flex items-end justify-between gap-2 h-16">
<div className="flex-1 bg-gradient-to-t from-slate-700 to-slate-500 rounded-t shadow-lg" style={{height: '50%'}}></div>
<div className="flex-1 bg-gradient-to-t from-slate-700 to-slate-500 rounded-t shadow-lg" style={{height: '65%'}}></div>
<div className="flex-1 bg-gradient-to-t from-slate-700 to-slate-400 rounded-t shadow-lg" style={{height: '80%'}}></div>
<div className="flex-1 bg-gradient-to-t from-slate-600 to-slate-300 rounded-t shadow-lg" style={{height: '100%'}}></div>
<div className="flex-1 bg-gradient-to-t from-slate-600 to-slate-300 rounded-t shadow-lg" style={{height: '75%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            DeFi Wallet
          </h2>
<p className="text-lg text-slate-400 font-light">
            Manage your assets with precision and security
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-center">

<div className="glass rounded-3xl p-12 flex items-center justify-center">
<div className="relative w-80 h-80">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 200 200">

<circle cx="100" cy="100" fill="none" r="80" stroke="rgba(255,255,255,0.03)" strokeWidth="12"></circle>

<circle className="progress-ring" cx="100" cy="100" fill="none" r="80" stroke="rgba(16, 185, 129, 0.6)" stroke-dasharray="502" stroke-dashoffset="125" strokeLinecap="round" strokeWidth="12"></circle>

<circle className="progress-ring" cx="100" cy="100" fill="none" r="80" stroke="rgba(59, 130, 246, 0.6)" stroke-dasharray="502" stroke-dashoffset="250" strokeLinecap="round" strokeWidth="12"></circle>

<circle className="progress-ring" cx="100" cy="100" fill="none" r="80" stroke="rgba(148, 163, 184, 0.4)" stroke-dasharray="502" stroke-dashoffset="375" strokeLinecap="round" strokeWidth="12"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="text-5xl font-semibold mb-2">$12.4K</div>
<div className="text-sm text-slate-400">Total Balance</div>
</div>

<div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-slate-400">Sent</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-xs text-slate-400">Received</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
<span className="text-xs text-slate-400">Pending</span>
</div>
</div>
</div>
</div>

<div className="space-y-4">

<div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
<i className="w-6 h-6 text-emerald-400" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-semibold">Sent</div>
<div className="text-sm text-slate-400">
                      Outgoing transactions
                    </div>
</div>
</div>
<div className="text-right">
<div className="text-xl font-semibold">$4.2K</div>
<div className="text-xs text-slate-400">142 txs</div>
</div>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '35%'}}></div>
</div>
</div>

<div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
<i className="w-6 h-6 text-blue-400" data-lucide="arrow-down-left" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-semibold">Received</div>
<div className="text-sm text-slate-400">
                      Incoming transactions
                    </div>
</div>
</div>
<div className="text-right">
<div className="text-xl font-semibold">$6.8K</div>
<div className="text-xs text-slate-400">89 txs</div>
</div>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '55%'}}></div>
</div>
</div>

<div className="glass rounded-2xl p-6 hover:bg-white/5 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center">
<i className="w-6 h-6 text-slate-400" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-semibold">Pending</div>
<div className="text-sm text-slate-400">
                      Awaiting confirmation
                    </div>
</div>
</div>
<div className="text-right">
<div className="text-xl font-semibold">$1.4K</div>
<div className="text-xs text-slate-400">12 txs</div>
</div>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5">
<div className="bg-slate-500 h-1.5 rounded-full animate-pulse" style={{width: '25%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-24">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<p className="text-sm text-slate-500 font-medium uppercase tracking-wider">
            Trusted by industry leaders
          </p>
</div>
<div className="glass rounded-3xl p-12">
<div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-40 grayscale">

<div className="flex items-center gap-2">
<svg fill="white" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L2 22h20L12 2z"></path>
</svg>
<span className="text-lg font-semibold">Vercel</span>
</div>

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
<span className="text-lg font-semibold">Loom</span>
</div>

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center text-xs font-bold">
                $
              </div>
<span className="text-lg font-semibold">Cash App</span>
</div>

<div className="flex items-center gap-2">
<div className="flex gap-0.5">
<div className="w-1 h-6 bg-blue-500 rounded-full"></div>
<div className="w-1 h-6 bg-purple-500 rounded-full"></div>
<div className="w-1 h-6 bg-green-500 rounded-full"></div>
</div>
<span className="text-lg font-semibold">Stripe</span>
</div>

<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full border-2 border-white"></div>
<span className="text-lg font-semibold">Chainlink</span>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 px-6 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<span className="text-base font-semibold">AssetDefense</span>
</div>
<p className="text-sm text-slate-400 font-light">
              Next-generation DeFi protocol for secure asset management
            </p>
</div>
<div>
<h3 className="text-sm font-semibold mb-4">Product</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Security
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Roadmap
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold mb-4">Resources</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Whitepaper
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold mb-4">Community</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Discord
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Twitter
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  GitHub
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Forum</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">
            © 2024 AssetDefense. All rights reserved.
          </p>
<div className="flex items-center gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
