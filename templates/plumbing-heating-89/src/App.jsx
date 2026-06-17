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
      

<div className="bg-slate-900 text-slate-300 text-xs py-2.5 px-6">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Serving Bolton &amp; Lancashire</span>
<span className="hidden sm:inline w-px h-3 bg-slate-700"></span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 24/7 Emergency Service</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">Gas Safe Register: #543210</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-blue-600 transition-colors">DMC</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Plumbing &amp; Heating</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-full hover:bg-slate-50 transition-all" href="#">Services</a>
<a className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-full hover:bg-slate-50 transition-all" href="#">Boilers</a>
<a className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-full hover:bg-slate-50 transition-all" href="#">Areas</a>
<a className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-full hover:bg-slate-50 transition-all" href="#">Reviews</a>
</div>

<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col items-end mr-2">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Emergency?</span>
<span className="text-sm font-semibold text-slate-900">01204 789 081</span>
</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm shadow-blue-200 flex items-center gap-2">
                    Get a Quote
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-20 pb-24 overflow-hidden bg-slate-50">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide">Available for call-outs today</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    Professional plumbing for <span className="text-blue-600">Bolton homes.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Gas Safe registered engineers specializing in boiler installation, repairs, and emergency plumbing. Quality workmanship without the hidden fees.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-sm font-medium transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        01204 789 081
                    </button>
<button className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2">
                        View Services
                    </button>
</div>
<div className="flex items-center gap-6 pt-4 border-t border-slate-200/60">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Gas Safe Registered</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:star-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">5-Star Rated</span>
</div>
</div>
</div>
<div className="relative lg:h-[600px] w-full hidden lg:block fade-in-up delay-100">
<div className="absolute inset-0 bg-slate-200 rounded-2xl rotate-3 transform"></div>
<img alt="Heating Engineer" className="relative rounded-2xl w-full h-full object-cover shadow-2xl border border-slate-100" src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl border border-slate-100 max-w-xs">
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-2.5 rounded-lg text-blue-600">
<iconify-icon icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">Dave McCarthy</p>
<p className="text-xs text-slate-500 mt-0.5">Lead Engineer • 15+ Years Exp</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">15+</h3>
<p className="text-sm text-slate-500 font-medium">Years Experience</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">24/7</h3>
<p className="text-sm text-slate-500 font-medium">Emergency Callout</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">0%</h3>
<p className="text-sm text-slate-500 font-medium">Call Out Charge</p>
</div>
<div className="space-y-1">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">1k+</h3>
<p className="text-sm text-slate-500 font-medium">Boilers Repaired</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Complete heating solutions</h2>
<p className="text-slate-500 leading-relaxed">From simple tap repairs to full central heating installations, we provide high-quality workmanship backed by manufacturers' guarantees.</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 group" href="#">
                    View full price list
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:flame-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Boiler Installations</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Energy efficient combi-boiler replacements. Accredited installers for Worcester Bosch, Baxi and Vaillant.
                    </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> Up to 10 year warranty
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> Smart thermostat setup
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:waterdrops-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Plumbing Repairs</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Fast response for leaks, bursts, and blockages. We carry most parts to fix issues on the first visit.
                    </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> Taps &amp; Toilets
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> Burst Pipes
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Landlord Certificates</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        CP12 Gas Safety certificates for landlords and letting agents across Bolton and Westhoughton.
                    </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> Annual reminders
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon> Multiple property discount
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden grid lg:grid-cols-5">

<div className="lg:col-span-2 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight mb-4">Request a callback</h3>
<p className="text-slate-400 leading-relaxed mb-8">Leave your details and we will get back to you within 30 minutes during working hours.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-blue-500" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="font-medium text-white">Coverage Area</p>
<p className="text-sm text-slate-400">Bolton, Westhoughton, Horwich,<br/>Over Hulton &amp; surrounding areas.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-blue-500" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="font-medium text-white">Working Hours</p>
<p className="text-sm text-slate-400">Mon - Fri: 8am - 6pm<br/>Weekends: Emergency Only</p>
</div>
</div>
</div>
</div>
<div className="relative z-10 mt-12 pt-12 border-t border-white/10">
<p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2">Direct Line</p>
<p className="text-2xl font-semibold text-white">01204 789 081</p>
</div>
</div>

<div className="lg:col-span-3 p-12">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-400" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Service Required</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm text-center text-slate-600 hover:bg-slate-50 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-50 transition-all">
                                        Repair
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm text-center text-slate-600 hover:bg-slate-50 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-50 transition-all">
                                        Installation
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm text-center text-slate-600 hover:bg-slate-50 peer-checked:border-blue-600 peer-checked:text-blue-600 peer-checked:bg-blue-50 transition-all">
                                        Service
                                    </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Contact Details</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-slate-400" placeholder="Phone number or email" type="text"/>
</div>
<div className="flex items-center gap-3">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle"></label>
</input></div>
<label className="text-xs text-slate-500" htmlFor="toggle">I agree to the privacy policy.</label>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-lg transition-colors shadow-sm shadow-blue-200" type="button">
                            Send Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Why DMC Plumbing?</h2>
<p className="text-slate-500 mt-4 max-w-2xl mx-auto">We've built our reputation on honesty, reliability and high standards of work. Here is what you can expect.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 bg-slate-50 rounded-xl">
<iconify-icon className="text-blue-600 mb-4" icon="solar:wallet-linear" width="32"></iconify-icon>
<h3 className="font-semibold text-slate-900 mb-2">Fair Pricing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Upfront quotes with no hidden costs. We don't charge a call-out fee.</p>
</div>

<div className="p-6 bg-slate-50 rounded-xl">
<iconify-icon className="text-blue-600 mb-4" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<h3 className="font-semibold text-slate-900 mb-2">Punctual</h3>
<p className="text-sm text-slate-500 leading-relaxed">We respect your time. We arrive when we say we will, every time.</p>
</div>

<div className="p-6 bg-slate-50 rounded-xl">
<iconify-icon className="text-blue-600 mb-4" icon="solar:broom-linear" width="32"></iconify-icon>
<h3 className="font-semibold text-slate-900 mb-2">Clean &amp; Tidy</h3>
<p className="text-sm text-slate-500 leading-relaxed">We treat your home with respect and always clean up after ourselves.</p>
</div>

<div className="p-6 bg-slate-50 rounded-xl">
<iconify-icon className="text-blue-600 mb-4" icon="solar:medal-ribbon-linear" width="32"></iconify-icon>
<h3 className="font-semibold text-slate-900 mb-2">Guaranteed</h3>
<p className="text-sm text-slate-500 leading-relaxed">All work is guaranteed for 12 months for your complete peace of mind.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2 space-y-6 pr-8">
<a className="flex items-center gap-2 group mb-6" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:flame-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">DMC Plumbing</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Providing trusted plumbing and heating services to the Bolton community for over 15 years. Fully insured and Gas Safe registered.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">Services</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Boiler Installation</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Boiler Servicing</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Bathroom Plumbing</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Leak Detection</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Gas Safety Checks</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear"></iconify-icon>
                            3 Braddyll Road<br/>Over Hulton, Bolton<br/>BL5 1DY
                        </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                            01204 789 081
                        </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                            hello@dmcplumbing.co.uk
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 DMC Plumbing &amp; Heating. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
<a className="hover:text-slate-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
