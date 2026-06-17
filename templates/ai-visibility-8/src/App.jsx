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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-slate-950/50">
<div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:atom-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-100">DECIPHER OS</span>
</div>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors tracking-wide" href="#begin">
                INITIATE
            </a>
</div>
</nav>
<main className="relative z-10 w-full max-w-3xl mx-auto px-6">

<section className="min-h-screen flex flex-col justify-center py-20" id="interpretation">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    System Active
                </div>
<h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[1.1]">
                    You’re Already Being <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-200">Interpreted</span> by AI.
                </h1>
<h2 className="text-xl md:text-2xl font-light text-slate-400 tracking-tight">
                    Not searched. Not browsed. Interpreted.
                </h2>
<div className="max-w-xl space-y-6 text-slate-400 leading-relaxed font-light">
<p>
                        Every time someone asks AI a question in your industry, a quiet decision is made. Sometimes your brand is chosen. Sometimes it’s skipped. Sometimes it’s misunderstood.
                    </p>
<p>
                        Most companies never see this layer. <span className="text-slate-200 font-medium">Decipher OS</span> exists inside it.
                    </p>
</div>
<div className="pt-8 border-l border-indigo-500/30 pl-6">
<p className="text-sm font-mono text-indigo-300 mb-6">
                        &gt; SYSTEM_NOTE: Right now, AI has an opinion about you.
                    </p>
<a className="group inline-flex items-center gap-2 text-sm text-slate-100 hover:text-indigo-400 transition-colors" href="#position">
                        See What It Thinks
                        <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center py-24 border-l border-dashed border-slate-800/50 pl-6 md:pl-12 ml-3 md:ml-0" id="position">
<div className="mb-12">
<h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white mb-6">
                    This Is Your Current Position in AI’s Mind
                </h2>
<div className="max-w-xl text-slate-400 leading-relaxed space-y-4">
<p>AI doesn’t judge brands emotionally. It resolves confidence. It asks:</p>
<ul className="space-y-3 mt-4 mb-6">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-500 mt-1 flex-shrink-0" icon="solar:question-circle-linear"></iconify-icon>
<span>Do I understand this brand?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-500 mt-1 flex-shrink-0" icon="solar:sort-linear"></iconify-icon>
<span>Can I explain it clearly?</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-500 mt-1 flex-shrink-0" icon="solar:shield-check-linear"></iconify-icon>
<span>Can I trust it as a reference?</span>
</li>
</ul>
<p>From your content, structure, and signals, AI forms a version of you. Sometimes accurate. Often incomplete.</p>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 md:p-8 mb-12 relative overflow-hidden group">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Confidence Signal</span>
<span className="text-xs font-medium text-orange-400 px-2 py-0.5 rounded bg-orange-400/10 border border-orange-400/20">LOW</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full bg-orange-500/50 w-1/4 animate-pulse-slow"></div>
</div>
<p className="text-xs text-slate-500 font-mono">
                    &gt; STATUS: AI is uncertain. Interpretation is fragmented.
                </p>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
</div>
<div>
<a className="group inline-flex items-center gap-2 text-sm text-slate-100 hover:text-indigo-400 transition-colors" href="#alignment">
                    Where Does Confidence Break?
                    <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center py-24 border-l border-dashed border-slate-800/50 pl-6 md:pl-12 ml-3 md:ml-0" id="alignment">
<div className="mb-12">
<h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white mb-6">
                    AI Avoids Uncertainty More Than Competition
                </h2>
<div className="max-w-xl text-slate-400 leading-relaxed mb-8">
<p className="mb-4">When AI isn’t sure, it chooses safer brands. Uncertainty comes from unclear positioning, fragmented content, human-only messaging, or inconsistent explanations.</p>
<p className="text-slate-200">Decipher OS removes that friction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-6 rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
<iconify-icon className="text-indigo-400 mb-3 text-2xl" icon="solar:magnifer-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Answer Presence</h3>
<p className="text-xs text-slate-400 leading-relaxed">Optimization to ensure you appear when specific questions are asked.</p>
</div>
<div className="p-6 rounded-lg border border-slate-800 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
<iconify-icon className="text-indigo-400 mb-3 text-2xl" icon="solar:tuning-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Brand Accuracy</h3>
<p className="text-xs text-slate-400 leading-relaxed">Structuring signals so AI describes you consistently across platforms.</p>
</div>
</div>
</div>

<div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 md:p-8 mb-12 relative overflow-hidden">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Confidence Signal</span>
<span className="text-xs font-medium text-blue-400 px-2 py-0.5 rounded bg-blue-400/10 border border-blue-400/20">STABLE</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full bg-blue-500 w-2/3 transition-all duration-1000"></div>
</div>
<p className="text-xs text-slate-500 font-mono">
                    &gt; STATUS: Pattern recognition verified. AI is beginning to trust your signals.
                </p>
</div>
<div>
<a className="group inline-flex items-center gap-2 text-sm text-slate-100 hover:text-indigo-400 transition-colors" href="#inclusion">
                    What Happens After Alignment?
                    <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center py-24 border-l border-dashed border-slate-800/50 pl-6 md:pl-12 ml-3 md:ml-0" id="inclusion">
<div className="mb-12">
<h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white mb-6">
                    This Is When AI Starts Choosing You
                </h2>
<div className="max-w-xl text-slate-400 leading-relaxed">
<p className="mb-6">After alignment, AI stops hesitating. Your brand begins appearing in:</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Direct Answers</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Contextual Summaries</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Recommendations</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:library-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Category Explanations</span>
</div>
</div>
<p className="text-slate-200 font-medium italic">This isn’t volume growth. It’s growth by trust.</p>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-900/20 to-slate-900/50 border border-indigo-500/30 rounded-lg p-6 md:p-8 mb-12 relative overflow-hidden shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-indigo-300 uppercase tracking-widest">Confidence Signal</span>
<span className="text-xs font-medium text-white px-2 py-0.5 rounded bg-indigo-500 border border-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]">TRUSTED</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mb-2">
<div className="h-full bg-indigo-400 w-full shadow-[0_0_15px_rgba(129,140,248,0.8)]"></div>
</div>
<p className="text-xs text-indigo-200 font-mono">
                    &gt; STATUS: Verified. Entity included in generative outputs.
                </p>
</div>
<div>
<a className="group inline-flex items-center gap-2 text-sm text-slate-100 hover:text-indigo-400 transition-colors" href="#begin">
                    How We Begin
                    <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center py-24 pb-32 border-l border-dashed border-slate-800/50 pl-6 md:pl-12 ml-3 md:ml-0" id="begin">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-light tracking-tighter text-white">
                        This Is the Entry Point
                    </h2>
<div className="text-slate-400 leading-relaxed space-y-4">
<p>We don’t start with long contracts or packages. We start with clarity. Most brands begin with a focused <strong className="text-slate-200 font-medium">AI Visibility Audit</strong>:</p>
<ul className="space-y-2 pl-4 border-l-2 border-indigo-900/50 my-6">
<li className="text-sm">1. How AI currently interprets you</li>
<li className="text-sm">2. Where confidence drops</li>
<li className="text-sm">3. Where competitors are trusted instead</li>
</ul>
<p>Some brands continue. Some don’t. Both outcomes are useful.</p>
<div className="pt-6 mt-6 border-t border-slate-800">
<h4 className="text-sm font-medium text-slate-200 mb-2">Pricing</h4>
<p className="text-sm text-slate-500">Initial Visibility Audit — pricing depends on category complexity and AI coverage. We tell you upfront if it’s worth doing.</p>
</div>
</div>
</div>

<div className="bg-slate-900/20 border border-slate-800 rounded-xl p-8 backdrop-blur-sm">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Company URL</label>
<div className="relative group">
<iconify-icon className="absolute left-3 top-3 text-slate-500 group-focus-within:text-indigo-400 transition-colors" icon="solar:link-linear"></iconify-icon>
<input className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono" placeholder="decipher.os" type="url"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Email Address</label>
<div className="relative group">
<iconify-icon className="absolute left-3 top-3 text-slate-500 group-focus-within:text-indigo-400 transition-colors" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="you@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Primary Category</label>
<div className="relative group">
<iconify-icon className="absolute left-3 top-3 text-slate-500 group-focus-within:text-indigo-400 transition-colors" icon="solar:layers-linear"></iconify-icon>
<input className="w-full bg-slate-950/50 border border-slate-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="e.g. Fintech, SaaS, Healthcare" type="text"/>
</div>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm py-3 px-4 rounded-lg transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 mt-4 group">
                            Reveal My AI Visibility
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-600 mt-4">
                            No spam. No sales theatrics. Just clarity.
                        </p>
</form>
</div>
</div>

<footer className="mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 opacity-50">
<iconify-icon className="text-slate-400" icon="solar:atom-linear" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-tight text-slate-400">Decipher OS © 2024</span>
</div>
<div className="text-[10px] text-slate-600">
                    Optimizing for the Machine Age.
                </div>
</footer>
</section>
</main>

    </>
  );
}
