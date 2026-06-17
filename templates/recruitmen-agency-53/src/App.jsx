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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-stone-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2 group" href="#">
<div className="h-6 w-6 bg-stone-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="16"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">TALENTSYNC</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#roles">Open Roles</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#clients">Customers</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-900 hover:text-stone-600" href="#">Log in</a>
<a className="text-sm font-medium bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-colors shadow-sm ring-1 ring-stone-900/5" href="#">
                    Find Talent
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:6rem_4rem]">
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_200px,#fff,transparent)]"></div>
</div>
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-medium text-stone-600 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                    Now hiring for Q4 2024
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6">
                    Building teams that <br className="hidden md:block"/>shape the future.
                </h1>
<p className="text-lg md:text-xl text-stone-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                    We connect forward-thinking companies with exceptional talent. Specialized recruitment for engineering, product, and executive leadership.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto h-12 px-8 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2">
                        Start Hiring
                        <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="w-full md:w-auto h-12 px-8 rounded-full bg-white border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 hover:border-stone-300 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
                        Browse Jobs
                    </button>
</div>
</div>

<div className="mt-24 pt-8 border-t border-stone-100">
<p className="text-center text-xs font-medium text-stone-400 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-multiply">

<span className="text-xl font-semibold tracking-tighter text-stone-900">acme</span>
<span className="text-xl font-semibold tracking-tighter text-stone-900">capsule</span>
<span className="text-xl font-semibold tracking-tighter text-stone-900">morgen</span>
<span className="text-xl font-semibold tracking-tighter text-stone-900">calibr</span>
<span className="text-xl font-semibold tracking-tighter text-stone-900">vertex</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50/50 border-t border-stone-100" id="services">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-stone-50 rounded-lg border border-stone-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-stone-900" data-icon="lucide:users" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Executive Search</h3>
<p className="text-sm text-stone-500 leading-relaxed">Retained search for C-suite and VP-level roles. We map the market to find leadership that aligns with your vision.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-stone-50 rounded-lg border border-stone-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-stone-900" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Technical Staffing</h3>
<p className="text-sm text-stone-500 leading-relaxed">Specialized recruitment for software engineering, data science, and product design. We speak the language of tech.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-stone-200 hover:border-stone-300 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-stone-50 rounded-lg border border-stone-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify text-stone-900" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight">Contract &amp; Interim</h3>
<p className="text-sm text-stone-500 leading-relaxed">Flexible talent solutions for project-based needs. Scale your team up or down with vetted contractors.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="roles">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-4">Latest Opportunities</h2>
<p className="text-stone-500 max-w-lg">Explore curated roles from high-growth startups and established enterprises.</p>
</div>
<a className="text-sm font-medium text-stone-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View all positions 
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-64 flex-shrink-0 space-y-8">
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Department</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-stone-300 rounded focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Engineering</span>
<span className="ml-auto text-xs text-stone-400">12</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none h-4 w-4 border border-stone-300 rounded focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Product</span>
<span className="ml-auto text-xs text-stone-400">5</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none h-4 w-4 border border-stone-300 rounded focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Design</span>
<span className="ml-auto text-xs text-stone-400">3</span>
</label>
</div>
</div>
<div className="h-px bg-stone-100 w-full"></div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Location</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox appearance-none h-4 w-4 border border-stone-300 rounded focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Remote</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none h-4 w-4 border border-stone-300 rounded focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">San Francisco</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none h-4 w-4 border border-stone-300 rounded focus:ring-0 focus:ring-offset-0 transition-colors cursor-pointer" type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">New York</span>
</label>
</div>
</div>
</div>

<div className="flex-1 space-y-4">

<div className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-stone-900 text-white flex items-center justify-center flex-shrink-0">
<span className="font-bold text-xs">V</span>
</div>
<div>
<h3 className="text-base font-medium text-stone-900 transition-colors group-hover:text-yellow-600">Senior Frontend Engineer</h3>
<p className="text-sm text-stone-500 mt-1">Vercel • San Francisco • $160k - $210k</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                                Remote
                            </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                                Full-time
                            </span>
<div className="hidden md:flex text-stone-300 group-hover:text-stone-600 group-hover:translate-x-1 transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg text-white flex items-center justify-center flex-shrink-0 bg-yellow-600">
<span className="font-bold text-xs">S</span>
</div>
<div>
<h3 className="text-base font-medium text-stone-900 transition-colors group-hover:text-yellow-600">Product Design Lead</h3>
<p className="text-sm text-stone-500 mt-1">Stripe • Remote • $180k - $240k</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                                Remote
                            </span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                                Contract
                            </span>
<div className="hidden md:flex text-stone-300 group-hover:text-stone-600 group-hover:translate-x-1 transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all cursor-pointer">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-red-600 text-white flex items-center justify-center flex-shrink-0">
<span className="font-bold text-xs">A</span>
</div>
<div>
<h3 className="text-base font-medium text-stone-900 transition-colors group-hover:text-yellow-600">VP of Engineering</h3>
<p className="text-sm text-stone-500 mt-1">Acme Corp • New York • $250k - $320k</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
                                Hybrid
                            </span>
<div className="hidden md:flex text-stone-300 group-hover:text-stone-600 group-hover:translate-x-1 transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-100 bg-stone-50">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div>
<div className="text-4xl font-semibold tracking-tight text-stone-900 mb-2">12d</div>
<div className="text-sm text-stone-500">Average time to fill</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-stone-900 mb-2">98%</div>
<div className="text-sm text-stone-500">Retention rate &gt; 1 year</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-stone-900 mb-2">500+</div>
<div className="text-sm text-stone-500">Placements in 2023</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-stone-900 mb-2">50+</div>
<div className="text-sm text-stone-500">Partner companies</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">Ready to scale your team?</h2>
<p className="text-lg text-stone-500 mb-10 max-w-2xl mx-auto">Join the hundreds of companies that trust TalentSync to build their world-class engineering and product teams.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
<input className="w-full h-12 px-4 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 focus:bg-white transition-all text-sm" placeholder="Enter your work email" type="email"/>
<button className="w-full sm:w-auto h-12 px-6 whitespace-nowrap rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10">
                    Get Started
                </button>
</div>
<p className="mt-6 text-xs text-stone-400">No credit card required for consultation.</p>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-12">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="h-5 w-5 bg-stone-900 rounded-sm flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="12"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900">TALENTSYNC</span>
</a>
<p className="text-sm text-stone-500 max-w-xs mb-6">
                        Bridging the gap between exceptional talent and visionary companies. Built for the modern workforce.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Executive Search</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contract Staffing</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">RPO</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Candidates</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Browse Jobs</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Submit Resume</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Job Alerts</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Salary Guide</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Terms</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-stone-400">© 2024 TalentSync Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-red-500"></span>
<span className="text-xs text-stone-500">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
