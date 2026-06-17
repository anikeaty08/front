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
      

<div className="bg-slate-950 text-slate-400 text-xs py-3 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3 h-3 text-orange-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            EMERGENCY SERVICE 24/7
          </span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-3 h-3 text-orange-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            SERVING TULSA METRO &amp; BEYOND
          </span>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<a className="hover:text-white transition" href="#">
<svg className="lucide lucide-facebook w-3 h-3" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="hover:text-white transition" href="#">
<svg className="lucide lucide-instagram w-3 h-3" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
<span className="flex items-center gap-2 text-white font-medium">
<svg className="lucide lucide-phone w-3 h-3 text-orange-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            (918) 370-4444
          </span>
</div>
</div>
</div>

<nav className="absolute w-full z-50 border-b border-white/10 bg-transparent">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded">
<svg className="lucide lucide-home text-white w-5 h-5 stroke-[1.5]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="text-white leading-tight font-bold text-xl tracking-tight">
            BURGGRAF
            <br/>
<span className="text-xs font-normal tracking-widest opacity-80">
              ROOFING
            </span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
<a className="hover:text-orange-500 transition" href="#">RESIDENTIAL</a>
<a className="hover:text-orange-500 transition" href="#">COMMERCIAL</a>
<a className="hover:text-orange-500 transition" href="#">ABOUT</a>
<a className="hover:text-orange-500 transition" href="#">SERVICES</a>
<a className="hover:text-orange-500 transition" href="#">BLOG</a>
</div>
<a className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-6 py-3 transition shadow-lg shadow-orange-900/20" href="#">
          FREE ESTIMATE
        </a>
<button className="lg:hidden text-white">
<svg className="lucide lucide-menu w-8 h-8" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative bg-slate-900 min-h-screen flex items-center">

<div className="absolute inset-0 z-0">
<img alt="Roofer" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://i.ibb.co/6cJycr2G/f25cb4a762fd32aa94d23ba5dc1fa128-1765226001569.png"/>
<div className="bg-gradient-to-r from-slate-900/80 via-slate-900/65 to-slate-900/35 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 pt-24 pb-12 w-full">

<div className="flex flex-col justify-center">
<div className="flex items-center gap-3 text-orange-500 text-xs font-semibold tracking-widest mb-6">
<span className="w-8 h-[2px] bg-orange-500"></span>
            EST. 1993 • OKLAHOMA'S FINEST
          </div>
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-6">
            FORGED IN
            <br/>
<span className="text-slate-400">STEEL &amp; STONE</span>
</h1>
<p className="text-slate-300 text-lg mb-10 max-w-md leading-relaxed border-l-2 border-orange-500 pl-6">
            Expert residential and commercial roofing solutions for Tulsa. We
            don't just build roofs; we engineer protection for your legacy.
          </p>
<div className="flex flex-col sm:flex-row gap-6 mb-12">
<a className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 flex items-center justify-center gap-2 transition group" href="#">
              START PROJECT
              <svg className="lucide lucide-arrow-up-right w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<button className="flex items-center gap-3 text-white hover:text-orange-500 transition group">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-orange-500 transition">
<svg className="lucide lucide-play w-5 h-5 fill-current ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="text-left text-xs uppercase tracking-wider font-semibold">
                Watch Our Process
              </div>
</button>
</div>
<div className="flex flex-wrap gap-6 text-xs font-medium text-slate-400">
<span className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 text-orange-500 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              LICENSED &amp; INSURED
            </span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 text-orange-500 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              A+ BBB RATING
            </span>
<span className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 text-orange-500 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              5-STAR GOOGLE REVIEWS
            </span>
</div>
</div>

<div className="flex items-center lg:justify-end">
<div className="bg-neutral-900/95 backdrop-blur-sm p-8 md:p-10 border border-white/10 relative max-w-md w-full shadow-2xl">

<div className="absolute -left-3 -bottom-3 w-12 h-12 border-l-2 border-b-2 border-orange-500"></div>
<div className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 inline-block mb-6">
              Fast &amp; Free Estimate
            </div>
<h3 className="text-white text-2xl font-semibold tracking-tight mb-2">
              READY TO BUILD?
            </h3>
<p className="text-slate-400 text-sm mb-8">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="group">
<label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">
                    First Name
                  </label>
<input className="w-full bg-transparent border-b border-slate-700 text-white pb-2 focus:outline-none focus:border-orange-500 transition placeholder-slate-600 text-sm" placeholder="John" type="text"/>
</div>
<div className="">
<label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">
                    Last Name
                  </label>
<input className="w-full bg-transparent border-b border-slate-700 text-white pb-2 focus:outline-none focus:border-orange-500 transition placeholder-slate-600 text-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">
                  Email Address
                </label>
<input className="w-full bg-transparent border-b border-slate-700 text-white pb-2 focus:outline-none focus:border-orange-500 transition placeholder-slate-600 text-sm" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-[10px] font-semibold text-slate-500 uppercase mb-1">
                  Phone Number
                </label>
<input className="w-full bg-transparent border-b border-slate-700 text-white pb-2 focus:outline-none focus:border-orange-500 transition placeholder-slate-600 text-sm" placeholder="(918) 000-0000" type="tel"/>
</div>
<button className="w-full bg-white hover:bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-widest py-4 mt-4 transition flex items-center justify-center gap-2" type="button">
                Submit Request
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
</div>
</header>

<div className="bg-orange-500 text-white py-12 border-t border-orange-400">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-orange-400/50">
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-bold tracking-tight">30+</span>
<span className="text-xs font-semibold uppercase tracking-wider mt-2 opacity-90">
            Years Experience
          </span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-bold tracking-tight">5k+</span>
<span className="text-xs font-semibold uppercase tracking-wider mt-2 opacity-90">
            Roofs Installed
          </span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-bold tracking-tight">
            100%
          </span>
<span className="text-xs font-semibold uppercase tracking-wider mt-2 opacity-90">
            Satisfaction Rate
          </span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl md:text-5xl font-bold tracking-tight">
            24/7
          </span>
<span className="text-xs font-semibold uppercase tracking-wider mt-2 opacity-90">
            Emergency Support
          </span>
</div>
</div>
</div>

<section className="py-24 bg-slate-50 grid-bg relative">
<div className="absolute inset-0 bg-white/50"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-2 block">
              Master Craftsmanship
            </span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none">
              SERVICES BUILT TO
              <br/>
<span className="text-orange-500">LAST A LIFETIME</span>
</h2>
</div>
<a className="text-slate-900 font-semibold text-sm uppercase tracking-wide border-b border-slate-900 pb-1 hover:text-orange-500 hover:border-orange-500 transition flex items-center gap-2" href="#">
            View All Services
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-0 border border-slate-200 bg-white shadow-xl shadow-slate-200/50">

<div className="group relative h-[480px] overflow-hidden border-r border-slate-200">
<img className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://i.ibb.co/qFPG1pmx/Screenshot-2025-12-08-at-19-57-46.png"/>
<div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors"></div>
<div className="flex flex-col h-full pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="flex justify-between items-start">
<span className="text-white/20 text-6xl font-bold">01</span>
<div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
</div>
<div className="">
<h3 className="uppercase text-2xl font-bold text-white tracking-tight mb-6">
                  Residential Roofing
                </h3>
<div className="w-10 h-1 bg-orange-500 mb-6 transition-all duration-300 group-hover:w-20"></div>
<span className="text-orange-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Explore
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group relative h-[480px] overflow-hidden border-r border-slate-200">
<img className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://i.ibb.co/Cp1yGmYR/Screenshot-2025-12-08-at-19-47-08.png"/>
<div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors"></div>
<div className="flex flex-col h-full pt-10 pr-10 pb-10 pl-10 relative justify-between">
<div className="flex justify-between items-start">
<span className="text-white/20 text-6xl font-bold">02</span>
<div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-orange-500">
<svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">
                  Commercial Systems
                </h3>
<div className="w-10 h-1 bg-orange-500 mb-6 transition-all duration-300 group-hover:w-20"></div>
<span className="text-orange-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Explore
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="group relative h-[480px] overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/50 transition-colors"></div>
<div className="relative h-full flex flex-col justify-between p-10">
<div className="flex justify-between items-start">
<span className="text-white/20 text-6xl font-bold">03</span>
<div className="w-10 h-10 border border-white/20 rounded flex items-center justify-center text-orange-500">
<svg className="lucide lucide-hammer w-5 h-5" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-2xl font-bold text-white mb-6 tracking-tight uppercase">
                  Repair &amp; Maintain
                </h3>
<div className="w-10 h-1 bg-orange-500 mb-6 transition-all duration-300 group-hover:w-20"></div>
<span className="text-orange-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Explore
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

<div className="relative p-6">
<div className="absolute top-0 left-0 w-2/3 h-full border border-slate-200 -z-10"></div>
<div className="relative overflow-hidden grayscale hover:grayscale-0 transition duration-700 shadow-2xl">
<img className="w-full object-cover" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 right-0 bg-black text-white p-8 max-w-[280px]">
<svg className="lucide lucide-shield-check text-orange-500 w-8 h-8 mb-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h4 className="font-bold text-lg leading-tight mb-2">
                IRONCLAD GUARANTEE
              </h4>
<p className="text-xs text-slate-400 leading-relaxed">
                We back every installation with our industry-leading workmanship
                warranty.
              </p>
</div>
</div>
</div>

<div className="">
<span className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-4 block">
            Who We Are
          </span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-none mb-8">
            MORE THAN JUST A
            <br/>
            ROOFING COMPANY
          </h2>
<p className="text-slate-600 mb-6 leading-relaxed">
            At Burggraf, we believe a roof is the first line of defense for your
            family and assets. We’re a locally-owned powerhouse specializing in
            high-performance roofing systems for Tulsa’s unique climate.
          </p>
<p className="text-slate-600 mb-10 leading-relaxed">
            Our team excels in roof insulation and installing long-lasting
            materials. We demonstrate superior roofing experience in every
            project, proving our mettle through dedication, excellent
            craftsmanship, and comprehensive training.
          </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 text-sm font-semibold text-slate-800">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-500"></span>
              METAL ROOFING EXPERTS
            </div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-500"></span>
              TILE &amp; SLATE SPECIALISTS
            </div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-500"></span>
              STORM DAMAGE RESTORATION
            </div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-500"></span>
              INSURANCE CLAIM ASSISTANCE
            </div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-500"></span>
              CERTIFIED INSTALLERS
            </div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-orange-500"></span>
              LOCALLY OWNED &amp; OPERATED
            </div>
</div>
<a className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-8 py-4 uppercase tracking-widest inline-flex transition" href="#">
            Learn More About Us
          </a>
</div>
</div>
</section>

<div className="bg-white border-y border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Trusted Manufacturers &amp; Partners
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-2xl font-black text-slate-800 tracking-tighter">
            GAF
          </span>
<span className="text-xl font-black text-slate-800 tracking-tight italic">
            Owens Corning
          </span>
<span className="text-xl font-bold text-slate-800 tracking-wide">
            CERTAINTEED
          </span>
<span className="text-xl font-black text-slate-800">TAMKO</span>
<span className="text-xl font-bold text-slate-800 tracking-tight">
            ATLAS
          </span>
</div>
</div>
</div>

<div className="bg-slate-800 py-16 border-t border-slate-700">
<div className="max-w-4xl mx-auto text-center px-6">
<div className="flex justify-center mb-6">
<div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
<svg className="lucide lucide-shield text-white w-6 h-6 fill-current" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
</div>
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
          PROTECTED FROM THE ELEMENTS
        </h2>
<p className="text-slate-300 text-lg">
          From hail storms to heat waves, our roofs are engineered to withstand
          the harshest Oklahoma weather.
        </p>
</div>
</div>

<section className="striped-bg py-24 border-t border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-white tracking-tight">
            WHY CHOOSE
            <span className="border-b-4 border-orange-500">BURGGRAF?</span>
</h2>
<p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Uncompromising quality and dedication to the craft. We set the
            standard for roofing in Oklahoma.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition group">
<div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
<svg className="lucide lucide-hard-hat text-white w-6 h-6" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
</div>
<h3 className="text-white font-bold text-lg mb-3">ELITE TEAM</h3>
<p className="text-slate-400 text-sm leading-relaxed">
              Hand-picked, highly trained professionals dedicated to perfection.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition group">
<div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
<svg className="lucide lucide-crown text-white w-6 h-6" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-white font-bold text-lg mb-3">PREMIUM MATERIALS</h3>
<p className="text-slate-400 text-sm leading-relaxed">
              We only use top-tier materials rated for impact and longevity.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition group">
<div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
<svg className="lucide lucide-tag text-white w-6 h-6" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-white font-bold text-lg mb-3">
              TRANSPARENT PRICING
            </h3>
<p className="text-slate-400 text-sm leading-relaxed">
              No hidden fees. Just honest, competitive estimates upfront.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition group">
<div className="w-12 h-12 bg-orange-500 rounded flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
<svg className="lucide lucide-clock text-white w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-white font-bold text-lg mb-3">RAPID RESPONSE</h3>
<p className="text-slate-400 text-sm leading-relaxed">
              When disaster strikes, we are there within hours, not days.
            </p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-0 bg-slate-900">
<div className="md:col-span-1 h-64 md:h-80 relative group overflow-hidden">
<img className="transition duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-1 h-64 md:h-80 relative group overflow-hidden">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 h-64 md:h-80 relative group overflow-hidden">
<img alt="Burggraf Roofing project close-up" className="transition duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80-full h-full object-cover" src="https://i.ibb.co/gMxvdCLz/Screenshot-2025-12-08-at-21-41-27.png"/>
</div>
<div className="md:col-span-2 h-64 md:h-96 relative group overflow-hidden">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 h-64 md:h-96 relative group overflow-hidden">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<div className="bg-orange-500 py-16 text-center">
<h2 className="text-3xl font-bold text-white tracking-tight uppercase mb-2">
        See Our Masterpieces In Person
      </h2>
<p className="text-white/80 text-sm mb-8">
        Browse our extensive portfolio of over 5,000 completed roofs.
      </p>
<button className="bg-black hover:bg-slate-900 text-white font-bold text-xs px-8 py-4 uppercase tracking-widest transition">
        View Full Gallery
      </button>
</div>

<section className="py-24 bg-slate-50 dots-bg">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<span className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-2 block">
              Testimonials
            </span>
<h2 className="text-4xl font-bold text-slate-900 tracking-tight uppercase">
              The Burggraf Standard
            </h2>
</div>
<div className="bg-white border border-slate-200 px-4 py-2 flex items-center gap-3 rounded shadow-sm">
<div className="flex text-orange-400 gap-0.5">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-bold text-slate-700 uppercase">
              5.0 Rating on Google
            </span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
<div className="flex text-orange-400 gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 italic text-sm mb-8 leading-relaxed">
              "Top quality work! Appreciate the quick response! The team was
              professional and left the site cleaner than they found it."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-800 text-white flex items-center justify-center font-bold rounded">
                R
              </div>
<div>
<h4 className="font-bold text-slate-900 text-sm uppercase">
                  Ryan Reece
                </h4>
<span className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">
                  Homeowner
                </span>
</div>
</div>
</div>

<div className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
<div className="flex text-orange-400 gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 italic text-sm mb-8 leading-relaxed">
              "After past failures with other contractors, Burggraf was a breath
              of fresh air. They explained everything clearly and the new roof
              looks fantastic."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-800 text-white flex items-center justify-center font-bold rounded">
                J
              </div>
<div>
<h4 className="font-bold text-slate-900 text-sm uppercase">
                  James Sutherland
                </h4>
<span className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">
                  Business Owner
                </span>
</div>
</div>
</div>

<div className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-lg transition duration-300">
<div className="flex text-orange-400 gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-600 italic text-sm mb-8 leading-relaxed">
              "Professional, courteous, and personable. They gave us a fair
              estimate and completed the repair in record time. Highly
              recommended."
            </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-800 text-white flex items-center justify-center font-bold rounded">
                D
              </div>
<div>
<h4 className="font-bold text-slate-900 text-sm uppercase">
                  Dano S
                </h4>
<span className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">
                  Homeowner
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<span className="text-orange-500 font-bold text-xs tracking-widest uppercase mb-4 block">
              How We Work
            </span>
<h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-6">
              SEAMLESS EXECUTION
            </h2>
<p className="text-slate-600 mb-8 leading-relaxed">
              We've refined our roofing process over 30 years to be as
              transparent and stress-free as possible. No surprises, just
              results.
            </p>
<a className="inline-flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-widest border-b-2 border-orange-500 pb-1" href="#">
              Book Consultation
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="lg:col-span-8 grid md:grid-cols-2 gap-x-12 gap-y-12">

<div className="relative pl-8 border-l border-slate-200">
<span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                1
              </span>
<h3 className="text-lg font-bold text-slate-900 mb-2">
                Detailed Inspection
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                We conduct a comprehensive 21-point roof analysis to identify
                all issues, documented with photos.
              </p>
</div>

<div className="relative pl-8 border-l border-slate-200">
<span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
<h3 className="text-lg font-bold text-slate-900 mb-2">
                Honest Proposal
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                You receive a clear, line-by-line estimate. We also assist with
                insurance claims if storm damage is found.
              </p>
</div>

<div className="relative pl-8 border-l border-slate-200">
<span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
                3
              </span>
<h3 className="text-lg font-bold text-slate-900 mb-2">
                Expert Installation
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Our certified crews strip the old roof, repair decking, and
                install your new system efficiently.
              </p>
</div>

<div className="relative pl-8 border-l border-slate-200">
<span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold">
                4
              </span>
<h3 className="text-lg font-bold text-slate-900 mb-2">
                Final Walkthrough
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                We clean the site with magnets and perform a final quality check
                before issuing your warranty.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-900 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold tracking-tight mb-12 text-center">
          COMMON QUESTIONS
        </h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
<div className="border-b border-slate-800 pb-8">
<h3 className="font-bold text-lg mb-3 flex items-center justify-between">
              How long does a roof replacement take?
              <svg className="lucide lucide-plus text-orange-500 w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</h3>
<p className="text-slate-400 text-sm leading-relaxed">
              Most residential roof replacements are completed in 1-2 days. We
              prioritize efficiency to minimize disruption to your daily life.
            </p>
</div>
<div className="border-b border-slate-800 pb-8">
<h3 className="font-bold text-lg mb-3 flex items-center justify-between">
              Do you help with insurance claims?
              <svg className="lucide lucide-plus text-orange-500 w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</h3>
<p className="text-slate-400 text-sm leading-relaxed">
              Yes. We have a dedicated team of insurance specialists who
              navigate the entire claim process for you, ensuring you get
              everything you are owed.
            </p>
</div>
<div className="border-b border-slate-800 pb-8">
<h3 className="font-bold text-lg mb-3 flex items-center justify-between">
              What warranties do you offer?
              <svg className="lucide lucide-plus w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(249, 115, 22)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="M12 5v14"></path></svg>
</h3>
<p className="text-slate-400 text-sm leading-relaxed">
              We offer manufacturer warranties ranging from 25 years to
              Lifetime, plus our own Ironclad Workmanship Guarantee.
            </p>
</div>
<div className="border-b border-slate-800 pb-8">
<h3 className="font-bold text-lg mb-3 flex items-center justify-between">
              Are you licensed and insured?
              <svg className="lucide lucide-plus text-orange-500 w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</h3>
<p className="text-slate-400 text-sm leading-relaxed">
              Absolutely. Burggraf Roofing carries full liability and workers'
              compensation insurance for your protection and ours.
            </p>
</div>
</div>
</div>
</section>

<footer className="text-white bg-slate-950 border-slate-900 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded">
<svg className="lucide lucide-home text-white w-5 h-5 stroke-[1.5]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div className="text-white leading-tight font-bold text-lg tracking-tight">
                BURGGRAF
                <br/>
<span className="text-xs font-normal tracking-widest opacity-80">
                  ROOFING
                </span>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
              Oklahoma's premier roofing contractor since 1993. Serving Tulsa,
              Broken Arrow, Jenks, and surrounding areas.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-slate-800 rounded flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition text-slate-400 hover:text-white" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 border border-slate-800 rounded flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition text-slate-400 hover:text-white" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 border border-slate-800 rounded flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition text-slate-400 hover:text-white" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Services
            </h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="">
<a className="hover:text-orange-500 transition" href="#">
                  Residential Roofing
                </a>
</li>
<li className="">
<a className="hover:text-orange-500 transition" href="#">
                  Commercial Roofing
                </a>
</li>
<li className="">
<a className="hover:text-orange-500 transition" href="#">
                  Roof Repairs
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition" href="#">
                  Storm Restoration
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition" href="#">
                  Gutter Systems
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Company
            </h4>
<ul className="space-y-4 text-sm text-slate-400">
<li>
<a className="hover:text-orange-500 transition" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition" href="#">
                  Our Portfolio
                </a>
</li>
<li>
<a className="hover:text-orange-500 transition" href="#">Reviews</a>
</li>
<li>
<a className="hover:text-orange-500 transition" href="#">Careers</a>
</li>
<li>
<a className="hover:text-orange-500 transition" href="#">Contact</a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Contact Us
            </h4>
<ul className="space-y-6 text-sm text-slate-400">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-5 h-5 text-orange-500 mt-0.5 shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>400 W Albany St,Broken Arrow, OK 74012</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone w-5 h-5 text-orange-500 shrink-0" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>(918) 370-4444</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail w-5 h-5 text-orange-500 shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>info@burggrafroofing.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<div>© 2023 Burggraf Roofing. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
