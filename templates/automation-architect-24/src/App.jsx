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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151b28',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

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
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-md flex items-center justify-center">
<span className="text-[10px] text-white font-bold">N</span>
</div>
                NODE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#agents">Agents</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#process">Methodology</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#contact">
                Book Audit
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/20 opacity-30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Building autonomous workflows
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Automate the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">impossible.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                I architect complex n8n agents that connect your apps, process data with AI, and run your business on autopilot.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2 group">
                    View Agents
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-lg border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 transition-all flex items-center gap-2">
<iconify-icon icon="lucide:copy" width="16"></iconify-icon>
                    Copy n8n Template
                </button>
</div>
</div>

<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute bottom-0 left-1/4 w-px h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
<div className="absolute bottom-0 right-1/4 w-px h-24 bg-gradient-to-t from-white/10 to-transparent"></div>
</header>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">100k+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Executions/Mo</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">50+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">APIs Integrated</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Uptime</div>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">99.9%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Accuracy</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="agents">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Deployed Agents</h2>
<p className="text-slate-400 text-sm max-w-md">Production-ready workflows handling critical business logic.</p>
</div>
<a className="hidden md:flex text-sm text-indigo-400 hover:text-indigo-300 items-center gap-1 transition-colors" href="#">
                    View all workflows <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-500" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Lead Enrichment Bot</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 h-10">Automatically enriches inbound leads using Clearbit and drafts personalized outreach with GPT-4.</p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400" title="HubSpot">H</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400" title="OpenAI">AI</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400" title="Slack">S</div>
</div>
<span className="text-xs text-slate-500">+3 integrations</span>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-500" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Invoice Recon Agent</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 h-10">Parses PDF invoices from emails, matches with Stripe transactions, and updates Xero accounting.</p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">G</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">Str</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">X</div>
</div>
<span className="text-xs text-slate-500">Finance Ops</span>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-500" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Social Content Matrix</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 h-10">Turns blog posts into Twitter threads and LinkedIn carousels, scheduling them for optimal engagement.</p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">Tw</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">In</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">No</div>
</div>
<span className="text-xs text-slate-500">Marketing</span>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-500" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:database" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Database Sync</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 h-10">Bi-directional sync between Airtable and Postgres with conflict resolution and error logging.</p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">Ai</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">Pg</div>
</div>
<span className="text-xs text-slate-500">Data Ops</span>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-slate-500" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Onboarding Sentinel</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 h-10">Provisions user accounts across 10+ SaaS tools when a new employee is added to HRIS.</p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">HR</div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-[#0A0A0A] flex items-center justify-center text-[10px] text-slate-400">G</div>
</div>
<span className="text-xs text-slate-500">IT Admin</span>
</div>
</div>

<div className="relative bg-gradient-to-br from-[#0A0A0A] to-slate-900 border border-white/10 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-slate-900/50 transition-colors">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white">Custom Architecture</h3>
<p className="text-xs text-slate-500 mt-2 max-w-[200px]">Need a bespoke solution? Let's design a workflow for your specific needs.</p>
</div>
</div>
</div>
</section>

<div className="max-w-6xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="py-24" id="stack">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                        Orchestrating logic <br/>
<span className="text-slate-500">node by node.</span>
</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                        My expertise goes beyond basic integrations. I implement robust error handling, retry mechanisms, and complex data transformations using Javascript/Typescript within n8n nodes.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[16px] text-indigo-400">
<iconify-icon icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Custom Webhooks</h4>
<p className="text-slate-500 text-xs mt-1">Real-time data ingestion from any source.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[16px] text-indigo-400">
<iconify-icon icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Javascript Functions</h4>
<p className="text-slate-500 text-xs mt-1">Advanced data parsing and logic beyond standard nodes.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[16px] text-indigo-400">
<iconify-icon icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">API Authentication</h4>
<p className="text-slate-500 text-xs mt-1">Handling OAuth2, API Keys, and complex headers.</p>
</div>
</li>
</ul>
</div>

<div className="relative">
<div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full opacity-20 pointer-events-none"></div>
<div className="bg-[#0f1115] border border-white/10 rounded-xl p-1 shadow-2xl relative overflow-hidden">

<div className="h-8 bg-[#1a1d24] border-b border-white/5 flex items-center px-3 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>

<div className="h-[300px] w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMzMzMiIG9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')] relative">

<div className="absolute top-1/2 left-10 -translate-y-1/2 w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center z-10 border border-slate-200">
<iconify-icon className="text-slate-800" icon="lucide:webhook" width="20"></iconify-icon>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
<path className="animate-pulse-slow" d="M 88 150 C 130 150, 130 150, 160 150" fill="none" stroke="#64748b" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>

<div className="absolute top-1/2 left-40 -translate-y-1/2 w-12 h-12 bg-slate-800 rounded-lg shadow-lg flex items-center justify-center z-10 border border-slate-700">
<iconify-icon className="text-orange-400" icon="lucide:code-2" width="20"></iconify-icon>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
<path d="M 208 150 C 240 150, 240 100, 270 100" fill="none" stroke="#64748b" strokeWidth="2"></path>
<path d="M 208 150 C 240 150, 240 200, 270 200" fill="none" stroke="#64748b" strokeWidth="2"></path>
</svg>

<div className="absolute top-[100px] left-[270px] -translate-y-1/2 w-12 h-12 bg-slate-800 rounded-lg shadow-lg flex items-center justify-center z-10 border border-slate-700">
<iconify-icon className="text-green-400" icon="lucide:bot" width="20"></iconify-icon>
</div>

<div className="absolute top-[200px] left-[270px] -translate-y-1/2 w-12 h-12 bg-slate-800 rounded-lg shadow-lg flex items-center justify-center z-10 border border-slate-700">
<iconify-icon className="text-blue-400" icon="lucide:mail" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Engagement Models</h2>
<p className="text-slate-400 text-sm max-w-lg mx-auto">Flexible ways to bring automation into your business.</p>
</div>
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col items-start hover:border-white/20 transition-colors">
<div className="mb-4 p-2 bg-slate-900 rounded-lg border border-slate-800">
<iconify-icon className="text-slate-300" icon="lucide:search" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Workflow Audit</h3>
<p className="text-slate-500 text-xs mb-8 leading-relaxed">I review your current processes and n8n setups to identify bottlenecks and optimization opportunities.</p>
<div className="mt-auto pt-6 border-t border-white/5 w-full">
<button className="text-sm text-white font-medium w-full text-left flex justify-between items-center group">
                        Book Audit 
                        <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
</button>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-indigo-500/30 flex flex-col items-start relative shadow-[0_0_40px_-10px_rgba(99,102,241,0.1)]">
<div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] text-indigo-300 font-medium">
                    Most Popular
                </div>
<div className="mb-4 p-2 bg-indigo-950/30 rounded-lg border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Custom Build</h3>
<p className="text-slate-500 text-xs mb-8 leading-relaxed">End-to-end development of complex agents. From requirement gathering to deployment and testing.</p>
<div className="mt-auto pt-6 border-t border-white/5 w-full">
<button className="text-sm text-white font-medium w-full text-left flex justify-between items-center group">
                        Start Project
                        <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
</button>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col items-start hover:border-white/20 transition-colors">
<div className="mb-4 p-2 bg-slate-900 rounded-lg border border-slate-800">
<iconify-icon className="text-slate-300" icon="lucide:infinity" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Monthly Retainer</h3>
<p className="text-slate-500 text-xs mb-8 leading-relaxed">Ongoing maintenance, updates, and new feature additions for your fleet of n8n agents.</p>
<div className="mt-auto pt-6 border-t border-white/5 w-full">
<button className="text-sm text-white font-medium w-full text-left flex justify-between items-center group">
                        Inquire
                        <span className="text-slate-500 group-hover:text-white transition-colors">→</span>
</button>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/10 bg-[#020202]" id="contact">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center">
<span className="text-[8px] text-white font-bold">N</span>
</div>
<span className="text-sm text-slate-400 font-medium">NODE</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
<p className="text-xs text-slate-600">
                © 2023 Automation Portfolio. Built with n8n &amp; Logic.
            </p>
</div>
</footer>

    </>
  );
}
