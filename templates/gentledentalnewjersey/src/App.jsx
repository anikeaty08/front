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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#00aeeb', /* Primary Brand Color */
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
950: '#082f49',
},
accent: {
400: '#ffc20e', /* Secondary Brand Color */
500: '#eab308',
}
},
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
}
}
}
}



        const menuBtn = document.getElementById('menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const body = document.body;

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
                body.classList.add('menu-open');
            } else {
                mobileMenu.classList.add('translate-x-full');
                body.classList.remove('menu-open');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        
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

<div className="hidden lg:flex justify-between items-center max-w-7xl mx-auto px-6 py-2 mb-2 text-xs font-medium text-slate-500">
<div className="flex items-center gap-6">
<a className="hover:text-brand-600 flex items-center gap-1.5 transition-colors" href="https://www.google.com/maps/place/Gentle+Dental+of+Clark/@40.6289613,-74.3155709,17z" target="_blank">
<iconify-icon className="text-brand-500 text-lg" icon="solar:map-point-linear"></iconify-icon>
                    1119 Raritan Road, Clark, NJ 07066
                </a>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-brand-500 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                    Mon - Fri (By Appointment)
                </span>
</div>
<a className="hover:text-brand-600 flex items-center gap-1.5 transition-colors font-bold" href="tel:8484674671">
<iconify-icon className="text-brand-500 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                (848) 467-4671
            </a>
</div>
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-5 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/40 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-brand-500 p-1.5 rounded-lg group-hover:bg-brand-600 transition-colors text-white">

<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 20l10 0"></path><path d="M10 9a2 2 0 0 0 -2 2a6 6 0 0 0 12 0a2 2 0 0 0 -2 -2"></path><path d="M6 14a6 6 0 0 1 .67 -3.12l.33 -.88a2 2 0 0 1 2 -2"></path><path d="M14 4a2 2 0 0 0 -2 2a6 6 0 0 0 2 12h4"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">Gentle Dental</span>
<span className="text-[10px] font-medium text-brand-600 uppercase tracking-widest">Dr. Navin Bogg</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#about">About Dr. Bogg</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#savings">Savings Plan</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-600" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-3">
<a className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-50 text-brand-600" href="tel:8484674671">
<iconify-icon className="text-xl" icon="solar:phone-calling-bold"></iconify-icon>
</a>
<a className="hidden md:inline-flex items-center gap-2 bg-brand-500 text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:bg-brand-600 text-white" href="#book">
                    Request Appointment
                    <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>

<button aria-label="Toggle menu" className="lg:hidden text-slate-900 p-1" id="menu-btn">
<iconify-icon className="w-8 h-8 text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
</header>

<div className="fixed inset-0 z-[60] bg-white transform translate-x-full transition-transform duration-300 lg:hidden flex flex-col h-full w-full" id="mobile-menu">
<div className="p-6 flex justify-between items-center border-b border-slate-100">
<span className="text-lg font-bold text-slate-900">Menu</span>
<button className="p-2 text-slate-500 hover:text-slate-900 bg-slate-50 rounded-full" id="close-menu-btn">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#">Home</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#about">About Dr. Bogg</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#savings">Savings Plan</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#contact">Contact &amp; Locations</a>
<hr className="border-slate-100 my-2"/>
<a className="flex items-center gap-3 text-lg font-medium text-brand-600" href="tel:8484674671">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon>
                Call (848) 467-4671
            </a>
<a className="flex items-center gap-3 text-lg font-medium text-slate-600" href="https://goo.gl/maps/XYZ" target="_blank">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
                Get Directions
            </a>
</div>
<div className="p-6 border-t border-slate-100 bg-slate-50">
<a className="mobile-link flex w-full items-center justify-center gap-2 bg-brand-500 text-white font-bold text-lg py-4 rounded-xl shadow-xl shadow-brand-500/20" href="#book">
                Request Appointment
            </a>
</div>
</div>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-2">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Smile with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Confidence.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Gentle Dental is your partner in creating a beautiful, successful, vibrant, positive, and confident smile. Serving New Jersey for over 20 years.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-brand-500 text-base font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1 hover:bg-brand-600 text-white" href="#book">
                            Book Appointment
                            <iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-bold px-8 py-4 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-brand-200 hover:text-brand-600" href="tel:8484674671">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                            (848) 467-4671
                        </a>
</div>

<div className="flex items-center gap-4 pt-6">

<div className="flex flex-wrap items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Member of:</div>
<span className="font-bold text-slate-700">ADA</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="font-bold text-slate-700">AGD</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="font-bold text-slate-700">NJDA</span>
</div>
</div>
</div>

<div className="relative mt-8 lg:mt-0">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-brand-900/10">

<img alt="Happy Patient at Gentle Dental" className="w-full h-[500px] lg:h-[600px] object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://drbogg.com/wp-content/uploads/2023/03/gentle-dental-patients-dr-bogg-nj.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-900/60"></div>

<div className="absolute top-8 left-8">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold shadow-lg bg-white/95 text-brand-800">
<iconify-icon className="text-accent-400 text-base" icon="solar:star-circle-bold"></iconify-icon> 
                                Voted Top Dentist in NJ
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-brand-600">Our Promise</p>
<p className="font-bold text-slate-900">Pain-Free Dentistry &amp; Patient Comfort</p>
</div>
<div className="p-3 rounded-full bg-brand-100 text-brand-600">
<iconify-icon className="text-2xl" icon="solar:heart-angle-bold"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-brand-400/20"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-6 text-slate-900">
                    Our Dental <span className="text-brand-500">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From routine check-ups to complex oral surgery, we provide a full range of treatments for the whole family.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:users-group-two-rounded-bold"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Family Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-4">Treatment for the young, adults, and young at heart. We cover all aspects of your family’s dental needs.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-4">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Cleanings &amp; Exams</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Preventive Care</li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-bold"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Straight &amp; White Teeth</h3>
<p className="text-slate-500 leading-relaxed mb-4">What does your smile say about you? Achieve the confident smile you deserve with our cosmetic solutions.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-4">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Veneers &amp; Bonding</li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:sleeping-bold"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Pain-Free Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-4">Special care for nervous patients. From localized anesthesia to sedation, we ensure your comfort.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-4">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Sedation Options</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Gentle Touch</li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:smile-circle-bold"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Orthodontics</h3>
<p className="text-slate-500 leading-relaxed mb-4">Correcting bites and straightening teeth for both children and adults to improve function and aesthetics.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:shield-bold"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Restorative Care</h3>
<p className="text-slate-500 leading-relaxed mb-4">Repair damaged teeth with our advanced restorative treatments including crowns, bridges, and fillings.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:medical-kit-bold"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Oral Surgery &amp; Implants</h3>
<p className="text-slate-500 leading-relaxed mb-4">Expert care for extractions, dental implants, root canals, and gum disease management.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700 transition-colors" href="#book">
                    View All Services
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl">

<img alt="Dr. Navin Bogg" className="w-full object-cover" src="https://drbogg.com/wp-content/uploads/2023/03/navin-bogg.jpeg"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-brand-500 text-white p-6 rounded-2xl shadow-xl max-w-[200px]">
<p className="text-4xl font-bold mb-1">20+</p>
<p className="text-sm font-medium opacity-90">Years Serving New Jersey Families</p>
</div>
</div>

<div className="lg:pl-10 mt-10 lg:mt-0">
<span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Meet The Doctor</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-3 mb-6 text-slate-900">Dr. Navin Bogg</h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        "My mission is to help you obtain a beautiful smile that is affordable, painless, and time-sensitive in a gentle manner that sets us apart."
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        To decrease dental problems in my community by education, prevention, communication and increased awareness. Based on track record, expertise and experience, Dr. Bogg has been voted as one of the Top Dentists in NJ.
                    </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon className="text-xl" icon="solar:medal-star-bold"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Top Rated</h4>
<p className="text-xs text-slate-500">Voted Top Dentist NJ</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon className="text-xl" icon="solar:heart-bold"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Gentle Care</h4>
<p className="text-xs text-slate-500">Nervous Patients Welcome</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-3.5 rounded-full hover:bg-slate-800 transition-colors" href="#book">
                        Meet the Team
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-500 text-white relative overflow-hidden" id="savings">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Don’t Have Dental Insurance?</h2>
<p className="text-xl text-brand-50 mb-10 font-medium">
                Not a problem. We offer our own affordable Dental Health Savings Plan to ensure everyone gets the care they need.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center gap-2 bg-white text-brand-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-slate-50 transition-all" href="#contact">
                    Learn About Savings Plan
                </a>
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white border border-brand-400 font-bold px-8 py-4 rounded-full hover:bg-brand-700 transition-all" href="#book">
                    Book Appointment
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Patient <span className="text-brand-500">Stories</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
<div className="flex text-accent-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 italic mb-6 leading-relaxed">"I Gotta tell you i was seriously afraid of the dentist. I’m a 43 year old woman who still cried at the sight of a dentist. A friend of mine introduced me to Dr. Bogg and I have been fearless in her hands! The Staff is FANTASTIC! SUPPORTIVE! and KIND SPIRITED!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">IA</div>
<span className="font-bold text-slate-900">Ivy A.</span>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
<div className="flex text-accent-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 italic mb-6 leading-relaxed">"I would like to express my gratifications and how satisfied I am with my dentist work. Professionalism and patient’s satisfaction are my dentist priorities. Also, the fact that my dentist is able to treat my children and me is wonderful."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">M</div>
<span className="font-bold text-slate-900">Mary</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-slate-900 text-white" id="book">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="lg:sticky lg:top-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/50 text-brand-300 text-xs font-bold uppercase tracking-wider mb-6 border border-brand-700/50">
                        Appointment Request
                    </div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Ready for a <br/> <span className="text-brand-400">Healthier Smile?</span>
</h2>
<p className="font-medium mb-10 text-lg text-slate-400 leading-relaxed">
                        Booking your next visit is simple. Fill out the form and we'll confirm your appointment shortly.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-400 shrink-0 border border-brand-800">
<iconify-icon className="text-xl" icon="solar:map-point-bold"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Location</h4>
<p className="text-slate-400">1119 Raritan Road, Clark, NJ 07066</p>
<a className="text-brand-400 text-sm font-bold hover:underline mt-1 block" href="https://www.google.com/maps/place/Gentle+Dental+of+Clark/@40.6289613,-74.3155709,17z" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-400 shrink-0 border border-brand-800">
<iconify-icon className="text-xl" icon="solar:phone-calling-bold"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Contact</h4>
<p className="text-slate-400">(848) 467-4671</p>
</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
<input className="w-full border rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number</label>
<input className="w-full border rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
<input className="w-full border rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<label className="block text-sm font-medium text-slate-300 mb-1.5">Reason for Visit</label>
<select className="w-full border rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 appearance-none cursor-pointer bg-slate-800/50 border-slate-700 text-white">
<option className="bg-slate-800">New Patient Exam</option>
<option className="bg-slate-800">Routine Cleaning</option>
<option className="bg-slate-800">Tooth Pain / Emergency</option>
<option className="bg-slate-800">Cosmetic Consultation</option>
<option className="bg-slate-800">Other</option>
</select>
<iconify-icon className="absolute right-5 top-[60%] -translate-y-1/2 pointer-events-none text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<label className="block text-sm font-medium text-slate-300 mb-1.5">Preferred Day</label>
<select className="w-full border rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 appearance-none cursor-pointer bg-slate-800/50 border-slate-700 text-white">
<option className="bg-slate-800">Any Day</option>
<option className="bg-slate-800">Monday</option>
<option className="bg-slate-800">Tuesday</option>
<option className="bg-slate-800">Wednesday</option>
<option className="bg-slate-800">Thursday</option>
<option className="bg-slate-800">Friday</option>
</select>
<iconify-icon className="absolute right-5 top-[60%] -translate-y-1/2 pointer-events-none text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-300 mb-1.5">Message (Optional)</label>
<textarea className="w-full border rounded-xl px-5 py-3.5 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all bg-slate-800/50 border-slate-700 text-white placeholder-slate-500" placeholder="Any specific concerns?" rows="3"></textarea>
</div>

<p className="text-xs text-slate-500 italic">* Automation: This form connects to front-desk email &amp; sends an auto-responder to patient.</p>
<button className="w-full bg-brand-500 font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 flex items-center justify-center gap-2 mt-2 hover:bg-brand-400 text-white" type="button">
                            Submit Request
                            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-brand-500 p-1.5 rounded-lg text-white">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 20l10 0"></path><path d="M10 9a2 2 0 0 0 -2 2a6 6 0 0 0 12 0a2 2 0 0 0 -2 -2"></path><path d="M6 14a6 6 0 0 1 .67 -3.12l.33 -.88a2 2 0 0 1 2 -2"></path><path d="M14 4a2 2 0 0 0 -2 2a6 6 0 0 0 2 12h4"></path></svg>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">Gentle Dental</span>
</a>
<p className="text-slate-500 font-medium leading-relaxed text-sm">
                        Dr. Navin Bogg and her dental team are your partners in creating a beautiful, confident smile.
                    </p>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-brand-500 text-lg shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>1119 Raritan Road<br/>Clark, NJ 07066</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-brand-500 text-lg shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<span>(848) 467-4671</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Hours</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-slate-900">Call for Appointment</span>
</li>
<li className="flex justify-between">
<span>Sat - Sun</span>
<span className="text-slate-900">Closed</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Quick Links</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li><a className="hover:text-brand-500 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#about">Dr. Navin Bogg</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#savings">Savings Plan</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#book">Request Appointment</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm">© 2026 Gentle Dental - Dr. Navin Bogg. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600" href="#">Privacy Policy</a>
<span>Website by Wellspring Web Studio</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
