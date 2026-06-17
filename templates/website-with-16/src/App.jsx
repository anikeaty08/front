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
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<i className="w-8 h-8 text-yellow-500 fill-yellow-400 absolute top-0 left-0" data-lucide="sparkles"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-xl font-bold tracking-tight text-slate-900 uppercase">Sugar Land</span>
<span className="text-xs font-medium tracking-[0.2em] text-yellow-600 uppercase">Premium Detailing</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#book">
                    Book Appointment
                </a>
</nav>

<button className="md:hidden p-2 text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-sm font-medium mb-8 animate-fade-in-up">
<i className="w-4 h-4 fill-yellow-500 text-yellow-500" data-lucide="star"></i>
<span>#1 Rated Mobile Detailing Service</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                Showroom shine, <br/>
<span className="text-slate-400">delivered to your driveway.</span>
</h1>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience premium mobile car detailing in Sugar Land. We bring water, power, and professional expertise directly to your home or office.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all bg-yellow-600 rounded-lg hover:bg-yellow-700 hover:shadow-lg hover:shadow-yellow-600/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600" href="#book">
                    Book Online Now
                    <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 focus:outline-none" href="#services">
                    View Packages
                </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-lg font-semibold text-slate-400"><i className="w-6 h-6" data-lucide="shield-check"></i> Fully Insured</div>
<div className="flex items-center gap-2 text-lg font-semibold text-slate-400"><i className="w-6 h-6" data-lucide="droplets"></i> Eco-Friendly</div>
<div className="flex items-center gap-2 text-lg font-semibold text-slate-400"><i className="w-6 h-6" data-lucide="credit-card"></i> Secure Payment</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Book Your Appointment</h2>
<p className="text-xl text-slate-500">Select your vehicle, choose a package, and schedule in under 2 minutes.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">

<div className="md:col-span-4 bg-slate-50 border-r border-slate-200 p-8">
<nav className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium">1</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Vehicle</h3>
<p className="text-sm text-slate-500 mt-1">Select size &amp; type</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-medium">2</div>
<div>
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Package</h3>
<p className="text-sm text-slate-400 mt-1">Choose service level</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-medium">3</div>
<div>
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Schedule</h3>
<p className="text-sm text-slate-400 mt-1">Date &amp; Time</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-medium">4</div>
<div>
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">Payment</h3>
<p className="text-sm text-slate-400 mt-1">Secure Checkout</p>
</div>
</div>
</nav>
<div className="mt-12 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-yellow-600 mt-0.5" data-lucide="info"></i>
<p className="text-sm text-yellow-800 leading-relaxed">
                                    A $25 deposit is required to secure your slot. The remaining balance is due upon completion.
                                </p>
</div>
</div>
</div>

<div className="md:col-span-8 p-8 md:p-12 relative">

<div className="space-y-8">
<div>
<h3 className="text-2xl font-medium text-slate-900 mb-6">Select your vehicle type</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="vehicle" type="radio"/>
<div className="p-6 rounded-xl border-2 border-slate-100 bg-white hover:border-slate-300 peer-checked:border-yellow-500 peer-checked:bg-yellow-50/30 transition-all text-center">
<div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-600 peer-checked:bg-yellow-100 peer-checked:text-yellow-700">
<i className="w-6 h-6" data-lucide="car-front"></i>
</div>
<span className="block text-lg font-medium text-slate-900">Sedan / Coupe</span>
<span className="block text-sm text-slate-500 mt-1">2-4 Door</span>
</div>
<div className="absolute top-4 right-4 text-yellow-500 opacity-0 peer-checked:opacity-100 transition-opacity">
<i className="w-5 h-5 fill-yellow-500 text-white" data-lucide="check-circle-2"></i>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="vehicle" type="radio"/>
<div className="p-6 rounded-xl border-2 border-slate-100 bg-white hover:border-slate-300 peer-checked:border-yellow-500 peer-checked:bg-yellow-50/30 transition-all text-center">
<div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-600 peer-checked:bg-yellow-100 peer-checked:text-yellow-700">
<i className="w-6 h-6" data-lucide="car"></i>
</div>
<span className="block text-lg font-medium text-slate-900">SUV / Crossover</span>
<span className="block text-sm text-slate-500 mt-1">5 Seats</span>
</div>
<div className="absolute top-4 right-4 text-yellow-500 opacity-0 peer-checked:opacity-100 transition-opacity">
<i className="w-5 h-5 fill-yellow-500 text-white" data-lucide="check-circle-2"></i>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="vehicle" type="radio"/>
<div className="p-6 rounded-xl border-2 border-slate-100 bg-white hover:border-slate-300 peer-checked:border-yellow-500 peer-checked:bg-yellow-50/30 transition-all text-center">
<div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-600 peer-checked:bg-yellow-100 peer-checked:text-yellow-700">
<i className="w-6 h-6" data-lucide="truck"></i>
</div>
<span className="block text-lg font-medium text-slate-900">Truck / XL SUV</span>
<span className="block text-sm text-slate-500 mt-1">3rd Row / Bed</span>
</div>
<div className="absolute top-4 right-4 text-yellow-500 opacity-0 peer-checked:opacity-100 transition-opacity">
<i className="w-5 h-5 fill-yellow-500 text-white" data-lucide="check-circle-2"></i>
</div>
</label>
</div>
</div>
<div className="pt-8 flex justify-end border-t border-slate-100 mt-auto">
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
                                    Next Step
                                    <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Transparent Pricing</h2>
<p className="text-xl text-slate-500">Choose the level of detail your vehicle needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900">Basic Wash</h3>
<p className="text-slate-500 mt-2">Essential cleaning for maintenance.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">$60</span>
<span className="text-slate-500">/ sedan</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Foam cannon exterior wash
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Wheel &amp; tire cleaning
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Interior vacuum
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Windows inside &amp; out
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-slate-200 font-medium text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-colors" href="#book">
                        Select Basic
                    </a>
</div>

<div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-xl relative flex flex-col transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
<div className="mb-6">
<h3 className="text-xl font-semibold text-white">Advanced Detail</h3>
<p className="text-slate-400 mt-2">Deep cleaning inside and out.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-white">$140</span>
<span className="text-slate-400">/ sedan</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> <strong>Everything in Basic</strong>
</li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Hand wax application
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Leather conditioning
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Steam clean interior plastics
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Tire shine &amp; dressing
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg bg-yellow-600 font-medium text-white hover:bg-yellow-700 transition-colors shadow-lg shadow-yellow-900/20" href="#book">
                        Select Advanced
                    </a>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-semibold text-slate-900">Elite Correction</h3>
<p className="text-slate-500 mt-2">Restoration and protection.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-slate-900">$250+</span>
<span className="text-slate-500">/ sedan</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> <strong>Everything in Advanced</strong>
</li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Clay bar treatment
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Shampoo carpets &amp; mats
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> 1-Step paint polish
                        </li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-yellow-500" data-lucide="check"></i> Engine bay detail
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-slate-200 font-medium text-slate-600 hover:border-slate-900 hover:text-slate-900 transition-colors" href="#book">
                        Select Elite
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-2">Our Work</h2>
<p className="text-xl text-slate-500">Results that speak for themselves.</p>
</div>
<a className="group flex items-center gap-2 font-medium text-slate-900 hover:text-yellow-600 transition-colors" href="#">
                    View Instagram <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[500px] md:h-[600px]">

<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl bg-slate-100">
<img alt="Shiny Car Hood" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-sm font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">Exterior</span>
</div>
</div>

<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-100">
<img alt="Interior Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">Interior</span>
</div>
</div>

<div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-100">
<img alt="Wheel Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-medium bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">Wheels</span>
</div>
</div>

<div className="col-span-2 row-span-1 relative group overflow-hidden rounded-2xl bg-slate-100">
<img alt="Foam Cannon" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-sm font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">Foam Wash</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 flex items-center justify-center">
<i className="w-6 h-6 text-yellow-500 fill-yellow-500" data-lucide="sparkles"></i>
</div>
<span className="text-xl font-bold tracking-tight text-white uppercase">Sugar Land</span>
</div>
<p className="text-slate-400 leading-relaxed">
                        Professional mobile detailing services in Sugar Land, TX. We bring the showroom shine to your doorstep.
                    </p>
<div className="flex gap-4 pt-2">
<a className="p-2 bg-slate-800 rounded-full hover:bg-yellow-600 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="p-2 bg-slate-800 rounded-full hover:bg-yellow-600 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="p-2 bg-slate-800 rounded-full hover:bg-yellow-600 hover:text-white transition-all" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a className="hover:text-yellow-500 transition-colors" href="#services">Services &amp; Pricing</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#book">Book Online</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#gallery">Our Gallery</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-yellow-500 mt-0.5" data-lucide="map-pin"></i>
<span>Sugar Land, TX<br/>and surrounding areas</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-yellow-500" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:+12815550123">(281) 555-0123</a>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-yellow-500" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:hello@sugarlanddetail.com">hello@sugarlanddetail.com</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Payment Methods</h4>
<p className="text-sm text-slate-400 mb-4">We accept secure online payments and deposits.</p>
<div className="flex flex-wrap gap-2 text-slate-500">
<div className="bg-slate-800 px-3 py-2 rounded border border-slate-700"><span className="font-bold text-white text-xs">VISA</span></div>
<div className="bg-slate-800 px-3 py-2 rounded border border-slate-700"><span className="font-bold text-white text-xs">MC</span></div>
<div className="bg-slate-800 px-3 py-2 rounded border border-slate-700"><span className="font-bold text-white text-xs">AMEX</span></div>
<div className="bg-slate-800 px-3 py-2 rounded border border-slate-700"><span className="font-bold text-white text-xs"> Pay</span></div>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2023 Sugar Land Premium Detailing. All rights reserved.</p>
<p>Designed for Excellence.</p>
</div>
</div>
</footer>


    </>
  );
}
