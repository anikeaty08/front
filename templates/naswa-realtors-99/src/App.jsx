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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-semibold whitespace-nowrap tracking-tight text-slate-900">NASWA REALTORS</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
<a className="hidden md:flex items-center gap-2 text-slate-900 bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-100 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all" href="tel:09910972297">
<span className="iconify" data-height="16" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="16"></span>
                    099109 72297
                </a>
<a className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2 text-center transition-all" href="#contact">Enquire Now</a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<span className="iconify" data-height="24" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
<li>
<a aria-current="page" className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-600 md:p-0 transition-colors" href="#home">Home</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-600 md:p-0 transition-colors" href="#services">Services</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-600 md:p-0 transition-colors" href="#properties">Properties</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-600 md:p-0 transition-colors" href="#reviews">Reviews</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<img alt="Modern House Faridabad" className="w-full h-full object-cover object-center opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10 lg:bg-gradient-to-r lg:from-white lg:via-white/60 lg:to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<span className="iconify" data-height="14" data-icon="lucide:check-circle" data-strokeWidth="1.5" data-width="14"></span>
                    Rated 4.7/5 by 114+ Happy Clients
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
                    Find Your Dream Space in <span className="text-slate-500">Greater Faridabad.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                    All Properties Available in Greater Faridabad (BPTP). We specialize in affordable flats, luxury builder floors, and prime plots. Trusted, transparent, and budget-friendly.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white rounded-lg bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 transition-all" href="#properties">
                        Browse Properties
                        <span className="iconify ml-2" data-height="18" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-slate-900 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 transition-all" href="https://wa.me/919910972297">
<span className="iconify mr-2" data-height="18" data-icon="lucide:message-circle" data-strokeWidth="1.5" data-width="18"></span>
                        Chat on WhatsApp
                    </a>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">114+</span>
<span className="text-sm text-slate-500">Google Reviews</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">4.7</span>
<span className="text-sm text-slate-500">Star Rating</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">10+</span>
<span className="text-sm text-slate-500">Years Experience</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">100%</span>
<span className="text-sm text-slate-500">Transparency</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Experienced &amp; Trustworthy Real Estate Consultants.</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Located in Omaxe World Street, Sector 79, Naswa Realtors is your premier partner for all real estate needs in Faridabad. Whether you are looking for a builder floor, a residential plot, or an affordable flat, we guide you through every step with transparency.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-slate-700">
<span className="bg-green-100 text-green-700 p-1 rounded-full mr-3">
<span className="iconify" data-height="14" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</span>
                            Specialist in Greater Faridabad (BPTP)
                        </li>
<li className="flex items-center text-slate-700">
<span className="bg-green-100 text-green-700 p-1 rounded-full mr-3">
<span className="iconify" data-height="14" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</span>
                            Budget friendly property options
                        </li>
<li className="flex items-center text-slate-700">
<span className="bg-green-100 text-green-700 p-1 rounded-full mr-3">
<span className="iconify" data-height="14" data-icon="lucide:check" data-strokeWidth="2" data-width="14"></span>
</span>
                            Complete documentation assistance
                        </li>
</ul>
<a className="text-slate-900 font-medium hover:text-slate-600 inline-flex items-center gap-1 transition-colors" href="#contact">
                        Book Free Consultation <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-6">

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4">
<span className="iconify text-slate-900" data-height="20" data-icon="lucide:home" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-2">Builder Floors</h3>
<p className="text-sm text-slate-500">Premium independent floors with modern amenities in prime sectors.</p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4">
<span className="iconify text-slate-900" data-height="20" data-icon="lucide:map" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-2">Plots</h3>
<p className="text-sm text-slate-500">Residential and commercial plots available for investment or building.</p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4">
<span className="iconify text-slate-900" data-height="20" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-2">Flats &amp; Apartments</h3>
<p className="text-sm text-slate-500">Affordable and luxury high-rise apartments in secure societies.</p>
</div>

<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200 mb-4">
<span className="iconify text-slate-900" data-height="20" data-icon="lucide:key" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-2">Rental Services</h3>
<p className="text-sm text-slate-500">Find the perfect rental home or tenant easily with our network.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="properties">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Featured Listings</h2>
<p className="text-slate-500">Explore the best properties available in Faridabad today.</p>
</div>
<a className="hidden md:flex text-slate-900 font-medium hover:text-slate-600 items-center gap-1 transition-colors mt-4 md:mt-0" href="#contact">
                    View All <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Property" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">For Sale</div>
<div className="absolute bottom-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium">₹ 85 Lakh</div>
</div>
<div className="p-6">
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Sector 79, Faridabad</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4">3BHK Luxury Builder Floor</h3>
<div className="flex items-center gap-4 text-slate-600 text-sm border-t border-slate-100 pt-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:bed" data-width="16"></span> 3 Beds</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:bath" data-width="16"></span> 3 Baths</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:square" data-width="16"></span> 180 Sq.Yd</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Property" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">For Sale</div>
<div className="absolute bottom-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium">₹ 1.25 Cr</div>
</div>
<div className="p-6">
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Omaxe World Street</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4">Premium Commercial Shop</h3>
<div className="flex items-center gap-4 text-slate-600 text-sm border-t border-slate-100 pt-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span> Ground Floor</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:square" data-width="16"></span> 450 Sq.Ft</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Property" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900">For Rent</div>
<div className="absolute bottom-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium">₹ 22,000/mo</div>
</div>
<div className="p-6">
<div className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">Greater Faridabad</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4">2BHK Apartment BPTP</h3>
<div className="flex items-center gap-4 text-slate-600 text-sm border-t border-slate-100 pt-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:bed" data-width="16"></span> 2 Beds</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:bath" data-width="16"></span> 2 Baths</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:shield-check" data-width="16"></span> Gated</span>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-block text-slate-900 font-medium hover:text-slate-600 transition-colors border border-slate-200 px-4 py-2 rounded-lg bg-white" href="#contact">
                    View All Properties
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">What our clients say</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex gap-1 text-yellow-500 mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"Excellent service by Naswa Realtors. They helped me find a great builder floor in Sector 79 within my budget. Highly transparent dealing."</p>
<div className="font-medium text-slate-900 text-sm">– Rahul Sharma</div>
</div>

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex gap-1 text-yellow-500 mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"Very professional property dealers in Faridabad. I sold my plot through them and got a very good price. Highly recommended."</p>
<div className="font-medium text-slate-900 text-sm">– Amit Verma</div>
</div>

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex gap-1 text-yellow-500 mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 text-sm mb-4 leading-relaxed">"Great experience. They showed me multiple options in Omaxe World Street and guided me well with the paperwork."</p>
<div className="font-medium text-slate-900 text-sm">– Priya Singh</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Get Best Deals in Faridabad</h2>
<p className="text-slate-500 mb-8">Contact us today to buy, sell or rent property. We are open till 7 PM.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
<span className="iconify text-slate-900" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Visit Us</h4>
<p className="text-slate-500 text-sm mt-1">OMAXE WORLD STREET, Sector 79,<br/>Faridabad, Haryana 121007</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
<span className="iconify text-slate-900" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Call Us</h4>
<a className="text-slate-500 text-sm mt-1 hover:text-slate-900" href="tel:09910972297">+91 99109 72297</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
<span className="iconify text-slate-900" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-slate-900">Working Hours</h4>
<p className="text-slate-500 text-sm mt-1">Open • Closes 7 PM</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl">
<form action="#" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block mb-2 text-xs font-medium text-slate-900" htmlFor="name">Name</label>
<input className="bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5 outline-none transition-all" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-xs font-medium text-slate-900" htmlFor="phone">Phone</label>
<input className="bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5 outline-none transition-all" id="phone" placeholder="98765 43210" required="" type="tel"/>
</div>
</div>
<div>
<label className="block mb-2 text-xs font-medium text-slate-900" htmlFor="type">Interest</label>
<div className="relative">
<select className="bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5 outline-none appearance-none transition-all" id="type">
<option>Buy Property</option>
<option>Sell Property</option>
<option>Rent Property</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div>
<label className="block mb-2 text-xs font-medium text-slate-900" htmlFor="message">Message</label>
<textarea className="bg-white border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-900 focus:border-slate-900 block w-full p-2.5 outline-none transition-all" id="message" placeholder="I am interested in..." rows="4"></textarea>
</div>
<button className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all" type="submit">Send Enquiry</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-12 pb-24 md:pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-xl font-semibold tracking-tight text-slate-900">NASWA REALTORS</span>
<p className="text-xs text-slate-500 mt-2">© 2024 Naswa Realtors. All rights reserved.</p>
</div>
<div className="flex space-x-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
</div>
</div>
</footer>

<div className="fixed bottom-0 w-full bg-white border-t border-slate-100 md:hidden z-40 p-4 pb-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<div className="grid grid-cols-2 gap-4">
<a className="flex items-center justify-center gap-2 text-slate-900 bg-slate-100 font-medium rounded-lg text-sm px-4 py-3 border border-slate-200" href="tel:09910972297">
<span className="iconify" data-icon="lucide:phone" data-width="18"></span>
                Call Now
            </a>
<a className="flex items-center justify-center gap-2 text-white bg-[#25D366] font-medium rounded-lg text-sm px-4 py-3 shadow-sm" href="https://wa.me/919910972297">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
                WhatsApp
            </a>
</div>
</div>

    </>
  );
}
