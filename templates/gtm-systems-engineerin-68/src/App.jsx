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
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
400: '#818cf8',
500: '#6366f1',
600: '#4f46e5',
900: '#312e81',
},
n8n: {
500: '#ff6b6b',
900: '#4d1b1b'
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'flow': 'flow 3s linear infinite',
'flow-reverse': 'flow-reverse 3s linear infinite',
'float': 'float 6s ease-in-out infinite',
'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
},
keyframes: {
flow: {
'0%': { strokeDashoffset: '100' },
'100%': { strokeDashoffset: '0' },
},
'flow-reverse': {
'0%': { strokeDashoffset: '0' },
'100%': { strokeDashoffset: '100' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-500/10 border border-brand-500/20 rounded-lg flex items-center justify-center text-brand-500">
<iconify-icon icon="lucide:workflow" width="18"></iconify-icon>
</div>
<span className="text-white font-display font-medium tracking-tight text-lg">GrowthKinetics</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#problem">Problem</a>
<a className="hover:text-white transition-colors" href="#solution">Infrastructure</a>
<a className="hover:text-white transition-colors" href="#stack">Stack</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Login</a>
<a className="px-4 py-2 bg-white text-zinc-950 text-sm font-medium rounded hover:bg-zinc-200 transition-colors" href="#contact">
                    Engineer My GTM
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-brand-500/20 blur-[120px] rounded-full pointer-events-none opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-mono text-zinc-300">PIPELINE OPERATIONAL v2.4</span>
</div>

<h1 className="text-5xl lg:text-7xl font-display font-medium text-white tracking-tight leading-[1.1] mb-6">
                Your GTM Should Run <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">Like Software.</span>
</h1>
<p className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Automated workflows that connect signals, enrichment, outreach, and pipeline — end to end. No fluff. Just infrastructure.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded transition-all shadow-[0_0_20px_-5px_rgba(99,102,241,0.3)] flex items-center justify-center gap-2 group" href="#contact">
<span>Engineer My GTM</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 text-white font-medium rounded transition-all flex items-center justify-center gap-2" href="#process">
<iconify-icon icon="lucide:bar-chart-2"></iconify-icon>
<span>See Performance</span>
</a>
</div>

<div className="max-w-4xl mx-auto border border-white/10 bg-zinc-900/40 backdrop-blur rounded-xl p-6 lg:p-10 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
<div className="flex flex-col lg:flex-row items-start justify-between gap-6 relative z-10">

<div className="flex flex-col items-center gap-3 w-full lg:w-auto relative group flex-shrink-0">
<div className="w-14 h-14 rounded-xl border border-zinc-700 bg-zinc-950 flex items-center justify-center text-zinc-300 shadow-lg relative z-10">
<iconify-icon icon="lucide:radar" width="28"></iconify-icon>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-zinc-950"></div>
</div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-2">Signal Detected</span>
<div className="absolute top-full mt-2 w-32 bg-zinc-800 border border-white/10 rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-zinc-400 text-center pointer-events-none z-20">
                            "New Funding Round"
                        </div>
</div>

<div className="h-8 w-[1px] lg:w-full lg:h-[1px] bg-zinc-800 relative flex-1 mt-7 lg:mt-7">
<div className="absolute inset-0 bg-brand-500/50 animate-pulse lg:w-1/3 h-full lg:h-full lg:animate-[flow_2s_linear_infinite]" style={{width: '2px', lg: 'width: 30%'}}></div>
</div>

<div className="flex flex-col items-center gap-3 w-full lg:w-auto relative group flex-shrink-0">
<div className="w-14 h-14 rounded-xl border border-zinc-700 bg-zinc-950 flex items-center justify-center text-zinc-300 shadow-lg relative z-10">
<iconify-icon icon="lucide:fingerprint" width="28"></iconify-icon>
</div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-2">Enriched Profile</span>
<div className="absolute top-full mt-2 w-32 bg-zinc-800 border border-white/10 rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-zinc-400 text-center pointer-events-none z-20">
                            Revenue: $10M+<br/>Tech: Stripe
                        </div>
</div>

<div className="h-8 w-[1px] lg:w-full lg:h-[1px] bg-zinc-800 relative flex-1 mt-7 lg:mt-7">
<div className="absolute inset-0 bg-brand-500/50 animate-pulse lg:w-1/3 h-full lg:h-full lg:animate-[flow_2s_linear_infinite_0.5s]" style={{width: '2px', lg: 'width: 30%'}}></div>
</div>

<div className="flex flex-col items-center gap-3 w-full lg:w-auto relative group flex-shrink-0">
<div className="w-14 h-14 rounded-xl border border-zinc-700 bg-zinc-950 flex items-center justify-center text-zinc-300 shadow-lg relative z-10">
<iconify-icon icon="lucide:circuit-board" width="28"></iconify-icon>
</div>
<div className="flex flex-col items-center">
<span className="text-xs font-mono text-zinc-300 uppercase tracking-widest mt-2">Decision Engine</span>
<span className="text-[10px] text-zinc-500 text-center mt-1 leading-tight max-w-[140px] font-medium">ICP scoring · intent weighting · territory routing · channel selection</span>
</div>
</div>

<div className="h-8 w-[1px] lg:w-full lg:h-[1px] bg-zinc-800 relative flex-1 mt-7 lg:mt-7">
<div className="absolute inset-0 bg-brand-500/50 animate-pulse lg:w-1/3 h-full lg:h-full lg:animate-[flow_2s_linear_infinite_1s]" style={{width: '2px', lg: 'width: 30%'}}></div>
</div>

<div className="flex flex-col items-center gap-3 w-full lg:w-auto relative flex-shrink-0">
<div className="w-14 h-14 rounded-xl border border-brand-500/50 bg-brand-500/10 flex items-center justify-center text-brand-400 shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)] relative z-10">
<iconify-icon icon="lucide:zap" width="28"></iconify-icon>
</div>
<div className="flex flex-col items-center">
<span className="text-xs font-mono text-brand-400 uppercase tracking-widest mt-2">Channel Execution</span>
<span className="text-[10px] text-brand-500/60 text-center mt-1 leading-tight max-w-[140px]">Email, LinkedIn, CRM sync executed instantly.</span>
</div>
</div>
</div>

<div className="mt-12 mx-auto max-w-sm">
<div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 flex items-center gap-4 animate-float">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="text-white text-sm font-medium">Meeting Booked</span>
<span className="text-xs text-zinc-500">Just now</span>
</div>
<div className="text-xs text-zinc-400 flex items-center gap-1">
<iconify-icon icon="lucide:user" width="12"></iconify-icon>
<span>CTO at FinTech Corp</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-display font-medium text-white tracking-tight mb-4">Modern GTM Is Operational Chaos</h2>
<p className="text-zinc-400 max-w-xl">Disconnected tools. Drift. Deliverability issues. Most outbound fails because it relies on manual effort instead of data architecture.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-red-400 mb-6 text-3xl" icon="lucide:link-2-off"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Data Silos</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Data is trapped between Clay, Apollo, Smartlead, and CRM. Context is lost at every handoff, destroying personalization and conversion.
                    </p>
</div>

<div className="p-8 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-orange-400 mb-6 text-3xl" icon="lucide:bar-chart-2"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">The "Black Box" Dip</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Reply rates drop. You don't know if it's the copy, the offer, or the domain reputation. Testing is based on feelings, not logs.
                    </p>
</div>

<div className="p-8 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-zinc-400 mb-6 text-3xl" icon="lucide:refresh-cw"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">No Iteration Cycle</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        What worked last month? Why did we change it? Without structured versioning of your campaigns, you're always starting from zero.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-t border-white/5" id="solution">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 mb-6">
<span className="text-xs font-mono text-brand-400 uppercase">Architecture First</span>
</div>
<h2 className="text-3xl lg:text-4xl font-display font-medium text-white tracking-tight mb-6">
                        We Build Revenue Infrastructure
                    </h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        We don't just write emails. We engineer the backend logic that powers scalable outbound. Think of us as DevOps for your sales pipeline.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1 flex-shrink-0" icon="lucide:check-circle" width="20"></iconify-icon>
<div>
<strong className="text-white font-medium block text-sm">Signal-Based Targeting</strong>
<span className="text-zinc-500 text-sm">Ingest intent data (hiring, funding, tech install) to trigger workflows automatically.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1 flex-shrink-0" icon="lucide:check-circle" width="20"></iconify-icon>
<div>
<strong className="text-white font-medium block text-sm">Enrichment Waterfalls</strong>
<span className="text-zinc-500 text-sm">Cascading data providers to ensure 90%+ valid contact data and deep personalization.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1 flex-shrink-0" icon="lucide:check-circle" width="20"></iconify-icon>
<div>
<strong className="text-white font-medium block text-sm">Deliverability Architecture</strong>
<span className="text-zinc-500 text-sm">Managed DNS, subdomain rotation, and inbox warming as a service.</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1 flex-shrink-0" icon="lucide:check-circle" width="20"></iconify-icon>
<div>
<strong className="text-white font-medium block text-sm">Structured Testing Framework</strong>
<span className="text-zinc-500 text-sm">A/B/n testing environment. 1 offer → 3 angles → 1 structure.</span>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-transparent blur-3xl"></div>
<div className="relative border border-white/10 bg-zinc-950 rounded-xl shadow-2xl overflow-hidden">

<div className="flex items-center justify-between gap-2 p-4 border-b border-white/5 bg-zinc-900/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:layers"></iconify-icon>
<span className="text-sm font-medium text-white">Live Pipeline Monitor</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="text-[10px] text-emerald-500 font-mono uppercase">System Active</span>
</div>
</div>

<div className="p-6 border-b border-white/5">
<div className="flex items-end justify-between h-24 gap-2">
<div className="w-full bg-zinc-800/50 rounded-t h-[40%] hover:h-[50%] transition-all duration-500 group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100">Mon</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-t h-[60%] hover:h-[70%] transition-all duration-500 group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100">Tue</div>
</div>
<div className="w-full bg-brand-500/20 rounded-t h-[85%] hover:h-[95%] transition-all duration-500 group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-brand-400 opacity-0 group-hover:opacity-100">Wed</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-t h-[55%] hover:h-[65%] transition-all duration-500 group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100">Thu</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-t h-[70%] hover:h-[80%] transition-all duration-500 group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100">Fri</div>
</div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-500 font-mono">
<span>TOTAL VOLUME</span>
<span>REPLY RATE: 4.2%</span>
</div>
</div>

<div className="bg-zinc-950/50">

<div className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-colors cursor-default group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="lucide:building-2" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-200 font-medium">Acme Corp</div>
<div className="text-[10px] text-zinc-500">Signal: Hiring Engineers</div>
</div>
</div>
<span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Interested</span>
</div>

<div className="flex items-center justify-between p-3 border-b border-white/5 hover:bg-white/5 transition-colors cursor-default group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="lucide:building-2" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-200 font-medium">Stark Ind.</div>
<div className="text-[10px] text-zinc-500">Signal: Series B Funding</div>
</div>
</div>
<span className="text-[10px] font-medium text-brand-400 bg-brand-500/10 px-2 py-1 rounded border border-brand-500/20">Sequence: Day 3</span>
</div>

<div className="flex items-center justify-between p-3 hover:bg-white/5 transition-colors cursor-default group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon icon="lucide:building-2" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-zinc-200 font-medium">Wayne Ent.</div>
<div className="text-[10px] text-zinc-500">Signal: New CTO</div>
</div>
</div>
<span className="text-[10px] font-medium text-zinc-400 bg-zinc-800 px-2 py-1 rounded">Enriching...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950 overflow-hidden relative" id="stack">

<div className="absolute inset-0 hidden lg:block pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="beam-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#6366f1" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="opacity-30" d="M 200 200 Q 500 200 640 400" fill="none" stroke="url(#beam-gradient)" strokeWidth="1"></path>
<path className="opacity-30" d="M 200 300 Q 450 300 640 400" fill="none" stroke="url(#beam-gradient)" strokeWidth="1"></path>
<path className="opacity-30" d="M 200 500 Q 450 500 640 400" fill="none" stroke="url(#beam-gradient)" strokeWidth="1"></path>
<path className="opacity-30" d="M 640 400 Q 800 500 1080 300" fill="none" stroke="url(#beam-gradient)" strokeWidth="1"></path>
<path className="opacity-30" d="M 640 400 Q 800 300 1080 500" fill="none" stroke="url(#beam-gradient)" strokeWidth="1"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-display font-medium text-white tracking-tight mb-4">The Orchestration Layer</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">We don't rely on black-box tools. We architect custom workflows using n8n and MCP to connect best-in-class data sources to your CRM.</p>
</div>
<div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

<div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end gap-4">
<div className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-widest">Data Sources</div>
<div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">

<div className="bg-zinc-900 border border-white/5 p-3 rounded-lg flex items-center gap-3 hover:border-brand-500/30 transition-colors group">
<iconify-icon className="text-[#0077b5] text-xl" icon="simple-icons:linkedin"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white">LinkedIn</span>
</div>
<div className="bg-zinc-900 border border-white/5 p-3 rounded-lg flex items-center gap-3 hover:border-brand-500/30 transition-colors group">
<iconify-icon className="text-[#0475aa] text-xl" icon="simple-icons:crunchbase"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white">Funding</span>
</div>
<div className="bg-zinc-900 border border-white/5 p-3 rounded-lg flex items-center gap-3 hover:border-brand-500/30 transition-colors group">
<iconify-icon className="text-emerald-500 text-xl" icon="simple-icons:googlemaps"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white">Maps</span>
</div>
<div className="bg-zinc-900 border border-white/5 p-3 rounded-lg flex items-center gap-3 hover:border-brand-500/30 transition-colors group">
<iconify-icon className="text-blue-400 text-xl" icon="simple-icons:salesnavigator"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white">Sales Nav</span>
</div>
<div className="bg-zinc-900 border border-white/5 p-3 rounded-lg flex items-center gap-3 hover:border-brand-500/30 transition-colors group">
<iconify-icon className="text-orange-400 text-xl" icon="simple-icons:builtwith"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white">Tech</span>
</div>
<div className="bg-zinc-900 border border-white/5 p-3 rounded-lg flex items-center gap-3 hover:border-brand-500/30 transition-colors group">
<iconify-icon className="text-zinc-200 text-xl" icon="simple-icons:apify"></iconify-icon>
<span className="text-sm text-zinc-300 group-hover:text-white">Scrapers</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/3 flex flex-col items-center relative my-10 lg:my-0">

<div className="absolute inset-0 bg-brand-500/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="relative z-10 p-1 rounded-2xl bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-2xl">
<div className="bg-zinc-950 rounded-xl p-8 border border-white/10 flex flex-col items-center text-center w-[280px] sm:w-[320px]">
<div className="w-20 h-20 rounded-2xl bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 flex items-center justify-center mb-6 shadow-[0_0_30px_-5px_rgba(255,107,107,0.3)]">
<iconify-icon className="text-[#ff6b6b] text-5xl" icon="simple-icons:n8n"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-white mb-2">Workflow Engine</h3>
<p className="text-xs text-zinc-500 mb-6 px-4">Autonomous agent orchestration via Model Context Protocol (MCP).</p>

<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5" title="Model Context Protocol">
<iconify-icon className="text-purple-400 text-xs" icon="lucide:database"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-400">MCP</span>
</div>
<div className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
<iconify-icon className="text-white text-xs" icon="simple-icons:openai"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-400">LLM</span>
</div>
<div className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
<iconify-icon className="text-yellow-400 text-xs" icon="simple-icons:python"></iconify-icon>
<span className="text-[10px] font-mono text-zinc-400">PY</span>
</div>
</div>
</div>
</div>

<div className="h-16 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0 lg:hidden absolute -top-16 left-1/2 -translate-x-1/2"></div>
<div className="h-16 w-px bg-gradient-to-b from-brand-500/0 via-brand-500/50 to-brand-500/0 lg:hidden absolute -bottom-16 left-1/2 -translate-x-1/2"></div>
</div>

<div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-4">
<div className="text-xs font-mono text-zinc-500 mb-4 uppercase tracking-widest">Execution Channels</div>
<div className="flex flex-col gap-3 w-full max-w-[280px]">

<div className="p-4 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center">
<iconify-icon icon="logos:salesforce" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">CRM Sync</div>
<div className="text-[10px] text-zinc-500">Salesforce / HubSpot</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<div className="p-4 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-between group hover:border-purple-500/30 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Outreach</div>
<div className="text-[10px] text-zinc-500">Smartlead / Instantly</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<div className="p-4 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-between group hover:border-yellow-500/30 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#4A154B] flex items-center justify-center text-white">
<iconify-icon icon="simple-icons:slack" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Alerts</div>
<div className="text-[10px] text-zinc-500">Slack Notifications</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-display font-medium text-white tracking-tight mb-4">How We Engineer GTM</h2>
<p className="text-zinc-400">A linear process to build compounding revenue systems.</p>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 text-right md:pr-12 hidden md:block">
<h3 className="text-xl font-display font-medium text-white">Diagnose</h3>
<p className="text-sm text-zinc-400 mt-2">Audit ICP clarity, signals, data flow, and stack gaps.</p>
</div>
<div className="relative z-10 w-10 h-10 rounded-full bg-zinc-950 border border-brand-500 flex items-center justify-center text-brand-500 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<iconify-icon icon="lucide:stethoscope" width="20"></iconify-icon>
</div>
<div className="flex-1 md:pl-12">
<h3 className="text-xl font-display font-medium text-white md:hidden">Diagnose</h3>
<p className="text-sm text-zinc-400 mt-2 md:hidden">Audit ICP clarity, signals, data flow, and stack gaps.</p>

<div className="hidden md:block w-full h-2 bg-zinc-900 rounded overflow-hidden">
<div className="h-full bg-brand-500/50 w-1/3"></div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 text-right md:pr-12 hidden md:block">

<div className="flex justify-end gap-2">
<div className="w-8 h-8 border border-zinc-700 rounded bg-zinc-900 flex items-center justify-center text-zinc-600">
<iconify-icon icon="lucide:server"></iconify-icon>
</div>
<div className="w-8 h-8 border border-zinc-700 rounded bg-zinc-900 flex items-center justify-center text-zinc-600">
<iconify-icon icon="lucide:server"></iconify-icon>
</div>
</div>
</div>
<div className="relative z-10 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:network" width="20"></iconify-icon>
</div>
<div className="flex-1 md:pl-12">
<h3 className="text-xl font-display font-medium text-white">Architect</h3>
<p className="text-sm text-zinc-400 mt-2">Design the GTM system blueprint (data → enrichment → routing → outreach).</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 text-right md:pr-12 hidden md:block">
<h3 className="text-xl font-display font-medium text-white">Engineer</h3>
<p className="text-sm text-zinc-400 mt-2">Build workflows, automation, and infrastructure.</p>
</div>
<div className="relative z-10 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<div className="flex-1 md:pl-12">
<h3 className="text-xl font-display font-medium text-white md:hidden">Engineer</h3>
<p className="text-sm text-zinc-400 mt-2 md:hidden">Build workflows, automation, and infrastructure.</p>
<div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-500">
<iconify-icon icon="lucide:terminal"></iconify-icon> Systems online...
                             </div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 text-right md:pr-12 hidden md:block">
<div className="inline-block px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">A / B Testing</div>
</div>
<div className="relative z-10 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:flask-conical" width="20"></iconify-icon>
</div>
<div className="flex-1 md:pl-12">
<h3 className="text-xl font-display font-medium text-white">Test &amp; Optimize</h3>
<p className="text-sm text-zinc-400 mt-2">Run structured experiments and refine signals.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 text-right md:pr-12 hidden md:block">
<h3 className="text-xl font-display font-medium text-white">Scale</h3>
<p className="text-sm text-zinc-400 mt-2">Compound what works and eliminate friction.</p>
</div>
<div className="relative z-10 w-10 h-10 rounded-full bg-zinc-950 border border-white flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]">
<iconify-icon icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<div className="flex-1 md:pl-12">
<h3 className="text-xl font-display font-medium text-white md:hidden">Scale</h3>
<p className="text-sm text-zinc-400 mt-2 md:hidden">Compound what works and eliminate friction.</p>
<div className="hidden md:flex gap-1 h-8 items-end">
<div className="w-2 bg-zinc-800 h-2"></div>
<div className="w-2 bg-zinc-700 h-3"></div>
<div className="w-2 bg-zinc-600 h-5"></div>
<div className="w-2 bg-emerald-500 h-8"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/10" id="results">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-display font-medium text-white tracking-tight mb-12 text-center">System Output</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative bg-zinc-950 border border-white/5 p-8 rounded-xl overflow-hidden hover:border-white/10 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:bar-chart" width="100"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-white font-medium text-lg">Fintech SaaS</h3>
<p className="text-xs text-zinc-500 font-mono mt-1">SERIES B • INFRASTRUCTURE BUILD</p>
</div>
</div>
<div className="grid grid-cols-2 gap-6 mb-8">
<div>
<div className="text-3xl font-display font-medium text-white tracking-tight">3.2%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Reply Rate</div>
</div>
<div>
<div className="text-3xl font-display font-medium text-white tracking-tight">$1.2M</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Pipeline Gen</div>
</div>
</div>
<div className="border-t border-white/5 pt-6">
<p className="text-sm text-zinc-400 leading-relaxed">
<span className="text-zinc-500">Before:</span> Duct-taped Apollo lists, spam folders.<br/>
<span className="text-white">After:</span> Signal-based Clay workflow targeting CFOs hiring engineers.
                        </p>
</div>
</div>

<div className="group relative bg-zinc-950 border border-white/5 p-8 rounded-xl overflow-hidden hover:border-white/10 transition-all">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:users" width="100"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-white font-medium text-lg">DevTools Startup</h3>
<p className="text-xs text-zinc-500 font-mono mt-1">SEED • OUTBOUND ENGINE</p>
</div>
</div>
<div className="grid grid-cols-2 gap-6 mb-8">
<div>
<div className="text-3xl font-display font-medium text-white tracking-tight">42</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Meetings / Mo</div>
</div>
<div>
<div className="text-3xl font-display font-medium text-white tracking-tight">0</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Manual Hours</div>
</div>
</div>
<div className="border-t border-white/5 pt-6">
<p className="text-sm text-zinc-400 leading-relaxed">
<span className="text-zinc-500">Before:</span> Founders sending manual emails randomly.<br/>
<span className="text-white">After:</span> Automated scraping of GitHub stargazers -&gt; personal email enrichment.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="p-6">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
<iconify-icon icon="lucide:crown" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">SaaS Founders</h3>
<p className="text-sm text-zinc-500">Scaling outbound without hiring a massive sales team.</p>
</div>
<div className="p-6 border-x border-white/5">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
<iconify-icon icon="lucide:settings" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">GTM Engineers</h3>
<p className="text-sm text-zinc-500">Tired of duct-taped stacks and bad data hygiene.</p>
</div>
<div className="p-6">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
<iconify-icon icon="lucide:monitor-smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">RevOps Leaders</h3>
<p className="text-sm text-zinc-500">Who want control, versioning, and clarity in their pipeline.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-brand-500/5"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-display font-medium text-white tracking-tight mb-6">
                Stop Guessing. <br/>Start Engineering.
            </h2>
<p className="text-lg text-zinc-400 mb-10">
                Outbound doesn't scale with effort.<br/>
                It scales with systems.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-950 font-semibold rounded hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
                    Book a Strategy Call
                </button>
<button className="w-full sm:w-auto px-8 py-4 border border-zinc-800 text-zinc-300 font-medium rounded hover:bg-zinc-900 transition-colors">
                    View Workflow Framework
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:workflow"></iconify-icon>
<span className="text-zinc-500 text-sm font-medium">GrowthKinetics © 2024</span>
</div>
<div className="flex gap-6 text-sm text-zinc-600">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">System Status</a>
</div>
</div>
</footer>

    </>
  );
}
