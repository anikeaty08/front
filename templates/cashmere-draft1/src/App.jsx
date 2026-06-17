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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[#FAFAFA]/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-[#1A382D]">Cashmere</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#1A382D] transition-colors" href="#">Product</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1A382D] transition-colors" href="#">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1A382D] transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1A382D] transition-colors" href="#">Resources</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1A382D] transition-colors" href="#">Company</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:block rounded-md bg-[#1A382D] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#132B22] transition-colors shadow-sm">
                    Request demo
                </button>

<button className="md:hidden text-slate-600">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:py-40 overflow-hidden">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">

<div className="flex flex-col gap-8 max-w-2xl">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Infrastructure for the<br/>
<span className="text-[#2C5E4B]">AI content economy</span>.
                </h1>
<p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg">
                    The enterprise platform to license, control, and track intellectual property across the artificial intelligence ecosystem.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="rounded-md bg-[#1A382D] px-8 py-4 text-base font-medium text-white hover:bg-[#132B22] transition-all shadow-sm flex items-center justify-center gap-2 group">
                        Request demo
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="rounded-md border border-slate-300 bg-transparent px-8 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center">
                        How it works
                    </button>
</div>
</div>

<div className="relative w-full h-[400px] bg-white rounded-xl border border-slate-200 shadow-sm p-8 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50"></div>

<div className="relative z-10 flex items-center gap-8 w-full justify-between">

<div className="flex flex-col gap-3 items-center">
<div className="w-20 h-24 bg-slate-50 border border-slate-200 rounded shadow-sm flex flex-col items-center justify-center gap-2">
<i className="text-slate-400 w-6 h-6" data-lucide="library" strokeWidth="1.5"></i>
<div className="w-12 h-1 bg-slate-200 rounded-full"></div>
<div className="w-8 h-1 bg-slate-200 rounded-full"></div>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Source</span>
</div>

<div className="flex-1 h-[1px] bg-slate-300 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#2C5E4B] rounded-full animate-pulse"></div>
</div>

<div className="flex flex-col items-center">
<div className="w-32 h-32 bg-[#1A382D] rounded-lg shadow-lg flex flex-col items-center justify-center text-white relative border border-[#2C5E4B]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-[#1A382D] text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 uppercase tracking-wider">Engine</div>
<i className="w-10 h-10 mb-2 opacity-90" data-lucide="shield-check" strokeWidth="1.5"></i>
<div className="flex gap-1 mt-2">
<span className="w-1 h-1 bg-[#4d7c64] rounded-full"></span>
<span className="w-1 h-1 bg-[#4d7c64] rounded-full"></span>
<span className="w-1 h-1 bg-[#4d7c64] rounded-full"></span>
</div>
</div>
<span className="text-xs font-medium text-[#1A382D] mt-3 uppercase tracking-wide">Rights Layer</span>
</div>

<div className="flex-1 h-[1px] bg-slate-300 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#2C5E4B] rounded-full animate-pulse delay-75"></div>
</div>

<div className="flex flex-col gap-3 items-center">
<div className="w-20 h-24 bg-slate-50 border border-slate-200 rounded shadow-sm flex flex-col items-center justify-center gap-2">
<i className="text-slate-400 w-6 h-6" data-lucide="cpu" strokeWidth="1.5"></i>
<div className="w-12 h-1 bg-slate-200 rounded-full"></div>
<div className="w-10 h-1 bg-slate-200 rounded-full"></div>
</div>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Model</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-2">
<i className="text-[#1A382D] w-5 h-5" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Granular Control</h3>
<p className="text-lg text-slate-600 leading-relaxed">Define exactly how your IP is ingested, trained, and retrieved.</p>
</div>

<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-2">
<i className="text-[#1A382D] w-5 h-5" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Secure Access</h3>
<p className="text-lg text-slate-600 leading-relaxed">Enterprise authentication gateways for every content request.</p>
</div>

<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-2">
<i className="text-[#1A382D] w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Precise Tracking</h3>
<p className="text-lg text-slate-600 leading-relaxed">Real-time audit trails and attribution for AI-generated outputs.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-32">
<div className="mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Orchestrate the flow of intelligence</h2>
<p className="text-xl text-slate-600 max-w-2xl">A unified pipeline to transform static archives into licensed, active data for LLMs and RAG applications.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-slate-200 -z-10"></div>

<div className="flex flex-col gap-6 bg-[#FAFAFA] md:bg-transparent pt-8 md:pt-0">
<div className="w-12 h-12 bg-white border border-slate-200 text-slate-900 font-semibold text-lg flex items-center justify-center rounded shadow-sm z-10">
                    01
                </div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Connect Sources</h3>
<p className="text-lg text-slate-600">Ingest unstructured data from journals, books, digital archives, and proprietary datasets via API or secure upload.</p>
</div>
</div>

<div className="flex flex-col gap-6 bg-[#FAFAFA] md:bg-transparent pt-8 md:pt-0">
<div className="w-12 h-12 bg-white border border-slate-200 text-slate-900 font-semibold text-lg flex items-center justify-center rounded shadow-sm z-10">
                    02
                </div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Define Rights</h3>
<p className="text-lg text-slate-600">Set programmatic rules for usage windows, territory restrictions, and attribution requirements.</p>
</div>
</div>

<div className="flex flex-col gap-6 bg-[#FAFAFA] md:bg-transparent pt-8 md:pt-0">
<div className="w-12 h-12 bg-white border border-slate-200 text-slate-900 font-semibold text-lg flex items-center justify-center rounded shadow-sm z-10">
                    03
                </div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Authorize &amp; Track</h3>
<p className="text-lg text-slate-600">Deliver content to authorized models and applications while logging every token of usage.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#051F16] text-white py-32 rounded-none md:rounded-[2rem] mx-0 md:mx-4 overflow-hidden">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16">
<span className="text-[#4d7c64] font-medium tracking-wide uppercase text-sm mb-2 block">The Platform</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">A complete system for IP governance</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
<i className="text-[#4d7c64] w-8 h-8 mb-4 group-hover:text-white transition-colors" data-lucide="network" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white mb-2">Omnipub</h3>
<p className="text-base text-slate-400">Universal publishing standard for machine-readable content.</p>
</div>

<div className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
<i className="text-[#4d7c64] w-8 h-8 mb-4 group-hover:text-white transition-colors" data-lucide="link" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white mb-2">Cashmere Link</h3>
<p className="text-base text-slate-400">Secure middleware connecting archives to LLM training pipelines.</p>
</div>

<div className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
<i className="text-[#4d7c64] w-8 h-8 mb-4 group-hover:text-white transition-colors" data-lucide="code-2" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white mb-2">MCP</h3>
<p className="text-base text-slate-400">Model Context Protocol for real-time RAG attribution.</p>
</div>

<div className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
<i className="text-[#4d7c64] w-8 h-8 mb-4 group-hover:text-white transition-colors" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white mb-2">Console</h3>
<p className="text-base text-slate-400">Centralized dashboard for analytics, billing, and access control.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="mx-auto max-w-7xl px-6 text-center">
<p className="text-slate-500 font-medium mb-10">Compatible with leading foundation models and vector databases</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded-sm"></div>
<span className="font-semibold text-xl text-slate-800">OpenAI</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded-full"></div>
<span className="font-semibold text-xl text-slate-800">Anthropic</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 transform rotate-45"></div>
<span className="font-semibold text-xl text-slate-800">Cohere</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 border-2 border-slate-800 rounded-sm"></div>
<span className="font-semibold text-xl text-slate-800">Pinecone</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded-tl-lg rounded-br-lg"></div>
<span className="font-semibold text-xl text-slate-800">Databricks</span>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-24">
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Engineered for compliance</h2>
<p className="text-lg text-slate-600 mb-10">
                Cashmere is built to meet the rigorous security and governance standards of global publishers and enterprise technology firms.
            </p>
<div className="flex flex-wrap justify-center gap-6">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-[#1A382D]" data-lucide="shield" strokeWidth="1.5"></i> SOC 2 Type II
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-[#1A382D]" data-lucide="globe" strokeWidth="1.5"></i> GDPR Compliant
                </span>
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
<i className="w-4 h-4 text-[#1A382D]" data-lucide="file-check" strokeWidth="1.5"></i> ISO 27001
                </span>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA]">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">
                Build trust into your AI strategy.
            </h2>
<p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Join the platform powering the next generation of licensed, ethical, and transparent artificial intelligence.
            </p>
<div className="flex justify-center">
<button className="rounded-md bg-[#1A382D] px-8 py-4 text-lg font-medium text-white hover:bg-[#132B22] transition-colors shadow-lg shadow-[#1A382D]/20">
                    Request demo
                </button>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-lg font-semibold tracking-tight text-[#1A382D]">Cashmere</span>
<div className="text-sm text-slate-500">
                © 2024 Cashmere Infrastructure Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-[#1A382D] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="text-slate-400 hover:text-[#1A382D] transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
<a className="text-slate-400 hover:text-[#1A382D] transition-colors" href="#"><i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>


    </>
  );
}
