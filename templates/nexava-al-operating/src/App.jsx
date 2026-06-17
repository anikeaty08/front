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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black font-bold text-xs">N</div>
<span className="text-white font-medium tracking-tight text-sm">NEXAVA <span className="text-slate-500 font-normal">beta</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium">
<a className="text-white transition-colors duration-200" href="#">Manifesto</a>
<a className="hover:text-white transition-colors duration-200" href="#">Roadmap</a>
<a className="hover:text-white transition-colors duration-200" href="#">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium hover:text-white transition-colors hidden sm:block" href="#">Sign In</a>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-slate-200 transition-all duration-200 flex items-center gap-2">
                    Join Waitlist
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 hero-glow pointer-events-none z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[10px] uppercase tracking-wide font-medium text-indigo-300 mb-8 animate-fade-in">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                v1.0 Public Beta is Live
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in delay-100">
                The new operating system <br/>
<span className="text-gradient">for modern startups.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed font-light animate-fade-in delay-200">
                Stop managing chaos. Nexava unifies your team's workflow, documents, and goals into a single intelligent interface.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in delay-200">
<div className="relative w-full sm:w-auto">
<input className="w-full sm:w-64 h-11 bg-white/5 border border-white/10 rounded-full pl-5 pr-12 text-sm text-white focus:outline-none focus:border-white/20 transition-colors placeholder:text-slate-600" placeholder="name@company.com" type="email"/>
<button className="absolute right-1 top-1 h-9 w-9 bg-white text-black rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
<span className="text-xs text-slate-600 hidden sm:block">or</span>
<button className="h-11 px-6 rounded-full border border-white/10 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors w-full sm:w-auto">
                    Read the docs
                </button>
</div>
<p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest">Trusted by builders at</p>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<div className="flex items-center gap-2"><div className="w-5 h-5 bg-white rounded-full"></div><span className="font-semibold text-white tracking-tight">ACME</span></div>
<div className="flex items-center gap-2"><div className="w-5 h-5 border border-white rounded-full"></div><span className="font-semibold text-white tracking-tight">Vertex</span></div>
<div className="flex items-center gap-2"><div className="w-5 h-5 bg-white rotate-45"></div><span className="font-semibold text-white tracking-tight">Kinetik</span></div>
<div className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white rounded-md"></div><span className="font-semibold text-white tracking-tight">Echo</span></div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">Built for speed, designed for focus.</h2>
<p className="text-sm text-slate-400">We stripped away the complexity to give you tools that actually work from Day 1.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[280px]">

<div className="md:col-span-4 group relative rounded-2xl border border-white/10 bg-[#080808] overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute top-0 right-0 p-24 opacity-20 bg-indigo-500/30 blur-[100px] pointer-events-none"></div>
<div className="p-8 h-full flex flex-col items-start relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">Real-time Sync Engine</h3>
<p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-8">Collaborate with your team without conflict. Our CRDT-based engine ensures every keystroke is synced instantly across the globe.</p>

<div className="w-full flex-1 bg-black/50 border-t border-l border-white/10 rounded-tl-xl p-4 shadow-2xl relative overflow-hidden">
<div className="flex gap-4 border-b border-white/5 pb-3 mb-3">
<div className="h-2 w-16 bg-white/20 rounded-full"></div>
<div className="h-2 w-16 bg-white/5 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full border border-indigo-500 bg-indigo-500/20 text-[8px] flex items-center justify-center text-indigo-300">JD</div>
<div className="h-2 w-32 bg-white/10 rounded"></div>
</div>
<div className="h-2 w-full bg-white/5 rounded ml-6"></div>
<div className="h-2 w-2/3 bg-white/5 rounded ml-6"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 group relative rounded-2xl border border-white/10 card-gradient overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="p-6 h-full flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:lock" width="16"></iconify-icon>
</div>
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 border border-white/10 text-slate-400">Enterprise</span>
</div>
<h3 className="text-lg text-white font-medium mb-2">Secure by Default</h3>
<p className="text-xs text-slate-500 leading-relaxed">SOC2 compliant encryption for all your data at rest and in transit.</p>
</div>
<div className="mt-4 flex gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] text-green-500 font-mono">ENCRYPTION_ENABLED</span>
</div>
</div>
</div>

<div className="md:col-span-2 group relative rounded-2xl border border-white/10 card-gradient overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="p-6 h-full flex flex-col justify-between">
<div>
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="lucide:workflow" width="16"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-2">Workflows</h3>
<p className="text-xs text-slate-500 leading-relaxed">Automate repetitive tasks with our visual builder.</p>
</div>

<div className="mt-4 flex items-center gap-1 opacity-50">
<div className="w-6 h-6 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon icon="lucide:mail" width="10"></iconify-icon></div>
<div className="h-[1px] w-4 bg-white/20"></div>
<div className="w-6 h-6 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon icon="lucide:check" width="10"></iconify-icon></div>
</div>
</div>
</div>

<div className="md:col-span-4 group relative rounded-2xl border border-white/10 bg-[#080808] overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col md:flex-row">
<div className="p-8 md:w-1/2 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-[10px] font-medium text-indigo-400 uppercase tracking-wide">Coming Q4 2023</span>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">AI-Powered Insights</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Ask questions about your data in natural language. Nexava creates charts, summaries, and reports instantly.</p>
<a className="inline-flex items-center gap-2 text-xs text-white border border-white/10 rounded px-3 py-1.5 bg-white/5 w-fit hover:bg-white/10 transition-colors" href="#">
                            Request Early Access
                            <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
<div className="w-full md:w-1/2 bg-gradient-to-br from-indigo-900/10 to-transparent relative">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-32 border border-white/10 bg-black/80 backdrop-blur rounded-lg p-3 space-y-2 shadow-xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500">
<div className="flex gap-2 items-center border-b border-white/5 pb-2">
<iconify-icon className="text-indigo-400" icon="lucide:sparkles" width="12"></iconify-icon>
<div className="h-1.5 w-20 bg-white/10 rounded"></div>
</div>
<div className="h-1.5 w-full bg-white/5 rounded"></div>
<div className="h-1.5 w-3/4 bg-white/5 rounded"></div>
<div className="flex gap-1 mt-2">
<div className="h-10 w-4 bg-indigo-500/20 rounded-sm"></div>
<div className="h-6 w-4 bg-indigo-500/20 rounded-sm mt-4"></div>
<div className="h-8 w-4 bg-indigo-500/20 rounded-sm mt-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 py-20 bg-white/[0.02]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-8 text-center">Development Status</h2>
<div className="space-y-6">

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center border border-green-500/30">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white text-sm font-medium">Alpha Release</h4>
<p className="text-xs text-slate-500 mt-1">Core infrastructure and real-time engine deployed.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.3)]">
<div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div className="pb-8">
<h4 className="text-white text-sm font-medium">Public Beta (Current)</h4>
<p className="text-xs text-slate-500 mt-1">Onboarding first 1,000 users. Refining UX and mobile stack.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<div className="w-2 h-2 bg-slate-600 rounded-full"></div>
</div>
</div>
<div>
<h4 className="text-slate-400 text-sm font-medium">Global Launch v1.0</h4>
<p className="text-xs text-slate-600 mt-1">Enterprise API, SLA guarantees, and marketplace.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center text-black font-bold text-[10px]">N</div>
<span className="text-white font-semibold text-sm">NEXAVA</span>
</div>
<p className="text-xs text-slate-500 mb-4">
                        Designed in San Francisco.<br/>
                        Built for the world.
                    </p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-white text-xs font-semibold mb-3">Product</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white" href="#">Changelog</a></li>
<li><a className="hover:text-white" href="#">Customers</a></li>
<li><a className="hover:text-white" href="#">Download</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-semibold mb-3">Company</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white" href="#">Manifesto</a></li>
<li><a className="hover:text-white" href="#">Careers</a> <span className="text-[10px] text-indigo-400 bg-indigo-400/10 px-1 rounded ml-1">Hiring</span></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-xs font-semibold mb-3">Legal</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white" href="#">Terms</a></li>
<li><a className="hover:text-white" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="flex justify-between items-center pt-8 border-t border-white/5">
<p className="text-[10px] text-slate-600">© 2023 Nexava Inc. All rights reserved.</p>
<div className="flex items-center gap-2 px-2 py-1 bg-white/5 rounded-full border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] text-slate-400 font-medium">Systems Normal</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
