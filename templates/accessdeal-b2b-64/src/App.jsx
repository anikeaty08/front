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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-neutral-800/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

<div className="fixed bottom-8 right-8 z-40 flex flex-col gap-3">
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group shadow-lg" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<i className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" data-lucide="arrow-up" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 group shadow-lg" onclick="window.scrollBy({top: window.innerHeight * 0.8, behavior: 'smooth'})">
<i className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" data-lucide="arrow-down" strokeWidth="1.5"></i>
</button>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-10">

<a className="flex items-center" href="#">
<img alt="AccessDeal" className="h-8 w-auto" src="logo.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#access">Access</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#method">Method</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#sectors">Sectors</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#criteria">Criteria</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-medium" href="#availability">Availability</a>
</div>
</div>

<a className="shiny-cta hidden sm:inline-flex items-center justify-center" href="https://cal.com/velodent-ogbkfv/20min" target="_blank">
<span>Request Consideration</span>
</a>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 px-6 overflow-hidden" id="access">
<div className="max-w-4xl mx-auto text-center">

<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                Private B2B Deal Access
            </div>

<h1 className="fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                Private Access to<br className="hidden sm:block"/> High-Intent Enterprise Buyers
            </h1>

<p className="fade-in-up delay-200 text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10">
                AccessDeal is a private B2B connector working with a limited number of companies each year. We introduce our partners to decision-makers who are already buying, hiring, or actively evaluating solutions.
            </p>
<p className="fade-in-up delay-200 text-base text-neutral-500 mb-12">
                This is not a lead generation service. <span className="text-neutral-300">This is controlled deal access.</span>
</p>

<div className="fade-in-up delay-200 w-full max-w-3xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900">
<div className="relative w-full aspect-video">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/2rS8oMFeOXA?si=kzltge9oBP2C4pHi&amp;controls=1&amp;rel=0&amp;modestbranding=1" title="AccessDeal Introduction"></iframe>
</div>
</div>

<div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors w-full sm:w-auto" href="https://cal.com/velodent-ogbkfv/20min" target="_blank">
                    Request Consideration
                </a>
<span className="text-xs text-neutral-600 uppercase tracking-widest mt-4 sm:mt-0 sm:ml-4">Invitation Only</span>
</div>

<div className="fade-in-up delay-300 mt-20 pt-10 border-t border-white/5">
<p className="text-sm text-neutral-500 max-w-3xl mx-auto">
                    We work with biotech, pharmaceutical, aerospace, and adjacent enterprise sectors, leveraging senior-level relationships built over years.
                </p>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-950/30 scroll-mt-20" id="availability">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-4">A Selective Engagement Model</h2>
<h3 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">We work with a maximum of six companies per year.</h3>
<div className="space-y-6 text-lg text-neutral-400">
<p>This limit is intentional. Our work depends on timing, trust, and relationship depth — not volume.</p>
<p>Currently, <span className="text-white">four partnerships are active</span>. Remaining availability is reviewed on a case-by-case basis.</p>
<div className="flex items-center gap-3 text-white/80">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-base">We do not accept every company that applies.</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl blur-2xl -z-10"></div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/5 p-8 rounded-xl backdrop-blur-sm">
<span className="block text-4xl sm:text-5xl font-medium text-white mb-2 tracking-tight">06</span>
<span className="text-sm text-neutral-500">Maximum Annual Partners</span>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-xl backdrop-blur-sm">
<span className="block text-4xl sm:text-5xl font-medium text-white mb-2 tracking-tight">04</span>
<span className="text-sm text-neutral-500">Currently Active</span>
</div>
<div className="col-span-2 bg-neutral-900/50 border border-white/5 p-6 rounded-xl flex items-center justify-between">
<span className="text-neutral-400 text-sm">Availability Status</span>
<span className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                                Open for Review
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4">We Are Connectors — Not Sellers</h2>
<p className="text-lg text-neutral-400 max-w-2xl">AccessDeal introduces qualified companies to relevant decision-makers based on real buying intent, active operational needs, timing, and context.</p>
</div>
<div className="grid sm:grid-cols-3 gap-8 mb-16">
<div className="group p-6 rounded-2xl bg-neutral-900/20 border border-white/5 hover:bg-white/5 transition-colors">
<i className="text-white w-8 h-8 mb-4 opacity-80" data-lucide="target" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white mb-2">Real Buying Intent</h3>
<p className="text-base text-neutral-500">Connections are made only when a need is identified.</p>
</div>
<div className="group p-6 rounded-2xl bg-neutral-900/20 border border-white/5 hover:bg-white/5 transition-colors">
<i className="text-white w-8 h-8 mb-4 opacity-80" data-lucide="clock" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white mb-2">Timing &amp; Context</h3>
<p className="text-base text-neutral-500">We align introductions with budgetary and hiring cycles.</p>
</div>
<div className="group p-6 rounded-2xl bg-neutral-900/20 border border-white/5 hover:bg-white/5 transition-colors">
<i className="text-white w-8 h-8 mb-4 opacity-80" data-lucide="handshake" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-white mb-2">Active Needs</h3>
<p className="text-base text-neutral-500">Targeting operational gaps that require immediate solutions.</p>
</div>
</div>
<div className="grid sm:grid-cols-3 gap-6 text-center border-t border-white/5 pt-12">
<div>
<span className="block text-white font-medium mb-1">We do not sell lists.</span>
</div>
<div>
<span className="block text-white font-medium mb-1">We do not run mass outreach.</span>
</div>
<div>
<span className="block text-white font-medium mb-1">We do not operate as an agency.</span>
</div>
</div>
<p className="text-center text-neutral-500 mt-6 text-sm uppercase tracking-widest">Every connection is deliberate.</p>
</div>
</section>

<section className="py-24 bg-neutral-900/30 scroll-mt-20" id="sectors">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-12">Who We Work With</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-black/40">
<i className="w-5 h-5 text-white/70" data-lucide="microscope" strokeWidth="1.5"></i>
<span className="text-neutral-300 text-sm">Biotechnology</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-black/40">
<i className="w-5 h-5 text-white/70" data-lucide="flask-conical" strokeWidth="1.5"></i>
<span className="text-neutral-300 text-sm">Pharma Services</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-black/40">
<i className="w-5 h-5 text-white/70" data-lucide="plane" strokeWidth="1.5"></i>
<span className="text-neutral-300 text-sm">Aerospace</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-black/40">
<i className="w-5 h-5 text-white/70" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-neutral-300 text-sm">Staffing &amp; Recruitment</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-black/40">
<i className="w-5 h-5 text-white/70" data-lucide="server" strokeWidth="1.5"></i>
<span className="text-neutral-300 text-sm">Enterprise Tech</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-lg border border-white/5 bg-black/40">
<i className="w-5 h-5 text-white/70" data-lucide="factory" strokeWidth="1.5"></i>
<span className="text-neutral-300 text-sm">Advanced Mfg</span>
</div>
</div>
<p className="mt-10 text-neutral-500 text-base">Our network includes senior buyers, operators, and commercial leaders.</p>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-t border-white/5 scroll-mt-20" id="criteria">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.02] blur-[80px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto bg-neutral-900/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
<div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-2">Outcome-Based Commitment</h2>
<p className="text-neutral-400">Each engagement includes a six-month guarantee.</p>
</div>
<div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-1 bg-white/20 rounded-full my-1"></div>
<div>
<h4 className="text-white font-medium mb-1">Five high-quality, decision-maker clients</h4>
<p className="text-sm text-neutral-500">Qualified based on relevance, timing, and buying intent.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-1 bg-white/20 rounded-full my-1"></div>
<div>
<h4 className="text-white font-medium mb-1">Direct Introductions</h4>
<p className="text-sm text-neutral-500">Introduced directly — not passed through SDR layers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-1 bg-white/20 rounded-full my-1"></div>
<div>
<h4 className="text-white font-medium mb-1">Extended Alignment</h4>
<p className="text-sm text-neutral-500">If alignment is not met, we continue working until it is.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 scroll-mt-20" id="method">
<div className="max-w-5xl mx-auto">
<h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest text-center mb-16">How It Works</h2>
<div className="relative">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
<div className="space-y-12">

<div className="md:flex items-center justify-between gap-12 group">
<div className="md:w-1/2 md:text-right">
<h3 className="text-xl text-white font-medium mb-2">Assessment</h3>
<p className="text-neutral-500 text-sm">We assess fit and market positioning.</p>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 bg-black z-10 items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<div className="md:w-1/2"></div>
</div>

<div className="md:flex items-center justify-between gap-12 group">
<div className="md:w-1/2"></div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 bg-black z-10 items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-white transition-colors rounded-full"></div>
</div>
<div className="md:w-1/2">
<h3 className="text-xl text-white font-medium mb-2">Buyer Profiling</h3>
<p className="text-neutral-500 text-sm">We define the exact buyer profile and timing signals.</p>
</div>
</div>

<div className="md:flex items-center justify-between gap-12 group">
<div className="md:w-1/2 md:text-right">
<h3 className="text-xl text-white font-medium mb-2">Network Activation</h3>
<p className="text-neutral-500 text-sm">We activate our network and outbound intelligence.</p>
</div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 bg-black z-10 items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-white transition-colors rounded-full"></div>
</div>
<div className="md:w-1/2"></div>
</div>

<div className="md:flex items-center justify-between gap-12 group">
<div className="md:w-1/2"></div>
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border border-white/20 bg-black z-10 items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-600 group-hover:bg-white transition-colors rounded-full"></div>
</div>
<div className="md:w-1/2">
<h3 className="text-xl text-white font-medium mb-2">Introduction</h3>
<p className="text-neutral-500 text-sm">We introduce only when intent is confirmed.</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-16 pt-16 border-t border-white/5">
<p className="text-lg text-white font-medium">Your team focuses on conversations and closing.</p>
<p className="text-lg text-neutral-500">We handle access.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/[0.02] scroll-mt-20" id="pricing">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-8">Private Engagement</h2>
<div className="bg-black border border-white/10 rounded-2xl p-10 sm:p-14 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] -mr-10 -mt-10 rounded-full"></div>
<div className="mb-8">
<p className="text-5xl sm:text-6xl font-medium text-white tracking-tighter mb-4">$12,000<span className="text-xl text-neutral-500 font-normal tracking-normal ml-2">/ month</span></p>
<p className="text-neutral-400 text-lg">Or $110,000 annually</p>
</div>
<p className="text-sm text-neutral-500 mb-8 max-w-md mx-auto">Annual partners receive priority access and extended market coverage.</p>
<div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10">
<div className="flex items-center gap-2 text-neutral-300 text-sm">
<i className="w-4 h-4 text-white/50" data-lucide="lock" strokeWidth="1.5"></i> Limited availability
                    </div>
<div className="flex items-center gap-2 text-neutral-300 text-sm">
<i className="w-4 h-4 text-white/50" data-lucide="key" strokeWidth="1.5"></i> Senior-level access
                    </div>
<div className="flex items-center gap-2 text-neutral-300 text-sm">
<i className="w-4 h-4 text-white/50" data-lucide="award" strokeWidth="1.5"></i> Outcome accountability
                    </div>
</div>
<div className="inline-block px-4 py-2 bg-neutral-900 rounded-lg border border-white/5">
<p className="text-xs text-neutral-500">Not suitable for early-stage or volume-driven companies.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="mb-10">
<i className="w-10 h-10 text-white mx-auto mb-6" data-lucide="zap-off" strokeWidth="1"></i>
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-6">Most companies don’t need more leads.</h2>
<p className="text-xl text-neutral-400">They need the right conversations at the right time.</p>
</div>
<p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                AccessDeal exists to remove noise, inefficiency, and randomness from B2B growth — replacing it with controlled access and trusted introductions.
            </p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 scroll-mt-20" id="request">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-2xl font-medium text-white mb-6">Request Consideration</h2>
<p className="text-neutral-400 mb-10">
                If your company is stable, well-positioned, and seeking selective access rather than volume, you may request consideration. We review a limited number of applications each quarter.
            </p>
<form className="space-y-4 max-w-sm mx-auto text-left">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1" htmlFor="email">Work Email</label>
<input className="w-full h-12 bg-neutral-900 border border-white/10 rounded-lg px-4 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700" id="email" placeholder="name@company.com" type="email"/>
</div>
<button className="w-full h-12 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Submit Request
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">

<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center overflow-hidden p-0.5 opacity-50">
<svg className="w-full h-full text-black fill-current" viewbox="0 0 100 100">
<path d="M50 50 L50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z"></path>
</svg>
</div>
<span className="text-neutral-500 font-medium tracking-tight">AccessDeal</span>
</div>
<div className="text-center md:text-right">
<p className="text-sm text-neutral-600">© 2025</p>
</div>
</div>
</footer>

    </>
  );
}
