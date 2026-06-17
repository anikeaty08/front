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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<span className="text-lg font-semibold tracking-tighter text-slate-900">OAI</span>
<div className="h-1.5 w-1.5 rounded-full bg-blue-600 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Research</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Company</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Ethics</a>
</div>

<button className="md:hidden text-slate-500">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-24 overflow-hidden pt-32 pb-16 relative">

<div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full orb-gradient mix-blend-multiply"></div>
<div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-slate-200 rounded-full orb-gradient mix-blend-multiply" style={{animationDelay: '2s'}}></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Latest Paper: Generative Workflows</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-slate-900 tracking-tighter mb-8">
                    Solving intelligence <br className="hidden md:block"/> for the enterprise.
                </h1>
<p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl leading-relaxed tracking-tight">
                    OAI is a research laboratory dedicated to building general-purpose algorithms that navigate, understand, and optimize complex office environments.
                </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<button className="bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors flex items-center gap-2 group">
                        Read the Manifesto
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors">
                        View Research
                    </button>
</div>
</div>
</div>
</header>

<section className="py-12 md:py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-8 font-display">Frontier Models</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative h-[420px] rounded-[32px] overflow-hidden bg-slate-900 cursor-pointer shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-500">

<img alt="Genie 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

<div className="relative h-full flex flex-col justify-between p-7">
<div>
<h3 className="text-white text-xl font-medium tracking-tight mb-2">Genie 3</h3>
<p className="text-white/90 text-sm font-light leading-relaxed">A new frontier for world models in complex environments.</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-black/80 backdrop-blur-md text-white h-9 px-4 rounded-full text-xs font-medium hover:bg-black transition-colors border border-white/10 flex items-center gap-1.5">
<span className="opacity-60 font-mono">gc</span> Try
                            </button>
<button className="bg-white text-slate-900 h-9 px-4 rounded-full text-xs font-medium hover:bg-slate-100 transition-colors">
                                Learn more
                            </button>
</div>
</div>
</div>

<div className="group relative h-[420px] rounded-[32px] overflow-hidden bg-black cursor-pointer shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-500">

<div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-black to-black transition-opacity group-hover:opacity-80"></div>

<div className="absolute bottom-[-100px] left-[-50px] w-[500px] h-[500px] opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-700">
<div className="w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"></div>
</div>
<div className="relative h-full flex flex-col justify-between p-7">
<div>
<h3 className="text-white text-xl font-medium tracking-tight mb-2">Orion 3</h3>
<p className="text-white/80 text-sm font-light leading-relaxed">Our most intelligent AI model that brings any idea to life.</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-white text-slate-900 h-9 px-4 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors flex items-center gap-1.5">
<span className="opacity-60 font-mono">sp</span> Try
                            </button>
<button className="bg-white/10 backdrop-blur-md text-white border border-white/20 h-9 px-4 rounded-full text-xs font-medium hover:bg-white/20 transition-colors">
                                Learn more
                            </button>
</div>
</div>
</div>

<div className="group relative h-[420px] rounded-[32px] overflow-hidden bg-slate-800 cursor-pointer shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-500">
<img alt="Creative Model" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
<div className="relative h-full flex flex-col justify-between p-7">
<div>
<h3 className="text-white text-xl font-medium tracking-tight mb-2 flex items-center gap-2">
                                Silica <span className="text-lg">✨</span>
</h3>
<p className="text-white/90 text-sm font-light leading-relaxed">State-of-the-art generation and editing models, built on Orion.</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-black/80 backdrop-blur-md text-white h-9 px-4 rounded-full text-xs font-medium hover:bg-black transition-colors border border-white/10 flex items-center gap-1.5">
<span className="opacity-60 font-mono">sp</span> Try
                            </button>
<button className="bg-white text-slate-900 h-9 px-4 rounded-full text-xs font-medium hover:bg-slate-100 transition-colors">
                                Learn more
                            </button>
</div>
</div>
</div>

<div className="group relative h-[420px] rounded-[32px] overflow-hidden bg-blue-900 cursor-pointer shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow duration-500">
<img alt="Weather Model" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-indigo-600/50 to-purple-600/80 mix-blend-multiply"></div>
<div className="relative h-full flex flex-col justify-between p-7 z-10">
<div>
<h3 className="text-white text-xl font-medium tracking-tight mb-2">ClimateNext 2</h3>
<p className="text-white/90 text-sm font-light leading-relaxed">Our most accurate AI climate forecasting technology yet.</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-black text-white h-9 px-5 rounded-full text-xs font-medium hover:bg-slate-900 transition-colors">
                                Try
                            </button>
<button className="bg-white text-slate-900 h-9 px-4 rounded-full text-xs font-medium hover:bg-slate-100 transition-colors">
                                Learn more
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group">
<div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 mb-6 text-slate-900 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="20" icon="solar:documents-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Contextual Understanding</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Models that parse legal documents, emails, and slack threads with semantic depth exceeding human capabilities.
                    </p>
</div>

<div className="group">
<div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 mb-6 text-slate-900 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="20" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Predictive Logistics</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Optimizing calendar density and resource allocation through reinforcement learning agents.
                    </p>
</div>

<div className="group">
<div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white border border-slate-200 mb-6 text-slate-900 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="20" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Safety &amp; Alignment</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Rigorous protocols ensuring automated decision-making aligns with corporate governance and ethics.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Latest Research</h2>
<p className="text-slate-500 max-w-md font-light">
                        Breakthroughs in natural language processing and organizational theory.
                    </p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group" href="#">
                    View all publications 
                    <iconify-icon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 gap-0 border-t border-slate-100">

<article className="group relative py-10 border-b border-slate-100 hover:bg-slate-50/50 transition-colors cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="col-span-12 md:col-span-3">
<span className="text-xs font-medium text-slate-400 font-mono">OCT 24, 2023</span>
<div className="mt-2 flex gap-2">
<span className="inline-block px-2 py-0.5 rounded border border-slate-200 text-[10px] uppercase tracking-wider text-slate-500 font-medium">NLP</span>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                Zero-shot reasoning in bureaucratic structures
                            </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                                Investigating how large language models can deduce implicit hierarchy and approval chains without explicit training data, reducing administrative latency by 40%.
                            </p>
</div>
<div className="col-span-12 md:col-span-3 flex md:justify-end items-center">
<div className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600 transition-all">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</article>

<article className="group relative py-10 border-b border-slate-100 hover:bg-slate-50/50 transition-colors cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="col-span-12 md:col-span-3">
<span className="text-xs font-medium text-slate-400 font-mono">SEP 12, 2023</span>
<div className="mt-2 flex gap-2">
<span className="inline-block px-2 py-0.5 rounded border border-slate-200 text-[10px] uppercase tracking-wider text-slate-500 font-medium">Systems</span>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                Asynchronous collaboration via agentic swarms
                            </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                                A framework for autonomous agents to handle meeting scheduling, minute-taking, and task distribution, enabling purely asynchronous human workflows.
                            </p>
</div>
<div className="col-span-12 md:col-span-3 flex md:justify-end items-center">
<div className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600 transition-all">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</article>

<article className="group relative py-10 border-b border-slate-100 hover:bg-slate-50/50 transition-colors cursor-pointer">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
<div className="col-span-12 md:col-span-3">
<span className="text-xs font-medium text-slate-400 font-mono">AUG 02, 2023</span>
<div className="mt-2 flex gap-2">
<span className="inline-block px-2 py-0.5 rounded border border-slate-200 text-[10px] uppercase tracking-wider text-slate-500 font-medium">Vision</span>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                Spatial awareness in digital workspaces
                            </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                                Mapping the topology of digital files and folders to create 3D retrieval systems that mimic human spatial memory.
                            </p>
</div>
<div className="col-span-12 md:col-span-3 flex md:justify-end items-center">
<div className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-200 group-hover:text-blue-600 transition-all">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Built on OAI Core</h2>
<p className="text-slate-400 text-lg font-light mb-8 max-w-md">
                        Our proprietary stack is designed for high-stakes enterprise reliability, privacy, and speed.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-blue-400">
<iconify-icon height="24" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight mb-1">Local-First Inference</h4>
<p className="text-sm text-slate-500 leading-relaxed">Models run on-premise, ensuring data never leaves your secure perimeter.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-blue-400">
<iconify-icon height="24" icon="solar:network-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight mb-1">Graph Neural Networks</h4>
<p className="text-sm text-slate-500 leading-relaxed">Understanding relationships between employees, tasks, and company goals.</p>
</div>
</li>
</ul>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<span className="text-xs font-mono text-slate-400 uppercase tracking-widest">System Status</span>
<div className="flex items-center gap-2">
<span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs text-green-400">Operational</span>
</div>
</div>
<div className="space-y-4">

<div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Optimization Rate</span>
<span>98.4%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-blue-500 h-1 rounded-full" style={{width: '98.4%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Context Window</span>
<span>128k</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-blue-400 h-1 rounded-full" style={{width: '85%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs text-slate-400 mb-2">
<span>Latency</span>
<span>12ms</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-indigo-400 h-1 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 md:col-span-2 lg:col-span-2">
<a className="flex items-center gap-1 mb-6" href="#">
<span className="text-lg font-semibold tracking-tighter text-slate-900">OAI</span>
</a>
<p className="text-sm text-slate-500 mb-6 max-w-xs leading-relaxed">
                        Office Artificial Intelligence. <br/>
                        London &amp; San Francisco.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Research</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Publications</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Codebases</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
<span className="text-xs text-slate-400">© 2023 OAI Technologies. All rights reserved.</span>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs text-slate-500 font-medium">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
