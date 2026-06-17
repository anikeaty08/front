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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<nav className="fixed w-full top-0 z-50 glass-nav border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="bg-zinc-100 text-black w-6 h-6 flex items-center justify-center rounded text-xs font-bold">W</span>
<span>WIN BIGGER CONTRACTS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all" href="#contact">
                    Audit Your Brand
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden grid-bg">
<div className="absolute top-0 left-0 w-full h-full glow-bg pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Accepting new contractor clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                Stop bidding low.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-indigo-200">Win the tier-1 projects.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                We turn local contractors into enterprise-ready partners. Elevate your credibility, master the tender process, and secure lucrative government and corporate contracts.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-white text-zinc-950 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                    Book Strategy Call
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full md:w-auto bg-transparent border border-zinc-800 text-zinc-300 px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-all">
                    View Success Stories
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-6 relative">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-xl opacity-20 blur-xl"></div>
<div className="relative bg-zinc-900/80 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="ml-4 h-1.5 w-32 bg-zinc-700 rounded-full"></div>
</div>
<div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-2">
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Average Contract Value</div>
<div className="text-3xl text-white font-medium tracking-tight flex items-baseline gap-2">
                            $2.4M 
                            <span className="text-xs text-emerald-400 font-normal">+240%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mt-2">
<div className="h-full w-3/4 bg-indigo-500 rounded-full"></div>
</div>
</div>

<div className="space-y-2">
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Tender Win Rate</div>
<div className="text-3xl text-white font-medium tracking-tight flex items-baseline gap-2">
                            42% 
                            <span className="text-xs text-emerald-400 font-normal">+18%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mt-2">
<div className="h-full w-1/2 bg-sky-500 rounded-full"></div>
</div>
</div>

<div className="space-y-2">
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Compliance Score</div>
<div className="text-3xl text-white font-medium tracking-tight flex items-baseline gap-2">
                            ISO 9001
                            <i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>
</div>
<div className="flex gap-1 mt-3">
<div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
<div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
<div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
<div className="h-1 w-8 bg-emerald-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-zinc-500 mb-8">We help contractors win work with industry leaders</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-1"><i className="w-5 h-5" data-lucide="building-2"></i> METRO RAIL</div>
<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-1"><i className="w-5 h-5" data-lucide="landmark"></i> GOV INFRASTRUCTURE</div>
<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-1"><i className="w-5 h-5" data-lucide="factory"></i> APEX MINING</div>
<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-1"><i className="w-5 h-5" data-lucide="plane"></i> CITY AIRPORT</div>
<div className="text-lg font-bold tracking-tighter text-white flex items-center gap-1"><i className="w-5 h-5" data-lucide="zap"></i> POWER GRID</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6">The "Small Guy" Trap</h2>
<p className="text-zinc-400 max-w-2xl text-lg font-light">You have the skills to do the job. But your branding, documentation, and bid processes scream "risky bet" to procurement officers. We fix the optics.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 border border-rose-500/20">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Credibility Gap</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Your website looks DIY and your capability statement is a Word doc. Big clients pass you over for safer-looking options.
                    </p>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex items-center gap-2 text-indigo-300 text-sm font-medium">
<i className="w-4 h-4" data-lucide="check"></i>
<span>Professional Asset Overhaul</span>
</div>
</div>
</div>

<div className="group p-8 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 border border-amber-500/20">
<i className="w-5 h-5" data-lucide="file-x"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Tender Fatigue</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        You spend nights writing bids that get ignored. You lack the ISO certifications and compliance language required to pass round one.
                    </p>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex items-center gap-2 text-indigo-300 text-sm font-medium">
<i className="w-4 h-4" data-lucide="check"></i>
<span>ISO &amp; Bid Strategy</span>
</div>
</div>
</div>

<div className="group p-8 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-3">Low Margins</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Competing on price with other small contractors is a race to the bottom. Tier-1 clients buy on value, safety, and capacity.
                    </p>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex items-center gap-2 text-indigo-300 text-sm font-medium">
<i className="w-4 h-4" data-lucide="check"></i>
<span>Value-Based Positioning</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/20" id="services">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3">
<span className="text-indigo-400 text-sm font-medium mb-2 block">Services</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6">Everything you need to bid with confidence.</h2>
<p className="text-zinc-400 text-lg font-light mb-8">
                    We don't just give advice; we build the assets and systems you need to compete at the highest level.
                </p>
<a className="text-white border-b border-indigo-500 pb-1 inline-flex items-center gap-2 hover:text-indigo-300 transition-colors text-sm" href="#contact">
                    Explore our packages <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-zinc-700">
<i className="w-4 h-4 text-white" data-lucide="pen-tool"></i>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">Capability Statements</h4>
<p className="text-sm text-zinc-400 leading-relaxed">High-design documents that showcase your team, fleet, and past projects in a language corporate buyers understand.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-zinc-700">
<i className="w-4 h-4 text-white" data-lucide="shield-check"></i>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">ISO &amp; Compliance</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Guidance on ISO 9001, 14001, and 45001 certification preparation to clear pre-qualification hurdles.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-zinc-700">
<i className="w-4 h-4 text-white" data-lucide="scroll-text"></i>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">Tender Writing</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Professional bid writing and management. We answer the criteria clearly to maximize your evaluation score.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center border border-zinc-700">
<i className="w-4 h-4 text-white" data-lucide="monitor"></i>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-2">Digital Presence</h4>
<p className="text-sm text-zinc-400 leading-relaxed">Website overhauls focusing on trust signals, case studies, and lead capture for government procurement teams.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">The Elevation Process</h2>
<p className="text-zinc-400">Four weeks to transform your contracting business.</p>
</div>
<div className="max-w-5xl mx-auto px-6 relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 md:block hidden"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 gap-8">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2">Gap Analysis</h3>
<p className="text-sm text-zinc-400">We audit your current assets against what tier-1 clients actually require. We find the holes in your bucket.</p>
</div>
<div className="absolute left-0 md:relative md:left-auto w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center z-10 order-1 md:order-2">
<span className="text-sm font-bold text-white">01</span>
</div>
<div className="md:w-5/12 order-3 pl-16 md:pl-0">

</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 gap-8">
<div className="md:w-5/12 order-3 md:order-1"></div>
<div className="absolute left-0 md:relative md:left-auto w-12 h-12 rounded-full bg-zinc-950 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.3)] flex items-center justify-center z-10 order-1 md:order-2">
<span className="text-sm font-bold text-indigo-400">02</span>
</div>
<div className="md:w-5/12 text-left order-2 md:order-3 pl-16 md:pl-0">
<h3 className="text-xl font-medium text-white mb-2">Asset Build</h3>
<p className="text-sm text-zinc-400">Our team rewrites your capability statement, builds your case study library, and polishes your brand.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-5/12 text-left md:text-right order-2 md:order-1">
<h3 className="text-xl font-medium text-white mb-2">Bid Execution</h3>
<p className="text-sm text-zinc-400">We identify a live tender, develop the strategy, and support your first major bid submission.</p>
</div>
<div className="absolute left-0 md:relative md:left-auto w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center z-10 order-1 md:order-2">
<span className="text-sm font-bold text-white">03</span>
</div>
<div className="md:w-5/12 order-3 pl-16 md:pl-0"></div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-zinc-950 to-zinc-900" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Ready to play in the big leagues?</h2>
<p className="text-zinc-400 text-lg mb-10 font-light">
                Stop leaving money on the table. Book a free 30-minute strategy audit to see if you qualify for our acceleration program.
            </p>
<div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/10 text-left shadow-2xl backdrop-blur-sm">
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Full Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-sm placeholder:text-zinc-600" placeholder="John Smith" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Company Email</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-sm placeholder:text-zinc-600" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Current Annual Revenue</label>
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none text-sm appearance-none cursor-pointer">
<option>$1M - $5M</option>
<option>$5M - $20M</option>
<option>$20M+</option>
</select>
</div>
<div className="flex items-start gap-3 py-2">
<div className="flex h-5 items-center">
<input className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-indigo-600 focus:ring-indigo-600/20" id="offers" type="checkbox"/>
</div>
<div className="text-sm">
<label className="font-medium text-zinc-300" htmlFor="offers">Send me the "Winning Bigger" newsletter</label>
<p className="text-zinc-500 text-xs">Weekly tips on tender strategies.</p>
</div>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 mt-4" type="button">
                        Request Audit
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
<p className="mt-8 text-xs text-zinc-600">
                Strictly confidential. We typically respond within 24 hours.
            </p>
</div>
</section>

<footer className="py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="bg-zinc-800 text-zinc-400 w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold">W</span>
<span className="text-zinc-500 text-sm font-medium tracking-tight">WIN BIGGER CONTRACTS</span>
</div>
<div className="flex gap-8 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-zinc-600">
                © 2023 WBC Consulting. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
