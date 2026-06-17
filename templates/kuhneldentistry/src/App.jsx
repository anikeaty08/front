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



        // Navbar Scroll Effect
        const nav = document.getElementById('navbar');
        const navBg = document.getElementById('nav-bg');
        const navContainer = document.getElementById('nav-container');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.querySelectorAll('.nav-link');
        const locationTrigger = document.getElementById('location-trigger');
        const mobileToggle = document.getElementById('mobile-toggle');

        function updateNav() {
            if (window.scrollY > 50) {
                navBg.classList.add('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-neutral-100');
                navBg.classList.remove('bg-transparent');
                
                navContainer.classList.remove('bg-white/5', 'border-white/10');
                navContainer.classList.add('bg-neutral-100/50', 'border-neutral-200');
                
                logoText.classList.remove('text-white');
                logoText.classList.add('text-neutral-950');

                navLinks.forEach(el => {
                    el.classList.remove('text-white', 'hover:text-white');
                    el.classList.add('text-neutral-600', 'hover:text-neutral-900');
                });
                
                locationTrigger.classList.remove('text-white', 'hover:text-cyan-200');
                locationTrigger.classList.add('text-neutral-600', 'hover:text-cyan-600');

                mobileToggle.classList.remove('text-white');
                mobileToggle.classList.add('text-neutral-900');
            } else {
                navBg.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-neutral-100');
                navBg.classList.add('bg-transparent');
                
                navContainer.classList.add('bg-white/5', 'border-white/10');
                navContainer.classList.remove('bg-neutral-100/50', 'border-neutral-200');

                logoText.classList.add('text-white');
                logoText.classList.remove('text-neutral-950');

                navLinks.forEach(el => {
                    el.classList.add('text-white', 'hover:text-white');
                    el.classList.remove('text-neutral-600', 'hover:text-neutral-900');
                });

                locationTrigger.classList.add('text-white', 'hover:text-cyan-200');
                locationTrigger.classList.remove('text-neutral-600', 'hover:text-cyan-600');

                mobileToggle.classList.add('text-white');
                mobileToggle.classList.remove('text-neutral-900');
            }
        }
        window.addEventListener('scroll', updateNav);
        updateNav();

        // Reveal on Scroll
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
<div className="absolute inset-0 transition-all duration-300" id="nav-bg"></div>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">

<a className="flex items-center gap-3 z-50 relative" href="#">
<span className="transition-colors duration-300 text-3xl font-medium tracking-tight font-serif" id="logo-text">Kuhnel Dentistry</span>
</a>

<div className="hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full px-2 py-1.5 border transition-colors duration-300" id="nav-container">
<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#">Home</a>

<div className="group relative">
<button className="nav-link flex items-center gap-1 px-4 py-1.5 text-xs font-medium rounded-full transition-colors">
                        Services <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full left-0 mt-4 w-56 bg-white border border-neutral-100 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 p-1.5">
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg hover:text-cyan-600" href="#services">Cleanings
                        &amp; Prevention</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg hover:text-cyan-600" href="#services">Cosmetic
                        Dentistry</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg hover:text-cyan-600" href="#services">Restorations</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg hover:text-cyan-600" href="#services">Invisalign
                        &amp; Ortho</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-50 rounded-lg hover:text-cyan-600" href="#services">CEREC®
                        Technology</a>
</div>
</div>
<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#doctor">Doctor</a>
<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#locations">Locations</a>
<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#new-patients">New
                Patients</a>
<a className="nav-link px-4 py-1.5 text-xs font-medium rounded-full transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-4 z-50">

<div className="group relative">
<button className="flex items-center gap-2 text-xs font-medium transition-colors" id="location-trigger">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>West Palm Beach</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full right-0 mt-4 w-64 bg-white border border-neutral-100 rounded-xl shadow-xl opacity-0 invisible translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 p-4">
<p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold mb-2">Our Office</p>
<div className="flex flex-col gap-2">
<a className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg group/loc" href="tel:561-588-8501">
<div className="bg-cyan-50 text-cyan-600 p-1.5 rounded-md"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon></div>
<div>
<p className="text-xs font-bold text-neutral-900">561-588-8501</p>
<p className="text-[10px] text-neutral-500">Click to Call</p>
</div>
</a>
<a className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-lg group/loc" href="https://maps.google.com/?daddr=6618+South+Dixie+Highway%2cWest+Palm+Beach%2cFL+33405-4417" target="_blank">
<div className="bg-cyan-50 text-cyan-600 p-1.5 rounded-md"><iconify-icon icon="solar:map-arrow-up-linear"></iconify-icon></div>
<div>
<p className="text-xs font-bold text-neutral-900">Get Directions</p>
<p className="text-[10px] text-neutral-500">6618 S Dixie Hwy</p>
</div>
</a>
</div>
</div>
</div>
<a className="bg-white text-neutral-950 px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10" href="#booking">
                Book Appointment
            </a>
</div>

<button className="lg:hidden p-2 z-50 relative" id="mobile-toggle">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="fixed hidden inset-0 bg-neutral-950 z-40 flex flex-col pt-24 px-6 opacity-0 pointer-events-none transition-all duration-300 lg:hidden overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 pb-20">
<a className="text-xl font-serif text-white border-b border-white/10 pb-4" href="#">Home</a>
<a className="text-xl font-serif text-white border-b border-white/10 pb-4" href="#services">Services</a>
<a className="text-xl font-serif text-white border-b border-white/10 pb-4" href="#locations">Locations</a>
<a className="text-xl font-serif text-white border-b border-white/10 pb-4" href="#new-patients">New Patients</a>
<a className="flex items-center gap-2 text-cyan-400 font-medium mt-4" href="tel:561-588-8501">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 561-588-8501
            </a>
<a className="mt-4 px-8 py-4 bg-white text-neutral-950 rounded-full text-center text-sm font-semibold" href="#booking">Book
                Appointment</a>
</div>
<button className="absolute top-6 right-6 text-white p-2" onclick="document.getElementById('mobile-menu').classList.add('opacity-0', 'pointer-events-none')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-[100dvh] min-h-[700px] overflow-hidden bg-neutral-950">
<div className="absolute inset-0 w-full h-full animate-zoom-slow">

<img alt="Dr. Kuhnel Modern Office" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30"></div>
</div>
<div className="flex flex-col md:pb-16 h-full max-w-7xl z-10 mr-auto ml-auto pr-6 pb-16 pl-6 relative justify-end">
<div className="max-w-3xl">

<h1 className="md:text-6xl lg:text-7xl leading-[0.95] animate-fade-in-up delay-100 text-4xl text-white tracking-tight font-serif mb-4 drop-shadow-lg">
      Enhancing lives and
      <span className="italic font-light text-white/80">smiles.</span>
</h1>
<p className="md:text-base animate-fade-in-up delay-200 text-sm font-semibold italic text-neutral-50 max-w-lg mb-8">
      Kuhnel Dentistry in West Palm Beach. Dr. Cristina M. Kuhnel provides personalized, quality dental care dedicated
      to
      excellence.
    </p>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-200 mb-10">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors text-center shadow-lg shadow-white/5" href="#booking">
        Book Appointment
      </a>
<a className="sm:w-auto glass-panel hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group text-xs font-semibold text-white w-full border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8" href="tel:561-588-8501">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 561-588-8501
      </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-300 border-white/10 border-t pt-6 gap-x-6 gap-y-6">
<div className="flex flex-col gap-1">
<span className="text-cyan-400 text-lg"><iconify-icon icon="solar:star-linear"></iconify-icon></span>
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">Top Rated</span>
<span className="text-xs text-white">"Excellent dentistry"</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-cyan-400 text-lg"><iconify-icon className="" icon="solar:map-point-linear"></iconify-icon></span>
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">Location</span>
<span className="text-xs text-white">West Palm Beach</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-cyan-400 text-lg"><iconify-icon icon="solar:shield-check-linear"></iconify-icon></span>
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">Insurance</span>
<span className="text-xs text-white">CareCredit Accepted</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-cyan-400 text-lg"><iconify-icon icon="solar:monitor-camera-linear"></iconify-icon></span>
<span className="text-[10px] text-neutral-400 uppercase tracking-widest">Modern Tech</span>
<span className="text-xs text-white">CEREC® &amp; Digital X-Rays</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white border-b border-neutral-100" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div className="">
<span className="text-neutral-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900">Our Procedures</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-xs font-semibold border-b border-neutral-900 pb-0.5 hover:text-cyan-600 hover:border-cyan-600 transition-colors" href="#booking">
                    Request Appointment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group cursor-pointer reveal-on-scroll p-8 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 border border-transparent hover:border-neutral-100">
<div className="w-10 h-10 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-neutral-900 mb-2">Cleanings &amp; Prevention</h3>
<ul className="space-y-2 text-xs text-neutral-500 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Digital X-Rays</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Fluoride Treatment</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Dental Exams &amp; Cleanings</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Home Care Education</li>
</ul>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-100 p-8 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 border border-transparent hover:border-neutral-100">
<div className="w-10 h-10 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-neutral-900 mb-2">Cosmetic Dentistry</h3>
<ul className="space-y-2 text-xs text-neutral-500 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Porcelain Veneers</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Porcelain Crowns (Caps)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Composite Fillings</li>
</ul>
</div>

<div className="group cursor-pointer reveal-on-scroll delay-200 p-8 bg-neutral-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-300 border border-transparent hover:border-neutral-100">
<div className="w-10 h-10 bg-cyan-100 text-cyan-700 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-xl" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-neutral-900 mb-2">Restorations &amp; Implants</h3>
<ul className="space-y-2 text-xs text-neutral-500 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Root Canal Therapy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Fixed Bridges</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Gum Disease Treatment</li>
</ul>
</div>
</div>

<div className="mt-8 p-6 rounded-2xl border border-neutral-100 bg-white shadow-sm flex flex-col md:flex-row items-center gap-6 reveal-on-scroll">
<div className="flex gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">

<span className="text-lg font-bold text-neutral-800">CEREC®</span>
<span className="text-lg font-bold text-neutral-800">Invisalign®</span>
</div>
<div className="h-px md:h-8 w-full md:w-px bg-neutral-200"></div>
<p className="text-xs text-neutral-500 font-light">We utilize state-of-the-art technology including CEREC® for one-visit restorations and Invisalign® for clear orthodontics.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-b border-neutral-100" id="doctor">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="order-2 md:order-1 reveal-on-scroll">

<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200">
<img alt="Dr. Cristina M. Kuhnel" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale-0" src="https://c1-preview.prosites.com/26584/ed/PageMeetTheTeam/e2541568-aec6-4506-9e88-6db1f1e31003_lg.jpg"/>
</div>
</div>
<div className="order-1 md:order-2 reveal-on-scroll delay-100">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Meet The Doctor</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-serif mb-2">Dr. Cristina M. Kuhnel</h2>
<p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-6">DMD</p>
<p className="text-neutral-600 font-light leading-relaxed mb-6 text-sm">
                        When you visit our West Palm Beach dental office, your smile is our top priority. Dr. Kuhnel is dedicated to providing you with the personalized, quality dental care that you deserve. 
                    </p>
<p className="text-neutral-600 font-light leading-relaxed mb-6 text-sm">
                        Our goal is to assist each patient in achieving and maintaining long term dental health and a beautiful smile. "Dr. Cristina is a dental perfectionist" who practices comfortable, health-centered dentistry.
                    </p>
<div className="flex gap-4 pt-4">
<a className="px-6 py-3 bg-neutral-900 text-white rounded-full text-xs font-semibold hover:bg-neutral-800 transition-colors" href="#booking">
                            Book with Dr. Kuhnel
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="locations">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 reveal-on-scroll">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Visit Us</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-serif">Our Location</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-neutral-100 bg-white shadow-xl shadow-neutral-100/50 reveal-on-scroll">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl font-serif text-neutral-900">West Palm Beach</h3>
<p className="text-xs text-neutral-500 mt-1">General &amp; Cosmetic Dentistry</p>
</div>
<div className="bg-cyan-50 p-2 rounded-full text-cyan-600">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<p className="text-sm text-neutral-600 leading-relaxed">
                                6618 South Dixie Highway<br/>
                                West Palm Beach, FL 33405-4417
                            </p>
</div>
<div className="flex gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:phone-calling-linear"></iconify-icon>
<p className="text-sm text-neutral-600">561-588-8501</p>
</div>
<div className="flex gap-3">
<iconify-icon className="text-neutral-400 mt-0.5" icon="solar:letter-linear"></iconify-icon>
<p className="text-sm text-neutral-600">info@Kuhneldentistry.com</p>
</div>
</div>
<div className="flex gap-3">
<a className="flex-1 py-3 border border-neutral-200 rounded-lg text-center text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors" href="tel:561-588-8501">Call Office</a>
<a className="flex-1 py-3 bg-neutral-900 rounded-lg text-center text-xs font-semibold text-white hover:bg-neutral-800 transition-colors" href="https://maps.google.com/?daddr=6618+South+Dixie+Highway%2cWest+Palm+Beach%2cFL+33405-4417" target="_blank">Directions</a>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-neutral-100 bg-neutral-100 reveal-on-scroll delay-100 h-full min-h-[300px]">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14263.049971762779!2d-80.055698!3d26.6560859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd01c4adc9e14cc51!2sKuhnel%20Dentistry!5e0!3m2!1sen!2sus!4v1657737637767!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-t border-neutral-100" id="new-patients">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 reveal-on-scroll">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Patient Information</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-neutral-900 font-serif mb-6">New Patients Welcome</h2>
<p className="text-neutral-600 text-sm leading-relaxed mb-8">
                    Part of our commitment to serving our patients includes providing information that helps them to make more informed decisions about their oral health needs.
                </p>

<div className="space-y-4">
<div className="bg-white p-5 rounded-xl border border-neutral-200">
<h4 className="text-sm font-semibold text-neutral-900 flex items-center gap-2 mb-2">
<iconify-icon className="text-cyan-600" icon="solar:card-linear"></iconify-icon> Financing &amp; Insurance
                        </h4>
<p className="text-xs text-neutral-500">
                            We accept CareCredit to help financing your procedures. We work with various insurance providers to maximize your benefits.
                        </p>
</div>
<div className="bg-white p-5 rounded-xl border border-neutral-200">
<h4 className="text-sm font-semibold text-neutral-900 flex items-center gap-2 mb-2">
<iconify-icon className="text-cyan-600" icon="solar:document-add-linear"></iconify-icon> Patient Forms
                        </h4>
<p className="text-xs text-neutral-500">
                            Save time by downloading our new patient forms online before your visit. <a className="text-cyan-600 underline" href="#">Download Forms</a>.
                        </p>
</div>
</div>
</div>

<div className="lg:col-span-5 reveal-on-scroll delay-100">
<div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 relative">
<div className="absolute -top-4 -right-4 bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
<iconify-icon icon="solar:quote-up-linear"></iconify-icon>
</div>
<div className="flex gap-1 text-orange-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-neutral-700 font-serif text-lg italic mb-6">
                        "Dr. Kuhnel and staff are the best. You never wait to be seen, the staff is kind and professional and Dr. Cristina is a dental perfectionist. Highly recommended."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-bold text-neutral-500">SS</div>
<div>
<p className="text-sm font-bold text-neutral-900">S.S.</p>
<p className="text-[10px] text-neutral-400 uppercase">Patient</p>
</div>
</div>

<div className="mt-6 pt-6 border-t border-neutral-100 flex gap-4 overflow-hidden opacity-50 text-[10px]">
<p>"Wonderful people!" - Carolyn L.</p>
<p>"Excellent dentistry" - Mark</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 text-white" id="booking">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-serif mb-4">Request An Appointment</h2>
<p className="text-neutral-400 text-sm max-w-xl mx-auto">
                    Fill out the form below to request a visit. Our team will contact you shortly to confirm your preferred time.
                </p>
</div>
<form className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. We will contact you shortly.');">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Name *</label>
<input className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Phone *</label>
<input className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors" placeholder="(555) 555-5555" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Email *</label>
<input className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors" placeholder="email@address.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Preferred Location</label>
<select className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors appearance-none">
<option>West Palm Beach</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Preferred Day</label>
<select className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors appearance-none">
<option>Any Day</option>
<option>Monday</option>
<option>Tuesday</option>
<option>Wednesday</option>
<option>Thursday</option>
<option>Friday</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Reason for Visit</label>
<select className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors appearance-none">
<option>General Checkup / Cleaning</option>
<option>Tooth Pain / Emergency</option>
<option>Cosmetic Consultation</option>
<option>Invisalign / Ortho</option>
<option>Implants</option>
<option>Other</option>
</select>
</div>
</div>
<div className="mb-8">
<label className="block text-xs font-semibold uppercase tracking-wide text-neutral-500 mb-2">Message</label>
<textarea className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors h-24" placeholder="How can we help you?"></textarea>
</div>
<button className="w-full py-4 bg-white text-neutral-950 rounded-full text-sm font-bold hover:bg-neutral-200 transition-transform active:scale-[0.99] shadow-lg shadow-white/5" type="submit">
                    Submit Request
                </button>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-neutral-100 text-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="font-serif text-2xl text-neutral-900 mb-6 block" href="#">Kuhnel Dentistry</a>
<p className="text-xs text-neutral-500 mb-4">West Palm Beach Dentists, Dr. Cristina Kuhnel are dedicated to excellence in general dentistry such as cleanings, restorations, and maintenance.</p>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-900">Navigation</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-light">
<li><a className="hover:text-cyan-600 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#locations">Locations</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#doctor">Meet the Doctor</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-900">Contact</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-light">
<li className="flex gap-3 items-start">
<iconify-icon className="text-cyan-600 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<a className="hover:text-cyan-600 transition-colors" href="https://maps.google.com/?daddr=6618+South+Dixie+Highway%2cWest+Palm+Beach%2cFL+33405-4417" target="_blank">
                                6618 South Dixie HighwayWest Palm Beach, FL 33405-4417
                            </a>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-cyan-600 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-cyan-600 transition-colors" href="tel:561-588-8501">561-588-8501</a>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-cyan-600 shrink-0" icon="solar:printer-linear"></iconify-icon>
<span>Fax: 561-582-6887</span>
</li>
<li className="flex gap-3 items-center">
<iconify-icon className="text-cyan-600 shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-cyan-600 transition-colors" href="mailto:info@Kuhneldentistry.com">info@Kuhneldentistry.com</a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-6 text-neutral-900">Patient Resources</h4>
<ul className="space-y-3 text-xs text-neutral-500 font-light">
<li><a className="hover:text-cyan-600 transition-colors" href="#new-patients">New Patient Forms</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#new-patients">Insurance &amp; Financing</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#reviews">Patient Reviews</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
<p>© 2026 Kuhnel Dentistry. All rights reserved.</p>
<div className="flex gap-6">
<span>Automated Appointment Reminder Software powered by PracticeMojo</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
