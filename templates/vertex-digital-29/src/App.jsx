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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-black">
<iconify-icon icon="solar:command-linear" width="16"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">VERTEX</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Start Project
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 hover:border-white/20 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                Crafting digital <br/>
<span className="text-gradient">perfection.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                We are a design and engineering agency building world-class web and mobile applications for ambitious brands.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3.5 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                    Book a Consultation
                    <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</button>
<button className="w-full md:w-auto px-8 py-3.5 border border-white/10 bg-transparent text-white rounded-full text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                    View Case Studies
                </button>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale">

<span className="text-xl font-semibold tracking-tighter text-white">ACME</span>
<span className="text-xl font-semibold tracking-tighter text-white">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-white">VELOCITY</span>
<span className="text-xl font-semibold tracking-tighter text-white">KINETIC</span>
<span className="text-xl font-semibold tracking-tighter text-white">ORBITAL</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Our Expertise</h2>
<p className="text-neutral-400 max-w-md text-sm leading-relaxed">End-to-end product development capabilities, from initial ideation to global scaling.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors mt-4 md:mt-0" href="#">
                    See full capabilities
                    <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group md:col-span-2 p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 hover:border-white/20 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:monitor-smartphone-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Product Design</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">We design intuitive, engaging user interfaces that prioritize user experience and conversion. Design systems, prototyping, and user research.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 hover:border-white/20">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Engineering</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Scalable frontend and backend architectures using Next.js, React, and Node.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 hover:border-white/20">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Growth</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Data-driven strategies to increase retention and optimize performance.</p>
</div>

<div className="group md:col-span-2 p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 hover:border-white/20 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:server-square-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Security &amp; Infrastructure</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">Enterprise-grade security implementation and cloud infrastructure management tailored for speed and reliability.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-neutral-900/20" id="methodology">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 text-center">How we work</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative pt-8 md:pt-0">
<div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white z-10 relative mx-auto md:mx-0 md:mb-8">
<span className="text-xs font-mono">01</span>
</div>
<div className="text-center md:text-left">
<h4 className="text-lg font-medium text-white mb-2">Discovery</h4>
<p className="text-sm text-neutral-400 leading-relaxed">We deep dive into your business goals, user needs, and market landscape.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white z-10 relative mx-auto md:mx-0 md:mb-8">
<span className="text-xs font-mono">02</span>
</div>
<div className="text-center md:text-left">
<h4 className="text-lg font-medium text-white mb-2">Design</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Iterative prototyping and high-fidelity UI/UX design phases.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white z-10 relative mx-auto md:mx-0 md:mb-8">
<span className="text-xs font-mono">03</span>
</div>
<div className="text-center md:text-left">
<h4 className="text-lg font-medium text-white mb-2">Develop</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Agile development sprints with regular shipping and feedback loops.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="w-10 h-10 rounded-full bg-black border border-white/20 flex items-center justify-center text-white z-10 relative mx-auto md:mx-0 md:mb-8">
<span className="text-xs font-mono">04</span>
</div>
<div className="text-center md:text-left">
<h4 className="text-lg font-medium text-white mb-2">Launch</h4>
<p className="text-sm text-neutral-400 leading-relaxed">QA testing, deployment, and post-launch monitoring and support.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">50+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Products Shipped</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">$200M</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Client Valuation</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">12</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Awards Won</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2">24h</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Support Avg</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-900/30 pt-24 pb-12 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Ready to build the future?</h2>
<p className="text-neutral-400 text-lg mb-8 max-w-md">Let's discuss your project. We typically respond within 24 hours.</p>
<div className="flex flex-col gap-4 text-sm text-neutral-300">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:letter-linear"></iconify-icon>
                            hello@vertex.agency
                        </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:map-point-linear"></iconify-icon>
                            San Francisco, CA
                        </div>
</div>
</div>
<div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 md:p-8">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Name</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Project Type</label>
<div className="grid grid-cols-2 gap-3">
<label className="custom-checkbox cursor-pointer relative">
<input className="sr-only" name="type" type="radio"/>
<div className="border border-white/10 rounded-lg p-3 text-center text-sm text-neutral-400 hover:bg-white/5 transition-all">
                                        Design
                                    </div>
</label>
<label className="custom-checkbox cursor-pointer relative">
<input className="sr-only" name="type" type="radio"/>
<div className="border border-white/10 rounded-lg p-3 text-center text-sm text-neutral-400 hover:bg-white/5 transition-all">
                                        Development
                                    </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-neutral-700 resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="submit">
                            Send Request
                            <iconify-icon icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4">
<div className="flex items-center gap-2 text-white">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black">
<iconify-icon icon="solar:command-linear" width="12"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm">VERTEX</span>
</div>
<div className="text-xs text-neutral-600">
                    © 2024 Vertex Agency Inc. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
