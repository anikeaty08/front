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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative w-10 h-8">
<svg className="w-full h-full drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" fill="none" viewbox="0 0 130 80" xmlns="http://www.w3.org/2000/svg">

<path d="M5 5 H30 L20 40 L5 40 Z" fill="black" stroke="#f97316" strokeWidth="4"></path>
<path d="M5 40 L20 40 L30 75 H5 Z" fill="black" stroke="#f97316" strokeWidth="4"></path>
<path d="M35 5 H60 L40 40 L35 5 Z" fill="black" stroke="#f97316" strokeWidth="4"></path>
<path d="M40 40 L60 75 H35 L40 40 Z" fill="black" stroke="#f97316" strokeWidth="4"></path>

<path d="M70 5 H125 L105 25 H85 L70 5 Z" fill="black" stroke="#DC2626" strokeWidth="4"></path>
<path d="M105 25 L85 55 L105 55 L125 25 Z" fill="black" stroke="#DC2626" strokeWidth="4"></path>
<path d="M85 55 L65 75 H120 L105 55 H85 Z" fill="black" stroke="#DC2626" strokeWidth="4"></path>
</svg>
</div>
<span className="font-bold tracking-tight text-white text-sm hidden sm:block">KZ TRADING <span className="text-orange-500">MASTER</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#vault">The Vault</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#framework">BLTE Framework</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#community">Community</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Member Login</a>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-orange-600 px-4 font-medium text-white transition-all duration-300 hover:bg-orange-500 hover:scale-[1.02] shadow-[0_0_20px_-10px_rgba(249,115,22,0.5)]" href="#join">
<span className="text-xs font-semibold">Join the Pool</span>
<iconify-icon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] glow-accent opacity-40 blur-3xl pointer-events-none"></div>
<div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Trading Pool Q4 Intake Open
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Precision. Logic.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-red-700">Execution.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                The complete Master System vault. Access the proprietary KZ Framework (BLTE), daily market breakdowns, and the Trading Pool community.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold transition-all shadow-[0_0_25px_-5px_rgba(249,115,22,0.4)] w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon icon="lucide:unlock" width="16"></iconify-icon>
                    Unlock Master System
                </button>
<button className="h-12 px-8 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-300 text-sm font-medium transition-all w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
                    View Community
                </button>
</div>

<div className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-zinc-900 shadow-2xl overflow-hidden group">

<div className="flex items-center justify-between border-b border-white/5 bg-zinc-950 px-4 py-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-orange-500/20 border border-orange-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-zinc-500 font-mono flex items-center gap-2">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                        vault.kztrading.com/module-08
                    </div>
<div className="w-10"></div>
</div>
<div className="relative aspect-video bg-zinc-950 flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black opacity-80"></div>

<svg className="absolute inset-0 w-full h-full opacity-20 stroke-white/20" preserveaspectratio="none">
<path d="M0 300 L100 280 L200 320 L300 150 L400 180 L500 100 L600 120 L700 50 L800 80 L1000 20" fill="none" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<rect fill="rgba(249,115,22,0.1)" height="200" width="40" x="280" y="100"></rect>
</svg>

<div className="relative z-10 flex flex-col items-center">
<div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 cursor-pointer shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg">
<iconify-icon className="ml-1" icon="lucide:play" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Module 8: The BLTE Framework</h3>
<p className="text-zinc-500 mt-2 text-sm">Lesson 3: Logic Validation &amp; Inefficiency (14:20)</p>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800">
<div className="h-full w-[35%] bg-gradient-to-r from-orange-500 to-red-600"></div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left border-r border-white/5 last:border-0 md:pr-8">
<div className="flex items-center justify-center md:justify-start gap-2 mb-1">
<iconify-icon className="text-orange-500" icon="lucide:users" width="20"></iconify-icon>
<span className="text-3xl font-semibold text-white tracking-tight">1,240+</span>
</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest pl-7">Active Members</div>
</div>
<div className="text-center md:text-left border-r border-white/5 last:border-0 md:pl-8 md:pr-8">
<div className="flex items-center justify-center md:justify-start gap-2 mb-1">
<iconify-icon className="text-red-500" icon="lucide:file-text" width="20"></iconify-icon>
<span className="text-3xl font-semibold text-white tracking-tight">10</span>
</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest pl-7">Core Modules</div>
</div>
<div className="text-center md:text-left border-r border-white/5 last:border-0 md:pl-8 md:pr-8">
<div className="flex items-center justify-center md:justify-start gap-2 mb-1">
<iconify-icon className="text-orange-500" icon="lucide:message-circle" width="20"></iconify-icon>
<span className="text-3xl font-semibold text-white tracking-tight">24/7</span>
</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest pl-7">Discord Support</div>
</div>
<div className="text-center md:text-left md:pl-8">
<div className="flex items-center justify-center md:justify-start gap-2 mb-1">
<iconify-icon className="text-red-500" icon="lucide:bar-chart-2" width="20"></iconify-icon>
<span className="text-3xl font-semibold text-white tracking-tight">Daily</span>
</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest pl-7">Market Outlook</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-zinc-950" id="vault">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Inside The Vault.</h2>
<p className="text-zinc-400 max-w-xl text-lg">A structured path from novice to funded trader. 10 Comprehensive modules designed to build your edge.</p>
</div>
<div className="flex items-center gap-2 text-sm text-orange-500 font-medium">
<iconify-icon icon="lucide:download" width="16"></iconify-icon>
                    Download Curriculum PDF
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">MOD 01</span>
<iconify-icon className="text-zinc-500 group-hover:text-orange-400" icon="lucide:brain-circuit" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Philosophy &amp; Overview</h3>
<p className="text-sm text-zinc-500">Establishing the correct mental framework for longevity and understanding probabilities.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">MOD 02</span>
<iconify-icon className="text-zinc-500 group-hover:text-orange-400" icon="lucide:columns" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Three Pillars of the Market</h3>
<p className="text-sm text-zinc-500">The foundational tripod: Technicals, Fundamentals, and Sentiment analysis.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">MOD 03</span>
<iconify-icon className="text-zinc-500 group-hover:text-orange-400" icon="lucide:candlestick-chart" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Price Action Mastery</h3>
<p className="text-sm text-zinc-500">Reading raw price data, liquidity, imbalances, and order flow.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">MOD 04</span>
<iconify-icon className="text-zinc-500 group-hover:text-orange-400" icon="lucide:layers" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Market Structure</h3>
<p className="text-sm text-zinc-500">Identifying trends, structural breaks, and changes in character.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">MOD 05</span>
<iconify-icon className="text-zinc-500 group-hover:text-orange-400" icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Candlestick Psychology</h3>
<p className="text-sm text-zinc-500">Decoding the story behind candles. Wicks, bodies, and rejection patterns.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">MOD 06</span>
<iconify-icon className="text-zinc-500 group-hover:text-orange-400" icon="lucide:target" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Areas of Interest</h3>
<p className="text-sm text-zinc-500">High probability zones: Supply, Demand, and Order Blocks.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">MOD 07</span>
<iconify-icon className="text-zinc-500 group-hover:text-orange-400" icon="lucide:clock" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Timing &amp; Sessions</h3>
<p className="text-sm text-zinc-500">Session overlaps, killzones, and when NOT to trade.</p>
</div>

<div className="group relative p-6 rounded-xl border border-orange-500/40 bg-gradient-to-br from-orange-500/10 to-red-500/5 hover:bg-zinc-900/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
<div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,black)]"></div>
<div className="relative">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-orange-400 font-bold">CORE SYSTEM</span>
<iconify-icon className="text-orange-500" icon="lucide:gem" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white mb-2">KZ Framework (BLTE)</h3>
<p className="text-sm text-zinc-400">Break, Logic, Target, Entry. The systematic approach to precision entries.</p>
</div>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-600 group-hover:text-orange-500 transition-colors">MOD 09</span>
<iconify-icon className="text-zinc-500 group-hover:text-orange-400" icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Risk &amp; Journaling</h3>
<p className="text-sm text-zinc-500">Capital preservation strategies and documenting trades for growth.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-zinc-900/20 hover:border-orange-500/30 hover:bg-zinc-900/40 transition-all duration-300 col-span-1 md:col-span-3 lg:col-span-3">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:map" width="24"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-mono text-zinc-600">MOD 10</span>
<h3 className="text-lg font-medium text-white">Integration Map</h3>
</div>
<p className="text-sm text-zinc-500">Combining all concepts into a daily workflow. From pre-market analysis to execution.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="framework">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="text-orange-500 font-bold tracking-tight text-sm mb-4 uppercase">The Proprietary System</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Break. Logic. Target. Entry.</h2>
<div className="space-y-6">
<p className="text-zinc-400 text-lg leading-relaxed">
                        The BLTE framework removes subjectivity. It requires four specific conditions to be met before you ever click 'Buy' or 'Sell'.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
<div className="p-4 rounded-lg border border-white/5 bg-zinc-900/50">
<div className="text-red-500 font-bold mb-2">01. BREAK</div>
<p className="text-xs text-zinc-400">Structural displacement indicating momentum shift.</p>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-zinc-900/50">
<div className="text-orange-500 font-bold mb-2">02. LOGIC</div>
<p className="text-xs text-zinc-400">The "Why". Liquidity sweeps or FVG mitigation.</p>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-zinc-900/50">
<div className="text-white font-bold mb-2">03. TARGET</div>
<p className="text-xs text-zinc-400">Clear draw on liquidity for TP and invalidation points.</p>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-zinc-900/50">
<div className="text-green-500 font-bold mb-2">04. ENTRY</div>
<p className="text-xs text-zinc-400">LTF execution confirmation.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">

<div className="relative w-full aspect-square md:aspect-video bg-zinc-900 rounded-xl border border-white/5 p-8 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-900/20 to-zinc-950"></div>

<div className="relative z-10 flex flex-col w-full max-w-md gap-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 font-bold text-xs">B</div>
<div className="h-1 flex-1 bg-zinc-800 rounded overflow-hidden">
<div className="h-full w-full bg-red-500/50"></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-xs">L</div>
<div className="h-1 flex-1 bg-zinc-800 rounded overflow-hidden">
<div className="h-full w-3/4 bg-orange-500/50"></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-xs">T</div>
<div className="h-1 flex-1 bg-zinc-800 rounded overflow-hidden">
<div className="h-full w-1/2 bg-white/20"></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500 font-bold text-xs">E</div>
<div className="h-1 flex-1 bg-zinc-800 rounded overflow-hidden">
<div className="h-full w-1/4 bg-green-500/50"></div>
</div>
</div>
<div className="mt-4 p-4 rounded bg-black/50 border border-zinc-800 flex items-center justify-between">
<span className="text-xs text-zinc-500">Trade Status</span>
<span className="text-xs text-green-400 font-mono">EXECUTING...</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="join">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Join the Trading Pool.</h2>
<p className="text-zinc-400">One price. Full Access. No upsells.</p>
</div>

<div className="relative flex flex-col md:flex-row rounded-2xl border border-orange-500/30 bg-zinc-900/40 backdrop-blur-sm overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] pointer-events-none"></div>
<div className="p-8 md:w-2/3 border-b md:border-b-0 md:border-r border-white/5">
<h3 className="text-2xl font-bold text-white mb-2">Master System Access</h3>
<p className="text-sm text-zinc-500 mb-6">Lifetime access to the vault and community.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500" icon="lucide:check-circle" width="18"></iconify-icon>
<span><strong>Full 10-Module Course</strong> (Updates included)</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Private Discord Community Access</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Daily Market Breakdowns (Pre-NY)</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Weekly Live Q&amp;A Sessions</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Integration Map &amp; Notion Templates</span>
</li>
</ul>
</div>
<div className="p-8 md:w-1/3 flex flex-col justify-center bg-black/20">
<div className="text-center mb-6">
<div className="text-sm text-zinc-500 line-through mb-1">$1,497</div>
<div className="text-5xl font-bold text-white tracking-tight">$997</div>
<div className="text-xs text-orange-400 font-medium mt-2">ONE-TIME PAYMENT</div>
</div>
<button className="w-full py-4 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold text-sm transition-all shadow-lg shadow-orange-900/20 mb-3">
                        Join The Floor
                    </button>
<div className="text-center">
<span className="text-[10px] text-zinc-600 flex items-center justify-center gap-1">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon>
                            Secure Stripe Checkout
                        </span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-zinc-500 text-sm font-semibold">KZ TRADING</span>
<span className="text-zinc-700 text-xs">|</span>
<span className="text-zinc-600 text-sm">© 2024 All Rights Reserved</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-orange-500 text-sm transition-colors" href="#">Twitter</a>
<a className="text-zinc-500 hover:text-orange-500 text-sm transition-colors" href="#">YouTube</a>
<a className="text-zinc-500 hover:text-orange-500 text-sm transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>

    </>
  );
}
