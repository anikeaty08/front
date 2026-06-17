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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tighter text-sm">AETHER</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Methodology</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Research</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-xs font-medium text-zinc-300 hover:text-white transition-colors">Log in</button>
<button className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded hover:bg-zinc-200 transition-colors">
                    Start Project
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-medium text-zinc-300 uppercase tracking-wider">System Operational</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tighter leading-[1.1] mb-6">
                    Engineering the<br/>synthetic mind.
                </h1>
<p className="text-lg text-zinc-400 font-light max-w-xl leading-relaxed mb-10">
                    We architect bespoke neural infrastructure for enterprise-grade autonomy. From predictive modeling to generative agents, we deploy intelligence that scales.
                </p>
<div className="flex flex-col md:flex-row gap-4 items-start">
<button className="group relative px-5 py-2.5 bg-zinc-100 hover:bg-white text-black text-sm font-medium rounded transition-all">
                        Consulting Inquiry
                    </button>
<button className="px-5 py-2.5 text-sm font-medium text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 rounded transition-all flex items-center gap-2">
<span>View Documentation</span>
<iconify-icon className="text-zinc-500 group-hover:text-white" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-24 border border-white/10 bg-[#0A0A0A] rounded-xl overflow-hidden shadow-2xl shadow-black/50">
<div className="border-b border-white/5 bg-white/[0.02] p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-white/5"></div>
</div>
<div className="text-[10px] font-mono text-zinc-500">model_training_v4.py</div>
<div className="w-10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/5">

<div className="p-6 md:p-8 space-y-8">
<div>
<div className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wide">Inference Latency</div>
<div className="text-3xl font-semibold text-white tracking-tight">12.4<span className="text-zinc-600">ms</span></div>
<div className="text-xs text-emerald-500 mt-1 flex items-center gap-1">
<iconify-icon icon="lucide:trending-down"></iconify-icon> -4.2% from baseline
                        </div>
</div>
<div>
<div className="text-xs font-medium text-zinc-500 mb-4 uppercase tracking-wide">Token Usage</div>
<div className="h-24 flex items-end gap-1">
<div className="w-full bg-zinc-800/50 rounded-sm h-[40%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[60%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[30%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[80%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[50%]"></div>
<div className="w-full bg-zinc-800/50 rounded-sm h-[70%]"></div>
<div className="w-full bg-white/20 rounded-sm h-[90%]"></div>
</div>
</div>
</div>

<div className="p-6 md:p-8 bg-[#050505]">
<div className="font-mono text-xs leading-relaxed text-zinc-400">
<span className="text-purple-400">class</span> <span className="text-yellow-100">NeuralArchitect</span>:<br/>
                          <span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self, nodes):<br/>
                            self.nodes = nodes<br/>
                            self.bias = <span className="text-emerald-400">0.015</span><br/>
<br/>
                          <span className="text-purple-400">async def</span> <span className="text-blue-400">optimize</span>(self, tensor):<br/>
                            <span className="text-zinc-600"># Quantization process</span><br/>
                            await tensor.flatten()<br/>
                            <span className="text-purple-400">return</span> tensor * self.bias
                    </div>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon className="text-sm" icon="lucide:terminal"></iconify-icon>
<span>Training completed in 42s</span>
</div>
</div>
</div>

<div className="p-6 md:p-8 space-y-6">
<div>
<label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wide mb-3 block">Temperature</label>
<div className="flex items-center gap-4">
<input className="w-full" max="100" min="0" type="range" value="70"/>
<span className="text-xs font-mono text-zinc-300">0.7</span>
</div>
</div>
<div>
<label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wide mb-3 block">Model Architecture</label>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded border border-white/5 bg-zinc-900/50 hover:bg-zinc-900 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="lucide:cpu"></iconify-icon>
<span className="text-xs text-zinc-200">Transformer XL</span>
</div>
<div className="w-2 h-2 rounded-full border border-zinc-600"></div>
</div>
<div className="flex items-center justify-between p-2 rounded border border-white/10 bg-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="lucide:network"></iconify-icon>
<span className="text-xs text-zinc-200">LSTM Network</span>
</div>
<div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
</div>
</div>
</div>
<div className="pt-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-400">Auto-Scaling</span>

<label className="inline-flex relative items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white peer-checked:after:bg-black"></div>
</label>
</div>
<p className="text-[10px] text-zinc-600">Dynamically adjust compute resources based on load.</p>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs text-zinc-600 font-medium tracking-widest uppercase mb-8">Deploying Intelligence For</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon className="text-xl" icon="lucide:triangle"></iconify-icon>
<span className="font-bold tracking-tight text-lg">Acme</span>
</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon className="text-xl" icon="lucide:hexagon"></iconify-icon>
<span className="font-bold tracking-tight text-lg">Nexus</span>
</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon className="text-xl" icon="lucide:circle-dashed"></iconify-icon>
<span className="font-bold tracking-tight text-lg">Orbit</span>
</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon className="text-xl" icon="lucide:box"></iconify-icon>
<span className="font-bold tracking-tight text-lg">Cube</span>
</div>
<div className="flex items-center gap-2 text-zinc-300">
<iconify-icon className="text-xl" icon="lucide:aperture"></iconify-icon>
<span className="font-bold tracking-tight text-lg">Focus</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-zinc-400 max-w-sm">Precision-engineered modules designed to integrate seamlessly with existing enterprise stacks.</p>
</div>
<a className="text-sm text-zinc-300 hover:text-white flex items-center gap-2" href="#">
                    View all services <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:brain-circuit" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Neural Architecture</h3>
<p className="text-xs leading-relaxed text-zinc-500">Custom LLM design and fine-tuning for specific domain knowledge retention.</p>
</div>

<div className="group p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:database-zap" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Vector Pipelines</h3>
<p className="text-xs leading-relaxed text-zinc-500">High-throughput embeddings and semantic search infrastructure implementation.</p>
</div>

<div className="group p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">AI Governance</h3>
<p className="text-xs leading-relaxed text-zinc-500">Establishing rigorous protocols for bias detection and output verification.</p>
</div>

<div className="group p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Code Synthesis</h3>
<p className="text-xs leading-relaxed text-zinc-500">Automated refactoring systems and intelligent development assistants.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-900/20 rounded-full blur-[100px]"></div>
<div className="relative z-10 rounded-lg border border-white/10 bg-black p-1 shadow-2xl">
<div className="rounded bg-zinc-950 border border-white/5 p-6 md:p-8">
<div className="flex items-center justify-between mb-8">
<div className="text-xs font-medium text-white">Security Protocol</div>
<div className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500">Active</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="h-4 w-4 rounded-full border border-zinc-700 flex items-center justify-center">
<div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div>
</div>
<div className="flex-1 h-2 bg-zinc-900 rounded overflow-hidden">
<div className="h-full w-[85%] bg-zinc-700"></div>
</div>
<span className="text-xs font-mono text-zinc-500">85%</span>
</div>
<div className="flex items-center gap-3">
<div className="h-4 w-4 rounded-full border border-zinc-700 flex items-center justify-center">
<div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div>
</div>
<div className="flex-1 h-2 bg-zinc-900 rounded overflow-hidden">
<div className="h-full w-[92%] bg-zinc-700"></div>
</div>
<span className="text-xs font-mono text-zinc-500">92%</span>
</div>
<div className="flex items-center gap-3">
<div className="h-4 w-4 rounded-full border border-zinc-700 flex items-center justify-center">
<div className="h-1.5 w-1.5 bg-emerald-500 rounded-full"></div>
</div>
<div className="flex-1 h-2 bg-zinc-900 rounded overflow-hidden">
<div className="h-full w-[78%] bg-zinc-700"></div>
</div>
<span className="text-xs font-mono text-zinc-500">78%</span>
</div>
</div>
<div className="mt-8 flex gap-3">
<div className="flex-1 p-3 rounded bg-zinc-900 border border-white/5">
<div className="text-[10px] text-zinc-500 uppercase">Requests</div>
<div className="text-lg font-medium text-white mt-1">2.4M</div>
</div>
<div className="flex-1 p-3 rounded bg-zinc-900 border border-white/5">
<div className="text-[10px] text-zinc-500 uppercase">Blocked</div>
<div className="text-lg font-medium text-white mt-1">14k</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Enterprise-grade security<br/>by default.</h2>
<p className="text-zinc-400 leading-relaxed mb-8">
                        We don't just build intelligence; we secure it. Our architectures are designed with zero-trust principles, ensuring proprietary data remains within your controlled environment while leveraging the power of large language models.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
<span>PII redaction pipelines</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
<span>On-premise deployment options</span>
</li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
<span>Role-based model access control</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium text-center text-white tracking-tight mb-16">Engagement Models</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-xl border border-white/5 bg-zinc-900/10 flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Audit</h3>
<p className="text-sm text-zinc-500 mt-2">Assessment of current infrastructure.</p>
</div>
<div className="text-3xl font-medium text-white mb-8">$5k<span className="text-sm text-zinc-500 font-normal">/week</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:minus"></iconify-icon> Data readiness check
                        </li>
<li className="flex gap-3 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:minus"></iconify-icon> Security vulnerability scan
                        </li>
<li className="flex gap-3 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:minus"></iconify-icon> Implementation roadmap
                        </li>
</ul>
<button className="w-full py-2.5 rounded text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 transition-colors">Start Audit</button>
</div>

<div className="p-8 rounded-xl border border-white/10 bg-zinc-900/40 flex flex-col relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Most Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Integration</h3>
<p className="text-sm text-zinc-500 mt-2">End-to-end model deployment.</p>
</div>
<div className="text-3xl font-medium text-white mb-8">$12k<span className="text-sm text-zinc-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Custom model fine-tuning
                        </li>
<li className="flex gap-3 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Vector database setup
                        </li>
<li className="flex gap-3 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> API middleware development
                        </li>
<li className="flex gap-3 text-xs text-zinc-300">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 24/7 Monitoring
                        </li>
</ul>
<button className="w-full py-2.5 rounded text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-colors">Select Plan</button>
</div>

<div className="p-8 rounded-xl border border-white/5 bg-zinc-900/10 flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<p className="text-sm text-zinc-500 mt-2">Full-scale autonomous systems.</p>
</div>
<div className="text-3xl font-medium text-white mb-8">Custom</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex gap-3 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:minus"></iconify-icon> Dedicated engineering team
                        </li>
<li className="flex gap-3 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:minus"></iconify-icon> On-premise hardware setup
                        </li>
<li className="flex gap-3 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:minus"></iconify-icon> Unlimited context windows
                        </li>
</ul>
<button className="w-full py-2.5 rounded text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-black py-24 px-6">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">Ready to accelerate?</h2>
<p className="text-zinc-400 mb-10">Join the forward-thinking companies redefining their industries with Aether Intelligence.</p>
<form className="text-left bg-zinc-900/30 p-8 rounded-2xl border border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div className="space-y-1">
<label className="text-[10px] text-zinc-500 uppercase font-medium">Full Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] text-zinc-500 uppercase font-medium">Work Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-zinc-700" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1 mb-6">
<label className="text-[10px] text-zinc-500 uppercase font-medium">Project Scope</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="border border-white/10 bg-black/30 rounded px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 transition-colors flex items-center justify-between">
                                LLM Integration
                                <iconify-icon className="hidden text-black" icon="lucide:check"></iconify-icon>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="border border-white/10 bg-black/30 rounded px-3 py-2 text-xs text-zinc-300 hover:bg-white/5 transition-colors flex items-center justify-between">
                                Data Analysis
                                <iconify-icon className="hidden text-black" icon="lucide:check"></iconify-icon>
</div>
</label>
</div>
</div>
<button className="w-full bg-white text-black font-semibold text-sm py-2.5 rounded hover:bg-zinc-200 transition-colors">
                    Send Request
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-[#030303]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-zinc-800 rounded-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-zinc-400 rounded-full"></div>
</div>
<span className="text-zinc-300 font-medium tracking-tighter text-sm">AETHER</span>
</div>
<p className="text-xs text-zinc-600 max-w-xs">
                    Building the cognitive infrastructure for the next generation of digital enterprise.
                </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-medium text-white mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Enterprise</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Connect</h4>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
<div className="text-[10px] text-zinc-700">© 2024 Aether Intelligence Inc.</div>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
</div>
</div>
</footer>

    </>
  );
}
