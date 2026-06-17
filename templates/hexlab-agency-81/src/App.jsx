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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-6 h-6 flex items-center justify-center">
<iconify-icon className="text-white group-hover:text-indigo-400 transition-colors duration-300" icon="solar:hexagon-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">HEXLAB</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="h-8 px-4 rounded-full bg-white text-black text-xs font-medium flex items-center hover:bg-neutral-200 transition-colors" href="#">
                    Start Project
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 bg-grid pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide">ACCEPTING NEW CLIENTS FOR Q4</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                Digital products born from <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40">pure strategy.</span>
</h1>
<p className="text-lg text-neutral-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Hexlab transforms complex ideas into elegant, scalable web experiences. We build the interface between your brand and the world.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2">
                    View our work
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all">
                    Book a consultation
                </button>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:atom-linear"></iconify-icon> ACME</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:bolt-circle-linear"></iconify-icon> KINETIC</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:layers-minimalistic-linear"></iconify-icon> STACK</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:infinity-linear"></iconify-icon> LOOP</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="solar:shield-check-linear"></iconify-icon> SECURE</span>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Crafted for impact.</h2>
<p className="text-neutral-400 max-w-md">Our methodology combines data-driven strategy with world-class aesthetics to build software that scales.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-indigo-400 transition-colors mt-4 md:mt-0" href="#">
                    See all services <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass rounded-xl p-8 md:col-span-2 group hover:border-white/20 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity">
<iconify-icon className="text-white" icon="solar:monitor-smartphone-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="solar:figma-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Product Design</h3>
<p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
                            From wireframes to high-fidelity prototypes. We design intuitive user interfaces that guide users toward your business goals seamlessly.
                        </p>
</div>
</div>

<div className="glass rounded-xl p-8 group hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 border border-pink-500/20">
<iconify-icon className="text-pink-400" icon="solar:code-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Clean, semantic code using modern frameworks. Fast, accessible, and SEO optimized.
                    </p>
</div>

<div className="glass rounded-xl p-8 group hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Growth Strategy</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Data analysis and conversion rate optimization to ensure your site performs.
                    </p>
</div>

<div className="glass rounded-xl p-8 md:col-span-2 group hover:border-white/20 transition-colors relative overflow-hidden flex flex-col justify-center">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out]"></div>
<div className="flex items-start justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20">
<iconify-icon className="text-blue-400" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Design Systems</h3>
<p className="text-sm text-neutral-400 max-w-md leading-relaxed">
                                Scalable component libraries that unify your digital presence. Consistency across every touchpoint of your brand.
                            </p>
</div>
<div className="hidden sm:block">

<div className="border border-white/10 rounded-lg p-3 bg-[#0A0A0A] w-32">
<div className="flex items-center justify-between mb-2">
<div className="h-2 w-8 bg-neutral-700 rounded-full"></div>
<div className="h-3 w-5 rounded-full bg-indigo-500"></div>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full mb-1"></div>
<div className="h-2 w-2/3 bg-neutral-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5" id="work">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A] aspect-[4/3] group">
<div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>

<div className="absolute top-8 left-8 right-8 bottom-0 bg-[#050505] border-t border-x border-white/10 rounded-t-lg shadow-2xl overflow-hidden p-6">
<div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
<div className="w-8 h-8 rounded bg-white/10"></div>
<div className="h-2 w-24 bg-white/10 rounded-full"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-24 bg-white/5 rounded border border-white/5"></div>
<div className="h-24 bg-white/5 rounded border border-white/5"></div>
<div className="h-24 bg-white/5 rounded border border-white/5 col-span-2"></div>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded text-xs font-medium bg-indigo-500/10 text-indigo-400 mb-6 border border-indigo-500/20">
                    FEATURED PROJECT
                </div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Redefining Fintech Interfaces</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    We partnered with Nova Financial to overhaul their dashboard. By simplifying the information architecture and introducing a dark-mode first design system, we increased user retention by 40%.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Reduced load times by 60%
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Accessibility compliance WCAG 2.1
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        Integrated real-time data streaming
                    </li>
</ul>
<a className="text-white text-sm font-medium border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#">Read full case study</a>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Selected Cases</h2>
<p className="text-neutral-400 text-sm">Recent digital products shipped to market.</p>
</div>
<a className="flex items-center gap-2 text-sm text-white hover:text-indigo-400 transition-colors" href="#">
                    View archive <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden relative mb-5 transition-all duration-300 group-hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-[#050505] border border-white/5 rounded-lg shadow-2xl p-4 flex flex-col gap-3 group-hover:scale-105 transition-transform duration-500 ease-out">
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
<div className="flex-1 h-8 rounded bg-white/5"></div>
</div>
<div className="flex-1 rounded bg-white/5"></div>
<div className="h-12 rounded bg-white/5"></div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-blue-400 transition-colors">Chronos SaaS</h3>
<p className="text-sm text-neutral-500">Productivity &amp; Automation</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">Web App</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">2023</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden relative mb-5 transition-all duration-300 group-hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-[#050505] border border-white/5 rounded-lg shadow-2xl p-4 flex flex-col gap-3 group-hover:scale-105 transition-transform duration-500 ease-out">
<div className="flex justify-between items-center">
<div className="w-16 h-4 rounded bg-emerald-500/20"></div>
<div className="w-4 h-4 rounded-full bg-white/10"></div>
</div>
<div className="flex gap-2 mt-2">
<div className="w-full h-24 rounded bg-white/5 flex items-end p-2 gap-1">
<div className="w-1/4 h-1/2 bg-emerald-500/20 rounded-sm"></div>
<div className="w-1/4 h-3/4 bg-emerald-500/20 rounded-sm"></div>
<div className="w-1/4 h-2/3 bg-emerald-500/20 rounded-sm"></div>
<div className="w-1/4 h-full bg-emerald-500/30 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-emerald-400 transition-colors">Apex Trading</h3>
<p className="text-sm text-neutral-500">Fintech Dashboard</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">Design System</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">2024</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden relative mb-5 transition-all duration-300 group-hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-3/4 h-3/4 grid grid-cols-2 gap-3 group-hover:scale-105 transition-transform duration-500 ease-out">
<div className="bg-[#050505] border border-white/5 rounded-lg"></div>
<div className="bg-[#050505] border border-white/5 rounded-lg flex items-center justify-center">
<iconify-icon className="text-purple-400" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<div className="bg-[#050505] border border-white/5 rounded-lg col-span-2"></div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-purple-400 transition-colors">Lumina AI</h3>
<p className="text-sm text-neutral-500">Generative Intelligence</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">Marketing</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">2023</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden relative mb-5 transition-all duration-300 group-hover:border-white/20">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-900/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-64 h-full bg-[#050505] border-x border-white/5 flex flex-col group-hover:scale-105 transition-transform duration-500 ease-out">
<div className="h-10 border-b border-white/5 flex items-center justify-center gap-2">
<div className="w-20 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="p-4 grid grid-cols-2 gap-2">
<div className="aspect-square bg-white/5 rounded"></div>
<div className="aspect-square bg-white/5 rounded"></div>
<div className="aspect-square bg-white/5 rounded"></div>
<div className="aspect-square bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white mb-1 group-hover:text-orange-400 transition-colors">Velvet &amp; Co</h3>
<p className="text-sm text-neutral-500">Luxury E-commerce</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">Shopify</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 text-neutral-400">2024</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Ready to build the future?</h2>
<p className="text-neutral-400 mb-10">Join the waitlist for our next cohort or schedule a direct call with our design leads.</p>
<form className="text-left bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Email address</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="flex items-start gap-3 mt-4">
<label className="custom-checkbox relative flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 border border-white/20 rounded bg-[#050505] transition-all flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-black opacity-0 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
<span className="text-xs text-neutral-400 leading-tight pt-0.5">I agree to receive communications from Hexlab. <br/> <span className="text-neutral-600">No spam, unsubscribe anytime.</span></span>
</div>
<button className="w-full h-10 mt-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors" type="button">
                        Get Started
                    </button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-white" icon="solar:hexagon-linear" width="20"></iconify-icon>
<span className="text-white font-medium tracking-tight text-sm">HEXLAB</span>
</a>
<p className="text-xs text-neutral-500">
                        Designing the web of tomorrow, <br/>one pixel at a time.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Sitemap</h4>
<ul className="space-y-2">
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Work</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Agency</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Socials</h4>
<ul className="space-y-2">
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex items-center justify-between pt-8 border-t border-white/5">
<p className="text-[10px] text-neutral-600">© 2024 Hexlab Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-neutral-500">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
