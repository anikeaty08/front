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



        // Simple toggle logic for mobile menu
        const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
        const menu = document.getElementById('navbar-sticky');
        
        toggleBtn.addEventListener('click', () => {
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b backdrop-blur-md border-neutral-100 bg-white/80">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-bold tracking-tighter font-sans text-neutral-900">DTS</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-200 shadow-sm hover:shadow-md font-sans text-white bg-neutral-900 hover:bg-neutral-800" href="#contact">
                    Get Quote
                </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-neutral-200 hover:bg-neutral-100" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only font-sans">Open main menu</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent border-neutral-100 bg-neutral-50">
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-brand-600 md:p-0 transition-colors duration-200 font-sans text-neutral-600 hover:bg-neutral-100" href="#services">Services</a>
</li>
<li className="">
<a className="block md:hover:bg-transparent md:hover:text-brand-600 md:p-0 transition-colors duration-200 hover:bg-neutral-100 text-neutral-600 rounded pt-2 pr-3 pb-2 pl-3" href="#about">Solutions</a>
</li>
<li>
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-brand-600 md:p-0 transition-colors duration-200 font-sans text-neutral-600 hover:bg-neutral-100" href="#services">Projects</a>
</li>
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-brand-600 md:p-0 transition-colors duration-200 font-sans text-neutral-600 hover:bg-neutral-100" href="#contact">Contact</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
<div className="absolute -top-[30%] -right-[10%] w-[700px] h-[700px] rounded-full blur-3xl opacity-50 bg-indigo-100/60"></div>
<div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-3xl opacity-50 bg-neutral-100"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: '0.3'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-8 bg-white border-neutral-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wide font-sans text-neutral-600">Next-Gen Industrial Solutions</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6 leading-[1.1] font-manrope font-medium text-neutral-900">
                Engineering the Future <br className="hidden md:block"/>
<span className="font-manrope font-medium text-neutral-400">of Infrastructure.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-500 max-w-2xl mr-auto mb-10 ml-auto">
                Comprehensive supply and service for Fire &amp; Safety, Power Generation, IoT, HVAC, and Solar systems. Building resilient environments for tomorrow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 font-sans bg-neutral-900 text-white hover:bg-neutral-800" href="#contact">
                    Start a Project
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border rounded-lg font-medium transition-all flex items-center justify-center gap-2 font-sans bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300" href="#services">
                    Explore Services
                </a>
</div>

<div className="mt-16 pt-8 border-t border-neutral-100">
<p className="text-xs font-medium uppercase tracking-widest mb-6 font-sans text-neutral-400">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle> <rect height="20" width="20" x="35" y="5"></rect> <path d="M70,25 L80,5 L90,25"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><rect height="10" width="30" x="10" y="10"></rect> <circle cx="60" cy="15" r="8"></circle> <rect height="20" width="10" x="80" y="5"></rect></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,25 L20,5 L30,25 M40,5 L40,25 M50,5 L70,5 M60,5 L60,25 M80,5 L90,15 L80,25" stroke="currentColor" strokeWidth="3"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-manrope font-medium text-neutral-900">Integrated Capabilities</h2>
<p className="text-neutral-500 text-lg max-w-xl font-sans">End-to-end solutions combining hardware supply with expert maintenance.</p>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="service-banner relative w-full rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl group h-[320px] md:h-[400px] bg-white border-neutral-200">

<div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 opacity-80"></div>
<div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute right-[-10%] bottom-[-20%] opacity-5 text-orange-600 transition-transform duration-700 group-hover:scale-105">
<svg fill="currentColor" height="400" viewbox="0 0 24 24" width="400"><path d="M12 2a1 1 0 0 1 .83.42l9 12a1 1 0 0 1-.83 1.58h-18a1 1 0 0 1-.83-1.58l9-12A1 1 0 0 1 12 2z"></path></svg>
</div>

<div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
<div className="flex justify-between items-start">
<div className="h-14 w-14 rounded-xl flex items-center justify-center border shadow-sm banner-icon transition-transform duration-500 bg-white text-orange-600 border-orange-100">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border bg-white/50 backdrop-blur text-orange-700 border-orange-100">Safety First</span>
</div>
<div className="max-w-2xl">
<h3 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight font-manrope text-neutral-900">Fire &amp; Safety Systems</h3>
<p className="text-neutral-600 text-lg md:text-xl font-light mb-8 max-w-xl">Advanced detection and suppression engineering compliant with international safety standards (NFPA/ISO).</p>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded border bg-white border-neutral-200 text-neutral-600">
<svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Smart Detection
                                </span>
<span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded border bg-white border-neutral-200 text-neutral-600">
<svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Automated Sprinklers
                                </span>
<span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded border bg-white border-neutral-200 text-neutral-600">
<svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Alarm Panels
                                </span>
</div>
</div>
</div>
</div>

<div className="service-banner relative w-full rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl group h-[320px] md:h-[400px] bg-neutral-900 border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 via-neutral-900 to-indigo-950/50"></div>

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="absolute right-[-5%] top-[-10%] opacity-10 text-indigo-500 transition-transform duration-700 group-hover:rotate-12">
<svg fill="none" height="400" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="400"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
<div className="flex justify-between items-start">
<div className="h-14 w-14 rounded-xl flex items-center justify-center border shadow-sm banner-icon transition-transform duration-500 bg-neutral-800 text-indigo-400 border-neutral-700">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 19.5A.5.5 0 0 1 5.5 19h.01a.5.5 0 0 1 .09.99H5.5a.5.5 0 0 1-.5-.49" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border bg-indigo-900/30 text-indigo-300 border-indigo-800">Connected</span>
</div>
<div className="max-w-2xl">
<h3 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight font-manrope">IoT &amp; Automation</h3>
<p className="text-neutral-400 text-lg md:text-xl font-light mb-8 max-w-xl">Smart sensors and centralized monitoring for real-time asset tracking and predictive maintenance.</p>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">
<svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Remote Monitoring
                                </span>
<span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded border border-neutral-700 bg-neutral-800 text-neutral-300">
<svg className="w-4 h-4 mr-2 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Sensor Integration
                                </span>
</div>
</div>
</div>
</div>

<div className="service-banner relative w-full rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl group h-[320px] md:h-[400px] bg-white border-neutral-200">
<div className="absolute inset-0 bg-gradient-to-bl from-yellow-50 via-white to-slate-50 opacity-90"></div>
<div className="absolute left-[-10%] top-[-20%] opacity-5 text-yellow-600 transition-transform duration-700 group-hover:scale-110">
<svg fill="currentColor" height="500" viewbox="0 0 24 24" width="500"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
<div className="flex justify-between items-start">
<div className="h-14 w-14 rounded-xl flex items-center justify-center border shadow-sm banner-icon transition-transform duration-500 bg-white text-yellow-600 border-yellow-100">
<svg className="iconify iconify--lucide" height="28" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border bg-white/50 backdrop-blur text-yellow-700 border-yellow-200">High Availability</span>
</div>
<div className="max-w-2xl">
<h3 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight font-manrope text-neutral-900">Power Generation</h3>
<p className="text-neutral-600 text-lg md:text-xl font-light mb-8 max-w-xl">Reliable energy solutions ranging from industrial generators to UPS systems, ensuring zero downtime.</p>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded border bg-white border-neutral-200 text-neutral-600">
<svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Diesel Generators
                                </span>
<span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded border bg-white border-neutral-200 text-neutral-600">
<svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> UPS Systems
                                </span>
<span className="inline-flex items-center text-sm font-medium px-3 py-1 rounded border bg-white border-neutral-200 text-neutral-600">
<svg className="w-4 h-4 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Maintenance
                                </span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="service-banner relative w-full rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl group h-[350px] bg-white border-neutral-200">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-50 via-white to-blue-50 opacity-90"></div>
<div className="absolute right-[-20%] bottom-[-20%] opacity-10 text-cyan-600 transition-transform duration-700 group-hover:rotate-45">
<svg fill="none" height="300" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="300"><path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0"></path><path d="M12 2v20M2 12h20"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between p-8">
<div className="flex justify-between items-start">
<div className="h-12 w-12 rounded-lg flex items-center justify-center border shadow-sm banner-icon transition-transform duration-500 bg-white text-cyan-600 border-cyan-100">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12V2m0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m0 0c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m0 0c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3m0 0c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight font-manrope text-neutral-900">HVAC Systems</h3>
<p className="text-neutral-600 mb-6 font-light">Climate control engineering for optimal air quality and temperature regulation.</p>
<a className="text-sm font-semibold flex items-center gap-1 transition-colors hover:gap-2 text-cyan-700" href="#contact">Get Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>

<div className="service-banner relative w-full rounded-2xl overflow-hidden border transition-shadow hover:shadow-xl group h-[350px] bg-white border-neutral-200">
<div className="absolute inset-0 bg-gradient-to-tr from-green-50 via-white to-emerald-50 opacity-90"></div>
<div className="absolute left-[-10%] bottom-[-10%] opacity-5 text-emerald-600 transition-transform duration-700 group-hover:scale-105">
<svg fill="currentColor" height="300" viewbox="0 0 24 24" width="300"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between p-8">
<div className="flex justify-between items-start">
<div className="h-12 w-12 rounded-lg flex items-center justify-center border shadow-sm banner-icon transition-transform duration-500 bg-white text-emerald-600 border-emerald-100">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-semibold mb-2 tracking-tight font-manrope text-neutral-900">Solar Supply</h3>
<p className="text-neutral-600 mb-6 font-light">Sustainable photovoltaic solutions and hybrid inverter integration.</p>
<a className="text-sm font-semibold flex items-center gap-1 transition-colors hover:gap-2 text-emerald-700" href="#contact">Get Details <svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl tracking-tight mb-6 font-manrope font-medium text-neutral-900">Precision Engineering tailored to your needs.</h2>
<p className="text-neutral-500 text-lg mb-8 leading-relaxed font-light font-sans">
                        At DTS, we don't just supply equipment; we engineer solutions. Our cross-disciplinary approach ensures that your safety systems talk to your IoT network, and your power systems support your HVAC efficiency.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border bg-brand-50 text-brand-600 border-brand-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 17H5M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></g></svg>
</div>
<div>
<h4 className="text-base font-semibold font-sans text-neutral-900">Custom Integration</h4>
<p className="text-sm text-neutral-500 mt-1 font-sans">Systems designed to fit your specific infrastructure constraints.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border bg-brand-50 text-brand-600 border-brand-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h4 className="text-base font-semibold font-sans text-neutral-900">24/7 Support &amp; Maintenance</h4>
<p className="text-sm text-neutral-500 mt-1 font-sans">Round-the-clock monitoring and rapid response teams.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border bg-brand-50 text-brand-600 border-brand-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div>
<h4 className="text-base font-semibold font-sans text-neutral-900">Certified Compliance</h4>
<p className="text-sm text-neutral-500 mt-1 font-sans">ISO certified processes ensuring safety and quality reliability.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r rounded-3xl -z-10 rotate-1 from-neutral-100 to-white"></div>
<div className="border rounded-2xl p-2 shadow-xl bg-white border-neutral-200">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-neutral-100">

<div className="absolute inset-0 flex items-center justify-center bg-neutral-50">
<div className="w-full h-full p-8 flex flex-col gap-4">

<div className="flex justify-between items-center pb-4 border-b border-neutral-200">
<div className="h-3 w-24 rounded bg-neutral-200"></div>
<div className="flex gap-2">
<div className="h-3 w-3 rounded-full bg-cyan-400"></div>
<div className="h-3 w-3 rounded-full bg-blue-400"></div>
<div className="h-3 w-3 rounded-full bg-blue-400"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 h-full">
<div className="border rounded-lg p-4 flex flex-col justify-between shadow-sm bg-white border-neutral-200">
<div className="h-8 w-8 rounded-full flex items-center justify-center text-brand-500 bg-brand-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:thermometer" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-2">
<div className="h-2 w-12 rounded bg-neutral-200"></div>
<div className="h-5 w-20 rounded bg-neutral-900"></div>
</div>
</div>
<div className="border rounded-lg p-4 flex flex-col justify-between shadow-sm bg-white border-neutral-200">
<div className="h-8 w-8 rounded-full flex items-center justify-center text-indigo-500 bg-indigo-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="space-y-2">
<div className="h-2 w-12 rounded bg-neutral-200"></div>
<div className="h-5 w-16 rounded bg-neutral-900"></div>
</div>
</div>
<div className="col-span-2 rounded-lg p-4 flex items-center justify-center relative overflow-hidden bg-neutral-900">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%, transparent)', backgroundSize: '30px 30px'}}></div>
<span className="font-mono text-xs z-10 font-sans text-white">System Status: Optimal</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-900 text-white">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-500 rounded-full blur-[128px] opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full blur-[128px] opacity-20 bg-indigo-600"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl tracking-tight mb-6 font-manrope font-medium">Ready to upgrade your facility?</h2>
<p className="text-lg mb-10 max-w-2xl mx-auto font-sans text-neutral-400">Get a comprehensive audit of your Fire Safety, HVAC, or Power systems. Choose a maintenance plan that suits your operational scale.</p>

<div className="flex items-center justify-center mb-10 space-x-4">
<span className="text-sm font-medium font-sans text-neutral-300">One-time Service</span>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer transition-all duration-300 bg-white border-neutral-700" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full cursor-pointer bg-neutral-700" htmlFor="toggle"></label>
</div>
<span className="text-sm font-medium font-sans text-white">Annual Contract <span className="text-brand-500 text-xs ml-1 font-bold font-sans">-15%</span></span>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] font-sans text-neutral-900 bg-white hover:bg-brand-50 hover:text-brand-700" href="#contact">
                Request Consultation
            </a>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl tracking-tight font-manrope font-medium text-neutral-900">Contact Us</h2>
<p className="text-neutral-500 mt-2 font-sans">Reach out for inquiries about our supply and services.</p>
</div>
<form className="space-y-6 p-8 rounded-2xl border shadow-sm bg-neutral-50 border-neutral-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block mb-2 text-sm font-medium font-sans text-neutral-700" htmlFor="name">Full Name</label>
<input className="border text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-3 outline-none transition-shadow focus:shadow-md bg-white border-neutral-200 text-neutral-900" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium font-sans text-neutral-700" htmlFor="email">Work Email</label>
<input className="border text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-3 outline-none transition-shadow focus:shadow-md bg-white border-neutral-200 text-neutral-900" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block mb-3 text-sm font-medium font-sans text-neutral-700">Interested Services</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">

<label className="cursor-pointer custom-checkbox relative">
<input className="sr-only" type="checkbox"/>
<div className="border rounded-lg p-3 text-sm transition-all flex items-center gap-2 font-sans border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300">
<svg className="w-4 h-4 hidden pointer-events-none text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                                Fire &amp; Safety
                            </div>
</label>
<label className="cursor-pointer custom-checkbox relative">
<input className="sr-only" type="checkbox"/>
<div className="border rounded-lg p-3 text-sm transition-all flex items-center gap-2 font-sans border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300">
<svg className="w-4 h-4 hidden pointer-events-none text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                                Power Gen
                            </div>
</label>
<label className="cursor-pointer custom-checkbox relative">
<input className="sr-only" type="checkbox"/>
<div className="border rounded-lg p-3 text-sm transition-all flex items-center gap-2 font-sans border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300">
<svg className="w-4 h-4 hidden pointer-events-none text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                                IoT
                            </div>
</label>
<label className="cursor-pointer custom-checkbox relative">
<input className="sr-only" type="checkbox"/>
<div className="border rounded-lg p-3 text-sm transition-all flex items-center gap-2 font-sans border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300">
<svg className="w-4 h-4 hidden pointer-events-none text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                                HVAC
                            </div>
</label>
<label className="cursor-pointer custom-checkbox relative">
<input className="sr-only" type="checkbox"/>
<div className="border rounded-lg p-3 text-sm transition-all flex items-center gap-2 font-sans border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300">
<svg className="w-4 h-4 hidden pointer-events-none text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
                                Solar
                            </div>
</label>
</div>
</div>
<div className="">
<label className="block mb-2 text-sm font-medium font-sans text-neutral-700" htmlFor="message">Project Details</label>
<textarea className="border text-sm rounded-lg focus:ring-brand-500 focus:border-brand-500 block w-full p-3 outline-none transition-shadow focus:shadow-md bg-white border-neutral-200 text-neutral-900" id="message" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>

<div className="pt-2 pb-6">
<div className="flex justify-between mb-2">
<label className="text-sm font-medium font-sans text-neutral-700" htmlFor="budget">Estimated Budget</label>
<span className="text-sm text-neutral-500 font-sans">$5k - $500k+</span>
</div>
<input className="appearance-none cursor-pointer w-full h-2 rounded-lg accent-neutral-900 bg-neutral-200" id="budget" max="100" min="0" type="range" value="30"/>
</div>
<button className="w-full focus:ring-4 focus:outline-none focus:ring-brand-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all shadow-lg hover:shadow-xl font-sans text-white bg-neutral-900 hover:bg-neutral-800" type="submit">Send Request</button>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-white border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-2xl tracking-tighter block mb-4 font-manrope font-medium text-neutral-900">DTS</span>
<p className="text-neutral-500 text-sm leading-relaxed font-sans">
                        Leading provider of integrated engineering solutions for safety, power, and environmental control systems.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider mb-4 font-sans text-neutral-900">Solutions</h3>
<ul className="space-y-3">
<li><a className="text-neutral-500 text-sm transition-colors font-sans hover:text-brand-600" href="#services">Fire Suppression</a></li>
<li><a className="text-neutral-500 text-sm transition-colors font-sans hover:text-brand-600" href="#services">Industrial Power</a></li>
<li><a className="text-neutral-500 text-sm transition-colors font-sans hover:text-brand-600" href="#services">IoT Automation</a></li>
<li><a className="text-neutral-500 text-sm transition-colors font-sans hover:text-brand-600" href="#services">Solar Energy</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider mb-4 font-sans text-neutral-900">Company</h3>
<ul className="space-y-3">
<li><a className="text-neutral-500 text-sm transition-colors font-sans hover:text-brand-600" href="#about">About Us</a></li>
<li><a className="text-neutral-500 text-sm transition-colors font-sans hover:text-brand-600" href="#services">Projects</a></li>
<li><a className="text-neutral-500 text-sm transition-colors font-sans hover:text-brand-600" href="#contact">Careers</a></li>
<li><a className="text-neutral-500 text-sm transition-colors font-sans hover:text-brand-600" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider mb-4 font-sans text-neutral-900">Connect</h3>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-neutral-500 text-sm font-sans">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<a className="hover:text-brand-600 transition-colors" href="mailto:info@dtspak.com">info@dtspak.com</a>
</li>
<li className="flex items-center gap-2 text-neutral-500 text-sm font-sans">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Headquarters, PK
                        </li>
</ul>
<div className="flex gap-4 mt-6">
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
<p className="text-xs font-sans text-neutral-400">© 2024 DTS Engineering. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs transition-colors font-sans text-neutral-400 hover:text-neutral-900" href="#">Privacy Policy</a>
<a className="text-xs transition-colors font-sans text-neutral-400 hover:text-neutral-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
