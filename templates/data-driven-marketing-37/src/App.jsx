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
navy: {
900: '#0b1a26', // Deep Customer.io style background
800: '#162a3b',
700: '#233b52',
},
mint: {
50: '#f0fdf4',
100: '#dcfce7',
200: '#bbf7d0',
400: '#4ade80', // Bright accent
500: '#22c55e',
900: '#14532d',
},
cream: '#f4f4f0',
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
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
      

<nav className="fixed z-50 bg-navy-900/90 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<i className="w-6 h-6 text-mint-400" data-lucide="bar-chart-2"></i>
<span className="text-lg font-semibold tracking-tight">Syed Media</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#system">Our System</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#scaling">Scaling</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-mint-100 text-navy-900 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white transition-all" href="#">
                    Book Strategy Call
                </a>
</div>
</div>
</nav>

<header className="overflow-hidden lg:pb-40 pt-32 pb-24 relative">

<div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<svg className="absolute top-0 right-0 w-[800px] h-[800px] text-white/5 transform translate-x-1/3 -translate-y-1/4" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z"></path>
<path d="M50 15 L85 32.5 L85 67.5 L50 85 L15 67.5 L15 32.5 Z" opacity="0.5"></path>
<path d="M50 30 L70 40 L70 60 L50 70 L30 60 L30 40 Z" opacity="0.3"></path>
</svg>
</div>
<div className="grid lg:grid-cols-2 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 mb-8">
<span className="w-2 h-2 rounded-full bg-mint-400 animate-pulse"></span>
<span className="uppercase text-xs font-medium text-mint-200 tracking-widest">Performance Intelligence Agency</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter mb-8">
                    Data-driven <span className="text-mint-200">social performance</span> systems.
                </h1>
<p className="text-xl text-slate-400 max-w-lg leading-relaxed mb-10">
                    We replace creative guesswork with modular testing frameworks. A diversified media buying engine that scales business KPIs, not just vanity metrics.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-mint-100 text-navy-900 text-lg font-medium hover:bg-white transition-all" href="#">
                        Book Strategy Call
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-700 text-slate-200 text-lg font-medium hover:bg-white/5 transition-all" href="#system">
                        See Our System
                    </a>
</div>
<div className="mt-12 flex flex-wrap gap-6 text-slate-500 text-sm font-medium">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-mint-400" data-lucide="check"></i>
<span className="">Not a creative agency</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-mint-400" data-lucide="check"></i>
<span className="">Not a management firm</span>
</div>
</div>
</div>

<div className="hidden lg:block relative">
<div className="relative bg-navy-800 rounded-2xl border border-white/10 p-1 shadow-2xl backdrop-blur-sm">
<div className="bg-navy-900 rounded-xl p-8 border border-white/5 h-[400px] flex flex-col relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">

<div className="relative z-10 w-24 h-24 rounded-full bg-mint-900/30 border border-mint-500/30 flex items-center justify-center">
<i className="w-10 h-10 text-mint-400" data-lucide="cpu"></i>
</div>

<div className="absolute w-64 h-64 border border-dashed border-slate-700 rounded-full animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-navy-800 border border-slate-600 p-1.5 rounded-full">
<i className="w-4 h-4 text-slate-300" data-lucide="instagram"></i>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 bg-navy-800 border border-slate-600 p-1.5 rounded-full">
<i className="w-4 h-4 text-slate-300" data-lucide="youtube"></i>
</div>
</div>
<div className="absolute w-96 h-96 border border-slate-800 rounded-full animate-[spin_15s_linear_infinite_reverse]">
<div className="absolute left-0 top-1/2 -translate-x-3 -translate-y-1/2 bg-navy-800 border border-slate-600 p-1.5 rounded-full">
<i className="w-4 h-4 text-slate-300" data-lucide="shopping-cart"></i>
</div>
</div>
</div>

<div className="absolute top-6 left-6 bg-navy-800 border border-white/10 p-3 rounded-lg shadow-lg z-20">
<div className="text-xs text-slate-400 mb-1">MER (RoAS)</div>
<div className="text-lg font-semibold text-mint-400">4.2x</div>
</div>
<div className="absolute bottom-6 right-6 bg-navy-800 border border-white/10 p-3 rounded-lg shadow-lg z-20">
<div className="text-xs text-slate-400 mb-1">CPA Target</div>
<div className="text-lg font-semibold text-white">$42.00</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="bg-navy-900 border-white/5 border-t pt-24 pb-24 relative" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Why traditional scaling hits a wall.</h2>
<p className="text-lg text-slate-400 max-w-2xl">
                    Most brands rely on platform algorithms without a robust data infrastructure. Relying on "feeling" instead of frameworks is expensive.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 bg-navy-800 rounded-2xl border border-white/5 hover:border-mint-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center text-mint-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="anchor"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Platform Dependency</h3>
<p className="leading-relaxed text-base text-slate-400">Relying solely on Meta and other Platforms leaves revenue vulnerable to single-point volatility.</p>
</div>

<div className="group p-8 bg-navy-800 rounded-2xl border border-white/5 hover:border-mint-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center text-mint-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Creative Guesswork</h3>
<p className="text-base text-slate-400 leading-relaxed">Launching ads based on intuition rather than a modular testing framework wastes budget.</p>
</div>

<div className="group p-8 bg-navy-800 rounded-2xl border border-white/5 hover:border-mint-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center text-mint-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="pie-chart"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Inefficient Spend</h3>
<p className="leading-relaxed text-base text-slate-400">Without usecase adapted attribution models, you scale losers and cut winners unknowingly.</p>
</div>

<div className="group p-8 bg-navy-800 rounded-2xl border border-white/5 hover:border-mint-500/30 transition-all duration-300">
<div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center text-mint-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Scaling Instability</h3>
<p className="text-base text-slate-400 leading-relaxed">Growth spikes followed by crashes indicate a lack of systemized logic.</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-navy-800 border-white/5 pt-24 pb-24" id="system">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-mint-200 text-sm font-medium mb-6">The Methodology</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">The Growth Engine System</h2>
</div>
<div className="space-y-32">

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="bg-navy-900 rounded-2xl border border-white/10 p-8 relative overflow-hidden shadow-2xl">

<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 border-b border-white/10 pb-4 mb-2 flex justify-between items-center">
<span className="text-xs text-slate-400 font-mono">TEST_BATCH_042</span>
<span className="text-xs text-mint-400">Active</span>
</div>
<div className="bg-navy-800 p-4 rounded-lg border border-white/5">
<div className="h-2 w-16 bg-slate-700 rounded mb-2"></div>
<div className="h-20 bg-slate-700/50 rounded mb-2"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">Hook A</span>
<span className="text-xs text-green-400">CTR 1.2%</span>
</div>
</div>
<div className="bg-navy-800 p-4 rounded-lg border border-white/5 opacity-50">
<div className="h-2 w-16 bg-slate-700 rounded mb-2"></div>
<div className="h-20 bg-slate-700/50 rounded mb-2"></div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-500">Hook B</span>
<span className="text-xs text-red-400">CTR 0.4%</span>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 text-[10px] text-slate-500 font-mono bg-navy-950 px-2 py-1 rounded border border-white/5">
                                 Iterating Winners...
                             </div>
</div>
</div>
<div className="order-1 lg:order-2">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6">Modular Creative Testing</h3>
<p className="text-lg text-slate-400 leading-relaxed mb-8">
                            We treat creative as a science. By isolating hooks, bodies, and CTAs into a modular testing framework, we build a library of high-performing assets that fight ad fatigue automatically.
                        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="">Scientific variable isolation framework</span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="">Automated iteration logic based on CTR thresholds</span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="">Reduced creative burn rate</span>
</li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6">Platform Diversification</h3>
<p className="leading-relaxed text-lg text-slate-400 mb-8">Meta is a tool, not a strategy. We build omnichannel demand capture systems. We allocate budget where your customer is in the funnel, not just where it's easiest to advertise.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="">Integration: Meta, TikTok, Snap, Reddit, Pinterest, X, Criteo, RTB House</span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="">Use-case specific channel selection</span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="">AI-driven retargeting sequences</span>
</li>
</ul>
</div>
<div className="relative">
<div className="bg-navy-900 rounded-2xl border border-white/10 p-10 flex items-center justify-center min-h-[300px]">

<div className="relative w-full h-full flex items-center justify-center gap-4">

<div className="flex flex-col gap-4">
<div className="bg-navy-800 px-4 py-3 rounded border border-white/5 flex items-center gap-3 w-40">
<i className="w-4 h-4 text-blue-400" data-lucide="facebook"></i>
<span className="text-sm font-medium text-white">Meta</span>
<span className="text-[10px] text-slate-500 ml-auto">TOF</span>
</div>
<div className="bg-navy-800 px-4 py-3 rounded border border-white/5 flex items-center gap-3 w-40">
<i className="w-4 h-4 text-slate-300" data-lucide="youtube"></i>
<span className="text-sm font-medium text-white">YouTube</span>
<span className="text-[10px] text-slate-500 ml-auto">MOF</span>
</div>
<div className="bg-navy-800 px-4 py-3 rounded border border-white/5 flex items-center gap-3 w-40">
<i className="w-4 h-4 text-yellow-400" data-lucide="search"></i>
<span className="text-sm font-medium text-white">Google</span>
<span className="text-[10px] text-slate-500 ml-auto">BOF</span>
</div>
</div>

<div className="w-px h-32 bg-gradient-to-b from-transparent via-mint-500 to-transparent"></div>

<div className="bg-mint-900/20 border border-mint-500/30 px-6 py-8 rounded-xl text-center">
<div className="text-3xl font-bold text-white mb-1">3.5x</div>
<div className="text-xs text-mint-200 uppercase tracking-wide">Blended MER</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="bg-navy-900 rounded-2xl border border-white/10 p-8">
<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<span className="text-white font-medium">Attribution Logic</span>
<i className="text-mint-400 w-5 h-5" data-lucide="server"></i>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-24 text-sm font-medium text-slate-500">Touchpoints</div>
<div className="flex-1 h-2 bg-navy-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-mint-500 w-full"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
<div className="p-3 bg-navy-800 rounded border border-white/5 text-center">
<div className="text-xs text-slate-500 mb-1">Click ID</div>
<div className="text-green-400 text-xs">Captured</div>
</div>
<div className="p-3 bg-navy-800 rounded border border-white/5 text-center">
<div className="text-xs text-slate-500 mb-1">Server Event</div>
<div className="text-green-400 text-xs">Matched</div>
</div>
<div className="p-3 bg-navy-800 rounded border border-white/5 text-center">
<div className="text-xs text-slate-500 mb-1">Value</div>
<div className="text-white text-xs font-mono">$148.50</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6">Attribution Intelligence</h3>
<p className="leading-relaxed text-lg text-slate-400 mb-8">We use advanced server-side tracking and datadriven multi-touch attribution models to understand the true value of every dollar. Real-time signals dictate budget allocation, not lagged dashboard metrics.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="">Server-side CAPI implementation</span>
</li>
<li className="flex gap-3 text-slate-300 gap-x-3 gap-y-3 items-start">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span className="">Business Intellicence focused reporting</span>
</li>
<li className="flex items-start gap-3 text-slate-300">
<i className="w-5 h-5 text-mint-400 mt-0.5" data-lucide="check-circle-2"></i>
<span>Attribution-driven budget shifts</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-navy-900 border-white/5 border-t pt-24 pb-24" id="scaling">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">How We Scale</h2>
<p className="text-lg text-slate-400">A predictable, four-step process to transform your acquisition.</p>
</div>
<div className="grid md:grid-cols-4 gap-4">

<div className="relative p-6 bg-navy-800 rounded-xl border border-white/5">
<div className="text-3xl font-bold text-white/10 mb-4 font-mono">01</div>
<h3 className="text-lg font-semibold text-white mb-2">Audit &amp; Setup</h3>
<p className="leading-relaxed text-sm text-slate-400">Analysis of historical data, fixing tracking (CAPI/Pixel), and establishing baseline KPI targets.</p>
</div>

<div className="relative p-6 bg-navy-800 rounded-xl border border-white/5">
<div className="text-3xl font-bold text-white/10 mb-4 font-mono">02</div>
<h3 className="text-lg font-semibold text-white mb-2">Strategic Build</h3>
<p className="leading-relaxed text-sm text-slate-400">Building the campaign architecture and deploying the initial creative testing batches.</p>
</div>

<div className="relative p-6 bg-navy-800 rounded-xl border border-white/5">
<div className="text-3xl font-bold text-white/10 mb-4 font-mono">03</div>
<h3 className="text-lg font-semibold text-white mb-2">Validation</h3>
<p className="text-sm text-slate-400 leading-relaxed">Rapid iteration to identify winning angles, audiences, and platform mixes.</p>
</div>

<div className="relative p-6 bg-mint-900/10 rounded-xl border border-mint-500/20">
<div className="text-3xl font-bold text-mint-500/20 mb-4 font-mono">04</div>
<h3 className="text-lg font-semibold text-mint-100 mb-2">Aggressive Scale</h3>
<p className="leading-relaxed text-sm text-slate-400">Increasing spend on verified winners while maintaining business focused KPI targets.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
<div className="p-10 bg-navy-900 text-center">
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">3.5x</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Average MER</div>
</div>
<div className="p-10 bg-navy-900 text-center">
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">$12M+</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Managed Spend</div>
</div>
<div className="p-10 bg-navy-900 text-center">
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-2">4+</div>
<div className="text-sm font-medium text-slate-400 uppercase tracking-wide">Active Channels</div>
</div>
</div>

<div className="mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-br from-mint-900 to-navy-900 border border-mint-500/20">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mint-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 px-6 py-20 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Ready to build a predictable revenue engine?</h2>
<p className="text-lg text-slate-300 mb-10 leading-relaxed">We only partner with brands where our system can demonstrably add value. Book a call to see if your infrastructure is ready for scale.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-mint-100 text-navy-900 text-lg font-medium hover:bg-white transition-all" href="#">
                            Book Strategy Call
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white text-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm" href="#">
                            View Case Studies
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-navy-900 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-mint-400" data-lucide="bar-chart-2"></i>
<span className="text-lg font-semibold tracking-tight text-white">Syed Media</span>
</div>
<div className="flex gap-8 text-slate-400 text-sm font-medium">
<a className="hover:text-mint-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-mint-400 transition-colors" href="#">Terms</a>
<a className="hover:text-mint-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-mint-400 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-slate-500 text-xs">
                © 2024 Syed Media. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
