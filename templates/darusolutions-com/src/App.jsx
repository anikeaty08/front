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
      

<nav className="fixed w-full z-50 glass-nav border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-24">

<a className="flex items-center gap-3 group flex-shrink-0" href="#">

<div className="w-10 h-12 relative flex items-center justify-center">
<svg className="w-full h-full transform group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 60 70" xmlns="http://www.w3.org/2000/svg">

<path className="" d="M28 10L36 6V55H28V10Z" stroke="#262E59" strokeLinejoin="round" strokeWidth="3"></path>
<path className="" d="M36 6L44 14V55H36V6Z" stroke="#262E59" strokeLinejoin="round" strokeWidth="3"></path>
<path className="" d="M20 20L28 16V55H20V20Z" stroke="#262E59" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M44 24L52 28V55H44V24Z" stroke="#262E59" strokeLinejoin="round" strokeWidth="3"></path>

<path d="M10 40C10 30 25 30 36 45C47 60 62 60 62 40" stroke="#B97802" strokeLinecap="round" strokeWidth="3"></path>
<path d="M10 40C10 50 25 50 36 35" stroke="#B97802" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>

<div className="flex flex-col justify-center">
<span className="font-heading font-bold text-xl lg:text-2xl text-[#262E59] leading-none tracking-wide uppercase">Daru Solutions</span>
<span className="font-body text-[0.65rem] font-bold text-[#B97802] tracking-[0.25em] leading-tight mt-1 uppercase">Innovate. Build. Evolve.</span>
</div>
</a>

<div className="hidden lg:flex items-center space-x-8">
<a className="hover:text-[#262E59] nav-item-underline transition-colors text-sm font-medium text-slate-700" href="#">Home</a>
<a className="text-sm font-medium text-slate-700 hover:text-[#262E59] nav-item-underline transition-colors" href="#about">About</a>

<div className="relative group h-24 flex items-center">
<button className="flex hover:text-[#262E59] transition-colors focus:outline-none text-sm font-medium text-slate-700 items-center">
                            Services
                            <svg aria-hidden="true" className="ml-1" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="absolute top-20 left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-b-lg hidden group-hover:block p-4">
<div className="flex flex-col space-y-3">
<a className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors" href="#">Commercial Painting</a>
<a className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors" href="#">Residential Painting</a>
<a className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors" href="#">Interior &amp; Exterior</a>
<a className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors" href="#">Drywall Repair</a>
<a className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors" href="#">Carpentry &amp; Finishing</a>
<a className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors" href="#">Pressure Washing</a>
</div>
</div>
</div>
<a className="text-sm font-medium text-slate-700 hover:text-[#262E59] nav-item-underline transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-700 hover:text-[#262E59] nav-item-underline transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:block">
<a className="bg-gold-gradient text-[#262E59] text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all" href="#estimate">
                        Free Estimate
                    </a>
</div>

<div className="lg:hidden">
<button className="text-[#262E59] focus:outline-none">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Professional Painters Indianapolis" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-[#262E59]/80 mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-[#262E59] via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-widest uppercase mb-6">
                Serving Indianapolis &amp; Surrounding Areas
            </span>
<h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight mb-6 leading-tight">
                Professional Painting &amp; <br className="hidden lg:block"/>Property Solutions
            </h1>
<p className="font-body text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Reliable commercial and residential services delivered with precision, care, and professionalism. Elevate your property with Daru Solutions.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-gold-gradient text-[#262E59] text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" href="#estimate">
                    Get a Free Estimate
                </a>
<a className="sm:w-auto uppercase hover:bg-white hover:text-[#262E59] transition-all text-sm font-semibold text-white tracking-wider bg-transparent w-full border-white/30 border rounded-lg pt-4 pr-8 pb-4 pl-8" href="#services">
                    View Our Services
                </a>
</div>
</div>
</header>

<section className="bg-white border-b border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
<div className="flex flex-col items-center">
<svg aria-hidden="true" className="text-[#262E59] mb-3" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h3 className="font-heading font-semibold text-lg text-[#262E59]">Trusted by Indianapolis</h3>
<p className="text-sm text-slate-500 mt-1">Property Owners &amp; Managers</p>
</div>
<div className="flex flex-col items-center border-l-0 md:border-l md:border-r border-slate-100 px-4">
<div className="flex space-x-1 mb-3 text-[#F4CF6F]">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-heading font-semibold text-lg text-[#262E59]">5-Star Quality</h3>
<p className="text-sm text-slate-500 mt-1">Consistently Rated for Excellence</p>
</div>
<div className="flex flex-col items-center">
<svg aria-hidden="true" className="text-[#262E59] mb-3" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<h3 className="font-heading font-semibold text-lg text-[#262E59]">Reliable Service</h3>
<p className="text-sm text-slate-500 mt-1">On Time &amp; On Budget</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#262E59] tracking-tight mb-4">Our Expertise</h2>
<p className="text-slate-500 leading-relaxed">Comprehensive painting and property maintenance solutions for commercial and residential clients across Indianapolis.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="w-12 h-12 rounded-lg bg-[#262E59]/5 flex items-center justify-center mb-6 group-hover:bg-[#262E59] transition-colors duration-300 text-[#262E59] group-hover:text-white">
<svg aria-hidden="true" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<h3 className="font-heading font-semibold text-xl text-[#262E59] mb-3">Commercial Painting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Office buildings, retail spaces, and industrial facilities painted with minimal disruption.</p>
</a>

<a className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="w-12 h-12 rounded-lg bg-[#262E59]/5 flex items-center justify-center mb-6 group-hover:bg-[#262E59] transition-colors duration-300 text-[#262E59] group-hover:text-white">
<svg aria-hidden="true" data-icon="lucide:home" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<h3 className="font-heading font-semibold text-xl text-[#262E59] mb-3">Residential Painting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Transforming homes with meticulous interior and exterior painting services.</p>
</a>

<a className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="w-12 h-12 rounded-lg bg-[#262E59]/5 flex items-center justify-center mb-6 group-hover:bg-[#262E59] transition-colors duration-300 text-[#262E59] group-hover:text-white">
<svg aria-hidden="true" data-icon="lucide:paint-roller" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="6" rx="2" width="16" x="2" y="2"></rect><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect height="6" rx="1" width="4" x="8" y="16"></rect></g></svg>
</div>
<h3 className="font-heading font-semibold text-xl text-[#262E59] mb-3">Drywall Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed">Seamless patching, texturing, and finishing for a flawless surface.</p>
</a>

<a className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="w-12 h-12 rounded-lg bg-[#262E59]/5 flex items-center justify-center mb-6 group-hover:bg-[#262E59] transition-colors duration-300 text-[#262E59] group-hover:text-white">
<svg aria-hidden="true" data-icon="lucide:hammer" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="font-heading font-semibold text-xl text-[#262E59] mb-3">Carpentry &amp; Finishing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Trim installation, crown molding, and wood repairs to complete the look.</p>
</a>

<a className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="w-12 h-12 rounded-lg bg-[#262E59]/5 flex items-center justify-center mb-6 group-hover:bg-[#262E59] transition-colors duration-300 text-[#262E59] group-hover:text-white">
<svg aria-hidden="true" data-icon="lucide:droplets" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>
<h3 className="font-heading font-semibold text-xl text-[#262E59] mb-3">Pressure Washing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Deep cleaning for siding, decks, and driveways to restore curb appeal.</p>
</a>

<a className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1" href="#">
<div className="w-12 h-12 rounded-lg bg-[#262E59]/5 flex items-center justify-center mb-6 group-hover:bg-[#262E59] transition-colors duration-300 text-[#262E59] group-hover:text-white">
<svg aria-hidden="true" data-icon="lucide:layout-template" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-xl font-semibold text-[#262E59] font-heading mb-3">Cleaning Services </h3>
<p className="text-sm text-slate-500 leading-relaxed">Turnkey maintenance solutions for landlords and property managers.</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-gradient font-semibold tracking-widest uppercase text-xs mb-2 block">About Daru Solutions</span>
<h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#262E59] tracking-tight mb-6">Excellence in Every Brushstroke</h2>
<div className="space-y-4 text-slate-500 leading-relaxed">
<p className="">
                            At Daru Solutions, we believe that painting is more than just applying color—it's about protecting your investment and creating environments that inspire. Based in Indianapolis, we serve both commercial and residential clients with a commitment to quality that is unmatched in the industry.
                        </p>
<p className="">
                            Our team of skilled professionals takes pride in precision preparation and flawless execution. Whether it's a large commercial complex or a cozy family home, we treat every property with the respect it deserves, ensuring a clean workspace and a stunning finish.
                        </p>
</div>
<div className="mt-8 flex items-center space-x-6">
<div className="flex flex-col">
<span className="font-heading font-bold text-3xl text-[#262E59]">10+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide mt-1">Years Experience</span>
</div>
<div className="w-px h-12 bg-slate-200"></div>
<div className="flex flex-col">
<span className="font-heading font-bold text-3xl text-[#262E59]">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-wide mt-1">Satisfaction</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-gradient rounded-tl-3xl opacity-20"></div>
<img alt="Daru Solutions Team" className="rounded-lg shadow-2xl w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"/>
<div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
<p className="font-heading font-medium text-[#262E59] italic text-lg">"We build long-term relationships through honesty and quality work."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#262E59] text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#F4CF6F] font-semibold tracking-widest uppercase text-xs mb-2 block">How We Work</span>
<h2 className="font-heading font-semibold text-3xl sm:text-4xl tracking-tight">Our Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative group">
<div className="mb-6 flex items-center">
<span className="flex items-center justify-center w-12 h-12 rounded-full border border-[#F4CF6F]/30 bg-[#F4CF6F]/10 text-[#F4CF6F] font-heading font-bold text-xl">1</span>
<div className="hidden md:block h-px bg-[#F4CF6F]/20 flex-1 ml-4"></div>
</div>
<h3 className="font-heading font-semibold text-xl mb-3">Free Consultation</h3>
<p className="text-slate-300 text-sm leading-relaxed">We meet to discuss your vision, assess the property, and provide a transparent, detailed estimate.</p>
</div>

<div className="relative group">
<div className="mb-6 flex items-center">
<span className="flex items-center justify-center w-12 h-12 rounded-full border border-[#F4CF6F]/30 bg-[#F4CF6F]/10 text-[#F4CF6F] font-heading font-bold text-xl">2</span>
<div className="hidden md:block h-px bg-[#F4CF6F]/20 flex-1 ml-4"></div>
</div>
<h3 className="font-heading font-semibold text-xl mb-3">Prep &amp; Planning</h3>
<p className="text-slate-300 text-sm leading-relaxed">We protect furniture, repair surfaces, and prepare the area to ensure a durable, lasting finish.</p>
</div>

<div className="relative group">
<div className="mb-6 flex items-center">
<span className="flex items-center justify-center w-12 h-12 rounded-full border border-[#F4CF6F]/30 bg-[#F4CF6F]/10 text-[#F4CF6F] font-heading font-bold text-xl">3</span>
<div className="hidden md:block h-px bg-[#F4CF6F]/20 flex-1 ml-4"></div>
</div>
<h3 className="font-heading font-semibold text-xl mb-3">Execution</h3>
<p className="text-slate-300 text-sm leading-relaxed">Our pros apply premium paints with expert techniques, maintaining a tidy workspace throughout.</p>
</div>

<div className="relative group">
<div className="mb-6 flex items-center">
<span className="flex items-center justify-center w-12 h-12 rounded-full border border-[#F4CF6F]/30 bg-[#F4CF6F]/10 text-[#F4CF6F] font-heading font-bold text-xl">4</span>
</div>
<h3 className="font-heading font-semibold text-xl mb-3">Final Walkthrough</h3>
<p className="text-slate-300 text-sm leading-relaxed">We review the work with you to ensure total satisfaction before considering the job done.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#262E59] tracking-tight mb-2">Recent Projects</h2>
<p className="text-slate-500">See how we transform properties across Indianapolis.</p>
</div>
<a className="hidden md:flex items-center text-[#B97802] font-semibold text-sm hover:text-[#262E59] transition-colors mt-4 md:mt-0" href="#">
                    View Full Gallery <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl cursor-pointer">
<img alt="Commercial Office" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-[#262E59]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
<h4 className="font-heading font-semibold text-white text-xl">Downtown Office</h4>
<p className="text-slate-300 text-xs mt-1">Commercial Interior</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl cursor-pointer">
<img alt="Residential Exterior" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-[#262E59]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
<h4 className="font-heading font-semibold text-white text-xl">Meridian-Kessler Home</h4>
<p className="text-slate-300 text-xs mt-1">Exterior Refresh</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl cursor-pointer">
<img alt="Kitchen Cabinet" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#262E59]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
<h4 className="font-heading font-semibold text-white text-xl">Carmel Kitchen</h4>
<p className="text-slate-300 text-xs mt-1">Cabinet Refinishing</p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center text-[#B97802] font-semibold text-sm hover:text-[#262E59] transition-colors" href="#">
                    View Full Gallery <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#262E59] tracking-tight mb-4">Client Stories</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="flex text-[#F4CF6F] mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"Daru Solutions completely transformed our office space. Their team was professional, efficient, and finished ahead of schedule. Highly recommended for any Indianapolis business."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[#262E59]">JD</div>
<div className="ml-3">
<p className="text-sm font-semibold text-[#262E59]">James D.</p>
<p className="text-xs text-slate-400">Property Manager</p>
</div>
</div>
</div>

<div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="flex text-[#F4CF6F] mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"We hired them for exterior painting of our home. The attention to detail during the prep work was impressive. The house looks brand new!"</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[#262E59]">SM</div>
<div className="ml-3">
<p className="text-sm font-semibold text-[#262E59]">Sarah M.</p>
<p className="text-xs text-slate-400">Homeowner</p>
</div>
</div>
</div>

<div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50">
<div className="flex text-[#F4CF6F] mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"Fair pricing and honest communication. No hidden fees or surprises. Just great quality work from a friendly team."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[#262E59]">RT</div>
<div className="ml-3">
<p className="text-sm font-semibold text-[#262E59]">Robert T.</p>
<p className="text-xs text-slate-400">Homeowner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#262E59] pt-24 pb-24 relative" id="estimate">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e2445] skew-x-12 opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="text-white">
<h2 className="font-heading font-semibold text-4xl lg:text-5xl tracking-tight mb-6 leading-tight">Ready to Improve Your Property?</h2>
<p className="text-slate-300 text-lg mb-8 font-light">
                        Contact Daru Solutions today. No pressure, just honest pricing and quality work for your next project in Indianapolis.
                    </p>
<div className="space-y-6">
<div className="flex items-start">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<div className="ml-4">
<h4 className="font-semibold text-white">Service Area</h4>
<p className="text-slate-400 text-sm">Indianapolis, Carmel, Fishers, Zionsville, and surrounding areas.</p>
</div>
</div>
<div className="flex items-start">
<svg aria-hidden="true" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="ml-4">
<h4 className="font-semibold text-white">Call Us</h4>
<p className="text-sm text-slate-400">(317) 658-2703</p>
</div>
</div>
<div className="flex items-start">
<svg aria-hidden="true" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<div className="ml-4">
<h4 className="font-semibold text-white">Email</h4>
<p className="text-sm text-slate-400">daru.solutions@outlook.com</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 shadow-2xl">
<h3 className="font-heading font-semibold text-2xl text-[#262E59] mb-6">Request a Free Estimate</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Name</label>
<input className="focus:outline-none focus:border-[#B97802] transition-colors text-sm bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="John Doe" type="text"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B97802] transition-colors" placeholder="(317) 555-0123" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B97802] transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Service Type</label>
<div className="relative">
<select className="focus:outline-none focus:border-[#B97802] transition-colors appearance-none text-sm text-slate-600 bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4">
<option>Commercial Painting</option>
<option>Residential Interior</option>
<option>Residential Exterior</option>
<option>Drywall Repair</option>
<option>Other</option>
</select>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Project Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B97802] transition-colors" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-gold-gradient text-[#262E59] font-semibold uppercase tracking-wider py-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="text-slate-400 bg-[#1a2040] border-white/5 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="">

<div className="flex items-center gap-3 mb-6">

<div className="w-10 h-12 relative flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 60 70" xmlns="http://www.w3.org/2000/svg">
<path d="M28 10L36 6V55H28V10Z" stroke="white" strokeLinejoin="round" stroke-opacity="0.9" strokeWidth="3"></path>
<path d="M36 6L44 14V55H36V6Z" stroke="white" strokeLinejoin="round" stroke-opacity="0.9" strokeWidth="3"></path>
<path d="M20 20L28 16V55H20V20Z" stroke="white" strokeLinejoin="round" stroke-opacity="0.9" strokeWidth="3"></path>
<path d="M44 24L52 28V55H44V24Z" stroke="white" strokeLinejoin="round" stroke-opacity="0.9" strokeWidth="3"></path>
<path d="M10 40C10 30 25 30 36 45C47 60 62 60 62 40" stroke="#F4CF6F" strokeLinecap="round" strokeWidth="3"></path>
<path d="M10 40C10 50 25 50 36 35" stroke="#F4CF6F" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<div className="flex flex-col justify-center">
<span className="font-heading font-bold text-xl text-white leading-none tracking-wide uppercase">Daru Solutions</span>
<span className="font-body text-[0.6rem] font-bold text-[#F4CF6F] tracking-[0.25em] leading-tight mt-1 uppercase">Innovate. Build. Evolve.</span>
</div>
</div>
<p className="text-sm leading-relaxed mb-6">Professional painting and property solutions delivering excellence to Indianapolis and surrounding communities.</p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-[#F4CF6F] transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-400 hover:text-[#F4CF6F] transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-slate-400 hover:text-[#F4CF6F] transition-colors" href="#"><svg aria-hidden="true" className="" data-icon="lucide:linkedin" data-icon-replaced="true" data-icon-set="lucide" data-lucide="linkedin" data-width="20" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(244, 207, 111)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-white transition-colors" href="#">Commercial Painting</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Residential Painting</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Drywall Repair</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Carpentry &amp; Finishing</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Pressure Washing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Process</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Reviews</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-center">(317) 658-2703</li>
<li className="flex items-center">daru.solutions@outlook.com</li>
<li className="flex items-center"><svg aria-hidden="true" className="" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Indianapolis, IN</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
<p className="">© 2026 Daru Solutions. All rights reserved.</p>
<p className="md:mt-0 mt-2"></p>
</div>
</div>
</footer>

    </>
  );
}
