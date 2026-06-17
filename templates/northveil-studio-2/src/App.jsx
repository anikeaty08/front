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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-blue-950/80 backdrop-blur-md" style={{}}>
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="uppercase text-lg font-medium text-white tracking-tight" href="#">Northveil Studio</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-blue-400" style={{}}>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">Philosophy</a>
<a className="px-4 py-2 bg-white text-blue-950 font-medium rounded hover:bg-blue-200 transition-colors" href="#contact" style={{}}>Book Consultation</a>
</div>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-blue-950 border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl" id="mobile-menu" style={{}}>
<a className="text-sm text-blue-400 hover:text-white" href="#services" style={{}}>Services</a>
<a className="text-sm text-blue-400 hover:text-white" href="#process" style={{}}>Process</a>
<a className="text-sm text-blue-400 hover:text-white" href="#about" style={{}}>Philosophy</a>
<a className="text-sm font-medium text-white pt-2" href="#contact">Book Consultation →</a>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-24 pl-6 relative">
<div className="glow-radial absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-50"></div>
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-blue-400 mb-8" style={{}}>
<span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                Accepting projects for Q4
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-8">
                Websites without the<br/>
<span className="text-blue-500" style={{}}>endless revisions.</span>
</h1>
<p className="text-lg md:text-xl text-blue-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed" style={{}}>
                Northveil builds decisive, outcome-driven websites for businesses that value speed, clarity, and performance over agency fluff.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-blue-950 font-medium rounded hover:bg-blue-200 transition-colors text-center" href="#contact" style={{}}>
                    Book a Call
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/10 text-blue-300 font-medium rounded hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#process" style={{}}>
                    How we work
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</header>

<section className="py-24 border-y border-white/5 bg-blue-900/20" style={{}}>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

<div className="opacity-60">
<h3 className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-6" style={{}}>Not for you if</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-blue-600 mt-1 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-blue-400 font-light" style={{}}>You need 15 stakeholders to approve a font size.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-blue-600 mt-1 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-blue-400 font-light" style={{}}>You view design as decoration, not function.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-blue-600 mt-1 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-blue-400 font-light" style={{}}>You prefer lengthy zoom meetings over asynchronous updates.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-blue-600 mt-1 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-blue-400 font-light" style={{}}>You are looking for the cheapest possible option.</span>
</li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-medium text-white uppercase tracking-widest mb-6">Built for you if</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-white mt-1 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-blue-200 font-light" style={{}}>You are a founder or decision-maker who wants it handled.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-white mt-1 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-blue-200 font-light" style={{}}>You value a linear, predictable timeline.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-white mt-1 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-blue-200 font-light" style={{}}>You need a system that converts traffic into revenue.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-white mt-1 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-blue-200 font-light" style={{}}>You appreciate aesthetic minimalism and technical speed.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Outcomes, not features.</h2>
<p className="text-blue-400 font-light max-w-xl" style={{}}>We don't sell hours. We sell a completed, high-performance asset for your business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 border border-white/10 rounded-lg hover:border-white/20 transition-all bg-blue-900/30" style={{}}>
<div className="h-10 w-10 bg-white/5 rounded flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-template" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">The Core Build</h3>
<p className="text-blue-400 font-light text-sm leading-relaxed mb-6" style={{}}>
                        A complete redesign and development of your digital presence. We define the strategy, write the copy, design the interface, and code the solution.
                    </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-blue-300" style={{}}>
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Strategy &amp; Copywriting
                        </li>
<li className="flex items-center gap-2 text-sm text-blue-300" style={{}}>
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Custom Design (No templates)
                        </li>
<li className="flex items-center gap-2 text-sm text-blue-300" style={{}}>
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> SEO-Ready Development
                        </li>
</ul>
<a className="text-sm text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#contact">Inquire for scope</a>
</div>

<div className="group p-8 border border-white/10 rounded-lg hover:border-white/20 transition-all bg-blue-900/30" style={{}}>
<div className="h-10 w-10 bg-white/5 rounded flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">The Guard</h3>
<p className="text-blue-400 font-light text-sm leading-relaxed mb-6" style={{}}>
                        Optional ongoing care. We handle security updates, content adjustments, and server monitoring so you never have to log into a dashboard.
                    </p>
<ul className="space-y-2 mb-8">
<li className="flex items-center gap-2 text-sm text-blue-300" style={{}}>
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Monthly Audits
                        </li>
<li className="flex items-center gap-2 text-sm text-blue-300" style={{}}>
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Priority Support
                        </li>
<li className="flex items-center gap-2 text-sm text-blue-300" style={{}}>
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Uptime Monitoring
                        </li>
</ul>
<a className="text-sm text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#contact">Add to project</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="process">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-12">
<div className="md:w-1/3 sticky top-24">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Zero Chaos.</h2>
<p className="text-blue-400 font-light" style={{}}>
                        Our process is rigid so your results can be predictable. We don't deviate, and we don't miss deadlines.
                    </p>
</div>
<div className="md:w-2/3 grid gap-12">

<div className="flex gap-6">
<div className="flex-shrink-0 text-sm font-mono text-blue-600 pt-1" style={{}}>01</div>
<div className="">
<h3 className="text-lg text-white font-medium mb-2">Scope Lock</h3>
<p className="text-blue-400 font-light text-sm leading-relaxed" style={{}}>
                                We define exactly what we are building, who it is for, and what success looks like. Once the roadmap is approved, the scope is locked. This prevents project creep and ensures we launch on time.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 text-sm font-mono text-blue-600 pt-1" style={{}}>02</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">Build &amp; Sprint</h3>
<p className="text-blue-400 font-light text-sm leading-relaxed" style={{}}>
                                We go dark and build. We write the copy, design the assets, and code the infrastructure. You don't hear from us until there is something substantial to see. No micromanagement required.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 text-sm font-mono text-blue-600 pt-1" style={{}}>03</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">Review &amp; Refine</h3>
<p className="text-blue-400 font-light text-sm leading-relaxed" style={{}}>
                                We present the near-final product. We do one consolidated round of revisions to polish specific details. We focus on objective improvements, not subjective whims.
                            </p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 text-sm font-mono text-blue-600 pt-1" style={{}}>04</div>
<div>
<h3 className="text-lg text-white font-medium mb-2">Launch</h3>
<p className="text-blue-400 font-light text-sm leading-relaxed" style={{}}>
                                We handle the DNS, the server setup, and the final testing. Your site goes live, fast and error-free.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-blue-900/20" id="about" style={{}}>
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-sm font-medium text-blue-500 uppercase tracking-widest mb-8" style={{}}>Philosophy</h2>
<p className="text-2xl md:text-3xl text-white font-light leading-snug tracking-tight mb-8">
                Most web agencies are bloated. They charge for their overhead, their ping-pong tables, and their layers of middle management.
            </p>
<p className="text-lg md:text-xl text-blue-400 font-light leading-relaxed mb-8" style={{}}>
                Northveil exists to provide an antidote. We are a lean studio that bridges the gap between unreliable freelancers and overpriced agencies. We don't believe in "reveals" or "big ideas." We believe in systems, clarity, and competence.
            </p>
<div className="flex items-center justify-center gap-8 pt-8 border-t border-white/5 mt-12">
<div className="text-center">
<div className="text-2xl font-medium text-white">2 Weeks</div>
<div className="text-xs text-blue-500 uppercase tracking-wide mt-1" style={{}}>Avg. Turnaround</div>
</div>
<div className="text-center">
<div className="text-2xl font-medium text-white">100%</div>
<div className="text-xs text-blue-500 uppercase tracking-wide mt-1" style={{}}>Fixed Scope</div>
</div>
<div className="text-center">
<div className="text-2xl font-medium text-white">0</div>
<div className="text-xs text-blue-500 uppercase tracking-wide mt-1" style={{}}>Surprises</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Secure your slot.</h2>
<p className="text-blue-400 font-light" style={{}}>
                    We take on a limited number of clients to ensure focus. Fill out the form below. If we are a fit, we'll schedule a 15-minute strategy call.
                </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-blue-500 uppercase tracking-wide" style={{}}>Name</label>
<input className="custom-input w-full px-4 py-3 rounded text-sm placeholder-blue-600" placeholder="Jane Doe" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-blue-500 uppercase tracking-wide" style={{}}>Email</label>
<input className="custom-input w-full px-4 py-3 rounded text-sm placeholder-blue-600" placeholder="jane@company.com" style={{}} type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-blue-500 uppercase tracking-wide" style={{}}>Company URL (Optional)</label>
<input className="custom-input w-full px-4 py-3 rounded text-sm placeholder-blue-600" placeholder="company.com" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-blue-500 uppercase tracking-wide" style={{}}>Project Goals</label>
<textarea className="custom-input w-full px-4 py-3 rounded text-sm placeholder-blue-600 min-h-[120px]" placeholder="Briefly describe what you need built and why..." style={{}}></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-white text-blue-950 font-medium py-3 rounded hover:bg-blue-200 transition-colors flex items-center justify-center gap-2" style={{}} type="button">
                        Send Application
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<p className="text-xs text-center text-blue-600" style={{}}>
                    We typically respond within 24 hours. No spam, ever.
                </p>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-blue-950" style={{}}>
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-medium text-white uppercase tracking-tight">Northveil Studio</div>
<div className="flex gap-6 text-xs text-blue-500" style={{}}>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
</div>
<div className="text-xs text-blue-600">© 2026 Northveil Studio. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
