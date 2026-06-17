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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-teal-600 p-1.5 rounded-lg group-hover:bg-teal-700 transition-colors text-white">
<svg className="lucide lucide-activity w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900 hidden sm:block">Centre of Dental Excellence</span>
<span className="text-lg font-bold tracking-tight text-slate-900 sm:hidden">CDE</span>
</a>

<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#hygiene">Hygiene</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#whitening">Whitening</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#contact">Contact</a>
</div>

<a className="hidden md:inline-flex items-center gap-2 bg-teal-600 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-teal-600/20 hover:shadow-teal-600/40 hover:bg-teal-700 text-white" href="tel:048861904">
<svg className="lucide lucide-phone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                04 886 1904
            </a>

<button className="lg:hidden text-slate-900">
<svg className="lucide lucide-menu w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-teal-500"></span> Family Friendly Dental Centre
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                        Great Teeth, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-teal-600">Beautiful Smile.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Wellington-based Centre of Dental Excellence gives you plenty to smile about with a team of expert, friendly dentists and state-of-the-art facilities.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-teal-600 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-teal-600/20 hover:shadow-teal-600/40 hover:-translate-y-1 hover:bg-teal-700 text-white" href="#book">
                            Book Appointment
                            <svg className="lucide lucide-calendar w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-teal-200 hover:text-teal-600" href="#services">
                            Our Services
                            <svg className="lucide lucide-arrow-down-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>

<div className="flex items-center gap-4 pt-4 border-t border-slate-100 mt-4">
<div className="flex flex-col">
<div className="flex gap-1 text-amber-400 mb-1">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-xs font-semibold text-slate-900">Expert Dental Team in Tawa</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-teal-900/10">
<img alt="Centre of Dental Excellence Tawa" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-teal-950/60"></div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/95 text-teal-800">
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                Local Service Clinic
                            </span>
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/95 text-teal-800">
<svg className="lucide lucide-zap w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1.86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1.78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                EMS GBT Airflow
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-teal-600">Student Special</p>
<p className="font-bold text-slate-900 text-lg">$50 Exam &amp; X-rays</p>
</div>
<div className="p-3 rounded-full bg-teal-100 text-teal-600">
<svg className="lucide lucide-graduation-cap w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 0 6-1 6-1v-7"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-teal-400/20"></div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 rounded-t-[3rem] lg:rounded-t-[4rem] bg-teal-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-teal-600 rounded-3xl p-8 shadow-xl shadow-teal-600/10 transform md:-translate-y-8 text-white">
<div className="p-2 bg-teal-500/30 rounded-lg w-fit mb-4">
<svg className="lucide lucide-heart-handshake w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="text-xl font-bold tracking-tight mb-2">Family Friendly</h3>
<p className="text-sm leading-relaxed text-teal-50">We make visits stress-free for all ages with a gentle, approachable team.</p>
</div>

<div className="p-6">
<h3 className="text-xl font-bold tracking-tight mb-2 text-white">Preventative Care</h3>
<p className="text-sm text-teal-200/60 leading-relaxed">Treatments include fissure sealants and regular visits to our hygienist to prevent future problems.</p>
</div>

<div className="p-6">
<h3 className="text-xl font-bold tracking-tight mb-2 text-white">Cosmetic Dentistry</h3>
<p className="text-sm text-teal-200/60 leading-relaxed">Brighter, straighter teeth giving you the confidence to show your smile to people.</p>
</div>

<div className="p-6">
<h3 className="text-xl font-bold tracking-tight mb-2 text-white">Local Experts</h3>
<p className="text-sm text-teal-200/60 leading-relaxed">Conveniently located at 220 Main Road, Tawa, Wellington serving our community.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-teal-600 font-semibold tracking-wide uppercase text-xs mb-3 block">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Our Dental <span className="text-teal-600">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From routine check-ups to advanced cosmetic procedures, we have everything you need for a healthy smile.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Check Ups" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">General</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<svg className="lucide lucide-clipboard-check w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-slate-900 mt-2">Check Ups &amp; Fillings</h3>
<p className="leading-relaxed text-sm text-slate-500">Regular examinations to keep an eye on your oral health and restorative fillings.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Hygiene" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Preventative</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<svg className="lucide lucide-sparkles w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-slate-900 mt-2">Hygienist &amp; EMS</h3>
<p className="leading-relaxed text-sm text-slate-500">Professional cleaning including the state-of-the-art EMS GBT Airflow technology.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Cosmetic" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Cosmetic</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<svg className="lucide lucide-smile-plus w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11v1a10 10 0 1 1-9-10"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line><path d="M16 5h6"></path><path d="M19 2v6"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-slate-900 mt-2">Teeth Whitening</h3>
<p className="text-slate-500 leading-relaxed text-sm">Professional whitening services to brighten your smile and boost your confidence.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Crowns" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Restorative</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<svg className="lucide lucide-crown w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-slate-900 mt-2">Crowns &amp; Bridges</h3>
<p className="text-slate-500 leading-relaxed text-sm">High-quality restorative solutions to repair damaged or missing teeth.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Implants" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Surgery</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<svg className="lucide lucide-anchor w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="5" r="3"></circle><line x1="12" x2="12" y1="22" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-slate-900 mt-2">Implants</h3>
<p className="text-slate-500 leading-relaxed text-sm">Permanent solutions for missing teeth using the latest diagnostic equipment.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-52 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Dentures" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Senior Care</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<svg className="lucide lucide-users w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 tracking-tight text-slate-900 mt-2">Dentures</h3>
<p className="text-slate-500 leading-relaxed text-sm">Comfortable, custom-fitted dentures to restore function and aesthetics.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-teal-50 text-teal-700">Special Offer</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                        Student Dental <br/> <span className="text-teal-600">Care Package</span>
</h2>
<p className="text-lg text-slate-500 font-medium mb-6">
                        Turning 18 is a big milestone. It isn't the time to stop looking after your teeth. We offer a special price for students while they are studying.
                    </p>
<div className="flex items-center gap-4 mb-8">
<div className="text-4xl font-bold text-teal-600">$50</div>
<div className="text-slate-900 font-semibold leading-tight">Examination &amp; <br/> X-Rays</div>
</div>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="p-2 bg-white rounded-lg shadow-sm text-teal-600 h-fit">
<svg className="lucide lucide-wind w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path><path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path><path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path></svg>
</div>
<div>
<h4 className="font-bold text-slate-900">EMS GBT Airflow</h4>
<p className="text-sm text-slate-500 mt-1">We take health and safety very seriously, investing in EMS GBT Airflow technology to give you peace of mind during cleaning.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="grid grid-cols-2 gap-4">
<img className="rounded-3xl shadow-lg w-full h-64 object-cover -translate-y-8" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img className="rounded-3xl shadow-lg w-full h-64 object-cover translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl">
<div className="bg-teal-600 text-white p-3 rounded-full">
<svg className="lucide lucide-star w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1.95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1.294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1.294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-teal-950 text-white" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative lg:sticky lg:top-24">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                        Request an <br/> Appointment
                    </h2>
<p className="font-medium mb-10 text-lg text-teal-200/80 leading-relaxed">
                        For all enquiries, or to discuss your dental needs, please complete the form and we'll be in touch within 24 hours.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl bg-teal-900/50 border border-teal-800">
<div className="p-2 rounded-lg bg-teal-800 text-teal-200">
<svg className="lucide lucide-map-pin w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-bold text-white text-lg">Location</h4>
<p className="text-teal-200 mt-1">220 Main Road, Tawa, Wellington</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-teal-900/50 border border-teal-800">
<div className="p-2 rounded-lg bg-teal-800 text-teal-200">
<svg className="lucide lucide-clock w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h4 className="font-bold text-white text-lg">Office Hours</h4>
<p className="text-teal-200 mt-1">Mon - Thu: 8:30am - 5:00pm</p>
<p className="text-teal-200">Friday: By Appointment Only</p>
</div>
</div>
</div>

<div className="mt-10 pt-8 border-t border-teal-800/50">
<p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-4">Accepted Payment Methods</p>
<div className="flex flex-wrap gap-3 text-xs font-semibold text-teal-200">
<span className="px-3 py-1.5 rounded bg-teal-900/50 border border-teal-800">EFTPOS</span>
<span className="px-3 py-1.5 rounded bg-teal-900/50 border border-teal-800">VISA</span>
<span className="px-3 py-1.5 rounded bg-teal-900/50 border border-teal-800">Mastercard</span>
<span className="px-3 py-1.5 rounded bg-teal-900/50 border border-teal-800">AMEX</span>
<span className="px-3 py-1.5 rounded bg-teal-900/50 border border-teal-800">Zip</span>
<span className="px-3 py-1.5 rounded bg-teal-900/50 border border-teal-800">Qcard</span>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-teal-800">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-teal-200 mb-1.5">First Name*</label>
<input className="w-full border rounded-xl px-5 py-3.5 placeholder-teal-700/50 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all bg-teal-900/30 border-teal-800 text-white" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-teal-200 mb-1.5">Last Name*</label>
<input className="w-full border rounded-xl px-5 py-3.5 placeholder-teal-700/50 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all bg-teal-900/30 border-teal-800 text-white" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-teal-200 mb-1.5">Phone*</label>
<input className="w-full border rounded-xl px-5 py-3.5 placeholder-teal-700/50 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all bg-teal-900/30 border-teal-800 text-white" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-teal-200 mb-1.5">Email*</label>
<input className="w-full border rounded-xl px-5 py-3.5 placeholder-teal-700/50 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all bg-teal-900/30 border-teal-800 text-white" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-teal-200 mb-1.5">Details / Reason for visit</label>
<textarea className="w-full border rounded-xl px-5 py-3.5 placeholder-teal-700/50 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all bg-teal-900/30 border-teal-800 text-white" rows="4"></textarea>
</div>
<div className="flex items-start gap-2 pt-2">
<input className="mt-1 rounded bg-teal-900 border-teal-700 text-teal-500 focus:ring-teal-500" id="privacy" type="checkbox"/>
<label className="text-xs text-teal-300" htmlFor="privacy">I agree to the Privacy Policy. This site is protected by reCAPTCHA.</label>
</div>
<button className="w-full bg-teal-500 font-semibold text-lg py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 flex items-center justify-center gap-2 mt-4 hover:bg-teal-400 text-white" type="button">
                            Send Request
                            <svg className="lucide lucide-send w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-teal-600 p-1.5 rounded-lg text-white">
<svg className="lucide lucide-activity w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Centre of Dental Excellence</span>
</a>
<p className="text-slate-500 font-medium leading-relaxed text-sm">
                        Family friendly dental centre. <br/> "Great teeth, beautiful smile".
                    </p>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contact Details</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium text-sm">
<svg className="lucide lucide-map-pin w-5 h-5 text-teal-500 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>220 Main Road,<br/>Tawa, Wellington</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium text-sm">
<svg className="lucide lucide-phone w-5 h-5 text-teal-500 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span>04 886 1904</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Office Hours</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Mon - Thu</span>
<span className="text-slate-900">8:30am - 5:00pm</span>
</li>
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Friday</span>
<span className="text-slate-900">By Appointment</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Quick Links</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li><a className="hover:text-teal-600 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Teeth Whitening</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Hygiene</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Book Online</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm text-center md:text-left">© 2026 Centre of Dental Excellence. Powered by Web Genius.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-teal-600" href="#">Privacy Policy</a>
<a className="hover:text-teal-600" href="#">Site Map</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
