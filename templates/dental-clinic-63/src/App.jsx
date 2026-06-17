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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-sky-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-600/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="24" icon="solar:tooth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="self-center text-xl font-bold whitespace-nowrap text-slate-900 tracking-tight">Sil-Dom</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Family Dentistry</span>
</div>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-4">
<a className="hidden lg:flex flex-col items-end text-right mr-4" href="#contact">
<span className="text-xs font-medium text-slate-500">Call us today</span>
<span className="text-sm font-bold text-slate-900 tracking-tight">(905) 832-6040</span>
</a>
<a className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center gap-2 transition-all shadow-lg shadow-sky-600/20" href="#book">
                    Book Online
                    <iconify-icon height="18" icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-2xl bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a aria-current="page" className="block py-2 px-3 text-white bg-sky-600 rounded md:bg-transparent md:text-sky-600 md:p-0" href="#">Home</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 transition-colors" href="#about">About</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 transition-colors" href="#services">Services</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 transition-colors" href="#offer">New Patients</a></li>
<li><a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
</nav>

<section className="pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden relative">
<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#e0f2fe_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-semibold uppercase tracking-wide mb-6">
<span className="flex h-2 w-2 rounded-full bg-sky-600"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Healthy Smiles in a <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Positive Environment</span>
</h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Experience world-class dental care in Vaughan. We combine advanced technology with a gentle touch to bring out your best smile.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 text-white bg-sky-600 hover:bg-sky-700 font-semibold rounded-full text-base px-8 py-4 transition-all shadow-xl shadow-sky-600/20 hover:scale-105" href="#book">
                            Book Appointment
                            <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 font-semibold rounded-full text-base px-8 py-4 transition-all" href="#services">
                            View Services
                        </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            20+ Years Experience
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
                            Master Certified
                        </div>
</div>
</div>
<div className="relative lg:h-full">
<div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
<img alt="Modern Dental Clinic" className="w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
<iconify-icon height="32" icon="solar:gift-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-slate-900">New Patient Special</h3>
<p className="text-sm text-slate-600 mt-1">Receive a <span className="font-bold text-indigo-600">FREE Electric Toothbrush</span> ($150 Value) with your first exam &amp; cleaning.</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Dental Care" className="rounded-2xl shadow-lg mt-12 mb-4" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Smiling Patient" className="rounded-2xl shadow-lg mb-12 mt-4" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                        Welcome to <span className="text-sky-600">Sil-Dom Family Dentistry</span>
</h2>
<div className="space-y-6 text-lg text-slate-500 leading-relaxed">
<p>
                            Sil-Dom Dental Clinic is comprised of highly motivated and experienced professional Dentists. Our focus from day one has been to create a practice that can accommodate any dental treatment for patients of all ages, the one location you will ever need.
                        </p>
<p>
                            Nearly every dental treatment can be carried out at our dental office by our in-house dental team who have the experience and expertise in providing procedures ranging from general cleaning to major procedures such as wisdom tooth removal.
                        </p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="p-2 bg-sky-50 rounded-lg text-sky-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Expert Team</h4>
<p className="text-sm text-slate-500 mt-1">Highly skilled professionals</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-2 bg-sky-50 rounded-lg text-sky-600">
<iconify-icon icon="solar:hospital-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Modern Facility</h4>
<p className="text-sm text-slate-500 mt-1">Latest dental technology</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-sky-600 font-semibold tracking-wider uppercase text-sm">Comprehensive Care</span>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mt-3 mb-4">Our Dental Services</h2>
<p className="text-slate-500 text-lg">Everything you need for a healthy smile under one roof.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Restorations</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Complete restorative care to bring back the function and aesthetics of your smile.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:star-shine-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Enhance your smile with our aesthetic treatments designed for natural beauty.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:layers-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Veneers</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Custom-made shells to cover the front surface of teeth for a flawless look.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:waterdrops-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Oral Hygiene</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Comprehensive cleaning and preventative care to maintain oral health.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:screw-large-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Implants</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Permanent solutions for missing teeth that look and feel natural.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Kids Dentistry</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Gentle care designed specifically for the unique needs of children.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:ruler-cross-pen-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Orthodontics &amp; Braces</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Traditional braces to correct alignment and bite issues effectively.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Invisalign</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Clear aligners for a discreet way to straighten your teeth.</p>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Care</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Immediate attention for dental emergencies to relieve pain.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
<div className="lg:col-span-2">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                        5 Reasons to Choose <br/><span className="text-sky-600">Sil-Dom Dentistry</span>
</h2>
<p className="text-slate-500 mb-8 text-lg">We strive to provide the best possible care for our patients. Here is what sets us apart.</p>
<a className="inline-flex justify-center items-center gap-2 text-white bg-slate-900 hover:bg-slate-800 font-medium rounded-full text-sm px-6 py-3 transition-all" href="#book">
                        Schedule a Visit
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold">1</div>
<div>
<h4 className="font-bold text-slate-900 mb-1">Experienced Dentists</h4>
<p className="text-sm text-slate-500">Over 20 years of dental experience and 10 master certifications.</p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold">2</div>
<div>
<h4 className="font-bold text-slate-900 mb-1">High Quality Equipment</h4>
<p className="text-sm text-slate-500">Industry-leading equipment and premium quality materials.</p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold">3</div>
<div>
<h4 className="font-bold text-slate-900 mb-1">Friendly Environment</h4>
<p className="text-sm text-slate-500">Helpful staff and dentists making every visit a great experience.</p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold">4</div>
<div>
<h4 className="font-bold text-slate-900 mb-1">100% Kids Friendly</h4>
<p className="text-sm text-slate-500">Kids are precious and we ensure they are treated extra special.</p>
</div>
</div>

<div className="flex gap-4 sm:col-span-2">
<div className="shrink-0 w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold">5</div>
<div>
<h4 className="font-bold text-slate-900 mb-1">Positive Reviews</h4>
<p className="text-sm text-slate-500">We receive positive reviews and feedback from our valued patients consistently.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-sky-600 relative overflow-hidden" id="book">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Book Online and Save!
            </h2>
<p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
                Book online and save up to 5% off your dental appointment. We will email confirmation and reminders for your convenience.
            </p>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-10 inline-block">
<p className="text-white font-medium flex items-center justify-center gap-2">
<iconify-icon icon="solar:gift-bold" width="24"></iconify-icon>
                    New Patients: Get a FREE Electric Toothbrush ($150 Value)
                </p>
</div>
<br/>
<a className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 hover:bg-sky-50 font-bold py-4 px-8 rounded-full shadow-xl transition-all hover:scale-105" href="#">
                Book Your Appointment Now
                <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:tooth-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold text-white tracking-tight">Sil-Dom</span>
</a>
<p className="text-sm leading-relaxed mb-6">
                        Your destination for comprehensive family dentistry in Vaughan. Dedicated to your smile and comfort.
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-sky-400 transition-colors" href="#"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="text-white hover:text-sky-400 transition-colors" href="#"><iconify-icon icon="skill-icons:instagram" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h3 className="text-white font-bold mb-6">Contact Info</h3>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>10555 Jane St,<br/>Maple, ON L6A 3L1</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-sky-500 shrink-0" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>(905) 832-6040</span>
</li>
</ul>
</div>

<div>
<h3 className="text-white font-bold mb-6">Business Hours</h3>
<ul className="space-y-3 text-sm">
<li className="flex justify-between">
<span>Mon - Thurs</span>
<span className="text-white">10 am - 8 pm</span>
</li>
<li className="flex justify-between">
<span>Friday</span>
<span className="text-white">Closed</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-white">9 am - 4 pm</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-white">Closed</span>
</li>
</ul>
</div>

<div>
<h3 className="text-white font-bold mb-6">Quick Links</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-sky-400 transition-colors" href="#">Root Canal Treatment</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Dental Restorations</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Oral Cancer Screening</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#">Book Online</a></li>
</ul>
</div>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 mb-8">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11506.754231513898!2d-79.5388126!3d43.8622835!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf7ae619561ccefc!2sSil-Dom+Dentistry!5e0!3m2!1sen!2sca!4v1560199776031!5m2!1sen!2sca" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Sil-Dom Family Dentistry. All rights reserved.</p>
<p>Designed with Care.</p>
</div>
</div>
</footer>

    </>
  );
}
