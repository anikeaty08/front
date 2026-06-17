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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="text-zinc-100 w-5 h-5" data-lucide="scissors"></i>
<span className="text-zinc-100 font-medium text-lg tracking-tight">Surya Gents Parlour</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#location">Location</a>
<a className="text-sm font-normal text-zinc-400 hover:text-zinc-100 transition-colors" href="#booking">Contact</a>
</div>
<a className="bg-zinc-100 text-zinc-950 hover:bg-zinc-300 px-4 py-2 rounded-full text-sm font-medium transition-all" href="#booking">
                Book Appointment
            </a>
</div>
</nav>

<main className="pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Open for Booking</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-100 tracking-tighter leading-[1.1]">
                Expert Grooming for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">The Modern Gentleman.</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">
                Experience premium styling by Rakesh Sain. Located in the heart of Barmsar, Hanumangarh.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-100 text-zinc-950 rounded-lg font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#booking">
                    Book Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 border border-zinc-800 text-zinc-300 rounded-lg font-medium hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2" href="tel:7340467720">
<i className="w-4 h-4" data-lucide="phone"></i> Call 73404-67720
                </a>
</div>
</div>
</main>

<section className="py-24 border-t border-zinc-800/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-zinc-100 tracking-tight mb-4">Our Services</h2>
<p className="text-lg text-zinc-500">Comprehensive care ranging from classic cuts to modern spa treatments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<i className="w-5 h-5" data-lucide="scissors"></i>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Hair Cutting &amp; Styling</h3>
<p className="text-base text-zinc-500 leading-relaxed">Professional cuts tailored to your face shape and preference.</p>
</div>

<div className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<i className="w-5 h-5" data-lucide="smile"></i>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Shaving &amp; Beard</h3>
<p className="text-base text-zinc-500 leading-relaxed">Precision beard trimming and clean shaving services.</p>
</div>

<div className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Facial &amp; D-Tan</h3>
<p className="text-base text-zinc-500 leading-relaxed">Rejuvenating facials, bleach, and D-Tan treatments for glowing skin.</p>
</div>

<div className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Spa &amp; Straightening</h3>
<p className="text-base text-zinc-500 leading-relaxed">Deep conditioning hair spa and professional straightening.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50" id="booking">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<h2 className="text-3xl font-semibold text-zinc-100 tracking-tight mb-4">Visit Us</h2>
<p className="text-lg text-zinc-500 mb-8">We are located in Barmsar, serving the Tehsil Pallu region.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 rounded-md bg-zinc-800 text-zinc-400">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-zinc-200 font-medium">Location</h4>
<p className="text-base text-zinc-500 mt-1">Barmsar, Tehsil Pallu<br/>District Hanumangarh, RJ</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-md bg-zinc-800 text-zinc-400">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div>
<h4 className="text-zinc-200 font-medium">Proprietor</h4>
<p className="text-base text-zinc-500 mt-1">Rakesh Sain</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 rounded-md bg-zinc-800 text-zinc-400">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-zinc-200 font-medium">Contact</h4>
<p className="text-base text-zinc-500 mt-1">
<a className="hover:text-amber-500 transition-colors" href="tel:7340467720">73404-67720</a> <br/>
<a className="hover:text-amber-500 transition-colors" href="tel:9610280553">96102-80553</a>
</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl shadow-zinc-950/50">
<h3 className="text-xl font-medium text-zinc-200 mb-6">Request an Appointment</h3>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Name</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all text-sm" placeholder="Your name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Phone</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all text-sm" placeholder="+91" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Service</label>
<div className="relative">
<select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 appearance-none focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all text-sm">
<option>Hair Cut</option>
<option>Beard Trim / Shave</option>
<option>Facial / D-Tan</option>
<option>Hair Spa</option>
<option>Full Package</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Preferred Time</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-700 transition-all text-sm [color-scheme:dark]" type="datetime-local"/>
</div>
<button className="w-full bg-zinc-100 text-zinc-950 font-medium py-3 rounded-lg hover:bg-white hover:shadow-lg hover:shadow-zinc-800/20 transition-all mt-2">
                        Confirm Booking
                    </button>
<p className="text-center text-xs text-zinc-600 mt-4">Walk-ins are also welcome based on availability.</p>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t border-zinc-800/50 text-center">
<div className="flex items-center justify-center gap-2 mb-6 opacity-80">
<i className="text-zinc-400 w-5 h-5" data-lucide="scissors"></i>
<span className="text-zinc-200 font-medium tracking-tight">Surya Gents Parlour</span>
</div>
<p className="text-sm text-zinc-600">
            © 2024 Surya Gents Parlour. Barmsar, Hanumangarh. All rights reserved.
        </p>
</footer>


    </>
  );
}
