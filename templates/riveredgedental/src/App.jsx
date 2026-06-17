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
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const closeBtn = document.getElementById('mobile-menu-close');
        const menuLinks = document.querySelectorAll('.mobile-link');

        function openMenu() {
            menu.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeMenu() {
            menu.classList.add('hidden');
            document.body.style.overflow = '';
        }

        menuBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        // Close menu when clicking a link
        menuLinks.forEach(link => {
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">

<div className="hidden lg:block bg-brand-dark text-white text-xs py-2">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#85D8DD]" icon="solar:map-point-linear"></iconify-icon> 130 Kinderkamack Rd, #303, River Edge, NJ</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#85D8DD]" icon="solar:clock-circle-linear"></iconify-icon> Open Late: Tue, Thu, Sat (8AM - 7PM)</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-[#85D8DD] transition-colors font-medium" href="tel:2019890178">201-989-0178</a>
</div>
</div>
</div>

<nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

<a className="flex items-center gap-2 z-50 relative" href="#">
<img alt="River Edge Dental Logo" className="h-8 md:h-10 w-auto object-contain" src="https://riveredgedental.com/wp-content/uploads/2025/11/logo-river-edge.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-[#1C313C] transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#1C313C] transition-colors" href="#doctors">Doctors</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#1C313C] transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#1C313C] transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#1C313C] transition-colors" href="#locations">Location</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="text-[#1C313C] font-semibold text-sm hover:text-[#85D8DD] transition-colors flex items-center gap-2" href="tel:2019890178">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (201) 989-0178
                </a>
<a className="bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#85D8DD] hover:text-[#1C313C] transition-all shadow-lg shadow-slate-200" href="https://book.modento.io/riveredgedental" target="_blank">
                    Book Online
                </a>
</div>

<button aria-label="Open Menu" className="lg:hidden p-2 text-[#1C313C] z-50 relative" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="hidden fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 overflow-y-auto" id="mobile-menu">
<button className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900" id="mobile-menu-close">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-xl font-medium text-slate-900" href="#services">Services</a>
<a className="mobile-link text-xl font-medium text-slate-900" href="#doctors">Doctors</a>
<a className="mobile-link text-xl font-medium text-slate-900" href="#reviews">Reviews</a>
<a className="mobile-link text-xl font-medium text-slate-900" href="#new-patients">New Patients</a>
<a className="mobile-link text-xl font-medium text-slate-900" href="#contact">Contact</a>
<hr className="border-slate-100 my-2"/>
<a className="w-full bg-brand-dark text-white font-semibold py-4 rounded-xl text-center shadow-xl" href="https://book.modento.io/riveredgedental">
                Book Appointment
            </a>
<a className="flex items-center justify-center gap-2 text-slate-600 font-medium py-2" href="tel:2019890178">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                (201) 989-0178
            </a>
</div>
</div>

<section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-brand-dark">

<div className="absolute inset-0 z-0">
<img alt="River Edge Dental Team" className="w-full h-full object-cover object-center opacity-40" src="https://riveredgedental.com/wp-content/uploads/2024/02/Team-Photo-scaled.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1C313C] via-[#1C313C]/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[#85D8DD] text-xs font-semibold uppercase tracking-wider">
<iconify-icon icon="solar:star-bold"></iconify-icon> Top Rated Dentist in River Edge
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                    A Dental Experience That Exceeds <span className="text-[#85D8DD]">Exceptional.</span>
</h1>
<p className="text-lg text-slate-300 font-medium leading-relaxed max-w-lg">
                    Patient-focused care all under one roof. We offer extended hours on Tuesdays, Thursdays, and Saturdays to fit your busy schedule.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-[#85D8DD] text-[#1C313C] text-base font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white hover:scale-105 shadow-lg shadow-[#85D8DD]/20" href="https://book.modento.io/riveredgedental" target="_blank">
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-base font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white/20" href="tel:2019890178">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        (201) 989-0178
                    </a>
</div>

<div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6">
<div>
<div className="text-2xl font-bold text-white">500+</div>
<div className="text-sm text-slate-400">5-Star Reviews</div>
</div>
<div>
<div className="text-2xl font-bold text-white">Late</div>
<div className="text-sm text-slate-400">Evening Hours</div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="text-2xl font-bold text-white">$79</div>
<div className="text-sm text-slate-400">Emergency Exam &amp; X-Ray*</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-4">Comprehensive <span className="text-brand-teal">Services</span></h2>
<p className="text-slate-500 text-lg">We offer a wide range of dental services to maintain, restore, and beautify your smile all under one roof.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300" href="#general">
<div className="w-12 h-12 bg-brand-dark/5 rounded-xl flex items-center justify-center text-brand-dark group-hover:bg-brand-teal group-hover:text-brand-dark transition-colors mb-6">
<iconify-icon icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-2">General Dentistry</h3>
<p className="text-slate-500 text-sm leading-relaxed">Cleanings, exams, and preventative care to ensure your smile remains healthy.</p>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300" href="#cosmetic">
<div className="w-12 h-12 bg-brand-dark/5 rounded-xl flex items-center justify-center text-brand-dark group-hover:bg-brand-teal group-hover:text-brand-dark transition-colors mb-6">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-2">Cosmetic Dentistry</h3>
<p className="text-slate-500 text-sm leading-relaxed">Transform your smile with whitening, veneers, and smile makeovers.</p>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300" href="#implants">
<div className="w-12 h-12 bg-brand-dark/5 rounded-xl flex items-center justify-center text-brand-dark group-hover:bg-brand-teal group-hover:text-brand-dark transition-colors mb-6">
<iconify-icon icon="mdi:tooth-outline" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-2">Dental Implants</h3>
<p className="text-slate-500 text-sm leading-relaxed">Permanent solutions for missing teeth that look and feel natural.</p>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300" href="#invisalign">
<div className="w-12 h-12 bg-brand-dark/5 rounded-xl flex items-center justify-center text-brand-dark group-hover:bg-brand-teal group-hover:text-brand-dark transition-colors mb-6">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-2">Invisalign®</h3>
<p className="text-slate-500 text-sm leading-relaxed">Clear aligners to straighten your teeth without traditional braces.</p>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300" href="#sleep">
<div className="w-12 h-12 bg-brand-dark/5 rounded-xl flex items-center justify-center text-brand-dark group-hover:bg-brand-teal group-hover:text-brand-dark transition-colors mb-6">
<iconify-icon icon="solar:sleeping-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-2">Sleep Apnea</h3>
<p className="text-slate-500 text-sm leading-relaxed">Effective treatment options to help you get the rest you deserve.</p>
</a>

<a className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300" href="#facial">
<div className="w-12 h-12 bg-brand-dark/5 rounded-xl flex items-center justify-center text-brand-dark group-hover:bg-brand-teal group-hover:text-brand-dark transition-colors mb-6">
<iconify-icon icon="solar:face-scan-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-brand-dark mb-2">Facial Rejuvenation</h3>
<p className="text-slate-500 text-sm leading-relaxed">Injectable treatments to enhance your facial aesthetics and complement your smile.</p>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-4">Meet Our <span className="text-brand-teal">Experts</span></h2>
<p className="text-slate-500 text-lg max-w-xl">Our dental care professionals are excited to introduce you to the dental experience you deserve.</p>
</div>
<a className="text-brand-teal font-semibold flex items-center gap-1 hover:gap-2 transition-all" href="https://book.modento.io/riveredgedental">
                    Book an Appointment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-50">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dr. Michael C. Tsimis" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://riveredgedental.com/wp-content/uploads/2022/09/Dr.-T-min.jpg.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-2xl font-bold text-white mb-1">Dr. Michael C. Tsimis</h3>
<p className="text-brand-teal font-medium mb-4">General &amp; Cosmetic Dentist</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-50">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Dr. Marlen Martirossian" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://riveredgedental.com/wp-content/uploads/2022/09/Dr-e1708111112228.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-2xl font-bold text-white mb-1">Dr. Marlen Martirossian</h3>
<p className="text-brand-teal font-medium mb-4">Dental Implant &amp; Cosmetic Expert</p>
<a className="inline-block text-xs text-white/80 hover:text-white border-b border-white/30" href="https://www.marlenelitedental.com/" target="_blank">Visit Marlen Elite Dental Wellness</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-dark text-white rounded-t-[3rem]" id="new-patients">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-block px-4 py-1.5 rounded-full bg-[#85D8DD]/20 text-[#85D8DD] font-semibold text-sm">
                        No Insurance? No Worries.
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                        Join the River Edge <br/> <span className="text-[#85D8DD]">Dental Membership Plan</span>
</h2>
<p className="text-slate-300 text-lg leading-relaxed">
                        Enjoy all preventative procedures included under our annual membership fee—plus amazing discounts on other dental services.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#85D8DD] text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium">Professional cleanings, exams &amp; screenings included</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#85D8DD] text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium">Routine X-rays &amp; Fluoride treatments</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#85D8DD] text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium">15% off all other procedures</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#85D8DD] text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-medium">$1,000 Off Invisalign</span>
</li>
</ul>
<div className="pt-4">
<a className="inline-block bg-[#85D8DD] text-brand-dark font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-colors" href="#book">
                            Sign Up Today
                        </a>
<p className="mt-4 text-xs text-slate-400">*We do not accept Medicaid.</p>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-[#85D8DD] rounded-[2.5rem] rotate-3 opacity-20"></div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
<img alt="Happy Patient Family" className="w-full h-full object-cover" src="https://riveredgedental.com/wp-content/uploads/2022/01/happy-family-concept-top-view-of-happy-family-of-2022-01-29-00-01-45-utc-scaled.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-center justify-between text-white">
<div>
<p className="text-sm font-semibold uppercase tracking-wider text-[#85D8DD]">New Patient Special</p>
<p className="text-2xl font-bold">$79 Exam &amp; X-Ray*</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full flex flex-col">
<h3 className="text-2xl font-semibold text-brand-dark mb-6">River Edge Location</h3>
<div className="space-y-6 flex-grow">
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-dark/5 rounded-full text-brand-dark">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-brand-dark">Address</p>
<p className="text-slate-500">130 Kinderkamack Rd, #303<br/>River Edge, NJ 07661</p>
<a className="text-sm text-brand-teal font-medium mt-1 inline-block hover:underline" href="https://maps.google.com/?q=130+Kinderkamack+Rd+%23303+River+Edge+NJ+07661" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-dark/5 rounded-full text-brand-dark">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-brand-dark">Phone</p>
<a className="text-slate-500 hover:text-brand-teal transition-colors" href="tel:2019890178">(201) 989-0178</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-dark/5 rounded-full text-brand-dark">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div>
<p className="font-semibold text-brand-dark">Hours</p>
<p className="text-slate-500 text-sm">Mon, Wed, Fri: 9:00 AM - 5:00 PM</p>
<p className="text-slate-500 text-sm font-semibold text-brand-teal">Tue, Thu, Sat: 8:00 AM - 7:00 PM (Late Hours!)</p>
</div>
</div>
</div>
<div className="mt-8">
<iframe allowfullscreen="" height="200" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.973468406324!2d-74.0379338!3d40.9129368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fa7c7a5b5b5b%3A0x1234567890abcdef!2s130%20Kinderkamack%20Rd%20%23303%2C%20River%20Edge%2C%20NJ%2007661!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0', borderRadius: '1rem'}} width="100%"></iframe>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-center" id="book">
<div className="mb-6">
<h3 className="text-2xl font-semibold text-brand-dark mb-2">Request Appointment</h3>
<p className="text-slate-500 text-sm">Fill out the form below and we will contact you shortly to confirm.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. We will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only" htmlFor="name">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#85D8DD] transition-all" id="name" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#85D8DD] transition-all" id="phone" placeholder="Phone Number" required="" type="tel"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#85D8DD] transition-all" id="email" placeholder="Email Address" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#85D8DD] text-slate-500">
<option>Preferred Day</option>
<option>Monday</option>
<option>Tuesday (Late)</option>
<option>Wednesday</option>
<option>Thursday (Late)</option>
<option>Friday</option>
<option>Saturday (Open)</option>
</select>
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#85D8DD] text-slate-500">
<option>Reason for Visit</option>
<option>Checkup/Cleaning</option>
<option>Emergency/Pain</option>
<option>Cosmetic Consult</option>
<option>Invisalign</option>
<option>Implants</option>
</select>
</div>
<div>
<label className="sr-only" htmlFor="message">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#85D8DD] transition-all" id="message" placeholder="Any specific concerns?" rows="3"></textarea>
</div>
<button className="w-full bg-brand-dark text-white font-semibold py-4 rounded-xl shadow-lg hover:bg-[#85D8DD] hover:text-[#1C313C] transition-all" type="submit">
                            Request Appointment
                        </button>
<p className="text-xs text-center text-slate-400 mt-2">Note to dev: Connect form to email autoresponder.</p>
</form>
</div>
</div>
</div>
</section>

<section className="bg-brand-dark text-white py-16" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold mb-8">Trusted by our Community</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left">
<div className="flex text-[#85D8DD] mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-4">"I believe I found my dream dental office. This is an amazing practice. Very professional, friendly, and the team is knowledgeable."</p>
<p className="font-semibold text-sm">- Yasminda D.</p>
</div>

<div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left">
<div className="flex text-[#85D8DD] mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-4">"If I could give this office more than five stars I would. They helped me so much with my dental needs and I plan to return for many years."</p>
<p className="font-semibold text-sm">- Brad L.</p>
</div>

<div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left">
<div className="flex text-[#85D8DD] mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-4">"This dentist is simply amazing! From their friendly and warm-welcoming team to their expert care, I couldn't have asked for better."</p>
<p className="font-semibold text-sm">- J M.</p>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<img alt="Logo" className="h-12 w-auto mb-6 brightness-0 invert" src="https://riveredgedental.com/wp-content/uploads/2025/03/river-edge-landing-logo.png"/>
<p className="text-slate-400 text-sm leading-relaxed">
                        Providing exceptional dental care to River Edge and surrounding communities.
                    </p>
</div>
<div>
<h4 className="text-white font-bold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-[#85D8DD]" href="#services">Services</a></li>
<li><a className="hover:text-[#85D8DD]" href="#doctors">Meet the Team</a></li>
<li><a className="hover:text-[#85D8DD]" href="#new-patients">New Patients</a></li>
<li><a className="hover:text-[#85D8DD]" href="https://book.modento.io/riveredgedental" target="_blank">Book Online</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-[#85D8DD]" href="#">Invisalign®</a></li>
<li><a className="hover:text-[#85D8DD]" href="#">Dental Implants</a></li>
<li><a className="hover:text-[#85D8DD]" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-[#85D8DD]" href="#">Sleep Apnea</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li>130 Kinderkamack Rd, #303</li>
<li>River Edge, NJ 07661</li>
<li><a className="hover:text-[#85D8DD]" href="tel:2019890178">(201) 989-0178</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2026 River Edge Dental. All Rights Reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 lg:hidden z-30 flex gap-4">
<a className="flex-1 bg-slate-100 text-brand-dark font-semibold py-3 rounded-lg text-center flex items-center justify-center gap-2" href="tel:2019890178">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call
        </a>
<a className="flex-1 bg-brand-dark text-white font-semibold py-3 rounded-lg text-center" href="https://book.modento.io/riveredgedental" target="_blank">
            Book Now
        </a>
</div>



    </>
  );
}
