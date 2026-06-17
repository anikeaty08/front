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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030014]">

<div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-violet-600/20 rounded-full blur-[120px] blob opacity-60 mix-blend-screen"></div>

<div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-500/20 rounded-full blur-[120px] blob opacity-50 mix-blend-screen" style={{animationDelay: '-5s'}}></div>

<div className="absolute bottom-[-10%] left-[10%] w-[35vw] h-[35vw] bg-fuchsia-600/10 rounded-full blur-[100px] blob opacity-40 mix-blend-screen" style={{animationDelay: '-8s'}}></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">

<div className="w-8 h-8 rounded-lg glass-button flex items-center justify-center text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">SHELDON</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Platform</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#workflow">Workflow</a>
<a className="hover:text-white transition-colors" href="#pricing">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Login</a>
<a className="group relative px-5 py-2 text-sm font-medium text-white rounded-full glass-button overflow-hidden shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-6xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-button border border-white/10 text-cyan-200 text-xs font-medium tracking-wide mb-10 reveal hover:bg-white/10 cursor-default shadow-lg shadow-cyan-900/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                SYSTEM V2.0 LIVE
            </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1] reveal delay-100 drop-shadow-2xl">
                Automate logic, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-violet-300">scale intelligence.</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed reveal delay-200">
                Deploy autonomous AI agents that integrate seamlessly with your existing stack. Eliminate repetitive workflows with enterprise-grade precision.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-5 reveal delay-300">
<button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-950 font-medium hover:bg-cyan-50 transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
                    Start Building Free
                </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-xl glass-button text-white font-medium flex items-center justify-center gap-2 group hover:scale-[1.02]">
<iconify-icon className="text-cyan-400 group-hover:text-white transition-colors" icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Book a Demo
                </button>
</div>

<div className="mt-24 relative rounded-2xl border-glass glass-panel p-2 shadow-2xl reveal delay-300 group overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

<div className="rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/5 overflow-hidden h-[400px] md:h-[500px] relative">

<div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/20 border border-white/5">
<iconify-icon className="text-slate-500 text-xs" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<span className="text-xs text-slate-500 font-mono">sheldon.ai/app/workflow</span>
</div>
<div className="flex gap-4">
<div className="w-4 h-4 rounded-full border border-white/10"></div>
</div>
</div>

<div className="flex h-full">

<div className="hidden md:flex w-64 border-r border-white/5 flex-col p-4 gap-2 bg-white/[0.01]">
<div className="p-3 rounded-lg bg-white/5 border border-white/5 mb-4">
<div className="h-2 w-20 bg-slate-700 rounded-full mb-2"></div>
<div className="h-2 w-12 bg-slate-800 rounded-full"></div>
</div>
<div className="h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 w-full flex items-center px-3 gap-2">
<div className="w-4 h-4 rounded bg-cyan-500/40"></div>
<div className="h-1.5 w-16 bg-cyan-200/20 rounded-full"></div>
</div>
<div className="h-8 rounded-lg w-full flex items-center px-3 gap-2 opacity-50">
<div className="w-4 h-4 rounded bg-slate-700"></div>
<div className="h-1.5 w-16 bg-slate-800 rounded-full"></div>
</div>
<div className="h-8 rounded-lg w-full flex items-center px-3 gap-2 opacity-50">
<div className="w-4 h-4 rounded bg-slate-700"></div>
<div className="h-1.5 w-16 bg-slate-800 rounded-full"></div>
</div>
</div>

<div className="flex-1 relative bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl p-10">
<div className="flex justify-between items-center relative z-10">

<div className="glass-panel p-4 rounded-xl border-glass flex flex-col gap-3 min-w-[140px] hover:scale-105 transition-transform duration-500 cursor-pointer">
<div className="flex items-center justify-between">
<div className="w-8 h-8 rounded bg-cyan-500/20 flex items-center justify-center text-cyan-400">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
</div>
<div className="text-xs text-slate-400 font-mono">Postgres DB</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-cyan-500"></div>
</div>
</div>

<div className="flex-1 h-[2px] bg-slate-800 mx-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-1/2 animate-[shimmer_2s_infinite]"></div>
</div>

<div className="glass-panel p-5 rounded-xl border-glass border-cyan-500/30 shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)] flex flex-col gap-3 min-w-[160px] relative z-20 hover:scale-105 transition-transform duration-500">
<div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-violet-500/20 flex items-center justify-center text-violet-400">
<iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<span className="text-white text-sm font-medium">Model V4</span>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/10 rounded-full"></div>
<div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="flex-1 h-[2px] bg-slate-800 mx-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400 to-transparent w-1/2 animate-[shimmer_2s_infinite_0.5s]"></div>
</div>

<div className="glass-panel p-4 rounded-xl border-glass flex flex-col gap-3 min-w-[140px] hover:scale-105 transition-transform duration-500 cursor-pointer">
<div className="flex items-center justify-between">
<div className="w-8 h-8 rounded bg-pink-500/20 flex items-center justify-center text-pink-400">
<iconify-icon icon="solar:plain-text-linear"></iconify-icon>
</div>
</div>
<div className="text-xs text-slate-400 font-mono">Response</div>
<div className="flex gap-1">
<div className="w-1 h-1 rounded-full bg-slate-600"></div>
<div className="w-1 h-1 rounded-full bg-slate-600"></div>
<div className="w-1 h-1 rounded-full bg-slate-600"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium tracking-[0.2em] text-slate-500 uppercase mb-10">Powering Next-Gen Stacks</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 mix-blend-plus-lighter">

<h3 className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light text-slate-400">.AI</span></h3>
<h3 className="text-xl font-semibold tracking-tight text-white italic">Vertex</h3>
<h3 className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><span className="w-3 h-3 bg-white rounded-sm rotate-45"></span> PRISM</h3>
<h3 className="text-xl font-medium tracking-tight text-white">Mono<span className="font-bold">Graph</span></h3>
<h3 className="text-xl font-light tracking-widest text-white uppercase">Echo</h3>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Transparency, built in.</h2>
<p className="text-lg text-slate-400 max-w-xl font-light leading-relaxed">
                    Comprehensive tools designed to build, test, and deploy AI agents at the speed of thought. See through the black box.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass-panel rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 relative border-glass">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-transparent flex items-center justify-center text-cyan-300 mb-6 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Modular Design</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                        Drag-and-drop logic blocks. Chain together LLMs, databases, and API calls without writing boilerplate code.
                    </p>
</div>

<div className="group glass-panel rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 relative border-glass">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-transparent flex items-center justify-center text-violet-300 mb-6 border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Self-Healing</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                        Agents that detect errors, attempt retries, and optimize their own prompts based on real-time feedback loops.
                    </p>
</div>

<div className="group glass-panel rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 relative border-glass">
<div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-transparent flex items-center justify-center text-fuchsia-300 mb-6 border border-fuchsia-500/20 shadow-[0_0_15px_rgba(217,70,239,0.15)]">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Enterprise Scale</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                        SOC2 compliant infrastructure. Role-based access control and PII redaction by default for all data processing.
                    </p>
</div>

<div className="md:col-span-3 glass-panel rounded-2xl p-8 md:p-12 mt-6 relative border-glass overflow-hidden flex flex-col md:flex-row items-center gap-12">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-cyan-900/10 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="flex-1 relative z-10">
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">Crystal Clear Observability</h3>
<p className="text-slate-400 font-light mb-8 max-w-md leading-relaxed">
                            Monitor token usage, latency, and agent decisions in real-time. Gain deep insights into how your automation performs under load.
                        </p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-slate-300 p-3 rounded-lg bg-white/5 border border-white/5 w-fit">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:graph-up-linear"></iconify-icon> Live Trace Logging
                            </div>
<div className="flex items-center gap-3 text-sm text-slate-300 p-3 rounded-lg bg-white/5 border border-white/5 w-fit">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:wallet-money-linear"></iconify-icon> Cost Attribution
                            </div>
</div>
</div>
<div className="flex-1 w-full relative">

<div className="rounded-xl glass-panel p-6 border-glass shadow-2xl relative">
<div className="flex justify-between items-center mb-6">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Requests / sec</span>
<span className="text-xs text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-500/20 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Live
                                </span>
</div>
<div className="flex items-end justify-between gap-1 h-40">
<div className="w-full bg-white/5 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[25%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-white/5 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-gradient-to-t from-cyan-600/50 to-cyan-400/80 rounded-t-sm h-[90%] shadow-[0_0_20px_rgba(6,182,212,0.3)] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        243 req/s
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="workflow">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-lg">From abstract concept to glass-clear execution.</h2>
<div className="hidden md:flex gap-3 mt-6 md:mt-0">
<button className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-slate-400 hover:text-white">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full glass-button flex items-center justify-center text-slate-400 hover:text-white">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent z-0"></div>

<div className="relative z-10 group">
<div className="w-16 h-16 rounded-2xl glass-button flex items-center justify-center text-white font-mono text-lg mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300 border-glass bg-[#030014]">
                        01
                    </div>
<h3 className="text-xl font-medium text-white mb-3">Connect Sources</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Securely link your databases, API endpoints, and document stores. SHELDON automatically indexes your data context.
                    </p>
</div>

<div className="relative z-10 group">
<div className="w-16 h-16 rounded-2xl glass-button flex items-center justify-center text-cyan-400 font-mono text-lg mb-8 shadow-[0_0_30px_rgba(6,182,212,0.2)] group-hover:scale-110 transition-transform duration-300 border-glass bg-[#030014]">
                        02
                    </div>
<h3 className="text-xl font-medium text-white mb-3">Configure Agents</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Define goals and guardrails. Use natural language to instruct agents on logic, tone, and decision-making parameters.
                    </p>
</div>

<div className="relative z-10 group">
<div className="w-16 h-16 rounded-2xl glass-button flex items-center justify-center text-white font-mono text-lg mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-300 border-glass bg-[#030014]">
                        03
                    </div>
<h3 className="text-xl font-medium text-white mb-3">Deploy &amp; Scale</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Push to production with a single click. Auto-scaling infrastructure handles the load while you monitor results.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel border-glass rounded-3xl p-8 md:p-16 relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-8">Designed for modern workloads.</h2>
<div className="space-y-4">

<div className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyan-500/20 transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white group-hover:text-cyan-300 transition-colors">Customer Support</h4>
<p className="text-slate-400 text-sm mt-2 font-light">Autonomously resolve 60% of tickets with personalized responses.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-xl border border-transparent hover:bg-white/5 hover:border-violet-500/20 transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-violet-500/10 text-violet-400">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white group-hover:text-violet-300 transition-colors">Data Extraction</h4>
<p className="text-slate-400 text-sm mt-2 font-light">Turn PDFs and invoices into structured JSON data automatically.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-xl border border-transparent hover:bg-white/5 hover:border-fuchsia-500/20 transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white group-hover:text-fuchsia-300 transition-colors">DevOps Automation</h4>
<p className="text-slate-400 text-sm mt-2 font-light">Analyze logs, triage bugs, and suggest fixes in your pipeline.</p>
</div>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="relative w-full aspect-square flex items-center justify-center">

<div className="absolute w-[90%] h-48 bg-slate-800/40 border border-white/5 backdrop-blur-sm rounded-xl -rotate-6 translate-y-12"></div>

<div className="absolute w-[95%] h-56 bg-slate-800/60 border border-white/10 backdrop-blur-md rounded-xl -rotate-3 translate-y-6"></div>

<div className="relative z-10 w-full max-w-sm glass-panel border-glass rounded-xl p-6 shadow-2xl">
<div className="flex gap-4 mb-6 pb-6 border-b border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white shadow-lg">
<iconify-icon icon="solar:user-circle-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-wide mb-1">Incoming Query</div>
<div className="text-sm text-white font-medium">How do I reset my API key?</div>
</div>
</div>
<div className="pl-4 ml-5 border-l border-dashed border-white/20 space-y-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<iconify-icon className="animate-spin-slow" icon="solar:clock-circle-linear"></iconify-icon> Processing (120ms)
                                     </div>
<div className="p-3 bg-white/5 rounded-lg border border-white/5 text-xs text-cyan-200 font-mono">
                                         Action: Search_Docs(query="reset api key")
                                     </div>
</div>
<div className="flex gap-4 mt-6 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
<iconify-icon icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400 uppercase tracking-wide mb-1">Sheldon Agent</div>
<div className="text-sm text-white">You can reset your key in Settings &gt; Developer &gt; Keys.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.005]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="group">
<div className="text-3xl md:text-5xl font-medium text-white mb-2 group-hover:scale-110 transition-transform duration-300">10x</div>
<div className="text-xs font-medium tracking-widest text-slate-500 uppercase">Faster Processing</div>
</div>
<div className="group">
<div className="text-3xl md:text-5xl font-medium text-white mb-2 group-hover:scale-110 transition-transform duration-300">99.9%</div>
<div className="text-xs font-medium tracking-widest text-slate-500 uppercase">Uptime SLA</div>
</div>
<div className="group">
<div className="text-3xl md:text-5xl font-medium text-white mb-2 group-hover:scale-110 transition-transform duration-300 text-cyan-400 text-shadow-glow">2ms</div>
<div className="text-xs font-medium tracking-widest text-slate-500 uppercase">Avg Latency</div>
</div>
<div className="group">
<div className="text-3xl md:text-5xl font-medium text-white mb-2 group-hover:scale-110 transition-transform duration-300">SOC2</div>
<div className="text-xs font-medium tracking-widest text-slate-500 uppercase">Certified</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8">Ready to upgrade your logic?</h2>
<p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto font-light">Join the most innovative companies building the future of autonomous workflows.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-10 py-4 rounded-full bg-white text-slate-950 font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                    Get Started for Free
                </button>
<button className="px-10 py-4 rounded-full glass-button text-white font-medium hover:bg-white/10 transition-colors">
                    Contact Sales
                </button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
</section>

<footer className="border-t border-white/10 bg-[#02000d] pt-20 pb-10 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-lg glass-button flex items-center justify-center text-white text-sm">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">SHELDON</span>
</div>
<p className="text-slate-500 text-sm font-light max-w-xs leading-relaxed">
                        The operating system for the intelligent enterprise. Automate, optimize, and scale with absolute confidence.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-6">Product</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-6">Social</h4>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-white transition-colors glass-button w-8 h-8 rounded-full flex items-center justify-center" href="#"><iconify-icon icon="brandico:twitter-bird" width="14"></iconify-icon></a>
<a className="hover:text-white transition-colors glass-button w-8 h-8 rounded-full flex items-center justify-center" href="#"><iconify-icon icon="brandico:github" width="14"></iconify-icon></a>
<a className="hover:text-white transition-colors glass-button w-8 h-8 rounded-full flex items-center justify-center" href="#"><iconify-icon icon="brandico:linkedin" width="14"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 Sheldon Automation Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-slate-600 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02]">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span> Systems Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
