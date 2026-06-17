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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-white/20 shadow-lg shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-teal-500 p-1.5 rounded-lg group-hover:bg-teal-600 transition-colors text-white flex items-center justify-center">
<iconify-icon height="24" icon="solar:health-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Avishka<span className="text-teal-600">Care</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#doctors">Doctors</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-teal-600" href="#contact">Contact</a>
</div>

<a className="hidden md:inline-flex items-center gap-2 bg-teal-500 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:bg-teal-600 text-white group" href="#book">
                Book Visit
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>

<button className="md:hidden text-slate-900 flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold tracking-wide uppercase">
<span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
                        Multispecialty Clinic
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-slate-900">
                        Complete Care for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-emerald-600">Body &amp; Smile.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Avishka Health Care brings you expert General Medicine, Diabetology, and Advanced Dentistry under one roof in Ranchi.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-teal-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 hover:-translate-y-1 hover:bg-teal-600 text-white" href="#book">
                            Book Appointment
                            <iconify-icon height="20" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-teal-200 hover:text-teal-600" href="#services">
                            Our Services
                            <iconify-icon height="20" icon="solar:arrow-right-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white bg-slate-100" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white bg-slate-100" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white bg-slate-100" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex gap-0.5 text-yellow-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium mt-1 text-slate-600">Rated Top Clinic in <span className="font-semibold text-slate-900">Ranchi</span></p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-teal-900/10 bg-slate-100">

<img alt="Doctor Consultation" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-teal-950/60"></div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-teal-800">
<iconify-icon height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon> Experienced Doctors
                            </span>
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-teal-800">
<iconify-icon height="16" icon="solar:medical-kit-linear" strokeWidth="1.5" width="16"></iconify-icon> Advanced Equipment
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-teal-600">Dual Specialty</p>
<p className="font-medium text-slate-900">Medicine &amp; Dentistry</p>
</div>
<div className="p-3 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
<iconify-icon height="24" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-teal-400/20"></div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 rounded-t-[3rem] lg:rounded-t-[4rem] bg-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-teal-500 rounded-3xl p-8 shadow-xl shadow-teal-500/10 transform md:-translate-y-8 text-white">
<div className="flex items-center gap-2 mb-2">
<iconify-icon height="32" icon="solar:cup-star-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<p className="text-xl font-medium mb-4">Patient First</p>
<p className="text-sm leading-relaxed text-teal-50">Providing compassionate care near Firayalal Chowk for years.</p>
</div>

<div className="p-6 md:p-8 text-white">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">10k+</h3>
<p className="font-medium mb-2 text-teal-400">Happy Patients</p>
<p className="text-sm text-slate-400">Trusted by families across Ranchi.</p>
</div>

<div className="p-6 md:p-8 text-white">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">2</h3>
<p className="font-medium mb-2 text-teal-400">Core Specialties</p>
<p className="text-sm text-slate-400">Expert General Medicine &amp; Dental Care.</p>
</div>

<div className="p-6 md:p-8 text-white">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">15+</h3>
<p className="font-medium mb-2 text-teal-400">Years Experience</p>
<p className="text-sm text-slate-400">Combined medical expertise.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-teal-600">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    We combine medical expertise with dental precision to handle all your health needs.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="General Medicine" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Medical</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<iconify-icon height="24" icon="solar:stethoscope-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">General Medicine</h3>
<p className="leading-relaxed text-base text-slate-500">Comprehensive diagnosis and treatment for acute and chronic illnesses.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Diabetology" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Specialty</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<iconify-icon height="24" icon="solar:test-tube-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Diabetology</h3>
<p className="leading-relaxed text-base text-slate-500">Expert management of diabetes, blood sugar monitoring, and lifestyle guidance.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="General Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Dental</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<iconify-icon height="24" icon="solar:smile-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Dental Surgery</h3>
<p className="text-slate-500 leading-relaxed text-base">Routine checkups, cleanings, extractions and oral hygiene care.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Advanced Dental" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Advanced</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<iconify-icon height="24" icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Root Canals</h3>
<p className="text-slate-500 leading-relaxed text-base">Painless root canal treatments to save your natural teeth.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Cosmetic Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Cosmetic</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<iconify-icon height="24" icon="solar:stars-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Cosmetic Dentistry</h3>
<p className="text-slate-500 leading-relaxed text-base">Teeth whitening, veneers, and smile makeovers for a confident look.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-teal-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Consultation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">Family</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-teal-600 group-hover:text-white transition-colors bg-white text-teal-600">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Family Health</h3>
<p className="text-slate-500 leading-relaxed text-base">Holistic healthcare solutions for every member of your family.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-teal-50 text-teal-700">Expert Care</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                        Meet Our <span className="text-teal-500">Specialists</span>
</h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        Dr. Avinash and Dr. Shikha lead our clinic with a commitment to excellence and compassionate patient care.
                    </p>
</div>

<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all border-slate-200 text-slate-400 hover:text-white">
<iconify-icon height="20" icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-teal-500 hover:border-teal-500 transition-all border-slate-200 text-slate-400 hover:text-white">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-slate-50 hover:bg-teal-50/50 shadow-sm border border-slate-100">
<div className="flex flex-col sm:flex-row items-center">
<div className="w-full sm:w-1/2 aspect-[4/5] relative overflow-hidden">
<img alt="Dr. Avinash Kumar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-8 sm:w-1/2">
<h4 className="text-2xl font-semibold text-slate-900 mb-1">Dr. Avinash Kumar</h4>
<p className="text-sm font-bold uppercase tracking-wide text-teal-600 mb-4">Diabetologist &amp; Physician</p>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Expert in general medicine and diabetes management, dedicated to improving long-term patient health.</p>
<div className="flex gap-2">
<span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">MBBS</span>
<span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">MD</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-slate-50 hover:bg-teal-50/50 shadow-sm border border-slate-100">
<div className="flex flex-col sm:flex-row items-center">
<div className="w-full sm:w-1/2 aspect-[4/5] relative overflow-hidden">
<img alt="Dr. Shikha" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-8 sm:w-1/2">
<h4 className="text-2xl font-semibold text-slate-900 mb-1">Dr. Shikha</h4>
<p className="text-sm font-bold uppercase tracking-wide text-teal-600 mb-4">Dental Surgeon</p>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Specializing in cosmetic dentistry and oral surgery, bringing bright smiles to every patient.</p>
<div className="flex gap-2">
<span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">BDS</span>
<span className="bg-white border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600">Cosmetic</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                    Frequently Asked <span className="text-teal-500">Questions</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Common questions about our medical and dental services.
                </p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-teal-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">What are your clinic timings?</h2>
<div className="rounded-full p-1.5 text-teal-500 transition duration-300 group-open:-rotate-180 bg-teal-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        We are open from Monday to Saturday. Please check the footer for specific timings or call us to confirm doctor availability.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-teal-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Do you handle dental emergencies?</h2>
<div className="rounded-full p-1.5 text-teal-500 transition duration-300 group-open:-rotate-180 bg-teal-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Yes, Dr. Shikha is available for dental emergencies such as severe toothache or injury. Please call us immediately.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-teal-500/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Do you provide diabetes management plans?</h2>
<div className="rounded-full p-1.5 text-teal-500 transition duration-300 group-open:-rotate-180 bg-teal-50">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Absolutely. Dr. Avinash specializes in diabetology and offers comprehensive diet and medication plans for diabetes management.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-slate-900 text-white" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative hidden lg:block">
<div className="absolute top-0 right-0 w-2/3 h-2/3 bg-teal-500/20 rounded-full blur-3xl"></div>
<img alt="Medical Staff" className="rounded-[2.5rem] shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 object-cover border-4 border-slate-800/50" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-8 -left-8 p-6 rounded-2xl shadow-xl max-w-xs bg-white text-slate-900">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-teal-100 text-teal-600">
<iconify-icon height="24" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="font-bold text-lg">Easy Booking</span>
</div>
<p className="text-sm text-slate-500 font-medium">Get your appointment confirmed instantly.</p>
</div>
</div>

<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                        Start Your Journey to Better Health.
                    </h2>
<p className="font-medium mb-10 text-lg text-slate-400">
                        Fill out the form below to schedule a visit with Dr. Avinash or Dr. Shikha.
                    </p>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Name</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all bg-slate-800/50 border-slate-700 text-white" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="sr-only">Phone</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all bg-slate-800/50 border-slate-700 text-white" placeholder="Phone Number" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 appearance-none cursor-pointer bg-slate-800/50 border-slate-700 text-white">
<option className="text-slate-900">Consultation Type</option>
<option className="text-slate-900">General Medicine</option>
<option className="text-slate-900">Dental Checkup</option>
<option className="text-slate-900">Diabetes Care</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 appearance-none cursor-pointer bg-slate-800/50 border-slate-700 text-white">
<option className="text-slate-900">Preferred Doctor</option>
<option className="text-slate-900">Dr. Avinash Kumar</option>
<option className="text-slate-900">Dr. Shikha</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative">
<input className="w-full border rounded-xl px-5 py-4 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all [color-scheme:dark] bg-slate-800/50 border-slate-700 text-white" onfocus="(this.type='date')" placeholder="Preferred Date" type="text"/>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<button className="w-full bg-teal-500 font-semibold text-lg py-4 rounded-xl transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 flex items-center justify-center gap-2 mt-4 hover:bg-teal-400 text-white" type="button">
                            Confirm Booking
                            <iconify-icon height="24" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-teal-500 p-1.5 rounded-lg text-white flex items-center justify-center">
<iconify-icon height="24" icon="solar:health-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Avishka<span className="text-teal-600">Care</span></span>
</a>
<p className="text-slate-500 font-medium leading-relaxed">
                        Your trusted partner for health in Ranchi. Combining medical excellence with compassionate care for you and your family.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="https://www.facebook.com/DrAvinash.DrShikha/">
<iconify-icon height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all bg-white border-slate-200 text-slate-500 hover:text-white" href="#">
<iconify-icon height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Get in Touch</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium">
<iconify-icon className="text-teal-500 shrink-0 mt-0.5" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Near Firayalal Chowk, New HB Road, Ranchi, Jharkhand</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-teal-500 shrink-0" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>+91 99999 99999</span> 
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Opening Hours</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li className="flex justify-between">
<span>Mon - Sat</span>
<span className="text-slate-900">10:00 AM - 8:00 PM</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-teal-600">By Appointment</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Departments</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li><a className="hover:text-teal-500 transition-colors" href="#">General Medicine</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">Diabetology</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-teal-500 transition-colors" href="#">Cosmetic Dentistry</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm">© 2024 Avishka Health Care. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-teal-600" href="#">Privacy Policy</a>
<a className="hover:text-teal-600" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
