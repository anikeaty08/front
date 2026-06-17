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



        lucide.createIcons();

        // Mobile Menu Toggle Logic
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const icon = document.getElementById('menu-icon');
        const links = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open
                menu.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
                menu.classList.add('flex', 'opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                icon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                // Close
                menu.classList.remove('flex', 'opacity-100', 'pointer-events-auto');
                menu.classList.add('hidden', 'opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }

        btn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        links.forEach(link => {
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-5 py-3 flex items-center justify-between bg-white/90 border-white/40 shadow-slate-200/50">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<img alt="Smile Wellness Logo" className="h-8 md:h-10 w-auto object-contain" src="https://mysmilewellness.com/wp-content/uploads/2024/11/smilewellness_logo_top.png"/>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors" href="#about">About Us</a>
<a className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors" href="#holistic">Holistic Approach</a>
<a className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors" href="#membership">Membership</a>
<a className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-teal-600" href="tel:2016850171">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    (201) 685-0171
                </a>
<a className="inline-flex items-center gap-2 bg-teal-600 text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-teal-600/20 hover:shadow-teal-600/40 hover:bg-teal-700 text-white transform hover:-translate-y-0.5" href="https://book2.getweave.com/28034b7c-b007-472c-bfe1-fdee052f1d10/request-appointment?source=WEBSITE" target="_blank">
                    Book Online
                    <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
</div>

<button aria-label="Toggle menu" className="lg:hidden z-50 p-2 text-slate-800 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="w-8 h-8" icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 hidden flex-col justify-center items-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<div className="flex flex-col items-center gap-6 text-center">
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#home">Home</a>
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#about">Meet The Team</a>
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#membership">Membership</a>
<a className="mobile-link text-2xl font-semibold text-slate-800" href="#contact">Contact &amp; Locations</a>
<hr className="w-20 border-slate-200 my-4"/>
<a className="flex items-center gap-2 text-xl font-medium text-slate-600" href="tel:2016850171">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (201) 685-0171
                </a>
<a className="bg-teal-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-xl shadow-teal-600/20 w-auto mt-4" href="https://book2.getweave.com/28034b7c-b007-472c-bfe1-fdee052f1d10/request-appointment?source=WEBSITE">
                    Book Appointment
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden rounded-b-[3rem] bg-slate-900" id="home">

<div className="absolute inset-0 z-0">
<img alt="Happy Family Smile Wellness" className="w-full h-full object-cover opacity-60" src="https://mysmilewellness.com/wp-content/uploads/2024/11/Screenshot-2024-11-21-at-8.18.32 PM.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                    Accepting New Patients
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                    Reimagine The Typical <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">Dental Experience.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl leading-relaxed mb-10">
                    Whole Family Dental Wellness, Rooted in Prevention. Visit the top Holistic, Pediatric, Airway and Tongue Tie dental experts in Hoboken, NJ.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-teal-500 text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 hover:bg-teal-400 text-white" href="https://book2.getweave.com/28034b7c-b007-472c-bfe1-fdee052f1d10/request-appointment?source=WEBSITE">
                        Request Appointment
                        <iconify-icon icon="solar:calendar-add-bold"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-base font-semibold px-8 py-4 rounded-full transition-all border border-white/20 hover:bg-white/20 text-white" href="tel:2016850171">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon>
                        (201) 685-0171
                    </a>
</div>

<div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-300">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-white">4.9/5 (100+ Reviews)</span>
</div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-slate-500"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-400 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<span>Out-of-Network / Superbills Provided</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-teal-600 font-bold tracking-wider uppercase text-xs mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                    Smile Wellness <span className="text-teal-600">Services</span>
</h2>
<p className="text-lg text-slate-500">
                    Comprehensive care tailored to your family's needs, from holistic prevention to specialized treatments.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:leaf-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Holistic Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Whole-person care focused on prevention, biocompatible materials, and overall wellness.</p>
<a className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:emoji-funny-circle-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Pediatric Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Gentle, specialized care for children to build a foundation of lifelong oral health.</p>
<a className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:sleeping-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Airway Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Addressing breathing issues and sleep quality through advanced dental solutions.</p>
<a className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:smile-circle-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Early Orthodontics</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Expansion and myofunctional therapy to guide proper growth and development.</p>
<a className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:heart-pulse-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Tongue Tie Release</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Specialized frenectomy services for infants, children, and adults.</p>
<a className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Laser Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Minimally invasive treatments using state-of-the-art laser technology.</p>
<a className="inline-flex items-center text-sm font-bold text-teal-600 hover:text-teal-700" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative">
<div className="absolute inset-0 bg-teal-200 rounded-[2.5rem] rotate-3 transform translate-x-2 translate-y-2"></div>
<img alt="Dr. Radhika Kapoor" className="relative w-full rounded-[2.5rem] shadow-2xl z-10 object-cover aspect-[4/5]" src="https://mysmilewellness.com/wp-content/uploads/2025/01/2024-11-04-DrRadhikaKapoor-JDP_3986-1-scaled.jpg"/>

<div className="absolute bottom-10 -right-6 md:right-10 bg-white p-5 rounded-2xl shadow-xl z-20 max-w-xs animate-bounce-slow">
<div className="flex items-center gap-3 mb-2">
<div className="bg-teal-100 p-2 rounded-full text-teal-600">
<iconify-icon className="text-2xl" icon="solar:user-heart-bold"></iconify-icon>
</div>
<span className="font-bold text-slate-900">Patient Focused</span>
</div>
<p className="text-xs text-slate-500 font-medium">"I’m passionate about providing care that truly considers the whole person."</p>
</div>
</div>

<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                        Meet Your Holistic Dentist, <br/>
<span className="text-teal-600">Dr. Radhika Kapoor</span>
</h2>
<p className="text-lg text-slate-500 font-medium mb-6 leading-relaxed">
                        As a holistic dentist and mom of two, I know firsthand just how challenging it can be to navigate the endless options when it comes to your child’s health. 
                    </p>
<p className="text-lg text-slate-500 font-medium mb-8 leading-relaxed">
                        That’s why I’m passionate about providing care that truly considers the whole person, empowering families to find lasting solutions for their health and well-being.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-700 font-semibold">Pediatric &amp; Airway Dentistry</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-700 font-semibold">Breathe Institute Affiliate</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-700 font-semibold">Dr. Emil J.A. Cappetta (Oral Surgery)</span>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold px-8 py-4 rounded-full transition-all hover:bg-slate-800 hover:shadow-lg" href="#book">
                        Meet The Full Team
                        <iconify-icon icon="solar:users-group-rounded-bold"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="holistic">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                    What Makes Us <span className="text-teal-600">Holistic</span>?
                </h2>
<p className="text-lg text-slate-500">
                    We approach dental care with a view of the whole body, understanding that oral health is deeply connected to overall wellness.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-3xl bg-teal-50/50 border border-teal-100">
<iconify-icon className="text-4xl text-teal-600 mb-4" icon="solar:shield-check-bold"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 mb-2">Minimally Invasive</h3>
<p className="text-sm text-slate-500 leading-relaxed">Treatments that preserve natural tooth structure and focus on prevention.</p>
</div>

<div className="p-6 rounded-3xl bg-teal-50/50 border border-teal-100">
<iconify-icon className="text-4xl text-teal-600 mb-4" icon="solar:waterdrops-bold"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 mb-2">Fluoride Alternatives</h3>
<p className="text-sm text-slate-500 leading-relaxed">Safe and effective alternatives tailored to your holistic health needs.</p>
</div>

<div className="p-6 rounded-3xl bg-teal-50/50 border border-teal-100">
<iconify-icon className="text-4xl text-teal-600 mb-4" icon="solar:scanner-bold"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 mb-2">Low-Radiation Imaging</h3>
<p className="text-sm text-slate-500 leading-relaxed">We utilize ALARA principles to minimize radiation exposure.</p>
</div>

<div className="p-6 rounded-3xl bg-teal-50/50 border border-teal-100">
<iconify-icon className="text-4xl text-teal-600 mb-4" icon="solar:leaf-bold"></iconify-icon>
<h3 className="text-lg font-bold text-slate-900 mb-2">Food is Medicine</h3>
<p className="text-sm text-slate-500 leading-relaxed">Nutritional counseling focusing on how diet impacts oral and overall health.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-2 md:mx-6 overflow-hidden relative" id="membership">
<div className="absolute inset-0 bg-[url('https://mysmilewellness.com/wp-content/uploads/2024/11/Screenshot-2024-11-21-at-8.19.13 PM.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        No Insurance? <br/>
<span className="text-teal-400">Join Our Membership.</span>
</h2>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        Our membership plans are designed to replace traditional insurance with a comprehensive approach that includes preventive care, discounts on treatments, and additional perks.
                    </p>
<div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 mb-8">
<h4 className="font-bold text-lg mb-2 text-white">Insurance Policy</h4>
<p className="text-slate-400 text-sm">
                            We are out-of-network providers. We provide courtesy super bills and ADA dental claims to allow you to receive maximum reimbursement for your medical/dental insurance.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-teal-400 font-bold hover:text-teal-300" href="tel:2016850171">
                        Ask About Financing Options <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white text-slate-900 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 bg-teal-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">POPULAR</div>
<h3 className="text-2xl font-bold mb-2">Wellness Membership</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight">$59.99</span>
<span className="text-slate-500 font-medium">/month</span>
</div>
<ul className="space-y-3 mb-8 text-sm font-medium text-slate-600">
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> 2 Comprehensive Visits
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> 1 Emergency Visit
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> 10% Off All Treatments
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-lg" icon="solar:check-circle-bold"></iconify-icon> Red Light Therapy &amp; Perks
                        </li>
</ul>
<a className="block w-full text-center bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all" href="tel:2016850171">
                        Call to Enroll
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-teal-50/50 border border-transparent open:border-teal-100 transition-colors">
<summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold">
                        Do you accept dental insurance?
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        We are out-of-network providers. However, we provide courtesy super bills and can submit ADA dental claims on your behalf to help you receive maximum reimbursement from your insurance provider.
                    </p>
</details>
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-teal-50/50 border border-transparent open:border-teal-100 transition-colors">
<summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold">
                        What ages do you treat?
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        We are a "Whole Family" practice! We specialize in Pediatric Dentistry but also provide comprehensive holistic care for adults.
                    </p>
</details>
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-teal-50/50 border border-transparent open:border-teal-100 transition-colors">
<summary className="flex cursor-pointer items-center justify-between text-slate-900 font-bold">
                        What is Airway Dentistry?
                        <span className="ml-4 flex-shrink-0 transition duration-300 group-open:-rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-600 text-sm">
                        Airway dentistry focuses on the structure of the mouth and how it impacts breathing. We look for signs of sleep disordered breathing and use treatments like expansion to improve overall health.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div id="book">
<h2 className="text-3xl font-bold mb-4 text-slate-900">Request Appointment</h2>
<p className="text-slate-500 mb-8">Fill out the form below and our team will reach out to confirm your visit.</p>
<form className="space-y-4 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" placeholder="Full Name" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" placeholder="Phone Number" type="tel"/>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" placeholder="Email Address" type="email"/>
</div>
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-slate-500">
<option>Reason for Visit</option>
<option>New Patient Exam</option>
<option>Pediatric Checkup</option>
<option>Tongue Tie Consultation</option>
<option>Airway Assessment</option>
</select>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" placeholder="Additional Message" rows="3"></textarea>
<button className="w-full bg-teal-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-all flex items-center justify-center gap-2" type="button">
                            Submit Request
                            <iconify-icon icon="solar:plain-bold"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-400 mt-4">*Note: This form connects to our secure email automation system.</p>
</form>
</div>

<div>
<h2 className="text-3xl font-bold mb-8 text-slate-900">Our Location</h2>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 mb-8">
<div className="flex items-start gap-4 mb-6">
<div className="bg-teal-100 p-3 rounded-xl text-teal-600">
<iconify-icon className="text-2xl" icon="solar:map-point-bold"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900">Hoboken Office</h3>
<p className="text-slate-500 font-medium mt-1">
                                    333 15th St, Suite #3A<br/>
                                    Hoboken, NJ 07030
                                </p>
</div>
</div>
<div className="space-y-4 mb-8">
<a className="flex items-center gap-3 text-slate-600 font-medium hover:text-teal-600" href="tel:2016850171">
<iconify-icon className="text-lg text-teal-500" icon="solar:phone-calling-bold"></iconify-icon>
                                (201) 685-0171
                            </a>
<a className="flex items-center gap-3 text-slate-600 font-medium hover:text-teal-600" href="mailto:info@mysmilewellness.com">
<iconify-icon className="text-lg text-teal-500" icon="solar:letter-bold"></iconify-icon>
                                info@mysmilewellness.com
                            </a>
</div>
<a className="w-full block text-center border border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-50 transition-all" href="https://maps.google.com/?q=333+15th+st+Suite+3A+Hoboken+NJ+07030" target="_blank">
                            Get Directions
                        </a>
</div>

<div className="w-full h-64 bg-slate-200 rounded-3xl overflow-hidden relative">

<img alt="Map Location" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-slate-800 shadow-lg">Hoboken, NJ</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<img alt="Smile Wellness" className="h-10 mb-6" src="https://mysmilewellness.com/wp-content/uploads/2024/11/smilewellness_logo_top.png"/>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Whole Family Dental Wellness, Rooted in Prevention.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all" href="https://www.instagram.com/smilewellnesshoboken/" target="_blank">
<iconify-icon icon="solar:camera-bold"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all" href="https://www.facebook.com/hobokensmilespecialists" target="_blank">
<iconify-icon icon="solar:facebook-bold"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-teal-50 hover:text-teal-600 transition-all" href="https://www.youtube.com/@SmileWellnessHoboken" target="_blank">
<iconify-icon icon="solar:play-circle-bold"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Services</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-teal-600" href="#">Pediatric Dentistry</a></li>
<li><a className="hover:text-teal-600" href="#">Holistic Dentistry</a></li>
<li><a className="hover:text-teal-600" href="#">Airway Dentistry</a></li>
<li><a className="hover:text-teal-600" href="#">Tongue Tie</a></li>
<li><a className="hover:text-teal-600" href="#">Laser Dentistry</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Patient Resources</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-teal-600" href="#">New Patients</a></li>
<li><a className="hover:text-teal-600" href="#">Financial Policy</a></li>
<li><a className="hover:text-teal-600" href="#">Patient Portal</a></li>
<li><a className="hover:text-teal-600" href="#">Emergencies</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Contact</h4>
<ul className="space-y-4 text-sm font-medium text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 text-lg mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>333 15th St, Suite #3A<br/>Hoboken, NJ 07030</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-500 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<span>(201) 685-0171</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
<p>© 2026 Smile Wellness. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
