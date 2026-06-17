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
      

<nav className="fixed top-0 w-full z-50 border-b border-indigo-200 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-indigo-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-indigo-900 text-white flex items-center justify-center rounded">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
                CLARITY.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-indigo-900 transition-colors" href="#process">Process</a>
<a className="hover:text-indigo-900 transition-colors" href="#features">Features</a>
<a className="hover:text-indigo-900 transition-colors" href="#pricing">Plans</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-indigo-900 hidden sm:block" href="#">Log in</a>
<a className="hover:bg-indigo-800 transition-colors flex items-center gap-2 group text-sm font-medium text-white bg-indigo-900 rounded-md pt-2 pr-4 pb-2 pl-4" href="#" style={{}}>View Plans<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-indigo-200/50 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-white text-xs font-medium text-indigo-600 mb-8 shadow-sm">
<iconify-icon className="text-blue-600" icon="solar:shield-check-linear"></iconify-icon>
                SEBI-Compliant Research • Long-Term Focus
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-indigo-900 tracking-tight mb-6" style={{}}>Invest With Clarity.<br/> <span className="text-indigo-400">Grow With Confidence.</span></h1>
<p className="text-lg md:text-xl text-indigo-500 max-w-2xl mx-auto leading-relaxed mb-10">
                Research-driven equity portfolios built for long-term wealth creation. No noise, no speculation, only transparent conviction.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-indigo-800 transition-all flex gap-2 shadow-indigo-200 text-sm font-medium text-white bg-indigo-900 w-full h-12 rounded-md pr-8 pl-8 shadow-lg gap-x-2 gap-y-2 items-center justify-center" style={{}}>View Plans</button>
<button className="w-full sm:w-auto h-12 px-8 bg-white border border-indigo-200 text-indigo-900 text-sm font-medium rounded-md hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                    Free Expert Call
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 border-y border-indigo-200 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 md:gap-24">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium text-indigo-900 tracking-tight mb-4">
                        Long-Term Investing.<br/>Simplified.
                    </h2>
<p className="text-indigo-500 leading-relaxed">
                        We help you build wealth through disciplined equity research — no noise, no speculation, only conviction.
                    </p>
</div>
<div className="md:w-2/3 grid sm:grid-cols-2 gap-x-8 gap-y-10">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-900 shrink-0">
<iconify-icon className="" height="20" icon="solar:pie-chart-2-linear" style={{color: 'rgb(49, 46, 129)'}} width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-indigo-900 font-medium mb-1">Fundamental Research</h3>
<p className="text-sm text-indigo-500 leading-relaxed">Sector-led analysis to identify value.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-900 shrink-0">
<iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-indigo-900 font-medium mb-1">Risk Managed</h3>
<p className="text-sm text-indigo-500 leading-relaxed">Portfolio construction focused on downside protection.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-900 shrink-0">
<iconify-icon className="" icon="solar:checklist-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-indigo-900 font-medium mb-1">Clear Framework</h3>
<p className="text-sm text-indigo-500 leading-relaxed">Transparent buy, hold, and review methodology.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-900 shrink-0">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-indigo-900 font-medium mb-1">Timely Alerts</h3>
<p className="text-sm text-indigo-500 leading-relaxed">Instant updates on portfolio rebalancing.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-indigo-50">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-indigo-900 tracking-tight mb-4">Built for Serious Investors</h2>
<p className="text-indigo-500">Designed for those who want structure, simplicity, and steady growth.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-indigo-900 font-medium text-sm mb-1">First-time Investors</h3>
<p className="text-xs text-indigo-500">Starting their journey right.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:case-round-linear"></iconify-icon>
</div>
<h3 className="text-indigo-900 font-medium text-sm mb-1">Professionals</h3>
<p className="text-xs text-indigo-500">Busy with limited research time.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:graph-new-linear"></iconify-icon>
</div>
<h3 className="text-indigo-900 font-medium text-sm mb-1">Wealth Builders</h3>
<p className="text-xs text-indigo-500">Focused on compounding.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-indigo-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</div>
<h3 className="text-indigo-900 font-medium text-sm mb-1">Tired of Noise</h3>
<p className="text-xs text-indigo-500">Avoiding random stock tips.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-indigo-900 border-b border-indigo-200 hover:border-indigo-900 transition-colors pb-0.5" href="#">
                    Check Your Fit <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-indigo-200 bg-white" id="process">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-medium text-indigo-900 tracking-tight mb-16 max-w-lg">
                How We Select<br/>High-Growth Stocks
            </h2>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-indigo-200 via-indigo-200 to-transparent"></div>
<div className="relative pt-8">
<div className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-indigo-900 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-2">Step 01</span>
<h3 className="text-lg font-medium text-indigo-900 mb-2">Sector Opportunity</h3>
<p className="text-sm text-indigo-500 leading-relaxed">Identifying industries with high long-term growth visibility and structural tailwinds.</p>
</div>
<div className="relative pt-8">
<div className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-indigo-200 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-2">Step 02</span>
<h3 className="text-lg font-medium text-indigo-900 mb-2">Business Quality</h3>
<p className="text-sm text-indigo-500 leading-relaxed">Filtering for strong fundamentals, scalable models, and proven leadership.</p>
</div>
<div className="relative pt-8">
<div className="absolute top-0 left-0 -translate-y-1/2 w-3 h-3 bg-indigo-200 rounded-full ring-4 ring-white"></div>
<span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block mb-2">Step 03</span>
<h3 className="text-lg font-medium text-indigo-900 mb-2">Smart Entry</h3>
<p className="text-sm text-indigo-500 leading-relaxed">Waiting for reasonable valuation zones to effectively manage downside risk.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-indigo-50" id="features">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<h2 className="text-3xl font-medium text-indigo-900 tracking-tight">What You Get</h2>
<p className="text-indigo-500 text-sm max-w-sm">Everything you need to maintain a disciplined investment strategy.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-indigo-200 shadow-sm flex flex-col justify-between h-64 hover:border-indigo-300 transition-colors">
<iconify-icon className="text-indigo-800 text-3xl" icon="solar:bag-heart-linear"></iconify-icon>
<div className="">
<h3 className="text-indigo-900 font-medium mb-2">Curated Portfolio</h3>
<p className="text-sm text-indigo-500">Research-backed stock selection aimed at maximizing returns.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-indigo-200 shadow-sm flex flex-col justify-between h-64 hover:border-indigo-300 transition-colors">
<iconify-icon className="text-indigo-800 text-3xl" icon="solar:chart-square-linear"></iconify-icon>
<div className="">
<h3 className="text-indigo-900 font-medium mb-2">Clear Allocation</h3>
<p className="text-sm text-indigo-500">Precise guidance on how much capital to allocate to each stock.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-indigo-200 shadow-sm flex flex-col justify-between h-64 hover:border-indigo-300 transition-colors">
<iconify-icon className="text-indigo-800 text-3xl" icon="solar:hourglass-linear"></iconify-icon>
<div className="">
<h3 className="text-indigo-900 font-medium mb-2">Long-Term Horizon</h3>
<p className="text-sm text-indigo-500">Strategies designed for 12-36 months. No unnecessary churn.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-indigo-200 shadow-sm flex flex-col justify-between h-64 hover:border-indigo-300 transition-colors">
<iconify-icon className="text-indigo-800 text-3xl" icon="solar:shield-check-linear"></iconify-icon>
<div className="">
<h3 className="text-indigo-900 font-medium mb-2">Risk Management</h3>
<p className="text-sm text-indigo-500">Built-in downside protection mechanisms and diversity.</p>
</div>
</div>

<div className="bg-indigo-900 p-8 rounded-2xl border border-indigo-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between h-auto md:h-64 lg:col-span-2 group">
<div className="flex flex-col justify-between h-full max-w-md">
<iconify-icon className="text-indigo-400 text-3xl mb-8 md:mb-0" icon="solar:document-add-linear"></iconify-icon>
<div className="">
<h3 className="text-white font-medium mb-2">Ongoing Research Updates</h3>
<p className="text-sm text-indigo-400">Stay informed. Stay confident. We provide rationale for every move.</p>
</div>
</div>
<div className="mt-8 md:mt-0">
<div className="w-12 h-12 rounded-full bg-indigo-800 flex items-center justify-center text-white group-hover:bg-indigo-700 transition-colors cursor-pointer">
<iconify-icon className="" height="24" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-indigo-200">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-medium text-indigo-900 tracking-tight mb-12">Start in 3 Simple Steps</h2>
<div className="grid md:grid-cols-3 gap-8 text-left">
<div className="p-6 rounded-lg bg-indigo-50 border border-indigo-100">
<span className="text-4xl font-semibold text-indigo-200 mb-4 block">1</span>
<h3 className="text-indigo-900 font-medium mb-1">Set Risk Profile</h3>
<p className="text-sm text-indigo-500">Quick questions to define your direction.</p>
</div>
<div className="p-6 rounded-lg bg-indigo-50 border border-indigo-100">
<span className="text-4xl font-semibold text-indigo-200 mb-4 block">2</span>
<h3 className="text-indigo-900 font-medium mb-1">Choose a Plan</h3>
<p className="text-sm text-indigo-500">Plans aligned with your financial goals.</p>
</div>
<div className="p-6 rounded-lg bg-indigo-50 border border-indigo-100">
<span className="text-4xl font-semibold text-indigo-200 mb-4 block">3</span>
<h3 className="text-indigo-900 font-medium mb-1">Start Investing</h3>
<p className="text-sm text-indigo-500">Actionable research delivered instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-indigo-50 text-center">
<div className="max-w-2xl mx-auto">
<div className="flex justify-center gap-1 text-cyan-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-indigo-900 tracking-tight mb-8">Trusted by Long-Term Investors</h2>
<div className="grid md:grid-cols-2 gap-8">
<figure className="">
<blockquote className="text-indigo-600 mb-4">"Clear strategy and disciplined approach. Exactly what I needed."</blockquote>
<figcaption className="text-sm font-medium text-indigo-900">— Amit S.</figcaption>
</figure>
<figure className="">
<blockquote className="text-indigo-600 mb-4">"Perfect for long-term wealth building without the daily stress."</blockquote>
<figcaption className="text-sm font-medium text-indigo-900">— Priya M.</figcaption>
</figure>
</div>
</div>
</section>

<section className="py-24 px-6 bg-indigo-900 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Invest Smarter. Stay Disciplined.</h2>
<p className="text-indigo-400 text-lg mb-10">Make confident investment decisions backed by structured research.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 bg-white text-indigo-900 text-sm font-medium rounded-md hover:bg-indigo-100 transition-all flex items-center justify-center gap-2">
                    Start Investing Now
                </button>
<button className="w-full sm:w-auto h-12 px-8 border border-indigo-700 text-white text-sm font-medium rounded-md hover:border-indigo-500 transition-all flex items-center justify-center gap-2">
                    Talk to an Expert <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-medium text-indigo-900 tracking-tight mb-10">Common Questions</h2>
<div className="space-y-4">
<details className="group border-b border-indigo-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-indigo-900 font-medium py-2">
                        Is this suitable for beginners?
                        <span className="text-indigo-400 transition-transform group-open:rotate-180">
<iconify-icon className="" height="16" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(129, 140, 248)'}} width="16"></iconify-icon>
</span>
</summary>
<p className="text-sm text-indigo-500 mt-2 leading-relaxed">Yes. Our approach is simple, guided, and research-driven, specifically designed to help new investors build confidence.</p>
</details>
<details className="group border-b border-indigo-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-indigo-900 font-medium py-2">
                        What is the ideal investment horizon?
                        <span className="text-indigo-400 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-sm text-indigo-500 mt-2 leading-relaxed">We recommend a horizon of 12–36 months to allow the fundamental thesis to play out and generate optimal returns.</p>
</details>
<details className="group border-b border-indigo-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-indigo-900 font-medium py-2">
                        Are updates provided regularly?
                        <span className="text-indigo-400 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-sm text-indigo-500 mt-2 leading-relaxed">Yes. You receive timely alerts for any buy/sell decisions, along with periodic portfolio reviews and performance reports.</p>
</details>
<details className="group border-b border-indigo-100 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-indigo-900 font-medium py-2">
                        Is this trading or intraday?
                        <span className="text-indigo-400 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-sm text-indigo-500 mt-2 leading-relaxed">No. This is strictly long-term fundamental investing. We do not engage in or recommend intraday trading or speculation.</p>
</details>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-indigo-200 bg-indigo-50">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-base font-medium tracking-tight text-indigo-900 flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-indigo-900 text-white flex items-center justify-center rounded-sm">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
</div>
                CLARITY.
            </a>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-indigo-500">
<span className="flex items-center gap-1"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> SEBI-Compliant Research</span>
<span className="flex items-center gap-1"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Transparent Methodology</span>
<span className="flex items-center gap-1"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Investor-First Approach</span>
</div>
<div className="text-xs text-indigo-400">
                © 2024 Clarity Research.
            </div>
</div>
</footer>

    </>
  );
}
