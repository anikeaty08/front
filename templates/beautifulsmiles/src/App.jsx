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



        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            const body = document.body;

            if (menu.classList.contains('hidden')) {
                // Open Menu
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                body.classList.add('overflow-hidden'); // Prevent scrolling
            } else {
                // Close Menu
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                body.classList.remove('overflow-hidden');
            }
        }
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-3 md:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between bg-white/90 border-white/40 shadow-slate-200/50">

<a className="flex items-center gap-3 group z-50 relative" href="#">
<div className="bg-brand-purple p-1.5 rounded-lg text-white group-hover:bg-[#4f174d] transition-colors">

<iconify-icon height="24" icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">Beautiful Smiles</span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-brand-purple">Cosmetic &amp; Implant Dentistry</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-purple" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-purple" href="#doctors">Doctors</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-purple" href="#results">Smile Stories</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-brand-purple" href="#new-patients">New Patients</a>

<div className="relative group py-2">
<button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-purple">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                        Millburn, NJ
                        <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Our Location</p>
<a className="block p-3 rounded-lg hover:bg-slate-50 transition-colors" href="#location">
<span className="font-semibold text-slate-900 block">Millburn Office</span>
<span className="text-xs text-slate-500">280 Millburn Avenue</span>
<span className="text-xs text-brand-purple font-medium block mt-1">Open Today: 9am - 5pm</span>
</a>
</div>
</div>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-brand-purple px-3 py-2 rounded-full hover:bg-slate-50 transition-colors" href="tel:9739474331">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    (973) 947-4331
                </a>
<a className="inline-flex items-center gap-2 bg-brand-purple text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:bg-[#4f174d] text-white" href="#book">
                    Book Appointment
                    <iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden relative z-50 p-2 text-slate-900 focus:outline-none" onclick="toggleMobileMenu()">
<span className="sr-only">Toggle menu</span>
<iconify-icon height="28" icon="solar:hamburger-menu-linear" id="menu-icon" width="28"></iconify-icon>
<iconify-icon className="hidden" height="28" icon="solar:close-circle-linear" id="close-icon" width="28"></iconify-icon>
</button>
</nav>

<div className="hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex-col pt-24 px-6 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col space-y-6 text-center">
<a className="text-2xl font-medium text-slate-900 hover:text-brand-purple" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-2xl font-medium text-slate-900 hover:text-brand-purple" href="#doctors" onclick="toggleMobileMenu()">Meet the Doctors</a>
<a className="text-2xl font-medium text-slate-900 hover:text-brand-purple" href="#results" onclick="toggleMobileMenu()">Smile Stories</a>
<a className="text-2xl font-medium text-slate-900 hover:text-brand-purple" href="#location" onclick="toggleMobileMenu()">Location</a>
<a className="text-2xl font-medium text-slate-900 hover:text-brand-purple" href="#new-patients" onclick="toggleMobileMenu()">Patient Forms</a>
<hr className="border-slate-200 my-4"/>
<div className="flex flex-col gap-4">
<a className="flex items-center justify-center gap-2 text-lg font-semibold text-slate-900 bg-slate-100 py-4 rounded-2xl" href="tel:9739474331">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        Call (973) 947-4331
                    </a>
<a className="flex items-center justify-center gap-2 text-lg font-semibold text-white bg-brand-purple py-4 rounded-2xl shadow-xl shadow-purple-900/20" href="#book" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
                        Request Appointment
                    </a>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark">

<div className="absolute inset-0 z-0">
<img alt="Beautiful Smiles Office" className="w-full h-full object-cover opacity-40" src="https://www.beautifulsmilesnj.com/wp-content/themes/rm-beautifulsmilesnj/images/bg-welcome.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#2c182d] via-[#2c182d]/90 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-beige/10 border border-brand-beige/20 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-beige animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-widest text-brand-beige">Accepting New Patients</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                        A Dedication to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e2cd] to-white">Personalized Care</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Backed by years of tradition. Experience world-class cosmetic and implant dentistry in Millburn, NJ. Your path to a confident smile starts here.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand-purple text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-purple-900/30 hover:shadow-purple-900/50 hover:-translate-y-1 hover:bg-[#96268f] text-white border border-transparent" href="#book">
                            Book Appointment
                            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/5 backdrop-blur-md text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/10 text-white border border-white/20" href="tel:9739474331">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
                            (973) 947-4331
                        </a>
</div>

<div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-slate-400 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-beige text-lg" icon="solar:star-circle-linear"></iconify-icon>
<span>Top Dentist NJ Monthly</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-beige text-lg" icon="solar:diploma-verified-linear"></iconify-icon>
<span>Board Certified Prosthodontist</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-beige text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>Family &amp; Cosmetic</span>
</div>
</div>
</div>

<div className="hidden lg:block relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group">
<img alt="Patient Result" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://www.beautifulsmilesnj.com/wp-content/themes/rm-beautifulsmilesnj/images/img-welcome-bna.png"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center gap-4">
<div className="bg-brand-purple/10 p-3 rounded-full text-brand-purple">
<iconify-icon height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase text-brand-purple tracking-wider mb-1">Real Patient Story</p>
<p className="font-medium text-slate-900 text-sm italic">"Never in my life have I smiled with such confidence." — Mia</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                    Comprehensive <span className="text-brand-purple">Dental Services</span>
</h2>
<p className="text-lg text-slate-500">
                    From routine cleanings to complex full mouth reconstruction, our expert team uses the latest technology to care for your smile.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-purple/20 transition-all group">
<div className="w-14 h-14 rounded-2xl bg-brand-beige/30 flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
<iconify-icon height="32" icon="solar:home-smile-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-4">General &amp; Family</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Cleanings &amp; Exams
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Children &amp; Teens
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Gum Disease Treatment
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Oral Cancer Screenings
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-purple hover:text-[#4f174d]" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-purple/20 transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 bg-brand-purple text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Popular</div>
<div className="w-14 h-14 rounded-2xl bg-brand-beige/30 flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
<iconify-icon height="32" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-4">Cosmetic Dentistry</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Porcelain Veneers
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening (ZOOM®)
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Smile Makeovers
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Cosmetic Bonding
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-purple hover:text-[#4f174d]" href="#">
                        View Gallery <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-purple/20 transition-all group">
<div className="w-14 h-14 rounded-2xl bg-brand-beige/30 flex items-center justify-center text-brand-purple mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
<iconify-icon height="32" icon="solar:settings-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-4">Restorative &amp; Implants</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Dental Implants
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Porcelain Crowns
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Implant Dentures
                        </li>
<li className="flex items-center gap-2 text-slate-600 text-sm">
<iconify-icon className="text-brand-purple" icon="solar:check-circle-linear"></iconify-icon> Bridges &amp; Fillings
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-purple hover:text-[#4f174d]" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="doctors">

<div className="absolute top-0 right-0 w-1/3 h-full bg-brand-beige/20 -skew-x-12 translate-x-32"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-purple/10 text-brand-purple mb-4">Our Experts</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                        Meet Our <span className="text-brand-purple">Doctors</span>
</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 border border-slate-200 px-6 py-3 rounded-full text-sm font-semibold hover:border-brand-purple hover:text-brand-purple transition-all bg-white" href="#book">
                    Book Consultation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative">
<div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 mb-4 shadow-lg">
<img alt="Dr. Yash Kapadia" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://www.beautifulsmilesnj.com/wp-content/uploads/2023/10/Dr.-Kapadia-1.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-dark/90 to-transparent pt-20">
<p className="text-brand-beige font-semibold text-sm mb-1">Prosthodontist</p>
<h3 className="text-white text-xl font-bold">Dr. Yash Kapadia</h3>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        Board-certified prosthodontist specializing in full mouth restorations, implants, and cosmetic dentistry. Expert in complex cases.
                    </p>
</div>

<div className="group relative">
<div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 mb-4 shadow-lg">

<div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
<img alt="Dr. Harold Pollack" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-0 hidden" src="https://www.beautifulsmilesnj.com/wp-content/themes/rm-beautifulsmilesnj/images/img-doctor.jpg"/>

<div className="flex w-full h-full bg-[url(https://www.beautifulsmilesnj.com/wp-content/uploads/2024/05/Dr.-Ni.jpg?w=800&amp;q=80)] bg-cover bg-center items-center justify-center">
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-dark/90 to-transparent pt-20">
<p className="text-brand-beige font-semibold text-sm mb-1">Periodontist</p>
<h3 className="text-white text-xl font-bold">Dr. Niyati Kapadia</h3>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        Specializes in periodontal care, gum health, and implant dentistry. Dedicated to evidence-based, minimally invasive techniques.
                    </p>
</div>

<div className="group relative">
<div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 mb-4 shadow-lg">
<img alt="Dr. Harold A. Pollack" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://www.beautifulsmilesnj.com/wp-content/themes/rm-beautifulsmilesnj/images/img-doctor.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-dark/90 to-transparent pt-20">
<p className="text-brand-beige font-semibold text-sm mb-1">Founder Emeritus</p>
<h3 className="text-white text-xl font-bold">Dr. Harold A. Pollack</h3>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        Serving Millburn for over 40 years. Built a legacy of excellence and community trust that continues today.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-beige/20" id="location">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-[2.5rem] bg-white p-2 shadow-xl overflow-hidden">

<div className="relative h-[400px] lg:h-auto rounded-[2rem] overflow-hidden bg-slate-100">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.644776856094!2d-74.3046005!3d40.7241132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd42aaed79c52054f!2sBeautiful+Smiles+by+Harold+A.+Pollack+DDS!5e0!3m2!1sen!2sus!4v1556208000000" style={{border: '0'}} width="100%"></iframe>
</div>

<div className="p-8 lg:p-12 flex flex-col justify-center">
<h2 className="text-3xl font-bold text-slate-900 mb-2">Millburn Office</h2>
<p className="text-brand-purple font-semibold mb-8">Serving Millburn, Short Hills &amp; Essex County</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple shrink-0">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900">Visit Us</p>
<p className="text-slate-600">280 Millburn Avenue<br/>Millburn, NJ 07041</p>
<a className="text-sm font-semibold text-brand-purple mt-1 inline-block hover:underline" href="https://goo.gl/maps/ez7YWbGSLYp" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple shrink-0">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900">Contact</p>
<p className="text-slate-600">Phone: (973) 947-4331</p>
<p className="text-slate-600">Text: (973) 467-0720</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-brand-purple/10 text-brand-purple shrink-0">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900">Hours</p>
<div className="grid grid-cols-2 gap-x-8 text-sm text-slate-600">
<span>Mon - Thu</span> <span>9:00am - 5:00pm</span>
<span>Friday</span> <span>By Appointment</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="new-patients">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                    New Patient <span className="text-brand-purple">Information</span>
</h2>
<p className="text-lg text-slate-500">
                    We make your first visit smooth and stress-free. Here's what you need to know.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
<a className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 hover:bg-brand-purple/5 border border-slate-100 hover:border-brand-purple/30 transition-all text-center group" href="#book">
<iconify-icon className="text-4xl text-brand-purple mb-4 group-hover:scale-110 transition-transform" icon="solar:document-add-linear"></iconify-icon>
<h3 className="font-bold text-slate-900 text-lg">Patient Forms</h3>
<p className="text-sm text-slate-500 mt-2">Download and fill out forms before your visit to save time.</p>
</a>
<div className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center">
<iconify-icon className="text-4xl text-brand-purple mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="font-bold text-slate-900 text-lg">Financing Options</h3>
<p className="text-sm text-slate-500 mt-2">We offer flexible payment options to ensure you get the care you need.</p>
</div>
</div>

<div className="space-y-4">
<details className="group rounded-2xl border border-slate-200 bg-white open:ring-1 open:ring-brand-purple/20">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold marker:content-none">
                        Do you accept new patients?
                        <iconify-icon className="text-brand-purple group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-600">
                        Yes! We are currently accepting new patients for both general and cosmetic dentistry. We'd love to welcome you to our dental family.
                    </div>
</details>
<details className="group rounded-2xl border border-slate-200 bg-white open:ring-1 open:ring-brand-purple/20">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold marker:content-none">
                        What should I bring to my first appointment?
                        <iconify-icon className="text-brand-purple group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-600">
                        Please bring your ID, insurance card (if applicable), and any previous dental records. We also recommend filling out our patient forms online beforehand.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white relative overflow-hidden rounded-t-[3rem]" id="book">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Request Your <br/><span className="text-brand-beige">Appointment</span>
</h2>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        Ready for a healthier smile? Fill out the form below and our team will contact you to confirm your preferred time.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-brand-beige">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Quick response times</span>
</li>
<li className="flex items-center gap-3 text-brand-beige">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>Flexible scheduling</span>
</li>
<li className="flex items-center gap-3 text-brand-beige">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span>New patients welcome</span>
</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. Connect this to your email provider.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="sr-only">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" placeholder="Phone Number" required="" type="tel"/>
</div>
</div>
<div>
<label className="sr-only">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" placeholder="Email Address" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 appearance-none cursor-pointer focus:outline-none focus:border-brand-purple">
<option>Select Service</option>
<option>General Checkup</option>
<option>Cosmetic Consultation</option>
<option>Dental Implants</option>
<option>Emergency</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 appearance-none cursor-pointer focus:outline-none focus:border-brand-purple">
<option>Preferred Time</option>
<option>Morning</option>
<option>Afternoon</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all" placeholder="Reason for visit or message..." rows="3"></textarea>
<button className="w-full bg-brand-purple text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-purple-900/10 hover:bg-[#4f174d] transition-all flex items-center justify-center gap-2" type="submit">
                            Request Appointment
                            <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-400 mt-2">* Our team will contact you to confirm the actual appointment time.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200 text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

<div className="space-y-4">
<div className="flex items-center gap-2 text-brand-purple">
<iconify-icon height="28" icon="solar:smile-circle-linear" width="28"></iconify-icon>
<span className="text-xl font-bold text-slate-900">Beautiful Smiles</span>
</div>
<p className="text-slate-500 leading-relaxed">
                        Cosmetic &amp; Implant Dentistry.<br/>
                        Serving Millburn and surrounding communities for over 40 years.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white text-slate-400 hover:text-brand-purple hover:border-brand-purple transition-all" href="https://www.facebook.com/beautifulsmilesnj/" target="_blank">
<iconify-icon icon="logos:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white text-slate-400 hover:text-brand-purple hover:border-brand-purple transition-all" href="https://www.instagram.com/beautifulsmilesnewjersey/" target="_blank">
<iconify-icon icon="logos:instagram-icon" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4 text-base">Contact Us</h4>
<ul className="space-y-3 text-slate-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-purple mt-0.5 text-lg shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>280 Millburn Avenue<br/>Millburn, NJ 07041</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-purple text-lg shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-purple" href="tel:9739474331">(973) 947-4331</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-purple text-lg shrink-0" icon="solar:chat-line-linear"></iconify-icon>
<span>Text: (973) 467-0720</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4 text-base">Services</h4>
<ul className="space-y-2 text-slate-600">
<li><a className="hover:text-brand-purple" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-brand-purple" href="#">Porcelain Veneers</a></li>
<li><a className="hover:text-brand-purple" href="#">Dental Implants</a></li>
<li><a className="hover:text-brand-purple" href="#">Invisalign &amp; Ortho</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4 text-base">Office Hours</h4>
<ul className="space-y-2 text-slate-600">
<li className="flex justify-between"><span>Mon - Thu</span> <span className="font-medium text-slate-900">9:00 - 5:00</span></li>
<li className="flex justify-between"><span>Friday</span> <span className="font-medium text-slate-900">By Appt</span></li>
<li className="flex justify-between"><span>Sat - Sun</span> <span className="font-medium text-slate-900">Closed</span></li>
</ul>
</div>
</div>

<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 font-medium">© 2026 Beautiful Smiles NJ. All Rights Reserved.</p>
<div className="flex gap-6 text-slate-500 font-medium">
<a className="hover:text-brand-purple" href="#">Privacy Policy</a>
<a className="hover:text-brand-purple" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
