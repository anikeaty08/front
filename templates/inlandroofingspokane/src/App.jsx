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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
}
}
}
}
}



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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="flex flex-col" href="#">
<span className="text-xl font-semibold tracking-tighter text-slate-900 leading-none">INLAND ROOFING</span>
<span className="text-xs font-medium tracking-widest text-primary-600 uppercase mt-1">&amp; Supply</span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#why-us">Why Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
</nav>

<div className="hidden md:flex items-center space-x-4">
<a className="flex items-center text-sm font-medium text-slate-900 hover:text-primary-600 transition-colors" href="tel:5095351566">
<iconify-icon className="text-lg mr-2" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                        (509) 535-1566
                    </a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" href="#contact">
                        Get a Free Quote
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none p-2" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 hero-bg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm mb-6">
<iconify-icon className="mr-1.5 text-yellow-400" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
                    Spokane's Top Rated Roofers Since 1950
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 leading-tight">
                    Expert Roofing Solutions for the Inland Northwest.
                </h1>
<p className="text-lg sm:text-xl text-slate-300 mb-10 font-normal leading-relaxed max-w-xl">
                    Protecting Spokane homes and businesses with unparalleled craftsmanship, honest pricing, and over 70 years of local expertise.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-all group" href="tel:5095351566">
<iconify-icon className="text-xl mr-2 group-hover:animate-pulse" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        Call (509) 535-1566
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-300 text-base font-medium rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all" href="#contact">
                        Request Service
                        <iconify-icon className="text-xl ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
<span className="flex items-center"><iconify-icon className="text-primary-400 text-lg mr-2" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon> Licensed &amp; Insured</span>
<span className="flex items-center"><iconify-icon className="text-primary-400 text-lg mr-2" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon> Free Estimates</span>
<span className="flex items-center"><iconify-icon className="text-primary-400 text-lg mr-2" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> Family Owned</span>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-100">
<div className="px-2">
<p className="text-2xl font-semibold tracking-tight text-slate-900">70+</p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Years Experience</p>
</div>
<div className="px-2">
<p className="text-2xl font-semibold tracking-tight text-slate-900">150+</p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Google Reviews</p>
</div>
<div className="px-2">
<p className="text-2xl font-semibold tracking-tight text-slate-900 flex items-center justify-center">4.8<iconify-icon className="text-yellow-400 text-lg ml-1" icon="solar:star-bold"></iconify-icon></p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Average Rating</p>
</div>
<div className="px-2">
<p className="text-2xl font-semibold tracking-tight text-slate-900 flex items-center justify-center">
<iconify-icon className="text-primary-600 text-2xl" icon="solar:verified-check-linear"></iconify-icon>
</p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Licensed &amp; Insured</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50" id="why-us">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Why Spokane Residents &amp; Businesses Choose Inland Roofing</h2>
<p className="text-base text-slate-500">We don't just build roofs; we build trust. Our commitment to quality and transparency has made us a staple in the Spokane community for over seven decades.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
<iconify-icon className="text-2xl text-primary-600" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">70+ Years Experience</h3>
<p className="text-sm text-slate-500">Founded in the 1950s, our decades of hands-on experience mean we've seen and solved every roofing challenge in the Pacific Northwest.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
<iconify-icon className="text-2xl text-primary-600" icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Honest Upfront Pricing</h3>
<p className="text-sm text-slate-500">No hidden fees or surprise charges. We provide detailed, transparent quotes so you know exactly what you're paying for before work begins.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
<iconify-icon className="text-2xl text-primary-600" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Fully Licensed &amp; Insured</h3>
<p className="text-sm text-slate-500">Your property is protected. We carry comprehensive liability insurance and are fully licensed to operate in Washington State.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
<iconify-icon className="text-2xl text-primary-600" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Local Spokane Business</h3>
<p className="text-sm text-slate-500">We are your neighbors. As a family-owned business deeply rooted in Spokane, we care about the community we serve.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
<iconify-icon className="text-2xl text-primary-600" icon="solar:hammer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Premium Materials</h3>
<p className="text-sm text-slate-500">We only use top-tier materials from trusted manufacturers, ensuring your roof withstands harsh winters and hot summers.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
<iconify-icon className="text-2xl text-primary-600" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">100% Satisfaction</h3>
<p className="text-sm text-slate-500">We stand behind our work. Our job isn't done until you are completely satisfied with the safety and appearance of your roof.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Services</h2>
<p className="text-base text-slate-500">From minor repairs to complete replacements, we offer comprehensive roofing solutions tailored to the unique climate of the Inland Northwest.</p>
</div>
<a className="inline-flex shrink-0 items-center justify-center px-5 py-2.5 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all" href="#contact">
                    Get a Free Quote
                </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary-200 hover:shadow-sm transition-all cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-primary-600 mb-4 transition-colors" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Architectural Roofing</h3>
<p className="text-xs text-slate-500">Durable, aesthetic laminated shingle installation for lasting protection.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary-200 hover:shadow-sm transition-all cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-primary-600 mb-4 transition-colors" icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Roofing Repairs</h3>
<p className="text-xs text-slate-500">Fast, reliable fixes for leaks, storm damage, and missing shingles.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary-200 hover:shadow-sm transition-all cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-primary-600 mb-4 transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Roof Inspections</h3>
<p className="text-xs text-slate-500">Thorough assessments to identify issues before they become costly problems.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary-200 hover:shadow-sm transition-all cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-primary-600 mb-4 transition-colors" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Flat &amp; Low Slope</h3>
<p className="text-xs text-slate-500">Specialized commercial and residential solutions for flat roofing structures.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary-200 hover:shadow-sm transition-all cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-primary-600 mb-4 transition-colors" icon="solar:trees-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Cedar Shake Roofing</h3>
<p className="text-xs text-slate-500">Installation, repair, and maintenance of traditional wooden shake roofs.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary-200 hover:shadow-sm transition-all cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-primary-600 mb-4 transition-colors" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Moss Removal</h3>
<p className="text-xs text-slate-500">Safe, effective treatments to extend the life of your roof.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary-200 hover:shadow-sm transition-all cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-primary-600 mb-4 transition-colors" icon="solar:snowflake-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Snow Removal</h3>
<p className="text-xs text-slate-500">Prevent ice dams and structural stress with professional snow clearing.</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-primary-200 hover:shadow-sm transition-all cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-primary-600 mb-4 transition-colors" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Insurance Work</h3>
<p className="text-xs text-slate-500">Assistance navigating claims for storm, wind, or hail damage.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Trusted by Spokane Customers</h2>
<p className="text-base text-slate-400 max-w-2xl mb-8">Don't just take our word for it. See why we maintain a 4.8-star rating across over 150 reviews from your neighbors.</p>
<div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
<span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">70+ Years</span>
<span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">150+ Reviews</span>
<span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 flex items-center">4.8 Average <iconify-icon className="text-yellow-400 ml-1.5" icon="solar:star-bold"></iconify-icon></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative">
<div className="absolute top-6 right-6">
<iconify-icon className="text-slate-400 text-xl" icon="ic:baseline-google"></iconify-icon>
</div>
<div className="flex text-yellow-400 mb-4 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 line-clamp-4">"Inland Roofing replaced our entire roof in Spokane Valley. The crew was professional, cleaned up thoroughly every day, and the architectural shingles look fantastic. Honest pricing too."</p>
<div>
<p className="text-sm font-semibold text-white">Mark T.</p>
<p className="text-xs text-slate-400">Spokane Valley • Full Replacement</p>
</div>
</div>

<div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative">
<div className="absolute top-6 right-6">
<iconify-icon className="text-slate-400 text-xl" icon="ic:baseline-google"></iconify-icon>
</div>
<div className="flex text-yellow-400 mb-4 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 line-clamp-4">"Had a bad leak after a storm. Called them up and they came out for an inspection the next day. Repaired the flashing quickly and for a very reasonable price. Highly recommend!"</p>
<div>
<p className="text-sm font-semibold text-white">Sarah W.</p>
<p className="text-xs text-slate-400">South Hill • Emergency Repair</p>
</div>
</div>

<div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative">
<div className="absolute top-6 right-6">
<iconify-icon className="text-slate-400 text-xl" icon="ic:baseline-google"></iconify-icon>
</div>
<div className="flex text-yellow-400 mb-4 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 line-clamp-4">"It's hard to find contractors you can trust, but Inland is old school in the best way. They did a flat roof on our commercial building downtown. On time, on budget."</p>
<div>
<p className="text-sm font-semibold text-white">David L.</p>
<p className="text-xs text-slate-400">Downtown Spokane • Commercial Flat Roof</p>
</div>
</div>

<div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 relative">
<div className="absolute top-6 right-6">
<iconify-icon className="text-slate-400 text-xl" icon="ic:baseline-google"></iconify-icon>
</div>
<div className="flex text-yellow-400 mb-4 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-300 mb-6 line-clamp-4">"Used them for moss removal and minor repairs on our cedar shake roof. They were gentle on the roof but got it looking brand new again. Will use them when it's time to replace."</p>
<div>
<p className="text-sm font-semibold text-white">Emily R.</p>
<p className="text-xs text-slate-400">Liberty Lake • Maintenance</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-sm font-medium rounded-lg text-white hover:bg-slate-800 transition-colors" href="https://share.google/lEI89t6ykCR6l20gZ" rel="noopener noreferrer" target="_blank">
                    See More Reviews on Google
                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Recent Work</h2>
<p className="text-base text-slate-500">Quality craftsmanship you can see. Browse a selection of our recent residential and commercial projects across the region.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="New Architectural Roof" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-white font-medium text-lg tracking-tight">Architectural Shingle Install</p>
<p className="text-slate-300 text-sm">Spokane Valley, WA</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Modern Home Roof" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-white font-medium text-lg tracking-tight">Complete Re-Sheeting &amp; Roof</p>
<p className="text-slate-300 text-sm">South Hill, Spokane</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Flat Roof Work" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590490359854-dfba19688d70?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6">
<p className="text-white font-medium text-lg tracking-tight">Commercial Flat Roof</p>
<p className="text-slate-300 text-sm">Downtown Spokane</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-all" href="#contact">
                    Get Your Project Started
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 mb-6">
                        Est. 1950s
                    </div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">About Inland Roofing &amp; Supply</h2>
<div className="prose prose-slate prose-sm sm:prose-base text-slate-600">
<p className="mb-4">For over 70 years, Inland Roofing &amp; Supply has been the cornerstone of quality roofing in Spokane and the surrounding regions. Founded on the principles of hard work, integrity, and unmatched craftsmanship, we have grown from a small local outfit into one of the most trusted names in the Inland Northwest.</p>
<p className="mb-4">As a family-owned business, we understand that a roof is more than just shingles and nails—it's the primary defense for your family, your belongings, and your livelihood. That's why we treat every project, whether a minor repair or a massive commercial installation, with the same level of dedication and scrutiny.</p>
<p>Our long-standing A+ reputation isn't just claimed; it's earned every day through honest upfront pricing, adherence to strict safety standards, and a steadfast commitment to 100% customer satisfaction.</p>
</div>
<div className="mt-8 flex items-center space-x-6">
<div className="flex flex-col">
<span className="text-3xl font-semibold text-slate-900">70+</span>
<span className="text-xs font-medium text-slate-500 uppercase mt-1">Years Served</span>
</div>
<div className="w-px h-12 bg-slate-200"></div>
<div className="flex flex-col">
<span className="text-3xl font-semibold text-slate-900">10k+</span>
<span className="text-xs font-medium text-slate-500 uppercase mt-1">Roofs Completed</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-6 flex items-center">
<iconify-icon className="text-primary-600 mr-2 text-2xl" icon="solar:routing-2-linear"></iconify-icon>
                        Proudly Serving Spokane &amp; Beyond
                    </h3>
<ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8 text-sm text-slate-600">
<li className="flex items-center"><iconify-icon className="text-primary-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Spokane</li>
<li className="flex items-center"><iconify-icon className="text-primary-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Spokane Valley</li>
<li className="flex items-center"><iconify-icon className="text-primary-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Liberty Lake</li>
<li className="flex items-center"><iconify-icon className="text-primary-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Cheney</li>
<li className="flex items-center"><iconify-icon className="text-primary-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Airway Heights</li>
<li className="flex items-center"><iconify-icon className="text-primary-500 mr-2" icon="solar:check-circle-linear"></iconify-icon> Deer Park</li>
</ul>
<hr className="border-slate-100 mb-6"/>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4 flex items-center">
<iconify-icon className="text-primary-600 mr-2 text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
                        Business Hours
                    </h3>
<div className="space-y-2 text-sm text-slate-600 mb-8">
<div className="flex justify-between items-center">
<span>Monday - Friday</span>
<span className="font-medium text-slate-900">8:00 AM - 4:30 PM</span>
</div>
<div className="flex justify-between items-center">
<span>Saturday &amp; Sunday</span>
<span className="font-medium text-slate-400">Closed</span>
</div>
</div>
<div className="bg-primary-50 rounded-xl p-4 border border-primary-100 flex items-start">
<iconify-icon className="text-primary-600 text-xl mt-0.5 mr-3 shrink-0" icon="solar:shield-check-bold"></iconify-icon>
<div>
<p className="text-sm font-semibold text-primary-900 mb-1">Our Guarantee</p>
<p className="text-xs text-primary-700">We stand by our work. All full roof replacements come with extensive manufacturer warranties and our own workmanship guarantee.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Request a Free Quote</h2>
<p className="text-sm text-slate-500 mb-8">Fill out the form below and our team will get back to you within 24 hours to schedule an inspection.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-lg border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 border outline-none transition-colors" id="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-lg border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 border outline-none transition-colors" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
<input className="block w-full rounded-lg border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 border outline-none transition-colors" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="block w-full rounded-lg border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 border outline-none transition-colors" id="phone" placeholder="(509) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="service">Service Needed</label>
<select className="block w-full rounded-lg border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 border outline-none transition-colors bg-white appearance-none" id="service">
<option>Select a service...</option>
<option>Roof Replacement</option>
<option>Roof Repair</option>
<option>Roof Inspection</option>
<option>Moss/Snow Removal</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Message Details</label>
<textarea className="block w-full rounded-lg border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 border outline-none transition-colors resize-none" id="message" placeholder="Tell us about your roofing needs..." rows="4"></textarea>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors" type="button">
                            Send Message
                        </button>
</form>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 h-fit">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-2xl text-primary-600" icon="solar:phone-linear"></iconify-icon>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-slate-900">Phone</p>
<a className="text-base text-slate-600 hover:text-primary-600 transition-colors" href="tel:5095351566">(509) 535-1566</a>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-2xl text-primary-600" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-slate-900">Email</p>
<a className="text-base text-slate-600 hover:text-primary-600 transition-colors" href="mailto:inlandroof@aol.com">inlandroof@aol.com</a>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-2xl text-primary-600" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-slate-900">Location</p>
<p className="text-base text-slate-600">Spokane, Washington</p>
<a className="text-sm text-primary-600 hover:underline mt-1 inline-block" href="https://share.google/lEI89t6ykCR6l20gZ" rel="noopener noreferrer" target="_blank">View on Google Maps →</a>
</div>
</div>
</div>
<div className="mt-10 p-4 bg-white rounded-xl border border-slate-200">
<p className="text-sm font-medium text-slate-900 flex items-center mb-1">
<iconify-icon className="text-primary-600 mr-2 text-lg" icon="solar:danger-circle-linear"></iconify-icon>
                            Emergency Service
                        </p>
<p className="text-xs text-slate-500">If you have an active leak or immediate storm damage, please call our phone number directly for the fastest response.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-primary-700 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg className="h-full w-full" height="100%" viewbox="0 0 800 800" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs><pattern height="40" id="a" patternunits="userSpaceOnUse" width="40"><path d="M0 40V0h40v40H0zm20-20v20h20V20H20z" fill="currentColor"></path></pattern></defs>
<rect fill="url(#a)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to Get Started?</h2>
<p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">We are currently accepting new service requests in the Spokane area. Thank you for considering Inland Roofing &amp; Supply for your home or business.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-primary-700 bg-white hover:bg-slate-50 shadow-lg transition-all" href="tel:5095351566">
                    Call (509) 535-1566
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/20 text-lg font-medium rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all" href="#contact">
                    Request a Free Quote
                </a>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 text-sm text-primary-200">
<span className="flex items-center"><iconify-icon className="mr-1.5" icon="solar:check-circle-linear"></iconify-icon> 70+ Years Experience</span>
<span className="flex items-center"><iconify-icon className="mr-1.5" icon="solar:check-circle-linear"></iconify-icon> Licensed &amp; Insured</span>
<span className="flex items-center"><iconify-icon className="mr-1.5" icon="solar:check-circle-linear"></iconify-icon> Free Estimates</span>
</div>
</div>
</section>

<footer className="bg-slate-900 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-1">
<a className="flex flex-col mb-4" href="#">
<span className="text-xl font-semibold tracking-tighter text-white leading-none">INLAND ROOFING</span>
<span className="text-xs font-medium tracking-widest text-slate-400 uppercase mt-1">&amp; Supply</span>
</a>
<p className="text-sm text-slate-400 mb-6">Spokane's trusted local roofing experts providing quality craftsmanship and honest pricing since the 1950s.</p>
<div className="flex space-x-4">

<a className="text-slate-400 hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon className="text-xl" icon="ic:baseline-facebook"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="https://share.google/lEI89t6ykCR6l20gZ" target="_blank">
<span className="sr-only">Google Maps</span>
<iconify-icon className="text-xl" icon="ic:baseline-google"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#services">Our Services</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#why-us">Why Choose Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#reviews">Customer Reviews</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#about">About Us</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#services">Architectural Roofing</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#services">Roof Repairs</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#services">Flat Roofing</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#services">Moss &amp; Snow Removal</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
<ul className="space-y-3">
<li className="flex items-start text-sm text-slate-400">
<iconify-icon className="mr-2 mt-0.5 shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:5095351566">(509) 535-1566</a>
</li>
<li className="flex items-start text-sm text-slate-400">
<iconify-icon className="mr-2 mt-0.5 shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors break-all" href="mailto:inlandroof@aol.com">inlandroof@aol.com</a>
</li>
<li className="flex items-start text-sm text-slate-400">
<iconify-icon className="mr-2 mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Spokane, WA<br/>Serving the Inland NW</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-slate-500 mb-4 md:mb-0">
                    © 2023 Inland Roofing &amp; Supply. All rights reserved. WA Lic. Insured.
                </p>
<div className="flex space-x-4 text-xs text-slate-500">
<span className="flex items-center"><iconify-icon className="mr-1 text-slate-400" icon="solar:shield-check-bold"></iconify-icon> Licensed</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-slate-400" icon="solar:verified-check-bold"></iconify-icon> Insured</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-slate-400" icon="solar:star-bold"></iconify-icon> 5-Star Rated</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
