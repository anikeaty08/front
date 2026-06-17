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



        // Mobile Menu Logic
        const toggleBtn = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const icon = toggleBtn.querySelector('iconify-icon');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open
                mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'visible', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                icon.setAttribute('icon', 'solar:close-square-linear');
            } else {
                // Close
                mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
                document.body.style.overflow = ''; // Allow scrolling
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }

        toggleBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex flex-col leading-none group" href="#">
<span className="text-xl font-bold tracking-tight text-[#122350]">Charlene Gambino, DMD</span>
<span className="text-xs font-medium text-slate-500 tracking-wide uppercase">Montclair Aesthetic &amp; Family Dentistry</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#122350] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#122350] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#122350] transition-colors" href="#doctor">Our Team</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#122350] transition-colors" href="#locations">Location</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#122350] transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-semibold text-[#122350] hover:text-slate-600" href="tel:9737072982">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        (973) 707-2982
                    </a>
<a className="inline-flex items-center gap-2 bg-[#122350] text-sm font-medium px-5 py-2.5 rounded-full text-white hover:bg-[#484351] transition-all shadow-lg shadow-slate-200" href="#book">
                        Book Appointment
                    </a>
</div>

<button className="lg:hidden p-2 text-[#122350] z-50 relative" id="mobile-toggle">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 bg-white opacity-0 invisible pointer-events-none flex flex-col pt-24 px-6 pb-6" id="mobile-menu">
<nav className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-semibold text-[#122350]" href="#">Home</a>
<a className="mobile-link text-2xl font-semibold text-[#122350]" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-[#122350]" href="#doctor">About Dr. Gambino</a>
<a className="mobile-link text-2xl font-semibold text-[#122350]" href="#locations">Hours &amp; Location</a>
<a className="mobile-link text-2xl font-semibold text-[#122350]" href="#reviews">Patient Reviews</a>
</nav>
<div className="mt-auto flex flex-col gap-4">
<a className="mobile-link w-full py-4 rounded-xl bg-[#122350] text-white text-center font-bold text-lg" href="#book">Book Appointment</a>
<a className="w-full py-4 rounded-xl border border-[#122350] text-[#122350] text-center font-bold text-lg flex justify-center items-center gap-2" href="tel:9737072982">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
                Call (973) 707-2982
            </a>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">

<div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 rounded-l-[4rem] -z-10 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#122350]/5 text-[#122350] tracking-wide uppercase">
                        Trusted Dental Care in Montclair, NJ
                    </span>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-[#122350]">
                        Care for Your Smile, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#122350] to-[#484351]">Brighten Your Day.</span>
</h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                        Whether this is the beginning of a new relationship or the continuation of an established one, Dr. Charlene Gambino invites you to experience expert care in a comfortable environment.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#122350] text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-[#122350]/20 hover:-translate-y-1 hover:bg-[#484351] text-white" href="#book">
                            Book Visit
                            <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200" href="tel:9737072982">
                            Call (973) 707-2982
                        </a>
</div>

<div className="pt-6 border-t border-slate-100 flex flex-wrap gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="18"></iconify-icon>
<span>Top Rated in Montclair</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#122350]" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span>Insurance Accepted</span>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">

<img alt="Modern Dental Office" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#122350]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80">Our Philosophy</p>
<p className="text-lg font-medium">"Healthy Mouth, Happy Life."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[#122350]">
                    Comprehensive <span className="text-[#484351]">Dental Services</span>
</h2>
<p className="text-lg text-slate-500">
                    From routine hygiene to complex cosmetic procedures, we provide a full range of services to keep your smile healthy.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-[#122350]/10 rounded-xl flex items-center justify-center text-[#122350] mb-6 group-hover:bg-[#122350] group-hover:text-white transition-colors">
<iconify-icon icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-[#122350]">General Dentistry</h3>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Preserve your natural teeth and ensure oral health.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Fillings &amp; Crowns</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Bridges &amp; Dentures</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Extractions</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> TMJ &amp; Night Guards</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-[#122350]/10 rounded-xl flex items-center justify-center text-[#122350] mb-6 group-hover:bg-[#122350] group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-[#122350]">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Transform your look with innovative aesthetic procedures.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening &amp; Zoom!</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Veneers &amp; Lumineers</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Invisalign®</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Bonding</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-[#122350]/10 rounded-xl flex items-center justify-center text-[#122350] mb-6 group-hover:bg-[#122350] group-hover:text-white transition-colors">
<iconify-icon icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-[#122350]">Implants &amp; Restoration</h3>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Modern solutions for missing teeth and structural repair.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Endodontics (Root Canals)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Site Preservation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Inlays &amp; Onlays</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
<div className="w-12 h-12 bg-[#122350]/10 rounded-xl flex items-center justify-center text-[#122350] mb-6 group-hover:bg-[#122350] group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-[#122350]">Hygiene &amp; Family</h3>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Preventive care for the whole family, from kids to adults.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Pediatric Dentistry</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Gum Disease Treatment</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Oral Cancer Screening</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#122350]" icon="solar:check-circle-linear"></iconify-icon> Arestin Treatment</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="doctor">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-12 items-center">

<div className="w-full lg:w-1/3">
<div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-100">
<img alt="Dr. Charlene Gambino" className="w-full h-full object-cover" src="https://cdcssl.ibsrv.net/ibimg/smb/250x250_80/webmgr/13/o/m/5ee8d307f40d9_CharleneGambino.jpg.webp?4ea7711db10ed43cd9ba648b04a4d963"/>
</div>
</div>
<div className="w-full lg:w-2/3">
<span className="text-[#122350] font-bold tracking-wider uppercase text-xs mb-2 block">Meet The Dentist</span>
<h2 className="text-3xl md:text-5xl font-semibold mb-6 text-[#122350]">Dr. Charlene Gambino, DMD</h2>
<div className="prose prose-lg text-slate-500 mb-8">
<p className="mb-4">Dr. Charlene Gambino has been practicing in Montclair, New Jersey since 2005. She grew up in Essex County and received a Bachelor's Degree from Rutger's University - Newark Campus.</p>
<p className="mb-4">Following college, she traveled extensively for a few years before obtaining her dental Doctorate at the University of Medicine and Dentistry, New Jersey. Dr. Gambino then completed her dental residency at the Hospital of Veteran Affairs in East Orange.</p>
<p>She continues to update her education through programs at the Las Vegas Institute, the Southwest Symposium on Forensic Dentistry and through instruction on procedures like Invisalign and Lumineers. Dr. Gambino lives in Essex County with her family and their adorable dog.</p>
</div>
<a className="inline-flex items-center gap-2 text-[#122350] font-semibold hover:text-[#484351]" href="#book">
                        Schedule an appointment with Dr. Gambino
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#122350] text-white rounded-t-[3rem]" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold mb-6">Visit Our Office</h2>
<p className="text-slate-300 mb-10 text-lg">We are conveniently located in Montclair. Our team is ready to welcome you to our comfortable, modern practice.</p>
<div className="space-y-8">

<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-xl">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Montclair Aesthetic &amp; Family Dentistry</h3>
<p className="text-slate-300">22 The Crescent<br/>Montclair, NJ 07042</p>
<a className="text-white underline mt-2 inline-block text-sm hover:text-slate-300" href="https://maps.google.com/?q=22+The+Crescent,Montclair,NJ,07042" target="_blank">Get Directions</a>
</div>
</div>

<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-xl">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-xl mb-1">Contact Us</h3>
<p className="text-slate-300 mb-2">Questions? Give us a call.</p>
<a className="text-xl font-bold hover:text-slate-300 transition-colors" href="tel:9737072982">(973) 707-2982</a>
</div>
</div>
</div>
</div>

<div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
<h3 className="text-2xl font-semibold mb-6">Hours of Operation</h3>
<ul className="space-y-4">
<li className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="font-medium">Monday</span>
<span className="text-slate-300">9:00 am - 6:00 pm</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="font-medium">Tuesday</span>
<span className="text-red-300">Closed</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="font-medium">Wednesday</span>
<span className="text-slate-300">9:00 am - 7:00 pm</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="font-medium">Thursday</span>
<span className="text-slate-300">9:00 am - 5:00 pm</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="font-medium">Friday</span>
<span className="text-slate-300">8:00 am - 4:00 pm</span>
</li>
<li className="flex justify-between items-center border-b border-white/10 pb-2">
<span className="font-medium">Saturday</span>
<span className="text-slate-300 text-sm">Two per Month (Oct - June)</span>
</li>
<li className="flex justify-between items-center pb-2">
<span className="font-medium">Sunday</span>
<span className="text-red-300">Closed</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="reviews">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold mb-12 text-[#122350]">Patient Experiences</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-2xl shadow-sm">
<div className="flex justify-center text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-600 italic">"Visiting Charlene Gambino, DMD gives my family and me more reasons to smile."</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm">
<div className="flex justify-center text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-600 italic">"Dr. Gambino provided me with excellent care when I needed it the most."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="book">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold mb-4 text-[#122350]">Request an Appointment</h2>
<p className="text-slate-500">Fill out the form below and we will contact you to confirm your visit.</p>
</div>
<form className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#122350] focus:border-transparent bg-white" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#122350] focus:border-transparent bg-white" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#122350] focus:border-transparent bg-white" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Reason for Visit</label>
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#122350] focus:border-transparent bg-white">
<option>General Checkup</option>
<option>Cosmetic Consultation</option>
<option>Pain/Emergency</option>
<option>Cleaning</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Preferred Date/Time</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#122350] focus:border-transparent bg-white" placeholder="e.g. Monday mornings" type="text"/>
</div>
<button className="w-full bg-[#122350] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#484351] transition-all shadow-lg" type="button">
                    Submit Request
                </button>
<p className="text-xs text-center text-slate-400 mt-4">
                    *System Note: Connect form to instant email autoresponder + staff notification email.
                </p>
</form>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold mb-8 text-[#122350] text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium text-[#122350] list-none">
<span>Do you accept insurance?</span>
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500">Yes, we accept many dental insurance plans. Please call our office at (973) 707-2982 to verify your specific coverage.</p>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium text-[#122350] list-none">
<span>Do you offer emergency appointments?</span>
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500">We do our best to accommodate dental emergencies. If you are in pain, please call us immediately.</p>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium text-[#122350] list-none">
<span>What cosmetic services do you provide?</span>
<iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-slate-500">We offer Veneers, Lumineers, Invisalign, Whitening (Zoom!), Bonding, and white fillings.</p>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<span className="text-xl font-bold text-white block mb-4">Charlene Gambino, DMD</span>
<p className="mb-4 max-w-sm">Montclair Aesthetic &amp; Family Dentistry. Dedicated to providing exceptional dental care for the whole family.</p>
<a className="text-white hover:text-[#122350] transition-colors" href="https://www.facebook.com/Montclair-Aesthetic-Family-Dentistry-114401943326616" target="_blank">
<iconify-icon icon="logos:facebook" width="24"></iconify-icon>
</a>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#doctor">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#book">Book Appointment</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li>22 The Crescent</li>
<li>Montclair, NJ 07042</li>
<li><a className="hover:text-white transition-colors" href="tel:9737072982">(973) 707-2982</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-sm">
<p>© 2026 Charlene Gambino, DMD. All Rights Reserved.</p>
</div>
</footer>



    </>
  );
}
