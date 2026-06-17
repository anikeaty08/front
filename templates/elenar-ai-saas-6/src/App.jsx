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



        // Initialize Icons
        lucide.createIcons();

        // 1. SCROLL REVEAL OBSERVER
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger line animation if it's the wrapper
                    if(entry.target.querySelector('#progress-line')) {
                        document.getElementById('progress-line').style.opacity = '1';
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // 2. SPOTLIGHT MOUSE EFFECT
        const spotlightGroups = document.querySelectorAll('.spotlight-group');

        spotlightGroups.forEach(group => {
            group.addEventListener('mousemove', (e) => {
                const cards = group.querySelectorAll('.spotlight-card');
                
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
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
      
<div className="noise-bg"></div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="blob absolute top-[-10%] left-[20%] w-[800px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="blob absolute bottom-[-10%] right-0 w-[600px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen" style={{animationDelay: '-5s'}}></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#030303]/70 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-cyan-500/20 blur-md group-hover:bg-cyan-500/40 transition-all"></div>
<span className="text-white font-bold text-xs relative z-10">E</span>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">ELENAR</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors relative group" href="#how-it-works">
                    Methodology
                </a>
<a className="hover:text-white transition-colors relative group" href="#agents">
                    Intelligence
                </a>
<a className="hover:text-white transition-colors relative group" href="#value">
                    Value
                </a>
</div>
<div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                    Request Demo
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-12 lg:pt-40 lg:pb-24 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
<div className="max-w-7xl mx-auto w-full relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-xs font-medium text-cyan-400 mb-8 cursor-default">
<i className="w-3 h-3" data-lucide="sparkles"></i>
<span>AI-Powered Management</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                        Make Decisions<br/>
<span className="text-gradient-cyan">10x Faster</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mb-10 leading-relaxed font-light">
                        ELENAR moves you from data to action in minutes. The first Management Intelligence layer that detects anomalies and orchestrates solutions autonomously.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
<button className="w-full sm:w-auto px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-semibold rounded-lg transition-all hover:scale-105 active:scale-95 duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2">
                            Start Optimizing Free <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all group flex items-center justify-center gap-2">
                            View Case Studies <i className="w-4 h-4 text-neutral-400" data-lucide="play-circle"></i>
</button>
</div>

<div className="flex items-center gap-12 border-t border-white/10 pt-8">
<div>
<div className="text-2xl font-bold text-white mb-1">10k+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Signals Analyzed</div>
</div>
<div>
<div className="text-2xl font-bold text-white mb-1">99.9%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Detection Rate</div>
</div>
<div>
<div className="text-2xl font-bold text-white mb-1">2min</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Time to Insight</div>
</div>
</div>
</div>

<div className="relative reveal delay-200 hidden lg:block">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0f0f0f]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400">
<i className="w-4 h-4" data-lucide="bot"></i>
</div>
<div>
<div className="text-sm font-medium text-white">ELENAR Intelligence</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-neutral-500">Online</span>
</div>
</div>
</div>
<div className="w-8 h-8 rounded hover:bg-white/5 flex items-center justify-center text-neutral-500 cursor-pointer">
<i className="w-4 h-4 text-cyan-400" data-lucide="zap"></i>
</div>
</div>

<div className="p-6 space-y-6 min-h-[400px]">

<div className="flex justify-end">
<div className="bg-neutral-800 text-neutral-200 px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[80%] border border-white/5">
                                    Show me current supply chain risks for the Q4 launch.
                                </div>
</div>

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-3 h-3 text-cyan-400 animate-spin" data-lucide="loader"></i>
</div>
<div className="space-y-2">
<div className="text-xs text-neutral-500">Analyzing logistics data...</div>
<div className="glass-panel px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-neutral-300 max-w-[90%] border-l-2 border-l-cyan-500">
<p className="mb-3">Scanning complete. I've detected a potential bottleneck in the Rotterdam distribution node.</p>
<ul className="space-y-2 text-xs text-neutral-400">
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-orange-400" data-lucide="alert-triangle"></i>
                                                Carrier delay probability: 85%
                                            </li>
<li className="flex items-center gap-2">
<i className="w-3 h-3 text-neutral-500" data-lucide="package"></i>
                                                Impacted units: 15,000
                                            </li>
</ul>
</div>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-3 h-3 text-cyan-400" data-lucide="check"></i>
</div>
<div className="space-y-2">
<div className="text-xs text-cyan-500">Generation complete</div>
<div className="bg-neutral-900 border border-white/10 px-4 py-4 rounded-2xl rounded-tl-sm text-sm text-white max-w-[95%]">
<p className="mb-3 font-medium">Recommendation: Reroute via Air Freight (Route B)</p>
<div className="grid grid-cols-2 gap-2 text-xs mb-3">
<div className="bg-neutral-800 p-2 rounded">
<div className="text-neutral-500">Cost Impact</div>
<div className="text-red-400">+12%</div>
</div>
<div className="bg-neutral-800 p-2 rounded">
<div className="text-neutral-500">Time Saved</div>
<div className="text-green-400">4 Days</div>
</div>
</div>
<button className="w-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 py-1.5 rounded text-xs font-medium border border-cyan-500/20 transition-colors">
                                            Apply Reroute Configuration
                                        </button>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-[#0f0f0f]">
<div className="relative">
<input className="w-full bg-[#050505] border border-white/10 rounded-lg pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors placeholder:text-neutral-600" placeholder="Describe your next action..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-cyan-500 rounded text-black hover:bg-cyan-400 transition-colors">
<i className="w-3 h-3" data-lucide="arrow-up"></i>
</button>
</div>
<div className="flex justify-end mt-2">
<span className="flex items-center gap-1 text-[10px] text-neutral-600">
<i className="w-3 h-3" data-lucide="shield"></i> Secure Environment
                                </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none opacity-20 z-0">
<div className="scan-overlay w-full h-full"></div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Growth Is Good.<br/>
<span className="text-neutral-600">Blindspots Are Fatal.</span>
</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed">
                        The challenge is not lack of data. 
                        The challenge is seeing the right signal in time.
                    </p>
</div>
<div className="space-y-4 reveal delay-200">
<div className="group flex items-center gap-4 p-4 border-l border-white/10 hover:border-cyan-500 hover:bg-white/5 transition-all duration-500 cursor-default">
<i className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 transition-colors" data-lucide="layers"></i>
<span className="text-neutral-300 group-hover:text-white transition-colors">Complexity scales exponentially</span>
</div>
<div className="group flex items-center gap-4 p-4 border-l border-white/10 hover:border-cyan-500 hover:bg-white/5 transition-all duration-500 cursor-default">
<i className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 transition-colors" data-lucide="share-2"></i>
<span className="text-neutral-300 group-hover:text-white transition-colors">Channels are fragmented</span>
</div>
<div className="group flex items-center gap-4 p-4 border-l border-white/10 hover:border-cyan-500 hover:bg-white/5 transition-all duration-500 cursor-default">
<i className="w-5 h-5 text-neutral-500 group-hover:text-cyan-400 transition-colors" data-lucide="database"></i>
<span className="text-neutral-300 group-hover:text-white transition-colors">Data is siloed</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-white">The Intelligence Layer</h2>
<p className="text-neutral-500 mt-2">Connecting your systems to generate decisions.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 spotlight-group" id="features-grid">

<div className="spotlight-card p-8 rounded-xl flex flex-col justify-between h-full reveal delay-100 group">
<div className="relative z-10">
<div className="mb-6 w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
<i className="w-5 h-5 text-white" data-lucide="workflow"></i>
</div>
<h3 className="text-white font-medium mb-3">Unifies</h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">Integrates fragmented data streams into a single source of truth.</p>
</div>
</div>

<div className="spotlight-card p-8 rounded-xl flex flex-col justify-between h-full reveal delay-200 group">
<div className="relative z-10">
<div className="mb-6 w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
<i className="w-5 h-5 text-white" data-lucide="radar"></i>
</div>
<h3 className="text-white font-medium mb-3">Detects</h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">Identifies critical anomalies and risks in real-time.</p>
</div>
</div>

<div className="spotlight-card p-8 rounded-xl flex flex-col justify-between h-full reveal delay-300 group">
<div className="relative z-10">
<div className="mb-6 w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
<i className="w-5 h-5 text-white" data-lucide="sparkles"></i>
</div>
<h3 className="text-white font-medium mb-3">Recommends</h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">Generates contextual solutions based on historical patterns.</p>
</div>
</div>

<div className="spotlight-card p-8 rounded-xl flex flex-col justify-between h-full reveal delay-100 group">
<div className="relative z-10">
<div className="mb-6 w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
<i className="w-5 h-5 text-white" data-lucide="check-circle"></i>
</div>
<h3 className="text-white font-medium mb-3">Executes</h3>
<p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">Automates approved actions across your platforms.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal sticky top-32 self-start">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">How It Works</h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                        No system replacement. <br/>
                        ELENAR sits on top of what you already use, providing the intelligence layer you've been missing.
                    </p>
<div className="p-6 bg-white/5 rounded-xl border border-white/10 inline-block backdrop-blur-sm">
<div className="flex items-center gap-3 mb-2">
<i className="w-4 h-4 text-cyan-400 animate-pulse" data-lucide="shield-check"></i>
<span className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">Enterprise Security</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs">Read-only access by default. Write access only granted for specific approved actions.</p>
</div>
</div>

<div className="reveal delay-200">

<div className="relative grid grid-cols-[40px_1fr] gap-y-12">

<div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10">
<div className="w-full h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-0 transition-opacity duration-1000" id="progress-line"></div>
</div>

<div className="relative z-10 flex items-start justify-center pt-1">
<div className="w-4 h-4 rounded-full bg-[#030303] border-2 border-neutral-700 group-hover:border-cyan-500 transition-colors"></div>
</div>
<div className="group pb-4">
<h4 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">Integration</h4>
<p className="text-sm text-neutral-400">Connects to your existing ERP, CRM, and logistics systems via secure API.</p>
</div>

<div className="relative z-10 flex items-start justify-center pt-1">
<div className="w-4 h-4 rounded-full bg-[#030303] border-2 border-neutral-700 group-hover:border-cyan-500 transition-colors"></div>
</div>
<div className="group pb-4">
<h4 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">Observation</h4>
<p className="text-sm text-neutral-400">Continuously monitors real-time data flow across all connected nodes.</p>
</div>

<div className="relative z-10 flex items-start justify-center pt-1">
<div className="w-4 h-4 rounded-full bg-[#030303] border-2 border-neutral-700 group-hover:border-cyan-500 transition-colors"></div>
</div>
<div className="group pb-4">
<h4 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">Detection</h4>
<p className="text-sm text-neutral-400">AI agents identify patterns, anomalies, and early risk signals.</p>
</div>

<div className="relative z-10 flex items-start justify-center pt-1">
<div className="w-4 h-4 rounded-full bg-[#030303] border-2 border-neutral-700 group-hover:border-cyan-500 transition-colors"></div>
</div>
<div className="group pb-4">
<h4 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">Orchestration</h4>
<p className="text-sm text-neutral-400">Synthesizes data to generate actionable recommendations with context.</p>
</div>

<div className="relative z-10 flex items-start justify-center pt-1">
<div className="w-4 h-4 rounded-full bg-[#030303] border-2 border-neutral-700 group-hover:border-cyan-500 transition-colors"></div>
</div>
<div className="group pb-4">
<h4 className="text-white font-medium mb-2 group-hover:text-cyan-400 transition-colors">Execution</h4>
<p className="text-sm text-neutral-400">Executes actions instantly, but only after your team approves.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-900/10" id="agents">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-white">A Network of Specialized Agents</h2>
<p className="text-neutral-500 mt-4">Working in concert to protect your margins.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 spotlight-group" id="agents-grid">

<div className="col-span-1 lg:col-span-2 spotlight-card p-8 rounded-xl flex items-start gap-4 reveal group cursor-default">
<div className="relative z-10 flex gap-4 w-full">
<div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
<i className="w-6 h-6" data-lucide="shield-alert"></i>
</div>
<div>
<h3 className="text-white font-medium mb-2">Product Risk Agent</h3>
<p className="text-sm text-neutral-400">Monitors quality signals and returns to predict failures before they impact brand value.</p>
</div>
</div>
</div>

<div className="spotlight-card p-8 rounded-xl flex items-start gap-4 reveal delay-100 group cursor-default">
<div className="relative z-10 flex gap-4 w-full">
<div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
<i className="w-6 h-6" data-lucide="package"></i>
</div>
<div>
<h3 className="text-white font-medium mb-2">Inventory Agent</h3>
<p className="text-sm text-neutral-400">Balances demand signals with supply chain latency.</p>
</div>
</div>
</div>

<div className="spotlight-card p-8 rounded-xl flex items-start gap-4 reveal delay-100 group cursor-default">
<div className="relative z-10 flex gap-4 w-full">
<div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-white font-medium mb-2">Profitability Agent</h3>
<p className="text-sm text-neutral-400">Real-time ROAS analysis connected to inventory availability.</p>
</div>
</div>
</div>

<div className="spotlight-card p-8 rounded-xl flex items-start gap-4 reveal delay-200 group cursor-default">
<div className="relative z-10 flex gap-4 w-full">
<div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div>
<h3 className="text-white font-medium mb-2">Churn Agent</h3>
<p className="text-sm text-neutral-400">Identifies behavior patterns preceding high-value customer exit.</p>
</div>
</div>
</div>

<div className="spotlight-card p-8 rounded-xl flex items-start gap-4 reveal delay-300 group cursor-default">
<div className="relative z-10 flex gap-4 w-full">
<div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 shrink-0 group-hover:bg-cyan-500/20 transition-colors">
<i className="w-6 h-6" data-lucide="truck"></i>
</div>
<div>
<h3 className="text-white font-medium mb-2">Logistics Agent</h3>
<p className="text-sm text-neutral-400">Optimizes fulfillment routes and detects carrier delays.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative reveal group">

<div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl relative">

<div className="p-5 border-b border-white/5 flex justify-between items-center bg-[#0f0f0f]">
<h3 className="text-white font-medium flex items-center gap-2">
<i className="w-4 h-4 text-cyan-400" data-lucide="activity"></i> Executive Overview
                            </h3>
<span className="text-xs text-neutral-500">Live Data</span>
</div>

<div className="p-6 space-y-6">

<div className="p-4 bg-red-500/5 border border-red-500/20 rounded-lg flex items-start gap-4">
<div className="bg-red-500/10 p-2 rounded text-red-400 mt-1">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
</div>
<div>
<div className="text-white font-medium text-sm">Critical Margin Risk Detected</div>
<p className="text-neutral-400 text-xs mt-1">Q3 Campaign "Summer_Sale" is eroding margin in North America due to unexpected shipping surge.</p>
<div className="mt-3 flex gap-3">
<button className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-1.5 rounded text-xs border border-red-500/20 transition-colors">Pause Campaign</button>
<button className="bg-white/5 hover:bg-white/10 text-neutral-300 px-3 py-1.5 rounded text-xs border border-white/10 transition-colors">View Details</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-neutral-500 mb-1">Forecast Accuracy</div>
<div className="text-xl font-semibold text-white">94.2%</div>
<div className="text-[10px] text-green-400 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> +2.4% vs last week
                                    </div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5">
<div className="text-xs text-neutral-500 mb-1">Inventory Health</div>
<div className="text-xl font-semibold text-white">Optimal</div>
<div className="text-[10px] text-neutral-400 mt-1">No stockouts predicted</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/5 blur-[60px] pointer-events-none"></div>
</div>
</div>
<div className="order-1 lg:order-2 reveal delay-100">
<div className="inline-block mb-4 px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] uppercase tracking-widest text-neutral-400">Executive Copilot</div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Clarity for Leaders</h2>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-neutral-400 group">
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
<i className="w-3 h-3 text-cyan-400" data-lucide="check"></i>
</div>
<span><strong className="text-white font-normal">Unified Interface:</strong> See the whole picture, not just fragments.</span>
</li>
<li className="flex items-center gap-3 text-neutral-400 group">
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
<i className="w-3 h-3 text-cyan-400" data-lucide="check"></i>
</div>
<span><strong className="text-white font-normal">Prioritized Action:</strong> Noise removed. Only decisions that matter.</span>
</li>
<li className="flex items-center gap-3 text-neutral-400 group">
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
<i className="w-3 h-3 text-cyan-400" data-lucide="check"></i>
</div>
<span><strong className="text-white font-normal">One-Click Execution:</strong> Approve complex orchestrations instantly.</span>
</li>
</ul>
<p className="text-lg text-white font-medium pl-4 border-l-2 border-cyan-500">
                        "ELENAR doesn’t produce reports.<br/>
                        ELENAR produces decisions."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/10" id="value">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-3xl font-semibold tracking-tight text-white mb-12">Value Across The Organization</h2>
<div className="spotlight-group grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden reveal delay-200" id="value-grid">

<div className="spotlight-card bg-[#050505] p-8 hover:bg-[#080808] transition-colors relative z-10">
<div className="relative z-10">
<i className="w-6 h-6 text-neutral-500 mb-4 group-hover:text-white transition-colors" data-lucide="box"></i>
<h4 className="text-white font-medium mb-1">Product</h4>
<p className="text-sm text-neutral-500">Accelerate time-to-market with real-time feedback loops.</p>
</div>
</div>

<div className="spotlight-card bg-[#050505] p-8 hover:bg-[#080808] transition-colors relative z-10">
<div className="relative z-10">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="tag"></i>
<h4 className="text-white font-medium mb-1">Marketing</h4>
<p className="text-sm text-neutral-500">Optimize spend dynamically based on inventory levels.</p>
</div>
</div>

<div className="spotlight-card bg-[#050505] p-8 hover:bg-[#080808] transition-colors relative z-10">
<div className="relative z-10">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="container"></i>
<h4 className="text-white font-medium mb-1">Logistics</h4>
<p className="text-sm text-neutral-500">Predict bottlenecks before they become delays.</p>
</div>
</div>

<div className="spotlight-card bg-[#050505] p-8 hover:bg-[#080808] transition-colors relative z-10">
<div className="relative z-10">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="heart"></i>
<h4 className="text-white font-medium mb-1">Customer Success</h4>
<p className="text-sm text-neutral-500">Preemptively solve issues for high-value accounts.</p>
</div>
</div>

<div className="spotlight-card bg-[#050505] p-8 hover:bg-[#080808] transition-colors relative z-10">
<div className="relative z-10">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="store"></i>
<h4 className="text-white font-medium mb-1">Sales</h4>
<p className="text-sm text-neutral-500">Accurate forecasting based on ground-truth data.</p>
</div>
</div>

<div className="spotlight-card bg-[#050505] p-8 hover:bg-[#080808] transition-colors relative z-10">
<div className="relative z-10">
<i className="w-6 h-6 text-neutral-500 mb-4" data-lucide="globe-2"></i>
<h4 className="text-white font-medium mb-1">Leadership</h4>
<p className="text-sm text-neutral-500">Total visibility and control over operational risk.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">Why Now?</h2>
<div className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed">
<p>Scale has increased. Operational velocity is higher.</p>
<p>Manual control is no longer sufficient.</p>
<p className="text-white font-medium text-xl mt-4 inline-block relative">
                    Late detection is becoming expensive.
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-cyan-500/50"></span>
</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Designed for Control,<br/>Not Disruption</h2>
<p className="text-neutral-500">ELENAR is not a project. It is long-term management infrastructure.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1 glass-panel p-6 rounded-lg border border-white/5 border-l-2 border-l-cyan-500 bg-white/[0.02] reveal delay-100 hover:-translate-y-1 transition-transform duration-300">
<span className="text-xs font-mono text-neutral-500 mb-2 block">PHASE 01</span>
<h3 className="text-white font-medium">Pilot</h3>
<p className="text-sm text-neutral-400 mt-2">Connect to core data. Value is measured.</p>
</div>
<div className="hidden md:flex items-center text-neutral-700 reveal delay-100">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 glass-panel p-6 rounded-lg border border-white/5 bg-white/[0.02] reveal delay-200 hover:-translate-y-1 transition-transform duration-300 hover:border-l-2 hover:border-l-cyan-500">
<span className="text-xs font-mono text-neutral-500 mb-2 block">PHASE 02</span>
<h3 className="text-white font-medium">Validate</h3>
<p className="text-sm text-neutral-400 mt-2">Proven areas are expanded.</p>
</div>
<div className="hidden md:flex items-center text-neutral-700 reveal delay-200">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
<div className="flex-1 glass-panel p-6 rounded-lg border border-white/5 bg-white/[0.02] reveal delay-300 hover:-translate-y-1 transition-transform duration-300 hover:border-l-2 hover:border-l-cyan-500">
<span className="text-xs font-mono text-neutral-500 mb-2 block">PHASE 03</span>
<h3 className="text-white font-medium">Scale</h3>
<p className="text-sm text-neutral-400 mt-2">Governance remains with management.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to See What You’re Missing?
            </h2>
<p className="text-neutral-400 text-lg mb-10 font-light">
                ELENAR doesn’t slow growth. It makes growth safer.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-semibold rounded-lg hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                    Request a Demo
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/5 transition-all hover:border-white/30">
                    Talk to Our Team
                </button>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#020202]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px] text-white font-bold">E</div>
<span className="text-white font-semibold tracking-tight text-lg">ELENAR</span>
</div>
<div className="text-neutral-600 text-sm">
                © 2024 ELENAR Intelligence. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
