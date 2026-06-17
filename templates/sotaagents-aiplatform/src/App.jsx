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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-blue-500" data-icon="lucide:box" data-width="20"></span>
<span className="text-white font-semibold tracking-tight text-lg">SotaAgents</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#platform">Platform</a>
<a className="hover:text-white transition-colors" href="#graph">Enterprise Graph</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hidden sm:block" href="#">Log in</a>
<button className="bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors">
                    Book Demo
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-400 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Enterprise Grade AI Intelligence
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-6 leading-[1.1]">
                Build Your Business <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">AI Agents Operating System</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Deploy autonomous AI agents with maximum accuracy, security, and reliability. The complete infrastructure for the intelligence age.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                    Start Building
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 rounded-full font-medium transition-all">
                    Talk to Sales
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-zinc-900/40 p-2 shadow-2xl backdrop-blur-sm">
<div className="aspect-[16/9] rounded-lg bg-zinc-950 relative overflow-hidden flex items-center justify-center border border-white/5">
<div className="grid-bg absolute inset-0 opacity-20"></div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center backdrop-blur-xl mb-8 glow">
<span className="iconify text-white" data-icon="lucide:brain-circuit" data-width="48"></span>
</div>
<div className="flex gap-4 md:gap-12">

<div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-xs font-mono text-zinc-500 flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full"></span> ERP Connected
                            </div>
<div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-xs font-mono text-zinc-500 flex items-center gap-2">
<span className="w-2 h-2 bg-blue-500 rounded-full"></span> Processing
                            </div>
<div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-xs font-mono text-zinc-500 flex items-center gap-2">
<span className="w-2 h-2 bg-purple-500 rounded-full"></span> 99.9% Safe
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Data Transformation</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Make Your Data <br/>AI-Ready</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        LLMs are only as good as the data you feed them. Our real data engineers transform complex documents, legacy databases, and unstructured files into structured, AI-accessible knowledge.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<span className="iconify text-blue-400" data-icon="lucide:user-cog" data-width="20"></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Human Engineering Expertise</h3>
<p className="text-zinc-500 text-sm">Not just plug-and-play. We assign expert engineers to solve specific edge cases for ERP, CRM, and bespoke system integration.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
<span className="iconify text-purple-400" data-icon="lucide:file-json" data-width="20"></span>
</div>
<div>
<h3 className="text-white font-medium mb-1">Unstructured to Structured</h3>
<p className="text-zinc-500 text-sm">Convert PDFs, scanned docs, and messy logs into vector-ready formats.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
<div className="relative rounded-2xl border border-white/10 bg-zinc-950 p-6 grid gap-4">

<div className="flex items-center gap-4 opacity-50">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-zinc-900">
<span className="iconify text-zinc-500" data-icon="lucide:file-text" data-width="20"></span>
</div>
<div className="flex-1 h-2 bg-zinc-900 rounded"></div>
<div className="w-16 h-2 bg-zinc-900 rounded"></div>
</div>

<div className="flex items-center gap-4 opacity-50 mb-4">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-zinc-900">
<span className="iconify text-zinc-500" data-icon="lucide:database" data-width="20"></span>
</div>
<div className="flex-1 h-2 bg-zinc-900 rounded"></div>
<div className="w-12 h-2 bg-zinc-900 rounded"></div>
</div>

<div className="h-16 border-y border-dashed border-white/10 flex items-center justify-center gap-3 text-blue-400 font-mono text-xs bg-blue-500/5">
<span className="animate-spin text-blue-500"><span className="iconify" data-icon="lucide:loader-2"></span></span>
                            Human-in-the-loop Transformation...
                        </div>

<div className="flex items-center gap-4 mt-4">
<div className="w-10 h-10 rounded border border-green-500/20 flex items-center justify-center bg-green-500/10">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="20"></span>
</div>
<div className="flex-1 p-3 rounded border border-white/10 bg-zinc-900/50">
<div className="flex gap-1 mb-2">
<div className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">Entity: Invoice</div>
<div className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px] font-mono">ID: #4092</div>
</div>
<div className="h-2 w-3/4 bg-zinc-700 rounded mb-1"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="graph">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">Enterprise Graph</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">AI That Understands <br/>Your Business</h2>
<p className="text-zinc-400 text-lg">
                    Raw data isn't enough. Our Enterprise Graph maps relationships across people, projects, and processes—delivering AI with true business context and institutional knowledge.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
<span className="iconify" data-icon="lucide:network" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Contextual Intelligence</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        The AI knows that "Project Alpha" is managed by Sarah and relates to Q3 goals, not just keyword matching.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
<span className="iconify" data-icon="lucide:share-2" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Relationship-Aware</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Maps dynamic hierarchies and cross-departmental workflows to respect permissions and information flow.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
<span className="iconify" data-icon="lucide:library" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Institutional Memory</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Retains historical decisions and company-specific jargon to reduce hallucinations and improve relevance.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<div className="text-zinc-500 text-sm font-semibold tracking-widest uppercase mb-4">The Platform</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Build, Deploy, Scale</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-4 row-span-2 rounded-2xl border border-white/10 bg-zinc-950 p-8 relative overflow-hidden flex flex-col">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<span className="iconify text-blue-500" data-icon="lucide:bot" data-width="24"></span>
<h3 className="text-2xl font-medium text-white">Agent Builder</h3>
</div>
<p className="text-zinc-400 max-w-md">Visual, multi-agent workflow builder. Orchestrate complex tasks with drag-and-drop simplicity.</p>
</div>

<div className="mt-8 flex-1 bg-zinc-900/50 rounded-lg border border-white/5 p-4 relative font-mono text-xs">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
<span className="text-zinc-500">Workflow: Invoice_Processing_v2</span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-green-500">Active</span>
</div>
</div>
<div className="flex justify-between items-center gap-4">
<div className="border border-blue-500/30 bg-blue-500/10 text-blue-300 p-3 rounded w-32 text-center">Trigger</div>
<div className="w-8 h-px bg-zinc-600"></div>
<div className="border border-white/10 bg-zinc-800 p-3 rounded w-32 text-center text-zinc-300">Classifier</div>
<div className="w-8 h-px bg-zinc-600"></div>
<div className="border border-white/10 bg-zinc-800 p-3 rounded w-32 text-center text-zinc-300">Extraction</div>
</div>

<div className="absolute bottom-4 right-4 bg-zinc-950 border border-white/10 p-3 rounded w-48 shadow-lg">
<div className="flex justify-between mb-2 text-[10px] text-zinc-400">
<span>Confidence</span>
<span>0.85</span>
</div>
<div className="h-1 bg-zinc-800 rounded-full w-full relative">
<div className="absolute left-0 top-0 h-full w-[85%] bg-blue-500 rounded-full"></div>
<div className="absolute left-[85%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 rounded-2xl border border-white/10 bg-zinc-950 p-6 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
<div>
<span className="iconify text-zinc-400 mb-4" data-icon="lucide:cpu" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Multi-Model Agnostic</h3>
<p className="text-zinc-500 text-sm">Switch between GPT-4, Claude 3, Llama 3, or hosted open-source models instantly.</p>
</div>
<div className="flex gap-3 mt-4 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">

<div className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold tracking-wide">OPENAI</div>
<div className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold tracking-wide">META</div>
<div className="px-2 py-1 bg-white/10 rounded text-[10px] font-bold tracking-wide">MISTRAL</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 rounded-2xl border border-white/10 bg-zinc-950 p-6 flex flex-col justify-between group hover:bg-zinc-900/50 transition-colors">
<div>
<span className="iconify text-zinc-400 mb-4" data-icon="lucide:plug" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-2">Deep Integrations</h3>
<p className="text-zinc-500 text-sm">Pre-built connectors for Salesforce, HubSpot, Postgres, Snowflake, and Drive.</p>
</div>
<div className="grid grid-cols-4 gap-2 mt-4">
<div className="bg-zinc-900 border border-white/5 rounded aspect-square flex items-center justify-center text-zinc-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:database"></span></div>
<div className="bg-zinc-900 border border-white/5 rounded aspect-square flex items-center justify-center text-zinc-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:message-circle"></span></div>
<div className="bg-zinc-900 border border-white/5 rounded aspect-square flex items-center justify-center text-zinc-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:mail"></span></div>
<div className="bg-zinc-900 border border-white/5 rounded aspect-square flex items-center justify-center text-zinc-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:cloud"></span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="security">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-green-500" data-icon="lucide:shield-check" data-width="20"></span>
<span className="text-green-500 text-sm font-semibold tracking-widest uppercase">Enterprise Security</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Deploy Anywhere,<br/>Stay Compliant</h2>
<p className="text-zinc-400 text-lg">
                        Your data never leaves your control. We offer flexible deployment options designed for highly regulated industries.
                    </p>
</div>
<div className="flex gap-4">
<div className="px-4 py-2 border border-white/10 rounded bg-zinc-900/50 text-xs text-zinc-400 flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:lock" data-width="12"></span> SOC 2 Type II
                    </div>
<div className="px-4 py-2 border border-white/10 rounded bg-zinc-900/50 text-xs text-zinc-400 flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:globe" data-width="12"></span> ISO 27001
                    </div>
<div className="px-4 py-2 border border-white/10 rounded bg-zinc-900/50 text-xs text-zinc-400 flex items-center gap-2">
<span className="iconify text-green-500" data-icon="lucide:file-check" data-width="12"></span> GDPR
                    </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:cloud" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Managed Cloud</h3>
<p className="text-zinc-500 text-sm">Fastest time to value. Hosted on our secure VPC with single-tenant isolation options.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:server" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">Hybrid Deployment</h3>
<p className="text-zinc-500 text-sm">Keep sensitive data on your servers while offloading inference to our optimized cloud.</p>
</div>

<div className="p-6 rounded-xl border border-green-500/30 bg-gradient-to-br from-zinc-900 to-green-950/10 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-green-500 text-black text-[10px] font-bold px-2 py-1 rounded-bl">ENTERPRISE</div>
<div className="w-10 h-10 rounded bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 text-green-400">
<span className="iconify" data-icon="lucide:building-2" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2">On-Premise / VPC</h3>
<p className="text-zinc-400 text-sm">Full air-gapped deployment within your infrastructure. Total control, zero data egress.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8">Ready to modernize your operations?</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-y border-white/5 py-8">
<div>
<div className="text-3xl font-bold text-white mb-1">92%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Accuracy Rate</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">100M+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Docs Processed</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">10x</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Faster Workflows</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">24/7</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Expert Support</div>
</div>
</div>
<button className="px-10 py-4 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1">
                Get Started Now
            </button>
<p className="mt-6 text-zinc-500 text-sm">No credit card required for consultation.</p>
</div>
</section>

<footer className="border-t border-white/10 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-blue-500" data-icon="lucide:box" data-width="20"></span>
<span className="text-white font-semibold tracking-tight text-lg">SotaAgents</span>
</div>
<p className="text-zinc-500 text-sm max-w-xs">
                        The enterprise operating system for artificial intelligence agents. Built for scale, security, and precision.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise Graph</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">DPA</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 SotaAgents Inc. All rights reserved.</p>
<div className="flex gap-4">
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:github" data-width="16"></span>
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:linkedin" data-width="16"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
