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
        const menuOverlay = document.getElementById('mobile-menu-overlay');
        const menuLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open Menu
                menuOverlay.classList.remove('menu-hidden');
                menuOverlay.classList.add('menu-visible');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
                // Change icon to X
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" height="28"></iconify-icon>';
            } else {
                // Close Menu
                menuOverlay.classList.remove('menu-visible');
                menuOverlay.classList.add('menu-hidden');
                document.body.style.overflow = '';
                // Change icon back to hamburger
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-2 md:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-2xl backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between bg-white/90 border-slate-200/60 shadow-slate-200/50">

<a className="flex items-center gap-3 group" href="#">
<img alt="Farag Dentistry" className="md:h-10 group-hover:opacity-100 transition-opacity opacity-90 w-auto h-8 object-contain brightness-100" src="https://www.faragdentistry.com/wp-content/uploads/sites/2037/2016/01/farag-logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#meet-us">Meet Us</a>
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#patient-info">Patient Info</a>
<a className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors" href="#forms">Forms</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="hidden xl:flex flex-col items-end leading-none" href="tel:12017927073">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hoboken, NJ</span>
<span className="text-sm font-bold text-slate-900">201-792-7073</span>
</a>
<a className="inline-flex items-center gap-2 bg-slate-900 text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 hover:bg-slate-800 text-white" href="#book">
                    Request Appointment
                </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden p-2 text-slate-900 z-50 relative" id="mobile-menu-btn">
<iconify-icon className="" height="28" icon="solar:hamburger-menu-linear" style={{color: 'rgb(15, 23, 42)'}} width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="menu-hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-24 px-6 pb-6 flex flex-col h-screen overflow-y-auto" id="mobile-menu-overlay">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-bold text-slate-900" href="#home">Home</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#meet-us">Meet Us</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#services">Services</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#patient-info">Patient Info</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#forms">Online Forms</a>
<hr className="border-slate-100 my-2"/>
<a className="text-xl font-medium text-slate-600 flex items-center justify-center gap-2" href="tel:12017927073">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 201-792-7073
            </a>
<a className="mobile-link bg-slate-900 text-white text-lg font-semibold py-4 rounded-xl shadow-xl shadow-slate-900/10" href="#book">
                Book Appointment
            </a>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50" id="home">

<div className="absolute inset-0 z-0">
<img alt="Healthy Smile" className="object-center w-full h-full object-cover bg-center" src="https://images.pexels.com/photos/6627572/pexels-photo-6627572.jpeg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent/20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-2xl space-y-8">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/80 backdrop-blur border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-600">
<span className="w-2 h-2 rounded-full bg-slate-900"></span> Serving Hoboken, NJ
                </span>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                    Trust Your Care to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-400">Dr. Marian Farag.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                    General and Cosmetic Dentistry. Experience a full scope of expertise ranging from porcelain veneers to dental implants in a comfortable environment.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-1 hover:bg-slate-800 text-white" href="#book">
                        Book Appointment
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border bg-white/50 backdrop-blur-sm text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-white text-slate-800 border-slate-200 hover:border-slate-300" href="tel:12017927073">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        Call 201-792-7073
                    </a>
</div>

<div className="pt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-semibold text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:star-circle-linear" width="20"></iconify-icon> Top Rated in Hoboken
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:shield-check-linear" width="20"></iconify-icon> Modern Tech
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:users-group-rounded-linear" width="20"></iconify-icon> Accepting New Patients
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="meet-us">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    Meet Our <span className="text-slate-500">Doctors</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Dedicated to providing the highest quality of care in a comfortable environment.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
<div className="aspect-[4/3] w-full relative overflow-hidden bg-slate-200">
<img alt="Dr. Marian Farag" className="object-center transition-transform duration-500 group-hover:scale-105 object-top w-full h-full max-w-prose object-cover" src="https://njmonthly.com/wp-content/uploads/2025/06/Farag_Marian-1.jpg"/>
</div>
<div className="my-0 pt-6 pr-6 pb-6 pl-6">
<h3 className="text-xl font-bold text-slate-900">Dr. Marian Farag, D.M.D.</h3>
<p className="text-slate-500 mt-1">General &amp; Cosmetic Dentist</p>
<a className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600" href="#book">
        Book Visit <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden flex bg-center bg-slate-200 w-full bg-[url(https://www.faragdentistry.com/wp-content/uploads/sites/2037/2023/02/IMG_3806.jpg?w=800&amp;q=80)] bg-cover relative top-0 items-center justify-center">
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-slate-900">Dr. Sufian</h3>
<p className="text-slate-500 mt-1">Associate Dentist</p>
<a className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600" href="#book">
                            Book Visit <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden flex bg-slate-200 w-full bg-[url(https://www.faragdentistry.com/wp-content/uploads/sites/2037/2024/06/Screenshot-2024-06-16-at-12.03.00%E2%80%AFPM.jpeg?w=800&amp;q=80)] bg-cover relative items-center justify-center">
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-slate-900">Dr. Gangwal</h3>
<p className="text-slate-500 mt-1">Associate Dentist</p>
<a className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 hover:text-slate-600" href="#book">
                            Book Visit <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
<div className="">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                        Comprehensive <span className="text-slate-500">Care</span>
</h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        From routine cleanings to complex restorative work, we handle it all.
                    </p>
</div>
<a className="hidden md:inline-flex items-center gap-2 border border-slate-200 bg-white px-6 py-3 rounded-full text-sm font-semibold hover:border-slate-900 transition-colors" href="#book">
                    View All Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<ul className="space-y-2 text-slate-500 font-medium mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Porcelain Veneers</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Bonding</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Botox &amp; Dermal Fillers</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:shield-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Restorative Care</h3>
<ul className="space-y-2 text-slate-500 font-medium mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Crowns &amp; Bridges</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Dentures</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Root Canals</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">General Dentistry</h3>
<ul className="space-y-2 text-slate-500 font-medium mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Fillings &amp; Sealants</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Extractions</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> TMJ Disorders</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Oral Cancer Screening</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-6">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        Visit Our <span className="text-slate-500">Hoboken Office</span>
</h2>

<div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="p-3 bg-white rounded-full shadow-sm text-slate-900">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-slate-900 mb-1">Address</h4>
<p className="text-slate-600 font-medium">1006 Washington StHoboken, NJ 07030</p>
<a className="text-sm font-bold text-slate-900 mt-2 inline-flex items-center gap-1 hover:underline" href="https://www.google.com/maps/place/1006+Washington+St,+Hoboken,+NJ+07030" target="_blank">
                                Get Directions <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="p-3 bg-white rounded-full shadow-sm text-slate-900">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-1">Contact</h4>
<p className="text-slate-600 font-medium">Phone: <a className="underline decoration-slate-300" href="tel:12017927073">201-792-7073</a></p>
<p className="text-slate-600 font-medium">Fax: 201-792-7129</p>
</div>
</div>
</div>

<div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 relative">
<iframe allowfullscreen="" className="" frameborder="0" height="100%" src="https://www.google.com/maps/embed/v1/place?q=place_id%3AChIJ60tkeddZwokRiZUSUaZBedU&amp;zoom=15&amp;key=AIzaSyAKYnKVWzUE2p0RVR3F8TdF5f_Y9zF9V0Q" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="patient-info">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                    Patient Information
                </h2>
<p className="text-slate-500">Common questions from our new and existing patients.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-slate-200 open:border-slate-900 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 list-none">
                        Do you accept insurance?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 font-medium">
                        Yes, we accept various insurance plans. Please contact our office at 201-792-7073 to verify if we participate with your specific provider.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 open:border-slate-900 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 list-none">
                        How can I pay for my treatment?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 font-medium">
                        We have a financial policy in place. We accept most major forms of payment. For detailed information, please visit our <a className="underline" href="#patient-info">Financial Policy</a> page or call the front desk.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 open:border-slate-900 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-semibold text-slate-900 list-none">
                        Are new patients welcome?
                        <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 font-medium">
                        Absolutely! We are always happy to welcome new patients to Farag Dentistry. You can fill out our <a className="underline" href="#forms">Online Patient Forms</a> before your visit to save time.
                    </div>
</details>
</div>
<div className="mt-8 text-center">
<a className="text-sm font-bold text-slate-900 hover:underline" href="#forms">View Online Patient Forms →</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white rounded-t-[3rem] relative overflow-hidden" id="book">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Request an Appointment
                </h2>
<p className="text-slate-400 text-lg">
                    The first step towards a beautiful, healthy smile. Fill out the form below and we will contact you to confirm.
                </p>
</div>
<form className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-1 text-slate-300">Name *</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-300">Email *</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-1 text-slate-300">Phone</label>
<input className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all" type="tel"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 text-slate-300">Interest</label>
<div className="relative">
<select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:border-white">
<option>Scheduling Appointment</option>
<option>Bonding</option>
<option>Porcelain Veneers</option>
<option>Dental Implants</option>
<option>Teeth Whitening</option>
<option>Botox/Dermal Fillers</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-medium mb-1 text-slate-300">Best Time</label>
<div className="flex gap-4 mt-2">
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded accent-white" type="checkbox"/> <span className="text-sm">Morning</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded accent-white" type="checkbox"/> <span className="text-sm">Afternoon</span>
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-300">Day of Week</label>
<div className="flex gap-3 mt-2">
<label className="flex items-center gap-1 cursor-pointer"><input className="accent-white" type="checkbox"/><span className="text-xs">M</span></label>
<label className="flex items-center gap-1 cursor-pointer"><input className="accent-white" type="checkbox"/><span className="text-xs">T</span></label>
<label className="flex items-center gap-1 cursor-pointer"><input className="accent-white" type="checkbox"/><span className="text-xs">W</span></label>
<label className="flex items-center gap-1 cursor-pointer"><input className="accent-white" type="checkbox"/><span className="text-xs">Th</span></label>
<label className="flex items-center gap-1 cursor-pointer"><input className="accent-white" type="checkbox"/><span className="text-xs">F</span></label>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-slate-300">Comments/Questions</label>
<textarea className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-white transition-all" rows="3"></textarea>
</div>


<button className="w-full bg-white text-slate-900 font-bold text-lg py-4 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-4" type="button">
                    Send Request
                </button>
</form>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<a className="block mb-6" href="#">
<img alt="Farag Dentistry" className="h-8 w-auto brightness-0 opacity-80" src="https://www.faragdentistry.com/wp-content/uploads/sites/2037/2016/01/farag-logo.png"/>
</a>
<div className="flex gap-4 mt-6">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all" href="https://www.facebook.com/FaragDentistry/" target="_blank"><iconify-icon icon="logos:facebook" width="18"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all" href="https://www.instagram.com/Faragdentistry/" target="_blank"><iconify-icon icon="skill-icons:instagram" width="18"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white transition-all" href="https://www.linkedin.com/in/marian-farag-dmd-ab073424" target="_blank"><iconify-icon icon="logos:linkedin-icon" width="18"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm font-medium text-slate-500">
<li><a className="hover:text-slate-900" href="#home">Home</a></li>
<li className=""><a className="hover:text-slate-900" href="#meet-us">Meet Us</a></li>
<li><a className="hover:text-slate-900" href="#services">Services</a></li>
<li><a className="hover:text-slate-900" href="#forms">Online Forms</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-2 text-sm font-medium text-slate-500">
<li>1006 Washington St</li>
<li>Hoboken, NJ 07030</li>
<li className="pt-2"><a className="text-slate-900 font-bold hover:underline" href="tel:12017927073">201-792-7073</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4">Serving</h4>
<p className="text-sm font-medium text-slate-500 leading-relaxed">
                        Hoboken, Jersey City, Union City, Weehawken, Bayonne, Secaucus, and Manhattan.
                     </p>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
<p>© 2026 Farag Dentistry. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
