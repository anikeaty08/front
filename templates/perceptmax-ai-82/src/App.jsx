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
      

<nav className="fixed w-full top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium tracking-tighter text-lg uppercase text-white">
                Percept<span className="text-neutral-500">Max</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400 tracking-wide">
<a className="hover:text-white transition-colors" href="#product">Product</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-neutral-300 hover:text-white transition-colors">Sign In</button>
<button className="bg-yellow-400 text-neutral-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-300 transition-colors">Get Started</button>
</div>
</div>
</nav>
<main className="pt-24 overflow-hidden relative">

<div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"></div>

<section className="max-w-7xl mx-auto px-6 py-16 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-400/20 bg-yellow-400/5 text-yellow-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                    The New Standard for AI SEO
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-balance">
                    Understand How <br/><span className="text-neutral-400">AI Sees Your Brand</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 mb-10 max-w-lg leading-relaxed">
                    Measure, analyze, and improve how AI models like ChatGPT and Gemini perceive your brand — and turn insights into action.
                </p>
<div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-yellow-400 text-neutral-950 px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-300 transition-all flex items-center justify-center gap-2">
                        Get Started
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium border border-neutral-800 text-neutral-300 hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        View Demo
                    </button>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-neutral-900/50 border border-white/10 rounded-3xl p-6 overflow-hidden glow-accent backdrop-blur-sm">

<div className="flex gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
</div>

<div className="space-y-6">
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-neutral-500 font-medium mb-1 uppercase tracking-wider">Brand Visibility Score</div>
<div className="text-4xl font-semibold tracking-tight text-white">84.2</div>
</div>
<div className="flex items-center gap-1 text-yellow-400 text-sm font-medium bg-yellow-400/10 px-2 py-1 rounded">
<iconify-icon icon="solar:trend-up-linear" strokeWidth="1.5"></iconify-icon>
                            +12%
                        </div>
</div>

<div className="relative h-32 w-full flex items-end gap-2 border-b border-neutral-800 pb-2">
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-yellow-400/80 rounded-t-sm h-[85%] relative">
<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-sm h-[70%]"></div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-neutral-800/30 border border-white/5 rounded-xl p-4">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-neutral-300">ChatGPT-4</span>
<span className="text-xs text-yellow-400">High</span>
</div>
<div className="w-full bg-neutral-900 rounded-full h-1.5"><div className="bg-yellow-400 h-1.5 rounded-full w-[85%]"></div></div>
</div>
<div className="bg-neutral-800/30 border border-white/5 rounded-xl p-4">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-neutral-300">Gemini Pro</span>
<span className="text-xs text-neutral-500">Medium</span>
</div>
<div className="w-full bg-neutral-900 rounded-full h-1.5"><div className="bg-neutral-600 h-1.5 rounded-full w-[45%]"></div></div>
</div>
</div>
</div>

<div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">AI is the new search layer.</h2>
<p className="text-neutral-400 text-lg">The way users find information has fundamentally changed. Traditional SEO isn't enough.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="border-l border-neutral-800 pl-6">
<iconify-icon className="text-2xl text-yellow-400 mb-4 block" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Shift in Behavior</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Users are asking AI models for recommendations, not scrolling through Google search results.</p>
</div>
<div className="border-l border-neutral-800 pl-6">
<iconify-icon className="text-2xl text-yellow-400 mb-4 block" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">AI Curation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">AI algorithms independently decide which brands to mention, highlight, or ignore in their responses.</p>
</div>
<div className="border-l border-neutral-800 pl-6">
<iconify-icon className="text-2xl text-yellow-400 mb-4 block" icon="solar:eye-closed-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">The Visibility Gap</h3>
<p className="text-sm text-neutral-400 leading-relaxed">If you're not visible in LLM outputs, to the next generation of consumers, you simply don't exist.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">PerceptMax gives you control.</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-lg md:text-xl text-neutral-400 font-medium tracking-tight">
<span className="flex items-center gap-3"><iconify-icon className="text-yellow-400" icon="solar:target-linear"></iconify-icon> Track visibility</span>
<span className="hidden md:block w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
<span className="flex items-center gap-3"><iconify-icon className="text-yellow-400" icon="solar:brain-linear"></iconify-icon> Understand perception</span>
<span className="hidden md:block w-1.5 h-1.5 rounded-full bg-neutral-800"></span>
<span className="flex items-center gap-3"><iconify-icon className="text-yellow-400" icon="solar:bolt-linear"></iconify-icon> Take action</span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="product">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Product Snapshot</h2>
<p className="text-neutral-400 text-base max-w-xl">A complete platform to understand and improve your AI visibility across all major language models.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:scanner-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">AI Perception Engine</h3>
<p className="text-sm text-neutral-500 mb-8">Understand exactly how AI describes your brand to users.</p>
<div className="mt-auto bg-neutral-950 rounded-xl p-4 border border-neutral-800/50">
<div className="flex gap-3 mb-3">
<div className="w-6 h-6 rounded bg-neutral-800 shrink-0 flex items-center justify-center"><iconify-icon className="text-xs text-neutral-400" icon="solar:user-linear"></iconify-icon></div>
<div className="h-6 w-full bg-neutral-800/50 rounded"></div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-yellow-400/10 shrink-0 flex items-center justify-center"><iconify-icon className="text-xs text-yellow-400" icon="solar:magic-stick-3-linear"></iconify-icon></div>
<div className="space-y-2 w-full">
<div className="h-2 w-full bg-neutral-800 rounded"></div>
<div className="h-2 w-4/5 bg-neutral-800 rounded"></div>
<div className="h-2 w-1/2 bg-yellow-400/40 rounded"></div>
</div>
</div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:radar-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Competitive Intelligence</h3>
<p className="text-sm text-neutral-500 mb-8">See how you compare against competitors across AI responses.</p>
<div className="mt-auto bg-neutral-950 rounded-xl p-4 border border-neutral-800/50 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="text-xs font-medium text-neutral-400 w-8">You</div>
<div className="flex-1 h-3 bg-neutral-900 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 w-[75%] rounded-full"></div></div>
</div>
<div className="flex items-center gap-3">
<div className="text-xs font-medium text-neutral-500 w-8">Comp A</div>
<div className="flex-1 h-3 bg-neutral-900 rounded-full overflow-hidden"><div className="h-full bg-neutral-700 w-[45%] rounded-full"></div></div>
</div>
<div className="flex items-center gap-3">
<div className="text-xs font-medium text-neutral-500 w-8">Comp B</div>
<div className="flex-1 h-3 bg-neutral-900 rounded-full overflow-hidden"><div className="h-full bg-neutral-700 w-[30%] rounded-full"></div></div>
</div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Prompt Visibility</h3>
<p className="text-sm text-neutral-500 mb-8">Track your rankings across thousands of real user queries.</p>
<div className="mt-auto bg-neutral-950 rounded-xl p-4 border border-neutral-800/50 h-[104px] flex items-end gap-1 pb-2">
<div className="w-full bg-neutral-800 h-[20%] rounded-t-sm transition-all group-hover:h-[30%]"></div>
<div className="w-full bg-neutral-800 h-[35%] rounded-t-sm transition-all group-hover:h-[40%]"></div>
<div className="w-full bg-neutral-800 h-[25%] rounded-t-sm transition-all group-hover:h-[45%]"></div>
<div className="w-full bg-neutral-800 h-[50%] rounded-t-sm transition-all group-hover:h-[60%]"></div>
<div className="w-full bg-yellow-400 h-[70%] rounded-t-sm transition-all group-hover:h-[85%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-yellow-400 text-neutral-950 px-1.5 py-0.5 rounded font-medium opacity-0 group-hover:opacity-100 transition-opacity">Top 1</div>
</div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Content Opportunities</h3>
<p className="text-sm text-neutral-500 mb-8">Discover missing information and what content to create next.</p>
<div className="mt-auto bg-neutral-950 rounded-xl p-4 border border-neutral-800/50 space-y-3">
<div className="flex items-center justify-between border-b border-neutral-800 pb-2">
<div className="h-2 w-1/2 bg-neutral-700 rounded"></div>
<iconify-icon className="text-sm text-yellow-400" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between border-b border-neutral-800 pb-2">
<div className="h-2 w-3/4 bg-neutral-800 rounded"></div>
<iconify-icon className="text-sm text-neutral-600" icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between">
<div className="h-2 w-2/3 bg-neutral-800 rounded"></div>
<iconify-icon className="text-sm text-neutral-600" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:global-search-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Website AI Audit</h3>
<p className="text-sm text-neutral-500 mb-8">Optimize your site structure specifically for AI crawler discovery.</p>
<div className="mt-auto bg-neutral-950 rounded-xl p-4 border border-neutral-800/50 flex items-center justify-center h-[104px]">
<div className="relative w-16 h-16 rounded-full flex items-center justify-center" style={{background: 'conic-gradient(#facc15 85%, #262626 0)'}}>
<div className="absolute inset-1 bg-neutral-950 rounded-full flex items-center justify-center">
<span className="text-xs font-semibold text-white">85%</span>
</div>
</div>
</div>
</div>

<div className="group bg-neutral-900/40 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900/80 hover:border-white/10 transition-all duration-300 flex flex-col">
<div className="mb-4">
<iconify-icon className="text-xl text-yellow-400" icon="solar:link-circle-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Source Analysis</h3>
<p className="text-sm text-neutral-500 mb-8">See exactly where AI models are pulling your brand information from.</p>
<div className="mt-auto bg-neutral-950 rounded-xl p-4 border border-neutral-800/50 h-[104px] relative overflow-hidden flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-yellow-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_8px_#facc15]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600 absolute top-4 left-6"></div>
<div className="w-1 h-1 rounded-full bg-neutral-600 absolute bottom-4 right-8"></div>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-600 absolute top-6 right-6"></div>

<svg className="absolute inset-0 w-full h-full opacity-30" preserveaspectratio="none" viewbox="0 0 100 100">
<line stroke="#facc15" strokeWidth="1" x1="50" x2="20" y1="50" y2="20"></line>
<line stroke="#525252" strokeWidth="0.5" x1="50" x2="80" y1="50" y2="80"></line>
<line stroke="#facc15" strokeWidth="0.5" x1="50" x2="80" y1="50" y2="20"></line>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/10" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-16 text-center">How it works</h2>
<div className="flex flex-col md:flex-row justify-between gap-8 relative">

<div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent z-0"></div>

<div className="flex flex-col items-center text-center relative z-10 flex-1">
<div className="w-12 h-12 rounded-full bg-neutral-950 border border-neutral-800 text-yellow-400 flex items-center justify-center font-medium text-sm mb-6 shadow-lg">1</div>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Setup</h4>
<p className="text-xs text-neutral-500">Add your brand &amp; competitors</p>
</div>

<div className="flex flex-col items-center text-center relative z-10 flex-1">
<div className="w-12 h-12 rounded-full bg-neutral-950 border border-neutral-800 text-yellow-400 flex items-center justify-center font-medium text-sm mb-6 shadow-lg">2</div>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Simulate</h4>
<p className="text-xs text-neutral-500">Run AI simulations globally</p>
</div>

<div className="flex flex-col items-center text-center relative z-10 flex-1">
<div className="w-12 h-12 rounded-full bg-neutral-950 border border-neutral-800 text-yellow-400 flex items-center justify-center font-medium text-sm mb-6 shadow-lg">3</div>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Analyze</h4>
<p className="text-xs text-neutral-500">View visibility &amp; perception</p>
</div>

<div className="flex flex-col items-center text-center relative z-10 flex-1">
<div className="w-12 h-12 rounded-full bg-yellow-400 text-neutral-950 flex items-center justify-center font-medium text-sm mb-6 shadow-[0_0_15px_rgba(250,204,21,0.3)]">4</div>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Optimize</h4>
<p className="text-xs text-neutral-500">Get actions &amp; recommendations</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="features">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">What you get</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="border border-white/5 bg-neutral-900/20 rounded-2xl p-8">
<h3 className="text-lg font-medium text-white mb-6 tracking-tight flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:eye-linear"></iconify-icon>
                        Visibility Tracking
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Proprietary <strong className="text-neutral-200 font-medium">AIS score</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Query-level <strong className="text-neutral-200 font-medium">ranking</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Market <strong className="text-neutral-200 font-medium">share of voice</strong></span>
</li>
</ul>
</div>

<div className="border border-white/5 bg-neutral-900/20 rounded-2xl p-8">
<h3 className="text-lg font-medium text-white mb-6 tracking-tight flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:brain-linear"></iconify-icon>
                        Perception Intelligence
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>AI response <strong className="text-neutral-200 font-medium">sentiment</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Brand <strong className="text-neutral-200 font-medium">associations</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Competitive <strong className="text-neutral-200 font-medium">positioning</strong></span>
</li>
</ul>
</div>

<div className="border border-white/5 bg-neutral-900/20 rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full pointer-events-none"></div>
<h3 className="text-lg font-medium text-white mb-6 tracking-tight flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:rocket-linear"></iconify-icon>
                        Actionable Engine
                    </h3>
<ul className="space-y-4 relative z-10">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Automated <strong className="text-neutral-200 font-medium">weekly plans</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-neutral-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>AI-gap <strong className="text-neutral-200 font-medium">content ideas</strong></span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<iconify-icon className="text-yellow-400/50 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Clear <strong className="text-neutral-200 font-medium text-yellow-400/80">action items</strong></span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-12">Trusted by teams optimizing for AI-first discovery</p>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-40 grayscale">
<div className="text-xl font-semibold tracking-tighter text-white">ACME CORP</div>
<div className="text-xl font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:planet-linear"></iconify-icon> GLOBAL</div>
<div className="text-xl font-medium tracking-wide text-white font-serif italic">Vertex</div>
<div className="text-lg font-bold tracking-widest text-white uppercase border-2 border-white px-2 py-0.5">NXT</div>
<div className="text-xl font-medium tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:code-circle-linear"></iconify-icon> Syntax</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-32">
<div className="bg-neutral-900 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 relative z-10 text-balance mx-auto">
                    If AI is shaping decisions, you need to control how it sees you.
                </h2>
<button className="relative z-10 mt-8 bg-yellow-400 text-neutral-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-yellow-300 transition-all hover:scale-105 shadow-[0_0_40px_rgba(250,204,21,0.2)]">
                    Start Tracking Your Brand
                </button>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-neutral-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-medium tracking-tighter text-base uppercase text-neutral-500">
                PerceptMax
            </div>
<div className="text-xs text-neutral-600">
                © 2024 PerceptMax Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
