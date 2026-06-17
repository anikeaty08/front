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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0B0C15]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300">
<i className="w-4 h-4 fill-white" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold tracking-tight text-white">WorkFlowLogic</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#workflow">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all group" href="#contact">
                Book Audit
                <i className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-slate-400 group-hover:text-white" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
<div className="absolute inset-0 bg-glow -z-10"></div>
<div className="absolute inset-0 grid-bg -z-10"></div>

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/30 border border-blue-500/20 text-blue-300 text-xs font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Accepting new clients for Q1 2025
            </div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
                Your Business, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">Running on Autopilot.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                We replace manual admin work with intelligent, automated systems. Scale your operations without hiring more staff.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2" href="#contact">
                    Start Automating
                    <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#examples">
                    View Examples
                </a>
</div>

<div className="mt-20 pt-10 border-t border-white/5">
<p className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-6">Powering next-gen companies</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">

<span className="text-lg font-bold text-white tracking-tighter">acme.ai</span>
<span className="text-lg font-bold text-white tracking-tighter">orbiter</span>
<span className="text-lg font-bold text-white tracking-tighter">NEXUS</span>
<span className="text-lg font-bold text-white tracking-tighter">focal point</span>
<span className="text-lg font-bold text-white tracking-tighter">vertex</span>
</div>
</div>
</div>
</header>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Intelligent Workflows</h2>
<p className="text-slate-400 text-lg">We don't just connect apps. We build logic that handles complex business scenarios automatically.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#12131F] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-all"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<i className="w-6 h-6" data-lucide="git-merge"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">End-to-End CRM Automation</h3>
<p className="text-slate-400 leading-relaxed max-w-lg">From the moment a lead clicks an ad, to the contract signing, to the onboarding sequence. We automate the entire lifecycle so you only talk to qualified prospects.</p>

<div className="mt-8 bg-[#0B0C15] border border-white/5 rounded-lg p-4 max-w-md">
<div className="flex items-center gap-3 text-xs mb-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-slate-300">New Lead Detected</span>
<span className="ml-auto text-slate-600">Just now</span>
</div>
<div className="space-y-2">
<div className="h-2 bg-slate-800 rounded w-3/4"></div>
<div className="h-2 bg-slate-800 rounded w-1/2"></div>
</div>
</div>
</div>
</div>

<div className="bg-[#12131F] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all group relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all"></div>
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<i className="w-6 h-6" data-lucide="message-square"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI Response Bots</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Instantly reply to inquiries with AI that sounds exactly like you. 24/7 coverage.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-slate-400">GPT-4o</span>
<span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-slate-400">Claude</span>
</div>
</div>

<div className="bg-[#12131F] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all group">
<div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 mb-6 border border-violet-500/20">
<i className="w-6 h-6" data-lucide="receipt"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Finance Ops</h3>
<p className="text-slate-400 text-sm leading-relaxed">Auto-generate invoices, chase payments, and reconcile Xero/Quickbooks without clicking a button.</p>
</div>

<div className="md:col-span-2 bg-[#12131F] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all group flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-12 h-12 bg-rose-500/10 rounded-xl flex items-center justify-center text-rose-400 mb-6 border border-rose-500/20">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Data Synchronization</h3>
<p className="text-slate-400 text-sm leading-relaxed">Keep your Project Management, CRM, and Slack in perfect harmony. No more copy-pasting data between tabs.</p>
</div>
<div className="w-full md:w-1/2 bg-[#0B0C15] border border-white/5 rounded-xl p-4 flex items-center justify-center gap-4 opacity-70">
<div className="w-10 h-10 rounded bg-slate-800/50 flex items-center justify-center"><i className="w-5 h-5 text-green-500" data-lucide="table-2"></i></div>
<i className="w-4 h-4 text-slate-600" data-lucide="arrow-right-left"></i>
<div className="w-10 h-10 rounded bg-slate-800/50 flex items-center justify-center"><i className="w-5 h-5 text-blue-500" data-lucide="trello"></i></div>
<i className="w-4 h-4 text-slate-600" data-lucide="arrow-right-left"></i>
<div className="w-10 h-10 rounded bg-slate-800/50 flex items-center justify-center"><i className="w-5 h-5 text-white" data-lucide="slack"></i></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0C15] relative overflow-hidden border-t border-white/5" id="workflow">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B0C15] to-[#0B0C15]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 border border-indigo-500/20">
                        PROCESS
                    </div>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">Visualise. Build. Automate.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        We map out your chaotic processes and turn them into streamlined, linear digital workflows. 
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 mt-1">1</div>
<div>
<h4 className="text-white font-medium mb-1">Process Audit</h4>
<p className="text-slate-500 text-sm">We deep dive into your operations to find the bottlenecks.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 mt-1">2</div>
<div>
<h4 className="text-white font-medium mb-1">Custom Development</h4>
<p className="text-slate-500 text-sm">We code and configure the automation using industry-leading tools.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-violet-500/10 text-violet-400 flex items-center justify-center border border-violet-500/20 mt-1">3</div>
<div>
<h4 className="text-white font-medium mb-1">Handover &amp; Training</h4>
<p className="text-slate-500 text-sm">You get the keys to a system that runs itself.</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full">
<div className="relative rounded-2xl bg-[#12131F] border border-white/10 p-2 shadow-2xl shadow-blue-900/20">

<div className="h-10 bg-[#0B0C15] rounded-t-xl flex items-center px-4 gap-2 border-b border-white/5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
<div className="ml-4 text-xs text-slate-600 font-mono">workflow_engine.js</div>
</div>

<div className="p-6 bg-[#0E0F1A] rounded-b-xl min-h-[300px] flex flex-col justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative z-10 flex flex-col items-center gap-2">

<div className="bg-[#1C1E2D] border border-blue-500/30 text-white px-4 py-3 rounded-lg flex items-center gap-3 shadow-[0_0_15px_rgba(59,130,246,0.2)] w-64">
<div className="p-1.5 bg-blue-500/20 rounded text-blue-400"><i className="w-4 h-4" data-lucide="mail"></i></div>
<span className="text-sm font-medium">Trigger: Email Received</span>
</div>

<div className="h-8 w-px bg-slate-700"></div>

<div className="bg-[#1C1E2D] border border-purple-500/30 text-white px-4 py-3 rounded-lg flex items-center gap-3 shadow-[0_0_15px_rgba(168,85,247,0.2)] w-64">
<div className="p-1.5 bg-purple-500/20 rounded text-purple-400"><i className="w-4 h-4" data-lucide="brain-circuit"></i></div>
<span className="text-sm font-medium">AI: Analyze Sentiment</span>
</div>

<div className="h-8 w-px bg-slate-700 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-ping"></div>
</div>

<div className="flex gap-4">
<div className="bg-[#1C1E2D] border border-white/10 text-slate-300 px-4 py-3 rounded-lg w-32 text-xs flex flex-col items-center text-center opacity-50">
                                        Negative
                                        <span className="mt-1 text-[10px] text-slate-500">Alert Support</span>
</div>
<div className="bg-[#1C1E2D] border border-green-500/30 text-white px-4 py-3 rounded-lg w-32 text-xs flex flex-col items-center text-center shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                        Positive
                                        <span className="mt-1 text-[10px] text-green-400">Auto-Reply</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Investment Plans</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">Scalable solutions for businesses at every stage. Transparent pricing, no hidden fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#12131F] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Process Audit</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$499</span>
<span className="text-slate-500 text-sm">/one-time</span>
</div>
<p className="text-slate-400 text-sm mt-4 leading-relaxed">Perfect for identifying bottlenecks before committing to a full build.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
                            Full Workflow Mapping
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
                            Tech Stack Analysis
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
                            ROI Calculation Report
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all text-center" href="#contact">Get Audit</a>
</div>

<div className="bg-[#12131F] border border-blue-500/30 rounded-2xl p-8 relative flex flex-col shadow-[0_0_40px_rgba(59,130,246,0.1)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">Most Popular</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Custom Build</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">Custom</span>
</div>
<p className="text-slate-400 text-sm mt-4 leading-relaxed">End-to-end development of your automation infrastructure.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-400" data-lucide="check-circle-2"></i>
                            Dedicated Solutions Architect
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-400" data-lucide="check-circle-2"></i>
                            Unlimited Zapier/Make Integration
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-400" data-lucide="check-circle-2"></i>
                            Custom API Connectors
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<i className="w-4 h-4 text-blue-400" data-lucide="check-circle-2"></i>
                            30 Days Post-Launch Support
                        </li>
</ul>
<a className="w-full py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-all text-center" href="#contact">Book Discovery</a>
</div>

<div className="bg-[#12131F] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Retainer</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$1,500</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<p className="text-slate-400 text-sm mt-4 leading-relaxed">Ongoing maintenance and optimization for scaling companies.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
                            24/7 Error Monitoring
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
                            Priority Slack Support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-4 h-4 text-blue-500" data-lucide="check-circle-2"></i>
                            Monthly Optimization Sprints
                        </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all text-center" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-600/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">Ready to reclaim your time?</h2>
<p className="text-slate-400 text-lg mb-10 font-light">
                We offer a free 30-minute discovery call to map out your potential savings. No sales pressure, just logic.
            </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Enter your work email" type="email"/>
</div>
<button className="w-full bg-white text-black font-semibold rounded-xl px-4 py-3.5 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" type="submit">
                    Book Discovery Call
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="text-center text-xs text-slate-600 mt-4">Limited spots available for Jan 2025.</p>
</form>
</div>
</section>
<footer className="border-t border-white/5 py-12 bg-[#0B0C15]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-white">
<i className="w-3 h-3 fill-white" data-lucide="zap"></i>
</div>
<span className="text-sm font-semibold text-white">WorkFlowLogic</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<div className="text-xs text-slate-600 mt-4 md:mt-0">
                © 2025 WorkFlowLogic. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
