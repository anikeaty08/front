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



      // Initialize lucide icons with 1.5 stroke width
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });
    
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
      

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a aria-label="Spark Electrical Home" className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center w-9 h-9 rounded-md ring-1 ring-slate-200 bg-white shadow-sm group-hover:ring-slate-300 transition">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="bolt"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight">Spark Electrical</span>
<span className="text-[11px] text-slate-500 -mt-0.5">Licensed &amp; Insured</span>
</div>
</a>

<nav aria-label="Primary" className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="#">Home</a>
<a className="text-sm text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="#about">About</a>
<a className="text-sm text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="#services">Services</a>
<a className="text-sm text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="#projects">Projects</a>
<a className="text-sm text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="#careers">Careers</a>
<a className="text-sm text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="tel:5551234567">
<i className="w-4 h-4 text-slate-500" data-lucide="phone"></i>
<span>(555) 123-4567</span>
</a>
<a className="inline-flex items-center justify-center rounded-md bg-[#FF6600] px-4 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-transparent hover:bg-[#ff7111] hover:ring-[#ff7111]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6600] transition" href="#quote">
              Get Free Quote
            </a>
</div>
</div>

<div className="md:hidden py-3">
<details className="group">
<summary className="flex items-center justify-between text-sm text-slate-700 hover:text-slate-900 cursor-pointer select-none">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-slate-500" data-lucide="menu"></i> Menu
              </span>
<i className="w-4 h-4 text-slate-500 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<div className="mt-3 rounded-md border border-slate-200">
<div className="grid divide-y divide-slate-200">
<a className="px-4 py-3 text-sm hover:bg-slate-50" href="#">Home</a>
<a className="px-4 py-3 text-sm hover:bg-slate-50" href="#about">About</a>
<a className="px-4 py-3 text-sm hover:bg-slate-50" href="#services">Services</a>
<a className="px-4 py-3 text-sm hover:bg-slate-50" href="#projects">Projects</a>
<a className="px-4 py-3 text-sm hover:bg-slate-50" href="#careers">Careers</a>
<a className="px-4 py-3 text-sm hover:bg-slate-50" href="#contact">Contact</a>
</div>
</div>
</details>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-medium text-[#FF6600]">
<i className="w-3.5 h-3.5" data-lucide="alarm-clock"></i>
              24/7 Emergency Service Available
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Professional Electrical Services
            </h1>
<p className="mt-5 text-base sm:text-lg leading-7 text-slate-600">
              From emergency repairs to complete rewiring, our certified electricians deliver safe, reliable, and affordable electrical solutions for your home and business.
            </p>
<div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md bg-[#FF6600] px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-transparent hover:bg-[#ff7111] hover:ring-[#ff7111]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6600] transition" href="#quote">
                Book a Service
              </a>
<a className="inline-flex items-center gap-2 text-sm text-slate-800 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400" href="tel:5551234567">
<i className="w-4 h-4 text-[#FF6600]" data-lucide="phone"></i>
                (555) 123-4567
              </a>
</div>

<div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#1E3C57]" data-lucide="shield-check"></i>
                Licensed &amp; Insured
              </div>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#1E3C57]" data-lucide="zap"></i>
                Certified Electricians
              </div>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#1E3C57]" data-lucide="star"></i>
                500+ 5-Star Reviews
              </div>
</div>
</div>

<div className="relative">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
<img alt="Certified electrician working on a modern electrical panel" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Comprehensive Electrical Services
          </h2>
<p className="mt-3 text-slate-600">
            Reliable, code-compliant solutions for every need—delivered with precision, safety, and speed.
          </p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex items-start gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 ring-1 ring-orange-100">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="alarm-clock"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Emergency Repair</h3>
<p className="mt-1 text-sm text-slate-600">Fast 24/7 fixes for outages, tripping breakers, and urgent hazards.</p>
<p className="mt-3 text-xs text-slate-500">Starts from $129</p>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex items-start gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 ring-1 ring-orange-100">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="house"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Residential</h3>
<p className="mt-1 text-sm text-slate-600">Home wiring, lighting, outlets, inspections, and maintenance.</p>
<p className="mt-3 text-xs text-slate-500">Starts from $89</p>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex items-start gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 ring-1 ring-orange-100">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="building-2"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Commercial</h3>
<p className="mt-1 text-sm text-slate-600">Power distribution, maintenance programs, and tenant improvements.</p>
<p className="mt-3 text-xs text-slate-500">Starts from $199</p>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex items-start gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 ring-1 ring-orange-100">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="lightbulb"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">LED Installation</h3>
<p className="mt-1 text-sm text-slate-600">Efficient lighting upgrades with smart controls and rebates.</p>
<p className="mt-3 text-xs text-slate-500">Starts from $149</p>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex items-start gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 ring-1 ring-orange-100">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="gauge"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Panel Upgrade</h3>
<p className="mt-1 text-sm text-slate-600">Boost capacity, safety, and code compliance for modern loads.</p>
<p className="mt-3 text-xs text-slate-500">Starts from $1299</p>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-white p-6 shadow-sm hover:shadow transition">
<div className="flex items-start gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-md bg-orange-50 ring-1 ring-orange-100">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="plug-zap"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">EV Stations</h3>
<p className="mt-1 text-sm text-slate-600">Level 2 and 3 charger installs with load calculations and permits.</p>
<p className="mt-3 text-xs text-slate-500">Starts from $899</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 border-t border-slate-200" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Your Trusted Local Electrical Experts.
            </h2>
<p className="mt-4 text-slate-600">
              For over 15 years, Spark Electrical has delivered dependable, code-compliant work across residential and commercial projects. Our licensed team combines precision craftsmanship with a safety-first mindset—backed by transparent pricing and industry-leading warranties.
            </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#1E3C57] mt-0.5" data-lucide="badge-check"></i>
<div>
<p className="text-sm font-medium text-slate-900">Licensed Electrical Contractors</p>
<p className="text-sm text-slate-600">Fully certified and insured technicians.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#1E3C57] mt-0.5" data-lucide="building"></i>
<div>
<p className="text-sm font-medium text-slate-900">NECA Member Company</p>
<p className="text-sm text-slate-600">Committed to industry best practices.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#1E3C57] mt-0.5" data-lucide="medal"></i>
<div>
<p className="text-sm font-medium text-slate-900">BBB A+ Rating</p>
<p className="text-sm text-slate-600">Trusted by homeowners and businesses.</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#1E3C57] mt-0.5" data-lucide="hard-hat"></i>
<div>
<p className="text-sm font-medium text-slate-900">OSHA Safety Trained</p>
<p className="text-sm text-slate-600">Safety-first protocols on every job.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
<img alt="Smiling certified electrician team in uniform" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 lg:py-16" style={{backgroundColor: '#1E3C57'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid gap-8 lg:grid-cols-4 lg:items-center">
<div className="lg:col-span-2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Electrical Emergency? We're Here 24/7
            </h3>
<p className="mt-3 text-slate-200">
              Call now for rapid response. On-site within 60 minutes for most areas.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:col-span-2">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-white">
<i className="w-5 h-5 text-white" data-lucide="clock"></i>
<span className="text-sm font-medium">24/7 Availability</span>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-white">
<i className="w-5 h-5 text-white" data-lucide="timer"></i>
<span className="text-sm font-medium">60-Min Response</span>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-white">
<i className="w-5 h-5 text-white" data-lucide="shield"></i>
<span className="text-sm font-medium">Safety First</span>
</div>
</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-white text-sm font-medium ring-1 ring-white/20 hover:bg-white/15 hover:ring-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition" href="tel:5551234567">
<i className="w-5 h-5 text-white" data-lucide="phone"></i>
<span className="text-base tracking-tight">(555) 123-4567</span>
</a>
</div>
</div>
</section>

<div aria-hidden="true" className="sr-only" id="projects"></div>

<div aria-hidden="true" className="sr-only" id="careers"></div>

<section className="py-16 lg:py-24 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900" id="quote">Request a Free Quote</h2>
<p className="mt-3 text-slate-600">
              Tell us about your project and a licensed electrician will follow up promptly.
            </p>
<div className="mt-6 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20" placeholder="Full name" type="text"/>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20" placeholder="Phone number" type="tel"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20" placeholder="Email address" type="email"/>
<select className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20">
<option value="">Select service</option>
<option>Emergency Repair</option>
<option>Residential</option>
<option>Commercial</option>
<option>LED Installation</option>
<option>Panel Upgrade</option>
<option>EV Stations</option>
</select>
</div>
<textarea className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-[#FF6600] focus:ring-2 focus:ring-[#FF6600]/20" placeholder="Briefly describe your project" rows="4"></textarea>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">By submitting, you agree to our Terms and acknowledge our Privacy Policy.</p>
<button className="inline-flex items-center justify-center rounded-md bg-[#FF6600] px-5 py-2.5 text-sm font-medium text-white shadow-sm ring-1 ring-transparent hover:bg-[#ff7111] hover:ring-[#ff7111]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6600] transition">
                  Send Request
                </button>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 p-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Contact Us</h3>
<p className="mt-2 text-slate-600">We’re here to help—call, email, or visit our office.</p>
<div className="mt-6 space-y-4">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Phone</p>
<a className="text-sm text-slate-700 hover:text-slate-900" href="tel:5551234567">(555) 123-4567</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Email</p>
<a className="text-sm text-slate-700 hover:text-slate-900" href="mailto:hello@sparkelectrical.com">hello@sparkelectrical.com</a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Address</p>
<p className="text-sm text-slate-700">1234 Circuit Ave, Suite 200, Metro City, ST 00000</p>
</div>
</div>
</div>
<div className="mt-6 rounded-lg border border-slate-200 p-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#1E3C57] mt-0.5" data-lucide="info"></i>
<p className="text-sm text-slate-600">
                  Same-day service available for emergency calls received before 5pm. Weekend and holiday rates may apply.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200" style={{backgroundColor: '#1E3C57'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 text-slate-200">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

<div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-md bg-white ring-1 ring-white/20 shadow-sm">
<i className="w-5 h-5 text-[#FF6600]" data-lucide="bolt"></i>
</div>
<span className="text-base font-semibold tracking-tight text-white">Spark Electrical</span>
</div>
<p className="mt-3 text-sm text-slate-300">
              Licensed, insured, and trusted since 2008.
            </p>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Our Services</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-300 hover:text-white" href="#services">Emergency Repair</a></li>
<li><a className="text-slate-300 hover:text-white" href="#services">Residential</a></li>
<li><a className="text-slate-300 hover:text-white" href="#services">Commercial</a></li>
<li><a className="text-slate-300 hover:text-white" href="#services">LED Installation</a></li>
<li><a className="text-slate-300 hover:text-white" href="#services">Panel Upgrade</a></li>
<li><a className="text-slate-300 hover:text-white" href="#services">EV Stations</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Quick Links</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-300 hover:text-white" href="#">Home</a></li>
<li><a className="text-slate-300 hover:text-white" href="#about">About</a></li>
<li><a className="text-slate-300 hover:text-white" href="#projects">Projects</a></li>
<li><a className="text-slate-300 hover:text-white" href="#careers">Careers</a></li>
<li><a className="text-slate-300 hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Contact Us</h4>
<ul className="mt-3 space-y-3 text-sm">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="phone"></i>
<a className="text-slate-300 hover:text-white" href="tel:5551234567">(555) 123-4567</a>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="mail"></i>
<a className="text-slate-300 hover:text-white" href="mailto:hello@sparkelectrical.com">hello@sparkelectrical.com</a>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-white mt-0.5" data-lucide="map-pin"></i>
<span className="text-slate-300">1234 Circuit Ave, Suite 200, Metro City, ST 00000</span>
</li>
</ul>
</div>
</div>
<div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© <span id="year"></span> Spark Electrical. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs">
<a className="text-slate-300 hover:text-white" href="#">Privacy Policy</a>
<span className="text-slate-500">•</span>
<a className="text-slate-300 hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
