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



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Knowatics<span className="text-slate-500 font-normal">Engineers</span></span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#why-us">Why Us</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-sm" href="#contact">
                        Contact Us
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none p-2" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-200" id="mobile-menu">
<div className="px-4 pt-2 pb-4 space-y-1">
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" href="#about">About</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" href="#services">Services</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50" href="#why-us">Why Us</a>
<a className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700" href="#contact">Get a Quote</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 bg-grid-slate -z-10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Leading Safety &amp; Engineering Solutions
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto">
                Building a Safer Future with <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Precision Engineering</span>
</h1>
<p className="text-base sm:text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Knowatics Engineers delivers certified fire safety systems, advanced CCTV surveillance, and industrial fabrication services tailored to protect your assets and people.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md hover:shadow-lg" href="#contact">
                    Request Consultation
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all" href="#services">
                    Explore Services
                </a>
</div>

<div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">500+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Projects Completed</p>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">98%</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Safety Compliance</p>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">24/7</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Expert Support</p>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">10+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Years Experience</p>
</div>
</div>
</div>
</section>

<section className="py-10 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm font-medium text-slate-500 mb-8">Trusted by industry leaders across sectors</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-lg font-semibold text-slate-800"><span className="iconify" data-icon="lucide:factory" data-width="20"></span> INDUS-TECH</div>
<div className="flex items-center gap-2 text-lg font-semibold text-slate-800"><span className="iconify" data-icon="lucide:building-2" data-width="20"></span> URBAN BUILD</div>
<div className="flex items-center gap-2 text-lg font-semibold text-slate-800"><span className="iconify" data-icon="lucide:zap" data-width="20"></span> POWERGRID</div>
<div className="flex items-center gap-2 text-lg font-semibold text-slate-800"><span className="iconify" data-icon="lucide:shield" data-width="20"></span> SECURECORP</div>
<div className="flex items-center gap-2 text-lg font-semibold text-slate-800"><span className="iconify" data-icon="lucide:landmark" data-width="20"></span> APEX ENG</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
<div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
<span className="iconify text-blue-600" data-icon="lucide:award" data-width="24"></span>
</div>
<div>
<h3 className="font-medium text-slate-900">Certified Excellence</h3>
<p className="text-sm text-slate-500 mt-1">Adhering to ISO and National Safety Standards.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
<span className="iconify text-blue-600" data-icon="lucide:users" data-width="24"></span>
</div>
<div>
<h3 className="font-medium text-slate-900">Expert Team</h3>
<p className="text-sm text-slate-500 mt-1">Engineers with decades of field experience.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100">
<span className="iconify text-blue-600" data-icon="lucide:history" data-width="24"></span>
</div>
<div>
<h3 className="font-medium text-slate-900">Rapid Response</h3>
<p className="text-sm text-slate-500 mt-1">Dedicated support for critical infrastructure.</p>
</div>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase mb-2">About Us</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Engineering Safety &amp; Reliability Since Inception</h3>
<p className="text-slate-600 mb-6 leading-relaxed">
                        At Knowatics Engineers, we believe that safety is not just a requirement—it's an engineering discipline. We specialize in comprehensive industrial solutions ranging from fire detection systems to custom fabrication.
                    </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                        Our mission is to empower businesses with robust infrastructure and safety protocols. Whether upgrading your CCTV surveillance or conducting a detailed safety audit, our team ensures precision, compliance, and peace of mind.
                    </p>
<a className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 transition-colors group" href="#services">
                        Discover our capabilities 
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase mb-2">Our Services</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Engineering Solutions</h3>
<p className="text-slate-600">Tailored services designed to meet modern industrial challenges with efficiency and precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:flame" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Fire Safety Systems</h4>
<p className="text-sm text-slate-600 mb-4">Installation and maintenance of fire alarms, hydrants, and suppression systems ensuring full compliance.</p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" href="#contact">Learn more <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span></a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:cctv" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">CCTV &amp; Surveillance</h4>
<p className="text-sm text-slate-600 mb-4">Advanced monitoring solutions with remote access, HD recording, and AI-based analytics for security.</p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" href="#contact">Learn more <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span></a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:clipboard-check" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Safety Audits</h4>
<p className="text-sm text-slate-600 mb-4">Comprehensive risk assessment and safety audits to identify hazards and implement corrective measures.</p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" href="#contact">Learn more <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span></a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Fabrication Services</h4>
<p className="text-sm text-slate-600 mb-4">Custom structural fabrication, welding, and industrial assembly using high-quality materials.</p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" href="#contact">Learn more <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span></a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:cpu" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Electronics Services</h4>
<p className="text-sm text-slate-600 mb-4">Maintenance, repair, and installation of industrial electronic controllers and automation systems.</p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" href="#contact">Learn more <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span></a>
</div>

<div className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:settings" data-width="24"></span>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Industrial Maintenance</h4>
<p className="text-sm text-slate-600 mb-4">Scheduled preventative maintenance for machinery and facility infrastructure to minimize downtime.</p>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity" href="#contact">Learn more <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span></a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="why-us">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase mb-2">Why Choose Us</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Reliability Driven by Expertise</h3>
<p className="text-slate-600 mb-8">
                        Choosing Knowatics means partnering with a team that values safety and precision above all else. We combine technical knowledge with customer-centric service.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="iconify text-blue-600 flex-shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-700">Certified Professional Engineers</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-blue-600 flex-shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-700">Adherence to National Safety Standards</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-blue-600 flex-shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-700">Cost-Effective &amp; Timely Delivery</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-blue-600 flex-shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-slate-700">Comprehensive After-Sales Support</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100">
<blockquote className="text-slate-600 italic">
                            "Knowatics upgraded our entire fire safety system efficiently. Their attention to detail gives us confidence every day."
                        </blockquote>
<div className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">JD</div>
<div>
<p className="text-sm font-semibold text-slate-900">John Doe</p>
<p className="text-xs text-slate-500">Plant Manager, IndusTech</p>
</div>
</div>
</div>
</div>
<div className="relative bg-slate-50 rounded-2xl p-2 border border-slate-100">
<div className="h-full w-full bg-slate-200 rounded-xl overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-blue-600 opacity-20 mb-4 mx-auto" data-icon="lucide:shield-check" data-width="120"></span>
</div>
</div>

<div className="absolute top-8 right-8 bg-white p-4 rounded-lg shadow-lg max-w-[200px] animate-pulse">
<div className="h-2 bg-slate-200 rounded w-1/2 mb-2"></div>
<div className="h-2 bg-slate-200 rounded w-full mb-1"></div>
<div className="h-2 bg-slate-200 rounded w-3/4"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-600 blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-600 blur-3xl opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-base font-semibold text-blue-400 tracking-wide uppercase mb-2">Get in Touch</h2>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-6">Ready to secure your facility?</h3>
<p className="text-slate-400 mb-8 text-lg">
                        Contact us today for a free consultation or audit. Our team is ready to assist with your engineering needs.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
<span className="iconify text-blue-400" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Office Location</p>
<p className="text-sm text-slate-400 mt-1">123 Industrial Area, Phase II<br/>New Engineering Hub, City - 560001</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
<span className="iconify text-blue-400" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Phone</p>
<p className="text-sm text-slate-400 mt-1">+91 98765 43210</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
<span className="iconify text-blue-400" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Email</p>
<p className="text-sm text-slate-400 mt-1">info@knowatics.com</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl">
<form action="#" className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border" id="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email Address</label>
<input className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border" id="email" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="service">Service Interest</label>
<div className="relative">
<select className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border appearance-none bg-white" id="service">
<option>Fire Safety</option>
<option>CCTV Installation</option>
<option>Safety Audit</option>
<option>Fabrication</option>
<option>Electronics</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
<textarea className="block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border" id="message" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="16"></span>
</div>
<span className="text-base font-bold tracking-tight text-slate-900">Knowatics</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-4">
                        Professional engineering services dedicated to industrial safety, security, and fabrication excellence.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-600" href="#about">About Us</a></li>
<li><a className="hover:text-blue-600" href="#careers">Careers</a></li>
<li><a className="hover:text-blue-600" href="#contact">Contact</a></li>
<li><a className="hover:text-blue-600" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-600" href="#">Fire Safety</a></li>
<li><a className="hover:text-blue-600" href="#">CCTV Systems</a></li>
<li><a className="hover:text-blue-600" href="#">Fabrication</a></li>
<li><a className="hover:text-blue-600" href="#">Electronics</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-blue-600" href="#">Blog</a></li>
<li><a className="hover:text-blue-600" href="#">Case Studies</a></li>
<li><a className="hover:text-blue-600" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2023 Knowatics Engineers. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs text-slate-400">
<span className="iconify" data-icon="lucide:globe" data-width="12"></span> English
                </div>
</div>
</div>
</footer>



    </>
  );
}
