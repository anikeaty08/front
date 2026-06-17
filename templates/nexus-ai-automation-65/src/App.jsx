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



        // Initialize Lucide Icons
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none z-0 opacity-20"></div>
<div className="fixed bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none z-0 opacity-20"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">N</div>
<span>NEXUS</span>
<span className="text-neutral-500 text-sm font-normal tracking-normal ml-1 border-l border-neutral-800 pl-3 group-hover:text-neutral-300 transition-colors">by Om Ganvir</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-4 font-medium text-neutral-950 transition-all duration-300 hover:bg-neutral-200 hover:ring-2 hover:ring-neutral-200 hover:ring-offset-2 hover:ring-offset-neutral-950" href="#">
<span className="text-xs tracking-tight">Book Demo</span>
<i className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</header>
<main className="relative z-10">

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 bg-grid">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-neutral-300 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span>New Generation of Automation</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8">
                    Autonomy for <br className="hidden md:block"/>
<span className="text-gradient">modern enterprises.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                    Replace repetitive workflows with intelligent agents. We build custom AI infrastructures that scale with your business logic.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors w-full md:w-auto">
                        Start Automating
                    </button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors w-full md:w-auto flex items-center justify-center gap-2 group">
<i className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" data-lucide="play-circle"></i>
                        View Case Studies
                    </button>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by innovators</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 opacity-40 grayscale items-center justify-items-center">

<span className="text-xl font-semibold tracking-tight">acme.ai</span>
<span className="text-xl font-bold tracking-tighter italic">Stark</span>
<span className="text-xl font-medium tracking-wide">globex</span>
<span className="text-xl font-bold tracking-tight">VORTEX</span>
<span className="text-xl font-medium tracking-tighter hidden lg:block">nebula</span>
</div>
</div>
</section>

<section className="py-24 px-6" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Intelligence built into every step.</h2>
<p className="text-neutral-400 text-lg">Our proprietary stack connects LLMs with your existing database to create self-improving workflows.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative md:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/50 p-8 overflow-hidden hover:border-white/20 transition-colors duration-300">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<i className="w-48 h-48 text-indigo-500 stroke-[1]" data-lucide="cpu"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Processing</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">Process data streams instantly with our edge-optimized AI models. Latency under 50ms for critical decision making.</p>
</div>

<div className="w-full h-32 rounded-lg border border-white/10 bg-neutral-950/50 p-4 flex items-center gap-4">
<div className="flex-1 space-y-2">
<div className="h-1.5 w-3/4 bg-neutral-800 rounded-full animate-pulse"></div>
<div className="h-1.5 w-1/2 bg-neutral-800 rounded-full animate-pulse delay-75"></div>
</div>
<div className="h-8 w-8 rounded-full border border-indigo-500/30 flex items-center justify-center">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-neutral-900/50 p-8 overflow-hidden hover:border-white/20 transition-colors duration-300">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Adaptive Workflows</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Agents that learn from exceptions and update their own routing logic automatically.</p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-900 via-neutral-900/0 to-transparent"></div>
<div className="flex items-center justify-center gap-2 mt-8">
<span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">Input</span>
<i className="w-3 h-3 text-neutral-500" data-lucide="arrow-right"></i>
<span className="px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-300">AI Logic</span>
<i className="w-3 h-3 text-neutral-500" data-lucide="arrow-right"></i>
<span className="px-2 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">Action</span>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-neutral-900/50 p-8 overflow-hidden hover:border-white/20 transition-colors duration-300">
<div className="mb-6">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Guardrails</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Safety filters and hallucination checks are built-in by default.</p>
</div>
<div className="mt-auto border-t border-white/5 pt-4">
<div className="flex items-center justify-between text-xs text-neutral-500">
<span>Security Score</span>
<span className="text-green-400">99.9%</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full mt-2">
<div className="bg-green-500 h-1 rounded-full w-[99%]"></div>
</div>
</div>
</div>

<div className="group relative md:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/50 p-8 overflow-hidden hover:border-white/20 transition-colors duration-300">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="max-w-md">
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-white" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Data Extraction &amp; Analysis</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Turn unstructured PDFs, emails, and calls into structured SQL databases instantly.</p>
</div>
<div className="flex-1 w-full md:w-auto">
<div className="rounded-lg bg-black/50 border border-white/5 p-4 font-mono text-xs text-neutral-400">
<div className="flex gap-2 mb-2">
<span className="text-indigo-400">SELECT</span>
<span>sentiment, topic</span>
</div>
<div className="flex gap-2 mb-2">
<span className="text-indigo-400">FROM</span>
<span>customer_calls</span>
</div>
<div className="flex gap-2">
<span className="text-indigo-400">WHERE</span>
<span>urgency = 'high';</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/20" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">
                            Seamless integration with <br/>
<span className="text-neutral-500">your existing stack.</span>
</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                            We don't replace your tools; we make them talk to each other. Our agents act as the connective tissue between your CRM, ERP, and communication channels.
                        </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle"></i>
<span>No-code dashboard for management</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle"></i>
<span>Custom API endpoints</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check-circle"></i>
<span>Full audit logging</span>
</li>
</ul>
</div>

<div className="relative h-[400px] border border-white/10 rounded-2xl bg-neutral-950/50 p-8 flex items-center justify-center">
<div className="absolute inset-0 bg-grid opacity-30"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-indigo-500/50 bg-indigo-500/10 backdrop-blur-sm flex items-center justify-center z-20 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
<i className="w-8 h-8 text-indigo-400" data-lucide="bot"></i>
</div>

<div className="absolute top-12 left-12 p-3 rounded-lg border border-white/10 bg-neutral-900 z-10">
<i className="w-5 h-5 text-neutral-400" data-lucide="database"></i>
</div>
<div className="absolute bottom-12 right-12 p-3 rounded-lg border border-white/10 bg-neutral-900 z-10">
<i className="w-5 h-5 text-neutral-400" data-lucide="mail"></i>
</div>
<div className="absolute top-12 right-12 p-3 rounded-lg border border-white/10 bg-neutral-900 z-10">
<i className="w-5 h-5 text-neutral-400" data-lucide="slack"></i>
</div>
<div className="absolute bottom-12 left-12 p-3 rounded-lg border border-white/10 bg-neutral-900 z-10">
<i className="w-5 h-5 text-neutral-400" data-lucide="file-text"></i>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="25%" x2="50%" y1="20%" y2="50%"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="75%" x2="50%" y1="20%" y2="50%"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="25%" x2="50%" y1="80%" y2="50%"></line>
<line stroke="rgba(255,255,255,0.1)" strokeWidth="1" x1="75%" x2="50%" y1="80%" y2="50%"></line>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to scale your operations?</h2>
<p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">Join the forward-thinking companies saving 30+ hours per week with Nexus automation.</p>
<div className="max-w-sm mx-auto bg-neutral-900 border border-white/10 p-1.5 rounded-full flex items-center shadow-lg">
<div className="pl-4 pr-2 w-full">
<input className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none" placeholder="Enter your work email" type="email"/>
</div>
<button className="bg-white hover:bg-neutral-200 text-neutral-950 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-colors whitespace-nowrap">
                        Get Started
                    </button>
</div>
<p className="mt-4 text-xs text-neutral-600">No credit card required for consultation.</p>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<a className="text-lg font-medium tracking-tighter text-white flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-neutral-800 rounded-full flex items-center justify-center text-white text-[10px]">N</div>
<span>NEXUS</span>
</a>
<p className="text-sm text-neutral-500 max-w-xs">Building the intelligent infrastructure for the next generation of business.</p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center">
<p className="text-xs text-neutral-600">© 2024 Nexus Automation. Designed &amp; Developed by Om Ganvir.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
