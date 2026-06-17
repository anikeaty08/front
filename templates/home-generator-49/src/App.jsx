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
      

<header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/60 glass-nav">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="text-slate-900 flex items-center justify-center">
<iconify-icon icon="solar:bolt-circle-bold" width="24"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">SecurePower</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="tel:+15551234567">
                    (555) 123-4567
                </a>
<a className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-sm ring-1 ring-slate-900 ring-offset-1" href="#quote">
<span>Get Estimate</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="pt-24 relative">
<div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 to-transparent -z-10"></div>

<section className="max-w-6xl mx-auto px-6 py-12 md:py-20 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-slate-200 bg-white text-slate-600 text-xs font-medium shadow-sm">
<span className="flex h-2 w-2 relative justify-center items-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                    Licensed &amp; Insured Installers
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.05]">
                    Power security <br/>
<span className="text-slate-400">made simple.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-normal leading-relaxed max-w-lg">
                    Automatic standby generator installation for modern homes. Protect your property with a seamless, turnkey solution.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-base font-medium px-8 py-3.5 rounded-lg shadow-lg shadow-slate-200 transition-all w-full sm:w-auto" href="#quote">
                        Start Your Quote
                    </a>
<div className="flex items-center justify-center gap-2 text-sm text-slate-500 py-3 sm:px-4">
<iconify-icon className="text-slate-900" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span>Financing available</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/40 p-1 md:p-1.5" id="quote">
<div className="bg-slate-50/50 border border-slate-100 rounded-lg p-6 md:p-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Check Availability</h3>
<iconify-icon className="text-slate-400" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500" htmlFor="first-name">First Name</label>
<input className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-sm placeholder:text-slate-300" id="first-name" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500" htmlFor="last-name">Last Name</label>
<input className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-sm placeholder:text-slate-300" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500" htmlFor="address">Property Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="solar:map-point-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2.5 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-sm placeholder:text-slate-300" id="address" placeholder="Search address..." type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] uppercase tracking-wider font-semibold text-slate-500" htmlFor="phone">Phone</label>
<input className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-md focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-sm placeholder:text-slate-300" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-md shadow-sm transition-all text-sm flex justify-center items-center gap-2 mt-4 group" type="button">
<span>Request Pricing</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-400 mt-4 flex items-center justify-center gap-1">
<iconify-icon icon="solar:lock-password-linear" width="10"></iconify-icon>
                            Your information is strictly confidential.
                        </p>
</form>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left border-r border-slate-100 last:border-0">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">15+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Years Experience</div>
</div>
<div className="text-center md:text-left border-r border-slate-100 last:border-0">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">500+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Installs</div>
</div>
<div className="text-center md:text-left border-r border-slate-100 last:border-0">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">24/7</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Support</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">10yr</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Warranty</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why risk the outage?</h2>
<p className="text-slate-500 text-lg">Weather is unpredictable. Your home's safety shouldn't be. Ensure continuity for what matters most.</p>
</div>
<a className="text-sm font-medium text-slate-900 border-b border-slate-200 pb-0.5 hover:border-slate-900 transition-colors" href="#process">
                    View installation process
                </a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 text-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:fridge-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Asset Protection</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Prevent thousands in losses from spoiled food and frozen pipes. The system activates seconds after grid failure.
                    </p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 text-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-wifi-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Climate &amp; Connectivity</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Keep HVAC running in extreme weather. Maintain WiFi for remote work and security systems for peace of mind.
                    </p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 text-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Value Addition</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Increase your property value. A permanent standby generator is a highly desirable asset for future homebuyers.
                    </p>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24 overflow-hidden relative" id="process">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Installation simplified</h2>
<p className="text-slate-400">We handle the permits, concrete, plumbing, and electrical. You handle the relaxation.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center shadow-2xl mb-8 z-10 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-indigo-400" icon="solar:clipboard-check-linear" width="32"></iconify-icon>
</div>
<div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold tracking-wider text-slate-400 mb-4 border border-slate-700">STEP 01</div>
<h3 className="text-lg font-medium text-white mb-3">Assessment</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">We analyze load requirements and determine the optimal generator placement for your property.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center shadow-2xl mb-8 z-10 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-indigo-400" icon="solar:screwdrivers-linear" width="32"></iconify-icon>
</div>
<div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold tracking-wider text-slate-400 mb-4 border border-slate-700">STEP 02</div>
<h3 className="text-lg font-medium text-white mb-3">Installation</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">Certified setup including concrete pad pouring, gas line connection, and electrical transfer switch.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center shadow-2xl mb-8 z-10 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-indigo-400" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-[10px] font-bold tracking-wider text-slate-400 mb-4 border border-slate-700">STEP 03</div>
<h3 className="text-lg font-medium text-white mb-3">Activation</h3>
<p className="text-sm text-slate-400 leading-relaxed max-w-xs">System testing, mobile app configuration, and a walkthrough of your new backup power system.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="reviews">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Trusted by your neighbors.</h2>
<p className="text-slate-500 mb-8 max-w-md">We pride ourselves on white-glove service. No mess left behind, just reliable power.</p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-900 mt-1" icon="solar:verified-check-bold" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 text-sm">Certified Technicians</h4>
<p className="text-xs text-slate-500 mt-1">Our team is factory trained and fully licensed.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
<iconify-icon className="text-slate-900 mt-1" icon="solar:clock-circle-bold" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 text-sm">On-Time Guarantee</h4>
<p className="text-xs text-slate-500 mt-1">We respect your time and schedule.</p>
</div>
</div>
</div>
</div>

<div className="grid gap-6">
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative">
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed mb-6 text-sm">
                            "The installation was seamless. The crew arrived on time, cleaned up perfectly, and the generator kicked on 2 weeks later during the big storm. Absolutely worth the investment."
                        </p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-100">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-slate-600">MS</div>
<div>
<div className="font-medium text-slate-900 text-sm">Michael S.</div>
<div className="text-[11px] text-slate-400">Homeowner • Installed Oct 2023</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm opacity-60 hover:opacity-100 transition-opacity cursor-default">
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-600 leading-relaxed mb-2 text-sm">
                            "Professional from start to finish. The app integration they set up is fantastic."
                        </p>
<div className="font-medium text-slate-900 text-sm mt-4">Sarah J.</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 border-t border-slate-200" id="faq">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">Common Questions</h2>
<div className="space-y-3">
<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-slate-900/10 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900 text-sm">
<span>What is the typical installation timeline?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 px-5 pb-5 text-sm leading-relaxed border-t border-slate-50 mt-1 pt-4">
                        While the physical installation usually takes just one day, the entire process (permitting, utility coordination, and site prep) typically spans 2-3 weeks from contract to completion.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-slate-900/10 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900 text-sm">
<span>Do I need to manually turn it on?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 px-5 pb-5 text-sm leading-relaxed border-t border-slate-50 mt-1 pt-4">
                        No. Our standby generators are equipped with an Automatic Transfer Switch (ATS). It detects a power outage instantly and restores power to your home within seconds, automatically.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:ring-1 open:ring-slate-900/10 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900 text-sm">
<span>What maintenance is required?</span>
<span className="transition group-open:rotate-45 text-slate-400">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 px-5 pb-5 text-sm leading-relaxed border-t border-slate-50 mt-1 pt-4">
                        Like a car, generators need oil changes and filter replacements. We offer annual maintenance plans where we handle everything for you, ensuring your warranty remains valid.
                    </div>
</details>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-slate-900 mb-6" icon="solar:bolt-circle-bold" width="48"></iconify-icon>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Ready to secure your home?</h2>
<p className="text-slate-500 mb-8 text-lg">Get a free, no-obligation estimate today.</p>
<div className="flex items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-slate-200 transition-all" href="#quote">
                        Get Pricing
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="text-slate-900">
<iconify-icon icon="solar:bolt-circle-bold" width="20"></iconify-icon>
</div>
<span className="font-semibold text-slate-900 tracking-tight">SecurePower</span>
</div>
<p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                    Professional standby generator installation services. Licensed, bonded, and insured.
                </p>
</div>
<div className="grid grid-cols-2 gap-12">
<div className="space-y-4">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="tel:5551234567">(555) 123-4567</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="mailto:hello@securepower.com">hello@securepower.com</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 text-xs text-slate-400 flex justify-between items-center">
<span>© 2023 SecurePower Services Inc.</span>
<span>Electrician Lic #12345</span>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 md:hidden z-40">
<a className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white font-medium py-3.5 rounded-lg shadow-sm" href="#quote">
<iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
            Request Free Quote
        </a>
</div>

    </>
  );
}
