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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="lucide:smile" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-zinc-900 group-hover:opacity-80 transition-opacity">ALL SMILES</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#advantages">Why Us</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-zinc-900" href="tel:+919769545049">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
                    +91 97695 45049
                </a>
<a className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2.5 rounded-lg transition-all shadow-sm flex items-center gap-2" href="#appointment">
                    Book Visit
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Accepting new patients in Matunga West
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                World-class dentistry <br/>
<span className="text-zinc-400">with a personal touch.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Led by Dr. Vaishnavi Kasodekar-Deodhar. We provide advanced general, orthodontic, and aesthetic treatments using US/European standard materials.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white rounded-xl font-medium text-sm hover:translate-y-[-1px] transition-transform shadow-lg shadow-zinc-200" href="#appointment">
                    Schedule Consultation
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-zinc-200 text-zinc-700 rounded-xl font-medium text-sm hover:bg-zinc-50 transition-colors" href="#services">
                    Explore Services
                </a>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-zinc-100 py-8 max-w-4xl mx-auto">
<div>
<div className="text-3xl font-semibold text-zinc-900 tracking-tight">13+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">Years Experience</div>
</div>
<div>
<div className="text-3xl font-semibold text-zinc-900 tracking-tight">5k+</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">Happy Smiles</div>
</div>
<div>
<div className="text-3xl font-semibold text-zinc-900 tracking-tight">100%</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">Sterilization</div>
</div>
<div>
<div className="text-3xl font-semibold text-zinc-900 tracking-tight">US/EU</div>
<div className="text-xs text-zinc-500 font-medium uppercase tracking-wide mt-1">Standard Materials</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute inset-0 bg-zinc-200 rounded-2xl rotate-3 group-hover:rotate-2 transition-transform duration-500"></div>

<div className="relative bg-zinc-100 rounded-2xl aspect-[4/5] flex items-center justify-center border border-zinc-200 overflow-hidden">
<iconify-icon className="text-zinc-300" icon="lucide:user" width="64"></iconify-icon>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-zinc-100 shadow-sm">
<p className="text-sm font-semibold text-zinc-900">Dr. Vaishnavi Kasodekar-Deodhar</p>
<p className="text-xs text-zinc-500">Lead Dentist &amp; Implant Specialist</p>
</div>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Renowned for a bright, modern atmosphere &amp; state-of-the-art technology.</h2>
<div className="space-y-6 text-zinc-500 leading-relaxed">
<p>
                            All Smiles Dental Clinic is dedicated to providing the most up-to-date general, orthodontic, and family dentistry. Our facility has grown to provide world-class treatment for tooth loss, dental cosmetics, and advanced restorative dentistry.
                        </p>
<p>
                            We are among the most qualified implant providers in Mahim/Matunga with over 13 years of quality training. The consultants and staff hold themselves to the highest standards, using only superior dental materials and equipment at par with those used in the USA or Europe.
                        </p>
<div className="flex items-center gap-4 pt-4">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-700">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2"></iconify-icon>
                                Genuine Warranties
                            </div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-700">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2"></iconify-icon>
                                Impeccable Sterilization
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-100" id="advantages">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Why choose All Smiles?</h2>
<p className="text-zinc-500 mt-2">Designed for your comfort and long-term health.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="lucide:layout-grid" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">All Under One Roof</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        A wide variety of services in one location. No need for separate appointments with different specialists.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Innovative Technology</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Surgeries furnished with state-of-the-art equipment and maintained at the highest international standards.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Guaranteed Success</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Most treatments covered by a long-term guarantee, discussed transparently before procedure begins.
                    </p>
</div>

<div className="p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all bg-white">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center mb-4 text-zinc-900">
<iconify-icon icon="lucide:award" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Certified Experts</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        With over 13 years of experience in implants and facets of dentistry, you are in expert hands.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Comprehensive Services</h2>
<p className="text-zinc-500 mt-2">From routine checkups to complex full mouth rehabilitation.</p>
</div>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:gap-2 transition-all" href="#appointment">
                    Book a treatment <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:sparkles"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Veneers</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:hammer"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Dental Implants</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:smile-plus"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Invisalign Aligners</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:zap"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Root Canal</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:crown"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Crowns &amp; Bridges</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:baby"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Paediatric Dentistry</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:sun"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Teeth Whitening</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:scan-face"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Full Mouth Rehab</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:file-heart"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Gum Treatment</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:component"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Cosmetic Fillings</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:minus-circle"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Extraction</p>
</div>
<div className="group p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors cursor-default">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="lucide:scan"></iconify-icon>
</div>
<p className="font-medium text-zinc-900 text-sm">Digital X-Rays</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-300" id="appointment">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Make an appointment</h2>
<p className="text-zinc-400 mb-8">It's so fast. Book a slot and we will confirm shortly.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Name</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all placeholder-zinc-600" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Phone</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all placeholder-zinc-600" placeholder="+91" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Email</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all placeholder-zinc-600" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Date</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all" type="date"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Time</label>
<select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all appearance-none">
<option>Morning (9AM - 12PM)</option>
<option>Afternoon (12PM - 4PM)</option>
<option>Evening (4PM - 9PM)</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Message</label>
<textarea className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all placeholder-zinc-600" placeholder="Describe your concern..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-zinc-900 font-medium py-3.5 rounded-lg hover:bg-zinc-200 transition-colors mt-4" type="button">
                            Confirm Appointment
                        </button>
</form>
</div>

<div className="flex flex-col justify-between" id="contact">
<div className="space-y-8">
<div>
<h3 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:map-pin"></iconify-icon> Location
                            </h3>
<p className="text-zinc-400 text-sm ml-6 leading-relaxed">
                                Shop no 8, Nest apartments,<br/>
                                Opposite Starcity cinema,<br/>
                                Joshi Vadi, Matunga West,<br/>
                                Mumbai, Maharashtra 400016
                            </p>
</div>
<div>
<h3 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:clock"></iconify-icon> Open Hours
                            </h3>
<div className="ml-6 text-sm text-zinc-400 space-y-1">
<div className="flex justify-between max-w-[200px]">
<span>Mon - Sat</span>
<span className="text-white">9.00 AM - 9.00 PM</span>
</div>
<div className="flex justify-between max-w-[200px]">
<span>Sunday</span>
<span className="text-red-400">CLOSED</span>
</div>
</div>
</div>
<div>
<h3 className="text-white font-medium mb-1 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:phone-call"></iconify-icon> Contacts
                            </h3>
<div className="ml-6 text-sm text-zinc-400 space-y-1">
<p><a className="hover:text-white transition-colors" href="tel:+919769545049">+91 97695 45049</a></p>
<p><a className="hover:text-white transition-colors" href="tel:+918850889342">+91 88508 89342</a></p>
<p className="mt-2"><a className="hover:text-white transition-colors" href="mailto:vkasodekar@gmail.com">vkasodekar@gmail.com</a></p>
</div>
</div>
</div>
<div className="mt-12 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
<div className="flex gap-1 mb-2">
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 italic">"The best dental experience I've had. Dr. Vaishnavi is incredibly gentle and the clinic is spotless."</p>
<p className="text-xs text-zinc-500 mt-2 font-medium uppercase tracking-wider">— Recent Patient</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:smile" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-400 tracking-tight">All Smiles Dental Clinic</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
</div>
<div className="text-xs text-zinc-600">
                © 2024 All Smiles Dental Clinic. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
