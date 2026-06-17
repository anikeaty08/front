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
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
},
colors: {
background: '#09090b', // Zinc 950
surface: '#18181b', // Zinc 900
surfaceHighlight: '#27272a', // Zinc 800
primary: '#fafafa', // Zinc 50
secondary: '#a1a1aa', // Zinc 400
accent: '#6366f1', // Indigo 500
},
animation: {
'blob': 'blob 7s infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
}
}
}
}
}



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
<div className="absolute inset-0 grid-bg opacity-[0.15]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer z-20">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium text-xs tracking-tighter">HD</div>
<span className="text-sm font-semibold tracking-tight text-white">HireData</span>
</div>

<div className="hidden lg:flex items-center gap-1 h-full">

<div className="group relative h-full flex items-center px-3 nav-item">
<button className="flex items-center gap-1.5 text-xs text-secondary hover:text-white transition-colors focus:outline-none">
                        Data APIs 
                        <i className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-200" data-lucide="chevron-down"></i>
</button>

<div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible transform -translate-y-2 transition-all duration-200 w-64 z-50">
<div className="bg-[#0c0c0e] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5 ring-1 ring-white/5">
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-indigo-400 transition-colors"><i className="w-4 h-4" data-lucide="file-text"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">Jobs Data API</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Real-time job postings &amp; listings</div>
</div>
</div>
</a>
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-indigo-400 transition-colors"><i className="w-4 h-4" data-lucide="building-2"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">Company Data API</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Company profiles &amp; information</div>
</div>
</div>
</a>
</div>
</div>
</div>

<div className="group relative h-full flex items-center px-3 nav-item">
<button className="flex items-center gap-1.5 text-xs text-secondary hover:text-white transition-colors focus:outline-none">
                        Datasets
                        <i className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-200" data-lucide="chevron-down"></i>
</button>
<div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible transform -translate-y-2 transition-all duration-200 w-64 z-50">
<div className="bg-[#0c0c0e] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5 ring-1 ring-white/5">
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-purple-400 transition-colors"><i className="w-4 h-4" data-lucide="database"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">Job Datasets</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Historical bulk job data</div>
</div>
</div>
</a>
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-purple-400 transition-colors"><i className="w-4 h-4" data-lucide="hard-drive"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">Company Datasets</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Enriched firmographic data</div>
</div>
</div>
</a>
</div>
</div>
</div>

<div className="group relative h-full flex items-center px-3 nav-item">
<button className="flex items-center gap-1.5 text-xs text-secondary hover:text-white transition-colors focus:outline-none">
                        Use Cases
                        <i className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-200" data-lucide="chevron-down"></i>
</button>
<div className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible transform -translate-y-2 transition-all duration-200 w-72 z-50">
<div className="bg-[#0c0c0e] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5 ring-1 ring-white/5">
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-blue-400 transition-colors"><i className="w-4 h-4" data-lucide="target"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">Recruiting &amp; Sales Leads</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Find companies hiring aggressively</div>
</div>
</div>
</a>
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-blue-400 transition-colors"><i className="w-4 h-4" data-lucide="layers"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">Job Boards &amp; Platforms</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Backfill your board with API data</div>
</div>
</div>
</a>
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-blue-400 transition-colors"><i className="w-4 h-4" data-lucide="line-chart"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">Market Intelligence</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Analyze labor market trends</div>
</div>
</div>
</a>
</div>
</div>
</div>

<a className="px-3 text-xs text-secondary hover:text-white transition-colors" href="#">Pricing</a>
<a className="px-3 text-xs text-secondary hover:text-white transition-colors" href="#">Documentation</a>

<div className="group relative h-full flex items-center px-3 nav-item">
<button className="flex items-center gap-1.5 text-xs text-secondary hover:text-white transition-colors focus:outline-none">
                        Resources
                        <i className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-200" data-lucide="chevron-down"></i>
</button>
<div className="nav-dropdown absolute top-full right-0 pt-4 opacity-0 invisible transform -translate-y-2 transition-all duration-200 w-64 z-50">
<div className="bg-[#0c0c0e] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-1.5 ring-1 ring-white/5">
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-emerald-400 transition-colors"><i className="w-4 h-4" data-lucide="book-open"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">Blog</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Industry insights and updates</div>
</div>
</div>
</a>
<a className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item" href="#">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-zinc-400 group-hover/item:text-emerald-400 transition-colors"><i className="w-4 h-4" data-lucide="info"></i></div>
<div>
<div className="text-xs font-medium text-zinc-200">About</div>
<div className="text-[10px] text-zinc-500 mt-0.5 leading-tight">Learn more about HireData</div>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-secondary hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium text-white hover:text-indigo-400 transition-colors" href="#">
                    Get API Keys
                </a>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-medium tracking-wide uppercase mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                v2.0 Now Available
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                Job market intelligence, <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-shimmer bg-[length:200%_100%]">enriched by AI.</span>
</h1>
<p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-tight">
                Access real-time job and company data from millions of career pages via a single, powerful API. Built for recruiters, platforms, and market analysts.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 rounded-md bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                    Start Integration
                </button>
<button className="w-full sm:w-auto px-8 py-3 rounded-md bg-transparent border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="terminal"></i>
                    Read Documentation
                </button>
</div>
</div>
</section>

<section className="relative z-10 px-4 md:px-6 max-w-6xl mx-auto -mt-8 mb-24">
<div className="rounded-xl border border-white/10 bg-[#0c0c0e] shadow-2xl overflow-hidden ring-1 ring-white/5">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="ml-3 text-xs text-zinc-500 font-mono">api.hiredata.com/v2/enrich</span>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded border border-green-400/20">
<div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                        200 OK
                    </span>
<span className="text-[10px] text-zinc-500">142ms</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-6 border-b lg:border-b-0 lg:border-r border-white/5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
<div className="text-zinc-500 mb-2">// POST /enrich/company</div>
<div className="text-purple-400">curl <span className="text-zinc-300">-X POST</span> <span className="text-green-400">"https://api.hiredata.com/v2/enrich"</span> \</div>
<div className="pl-4 text-zinc-300">-H <span className="text-green-400">"Authorization: Bearer sk_live_..."</span> \</div>
<div className="pl-4 text-zinc-300">-d <span className="text-yellow-300">'{</span></div>
<div className="pl-8 text-blue-300">"domain": <span className="text-orange-300">"stripe.com"</span>,</div>
<div className="pl-8 text-blue-300">"include_jobs": <span className="text-red-400">true</span>,</div>
<div className="pl-8 text-blue-300">"data_points": <span className="text-yellow-300">[</span><span className="text-orange-300">"tech_stack"</span>, <span className="text-orange-300">"salary_est"</span><span className="text-yellow-300">]</span></div>
<div className="pl-4 text-yellow-300">}'</div>
</div>

<div className="p-6 font-mono text-xs md:text-sm leading-relaxed bg-white/[0.01] overflow-x-auto relative group">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-white/10 rounded text-zinc-400 hover:text-white transition-colors">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
</button>
</div>
<div className="text-zinc-500 mb-2">// Response payload</div>
<div className="text-yellow-300">{</div>
<div className="pl-4 text-blue-300">"company": <span className="text-yellow-300">{</span></div>
<div className="pl-8 text-blue-300">"name": <span className="text-orange-300">"Stripe"</span>,</div>
<div className="pl-8 text-blue-300">"headcount_growth": <span className="text-orange-300">"+12%"</span>,</div>
<div className="pl-8 text-blue-300">"open_roles": <span className="text-purple-400">142</span></div>
<div className="pl-4 text-yellow-300">},</div>
<div className="pl-4 text-blue-300">"jobs": <span className="text-yellow-300">[</span></div>
<div className="pl-8 text-yellow-300">{</div>
<div className="pl-12 text-blue-300">"title": <span className="text-orange-300">"Staff Engineer"</span>,</div>
<div className="pl-12 text-blue-300">"stack": <span className="text-yellow-300">[</span><span className="text-orange-300">"Ruby"</span>, <span className="text-orange-300">"React"</span><span className="text-yellow-300">]</span>,</div>
<div className="pl-12 text-blue-300">"salary_range": <span className="text-yellow-300">{</span></div>
<div className="pl-16 text-blue-300">"min": <span className="text-purple-400">220000</span>,</div>
<div className="pl-16 text-blue-300">"max": <span className="text-purple-400">350000</span></div>
<div className="pl-12 text-yellow-300">}</div>
<div className="pl-8 text-yellow-300">}</div>
<div className="pl-4 text-yellow-300">]</div>
<div className="text-yellow-300">}</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Powering data teams at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg"><div className="w-5 h-5 bg-white rounded-full"></div>Acme Corp</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg"><div className="w-5 h-5 border-2 border-white rounded"></div>GlobalTech</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg"><div className="w-5 h-5 bg-white transform rotate-45"></div>Nebula</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg"><div className="w-5 h-5 border border-white rounded-full"></div>Orbit</div>
<div className="flex items-center gap-2 text-white font-semibold tracking-tight text-lg"><div className="w-5 h-5 bg-gradient-to-tr from-white to-zinc-500"></div>Vertex</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Structured data from unstructured chaos.</h2>
<p className="text-secondary text-lg font-light">We scrape, parse, and normalize data from over 4 million career pages daily, so you don't have to build scrapers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[60px] group-hover:bg-indigo-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Global Source Coverage</h3>
<p className="text-secondary text-sm leading-relaxed max-w-md">From Fortune 500 portals to niche startup ATS boards (Greenhouse, Lever, Ashby). If it's on the web, it's in our API.</p>
</div>

<div className="absolute bottom-0 right-0 w-1/2 h-32 opacity-30">
<div className="w-full h-full bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
</div>
</div>

<div className="rounded-xl bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-colors backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Low Latency</h3>
<p className="text-secondary text-sm leading-relaxed mb-6">Sub-200ms response times for enriched data lookups.</p>

<div className="flex items-end gap-1 h-16 w-full mt-auto opacity-50 group-hover:opacity-80 transition-opacity">
<div className="w-1/5 bg-emerald-500/20 h-[30%] rounded-t"></div>
<div className="w-1/5 bg-emerald-500/40 h-[50%] rounded-t"></div>
<div className="w-1/5 bg-emerald-500/60 h-[40%] rounded-t"></div>
<div className="w-1/5 bg-emerald-500/80 h-[80%] rounded-t"></div>
<div className="w-1/5 bg-emerald-500 h-[60%] rounded-t"></div>
</div>
</div>

<div className="rounded-xl bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-colors backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-purple-400">
<i className="w-5 h-5" data-lucide="bot"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">AI Enrichment</h3>
<p className="text-secondary text-sm leading-relaxed">Our LLMs infer tech stacks, seniority levels, and salary ranges even when not explicitly stated.</p>
<div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
<i className="w-24 h-24 text-purple-500/5 rotate-12" data-lucide="sparkles"></i>
</div>
</div>

<div className="md:col-span-2 rounded-xl bg-zinc-900/50 border border-white/10 p-8 relative overflow-hidden group hover:border-white/20 transition-colors backdrop-blur-sm flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-zinc-800 border border-white/10 flex items-center justify-center mb-6 text-blue-400">
<i className="w-5 h-5" data-lucide="refresh-ccw"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Always Fresh</h3>
<p className="text-secondary text-sm leading-relaxed">Data decays fast. We re-scan active listings every 24 hours to ensure you never apply to a closed role.</p>
</div>
<div className="w-full md:w-1/2 bg-[#0c0c0e] rounded border border-white/10 p-4 font-mono text-[10px] text-zinc-400">
<div className="flex justify-between border-b border-white/5 pb-2 mb-2">
<span>last_updated</span>
<span className="text-green-400">"2023-10-27T14:30:00Z"</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2 mb-2">
<span>status</span>
<span className="text-blue-400">"active"</span>
</div>
<div className="flex justify-between">
<span>days_open</span>
<span className="text-purple-400">2</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-2">
<h4 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">4.2M+</h4>
<p className="text-xs text-secondary uppercase tracking-wider">Active Jobs</p>
</div>
<div className="space-y-2">
<h4 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">150k+</h4>
<p className="text-xs text-secondary uppercase tracking-wider">Companies Tracked</p>
</div>
<div className="space-y-2">
<h4 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">99.9%</h4>
<p className="text-xs text-secondary uppercase tracking-wider">Uptime SLA</p>
</div>
<div className="space-y-2">
<h4 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">200+</h4>
<p className="text-xs text-secondary uppercase tracking-wider">Data Points</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-16 text-center">Built for scale.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/50 hover:to-purple-500/50 transition-all duration-300">
<div className="bg-surface h-full rounded-xl p-8 border border-white/5 relative z-10">
<div className="mb-4 p-3 bg-zinc-800 rounded-lg inline-block">
<i className="w-6 h-6 text-white" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">HR Tech Platforms</h3>
<p className="text-sm text-secondary leading-relaxed">Enrich your ATS or job board with salary predictions and tech stack data to increase engagement.</p>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/50 hover:to-purple-500/50 transition-all duration-300">
<div className="bg-surface h-full rounded-xl p-8 border border-white/5 relative z-10">
<div className="mb-4 p-3 bg-zinc-800 rounded-lg inline-block">
<i className="w-6 h-6 text-white" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Market Intelligence</h3>
<p className="text-sm text-secondary leading-relaxed">Analyze hiring trends by region, industry, or tech stack to guide investment decisions.</p>
</div>
</div>

<div className="group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-indigo-500/50 hover:to-purple-500/50 transition-all duration-300">
<div className="bg-surface h-full rounded-xl p-8 border border-white/5 relative z-10">
<div className="mb-4 p-3 bg-zinc-800 rounded-lg inline-block">
<i className="w-6 h-6 text-white" data-lucide="search"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Recruitment Agencies</h3>
<p className="text-sm text-secondary leading-relaxed">Automate lead generation by detecting companies with rapid headcount growth.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Ready to build?</h2>
<p className="text-lg text-secondary mb-10 max-w-xl mx-auto font-light">
                Get your API key today. Start with 1,000 free credits per month. No credit card required.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:scale-105" href="#">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<span className="relative flex items-center gap-2">
                        Get Started for Free
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</a>
<a className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors" href="#">
                    Contact Sales
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#09090b] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-white font-bold text-[10px]">HD</div>
<span className="text-lg font-semibold tracking-tight text-white">HireData</span>
</div>
<p className="text-zinc-500 text-sm max-w-xs mb-6">
                        The definitive source for job market data. Delivering structured intelligence for the modern web.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Job API</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Company API</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Datasets</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Developers</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Status</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Github Repo</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2023 HireData Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
