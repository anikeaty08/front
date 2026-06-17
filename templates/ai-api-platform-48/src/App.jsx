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
<div className="absolute top-[-20%] left-[20%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-blue-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 grid-bg z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-neutral-950 rounded-[1px]"></div>
</div>
                    llmbox
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="text-white transition-colors" href="#">Models</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium text-neutral-950 bg-white hover:bg-neutral-200 px-3 py-1.5 rounded-full transition-colors" href="#">Start Building</a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="tracking-tight">Added Llama 3.1 405B, Claude 3.5 Sonnet, and Gemini 1.5 Pro</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                    The unified API for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">every LLM.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-light">
                    Access 100+ models through a single interface. Route prompts intelligently based on cost, latency, and capability.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-10 px-6 rounded-full bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                        Get API Key
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-10 px-6 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:search" width="16"></iconify-icon>
                        Browse Models
                    </button>
</div>
</div>

<div className="mt-24 relative max-w-5xl mx-auto">
<div className="absolute -top-10 left-0 w-full h-32 bg-gradient-to-b from-neutral-950 to-transparent z-10 pointer-events-none"></div>
<div className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-400" icon="lucide:zap"></iconify-icon>
<span className="text-sm font-medium text-white">Live Model Status</span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1.5 text-neutral-500" icon="lucide:search" width="14"></iconify-icon>
<input className="bg-neutral-900 border border-white/10 rounded-full py-1 pl-8 pr-3 text-xs text-white focus:outline-none focus:border-white/20 w-48 placeholder:text-neutral-600" placeholder="Search models..." type="text"/>
</div>
<button className="p-1.5 rounded-lg border border-white/10 bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:filter" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-xs text-neutral-500 uppercase tracking-wider font-medium bg-neutral-900/50">
<th className="px-6 py-3 font-medium w-[40%]">Model</th>
<th className="px-6 py-3 font-medium">Context</th>
<th className="px-6 py-3 font-medium">Input / Output</th>
<th className="px-6 py-3 font-medium text-right">Latency</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm">

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center text-black">
<iconify-icon icon="lucide:bot" width="18"></iconify-icon>
</div>
<div>
<div className="text-white font-medium flex items-center gap-2">
                                                    openai/gpt-4o
                                                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">New</span>
</div>
<div className="text-xs text-neutral-500">OpenAI</div>
</div>
</div>
</td>
<td className="px-6 py-3 text-neutral-400">128k</td>
<td className="px-6 py-3 text-neutral-400">
<div className="flex flex-col">
<span>$5.00 <span className="text-neutral-600">/ 1M</span></span>
<span className="text-xs text-neutral-600">$15.00 out</span>
</div>
</td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2 text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            0.4s
                                        </div>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#D97757] flex items-center justify-center text-white">
<span className="font-serif font-bold text-lg">C</span>
</div>
<div>
<div className="text-white font-medium">anthropic/claude-3.5-sonnet</div>
<div className="text-xs text-neutral-500">Anthropic</div>
</div>
</div>
</td>
<td className="px-6 py-3 text-neutral-400">200k</td>
<td className="px-6 py-3 text-neutral-400">
<div className="flex flex-col">
<span>$3.00 <span className="text-neutral-600">/ 1M</span></span>
<span className="text-xs text-neutral-600">$15.00 out</span>
</div>
</td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2 text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            0.7s
                                        </div>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:infinity" width="18"></iconify-icon>
</div>
<div>
<div className="text-white font-medium">meta-llama/llama-3.1-405b</div>
<div className="text-xs text-neutral-500">Meta</div>
</div>
</div>
</td>
<td className="px-6 py-3 text-neutral-400">128k</td>
<td className="px-6 py-3 text-neutral-400">
<div className="flex flex-col">
<span>$2.00 <span className="text-neutral-600">/ 1M</span></span>
<span className="text-xs text-neutral-600">$2.00 out</span>
</div>
</td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2 text-yellow-400">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                            1.2s
                                        </div>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-800 border border-white/10 flex items-center justify-center text-yellow-400">
<iconify-icon icon="lucide:wind" width="18"></iconify-icon>
</div>
<div>
<div className="text-white font-medium">mistralai/mixtral-8x22b</div>
<div className="text-xs text-neutral-500">Mistral AI</div>
</div>
</div>
</td>
<td className="px-6 py-3 text-neutral-400">64k</td>
<td className="px-6 py-3 text-neutral-400">
<div className="flex flex-col">
<span>$0.90 <span className="text-neutral-600">/ 1M</span></span>
<span className="text-xs text-neutral-600">$0.90 out</span>
</div>
</td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2 text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            0.3s
                                        </div>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-600 flex items-center justify-center text-white">
<iconify-icon icon="lucide:google" width="16"></iconify-icon>
</div>
<div>
<div className="text-white font-medium">google/gemini-pro-1.5</div>
<div className="text-xs text-neutral-500">Google</div>
</div>
</div>
</td>
<td className="px-6 py-3 text-neutral-400">2000k</td>
<td className="px-6 py-3 text-neutral-400">
<div className="flex flex-col">
<span>$3.50 <span className="text-neutral-600">/ 1M</span></span>
<span className="text-xs text-neutral-600">$10.50 out</span>
</div>
</td>
<td className="px-6 py-3 text-right">
<div className="flex items-center justify-end gap-2 text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            0.8s
                                        </div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-white/5 bg-neutral-900/30 flex justify-center">
<button className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 transition-colors">
                            View all 124 models
                            <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-medium text-purple-300 mb-6">
<iconify-icon icon="lucide:git-merge" width="14"></iconify-icon>
                        Smart Router
                    </div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Route to the best model automatically.</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                        Stop worrying about vendor lock-in. Define your criteria, and let llmbox route your prompt to the most cost-effective or highest-performance model in real-time.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-400" icon="lucide:scale" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Cost-Optimized Routing</h3>
<p className="text-sm text-neutral-500">Route simple queries to cheaper models like Haiku or Llama 3 8B, saving up to 90%.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400" icon="lucide:shield" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Fallback Redundancy</h3>
<p className="text-sm text-neutral-500">If OpenAI is down, automatically fallback to Anthropic or Mistral without changing a line of code.</p>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl">
<div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
<div className="font-mono text-xs leading-relaxed">
<div className="flex gap-2 mb-4 text-neutral-500 select-none border-b border-white/5 pb-2">
<span className="text-white">router.ts</span>
<span>config.json</span>
</div>
<div className="text-purple-400">const</div> <div className="text-white inline">completion</div> = <div className="text-purple-400 inline">await</div> <div className="text-white inline">llmbox</div>.<div className="text-blue-400 inline">chat</div>.<div className="text-blue-400 inline">completions</div>.<div className="text-blue-400 inline">create</div>({
  <div className="text-neutral-500">// Auto-route based on complexity</div>
<div className="text-white">model:</div> <div className="text-green-400">"openrouter/auto"</div>,
  <div className="text-white">messages:</div> [
    { <div className="text-white">role:</div> <div className="text-green-400">"user"</div>, <div className="text-white">content:</div> <div className="text-green-400">"Explain quantum computing"</div> }
  ],
  <div className="text-neutral-500">// Fallback logic handles outages</div>
<div className="text-white">route_config:</div> {
    <div className="text-white">fallback_models:</div> [<div className="text-green-400">"anthropic/claude-3-haiku"</div>],
    <div className="text-white">max_price:</div> <div className="text-orange-400">0.05</div>
  }
});
                    </div>

<div className="mt-8 pt-8 border-t border-dashed border-white/10 flex justify-between items-center relative">

<div className="flex flex-col items-center gap-2 z-10">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Input</span>
</div>

<svg className="absolute top-[32px] left-2 w-full h-10 pointer-events-none text-white/10" overflow="visible">

<path d="M 0 10 L 130 10" stroke="currentColor" strokeWidth="1"></path>

<path className="text-purple-500/50" d="M 130 10 C 180 10, 180 -20, 230 -20" stroke="currentColor" strokeWidth="1"></path>
<path d="M 130 10 C 180 10, 180 40, 230 40" stroke="currentColor" strokeWidth="1"></path>
</svg>

<div className="w-8 h-8 rounded-full bg-neutral-900 border border-purple-500 flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(168,85,247,0.3)]">
<iconify-icon className="text-purple-400" icon="lucide:git-branch" width="16"></iconify-icon>
</div>

<div className="flex flex-col gap-6 z-10 pl-16">
<div className="flex items-center gap-2 bg-neutral-800/50 px-2 py-1 rounded border border-purple-500/30">
<iconify-icon className="text-purple-400" icon="lucide:check" width="10"></iconify-icon>
<span className="text-[10px] text-white">GPT-4o</span>
</div>
<div className="flex items-center gap-2 bg-neutral-800/50 px-2 py-1 rounded border border-white/5 opacity-50">
<span className="text-[10px] text-neutral-400">Claude 3.5</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-sm text-neutral-500 mb-8 font-medium">POWERING NEXT-GEN AI APPS AT</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:hexagon"></iconify-icon> ACME</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:triangle"></iconify-icon> VORTEX</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:circle"></iconify-icon> SPHERE</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:square"></iconify-icon> BLOCK</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:diamond"></iconify-icon> GEM</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Everything you need to <br/>build production agents.</h2>
<p className="text-neutral-400 text-lg max-w-xl">From prototyping to observability, llmbox provides the primitives for the next generation of software.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative col-span-1 md:col-span-2 h-80 rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/10 mb-6 text-emerald-400">
<iconify-icon icon="lucide:activity" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Unified Observability</h3>
<p className="text-neutral-400 text-sm">Track token usage, cost, and latency across all your providers in a single dashboard.</p>
</div>

<div className="mt-auto h-20 flex items-end gap-1 opacity-70">
<div className="w-full flex gap-1 items-end h-full px-2 pb-2">
<div className="w-1/6 h-[40%] bg-emerald-500/20 rounded-t-sm hover:bg-emerald-500/40 transition-colors"></div>
<div className="w-1/6 h-[70%] bg-emerald-500/40 rounded-t-sm hover:bg-emerald-500/60 transition-colors"></div>
<div className="w-1/6 h-[50%] bg-emerald-500/30 rounded-t-sm hover:bg-emerald-500/50 transition-colors"></div>
<div className="w-1/6 h-[90%] bg-emerald-500/60 rounded-t-sm hover:bg-emerald-500/80 transition-colors"></div>
<div className="w-1/6 h-[60%] bg-emerald-500/50 rounded-t-sm hover:bg-emerald-500/70 transition-colors"></div>
<div className="w-1/6 h-[80%] bg-emerald-500/50 rounded-t-sm hover:bg-emerald-500/70 transition-colors"></div>
</div>
</div>
</div>
</div>

<div className="group relative col-span-1 h-80 rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="p-8 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/10 mb-6 text-indigo-400">
<iconify-icon icon="lucide:lock" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-neutral-400 text-sm mb-6">Unified API key management. Rate limits per user. PII redaction before requests hit providers.</p>
<div className="mt-auto">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-500" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">SOC2 Type II</span>
</div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-500" icon="lucide:check" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">Audit Logs</span>
</div>
</div>
</div>
</div>

<div className="group relative col-span-1 md:col-span-3 h-80 rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="p-8 h-full flex flex-col md:flex-row gap-8">
<div className="md:w-1/3 flex flex-col justify-center">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/10 mb-6 text-purple-400">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">OpenAI Compatible</h3>
<p className="text-neutral-400 text-sm">Change your `baseURL` and access 100+ models instantly without rewriting your codebase.</p>
</div>
<div className="md:w-2/3 bg-black/30 rounded-lg border border-white/5 p-5 font-mono text-sm overflow-hidden flex flex-col justify-center">
<div>
<div className="text-neutral-500 mb-2">// migration.ts</div>
<div className="text-purple-400">import</div> <div className="text-white inline">OpenAI</div> <div className="text-purple-400 inline">from</div> <div className="text-green-400 inline">'openai'</div>;

                                <div className="text-purple-400 mt-4">const</div> <div className="text-white inline">client</div> = <div className="text-purple-400 inline">new</div> <div className="text-yellow-400 inline">OpenAI</div>({
                                <div className="text-white ml-4">baseURL:</div> <div className="text-green-400 inline">'https://api.llmbox.ai/v1'</div>, <div className="text-neutral-500 inline">// Just change this line</div>
<div className="text-white ml-4">apiKey:</div> <div className="text-blue-400 inline">process.env.LLMBOX_KEY</div>
                                });

                                <div className="text-purple-400 mt-4">await</div> <div className="text-white inline">client</div>.<div className="text-blue-400 inline">chat</div>.<div className="text-blue-400 inline">completions</div>.<div className="text-blue-400 inline">create</div>({
                                <div className="text-white ml-4">model:</div> <div className="text-green-400 inline">'meta-llama/llama-3-70b'</div>,
                                <div className="text-white ml-4">messages:</div> [...]
                                });
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center">
<div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-12 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 relative z-10">Stop managing API keys.</h2>
<p className="text-neutral-400 mb-8 max-w-lg mx-auto relative z-10">One key. All models. Unified billing. Start building with the best models today.</p>
<div className="flex justify-center relative z-10">
<button className="h-12 px-8 rounded-full bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                        Sign Up for Free
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<a className="text-white text-lg font-semibold tracking-tighter flex items-center gap-2 mb-4" href="#">
<div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-neutral-950 rounded-[1px]"></div>
</div>
                        llmbox
                    </a>
<p className="text-neutral-500 text-sm max-w-xs">The unified interface for LLMs. Compare, route, and optimize your AI infrastructure.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Models</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">OpenAI GPT-4</a></li>
<li><a className="hover:text-white transition-colors" href="#">Anthropic Claude</a></li>
<li><a className="hover:text-white transition-colors" href="#">Meta Llama 3</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mistral</a></li>
<li><a className="hover:text-white transition-colors" href="#">Google Gemini</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Observability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Smart Router</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-neutral-600 text-xs">© 2024 llmbox Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
