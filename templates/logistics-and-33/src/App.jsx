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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-red-600" href="#">RBM</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors shadow-sm" href="#quote">
                Get Quote
            </a>
</div>
</nav>

<section className="pt-32 pb-20 px-6 relative isolate flex items-center min-h-[85vh]">

<div className="absolute inset-0 -z-10 overflow-hidden">
<img alt="Moving Truck" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50"></div>
</div>
<div className="max-w-4xl mx-auto text-center w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/90 backdrop-blur text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                Licensed &amp; Insured • 5-Star Rated • Same-Day Availability
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-balance mb-6 text-slate-900">
                Redondo Beach Movers You Can Rely On
            </h1>
<p className="text-lg md:text-xl text-slate-600 tracking-tight max-w-2xl mx-auto text-balance mb-10">
                Fast, careful, and professional moving services for homes, apartments, and businesses. We make your move simple, smooth, and stress-free.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-red-600 text-white px-6 py-3 rounded-xl text-base font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-sm" href="#quote">
                    Get Free Quote
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl text-base font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm" href="tel:#">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                    Call Now
                </a>
</div>
</div>
</section>

<section className="px-6 pb-20 relative z-10">
<div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Get Your Quote in 60 Seconds</h2>
<p className="text-sm text-slate-500 mt-1">No obligation. Fast response.</p>
</div>
<form className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-red-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors placeholder:text-slate-400" placeholder="Moving From (Zip)" type="text"/>
</div>
<div>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-red-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors placeholder:text-slate-400" placeholder="Moving To (Zip)" type="text"/>
</div>
<button className="w-full bg-red-600 text-white rounded-xl px-4 py-3 text-sm font-semibold hover:bg-red-700 transition-colors shadow-sm" type="button">
                    Continue
                </button>
</form>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-slate-400" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">1,000+ Successful Moves</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-slate-400" icon="solar:star-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">5-Star Customer Satisfaction</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-slate-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Licensed &amp; Insured</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-slate-400" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Serving Redondo Beach</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Moving Made Simple</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-px bg-slate-200 -z-10 -translate-y-1/2"></div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 text-center relative shadow-sm">
<div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mx-auto mb-6 ring-4 ring-white">1</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Get Your Quote</h3>
<p className="text-sm text-slate-500">Tell us about your move and receive a fast, transparent estimate.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 text-center relative shadow-sm">
<div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mx-auto mb-6 ring-4 ring-white">2</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Schedule Your Move</h3>
<p className="text-sm text-slate-500">Choose a time that works best for you and your schedule.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 text-center relative shadow-sm">
<div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mx-auto mb-6 ring-4 ring-white">3</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">We Handle Everything</h3>
<p className="text-sm text-slate-500">Our team shows up on time and takes care of the entire move.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Moving Services</h2>
<p className="text-base text-slate-500">Comprehensive solutions tailored to your specific moving needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:route-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Local Moving</h3>
<p className="text-sm text-slate-500 mb-4">Fast and efficient moves anywhere in Redondo Beach and surrounding areas.</p>
<a className="text-sm font-semibold text-red-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#quote">
                        Get Local Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:home-2-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Residential Moving</h3>
<p className="text-sm text-slate-500 mb-4">Full-service home moves handled with care from start to finish.</p>
<a className="text-sm font-semibold text-red-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#quote">
                        Schedule Home Move <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Commercial Moving</h3>
<p className="text-sm text-slate-500 mb-4">Office relocations with minimal downtime and maximum efficiency.</p>
<a className="text-sm font-semibold text-red-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#quote">
                        Commercial Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:city-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Apartment Moving</h3>
<p className="text-sm text-slate-500 mb-4">Tight spaces, stairs, elevators — we handle it all with ease.</p>
<a className="text-sm font-semibold text-red-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#quote">
                        Apartment Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:box-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Packing Services</h3>
<p className="text-sm text-slate-500 mb-4">Professional packing to protect every item during transit.</p>
<a className="text-sm font-semibold text-red-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#quote">
                        Add Packing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
<iconify-icon className="text-2xl text-slate-900 mb-4" icon="solar:archive-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-2">Storage Moves</h3>
<p className="text-sm text-slate-500 mb-4">Seamless moves in and out of storage units of all sizes.</p>
<a className="text-sm font-semibold text-red-600 inline-flex items-center gap-1 group-hover:gap-2 transition-all" href="#quote">
                        Storage Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-start md:items-center justify-between">
<div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-2xl text-slate-900" icon="solar:hand-shake-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight">Labor Only Movers</h3>
</div>
<p className="text-sm text-slate-500">Need help loading or unloading a truck? Our team provides reliable moving labor without the truck.</p>
</div>
<a className="mt-4 md:mt-0 whitespace-nowrap bg-white border border-slate-200 text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:text-red-600 hover:bg-slate-50 transition-colors" href="#quote">
                        Book Labor Today
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<div className="sticky top-24">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Specialized Services</h2>
<p className="text-sm text-slate-500 mb-8">Detailed information about how we handle specific types of moves.</p>
</div>
</div>
<div className="lg:col-span-8 flex flex-col gap-12">

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Local Movers in Redondo Beach</h3>
<p className="text-sm text-slate-600 mb-6">Moving locally doesn’t have to be stressful. Our experienced team handles every detail so your move is fast, efficient, and worry-free. We know Redondo Beach inside and out, allowing us to move you quickly and efficiently without delays.</p>
<div className="bg-slate-50 rounded-xl p-4 mb-6">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-3">What's Included</h4>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Loading and unloading
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Safe transportation
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Furniture protection
                            </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-red-600" icon="solar:check-circle-linear"></iconify-icon> Optional packing services
                            </li>
</ul>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Residential Moving Services</h3>
<p className="text-sm text-slate-600 mb-4">From small homes to large properties, we handle every residential move with care and precision.</p>
<p className="text-sm text-slate-600">We protect your furniture, organize the process, and ensure everything arrives safely to your new home.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<h3 className="text-2xl font-semibold tracking-tight mb-3">Office &amp; Commercial Movers</h3>
<p className="text-sm text-slate-600 mb-4">We help businesses relocate quickly with minimal disruption to your daily operations.</p>
<p className="text-sm text-slate-600">Efficient planning, organized packing, and fast execution keep your operations running smoothly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">A Better Moving Experience</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-red-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-600">Experienced, professional movers</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-red-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-600">No hidden fees or surprises</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-red-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-600">Careful handling of all belongings</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-red-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-600">Fast, efficient service</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-red-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-600">Flexible scheduling</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-red-600 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-slate-600">Fully licensed and insured</span>
</li>
</ul>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Serving Redondo Beach &amp; Nearby Cities</h2>
<p className="text-sm text-slate-500 mb-6">We provide local moving services across the South Bay.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">Redondo Beach</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">Torrance</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">Manhattan Beach</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">Hermosa Beach</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">Lawndale</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">Hawthorne</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Your Trusted Local Moving Company</h2>
<div className="space-y-4 text-slate-400 text-base">
<p>We are a professional moving company dedicated to making every move simple and stress-free. Our team is trained, experienced, and committed to handling your belongings with care.</p>
<p>We pride ourselves on reliability, transparency, and customer satisfaction.</p>
<p className="text-white font-medium">Our mission is simple: deliver a smooth moving experience from start to finish.</p>
</div>
</div>

<div className="grid grid-cols-1 gap-4">
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
<p className="text-sm text-slate-300 italic mb-4">“Best moving experience I’ve ever had. Fast, careful, and professional.”</p>
<p className="text-xs font-semibold tracking-tight">– Sarah M., Redondo Beach</p>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
<p className="text-sm text-slate-300 italic mb-4">“They handled everything perfectly. No stress at all.”</p>
<p className="text-xs font-semibold tracking-tight">– Jason R., Torrance</p>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
<p className="text-sm text-slate-300 italic mb-4">“Showed up on time and finished quicker than expected.”</p>
<p className="text-xs font-semibold tracking-tight">– Michael L., Manhattan Beach</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="divide-y divide-slate-200">
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between text-base font-semibold tracking-tight text-slate-900 select-none">
                        How much does moving cost?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-slate-500 leading-relaxed">Pricing depends on distance, size of move, and services needed. Contact us for a personalized quote.</div>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between text-base font-semibold tracking-tight text-slate-900 select-none">
                        Are you licensed and insured?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-slate-500 leading-relaxed">Yes, we are fully licensed and insured for your protection.</div>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between text-base font-semibold tracking-tight text-slate-900 select-none">
                        Do you offer packing services?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-slate-500 leading-relaxed">Yes, we provide full and partial packing options.</div>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between text-base font-semibold tracking-tight text-slate-900 select-none">
                        How far in advance should I book?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-slate-500 leading-relaxed">We recommend booking as early as possible, especially during busy seasons.</div>
</details>
<details className="group py-5">
<summary className="flex cursor-pointer items-center justify-between text-base font-semibold tracking-tight text-slate-900 select-none">
                        Do you move apartments and offices?
                        <iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-slate-500 leading-relaxed">Yes, we handle both residential and commercial moves.</div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200" id="quote">
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm order-2 md:order-1">
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Get Your Free Moving Quote</h2>
<p className="text-sm text-slate-500 mt-2">Tell us about your move and we’ll get back to you quickly.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-red-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-red-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-red-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors" type="email"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Move Date</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus:border-red-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors text-slate-600" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Move Size</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 pr-10 text-sm focus:border-red-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors text-slate-600 cursor-pointer">
<option>Studio / 1 Bedroom</option>
<option>2-3 Bedrooms</option>
<option>4+ Bedrooms</option>
<option>Office / Commercial</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center gap-2 pt-2">
<input className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-red-600 bg-slate-50 border cursor-pointer checked:bg-red-600" id="terms" type="checkbox"/>
<label className="text-xs text-slate-500 cursor-pointer select-none" htmlFor="terms">I agree to receive communications regarding my quote.</label>
</div>
<button className="w-full bg-red-600 text-white rounded-xl px-4 py-3 text-sm font-semibold hover:bg-red-700 transition-colors mt-4 shadow-sm" type="submit">
                        Request Quote
                    </button>
</form>
</div>

<div className="order-1 md:order-2 text-center md:text-left">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-balance">Ready to Make Your Move Stress-Free?</h2>
<p className="text-base text-slate-500 mb-8 text-balance">Get reliable movers you can trust in Redondo Beach and the South Bay.</p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<a className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl text-base font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm" href="tel:#">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                        Call Now
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-8 px-6 text-center">
<p className="text-xs text-slate-400">© 2024 Redondo Beach Movers. All rights reserved.</p>
</footer>

    </>
  );
}
