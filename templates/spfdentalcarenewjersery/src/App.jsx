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
            document.body.classList.toggle('overflow-hidden'); // Prevent scrolling when menu is open
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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-2 md:p-4 transition-all duration-300">
<nav className="md:px-6 flex shadow-slate-200/50 bg-white/90 max-w-7xl border-white/20 border rounded-full mr-auto ml-auto pt-3 pr-4 pb-3 pl-4 shadow-lg backdrop-blur-xl items-center justify-between">

<a className="flex items-center gap-2 group shrink-0 bg-center" href="#">
<div className="transition-colors group-hover:bg-yellow-700 text-white bg-yellow-600 rounded-lg pt-1.5 pr-1.5 pb-1.5 pl-1.5">
<svg className="" data-icon-set="solar" data-solar="smile-circle-linear" height="24" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="assets/images/logo.png">
<g className="" fill="none">
<circle className="" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<path className="" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="" d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5" fill="currentColor"></path>
<ellipse className="" cx="9" cy="10.5" fill="currentColor" rx="1" ry="1.5"></ellipse>
</g>
</svg>
</div>
<div className="flex flex-col">
<span className="md:text-lg leading-none text-sm font-bold text-slate-900 tracking-tight">SPF Dental Care</span>
<span className="text-[10px] uppercase tracking-wider text-slate-500 hidden sm:block">Scotch Plains Fanwood</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-yellow-600" href="#" style={{}}>Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-yellow-600" href="#services" style={{}}>Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-yellow-600" href="#doctors" style={{}}>Our Doctors</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-yellow-600" href="#new-patients" style={{}}>New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-yellow-600" href="#contact" style={{}}>Contact</a>
</div>

<div className="flex items-center gap-2 md:gap-3">
<a className="hidden md:inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-full transition-colors text-yellow-700 hover:bg-yellow-50" href="tel:19083223222" style={{}}>
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
            (908) 322-3222
        </a>
<a className="inline-flex items-center gap-2 text-xs md:text-sm font-medium px-4 md:px-5 py-2.5 rounded-full transition-all shadow-lg text-white bg-yellow-600 shadow-yellow-600/20 hover:shadow-yellow-600/40 hover:bg-yellow-700" href="https://spf.meetkasper.com/schedule-appointment" style={{}}>
<span className="hidden sm:inline">Book Online</span>
<span className="sm:hidden">Book</span>
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
</a>

<button className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl hidden flex-col pt-24 px-6 pb-6 lg:hidden" id="mobile-menu-overlay">
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#">Home</a>
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#services">Services</a>
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#doctors">Meet the Doctors</a>
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#new-patients">New Patients</a>
<a className="mobile-link text-xl font-semibold text-slate-900 py-2 border-b border-slate-100" href="#contact">Contact &amp; Hours</a>
<a className="mt-4 flex items-center justify-center gap-2 font-bold text-lg py-4 rounded-xl text-yellow-700 bg-yellow-50" href="tel:19083223222" style={{}}>
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
                (908) 322-3222
            </a>
</div>
<button className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-600" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full blur-[100px] -z-10 bg-yellow-200/30" style={{}}></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] -z-10" style={{}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border shadow-sm text-xs font-semibold mx-auto lg:mx-0 border-yellow-100 text-yellow-700" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-yellow-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500" style={{}}></span>
</span>
                        Accepting New Patients in Fanwood
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] text-slate-900">
                        Changing the <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-t from-yellow-600 to-[#b5b5b5]">Dental Experience</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        One smile at a time. We prioritize comfort, modern technology, and personalized care for the whole family.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex justify-center items-center gap-2 text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-1 text-white bg-yellow-600 shadow-yellow-600/20 hover:shadow-yellow-600/40 hover:bg-yellow-700" href="#request-appointment" style={{}}>
                            Book Visit
                            <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-semibold px-8 py-4 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-yellow-200 hover:text-yellow-700" href="tel:19083223222" style={{}}>
                            Call (908) 322-3222
                        </a>
</div>

<div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-200/60">
<div className="flex flex-col">
<div className="flex text-yellow-400" style={{}}>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-500 mt-1">Top Rated Local Dentist</span>
</div>
<div className="w-px h-8 bg-slate-200"></div>
<div className="flex flex-col">
<span className="font-bold text-slate-900">Open Saturdays</span>
<span className="text-xs font-semibold text-slate-500">Convenient Hours</span>
</div>
</div>
</div>

<div className="relative mx-auto w-full max-w-md lg:max-w-full">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square shadow-yellow-900/10" style={{}}>

<img alt="Scotch Plains Fanwood Dental Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95 border border-white/50">
<div className="">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-yellow-600" style={{}}>Our Promise</p>
<p className="font-medium text-slate-900 text-sm md:text-base">No "One Size Fits All" Care.</p>
</div>
<div className="p-3 rounded-full bg-yellow-100 text-yellow-600" style={{}}>
<iconify-icon icon="solar:heart-handshake-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-semibold tracking-wide uppercase text-sm text-yellow-600" style={{}}>Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-6 text-slate-900">
                    All Your Dental Needs <span className="text-yellow-600" style={{}}>Under One Roof</span>
</h2>
<p className="text-lg text-slate-500">
                    From routine checkups to complex restorations, our Fanwood team is equipped with modern technology to treat smiles at every stage.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-yellow-900/5" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-yellow-100 text-yellow-600" style={{}}>
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Preventive Care</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Checkups, cleanings, and gum disease treatment to keep your smile healthy.</p>
</div>

<div className="group p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-yellow-900/5" style={{}}>
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{}}>
<iconify-icon icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Porcelain veneers, Zoom! whitening, and bonding for your dream smile.</p>
</div>

<div className="group p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-yellow-900/5" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-yellow-100 text-yellow-600" style={{}}>
<iconify-icon icon="solar:bone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Implants &amp; Restore</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Dental implants, crowns, bridges, and dentures for missing teeth.</p>
</div>

<div className="group p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-yellow-900/5" style={{}}>
<div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{}}>
<iconify-icon icon="solar:smile-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Orthodontics</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Invisalign® and traditional braces for children and adults.</p>
</div>

<div className="group p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-yellow-900/5" style={{}}>
<div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{}}>
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Emergency Care</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Same-day appointments for pain, broken teeth, or extractions.</p>
</div>

<div className="group p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl border border-slate-100 transition-all duration-300 hover:shadow-yellow-900/5" style={{}}>
<div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{}}>
<iconify-icon icon="solar:sleeping-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2">Sedation Dentistry</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">Nervous? We offer safe sedation options to help you relax.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                    Meet Your <span className="text-yellow-600" style={{}}>Specialists</span>
</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    A highly qualified team combining extensive clinical skills with a commitment to top-tier customer service.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

<div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all text-center group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-200">
<img alt="Dr. Kareem Osman" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://www.spfdentalcare.com/assets/images/meet-dr-Osman.jpg?w=800&amp;q=80"/>
</div>
<h3 className="font-bold text-slate-900">Dr. Kareem Osman</h3>
<p className="text-xs font-semibold uppercase tracking-wide mt-1 text-yellow-600" style={{}}>Dentist</p>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all text-center group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-200">
<img alt="Dr. David A. Malakov" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://www.spfdentalcare.com/assets/images/meet-dr-Malakov.jpg?w=800&amp;q=80"/>
</div>
<h3 className="font-bold text-slate-900">Dr. David Malakov</h3>
<p className="text-xs font-semibold uppercase tracking-wide mt-1 text-yellow-600" style={{}}>Dentist</p>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all text-center group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-200">
<img alt="Dr. Kirk A. Kalogiannis" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://www.spfdentalcare.com/assets/images/meet-dr-Kalogiannis.jpg?w=800&amp;q=80"/>
</div>
<h3 className="font-bold text-slate-900">Dr. Kirk Kalogiannis</h3>
<p className="text-xs font-semibold uppercase tracking-wide mt-1 text-yellow-600" style={{}}>Dentist</p>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all text-center group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-200">
<img alt="Dr. Jason Lin" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://www.spfdentalcare.com/assets/images/dr-lin-mtd.jpg?w=800&amp;q=80"/>
</div>
<h3 className="font-bold text-slate-900">Dr. Jason Lin</h3>
<p className="text-xs font-semibold uppercase tracking-wide mt-1 text-yellow-600" style={{}}>Dentist</p>
</div>

<div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-lg transition-all text-center group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-200">
<img alt="Dr. Mahmoud Elmedani" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://www.spfdentalcare.com/assets/images/staff-mahmoud.jpg?w=800&amp;q=80"/>
</div>
<h3 className="font-bold text-slate-900">Dr. Elmedani</h3>
<p className="text-xs font-semibold uppercase tracking-wide mt-1 text-yellow-600" style={{}}>Dentist</p>
</div>
</div>
</div>
</section>

<section className="text-white bg-yellow-500 rounded-t-[3rem] py-24" id="new-patients">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Patient Resources</h2>
<p className="text-lg mb-8 text-yellow-100" style={{}}>We make your dental visits as smooth as possible. Here is what you need to know before your visit.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-yellow-800" style={{}}>
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-bold mb-1">Insurance &amp; Financing</h3>
<p className="text-sm text-neutral-950/80">We accept all PPO dental insurance plans and help maximize your benefits. No insurance? Ask about our In-House Dental Savings Plan.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-yellow-800" style={{}}>
<iconify-icon icon="solar:file-text-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-bold mb-1">Patient Forms</h3>
<p className="text-sm text-neutral-950/80">Save time in the waiting room by completing your forms online before your appointment.</p>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-2xl font-bold mb-4">Common Questions</h3>
<details className="rounded-2xl p-4 cursor-pointer group bg-yellow-800/50" style={{}}>
<summary className="font-semibold flex justify-between items-center list-none">
                            Do you accept new patients?
                            <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-3 text-sm leading-relaxed text-yellow-100/90" style={{}}>Yes! We are always happy to welcome new patients to our dental family in Fanwood.</p>
</details>
<details className="rounded-2xl p-4 cursor-pointer group bg-yellow-800/50" style={{}}>
<summary className="font-semibold flex justify-between items-center list-none">
                            Do you see children?
                            <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-3 text-sm leading-relaxed text-yellow-100/90" style={{}}>Absolutely. We provide children's dentistry and make high-quality care convenient for the whole family.</p>
</details>
<details className="rounded-2xl p-4 cursor-pointer group bg-yellow-800/50" style={{}}>
<summary className="font-semibold flex justify-between items-center list-none">
                            What if I have a dental emergency?
                            <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-3 text-sm leading-relaxed text-yellow-100/90" style={{}}>Call us immediately at (908) 322-3222. We offer same-day emergency appointments for pain relief.</p>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="request-appointment">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block p-3 rounded-full mb-4 bg-yellow-50 text-yellow-600" style={{}}>
<iconify-icon icon="solar:calendar-date-linear" width="32"></iconify-icon>
</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    Request Appointment
                </h2>
<p className="text-lg text-slate-500 font-medium">
                    Fill out the form below and our team will contact you to confirm your visit.
                </p>
</div>
<form className="space-y-6 bg-slate-50 p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent transition-all focus:ring-yellow-500" placeholder="John Doe" required="" style={{}} type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent transition-all focus:ring-yellow-500" placeholder="(908) 555-0123" required="" style={{}} type="tel"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent transition-all focus:ring-yellow-500" placeholder="john@example.com" required="" style={{}} type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Day</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent transition-all appearance-none focus:ring-yellow-500" style={{}}>
<option>Any Availability</option>
<option>Monday</option>
<option>Tuesday</option>
<option>Wednesday</option>
<option>Thursday</option>
<option>Friday</option>
<option>Saturday</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="">
<label className="block text-sm font-semibold text-slate-700 mb-2">Reason for Visit</label>
<textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:border-transparent transition-all focus:ring-yellow-500" placeholder="Checkup, Tooth Pain, Consultation..." rows="3" style={{}}></textarea>
</div>
<div className="pt-2">
<button className="w-full text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 bg-yellow-600 shadow-yellow-600/20 hover:bg-yellow-700 hover:shadow-yellow-600/40" style={{}} type="button">
                        Submit Request
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-4">* This form connects to our secure email system. We will confirm your time shortly.</p>
</div>
</form>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">

<div className="space-y-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-yellow-500" icon="solar:smile-circle-linear" style={{}} width="32"></iconify-icon>
<span className="text-xl font-bold">SPF Dental Care</span>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                        Scotch Plains Fanwood Dental Care.<br/>
                        Top-tier dental care that you simply can't find elsewhere.
                    </p>
<div className="flex gap-4">
<a className="transition-colors hover:text-yellow-400" href="https://www.facebook.com/spfdental/" style={{}}><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-yellow-400" href="https://www.google.com/maps" style={{}}><iconify-icon icon="logos:google-icon" width="20"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="text-white font-bold mb-4">Contact Info</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="shrink-0 mt-0.5 text-yellow-500" icon="solar:map-point-linear" style={{}}></iconify-icon>
<span>44 S Martine Ave,<br/>Fanwood, NJ 07023</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0 text-yellow-500" icon="solar:phone-calling-linear" style={{}}></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:19083223222">(908) 322-3222</a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white font-bold mb-4">Office Hours</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex justify-between"><span>Mon &amp; Thu</span> <span className="text-white">9:00 AM - 7:00 PM</span></li>
<li className="flex justify-between"><span>Tue &amp; Wed</span> <span className="text-white">9:00 AM - 6:00 PM</span></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="transition-colors hover:text-yellow-400" href="#services" style={{}}>Services</a></li>
<li><a className="transition-colors hover:text-yellow-400" href="#doctors" style={{}}>Meet the Team</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2026 Scotch Plains Fanwood Dental Care. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-yellow-400" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-yellow-400" href="#" style={{}}>Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
