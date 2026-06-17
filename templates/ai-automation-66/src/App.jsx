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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                AURA
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#methodology">Methodology</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-neutral-400 hover:text-white transition-colors" href="#">Login</a>
<button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Book Demo
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="glow-blob w-96 h-96 bg-indigo-900/30 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="glow-blob w-[500px] h-[500px] bg-purple-900/20 bottom-0 right-0 translate-y-1/3"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                v2.0 Logic Engine is Live
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Automate operations with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400">intelligent logic.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Replace manual workflows with autonomous agents. We build custom AI infrastructure that scales with your business without the overhead.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-md bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 group">
                    Start Building
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-200" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-md border border-neutral-800 text-neutral-300 text-sm font-medium hover:border-neutral-700 hover:bg-neutral-900/50 transition-all backdrop-blur-sm">
                    View Documentation
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0B] overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-0 min-h-[400px]">

<div className="hidden md:block col-span-3 border-r border-white/5 bg-black/20 p-4 space-y-4">
<div className="flex items-center gap-2 text-xs text-neutral-500 font-medium uppercase tracking-wider mb-2">Workflows</div>
<div className="flex items-center gap-3 px-3 py-2 bg-indigo-500/10 text-indigo-200 text-sm rounded-md border border-indigo-500/20">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
                            Lead Gen Agent
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 text-sm hover:text-white cursor-pointer transition">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
                            Email Sorter
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-neutral-400 text-sm hover:text-white cursor-pointer transition">
<iconify-icon icon="lucide:database" width="16"></iconify-icon>
                            Data Enrichment
                        </div>
</div>

<div className="col-span-12 md:col-span-9 p-8 flex flex-col items-center justify-center relative">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-md">

<div className="w-full bg-[#111] border border-neutral-800 rounded-lg p-4 flex items-center justify-between shadow-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:webhook"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Webhook Trigger</div>
<div className="text-xs text-neutral-500">New lead detected</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
</div>
<iconify-icon className="text-neutral-600" icon="lucide:arrow-down"></iconify-icon>

<div className="w-full bg-[#111] border border-neutral-800 rounded-lg p-4 flex items-center justify-between shadow-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/20 flex items-center justify-center text-purple-400">
<iconify-icon icon="lucide:brain-circuit"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">AI Analysis</div>
<div className="text-xs text-neutral-500">Qualify via GPT-4o</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-600 font-mono">240ms</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black/40 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Powering next-gen companies</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:box"></iconify-icon> ACME CORP</span>
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:layers"></iconify-icon> STACK</span>
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:hexagon"></iconify-icon> POLYGON</span>
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:zap"></iconify-icon> BOLT</span>
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:globe"></iconify-icon> SPHERE</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Infrastructure for Intelligence</h2>
<p className="text-neutral-400 max-w-xl">We provide the modular components needed to build autonomous business processes from end to end.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0B] hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:workflow" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Workflow Orchestration</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">Connect your CRM, database, and communication tools into a single, unified nervous system. Our agents handle the handoffs.</p>
</div>
<div className="w-full h-32 bg-neutral-900/50 rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="flex gap-8">
<div className="w-12 h-8 rounded bg-neutral-800 border border-neutral-700"></div>
<div className="w-12 h-8 rounded bg-indigo-900/30 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]"></div>
<div className="w-12 h-8 rounded bg-neutral-800 border border-neutral-700"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0B] hover:border-white/20 transition-colors">
<div className="p-8 h-full relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Natural Language</h3>
<p className="text-sm text-neutral-400 mb-6">Deploy custom chatbots trained on your internal wiki and documentation.</p>

<div className="space-y-3">
<div className="flex gap-2">
<div className="h-2 w-12 rounded-full bg-neutral-800"></div>
<div className="h-8 w-full rounded-r-lg rounded-bl-lg bg-neutral-900 border border-white/5 p-2 flex items-center">
<div className="h-1.5 w-16 bg-neutral-700 rounded-full"></div>
</div>
</div>
<div className="flex gap-2 flex-row-reverse">
<div className="h-8 w-3/4 rounded-l-lg rounded-br-lg bg-indigo-600/20 border border-indigo-500/20 p-2 flex items-center justify-end">
<div className="h-1.5 w-24 bg-indigo-400/40 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0B] hover:border-white/20 transition-colors">
<div className="p-8 h-full relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:bar-chart-3" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Predictive Analytics</h3>
<p className="text-sm text-neutral-400">Forecast trends and resource allocation with autonomous data processing models.</p>
</div>
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-900/80 to-transparent pointer-events-none"></div>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0B] hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
<div className="p-8 h-full flex flex-col md:flex-row items-center gap-8 relative z-10">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Grade Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Your data never trains public models. We implement isolated environments with SOC2 compliant architecture.</p>
</div>
<div className="flex-1 w-full">
<div className="border border-white/10 bg-black/40 rounded-lg p-4 font-mono text-xs text-neutral-400">
<div className="flex justify-between border-b border-white/5 pb-2 mb-2">
<span>encryption_status</span>
<span className="text-green-400">active</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:lock" width="10"></iconify-icon> AES-256 Data at Rest
                                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:key" width="10"></iconify-icon> Private Key Management
                                    </div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:server" width="10"></iconify-icon> Isolated Containers
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#050505] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Real-time Efficiency</h2>
<p className="text-neutral-400 mb-8 text-lg font-light">
                    Adjust the parameters to see how autonomous agents can reduce your operational overhead instantly.
                </p>
<div className="grid grid-cols-2 gap-8">
<div>
<div className="text-4xl font-light text-white tracking-tight mb-1">24/7</div>
<div className="text-sm text-neutral-500">Uptime Availability</div>
</div>
<div>
<div className="text-4xl font-light text-white tracking-tight mb-1">&lt;1s</div>
<div className="text-sm text-neutral-500">Response Latency</div>
</div>
<div>
<div className="text-4xl font-light text-white tracking-tight mb-1">100%</div>
<div className="text-sm text-neutral-500">Data Accuracy</div>
</div>
<div>
<div className="text-4xl font-light text-white tracking-tight mb-1">0%</div>
<div className="text-sm text-neutral-500">Human Intervention</div>
</div>
</div>
</div>

<div className="bg-[#0A0A0B] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl relative">

<div className="flex justify-between items-center mb-8">
<span className="text-sm font-medium text-white">Agent Configuration</span>
<span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
</div>

<div className="space-y-8">

<div>
<div className="flex justify-between mb-3 text-xs font-medium text-neutral-400">
<span>Processing Volume</span>
<span className="text-white">50k req/s</span>
</div>
<div className="relative w-full h-1 bg-neutral-800 rounded-full">
<div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full" style={{width: '70%'}}></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[70%] w-4 h-4 bg-white rounded-full shadow cursor-pointer border border-neutral-200"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div>
<div className="text-sm text-white font-medium">Sentiment Analysis</div>
<div className="text-xs text-neutral-500">Auto-tag customer priority</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1f1f23] appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#1f1f23] cursor-pointer border border-neutral-700" htmlFor="toggle1"></label>
</div>
</div>

<div className="flex items-center justify-between">
<div>
<div className="text-sm text-white font-medium">Auto-Response</div>
<div className="text-xs text-neutral-500">Draft and send replies</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-[#1f1f23] appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#1f1f23] cursor-pointer border border-neutral-700" htmlFor="toggle2"></label>
</div>
</div>

<button className="w-full mt-4 bg-white text-black font-medium text-sm py-2 rounded shadow hover:bg-neutral-200 transition-colors">
                        Deploy Configuration
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to scale?</h2>
<p className="text-neutral-400 text-lg mb-10">
                Join the forward-thinking companies automating their future. <br/>
                Start with a free consultation to map your workflow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] text-sm" href="#">
                    Book a Strategy Call
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-[#111] text-white border border-neutral-800 font-medium rounded-full hover:bg-[#1a1a1a] transition-all text-sm" href="#">
                    Explore Integration Docs
                </a>
</div>
<p className="mt-8 text-xs text-neutral-600">
                No credit card required for consultation.
            </p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] py-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-md font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        AURA
                    </a>
<p className="text-xs text-neutral-500">
                        San Francisco, CA<br/>
                        © 2023 Aura Inc.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Workflows</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Intelligence</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Integrations</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">About</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Customers</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Careers</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Privacy</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Terms</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-white/5">
<div className="text-xs text-neutral-600">Designed for the future of work.</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
