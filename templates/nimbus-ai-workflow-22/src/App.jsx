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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/30 rounded-full blur-3xl opacity-60 mix-blend-multiply filter animate-blob"></div>
<div className="absolute top-[10%] right-[-10%] w-[35%] h-[35%] bg-blue-100/40 rounded-full blur-3xl opacity-60 mix-blend-multiply filter animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-slate-200/40 rounded-full blur-3xl opacity-50 mix-blend-multiply filter animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100">
<iconify-icon className="text-indigo-600" icon="solar:cloud-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-800">Nimbus</span>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#use-cases">Use Cases</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center">
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#">
                        Book a Demo
                    </a>
</div>
</div>
</div>
</nav>
<main className="relative z-10 pt-24 md:pt-32">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50/50 border border-indigo-100 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-indigo-700 tracking-wide uppercase">v2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Orchestrate your <br/> <span className="text-gradient">AI workforce.</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                Nimbus turns scattered prompts into cohesive workflows. Connect your models, automate the mundane, and ship intelligence faster.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-0.5 text-sm" href="#">
                    Request Demo
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all text-sm flex items-center justify-center gap-2" href="#features">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    View Features
                </a>
</div>

<div className="mt-20 relative mx-auto max-w-5xl">
<div className="glass rounded-2xl p-2 md:p-4 border border-white/50 shadow-2xl shadow-indigo-500/10">
<div className="bg-white/40 rounded-xl overflow-hidden border border-white/60 aspect-[16/9] relative flex flex-col">

<div className="h-10 border-b border-slate-200/50 flex items-center px-4 gap-2 bg-white/30">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="ml-auto flex items-center gap-3">
<div className="w-16 h-2 rounded-full bg-slate-200/50"></div>
</div>
</div>

<div className="flex-1 flex">

<div className="w-48 border-r border-slate-200/50 hidden md:flex flex-col p-4 gap-3 bg-slate-50/30">
<div className="w-24 h-3 rounded bg-slate-200/50 mb-4"></div>
<div className="w-full h-8 rounded-lg bg-white/60 border border-slate-200/50"></div>
<div className="w-full h-8 rounded-lg bg-transparent border border-transparent"></div>
<div className="w-full h-8 rounded-lg bg-transparent border border-transparent"></div>
</div>

<div className="flex-1 p-6 md:p-10 relative overflow-hidden">

<div className="absolute top-10 left-10 md:left-20 w-48 p-4 bg-white rounded-xl shadow-lg border border-slate-100 z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="h-2 w-16 bg-slate-200 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-slate-100 rounded"></div>
<div className="h-1.5 w-2/3 bg-slate-100 rounded"></div>
</div>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
<path d="M 200 100 C 300 100, 300 200, 400 200" fill="none" stroke="#cbd5e1" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>

<div className="absolute top-40 left-40 md:left-80 w-48 p-4 bg-white rounded-xl shadow-lg border border-slate-100 z-10">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="h-2 w-20 bg-slate-200 rounded"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-slate-100 rounded"></div>
<div className="h-1.5 w-3/4 bg-slate-100 rounded"></div>
<div className="mt-3 inline-block px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded">Processing</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/40 bg-white/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-8">Trusted by teams who ship fast</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale mix-blend-multiply">

<div className="flex items-center gap-1.5 font-semibold text-xl tracking-tight text-slate-700"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> KUBE</div>
<div className="flex items-center gap-1.5 font-semibold text-xl tracking-tight text-slate-700"><iconify-icon icon="solar:atom-linear"></iconify-icon> Orbit</div>
<div className="flex items-center gap-1.5 font-semibold text-xl tracking-tight text-slate-700"><iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon> stack.io</div>
<div className="flex items-center gap-1.5 font-semibold text-xl tracking-tight text-slate-700"><iconify-icon icon="solar:infinity-linear"></iconify-icon> LOOP</div>
<div className="flex items-center gap-1.5 font-semibold text-xl tracking-tight text-slate-700"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Fortis</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="features">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Built for the future of work</h2>
<p className="text-lg text-slate-500 font-light">Everything you need to integrate LLMs into your daily operations without the spaghetti code.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Adaptive Context</h3>
<p className="text-sm text-slate-500 leading-relaxed">Nimbus remembers project history, so you never have to repeat the basics to your models.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Smart Chaining</h3>
<p className="text-sm text-slate-500 leading-relaxed">Automatically link outputs from one AI agent to the inputs of another for complex tasks.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Enterprise Secure</h3>
<p className="text-sm text-slate-500 leading-relaxed">SOC2 compliant infrastructure with PII redaction before data ever leaves your perimeter.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Model Agnostic</h3>
<p className="text-sm text-slate-500 leading-relaxed">Switch between GPT-4, Claude, and Llama 2 with a single dropdown. No code changes required.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Team Collaboration</h3>
<p className="text-sm text-slate-500 leading-relaxed">Share prompts, workflows, and results with your team in real-time workspaces.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Usage Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Track token usage, costs, and latency across all your deployed workflows.</p>
</div>
</div>
</section>

<section className="py-24 bg-white/40 border-y border-white/50 backdrop-blur-sm" id="use-cases">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Transforming workflows</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-6 rounded-2xl border-t-4 border-t-blue-400">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-slate-800">Support Triage</h3>
<iconify-icon className="text-blue-500" icon="solar:headset-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3">
<div className="bg-white/50 p-3 rounded-lg text-xs text-slate-500 border border-slate-100">
<span className="font-medium text-slate-700 block mb-1">Input</span>
                                Raw customer emails &amp; tickets
                            </div>
<div className="flex justify-center text-slate-400"><iconify-icon icon="solar:arrow-down-linear"></iconify-icon></div>
<div className="bg-blue-50/50 p-3 rounded-lg text-xs text-slate-600 border border-blue-100">
<span className="font-medium text-blue-700 block mb-1">Outcome</span>
                                Categorized, drafted replies, urgent flags raised.
                            </div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl border-t-4 border-t-indigo-400">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-slate-800">Content Engine</h3>
<iconify-icon className="text-indigo-500" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3">
<div className="bg-white/50 p-3 rounded-lg text-xs text-slate-500 border border-slate-100">
<span className="font-medium text-slate-700 block mb-1">Input</span>
                                Rough meeting notes &amp; key points
                            </div>
<div className="flex justify-center text-slate-400"><iconify-icon icon="solar:arrow-down-linear"></iconify-icon></div>
<div className="bg-indigo-50/50 p-3 rounded-lg text-xs text-slate-600 border border-indigo-100">
<span className="font-medium text-indigo-700 block mb-1">Outcome</span>
                                Blog post, LinkedIn thread, and newsletter draft.
                            </div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl border-t-4 border-t-emerald-400">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-slate-800">Data Extraction</h3>
<iconify-icon className="text-emerald-500" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div className="space-y-3">
<div className="bg-white/50 p-3 rounded-lg text-xs text-slate-500 border border-slate-100">
<span className="font-medium text-slate-700 block mb-1">Input</span>
                                PDF Invoices &amp; Receipts
                            </div>
<div className="flex justify-center text-slate-400"><iconify-icon icon="solar:arrow-down-linear"></iconify-icon></div>
<div className="bg-emerald-50/50 p-3 rounded-lg text-xs text-slate-600 border border-emerald-100">
<span className="font-medium text-emerald-700 block mb-1">Outcome</span>
                                JSON structure pushed directly to ERP.
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Nimbus cut our content production time by 60%. The workflow builder is intuitive enough for our non-technical writers to use daily."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">CMO at Vertex</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Finally, an AI tool that respects our security policies. The PII redaction feature alone is worth the subscription."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-semibold text-slate-900">David Chen</div>
<div className="text-xs text-slate-500">CTO at Kube</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl">
<div className="flex items-center gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"The model-agnostic approach is a game changer. We switched from GPT-3.5 to Claude for long-form reports instantly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-semibold text-slate-900">Elena Rodriguez</div>
<div className="text-xs text-slate-500">Product Lead at Orbit</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/30 backdrop-blur-sm border-t border-white/50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Simple pricing for scaling teams</h2>
<p className="mt-4 text-slate-500">Start for free, scale as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass p-8 rounded-2xl">
<h3 className="text-lg font-medium text-slate-900">Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-slate-900">$0</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="mt-4 text-sm text-slate-500">Perfect for individuals exploring AI.</p>
<a className="mt-8 block w-full py-2 px-4 rounded-lg bg-white border border-slate-200 text-slate-700 text-center text-sm font-medium hover:bg-slate-50 transition-colors" href="#">Get Started</a>
<ul className="mt-8 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> 500 workflow runs</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Access to GPT-3.5</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Single user</li>
</ul>
</div>

<div className="glass p-8 rounded-2xl border-2 border-indigo-100 relative shadow-xl shadow-indigo-100/50 transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Most Popular</div>
<h3 className="text-lg font-medium text-slate-900">Pro</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-slate-900">$29</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="mt-4 text-sm text-slate-500">For small teams building products.</p>
<a className="mt-8 block w-full py-2 px-4 rounded-lg bg-indigo-600 text-white text-center text-sm font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200" href="#">Start Free Trial</a>
<ul className="mt-8 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Unlimited runs</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> GPT-4, Claude 2, Llama</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Team workspace (up to 5)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-bold"></iconify-icon> Analytics dashboard</li>
</ul>
</div>

<div className="glass p-8 rounded-2xl">
<h3 className="text-lg font-medium text-slate-900">Enterprise</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-slate-900">Custom</span>
</div>
<p className="mt-4 text-sm text-slate-500">Security and control for scale.</p>
<a className="mt-8 block w-full py-2 px-4 rounded-lg bg-white border border-slate-200 text-slate-700 text-center text-sm font-medium hover:bg-slate-50 transition-colors" href="#">Contact Sales</a>
<ul className="mt-8 space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> SSO &amp; SAML</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Custom model fine-tuning</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Dedicated success manager</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> 99.9% Uptime SLA</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" id="faq">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">Frequently asked questions</h2>
<div className="space-y-4">

<details className="group glass rounded-lg open:bg-white transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-slate-800">Is my data used to train your models?</span>
<span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
                        No. Nimbus acts as an orchestration layer. Your data is encrypted in transit and rest, and we have zero-retention agreements with major model providers for Enterprise customers.
                    </div>
</details>

<details className="group glass rounded-lg open:bg-white transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-slate-800">Can I bring my own API keys?</span>
<span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
                        Yes! On the Pro plan and above, you can input your own OpenAI, Anthropic, or Hugging Face keys to pay providers directly and avoid our usage markups.
                    </div>
</details>

<details className="group glass rounded-lg open:bg-white transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-slate-800">Do you support on-premise deployment?</span>
<span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
                        Enterprise customers can deploy Nimbus via Docker containers within their own VPC for maximum security and compliance control.
                    </div>
</details>

<details className="group glass rounded-lg open:bg-white transition-all duration-300">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<span className="text-sm font-medium text-slate-800">How does the workflow chaining work?</span>
<span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
                        You use our visual node editor to connect outputs to inputs. We handle the data formatting, context window management, and error retries automatically.
                    </div>
</details>
</div>
</section>

<section className="py-20 px-4 text-center">
<div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-3xl border border-white/60 shadow-2xl shadow-indigo-500/10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Ready to ship intelligence?</h2>
<p className="text-slate-500 mb-8 max-w-lg mx-auto">Join 10,000+ developers building the next generation of AI-powered applications.</p>
<form className="max-w-sm mx-auto flex flex-col gap-3">
<input className="w-full px-4 py-3 rounded-lg bg-white/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder:text-slate-400 text-sm" placeholder="enter@email.com" type="email"/>
<button className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg text-sm" type="button">Start Free Trial</button>
</form>
<p className="mt-4 text-xs text-slate-400">No credit card required for 14-day trial.</p>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:cloud-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">Nimbus</span>
</div>
<p className="text-xs text-slate-400 leading-relaxed">The operating system for <br/>modern AI workflows.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Nimbus Inc. All rights reserved.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
