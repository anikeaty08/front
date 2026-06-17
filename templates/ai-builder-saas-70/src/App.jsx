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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] blur-[100px] rounded-full mix-blend-screen bg-slate-900/20"></div>
<div className="absolute top-[20%] left-1/4 w-[600px] h-[600px] blur-[120px] rounded-full bg-slate-900/10"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 text-lg font-medium text-white tracking-tighter" href="/#">
<div className="flex bg-gradient-to-br from-slate-500 to-slate-600 w-5 h-5 rounded-md items-center justify-center">
<div className="w-2 h-2 bg-black rounded-sm"></div>
</div>
                    AURA
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors duration-200" href="#">Product</a>
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Changelog</a>
<a className="hover:text-white transition-colors duration-200" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm text-gray-400 hover:text-white transition-colors">Sign In</button>
<button className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors">Get Started</button>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-20 relative">

<div className="max-w-4xl mx-auto px-6 text-center mb-20">
<div className="inline-flex animate-fade-in-up text-xs font-medium text-slate-300 bg-slate-500/10 border-slate-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="flex h-1.5 w-1.5 rounded-full animate-pulse bg-slate-400"></span>
    Aura AI Builder v2.0 is now public
</div>
<h1 className="md:text-7xl bg-clip-text leading-[1.1] text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white via-white to-white/40 mb-6">Grafický design <br/> a produkce vizuální komunikace.</h1>
<p className="leading-relaxed text-lg font-light text-gray-400 max-w-2xl mr-auto mb-10 ml-auto">Navrhuji a připravuji grafiku, která funguje v reálném světě –
od loga a vizuální identity až po tisk, polepy a reklamní produkci.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all flex items-center gap-2 group">
                    Start Building
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 transition-all flex items-center gap-2">
<iconify-icon className="" icon="solar:book-2-linear"></iconify-icon>
                    Documentation
                </button>
</div>
</div>


<div className="max-w-6xl mx-auto px-6 mt-32">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">Everything you need to ship.</h2>
<p className="text-gray-400 font-light">From prototype to production in one unified workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-500/10">
<iconify-icon className="text-2xl text-slate-400" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Prompt Engineering</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Iterate on prompts with real-time feedback. Compare versions and optimize for cost and latency automatically.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-500/10">
<iconify-icon className="text-2xl text-slate-400" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">RAG Pipelines</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Built-in vector database integrations. Drag and drop document loaders for PDF, Notion, and web scraping.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-slate-500/10">
<iconify-icon className="text-2xl text-slate-400" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Observability</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Trace every chain execution. Monitor token usage, latency, and errors in a single dashboard.
                    </p>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[400px]">

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2">Model Agnostic</h3>
<p className="text-sm text-gray-400 max-w-sm">Switch between GPT-4, Claude 3, and open source models like Mistral with a single line of code.</p>
</div>
<div className="absolute right-0 bottom-0 w-3/4 h-3/4 translate-x-12 translate-y-12 bg-[#0A0A0A] border-t border-l border-white/10 rounded-tl-xl p-4 shadow-2xl group-hover:translate-x-10 group-hover:translate-y-10 transition-transform duration-500">
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 rounded border border-white/5 bg-white/[0.02]">
<div className="w-6 h-6 rounded flex items-center justify-center bg-slate-500/20"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="h-2 w-24 bg-white/10 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded border border-white/5 bg-white/[0.02]">
<div className="w-6 h-6 rounded flex items-center justify-center bg-slate-500/20"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="h-2 w-32 bg-white/10 rounded"></div>
</div>
<div className="flex items-center gap-3 p-2 rounded border border-white/5 bg-white/[0.02]">
<div className="w-6 h-6 rounded bg-gray-500/20 flex items-center justify-center"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="h-2 w-20 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between">
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Instant Deployment</h3>
<p className="text-sm text-gray-400 max-w-sm">Push to production with zero config. Serverless architecture that scales to zero.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex-1 h-32 rounded-lg border border-white/10 bg-black/40 relative flex items-center justify-center">

<svg className="w-full h-16 overflow-visible text-slate-500" viewbox="0 0 100 40">
<path d="M0 35 Q 20 35 30 20 T 60 25 T 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
<circle className="animate-ping" cx="100" cy="5" fill="#fff" r="3" style={{animationDuration: '2s'}}></circle>
</svg>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-slate-500/10"></div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 mt-32 mb-20 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to build the future?</h2>
<p className="text-gray-400 mb-10 text-lg font-light">Join thousands of developers building with Aura today.</p>
<div className="flex items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-all">Get Started for Free</button>
</div>
</div>
<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-medium tracking-tighter">
<div className="w-4 h-4 bg-gradient-to-br rounded-sm from-slate-500 to-slate-600"></div>
                     AURA
                </div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-gray-300" href="#">Privacy</a>
<a className="hover:text-gray-300" href="#">Terms</a>
<a className="hover:text-gray-300" href="#">Twitter</a>
<a className="hover:text-gray-300" href="#">GitHub</a>
</div>
<div className="text-xs text-gray-600">
                    © 2024 Aura Inc.
                </div>
</div>
</footer>
</main>

    </>
  );
}
