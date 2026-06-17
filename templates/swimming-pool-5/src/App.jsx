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
      

<div className="bg-slate-950 text-slate-400 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1"><svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Bangalore, India</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-phone w-3 h-3" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +91 80 1234 5678</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-mail w-3 h-3" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> info@poolmasters.in</span>
</div>
<a className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-2" href="#contact">Schedule a Site Visit</a>
</div>
</div>

<nav className="absolute top-10 left-0 w-full z-50 px-6 py-4">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<div className="flex items-center gap-2">
<div className="bg-white/10 backdrop-blur-md p-2 rounded border border-white/20">
<svg className="lucide lucide-waves w-6 h-6 text-sky-400" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<div>
<h1 className="text-xl font-bold text-white tracking-tight uppercase leading-none">Pool Masters</h1>
<p className="text-[10px] text-sky-200 tracking-widest uppercase">Est. 1993</p>
</div>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
<a className="hover:text-white transition-colors" href="#">Projects</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="bg-white text-slate-900 px-5 py-2.5 rounded hover:bg-sky-50 transition-colors font-semibold" href="#">Get Quote</a>
</div>
<button className="md:hidden text-white"><svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg></button>
</div>
</nav>

<header className="relative bg-slate-900 h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Swimming Pool" className="opacity-60 w-full h-full object-cover" src="https://images.unsplash.com/photo-1729606559716-78646ff2f3a6?w=3840&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 -mt-20">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/10 px-4 py-1.5 rounded-full mb-6">
<div className="flex -space-x-1">
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
<div className="w-5 h-5 rounded-full bg-green-500 border border-white flex items-center justify-center text-[8px] text-white font-bold">★</div>
</div>
<span className="text-white text-xs font-medium">Trusted by Bangalore Club &amp; More</span>
</div>
<h1 className="serif-font text-5xl md:text-7xl text-white leading-[1.1] mb-6 tracking-tight">
                AQUATIC EXCELLENCE, <br/>
<span className="italic font-light text-sky-300">BUILT TO LAST</span>
</h1>
<p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-8">
                Where 30 years of innovation, gunite technology, and expertise lay the foundation of every pool we touch.
            </p>
</div>
</header>

<div className="relative z-20 -mt-24 px-4 pb-20">
<div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
<div className="bg-white p-1 text-center border-b border-slate-100">
<p className="text-xs font-semibold text-slate-500 py-2 tracking-widest uppercase">Free Pool Consultation &amp; Estimate</p>
</div>
<div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Full Name</label>
<div className="relative">
<svg className="lucide lucide-user absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:border-sky-500" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Phone Number</label>
<div className="relative">
<svg className="lucide lucide-phone absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:border-sky-500" placeholder="+91 98765 43210" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Pool Type</label>
<div className="relative">
<svg className="lucide lucide-waves absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<select className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-600 focus:outline-none focus:border-sky-500 appearance-none">
<option>Residential In-ground</option>
<option>Rooftop Pool</option>
<option>Commercial / Hotel</option>
<option>Water Park</option>
</select>
</div>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                    Get My Estimate Now <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-70 grayscale">
<div className="flex items-center gap-2"><svg className="lucide lucide-award w-5 h-5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> <span className="text-xs font-bold font-serif">BANGALORE CLUB</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-droplets w-5 h-5" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg> <span className="text-xs font-bold font-serif">GRS FANTASY PARK</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> <span className="text-xs font-bold font-serif">20-YEAR WARRANTY</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-hammer w-5 h-5" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg> <span className="text-xs font-bold font-serif">GUNITE TECH</span></div>
</div>
</div>
</div>

<section className="bg-slate-900 text-white py-20 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="serif-font text-3xl md:text-5xl mb-4">COMPLETE <span className="italic text-sky-400">AQUATIC</span> SOLUTIONS</h2>
<p className="text-slate-400 max-w-xl mx-auto">From bespoke residential oases to massive commercial water parks, we've got your water recreational needs covered.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="space-y-8">

<div className="group bg-slate-800/50 backdrop-blur border border-white/5 p-6 rounded-lg hover:border-sky-500/50 transition-all duration-300 hover:-translate-x-1">
<div className="w-10 h-10 bg-sky-900/50 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Residential Pools</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Custom-designed in-ground pools integrated seamlessly into private properties, reflecting your personality.</p>
<a className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">LEARN MORE <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>

<div className="group bg-slate-800/50 backdrop-blur border border-white/5 p-6 rounded-lg hover:border-sky-500/50 transition-all duration-300 hover:-translate-x-1">
<div className="w-10 h-10 bg-sky-900/50 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-building w-5 h-5" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Rooftop Installations</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Specialized construction for elevated pools with advanced structural integrity and leak-proof guarantees.</p>
<a className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">LEARN MORE <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>

<div className="relative h-[400px] lg:h-[500px]">
<div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"></div>
<img alt="Pool Isometric View" className="z-10 transform lg:scale-110 w-full h-full object-cover border-slate-800/50 border-4 rounded-2xl relative shadow-2xl" src="https://images.unsplash.com/photo-1758530273277-46fd6da31058?w=1600&amp;q=80"/>

<div className="absolute -bottom-4 -right-4 z-20 bg-white text-slate-900 p-4 rounded shadow-xl max-w-[180px]">
<p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Since 1993</p>
<p className="text-2xl font-serif font-bold leading-none">800+</p>
<p className="text-sm font-medium">Pools Commissioned</p>
</div>
</div>

<div className="space-y-8">

<div className="group bg-slate-800/50 backdrop-blur border border-white/5 p-6 rounded-lg hover:border-sky-500/50 transition-all duration-300 hover:translate-x-1">
<div className="w-10 h-10 bg-sky-900/50 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-ticket w-5 h-5" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Water Parks</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Sophisticated attractions including wave pools, lazy rivers, and multi-level slides for major amusement parks.</p>
<a className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">LEARN MORE <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>

<div className="group bg-slate-800/50 backdrop-blur border border-white/5 p-6 rounded-lg hover:border-sky-500/50 transition-all duration-300 hover:translate-x-1">
<div className="w-10 h-10 bg-sky-900/50 rounded-lg flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Maintenance &amp; HVAC</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Full in-house service for filtration, heating, and ventilation to ensure safe and energy-efficient environments.</p>
<a className="text-xs font-bold text-white flex items-center gap-1 group-hover:gap-2 transition-all" href="#">LEARN MORE <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>
</div>
</div>
</section>

<div className="bg-sky-50 overflow-hidden py-3 border-y border-sky-100 flex items-center">
<div className="flex gap-8 whitespace-nowrap animate-marquee font-bold text-xs tracking-widest text-slate-400 uppercase">
<span className="flex items-center gap-2"><svg className="lucide lucide-check-circle w-4 h-4 text-sky-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Peace of Mind</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-pen-tool w-4 h-4 text-sky-600" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg> Turning Vision Into Reality</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-shield w-4 h-4 text-sky-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> 20-Year Structural Warranty</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-layers w-4 h-4 text-sky-600" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Gunite Concrete Technology</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-check-circle w-4 h-4 text-sky-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Peace of Mind</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-pen-tool w-4 h-4 text-sky-600" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg> Turning Vision Into Reality</span>
<span className="text-slate-300">///</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-shield w-4 h-4 text-sky-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> 20-Year Structural Warranty</span>
</div>
</div>

<section className="bg-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-sky-600 font-semibold tracking-widest text-xs uppercase mb-2 block">Our Portfolio</span>
<h2 className="serif-font text-4xl text-slate-900">DISCOVER OUR <span className="italic text-sky-600 font-serif">PREMIUM</span><br/>POOL CATEGORIES</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
<img alt="Competition Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="font-serif text-xl mb-1">Competition Pools</h3>
<p className="text-xs text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">International standard pools designed for competitive events and athletic training.</p>
<span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">View Projects <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
<img alt="Luxury Residential" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="font-serif text-xl mb-1">Private Villas</h3>
<p className="text-xs text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">Bespoke residential designs that transform backyards into personal resorts.</p>
<span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">View Projects <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
<img alt="Water Park" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="font-serif text-xl mb-1">Water Parks</h3>
<p className="text-xs text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">Complete recreational facilities including Fun World and GRS Fantasy Park.</p>
<span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">View Projects <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
<img alt="Commercial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="font-serif text-xl mb-1">Hotels &amp; Resorts</h3>
<p className="text-xs text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100 line-clamp-2">High-traffic commercial pools for prestigious institutions and hospitality chains.</p>
<span className="text-xs font-bold uppercase tracking-wider flex items-center gap-2">View Projects <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative h-[400px] lg:h-auto">
<img alt="Pool Construction" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/30"></div>
</div>
<div className="p-12 lg:p-24 flex flex-col justify-center">
<div className="w-16 h-1 bg-sky-500 mb-8"></div>
<h2 className="serif-font text-4xl lg:text-5xl mb-6 leading-tight">
                    BUILDING <span className="italic text-sky-400">AQUATIC DREAMS</span>, ONE POOL AT A TIME
                </h2>
<p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Pool Masters, along with its predecessor Water Rhymes, stands as a leader in the industry with over 30 years of experience. We are "young on ideas and dynamic on deliveries," creating pools that are not just utilitarian but distinctively customized to echo your personality.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-white text-slate-900 px-6 py-3 rounded font-semibold hover:bg-sky-50 transition-colors" href="#">Our History</a>
<a className="border border-white/30 text-white px-6 py-3 rounded font-semibold hover:bg-white/10 transition-colors" href="#">View Warranty</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-xl">
<h5 className="text-sky-600 font-bold uppercase tracking-widest text-xs mb-2">Our Methodology</h5>
<h2 className="serif-font text-4xl text-slate-900">INDUSTRY-LEADING:<span className="italic font-serif">BEST-IN-CLASS</span> PROCESS</h2>
</div>
<div className="max-w-md text-sm text-slate-500 text-justify">
                    We don't just build pools; we engineer experiences. From the initial soil test to the final water balancing, our process ensures structural integrity and aesthetic perfection.
                </div>
</div>

<div className="bg-slate-900 text-white rounded-2xl p-8 lg:p-12 shadow-2xl overflow-hidden">
<h3 className="serif-font text-2xl text-center mb-12 text-slate-200">EXPERIENCE CLASS, BUILT TO LAST</h3>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">P</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">PLAN</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Initial on-site meetings to understand your vision, daily life needs, space limitations, and budget constraints.
                            </p>
</div>
<div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-slate-700"></div>
</div>

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">O</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">ORGANIZE</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Detailed design specifications and budget proposals. We refine designs until they match your exact requirements.
                            </p>
</div>
<div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-slate-700"></div>
</div>

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">O</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">OPERATE</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Execution begins with excavation and groundwork. We employ Gunite Concrete technology for superior strength (56-70 N/mm²).
                            </p>
</div>
<div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-slate-700"></div>
</div>

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">L</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">LAYOUT</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Installation of tiles, surrounds, and complex filtration systems. Meticulous attention to finishing details.
                            </p>
</div>
<div className="hidden md:block absolute top-12 -right-4 w-8 h-[1px] bg-slate-700"></div>
</div>

<div className="relative group">
<div className="text-7xl font-serif text-slate-800 font-bold absolute -top-4 -left-2 z-0 group-hover:text-sky-900/50 transition-colors">S</div>
<div className="relative z-10 pt-8">
<h4 className="text-xl font-bold mb-3 text-sky-400">SUPPORT</h4>
<p className="text-xs text-slate-400 leading-relaxed">
                                Handover with a 20-Year Structural Warranty. Ongoing maintenance services to keep your pool pristine.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-blue-950 py-20 text-white border-b border-white/10">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-center font-serif text-3xl mb-16">OUR IMPACT BY NUMBERS</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="pt-8 md:pt-0 px-4">
<span className="block text-5xl font-bold font-serif mb-2">800+</span>
<span className="text-xs font-bold tracking-widest uppercase text-sky-400">Swimming Pools Commissioned</span>
</div>
<div className="pt-8 md:pt-0 px-4">
<span className="block text-5xl font-bold font-serif mb-2">10+</span>
<span className="text-xs font-bold tracking-widest uppercase text-sky-400">Major Water Parks</span>
</div>
<div className="pt-8 md:pt-0 px-4">
<span className="block text-5xl font-bold font-serif mb-2">30</span>
<span className="text-xs font-bold tracking-widest uppercase text-sky-400">Years of Experience</span>
</div>
</div>

<div className="mt-20 max-w-4xl mx-auto relative">
<div className="bg-white text-slate-900 rounded-lg p-8 shadow-xl flex flex-col md:flex-row gap-6 items-center">
<div className="flex-shrink-0 bg-slate-100 rounded-full p-4">
<img alt="Client" className="w-12 h-12 rounded-full" src="https://ui-avatars.com/api/?name=Bangalore+Club&amp;background=0f172a&amp;color=fff"/>
</div>
<div>
<div className="flex text-yellow-500 mb-2">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="italic text-slate-600 text-sm mb-3">"Pool Masters has consistently delivered world-class facilities for our club members. Their attention to detail and maintenance support is unmatched in Bangalore."</p>
<p className="font-bold text-xs uppercase tracking-wider text-slate-900">- Bangalore Club Management</p>
</div>
</div>

<button className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-slate-900 p-2 rounded-full transition-colors border border-white/20">
<svg className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-slate-900 p-2 rounded-full transition-colors border border-white/20">
<svg className="lucide lucide-chevron-right w-6 h-6" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-sky-500/50 rounded-tl-3xl"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-sky-500/50 rounded-br-3xl"></div>
<img alt="Engineer" className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700 relative z-10 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="w-full lg:w-1/2">
<h2 className="serif-font text-4xl mb-8"><span className="italic text-sky-400">EXCELLENCE</span> IN EVERY DETAILIS WHAT SETS US APART</h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-white text-slate-900 flex items-center justify-center text-3xl font-serif font-bold rounded shadow-lg">G</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-1">Gunite Concrete Technology</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    We use pneumatic application of cement and sand at high pressure (20-30 N/cm²), resulting in concrete strength of 56-70 N/mm², far exceeding industry standards.
                                </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-white text-slate-900 flex items-center justify-center text-3xl font-serif font-bold rounded shadow-lg">W</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-1">Comprehensive Warranty</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    Our confidence is backed by a 20-Year Structural Warranty, 5-Year Filter Plant Warranty, and 2-Year Electromechanical Warranty.
                                </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-16 h-16 bg-white text-slate-900 flex items-center justify-center text-3xl font-serif font-bold rounded shadow-lg">D</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wider text-sky-400 mb-1">Design &amp; Engineering</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    Full in-house architectural, heating, and ventilation design. We understand guest flow, deck capacity, and thematic elements for water parks.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
<h2 className="serif-font text-3xl text-white">OUR <span className="italic text-sky-500">WORK SPEAKS</span> FOR ITSELF</h2>
<div className="flex gap-2">
<button className="p-2 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"><svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg></button>
<button className="p-2 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"><svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>
<div className="flex gap-4 overflow-x-auto pb-8 px-6 no-scrollbar">
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img className="h-64 w-80 object-cover rounded grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="serif-font text-3xl text-white mb-4">PROUDLY SERVING <span className="italic text-sky-500">BANGALORE</span> AND BEYOND</h2>
<div className="w-full h-64 bg-slate-800 rounded-lg overflow-hidden relative mt-6 max-w-4xl">

<iframe allowfullscreen="" className="opacity-60 hover:opacity-100 transition-opacity" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.486256860012!2d77.5684563!3d13.0046643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae162799999999%3A0x1234567890abcdef!2sMalleswaram%20Play%20Ground!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 bg-white text-slate-900 p-4 rounded shadow-lg text-left max-w-xs hidden sm:block">
<p className="font-bold text-xs mb-1">POOL MASTERS HQ</p>
<p className="text-xs text-slate-500">No. 44, Malleswaram Play Ground, 5th Cross, 5th Main, Malleswaram, Bangalore 560003</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-slate-900 pt-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-waves w-6 h-6 text-sky-500" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-white font-bold text-lg uppercase">Pool Masters</span>
</div>
<p className="text-xs leading-relaxed mb-6">
                        Leading water recreational facility builder and designer based in Bangalore. 30+ years of creating aquatic excellence.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-sky-400 transition-colors" href="#">Residential Pools</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Commercial Pools</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Water Parks</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Rooftop Installations</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Maintenance &amp; HVAC</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-sky-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Our Portfolio</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-phone w-4 h-4 mt-0.5 text-sky-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+91 80 1234 5678<span className="text-xs text-slate-500">Mon-Sat: 9am - 7pm</span></span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-mail w-4 h-4 mt-0.5 text-sky-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:text-sky-400" href="mailto:info@poolmasters.in">info@poolmasters.in</a>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 mt-0.5 text-sky-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>No. 44, Malleswaram Play Ground, 5th Cross, Bangalore 560003</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2023 Pool Masters. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms &amp; Conditions</a>
<a className="hover:text-slate-400" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
