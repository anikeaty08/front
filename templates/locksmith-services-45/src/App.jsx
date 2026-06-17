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



tailwind.config = {
theme: {
extend: {
colors: {
slate: { 850: '#151f32' }
}
}
}
}

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
      

<nav className="fixed w-full z-50 glass border-b border-slate-100 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-slate-900 text-white p-1 rounded-md">
<span className="iconify" data-icon="lucide:key" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-semibold text-slate-900 tracking-tighter text-lg group-hover:opacity-80 transition-opacity">KEYFRAME</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#emergency">Emergency</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="tel:5551234567">
<span className="iconify" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    (555) 123-4567
                </a>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-lg shadow-slate-200">
                    Get Help Now
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white z-0"></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Available 24/7 for Emergencies
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    Access controlled.<br/>
<span className="text-slate-400">Security assured.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                    Professional locksmith services for residential, commercial, and automotive needs. We arrive in under 20 minutes, guaranteed.
                </p>
<div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
<form className="relative flex bg-white rounded-lg p-1 border border-slate-200 shadow-sm focus-within:ring-2 focus-within:ring-slate-100 focus-within:border-slate-300 transition-all">
<div className="pl-3 flex items-center pointer-events-none text-slate-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<input className="w-40 bg-transparent border-none text-sm p-2.5 focus:ring-0 text-slate-900 placeholder:text-slate-400 outline-none" placeholder="Enter Zip Code" type="text"/>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 rounded-md transition-colors" type="button">
                                Check
                            </button>
</form>
</div>
<a className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors" href="tel:555">
<span className="iconify" data-icon="lucide:phone-call" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Emergency Call
                    </a>
</div>
<div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-slate-400">
<div className="flex items-center gap-1.5 text-xs font-medium">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                        Licensed
                    </div>
<div className="flex items-center gap-1.5 text-xs font-medium">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                        Bonded
                    </div>
<div className="flex items-center gap-1.5 text-xs font-medium">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                        Insured
                    </div>
</div>
</div>

<div className="lg:w-1/2 relative flex justify-center lg:justify-end">
<div className="relative w-full max-w-md aspect-square bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50">

<div className="absolute top-0 w-full h-12 border-b border-slate-100 bg-white flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/50"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/50"></div>
</div>
<div className="p-8 mt-12 grid grid-cols-2 gap-4">
<div className="col-span-2 p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="iconify" data-icon="lucide:lock" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Front Door</div>
<div className="text-xs text-slate-500">Locked • 14:02 PM</div>
</div>
</div>
<div className="h-6 w-10 bg-slate-100 rounded-full p-1 relative">
<div className="h-4 w-4 bg-white shadow rounded-full absolute left-1"></div>
</div>
</div>
<div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-sm text-white">
<span className="iconify mb-3 text-slate-400" data-icon="lucide:key" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-sm font-medium">Re-keying</div>
<div className="text-xs text-slate-400 mt-1">In Progress</div>
</div>
<div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
<span className="iconify mb-3 text-slate-400" data-icon="lucide:car" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="text-sm font-medium text-slate-900">Auto Lockout</div>
<div className="text-xs text-slate-500 mt-1">Technician Nearby</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-slate-50 border-t border-slate-100 p-4 flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">MK</div>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
<div className="text-xs font-mono text-slate-400">ETA 8m</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Technical Services</h2>
<p className="text-slate-500 mt-2 text-sm">Comprehensive security solutions for every access point.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">

<div className="bg-white p-8 group hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:home" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Residential Access</h3>
<p className="text-sm text-slate-500 leading-relaxed">Lock installation, re-keying, and emergency lockout services for homeowners. High-security cylinder upgrades.</p>
</div>

<div className="bg-white p-8 group hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:building-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Commercial Security</h3>
<p className="text-sm text-slate-500 leading-relaxed">Master key systems, panic bar installation, and access control for offices and retail spaces.</p>
</div>

<div className="bg-white p-8 group hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:car-front" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Automotive</h3>
<p className="text-sm text-slate-500 leading-relaxed">Transponder key programming, ignition repair, and 24/7 roadside car unlocking services.</p>
</div>

<div className="bg-white p-8 group hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:shield-alert" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Emergency</h3>
<p className="text-sm text-slate-500 leading-relaxed">Rapid response unit. We prioritize lockouts involving children or potential danger.</p>
</div>

<div className="bg-white p-8 group hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:key-round" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Key Duplication</h3>
<p className="text-sm text-slate-500 leading-relaxed">Precision laser cutting for high-security keys and standard duplication on-site.</p>
</div>

<div className="bg-white p-8 group hover:bg-slate-50 transition-colors flex flex-col justify-center">
<h3 className="text-base font-semibold text-slate-900 mb-2">Custom Solutions</h3>
<p className="text-sm text-slate-500 mb-4">Need something specific like safe cracking or biometric locks?</p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-600" href="#">
                        Contact Sales 
                        <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-grid-dark z-0 opacity-20"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-end gap-12 border-b border-white/10 pb-16 mb-16">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Security doesn't wait.<br/>Neither do we.</h2>
<p className="text-slate-400 font-light text-lg">Our distributed network of technicians ensures the fastest response times in the metropolitan area.</p>
</div>
<div className="flex gap-4">
<button className="bg-white text-slate-950 hover:bg-slate-200 font-medium py-3 px-6 rounded-md transition-colors text-sm">
                        Request Service
                    </button>
<button className="bg-transparent border border-white/20 text-white hover:bg-white/5 font-medium py-3 px-6 rounded-md transition-colors text-sm">
                        View Coverage Map
                    </button>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="text-4xl font-semibold tracking-tight mb-1">15m</div>
<div className="text-sm text-slate-500 font-medium">Avg. Arrival Time</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight mb-1">5k+</div>
<div className="text-sm text-slate-500 font-medium">Locks Opened</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight mb-1">24/7</div>
<div className="text-sm text-slate-500 font-medium">Availability</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight mb-1">100%</div>
<div className="text-sm text-slate-500 font-medium">Satisfaction Guarantee</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-200 overflow-hidden">
<div className="p-8 border-b border-slate-100">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Request an Estimate</h2>
<p className="text-sm text-slate-500 mt-1">Transparent pricing. No hidden fees. Pay after the job is done.</p>
</div>
<div className="p-8">
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Service Type</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="service" type="radio"/>
<div className="p-3 rounded-lg border border-slate-200 peer-checked:border-slate-900 peer-checked:bg-slate-50 transition-all text-center">
<span className="block text-sm font-medium text-slate-800">Lockout</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-3 rounded-lg border border-slate-200 peer-checked:border-slate-900 peer-checked:bg-slate-50 transition-all text-center">
<span className="block text-sm font-medium text-slate-800">Installation</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-3 rounded-lg border border-slate-200 peer-checked:border-slate-900 peer-checked:bg-slate-50 transition-all text-center">
<span className="block text-sm font-medium text-slate-800">Re-Key</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="service" type="radio"/>
<div className="p-3 rounded-lg border border-slate-200 peer-checked:border-slate-900 peer-checked:bg-slate-50 transition-all text-center">
<span className="block text-sm font-medium text-slate-800">Other</span>
</div>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all resize-none" rows="3"></textarea>
</div>
<div className="flex items-center gap-3 pt-2">
<input className="custom-checkbox h-4 w-4 rounded border-gray-300 text-slate-900 focus:ring-slate-900 transition-all cursor-pointer appearance-none border bg-white" id="urgent" type="checkbox"/>
<label className="text-xs text-slate-600 select-none cursor-pointer" htmlFor="urgent">This is an emergency (Priority Dispatch)</label>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-md transition-colors text-sm shadow-lg shadow-slate-900/10 mt-2" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-8">
                By submitting this form, you agree to our Terms of Service. Typical response time for form submissions is 10 minutes. <br/>For immediate assistance, call <a className="underline hover:text-slate-600" href="#">555-123-4567</a>.
            </p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="bg-slate-900 text-white p-1 rounded-md">
<span className="iconify" data-icon="lucide:key" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-sm">KEYFRAME</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Defining the standard for modern locksmithing. Security, speed, and reliability encoded into every service.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Services</h4>
<ul className="space-y-2.5 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Residential</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Commercial</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Automotive</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Emergency</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-2.5 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Coverage Map</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-2.5 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">License Info</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-400">
                    © 2023 Keyframe Security Inc. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
