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
<div className="bg-emerald-500 p-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors text-white">
<svg className="lucide lucide-tooth w-6 h-6 stroke-[1.5]" data-lucide="tooth" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 7.5c.34-1.42.74-2.84 1.25-3.87A3.2 3.2 0 0 1 8.35 2h7.3c1.37 0 2.5.9 2.88 2.12a23.9 23.9 0 0 1 1.25 3.38c.34 1.43.59 2.87.59 4.3 0 5.46-3.7 9.88-8.37 10.2l-.63-1.6c-.2-.5-.85-.5-1.05 0l-.63 1.6C4.7 21.68 1 17.26 1 11.8c0-1.43.25-2.87.59-4.3Z"></path><path d="M7 10h10"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Lake Family Dentistry</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#patient-info">Patient Info</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#contact">Contact</a>
</div>

<a className="hidden md:inline-flex items-center gap-2 bg-emerald-500 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-600 text-white" href="#contact">
                Request Appointment
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-slate-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Serving Colonia, NJ &amp; Surrounding Areas
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                        Comprehensive <br/>
                        Dentistry for <span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-emerald-600">All Ages.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Providing quality dental care to the greater Colonia community for over 40 years. Dr. Qadri and his team are dedicated to providing you with personalized, gentle care.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:bg-emerald-600 text-white" href="#contact">
                            Contact Us
                            <svg className="lucide lucide-phone-call w-4 h-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-200 hover:text-emerald-600" href="#services">
                            Our Services
                            <svg className="lucide lucide-arrow-down-right w-4 h-4" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>

<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm font-medium mt-1 text-slate-600">Rated <span className="font-semibold text-slate-900">Best in Colonia</span></p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-emerald-900/10">
<img alt="Lake Family Dentistry" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-emerald-950/60"></div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-emerald-800">
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> 40+ Years Experience
                            </span>
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-emerald-800">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 296 Lake Ave, Colonia
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-600">Dr. Danish Qadri</p>
<p className="font-medium text-slate-900">Gentle, Personalized Care.</p>
</div>
<div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
<svg className="lucide lucide-heart-handshake w-6 h-6" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-emerald-400/20"></div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 rounded-t-[3rem] lg:rounded-t-[4rem] bg-emerald-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-emerald-500 rounded-3xl p-8 shadow-xl shadow-emerald-500/10 transform md:-translate-y-8 text-white">
<h3 className="text-4xl font-semibold tracking-tight mb-2">40Y+</h3>
<p className="text-xl font-medium mb-4">Serving Community</p>
<p className="text-sm leading-relaxed text-emerald-100">Proudly serving families in Colonia, Edison, and Woodbridge for over four decades.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">Top</h3>
<p className="font-medium mb-2 text-emerald-400">Rated Dentist</p>
<p className="text-sm text-emerald-100/60">Committed to providing the highest quality of dental care.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">Full</h3>
<p className="font-medium mb-2 text-emerald-400">Service Practice</p>
<p className="text-sm text-emerald-100/60">From general checkups to implants and cosmetic procedures.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">100%</h3>
<p className="font-medium mb-2 text-emerald-400">Patient Focus</p>
<p className="text-sm text-emerald-100/60">We treat you like family with a gentle, personalized touch.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Our Featured <span className="text-emerald-600">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    We offer a full range of modern dental solutions tailored to meet your family's needs.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="General Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">01</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">General Dentistry</h3>
<p className="leading-relaxed text-base text-slate-500">Cleanings, fillings, and preventive care to keep your smile healthy for a lifetime.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Cosmetic Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">02</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Cosmetic Dentistry</h3>
<p className="leading-relaxed text-base text-slate-500">Achieve a beautiful smile with Teeth Whitening, Porcelain Veneers, and Lumineers.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Dental Implants" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">03</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<svg className="lucide lucide-hammer w-6 h-6" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path><path d="M17.64 15 22 10.64"></path><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V2.46V2a2 2 0 0 0-2-2H2v6.24c0 .85.33 1.66.93 2.25l1.25 1.25"></path><path d="M3 3l17.66 17.66"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Dental Implants</h3>
<p className="text-slate-500 leading-relaxed text-base">Replace missing teeth securely with artificial tooth roots and crowns for a natural look.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Invisalign" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">04</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<svg className="lucide lucide-smile-plus w-6 h-6" data-lucide="smile-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11v1a10 10 0 1 1-9-10"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line><path d="M16 5h6"></path><path d="M19 2v6"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Invisalign</h3>
<p className="text-slate-500 leading-relaxed text-base">The invisible way to straighten your teeth. Achieve the smile you want without metal braces.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Snoring &amp; Sleep Apnea" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">05</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<svg className="lucide lucide-moon w-6 h-6" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Snoring &amp; Sleep Apnea</h3>
<p className="text-slate-500 leading-relaxed text-base">We provide comfortable oral appliances to alleviate snoring and treat mild sleep apnea.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Pediatric Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">06</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<svg className="lucide lucide-baby w-6 h-6" data-lucide="baby" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Kids Corner</h3>
<p className="text-slate-500 leading-relaxed text-base">Dentistry for kids, fluoride treatments, sealants, and athletic mouthguards.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-slate-100 text-slate-600">Meet the Doctor</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                        Dr. Danish <span className="text-emerald-500">Qadri, DMD</span>
</h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        Dedicated to providing personalized, gentle care to the Colonia community.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="hidden md:block group relative rounded-3xl overflow-hidden transition-colors bg-emerald-50/50">
<div className="aspect-[4/5] w-full relative flex items-center justify-center p-8 text-center">
<div className="space-y-4">
<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
<svg className="lucide lucide-graduation-cap w-8 h-8" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h4 className="text-lg font-semibold text-slate-900">Education &amp; Training</h4>
<p className="text-sm text-slate-500">UMDNJ, Mount Sinai Medical Center, NYU</p>
</div>
</div>
</div>

<div className="lg:col-span-1 md:-mt-12 group relative rounded-3xl overflow-hidden bg-emerald-500 shadow-xl shadow-emerald-500/20 cursor-pointer">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. Danish Qadri" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-emerald-900/80"></div>
<div className="absolute top-4 right-4 p-2 rounded-full bg-white">
<svg className="lucide lucide-star w-4 h-4 text-emerald-600 fill-emerald-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
<span className="inline-block px-2 py-0.5 rounded-md backdrop-blur-md text-[10px] font-bold uppercase tracking-widest mb-2 bg-white/20">Lead Dentist</span>
<h4 className="text-xl font-semibold">Dr. Danish Qadri, DMD</h4>
<p className="text-sm font-medium text-emerald-100">General &amp; Cosmetic Dentist</p>
</div>
</div>

<div className="hidden md:block group relative rounded-3xl overflow-hidden transition-colors bg-emerald-50/50">
<div className="aspect-[4/5] w-full relative flex items-center justify-center p-8 text-center">
<div className="space-y-4">
<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
<svg className="lucide lucide-users w-8 h-8" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h4 className="text-lg font-semibold text-slate-900">Professional Staff</h4>
<p className="text-sm text-slate-500">Meet our great dental team dedicated to your comfort.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="patient-info">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                    Patient <span className="text-emerald-500">Information</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Common questions about your visit to Lake Family Dentistry.
                </p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">What should I expect on my first visit?</h2>
<div className="rounded-full p-1.5 text-emerald-500 transition duration-300 group-open:-rotate-180 bg-emerald-50">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Your first visit involves a comprehensive exam, x-rays if needed, and a consultation with Dr. Qadri to discuss your oral health goals and treatment plan.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Do you handle dental emergencies?</h2>
<div className="rounded-full p-1.5 text-emerald-500 transition duration-300 group-open:-rotate-180 bg-emerald-50">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Yes, we offer emergency treatment. If you are in pain or have had an accident, please call our office immediately at (732) 388-2822.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">What financial options are available?</h2>
<div className="rounded-full p-1.5 text-emerald-500 transition duration-300 group-open:-rotate-180 bg-emerald-50">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        We accept Care Credit and various insurance plans. Please contact our office to verify your coverage and discuss payment options.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Is Invisalign right for me?</h2>
<div className="rounded-full p-1.5 text-emerald-500 transition duration-300 group-open:-rotate-180 bg-emerald-50">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Invisalign is a great option for many adults and teens. Ask Dr. Qadri about the free bleaching gel included with every Invisalign case!
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-emerald-950 text-white" id="contact">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                        Contact Us
                    </h2>
<p className="font-medium mb-10 text-lg text-emerald-200/80">
                        Ready for your next visit? Fill out the form or contact us directly. We look forward to seeing your smile.
                    </p>
<div className="space-y-6 mb-8">
<div className="flex items-start gap-4">
<div className="bg-emerald-900/50 p-3 rounded-xl border border-emerald-800">
<svg className="lucide lucide-map-pin w-6 h-6 text-emerald-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-xl">Visit Us</h4>
<p className="text-emerald-200/70">296 Lake Ave.<br/>Colonia, NJ 07067</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-emerald-900/50 p-3 rounded-xl border border-emerald-800">
<svg className="lucide lucide-phone w-6 h-6 text-emerald-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="font-semibold text-xl">Call Us</h4>
<p className="text-emerald-200/70">(732) 388-2822</p>
</div>
</div>
</div>
</div>

<div>
<form className="space-y-4 bg-emerald-900/30 p-8 rounded-3xl border border-emerald-800 backdrop-blur-sm">
<div>
<label className="sr-only">Name</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-950/50 border-emerald-800/50 text-white" placeholder="Name *" type="text"/>
</div>
<div>
<label className="sr-only">Email</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-950/50 border-emerald-800/50 text-white" placeholder="E-mail *" type="email"/>
</div>
<div>
<label className="sr-only">Phone</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-950/50 border-emerald-800/50 text-white" placeholder="Phone *" type="tel"/>
</div>
<div>
<textarea className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-950/50 border-emerald-800/50 text-white resize-none" placeholder="Message *" rows="4"></textarea>
</div>
<button className="w-full bg-emerald-500 font-semibold text-lg py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 mt-4 hover:bg-emerald-400 text-white" type="button">
                            Send Message
                            <svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
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
<div className="bg-emerald-500 p-1.5 rounded-lg text-white">
<svg className="lucide lucide-tooth w-6 h-6 stroke-[1.5]" data-lucide="tooth" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.22 7.5c.34-1.42.74-2.84 1.25-3.87A3.2 3.2 0 0 1 8.35 2h7.3c1.37 0 2.5.9 2.88 2.12a23.9 23.9 0 0 1 1.25 3.38c.34 1.43.59 2.87.59 4.3 0 5.46-3.7 9.88-8.37 10.2l-.63-1.6c-.2-.5-.85-.5-1.05 0l-.63 1.6C4.7 21.68 1 17.26 1 11.8c0-1.43.25-2.87.59-4.3Z"></path><path d="M7 10h10"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Lake Family</span>
</a>
<p className="text-slate-500 font-medium leading-relaxed">
                        Comprehensive dentistry for all ages in Colonia, NJ.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all bg-white border-slate-200 text-emerald-600 hover:text-white" href="http://www.facebook.com/LakeFamilyDentistry" target="_blank">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all bg-white border-slate-200 text-emerald-600 hover:text-white" href="http://www.twitter.com/LakeFamilyDent" target="_blank">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all bg-white border-slate-200 text-emerald-600 hover:text-white" href="http://www.linkedin.com/in/danishqadri" target="_blank">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Our Location</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium">
<svg className="lucide lucide-map-pin w-5 h-5 text-emerald-500 shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>296 Lake Ave.<br/>Colonia, NJ 07067</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<svg className="lucide lucide-phone w-5 h-5 text-emerald-500 shrink-0" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>(732) 388-2822</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Services</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li><a className="hover:text-emerald-500 transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Invisalign</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Patient Info</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li><a className="hover:text-emerald-500 transition-colors" href="#">First Visit</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Financial Options</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Forms</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Blog</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm">© 2024 Lake Family Dentistry. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600" href="#">Privacy Policy</a>
<a className="hover:text-emerald-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
