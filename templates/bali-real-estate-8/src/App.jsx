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



        lucide.createIcons();
        
        // Simple script for mobile menu toggle
        document.querySelector('[data-collapse-toggle]').addEventListener('click', function() {
            const nav = this.closest('nav');
            // This is a minimal implementation, for a real project you'd likely toggle a class on a menu container
            alert('Mobile menu toggle would expand here');
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2" href="#">

<div className="text-xl tracking-tight font-semibold uppercase text-stone-900">Estetico<span className="text-amber-600">.</span></div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#about">About the Project</a>
<a className="hover:text-stone-900 transition-colors" href="#units">Unit Types</a>
<a className="hover:text-stone-900 transition-colors" href="#video">Video</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contacts</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-stone-900 rounded-full hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2" href="#contact">
                Get Presentation
            </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-500 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200" data-collapse-toggle="navbar-sticky" type="button">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-xs font-medium tracking-wide text-stone-500 mb-8 uppercase">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    Investment Opportunity
                </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-8">
                    Apartments and Villas in <span className="text-amber-700/90">Bali</span> with Installment Plans.
                </h1>
<p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                    Located in one of the island’s most promising areas — Bukit. Investment real estate in an All-in-One Resort format, just minutes from Bali’s best beaches.
                </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 text-sm font-medium text-stone-800">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="check-circle"></i>
<span>Down payment from 30%</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="check-circle"></i>
<span>Installment up to 30 months</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="trending-up"></i>
<span>Projected ROI up to 12%</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-600" data-lucide="wallet"></i>
<span>Income from $1,500/mo</span>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all bg-stone-900 rounded-full hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-200" href="#contact">
                        Get the presentation
                        <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-amber-100/50 rounded-[2rem] transform rotate-2"></div>
<div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl">
<img alt="Bali Luxury Villa" className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-white font-medium tracking-tight text-lg">Bukit Peninsula, Bali</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<span className="px-4 py-1 rounded-full border border-stone-200 text-stone-500 text-xs font-medium uppercase tracking-wider mb-4">01 — Concept</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mb-6">
                    Modern <span className="text-amber-700">ALL-IN-ONE</span> Aparthotel
                </h2>
<p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
                    A thoughtfully designed investment concept where everything needed for living, leisure, and rental income is integrated into a single resort complex. The format makes the project highly attractive to both tourists and long-term residents.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-700" data-lucide="utensils"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">4 Restaurants</h3>
<p className="text-sm text-stone-500 mt-1">Different culinary concepts</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-700" data-lucide="martini"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">2 Bars</h3>
<p className="text-sm text-stone-500 mt-1">Premium lounge areas</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-700" data-lucide="waves"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Swimming Pools</h3>
<p className="text-sm text-stone-500 mt-1">Leisure &amp; infinity pools</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-700" data-lucide="dumbbell"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Fitness Area</h3>
<p className="text-sm text-stone-500 mt-1">State-of-the-art gym</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-700" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Coworking</h3>
<p className="text-sm text-stone-500 mt-1">High-speed dedicated space</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-700" data-lucide="baby"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">Kids’ Center</h3>
<p className="text-sm text-stone-500 mt-1">Safe play zones</p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors group col-span-2">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-stone-700" data-lucide="flower-2"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight">SPA &amp; Wellness Zones</h3>
<p className="text-sm text-stone-500 mt-1">Complete relaxation facilities</p>
</div>
</div>
<div className="mt-12 p-6 rounded-lg bg-stone-900 text-white text-center">
<p className="text-lg font-medium leading-relaxed">
                    This comprehensive resort format directly drives strong rental demand and consistently high occupancy rates.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[600px]">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63046.72087796989!2d115.1581458!3d-8.8456677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd25b8492292f75%3A0x7d01c0b115682855!2sPandawa%20Beach!5e0!3m2!1sen!2sid!4v1709420000000!5m2!1sen!2sid" style={{border: '0', filter: 'grayscale(100%) contrast(1.2)'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-stone-200">
<div className="flex items-center gap-3">
<i className="text-amber-600 w-5 h-5" data-lucide="trending-up"></i>
<p className="text-sm text-stone-700 font-medium">Market Insight: High value growth area actively developing.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="px-4 py-1 rounded-full border border-stone-200 bg-white text-stone-500 text-xs font-medium uppercase tracking-wider mb-6 inline-block">02 — Location</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mb-6">
                    Prime Location — <br/>South Bali
                </h2>
<p className="text-lg text-stone-600 mb-10 leading-relaxed">
                    The project is located in the Pandawa area — one of the fastest-growing destinations on the island, combining premium beaches, developed infrastructure, and strong investment potential.
                </p>
<div className="space-y-4">
<div className="flex items-center p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 mr-4">
<span className="font-bold text-lg">02</span>
</div>
<div>
<h4 className="text-stone-900 font-medium">Minutes to Pandawa Beach</h4>
<p className="text-sm text-stone-500">Crystal clear waters</p>
</div>
</div>
<div className="flex items-center p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 mr-4">
<span className="font-bold text-lg">08</span>
</div>
<div>
<h4 className="text-stone-900 font-medium">Minutes to Melasti Beach</h4>
<p className="text-sm text-stone-500">Premium beach clubs</p>
</div>
</div>
<div className="flex items-center p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 mr-4">
<span className="font-bold text-lg">10</span>
</div>
<div>
<h4 className="text-stone-900 font-medium">Minutes to Nusa Dua</h4>
<p className="text-sm text-stone-500">Luxury resorts complex</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="units">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="px-4 py-1 rounded-full border border-stone-200 text-stone-500 text-xs font-medium uppercase tracking-wider mb-4 inline-block">03 — Portfolio</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mb-6">
                    Projects Where Modern <br className="hidden md:block"/> <span className="text-amber-700">Aesthetics</span> Meet Functionality
                </h2>
<p className="text-lg text-stone-600">
                    The project combines several formats, allowing investors to choose the option that best fits different investment strategies.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
<img alt="Smart Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5 text-stone-900" data-lucide="arrow-up-right"></i>
</div>
</div>
<h3 className="text-xl font-medium text-stone-900 uppercase tracking-tight mb-2">Smart Villas</h3>
<p className="text-stone-500 mb-4">Starting from 30 m²</p>
<div className="h-px w-full bg-stone-200 mb-4"></div>
<p className="text-sm text-stone-500 leading-relaxed">
                        Compact, highly efficient units designed for maximum rental yield.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
<img alt="Penthouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5 text-stone-900" data-lucide="arrow-up-right"></i>
</div>
</div>
<h3 className="text-xl font-medium text-stone-900 uppercase tracking-tight mb-2">Penthouses</h3>
<p className="text-stone-500 mb-4">Starting from 35 m²</p>
<div className="h-px w-full bg-stone-200 mb-4"></div>
<p className="text-sm text-stone-500 leading-relaxed">
                        Top-floor units with panoramic views and premium finishes.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
<img alt="Apartment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2400&amp;q=80"/>
<div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
<i className="w-5 h-5 text-stone-900" data-lucide="arrow-up-right"></i>
</div>
</div>
<h3 className="text-xl font-medium text-stone-900 uppercase tracking-tight mb-2">Apartments</h3>
<p className="text-stone-500 mb-4">Starting from 47 m²</p>
<div className="h-px w-full bg-stone-200 mb-4"></div>
<p className="text-sm text-stone-500 leading-relaxed">
                        Spacious layouts suitable for long-term living and families.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-stone-900 transition-all bg-white border border-stone-200 rounded-full hover:border-stone-400 hover:shadow-sm" href="#contact">
                    Get Full Floor Plans
                    <i className="ml-2 w-4 h-4" data-lucide="download"></i>
</a>
</div>
</div>
</section>

<section className="py-20 bg-stone-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="bg-white rounded-3xl p-10 lg:p-16 border border-stone-100 shadow-xl shadow-stone-200/50">
<div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-amber-600" data-lucide="file-text"></i>
</div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mb-4">
                    Get a Detailed Project Presentation
                </h2>
<p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
                    We’ve prepared a comprehensive presentation with up-to-date prices, flexible payment plans, and detailed ROI calculations.
                </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-medium text-white transition-all bg-amber-600 rounded-full hover:bg-amber-700 shadow-lg shadow-amber-200" href="#contact">
                        Get Presentation with Prices &amp; ROI
                    </a>
<p className="text-sm text-stone-400">We’ll send the presentation to your messenger or email.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="video">
<div className="max-w-7xl mx-auto px-6">

<div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-stone-900 mb-24 group">
<img alt="Video cover" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2600&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-white/30">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</button>
</div>
<div className="absolute bottom-8 left-8">
<p className="text-white text-xl font-medium tracking-tight">Experience the Atmosphere</p>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="px-4 py-1 rounded-full border border-stone-200 text-stone-500 text-xs font-medium uppercase tracking-wider mb-6 inline-block">04 — About Us</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mb-8">
                        Why Investors Choose <br/><span className="text-amber-700">Estetico Estate</span>
</h2>
<blockquote className="text-xl text-stone-800 font-medium leading-relaxed border-l-4 border-amber-500 pl-6 mb-8">
                        "For us, reputation matters more than a quick deal."
                    </blockquote>
<p className="text-stone-600 mb-6">
                        We work exclusively with carefully vetted and high-potential projects in Bali. Our goal is to help our clients make well-informed and strategic investment decisions.
                    </p>
</div>
<div className="flex flex-col justify-center space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-stone-700" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900">Thorough due diligence</h4>
<p className="text-stone-500 text-sm">Rigorous legal and structural checks.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-stone-700" data-lucide="bar-chart-3"></i>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900">Focus on liquidity</h4>
<p className="text-stone-500 text-sm">Projects with high resale potential.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-stone-700" data-lucide="users"></i>
</div>
<div>
<h4 className="text-lg font-medium text-stone-900">End-to-end support</h4>
<p className="text-stone-500 text-sm">From selection to property management.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 text-white overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
<span className="px-4 py-1 rounded-full border border-white/20 text-white/80 text-xs font-medium uppercase tracking-wider mb-6 inline-block">05 — Contacts</span>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-8">
                        LET'S BUILD <br/> <span className="text-white/70">TOGETHER</span>
</h2>
<p className="text-xl text-white/80 leading-relaxed mb-12 max-w-md">
                        Let us help you find a property that will be not only a profitable asset, but also a place of energy, inspiration, and growth.
                    </p>
<div className="space-y-6 text-lg">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<a className="hover:text-amber-200 transition-colors" href="mailto:office@estetico.estate">office@estetico.estate</a>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<a className="hover:text-amber-200 transition-colors" href="tel:+6281239838440">+62 812 3983 8440</a>
</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-white/10">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-white/60 mb-1">First Name</label>
<input className="glass-input w-full placeholder-white/30" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-white/60 mb-1">Last Name</label>
<input className="glass-input w-full placeholder-white/30" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-white/60 mb-1">Email</label>
<input className="glass-input w-full placeholder-white/30" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-white/60 mb-1">Phone Number</label>
<input className="glass-input w-full placeholder-white/30" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="pt-4">
<button className="w-full py-4 px-6 bg-white text-blue-900 font-semibold rounded-lg hover:bg-stone-200 transition-colors" type="button">
                                Get project presentation
                            </button>
</div>
</form>
</div>
</div>

<div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl tracking-tight font-semibold uppercase">Estetico.</div>
<div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="#about">About the Project</a>
<a className="hover:text-white transition-colors" href="#units">Unit Types</a>
<a className="hover:text-white transition-colors" href="#video">Video</a>
<a className="hover:text-white transition-colors" href="#contact">Contacts</a>
</div>
<div className="text-sm text-white/40">
                    © 2024 Estetico Estate. All rights reserved.
                </div>
</div>
</div>
</section>


    </>
  );
}
