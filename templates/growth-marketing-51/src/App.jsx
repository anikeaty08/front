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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-semibold">ND</div>
                Nexus
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:flex text-sm font-medium bg-white text-slate-950 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors items-center gap-2" href="#contact">
                Start Project
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                Scale revenue with <br/>
<span className="text-gradient">data-driven marketing.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We bridge the gap between creative storytelling and analytical precision to build brands that don't just exist, but perform.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Book Strategy Call
                </a>
<a className="w-full md:w-auto px-8 py-3.5 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-white" href="#work">
                    View Case Studies
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">$50M+</div>
<div className="text-sm text-slate-500">Revenue Generated</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">120%</div>
<div className="text-sm text-slate-500">Avg. YoY Growth</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">85+</div>
<div className="text-sm text-slate-500">Active Partners</div>
</div>
<div>
<div className="text-3xl font-semibold text-white mb-1 tracking-tight">14x</div>
<div className="text-sm text-slate-500">Average ROI</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Holistic Digital Ecosystems</h2>
<p className="text-slate-400 font-light">We don't just run ads. We engineer full-funnel systems designed to acquire, retain, and monetize customers.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 mt-4 md:mt-0" href="#">
                    View all services <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="glass md:col-span-2 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon height="120" icon="solar:magnifer-linear" width="120"></iconify-icon>
</div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 mb-4">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Search Engine Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-md">Technical audits, content architecture, and backlink strategies that drive organic traffic that actually converts.</p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute -bottom-4 -right-4 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="100" icon="solar:chart-2-linear" width="100"></iconify-icon>
</div>
<div className="flex flex-col h-full justify-between">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-teal-400 mb-4">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Performance Marketing</h3>
<p className="text-sm text-slate-400 leading-relaxed">High-ROAS campaigns on Meta, Google, and LinkedIn.</p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="flex flex-col h-full justify-between">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-rose-400 mb-4">
<iconify-icon height="24" icon="solar:pie-chart-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Data &amp; Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed">GA4 setups, custom dashboards, and conversion tracking.</p>
</div>
</div>
</div>

<div className="glass md:col-span-2 rounded-2xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-between">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-4 z-10">
<iconify-icon height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl font-medium text-white mb-2">Content Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-md">Authority-building articles, whitepapers, and email flows designed to nurture leads into loyal customers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/50 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Selected Work</h2>
<div className="space-y-20">

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-white/5">
<div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition-colors flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-slate-900 rounded border border-white/5 shadow-2xl flex flex-col p-4">
<div className="flex gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 grid grid-cols-3 gap-4">
<div className="bg-white/5 rounded h-full"></div>
<div className="col-span-2 bg-white/5 rounded h-full"></div>
</div>
</div>
</div>
</div>
<div>
<div className="text-indigo-400 font-medium mb-4 text-sm tracking-wide uppercase">Fintech SaaS</div>
<h3 className="text-2xl font-medium text-white mb-4">Scaling acquisition for NovaPay</h3>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                            We restructured their paid social account structure and implemented server-side tracking, resulting in a 45% decrease in CAC within 90 days.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">Paid Social</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">CRO</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">Strategy</span>
</div>
<a className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">
                            Read Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
<div className="md:order-2 relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-white/5">
<div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition-colors flex items-center justify-center">

<div className="w-3/4 h-3/4 flex items-center justify-center gap-4">
<div className="w-20 h-32 bg-indigo-500/20 rounded-full border border-indigo-500/40 transform -translate-y-4"></div>
<div className="w-20 h-40 bg-white/10 rounded-full border border-white/20"></div>
<div className="w-20 h-24 bg-teal-500/20 rounded-full border border-teal-500/40 transform translate-y-4"></div>
</div>
</div>
</div>
<div className="md:order-1">
<div className="text-teal-400 font-medium mb-4 text-sm tracking-wide uppercase">E-Commerce</div>
<h3 className="text-2xl font-medium text-white mb-4">SEO Dominance for WearLab</h3>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                            Through a programmatic SEO approach and technical overhaul, we captured 12,000+ new monthly organic visitors in the highly competitive fashion niche.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">Technical SEO</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">Content</span>
</div>
<a className="inline-flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">
                            Read Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-slate-600 mb-6 text-4xl" icon="solar:quote-up-linear"></iconify-icon>
<blockquote className="text-2xl md:text-4xl font-medium text-white leading-tight mb-8 tracking-tight">
                "Nexus didn't just run our ads, they completely overhauled our growth engine. The level of transparency and data-backed decision making is unmatched."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 border border-white/10 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover grayscale" src="https://ui-avatars.com/api/?name=Alex+Rivera&amp;background=random&amp;color=fff"/>
</div>
<div className="text-left">
<div className="text-white font-medium text-sm">Alex Rivera</div>
<div className="text-slate-500 text-xs">CMO, TechFlow Solutions</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/20 -z-10"></div>
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Ready to accelerate?</h2>
<p className="text-slate-400">Book a discovery call to see if we're a match.</p>
</div>
<form className="glass p-8 md:p-10 rounded-2xl border border-white/10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Name</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-2 mb-6">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Project Focus</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="text-sm border border-white/10 rounded-lg px-3 py-2 text-center text-slate-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/5">SEO</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="text-sm border border-white/10 rounded-lg px-3 py-2 text-center text-slate-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/5">PPC</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="text-sm border border-white/10 rounded-lg px-3 py-2 text-center text-slate-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/5">Content</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="text-sm border border-white/10 rounded-lg px-3 py-2 text-center text-slate-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/5">Analytics</div>
</label>
</div>
</div>
<div className="space-y-2 mb-8">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600" placeholder="Tell us about your goals..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-slate-950 font-medium py-3.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                    Send Request
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-slate-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-[10px] font-semibold text-white">ND</div>
<span className="text-slate-400 text-sm">Nexus Digital © 2024</span>
</div>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
