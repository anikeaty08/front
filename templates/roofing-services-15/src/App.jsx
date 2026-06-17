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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-slate-900/20 group-hover:scale-105 transition-transform duration-200">
<span className="iconify" data-icon="lucide:home" data-width="16"></span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg">Forney</span>
</div>

<nav className="hidden md:flex space-x-1 items-center bg-slate-50/50 p-1 rounded-full border border-slate-100">
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#home">Overview</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#services">Services</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#process">Process</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#reviews">Reviews</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="tel:5551234567">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                        (972) 555-0123
                    </a>
<a className="hidden sm:flex bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow-md items-center gap-2" href="#contact">
                        Get Estimate
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>

<button className="md:hidden text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-grid-slate border-b border-slate-100" id="home">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">Available for Emergency Repairs</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05] mb-6">
                            Protecting homes <br/> with <span className="text-slate-400">precision.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                            We combine advanced materials with architectural craftsmanship to deliver roofing solutions that stand the test of time in Texas weather.
                        </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-sm font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 hover:translate-y-[-1px] transition-all shadow-lg shadow-slate-900/20" href="#contact">
                                Request Assessment
                            </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 border border-slate-200 text-sm font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all" href="#services">
                                View Portfolio
                            </a>
</div>
<div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8">
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">15y+</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Experience</p>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">500+</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Projects</p>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">A+</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">BBB Rating</p>
</div>
</div>
</div>
<div className="relative lg:h-[600px] w-full hidden lg:block">
<div className="absolute inset-0 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
<img alt="Modern Roof" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<span className="iconify text-slate-900" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Warranty Guaranteed</p>
<p className="text-xs text-slate-500">Lifetime material protection</p>
</div>
</div>
<div className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-md text-xs font-medium">Verified</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-slate-100 bg-white">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Certified by Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<span className="iconify text-3xl" data-icon="simple-icons:owenscorning"></span>
<span className="text-lg font-bold text-slate-800 hidden sm:block">Owens Corning</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-3xl" data-icon="simple-icons:gaf"></span>
<span className="text-lg font-bold text-slate-800 hidden sm:block">GAF Master Elite</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-3xl" data-icon="lucide:home" data-width="28"></span>
<span className="text-lg font-bold text-slate-800">CertainTeed</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-3xl" data-icon="lucide:shield-check" data-width="28"></span>
<span className="text-lg font-bold text-slate-800">Insurance Approved</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Our Expertise</h2>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">Comprehensive roofing services.</h3>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 flex items-center gap-1 transition-colors" href="#contact">
                        View all capabilities <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden group hover:border-slate-300 transition-colors duration-300">
<div className="relative z-10 max-w-md">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
<span className="iconify" data-icon="lucide:home" data-width="20"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Residential Replacement</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                                We specialize in complete roof replacements using high-grade architectural shingles, metal, and tile. Our process minimizes disruption to your daily life while maximizing your home's value and protection.
                            </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="16"></span>
                                    Free structural inspection
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="16"></span>
                                    Premium aesthetic options
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="16"></span>
                                    Cleanup guarantee
                                </li>
</ul>
</div>
<img alt="Roofing work" className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-0 md:opacity-100 mask-image-linear-l pointer-events-none" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black)'}}/>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:hammer" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Precision Repair</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            Targeted repairs for leaks, storm damage, and wear. We fix the root cause, not just the symptom.
                        </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:scan-eye" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Drone Inspections</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            High-resolution aerial analysis to detect micro-fractures and hail damage invisible from the ground.
                        </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300 group">
<div className="w-10 h-10 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:umbrella" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Gutters &amp; Drainage</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            Seamless gutter systems designed to divert water effectively and protect your foundation.
                        </p>
</div>

<div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-white flex flex-col justify-between group cursor-pointer relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 bg-white/10 rounded-lg border border-white/10 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:phone-call" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold mb-2 tracking-tight">Emergency?</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                                24/7 Rapid response team for severe weather events.
                            </p>
</div>
<div className="relative z-10 flex items-center gap-2 text-sm font-medium hover:text-slate-200">
                            Call Now <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-800/50 rounded-full blur-2xl group-hover:bg-slate-700/50 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="process">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">How we work</h2>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">A transparent process from start to finish.</h3>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center group hover:border-slate-300 transition-all">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 font-semibold mb-4 shadow-sm relative z-10 group-hover:scale-110 transition-transform">1</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Consultation</h4>
<p className="text-xs text-slate-500 leading-relaxed">We meet to discuss your needs and inspect the property thoroughly.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center group hover:border-slate-300 transition-all">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 font-semibold mb-4 shadow-sm relative z-10 group-hover:scale-110 transition-transform">2</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Proposal</h4>
<p className="text-xs text-slate-500 leading-relaxed">You receive a detailed, itemized quote with no hidden fees.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center group hover:border-slate-300 transition-all">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 font-semibold mb-4 shadow-sm relative z-10 group-hover:scale-110 transition-transform">3</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Installation</h4>
<p className="text-xs text-slate-500 leading-relaxed">Our licensed crew works efficiently, maintaining a clean site.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center group hover:border-slate-300 transition-all">
<div className="w-12 h-12 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-900 font-semibold mb-4 shadow-sm relative z-10 group-hover:scale-110 transition-transform">4</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Review</h4>
<p className="text-xs text-slate-500 leading-relaxed">Final walk-through to ensure 100% satisfaction and warranty activation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Why Forney</h2>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">The difference is in the details.</h3>
<p className="text-slate-500 mb-8 leading-relaxed">
                            Most roofing problems stem from poor installation, not materials. We hold ourselves to a standard that exceeds local code requirements.
                        </p>
<div className="space-y-4">
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Master Elite Certified</h4>
<p className="text-xs text-slate-500 mt-1">Top 2% of roofers in North America.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Insurance Liaison</h4>
<p className="text-xs text-slate-500 mt-1">We handle the claims process directly with your adjuster.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
<span className="iconify text-emerald-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">10-Year Workmanship Warranty</h4>
<p className="text-xs text-slate-500 mt-1">Peace of mind long after the truck leaves your driveway.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-2 border border-slate-100">
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Project Timeline</span>
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
</div>
<div className="divide-y divide-slate-100">
<div className="p-4 flex gap-4 items-center">
<div className="w-2 h-12 bg-slate-200 rounded-full"></div>
<div>
<p className="text-sm font-medium text-slate-900">Initial Assessment</p>
<p className="text-xs text-slate-500">Completed 9:00 AM</p>
</div>
<span className="ml-auto text-emerald-600 text-xs font-medium bg-emerald-50 px-2 py-1 rounded">Done</span>
</div>
<div className="p-4 flex gap-4 items-center bg-slate-50/30">
<div className="w-2 h-12 bg-slate-900 rounded-full"></div>
<div>
<p className="text-sm font-medium text-slate-900">Material Delivery</p>
<p className="text-xs text-slate-500">Scheduled Today, 2:00 PM</p>
</div>
<span className="ml-auto text-blue-600 text-xs font-medium bg-blue-50 px-2 py-1 rounded">In Progress</span>
</div>
<div className="p-4 flex gap-4 items-center opacity-50">
<div className="w-2 h-12 bg-slate-200 rounded-full"></div>
<div>
<p className="text-sm font-medium text-slate-900">Installation Start</p>
<p className="text-xs text-slate-500">Scheduled Tomorrow</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="reviews">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Customer Stories</h2>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">Don't just take our word for it.</h3>
</div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<span className="text-sm font-medium text-slate-600">5.0 Star Rating on Google</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                            "The team from Forney handled our insurance claim perfectly. They identified hail damage that two other inspectors missed. The new roof looks incredible."
                        </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                                JD
                            </div>
<div>
<p className="text-sm font-semibold text-slate-900">James Dalton</p>
<p className="text-[11px] text-slate-400">Full Replacement</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                            "Cleanest construction crew I've ever hired. They swept the yard with magnets three times to ensure no nails were left behind. Highly professional."
                        </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                                SM
                            </div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah Miller</p>
<p className="text-[11px] text-slate-400">Repair &amp; Gutters</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="14"></span>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                            "Responsive, fair pricing, and they actually showed up when they said they would. In this industry, that is rare. I recommend them to all my neighbors."
                        </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                                MR
                            </div>
<div>
<p className="text-sm font-semibold text-slate-900">Michael Ross</p>
<p className="text-[11px] text-slate-400">Emergency Repair</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="faq">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-2">Support</h2>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Common Questions</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Can't find the answer you're looking for? Reach out to our support team directly.
                        </p>
<a className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600 transition-colors" href="#contact">
                            Contact Support <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="lg:col-span-2 space-y-4">

<details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden open:ring-2 open:ring-slate-200 open:bg-white transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm font-semibold text-slate-900">
                                Do you handle insurance claims?
                                <span className="iconify transition-transform duration-200 group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                                Yes, we have a dedicated department for insurance claims. We use Xactimate software (the same as adjusters) to ensure your claim is accurate and covers all necessary code upgrades and damages.
                            </div>
</details>

<details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden open:ring-2 open:ring-slate-200 open:bg-white transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm font-semibold text-slate-900">
                                How long does a roof replacement take?
                                <span className="iconify transition-transform duration-200 group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                                Most residential roof replacements are completed in 1-2 days. We arrive early, protect your landscaping, strip the old roof, install the new system, and perform a magnetic sweep for nails all within a 48-hour window.
                            </div>
</details>

<details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden open:ring-2 open:ring-slate-200 open:bg-white transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm font-semibold text-slate-900">
                                What kind of warranties do you offer?
                                <span className="iconify transition-transform duration-200 group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                                We offer a 10-year workmanship warranty on all installations. Additionally, as certified installers for major manufacturers like GAF and Owens Corning, we can offer extended material warranties ranging from 50 years to lifetime coverage.
                            </div>
</details>

<details className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden open:ring-2 open:ring-slate-200 open:bg-white transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer text-sm font-semibold text-slate-900">
                                Do you offer financing?
                                <span className="iconify transition-transform duration-200 group-open:rotate-180 text-slate-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                                Yes, we partner with several lending institutions to offer flexible financing plans, including 0% interest for 12 months for qualified homeowners.
                            </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-3xl overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>
<div className="grid lg:grid-cols-2 gap-12 p-8 lg:p-16 relative z-10">
<div className="flex flex-col justify-between">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Start your project today.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                                    Get a comprehensive quote within 24 hours. No obligation, just honest expert advice.
                                </p>
<div className="flex items-center gap-6 text-slate-300">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
<span className="text-sm">Licensed</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
<span className="text-sm">Bonded</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
<span className="text-sm">Insured</span>
</div>
</div>
</div>
<div className="mt-12 lg:mt-0 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide font-medium">Call us directly</p>
<p className="text-xl font-semibold text-white">(972) 555-0123</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">First Name</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 border focus:outline-none transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Last Name</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 border focus:outline-none transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Email</label>
<input className="block w-full rounded-lg border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 border focus:outline-none transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Service Needed</label>
<div className="relative">
<select className="block w-full rounded-lg border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 border focus:outline-none transition-all appearance-none">
<option>Roof Replacement</option>
<option>Repair &amp; Maintenance</option>
<option>Inspection</option>
<option>Gutters</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Project Details</label>
<textarea className="block w-full rounded-lg border-slate-200 bg-slate-50 p-2.5 text-sm text-slate-900 focus:border-slate-500 focus:ring-slate-500 border focus:outline-none transition-all resize-none" placeholder="Tell us about your roof..." rows="3"></textarea>
</div>
<button className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transition-all mt-2 shadow-lg shadow-slate-900/10" type="button">
                                    Submit Request
                                </button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:home" data-width="12"></span>
</div>
<span className="font-semibold text-slate-900 tracking-tight">Forney Roofing</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
                        Setting the standard for roofing excellence in Texas. We build trust through transparency and quality craftsmanship.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Residential</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Commercial</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Repairs</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Inspections</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">support@forney.com</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">(972) 555-0123</a></li>
<li className="text-sm text-slate-500">Forney, TX 75126</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Forney Roofing Services. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500 font-medium">System Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
