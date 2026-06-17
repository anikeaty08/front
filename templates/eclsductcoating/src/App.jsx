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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">

<div className="hidden md:flex justify-between items-center px-4 md:px-8 py-2 bg-gray-50 border-b border-gray-100 text-xs text-gray-600">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 text-green-700 font-medium">
<iconify-icon className="text-base" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                    Secure &amp; Verified SSL
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                    Serving Tulsa &amp; Surrounding Areas
                </span>
</div>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Mon-Fri: 8AM - 5PM
                </span>
<a className="hover:text-green-700 transition-colors" href="mailto:eclsoftulsa@gmail.com">eclsoftulsa@gmail.com</a>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 md:h-20">

<div className="flex-shrink-0 flex items-center">
<a className="flex flex-col" href="#">
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-green-800 uppercase leading-none">E.C.L.S.</span>
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase mt-0.5">Duct Coating</span>
</a>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors" href="#work">Our Work</a>
<a className="text-sm font-medium text-gray-600 hover:text-green-700 transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-green-700 transition-colors" href="tel:+19188300394">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                        (918) 830-0394
                    </a>
<a className="bg-green-700 hover:bg-green-800 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm" href="#contact">
                        Get a Free Quote
                    </a>
</div>

<div className="flex items-center md:hidden">
<a className="mr-4 text-green-700" href="tel:+19188300394">
<iconify-icon className="text-2xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="text-gray-600 hover:text-gray-900 focus:outline-none" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative bg-gray-900 py-20 lg:py-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Professional duct coating technician working on HVAC system" className="object-center opacity-40 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/air-conditioning-technician-engineer-roof-maintenance-building-construction-fan-hvac-repair-air-conditioner-handyman-worker-with-tools-working-city-development-project-job_590464-129396.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-6 backdrop-blur-sm">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                    Tulsa's #1 Rated Duct Coating Specialists
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Restore Your Ducts.<br/>
<span className="text-green-400">Breathe Cleaner Air.</span>
</h1>
<p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                    Don't replace your old, leaky ductwork—restore it from the inside out. We specialize in advanced coating technologies that eliminate odors, seal leaks, and improve energy efficiency for Tulsa homes and businesses.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-3.5 rounded-md text-base font-semibold transition-all shadow-lg shadow-green-900/20 group" href="tel:+19188300394">
<iconify-icon className="text-xl group-hover:animate-pulse" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        Call (918) 830-0394
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-md text-base font-medium transition-all backdrop-blur-sm" href="#contact">
                        Request Service
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
<span className="flex items-center gap-2">
<iconify-icon className="text-green-400 text-lg" icon="solar:verified-check-linear"></iconify-icon>
                        10+ Years Experience
                    </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-green-400 text-lg" icon="solar:shield-star-linear"></iconify-icon>
                        Licensed &amp; Insured
                    </span>
<span className="flex items-center gap-2">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
                        5.0 Google Rating
                    </span>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-gray-200 py-6 relative z-20 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
<div className="flex flex-col items-center justify-center">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">10+</span>
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Years Experience</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">29+</span>
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Google Reviews</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">5.0</span>
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Average Rating</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">100%</span>
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Satisfaction</span>
</div>
</div>
</div>
</div>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Why Tulsa Residents &amp; Businesses Choose E.C.L.S.</h2>
<p className="text-base text-gray-600">We solve ventilation problems standard HVAC companies often can't. Our specialized focus ensures a cost-effective, long-lasting alternative to complete duct replacement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Honest Upfront Pricing</h3>
<p className="text-sm text-gray-600 leading-relaxed">No hidden fees or surprise charges. We provide detailed, transparent quotes before any work begins so you know exactly what to expect.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Licensed &amp; Insured</h3>
<p className="text-sm text-gray-600 leading-relaxed">Rest easy knowing your property is protected. Our technicians are fully licensed, highly trained, and comprehensive insured for all residential and commercial work.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Local Tulsa Business</h3>
<p className="text-sm text-gray-600 leading-relaxed">We are deeply rooted in the Tulsa community. For over 10 years, we've built our reputation on trust, reliability, and serving our neighbors with integrity.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:like-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">100% Satisfaction Guarantee</h3>
<p className="text-sm text-gray-600 leading-relaxed">We stand behind our craftsmanship. If you aren't completely satisfied with our duct coating or sanitization services, we'll make it right.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Advanced Technology</h3>
<p className="text-sm text-gray-600 leading-relaxed">We utilize industry-leading sealants and application methods that traditional HVAC companies don't carry, ensuring a durable, permanent fix.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Cost-Effective Alternative</h3>
<p className="text-sm text-gray-600 leading-relaxed">Why tear out walls for a full replacement? Our internal coating restores your ducts at a fraction of the cost and disruption of traditional replacement.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<span className="text-green-700 font-medium text-sm tracking-wide uppercase mb-2 block">Specialized Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Our Services</h2>
<p className="text-base text-gray-600">Comprehensive solutions for the interior health of your home or commercial ventilation system.</p>
</div>
<a className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md text-sm font-medium transition-colors flex-shrink-0" href="#contact">
                    Get a Free Quote
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group border border-gray-200 rounded-xl overflow-hidden hover:border-green-600 transition-colors bg-gray-50 flex flex-col sm:flex-row">
<div className="sm:w-1/3 relative h-48 sm:h-auto">
<img alt="Duct Coating Application" className="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/ventilation-cleaning-specialist-work-repair-ventilation-system-hvac-industrial-background_255667-83598.jpg?w=740&amp;q=80"/>
<div className="group-hover:bg-transparent transition-colors bg-gray-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-6 sm:w-2/3 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-green-600 text-xl" icon="solar:shield-plus-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Duct Coating &amp; Lining</h3>
</div>
<p className="text-sm text-gray-600 mb-4">Professional sealant application designed to restore old, rusty, or damaged air ducts. We create a smooth, sealed interior lining without needing to tear out walls or replace pipes.</p>
</div>
</div>

<div className="group border border-gray-200 rounded-xl overflow-hidden hover:border-green-600 transition-colors bg-gray-50 flex flex-col sm:flex-row">
<div className="sm:w-1/3 relative h-48 sm:h-auto">
<img alt="Air Quality Testing" className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?w=740&amp;q=80"/>
<div className="group-hover:bg-transparent transition-colors bg-gray-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-6 sm:w-2/3 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-green-600 text-xl" icon="solar:leaf-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Air Quality Improvement</h3>
</div>
<p className="text-sm text-gray-600 mb-4">Protect your family or employees by eliminating persistent odors, active mold growth, and loose fiberglass particles circulating through your HVAC system.</p>
</div>
</div>

<div className="group border border-gray-200 rounded-xl overflow-hidden hover:border-green-600 transition-colors bg-gray-50 flex flex-col sm:flex-row">
<div className="sm:w-1/3 relative h-48 sm:h-auto">
<img alt="Duct Sanitization Worker" className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/men-working-with-equipment-full-shot_23-2148921408.jpg?w=800&amp;q=80"/>
<div className="group-hover:bg-transparent transition-colors bg-gray-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-6 sm:w-2/3 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-green-600 text-xl" icon="solar:bacteria-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Duct Sanitization</h3>
</div>
<p className="text-sm text-gray-600 mb-4">Deep physical cleaning combined with specialized antimicrobial treatments for residential and commercial ductwork. Removes years of buildup, allergens, and harmful bacteria.</p>
</div>
</div>

<div className="group border border-gray-200 rounded-xl overflow-hidden hover:border-green-600 transition-colors bg-gray-50 flex flex-col sm:flex-row">
<div className="sm:w-1/3 relative h-48 sm:h-auto">
<img alt="Energy Efficiency HVAC Inspection" className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/portrait-professional-engineer-standing-front-fixed-air-conditioner-proud-work-done-skilled-technician-contracted-by-customer-happy-with-smooth-maintenance-hvac-system-components_482257-70160.jpg?w=800&amp;q=80"/>
<div className="group-hover:bg-transparent transition-colors bg-gray-900/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-6 sm:w-2/3 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-green-600 text-xl" icon="solar:bolt-circle-linear"></iconify-icon>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Energy Efficiency Sealing</h3>
</div>
<p className="text-sm text-gray-600 mb-4">Stop cooling and heating your attic. We identify and seal hidden leaks in your ductwork, drastically reducing utility costs and immediately improving airflow to all rooms.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-200" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Trusted by Tulsa Customers</h2>
<p className="text-base text-gray-600 mb-6">Here's what our customers say about our specialized coating and sealing services.</p>
<div className="inline-flex items-center gap-6 px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-600" icon="solar:history-linear"></iconify-icon> 10+ Years</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span className="flex items-center gap-1.5"><iconify-icon className="text-green-600" icon="solar:users-group-rounded-linear"></iconify-icon> 29+ Reviews</span>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<span className="flex items-center gap-1.5 text-gray-900"><iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon> 5.0 Average</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 flex items-center gap-1">
<iconify-icon icon="logos:google-icon"></iconify-icon> Review
                        </span>
</div>
<p className="text-sm text-gray-600 mb-6 flex-grow">"Our house in Midtown had terrible airflow and an old musty smell. Standard HVAC guys wanted thousands to rip out the walls. E.C.L.S. coated them from the inside. The smell is gone and my electric bill dropped. Highly recommend!"</p>
<div className="mt-auto">
<p className="text-sm font-semibold text-gray-900">Mark T.</p>
<p className="text-xs text-gray-500">Tulsa, OK • Duct Coating</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 flex items-center gap-1">
<iconify-icon icon="logos:google-icon"></iconify-icon> Review
                        </span>
</div>
<p className="text-sm text-gray-600 mb-6 flex-grow">"Very professional crew. They showed up on time, kept the work area incredibly clean, and explained the sanitization process clearly. Our office air quality feels entirely different now."</p>
<div className="mt-auto">
<p className="text-sm font-semibold text-gray-900">Sarah Jenkins</p>
<p className="text-xs text-gray-500">Broken Arrow, OK • Sanitization</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 flex items-center gap-1">
<iconify-icon icon="logos:google-icon"></iconify-icon> Review
                        </span>
</div>
<p className="text-sm text-gray-600 mb-6 flex-grow">"We were dealing with deteriorating fiberglass in our slab ducts. E.C.L.S. applied their liner and completely sealed them. It saved us from a massive renovation nightmare. Worth every penny."</p>
<div className="mt-auto">
<p className="text-sm font-semibold text-gray-900">David R.</p>
<p className="text-xs text-gray-500">Jenks, OK • Duct Lining</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400 flex items-center gap-1">
<iconify-icon icon="logos:google-icon"></iconify-icon> Review
                        </span>
</div>
<p className="text-sm text-gray-600 mb-6 flex-grow">"Honest pricing and great communication. I thought I needed all new ductwork because half the house wasn't cooling. They found the leaks, sealed them efficiently, and solved the problem."</p>
<div className="mt-auto">
<p className="text-sm font-semibold text-gray-900">Michelle W.</p>
<p className="text-xs text-gray-500">Owasso, OK • Energy Sealing</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800 transition-colors" href="https://www.google.com/maps/search/?api=1&amp;query=K.N.Z+Construction+East+Peoria+IL&amp;query_place_id=ChIJS8427rBbCogRACdFHgfU6wc4" rel="noopener noreferrer" target="_blank">
                    See More Reviews on Google
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Our Recent Work</h2>
<p className="text-base text-gray-600">Quality craftsmanship you can see. Real job sites, real restorations.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">

<div className="relative group h-64 overflow-hidden rounded-lg bg-gray-100">
<img alt="Worker sealing residential ducts" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/responsible-african-american-worker-repairing-device-cooling-premises-rooftop-with-portable-laptop-hands-busy-man-kneeling-near-air-conditioner-beautiful-sunset-background_161094-16015.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-4 w-full">
<p className="text-white text-sm font-medium">Residential Sealing</p>
<p className="text-gray-300 text-xs">Tulsa, OK</p>
</div>
</div>

<div className="relative group h-64 overflow-hidden rounded-lg bg-gray-100">
<img alt="Commercial duct sanitization" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/man-hard-hat-working-roof_1042554-5808.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-4 w-full">
<p className="text-white text-sm font-medium">Commercial Sanitization</p>
<p className="text-gray-300 text-xs">Broken Arrow, OK</p>
</div>
</div>

<div className="relative group h-64 overflow-hidden rounded-lg bg-gray-100">
<img alt="Applying duct coating material" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/free-photo/medium-shot-smiley-people-wearing-helmets_23-2149366669.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-4 w-full">
<p className="text-white text-sm font-medium">Interior Coating Prep</p>
<p className="text-gray-300 text-xs">Jenks, OK</p>
</div>
</div>

<div className="relative group h-64 overflow-hidden rounded-lg bg-gray-100">
<img alt="Inspecting ductwork interior" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/team-repairing-hvac-systems-building_1314467-80339.jpg?w=360&amp;q=80"/>
<div className="bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-4 w-full">
<p className="text-white text-sm font-medium">Pre-Coat Inspection</p>
<p className="text-gray-300 text-xs">Bixby, OK</p>
</div>
</div>

<div className="relative group h-64 overflow-hidden rounded-lg bg-gray-100">
<img alt="Technician measuring airflow" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/qualified-worker-commissioned-outside-air-conditioner-annual-maintenance-looking-broken-internal-parts-competent-wireman-doing-hvac-system-inspection-writing-report-clipboard_482257-67859.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-4 w-full">
<p className="text-white text-sm font-medium">Airflow Testing</p>
<p className="text-gray-300 text-xs">Owasso, OK</p>
</div>
</div>

<div className="relative group h-64 overflow-hidden rounded-lg bg-gray-100">
<img alt="Duct restoration complete" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/air-conditioning-hvac-service-technician-using-gauges-check-refrigerant-add-refrigerant_539854-3228.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-4 w-full">
<p className="text-white text-sm font-medium">Final Lining Application</p>
<p className="text-gray-300 text-xs">Tulsa, OK</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex justify-center items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md text-sm font-medium transition-colors shadow-sm" href="#contact">
                    Get Your Project Started
                </a>
</div>
</div>
</section>

<section className="py-20 bg-gray-900 text-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">About E.C.L.S. Duct Coating</h2>
<p className="text-gray-300 mb-6 leading-relaxed">
                        E.C.L.S. Duct Coating is a specialized service provider in Tulsa, solving ventilation problems that standard HVAC companies often can't. We focus exclusively on the interior health of your home or commercial ventilation system.
                    </p>
<p className="text-gray-300 mb-8 leading-relaxed">
                        With over 10 years in the industry and a perfect 5.0-star reputation, we utilize advanced coating technologies to line and restore ducts from the inside out. This approach provides our clients with a highly effective, cost-saving alternative to complete duct replacement. 
                    </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="border-l-2 border-green-500 pl-4">
<p className="text-2xl font-semibold tracking-tight text-white mb-1">10+</p>
<p className="text-xs text-gray-400 uppercase tracking-wider">Years Active</p>
</div>
<div className="border-l-2 border-green-500 pl-4">
<p className="text-2xl font-semibold tracking-tight text-white mb-1">Local</p>
<p className="text-xs text-gray-400 uppercase tracking-wider">Tulsa Roots</p>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
<h3 className="text-xl font-semibold tracking-tight mb-4 flex items-center gap-2">
<iconify-icon className="text-green-400" icon="solar:map-point-linear"></iconify-icon>
                        Proudly Serving Tulsa &amp; Surrounding Areas
                    </h3>
<ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-300 mb-8">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Tulsa</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Broken Arrow</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Owasso</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Bixby</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Jenks</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Sand Springs</li>
</ul>
<div className="border-t border-white/10 pt-6 mb-6">
<h4 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:clock-circle-linear"></iconify-icon>
                            Office Hours
                        </h4>
<p className="text-sm text-gray-400">Monday – Friday: 8:00 AM – 5:00 PM</p>
<p className="text-sm text-gray-400">Saturday – Sunday: Closed</p>
</div>

<div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-green-400 text-xl flex-shrink-0 mt-0.5" icon="solar:shield-check-bold"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-white mb-1">Our Coating Guarantee</h4>
<p className="text-xs text-gray-300 leading-relaxed">Our specialized duct lining applications are backed by comprehensive durability warranties. We guarantee a sealed, odor-free, and stable duct interior upon completion.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-5">

<div className="lg:col-span-2 bg-green-800 p-10 text-white">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Get in Touch</h3>
<p className="text-green-100 text-sm mb-10">We typically respond within 24 hours to schedule a consultation or provide an estimate.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-green-200 uppercase tracking-wider mb-1">Call Us Directly</p>
<a className="text-lg font-medium hover:text-green-200 transition-colors" href="tel:+19188300394">+1 (918) 830-0394</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-green-200 uppercase tracking-wider mb-1">Email Address</p>
<a className="text-base hover:text-green-200 transition-colors" href="mailto:eclsoftulsa@gmail.com">eclsoftulsa@gmail.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-green-200 uppercase tracking-wider mb-1">Service Area</p>
<p className="text-base">Tulsa, OK &amp; Surrounding Metro</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors text-sm" id="name" name="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors text-sm" id="phone" name="phone" placeholder="(918) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors text-sm" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">How can we help?</label>
<textarea className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors text-sm resize-none" id="message" name="message" placeholder="Describe your duct or air quality issue..." rows="4"></textarea>
</div>
<button className="w-full md:w-auto bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-md text-sm font-medium transition-colors flex justify-center items-center gap-2" type="submit">
                                Send Message
                                <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-green-900 relative overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-green-700/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-green-800/40 rounded-full blur-3xl"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to Get Started?</h2>
<p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">We are currently accepting new service requests in the Tulsa area. Thank you for choosing E.C.L.S. Duct Coating for your home's health.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-green-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg" href="tel:+19188300394">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                    (918) 830-0394
                </a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent text-white border border-white/30 hover:bg-white/10 px-8 py-4 rounded-md text-base font-medium transition-colors backdrop-blur-sm" href="#contact">
                    Get a Free Quote
                </a>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 text-sm text-green-200">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Licensed &amp; Insured</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:star-linear"></iconify-icon> 5.0 Google Rating</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:history-linear"></iconify-icon> 10+ Years Exp.</span>
</div>
</div>
</section>

<footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

<div className="col-span-1 md:col-span-1">
<a className="flex flex-col mb-4 inline-block" href="#">
<span className="text-xl font-semibold tracking-tighter text-white uppercase leading-none">E.C.L.S.</span>
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase mt-0.5">Duct Coating</span>
</a>
<p className="text-sm mb-4 leading-relaxed">Specialized internal duct restoration, coating, and air quality improvement for Tulsa residents and businesses.</p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl grayscale hover:grayscale-0 transition-all" icon="logos:facebook"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl grayscale hover:grayscale-0 transition-all" icon="logos:google-icon"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-green-400 transition-colors" href="#services">Duct Coating &amp; Lining</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#services">Air Quality Improvement</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#services">Duct Sanitization</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#services">Energy Efficiency Sealing</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-green-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#work">Our Work</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#reviews">Reviews</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-4 tracking-tight">Contact Us</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-gray-500 flex-shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Serving Tulsa, OK &amp; Surrounding Areas</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500 flex-shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-green-400 transition-colors" href="tel:+19188300394">(918) 830-0394</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500 flex-shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-green-400 transition-colors" href="mailto:eclsoftulsa@gmail.com">eclsoftulsa@gmail.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 E.C.L.S. Duct Coating. All rights reserved.</p>
<div className="flex gap-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Licensed</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Insured</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Family Owned</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
