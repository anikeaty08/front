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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
colors: {
medical: {
50: '#F8FBFF',
100: '#E3F2FD',
500: '#1E88E5',
600: '#1565C0',
},
teal: {
400: '#26C6DA',
500: '#00C9A7',
}
},
boxShadow: {
'glow': '0 0 20px rgba(0, 201, 167, 0.4)',
'glow-blue': '0 0 25px rgba(30, 136, 229, 0.3)',
'card': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
'card-hover': '0 20px 40px -5px rgba(30, 136, 229, 0.15)',
}
}
}
}



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
      

<nav className="sticky top-0 z-50 w-full glass border-b border-slate-100/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-medical-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:medical-kit-bold" width="22"></iconify-icon>
</div>
<span className="text-xl font-heading font-bold tracking-tight text-slate-900 group-hover:text-medical-500 transition-colors">MediFlow</span>
</a>
<div className="hidden lg:flex items-center gap-1 bg-white/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
<a className="text-sm font-medium text-slate-500 hover:text-medical-600 hover:bg-white px-5 py-2 rounded-full transition-all" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-medical-600 hover:bg-white px-5 py-2 rounded-full transition-all" href="#doctors">Doctors</a>
<a className="text-sm font-medium text-slate-500 hover:text-medical-600 hover:bg-white px-5 py-2 rounded-full transition-all" href="#departments">Departments</a>
<a className="text-sm font-medium text-slate-500 hover:text-medical-600 hover:bg-white px-5 py-2 rounded-full transition-all" href="#blog">Blog</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-heading font-medium px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group">
                    Book Now
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="lg:pt-28 lg:pb-48 overflow-hidden pt-20 pb-32 relative">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute -top-[10%] -left-[5%] w-[40rem] h-[40rem] bg-blue-200/20 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse"></div>
<div className="absolute top-[20%] -right-[10%] w-[35rem] h-[35rem] bg-teal-200/20 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-medical-600 text-xs font-semibold uppercase tracking-wide animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                    No.1 Healthcare Solution
                </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-bold text-slate-900 tracking-tight font-heading">Modern Care for a <br/> <span className="text-gradient">Healthier Future</span></h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed font-light">
                    Experience the next generation of healthcare. We combine advanced technology with compassionate care to provide precise diagnostics and treatment.
                </p>
<div className="flex flex-wrap gap-5 pt-2">
<button className="relative overflow-hidden bg-gradient-to-r from-medical-500 to-teal-500 text-white px-8 py-4 rounded-full font-medium transition-all shadow-glow hover:shadow-lg hover:-translate-y-1 group">
<span className="relative z-10 flex items-center gap-2">
                            Book Appointment
                            <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-medical-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
<button className="px-8 py-4 rounded-full font-medium text-slate-600 border border-slate-200 hover:bg-white hover:border-white hover:shadow-lg transition-all flex items-center gap-2 group bg-transparent">
                        Find a Doctor
                        <iconify-icon className="group-hover:text-teal-500 transition-colors" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-8 pt-8 border-t border-slate-200/50">
<div>
<p className="text-3xl font-heading font-bold text-slate-900">25k+</p>
<p className="text-sm text-slate-400">Happy Patients</p>
</div>
<div>
<p className="text-3xl font-heading font-bold text-slate-900">100+</p>
<p className="text-sm text-slate-400">Expert Doctors</p>
</div>
<div>
<p className="text-4xl text-yellow-400 flex">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-lg font-bold text-slate-900 self-center ml-1">4.9/5</span>
</p>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-medical-100 to-teal-100 rounded-[3rem] rotate-3 blur-sm scale-95 opacity-80"></div>
<div className="absolute inset-0 bg-white rounded-[3rem] -rotate-3 border border-slate-100 shadow-2xl overflow-hidden">
<img alt="Doctor" className="object-top hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-10 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-blue-500/10 border border-white/50 hover:scale-105 transition-transform cursor-default">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:shield-check-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase">Status</p>
<p className="text-sm font-bold text-slate-900">Top Rated Clinic</p>
</div>
</div>
</div>
<div className="absolute bottom-12 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl shadow-teal-500/10 border border-white/50 hover:scale-105 transition-transform cursor-default max-w-[200px]">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
<iconify-icon icon="solar:heart-pulse-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Cardiology</p>
<p className="text-xs text-slate-500 mt-1">Leading heart care specialists available.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-5xl mx-auto px-6 relative z-30 -mt-24 mb-24">
<div className="glass-card p-3 rounded-[24px] shadow-glow-blue hover:shadow-2xl transition-shadow duration-500">
<form className="bg-white rounded-[20px] p-4 lg:p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end border border-slate-50">
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Specialty</label>
<div className="relative group">
<select className="w-full h-12 pl-10 pr-4 bg-slate-50 border border-transparent rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all appearance-none cursor-pointer outline-none text-slate-700">
<option>Cardiology</option>
<option>Neurology</option>
<option>Pediatrics</option>
</select>
<iconify-icon className="absolute left-3 top-3.5 text-slate-400 group-hover:text-medical-500 transition-colors" icon="solar:heart-angle-linear" width="20"></iconify-icon>
<iconify-icon className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Doctor</label>
<div className="relative group">
<select className="w-full h-12 pl-10 pr-4 bg-slate-50 border border-transparent rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all appearance-none cursor-pointer outline-none text-slate-700">
<option>Choose a doctor</option>
<option>Dr. Sarah Smith</option>
<option>Dr. John Doe</option>
</select>
<iconify-icon className="absolute left-3 top-3.5 text-slate-400 group-hover:text-medical-500 transition-colors" icon="solar:stethoscope-linear" width="20"></iconify-icon>
<iconify-icon className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Date</label>
<div className="relative group">
<input className="w-full h-12 pl-10 pr-4 bg-slate-50 border border-transparent rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-medical-500/20 focus:border-medical-500 transition-all outline-none text-slate-700" type="date"/>
<iconify-icon className="absolute left-3 top-3.5 text-slate-400 group-hover:text-medical-500 transition-colors" icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
</div>
<button className="h-12 w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-medical-600 hover:to-teal-500 text-white font-medium rounded-xl transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group overflow-hidden relative" type="submit">
<span className="relative z-10">Book Visit</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</form>
</div>
</div>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="services">
<div className="text-center mb-16 space-y-3">
<span className="text-teal-500 font-bold text-xs tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Departments</span>
<h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight">Expertise You Can <span className="text-gradient">Trust</span></h2>
<p className="text-slate-500 max-w-2xl mx-auto">Comprehensive medical services designed to meet the diverse health needs of our community.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden hover-lift">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-blue-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
<iconify-icon icon="solar:heart-pulse-bold-duotone" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3 relative z-10">Cardiology</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">Diagnostic and interventional services for heart conditions using state-of-the-art technology.</p>
<a className="inline-flex items-center text-sm font-semibold text-blue-600 relative z-10 group/link" href="#">
                    Learn more <iconify-icon className="ml-1 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden hover-lift">
<div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-white rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm border border-teal-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
<iconify-icon icon="solar:bone-bold-duotone" width="30"></iconify-icon>
</div>
<h3 className="z-10 text-xl font-bold text-slate-900 font-heading mb-3 relative">Orthopedics</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">Complete care for bones, joints, and muscles including sports medicine and rehabilitation.</p>
<a className="inline-flex items-center text-sm font-semibold text-teal-600 relative z-10 group/link" href="#">
                    Learn more <iconify-icon className="ml-1 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden hover-lift">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-white rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm border border-purple-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
<iconify-icon icon="solar:brain-bold-duotone" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3 relative z-10">Neurology</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">Expert care for disorders of the nervous system, brain, spinal cord, and nerves.</p>
<a className="inline-flex items-center text-sm font-semibold text-purple-600 relative z-10 group/link" href="#">
                    Learn more <iconify-icon className="ml-1 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden hover-lift">
<div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-white rounded-2xl flex items-center justify-center text-rose-600 mb-6 shadow-sm border border-rose-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
<iconify-icon icon="solar:test-tube-bold-duotone" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3 relative z-10">Laboratory</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">Accurate diagnostic testing with rapid results to guide your treatment plan effectively.</p>
<a className="inline-flex items-center text-sm font-semibold text-rose-600 relative z-10 group/link" href="#">
                    Learn more <iconify-icon className="ml-1 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden hover-lift">
<div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-white rounded-2xl flex items-center justify-center text-amber-600 mb-6 shadow-sm border border-amber-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
<iconify-icon icon="solar:eye-bold-duotone" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3 relative z-10">Ophthalmology</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">Advanced eye care services from routine vision exams to complex surgical procedures.</p>
<a className="inline-flex items-center text-sm font-semibold text-amber-600 relative z-10 group/link" href="#">
                    Learn more <iconify-icon className="ml-1 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-[24px] border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 relative overflow-hidden hover-lift">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 bg-gradient-to-br from-cyan-100 to-white rounded-2xl flex items-center justify-center text-cyan-600 mb-6 shadow-sm border border-cyan-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10">
<iconify-icon icon="solar:smile-circle-bold-duotone" width="30"></iconify-icon>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3 relative z-10">Dental Care</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 relative z-10">Preventive, cosmetic, and restorative dentistry to keep your smile healthy and bright.</p>
<a className="inline-flex items-center text-sm font-semibold text-cyan-600 relative z-10 group/link" href="#">
                    Learn more <iconify-icon className="ml-1 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-20 pr-6 pb-20 pl-6 relative">
<div className="absolute top-0 right-0 w-1/3 h-full bg-medical-50/50 skew-x-12 transform origin-top-right"></div>
<div className="grid lg:grid-cols-2 gap-20 z-10 max-w-7xl mr-auto ml-auto relative gap-x-20 gap-y-20 items-center">

<div className="relative perspective-midrange group">

<div className="absolute -top-12 -left-12 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-700"></div>
<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] opacity-40"></div>

<div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white transform transition-transform duration-700 hover:scale-[1.02] bg-white">
<img alt="Medical Team" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-8 flex items-end h-1/2">
<div className="text-white">
<p className="font-semibold text-lg">World-Class Care</p>
<p className="text-slate-200 text-sm font-light">Rated #1 in Patient Satisfaction</p>
</div>
</div>
</div>

<div className="absolute top-8 -right-8 z-20 bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-3 animate-fade-in-up">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medical-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-medical-500/20">
<svg className="lucide lucide-award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900 font-heading">15+</p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Years Exp.</p>
</div>
</div>

<div className="absolute -bottom-8 -left-8 z-30 w-64 rounded-2xl bg-white p-2 shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up delay-200 hidden md:block">
<div className="relative rounded-xl overflow-hidden h-40">
<img alt="Technology" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-800">New Tech</div>
</div>
</div>
</div>

<div className="relative z-10 space-y-8">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-medical-600 text-xs font-bold uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-medical-500"></span>
</span>
                Our Mission
            </div>
<h2 className="text-4xl lg:text-5xl font-heading font-semibold text-slate-900 leading-[1.15] tracking-tight">
                Healthcare Designed <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-teal-500">Around You</span>
</h2>
<p className="text-slate-500 text-lg leading-relaxed font-light">
                We combine state-of-the-art medical technology with a compassionate, human-centered approach. MediFlow isn't just a clinic; it's your partner in lifelong wellness.
            </p>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="group p-4 rounded-2xl bg-white border border-slate-100 hover:border-medical-200 hover:shadow-lg hover:shadow-medical-500/10 transition-all duration-300 cursor-default">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-medical-50 text-medical-600 flex items-center justify-center shrink-0 group-hover:bg-medical-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Advanced Diagnostics</h4>
<p className="text-xs text-slate-500 leading-relaxed">Precision imaging and rapid lab results.</p>
</div>
</div>
</div>
<div className="group p-4 rounded-2xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 cursor-default">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">24/7 Availability</h4>
<p className="text-xs text-slate-500 leading-relaxed">Emergency care whenever you need it.</p>
</div>
</div>
</div>
<div className="group p-4 rounded-2xl bg-white border border-slate-100 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-default">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-graduation-cap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Top Specialists</h4>
<p className="text-xs text-slate-500 leading-relaxed">Board-certified experts in every field.</p>
</div>
</div>
</div>
<div className="group p-4 rounded-2xl bg-white border border-slate-100 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300 cursor-default">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-heart-handshake" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.15-.26c2.15 1.35 2 5.05 0 5.05"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Patient Focused</h4>
<p className="text-xs text-slate-500 leading-relaxed">Personalized care plans for everyone.</p>
</div>
</div>
</div>
</div>

<button className="relative overflow-hidden group bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
<span className="relative z-10 flex items-center gap-2">
                Discover Our Story
                <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-medical-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-20 gap-y-20" id="doctors">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="space-y-3">
<span className="text-teal-500 font-bold text-xs tracking-widest uppercase">Our Team</span>
<h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight">Meet Our <span className="text-gradient">Specialists</span></h2>
</div>
<a className="px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors" href="#">View All Doctors</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-white rounded-[24px] p-6 shadow-card hover:shadow-card-hover border border-slate-100 hover-lift text-center transition-all">
<div className="relative w-32 h-32 mx-auto mb-6">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-medical-500 to-teal-400 p-1 group-hover:rotate-180 transition-transform duration-700"></div>
<img alt="Dr" className="w-full h-full object-cover rounded-full border-4 border-white relative z-10" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md z-20">
<iconify-icon className="text-blue-500 text-xl" icon="solar:verified-check-bold"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-lg font-heading font-bold text-slate-900">Dr. James Wilson</h3>
<p className="text-sm font-medium text-teal-500">Cardiology</p>
</div>
<div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<a className="text-slate-400 hover:text-medical-500" href="#"><iconify-icon icon="ri:linkedin-fill"></iconify-icon></a>
<a className="text-slate-400 hover:text-medical-500" href="#"><iconify-icon icon="ri:twitter-x-fill"></iconify-icon></a>
</div>
<button className="w-full mt-6 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors group-hover:shadow-lg">Book Now</button>
</div>

<div className="group bg-white rounded-[24px] p-6 shadow-card hover:shadow-card-hover border border-slate-100 hover-lift text-center transition-all">
<div className="relative w-32 h-32 mx-auto mb-6">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 p-1 group-hover:rotate-180 transition-transform duration-700"></div>
<img alt="Dr" className="w-full h-full object-cover rounded-full border-4 border-white relative z-10" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md z-20">
<iconify-icon className="text-purple-500 text-xl" icon="solar:verified-check-bold"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-lg font-heading font-bold text-slate-900">Dr. Anita Patel</h3>
<p className="text-sm font-medium text-purple-500">Neurology</p>
</div>
<div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<a className="text-slate-400 hover:text-medical-500" href="#"><iconify-icon icon="ri:linkedin-fill"></iconify-icon></a>
<a className="text-slate-400 hover:text-medical-500" href="#"><iconify-icon icon="ri:twitter-x-fill"></iconify-icon></a>
</div>
<button className="w-full mt-6 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors group-hover:shadow-lg">Book Now</button>
</div>

<div className="group bg-white rounded-[24px] p-6 shadow-card hover:shadow-card-hover border border-slate-100 hover-lift text-center transition-all">
<div className="relative w-32 h-32 mx-auto mb-6">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-rose-500 to-amber-400 p-1 group-hover:rotate-180 transition-transform duration-700"></div>
<img alt="Dr" className="w-full h-full object-cover rounded-full border-4 border-white relative z-10" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md z-20">
<iconify-icon className="text-rose-500 text-xl" icon="solar:verified-check-bold"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-lg font-heading font-bold text-slate-900">Dr. Robert Chen</h3>
<p className="text-sm font-medium text-rose-500">Pediatrics</p>
</div>
<div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<a className="text-slate-400 hover:text-medical-500" href="#"><iconify-icon icon="ri:linkedin-fill"></iconify-icon></a>
<a className="text-slate-400 hover:text-medical-500" href="#"><iconify-icon icon="ri:twitter-x-fill"></iconify-icon></a>
</div>
<button className="w-full mt-6 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors group-hover:shadow-lg">Book Now</button>
</div>

<div className="group bg-white rounded-[24px] p-6 shadow-card hover:shadow-card-hover border border-slate-100 hover-lift text-center transition-all">
<div className="relative w-32 h-32 mx-auto mb-6">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-400 p-1 group-hover:rotate-180 transition-transform duration-700"></div>
<img alt="Dr" className="w-full h-full object-cover rounded-full border-4 border-white relative z-10" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md z-20">
<iconify-icon className="text-cyan-500 text-xl" icon="solar:verified-check-bold"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-lg font-heading font-bold text-slate-900">Dr. Emily Davis</h3>
<p className="text-sm font-medium text-cyan-500">Dental</p>
</div>
<div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<a className="text-slate-400 hover:text-medical-500" href="#"><iconify-icon icon="ri:linkedin-fill"></iconify-icon></a>
<a className="text-slate-400 hover:text-medical-500" href="#"><iconify-icon icon="ri:twitter-x-fill"></iconify-icon></a>
</div>
<button className="w-full mt-6 py-2.5 rounded-xl bg-slate-50 text-slate-700 text-sm font-semibold hover:bg-slate-900 hover:text-white transition-colors group-hover:shadow-lg">Book Now</button>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#99f6e4 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">Simple Steps to Better Health</h2>
<p className="text-slate-400 max-w-xl mx-auto">A seamless journey from booking to recovery, designed for your comfort.</p>
</div>
<div className="grid md:grid-cols-4 gap-8">

<div className="group relative text-center">
<div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center text-teal-400 mb-6 border border-slate-700 group-hover:border-teal-500 transition-colors relative z-10">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:calendar-search-linear" width="36"></iconify-icon>
<div className="absolute inset-0 bg-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-700 to-slate-900 z-0"></div>
<h3 className="text-xl font-heading font-semibold mb-2">1. Book Online</h3>
<p className="text-slate-400 text-sm leading-relaxed px-4">Choose your specialist and schedule a time that works for you.</p>
</div>

<div className="group relative text-center">
<div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-slate-700 group-hover:border-blue-500 transition-colors relative z-10">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:clipboard-check-linear" width="36"></iconify-icon>
<div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-700 to-slate-900 z-0"></div>
<h3 className="text-xl font-heading font-semibold mb-2">2. Check-In</h3>
<p className="text-slate-400 text-sm leading-relaxed px-4">Digital registration saves time before you even arrive at the clinic.</p>
</div>

<div className="group relative text-center">
<div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center text-purple-400 mb-6 border border-slate-700 group-hover:border-purple-500 transition-colors relative z-10">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:stethoscope-linear" width="36"></iconify-icon>
<div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-slate-700 to-slate-900 z-0"></div>
<h3 className="text-xl font-heading font-semibold mb-2">3. Consultation</h3>
<p className="text-slate-400 text-sm leading-relaxed px-4">Receive expert diagnosis and personalized advice from our doctors.</p>
</div>

<div className="group relative text-center">
<div className="w-20 h-20 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center text-rose-400 mb-6 border border-slate-700 group-hover:border-rose-500 transition-colors relative z-10">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:pill-linear" width="36"></iconify-icon>
<div className="absolute inset-0 bg-rose-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h3 className="text-xl font-heading font-semibold mb-2">4. Treatment</h3>
<p className="text-slate-400 text-sm leading-relaxed px-4">Get your prescription and follow the comprehensive recovery plan.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-medical-50">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 text-center mb-16 tracking-tight">What Our <span className="text-gradient">Patients Say</span></h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-[32px] hover-lift relative group">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 text-lg italic mb-8 font-light">"The staff was incredibly professional and the facility is top-notch. I felt cared for from the moment I walked in."</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div>
<p className="text-base font-bold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-teal-600 flex items-center gap-1 font-semibold uppercase">
<iconify-icon icon="solar:verified-check-bold" width="12"></iconify-icon> Patient
                            </p>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-[32px] hover-lift relative group md:-translate-y-4">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 text-lg italic mb-8 font-light">"Booking an appointment was seamless. Dr. Wilson took the time to explain everything clearly. Highly recommended."</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<p className="text-base font-bold text-slate-900">Mark Thompson</p>
<p className="text-xs text-teal-600 flex items-center gap-1 font-semibold uppercase">
<iconify-icon icon="solar:verified-check-bold" width="12"></iconify-icon> Patient
                            </p>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-[32px] hover-lift relative group">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 text-lg italic mb-8 font-light">"State of the art equipment and a very clean environment. Best healthcare experience I've had in years."</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-6">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<p className="text-base font-bold text-slate-900">Elena Rodriguez</p>
<p className="text-xs text-teal-600 flex items-center gap-1 font-semibold uppercase">
<iconify-icon icon="solar:verified-check-bold" width="12"></iconify-icon> Patient
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-100" id="departments">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
<div className="lg:w-1/3 space-y-3">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Departments</h3>
<button className="w-full text-left px-6 py-4 rounded-2xl bg-gradient-to-r from-medical-500 to-teal-500 text-white font-semibold shadow-glow flex items-center justify-between group">
<span className="flex items-center gap-3">
<iconify-icon icon="solar:heart-pulse-bold" width="20"></iconify-icon>
                        Cardiology Center
                    </span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full text-left px-6 py-4 rounded-2xl text-slate-600 font-medium hover:bg-slate-50 transition-all flex items-center justify-between group hover:text-medical-600 hover:shadow-sm border border-transparent hover:border-slate-100">
<span className="flex items-center gap-3">
<iconify-icon icon="solar:brain-linear" width="20"></iconify-icon>
                        Neurology Department
                    </span>
</button>
<button className="w-full text-left px-6 py-4 rounded-2xl text-slate-600 font-medium hover:bg-slate-50 transition-all flex items-center justify-between group hover:text-medical-600 hover:shadow-sm border border-transparent hover:border-slate-100">
<span className="flex items-center gap-3">
<iconify-icon icon="solar:smile-circle-linear" width="20"></iconify-icon>
                        Pediatrics Clinic
                    </span>
</button>
<button className="w-full text-left px-6 py-4 rounded-2xl text-slate-600 font-medium hover:bg-slate-50 transition-all flex items-center justify-between group hover:text-medical-600 hover:shadow-sm border border-transparent hover:border-slate-100">
<span className="flex items-center gap-3">
<iconify-icon icon="solar:test-tube-linear" width="20"></iconify-icon>
                        Diagnostic Lab
                    </span>
</button>
</div>
<div className="lg:w-2/3 bg-medical-50/50 rounded-[32px] p-8 lg:p-12 border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
<div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-medical-600 shadow-sm shrink-0 border border-slate-50">
<iconify-icon icon="solar:heart-pulse-bold-duotone" width="48"></iconify-icon>
</div>
<div>
<h3 className="text-3xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Cardiology Center of Excellence</h3>
<p className="text-slate-500 leading-relaxed mb-8 text-lg">
                            Our cardiology department offers advanced diagnostic and treatment options for heart conditions. From non-invasive imaging to complex interventional procedures, our team ensures the best outcomes.
                        </p>
<div className="grid sm:grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-teal-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-semibold text-slate-700">ECG &amp; Echo Diagnostics</span>
</div>
<div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-teal-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-semibold text-slate-700">Advanced Angiography</span>
</div>
<div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-teal-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-semibold text-slate-700">Cardiac Rehabilitation</span>
</div>
<div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm">
<iconify-icon className="text-teal-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-semibold text-slate-700">24/7 Heart Monitoring</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-medical-600 transition-colors shadow-lg" href="#">
                            View Department Details
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="blog">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-teal-500 font-bold text-xs tracking-widest uppercase">Articles</span>
<h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight mt-2">Health <span className="text-gradient">Insights</span></h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-bold text-medical-600 hover:text-teal-500 transition-colors" href="#">
                View all articles <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="rounded-[24px] overflow-hidden mb-5 relative shadow-card group-hover:shadow-glow-blue transition-all duration-500">
<img alt="Blog 1" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-teal-600 uppercase tracking-wide">Lifestyle</span>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors">10 Tips for Better Heart Health</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">Discover simple lifestyle changes that can significantly reduce your risk of cardiovascular disease.</p>
<a className="mt-auto inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-teal-500 transition-colors" href="#">
                    Read Article <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="rounded-[24px] overflow-hidden mb-5 relative shadow-card group-hover:shadow-glow-blue transition-all duration-500">
<img alt="Blog 2" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wide">Nutrition</span>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors">The Ultimate Superfoods Guide</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">Explore nutrient-rich foods that boost immunity and improve overall wellbeing naturally.</p>
<a className="mt-auto inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-teal-500 transition-colors" href="#">
                    Read Article <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="rounded-[24px] overflow-hidden mb-5 relative shadow-card group-hover:shadow-glow-blue transition-all duration-500">
<img alt="Blog 3" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-purple-600 uppercase tracking-wide">Tech</span>
</div>
<h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-medical-600 transition-colors">Telehealth: The Future is Here</h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">How remote consultations are making healthcare more accessible and efficient for everyone.</p>
<a className="mt-auto inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-teal-500 transition-colors" href="#">
                    Read Article <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>
</div>
</section>

<section className="bg-gradient-to-r from-slate-900 via-blue-900 to-rose-900 text-white py-16 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
<div className="flex items-center gap-6">
<div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center animate-pulse border border-white/20">
<iconify-icon icon="solar:phone-calling-bold" width="36"></iconify-icon>
</div>
<div>
<h3 className="text-3xl font-heading font-bold tracking-tight">Emergency? Call us immediately.</h3>
<p className="text-slate-300 mt-2 text-lg">We are available 24/7 for critical care support.</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-4xl font-heading font-bold tracking-tight opacity-50">911</span>
<span className="text-slate-400">or</span>
<a className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:bg-rose-50 transition-all shadow-glow hover:scale-105 flex items-center gap-2" href="tel:+18001234567">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
                    (800) 123-4567
                </a>
</div>
</div>
</section>

<section className="py-16 px-6 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto text-center">
<p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by leading insurance providers</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center">

<div className="group opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
<div className="text-2xl font-bold font-serif text-slate-800 flex items-center gap-2"><iconify-icon className="text-blue-600" icon="solar:shield-bold"></iconify-icon> BlueCross</div>
</div>
<div className="group opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
<div className="text-2xl font-bold font-sans text-slate-800 flex items-center gap-2"><iconify-icon className="text-red-600" icon="solar:heart-bold"></iconify-icon> UnitedHealth</div>
</div>
<div className="group opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
<div className="text-2xl font-bold font-mono text-slate-800 flex items-center gap-2"><iconify-icon className="text-green-600" icon="solar:leaf-bold"></iconify-icon> Aetna</div>
</div>
<div className="group opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
<div className="text-2xl font-bold text-slate-800 flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:sun-bold"></iconify-icon> Cigna</div>
</div>
<div className="group opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
<div className="text-2xl font-bold italic text-slate-800 flex items-center gap-2"><iconify-icon className="text-indigo-600" icon="solar:umbrella-bold"></iconify-icon> Humana</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 text-center mb-16 tracking-tight">Frequently Asked <span className="text-gradient">Questions</span></h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-bold text-slate-900">Do you accept all major insurance plans?</span>
<span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-medical-50 group-hover:text-medical-600 transition-all group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-l-4 border-teal-500 ml-6 mb-6 pl-4">
                    Yes, we accept most major insurance plans including BlueCross, Aetna, Cigna, and UnitedHealth. Please contact our front desk for verification.
                </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-bold text-slate-900">How do I schedule an appointment?</span>
<span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-medical-50 group-hover:text-medical-600 transition-all group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-l-4 border-teal-500 ml-6 mb-6 pl-4">
                    You can schedule an appointment online using our booking tool, or call our reception desk. We also offer same-day appointments for urgent cases.
                </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-bold text-slate-900">What safety measures are in place for COVID-19?</span>
<span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-medical-50 group-hover:text-medical-600 transition-all group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-l-4 border-teal-500 ml-6 mb-6 pl-4">
                    We follow all CDC guidelines, including mandatory masks, regular sanitization, and social distancing protocols in waiting areas.
                </div>
</details>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 rounded-[32px] bg-white border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/50">

<div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 lg:p-14 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h2 className="text-3xl font-heading font-bold mb-6">Get in touch</h2>
<p className="text-slate-400 mb-12 leading-relaxed">
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-white">Our Location</p>
<p className="text-slate-400 text-sm mt-1">123 Health Avenue, Medical District,<br/>NY 10001, United States</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-400 shrink-0">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-white">Phone Number</p>
<p className="text-slate-400 text-sm mt-1">+1 (555) 000-0000</p>
<p className="text-slate-400 text-sm">Mon-Fri 9am-6pm</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-400 shrink-0">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-white">Email Address</p>
<p className="text-slate-400 text-sm mt-1">contact@mediflow.com</p>
</div>
</div>
</div>
<div className="mt-16 flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors" href="#"><iconify-icon icon="ri:facebook-fill"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors" href="#"><iconify-icon icon="ri:twitter-x-fill"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors" href="#"><iconify-icon icon="ri:instagram-line"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/10 hover:bg-teal-500 flex items-center justify-center transition-colors" href="#"><iconify-icon icon="ri:linkedin-fill"></iconify-icon></a>
</div>
</div>

<div className="p-10 lg:p-14 bg-white">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase text-slate-500 tracking-wide">Name</label>
<input className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:text-slate-300" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase text-slate-500 tracking-wide">Email</label>
<input className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:text-slate-300" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase text-slate-500 tracking-wide">Subject</label>
<input className="w-full h-12 px-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all placeholder:text-slate-300" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase text-slate-500 tracking-wide">Message</label>
<textarea className="w-full h-40 p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-none placeholder:text-slate-300"></textarea>
</div>
<button className="bg-gradient-to-r from-medical-600 to-teal-500 hover:from-medical-700 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full md:w-auto" type="button">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-24 pb-12 px-6 border-t-4 border-teal-500">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-medical-500 to-teal-500 rounded-xl flex items-center justify-center text-white">
<iconify-icon icon="solar:medical-kit-bold" width="22"></iconify-icon>
</div>
<span className="text-xl font-heading font-bold tracking-tight text-white">MediFlow</span>
</a>
<p className="text-sm leading-relaxed text-slate-400">
                        Providing world-class healthcare with a focus on technology and patient comfort. Your health is our priority.
                    </p>
</div>

<div>
<h4 className="text-white font-bold mb-8">Quick Links</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-teal-400 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> About Us</a></li>
<li><a className="hover:text-teal-400 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Our Doctors</a></li>
<li><a className="hover:text-teal-400 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Appointments</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-8">Services</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-teal-400 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Cardiology</a></li>
<li><a className="hover:text-teal-400 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Neurology</a></li>
<li><a className="hover:text-teal-400 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon> Pediatrics</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-8">Newsletter</h4>
<p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for health tips and updates.</p>
<form className="flex gap-2">
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 focus:bg-slate-800/50 transition-all" placeholder="Email address" type="email"/>
<button className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-4 py-2 rounded-xl hover:shadow-glow transition-all">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
<p>© 2023 MediFlow Clinic. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
