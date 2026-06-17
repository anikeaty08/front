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


document.write(new Date().getFullYear())
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="18" icon="lucide:home" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">ULY</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="tel:+1-857-206-0456">
<iconify-icon height="16" icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
            +1 (857) 206‑0456
          </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm" href="#lead-form">
            Free Quote
          </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="hero-copy fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
            Licensed &amp; Insured Across the US
          </div>
<h1 className="text-5xl sm:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Reliable roofing <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">built to last.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed">
            Experts in shingles, metal, tile, and flat roofs. We provide fast emergency service, fair pricing, and full support with insurance claims.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all shadow-md shadow-orange-200" href="#lead-form">
              Get a Free Quote
              <iconify-icon className="ml-2" height="18" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all" href="tel:+1-857-206-0456">
<iconify-icon className="mr-2" height="18" icon="lucide:phone-call" width="18"></iconify-icon>
              Call Now
            </a>
</div>
<ul className="flex flex-wrap gap-y-2 gap-x-6 text-sm font-medium text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
              25‑Year Warranty
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
              Financing Available
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
              Free Inspections
            </li>
</ul>
</div>
<div className="relative fade-in-up delay-200">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 aspect-[4/3] group">
<img alt="Roofing Construction" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<div className="text-sm font-medium opacity-90">Project Completed</div>
<div className="text-lg font-semibold">Residential Complex, TX</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
<iconify-icon icon="lucide:star" width="20"></iconify-icon>
</div>
<div>
<div className="text-slate-900 font-semibold text-sm">4.9/5 Rating</div>
<div className="text-slate-500 text-xs">Based on 500+ reviews</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Comprehensive Roofing Services</h2>
<p className="text-slate-500">From minor repairs to complete installations, our certified teams handle every aspect of your roofing needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">New Construction</h3>
<p className="text-sm text-slate-500 leading-relaxed">Complete roof builds for residential and commercial properties using premium materials.</p>
</article>

<article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:wrench" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Roof Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed">Leak fixes, shingle replacement, and flashing repair done right the first time.</p>
</article>

<article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:file-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Insurance Claims</h3>
<p className="text-sm text-slate-500 leading-relaxed">We document damage, assist with claims, and restore your roof to code.</p>
</article>

<article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:umbrella" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Gutters &amp; Vents</h3>
<p className="text-sm text-slate-500 leading-relaxed">Improve longevity with proper drainage and attic ventilation solutions.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">How It Works</h2>
<p className="text-slate-500 max-w-md">Our streamlined process ensures your roofing project is completed on time and within budget.</p>
</div>
<a className="text-orange-600 font-medium hover:text-orange-700 inline-flex items-center gap-1" href="#lead-form">
            Start your project <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100 -z-10"></div>

<div className="relative group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-orange-200 group-hover:shadow-orange-100 transition-all">
<span className="text-3xl font-bold text-slate-200 group-hover:text-orange-500 transition-colors">01</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Free Inspection</h3>
<p className="text-sm text-slate-500">We assess your roof thoroughly and provide a transparent, no-obligation quote.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-orange-200 group-hover:shadow-orange-100 transition-all">
<span className="text-3xl font-bold text-slate-200 group-hover:text-orange-500 transition-colors">02</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Plan &amp; Schedule</h3>
<p className="text-sm text-slate-500">Choose your materials and pick a date. We handle the logistics.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-orange-200 group-hover:shadow-orange-100 transition-all">
<span className="text-3xl font-bold text-slate-200 group-hover:text-orange-500 transition-colors">03</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Installation</h3>
<p className="text-sm text-slate-500">Certified crews complete work efficiently, safely, and to code.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-orange-200 group-hover:shadow-orange-100 transition-all">
<span className="text-3xl font-bold text-slate-200 group-hover:text-orange-500 transition-colors">04</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Cleanup</h3>
<p className="text-sm text-slate-500">Thorough site cleanup, final inspection, and warranty documentation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-4 mb-12">
<div className="h-px bg-slate-700 flex-1"></div>
<h2 className="text-2xl font-semibold tracking-tight">Client Stories</h2>
<div className="h-px bg-slate-700 flex-1"></div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<blockquote className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
<div className="flex text-orange-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg text-slate-300 mb-6 leading-relaxed">“ULY handled our storm damage claim end‑to‑end. The communication was excellent, and the new roof looks amazing. They made a stressful situation incredibly easy.”</p>
<footer className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center font-bold text-sm">SM</div>
<div>
<cite className="not-italic font-semibold text-white block">Sarah M.</cite>
<span className="text-xs text-slate-400">Dallas, TX</span>
</div>
</footer>
</blockquote>
<blockquote className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
<div className="flex text-orange-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-lg text-slate-300 mb-6 leading-relaxed">“Fast repair and a very professional crew. They arrived on time, fixed the leak that three other companies couldn't find, and left the yard spotless.”</p>
<footer className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center font-bold text-sm">JR</div>
<div>
<cite className="not-italic font-semibold text-white block">James R.</cite>
<span className="text-xs text-slate-400">Tampa, FL</span>
</div>
</footer>
</blockquote>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/50" id="lead-form">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-xl shadow-slate-200 overflow-hidden border border-slate-200 flex flex-col lg:flex-row">

<div className="lg:w-5/12 p-10 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
<iconify-icon height="200" icon="lucide:home" width="200"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-6">Get Your Free Quote</h3>
<p className="text-slate-300 mb-8 leading-relaxed">Tell us about your project. We'll analyze your needs and provide a competitive, transparent estimate within 24 hours.</p>
<ul className="space-y-4 mb-12">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-1" icon="lucide:check" width="18"></iconify-icon>
<span className="text-slate-200 text-sm">Residential &amp; commercial projects</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-1" icon="lucide:check" width="18"></iconify-icon>
<span className="text-slate-200 text-sm">Shingle, metal, tile &amp; flat roofs</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-1" icon="lucide:check" width="18"></iconify-icon>
<span className="text-slate-200 text-sm">Emergency repair teams on standby</span>
</li>
</ul>
<div className="mt-auto">
<p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-2">Direct Contact</p>
<a className="text-xl font-medium hover:text-orange-400 transition-colors" href="tel:+1-857-206-0456">+1 (857) 206‑0456</a>
</div>
</div>

<div className="lg:w-7/12 p-10 lg:p-12">

<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wider" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wider" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wider" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" id="service">
<option>New Roof Installation</option>
<option>Roof Repair / Leak Fix</option>
<option>Inspection / Maintenance</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wider" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm resize-none" id="message" placeholder="Tell us about your roof..." rows="4"></textarea>
</div>

<div className="flex items-start gap-3">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 bg-white checked:bg-slate-900 checked:border-slate-900 transition-all" id="consent" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" icon="lucide:check" width="12"></iconify-icon>
</div>
<label className="text-xs text-slate-500 cursor-pointer select-none" htmlFor="consent">
                  I agree to receive communications from ULY Roofing. We respect your privacy.
                </label>
</div>
<button className="w-full px-6 py-4 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-100 transition-all shadow-md mt-2 flex items-center justify-center gap-2 group" type="button">
                Request Free Quote
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="18" icon="lucide:home" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">ULY</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
              Professional roofing construction and repair services. Licensed, insured, and trusted by homeowners across the US.
            </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#testimonials">Testimonials</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Roof Repair</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">New Installation</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Commercial</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Storm Damage</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
<a className="hover:text-orange-600 transition-colors" href="tel:+1-857-206-0456">+1 (857) 206‑0456</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
<a className="hover:text-orange-600 transition-colors" href="mailto:contact@uly.com">contact@uly.com</a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<div>
            ©  ULY Construction. All rights reserved.
          </div>
<div className="flex gap-6">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
