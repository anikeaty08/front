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
<div className="stars absolute w-[1px] h-[1px] bg-transparent rounded-full opacity-50"></div>
<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] glow-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] glow-blob animation-delay-2000"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full"></div>
<span className="text-sm font-medium tracking-widest uppercase text-white">Aether</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Research</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<button className="hidden md:flex text-xs font-medium bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all text-white">
                Client Login
            </button>
<button className="md:hidden text-neutral-400">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] md:text-xs font-medium tracking-wide mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            AETHER ENGINE V2.0 LIVE
        </div>
<h1 className="text-4xl md:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 max-w-4xl mx-auto mb-6 leading-[1.1]">
            Intelligence beyond <br className="hidden md:block"/> the event horizon.
        </h1>
<p className="text-neutral-400 text-sm md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            We engineer neural architectures that scale infinitely. Harness the power of deep learning to automate, predict, and generate value at warp speed.
        </p>

<div className="relative group">
<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform hover:scale-105 active:scale-95 duration-200">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#6366f1_50%,#000000_100%)]"></span>
<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl border border-white/10 group-hover:bg-neutral-900/80 transition-colors">
                    Initialize Protocol
                    <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>
</span>
</button>

<div className="absolute inset-0 -z-10 bg-indigo-500/50 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
</div>
</section>

<section className="relative z-10 py-20 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Core Capabilities</h2>
<p className="text-neutral-500 text-sm">Designed for autonomous scalability.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Neural Processing</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Advanced LLM integration that adapts to your dataset in real-time, offering cognitive reasoning capabilities.
                    </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Latency Zero</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Edge-optimized inference engines ensure your AI responses are delivered faster than human perception.
                    </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-cyan-400">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Encrypted Core</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Military-grade encryption for all vector embeddings. Your proprietary data remains isolated in the void.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 border-y border-white/5 bg-neutral-950/50">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight mb-6">Observe the data stream.</h2>
<p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 font-light">
                    Our dashboard provides a god-eye view of your AI fleet. Monitor token usage, sentiment analysis, and predictive outputs through a single pane of glass.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check"></i>
<span>Real-time vector visualization</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check"></i>
<span>Automated fine-tuning pipelines</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check"></i>
<span>Cross-modal generation</span>
</li>
</ul>
</div>
<div className="w-full md:w-1/2 relative animate-float">

<div className="relative rounded-xl bg-neutral-900 border border-white/10 p-4 shadow-2xl overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="text-[10px] text-neutral-500 font-mono">STATUS: ONLINE</div>
</div>

<div className="flex items-end gap-2 h-32 mb-6 px-2">
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[40%] relative group">
<div className="absolute bottom-0 w-full h-0 group-hover:h-full bg-indigo-500/40 transition-all duration-500"></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[70%] relative group">
<div className="absolute bottom-0 w-full h-0 group-hover:h-full bg-indigo-500/40 transition-all duration-500"></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[50%] relative group">
<div className="absolute bottom-0 w-full h-0 group-hover:h-full bg-indigo-500/40 transition-all duration-500"></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[85%] relative group">
<div className="absolute bottom-0 w-full h-0 group-hover:h-full bg-indigo-500/40 transition-all duration-500"></div>
</div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[60%] relative group">
<div className="absolute bottom-0 w-full h-0 group-hover:h-full bg-indigo-500/40 transition-all duration-500"></div>
</div>
</div>

<div className="bg-black/50 rounded p-3 font-mono text-[10px] text-neutral-400 border border-white/5">
<div className="flex justify-between">
<span className="text-purple-400">const</span>
<span className="text-neutral-600">v.1.0.4</span>
</div>
<div className="mt-1">
<span className="text-blue-400">initializeCore</span>(<span className="text-yellow-400">true</span>);
                        </div>
<div className="mt-1 text-neutral-600">
                            // Neural link established...
                        </div>
</div>
</div>

<div className="absolute -z-10 -top-6 -right-6 w-full h-full border border-white/5 rounded-xl bg-neutral-900/50"></div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
<h2 className="text-center text-2xl font-medium tracking-tight mb-16">The Integration Process</h2>
<div className="relative">

<div className="absolute left-[15px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent md:left-1/2 md:-ml-[1px]"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
<h3 className="text-lg font-medium text-white">Data Ingestion</h3>
<p className="text-sm text-neutral-500 mt-2 font-light">We connect to your unstructured data lakes, sanitizing and vectorizing information for model readiness.</p>
</div>
<div className="absolute left-0 md:static md:w-8 md:h-8 flex items-center justify-center order-1 md:order-2">
<div className="w-8 h-8 rounded-full bg-black border border-indigo-500/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
</div>
</div>
<div className="md:w-1/2 md:pl-12 order-3"></div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1"></div>
<div className="absolute left-0 md:static md:w-8 md:h-8 flex items-center justify-center order-1 md:order-2">
<div className="w-8 h-8 rounded-full bg-black border border-white/10 group-hover:border-purple-500/50 transition-colors flex items-center justify-center z-10">
<div className="w-2 h-2 bg-neutral-600 group-hover:bg-purple-400 transition-colors rounded-full"></div>
</div>
</div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-3">
<h3 className="text-lg font-medium text-white">Model Tuning</h3>
<p className="text-sm text-neutral-500 mt-2 font-light">Applying Low-Rank Adaptation (LoRA) to fine-tune billion-parameter models specifically for your business logic.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group">
<div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
<h3 className="text-lg font-medium text-white">Deployment</h3>
<p className="text-sm text-neutral-500 mt-2 font-light">Seamless API integration into your existing stack with auto-scaling infrastructure managed by us.</p>
</div>
<div className="absolute left-0 md:static md:w-8 md:h-8 flex items-center justify-center order-1 md:order-2">
<div className="w-8 h-8 rounded-full bg-black border border-white/10 group-hover:border-cyan-500/50 transition-colors flex items-center justify-center z-10">
<div className="w-2 h-2 bg-neutral-600 group-hover:bg-cyan-400 transition-colors rounded-full"></div>
</div>
</div>
<div className="md:w-1/2 md:pl-12 order-3"></div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6">
<div className="max-w-4xl mx-auto rounded-3xl bg-neutral-900/40 border border-white/10 p-8 md:p-12 text-center overflow-hidden relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 relative z-10">Ready to ascend?</h2>
<p className="text-neutral-400 text-sm md:text-base mb-10 max-w-lg mx-auto font-light relative z-10">
                Join the waiting list for Aether Engine V2. Access is currently limited to enterprise partners and select startups.
            </p>
<form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto relative z-10">
<input className="flex-1 bg-black/50 border border-white/10 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm placeholder:text-neutral-600" placeholder="Enter your work email" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]" type="button">
                    Request Access
                </button>
</form>
<p className="mt-6 text-xs text-neutral-600 relative z-10">No credit card required. 14-day free trial upon acceptance.</p>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full"></div>
<span className="text-sm font-medium tracking-widest uppercase text-white">Aether</span>
</div>
<p className="text-xs text-neutral-500">© 2024 Aether Industries. All systems nominal.</p>
</div>
<div className="flex gap-8">
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Discord</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Legal</a>
</div>
</div>
</footer>


    </>
  );
}
