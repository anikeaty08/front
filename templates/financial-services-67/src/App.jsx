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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex items-center gap-2 group" href="#home">
<div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
<span className="text-white font-semibold text-sm tracking-tighter">MM</span>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900 hidden sm:block">Macem Maisha</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-200 hover:shadow-lg hover:shadow-slate-900/20" href="#contact">
                        Get Consultation
                    </a>

<button className="md:hidden p-2 text-slate-600 hover:text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-32 lg:pb-40 border-b border-slate-200/50" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-slate-100 to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/50 text-amber-700 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    Trusted Global Financial Partner
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto mb-6 leading-tight">
                    Trusted Financial Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Your Future</span>
</h1>
<p className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light">
                    Macem Maisha provides elite financial consulting, investment advisory, and comprehensive wealth management to secure and grow your legacy.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-slate-900/10 gap-2" href="#contact">
                        Get Started
                        <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm" href="#services">
                        Explore Services
                    </a>
</div>

<div className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900">98%</span>
<span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Client Retention</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900">$2B+</span>
<span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Assets Advised</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900">15+</span>
<span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Years Experience</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900">24/7</span>
<span className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Dedicated Support</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Expertise</h2>
<p className="text-base text-slate-500 font-light">Tailored financial strategies designed to protect assets, mitigate risk, and accelerate your business and personal growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-slate-700 group-hover:text-amber-500 transition-colors duration-300" height="24" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Financial Consulting</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light mb-6">Strategic planning and restructuring to optimize your corporate financial health and operational efficiency.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors" href="#contact">
                            Learn more <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-slate-700 group-hover:text-amber-500 transition-colors duration-300" height="24" icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Investment Advisory</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light mb-6">Data-driven portfolio management and market analysis to maximize returns while managing exposure.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors" href="#contact">
                            Learn more <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-slate-700 group-hover:text-amber-500 transition-colors duration-300" height="24" icon="solar:safe-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Wealth Management</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light mb-6">Holistic wealth preservation, estate planning, and legacy building for high-net-worth individuals.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors" href="#contact">
                            Learn more <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-900/5 transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors duration-300">
<iconify-icon className="text-slate-700 group-hover:text-amber-500 transition-colors duration-300" height="24" icon="solar:case-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Business Support</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light mb-6">Corporate structuring, risk management, and strategic guidance to navigate complex market dynamics.</p>
<a className="inline-flex items-center text-sm font-medium text-slate-900 group-hover:text-amber-600 transition-colors" href="#contact">
                            Learn more <iconify-icon className="ml-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Building Legacies with Integrity and Insight</h2>
<div className="space-y-6 text-base text-slate-600 font-light">
<p>
                                At Macem Maisha Business of Financial Services Limited, we understand that true wealth is not just accumulated, but carefully constructed and preserved over generations.
                            </p>
<p>
                                Founded on the principles of unyielding integrity and analytical rigor, our mission is to empower corporations and individuals with the clarity needed to make profound financial decisions in an ever-evolving global market.
                            </p>
<div className="pt-4 border-t border-slate-100">
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-wider mb-2">Our Vision</h4>
<p className="text-sm text-slate-500">To be the undisputed benchmark for financial excellence, fostering sustainable growth and absolute security for our partners worldwide.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<iconify-icon className="text-amber-500 mb-4" height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Trust &amp; Security</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light">Uncompromising safeguarding of your assets and sensitive information.</p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<iconify-icon className="text-amber-500 mb-4" height="24" icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Absolute Integrity</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light">Transparent, ethical practices forming the foundation of every client relationship.</p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<iconify-icon className="text-amber-500 mb-4" height="24" icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Sustainable Growth</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light">Forward-thinking strategies focused on long-term prosperity and resilience.</p>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
<iconify-icon className="text-amber-500 mb-4" height="24" icon="solar:user-speak-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Professionalism</h4>
<p className="text-xs text-slate-500 leading-relaxed font-light">Elite expertise delivered with precision, discretion, and dedication.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-5">

<div className="lg:col-span-2 bg-slate-900 p-10 lg:p-12 text-white relative overflow-hidden">

<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Get in Touch</h3>
<p className="text-sm text-slate-400 font-light mb-10">Initiate a confidential conversation with our advisory team to discuss your financial objectives.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-400" height="20" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1">Corporate Headquarters</h4>
<p className="text-xs text-slate-400 font-light">100 Financial District Blvd,<br/>Suite 4500<br/>Global Metropolis, GM 10001</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-400" height="20" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1">Direct Line</h4>
<p className="text-xs text-slate-400 font-light">+1 (800) 555-0199</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-400" height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium mb-1">Email Inquiry</h4>
<p className="text-xs text-slate-400 font-light">advisory@macemmaisha.com</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10 lg:p-12">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="firstName">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="firstName" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="lastName">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="email">Corporate Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="email" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="service">Area of Interest</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-slate-600" id="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="consulting">Financial Consulting</option>
<option value="advisory">Investment Advisory</option>
<option value="wealth">Wealth Management</option>
<option value="support">Business Support</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors resize-none" id="message" placeholder="How can we assist you?" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white rounded-lg px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" type="button">
                                    Submit Inquiry
                                </button>
<p className="text-xs text-slate-400 text-center font-light">By submitting, you agree to our confidential handling of your data.</p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-100 pb-12">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#home">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center">
<span className="text-white font-semibold text-xs tracking-tighter">MM</span>
</div>
<span className="font-semibold text-sm tracking-tight text-slate-900">Macem Maisha</span>
</a>
<p className="text-xs text-slate-500 font-light leading-relaxed">
                        Premier business and financial services empowering growth, securing wealth, and structuring legacies globally.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-xs text-slate-500 font-light">
<li><a className="hover:text-amber-600 transition-colors" href="#services">Financial Consulting</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#services">Investment Advisory</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#services">Wealth Management</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#services">Business Support</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-xs text-slate-500 font-light">
<li><a className="hover:text-amber-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Leadership</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-slate-500 font-light">
<li><a className="hover:text-amber-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-amber-600 transition-colors" href="#">Regulatory Disclosures</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-light">
                    © 2023 Macem Maisha Business of Financial Services Ltd. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:global-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
