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



                            const toggle = document.getElementById('billing-toggle');
                            const dot = document.querySelector('.dot');
                            const prices = document.querySelectorAll('.price-val');
                            toggle.addEventListener('change', () => {
                                dot.style.transform = toggle.checked ? 'translateX(100%)' : 'translateX(0)';
                                prices.forEach(p => {
                                    const m = p.getAttribute('data-monthly');
                                    const y = p.getAttribute('data-yearly');
                                    p.innerText = toggle.checked ? y : m;
                                });
                            });
                        
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-md flex items-center justify-center text-white">
<iconify-icon height="16" icon="solar:infinity-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:text-indigo-400 transition-colors">AURA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full bg-white px-4 font-medium text-black transition-all hover:bg-zinc-200" href="#">
<span className="mr-2 text-xs">Book Demo</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-indigo-300 tracking-wide">AI AGENTS V2.0 LIVE</span>
</div>
<h1 className="text-4xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                Replace manual work<br/>with intelligent agents.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                We build custom AI infrastructures that automate your repetitive workflows, client interactions, and data processing with zero error rates.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto h-12 px-8 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                    Start Automating
                    <iconify-icon height="18" icon="solar:cpu-bolt-linear" width="18"></iconify-icon>
</button>
<button className="w-full md:w-auto h-12 px-8 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                    View Case Studies
                </button>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-20 blur-lg"></div>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">

<div className="w-full h-full p-8 flex gap-6">

<div className="hidden md:flex flex-col w-48 border-r border-white/5 gap-4">
<div className="h-8 w-8 bg-zinc-800 rounded-md"></div>
<div className="h-2 w-24 bg-zinc-900 rounded mt-4"></div>
<div className="h-2 w-20 bg-zinc-900 rounded"></div>
<div className="h-2 w-28 bg-zinc-900 rounded"></div>
<div className="mt-auto h-8 w-full bg-zinc-900/50 rounded border border-white/5"></div>
</div>

<div className="flex-1 flex flex-col gap-6">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="h-3 w-32 bg-zinc-800 rounded"></div>
<div className="flex gap-2">
<div className="h-6 w-6 rounded-full border border-white/10"></div>
<div className="h-6 w-20 rounded-full border border-white/10 bg-green-500/10"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 rounded-lg bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-between group-hover:border-indigo-500/30 transition-colors">
<iconify-icon className="text-indigo-400" icon="solar:chart-2-linear" width="20"></iconify-icon>
<div className="h-2 w-12 bg-zinc-800 rounded"></div>
</div>
<div className="h-24 rounded-lg bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-between group-hover:border-purple-500/30 transition-colors delay-75">
<iconify-icon className="text-purple-400" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
<div className="h-2 w-12 bg-zinc-800 rounded"></div>
</div>
<div className="h-24 rounded-lg bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-between group-hover:border-emerald-500/30 transition-colors delay-100">
<iconify-icon className="text-emerald-400" icon="solar:stopwatch-play-linear" width="20"></iconify-icon>
<div className="h-2 w-12 bg-zinc-800 rounded"></div>
</div>
</div>
<div className="flex-1 rounded-lg bg-zinc-900/30 border border-white/5 p-4 space-y-3 relative overflow-hidden">

<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-[10px]">AI</div>
<div className="h-2 w-3/4 bg-zinc-800 rounded animate-pulse"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-[10px]">AI</div>
<div className="h-2 w-1/2 bg-zinc-800 rounded animate-pulse delay-75"></div>
</div>

<svg className="absolute right-10 bottom-10 w-32 h-32 opacity-20" viewbox="0 0 100 100">
<path d="M10,50 Q50,0 90,50 T90,90" fill="none" stroke="white" stroke-dasharray="4"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-600 mb-8 uppercase tracking-widest">Trusted by next-gen companies</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-white tracking-tight"><iconify-icon icon="solar:planet-linear"></iconify-icon> ORBITAL</div>
<div className="flex items-center gap-2 font-semibold text-white tracking-tight"><iconify-icon icon="solar:atom-linear"></iconify-icon> NUCLEUS</div>
<div className="flex items-center gap-2 font-semibold text-white tracking-tight"><iconify-icon icon="solar:layers-linear"></iconify-icon> STACK</div>
<div className="flex items-center gap-2 font-semibold text-white tracking-tight"><iconify-icon icon="solar:code-square-linear"></iconify-icon> SYNTAX</div>
<div className="flex items-center gap-2 font-semibold text-white tracking-tight"><iconify-icon icon="solar:bolt-linear"></iconify-icon> VELOCITY</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Built for scale,<br/>driven by intelligence.</h2>
<p className="text-zinc-400 max-w-xl">Our suite of automation tools integrates seamlessly into your existing stack, reducing overhead and maximizing output.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
<iconify-icon className="text-indigo-400 mb-6" icon="solar:chat-round-dots-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">Conversational AI Agents</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">Deploy support agents that understand context, handle objections, and schedule meetings autonomously. Trained on your specific company knowledge base.</p>

<div className="mt-8 p-4 rounded-lg bg-black/40 border border-white/5 max-w-sm">
<div className="flex gap-3 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-2">
<div className="flex gap-2">
<div className="text-[10px] text-zinc-500 font-mono py-1">User:</div>
<div className="text-[10px] text-zinc-300 bg-zinc-800/50 px-2 py-1 rounded">How much does the enterprise plan cost?</div>
</div>
<div className="flex gap-2">
<div className="text-[10px] text-indigo-400 font-mono py-1">Bot:</div>
<div className="text-[10px] text-indigo-100 bg-indigo-900/20 px-2 py-1 rounded border border-indigo-500/20">Based on your usage volume, the enterprise tier...</div>
</div>
</div>
</div>
</div>

<div className="row-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors flex flex-col">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>
<iconify-icon className="text-purple-400 mb-6" icon="solar:tuning-square-2-linear" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">Workflow Orchestration</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-8">Connect disparate apps. Trigger complex sequences based on data inputs without lifting a finger.</p>

<div className="mt-auto space-y-2 relative z-0">
<div className="h-12 w-full rounded-lg border border-white/5 bg-zinc-900/50 flex items-center px-4 gap-3 transform translate-y-0 group-hover:translate-y-2 transition-transform duration-500">
<iconify-icon className="text-zinc-500" icon="solar:mailbox-linear"></iconify-icon>
<span className="text-xs text-zinc-500">New Email</span>
</div>
<div className="h-8 w-[2px] bg-white/10 mx-auto"></div>
<div className="h-12 w-full rounded-lg border border-white/10 bg-zinc-800/50 flex items-center px-4 gap-3 transform group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs text-white">Extract Data</span>
</div>
<div className="h-8 w-[2px] bg-white/10 mx-auto"></div>
<div className="h-12 w-full rounded-lg border border-white/5 bg-zinc-900/50 flex items-center px-4 gap-3 transform -translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
<iconify-icon className="text-zinc-500" icon="solar:database-linear"></iconify-icon>
<span className="text-xs text-zinc-500">Update CRM</span>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors">
<iconify-icon className="text-pink-400 mb-6" icon="solar:document-text-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Document Processing</h3>
<p className="text-sm text-zinc-400">OCR &amp; NLP to read invoices, contracts, and forms instantly.</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors">
<iconify-icon className="text-emerald-400 mb-6" icon="solar:graph-up-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Predictive Analytics</h3>
<p className="text-sm text-zinc-400">Forecast trends based on historical data patterns automatically.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 md:gap-32">
<div className="md:w-1/3 sticky top-32 h-fit">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">How we automate your business.</h2>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">We follow a rigorous three-step process to ensure seamless integration and maximum ROI.</p>
<a className="text-sm text-white border-b border-white pb-0.5 hover:text-zinc-300 hover:border-zinc-300 transition-colors" href="#">Book a consultation</a>
</div>
<div className="md:w-2/3 space-y-12">

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center text-xs font-mono group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">01</div>
<div className="h-full w-[1px] bg-white/10 mt-4"></div>
</div>
<div className="pb-12">
<h3 className="text-xl font-medium text-white mb-3">Audit &amp; Discovery</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-lg">We dive deep into your current operations to identify bottlenecks. We map out every manual touchpoint that consumes valuable time.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center text-xs font-mono group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">02</div>
<div className="h-full w-[1px] bg-white/10 mt-4"></div>
</div>
<div className="pb-12">
<h3 className="text-xl font-medium text-white mb-3">Architecture &amp; Development</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-lg">Our engineers build custom scripts and configure AI models. We use low-code solutions where possible for speed, and custom code where necessary for power.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-white/20 bg-zinc-900 text-white flex items-center justify-center text-xs font-mono group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">03</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-3">Deployment &amp; Optimization</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-lg">We launch the automation in a sandbox environment first. Once verified, we push to production and continuously monitor for improvements.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Simple, transparent pricing.</h2>
<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm text-zinc-400">Monthly</span>

<label className="flex items-center cursor-pointer relative" htmlFor="billing-toggle">
<input className="sr-only toggle-checkbox" id="billing-toggle" type="checkbox"/>
<div className="toggle-label w-11 h-6 bg-zinc-800 rounded-full border border-zinc-700 transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform translate-x-0"></div>

</label>
<span className="text-sm text-white font-medium">Yearly <span className="text-indigo-400 text-xs ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-4">
<h3 className="text-base font-medium text-white">Starter</h3>
<p className="text-xs text-zinc-500 mt-2">Perfect for small workflows.</p>
</div>
<div className="text-3xl font-medium text-white mb-6">$<span className="price-val" data-monthly="499" data-yearly="399">499</span><span className="text-sm text-zinc-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 2 Custom Workflows</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Weekly Maintenance</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Email Support</li>
</ul>
<button className="w-full py-2.5 rounded border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors">Get Started</button>
</div>

<div className="rounded-xl border border-indigo-500/50 bg-[#0A0A0A] p-8 flex flex-col relative shadow-[0_0_40px_rgba(99,102,241,0.1)]">
<div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<div className="mb-4">
<h3 className="text-base font-medium text-white">Growth</h3>
<p className="text-xs text-zinc-500 mt-2">For scaling agencies &amp; teams.</p>
</div>
<div className="text-3xl font-medium text-white mb-6">$<span className="price-val" data-monthly="999" data-yearly="799">999</span><span className="text-sm text-zinc-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 5 Custom Workflows</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> AI Chatbot Integration</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Dashboard Access</li>
</ul>
<button className="w-full py-2.5 rounded bg-white text-sm font-medium text-black hover:bg-zinc-200 transition-colors">Get Started</button>
</div>

<div className="rounded-xl border border-white/10 bg-[#0A0A0A] p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-4">
<h3 className="text-base font-medium text-white">Enterprise</h3>
<p className="text-xs text-zinc-500 mt-2">Full infrastructure overhaul.</p>
</div>
<div className="text-3xl font-medium text-white mb-6">Custom</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Unlimited Workflows</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Dedicated Engineer</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Custom Fine-tuned Models</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> SLA &amp; 24/7 Support</li>
</ul>
<button className="w-full py-2.5 rounded border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-[#0A0A0A]"></div>
<div className="relative z-10 max-w-xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Ready to automate?</h2>
<p className="text-zinc-400 mb-8 text-sm">Join the waitlist for our self-serve platform or book a demo today.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="enter your email..." type="email"/>
<button className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors" type="submit">
                    Join
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020202] py-12 px-6 text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-800 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:infinity-linear" width="12"></iconify-icon>
</div>
<span className="text-zinc-400 font-medium tracking-tight">AURA</span>
</div>
<div className="flex gap-6 text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
<div className="text-zinc-600 text-xs">
                © 2024 Aura Automation. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
