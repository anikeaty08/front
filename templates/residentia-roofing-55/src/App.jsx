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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 shadow-sm">
<div className="w-full px-6 lg:px-10 h-24 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer shrink-0">
<div className="w-10 h-10 bg-blue-900 text-white rounded-lg flex items-center justify-center shadow-md group-hover:bg-red-600 transition-colors duration-300">
<iconify-icon height="22" icon="solar:shield-up-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="text-lg font-bold text-blue-950 tracking-tight leading-none">American Roofing</span>
<span className="text-xs font-semibold text-red-600 tracking-wide uppercase">&amp; Waterproofing</span>
</div>
</div>

<div className="hidden xl:flex items-center gap-10">
<a className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors" href="#about">About</a>
<a className="text-sm font-semibold text-slate-600 hover:text-blue-900 transition-colors" href="#projects">Projects</a>
<a className="text-sm font-semibold text-red-600 hover:text-red-700 transition-colors flex items-center gap-1.5" href="#emergency">
<iconify-icon icon="solar:danger-circle-linear" width="16"></iconify-icon>
                    24/7 Emergency
                </a>
</div>

<div className="flex items-center gap-6 md:gap-8">
<a className="hidden md:flex flex-col items-end group" href="tel:6023144650">
<span className="text-xs font-medium text-slate-400 mb-0.5 uppercase tracking-wide">Call 24/7</span>
<span className="flex items-center gap-2 text-xl font-bold text-blue-950 group-hover:text-red-600 transition-colors">
<iconify-icon className="text-red-600" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        (602) 314-4650
                    </span>
</a>
<a className="bg-red-600 hover:bg-red-700 text-white text-base font-bold px-8 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-lg shadow-red-200 hover:shadow-red-300 hover:-translate-y-0.5 group" href="#estimate">
                    Get Free Estimate
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-900 mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                    Serving Arizona, California, Texas &amp; Colorado
                </div>
<h1 className="text-5xl lg:text-7xl font-bold text-blue-950 tracking-tight leading-[1.1] mb-6">
                    Precision roofing for <br className="hidden lg:block"/> <span className="text-slate-400">American homes.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg font-medium">
                    We combine architectural craftsmanship with industry-leading materials to protect your home. Licensed, bonded, and insured with a 30-year warranty.
                </p>
<div className="flex flex-wrap items-center gap-4 mb-12">
<a className="bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold px-7 py-4 rounded-xl shadow-xl shadow-blue-100 transition-all hover:-translate-y-0.5" href="#estimate">
                        Start Your Project
                    </a>
<a className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold px-7 py-4 rounded-xl transition-all flex items-center gap-2" href="tel:6023144650">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                        (602) 314-4650
                    </a>
</div>
<div className="flex items-center gap-8 pt-8 border-t border-slate-100">
<div>
<div className="text-2xl font-bold text-blue-950 tracking-tight">30<span className="text-sm align-top text-red-600 font-bold ml-0.5">yr</span></div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-1">Warranty</div>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div>
<div className="text-2xl font-bold text-blue-950 tracking-tight">A+</div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-1">BBB Rating</div>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div>
<div className="text-2xl font-bold text-blue-950 tracking-tight">24/7</div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-1">Emergency</div>
</div>
</div>
</div>
<div className="relative lg:h-[600px] w-full">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-red-50 rounded-2xl transform rotate-3"></div>
<div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
<img alt="Phoenix Residential Roofing" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://americanroofingnow.com/wp-content/uploads/residentialroofingaz1.jpg"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-lg flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-blue-950">Phoenix, AZ</div>
<div className="text-xs text-slate-500 font-medium">Headquarters</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100">Licensed ROC #325294</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Certified &amp; Accredited By</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70">
<div className="flex items-center gap-2 font-bold text-blue-950"><iconify-icon className="text-red-600" icon="solar:medal-ribbon-linear" width="24"></iconify-icon> ARCA</div>
<div className="flex items-center gap-2 font-bold text-blue-950"><iconify-icon className="text-red-600" icon="solar:shield-star-linear" width="24"></iconify-icon> BBB Accredited</div>
<div className="flex items-center gap-2 font-bold text-blue-950"><iconify-icon className="text-red-600" icon="solar:home-smile-linear" width="24"></iconify-icon> AMA</div>
<div className="flex items-center gap-2 font-bold text-blue-950"><iconify-icon className="text-red-600" icon="solar:buildings-2-linear" width="24"></iconify-icon> AACM</div>
<div className="flex items-center gap-2 font-bold text-blue-950"><iconify-icon className="text-red-600" icon="solar:check-circle-linear" width="24"></iconify-icon> Licensed &amp; Bonded</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-bold text-blue-950 tracking-tight mb-4">Comprehensive roofing services.</h2>
<p className="text-slate-500 text-lg">From minor leak repairs to complete roof replacements, we specialize in all major roofing systems.</p>
</div>
<a className="text-sm font-semibold text-red-600 border-b border-red-100 pb-0.5 hover:border-red-600 transition-colors flex items-center gap-1 group" href="#estimate">
                    View all capabilities 
                    <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
<iconify-icon icon="solar:home-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Shingle Roofing</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Durable asphalt shingle solutions offering affordability and versatility for modern homes.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-red-600" icon="solar:check-read-linear"></iconify-icon> Architectural Shingles</li>
<li className="flex items-center gap-2"><iconify-icon className="text-red-600" icon="solar:check-read-linear"></iconify-icon> Weather Resistant</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Tile Roofing</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Traditional aesthetic with superior longevity. Expert installation for clay and concrete tiles.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-red-600" icon="solar:check-read-linear"></iconify-icon> Heat Reduction</li>
<li className="flex items-center gap-2"><iconify-icon className="text-red-600" icon="solar:check-read-linear"></iconify-icon> Long Lifespan</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Foam &amp; Flat Roofs</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Energy-efficient foam solutions perfect for the Arizona climate. Seamless and lightweight.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-red-600" icon="solar:check-read-linear"></iconify-icon> Waterproofing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-red-600" icon="solar:check-read-linear"></iconify-icon> Insulation Value</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
<iconify-icon icon="solar:hammer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Metal Roofing</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Modern, durable, and energy-efficient. Ideal for both new construction and replacements.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
<iconify-icon icon="solar:drone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Drone Inspections</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">High-resolution aerial analysis to detect damage invisible from the ground.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 text-blue-900 shadow-sm group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all">
<iconify-icon icon="solar:cloud-rain-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Gutter Systems</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Complete installation and cleaning services to ensure proper drainage and foundation protection.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-950 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4">The American Difference</h2>
<h3 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Built to withstand the harshest elements.</h3>
<p className="text-slate-300 text-lg leading-relaxed mb-10">
                        Most roofing problems stem from poor installation, not materials. We hold ourselves to a standard that exceeds local code requirements.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:calendar-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-white">30-Year Warranty</h4>
<p className="text-sm text-slate-400 mt-1">Every roof we work on comes with industry-leading protection for your peace of mind.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:hand-money-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-white">Flexible Financing</h4>
<p className="text-sm text-slate-400 mt-1">We offer financing options to make your roof replacement or repair accessible.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-white" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-white">24/7 Emergency Response</h4>
<p className="text-sm text-slate-400 mt-1">Storm damage doesn't wait. Our rapid response team is ready when disaster strikes.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
<h4 className="text-xl font-bold mb-8">Maintenance VIP Program</h4>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-sm font-medium">Annual Inspections</span>
<iconify-icon className="text-red-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-sm font-medium">Priority Scheduling</span>
<iconify-icon className="text-red-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-sm font-medium">Gutter Cleaning Included</span>
<iconify-icon className="text-red-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
<span className="text-sm font-medium">Debris Removal</span>
<iconify-icon className="text-red-500" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
<a className="mt-8 block w-full py-4 bg-white text-blue-950 text-center rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors" href="#vip">
                            View VIP Details
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="estimate">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-bold text-blue-950 tracking-tight mb-4">Get your instant estimate.</h2>
<p className="text-slate-500">Fill out the details below to receive a preliminary quote for your roofing project.</p>
</div>
<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-blue-900/5 border border-slate-100">
<form className="space-y-8">

<div>
<label className="block text-sm font-bold text-blue-950 mb-4">Project Type</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="p-4 rounded-xl border border-slate-200 text-center transition-all peer-checked:border-blue-900 peer-checked:bg-blue-50 peer-checked:text-blue-900 peer-checked:ring-1 peer-checked:ring-blue-900 font-medium">
                                    Residential
                                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="type" type="radio"/>
<div className="p-4 rounded-xl border border-slate-200 text-center transition-all peer-checked:border-blue-900 peer-checked:bg-blue-50 peer-checked:text-blue-900 peer-checked:ring-1 peer-checked:ring-blue-900 font-medium">
                                    Commercial
                                </div>
</label>
</div>
</div>

<div>
<label className="block text-sm font-bold text-blue-950 mb-4">Services Needed</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<label className="flex items-center cursor-pointer group">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded flex items-center justify-center transition-colors mr-3 group-hover:border-blue-400">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium">Roof Replacement</span>
</label>
<label className="flex items-center cursor-pointer group">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded flex items-center justify-center transition-colors mr-3 group-hover:border-blue-400">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium">Leak Repair</span>
</label>
<label className="flex items-center cursor-pointer group">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded flex items-center justify-center transition-colors mr-3 group-hover:border-blue-400">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium">Inspection</span>
</label>
<label className="flex items-center cursor-pointer group">
<input className="sr-only custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 border border-slate-300 rounded flex items-center justify-center transition-colors mr-3 group-hover:border-blue-400">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-sm text-slate-600 font-medium">Gutter Services</span>
</label>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all placeholder:text-slate-400 font-medium" placeholder="Full name" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">Contact</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all placeholder:text-slate-400 font-medium" placeholder="Phone number" type="tel"/>
</div>
<div className="md:col-span-2 space-y-1">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all placeholder:text-slate-400 font-medium" placeholder="email@example.com" type="email"/>
</div>
<div className="md:col-span-2 space-y-1">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">Project Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900 transition-all placeholder:text-slate-400 font-medium" placeholder="Tell us about your roof..." rows="3"></textarea>
</div>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex justify-center items-center gap-2" type="submit">
                        Request Quote
                        <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-4">
                        By submitting this form, you agree to our privacy policy. Your information is secure.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-blue-900 text-white rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:shield-up-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-bold text-blue-950">American Roofing</span>
</div>
<p className="text-sm text-slate-500 mb-6">
                        Professional Residential Roofing Services based in Phoenix, Arizona. Serving AZ, CA, TX &amp; CO.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-blue-900 transition-colors" href="#"><iconify-icon icon="logos:facebook" style={{filter: 'grayscale(1)'}} width="18"></iconify-icon></a>
<a className="hover:text-blue-900 transition-colors" href="#"><iconify-icon icon="logos:linkedin-icon" style={{filter: 'grayscale(1)'}} width="18"></iconify-icon></a>
<a className="hover:text-blue-900 transition-colors" href="#"><iconify-icon icon="logos:instagram-icon" style={{filter: 'grayscale(1)'}} width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-bold text-blue-950 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li><a className="hover:text-red-600 transition-colors" href="#">Residential</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Commercial</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Multifamily</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Roof Inspections</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Gutter Installation</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold text-blue-950 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li><a className="hover:text-red-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Reviews</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold text-blue-950 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500 font-medium">
<li>3321 E. Atlanta Avenue<br/>Phoenix, Arizona 85040</li>
<li><a className="hover:text-red-600" href="mailto:services@americanroofingnow.com">services@americanroofingnow.com</a></li>
<li><a className="hover:text-red-600 font-bold" href="tel:6023144650">(602) 314-4650</a></li>
<li className="pt-2"><span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">Open 24 Hours</span></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-medium">© 2025 American Roofing &amp; Waterproofing. All rights reserved. AZ ROC #325294.</p>
<div className="flex items-center gap-6">
<span className="text-xs text-slate-400 hover:text-blue-900 font-medium cursor-pointer">Terms</span>
<span className="text-xs text-slate-400 hover:text-blue-900 font-medium cursor-pointer">Cookies</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
