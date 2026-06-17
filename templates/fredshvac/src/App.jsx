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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:wind-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-slate-900 text-lg">FACH</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="hover:text-blue-600 transition-colors" href="#about">About Us</a>
<a className="hover:text-blue-600 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-blue-600 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<div className="hidden sm:flex flex-col items-end">
<span className="text-xs text-slate-500 font-medium uppercase tracking-wider">24/7 Emergency</span>
<a className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors" href="tel:+19562379510">(956) 237-9510</a>
</div>
<a className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg shadow-sm transition-all flex items-center gap-2" href="#contact">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">Book Service</span>
<span className="sm:hidden">Call Now</span>
</a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative bg-white overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/95"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2 flex flex-col items-start text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                        Serving Laredo &amp; Webb County
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                        AC broke in the Texas heat? <br/>
<span className="text-blue-600">We've got you covered.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-xl">
                        Fast, reliable, and affordable heating and cooling services for Laredo homeowners. Upfront pricing, licensed professionals, and 24/7 emergency response.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-3 px-6 rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-2" href="#contact">
                            Schedule Service
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 text-base font-medium py-3 px-6 rounded-lg shadow-sm transition-all text-center flex items-center justify-center gap-2 group" href="tel:+19562379510">
<iconify-icon className="text-red-500 group-hover:scale-110 transition-transform" icon="solar:danger-circle-linear" width="20"></iconify-icon>
                            Emergency Call
                        </a>
</div>
</div>
<div className="lg:w-1/2 relative z-10 w-full">
<div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-white aspect-[4/3]">
<img alt="HVAC Technician working on AC unit" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
<div className="bg-green-100 text-green-700 p-2 rounded-lg">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Licensed &amp; Insured</p>
<p className="text-xs text-slate-500">100% Satisfaction Guarantee</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-8 border-y border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-800">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:clock-circle-linear" width="28"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Fast Response</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:wad-of-money-linear" width="28"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Upfront Pricing</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:diploma-linear" width="28"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Certified Techs</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear" width="28"></iconify-icon>
<span className="text-sm font-medium text-slate-300">Local to Laredo</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Complete HVAC Services in Laredo, TX</h2>
<p className="text-slate-600 text-base">From scorching summer days to unexpected winter chills, we keep your home perfectly comfortable year-round.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:snowflake-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AC Repair</h3>
<p className="text-sm text-slate-600 mb-4">Fast diagnostics and lasting repairs for all makes and models. Don't sweat through a Laredo summer.</p>
<a className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:text-blue-800" href="#contact">
                            Book Repair <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:settings-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AC Installation</h3>
<p className="text-sm text-slate-600 mb-4">Energy-efficient system replacements designed to lower your cooling bills and improve comfort.</p>
<a className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:text-blue-800" href="#contact">
                            Get a Quote <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:fire-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Heating Services</h3>
<p className="text-sm text-slate-600 mb-4">Furnace repair, heat pump maintenance, and winter prep to handle sudden Texas cold snaps.</p>
<a className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:text-blue-800" href="#contact">
                            Learn More <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="28" icon="solar:checklist-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Maintenance Plans</h3>
<p className="text-sm text-slate-600 mb-4">Prevent costly breakdowns with our seasonal tune-ups. Extend the lifespan of your HVAC equipment.</p>
<a className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 hover:text-blue-800" href="#contact">
                            View Plans <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-4">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
                                24/7 Availability
                            </div>
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Emergency AC Repair Laredo</h3>
<p className="text-sm text-slate-300 max-w-md">System failure in the middle of a heatwave? Call us immediately. We dispatch technicians day or night.</p>
</div>
<a className="shrink-0 bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2 w-full sm:w-auto justify-center" href="tel:+19562379510">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            Call For Emergency
                        </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Local, honest, and built on trust.</h2>
<p className="text-slate-600 text-base mb-6">
                            As a family-owned business operating right here in Laredo, we understand the unique climate challenges our community faces. When you hire Fred's Air Conditioning and Heating, you're not just getting a contractor; you're getting a neighbor dedicated to keeping your family comfortable.
                        </p>
<p className="text-slate-600 text-base mb-8">
                            We believe in transparent pricing—no hidden fees, no surprises. Our technicians are fully licensed, continuously trained, and treat your home with the utmost respect.
                        </p>
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col">
<span className="text-3xl font-semibold text-blue-600 tracking-tight mb-1">15+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Years in Laredo</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-semibold text-blue-600 tracking-tight mb-1">5k+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Homes Serviced</span>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full relative">
<div className="absolute inset-0 bg-blue-50 transform translate-x-4 translate-y-4 rounded-2xl -z-10"></div>
<img alt="Friendly HVAC Technician" className="rounded-2xl shadow-sm border border-slate-100 w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Don't just take our word for it</h2>
<p className="text-slate-600 text-base">See what your neighbors in Laredo are saying about our HVAC service.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-700 text-sm mb-6 flex-grow">"Our AC died in July. They came out within hours, diagnosed the capacitor issue, and fixed it on the spot. Extremely professional and the price was exactly what they quoted upfront."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-medium">MR</div>
<div>
<p className="text-sm font-semibold text-slate-900">Maria R.</p>
<p className="text-xs text-slate-500">North Laredo</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-700 text-sm mb-6 flex-grow">"Replaced our entire 15-year-old system. The crew was clean, respectful of our home, and walked us through the new thermostat. Cooling bills are already down!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-medium">JG</div>
<div>
<p className="text-sm font-semibold text-slate-900">Javier G.</p>
<p className="text-xs text-slate-500">Del Mar</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-700 text-sm mb-6 flex-grow">"I use their maintenance plan for my small business. They catch issues before they become major problems. Reliable folks who know what they're doing."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-medium">SL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah L.</p>
<p className="text-xs text-slate-500">Downtown</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Common Questions</h2>
</div>
<div className="space-y-4">

<div className="border border-slate-200 rounded-xl p-5 hover:border-blue-200 transition-colors bg-slate-50/50">
<h3 className="text-base font-medium text-slate-900 mb-2 flex justify-between items-center">
                            How quickly can you come out for AC repair in Laredo?
                        </h3>
<p className="text-sm text-slate-600">We prioritize emergency no-cooling calls. In most cases, we offer same-day service, especially during peak summer months. For critical emergencies, we have technicians on call 24/7.</p>
</div>

<div className="border border-slate-200 rounded-xl p-5 hover:border-blue-200 transition-colors bg-slate-50/50">
<h3 className="text-base font-medium text-slate-900 mb-2 flex justify-between items-center">
                            How do I know if I need a repair or a full replacement?
                        </h3>
<p className="text-sm text-slate-600">If your system is over 10-15 years old, requires frequent repairs, or uses R-22 Freon, replacement might be more cost-effective. We provide honest assessments and will never push a replacement if a simple repair makes sense.</p>
</div>

<div className="border border-slate-200 rounded-xl p-5 hover:border-blue-200 transition-colors bg-slate-50/50">
<h3 className="text-base font-medium text-slate-900 mb-2 flex justify-between items-center">
                            Do you offer financing for new AC installations?
                        </h3>
<p className="text-sm text-slate-600">Yes! We understand a new HVAC system is an investment. We offer flexible financing options with approved credit to help manage the cost of staying comfortable.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-slate-300 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="bg-white rounded-2xl p-8 shadow-lg text-slate-800 relative transform lg:-translate-y-32">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Request Service</h3>
<p className="text-sm text-slate-500 mb-6">Fill out the form below and our team will get back to you shortly.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="(956) 237-9510" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Service Needed</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow">
<option>AC Repair</option>
<option>AC Installation</option>
<option>Heating Service</option>
<option>Maintenance</option>
<option>Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Message (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow" placeholder="Describe the issue..." rows="3"></textarea>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg shadow-sm transition-colors text-sm mt-2" type="button">
                                Send Request
                            </button>
<p className="text-xs text-slate-400 text-center mt-4">For immediate emergencies, please call <a className="text-blue-600 font-medium" href="tel:+19562379510">(956) 237-9510</a>.</p>
</form>
</div>

<div className="flex flex-col justify-center lg:pt-0 pt-8">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Serving Laredo, Texas</h2>
<p className="text-sm text-slate-400 mb-8 max-w-md">We provide top-tier air conditioning and heating services across Laredo and surrounding communities in Webb County.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Location</h4>
<p className="text-sm text-slate-400">5208 Brewster Dr<br/>Laredo, TX 78043</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Contact</h4>
<p className="text-sm text-slate-400"><a className="hover:text-white transition-colors" href="tel:+19562379510">(956) 237-9510</a></p>
<p className="text-sm text-slate-400">service@fredsacandheating.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Hours</h4>
<p className="text-sm text-slate-400">Mon-Fri: 8am - 6pm</p>
<p className="text-sm text-red-400 font-medium mt-1">24/7 Emergency Service Available</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
<div className="flex items-center gap-2 mb-4 opacity-50 grayscale">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white">
<iconify-icon height="14" icon="solar:wind-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-white text-base">FACH</span>
</div>
<p className="text-xs text-slate-500 max-w-lg mx-auto mb-4">
                Air Conditioning Service Laredo Texas | HVAC Repair | Furnace Installation. Licensed &amp; Insured. Texas License #TACLB12345E.
            </p>
<p className="text-xs text-slate-600">
                © 2024 Fred's Air Conditioning and Heating. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
