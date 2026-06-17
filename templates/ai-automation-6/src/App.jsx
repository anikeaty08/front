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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-teal-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-white text-black flex items-center justify-center font-semibold tracking-tighter text-sm">
                    A
                </div>
<span className="font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">AUTOMATA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Solutions</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded hover:bg-neutral-200 transition-colors" href="#">
                    Book Demo
                </a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-4xl mx-auto px-6 text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Introducing Autopilot 2.0
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 mb-6">
                Scale your operations <br/> with intelligent agents.
            </h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
                We build custom AI infrastructures that automate repetitive workflows, analyze complex data, and reclaim 40+ hours per week for your team.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-black rounded font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                    Start Automating
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-6 py-3 rounded border border-white/10 text-neutral-300 hover:bg-white/5 hover:text-white transition-all font-medium">
                    View Case Studies
                </button>
</div>

<div className="mt-16 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 h-20 bottom-0"></div>
<div className="glass-panel rounded-xl p-1 overflow-hidden shadow-2xl shadow-indigo-500/10">
<div className="bg-neutral-900/50 rounded-lg border border-white/5 aspect-[16/9] flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2/3 h-2/3 border border-dashed border-white/10 rounded-lg flex items-center justify-center relative">
<div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] p-2 border border-white/10 rounded-lg shadow-xl">
<span className="iconify text-neutral-500" data-icon="lucide:database" data-width="20"></span>
</div>
<div className="w-full border-t border-dashed border-white/10 absolute top-1/2"></div>
<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] p-2 border border-white/10 rounded-lg shadow-xl">
<span className="iconify text-indigo-400" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<div className="bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent w-32 h-1 absolute top-1/2 -translate-y-1/2 animate-glow"></div>
<div className="bg-[#0a0a0a] border border-white/10 px-4 py-2 rounded-md z-10 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-neutral-300 font-mono">Processing Data...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<h3 className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></h3>
<h3 className="text-xl font-semibold tracking-tight text-white flex items-center gap-1"><span className="block w-4 h-4 bg-white rounded-full"></span>Sphere</h3>
<h3 className="text-xl font-bold tracking-tight text-white italic">NEXUS</h3>
<h3 className="text-xl font-medium tracking-tight text-white flex items-center gap-1">poly<span className="font-bold">math</span></h3>
<h3 className="text-xl font-bold tracking-tighter text-white">VORTEX</h3>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Intelligent infrastructure.</h2>
<p className="text-neutral-400 max-w-xl">We don't just add a chatbot. We re-engineer your entire workflow using state-of-the-art LLMs and automation frameworks.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group glass-panel rounded-xl p-8 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<span className="iconify" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Workflow Orchestration</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Connect disparate apps (Salesforce, Slack, Notion) into a unified, self-healing automated pipeline.</p>
</div>

<div className="group glass-panel rounded-xl p-8 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 border border-teal-500/20">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Decision Intelligence</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Agents that can reason, categorize emails, approve requests, and flag anomalies without human oversight.</p>
</div>

<div className="group glass-panel rounded-xl p-8 hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<span className="iconify" data-icon="lucide:message-square-code" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Custom Support Bots</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Fine-tuned models trained on your specific documentation to provide instant, accurate internal or external support.</p>
</div>

<div className="md:col-span-2 glass-panel rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<span className="iconify w-32 h-32" data-icon="lucide:bar-chart-2"></span>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Data Extraction</h3>
<p className="text-sm text-neutral-400 max-w-sm leading-relaxed">Automatically scrape, structure, and sync data from PDFs, websites, or unstructured emails directly into your CRM with 99.9% accuracy.</p>
<div className="mt-8 flex gap-3">
<div className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-neutral-300 font-mono">Input: PDF Invoice</div>
<span className="iconify text-neutral-500 self-center" data-icon="lucide:arrow-right" data-width="12"></span>
<div className="px-3 py-1.5 rounded bg-indigo-500/20 border border-indigo-500/30 text-xs text-indigo-200 font-mono">Output: JSON</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-8 hover:bg-white/5 transition-colors flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 border border-pink-500/20">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">SOC2 compliant data handling with private LLM deployment options.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/30">
<div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">40%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Cost Reduction</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Uptime Operation</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">0.2s</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Response Latency</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-white tracking-tight mb-1">100+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Integrations</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to automate the boring stuff?</h2>
<p className="text-neutral-400 mb-10 max-w-lg mx-auto">Join the high-growth companies using Automata to streamline their operations.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12">
<input className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-neutral-600" placeholder="Enter your work email" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded font-medium hover:bg-neutral-200 transition-colors text-sm whitespace-nowrap">
                    Get Started
                </button>
</form>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/10 pt-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 rounded bg-white text-black flex items-center justify-center font-bold text-xs">A</div>
<span className="text-sm font-medium text-white">Automata</span>
</div>
</div>
<div className="flex flex-col gap-3 text-sm text-neutral-500">
<span className="text-white font-medium mb-1">Product</span>
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3 text-sm text-neutral-500">
<span className="text-white font-medium mb-1">Company</span>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3 text-sm text-neutral-500">
<span className="text-white font-medium mb-1">Legal</span>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
<div className="mt-12 text-xs text-neutral-600 flex justify-between items-center">
<span>© 2024 Automata AI Inc. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</section>
</main>

    </>
  );
}
