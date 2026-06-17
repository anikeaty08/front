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



        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            // Lock body scroll when menu is open
            if (mobileMenu.classList.contains('flex')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-2 md:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-2xl md:rounded-full backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-3 group" href="#">
<img alt="Dentistry At Sea Girt Logo" className="h-10 md:h-12 w-auto object-contain" src="https://www.dentistryatseagirt.com/wp-content/uploads/2021/03/logo-march-2021.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#2979ca]" href="#">Home</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#2979ca]" href="#about">Our Office</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#2979ca]" href="#services">Treatment Options</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#2979ca]" href="#reviews">Success Stories</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-[#2979ca]" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="text-sm font-bold text-slate-700 hover:text-[#2979ca] flex items-center gap-2" href="tel:7324496564">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (732) 449-6564
                </a>
<a className="inline-flex items-center gap-2 bg-[#2979ca] text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:bg-[#1c5694] text-white" href="#book">
                    Book Visit
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-slate-900 p-2 z-50" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex-col pt-24 px-6 space-y-6" id="mobile-menu-overlay">
<a className="mobile-link text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#">Home</a>
<a className="mobile-link text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#about">Our Office</a>
<a className="mobile-link text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#reviews">Reviews</a>
<a className="mobile-link text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#contact">Contact</a>
<div className="pt-4 flex flex-col gap-4">
<a className="w-full flex justify-center items-center gap-2 border-2 border-[#2979ca] text-[#2979ca] font-bold text-lg py-3 rounded-xl" href="tel:7324496564">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
                    Call (732) 449-6564
                </a>
<a className="mobile-link w-full flex justify-center items-center gap-2 bg-[#2979ca] text-white font-bold text-lg py-4 rounded-xl shadow-xl shadow-blue-900/10" href="#book">
                    Request Appointment
                </a>
</div>

<button className="absolute top-6 right-6 p-2 text-slate-500" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2979ca] text-xs font-bold tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#2979ca]"></span>
</span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        The Best Dentist in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2979ca] to-blue-400">Sea Girt, NJ</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        We are devoted to comprehensive and preventive patient care. Helping you maintain optimal oral health with a gentle touch.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-[#2979ca] text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 hover:bg-[#1c5694] text-white" href="#book">
                            Request Appointment
                            <iconify-icon icon="solar:calendar-add-bold" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 text-base font-semibold px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-[#2979ca] hover:text-[#2979ca]" href="tel:7324496564">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            (732) 449-6564
                        </a>
</div>

<div className="flex items-center gap-6 pt-6 border-t border-slate-200">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2979ca] border-2 border-white text-xs font-bold">SM</div>
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2979ca] border-2 border-white text-xs font-bold">JB</div>
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[#2979ca] border-2 border-white text-xs font-bold">CB</div>
</div>
<div className="text-sm font-semibold text-slate-600">
                                5-Star Reviews
                            </div>
</div>
<div className="w-px h-8 bg-slate-200"></div>
<div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
<iconify-icon className="text-[#2979ca]" icon="solar:map-point-linear" width="20"></iconify-icon>
                            Sea Girt, NJ
                        </div>
</div>
</div>

<div className="relative mt-10 lg:mt-0">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-blue-900/10 border-4 border-white">

<img alt="Dentistry at Sea Girt Team" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="http://www.dentistryatseagirt.com/wp-content/uploads/2022/07/group-photo21.png"/>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/95 p-5 rounded-2xl shadow-lg border border-white/50">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-[#2979ca]">Meet The Doctors</p>
<p className="font-bold text-slate-900 text-sm md:text-base">Dr. Tim Moriarity &amp; Team</p>
</div>
<div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center text-[#2979ca]">
<iconify-icon icon="solar:heart-angle-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-blue-200/50"></div>
<div className="absolute -z-10 bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-72 h-72 rounded-full blur-3xl bg-[#2979ca]/10"></div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-[#2979ca] text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
<div className="p-2">
<iconify-icon className="mb-2 opacity-80" icon="solar:shield-check-linear" width="32"></iconify-icon>
<p className="font-bold text-lg">Top Rated</p>
<p className="text-sm text-blue-100">Practice</p>
</div>
<div className="p-2">
<iconify-icon className="mb-2 opacity-80" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<p className="font-bold text-lg">Family</p>
<p className="text-sm text-blue-100">Oriented</p>
</div>
<div className="p-2">
<iconify-icon className="mb-2 opacity-80" icon="solar:hospital-linear" width="32"></iconify-icon>
<p className="font-bold text-lg">Modern</p>
<p className="text-sm text-blue-100">Facility</p>
</div>
<div className="p-2">
<iconify-icon className="mb-2 opacity-80" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
<p className="font-bold text-lg">Emergency</p>
<p className="text-sm text-blue-100">Care Available</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#2979ca] font-bold tracking-wider uppercase text-xs mb-2 block">Comprehensive Care</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                    Treatment <span className="text-[#2979ca]">Options</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    We offer a full range of dental solutions tailored to meet your every need, from routine checkups to complex cosmetic procedures.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2979ca] flex items-center justify-center mb-6 group-hover:bg-[#2979ca] group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Family &amp; General</h3>
<p className="text-slate-500 leading-relaxed mb-4">Routine exams, cleanings, and preventive care to keep your family's smiles healthy.</p>
<a className="inline-flex items-center text-sm font-bold text-[#2979ca] hover:text-[#1c5694]" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2979ca] flex items-center justify-center mb-6 group-hover:bg-[#2979ca] group-hover:text-white transition-colors">
<iconify-icon icon="solar:star-shine-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Cosmetic Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-4">Enhance your smile with our aesthetic treatments designed for natural-looking results.</p>
<a className="inline-flex items-center text-sm font-bold text-[#2979ca] hover:text-[#1c5694]" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2979ca] flex items-center justify-center mb-6 group-hover:bg-[#2979ca] group-hover:text-white transition-colors">
<iconify-icon icon="solar:emoji-funny-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Pediatric Treatment</h3>
<p className="text-slate-500 leading-relaxed mb-4">Gentle, friendly care for children to build a foundation of lifelong oral health.</p>
<a className="inline-flex items-center text-sm font-bold text-[#2979ca] hover:text-[#1c5694]" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2979ca] flex items-center justify-center mb-6 group-hover:bg-[#2979ca] group-hover:text-white transition-colors">
<iconify-icon icon="solar:screw-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Dental Implants</h3>
<p className="text-slate-500 leading-relaxed mb-4">Permanent solutions for missing teeth to restore function and confidence.</p>
<a className="inline-flex items-center text-sm font-bold text-[#2979ca] hover:text-[#1c5694]" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2979ca] flex items-center justify-center mb-6 group-hover:bg-[#2979ca] group-hover:text-white transition-colors">
<iconify-icon icon="solar:smile-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Invisalign</h3>
<p className="text-slate-500 leading-relaxed mb-4">Clear aligners to straighten your teeth discreetly and comfortably.</p>
<a className="inline-flex items-center text-sm font-bold text-[#2979ca] hover:text-[#1c5694]" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#2979ca] flex items-center justify-center mb-6 group-hover:bg-[#2979ca] group-hover:text-white transition-colors">
<iconify-icon icon="solar:medical-kit-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Botox for Migraines</h3>
<p className="text-slate-500 leading-relaxed mb-4">Therapeutic Botox treatments to help alleviate chronic migraine pain.</p>
<a className="inline-flex items-center text-sm font-bold text-[#2979ca] hover:text-[#1c5694]" href="#">Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        Welcome to <br/> <span className="text-[#2979ca]">Dentistry At Sea Girt</span>
</h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        We take great satisfaction in helping you maintain optimal oral health. Our practice is devoted to comprehensive and preventive patient care.
                    </p>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        We believe our patients should have as much information as possible in order to make important, informed decisions regarding their oral health and treatment options. Our patients are our most important asset.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-blue-100 text-[#2979ca] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Dr. Tim Moriarity, DMD</h4>
<p className="text-sm text-slate-500">Experienced and compassionate care.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-full bg-blue-100 text-[#2979ca] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:users-group-rounded-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Dedicated Staff</h4>
<p className="text-sm text-slate-500">Developing long-lasting, trusting relationships.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="absolute -inset-4 bg-[#2979ca]/10 rounded-[2.5rem] rotate-3 -z-10"></div>
<img alt="Dr Moriarity and Staff" className="rounded-[2rem] shadow-2xl border-4 border-white w-full object-cover" src="http://www.dentistryatseagirt.com/wp-content/uploads/2022/07/group-photo21.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    What People Are <span className="text-[#2979ca]">Saying</span>
</h2>
<div className="flex justify-center gap-1 text-yellow-400 mb-2">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
<div className="text-[#2979ca] mb-4">
<iconify-icon icon="solar:quote-up-square-bold" width="40"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"I highly recommend your practice to all and everyone I know and will forever be grateful for the excellent services you have provided thus far."</p>
<p className="font-bold text-slate-900">- Stephen Y B.</p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
<div className="text-[#2979ca] mb-4">
<iconify-icon icon="solar:quote-up-square-bold" width="40"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"Dr. Mary has always taken good care of me and my family. She's our girl!"</p>
<p className="font-bold text-slate-900">- Joanne M.</p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
<div className="text-[#2979ca] mb-4">
<iconify-icon icon="solar:quote-up-square-bold" width="40"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 italic">"The professionalism throughout the office was top notch!"</p>
<p className="font-bold text-slate-900">- Steve F.</p>
</div>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] bg-[#1c5694] text-white relative overflow-hidden" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<span className="inline-block px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 text-xs font-bold tracking-wider uppercase mb-4">Contact Us</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Schedule Your Visit Today
                    </h2>
<p className="font-medium mb-10 text-lg text-blue-100/80 leading-relaxed">
                        Ready to improve your smile? Fill out the form or give us a call. We look forward to seeing you.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Visit Us</h4>
<p className="text-blue-100">804 Highway 71, Sea Girt, NJ 08750</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Call Us</h4>
<a className="text-blue-100 hover:text-white transition-colors" href="tel:7324496564">(732) 449-6564</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Office Hours</h4>
<p className="text-blue-100">Call for appointment availability.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl text-slate-900">
<h3 className="text-2xl font-bold mb-6">Request Appointment</h3>
<form className="space-y-4">

<p className="hidden text-xs text-red-500">System Note: Connect this form to instant email autoresponder + staff notification email.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Name</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2979ca] focus:ring-1 focus:ring-[#2979ca] bg-slate-50" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Phone</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2979ca] focus:ring-1 focus:ring-[#2979ca] bg-slate-50" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Email</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2979ca] focus:ring-1 focus:ring-[#2979ca] bg-slate-50" placeholder="email@address.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Service</label>
<div className="relative">
<select className="w-full border border-slate-200 rounded-xl px-4 py-3 appearance-none bg-slate-50 focus:outline-none focus:border-[#2979ca] focus:ring-1 focus:ring-[#2979ca]">
<option>General Checkup</option>
<option>Cleaning</option>
<option>Cosmetic Consultation</option>
<option>Emergency</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Preferred Date</label>
<input className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2979ca] focus:ring-1 focus:ring-[#2979ca] bg-slate-50 text-slate-500" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-1 text-slate-700">Message</label>
<textarea className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#2979ca] focus:ring-1 focus:ring-[#2979ca] bg-slate-50" placeholder="How can we help you?" rows="3"></textarea>
</div>
<button className="w-full bg-[#2979ca] hover:bg-[#1c5694] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-2" type="button">
                            Send Request
                            <iconify-icon icon="solar:plain-3-bold" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-slate-900 text-slate-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<span className="text-xl font-bold tracking-tight text-white block">Dentistry At Sea Girt</span>
<p className="text-sm leading-relaxed text-slate-400">
                        Your destination for a healthy, confident smile. Committed to providing exceptional care in a modern environment.
                    </p>
</div>

<div>
<h4 className="font-bold mb-6 text-white">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2979ca] shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
<a className="hover:text-white" href="#">804 Highway 71, Sea Girt, NJ 08750</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#2979ca] shrink-0" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<a className="hover:text-white" href="tel:7324496564">(732) 449-6564</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-white">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#2979ca] transition-colors" href="#">Family Dentistry</a></li>
<li><a className="hover:text-[#2979ca] transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-[#2979ca] transition-colors" href="#">Pediatric Treatment</a></li>
<li><a className="hover:text-[#2979ca] transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-[#2979ca] transition-colors" href="#">Invisalign</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-white">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#2979ca] transition-colors" href="#about">Our Office</a></li>
<li><a className="hover:text-[#2979ca] transition-colors" href="#reviews">Success Stories</a></li>
<li><a className="hover:text-[#2979ca] transition-colors" href="#contact">Patient Forms</a></li>
</ul>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-medium text-slate-500">© 2024 Dentistry At Sea Girt. All Rights Reserved.</p>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-white" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
