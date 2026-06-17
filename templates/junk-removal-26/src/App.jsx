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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-1 text-2xl font-semibold tracking-tighter text-black" href="#">
                CHORE<span className="text-pink-600">CHICKS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-black transition-colors" href="#services">Services</a>
<a className="hover:text-black transition-colors" href="#about">About Us</a>
<a className="hover:text-black transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors" href="tel:8457453556">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Call Now
                </a>
<a className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors" href="#contact">
                    Get a Quote
                </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 opacity-30">
<div className="absolute top-20 right-20 w-96 h-96 bg-pink-100 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-100 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Proudly Woman-Owned &amp; Operated
            </div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-black max-w-4xl mb-6 leading-[1.1]">
                Fast, Reliable Junk Removal by Women Who Get It Done.
            </h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 font-normal">
                Stress-free, affordable, and professional cleanouts. Offering same-day or next-day service to reclaim your space without the hassle.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-pink-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-pink-200" href="#contact">
                    Get a Free Quote
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white border border-gray-200 text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" href="tel:8457453556">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Call Us Now
                </a>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20">
<div className="grid grid-cols-12 gap-4 h-64 md:h-96">
<div className="col-span-12 md:col-span-8 bg-gray-100 rounded-3xl overflow-hidden relative group">
<img alt="Clean empty room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white text-sm font-medium flex items-center gap-2">
<iconify-icon className="text-pink-400" icon="solar:check-circle-linear"></iconify-icon> Post-Cleanout Perfection
                    </div>
</div>
<div className="col-span-12 md:col-span-4 bg-gray-100 rounded-3xl overflow-hidden relative group hidden md:block">
<img alt="Boxes and moving" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517677129300-07b130802f46?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">Everything We Haul Away</h2>
<p className="text-base text-gray-500">From single items to entire estate cleanouts, our comprehensive services are designed to make your life easier and your spaces clearer.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:trash-bin-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-black mb-2">Junk Removal</h3>
<p className="text-sm text-gray-500">General clutter, household trash, and miscellaneous items cleared out swiftly.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-black mb-2">Garage Cleanouts</h3>
<p className="text-sm text-gray-500">Reclaim your parking space. We sort, haul, and sweep your garage clean.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-black mb-2">Yard Waste</h3>
<p className="text-sm text-gray-500">Branches, clippings, old fencing, and outdoor debris removed promptly.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-black mb-2">Moving Cleanouts</h3>
<p className="text-sm text-gray-500">Leave the leftover packing materials and unwanted items to us when you relocate.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:sofa-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-black mb-2">Furniture Removal</h3>
<p className="text-sm text-gray-500">Heavy lifting of old couches, mattresses, tables, and bulky furniture.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:washing-machine-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-black mb-2">Appliance Removal</h3>
<p className="text-sm text-gray-500">Safe disposal and recycling of old refrigerators, washers, and dryers.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-sm transition-all group md:col-span-2 xl:col-span-2 flex flex-col justify-center">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:hammer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-black mb-2">Light Demolition</h3>
<p className="text-sm text-gray-500 max-w-md">Tearing down old sheds, dismantling decks, or removing built-in structures. We handle the teardown and the haul-away.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-pink-50 rounded-3xl transform -rotate-3 scale-105 -z-10"></div>
<div className="bg-black text-white p-10 md:p-14 rounded-3xl relative overflow-hidden">

<iconify-icon className="absolute -bottom-10 -right-10 text-[200px] text-white/5" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight mb-8">Meet the Owners</h3>
<div className="space-y-6">
<div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
<div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-lg font-semibold">J</div>
<div>
<p className="font-medium text-base">Julia</p>
<p className="text-sm text-gray-400">Co-Founder</p>
</div>
</div>
<div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
<div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-lg font-semibold">V</div>
<div>
<p className="font-medium text-base">Veronica</p>
<p className="text-sm text-gray-400">Co-Founder</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 text-pink-600 text-sm font-medium mb-4">
<iconify-icon icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Our Story
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black mb-6 leading-tight">
                        Changing the face of junk removal.
                    </h2>
<p className="text-base md:text-lg text-gray-500 mb-6 leading-relaxed">
                        Chore Chicks LLC was founded by Julia and Veronica with a simple mission: to provide a professional, reliable, and approachable alternative in the junk removal industry. As a woman-owned business, we understand that inviting someone into your home or business requires trust.
                    </p>
<p className="text-base md:text-lg text-gray-500 mb-8 leading-relaxed">
                        We pride ourselves on our meticulous attention to detail, transparent pricing, and a level of care that ensures your property is treated with respect. When you hire Chore Chicks, you're not just getting a cleanout; you're getting peace of mind from a team that truly gets it done.
                    </p>
<div className="flex flex-wrap gap-4">
<span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-100">
<iconify-icon className="text-pink-600" icon="solar:check-read-linear"></iconify-icon> Fully Insured
                        </span>
<span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-100">
<iconify-icon className="text-pink-600" icon="solar:clock-circle-linear"></iconify-icon> On-Time Arrival
                        </span>
<span className="inline-flex items-center gap-1.5 bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium border border-gray-100">
<iconify-icon className="text-pink-600" icon="solar:wallet-money-linear"></iconify-icon> Fair Pricing
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-pink-50/30" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black mb-4">Loved by our clients</h2>
<p className="text-base text-gray-500">Don't just take our word for it. Here is what our community has to say about our service.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-1 text-pink-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 text-base mb-8 flex-grow">"Super fast and professional. They cleared out my garage in no time and were incredibly friendly."</p>
<div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-50">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium text-sm">M</div>
<div>
<p className="text-sm font-semibold text-black">Michael T.</p>
<p className="text-xs text-gray-400">Homeowner</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-1 text-pink-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 text-base mb-8 flex-grow">"Loved supporting a woman-owned business. They showed up on time and handled everything perfectly."</p>
<div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-50">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium text-sm">S</div>
<div>
<p className="text-sm font-semibold text-black">Sarah W.</p>
<p className="text-xs text-gray-400">Local Business Owner</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-1 text-pink-500 mb-6">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 text-base mb-8 flex-grow">"Best junk removal service I've used. Fair pricing and zero hassle."</p>
<div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-50">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium text-sm">D</div>
<div>
<p className="text-sm font-semibold text-black">David R.</p>
<p className="text-xs text-gray-400">Property Manager</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black mb-6">Let's clear your space.</h2>
<p className="text-base text-gray-500 mb-10 max-w-md">Call us directly to schedule your pickup, or fill out the form for a fast, free estimate. We're ready when you are.</p>
<div className="space-y-4">
<a className="flex items-center justify-between p-6 rounded-2xl border border-gray-200 hover:border-pink-500 hover:shadow-md transition-all group bg-gray-50/50" href="tel:8457453556">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 text-black group-hover:text-pink-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500 font-medium mb-1">Call Julia</p>
<p className="text-xl font-semibold tracking-tight text-black">845-745-3556</p>
</div>
</div>
<iconify-icon className="text-gray-300 group-hover:text-pink-600 transition-colors text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-6 rounded-2xl border border-gray-200 hover:border-pink-500 hover:shadow-md transition-all group bg-gray-50/50" href="tel:8457638502">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-100 text-black group-hover:text-pink-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500 font-medium mb-1">Call Veronica</p>
<p className="text-xl font-semibold tracking-tight text-black">845-763-8502</p>
</div>
</div>
<iconify-icon className="text-gray-300 group-hover:text-pink-600 transition-colors text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/40">
<h3 className="text-xl font-semibold tracking-tight text-black mb-6">Request a Free Quote</h3>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-gray-400" id="firstName" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-gray-400" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone Number</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-gray-400" id="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all appearance-none text-gray-700" id="service">
<option disabled="" selected="" value="">Select a service...</option>
<option>General Junk Removal</option>
<option>Garage Cleanout</option>
<option>Moving Cleanout</option>
<option>Furniture / Appliances</option>
<option>Yard Waste</option>
<option>Light Demolition</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="description">Description of items</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all placeholder:text-gray-400 resize-none" id="description" placeholder="Briefly describe what needs to be removed..." rows="3"></textarea>
</div>
<button className="w-full bg-black text-white rounded-xl px-4 py-4 text-sm font-medium hover:bg-pink-600 transition-colors mt-2" type="submit">
                            Send Request
                        </button>
<p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> Your information is kept strictly confidential.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-xl font-semibold tracking-tighter text-black">
                    CHORE<span className="text-pink-600">CHICKS</span>
</span>
<p className="text-sm text-gray-500">Fast, Reliable Junk Removal.</p>
</div>
<div className="flex items-center gap-6 text-sm text-gray-500">
<a className="hover:text-black transition-colors" href="#services">Services</a>
<a className="hover:text-black transition-colors" href="#about">About</a>
<a className="hover:text-black transition-colors" href="#contact">Contact</a>
</div>
<p className="text-sm text-gray-400">
                © 2026 Chore Chicks LLC. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
