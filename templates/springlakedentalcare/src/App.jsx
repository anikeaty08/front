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



        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300" id="navbar">
<div className="bg-[#055497] text-white text-xs py-2 px-4 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Spring Lake, NJ</span>
<span className="flex items-center gap-1.5 opacity-80">Top Dentist - NJ Monthly Magazine</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-[#099BC2] transition-colors" href="https://schedule.solutionreach.com/scheduling/subscriber/456/scheduler" target="_blank">Existing Patients</a>
<a className="hover:text-[#099BC2] transition-colors" href="https://patron.solutionreach.com/uipatron/payment/subscriber/7a9da9f1fa174e0c" target="_blank">Pay Online</a>
</div>
</div>
</div>
<nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<img alt="Spring Lake Dental Care" className="h-10 md:h-12 w-auto" src="https://www.springlakesmiles.com/wp-content/themes/rm-basetheme/images/logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-[#055497] transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#055497] transition-colors" href="#doctors">Doctors</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#055497] transition-colors" href="#location">Location</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#055497] transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#055497] transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 text-[#055497] font-bold text-sm hover:text-[#099BC2] transition-colors" href="tel:+17324495666">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                            (732) 449-5666
                        </a>
<a className="inline-flex items-center gap-2 bg-[#055497] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-900/20 hover:bg-[#099BC2] hover:shadow-[#099BC2]/30" href="https://schedule.solutionreach.com/scheduling/subscriber/456/scheduler" target="_blank">
                            Book Appointment
                        </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden text-[#055497] z-50 p-2 relative" id="menu-btn">
<iconify-icon className="w-8 h-8" icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
</button>
</div>
</div>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl opacity-0 pointer-events-none transition-all duration-300 flex flex-col justify-center items-center" id="mobile-menu">
<div className="flex flex-col items-center gap-6 text-center">
<a className="mobile-link text-2xl font-semibold text-[#055497]" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-[#055497]" href="#doctors">Doctors</a>
<a className="mobile-link text-2xl font-semibold text-[#055497]" href="#location">Location</a>
<a className="mobile-link text-2xl font-semibold text-[#055497]" href="#new-patients">New Patients</a>
<a className="text-xl font-medium text-slate-500 mt-4 flex items-center gap-2" href="tel:+17324495666">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (732) 449-5666
            </a>
<a className="mt-4 bg-[#055497] text-white text-lg font-medium px-8 py-3 rounded-full shadow-xl" href="https://schedule.solutionreach.com/scheduling/subscriber/456/scheduler" target="_blank">
                Book Appointment
            </a>
</div>
</div>

<section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Spring Lake Dental Office" className="w-full h-full object-cover object-center" src="https://www.springlakesmiles.com/wp-content/themes/rm-basetheme/images/bg-front-header-desktop.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-[#003462]/95 via-[#003462]/70 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center min-h-[500px]">
<div className="max-w-2xl space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#099BC2]/20 border border-[#099BC2]/30 text-[#099BC2] text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
<span className="bg-[#099BC2] w-2 h-2 rounded-full"></span> Top Dentist NJ Monthly
                </div>
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                    Creating picture-perfect smiles in our <span className="text-[#099BC2]">picture-perfect location!</span>
</h1>
<p className="text-lg text-slate-200 font-medium max-w-lg leading-relaxed">
                    Welcome to Spring Lake Dental Care. Dr. Andrew Morris and Associates providing comprehensive, expert dental care in one convenient location for over 30 years.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#099BC2] text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:bg-[#055497] hover:-translate-y-1" href="https://schedule.solutionreach.com/scheduling/subscriber/456/scheduler" target="_blank">
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 border border-white/30 backdrop-blur-sm bg-white/10 text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white hover:text-[#055497]" href="tel:+17324495666">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                        (732) 449-5666
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-white border-b border-slate-100 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
<div className="space-y-1">
<p className="text-3xl font-bold text-[#055497]">30+</p>
<p className="text-sm text-slate-500 font-medium">Years Serving NJ</p>
</div>
<div className="space-y-1">
<div className="flex justify-center text-yellow-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-500 font-medium">4.9 Stars (258 Reviews)</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-bold text-[#055497]">#1</p>
<p className="text-sm text-slate-500 font-medium">Top Dentists Award</p>
</div>
<div className="space-y-1">
<p className="text-3xl font-bold text-[#055497]">100%</p>
<p className="text-sm text-slate-500 font-medium">Patient Satisfaction</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#099BC2] font-semibold tracking-wider uppercase text-sm">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-[#055497]">Dental Services</h2>
<p className="text-slate-500">We offer a full range of advanced options right here under one roof.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#099BC2]/30 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#055497] mb-6 group-hover:bg-[#055497] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:health-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#055497] mb-3">General Care</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Oral Exams &amp; Cleanings</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Digital X-Rays</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Oral Cancer Screenings</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Tooth-Colored Fillings</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#099BC2]/30 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#055497] mb-6 group-hover:bg-[#055497] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#055497] mb-3">Cosmetic</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Porcelain Veneers</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Invisalign®</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Smile Makeovers</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#099BC2]/30 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#055497] mb-6 group-hover:bg-[#055497] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#055497] mb-3">Restorative</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> All-on-4®</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Bridges &amp; Crowns</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Implant Dentures</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#099BC2]/30 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#055497] mb-6 group-hover:bg-[#055497] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#055497] mb-3">Advanced Care</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Sedation Dentistry</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Sleep Apnea Therapy</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> Holistic Dentistry</li>
<li className="flex items-center gap-2 text-sm text-slate-500"><iconify-icon className="text-[#099BC2]" icon="solar:check-circle-linear"></iconify-icon> TMJ/TMD Therapy</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<img alt="Dr. Morris and Dr. Ciampi" className="rounded-3xl shadow-2xl shadow-blue-900/10 w-full object-cover" src="https://www.springlakesmiles.com/wp-content/uploads/2024/05/both-doctors_2024.jpg"/>
</div>
<div className="w-full md:w-1/2 space-y-6">
<span className="text-[#099BC2] font-semibold tracking-wider uppercase text-sm">Meet Our Experts</span>
<h2 className="text-3xl md:text-4xl font-bold text-[#055497]">Top Dentists in New Jersey</h2>
<p className="text-slate-500 text-lg">
                        Dr. Andrew Morris and Dr. Peter Ciampi have been recognized as NJ Top Dentists and have attained Mastership Status in the Academy of General Dentistry. We prioritize a comforting and compassionate environment.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://www.springlakesmiles.com/wp-content/uploads/2025/08/DrMorris_TopDentist_Mockup.png"/>
</div>
<div>
<h4 className="font-bold text-[#055497]">Dr. Andrew Morris</h4>
<p className="text-xs text-slate-500">General Dentist</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://www.springlakesmiles.com/wp-content/uploads/2025/08/DrCiampi_TopDentists_Mockup.png"/>
</div>
<div>
<h4 className="font-bold text-[#055497]">Dr. Peter Ciampi</h4>
<p className="text-xs text-slate-500">Cosmetic Dentist</p>
</div>
</div>
</div>
<div className="pt-4">
<p className="text-sm text-slate-500 mb-2">Our Specialists:</p>
<p className="text-sm font-medium text-[#055497]">Dr. Anthony Delzotto, Dr. Kenneth Gluck, Dr. Firas Marsheh, Dr. Khanh Q. Nguyen</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="location">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="text-left">
<h2 className="text-3xl font-bold text-[#055497] mb-2">Visit Our Office</h2>
<p className="text-slate-500">Conveniently located in Spring Lake, NJ.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-9xl text-[#055497]" icon="solar:map-point-bold"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-[#055497] mb-6">Spring Lake</h3>
<div className="space-y-4 relative z-10">
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-2 rounded-lg text-[#055497]">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-700">Address</p>
<p className="text-slate-500">310 Morris Ave<br/>Spring Lake, NJ 07762</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-blue-50 p-2 rounded-lg text-[#055497]">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-700">Phone</p>
<a className="text-slate-500 hover:text-[#099BC2]" href="tel:+17324495666">(732) 449-5666</a>
</div>
</div>
</div>
<div className="mt-8 flex gap-3">
<a className="flex-1 bg-[#055497] text-white text-center py-3 rounded-xl font-medium hover:bg-[#099BC2] transition-colors" href="https://g.page/r/CbSqxVEXxvTAEAE" target="_blank">Get Directions</a>
<a className="flex-1 border border-slate-200 text-[#055497] text-center py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors" href="tel:+17324495666">Call Now</a>
</div>
</div>
</div>

<div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 overflow-hidden">
<div className="bg-[#055497] p-6 text-white">
<h3 className="text-xl font-bold">Request Appointment</h3>
<p className="text-white/80 text-sm mt-1">We'll confirm your visit shortly.</p>
</div>
<div className="p-8">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#099BC2] focus:ring-1 focus:ring-[#099BC2]" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Phone</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#099BC2] focus:ring-1 focus:ring-[#099BC2]" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#099BC2] focus:ring-1 focus:ring-[#099BC2]" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Patient Status</label>
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#099BC2] focus:ring-1 focus:ring-[#099BC2] bg-white">
<option>New Patient</option>
<option>Existing Patient</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Message</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#099BC2] focus:ring-1 focus:ring-[#099BC2]" placeholder="Reason for visit..." rows="3"></textarea>
</div>
<button className="w-full bg-[#099BC2] text-white font-bold py-4 rounded-xl hover:bg-[#055497] transition-all shadow-lg shadow-[#099BC2]/20" type="button">
                                Send Request
                            </button>
<p className="text-xs text-center text-slate-400 italic mt-2">*Connect form to instant email autoresponder + staff notification</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#003462] text-white pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<h4 className="text-xl font-bold">Spring Lake Dental Care</h4>
<p className="text-white/60 text-sm leading-relaxed">
                        Proud to be trusted for over 30 years for exceptional smile transformations and personalized care.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#099BC2] transition-colors" href="https://www.facebook.com/SpringLakeSmiles" target="_blank"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#099BC2] transition-colors" href="https://www.instagram.com/springlakedentalcare/" target="_blank"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-bold mb-4 text-[#099BC2]">Patient Info</h4>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="https://www.springlakesmiles.com/staff/">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.springlakesmiles.com/contact-us/patient-forms/">Patient Forms</a></li>
<li><a className="hover:text-white transition-colors" href="https://patron.solutionreach.com/uipatron/payment/subscriber/7a9da9f1fa174e0c" target="_blank">Pay Online</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.springlakesmiles.com/about/specials/">Special Offers</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-4 text-[#099BC2]">Services</h4>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-white transition-colors" href="#">Invisalign</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sedation Dentistry</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-4 text-[#099BC2]">Contact</h4>
<ul className="space-y-3 text-sm text-white/70">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0 text-[#099BC2]" icon="solar:map-point-linear"></iconify-icon>
<span>310 Morris Ave<br/>Spring Lake, NJ 07762</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-shrink-0 text-[#099BC2]" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white" href="tel:+17324495666">(732) 449-5666</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-white/40 text-xs">© 2026 Spring Lake Dental Care. Andrew Morris, DDS.</p>
<div className="flex gap-6 text-xs text-white/40">
<a className="hover:text-white" href="https://www.springlakesmiles.com/privacy-policy">Privacy Policy</a>
<a className="hover:text-white" href="https://www.springlakesmiles.com/accessibility-statement/">Accessibility</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
