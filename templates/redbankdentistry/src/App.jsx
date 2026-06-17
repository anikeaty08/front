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



        // Init Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('mobile-menu-close');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        function openMenu() {
            menu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeMenu() {
            menu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
            document.body.style.overflow = ''; // Restore scrolling
        }

        menuBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-slate-200">

<div className="hidden lg:block bg-brand-navy text-white py-2 px-4">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
<div className="flex gap-6">
<span className="flex items-center gap-2">
<iconify-icon className="text-brand-teal text-lg" icon="solar:map-point-linear"></iconify-icon>
                        97 Maple Avenue, Red Bank, NJ 07701
                    </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-brand-teal text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                        Mon, Tue, Thu: 9-6 | Wed: 12-7
                    </span>
</div>
<div className="flex gap-4">
<a className="hover:text-brand-teal transition-colors" href="tel:7327414700">Call: (732) 741-4700</a>
<span className="text-white/20">|</span>
<a className="text-brand-pink hover:text-white transition-colors" href="tel:7329244667">Emergency: (732) 924-4667</a>
</div>
</div>
</div>

<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="Red Bank Dentistry" className="h-10 w-auto object-contain" src="https://www.redbankdentistry.com/wp-content/uploads/2020/02/logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-brand-navy transition-colors" href="#">Home</a>
<a className="text-sm font-semibold text-slate-600 hover:text-brand-navy transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-brand-navy transition-colors" href="#doctors">Our Doctors</a>
<a className="text-sm font-semibold text-slate-600 hover:text-brand-navy transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-semibold text-slate-600 hover:text-brand-navy transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-brand-navy hover:bg-slate-50 transition-colors" href="tel:7327414700">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-brand-navy text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg hover:bg-[#064b89] text-white" href="#book">
                    Request Appointment
                    <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-brand-navy p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>
</header>

<div className="fixed inset-0 z-[60] bg-white opacity-0 invisible pointer-events-none flex flex-col h-[100dvh]" id="mobile-menu">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<img alt="Red Bank Dentistry" className="h-8 w-auto" src="https://www.redbankdentistry.com/wp-content/uploads/2020/02/logo.png"/>
<button className="p-2 text-brand-navy bg-slate-50 rounded-full" id="mobile-menu-close">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
<nav className="flex flex-col gap-6 text-lg font-medium text-slate-900">
<a className="mobile-link border-b border-slate-100 pb-2" href="#">Home</a>
<a className="mobile-link border-b border-slate-100 pb-2" href="#services">Services</a>
<a className="mobile-link border-b border-slate-100 pb-2" href="#doctors">Our Doctors</a>
<a className="mobile-link border-b border-slate-100 pb-2" href="#new-patients">New Patients</a>
<a className="mobile-link border-b border-slate-100 pb-2" href="#reviews">Reviews</a>
<a className="mobile-link border-b border-slate-100 pb-2" href="#contact">Contact</a>
</nav>
<div className="mt-auto space-y-4">
<a className="mobile-link flex items-center justify-center gap-2 w-full bg-brand-navy text-white font-semibold py-4 rounded-xl" href="#book">
                    Request Appointment
                </a>
<a className="flex items-center justify-center gap-2 w-full bg-brand-teal/10 text-brand-navy font-semibold py-4 rounded-xl" href="tel:7327414700">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                    Call (732) 741-4700
                </a>
</div>
</div>
</div>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-navy">

<div className="absolute inset-0 z-0">
<img alt="Red Bank Dentistry Team" className="w-full h-full object-cover object-top opacity-30 mix-blend-overlay" src="https://www.redbankdentistry.com/wp-content/uploads/2020/02/xhome-row-offer.jpg.pagespeed.ic.-1FXZVvFNI.webp"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 bg-brand-teal/20 backdrop-blur-md border border-brand-teal/30 rounded-full px-4 py-1.5">
<span className="flex h-2 w-2 rounded-full bg-brand-teal animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-wider text-brand-teal text-white">$99 New Patient Special</span>
</div>
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                        Your Path to a <br/>
<span className="text-slate-400 bg-gradient-to-r from-brand-teal to-teal-200">Confident Smile</span> in Red Bank.
                    </h1>
<p className="text-lg text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Comprehensive family, cosmetic, and restorative dentistry by Dr. Carole Sherrod Jewell &amp; Associates. Experience gentle care in a modern environment.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex justify-center items-center gap-2 bg-brand-teal text-base font-semibold px-8 py-3.5 rounded-full transition-all shadow-xl shadow-brand-teal/20 hover:bg-teal-500 text-white hover:-translate-y-1" href="#book">
                            Request Appointment
                        </a>
<a className="inline-flex justify-center items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-base font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white/10 text-white" href="tel:7327414700">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                            (732) 741-4700
                        </a>
</div>

<div className="pt-6 border-t border-white/10 flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">5.0 (127+ Reviews)</span>
</div>
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-brand-teal" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium">Insurance Accepted</span>
</div>
</div>
</div>

<div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl shadow-slate-900/50">
<h3 className="text-xl font-bold text-brand-navy mb-2">Request Your Visit</h3>
<p className="text-slate-500 text-sm mb-6">Fill out the form below and our team will contact you to confirm.</p>
<form className="space-y-4">
<div>
<label className="sr-only">Full Name</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:user-linear"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" placeholder="Full Name" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:phone-linear"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" placeholder="Phone" type="tel"/>
</div>
<div className="relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal" placeholder="Email" type="email"/>
</div>
</div>
<div>
<label className="sr-only">Reason for Visit</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-4 pr-10 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal appearance-none text-slate-600">
<option>New Patient Exam ($99 Special)</option>
<option>General Checkup &amp; Cleaning</option>
<option>Invisalign Consultation</option>
<option>Cosmetic Dentistry</option>
<option>Dental Pain / Emergency</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-brand-navy hover:bg-[#064b89] text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-brand-navy/20" type="button">
                            Submit Request
                        </button>
<p className="text-xs text-center text-slate-400 mt-2">
<iconify-icon className="inline align-middle mr-1" icon="solar:lock-linear"></iconify-icon>
                            Your information is secure. Connected to instant staff notification.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-brand-teal font-semibold tracking-wide uppercase text-sm mb-3">Comprehensive Care</h2>
<h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 tracking-tight">Everything Your Smile Needs</h3>
<p className="text-slate-500 text-lg">
                    From routine hygiene to complex restoration, Red Bank Dentistry offers a full suite of services under one roof.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-brand-navy mb-3">General &amp; Family</h4>
<p className="text-slate-500 mb-6 leading-relaxed">Routine cleanings, exams, oral cancer screenings, and gum disease treatment for the whole family.</p>
<a className="inline-flex items-center text-brand-teal font-semibold hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-brand-navy mb-3">Cosmetic Dentistry</h4>
<p className="text-slate-500 mb-6 leading-relaxed">Transform your smile with Porcelain Veneers, Lumineers, tooth-colored fillings, and whitening.</p>
<a className="inline-flex items-center text-brand-teal font-semibold hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-brand-navy mb-3">Invisalign®</h4>
<p className="text-slate-500 mb-6 leading-relaxed">Clear aligners for straight teeth at any age. No metal brackets, just a confident smile.</p>
<a className="inline-flex items-center text-brand-teal font-semibold hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-up-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-brand-navy mb-3">Restorative Care</h4>
<p className="text-slate-500 mb-6 leading-relaxed">Repair damaged teeth with dental implants, porcelain crowns, bridges, and dentures.</p>
<a className="inline-flex items-center text-brand-teal font-semibold hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-brand-navy mb-3">Emergency Dental</h4>
<p className="text-slate-500 mb-6 leading-relaxed">Same-day appointments for dental pain, broken teeth, or injuries. We are here to help.</p>
<a className="inline-flex items-center text-brand-teal font-semibold hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-brand-navy p-8 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center">
<h4 className="text-xl font-bold text-white mb-3">New Patient?</h4>
<p className="text-slate-300 mb-6">Take advantage of our $99 New Patient Special which includes a comprehensive exam and x-rays.</p>
<a className="inline-flex justify-center items-center gap-2 bg-white text-brand-navy text-sm font-bold px-6 py-3 rounded-full transition-all hover:bg-slate-100 w-full" href="#book">
                        Book Offer
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-brand-navy mb-4">The Team</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-navy">
                        Meet Our <span className="text-brand-teal">Doctors</span>
</h2>
</div>
<p className="text-slate-500 max-w-md text-lg">
                    Experienced, compassionate, and dedicated to your oral health.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-100">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<img alt="Dr. Carole Sherrod Jewell" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://www.redbankdentistry.com/wp-content/uploads/2020/02/xdr-jewell.jpg.pagespeed.ic.9bHGsGlN77.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold">Dr. Carole Sherrod Jewell</h3>
<p className="text-teal-200 font-medium">DMD, General &amp; Cosmetic Dentist</p>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-100">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<img alt="Dr. Pauline Robinson" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://www.redbankdentistry.com/wp-content/uploads/2020/02/xdr-robinson.jpg.pagespeed.ic.PK7VzlWJCG.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-2xl font-bold">Dr. Pauline Robinson</h3>
<p className="text-teal-200 font-medium">DDS, General Dentist</p>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-3xl overflow-hidden h-64 md:h-80 relative">
<img className="w-full h-full object-cover" src="https://www.redbankdentistry.com/wp-content/uploads/2020/02/xoffice.jpg.pagespeed.ic.O-zsIx2bPH.webp"/>
<div className="absolute inset-0 bg-brand-navy/60 flex flex-col items-center justify-center text-center p-6">
<h3 className="text-3xl font-bold text-white mb-2">Visit Our Red Bank Office</h3>
<p className="text-white/80 max-w-xl mx-auto">Located conveniently on Maple Avenue. Modern technology, comfortable amenities, and a friendly team waiting to serve you.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div className="space-y-8">
<div>
<h2 className="text-3xl font-bold text-brand-navy mb-4">Contact &amp; Location</h2>
<p className="text-slate-500 text-lg">We are conveniently located in Red Bank, NJ.</p>
</div>
<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-teal/10 rounded-full text-brand-teal">
<iconify-icon className="text-xl" icon="solar:map-point-bold"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-brand-navy">Red Bank Dentistry</h4>
<p className="text-slate-500">97 Maple Avenue<br/>Red Bank, NJ 07701</p>
<a className="text-brand-teal text-sm font-semibold mt-2 inline-block hover:underline" href="https://maps.google.com/maps?cid=2399899093989464574&amp;hl=en" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-teal/10 rounded-full text-brand-teal">
<iconify-icon className="text-xl" icon="solar:phone-calling-bold"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-brand-navy">Phone</h4>
<p className="text-slate-500"><a className="hover:text-brand-teal" href="tel:7327414700">(732) 741-4700</a></p>
<p className="text-brand-pink text-sm font-medium mt-1">Emergency: (732) 924-4667</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-teal/10 rounded-full text-brand-teal">
<iconify-icon className="text-xl" icon="solar:clock-circle-bold"></iconify-icon>
</div>
<div className="w-full">
<h4 className="font-bold text-brand-navy mb-2">Office Hours</h4>
<div className="grid grid-cols-2 gap-2 text-sm text-slate-500">
<span>Mon - Tue</span> <span className="text-right font-medium text-slate-700">9:00 AM - 6:00 PM</span>
<span>Wednesday</span> <span className="text-right font-medium text-slate-700">12:00 PM - 7:00 PM</span>
<span>Thursday</span> <span className="text-right font-medium text-slate-700">9:00 AM - 6:00 PM</span>
<span>Fri - Sat</span> <span className="text-right font-medium text-slate-700">By Appointment</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 h-[400px] lg:h-auto">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12163.065739387828!2d-74.068427!3d40.347527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x214e2782c20619fe!2sRed%20Bank%20Dentistry!5e0!3m2!1sen!2sus!4v1581042548597!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="new-patients">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-brand-navy mb-4">Patient Information &amp; FAQ</h2>
<p className="text-slate-500">Everything you need to know before your visit.</p>
</div>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-bold text-brand-navy">
                        Do you accept insurance?
                        <span className="ml-4 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-slate-600 leading-relaxed">
                        Yes, we accept most major dental insurance plans. Please contact our office with your insurance details, and we will verify your coverage for you. We also offer payment options for uncovered services.
                    </div>
</details>
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between cursor-pointer font-bold text-brand-navy">
                        Do you have any new patient specials?
                        <span className="ml-4 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-slate-600 leading-relaxed">
                        Yes! We offer a  which includes a comprehensive exam, necessary X-rays, gum disease screening, oral cancer screening, and jaw joint exam. We also offer free Invisalign consultations.
                    </div>
</details>
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-bold text-brand-navy">
                        Do you treat dental emergencies?
                        <span className="ml-4 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-slate-600 leading-relaxed">
                        Yes, we treat dental emergencies. If you are in pain or have broken a tooth, please call us immediately. For after-hours emergencies, please call (732) 924-4667.
                    </div>
</details>
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer font-bold text-brand-navy">
                        Where can I find patient forms?
                        <span className="ml-4 transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-slate-600 leading-relaxed">
                        Patient forms are available on our website to download and fill out prior to your appointment. This helps speed up your check-in process.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-brand-navy text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
<div className="space-y-6">
<img alt="Red Bank Dentistry" className="h-10 w-auto brightness-0 invert opacity-90" src="https://www.redbankdentistry.com/wp-content/uploads/2020/02/logo.png"/>
<p className="text-slate-300 text-sm leading-relaxed">
                        Red Bank Dentistry provides general, cosmetic, reconstructive dentistry &amp; orthodontics.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors" href="https://www.facebook.com/redbankdentistry" target="_blank">
<iconify-icon icon="ic:baseline-facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors" href="https://twitter.com/RedBankDentist" target="_blank">
<iconify-icon icon="mdi:twitter"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-teal transition-colors" href="https://www.linkedin.com/company/red-bank-dentistry" target="_blank">
<iconify-icon icon="mdi:linkedin"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-lg mb-6">Quick Links</h4>
<ul className="space-y-3 text-slate-300 text-sm">
<li><a className="hover:text-brand-teal transition-colors" href="#">Home</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#new-patients">Patient Forms</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#reviews">Reviews</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="https://pay.balancecollect.com/m/redbankdentistry" target="_blank">Pay Bill Online</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-lg mb-6">Services</h4>
<ul className="space-y-3 text-slate-300 text-sm">
<li><a className="hover:text-brand-teal transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Invisalign®</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Teeth Whitening</a></li>
<li><a className="hover:text-brand-teal transition-colors" href="#">Emergency Care</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-lg mb-6">Contact</h4>
<ul className="space-y-4 text-slate-300 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-teal text-lg shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>97 Maple Avenue<br/>Red Bank, NJ 07701</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-teal text-lg shrink-0 mt-0.5" icon="solar:phone-calling-linear"></iconify-icon>
<span>(732) 741-4700</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-pink text-lg shrink-0 mt-0.5" icon="solar:medical-kit-linear"></iconify-icon>
<span>Emergency: (732) 924-4667</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2026 Dr. Carole Sherrod Jewell, DMD. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>

<div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-40 flex gap-3">
<a className="flex-1 flex justify-center items-center gap-2 bg-brand-teal/10 text-brand-navy font-bold py-3 rounded-full" href="tel:7327414700">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon> Call
        </a>
<a className="flex-1 flex justify-center items-center gap-2 bg-brand-navy text-white font-bold py-3 rounded-full shadow-lg" href="#book">
<iconify-icon icon="solar:calendar-add-bold"></iconify-icon> Book
        </a>
</div>



    </>
  );
}
