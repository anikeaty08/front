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



        // Navbar Interaction
        const nav = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const navContainer = document.getElementById('nav-container');
        const logoText = document.getElementById('logo-text');
        const mobileToggle = document.getElementById('mobile-toggle');
        const navLinks = document.querySelectorAll('.nav-link');
        const locationTrigger = document.getElementById('location-trigger');

        function updateNav() {
            if (window.scrollY > 50) {
                // Scrolled State
                navBg.classList.add('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-neutral-100');
                navBg.classList.remove('bg-transparent');
                
                navContainer.classList.remove('bg-white/5', 'border-white/10'); // remove dark mode glass
                navContainer.classList.add('bg-neutral-100/50', 'border-neutral-200'); // add light mode pill
                
                logoText.classList.remove('text-white');
                logoText.classList.add('text-neutral-950');

                navLinks.forEach(el => {
                    el.classList.remove('text-white/90', 'hover:text-white');
                    el.classList.add('text-neutral-600', 'hover:text-neutral-900');
                });
                
                mobileToggle.classList.remove('text-white');
                mobileToggle.classList.add('text-neutral-900');

                locationTrigger.classList.remove('text-white/90', 'hover:text-white');
                locationTrigger.classList.add('text-neutral-600', 'hover:text-neutral-900');

            } else {
                // Top State
                navBg.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-neutral-100');
                navBg.classList.add('bg-transparent');
                
                navContainer.classList.add('bg-white/5', 'border-white/10');
                navContainer.classList.remove('bg-neutral-100/50', 'border-neutral-200');

                logoText.classList.add('text-white');
                logoText.classList.remove('text-neutral-950');

                navLinks.forEach(el => {
                    el.classList.add('text-white/90', 'hover:text-white');
                    el.classList.remove('text-neutral-600', 'hover:text-neutral-900');
                });

                mobileToggle.classList.add('text-white');
                mobileToggle.classList.remove('text-neutral-900');

                locationTrigger.classList.add('text-white/90', 'hover:text-white');
                locationTrigger.classList.remove('text-neutral-600', 'hover:text-neutral-900');
            }
        }
        window.addEventListener('scroll', updateNav);
        updateNav(); 

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('opacity-0')) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                menu.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        document.getElementById('mobile-toggle').addEventListener('click', toggleMobileMenu);

        // Intersection Observer for Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
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
      

<nav className="fixed z-50 transition-all duration-300 group/nav w-full top-0" id="navbar">
<div className="transition-all duration-300 absolute top-0 right-0 bottom-0 left-0" id="nav-bg"></div>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex items-center gap-3 z-50 relative" href="#">
<span className="transition-colors duration-300 text-2xl font-medium text-white tracking-tight font-serif" id="logo-text">Paramus Dental Arts</span>
</a>

<div className="hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1.5 border transition-colors duration-300" id="nav-container">

<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#">Home</a>

<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors">
                        Services <iconify-icon className="opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[700px] bg-white border border-neutral-100 rounded-xl shadow-2xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out overflow-hidden p-6">
<div className="grid grid-cols-2 gap-8">

<div>
<h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">Core Procedures</h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">Dental
                  Implants (Full-Mouth)</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">LAPIP®
                  &amp; LANAP™ Laser Dentistry</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">Cosmetic
                  Dentistry (Veneers)</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">Invisalign®
                  Clear Aligners</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">Botox®
                  Treatment</a>
</div>
</div>

<div className="border-l border-neutral-100 pl-8">
<h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">General &amp; Specialty
              </h6>
<div className="space-y-1">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">Emergency
                  &amp; Trauma</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">Sedation
                  Dentistry</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">Sleep
                  Apnea Treatment</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">TMJ/TMD
                  Treatment</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#services">General
                  Dentistry</a>
</div>
</div>
</div>
</div>
</div>

<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#doctors">Doctors</a>

<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#locations">Locations</a>

<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors">
                        New Patients <iconify-icon className="opacity-70" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full left-0 mt-4 w-56 bg-white border border-neutral-100 rounded-xl shadow-xl shadow-neutral-200/20 opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out p-1.5">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#forms">Patient
            Forms</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#insurance">Insurance
            &amp; Financing</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg transition-colors hover:text-cyan-600" href="#reviews">Reviews</a>
</div>
</div>
</div>

<div className="hidden lg:flex items-center gap-4 z-50">

<div className="group relative">
<button className="flex items-center gap-1.5 text-xs font-medium transition-colors" id="location-trigger">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Paramus, NJ
                    </button>
</div>

<a className="flex items-center gap-1.5 text-xs font-medium text-white/90 hover:text-white transition-colors group" href="tel:2013405560">
<iconify-icon className="group-hover:animate-pulse" icon="solar:phone-linear"></iconify-icon> (201) 340-5560
      </a>

<a className="bg-white text-neutral-950 px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10" href="#booking">
        Book Appointment
      </a>
</div>

<button aria-label="Menu" className="lg:hidden p-2 z-50 relative" id="mobile-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="fixed hidden inset-0 bg-neutral-950 z-40 flex flex-col pt-24 px-6 opacity-0 pointer-events-none transition-all duration-300 lg:hidden overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 pb-20">
<a className="text-xl font-serif text-white border-b border-white/10 pb-4" href="#" onclick="toggleMobileMenu()">Home</a>
<a className="text-lg text-neutral-300 font-light" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-lg text-neutral-300 font-light" href="#doctors" onclick="toggleMobileMenu()">Doctors</a>
<a className="text-lg text-neutral-300 font-light" href="#locations" onclick="toggleMobileMenu()">Locations</a>
<a className="mt-8 px-8 py-4 bg-white text-neutral-950 rounded-full text-center text-sm font-semibold" href="#booking" onclick="toggleMobileMenu()">Book Appointment</a>
<a className="text-center text-white text-lg font-serif mt-2" href="tel:2013405560">(201) 340-5560</a>
</div>
<button className="absolute top-6 right-6 text-white p-2" onclick="toggleMobileMenu()">
<iconify-icon height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="h-[100dvh] min-h-[700px] overflow-hidden bg-neutral-950 w-full relative">

<div className="animate-zoom-slow w-full h-full absolute top-0 right-0 bottom-0 left-0">

<img alt="Paramus Dental Arts" className="z-10 opacity-60 h-full object-cover" src="https://cms.paramusdentalarts.com/wp-content/uploads/2025/10/cta.jpg.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/20"></div>
<div className="bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="flex flex-col md:pb-8 h-full max-w-7xl z-10 mr-auto ml-auto pr-6 pb-24 pl-6 relative justify-end">
<div className="max-w-3xl">

<h1 className="leading-[0.95] animate-fade-in-up delay-100 -multi md:text-6xl lg:text-7xl text-4xl text-white tracking-normal font-serif drop-shadow-lg">
      Creating Healthy Smiles
      <span className="font-light italic text-white/80">for the Entire Family.</span>
</h1>
<p className="animate-fade-in-up delay-200 md:text-base text-sm font-semibold italic text-[#dedede] max-w-xl mt-4 mb-4">
      Expert cosmetic and implant dentistry in Paramus, NJ. From porcelain veneers to full mouth reconstruction,
      we deliver lasting results in a state-of-the-art facility.
    </p>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-200 mb-8">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors text-center shadow-lg shadow-white/5" href="#booking">
        Book Consultation
      </a>
<a className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full text-xs font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group border border-white/20" href="tel:2013405560">
<iconify-icon className="" icon="solar:phone-calling-linear" width="16"></iconify-icon> Call (201) 340-5560
      </a>
</div>

<div className="flex flex-wrap items-center gap-6 animate-fade-in-up delay-300 border-t border-white/10 pt-6">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest text-neutral-300 font-semibold">4.9 Star Rating</span>
</div>
<div className="w-px h-8 bg-white/20 hidden sm:block"></div>
<div className="flex items-center gap-2 text-neutral-300">
<iconify-icon className="text-cyan-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest font-semibold">State-of-the-Art Facility</span>
</div>
<div className="w-px h-8 bg-white/20 hidden sm:block"></div>
<div className="flex items-center gap-2 text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest font-semibold">Accepting New Patients</span>
</div>
</div>
</div>
</div>
</header>

<section className="bg-white border-neutral-100 border-b pt-16 pr-6 pb-16 pl-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div className="">
<span className="text-neutral-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Specialized Care</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900">Our Top Treatments</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-cyan-600 hover:border-cyan-600 transition-colors" href="#">
                    View All Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group cursor-pointer reveal-on-scroll">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200">

<img alt="Dental Implants" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://cms.paramusdentalarts.com/wp-content/uploads/2025/10/box-1-teeth-whitening.png.webp"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">Full Arch</div>
</div>
<div className="">
<h3 className="transition-colors group-hover:text-cyan-600 text-lg font-semibold text-neutral-900 tracking-tight mb-1">Dental Implants</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3">Small titanium posts that replace missing tooth roots. Same-day full-arch implants available.</p>
<span className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4">Restore Function</span>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-100">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200">
<img alt="Cosmetic Dentistry" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://cms.paramusdentalarts.com/wp-content/uploads/2025/10/smile_des.jpg.webp"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">Popular</div>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-cyan-600">Smile Makeovers</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3">Veneers, whitening, and Invisalign® designed to highlight your natural beauty.</p>
<span className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4">Design Your Smile</span>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-5 bg-neutral-200">
<img alt="Emergency Dentistry" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://cms.paramusdentalarts.com/wp-content/uploads/2025/10/em-50-1.jpg.webp"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-bold uppercase tracking-wide rounded-sm">Immediate</div>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 mb-1 transition-colors group-hover:text-cyan-600">Emergency &amp; General</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-3">From toothaches to checkups, we provide compassionate care for the whole family.</p>
<span className="text-xs font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4">Book Now</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 border-neutral-100 border-b pt-24 pr-6 pb-16 pl-6" id="doctors">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Expert Care</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-serif">Meet the Doctors</h2>
<div className="w-12 h-px bg-cyan-200 mx-auto mt-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">

<div className="flex flex-col items-center md:items-start gap-6 reveal-on-scroll group">
<div className="relative w-48 h-48 rounded-full p-1 border border-neutral-200 bg-white group-hover:border-cyan-200 transition-colors duration-300">
<div className="w-full h-full rounded-full overflow-hidden">
<img alt="Dr. Olga Degtyareva" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://cms.paramusdentalarts.com/wp-content/uploads/2025/10/olha-hero-mobile.jpg.webp"/>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-serif text-neutral-900 mb-2">Dr. Olga Degtyareva</h3>
<p className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 mb-4">Dentist</p>
<p className="text-sm text-neutral-600 font-light leading-relaxed">
                            Dr. Olga’s passion for dentistry began in childhood, inspired by her mother. She grew to love how a smile could transform lives. Outside of the office, she enjoys spending time with family, gardening, horseback riding, and puzzles. She once saved her sister’s life by performing the Heimlich maneuver.
                        </p>
</div>
</div>

<div className="flex flex-col items-center md:items-start gap-6 reveal-on-scroll delay-100 group">
<div className="relative w-48 h-48 rounded-full p-1 border border-neutral-200 bg-white group-hover:border-cyan-200 transition-colors duration-300">
<div className="w-full h-full rounded-full overflow-hidden">
<img alt="Dr. Margarita Degtyareva" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://cms.paramusdentalarts.com/wp-content/uploads/2025/10/marg-hero-mobile-288x300.jpg"/>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-serif text-neutral-900 mb-2">Dr. Margarita Degtyareva</h3>
<p className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 mb-4">Dentist</p>
<p className="text-sm text-neutral-600 font-light leading-relaxed">
                            Dr. Margarita began her career in healthcare as a nursing assistant. She takes joy in delivering immediate results that improve confidence and health. In her free time, she loves gardening, riding her Harley, and cherishing moments with her granddaughter. Few people know she is also a trained field combat surgeon.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-20 pr-6 pb-32 pl-6" id="locations">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="reveal-on-scroll">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block text-cyan-600">Visit Us</span>
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 font-serif text-neutral-900">Paramus Location</h2>
<div className="flex flex-col gap-6 mt-8">

<div className="p-6 border border-neutral-100 rounded-xl bg-neutral-50/50">
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-lg border border-neutral-100 shadow-sm">
<iconify-icon className="text-cyan-600 text-xl" icon="solar:map-point-bold"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-neutral-900 mb-1">Paramus Dental Arts</h4>
<p className="text-sm text-neutral-600 leading-relaxed">
                                        27 Madison Ave Ste 110
                                        Paramus, NJ 07652
                                    </p>
<a className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-cyan-600 hover:text-cyan-700" href="https://maps.app.goo.gl/W2XGfwkeKi2i9Bz59" target="_blank">
                                        Get Directions <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="p-6 border border-neutral-100 rounded-xl bg-neutral-50/50">
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-lg border border-neutral-100 shadow-sm">
<iconify-icon className="text-cyan-600 text-xl" icon="solar:clock-circle-bold"></iconify-icon>
</div>
<div className="w-full">
<h4 className="text-lg font-semibold text-neutral-900 mb-3">Office Hours</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="flex justify-between border-b border-neutral-200 pb-1 border-dashed"><span>Mon</span> <span className="">11:00am – 8:00pm</span></li>
<li className="flex justify-between border-b border-neutral-200 pb-1 border-dashed"><span>Tue</span> <span className="">Appointment Only</span></li>
<li className="flex justify-between border-b border-neutral-200 pb-1 border-dashed"><span>Wed - Fri</span> <span className="">11:00am – 5:00pm</span></li>
<li className="flex justify-between border-b border-neutral-200 pb-1 border-dashed"><span>Sat</span> <span className="">Appointment Only</span></li>
<li className="flex justify-between text-neutral-400"><span>Sun</span> <span className="">Closed</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] bg-neutral-100 rounded-2xl overflow-hidden shadow-2xl reveal-on-scroll delay-100 border border-neutral-200">
<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.654376375628!2d-74.07222392414777!3d40.92336337136262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fa3c3a3a3a3b%3A0x1234567890abcdef!2s27%20Madison%20Ave%20Ste%20110%2C%20Paramus%2C%20NJ%2007652!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 text-white border-t border-neutral-900" id="booking">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5">

<div className="md:w-1/3 p-10 bg-neutral-950 flex flex-col justify-between">
<div className="">
<h3 className="text-2xl font-serif mb-4">Request an Appointment</h3>
<p className="text-xs text-neutral-400 mb-8 leading-relaxed">
                        Fill out the form to request a consultation. Our team will contact you to confirm your appointment time.
                    </p>
<ul className="space-y-4 text-xs text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon>
                            Quick Confirmation
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:shield-check-linear"></iconify-icon>
                            Secure &amp; Private
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:clock-circle-linear"></iconify-icon>
                            Flexible Scheduling
                        </li>
</ul>
</div>
<div className="mt-12">
<p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">New Patient Line</p>
<p className="text-sm font-medium">(201) 340-5560</p>
</div>
</div>

<div className="md:w-2/3 p-10 bg-white text-neutral-900">
<form className="" id="booking-form" onsubmit="event.preventDefault(); alert('Request sent! Check your email for confirmation.');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">First Name</label>
<input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-neutral-900 transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Last Name</label>
<input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-neutral-900 transition-colors" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Phone</label>
<input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-neutral-900 transition-colors" required="" type="tel"/>
</div>
<div className="">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Email</label>
<input className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-neutral-900 transition-colors" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div className="">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Preferred Location</label>
<select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-neutral-900 transition-colors">
<option>Paramus, NJ</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Preferred Time</label>
<select className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-neutral-900 transition-colors">
<option>Morning</option>
<option>Afternoon</option>
<option>Evening</option>
</select>
</div>
</div>
<div className="mb-6">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Reason for Visit</label>
<textarea className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-neutral-900 transition-colors" rows="3"></textarea>
</div>
<button className="w-full py-3.5 bg-neutral-900 text-white rounded-lg text-sm font-semibold hover:bg-neutral-800 transition-transform active:scale-[0.99]" type="submit">
                        Submit Request
                    </button>
<p className="text-[10px] text-neutral-400 mt-4 text-center">
                        *Note for setup: Connect form to instant email autoresponder + staff notification email.
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-neutral-900" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="font-serif text-2xl text-white mb-6 block" href="#">Paramus Dental Arts</a>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-white transition-colors" href="https://www.instagram.com/paramusdentalarts/"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://www.facebook.com/paramusdentalarts"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold mb-6 text-neutral-200">Navigation</h4>
<ul className="space-y-3 text-xs text-neutral-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#services">Services</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-200">Contact</h4>
<ul className="space-y-3 text-xs text-neutral-400 font-light">
<li className="flex gap-3">
<iconify-icon className="text-cyan-400 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="https://maps.app.goo.gl/W2XGfwkeKi2i9Bz59" target="_blank">
                                27 Madison Ave Ste 110,Paramus, NJ 07652
                            </a>
</li>
<li className="flex gap-3">
<iconify-icon className="text-cyan-400 shrink-0" icon="solar:phone-linear"></iconify-icon>
<span className="flex flex-col">
<a className="hover:text-white transition-colors" href="tel:2013405560">New: (201) 340-5560</a>
<a className="hover:text-white transition-colors" href="tel:2018455533">Current: (201) 845-5533</a>
</span>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-200">Hours</h4>
<ul className="space-y-3 text-xs text-neutral-400 font-light">
<li className="flex justify-between"><span>Mon</span> <span>11:00am – 8:00pm</span></li>
<li className="flex justify-between"><span>Tue</span> <span>Appt Only</span></li>
<li className="flex justify-between"><span>Wed - Fri</span> <span>11:00am – 5:00pm</span></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
<p>© 2026 Paramus Dental Arts. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
