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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">

<div className="bg-red-600 p-1.5 rounded-lg">
<iconify-icon className="text-white" height="24" icon="solar:water-drops-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight">Mott Plumbing</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white hover:text-red-400 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#hot-water">Hot Water</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#blog">Tips</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-white text-sm font-medium hover:text-red-400 transition-colors" href="tel:84629844">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    8462 9844
                </a>
<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                    Get a Quote
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Plumbing Adelaide" className="w-full h-full object-cover" src="https://mottplumbing.com.au/wp-content/uploads/sites/2/drain-cleaning-adelaide.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-slate-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="text-red-400 font-medium tracking-wide uppercase text-sm">#1 Adelaide Plumbing Service</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Expert Plumbing you can trust, 24/7.
                </h1>
<p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                    For over 30 years, our Adelaide plumbers have been servicing leaks, drains, and hot water systems across all metropolitan suburbs.
                </p>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-4">

<div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-white text-xs">MP</div>
<div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-white text-xs">SA</div>
<div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-600 flex items-center justify-center text-white text-xs">24/7</div>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-3xl font-semibold text-white">30+</span>
<span className="text-sm text-slate-400 font-medium">Years Experience</span>
</div>
<p className="text-slate-300 text-sm">Reliable service across Adelaide</p>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl text-white">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Request a Quote</h3>
<p className="text-slate-300 text-sm mb-8">Get a no-obligation free quote for your plumbing needs. We are available for emergency repairs.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Phone</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="04..." type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Suburb</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="e.g. Beulah Park" type="text"/>
</div>
<div className="space-y-1 relative">
<label className="text-xs font-medium text-slate-300">Service Type</label>
<select className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm appearance-none text-white">
<option className="text-slate-900">Blocked Drains</option>
<option className="text-slate-900">Hot Water System</option>
<option className="text-slate-900">Leaking Taps</option>
<option className="text-slate-900">Gas Fitting</option>
<option className="text-slate-900">Emergency</option>
</select>
<iconify-icon className="w-4 h-4 absolute right-0 bottom-3 text-slate-300 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-medium text-slate-300">Message</label>
<textarea className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm resize-none" placeholder="Describe your issue..." rows="1"></textarea>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-full mt-4 transition-colors flex justify-center items-center gap-2" type="button">
                        Send Request
                        <iconify-icon icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</header>

<div className="bg-slate-900 py-6 overflow-hidden whitespace-nowrap border-b border-slate-800">
<div className="flex items-center gap-12 text-white font-semibold text-xl md:text-2xl tracking-tight animate-marquee justify-center">
<span>Blocked Drains</span>
<span className="text-red-500">•</span>
<span>Hot Water Systems</span>
<span className="text-red-500">•</span>
<span>Emergency Plumbing</span>
<span className="text-red-500">•</span>
<span>Gas Fitting</span>
<span className="text-red-500">•</span>
<span>Leak Detection</span>
<span className="text-red-500">•</span>
<span>Bathroom Renovations</span>
</div>
</div>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2">30<span className="text-red-600 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-medium">Years Experience</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2">24<span className="text-red-600 text-2xl align-top">/7</span></p>
<p className="text-slate-500 text-sm font-medium">Emergency Service</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2">100<span className="text-red-600 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-medium">Adelaide Metro</p>
</div>
<div className="text-center">
<p className="text-4xl md:text-5xl font-semibold text-slate-900 mb-2">5<span className="text-red-600 text-2xl align-top">★</span></p>
<p className="text-slate-500 text-sm font-medium">Quality Workmanship</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">WHY MOTT PLUMBING</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-8">
                    Reliable Adelaide plumbers for jobs big or small.
                </h2>
<p className="text-lg text-slate-500 mb-8">
                    We understand how frustrating it can be to live with a blocked drain or burst pipe. Our Adelaide plumbers work in all suburbs and are available 24/7 to solve your urgent plumbing emergencies.
                </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-slate-800 font-medium">Prompt &amp; Friendly Service</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-slate-800 font-medium">Routine Preventative Maintenance</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-slate-800 font-medium">No Obligation Free Quotes</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-slate-800 font-medium">Fully Licensed &amp; Insured</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Hydro Jet Drain Cleaning" className="w-full h-full object-cover" src="https://mottplumbing.com.au/wp-content/uploads/sites/2/Hydo-Jet-Drain-Cleaning-33.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
<div className="flex items-center gap-4 mb-2">
<div className="bg-red-100 p-2 rounded-lg text-red-600">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase font-semibold">Emergency?</p>
<p className="text-lg font-bold text-slate-900">8462 9844</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">OUR SERVICES</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                   Complete Plumbing Solutions for Your Home.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    From emergency repairs to bathroom renovations, Mott Plumbing covers all aspects of residential and commercial plumbing.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-slate-400 font-medium text-sm mb-4 block">01.</span>
<div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon className="text-red-600" icon="solar:bell-bing-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Emergency Plumbing</h3>
<p className="text-slate-500 leading-relaxed">24/7 response for burst pipes, major leaks, and urgent plumbing disasters across Adelaide.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-slate-400 font-medium text-sm mb-4 block">02.</span>
<div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon className="text-red-600" icon="solar:water-drops-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Blocked Drains</h3>
<p className="text-slate-500 leading-relaxed">Specialized equipment to clear blocked drains efficiently and prevent recurrence.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-slate-400 font-medium text-sm mb-4 block">03.</span>
<div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon className="text-red-600" icon="solar:flame-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Hot Water Services</h3>
<p className="text-slate-500 leading-relaxed">Installation and repair of gas, solar, and electric hot water systems to keep you warm.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-slate-400 font-medium text-sm mb-4 block">04.</span>
<div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon className="text-red-600" icon="solar:bath-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Bathroom Renovations</h3>
<p className="text-slate-500 leading-relaxed">Design and installation services for stunning bathroom and laundry makeovers.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-slate-400 font-medium text-sm mb-4 block">05.</span>
<div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon className="text-red-600" icon="solar:danger-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Gas Fitting</h3>
<p className="text-slate-500 leading-relaxed">Safe detection of leaks and repair of gas piping by licensed professionals.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-slate-400 font-medium text-sm mb-4 block">06.</span>
<div className="mb-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
<iconify-icon className="text-red-600" icon="solar:home-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Roof Leaks &amp; Gutters</h3>
<p className="text-slate-500 leading-relaxed">Fixing roof leaks and clearing gutters to protect your home from water damage.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">FAQ</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                    Frequently Asked Questions
                </h2>
<p className="text-slate-500 mt-4 text-lg">Clear answers about our Adelaide plumbing services.</p>
</div>
<div className="space-y-4">

<div className="bg-slate-50 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer">
<h3 className="font-semibold text-slate-900 text-lg">Do you offer after-hours service?</h3>
<iconify-icon className="text-slate-400" icon="solar:close-circle-linear" width="24"></iconify-icon>
</div>
<p className="mt-3 text-slate-500 leading-relaxed">
                        Yes! Mott Plumbing provides 24/7 emergency plumbing services across all metropolitan suburbs. Whether it's a burst pipe at 2 AM or a blocked drain on a Sunday, we are here to help.
                    </p>
</div>

<div className="bg-white border border-slate-100 rounded-lg p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-red-600">What areas do you service?</h3>
<iconify-icon className="text-slate-400" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div className="bg-white border border-slate-100 rounded-lg p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-red-600">Do you install hot water systems?</h3>
<iconify-icon className="text-slate-400" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
</div>
<div className="bg-white border border-slate-100 rounded-lg p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-red-600">Can you help with bathroom renovations?</h3>
<iconify-icon className="text-slate-400" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">PLUMBING TIPS</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Latest Advice from Mott Plumbing
                </h2>
<p className="text-lg text-slate-500">
                    Stay informed with our latest articles on home maintenance and plumbing care.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Gutter Cleaning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mottplumbing.com.au/wp-content/uploads/sites/2/Untitled-design-4.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Dec 24</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">The Importance of Gutter Cleaning in Adelaide</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Read Article</span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Drain Cleaning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mottplumbing.com.au/wp-content/uploads/sites/2/drain-cleaning-adelaide.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Oct 22</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">Looking For Drain Cleaning in Adelaide?</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Read Article</span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Leaking Hot Water" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://mottplumbing.com.au/wp-content/uploads/sites/2/hot-water-system-leaking.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Aug 28</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">Is Your Hot Water System Leaking?</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Read Article</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="bg-red-600 p-1.5 rounded-lg">
<iconify-icon className="text-white" icon="solar:water-drops-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight">Mott Plumbing</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        You can trust our Adelaide plumbers to provide expert and reliable service when you need it. Builder's Licence BLD 54870.
                    </p>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Services</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Plumber Adelaide</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Hot Water Systems</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Blocked Drains</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Gas Fitting</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Roof Leaks</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                            (08) 8462 9844
                        </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                            plumbing@mott.com.au
                        </li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
                            24/7 Emergency Service
                        </li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Office Location</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        267 The Parade<br/>
                        Beulah Park SA 5067
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="https://www.facebook.com/MottGroup"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="http://www.linkedin.com/company/mott-group"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">Copyright © 2025 Mott Group. All Rights Reserved.</p>
<div className="flex items-center gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
