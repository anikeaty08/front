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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const texts = [
                "Scanning: 150 symbols/sec",
                "Latency: 18ms • Signal density: High",
                "Sweep detected: TSLA (liquidity)",
                "Displacement: NVDA • FVG formed",
                "Orderflow shift: AAPL • MSS confirmed",
                "Watchlist refresh: 0.67s"
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typeTarget = document.getElementById('typewriter-text');
            
            function typeEffect() {
                if (!typeTarget) return;
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typeTarget.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typeTarget.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                let typeSpeed = isDeleting ? 20 : 40;
                
                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = 2500; // Pause at end of line
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 400; // Pause before typing next
                }
                
                setTimeout(typeEffect, typeSpeed);
            }
            
            setTimeout(typeEffect, 1000);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<span className="text-xl font-medium tracking-tighter">AOS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors duration-200" href="#how-it-works">System</a>
<a className="hover:text-white transition-colors duration-200" href="#architecture">Architecture</a>
<a className="hover:text-white transition-colors duration-200" href="#risk">Risk Control</a>
</div>
<div>
<a className="text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-full transition-all duration-200" href="#access">
                    Apply Private Preview
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute inset-0 glow-effect pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Structured Options Automation™
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 leading-tight">
                The First Institutional<br/>
                Automated Options<br/>
                Trading System.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed">
                Built on delta, gamma, volatility modeling, and risk-defined execution — engineered for disciplined capital deployment.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-white transition-colors flex items-center justify-center gap-2" href="#access">
                    Deploy Engine
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center" href="#philosophy">
                    Read Philosophy
                </a>
</div>
</div>

<div className="relative z-10 mt-20 w-full max-w-5xl aspect-video rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_-15px_rgba(99,102,241,0.2)]">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-zinc-900">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="ml-4 text-xs text-zinc-500 font-mono">greek_automation_engine: live</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
<div className="col-span-1 md:col-span-2 flex flex-col gap-4">
<div className="flex justify-between items-end border-b border-white/5 pb-2">
<div>
<div className="text-xs text-zinc-500 mb-1">Portfolio Delta</div>
<div className="text-2xl font-medium tracking-tight text-white">+142.50</div>
</div>
<div>
<div className="text-xs text-zinc-500 mb-1 text-right">Theta Decay</div>
<div className="text-2xl font-medium tracking-tight text-emerald-400">+$84.20/d</div>
</div>
</div>

<div className="flex-grow relative mt-4">
<svg className="w-full h-full stroke-indigo-500 fill-none" preserveaspectratio="none" viewbox="0 0 100 40">
<path className="drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" d="M0,35 C10,35 20,25 30,28 C40,31 50,15 60,18 C70,21 80,8 90,12 C95,14 98,5 100,5" strokeWidth="0.5"></path>
<path d="M0,35 C10,35 20,25 30,28 C40,31 50,15 60,18 C70,21 80,8 90,12 C95,14 98,5 100,5 L100,40 L0,40 Z" fill="url(#grad)" stroke="none"></path>
<defs>
<lineargradient id="grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(99,102,241,0.2)"></stop>
<stop offset="100%" stop-color="rgba(99,102,241,0)"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
<div className="border-t border-white/5 w-full border-dashed"></div>
<div className="border-t border-white/5 w-full border-dashed"></div>
<div className="border-t border-white/5 w-full border-dashed"></div>
<div className="border-t border-white/5 w-full border-dashed"></div>
</div>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="text-xs text-zinc-500 mb-2">Active Positions</div>
<div className="bg-zinc-800/50 p-3 rounded-md border border-white/5 flex justify-between items-center">
<div>
<div className="text-sm text-white font-medium">SPX</div>
<div className="text-xs text-zinc-500">Iron Condor</div>
</div>
<div className="text-right">
<div className="text-sm text-emerald-400 font-medium">+1.2%</div>
<div className="text-xs text-zinc-500">Risk: Def</div>
</div>
</div>
<div className="bg-zinc-800/50 p-3 rounded-md border border-white/5 flex justify-between items-center">
<div>
<div className="text-sm text-white font-medium">QQQ</div>
<div className="text-xs text-zinc-500">Credit Spread</div>
</div>
<div className="text-right">
<div className="text-sm text-emerald-400 font-medium">+0.8%</div>
<div className="text-xs text-zinc-500">Risk: Def</div>
</div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">Max Drawdown</span>
<span className="text-white">-2.4%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1">
<div className="bg-indigo-500 h-1 rounded-full" style={{width: '24%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-zinc-950 py-16 px-6">
<div className="max-w-3xl mx-auto flex flex-col gap-5">
<h3 className="text-sm font-medium text-white tracking-tight flex items-center gap-2.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                High-Frequency Scanning Engine
            </h3>
<div className="bg-[#0c0c0e] border border-white/5 rounded-xl p-4 font-mono text-sm shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)] flex items-center min-h-[56px] overflow-hidden mb-2">
<span className="text-indigo-500/80 mr-3 shrink-0">~ %</span>
<span className="text-zinc-300 tracking-tight whitespace-nowrap" id="typewriter-text"></span>
<span className="w-2 h-4 bg-zinc-500 ml-1 animate-cursor shrink-0"></span>
</div>
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">Scan up to 150 stocks per second.</h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                    Real-time scan across equities, ETFs, and sector leaders — prioritizing volatility + liquidity events.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-3xl">
<div className="text-xs font-medium text-indigo-400 mb-4 tracking-widest uppercase">Category Definition</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">The Evolution of Options Execution</h2>
<p className="text-base text-zinc-400 font-light leading-relaxed">
                    We are pioneering the transition from manual, speculative trading to fully structured, risk-defined automation. Establishing a new standard for retail-accessible institutional logic.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5">
<iconify-icon className="text-xl text-zinc-400" icon="solar:chart-line-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">The Past</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Speculative Execution</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mt-auto">
                        Historically, retail options trading relied on predicting directional movement, emotional sizing, and inconsistent execution. Speculation disguised as strategy.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex flex-col h-full relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20 relative z-10">
<iconify-icon className="text-xl text-indigo-400" icon="solar:programming-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-indigo-400 mb-2 uppercase tracking-wider relative z-10">The Present</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight relative z-10">Structured Automation™</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mt-auto relative z-10">
                        Translating complex derivatives logic into systematic, rule-based execution. Removing emotion entirely and enforcing hard risk parameters directly at the code level.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 border border-white/5">
<iconify-icon className="text-xl text-zinc-400" icon="solar:calculator-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">The Future</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Greek-Driven Superiority</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mt-auto">
                        Trading volatility and time decay mathematically. Utilizing delta-neutral mechanics and gamma curves to exploit structural inefficiencies rather than guessing direction.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Systematic Execution</h2>
<p className="text-base text-zinc-400 font-light">The automated pipeline transforms subjective market views into objective, rule-based structured exposure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 border border-white/10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-xl text-zinc-300 group-hover:text-indigo-400 transition-colors" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-indigo-400 mb-2">Phase 1</div>
<h3 className="text-lg font-medium text-white mb-2">Select Tickers</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Define your asset universe. Select highly liquid underlying indices or ETFs for the engine to monitor continuously.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 border border-white/10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-xl text-zinc-300 group-hover:text-indigo-400 transition-colors" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-indigo-400 mb-2">Phase 2</div>
<h3 className="text-lg font-medium text-white mb-2">Define Risk</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Establish hard boundaries. Set position sizing, maximum daily drawdown, and overall portfolio capital allocation.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 border border-white/10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-xl text-zinc-300 group-hover:text-indigo-400 transition-colors" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-indigo-400 mb-2">Phase 3</div>
<h3 className="text-lg font-medium text-white mb-2">Logic Engine</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Select proprietary logic profiles: volatility expansion, theta harvesting, or delta-neutral structures based on regime.</p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 border border-white/10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-xl text-zinc-300 group-hover:text-indigo-400 transition-colors" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-indigo-400 mb-2">Phase 4</div>
<h3 className="text-lg font-medium text-white mb-2">Automation</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">The system autonomously manages precision entries, dynamic greek adjustments, and strictly planned exits via API.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950 relative overflow-hidden" id="architecture">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="text-xs font-medium text-indigo-400 mb-4 tracking-widest uppercase flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                    Greek-Driven Automation Engine™
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Built for structure.<br/>Not speculation.</h2>
<p className="text-base text-zinc-400 font-light mb-8 leading-relaxed">
                    The first fully structured, risk-defined, Greek-driven automated options execution engine. We focus on exploiting structural market inefficiencies while maintaining institutional-grade risk parameters.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-indigo-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Delta Exposure Management</div>
<div className="text-sm text-zinc-500 font-light">Neutralizing directional bias to isolate volatility and time decay.</div>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-indigo-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Gamma Acceleration Curves</div>
<div className="text-sm text-zinc-500 font-light">Avoiding tail risk by monitoring rate of change in delta exposure.</div>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-indigo-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Theta Decay Harvesting</div>
<div className="text-sm text-zinc-500 font-light">Systematic extraction of premium erosion over optimal timeframes.</div>
</div>
</li>
</ul>
</div>

<div className="relative" id="risk">
<div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-3xl blur-md opacity-50"></div>
<div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<h3 className="text-lg font-medium text-white">Risk Control Engine</h3>
<span className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Active
                        </span>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-400 font-light">Max Daily Loss Limit</span>
<span className="text-white font-medium">Enforced</span>
</div>
<div className="w-full bg-zinc-950 rounded-full h-1.5 border border-white/5">
<div className="bg-indigo-500/80 h-1.5 rounded-full" style={{width: '15%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-400 font-light">Portfolio Exposure</span>
<span className="text-white font-medium">32% / 50% Limit</span>
</div>
<div className="w-full bg-zinc-950 rounded-full h-1.5 border border-white/5">
<div className="bg-zinc-400 h-1.5 rounded-full" style={{width: '64%'}}></div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-4">
<div className="border border-white/5 bg-zinc-950 p-3 rounded-lg flex items-center justify-between">
<span className="text-xs text-zinc-400">Vol Filter</span>
<div className="w-8 h-4 bg-indigo-500 rounded-full relative">
<div className="absolute right-1 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="border border-white/5 bg-zinc-950 p-3 rounded-lg flex items-center justify-between">
<span className="text-xs text-zinc-400">Auto Pause</span>
<div className="w-8 h-4 bg-indigo-500 rounded-full relative">
<div className="absolute right-1 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950 text-center" id="performance">
<div className="max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Performance Transparency</h2>
<p className="text-base text-zinc-400 font-light">Focusing on risk-adjusted metrics, smooth equity curves, and minimal drawdowns over volatile returns.</p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="p-6 border border-white/5 rounded-xl bg-zinc-900/30">
<div className="text-xs text-zinc-500 mb-1">Win Rate</div>
<div className="text-2xl font-medium tracking-tight text-white">72.4%</div>
</div>
<div className="p-6 border border-white/5 rounded-xl bg-zinc-900/30">
<div className="text-xs text-zinc-500 mb-1">Profit Factor</div>
<div className="text-2xl font-medium tracking-tight text-white">1.84</div>
</div>
<div className="p-6 border border-white/5 rounded-xl bg-zinc-900/30">
<div className="text-xs text-zinc-500 mb-1">Max Drawdown</div>
<div className="text-2xl font-medium tracking-tight text-white">-6.2%</div>
</div>
<div className="p-6 border border-white/5 rounded-xl bg-zinc-900/30">
<div className="text-xs text-zinc-500 mb-1">Sharpe Ratio</div>
<div className="text-2xl font-medium tracking-tight text-white">1.95</div>
</div>
</div>
</section>

<section className="py-16 border-t border-b border-white/5 bg-zinc-900/20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-10">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Enterprise Infrastructure</span>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-sm font-medium text-zinc-400">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:server-minimalistic-linear" strokeWidth="1.5"></iconify-icon> Cloud Execution</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon> FIX API Integration</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon> Sub-ms Monitoring</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon> Dynamic Greeks</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Institutional Logic</span>
</div>
</div>
</section>

<section className="py-32 px-6 bg-zinc-950 relative" id="access">
<div className="max-w-2xl mx-auto bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-white mb-3">Deploy Structured Alpha</h2>
<p className="text-sm text-zinc-400 font-light">Apply for private preview. Enrollment is currently limited to ensure system stability and execution quality.</p>
</div>
<form className="relative z-10 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 pl-1">Full Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 pl-1">Work Email</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 pl-1">Expected Capital Allocation</label>
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all cursor-pointer">
<option className="text-zinc-600" disabled="" selected="" value="">Select range</option>
<option value="tier1">$50k - $250k</option>
<option value="tier2">$250k - $1M</option>
<option value="tier3">$1M+</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 pl-1">Options Experience</label>
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all cursor-pointer">
<option className="text-zinc-600" disabled="" selected="" value="">Select level</option>
<option value="basic">Familiar with basics</option>
<option value="intermediate">Trade spreads actively</option>
<option value="advanced">Manage portfolio Greeks</option>
<option value="institutional">Institutional / Prop</option>
</select>
</div>
<button className="w-full mt-4 bg-white text-zinc-950 font-medium text-sm py-3.5 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Apply Private Preview
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-600 text-center mt-4">By applying for private preview, you acknowledge this is sophisticated software, not financial advice.</p>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-8 px-6 text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-lg font-medium tracking-tighter text-zinc-500">AOS</div>
<div className="text-xs text-zinc-600 font-light">
                © 2024 Automated Options System. Structured Options Automation™.
            </div>
</div>
</footer>



    </>
  );
}
