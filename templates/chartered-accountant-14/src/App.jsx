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



        // Mobile Menu
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => { menu.classList.toggle('hidden'); });
        menu.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { menu.classList.add('hidden'); }); });
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex flex-col justify-center cursor-pointer group">
<a className="text-xl tracking-tighter font-semibold text-slate-900 leading-none group-hover:text-teal-700 transition-colors" href="#">
                        PATEL PAREKH &amp; ASSOCIATES
                    </a>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium group-hover:text-teal-600 transition-colors">Chartered Accountants</span>
</div>
<nav className="hidden lg:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors" href="#industries">Industries</a>
<a className="bg-slate-900 hover:bg-teal-700 text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-all shadow-sm" href="#contact">
                        Book Consultation
                    </a>
</nav>
<div className="lg:hidden">
<button className="text-slate-900 hover:text-teal-700 focus:outline-none" id="mobile-menu-btn">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
<div className="hidden lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50" href="#home">Home</a>
<a className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50" href="#about">About</a>
<a className="block px-3 py-3 text-base font-medium text-slate-900 hover:bg-slate-50" href="#services">Services</a>
<a className="block px-3 py-3 text-base font-medium text-teal-700 font-semibold" href="#contact">Book Consultation</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-slate-200 bg-white" id="home">
<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-teal-50/50 via-transparent to-slate-50/50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="fade-in-up max-w-2xl">
<div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 mb-6 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">CA Firm • Est. 2010</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Strategic Financial <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-500">Intelligence.</span>
</h1>
<p className="text-lg text-slate-500 font-light mb-8 leading-relaxed max-w-lg">
                        We transform complex regulatory requirements into streamlined growth strategies for startups, SMEs, and manufacturing units across India.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-sm font-medium rounded-sm shadow-sm text-white bg-slate-900 hover:bg-teal-700 transition-all group" href="#contact">
                            Schedule Audit
                            <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-200 text-sm font-medium rounded-sm text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm" href="#services">
                            View Services
                        </a>
</div>
<div className="mt-10 flex items-center gap-6 text-xs text-slate-400 font-medium tracking-wide uppercase">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:shield-check"></span> ICAI Registered</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users"></span> 500+ Clients</span>
</div>
</div>

<div className="relative lg:h-auto h-64 w-full flex items-center justify-center fade-in-up delay-100">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-50/50 blur-3xl rounded-full -z-10"></div>

<svg className="w-full h-full max-w-lg drop-shadow-xl" fill="none" viewbox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">

<rect className="shadow-sm" fill="white" height="320" rx="8" stroke="#e2e8f0" strokeWidth="1" width="420" x="40" y="40"></rect>

<circle cx="65" cy="65" fill="#cbd5e1" r="4"></circle>
<circle cx="80" cy="65" fill="#cbd5e1" r="4"></circle>
<circle cx="95" cy="65" fill="#cbd5e1" r="4"></circle>

<line stroke="#f1f5f9" strokeWidth="1" x1="40" x2="460" y1="90" y2="90"></line>

<rect fill="#f1f5f9" height="10" rx="2" width="80" x="60" y="110"></rect>
<rect fill="#f8fafc" height="8" rx="2" width="60" x="60" y="130"></rect>
<rect fill="#f8fafc" height="8" rx="2" width="60" x="60" y="145"></rect>
<rect fill="#f8fafc" height="8" rx="2" width="60" x="60" y="160"></rect>

<rect fill="#f8fafc" height="180" rx="4" stroke="#f1f5f9" width="280" x="160" y="110"></rect>

<line stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1" x1="180" x2="420" y1="260" y2="260"></line>
<line stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1" x1="180" x2="420" y1="220" y2="220"></line>
<line stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="1" x1="180" x2="420" y1="180" y2="180"></line>

<path d="M180 260 L 220 240 L 260 250 L 300 190 L 340 210 L 380 160 L 420 140" stroke="#0f766e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>

<path d="M180 260 L 220 240 L 260 250 L 300 190 L 340 210 L 380 160 L 420 140 V 260 H 180 Z" fill="url(#gradient-teal)" opacity="0.1"></path>

<g transform="translate(320, 240)">
<rect className="shadow-lg" fill="white" height="60" rx="4" stroke="#e2e8f0" strokeWidth="1" width="120"></rect>
<rect fill="#ccfbf1" height="24" rx="4" width="24" x="15" y="15"></rect>
<path d="M27 22 L22 32 L32 32 L27 22" fill="#0f766e"></path> 
<rect fill="#cbd5e1" height="6" rx="2" width="50" x="50" y="18"></rect>
<rect fill="#e2e8f0" height="6" rx="2" width="30" x="50" y="32"></rect>
</g>

<g transform="translate(20, 280)">
<rect className="shadow-lg" fill="white" height="50" rx="4" stroke="#e2e8f0" strokeWidth="1" width="100"></rect>
<circle cx="25" cy="25" fill="none" r="8" stroke="#10b981" strokeWidth="2"></circle>
<path d="M21 25 L24 28 L29 22" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<rect fill="#64748b" height="6" rx="2" width="40" x="45" y="22"></rect>
</g>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="gradient-teal" x1="180" x2="180" y1="140" y2="260">
<stop stop-color="#14b8a6"></stop>
<stop offset="1" stop-color="#14b8a6" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">

<div className="bg-slate-50 border border-slate-100 rounded-sm p-10 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-slate opacity-30"></div>
<svg className="w-full h-auto drop-shadow-md" fill="none" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">

<path d="M50 200 L 200 250 L 350 200 L 200 150 Z" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"></path>

<path d="M50 180 L 200 230 L 350 180 L 200 130 Z" fill="white" stroke="#cbd5e1" strokeWidth="1"></path>
<path d="M50 180 V 200 M350 180 V 200 M200 230 V 250" stroke="#cbd5e1" strokeWidth="1"></path>

<path d="M50 160 L 200 210 L 350 160 L 200 110 Z" fill="white" stroke="#e2e8f0" strokeWidth="1"></path>
<path d="M50 160 V 180 M350 160 V 180 M200 210 V 230" stroke="#cbd5e1" strokeWidth="1"></path>

<g transform="translate(160, 80)">
<rect fill="#0f766e" height="80" rx="2" transform="skewY(10)" width="60" x="0" y="0"></rect>
<rect fill="#14b8a6" height="80" rx="2" transform="skewY(10)" width="60" x="5" y="5"></rect>
<rect fill="white" height="80" rx="2" stroke="#cbd5e1" transform="skewY(10)" width="60" x="10" y="10"></rect>

<line stroke="#cbd5e1" strokeWidth="2" x1="20" x2="60" y1="25" y2="30"></line>
<line stroke="#cbd5e1" strokeWidth="2" x1="20" x2="60" y1="35" y2="40"></line>
<line stroke="#cbd5e1" strokeWidth="2" x1="20" x2="50" y1="45" y2="50"></line>

<circle cx="65" cy="80" fill="#0f766e" r="12" stroke="white" strokeWidth="2"></circle>
<path d="M59 80 L 63 84 L 71 76" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</g>

<path d="M90 220 L 90 260" stroke="#cbd5e1" stroke-dasharray="4 4"></path>
<circle cx="90" cy="260" fill="#cbd5e1" r="3"></circle>
<path d="M310 220 L 310 260" stroke="#cbd5e1" stroke-dasharray="4 4"></path>
<circle cx="310" cy="260" fill="#cbd5e1" r="3"></circle>
</svg>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-6">Built on Ethics, Driven by Growth</h2>
<p className="text-slate-600 leading-relaxed mb-6 font-light text-lg">
                        Patel Parekh &amp; Associates combines the rigour of a large consultancy with the agility of a modern tech-forward firm. We replace chaos with structure.
                    </p>
<p className="text-slate-600 leading-relaxed mb-8">
                        Whether you are a salaried individual, a scaling startup, or an established manufacturer, our systems ensure your focus remains on business, not paperwork.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="bg-teal-50 text-teal-700 p-1 rounded-full">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
<span className="text-slate-700">Proactive tax planning, not just reactive filing.</span>
</li>
<li className="flex items-start gap-3">
<span className="bg-teal-50 text-teal-700 p-1 rounded-full">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
<span className="text-slate-700">Digital-first compliance with timely reminders.</span>
</li>
<li className="flex items-start gap-3">
<span className="bg-teal-50 text-teal-700 p-1 rounded-full">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
<span className="text-slate-700">Transparent advisory—knowing the 'why' behind the numbers.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-teal-700 font-semibold tracking-wider uppercase text-xs">Our Expertise</span>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mt-3 mb-4">Comprehensive Financial Solutions</h2>
<p className="text-slate-500 font-light">End-to-end support for your personal and business finance needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:calculator" data-width="120"></span>
</div>
<div className="h-10 w-10 bg-slate-50 rounded-sm flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors relative z-10">
<span className="iconify text-slate-700 group-hover:text-teal-700" data-icon="lucide:calculator" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 relative z-10">Taxation Services</h3>
<ul className="space-y-2 text-sm text-slate-500 relative z-10">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>ITR Filing (Individuals &amp; Biz)</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Tax Planning &amp; Advisory</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>TDS / TCS Compliance</li>
</ul>
</div>
<div className="bg-white p-8 rounded-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:percent" data-width="120"></span>
</div>
<div className="h-10 w-10 bg-slate-50 rounded-sm flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors relative z-10">
<span className="iconify text-slate-700 group-hover:text-teal-700" data-icon="lucide:percent" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 relative z-10">GST &amp; Indirect Tax</h3>
<ul className="space-y-2 text-sm text-slate-500 relative z-10">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>GST Registration</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Monthly Returns</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Audit &amp; Reconciliation</li>
</ul>
</div>
<div className="bg-white p-8 rounded-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:file-search" data-width="120"></span>
</div>
<div className="h-10 w-10 bg-slate-50 rounded-sm flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors relative z-10">
<span className="iconify text-slate-700 group-hover:text-teal-700" data-icon="lucide:file-search" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 relative z-10">Audit &amp; Assurance</h3>
<ul className="space-y-2 text-sm text-slate-500 relative z-10">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Statutory Audits</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Tax Audits (44AB)</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Internal Process Reviews</li>
</ul>
</div>
<div className="bg-white p-8 rounded-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:rocket" data-width="120"></span>
</div>
<div className="h-10 w-10 bg-slate-50 rounded-sm flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors relative z-10">
<span className="iconify text-slate-700 group-hover:text-teal-700" data-icon="lucide:rocket" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 relative z-10">Business Setup</h3>
<ul className="space-y-2 text-sm text-slate-500 relative z-10">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Incorporation (Pvt Ltd, LLP)</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>MSME &amp; Shop Act</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Structure Consultation</li>
</ul>
</div>
<div className="bg-white p-8 rounded-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:scale" data-width="120"></span>
</div>
<div className="h-10 w-10 bg-slate-50 rounded-sm flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors relative z-10">
<span className="iconify text-slate-700 group-hover:text-teal-700" data-icon="lucide:scale" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 relative z-10">Company Law (ROC)</h3>
<ul className="space-y-2 text-sm text-slate-500 relative z-10">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Annual Filings</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Director KYC</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Statutory Registers</li>
</ul>
</div>
<div className="bg-white p-8 rounded-sm border border-slate-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:briefcase" data-width="120"></span>
</div>
<div className="h-10 w-10 bg-slate-50 rounded-sm flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-teal-50 group-hover:border-teal-100 transition-colors relative z-10">
<span className="iconify text-slate-700 group-hover:text-teal-700" data-icon="lucide:briefcase" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 relative z-10">CFO Advisory</h3>
<ul className="space-y-2 text-sm text-slate-500 relative z-10">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Financial Projections</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Virtual CFO Services</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-teal-500 rounded-full"></span>Funding Compliance</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="industries">

<svg className="absolute top-0 right-0 opacity-10 pointer-events-none" height="400" viewbox="0 0 400 400" width="400">
<circle cx="200" cy="200" fill="none" r="100" stroke="white" strokeWidth="1"></circle>
<circle cx="200" cy="200" fill="none" r="150" stroke="white" stroke-dasharray="10 10" strokeWidth="1"></circle>
<line stroke="white" strokeWidth="1" x1="200" x2="200" y1="0" y2="400"></line>
<line stroke="white" strokeWidth="1" x1="0" x2="400" y1="200" y2="200"></line>
</svg>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<span className="text-teal-500 font-semibold tracking-wider uppercase text-xs">Industries</span>
<h2 className="text-3xl font-medium tracking-tight mt-3">Tailored Solutions for Every Sector</h2>
</div>
<a className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors" href="#contact">
                    Discuss specific needs <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 border border-slate-700 bg-slate-800/50 rounded-sm hover:bg-slate-800 transition-colors backdrop-blur-sm">
<span className="iconify text-teal-500 mb-4" data-icon="lucide:zap" data-width="24"></span>
<h4 className="text-lg font-medium mb-2">Startups &amp; Tech</h4>
<p className="text-sm text-slate-400 font-light">Funding compliance, ESOPs, and rapid scaling structures.</p>
</div>
<div className="p-6 border border-slate-700 bg-slate-800/50 rounded-sm hover:bg-slate-800 transition-colors backdrop-blur-sm">
<span className="iconify text-teal-500 mb-4" data-icon="lucide:factory" data-width="24"></span>
<h4 className="text-lg font-medium mb-2">Manufacturing</h4>
<p className="text-sm text-slate-400 font-light">Inventory valuation, GST input tax credits, and cost audits.</p>
</div>
<div className="p-6 border border-slate-700 bg-slate-800/50 rounded-sm hover:bg-slate-800 transition-colors backdrop-blur-sm">
<span className="iconify text-teal-500 mb-4" data-icon="lucide:stethoscope" data-width="24"></span>
<h4 className="text-lg font-medium mb-2">Healthcare</h4>
<p className="text-sm text-slate-400 font-light">Doctors &amp; clinics needing efficient book-keeping and professional tax filings.</p>
</div>
<div className="p-6 border border-slate-700 bg-slate-800/50 rounded-sm hover:bg-slate-800 transition-colors backdrop-blur-sm">
<span className="iconify text-teal-500 mb-4" data-icon="lucide:globe-2" data-width="24"></span>
<h4 className="text-lg font-medium mb-2">Exports &amp; NRI</h4>
<p className="text-sm text-slate-400 font-light">FEMA compliance, repatriation, and double taxation avoidance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-teal-700 font-semibold tracking-wider uppercase text-xs">Leadership</span>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mt-3">The Partners</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">

<div className="bg-slate-50 p-8 rounded-sm border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left hover:border-teal-200 transition-all">

<div className="h-24 w-24 flex-shrink-0">
<svg className="w-full h-full drop-shadow-sm" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="100" rx="50" stroke="#e2e8f0" strokeWidth="1" width="100"></rect>
<path d="M50 25 C 40 25 32 33 32 43 C 32 53 40 61 50 61 C 60 61 68 53 68 43 C 68 33 60 25 50 25 Z" fill="#f1f5f9"></path>
<path d="M25 80 C 25 68 35 63 50 63 C 65 63 75 68 75 80 V 100 H 25 V 80 Z" fill="#cbd5e1"></path>
</svg>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">CA Harsh Patel</h3>
<p className="text-teal-700 text-sm font-medium mb-3">Partner, Chartered Accountant</p>
<p className="text-slate-500 text-sm leading-relaxed">
                            Specializes in Direct Taxation, SME advisory, and GST framework implementation. Passionate about helping startups navigate initial compliance hurdles.
                        </p>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-sm border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left hover:border-teal-200 transition-all">

<div className="h-24 w-24 flex-shrink-0">
<svg className="w-full h-full drop-shadow-sm" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="100" rx="50" stroke="#e2e8f0" strokeWidth="1" width="100"></rect>
<path d="M50 25 C 40 25 32 33 32 43 C 32 53 40 61 50 61 C 60 61 68 53 68 43 C 68 33 60 25 50 25 Z" fill="#f1f5f9"></path>
<path d="M25 80 C 25 68 35 63 50 63 C 65 63 75 68 75 80 V 100 H 25 V 80 Z" fill="#cbd5e1"></path>

<path d="M38 43 H 62" stroke="#94a3b8" strokeWidth="1.5"></path>
<circle cx="42" cy="43" fill="none" r="5" stroke="#94a3b8" strokeWidth="1.5"></circle>
<circle cx="58" cy="43" fill="none" r="5" stroke="#94a3b8" strokeWidth="1.5"></circle>
</svg>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">CA Prerit Parekh</h3>
<p className="text-teal-700 text-sm font-medium mb-3">Partner, Chartered Accountant</p>
<p className="text-slate-500 text-sm leading-relaxed">
                            Focuses on Statutory Audits, Corporate Law compliance, and Business Restructuring. Brings extensive experience in handling complex regulatory matters.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-sm border border-slate-200 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900 hover:text-teal-700 transition-colors">
<span>What documents are required for ITR filing?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-500 text-sm px-5 pb-5 leading-relaxed border-t border-slate-100 pt-3">
                        Generally, you need your PAN, Aadhaar, Form 16 (for salaried), bank statements, and details of investments (Section 80C, 80D, etc.). For businesses, balance sheets and P&amp;L statements are required.
                    </div>
</details>
<details className="group bg-white rounded-sm border border-slate-200 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900 hover:text-teal-700 transition-colors">
<span>Do you handle GST for small businesses?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-500 text-sm px-5 pb-5 leading-relaxed border-t border-slate-100 pt-3">
                        Yes, we specialize in SME compliance. We handle GST registration, monthly/quarterly filings, and reconciliation to ensure you never miss a deadline.
                    </div>
</details>
<details className="group bg-white rounded-sm border border-slate-200 shadow-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-900 hover:text-teal-700 transition-colors">
<span>Can you assist NRIs with Indian tax filing?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<div className="text-slate-500 text-sm px-5 pb-5 leading-relaxed border-t border-slate-100 pt-3">
                        Absolutely. We assist NRIs with determining residential status, filing returns for Indian income (rent, capital gains, interest), and DTAA benefits.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="contact">

<svg className="absolute bottom-0 left-0 w-full h-64 opacity-[0.03] pointer-events-none" preserveaspectratio="none" viewbox="0 0 1440 320">
<path d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,229.3C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0Z" fill="#0f766e" fillOpacity="1"></path>
</svg>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<span className="text-teal-700 font-semibold tracking-wider uppercase text-xs">Get in Touch</span>
<h2 className="text-4xl font-medium text-slate-900 tracking-tight mt-3 mb-6">Let’s Talk About Your Compliance</h2>
<p className="text-slate-500 font-light text-lg mb-10">
                        Reach out for ITR, GST, business incorporation, or general financial advisory. We are here to simplify your compliance journey.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-50 rounded-sm border border-slate-100">
<span className="iconify text-teal-700" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Office</h4>
<p className="text-slate-500 text-sm mt-1">402, Business Hub, Navrangpura,<br/>Ahmedabad, Gujarat - 380009</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-50 rounded-sm border border-slate-100">
<span className="iconify text-teal-700" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Email</h4>
<a className="text-slate-500 text-sm mt-1 hover:text-teal-700" href="mailto:info@ppa-ca.in">info@ppa-ca.in</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm border border-slate-200 shadow-lg shadow-slate-200/50">
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-sm focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-sm focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm" id="phone" placeholder="+91 00000 00000" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-sm focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm" id="email" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="type">Requirement Type</label>
<div className="relative">
<select className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-sm focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent outline-none transition-all text-sm text-slate-600 appearance-none" id="type">
<option>Income Tax Filing (ITR)</option>
<option>GST Registration/Filing</option>
<option>Business Incorporation</option>
<option>Audit &amp; Assurance</option>
<option>General Consultation</option>
</select>
<span className="absolute right-4 top-3 pointer-events-none text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2 bg-slate-50 border border-slate-300 rounded-sm focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm" id="message" placeholder="Describe your requirements..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-sm hover:bg-teal-700 transition-colors shadow-sm flex justify-center items-center gap-2 group" type="submit">
                            Send Message
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:send" data-width="16"></span>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-8">
<div className="mb-4 md:mb-0 text-center md:text-left">
<h3 className="text-white text-lg font-semibold tracking-tight">Patel Parekh &amp; Associates</h3>
<p className="text-xs text-slate-500 mt-1">Chartered Accountants | Est. 2010</p>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 Patel Parekh &amp; Associates. All Rights Reserved.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
