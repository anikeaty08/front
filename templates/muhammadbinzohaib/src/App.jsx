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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight text-gray-900">MBZ.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-gray-900 transition-colors" href="#architecture">Architecture</a>
<a className="hover:text-gray-900 transition-colors" href="#global">Global Reach</a>
</div>
<a className="bg-gray-900 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors shadow-sm" href="#contact">
                Strategy Call
            </a>
</div></nav>

<section className="relative pt-40 pb-24 px-6 overflow-hidden flex flex-col items-center text-center min-h-[90vh] justify-center">

<div className="absolute inset-0 z-0 bg-grid-pattern opacity-60"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-100/40 via-purple-50/20 to-transparent blur-3xl z-0 rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8 hover:border-gray-300 transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-widest">Muhammad Bin Zohaib • AI Systems Architect</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Building systems that <br className="hidden md:block"/>
<span className="gradient-text">work while you sleep.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
                I design AI-powered automation systems, data pipelines, and intelligent backend architectures that operate 24/7 so businesses scale without manual effort.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-gray-900/20 w-full sm:w-auto flex items-center justify-center gap-2" href="#contact">
                    Book a Strategy Call
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto" href="#architecture">
                    View Case Studies
                </a>
</div>
</div>
</section>

<section className="py-16 px-6 border-y border-gray-200/60 bg-white/40 backdrop-blur-sm relative z-10">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="flex flex-col items-center text-center group">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-2 group-hover:scale-105 transition-transform">50+</span>
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Clients</span>
</div>
<div className="flex flex-col items-center text-center group">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-2 group-hover:scale-105 transition-transform">15+</span>
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Industries</span>
</div>
<div className="flex flex-col items-center text-center group">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-2 group-hover:scale-105 transition-transform">100+</span>
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Systems Built</span>
</div>
<div className="flex flex-col items-center text-center group">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-2 group-hover:scale-105 transition-transform">9+</span>
<span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Countries</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto relative" id="expertise">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Infrastructure Pillars</h2>
<p className="text-base text-gray-500 leading-relaxed">I don't just connect Zapier endpoints. I architect resilient, autonomous systems capable of replacing entire operational bottlenecks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200/80 p-10 rounded-3xl hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group relative overflow-hidden">
<div className="absolute -right-8 -top-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
<iconify-icon className="text-9xl text-blue-900" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">AI Automation Infrastructure</h3>
<p className="text-sm text-gray-500 leading-relaxed">End-to-end operational pipelines connecting fractured SaaS tools into singular, autonomous workflows.</p>
</div>

<div className="bg-white border border-gray-200/80 p-10 rounded-3xl hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group relative overflow-hidden">
<div className="absolute -right-8 -top-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
<iconify-icon className="text-9xl text-blue-900" icon="solar:soundwave-circle-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" icon="solar:soundwave-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Voice &amp; Conversational AI</h3>
<p className="text-sm text-gray-500 leading-relaxed">Real-time telephonic and chat agents capable of qualification, scheduling, and dynamic reasoning.</p>
</div>

<div className="bg-white border border-gray-200/80 p-10 rounded-3xl hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group relative overflow-hidden">
<div className="absolute -right-8 -top-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
<iconify-icon className="text-9xl text-blue-900" icon="solar:database-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">Data &amp; ETL Engineering</h3>
<p className="text-sm text-gray-500 leading-relaxed">Scalable extraction, transformation, and loading systems that clean and move massive datasets reliably.</p>
</div>

<div className="bg-white border border-gray-200/80 p-10 rounded-3xl hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 group relative overflow-hidden">
<div className="absolute -right-8 -top-8 opacity-0 group-hover:opacity-5 transition-opacity duration-500">
<iconify-icon className="text-9xl text-blue-900" icon="solar:ghost-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-blue-600 transition-colors" icon="solar:ghost-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-3">AI Agent Architectures</h3>
<p className="text-sm text-gray-500 leading-relaxed">Multi-agent systems leveraging RAG to parse documentation, make decisions, and execute complex logic.</p>
</div>

<div className="md:col-span-2 lg:col-span-2 bg-gray-900 border border-gray-800 p-10 rounded-3xl shadow-xl transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
<iconify-icon className="text-[16rem] text-white" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon className="text-2xl text-white" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="relative z-10 max-w-lg">
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Backend &amp; API Orchestration</h3>
<p className="text-sm text-gray-400 leading-relaxed">Designing the unseen infrastructure. Custom API wrappers, secure webhook catchers, and resilient serverless functions that hold entire enterprise automation networks together.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white relative border-y border-gray-200/60" id="architecture">
<div className="max-w-7xl mx-auto">
<div className="mb-24 text-center max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">Architectural Impact</h2>
<p className="text-base text-gray-500 leading-relaxed">Deep dives into systems that transformed operational bottlenecks into invisible, self-sustaining engines.</p>
</div>
<div className="flex flex-col gap-16">

<div className="bg-[#fafafa] rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-gray-200/80 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center hover:bg-gray-50 transition-colors duration-500 group">
<div className="w-full lg:w-1/2 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:soundwave-circle-linear"></iconify-icon> Voice AI
                        </div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-8">Autonomous Voice Receptionist</h3>
<div className="space-y-8 w-full">
<div>
<h4 className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">The Problem</h4>
<p className="text-sm text-gray-600 leading-relaxed">A high-volume clinic was losing 30% of after-hours leads due to missed calls and delayed human follow-ups.</p>
</div>
<div>
<h4 className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">System Design</h4>
<p className="text-sm text-gray-600 leading-relaxed">Deployed a sub-500ms latency conversational AI agent integrated directly with SIP trunks. The agent performs natural voice triage, semantic slot filling, and executes direct EHR scheduling via API.</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm mt-4">
<h4 className="text-xs text-blue-600 uppercase tracking-widest font-medium mb-1">Business Impact</h4>
<p className="text-base font-medium text-gray-900">Zero missed inbound calls. 42% increase in after-hours appointment conversions.</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-[450px] bg-white rounded-3xl border border-gray-200 shadow-sm p-6 relative flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-px bg-gray-200 border-t border-dashed border-gray-400"></div>
<div className="relative z-10 w-full max-w-sm flex items-center justify-between">

<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 z-10 group-hover:border-blue-200 transition-colors">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">Inbound</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-20 h-20 bg-gray-900 rounded-[1.5rem] shadow-xl flex items-center justify-center text-white z-10 ring-4 ring-white group-hover:bg-blue-600 transition-colors duration-500">
<iconify-icon className="text-4xl" icon="solar:soundwave-circle-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-gray-900 uppercase tracking-wider">LLM Engine</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-500 z-10 group-hover:border-blue-200 transition-colors">
<iconify-icon className="text-2xl" icon="solar:calendar-minimalistic-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">EHR API</span>
</div>
</div>
</div>
</div>

<div className="bg-[#fafafa] rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-gray-200/80 flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center hover:bg-gray-50 transition-colors duration-500 group">
<div className="w-full lg:w-1/2 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 text-purple-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:database-linear"></iconify-icon> Enterprise ETL
                        </div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-8">Data Pipeline Orchestration</h3>
<div className="space-y-8 w-full">
<div>
<h4 className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">The Problem</h4>
<p className="text-sm text-gray-600 leading-relaxed">A logistics firm utilizing five disjointed systems, requiring 40 hours of manual data reconciliation weekly to generate financial reports.</p>
</div>
<div>
<h4 className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">System Design</h4>
<p className="text-sm text-gray-600 leading-relaxed">Architected a serverless ETL pipeline that automatically extracts disparate payloads, normalizes the schemas using an AI parser, and syncs directly to a master data warehouse.</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm mt-4">
<h4 className="text-xs text-purple-600 uppercase tracking-widest font-medium mb-1">Business Impact</h4>
<p className="text-base font-medium text-gray-900">100% elimination of manual data entry. Real-time dashboard latency reduced from 7 days to 5 minutes.</p>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-[450px] bg-white rounded-3xl border border-gray-200 shadow-sm p-6 relative flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

<div className="relative z-10 w-full h-full flex items-center justify-center">
<div className="absolute left-8 flex flex-col gap-6">
<div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center"><iconify-icon className="text-gray-400" icon="solar:document-text-linear"></iconify-icon></div>
<div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center"><iconify-icon className="text-gray-400" icon="solar:mail-linear"></iconify-icon></div>
<div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center"><iconify-icon className="text-gray-400" icon="solar:box-linear"></iconify-icon></div>
</div>

<div className="absolute left-20 w-24 h-32 border-r border-t border-b border-dashed border-gray-300 rounded-r-3xl"></div>
<div className="w-24 h-24 bg-gray-900 rounded-[1.5rem] shadow-xl flex items-center justify-center text-white z-10 group-hover:bg-purple-600 transition-colors duration-500 ml-16">
<iconify-icon className="text-4xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="w-24 h-px border-t border-dashed border-gray-300 ml-0 z-0"></div>
<div className="w-20 h-20 bg-white border border-gray-200 rounded-[1.5rem] shadow-sm flex items-center justify-center text-gray-500 z-10 ml-0">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fafafa] overflow-hidden relative border-b border-gray-200/60" id="global">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
<div className="w-full lg:w-1/2 max-w-xl">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 mb-6">
<iconify-icon className="text-xl" icon="solar:globus-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">Global Deployment</h2>
<p className="text-base text-gray-500 leading-relaxed mb-8">Designing and scaling infrastructure for enterprises and high-growth startups across borders, entirely agnostic of time zones. The systems run, so geography doesn't matter.</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">United States</span>
<span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">United Kingdom</span>
<span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">Canada</span>
<span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">Germany</span>
<span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">Australia</span>
<span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">UAE</span>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-end relative">
<div className="w-full max-w-lg aspect-square border border-gray-200/50 rounded-full relative flex items-center justify-center p-8 border-dashed">
<div className="absolute inset-4 border border-gray-200/50 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
<div className="absolute inset-12 border border-gray-200/50 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="w-32 h-32 bg-gray-900 rounded-full flex items-center justify-center shadow-2xl relative z-10">
<iconify-icon className="text-4xl text-white" icon="solar:radar-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="mb-16 text-center">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">Partner Endorsements</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-10 md:p-12 bg-white border border-gray-200/80 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-gray-300 mb-6" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-lg text-gray-700 leading-relaxed mb-10">"Muhammad doesn't just build automations; he architects full operational systems. He completely removed our core team from the manual lead qualification process. It was a paradigm shift."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium">JD</div>
<div>
<div className="text-sm font-medium text-gray-900">Jonathan D.</div>
<div className="text-xs text-gray-500">Founder, PropTech SaaS</div>
</div>
</div>
</div>

<div className="p-10 md:p-12 bg-white border border-gray-200/80 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-3xl text-gray-300 mb-6" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-lg text-gray-700 leading-relaxed mb-10">"We needed an architect, not a tinkerer. Muhammad delivered an enterprise-grade ETL pipeline that handles thousands of payloads daily with zero latency issues. Brilliant engineer."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium">MR</div>
<div>
<div className="text-sm font-medium text-gray-900">Marcus R.</div>
<div className="text-xs text-gray-500">VP of Operations, Global Logistics</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 mb-12" id="contact">
<div className="max-w-6xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-grid-pattern-dark opacity-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-blue-600/20 to-transparent blur-3xl rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<div className="w-16 h-16 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-8">
<iconify-icon className="text-2xl text-white" icon="solar:rocket-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">Ready to build a system that runs without you?</h2>
<p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">Stop managing tasks. Start managing systems. Let's architect the autonomous future of your operations.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-gray-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto">
                        Book a Strategy Call
                    </button>
<button className="bg-transparent border border-gray-700 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
                        Connect on LinkedIn
                    </button>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-gray-200 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<span className="text-xs font-medium text-gray-900">MBZ. AI Systems Architecture</span>
<span className="text-xs text-gray-500">© 2024 Muhammad Bin Zohaib. All rights reserved.</span>
</div>
</footer>

    </>
  );
}
