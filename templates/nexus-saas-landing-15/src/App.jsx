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
      
<div className="bg-noise"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] glow-radial pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-white to-zinc-500 rounded-full"></div>
<span className="font-medium tracking-tight text-lg">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#method">Method</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 text-center mb-24 md:mb-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                v2.0 is now live
                <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 text-gradient max-w-5xl mx-auto leading-[1.1]">
                Scale your startup <br className="hidden md:block"/> with intelligent speed.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                The all-in-one infrastructure for modern teams. Orchestrate workflows, automate decisions, and deploy faster without the chaos.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group" href="#">
                    Start Building Free
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Watch Demo
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="aspect-[16/9] md:aspect-[21/9] relative p-8 flex items-center justify-center">
<div className="grid grid-cols-3 gap-4 w-full h-full opacity-60">
<div className="col-span-2 row-span-2 glass-panel rounded-lg p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white/10"></div>
<div className="w-24 h-6 rounded bg-white/10"></div>
</div>
<div className="space-y-3">
<div className="w-full h-4 rounded bg-white/10"></div>
<div className="w-2/3 h-4 rounded bg-white/10"></div>
</div>
</div>
<div className="col-span-1 glass-panel rounded-lg p-4">
<div className="w-full h-full rounded bg-indigo-500/10 border border-indigo-500/20"></div>
</div>
<div className="col-span-1 glass-panel rounded-lg p-4 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="solar:graph-new-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">

<div className="text-xl font-semibold tracking-tighter">ACME <span className="font-light">CORP</span></div>
<div className="text-xl font-bold tracking-tighter italic">StarkInd</div>
<div className="text-xl font-medium tracking-tighter flex items-center gap-1"><div className="w-4 h-4 bg-white rounded-full"></div> ORBIT</div>
<div className="text-xl font-light tracking-widest">VERTEX</div>
<div className="text-xl font-semibold tracking-tighter">Hyper<span className="text-zinc-500">Loop</span></div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Stop wrestling with <br/> fragmented tools.</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        The modern stack is broken. Data silos, endless context switching, and manual glue code are slowing you down. It's time to unify your workflow.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-300">
<iconify-icon className="text-red-400 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Disconnected data sources costing 10+ hours/week.</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<iconify-icon className="text-red-400 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Security vulnerabilities in unmanaged integrations.</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<iconify-icon className="text-red-400 mt-1 flex-shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Slow deployment cycles due to manual approvals.</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-indigo-500/20 blur-[100px] rounded-full"></div>
<div className="glass-panel rounded-2xl p-8 relative">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white">System Optimized</h3>
<p className="text-sm text-zinc-500">All workflows synchronized</p>
</div>
</div>
<div className="space-y-4">
<div className="h-2 bg-zinc-800 rounded-full w-full overflow-hidden">
<div className="h-full bg-green-500 w-[92%]"></div>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Efficiency Score</span>
<span className="text-white font-mono">98.4%</span>
</div>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
<div className="text-2xl font-medium text-white mb-1">10x</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Faster Build</div>
</div>
<div className="p-4 rounded-lg bg-white/5 border border-white/5 text-center">
<div className="text-2xl font-medium text-white mb-1">0ms</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Downtime</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Engineered for growth.</h2>
<p className="text-zinc-400 text-lg">Every feature is crafted to reduce friction and increase velocity for your entire engineering team.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-white" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">AI Orchestration</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Automate complex decision trees with our proprietary LLM router that learns from your data.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-white" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Unified API</h3>
<p className="text-zinc-400 leading-relaxed text-sm">One endpoint to rule them all. Connect CRM, Payments, and Database services instantly.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-white" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Enterprise Security</h3>
<p className="text-zinc-400 leading-relaxed text-sm">SOC2 Type II ready out of the box. End-to-end encryption for all data in transit and rest.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group md:col-span-2">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-white" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Real-time Analytics</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Visualize your growth metrics with sub-second latency. Custom dashboards included.</p>
</div>
<div className="flex-1 w-full">
<div className="bg-black/50 border border-white/10 rounded-lg p-4 h-32 flex items-end gap-1">
<div className="w-1/5 bg-zinc-800 h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[60%] rounded-sm"></div>
<div className="w-1/5 bg-zinc-700 h-[50%] rounded-sm"></div>
<div className="w-1/5 bg-indigo-500 h-[85%] rounded-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[70%] rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-white" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Team Collaboration</h3>
<p className="text-zinc-400 leading-relaxed text-sm">Built-in commenting, version control, and role-based access for large teams.</p>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6" id="method">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">From chaos to clarity <br/> in three steps.</h2>
</div>
<div className="relative">
<div className="absolute left-[27px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500/50 via-zinc-800 to-transparent hidden md:block"></div>
<div className="grid gap-12">
<div className="flex flex-col md:flex-row gap-8 relative group">
<div className="md:w-14 md:h-14 w-12 h-12 rounded-full border border-zinc-800 bg-[#050505] flex items-center justify-center z-10 shrink-0 group-hover:border-indigo-500/50 transition-colors">
<span className="font-mono text-zinc-500 group-hover:text-indigo-400">01</span>
</div>
<div className="pt-2">
<h3 className="text-2xl font-medium mb-4 text-white">Connect your data sources</h3>
<p className="text-zinc-400 max-w-lg leading-relaxed">Simply paste your API keys or use our one-click OAuth integrations to connect your existing stack. We support over 50+ providers instantly.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8 relative group">
<div className="md:w-14 md:h-14 w-12 h-12 rounded-full border border-zinc-800 bg-[#050505] flex items-center justify-center z-10 shrink-0 group-hover:border-indigo-500/50 transition-colors">
<span className="font-mono text-zinc-500 group-hover:text-indigo-400">02</span>
</div>
<div className="pt-2">
<h3 className="text-2xl font-medium mb-4 text-white">Define your logic</h3>
<p className="text-zinc-400 max-w-lg leading-relaxed">Use our visual builder or code-first SDK to define how data should flow. Set up triggers, conditions, and actions without managing servers.</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8 relative group">
<div className="md:w-14 md:h-14 w-12 h-12 rounded-full border border-zinc-800 bg-[#050505] flex items-center justify-center z-10 shrink-0 group-hover:border-indigo-500/50 transition-colors">
<span className="font-mono text-zinc-500 group-hover:text-indigo-400">03</span>
</div>
<div className="pt-2">
<h3 className="text-2xl font-medium mb-4 text-white">Deploy and scale</h3>
<p className="text-zinc-400 max-w-lg leading-relaxed">Push to production with a single click. We handle the autoscaling, load balancing, and reliability guarantees. You just watch the metrics.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Simple, transparent pricing.</h2>
<p className="text-zinc-400 text-lg mb-8">No hidden fees. Cancel anytime.</p>

<div className="inline-flex items-center p-1 bg-zinc-900 rounded-full border border-zinc-800">
<button className="px-4 py-1.5 rounded-full bg-zinc-700 text-white text-xs font-medium shadow-sm transition-all">Monthly</button>
<button className="px-4 py-1.5 rounded-full text-zinc-400 text-xs font-medium hover:text-white transition-all">Yearly <span className="text-indigo-400 ml-1">-20%</span></button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

<div className="glass-panel p-8 rounded-2xl flex flex-col h-full">
<div className="mb-4">
<h3 className="text-lg font-medium">Starter</h3>
<p className="text-zinc-500 text-sm mt-1">Perfect for hobby projects.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">$0</span>
<span className="text-zinc-500 text-sm">/month</span>
</div>
<a className="block w-full py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium hover:bg-white/5 transition-colors mb-8" href="#">Get Started</a>
<ul className="space-y-3 text-sm text-zinc-400 mt-auto">
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> 3 Projects</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> 5,000 API calls</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Community Support</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col h-full relative border-indigo-500/30 overflow-hidden">
<div className="absolute top-0 right-0 p-3">
<div className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded">Popular</div>
</div>
<div className="absolute -inset-1 bg-indigo-500/10 blur-xl z-0 pointer-events-none"></div>
<div className="relative z-10">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Pro</h3>
<p className="text-zinc-500 text-sm mt-1">For growing startups.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">$49</span>
<span className="text-zinc-500 text-sm">/month</span>
</div>
<a className="block w-full py-2.5 rounded-lg bg-white text-black text-center text-sm font-medium hover:bg-zinc-200 transition-colors mb-8" href="#">Start Free Trial</a>
<ul className="space-y-3 text-sm text-zinc-300 mt-auto">
<li className="flex gap-2 items-center"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Unlimited Projects</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> 1M API calls</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Advanced Analytics</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Priority Support</li>
</ul>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col h-full">
<div className="mb-4">
<h3 className="text-lg font-medium">Enterprise</h3>
<p className="text-zinc-500 text-sm mt-1">For large scale needs.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight">Custom</span>
</div>
<a className="block w-full py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium hover:bg-white/5 transition-colors mb-8" href="#">Contact Sales</a>
<ul className="space-y-3 text-sm text-zinc-400 mt-auto">
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Unlimited Everything</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> Dedicated Success Manager</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> SLA Guarantee</li>
<li className="flex gap-2 items-center"><iconify-icon className="text-zinc-300" icon="solar:check-circle-linear"></iconify-icon> SSO &amp; Audit Logs</li>
</ul>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6" id="faq">
<h2 className="text-3xl font-medium tracking-tight mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group glass-panel rounded-lg open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer text-zinc-200 font-medium">
                        Can I use this for client projects?
                        <span className="transform group-open:rotate-180 transition-transform text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
                        Absolutely. Nexus is designed to be versatile enough for agency work, SaaS products, and internal tools. Our license covers commercial usage.
                    </div>
</details>
<details className="group glass-panel rounded-lg open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer text-zinc-200 font-medium">
                        Do you offer a refund policy?
                        <span className="transform group-open:rotate-180 transition-transform text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
                        Yes, if you're not satisfied within the first 14 days, we offer a full refund, no questions asked. We believe in the quality of our product.
                    </div>
</details>
<details className="group glass-panel rounded-lg open:bg-white/[0.04] transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer text-zinc-200 font-medium">
                        How secure is my data?
                        <span className="transform group-open:rotate-180 transition-transform text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">
                        Security is our priority. We are SOC2 compliant, encrypt data at rest and in transit, and perform regular third-party audits.
                    </div>
</details>
</div>
</section>

<section className="py-24 px-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20 pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Ready to build the future?</h2>
<p className="text-xl text-zinc-400 mb-10">Join 10,000+ developers shipping faster with Nexus.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors" href="#">Get Started Now</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 text-white rounded-full font-medium transition-colors" href="#">Contact Sales</a>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-black pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
<span className="font-medium tracking-tight">NEXUS</span>
</div>
<p className="text-xs text-zinc-500">Designed for the future of work.</p>
</div>
<div>
<h4 className="font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm">Social</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-white transition-colors" href="#">Discord</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
<p>© 2024 Nexus Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
