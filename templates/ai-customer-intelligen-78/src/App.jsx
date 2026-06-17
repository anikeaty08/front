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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white"></div>
<span className="tracking-widest text-xs uppercase font-semibold">Rising Partners</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#engine">The Engine</a>
<a className="hover:text-white transition-colors" href="#cases">Use Cases</a>
</div>
<button className="text-xs font-medium border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Client Login
            </button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-aurora pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none">
<div className="absolute inset-0 border border-white/5 rounded-full animate-pulse-slow"></div>
<div className="absolute inset-10 border border-teal-500/10 rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
<div className="absolute inset-20 border border-orange-500/10 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm animate-float">
<iconify-icon className="text-orange-400 text-sm" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs tracking-wider uppercase text-zinc-300">Intelligence for the C-Suite</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-light mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                Market Share is Vanity.<br/>
<span className="italic text-white glow-text">Heart Share</span> is Profit.
            </h1>
<p className="text-sm md:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed tracking-wide mb-12 font-light">
                The first Artificial Intelligence framework that decodes NPS, CSAT, and behavioral data into a strategic roadmap for sustainable growth.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-white text-black rounded-full text-sm font-medium overflow-hidden transition-all hover:scale-105">
<div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
<span className="relative flex items-center gap-2">
                        Request Strategic Audit
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 rounded-full text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    Explore the Methodology
                </button>
</div>
</div>

<div className="absolute bottom-10 left-10 hidden md:flex items-center gap-3 glass-panel px-4 py-2 rounded-lg text-xs text-zinc-400">
<iconify-icon className="text-teal-400" icon="solar:graph-new-linear"></iconify-icon>
<span>Live ROI Analysis</span>
<span className="text-teal-400">+12.4%</span>
</div>
<div className="absolute top-32 right-10 hidden md:flex items-center gap-3 glass-panel px-4 py-2 rounded-lg text-xs text-zinc-400">
<iconify-icon className="text-orange-400" icon="solar:heart-pulse-linear"></iconify-icon>
<span>Affection Score</span>
<span className="text-orange-400">88/100</span>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="methodology">
<div className="mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">The HSI Framework</h2>
<p className="text-zinc-500 text-sm max-w-md">We don't just measure satisfaction. We measure the structural integrity of your customer relationship.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 glass-panel rounded-2xl p-8 flex flex-col justify-between group overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full transition-opacity group-hover:opacity-100 opacity-50"></div>
<div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-2">Emotions &amp; Affection</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Turn passive likes into active revenue. We calculate the gap between social sentiment and real advocacy.</p>
</div>

<div className="relative w-full h-32 mt-8 border-b border-l border-white/10">
<svg className="absolute bottom-0 left-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 50 Q 25 40, 50 20 T 100 5" fill="none" stroke="url(#gradient-line)" strokeWidth="0.5"></path>
<defs>
<lineargradient id="gradient-line" x1="0" x2="100" y1="0" y2="0">
<stop offset="0%" stop-color="#14b8a6"></stop>
<stop offset="100%" stop-color="#f97316"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute top-[10%] right-[0%] w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_10px_#f97316]"></div>
</div>
</div>

<div className="col-span-1 md:col-span-2 glass-panel rounded-2xl p-8 flex items-start justify-between relative group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-teal-900 to-teal-500/20"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-teal-400 text-lg" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="font-medium tracking-tight">ROI Consistency</h3>
</div>
<p className="text-xs text-zinc-500 max-w-xs">Churn_ROI Analysis detects risk before it hits the P&amp;L.</p>
</div>
<div className="text-right">
<span className="block text-3xl font-serif text-teal-400 tabular-nums">94.2%</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-600">Retention Probability</span>
</div>
</div>

<div className="col-span-1 glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors">
<iconify-icon className="text-zinc-400 text-xl mb-4" icon="solar:cursor-square-linear"></iconify-icon>
<h4 className="text-sm font-medium mb-1">Interaction</h4>
<p className="text-[11px] text-zinc-500">Engagement depth vs width.</p>
</div>

<div className="col-span-1 glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors">
<iconify-icon className="text-zinc-400 text-xl mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-sm font-medium mb-1">Intimacy</h4>
<p className="text-[11px] text-zinc-500">Data availability &amp; trust.</p>
</div>

<div className="col-span-1 glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors">
<iconify-icon className="text-zinc-400 text-xl mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-sm font-medium mb-1">Reliability</h4>
<p className="text-[11px] text-zinc-500">Performance consistency.</p>
</div>

<div className="col-span-1 glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors">
<iconify-icon className="text-zinc-400 text-xl mb-4" icon="solar:tuning-square-2-linear"></iconify-icon>
<h4 className="text-sm font-medium mb-1">Alignment</h4>
<p className="text-[11px] text-zinc-500">Perception vs Identity.</p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="engine">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight mb-6">Not a report.<br/>An Ecosystem of 17 AI Agents.</h2>
</div>
<div className="relative space-y-16 pl-8 md:pl-0">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-lg font-medium text-white mb-2">Ingestion Layer</h3>
<p className="text-zinc-500 text-xs leading-relaxed">Raw data enters from CRM, Trustpilot, Surveys and Social listening. Normalized instantly.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-black border border-white/20 z-10 -translate-x-[9px] md:-translate-x-1/2 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
</div>
<div className="md:w-1/2 order-3 md:order-2">
<div className="glass-panel p-4 rounded-lg inline-flex gap-2 opacity-70">
<iconify-icon className="text-zinc-400" icon="solar:database-linear"></iconify-icon>
<span className="text-[10px] font-mono text-teal-400/80">Input: JSON Stream</span>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<div className="glass-panel p-4 rounded-lg inline-flex flex-col items-end gap-2 opacity-70">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[9px] border border-blue-500/20">Agent P1</span>
<span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 text-[9px] border border-purple-500/20">Agent P4</span>
</div>
<span className="text-[10px] font-mono text-zinc-500">Processing sentiment_vector...</span>
</div>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-black border border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.3)] z-10 -translate-x-[9px] md:-translate-x-1/2 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse"></div>
</div>
<div className="md:w-1/2 order-3 md:order-2">
<h3 className="text-lg font-medium text-white mb-2">The Council</h3>
<p className="text-zinc-500 text-xs leading-relaxed">Agents analyze pillars independently. Cross-Pillar verification ensures no bias survives.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right order-2 md:order-1">
<h3 className="text-lg font-medium text-white mb-2">Strategic Synthesis</h3>
<p className="text-zinc-500 text-xs leading-relaxed">The final output isn't a chart. It's a decision-ready document detecting the "invisible" retention killers.</p>
</div>
<div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-black border border-white/20 z-10 -translate-x-[9px] md:-translate-x-1/2 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<div className="md:w-1/2 order-3 md:order-2">
<div className="glass-panel p-4 rounded-lg border-l-2 border-orange-500">
<div className="h-1 w-12 bg-zinc-700 rounded mb-2"></div>
<div className="h-1 w-24 bg-zinc-800 rounded mb-1"></div>
<div className="h-1 w-20 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#080808]" id="cases">
<div className="max-w-6xl mx-auto">
<h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-12">Intelligence in Action</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-panel p-10 rounded-2xl group hover:border-white/20 transition-all">
<div className="mb-6 inline-flex p-3 rounded-lg bg-zinc-900/50 text-white">
<iconify-icon className="text-2xl" icon="solar:sad-circle-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-4">The Satisfaction Paradox</h3>
<div className="flex gap-4 mb-6 text-xs font-mono">
<span className="text-green-400">CSAT: 4.8/5</span>
<span className="text-red-400">Churn: +12%</span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Agent P4 detected a misalignment in post-sales technical support. Customers were happy with the product, but felt abandoned during implementation.
                    </p>
<a className="text-xs border-b border-transparent hover:border-white transition-colors pb-0.5 inline-flex items-center gap-1" href="#">
                        Read Analysis <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="glass-panel p-10 rounded-2xl group hover:border-white/20 transition-all">
<div className="mb-6 inline-flex p-3 rounded-lg bg-zinc-900/50 text-white">
<iconify-icon className="text-2xl" icon="solar:chat-round-like-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl mb-4">The Social Illusion</h3>
<div className="flex gap-4 mb-6 text-xs font-mono">
<span className="text-green-400">Sentiment: Positive</span>
<span className="text-red-400">Growth: Flat</span>
</div>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Agent P2 revealed that engagement was high but concentrated in non-buying audiences. HSI redirected the strategy toward "Quiet Advocates" who actually buy.
                    </p>
<a className="text-xs border-b border-transparent hover:border-white transition-colors pb-0.5 inline-flex items-center gap-1" href="#">
                        Read Analysis <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-4xl mb-6 text-black/80" icon="solar:medal-ribbon-star-linear"></iconify-icon>
<h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                "Built on the foundations of Philip Kotler's Marketing 5.0 and the Lovemarks principles, powered by proprietary Machine Learning models."
            </h2>
<div className="flex justify-center gap-8 opacity-60 grayscale mt-12">

<span className="font-semibold tracking-tight text-lg">NEO4J</span>
<span className="font-semibold tracking-tight text-lg">PYTHON</span>
<span className="font-semibold tracking-tight text-lg">TENSORFLOW</span>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-32 pb-12 px-6 border-t border-zinc-900">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
                Govern the relationship.
            </h2>
<p className="text-zinc-500 text-sm mb-12 max-w-lg mx-auto">
                Heart Share Index is not for those who want reports. It is for those who want to dominate the emotional market share.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="px-10 py-4 bg-gradient-to-r from-white to-zinc-200 text-black rounded-full font-medium text-sm hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow duration-500">
                    Apply for Alpha Access
                </button>
<p className="text-[10px] text-zinc-600 tracking-wide">
                    Limited availability for Q1 2026 Analysis.
                </p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600">
<p>© 2025 Rising Partners. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
