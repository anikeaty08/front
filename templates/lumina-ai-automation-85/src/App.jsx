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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white text-xs" icon="solar:infinity-linear"></iconify-icon>
</div>
                LUMINA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#pricing">Plans</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-white/70 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs bg-white text-black font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors tracking-tight" href="#">
                    Book Demo
                </a>
</div>
</div>
</nav>

<main className="overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs text-indigo-300 font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                AI AUTOMATION AGENCY 2.0
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">
                Operational efficiency, <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-neutral-600">autonomous by design.</span>
</h1>
<p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                We build intelligent agents and workflow automations that scale your business operations without scaling your headcount.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="shine-effect h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors w-full md:w-auto flex items-center justify-center gap-2">
                    Start Automating
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors w-full md:w-auto bg-black/50 backdrop-blur-sm">
                    View Case Studies
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 relative">
<div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-xl blur opacity-20"></div>
<div className="glass-panel rounded-xl p-1 border-t border-white/10 overflow-hidden shadow-2xl shadow-indigo-900/10">
<div className="bg-[#050505] rounded-lg p-6 md:p-10 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative z-10 flex items-center gap-12 md:gap-24 opacity-80 scale-75 md:scale-100">

<div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-lg relative">
<iconify-icon className="text-white text-2xl" icon="solar:inbox-linear"></iconify-icon>
<div className="absolute -bottom-8 text-xs text-neutral-500 font-medium">Input</div>

<div className="absolute left-full top-1/2 w-12 md:w-24 h-[1px] bg-gradient-to-r from-neutral-800 to-indigo-500/50"></div>
<div className="absolute left-full top-1/2 translate-x-12 md:translate-x-24 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]"></div>
</div>

<div className="w-24 h-24 rounded-3xl bg-neutral-900 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.15)] relative">
<iconify-icon className="text-indigo-400 text-4xl" icon="solar:cpu-bolt-linear"></iconify-icon>
<div className="absolute -top-3 -right-3 bg-indigo-500 text-white text-[10px] px-2 py-0.5 rounded-full">Processing</div>

<div className="absolute left-full top-1/2 w-12 md:w-24 h-[1px] bg-gradient-to-r from-indigo-500/50 to-neutral-800"></div>
</div>

<div className="flex flex-col gap-4">
<div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-emerald-500/20 flex items-center justify-center shadow-lg relative group">
<iconify-icon className="text-emerald-400 text-2xl group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-lg relative grayscale opacity-50">
<iconify-icon className="text-white text-2xl" icon="solar:database-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-neutral-600 mb-6 uppercase tracking-widest">Powering Next-Gen Companies</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<h3 className="text-lg font-semibold tracking-tight text-white">ACME Corp</h3>
<h3 className="text-lg font-semibold tracking-tight text-white">Vortex</h3>
<h3 className="text-lg font-semibold tracking-tight text-white">Hyperion</h3>
<h3 className="text-lg font-semibold tracking-tight text-white">Stark Ind</h3>
<h3 className="text-lg font-semibold tracking-tight text-white">Massive</h3>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="solutions">
<div className="mb-16">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-4">taroon kumar</h2>
<p className="text-neutral-500 text-lg font-light max-w-xl">Our modular AI solutions plug directly into your existing stack to eliminate bottlenecks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Support Agents</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">Deploy autonomous support agents trained on your documentation. Resolve 60% of tickets instantly with zero human intervention.</p>
</div>

<div className="mt-4 w-full bg-neutral-900/80 rounded-lg border border-neutral-800 p-4 font-mono text-xs text-neutral-400">
<div className="flex gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<p className="text-indigo-400">&gt; analyzing_ticket_intent...</p>
<p className="mt-1 text-emerald-400">&gt; resolution_found (confidence: 98%)</p>
<p className="mt-1 text-white">&gt; drafting_response...</p>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group md:row-span-2">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-800/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Revenue Ops</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8">Enrich leads, qualify prospects, and schedule meetings automatically.</p>
<div className="flex-1 w-full bg-neutral-900 border border-neutral-800 rounded-lg p-4 flex flex-col gap-3">
<div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
<span>Lead Score</span>
<span>Status</span>
</div>

<div className="flex items-center justify-between text-xs">
<span className="text-white">Acme Corp</span>
<span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">High</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-white">TechFlow</span>
<span className="text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">Med</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-white">Global Inc</span>
<span className="text-neutral-500 bg-neutral-800 px-2 py-0.5 rounded">Low</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Data Entry</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Extract structured data from unstructured PDFs, emails, and forms.</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="solar:tuning-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2">Custom Workflows</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Tailored n8n and Make.com scenarios designed for your specific needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="methodology">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">How we deploy.</h2>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">We don't just hand over a tool. We analyze your infrastructure, build bespoke models, and ensure continuous optimization.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                        3-Week Turnaround Average
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                        GDPR &amp; SOC2 Compliant Builds
                    </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                        24/7 Monitoring
                    </li>
</ul>
</div>
<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 relative">

<div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 hidden md:block" style={{left: '50%'}}></div>
<div className="relative pl-0 md:pr-12 md:text-right">
<div className="text-6xl font-medium text-neutral-800 mb-2">01</div>
<h3 className="text-white font-medium text-lg mb-2">Audit &amp; Strategy</h3>
<p className="text-neutral-500 text-sm font-light">We map your current processes to identify high-impact automation opportunities.</p>
</div>
<div className="relative pl-0 md:pl-12 pt-8 md:pt-20">
<div className="text-6xl font-medium text-neutral-800 mb-2">02</div>
<h3 className="text-white font-medium text-lg mb-2">Build &amp; Train</h3>
<p className="text-neutral-500 text-sm font-light">Developing custom agents and connecting API endpoints securely.</p>
</div>
<div className="relative pl-0 md:pr-12 md:text-right pt-8 md:pt-0">
<div className="text-6xl font-medium text-neutral-800 mb-2">03</div>
<h3 className="text-white font-medium text-lg mb-2">Test &amp; Launch</h3>
<p className="text-neutral-500 text-sm font-light">Rigorous testing in sandbox environments before full deployment.</p>
</div>
<div className="relative pl-0 md:pl-12 pt-8 md:pt-20">
<div className="text-6xl font-medium text-neutral-800 mb-2">04</div>
<h3 className="text-white font-medium text-lg mb-2">Scale</h3>
<p className="text-neutral-500 text-sm font-light">Continuous refinement based on performance data and edge cases.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Simple, transparent pricing.</h2>
<p className="text-neutral-500 mt-4 text-sm">Pause or cancel anytime.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-white font-medium">Starter</h3>
<p className="text-neutral-500 text-sm mt-1">For optimizing single workflows.</p>
</div>
<div className="bg-neutral-900 text-white text-xs px-3 py-1 rounded-full border border-neutral-800">Custom</div>
</div>
<div className="text-3xl font-medium text-white mb-6">$2,500<span className="text-base text-neutral-500 font-normal">/mo</span></div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> 2 Automation Workflows
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Weekly Maintenance
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Email Support
                    </div>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                    Get Started
                </button>
</div>

<div className="border border-indigo-500/30 bg-indigo-500/[0.02] rounded-2xl p-8 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                </div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-white font-medium">Enterprise</h3>
<p className="text-neutral-500 text-sm mt-1">Full-scale operational AI.</p>
</div>
<div className="bg-neutral-900 text-white text-xs px-3 py-1 rounded-full border border-neutral-800">Custom</div>
</div>
<div className="text-3xl font-medium text-white mb-6">$5,000+<span className="text-base text-neutral-500 font-normal">/mo</span></div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Unlimited Workflows
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Custom AI Agent Training
                    </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-read-linear"></iconify-icon> Slack Connect Channel
                    </div>
</div>
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Book Discovery Call
                </button>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 relative z-10">Ready to automate the boring stuff?</h2>
<p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto relative z-10 font-light">Stop wasting human potential on robotic tasks. Let Lumina handle the backend while you focus on growth.</p>
<div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
<input className="bg-black/50 border border-white/10 text-white px-6 py-3 rounded-full text-sm focus:outline-none focus:border-indigo-500 w-full sm:w-auto min-w-[300px]" placeholder="enter your email" type="email"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors">
                    Get Free Audit
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-neutral-800 rounded flex items-center justify-center">
<iconify-icon className="text-white text-[10px]" icon="solar:infinity-linear"></iconify-icon>
</div>
<span className="text-white text-sm font-medium tracking-tight">LUMINA</span>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 Lumina Automation. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
