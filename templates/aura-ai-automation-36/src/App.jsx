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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-zinc-100 font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                    AURA
                </a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors duration-200" href="#features">Solutions</a>
<a className="hover:text-zinc-100 transition-colors duration-200" href="#workflow">Methodology</a>
<a className="hover:text-zinc-100 transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-100 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-zinc-100 text-black text-xs font-medium px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#">
                    Book Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[400px] h-[300px] bg-purple-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                v2.0 Logic Agents Available
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                Scale your operations with<br/>intelligent autonomy.
            </h1>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
                We build custom AI infrastructures that automate complex workflows, reduce overhead, and empower your team to focus on strategy.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-6 py-3 bg-zinc-100 text-zinc-950 text-sm font-medium rounded-full transition-all hover:bg-white hover:scale-105">
                    Start Automating
                    <iconify-icon className="inline-block ml-1 align-middle transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-full hover:bg-zinc-900 transition-all hover:border-zinc-700">
                    View Case Studies
                </button>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur opacity-30"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 bg-black/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<div className="ml-4 h-5 w-64 bg-zinc-900 rounded-md"></div>
</div>

<div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="space-y-4">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Active Agents</div>
<div className="flex items-center gap-3 p-2 bg-zinc-900/50 rounded-lg border border-white/5">
<div className="w-8 h-8 rounded-md bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-200 font-medium">Support Bot</div>
<div className="text-[10px] text-green-400">Active • 98% Acc</div>
</div>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900/30 transition-colors">
<div className="w-8 h-8 rounded-md bg-zinc-800/50 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-300 font-medium">Data Entry</div>
<div className="text-[10px] text-zinc-500">Idle</div>
</div>
</div>
</div>

<div className="md:col-span-2 space-y-4">
<div className="flex justify-between items-center">
<h3 className="text-sm text-zinc-200 font-medium">Efficiency Metrics</h3>
<div className="flex gap-2">
<span className="text-[10px] px-2 py-1 bg-zinc-900 rounded text-zinc-400 border border-white/5">Daily</span>
<span className="text-[10px] px-2 py-1 bg-zinc-800 rounded text-white border border-white/5">Weekly</span>
</div>
</div>

<div className="h-40 w-full flex items-end gap-2 pt-4 border-b border-white/5 relative">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent"></div>
<div className="w-full bg-zinc-800/30 h-[40%] rounded-t-sm relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-800 text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
</div>
<div className="w-full bg-zinc-800/30 h-[65%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800/30 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-zinc-800/30 h-[75%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/20 h-[85%] rounded-t-sm border-t border-indigo-500/50 relative">
<div className="absolute -top-2 right-0 w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
</div>
<div className="w-full bg-zinc-800/30 h-[60%] rounded-t-sm"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 font-mono">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-600 mb-8 uppercase tracking-widest">Powering next-gen companies</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-white">
<iconify-icon icon="solar:command-linear"></iconify-icon> ACME_CORP
                </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-white">
<iconify-icon icon="solar:infinite-linear"></iconify-icon> LoopScale
                </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-white">
<iconify-icon icon="solar:atom-linear"></iconify-icon> NUCLEUS
                </div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-white">
<iconify-icon icon="solar:radar-linear"></iconify-icon> VANTAGE
                </div>
</div>
</div>
</section>

<section className="py-24" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight mb-4">Complete Automation Ecosystem</h2>
<p className="text-zinc-400 max-w-lg">Replacing manual bottlenecks with fluid, intelligent code.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full group-hover:bg-indigo-500/10 transition-all duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center text-zinc-100 mb-6">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-2 tracking-tight">Large Language Models Integration</h3>
<p className="text-zinc-500 text-sm leading-relaxed max-w-md">We fine-tune open-source models (Llama, Mistral) or integrate APIs (GPT-4, Claude) into your private data infrastructure, ensuring security and context-awareness.</p>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group relative overflow-hidden">
<div className="absolute right-0 bottom-0 w-32 h-32 bg-purple-500/5 blur-[50px] rounded-full"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center text-zinc-100 mb-6">
<iconify-icon icon="solar:siphon-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-2 tracking-tight">Data Pipelines</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Automated ETL processes that clean, structure, and route your enterprise data in real-time.</p>
</div>
</div>

<div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group relative overflow-hidden">
<div className="absolute left-0 top-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center text-zinc-100 mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-2 tracking-tight">AI Customer Support</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Agents that handle 80% of L1 queries instantly, escalating only complex issues to humans.</p>
</div>
</div>

<div className="md:col-span-2 bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors group relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-pink-500/5 blur-[80px] rounded-full group-hover:bg-pink-500/10 transition-all duration-500"></div>
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
<div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center text-zinc-100 mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-2 tracking-tight">Generative Content at Scale</h3>
<p className="text-zinc-500 text-sm leading-relaxed">Programmatic creation of SEO articles, social assets, and personalized outreach emails tailored to your brand voice.</p>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-lg p-4 rotate-1 shadow-2xl">
<div className="flex gap-2 mb-3">
<span className="text-[10px] text-zinc-500 font-mono">prompt:</span>
<span className="text-[10px] text-indigo-400 font-mono">generate_report(Q3_Data)</span>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-zinc-800 rounded"></div>
<div className="h-2 w-5/6 bg-zinc-800 rounded"></div>
<div className="h-2 w-4/6 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="workflow">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-zinc-100 text-center tracking-tight mb-16">How we deploy intelligence</h2>
<div className="space-y-12 relative before:absolute before:left-6 before:top-2 before:h-full before:w-px before:bg-zinc-800 md:before:left-1/2 md:before:-ml-px">

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="md:w-1/2 flex justify-end md:pr-12 text-right order-2 md:order-1">
<div>
<h4 className="text-lg font-medium text-zinc-200 mb-1">Audit &amp; Analysis</h4>
<p className="text-sm text-zinc-500">We map your current processes to identify high-ROI automation opportunities.</p>
</div>
</div>
<div className="absolute left-6 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-[#050505] bg-zinc-700 z-10 group-hover:bg-indigo-500 transition-colors"></div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-3"></div> 
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div> 
<div className="absolute left-6 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-[#050505] bg-zinc-700 z-10 group-hover:bg-indigo-500 transition-colors"></div>
<div className="md:w-1/2 md:pl-12 order-2 md:order-3 text-left">
<div>
<h4 className="text-lg font-medium text-zinc-200 mb-1">Development</h4>
<p className="text-sm text-zinc-500">Building bespoke agents using Python, LangChain, and cloud infrastructure.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="md:w-1/2 flex justify-end md:pr-12 text-right order-2 md:order-1">
<div>
<h4 className="text-lg font-medium text-zinc-200 mb-1">Integration &amp; Handover</h4>
<p className="text-sm text-zinc-500">Seamless deployment into your existing tech stack (Slack, CRM, ERP).</p>
</div>
</div>
<div className="absolute left-6 md:left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-[#050505] bg-zinc-700 z-10 group-hover:bg-indigo-500 transition-colors"></div>
<div className="md:w-1/2 md:pl-12 order-3 md:order-3"></div> 
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#050505] to-zinc-900/20 border-t border-white/5" id="pricing">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-4">Flexible Investment</h2>
<p className="text-zinc-400">Choose a model that fits your velocity.</p>
</div>

<div className="flex items-center justify-center gap-4 mb-12">
<span className="text-sm text-zinc-400">Project Based</span>
<label className="flex items-center cursor-pointer relative" htmlFor="billing-toggle">
<input className="sr-only toggle-checkbox" id="billing-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-800 rounded-full border border-zinc-700 toggle-label transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out transform"></div>
</label>
<span className="text-sm text-white font-medium">Monthly Retainer</span>
<style>
                    #billing-toggle:checked ~ .dot { transform: translateX(100%); }
                    #billing-toggle:checked ~ .toggle-label { background-color: #4f46e5; border-color: #4f46e5; }
                </style>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl flex flex-col hover:border-white/10 transition-all">
<div className="mb-4">
<iconify-icon className="text-zinc-500 mb-4" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Pilot</h3>
<p className="text-zinc-500 text-sm mt-2">Perfect for validating a single workflow automation.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 1 Custom Agent
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Process Mapping
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 2 Weeks Support
                        </li>
</ul>
<a className="w-full py-3 border border-zinc-700 rounded-lg text-center text-sm font-medium text-white hover:bg-zinc-800 transition-colors" href="#">Get Estimate</a>
</div>

<div className="bg-zinc-900/30 border border-indigo-500/20 p-8 rounded-2xl flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 p-3">
<span className="text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-1 rounded">Popular</span>
</div>
<div className="mb-4">
<iconify-icon className="text-indigo-400 mb-4" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white tracking-tight">Enterprise Scaling</h3>
<p className="text-zinc-500 text-sm mt-2">Comprehensive transformation for departments.</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited Workflows
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Dedicated Engineer
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Priority SLA
                        </li>
<li className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Private Model Fine-tuning
                        </li>
</ul>
<a className="w-full py-3 bg-white text-black rounded-lg text-center text-sm font-medium hover:bg-zinc-200 transition-colors" href="#">Talk to Sales</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<a className="text-zinc-100 font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full"></div>
                    AURA
                </a>
<p className="text-zinc-500 text-sm max-w-xs">Building the autonomous enterprise of tomorrow, today.</p>
</div>
<div className="flex gap-12 text-sm">
<div className="flex flex-col gap-3">
<span className="text-zinc-100 font-medium">Product</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Agents</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Security</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-zinc-100 font-medium">Company</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Careers</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-zinc-100 font-medium">Legal</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2023 Aura Automation Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
