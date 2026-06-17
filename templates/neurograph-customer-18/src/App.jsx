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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-stars"></div>
<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030610]/80 to-[#030610]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030610]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
<i className="w-5 h-5 text-white" data-lucide="brain-circuit"></i>
</div>
<div>
<span className="text-xl font-bold tracking-tight text-white block leading-none">NeuroGraph</span>
<span className="text-[10px] tracking-widest text-cyan-400 uppercase font-medium">See through your customer's eyes</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-cyan-400 transition-colors" href="#">Product</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Solutions</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Enterprise</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="relative group overflow-hidden rounded-full bg-cyan-500/10 border border-cyan-500/20 px-6 py-2 transition-all hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
<span className="relative z-10 text-xs font-bold text-cyan-400 tracking-wide uppercase group-hover:text-cyan-300">Request Demo</span>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-24">

<div className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col items-center mb-16 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase">NeuroGraph Intelligence Engine</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-4">
<span className="text-slate-500 font-light block text-2xl md:text-3xl mb-2 tracking-widest uppercase">NeuroGraph</span>
                    PERSONA VIEW
                </h1>
</div>

<div className="relative w-full h-[600px] mb-12">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-[600px] h-[500px]">

<svg className="absolute inset-0 w-full h-full" style={{zIndex: '0'}}>
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#22d3ee" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#d946ef" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="opacity-30" d="M300 250 L150 150 M300 250 L450 150 M300 250 L150 350 M300 250 L450 350 M150 150 L300 50 M450 150 L300 50 M150 350 L300 450 M450 350 L300 450 M150 150 L150 350 M450 150 L450 350" stroke="url(#lineGrad)" strokeWidth="1"></path>
<path className="opacity-20 animate-pulse" d="M300 250 L200 200 M300 250 L400 200 M300 250 L200 300 M300 250 L400 300 M200 200 L300 150 M400 200 L300 150" stroke="#22d3ee" strokeWidth="0.5"></path>

<circle cx="300" cy="250" fill="url(#lineGrad)" fillOpacity="0.05" r="120"></circle>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>


<div className="absolute top-[10%] left-[15%] animate-float">
<div className="glass-panel rounded-full py-1.5 px-3 flex items-center gap-2 pr-4 border-l-2 border-l-cyan-400">
<div className="w-6 h-6 rounded-full bg-cyan-900/50 flex items-center justify-center">
<i className="w-3 h-3 text-cyan-400" data-lucide="user"></i>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-slate-400 uppercase tracking-wider">MOTIVATION</span>
<span className="text-[10px] text-white font-medium">Neural Reddevroiel</span>
</div>
</div>

<div className="absolute -bottom-12 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/30 rotate-45 origin-top-right"></div>
</div>

<div className="absolute top-[20%] right-[10%] animate-float-delayed">
<div className="glass-panel rounded-full py-1.5 px-3 flex items-center gap-2 pr-4 border-r-2 border-r-blue-400">
<div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center">
<i className="w-3 h-3 text-blue-400" data-lucide="clock"></i>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-slate-400 uppercase tracking-wider">JTBD</span>
<span className="text-[10px] text-white font-medium">Save Time</span>
</div>
</div>
<div className="absolute -bottom-8 left-0 w-16 h-[1px] bg-gradient-to-l from-transparent to-blue-500/30 -rotate-45 origin-top-left"></div>
</div>

<div className="absolute top-[55%] left-[5%] animate-float">
<div className="glass-panel rounded-full py-1.5 px-3 flex items-center gap-2 pr-4">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
<i className="w-3 h-3 text-white" data-lucide="monitor"></i>
</div>
<span className="text-[10px] text-white font-medium">Save Time</span>
</div>
<div className="absolute top-1/2 -right-12 w-12 h-[1px] bg-slate-600/30"></div>
</div>

<div className="absolute bottom-[20%] right-[20%] animate-float-delayed">
<div className="glass-panel rounded-full py-1.5 px-3 flex items-center gap-2 pr-4 border-b-2 border-b-pink-500">
<div className="w-6 h-6 rounded-full bg-pink-900/50 flex items-center justify-center">
<i className="w-3 h-3 text-pink-400" data-lucide="zap"></i>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-slate-400 uppercase tracking-wider">BEHAVIOR</span>
<span className="text-[10px] text-white font-medium">Daily Login</span>
</div>
</div>
<div className="absolute -top-8 left-4 w-16 h-[1px] bg-pink-500/30 -rotate-45"></div>
</div>

<div className="absolute top-[30%] left-[30%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
<div className="absolute bottom-[40%] right-[35%] w-1.5 h-1.5 bg-pink-400 rounded-full shadow-[0_0_10px_#d946ef]"></div>
<div className="absolute top-[60%] right-[30%] w-1 h-1 bg-white rounded-full opacity-60"></div>
<div className="absolute top-[20%] left-[45%] w-1 h-1 bg-white rounded-full opacity-60"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="glass-panel rounded-2xl p-6 glass-panel-hover transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">Insights</h3>
<div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-slate-400">Conversion Efficiency</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">PWR</span>
</div>
<div className="text-sm text-white font-medium">Ynos Coit: The Innovator</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-slate-400 mb-1">Engagement Rate</div>
<div className="text-xs text-slate-500">Click-Through</div>
</div>
<div className="text-right">
<div className="text-xl font-bold text-cyan-400">+20%</div>
<div className="text-[10px] text-slate-500">60 iterations</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 glass-panel-hover transition-all duration-300">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">Metrics</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">ANK</span>
</div>
<div className="text-sm text-white font-medium mb-6">Jley Pesona: The Innovator</div>
<div className="relative h-24 w-full mt-auto">

<svg className="w-full h-full overflow-visible" viewbox="0 0 200 80">
<defs>
<lineargradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 60 C 20 55, 40 70, 60 50 S 100 30, 120 40 S 160 20, 200 10 V 80 H 0 Z" fill="url(#chartFill)"></path>
<path d="M0 60 C 20 55, 40 70, 60 50 S 100 30, 120 40 S 160 20, 200 10" fill="none" stroke="#22d3ee" strokeWidth="2"></path>
</svg>
<div className="absolute bottom-0 right-0 text-right">
<div className="text-2xl font-bold text-white tracking-tight">85%</div>
<div className="text-[10px] text-slate-500 uppercase">GDG</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 glass-panel-hover transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">Metrics</h3>
<i className="w-4 h-4 text-cyan-400" data-lucide="check-circle-2"></i>
</div>
<div className="mb-6">
<div className="text-xs text-slate-400 mb-2">Engagement Rate:</div>
<div className="flex justify-between items-center px-2 py-2 bg-slate-800/50 rounded-lg border border-white/5">
<span className="text-xs font-mono text-slate-300">A</span>
<span className="text-xs font-mono text-slate-300">O</span>
<span className="text-xs font-mono text-slate-300">A</span>
<span className="text-xs font-mono text-slate-300">3</span>
<span className="text-xs font-mono text-cyan-400">3+</span>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-slate-400 mb-1">Feature Rate:</div>
<div className="text-xs text-slate-500">Click: Thought</div>
</div>
<div className="text-right">
<div className="text-xl font-bold text-white">85%</div>
<div className="text-[10px] text-slate-500">Globs</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 relative">
<div className="h-0.5 w-full bg-slate-800 rounded-full relative">
<div className="absolute top-0 left-0 h-full w-[35%] bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>

<div className="absolute top-1/2 left-[35%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#030610] border-2 border-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] z-10 cursor-pointer"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-bold tracking-widest uppercase text-slate-500">
<span className="text-cyan-400">Initial Input</span>
<span className="hover:text-cyan-300 transition-colors cursor-pointer">Pattern Recognition</span>
<span className="hover:text-cyan-300 transition-colors cursor-pointer">Evolving Insights</span>
</div>
</div>
</div>

<div className="border-y border-white/5 bg-[#030610]/50 backdrop-blur-sm py-12 mb-24 relative overflow-hidden">

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030610] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030610] to-transparent z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[10px] text-slate-500 font-bold tracking-[0.3em] mb-8 uppercase">
                    Trusted by forward-thinking teams
                </p>
<div className="flex flex-wrap gap-12 justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">

<i className="w-8 h-8 text-white hover:text-cyan-400 transition-colors" data-lucide="layers"></i>
<i className="w-8 h-8 text-white hover:text-cyan-400 transition-colors" data-lucide="box"></i>
<i className="w-8 h-8 text-white hover:text-cyan-400 transition-colors" data-lucide="hexagon"></i>
<i className="w-8 h-8 text-white hover:text-cyan-400 transition-colors" data-lucide="triangle"></i>
<i className="w-8 h-8 text-white hover:text-cyan-400 transition-colors" data-lucide="circle-dashed"></i>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex items-end justify-between mb-16 border-b border-white/5 pb-4">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                    The Neural Loop
                    <span className="text-cyan-400">.</span>
</h2>
<div className="hidden md:flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase">
<span>// Architecture</span>
<span className="w-8 h-px bg-cyan-500/50"></span>
<span>02</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-white/5 bg-[#050A14] hover:border-cyan-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
<div className="w-12 h-12 rounded-lg bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-cyan-400" data-lucide="scan-eye"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Perceive &amp; Ingest</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        NeuroGraph connects to your data sources instantly. Our agents automatically map your infrastructure to understand user personas.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-[#050A14] hover:border-pink-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(217,70,239,0.1)]">
<div className="w-12 h-12 rounded-lg bg-pink-950/30 border border-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-pink-400" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Process &amp; Reason</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        The engine reasons about the state of your system. It generates code patches and optimization strategies in real-time.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-[#050A14] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
<div className="w-12 h-12 rounded-lg bg-blue-950/30 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-blue-400" data-lucide="network"></i>
</div>
<h3 className="text-xl font-bold text-white mb-3">Act &amp; Resolve</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Execute the necessary changes with surgical precision, ensuring zero downtime and complete system integrity.
                    </p>
</div>
</div>
</section>

<section className="relative py-24 border-t border-white/5 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-900/10 to-pink-900/10 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Scalable Plans</h2>
<p className="text-slate-400 text-lg">Choose the perfect plan for your business with our straightforward pricing tiers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-white/5 bg-[#050A14] flex flex-col hover:border-white/10 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="flex items-baseline gap-1 mt-4">
<span className="text-4xl font-bold text-white">$499</span>
<span className="text-slate-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-400 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Access to 3 models</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> 10k API calls</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Basic dashboard</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-semibold">Get Started</button>
</div>

<div className="relative p-8 rounded-2xl border border-cyan-500/30 bg-[#081020] flex flex-col shadow-[0_0_40px_rgba(34,211,238,0.1)] transform md:-translate-y-4">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
<div className="mb-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-2 block">Recommended</span>
<h3 className="text-lg font-medium text-white">Professional</h3>
<div className="flex items-baseline gap-1 mt-4">
<span className="text-4xl font-bold text-white">$1999</span>
<span className="text-slate-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-300 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-400" data-lucide="check"></i> 2 Custom models</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-400" data-lucide="check"></i> 50k API calls</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-400" data-lucide="check"></i> Advanced analytics</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-400" data-lucide="check"></i> Priority support</li>
</ul>
<button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-[#050A14] flex flex-col hover:border-white/10 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<div className="flex items-baseline gap-1 mt-4">
<span className="text-4xl font-bold text-white">Custom</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-400 flex-1">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Unlimited models</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Unlimited API calls</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-cyan-500" data-lucide="check"></i> Dedicated support</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-semibold">Contact Sales</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#02040a] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-full bg-cyan-900 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-400" data-lucide="brain-circuit"></i>
</div>
<span className="text-lg font-bold text-white">NeuroGraph</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Advanced neural mapping for customer persona visualization and predictive behavior analysis.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">Platform</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Overview</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">Resources</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-600">
                    © 2024 NeuroGraph Inc. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
