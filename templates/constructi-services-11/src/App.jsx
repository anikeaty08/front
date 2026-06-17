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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-slate-900 uppercase" href="#">
                        STRUCT<span className="text-orange-600">.</span>
</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2" href="#contact">
<span>Get a Quote</span>
<span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Accepting new projects for Q3 2024
                    </div>

<h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        We build visions with <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">structural precision.</span>
</h1>

<p className="text-lg text-slate-500 font-normal leading-relaxed mb-8 pr-4">
                        Stop gambling with contractors. Experience transparent pricing, dedicated project management, and high-end craftsmanship for renovations and commercial builds.
                    </p>

<div className="flex flex-wrap gap-y-2 gap-x-6 mb-8 text-sm font-medium text-slate-700">
<div className="flex items-center gap-2">
<span className="iconify text-orange-600" data-icon="lucide:shield-check" data-width="18"></span>
                            Fully Licensed &amp; Insured
                        </div>
<div className="flex items-center gap-2">
<span className="iconify text-orange-600" data-icon="lucide:clock" data-width="18"></span>
                            On-Time Guarantee
                        </div>
</div>

<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center px-8 py-4 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-lg shadow-slate-900/10 transition-all duration-200 transform hover:-translate-y-0.5" href="#contact">
                            Get Your Free Estimate
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="inline-flex justify-center items-center px-8 py-4 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-lg transition-all duration-200" href="#projects">
                            View Portfolio
                        </a>
</div>

<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+250</div>
</div>
<div className="flex flex-col">
<div className="flex text-orange-500">
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="14" fill="currentColor"></span>
</div>
<span className="text-xs font-medium text-slate-500">Rated 4.9/5 by homeowners</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full hidden lg:block">

<div className="absolute inset-0 bg-slate-200 rounded-3xl overflow-hidden shadow-2xl">
<img alt="Modern Interior Construction" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>

<div className="absolute top-12 -left-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Status</p>
<p className="text-sm font-semibold text-slate-900">Project Completed</p>
</div>
</div>
</div>

<div className="absolute bottom-12 -right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 max-w-[240px]">
<div className="flex justify-between items-start mb-2">
<div>
<p className="text-xs text-slate-500">Budget Adherence</p>
<p className="text-lg font-bold text-slate-900">100%</p>
</div>
<div className="h-8 w-8 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:trending-up" data-width="16"></span>
</div>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-orange-500 h-1.5 rounded-full w-full"></div>
</div>
<p className="text-[10px] text-slate-400 mt-2">Delivered on estimate, no hidden fees.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-40 pointer-events-none">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/4"></div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col border-l border-slate-200 pl-6">
<span className="text-3xl font-semibold tracking-tight text-slate-900">15+</span>
<span className="text-sm text-slate-500 mt-1">Years Experience</span>
</div>
<div className="flex flex-col border-l border-slate-200 pl-6">
<span className="text-3xl font-semibold tracking-tight text-slate-900">250+</span>
<span className="text-sm text-slate-500 mt-1">Projects Completed</span>
</div>
<div className="flex flex-col border-l border-slate-200 pl-6">
<span className="text-3xl font-semibold tracking-tight text-slate-900">100%</span>
<span className="text-sm text-slate-500 mt-1">On-Time Delivery</span>
</div>
<div className="flex flex-col border-l border-slate-200 pl-6">
<span className="text-3xl font-semibold tracking-tight text-slate-900">4.9</span>
<span className="text-sm text-slate-500 mt-1">Average Rating</span>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Construction services tailored to your needs.</h2>
<p className="text-slate-500">From concept to completion, we handle every aspect of the build with rigorous attention to detail.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5 transition-all duration-300">
<div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:home" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Residential Renovation</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Complete home remodels, kitchen upgrades, and bathroom transformations designed for modern living.</p>
<a className="text-sm font-medium text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn more <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5 transition-all duration-300">
<div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:building-2" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Commercial Build-outs</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Office spaces, retail stores, and hospitality venues built to enhance your business operations and brand.</p>
<a className="text-sm font-medium text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn more <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5 transition-all duration-300">
<div className="h-12 w-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:ruler" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Project Management</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">End-to-end oversight ensuring code compliance, scheduling efficiency, and budget adherence.</p>
<a className="text-sm font-medium text-orange-600 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn more <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="projects">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Selected Works</h2>
<p className="text-slate-400">A glimpse into our recent construction excellence.</p>
</div>
<a className="text-sm font-medium text-white border-b border-orange-500 hover:text-orange-400 transition-colors pb-1" href="#">View all projects</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-800">
<img alt="Modern House" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-xs font-medium text-orange-400 mb-2 block uppercase tracking-wider">Residential</span>
<h3 className="text-xl font-semibold text-white">The Oakwood Residence</h3>
<p className="text-sm text-slate-300 mt-2 line-clamp-2">Full structural renovation and extension of a mid-century modern home.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-800">
<img alt="Office Space" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-xs font-medium text-orange-400 mb-2 block uppercase tracking-wider">Commercial</span>
<h3 className="text-xl font-semibold text-white">Apex HQ Interiors</h3>
<p className="text-sm text-slate-300 mt-2 line-clamp-2">2,000 sq ft office fit-out with custom glass partitioning and acoustic solutions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Why homeowners and businesses trust us.</h2>
<p className="text-slate-500 mb-8">We don't just build structures; we build trust through transparency, communication, and unwavering quality standards.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center">
<span className="iconify text-orange-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Fixed-Price Contracts</h4>
<p className="text-sm text-slate-500 mt-1">No surprise costs. We provide detailed quotes and stick to them.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center">
<span className="iconify text-orange-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Dedicated Project Manager</h4>
<p className="text-sm text-slate-500 mt-1">Single point of contact from groundbreaking to final walkthrough.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-orange-100 flex items-center justify-center">
<span className="iconify text-orange-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">5-Year Structural Warranty</h4>
<p className="text-sm text-slate-500 mt-1">We stand behind the quality of our craftsmanship.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-orange-200 rounded-3xl blur-2xl opacity-30"></div>
<img alt="Construction Site" className="relative rounded-2xl shadow-xl border border-white" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-orange-500" data-height="16" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-orange-500" data-height="16" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-orange-500" data-height="16" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-orange-500" data-height="16" data-icon="lucide:star" data-width="16"></span>
<span className="iconify text-orange-500" data-height="16" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-xs font-medium text-slate-900">"The most professional team we've ever worked with. Highly recommended."</p>
<p className="text-xs text-slate-400 mt-2">— Sarah Jenkins, Homeowner</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
<div className="p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Ready to build your vision?</h2>
<p className="text-sm text-slate-500">Fill out the form below for a free consultation and preliminary estimate.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="name">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-none transition-all placeholder:text-slate-400" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="email">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-none transition-all placeholder:text-slate-400" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="type">Project Type</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-none transition-all appearance-none text-slate-600" id="type">
<option>Residential Renovation</option>
<option>Commercial Construction</option>
<option>New Build</option>
<option>Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
<span className="iconify text-slate-500" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide" htmlFor="message">Project Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 focus:outline-none transition-all placeholder:text-slate-400" id="message" placeholder="Tell us about your timeline, budget, and goals..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<div className="flex items-center h-5">
<input className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500" id="privacy" type="checkbox"/>
</div>
<label className="text-xs text-slate-500" htmlFor="privacy">
                                I agree to the processing of my personal data.
                            </label>
</div>
<button className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all" type="button">
                            Request Quote
                        </button>
</form>
<div className="mt-6 text-center">
<p className="text-xs text-slate-400 flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
                            Your information is secure and never shared.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900 uppercase" href="#">
                        STRUCT<span className="text-orange-600">.</span>
</a>
<p className="text-xs text-slate-500 mt-4 leading-relaxed">
                        Excellence in construction and renovation for residential and commercial clients.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Projects</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Renovations</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Commercial</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Contact</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-500">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span> 123 Builder Lane, City
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span> (555) 123-4567
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-500">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span> hello@structure.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Structure Construction. All rights reserved.</p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
