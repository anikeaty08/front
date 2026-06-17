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



        // Mobile Menu Toggle Logic
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link'); // Select links inside menu

        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            // Toggle icon shape if desired (optional)
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">

<div className="hidden lg:block bg-[#11414b] text-white py-2 px-4">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> 1817 Mt Holly Rd, Burlington, NJ</span>
<span className="flex items-center gap-2 text-[#0096cb]"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Emergency Walk-Ins Available</span>
</div>
<div className="flex items-center gap-4">
<span>Se Habla Español</span>
<a className="hover:text-[#0096cb] transition-colors" href="tel:6092674200">609-267-4200</a>
</div>
</div>
</div>
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<img alt="Community Dental of Burlington" className="h-10 md:h-12 w-auto object-contain" src="https://le-cdn.hibuwebsites.com/d8c284f8ab8d4eada594d77cb4868a0d/dms3rep/multi/opt/123-e84ed8a8-1920w.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-700 hover:text-[#0096cb]" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-700 hover:text-[#0096cb]" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-700 hover:text-[#0096cb]" href="#locations">Locations</a>
<a className="text-sm font-medium transition-colors text-slate-700 hover:text-[#0096cb]" href="#new-patients">New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-700 hover:text-[#0096cb]" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Burlington, NJ</span>
<a className="text-sm font-bold text-slate-900 hover:text-[#0096cb]" href="tel:6092674200">609-267-4200</a>
</div>
<a className="inline-flex items-center gap-2 bg-[#0096cb] text-sm font-medium px-6 py-2.5 rounded-full transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:bg-[#0077a0] text-white" href="#book">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden text-slate-900 z-50 p-2 relative" id="mobile-toggle">
<svg className="lucide lucide-menu w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<div className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-10 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-xl font-medium text-slate-900" href="#">Home</a>
<a className="mobile-link text-xl font-medium text-slate-900" href="#services">Services</a>
<a className="mobile-link text-xl font-medium text-slate-900" href="#locations">Locations</a>
<a className="mobile-link text-xl font-medium text-slate-900" href="#new-patients">New Patients</a>
<a className="mobile-link text-xl font-medium text-slate-900" href="#contact">Contact</a>
<hr className="border-slate-100 my-2"/>
<a className="inline-flex justify-center items-center gap-2 border-2 border-[#0096cb] text-[#0096cb] text-lg font-medium px-6 py-3 rounded-xl" href="tel:6092674200">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon> Call 609-267-4200
                </a>
<a className="mobile-link inline-flex justify-center items-center gap-2 bg-[#0096cb] text-lg font-medium px-6 py-3 rounded-xl shadow-xl shadow-cyan-500/20 text-white" href="#book">
                    Request Appointment
                </a>
</div>
</div>
</header>

<section className="lg:pt-32 lg:pb-32 overflow-hidden pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="z-10 lg:text-left lg:pt-0 text-center pt-0 relative space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-[#0096cb] text-xs font-bold uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0096cb]"></span>
</span>
                    Accepting New Patients
                </div>
<h1 className="text-4xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1] text-slate-900">
                    Your Community <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0096cb] to-teal-500">Dentist in Burlington.</span>
</h1>
<p className="text-lg text-slate-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    State-of-the-art, full-service dental care for all ages. We accept most insurances including NJ
                    Family Care and offer emergency walk-in services.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex justify-center items-center gap-2 bg-[#0096cb] text-base font-medium px-8 py-4 rounded-full transition-all shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 hover:bg-[#0077a0] text-white" href="#book">
                        Book Online
                        <iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border bg-white hover:bg-slate-50 text-slate-700 border-slate-200 text-base font-medium px-8 py-4 rounded-full transition-all hover:border-[#0096cb] hover:text-[#0096cb]" href="tel:6092674200">
                        Call 609-267-4200
                    </a>
</div>

<div className="flex flex-wrap gap-4 lg:justify-start text-sm font-semibold text-slate-500 pt-6 justify-center">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#0096cb] text-lg" icon="solar:verified-check-bold"></iconify-icon>
                        30+ Years Exp.
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#0096cb] text-lg" icon="solar:verified-check-bold"></iconify-icon>
                        Medicaid Accepted
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-[#0096cb] text-lg" icon="solar:verified-check-bold"></iconify-icon> Se
                        Habla Español
                    </div>
</div>
</div>

<div className="relative mt-8 lg:mt-0 px-4 lg:px-0">
<div className="overflow-hidden group shadow-cyan-900/10 aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] relative shadow-2xl">
<img alt="Dental Patient Smiling" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.pexels.com/photos/3845736/pexels-photo-3845736.jpeg?w=800&amp;q=80"/>

<div className="bg-gradient-to-t from-[#11414b]/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-white/95 p-5 rounded-2xl shadow-lg border border-white/20">
<div className="flex items-center gap-4">
<div className="bg-[#0096cb]/10 p-3 rounded-full text-[#0096cb]">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-bold"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-[#0096cb] mb-0.5">Emergency
                                    Care</p>
<p className="font-semibold text-slate-900">Walk-Ins Welcome Today</p>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl bg-cyan-200/50">
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-20 pb-20" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-4 text-slate-900">
                    Comprehensive <span className="text-[#0096cb]">Services</span>
</h2>
<p className="text-lg text-slate-500">
                    From routine checkups to emergency procedures, our experienced team is here for your family's smile.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="General Dentistry" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://le-cdn.hibuwebsites.com/d8c284f8ab8d4eada594d77cb4868a0d/dms3rep/multi/opt/home2-1920w.jpg"/>
</div>
<div className="px-6 pb-6">
<div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center text-[#0096cb] mb-4">
<iconify-icon className="text-xl" icon="solar:tooth-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">General Dentistry</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Cleanings, fillings, and preventive care for a healthy, long-lasting smile.</p>
<a className="text-[#0096cb] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Pediatric Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://le-cdn.hibuwebsites.com/d8c284f8ab8d4eada594d77cb4868a0d/dms3rep/multi/opt/home3-1920w.jpg"/>
</div>
<div className="px-6 pb-6">
<div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center text-[#0096cb] mb-4">
<iconify-icon className="text-xl" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Pediatric Dentistry</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Gentle care for children. We make dental visits fun and stress-free for your little ones.</p>
<a className="text-[#0096cb] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Emergency Dentistry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 align-top" src="https://le-cdn.hibuwebsites.com/md/dmip/dms3rep/multi/opt/woman-boxer-sport-1920w.jpg"/>
<div className="absolute inset-0 bg-[#11414b]/30"></div>
</div>
<div className="px-6 pb-6">
<div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center text-[#0096cb] mb-4">
<iconify-icon className="text-xl" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Emergency Care</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Immediate walk-in services for toothaches, injuries, and urgent dental needs.</p>
<a className="text-[#0096cb] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#11414b] text-white rounded-t-[3rem]" id="new-patients">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Affordable &amp; Accessible Care</h2>
<p className="text-cyan-100/80 text-lg mb-8">We believe everyone deserves a healthy smile. That's why we accept most major insurance plans and offer flexible payment options.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0096cb] text-xl mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span>Most Insurances Accepted including <strong>NJ Family Care</strong></span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0096cb] text-xl mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span><strong>Medicaid</strong> Accepted</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0096cb] text-xl mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span><strong>CareCredit</strong> Financing Available</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#0096cb] text-xl mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span>Affiliated with local hospitals &amp; Urgent Care</span>
</li>
</ul>
</div>
<div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
<h3 className="text-2xl font-bold mb-4">Patient Reviews</h3>
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="italic text-cyan-50 mb-6">"Trust our family and locally owned dental practice to provide outstanding dental care for your whole family! We have more than 30 years of dentistry experience."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#0096cb] flex items-center justify-center text-white font-bold">C</div>
<div>
<p className="font-semibold text-sm">Community Dental</p>
<p className="text-xs text-cyan-200">Burlington, NJ</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-heading font-bold text-slate-900">Our Location</h2>
</div>
<div className="bg-slate-50 rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row">

<div className="p-8 md:p-12 md:w-1/2 space-y-8">
<div>
<h3 className="text-2xl font-bold text-slate-900 mb-1">Burlington Office</h3>
<p className="text-[#0096cb] font-medium">Community Dental of Burlington</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0096cb] shrink-0">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900 text-sm">Visit Us</p>
<p className="text-slate-500 text-sm">1817 Mt Holly Rd<br/>Burlington, NJ 08016</p>
<a className="text-[#0096cb] text-xs font-bold uppercase tracking-wide mt-2 inline-block hover:underline" href="https://www.google.com/maps?q=1817+Mt+Holly+Rd+Burlington,+NJ+08016" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0096cb] shrink-0">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900 text-sm">Call Us</p>
<a className="text-slate-500 text-sm hover:text-[#0096cb]" href="tel:6092674200">609-267-4200</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#0096cb] shrink-0">
<iconify-icon icon="solar:clock-circle-bold"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900 text-sm">Hours</p>
<p className="text-slate-500 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
<p className="text-slate-500 text-sm">Saturday - Sunday: Closed</p>
</div>
</div>
</div>
</div>

<div className="md:w-1/2 min-h-[300px] bg-slate-200 relative">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.678453480373!2d-74.8329!3d40.0402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1354c0b0b0b0b%3A0x0!2s1817%20Mt%20Holly%20Rd%2C%20Burlington%2C%20NJ%2008016!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0096cb] relative overflow-hidden" id="book">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-3">Request Appointment</h2>
<p className="text-slate-500">Fill out the form below and we will contact you to confirm your appointment time.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-3">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-[#0096cb] focus:ring-1 focus:ring-[#0096cb] transition-all text-slate-900" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-3">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-[#0096cb] focus:ring-1 focus:ring-[#0096cb] transition-all text-slate-900" placeholder="(609) 555-0123" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-3">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-[#0096cb] focus:ring-1 focus:ring-[#0096cb] transition-all text-slate-900" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-3">Service</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-[#0096cb] focus:ring-1 focus:ring-[#0096cb] transition-all text-slate-900 appearance-none cursor-pointer">
<option>General Checkup</option>
<option>Pediatric Visit</option>
<option>Emergency / Pain</option>
<option>Other</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div>
<label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-3">Message (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-[#0096cb] focus:ring-1 focus:ring-[#0096cb] transition-all text-slate-900" placeholder="Tell us about your dental needs..." rows="3"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-[#0096cb] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-[#0077a0] transition-colors flex justify-center items-center gap-2" type="submit">
                            Submit Request <iconify-icon icon="solar:plain-3-bold"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-4">

                            Note: This form should connect to email autoresponder + staff notification.
                        </p>
</div>
</form>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-heading font-bold text-center mb-10 text-slate-900">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:ring-1 open:ring-[#0096cb]/20">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium list-none">
<span>Do you accept Medicaid / NJ Family Care?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500">
                        Yes, we proudly accept NJ Family Care and Medicaid, along with most other major insurance plans.
                    </div>
</details>
<details className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:ring-1 open:ring-[#0096cb]/20">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium list-none">
<span>Can I be seen for an emergency?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500">
                        Yes, we accept walk-ins for emergency dental services. Please call us at 609-267-4200 or come in immediately if you are in pain.
                    </div>
</details>
<details className="group bg-white rounded-2xl shadow-sm border border-slate-200 open:ring-1 open:ring-[#0096cb]/20">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium list-none">
<span>Do you treat children?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500">
                        Absolutely. Our Pediatric Dentistry services are designed to make children feel safe and comfortable during their visit.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#11414b] text-white pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<img alt="Logo" className="h-10 w-auto brightness-0 invert" src="https://le-cdn.hibuwebsites.com/d8c284f8ab8d4eada594d77cb4868a0d/dms3rep/multi/opt/123-e84ed8a8-1920w.png"/>
</div>
<p className="text-cyan-100/60 max-w-sm mb-6">
                        Improve Your Selfie! Professional, friendly, and affordable dental care for the Burlington community.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0096cb] transition-colors" href="#">
<iconify-icon icon="solar:facebook-bold"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0096cb] transition-colors" href="#">
<iconify-icon icon="solar:twitter-bold"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-bold mb-4 text-white">Contact</h4>
<ul className="space-y-3 text-cyan-100/60 text-sm">
<li>1817 Mt Holly Rd<br/>Burlington, NJ 08016</li>
<li>
<a className="hover:text-white transition-colors" href="tel:6092674200">609-267-4200</a>
</li>
<li>info@burlingtondentalnj.com</li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 text-white">Services</h4>
<ul className="space-y-3 text-cyan-100/60 text-sm">
<li><a className="hover:text-white transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pediatric Dentistry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Emergency Care</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Patients</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cyan-100/40">
<p>© 2026 Community Dental of Burlington. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
