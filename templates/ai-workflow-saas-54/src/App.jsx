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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
                    F
                </div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:text-neutral-200 transition-colors">Flowdex</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#blog">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors hidden sm:block" href="#login">Dashboard</a>
<a className="text-xs font-medium hover:text-white transition-colors hidden sm:block" href="#contact">Contact</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#get-started">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="text-xs font-medium text-indigo-300">New: GPT-4o Integration Available</span>
<iconify-icon className="text-indigo-300" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
                Build AI Workflows <br className="hidden md:block"/>
<span className="text-neutral-500">Without Code</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Orchestrate agents, automate repetitive tasks, and integrate unstructured data into your business processes with our visual builder.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2 group">
                    Get Started Free
                    <iconify-icon className="group-hover:text-indigo-600 transition-colors" icon="lucide:zap" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
                    See Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto animate-float">
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden group">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-4">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<span className="text-xs text-neutral-500 font-mono">customer-support-agent.flow</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold">Active</span>
</div>
</div>

<div className="h-[450px] bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] relative overflow-hidden text-left">

<div className="absolute top-20 left-12 w-56 rounded-lg border border-white/10 bg-[#111] shadow-xl p-0">
<div className="flex items-center gap-2 p-3 border-b border-white/5 bg-white/5">
<div className="p-1 rounded bg-orange-500/10 text-orange-400"><iconify-icon icon="lucide:webhook" width="14"></iconify-icon></div>
<span className="text-xs font-medium text-white">Email Webhook</span>
</div>
<div className="p-3">
<div className="text-[10px] text-neutral-500 mb-1">Source</div>
<div className="text-xs text-neutral-300 bg-black/50 p-1.5 rounded border border-white/5">support@flowdex.ai</div>
</div>
<div className="absolute -right-1.5 top-8 w-3 h-3 bg-neutral-400 rounded-full border-2 border-[#111]"></div>
</div>

<div className="absolute top-32 left-80 w-56 rounded-lg border border-indigo-500/30 bg-[#111] shadow-xl shadow-indigo-500/5 p-0 z-10">
<div className="flex items-center gap-2 p-3 border-b border-white/5 bg-indigo-500/10">
<div className="p-1 rounded bg-indigo-500/20 text-indigo-400"><iconify-icon icon="lucide:sparkles" width="14"></iconify-icon></div>
<span className="text-xs font-medium text-white">Sentiment Analysis</span>
</div>
<div className="p-3">
<div className="text-[10px] text-neutral-500 mb-1">Model</div>
<div className="flex items-center justify-between text-xs text-neutral-300 bg-black/50 p-1.5 rounded border border-white/5">
<span>GPT-4 Turbo</span>
<iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
<div className="absolute -left-1.5 top-8 w-3 h-3 bg-indigo-500 rounded-full border-2 border-[#111]"></div>
<div className="absolute -right-1.5 top-8 w-3 h-3 bg-indigo-500 rounded-full border-2 border-[#111]"></div>
</div>

<div className="absolute top-24 right-48 w-48 rounded-lg border border-white/10 bg-[#111] shadow-xl p-0">
<div className="flex items-center gap-2 p-3 border-b border-white/5 bg-white/5">
<div className="p-1 rounded bg-yellow-500/10 text-yellow-400"><iconify-icon icon="lucide:git-branch" width="14"></iconify-icon></div>
<span className="text-xs font-medium text-white">Router</span>
</div>
<div className="p-3 space-y-2">
<div className="flex items-center justify-between text-[10px] text-neutral-400">
<span>If Negative</span>
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
</div>
<div className="flex items-center justify-between text-[10px] text-neutral-400">
<span>If Positive</span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
</div>
<div className="absolute -left-1.5 top-8 w-3 h-3 bg-neutral-400 rounded-full border-2 border-[#111]"></div>
</div>

<svg className="absolute inset-0 pointer-events-none w-full h-full" style={{zIndex: '0'}}>

<path className="opacity-50" d="M 280 155 C 300 155, 300 165, 320 165" fill="none" stroke="#525252" strokeWidth="2"></path>

<path d="M 545 165 C 570 165, 570 145, 600 145" fill="none" stroke="#6366f1" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-4 right-4 bg-[#1A1A1A] border border-white/10 rounded-lg p-2 flex gap-2">
<div className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 cursor-pointer text-neutral-400"><iconify-icon icon="lucide:plus"></iconify-icon></div>
<div className="w-8 h-8 flex items-center justify-center rounded hover:bg-white/5 cursor-pointer text-neutral-400"><iconify-icon icon="lucide:minus"></iconify-icon></div>
</div>
</div>
</div>
</div>

<div className="mt-20">
<p className="text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Powering 10,000+ Workflows at innovative companies</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale">

<h3 className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-2"><iconify-icon icon="lucide:aperture"></iconify-icon> LENS</h3>
<h3 className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-2"><iconify-icon icon="lucide:framer"></iconify-icon> KINETIC</h3>
<h3 className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-2"><iconify-icon icon="lucide:layers"></iconify-icon> STACK</h3>
<h3 className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-2"><iconify-icon icon="lucide:boxes"></iconify-icon> CUBE</h3>
<h3 className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-2"><iconify-icon icon="lucide:command"></iconify-icon> CMD+J</h3>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-neutral-900/20 border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Complete Toolkit for AI Automation</h2>
<p className="text-neutral-400 text-lg max-w-2xl mx-auto">Everything you need to build, deploy, and scale intelligent workflows.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 border border-indigo-500/20">
<iconify-icon icon="lucide:workflow" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Visual Workflow Builder</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Drag-and-drop interface to design complex logic flows without writing a single line of code.</p>
</div>

<div className="glass-card p-6 rounded-xl group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 border border-purple-500/20">
<iconify-icon icon="lucide:brain-circuit" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Multi-LLM Support</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Switch between GPT-4, Claude 3, and Gemini Pro instantly to optimize for cost or performance.</p>
</div>

<div className="glass-card p-6 rounded-xl group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="lucide:bot" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Autonomous Agents</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Deploy agents that can browse the web, use tools, and make decisions independently.</p>
</div>

<div className="glass-card p-6 rounded-xl group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 border border-blue-500/20">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Data</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Process streaming data from webhooks, Kafka, or databases with sub-millisecond latency.</p>
</div>

<div className="glass-card p-6 rounded-xl group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
<iconify-icon icon="lucide:plug" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Custom API Integration</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Connect to any internal or external API. Authentication and rate limiting handled automatically.</p>
</div>

<div className="glass-card p-6 rounded-xl group">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 text-pink-400 border border-pink-500/20">
<iconify-icon icon="lucide:rocket" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">One-click Deployment</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Push to production instantly. We handle the infrastructure, scaling, and monitoring.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-8">From idea to automation in minutes</h2>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-semibold text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">1</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-indigo-400 transition-colors">Connect Flows</h4>
<p className="text-sm text-neutral-400">Drag triggers and actions onto the canvas. Integrate with Slack, Gmail, or your database.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-semibold text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">2</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-indigo-400 transition-colors">Configure AI</h4>
<p className="text-sm text-neutral-400">Write plain English prompts. Select your model temperature and system instructions.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-semibold text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-colors">3</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-indigo-400 transition-colors">Deploy &amp; Monitor</h4>
<p className="text-sm text-neutral-400">Go live with a click. Watch executions in real-time and debug with full logs.</p>
</div>
</div>
</div>
</div>

<div className="relative aspect-video rounded-xl bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
<iconify-icon className="text-white ml-1" icon="lucide:play" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-indigo-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12 text-center">Built for every team</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-colors">
<iconify-icon className="text-blue-400 mb-4" icon="lucide:mail" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Email Automation</h3>
<p className="text-xs text-neutral-400">Categorize incoming emails and draft personalized responses automatically.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-colors">
<iconify-icon className="text-purple-400 mb-4" icon="lucide:database" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Data Processing</h3>
<p className="text-xs text-neutral-400">Extract structured data from PDFs, invoices, and forms into your SQL database.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-colors">
<iconify-icon className="text-emerald-400 mb-4" icon="lucide:headphones" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Customer Support</h3>
<p className="text-xs text-neutral-400">Build intelligent chatbots that can resolve tickets and query knowledge bases.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent hover:border-white/10 transition-colors">
<iconify-icon className="text-rose-400 mb-4" icon="lucide:pen-tool" width="24"></iconify-icon>
<h3 className="text-white font-medium mb-2">Content Gen</h3>
<p className="text-xs text-neutral-400">Generate SEO-optimized blog posts and social media assets from raw notes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="pricing">
<div className="absolute inset-0 bg-grid opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Simple, transparent pricing</h2>

<div className="flex items-center justify-center mt-8 gap-3">
<span className="text-sm text-neutral-400">Monthly</span>
<label className="flex items-center cursor-pointer relative">
<input className="sr-only toggle-checkbox" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-800 rounded-full border border-neutral-700 toggle-label transition-colors"></div>
<div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-out transform toggle-checkbox:checked:translate-x-full"></div>
</label>
<span className="text-sm text-white">Yearly <span className="text-indigo-400 text-xs ml-1 font-medium">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-4xl font-semibold text-white mb-2">$0<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<p className="text-sm text-neutral-400 mb-8 h-10">Perfect for side projects and prototypes.</p>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors mb-8 font-medium">Get Started</button>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 5 Active Workflows</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> 1,000 Executions/mo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Community Support</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/50 bg-neutral-900/60 backdrop-blur-sm relative shadow-2xl shadow-indigo-500/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<div className="text-4xl font-semibold text-white mb-2">$49<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<p className="text-sm text-neutral-400 mb-8 h-10">For scaling teams and production apps.</p>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors mb-8 shadow-lg shadow-indigo-600/20">Start Free Trial</button>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Unlimited Workflows</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> 50,000 Executions/mo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Priority Support</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> API Access</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm hover:border-white/10 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="text-4xl font-semibold text-white mb-2">Custom</div>
<p className="text-sm text-neutral-400 mb-8 h-10">For large organizations with security needs.</p>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white text-sm hover:bg-white/5 transition-colors mb-8 font-medium">Contact Sales</button>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Unlimited Everything</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> SSO &amp; SAML</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Dedicated Success Manager</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Private Cloud Deployment</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-16 text-center">Loved by developers</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/30">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"Flowdex has completely transformed how we handle customer data. What used to take 3 engineers a week now happens automatically."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">CTO at TechFlow</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/30">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"The visual builder is intuitive, but the real power is in the API integrations. It plays nicely with our entire stack."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div>
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-xs text-neutral-500">Lead Engineer</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/30">
<div className="flex items-center gap-1 mb-4 text-yellow-500">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"We switched from Zapier because we needed more control over the LLM prompts. Flowdex gave us exactly that."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div>
<div className="text-sm font-medium text-white">Emily Ross</div>
<div className="text-xs text-neutral-500">Product Manager</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/5 text-center">
<div>
<div className="text-3xl font-bold text-white mb-1">99.8%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Uptime</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">500+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Integrations</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">10M+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Executions</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-600/5 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to automate the future?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">Join thousands of developers building the next generation of AI-native applications.</p>
<form className="max-w-md mx-auto mb-6 flex gap-2">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Enter your email" required="" type="email"/>
<button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-500 transition-colors whitespace-nowrap" type="submit">Sign Up Free</button>
</form>
<p className="text-xs text-neutral-500">No credit card required. Cancel anytime.</p>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">F</div>
<span className="text-sm font-semibold tracking-tight text-white">Flowdex</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs mb-6">Empowering teams to build complex AI workflows with simple visual tools.</p>
<form className="space-y-2 max-w-xs">
<label className="text-xs font-semibold text-white uppercase tracking-wider">Subscribe to newsletter</label>
<div className="flex gap-2">
<input className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-neutral-500" placeholder="Email address" type="email"/>
<button className="bg-white text-black px-3 py-2 rounded text-xs font-medium hover:bg-neutral-200">Join</button>
</div>
</form>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Ref</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Social</h4>
<div className="flex gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 Flowdex Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-neutral-500">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
