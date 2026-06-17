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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 md:h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#007AFF] to-[#005bb5] flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-lg" icon="solar:tooth-linear"></iconify-icon>
</div>
<a className="text-lg md:text-xl font-medium tracking-tighter text-gray-900" href="#">
                        SDC
                    </a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#about">Doctor</a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors" href="#location">Location</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#007AFF] transition-colors" href="tel:01711958143">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                        01711-958143
                    </a>
<a className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all shadow-sm flex items-center gap-2" href="#book">
                        Book <span className="hidden sm:inline">Appointment</span>
</a>
</div>
</div>
</div>
</header>
<main>

<section className="relative pt-28 pb-16 md:pt-40 md:pb-24 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#007AFF]/5 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#34D399]/10 border border-[#34D399]/20 text-[#059669] text-xs font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse"></span>
                            Accepting New Patients
                        </div>
<h1 className="font-bengali text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.15] mb-6">
                            আপনার হাসির <br/>
<span className="text-[#007AFF]">পূর্ণতায়</span> আমরা আছি সাথে
                        </h1>
<p className="text-base md:text-lg font-light text-gray-500 leading-relaxed mb-8 max-w-lg">
                            Premium Dental Care by <span className="text-gray-900 font-medium">Dr. A.K.M. Salahuddin (Swapan)</span> — Specialist Prosthodontist. Bringing advanced dentistry to Green Road, Dhaka.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#007AFF] hover:bg-[#0066d6] text-white px-6 py-3 rounded-xl text-sm font-medium transition-all shadow-[0_4px_14px_0_rgba(0,122,255,0.25)] flex items-center justify-center gap-2" href="#book">
                                Book an Appointment
                                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-6 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-sm" href="tel:01711958143">
<iconify-icon className="text-base text-[#007AFF]" icon="solar:phone-calling-linear"></iconify-icon>
                                01711-958143
                            </a>
</div>
</div>

<div className="relative lg:ml-auto">
<div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] bg-gray-100 shadow-2xl shadow-gray-200/50">

<img alt="Modern Dental Clinic" className="w-full h-full object-cover object-center" loading="lazy" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-3xl"></div>
</div>

<div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-12 bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-xl shadow-gray-200/50 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xl text-[#007AFF]" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-gray-900 tracking-tight">Specialist Care</p>
<p className="text-xs font-light text-gray-500">Prosthodontics Expert</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x divide-gray-50">
<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-2xl text-[#007AFF] mb-2" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs md:text-sm font-medium text-gray-900">24/7 Hygiene</span>
<span className="text-xs font-light text-gray-500 mt-1 hidden sm:block">Strict sterilization protocols</span>
</div>
<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-2xl text-[#007AFF] mb-2" icon="solar:cpu-linear"></iconify-icon>
<span className="text-xs md:text-sm font-medium text-gray-900">Advanced Tech</span>
<span className="text-xs font-light text-gray-500 mt-1 hidden sm:block">Modern dental equipment</span>
</div>
<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-2xl text-[#007AFF] mb-2" icon="solar:user-hands-linear"></iconify-icon>
<span className="text-xs md:text-sm font-medium text-gray-900">Expert Care</span>
<span className="text-xs font-light text-gray-500 mt-1 hidden sm:block">Headed by Assoc. Professor</span>
</div>
<div className="flex flex-col items-center text-center px-4">
<iconify-icon className="text-2xl text-[#007AFF] mb-2" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs md:text-sm font-medium text-gray-900">Green Road</span>
<span className="text-xs font-light text-gray-500 mt-1 hidden sm:block">Central Dhaka location</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-[#FAFAFA]" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
<div className="grid md:grid-cols-5 items-stretch">
<div className="md:col-span-2 bg-gray-50 relative min-h-[300px]">

<img alt="Dr. A.K.M. Salahuddin Swapan" className="absolute inset-0 w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"/>
</div>
<div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-2">Dr. A.K.M. Salahuddin (Swapan)</h2>
<p className="text-sm font-medium text-[#007AFF] mb-6 tracking-tight">Specialist Prosthodontist</p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-sm text-[#007AFF]" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Academic Authority</p>
<p className="text-sm font-light text-gray-500">Associate Professor &amp; Head of Department (CIDCH)</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-sm text-[#007AFF]" icon="solar:medal-star-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Qualifications</p>
<p className="text-sm font-light text-gray-500">BDS, FCPS (II), MS (BSMMU)</p>
</div>
</div>
</div>
<p className="text-sm font-light text-gray-600 leading-relaxed mb-8">
                                With extensive experience and an academic leadership role, Dr. Swapan brings a higher standard of precision to dental care. Specializing in prosthodontics, he ensures that every restoration, from simple fillings to complex implants, is functional, durable, and aesthetically perfect.
                            </p>

<div className="font-bengali text-2xl text-gray-300 opacity-60 pointer-events-none">
                                ডা. স্বপন
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-4">Comprehensive Care</h2>
<p className="text-sm md:text-base font-light text-gray-500">Specialized treatments delivered with precision and comfort in a state-of-the-art environment.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-5 group-hover:border-[#007AFF]/20 group-hover:bg-blue-50/50 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-[#007AFF] transition-colors" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Prosthodontics</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">Dr. Swapan's specialty. Expert restoration and replacement of teeth for optimal function and appearance.</p>
</div>

<div className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-5 group-hover:border-[#007AFF]/20 group-hover:bg-blue-50/50 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-[#007AFF] transition-colors" icon="solar:tooth-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">General Dentistry</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">Routine check-ups, cleanings, and preventive care to maintain your overall oral health seamlessly.</p>
</div>

<div className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-5 group-hover:border-[#007AFF]/20 group-hover:bg-blue-50/50 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-[#007AFF] transition-colors" icon="solar:syringe-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Root Canal Therapy</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">Painless endodontic treatments to save infected teeth, using advanced rotary instruments.</p>
</div>

<div className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-5 group-hover:border-[#007AFF]/20 group-hover:bg-blue-50/50 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-[#007AFF] transition-colors" icon="solar:scissors-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-2">Oral Surgery</h3>
<p className="text-sm font-light text-gray-500 leading-relaxed">Safe and sterile minor oral surgeries, including complex wisdom tooth extractions.</p>
</div>

<div className="group p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 sm:col-span-2 lg:col-span-2">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:border-[#007AFF]/20 group-hover:bg-blue-50/50 transition-colors">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-[#007AFF] transition-colors" icon="solar:star-shine-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-1">Cosmetic &amp; Whitening</h3>
<p className="text-sm font-light text-gray-500">Enhance your smile with professional teeth whitening, veneers, and aesthetic reshaping.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<iconify-icon className="text-3xl text-gray-300 mb-6" icon="solar:chat-round-like-linear"></iconify-icon>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 mb-8">Patient Stories</h2>
<div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm relative">
<iconify-icon className="absolute top-6 left-6 text-2xl text-gray-100" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base md:text-lg font-light text-gray-600 italic leading-relaxed relative z-10">
                        "The level of professionalism and care at Sudeen Dental is unmatched. Dr. Swapan explained the entire prosthodontic procedure clearly, and the results are incredibly natural. Highly recommended for anyone in Dhaka seeking specialist care."
                    </p>
<div className="mt-6 flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-xs font-medium text-gray-500">M</span>
</div>
<div className="text-left">
<p className="text-sm font-medium text-gray-900">Mohammed R.</p>
<p className="text-xs font-light text-gray-500">Dhanmondi, Dhaka</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-white relative" id="book">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 mb-2">Request an Appointment</h2>
<p className="text-sm font-light text-gray-500 mb-8">Fill out the form below and our desk will confirm your slot.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Full Name</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-all placeholder:text-gray-400" placeholder="John Doe" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Phone Number</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-all placeholder:text-gray-400" placeholder="017XX-XXXXXX" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 sm:col-span-1 relative">
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Service Needed</label>
<select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-all text-gray-700 cursor-pointer">
<option>General Consultation</option>
<option>Prosthodontics (Crowns/Bridges)</option>
<option>Root Canal</option>
<option>Teeth Whitening</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-[38px] text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="col-span-2 sm:col-span-1 relative">
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Preferred Date</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-all text-gray-700" type="date"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5 ml-1">Brief Message (Optional)</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF]/20 focus:border-[#007AFF] transition-all placeholder:text-gray-400 resize-none" placeholder="Any specific symptoms or requests?" rows="3"></textarea>
</div>
<button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-xl text-sm font-medium transition-all shadow-sm mt-2" type="submit">
                                Submit Request
                            </button>
</form>
</div>

<div className="flex flex-col h-full" id="location">
<div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100 flex-grow flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-6">Find Us</h3>
<div className="space-y-5 mb-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#007AFF] mt-0.5 flex-shrink-0" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-900">Sudeen Dental Care</p>
<p className="text-sm font-light text-gray-500 mt-1">Green Road, Near Dhanmondi<br/>Dhaka, Bangladesh</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#007AFF] mt-0.5 flex-shrink-0" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-900">Visiting Hours</p>
<p className="text-sm font-light text-gray-500 mt-1">Sat - Thu: 5:00 PM - 9:00 PM<br/><span className="text-xs text-gray-400">By appointment only</span></p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-[#007AFF] mt-0.5 flex-shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-gray-900">Hotline</p>
<a className="text-sm font-light text-gray-500 hover:text-[#007AFF] transition-colors mt-1 block" href="tel:01711958143">01711-958143</a>
</div>
</div>
</div>

<div className="w-full h-48 bg-gray-200 rounded-xl border border-gray-300 overflow-hidden relative mt-auto">
<div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-400">
<iconify-icon className="text-3xl mb-2" icon="solar:routing-2-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest">Map Integration</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
<a className="text-xl font-medium tracking-tighter text-gray-900 mb-4 inline-flex items-center gap-2" href="#">
<iconify-icon className="text-[#007AFF]" icon="solar:tooth-linear"></iconify-icon>
                SDC
            </a>
<p className="text-sm font-light text-gray-500 mb-6 max-w-md">
                Premium dental care combining academic excellence with state-of-the-art technology in the heart of Dhaka.
            </p>
<div className="flex gap-4 mb-12">
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#007AFF] hover:text-[#007AFF] hover:bg-blue-50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon> 
</a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#007AFF] hover:text-[#007AFF] hover:bg-blue-50 transition-all" href="tel:01711958143">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
<div className="w-full pt-8 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs font-light text-gray-400">
                    © 2023 Sudeen Dental Care. All rights reserved.
                </p>
<div className="flex gap-4 text-xs font-light text-gray-400">
<a className="hover:text-gray-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-600 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
