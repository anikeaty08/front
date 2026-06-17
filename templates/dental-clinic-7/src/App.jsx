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
      

<div className="hidden md:block bg-slate-900 text-slate-300 py-2">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-normal">
<div className="flex items-center space-x-6">
<span className="flex items-center">
<iconify-icon className="mr-2 text-teal-500 text-sm" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Mon - Sat: 10:00 AM - 9:00 PM
                </span>
<span className="flex items-center">
<iconify-icon className="mr-2 text-teal-500 text-sm" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    DHA Phase 6, Karachi
                </span>
</div>
<div className="flex items-center space-x-6">
<a className="flex items-center hover:text-white transition-colors" href="tel:+923001234567">
<iconify-icon className="mr-2 text-teal-500 text-sm" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    +92 300 1234567
                </a>
<div className="flex items-center space-x-3">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:facebook-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-sm" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon className="text-2xl" icon="solar:tooth-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tighter text-slate-900 leading-none">DR SAAD</span>
<span className="text-xs font-medium tracking-widest text-teal-600 uppercase mt-1">Dentistry</span>
</div>
</a>

<div className="hidden lg:flex items-center space-x-8">
<a className="text-sm font-medium text-teal-600" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#services">Treatments</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#gallery">Smile Gallery</a>
<a className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors shadow-sm shadow-teal-600/20" href="#appointment">
                    Book Appointment
                </a>
</div>

<div className="lg:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative bg-slate-900">

<div className="absolute inset-0">
<img alt="Dental Clinic" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-3/5 pr-0 lg:pr-12 text-center lg:text-left">
<span className="inline-block py-1 px-3 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-xs font-medium tracking-wide uppercase mb-6">
                    Premium Dental Care in Karachi
                </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white mb-6 leading-tight">
                    Crafting <span className="text-teal-400">Confident Smiles</span> With Precision.
                </h1>
<p className="text-base lg:text-lg text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                    Experience world-class dentistry in a comfortable, state-of-the-art environment. From cosmetic makeovers to advanced implants, we prioritize your oral health and aesthetic goals.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-900 bg-white rounded-md hover:bg-slate-100 transition-colors" href="#services">
                        Explore Services
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-slate-600 rounded-md hover:bg-slate-800 transition-colors" href="tel:+923001234567">
<iconify-icon className="mr-2 text-lg" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Call Now
                    </a>
</div>
</div>

<div className="w-full lg:w-2/5 mt-16 lg:mt-0" id="appointment">
<div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-teal-600"></div>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">Request an Appointment</h3>
<p className="text-sm text-slate-500 mb-6">Fill out the form below and we will contact you shortly.</p>
<form className="space-y-4">
<div>
<input className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors" placeholder="Your Name" type="text"/>
</div>
<div>
<input className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors" placeholder="Phone Number" type="tel"/>
</div>
<div>
<select className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors appearance-none text-slate-600">
<option disabled="" selected="" value="">Select Treatment</option>
<option>Dental Implants</option>
<option>Cosmetic Dentistry / Veneers</option>
<option>Orthodontics / Braces</option>
<option>Root Canal Treatment</option>
<option>General Checkup</option>
</select>
</div>
<div>
<input className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-colors text-slate-600" type="date"/>
</div>
<button className="w-full px-4 py-3.5 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-colors shadow-sm mt-2" type="button">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="relative z-10 -mt-10 lg:-mt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-4 lg:gap-6">

<div className="bg-teal-600 text-white p-6 rounded-lg shadow-lg flex items-start space-x-4">
<div className="bg-white/20 p-3 rounded-md shrink-0">
<iconify-icon className="text-2xl" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base tracking-tight font-semibold mb-1">Easy Scheduling</h4>
<p className="text-xs text-teal-50 font-light leading-relaxed">Flexible appointments to fit your busy lifestyle. Online booking available 24/7.</p>
</div>
</div>

<div className="bg-white text-slate-900 p-6 rounded-lg shadow-lg border border-slate-100 flex items-start space-x-4">
<div className="bg-teal-50 text-teal-600 p-3 rounded-md shrink-0">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base tracking-tight font-semibold mb-1">Advanced Technology</h4>
<p className="text-xs text-slate-500 font-light leading-relaxed">Equipped with 3D imaging, digital scanners, and laser dentistry tools.</p>
</div>
</div>

<div className="bg-white text-slate-900 p-6 rounded-lg shadow-lg border border-slate-100 flex items-start space-x-4">
<div className="bg-teal-50 text-teal-600 p-3 rounded-md shrink-0">
<iconify-icon className="text-2xl" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base tracking-tight font-semibold mb-1">Expert Specialists</h4>
<p className="text-xs text-slate-500 font-light leading-relaxed">A dedicated team of highly qualified and internationally trained dentists.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Dentist working" className="rounded-lg object-cover h-64 w-full shadow-md" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Clinic Interior" className="rounded-lg object-cover h-64 w-full shadow-md mt-8" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl border border-slate-50 flex flex-col items-center justify-center w-32 h-32">
<span className="text-3xl font-semibold text-teal-600 tracking-tighter">15+</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 text-center font-medium">Years of<br/>Excellence</span>
</div>
</div>

<div className="w-full lg:w-1/2">
<h4 className="text-sm font-medium text-teal-600 tracking-wide uppercase mb-2">Welcome to Dr. Saad Dentistry</h4>
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 mb-6">Elevating the standard of dental care in Pakistan.</h2>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        At Dr. Saad Dentistry, we believe that a healthy, beautiful smile is a fundamental part of your overall well-being. Founded on the principles of integrity, precision, and patient comfort, our clinic has grown to become a leading destination for premium dental care.
                    </p>
<p className="text-sm text-slate-600 mb-8 leading-relaxed">
                        Whether you need a routine checkup, complex restorative work, or a complete cosmetic smile makeover, our multidisciplinary team utilizes the latest evidence-based techniques to ensure optimal results in a sterile, relaxing environment.
                    </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<li className="flex items-center text-sm text-slate-800 font-medium">
<iconify-icon className="text-teal-500 mr-2 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Strict Sterilization Protocols
                        </li>
<li className="flex items-center text-sm text-slate-800 font-medium">
<iconify-icon className="text-teal-500 mr-2 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Pain-Free Techniques
                        </li>
<li className="flex items-center text-sm text-slate-800 font-medium">
<iconify-icon className="text-teal-500 mr-2 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Transparent Pricing
                        </li>
<li className="flex items-center text-sm text-slate-800 font-medium">
<iconify-icon className="text-teal-500 mr-2 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Comprehensive Warranties
                        </li>
</ul>
<div className="flex items-center border-t border-slate-200 pt-6">
<div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden mr-4">

<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="text-base font-semibold tracking-tight text-slate-900">Dr. Saad Ahmed</h5>
<p className="text-xs text-slate-500 font-medium">Principal Dentist &amp; Founder</p>
</div>
<div className="ml-auto">

<span className="font-serif italic text-2xl text-slate-300">Dr. Saad</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h4 className="text-sm font-medium text-teal-600 tracking-wide uppercase mb-2">Our Treatments</h4>
<h2 className="text-3xl lg:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Comprehensive Dental Solutions</h2>
<p className="text-sm text-slate-500">We offer a full spectrum of specialized dental treatments tailored to your unique needs, under one roof.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Dental Implants" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1598256989800-fea5ce5146f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
</div>
<div className="p-6 bg-white">
<div className="w-10 h-10 bg-teal-50 text-teal-600 rounded flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:screencast-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Dental Implants</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Permanent, natural-looking solutions to replace missing teeth and restore full functionality and confidence.</p>
<a className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center" href="#">
                            Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Cosmetic Dentistry" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
</div>
<div className="p-6 bg-white">
<div className="w-10 h-10 bg-teal-50 text-teal-600 rounded flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Transform your smile with porcelain veneers, professional teeth whitening, and precise aesthetic contouring.</p>
<a className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center" href="#">
                            Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<img alt="Orthodontics" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
</div>
<div className="p-6 bg-white">
<div className="w-10 h-10 bg-teal-50 text-teal-600 rounded flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Orthodontics &amp; Aligners</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Straighten your teeth discreetly with clear aligners or opt for traditional braces for complex corrections.</p>
<a className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center" href="#">
                            Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="p-6 bg-white">
<div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:virus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Root Canal Treatment</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Painless endodontic therapy to save infected teeth, using advanced rotary instruments and magnification.</p>
<a className="text-sm font-medium text-slate-600 group-hover:text-teal-600 flex items-center transition-colors" href="#">
                            Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="p-6 bg-white">
<div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Oral Surgery</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Safe and comfortable extractions, including complex wisdom teeth removal, performed by skilled surgeons.</p>
<a className="text-sm font-medium text-slate-600 group-hover:text-teal-600 flex items-center transition-colors" href="#">
                            Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
<div className="p-6 bg-white">
<div className="w-10 h-10 bg-slate-50 text-slate-600 rounded flex items-center justify-center mb-4 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Pediatric Dentistry</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Gentle, preventive care for children in a friendly environment to build healthy habits early on.</p>
<a className="text-sm font-medium text-slate-600 group-hover:text-teal-600 flex items-center transition-colors" href="#">
                            Read More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:border-slate-300 transition-colors" href="#">
                    View All Treatments
                </a>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t-4 border-teal-600">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-teal-600 rounded flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:tooth-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tighter text-white leading-none">DR SAAD</span>
<span className="text-[10px] font-medium tracking-widest text-teal-500 uppercase mt-1">Dentistry</span>
</div>
</a>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
                        Setting the gold standard in modern dentistry. We combine art, science, and technology to give you a smile you'll love.
                    </p>
<div className="flex space-x-4">
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors" href="#">
<iconify-icon className="text-sm" icon="solar:map-arrow-up-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white text-base tracking-tight font-semibold mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Home</a></li>
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> About Clinic</a></li>
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Smile Gallery</a></li>
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Testimonials</a></li>
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-base tracking-tight font-semibold mb-6">Treatments</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Dental Implants</a></li>
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Veneers &amp; Lumineers</a></li>
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Clear Aligners</a></li>
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Root Canal</a></li>
<li><a className="text-sm text-slate-400 hover:text-teal-400 transition-colors flex items-center" href="#"><iconify-icon className="mr-2 text-teal-600" icon="solar:alt-arrow-right-linear"></iconify-icon> Teeth Whitening</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-base tracking-tight font-semibold mb-6">Contact Details</h4>
<ul className="space-y-4">
<li className="flex items-start">
<iconify-icon className="text-teal-500 text-lg mr-3 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-400">123 Health Avenue, Phase 6 DHA,<br/>Karachi, Pakistan</span>
</li>
<li className="flex items-center">
<iconify-icon className="text-teal-500 text-lg mr-3" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-400">+92 300 1234567<br/>+92 21 3123456</span>
</li>
<li className="flex items-center">
<iconify-icon className="text-teal-500 text-lg mr-3" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-400">info@drsaaddentistry.pk</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2024 Dr. Saad Dentistry. All Rights Reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300" href="#">
<iconify-icon className="text-3xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>

    </>
  );
}
