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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-blue-50 text-blue-600 p-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:tooth-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-semibold text-slate-900 tracking-tight leading-none text-lg uppercase tracking-widest">SWASTIK</span>
<span className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-1">Dental Clinic</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#contact">Location</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:flex items-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-emerald-200" href="https://wa.me/919913084405" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>WhatsApp</span>
</a>
<a className="hidden lg:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all active:scale-95" href="tel:+919913084405">
<span>Call Now</span>
</a>
<label className="md:hidden cursor-pointer p-2 text-slate-600 hover:text-blue-600" htmlFor="mobile-menu-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</label>
</div>
</div>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="hidden md:hidden bg-white border-b border-slate-100 absolute w-full left-0 top-full px-6 py-4 shadow-xl" id="mobile-menu">
<div className="flex flex-col gap-4">
<a className="text-sm font-medium text-slate-900 py-2 border-b border-slate-50" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-900 py-2 border-b border-slate-50" href="#services">Services</a>
<a className="text-sm font-medium text-slate-900 py-2 border-b border-slate-50" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-900 py-2 border-b border-slate-50" href="#contact">Contact</a>
<div className="grid grid-cols-2 gap-2 mt-2">
<a className="text-center bg-emerald-500 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2" href="https://wa.me/919913084405">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> WhatsApp
                    </a>
<a className="text-center bg-slate-900 text-white py-3 rounded-lg font-medium text-sm" href="tel:+919913084405">
                        Call Now
                    </a>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
<iconify-icon className="text-yellow-500" icon="solar:star-fall-linear"></iconify-icon>
                    5.0 Rating (130+ Reviews)
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] text-balance">
                    Trusted Dental Care in <span className="text-blue-600">Rajkot</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-lg">
                    Painless, hygienic, and advanced dental treatments tailored for your comfort. Experience dentistry with 5-star patient satisfaction.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all hover:shadow-emerald-200 hover:shadow-xl active:scale-95" href="https://wa.me/919913084405" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                        Book on WhatsApp
                    </a>
<a className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95" href="tel:+919913084405">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                        Call +91 9913084405
                    </a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-emerald-50 rounded-full blur-3xl opacity-40"></div>
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-white aspect-[4/3] flex items-center justify-center border border-slate-100 group">
<img alt="Modern Dental Clinic Room" className="object-cover w-full h-full opacity-95 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-lg border border-slate-100 hidden md:flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">100% Hygienic</p>
<p className="text-xs text-slate-500">Sterilized environment</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-[-40px] relative z-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col items-center text-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="22"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-700">Painless Care</span>
</div>
<div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col items-center text-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:health-linear" width="22"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-700">High Hygiene</span>
</div>
<div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 flex flex-col items-center text-center gap-3">
<div className="w-10 h-10 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
<iconify-icon icon="solar:stars-line-linear" width="22"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-700">5-Star Rated</span>
</div>
<div className="bg-slate-900 p-6 rounded-2xl shadow-lg shadow-slate-900/20 border border-slate-800 flex flex-col items-center text-center gap-3 relative overflow-hidden group hover:-translate-y-1 transition-transform">
<a className="absolute inset-0 z-10" href="https://wa.me/919913084405"></a>
<div className="w-10 h-10 rounded-full bg-white/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:calendar-add-linear" width="22"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">Book Now</span>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
<img alt="Dentist consulting patient" className="relative rounded-2xl shadow-xl border border-white object-cover w-full h-auto aspect-square md:aspect-auto" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="space-y-6">
<div className="flex items-center gap-2">
<span className="h-px w-8 bg-blue-600"></span>
<span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">About Clinic</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Focused on Your Comfort &amp; Health</h2>
<div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
<p>
                            Swastik Dental Clinic is recognized as a trusted dental center in Rajkot. We believe that a trip to the dentist should not be a source of anxiety. Our entire philosophy revolves around patient comfort, clear treatment explanations, and maintaining the highest hygiene standards.
                        </p>
</div>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-blue-100 text-blue-600 p-1 rounded-full">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Painless Treatment Approach</h4>
<p className="text-xs text-slate-500 mt-1">Advanced techniques to ensure minimal discomfort.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-blue-100 text-blue-600 p-1 rounded-full">
<iconify-icon icon="solar:user-hands-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Experienced &amp; Caring Doctors</h4>
<p className="text-xs text-slate-500 mt-1">Specialists who listen to your concerns and explain clearly.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-blue-100 text-blue-600 p-1 rounded-full">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Focus on Oral Hygiene</h4>
<p className="text-xs text-slate-500 mt-1">Dedicated to your long-term oral care and preventative health.</p>
</div>
</li>
</ul>
<div className="pt-6">
<a className="text-sm text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2 transition-colors" href="#services">
                            Explore our services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Our Dental Services</h2>
<p className="text-sm text-slate-500 font-medium">A wide range of treatments under one roof, utilizing modern equipment in a hygienic environment.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">General &amp; Preventative</h3>
<p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">Routine care to maintain healthy teeth and gums for the long term.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Dental Check-ups</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Teeth Cleaning</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Fillings &amp; Sealants</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Dental X-rays</li>
</ul>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Cosmetic &amp; Restorative</h3>
<p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">Enhance your smile and restore function with natural-looking results.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Teeth Whitening &amp; Reshaping</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Veneers, Crowns &amp; Bonding</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Dentures &amp; Bridges</li>
</ul>
</div>

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Specialized Care</h3>
<p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">Advanced treatments handled with precision and a gentle touch.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Root Canal Treatment</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Tooth Extractions &amp; Oral Surgery</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Laser Dentistry</li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700"><iconify-icon className="text-blue-500" icon="solar:alt-arrow-right-linear"></iconify-icon> Pediatric Dentistry</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-slate-100">
<p className="text-xs text-center font-semibold text-slate-400 uppercase tracking-widest mb-6">Complete Service List</p>
<div className="flex flex-wrap justify-center gap-2 md:gap-3">
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Teeth Whitening</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Bonding</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Dental Check-ups</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Cosmetic Dentistry</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Dental Implants</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Dentures &amp; Bridges</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm flex items-center gap-1 text-rose-600 border-rose-100 bg-rose-50"><iconify-icon icon="solar:siren-linear"></iconify-icon> Emergency Care</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Tooth Extractions</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Fillings &amp; Sealants</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Laser Dentistry</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Mouth Guards</span>
<span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-md text-xs font-semibold text-emerald-700 shadow-sm flex items-center gap-1"><iconify-icon icon="solar:laptop-linear"></iconify-icon> Online Booking</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Oral Surgery</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Pediatric Dentistry</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Root Canal</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Teeth Cleaning</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Teeth Reshaping</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Veneers &amp; Crowns</span>
<span className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 shadow-sm">Dental X-rays</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300 relative overflow-hidden" id="reviews">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start relative z-10">

<div className="lg:col-span-5 space-y-8 sticky top-32">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500 text-xl" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-semibold text-yellow-500 uppercase tracking-widest">Why Choose Us</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">Trusted by hundreds of patients in Rajkot</h2>
<ul className="space-y-5 text-sm font-medium">
<li className="flex items-center gap-4 border-b border-slate-800 pb-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-yellow-500 shrink-0">
<iconify-icon icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-white block font-semibold">5.0 Rating (130+ Reviews)</span>
<span className="text-slate-400 text-xs">Consistently rated excellent by our patients.</span>
</div>
</li>
<li className="flex items-center gap-4 border-b border-slate-800 pb-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:chat-round-check-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-white block font-semibold">Clear Explanations</span>
<span className="text-slate-400 text-xs">We explain every procedure and option clearly.</span>
</div>
</li>
<li className="flex items-center gap-4 border-b border-slate-800 pb-4">
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:user-heart-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-white block font-semibold">Personalized Care</span>
<span className="text-slate-400 text-xs">Treatments tailored to your specific needs.</span>
</div>
</li>
</ul>
<a className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20" href="https://wa.me/919913084405">
<iconify-icon icon="solar:whatsapp-linear" width="18"></iconify-icon> Book via WhatsApp
                </a>
</div>

<div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">

<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm sm:col-span-2">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed font-medium">“Treatment was explained clearly and done gently with proper hygiene. Completely painless experience. Highly recommend Swastik Dental Clinic to anyone in Rajkot.”</p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white font-semibold">P</div>
<span className="text-xs text-slate-400 font-medium">Verified Patient</span>
</div>
</div>

<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed font-medium">“Doctors explained all options and helped me choose the best treatment. The clinic is very clean and staff is cooperative.”</p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white font-semibold">S</div>
<span className="text-xs text-slate-400 font-medium">Verified Patient</span>
</div>
</div>

<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed font-medium">“Very kind doctor and painless treatment. Also guided on oral hygiene. Best dental experience I've had.”</p>
<div className="mt-6 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white font-semibold">R</div>
<span className="text-xs text-slate-400 font-medium">Verified Patient</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50/50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mt-2 mb-4">Ready for a healthier smile?</h2>
<p className="text-sm text-slate-500 font-medium">Book your appointment today. Walk-ins are welcome, but appointments are preferred to minimize your wait time.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 text-lg mb-4 tracking-tight">Clinic Location</h3>
<address className="not-italic text-slate-600 text-sm leading-relaxed font-medium">
                            201, 2nd Floor, Poonam Arcade,<br/>
                            150 Feet Ring Road,<br/>
                            Near Om Nagar BRTS Bus Stop,<br/>
                            Rajkot, Gujarat 360004
                        </address>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<a className="text-sm text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2" href="https://maps.google.com/?q=Swastik+Dental+Clinic+Poonam+Arcade+Rajkot" target="_blank">
                            Get Directions <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 text-lg mb-4 tracking-tight">Contact Us</h3>
<div className="space-y-4">
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Phone / WhatsApp</span>
<a className="text-slate-900 font-medium text-lg hover:text-blue-600 transition-colors" href="tel:+919913084405">+91 99130 84405</a>
</div>
</div>
</div>
<div className="mt-8 space-y-3">
<a className="w-full flex items-center justify-center gap-2 bg-emerald-500 text-white py-3.5 rounded-xl text-sm font-medium hover:bg-emerald-600 transition-colors shadow-sm" href="https://wa.me/919913084405" target="_blank">
<iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon>
                            Book on WhatsApp
                        </a>
<a className="w-full flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 py-3.5 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors" href="tel:+919913084405">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
                            Call Clinic
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
<div className="md:col-span-5 space-y-4">
<div className="flex items-center gap-2 text-blue-600">
<iconify-icon icon="solar:tooth-linear" width="24"></iconify-icon>
<span className="font-semibold text-slate-900 tracking-tight uppercase tracking-widest">SWASTIK</span>
</div>
<p className="text-sm font-medium text-slate-500 leading-relaxed max-w-sm">
                        Highly rated dental clinic in Rajkot providing painless treatments, clear communication, and a focus on long-term oral health.
                    </p>
</div>
<div className="md:col-span-3 space-y-4">
<h4 className="font-semibold text-slate-900 text-sm tracking-tight">Quick Links</h4>
<ul className="space-y-2 text-sm font-medium text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#about">About Clinic</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#services">All Services</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#reviews">Patient Reviews</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#contact">Contact &amp; Location</a></li>
</ul>
</div>
<div className="md:col-span-4 space-y-4">
<h4 className="font-semibold text-slate-900 text-sm tracking-tight">Contact Information</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>201, 2nd Floor, Poonam Arcade, 150 Ft Ring Road, Rajkot 360004</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-blue-600 transition-colors" href="tel:+919913084405">+91 99130 84405</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-medium text-slate-400">© 2024 Swastik Dental Clinic. All rights reserved.</p>
<div className="flex items-center gap-1 text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-bold"></iconify-icon> 5.0 Star Rated Clinic
                </div>
</div>
</div>
</footer>

    </>
  );
}
