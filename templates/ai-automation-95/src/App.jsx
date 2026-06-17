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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
950: '#082f49',
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-500/50 transition-colors">
<span className="text-white font-semibold text-lg tracking-tighter">M</span>
</div>
<span className="text-white font-semibold tracking-tight text-lg">Marliaw<span className="text-slate-500">Intelligence</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">How It Works</a>
<a className="hover:text-white transition-colors" href="#industries">Industries</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-all transform hover:scale-105" href="#contact">
<span>Book Strategy Call</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-400 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                    Accepting New Enterprise Clients
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                    Scale your business with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-500">Intelligent AI Agents</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                    We design custom AI agents and automations that save time, reduce costs, and scale your operations — without the complexity.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 rounded-full gradient-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2" href="#contact">
                        Book a Free AI Strategy Call
                        <i className="w-4 h-4" data-lucide="calendar"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#services">
                        Explore Services
                        <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</div>

<div className="mt-20 pt-10 border-t border-white/5 w-full">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-6 font-medium">Trusted by forward-thinking companies</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="hexagon"></i><span className="font-bold tracking-tight text-lg">ACME Corp</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="triangle"></i><span className="font-bold tracking-tight text-lg">Vertex</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="circle"></i><span className="font-bold tracking-tight text-lg">Orbit</span></div>
<div className="flex items-center gap-2"><i className="w-5 h-5" data-lucide="square"></i><span className="font-bold tracking-tight text-lg">Nexus</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Core Capabilities</h2>
<p className="text-slate-400 max-w-lg">Comprehensive AI solutions tailored to remove bottlenecks and accelerate growth.</p>
</div>
<a className="text-brand-400 hover:text-brand-300 text-sm font-medium flex items-center gap-2" href="#contact">
                    View full capabilities <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 card-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-6 text-brand-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI Agent Creation</h3>
<p className="text-sm leading-relaxed text-slate-400">Custom-built autonomous agents that handle customer support, lead qualification, and data processing 24/7.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 card-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Workflow Automation</h3>
<p className="text-sm leading-relaxed text-slate-400">Connect your favorite apps (Slack, CRM, Email) to create seamless, automated pipelines that require zero manual input.</p>
</div>

<div className="group p-8 rounded-2xl bg-white/5 border border-white/10 card-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Custom AI Solutions</h3>
<p className="text-sm leading-relaxed text-slate-400">Bespoke Large Language Model (LLM) integration and fine-tuning for specific enterprise knowledge bases.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#03060a]" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">From Concept to Automation</h2>
<p className="text-slate-400">A streamlined three-step process designed for speed and impact.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#03060a] border border-white/10 flex items-center justify-center relative z-10 mb-6">
<span className="text-3xl font-semibold text-white">01</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Discovery &amp; Strategy</h3>
<p className="text-sm text-slate-400 px-4">We audit your current workflows to identify high-impact automation opportunities.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#03060a] border border-brand-500/30 flex items-center justify-center relative z-10 mb-6 shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)]">
<span className="text-3xl font-semibold text-brand-400">02</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Design &amp; Build</h3>
<p className="text-sm text-slate-400 px-4">Our engineers develop custom agents and integrate automation layers tailored to your stack.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#03060a] border border-white/10 flex items-center justify-center relative z-10 mb-6">
<span className="text-3xl font-semibold text-white">03</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Deploy &amp; Optimize</h3>
<p className="text-sm text-slate-400 px-4">We launch your system, monitor performance, and refine for maximum efficiency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="industries">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Built for Modern Industries</h2>
<p className="text-slate-400 mb-8 text-lg">Whether you are in Real Estate, E-commerce, or Healthcare, our intelligent agents adapt to your specific business logic.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-brand-500" data-lucide="check-circle"></i>
<span>Real Estate: Lead qualification &amp; scheduling</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-brand-500" data-lucide="check-circle"></i>
<span>E-commerce: 24/7 Support &amp; Order tracking</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-brand-500" data-lucide="check-circle"></i>
<span>Agencies: Client onboarding &amp; Reporting</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-brand-500" data-lucide="check-circle"></i>
<span>Healthcare: Appointment setting &amp; FAQ</span>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 aspect-square hover:bg-white/10 transition-colors">
<i className="w-8 h-8 text-slate-200" data-lucide="building-2"></i>
<span className="text-sm font-medium text-white">Real Estate</span>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 aspect-square hover:bg-white/10 transition-colors">
<i className="w-8 h-8 text-slate-200" data-lucide="shopping-bag"></i>
<span className="text-sm font-medium text-white">E-commerce</span>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 aspect-square hover:bg-white/10 transition-colors">
<i className="w-8 h-8 text-slate-200" data-lucide="stethoscope"></i>
<span className="text-sm font-medium text-white">Healthcare</span>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 aspect-square hover:bg-white/10 transition-colors">
<i className="w-8 h-8 text-slate-200" data-lucide="briefcase"></i>
<span className="text-sm font-medium text-white">Professional Services</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020408] border-t border-white/5" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-sm font-semibold text-brand-400 tracking-widest uppercase mb-4">About Us</h2>
<h3 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">Engineering the Future of Efficiency</h3>
<p className="text-lg text-slate-400 leading-relaxed mb-10">
                Marliaw Intelligence was founded on a simple premise: humans should do high-value creative work, and AI should handle the rest. We are a team of automation engineers and strategists dedicated to helping businesses leverage the most powerful technology of our generation.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-bold text-white mb-1">100+</div>
<div className="text-xs text-slate-500">Workflows Automated</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">24/7</div>
<div className="text-xs text-slate-500">System Uptime</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">10x</div>
<div className="text-xs text-slate-500">ROI Average</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">0%</div>
<div className="text-xs text-slate-500">Implementation Risk</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-brand-900/10 to-black"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 backdrop-blur-sm">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Ready to Automate?</h2>
<p className="text-slate-400 mb-8 text-lg">Book a free 15-minute discovery call. We'll discuss your current bottlenecks and map out an automation strategy specifically for your business.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-brand-400" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-white font-medium">Email Us</h4>
<p className="text-slate-500 text-sm">contact@marliawintelligence.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-brand-400" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-white font-medium">Headquarters</h4>
<p className="text-slate-500 text-sm">Ottawa, ON, CA</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">First Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Last Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Email Work Address</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">Business Type</label>
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none">
<option>Service Business</option>
<option>E-commerce</option>
<option>Real Estate</option>
<option>Other</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1">What would you like to automate?</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all h-24 resize-none" placeholder="Describe your manual processes..."></textarea>
</div>
<button className="w-full py-4 rounded-lg gradient-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity mt-2" type="submit">
                            Request Strategy Call
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
<span className="text-white font-bold text-xs">M</span>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Marliaw Intelligence</span>
</div>
<div className="flex gap-8 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-xs text-slate-600">
                © 2024 Marliaw Intelligence. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
