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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="GE8mpmmCRgK6XBF57jgF"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors duration-300">
<iconify-icon height="20" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">VOLTWORKS</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#about">Company</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm hover:shadow-md" href="#contact">
<span className="">Book Service</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="max-w-6xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6">

<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 animate-fade-in mb-24 gap-x-12 gap-y-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Available for emergency calls 24/7
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Powering homes with <span className="text-slate-400">precision &amp; safety.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed">
                    Licensed electricians specializing in modern residential diagnostics, smart home installations, and urgent repairs.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-3 hover:bg-slate-800 transition-all text-sm font-medium text-white bg-slate-900 rounded-lg pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm" href="/tel:+9773135857">9773135857</a>
<a className="flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 px-6 py-3.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all" href="#contact">
                        Request Quote
                    </a>
</div>
<div className="mt-8 flex items-center gap-6 text-xs font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" height="18" icon="solar:shield-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Fully Licensed
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" height="18" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Insured &amp; Bonded
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" height="18" icon="solar:star-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        5.0 Rating
                    </div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-48 md:h-56 col-span-2 md:col-span-1 hover:border-blue-200 transition-colors group">
<div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
<iconify-icon className="" height="24" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-1">Smart Lighting</h3>
<p className="text-xs text-slate-500 leading-relaxed">Recessed, landscape, and automated lighting solutions.</p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between h-48 md:h-56 col-span-2 md:col-span-1 hover:border-blue-200 transition-colors group">
<div className="bg-amber-50 w-10 h-10 rounded-full flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:plug-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-slate-900 mb-1">Panel Upgrades</h3>
<p className="text-xs text-slate-500 leading-relaxed">Modernize your home's power capacity for safety.</p>
</div>
</div>
<div className="bg-slate-900 p-6 rounded-2xl shadow-sm flex items-center justify-between col-span-2">
<div className="">
<h3 className="font-medium text-white mb-1">EV Charger Install</h3>
<p className="text-xs text-slate-400">Level 2 home charging stations.</p>
</div>
<div className="text-white opacity-50">
<iconify-icon height="32" icon="solar:battery-charge-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="border-b border-slate-200 mb-20"></div>

<div className="scroll-mt-24" id="contact">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Contact Information</h2>
<p className="text-slate-500 max-w-lg mx-auto">
                    Reach out for a free consultation or emergency service. We typically respond within 15 minutes during business hours.
                </p>
</div>
<div className="grid lg:grid-cols-12 gap-12 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

<div className="lg:col-span-4 bg-slate-50 p-8 lg:p-10 border-r border-slate-100 flex flex-col justify-between">
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-8">Direct Lines</h3>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 text-slate-900">
<iconify-icon height="24" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900">Headquarters</p>
<p className="text-sm text-slate-500 mt-1">123 Circuit Avenue, Suite 400San Francisco, CA 94103</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-slate-900">
<iconify-icon height="24" icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900">Phone</p>
<a className="text-sm text-slate-500 mt-1 hover:text-blue-600 transition-colors block" href="tel:+15550123456">(555) 012-3456</a>
<span className="text-xs text-blue-600 mt-1 block font-medium">● 24/7 Emergency Line</span>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-slate-900">
<iconify-icon height="24" icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900">Email</p>
<a className="text-sm text-slate-500 mt-1 hover:text-blue-600 transition-colors block" href="mailto:hello@voltworks.com">hello@voltworks.com</a>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-200">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">Business Hours</h4>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-slate-600">Mon - Fri</span>
<span className="text-slate-900 font-medium">8:00 AM - 6:00 PM</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">Saturday</span>
<span className="text-slate-900 font-medium">9:00 AM - 2:00 PM</span>
</div>
<div className="flex justify-between">
<span className="text-slate-600">Sunday</span>
<span className="text-slate-900 font-medium">Emergency Only</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 p-8 lg:p-10">
<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide ml-1" htmlFor="name">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide ml-1" htmlFor="phone">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm" id="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide ml-1" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm appearance-none cursor-pointer" id="service">
<option disabled="" selected="" value="">Select a service</option>
<option value="repair">General Repair</option>
<option value="installation">Installation</option>
<option value="inspection">Safety Inspection</option>
<option value="emergency">Emergency</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide ml-1" htmlFor="message">Project Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none" id="message" placeholder="Please describe your issue or project..." rows="4"></textarea>
</div>
<div className="flex items-center gap-3 pt-2">
<input className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer accent-slate-900" id="terms" type="checkbox"/>
<label className="text-xs text-slate-500 select-none cursor-pointer" htmlFor="terms">I agree to the processing of my personal data for the purpose of the inquiry.</label>
</div>
<button className="w-full md:w-auto bg-slate-900 text-white font-medium px-8 py-3 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 transition-all flex items-center justify-center gap-2 mt-4 group" type="submit">
                            Send Message
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:plain-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<div className="mt-24">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Serving the Greater Bay Area</p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
<span className="hover:text-slate-900 cursor-default transition-colors">San Francisco</span>
<span className="text-slate-200">/</span>
<span className="hover:text-slate-900 cursor-default transition-colors">Oakland</span>
<span className="text-slate-200">/</span>
<span className="hover:text-slate-900 cursor-default transition-colors">San Jose</span>
<span className="text-slate-200">/</span>
<span className="hover:text-slate-900 cursor-default transition-colors">Palo Alto</span>
<span className="text-slate-200">/</span>
<span className="hover:text-slate-900 cursor-default transition-colors">Berkeley</span>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-slate-900" height="24" icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base font-semibold tracking-tight text-slate-900">VOLTWORKS</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Professional electrical services committed to safety, quality, and reliability for residential and commercial clients.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Services</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Residential Repair</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Commercial Wiring</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">EV Charging</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Panel Upgrades</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Social</h4>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="brandico:facebook" width="16"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="16"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
<p className="text-xs text-slate-400">© 2023 Voltworks Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-slate-500 font-medium">Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
