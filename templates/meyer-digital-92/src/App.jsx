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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-xs text-white font-bold group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300">
                    M
                </div>
                MEYER DIGITAL CO.
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="text-white" href="#">Services</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Process</a>
<a className="hover:text-cyan-400 transition-colors" href="#">About</a>
</div>

<a className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group" href="#contact">
                Start a Project
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-2xl text-slate-400">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6">
                Technical Services
            </h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                Precision-engineered digital solutions designed for scalability, performance, and revenue growth.
            </p>
</div>
</header>

<section className="pb-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative p-8 rounded-2xl bg-[#050a16] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-cyan-950/30 text-cyan-400 flex items-center justify-center border border-cyan-500/10">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Logo Design</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                        A professionally crafted logo that clearly represents your brand and works consistently across all platforms.
                    </p>
<div className="space-y-6">
<div>
<span className="text-xs font-semibold tracking-wider text-white uppercase mb-4 block opacity-70">What's included</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-cyan-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Custom logo concepts (no templates)
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-cyan-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Two initial design options
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-cyan-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Revisions based on feedback
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-cyan-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Final files in PNG, JPG, and SVG
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-cyan-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Colour, black &amp; white variations
                                </li>
</ul>
</div>
<div className="pt-6 border-t border-white/5">
<span className="text-xs font-medium text-slate-500 mb-2 block">Best for:</span>
<div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-white/5 text-xs text-slate-300">
                                Startups, personal brands, and businesses needing a clean, modern identity.
                            </div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-[#050a16] border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-purple-950/30 text-purple-400 flex items-center justify-center border border-purple-500/10">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Landing Page Development</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                        High-converting, single-page websites built to capture leads, promote services, or launch offers.
                    </p>
<div className="space-y-6">
<div>
<span className="text-xs font-semibold tracking-wider text-white uppercase mb-4 block opacity-70">What's included</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-purple-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Custom landing page design
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-purple-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Mobile-responsive layout
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-purple-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Clear call-to-action structure
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-purple-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Contact or lead capture forms
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-purple-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Basic SEO setup &amp; performance-optimised
                                </li>
</ul>
</div>
<div className="pt-6 border-t border-white/5">
<span className="text-xs font-medium text-slate-500 mb-2 block">Best for:</span>
<div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-white/5 text-xs text-slate-300">
                                Marketing campaigns, service promotions, and product launches.
                            </div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-[#050a16] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-blue-950/30 text-blue-400 flex items-center justify-center border border-blue-500/10">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Full Website Development</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                        Complete multi-page websites designed to establish credibility and support long-term business growth.
                    </p>
<div className="space-y-6">
<div>
<span className="text-xs font-semibold tracking-wider text-white uppercase mb-4 block opacity-70">What's included</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Custom design (up to 5 pages)
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Mobile and tablet responsiveness
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Core pages (Home, About, Services, Contact)
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Forms and third-party integrations
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Scalable structure for future expansion
                                </li>
</ul>
</div>
<div className="pt-6 border-t border-white/5">
<span className="text-xs font-medium text-slate-500 mb-2 block">Best for:</span>
<div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-white/5 text-xs text-slate-300">
                                Established businesses, agencies, and growing brands.
                            </div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-[#050a16] border border-white/10 hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-emerald-950/30 text-emerald-400 flex items-center justify-center border border-emerald-500/10">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<div className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold tracking-wide uppercase">
                            POA
                        </div>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">App Development</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 flex-grow">
                        Custom applications built around your exact requirements, designed for scalability and performance. Android, iOS &amp; Web.
                    </p>
<div className="space-y-6">
<div>
<span className="text-xs font-semibold tracking-wider text-white uppercase mb-4 block opacity-70">What's included</span>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Requirement analysis and technical planning
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    UI/UX design
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Custom app development
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Backend systems and API integrations
                                </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Testing, deployment, and launch support
                                </li>
</ul>
</div>
<div className="pt-6 border-t border-white/5">
<span className="text-xs font-medium text-slate-500 mb-2 block">Best for:</span>
<div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-white/5 text-xs text-slate-300">
                                Startups, platforms, internal tools, and scalable digital products.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 px-6 overflow-hidden" id="contact">

<div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

<div className="lg:col-span-2 flex flex-col justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Let's build something <span className="text-cyan-400">exceptional</span> together.</h2>
<p className="text-slate-400 leading-relaxed mb-8">
                            Fill out the form with details about your project. We typically respond within 24 hours to schedule a discovery call.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-500 mb-1">Email us</p>
<a className="text-sm text-white hover:text-cyan-400 transition-colors" href="mailto:hello@meyerdigital.co">hello@meyerdigital.co</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-500 mb-1">Based in</p>
<p className="text-sm text-white">San Francisco, CA</p>
</div>
</div>
</div>
</div>
<div className="hidden lg:block">
<p className="text-xs text-slate-500">© 2024 Meyer Digital Co.</p>
</div>
</div>

<div className="lg:col-span-3">
<form className="bg-[#050a16] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-2xl relative">
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1" htmlFor="name">Full Name</label>
<input className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="mb-6 space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1">I'm interested in...</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="rounded-lg border border-white/10 bg-[#0a0f1c] px-3 py-2.5 text-xs text-slate-400 text-center hover:border-white/20 peer-checked:bg-cyan-500/10 peer-checked:border-cyan-500/50 peer-checked:text-cyan-400 transition-all">
                                        Logo Design
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="rounded-lg border border-white/10 bg-[#0a0f1c] px-3 py-2.5 text-xs text-slate-400 text-center hover:border-white/20 peer-checked:bg-cyan-500/10 peer-checked:border-cyan-500/50 peer-checked:text-cyan-400 transition-all">
                                        Landing Page
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="rounded-lg border border-white/10 bg-[#0a0f1c] px-3 py-2.5 text-xs text-slate-400 text-center hover:border-white/20 peer-checked:bg-cyan-500/10 peer-checked:border-cyan-500/50 peer-checked:text-cyan-400 transition-all">
                                        Website
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="rounded-lg border border-white/10 bg-[#0a0f1c] px-3 py-2.5 text-xs text-slate-400 text-center hover:border-white/20 peer-checked:bg-cyan-500/10 peer-checked:border-cyan-500/50 peer-checked:text-cyan-400 transition-all">
                                        App Dev
                                    </div>
</label>
</div>
</div>
<div className="mb-8 space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1" htmlFor="message">Project Details</label>
<textarea className="w-full bg-[#0a0f1c] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none" id="message" placeholder="Tell us a bit about your goals and timeline..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black text-sm font-semibold py-3.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group" type="submit">
                            Send Message
                            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-[#02050c] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2" href="#">
                    MEYER DIGITAL CO.
                </a>
<div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
<a className="hover:text-cyan-400 transition-colors" href="#">Services</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Process</a>
<a className="hover:text-cyan-400 transition-colors" href="#">About</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Legal</a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:brand-twitter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:brand-instagram-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
