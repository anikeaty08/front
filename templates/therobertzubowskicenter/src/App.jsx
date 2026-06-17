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
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open Menu
                menuOverlay.classList.remove('mobile-menu-hidden');
                menuOverlay.classList.add('mobile-menu-visible');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                // Change icon to X
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" height="28"></iconify-icon>';
            } else {
                // Close Menu
                menuOverlay.classList.remove('mobile-menu-visible');
                menuOverlay.classList.add('mobile-menu-hidden');
                document.body.style.overflow = ''; // Restore scrolling
                // Change icon back to Hamburger
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

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
      

<div className="bg-dark text-white py-2.5 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
<span className="opacity-90 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#47ae9f] animate-pulse"></span>
                Board Certified Plastic Surgeon • Paramus, NJ
            </span>
<div className="flex items-center gap-6">
<a className="flex items-center gap-1.5 hover:text-[#47ae9f] cursor-pointer transition-colors" href="https://maps.google.com/?q=1+Sears+Drive,+Paramus,+NJ+07652" target="_blank">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 1 Sears Drive, Paramus, NJ
                </a>
<a className="flex items-center gap-1.5 hover:text-[#47ae9f] transition-colors" href="tel:2012617550">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 201-261-7550
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group z-50 relative" href="#">
<div className="w-10 h-10 bg-[#47ae9f] text-white flex items-center justify-center rounded-sm shadow-lg group-hover:scale-105 transition-transform duration-300">
<span className="font-serif font-bold text-xl italic">Z</span>
</div>
<div>
<span className="block text-base font-bold tracking-tight text-dark leading-none">Dr. Zubowski</span>
<span className="text-[9px] uppercase tracking-[0.15em] text-stone-500">Center for Plastic Surgery</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-6 text-[11px] font-semibold uppercase tracking-widest text-stone-500">
<a className="hover:text-[#47ae9f] transition-colors py-2" href="#meet-doctor">Dr. Zubowski</a>
<a className="hover:text-[#47ae9f] transition-colors py-2" href="#services">Procedures</a>
<a className="hover:text-[#47ae9f] transition-colors py-2" href="#locations">Locations</a>
<a className="hover:text-[#47ae9f] transition-colors py-2" href="#gallery">Gallery</a>
<a className="hover:text-[#47ae9f] transition-colors py-2" href="#insurance">Insurance</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-dark font-medium text-xs hover:text-[#47ae9f] transition-colors" href="tel:2012617550">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span className="hidden xl:inline">201-261-7550</span>
</a>
<a className="hidden sm:flex bg-[#47ae9f] text-white px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-[#3aa092] transition-all shadow-md hover:shadow-lg active:scale-95 items-center gap-2" href="#contact">
                    Request Consult
                    <iconify-icon icon="solar:calendar-linear"></iconify-icon>
</a>

<button className="lg:hidden z-50 w-10 h-10 flex items-center justify-center text-dark hover:text-[#47ae9f] transition-colors" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white z-40 transition-all duration-300 mobile-menu-hidden flex flex-col pt-28 px-6" id="mobile-menu-overlay">
<div className="flex flex-col gap-6 text-xl font-serif text-dark">
<a className="mobile-link border-b border-stone-100 pb-4 flex justify-between items-center" href="#meet-doctor">
                About Dr. Zubowski <iconify-icon className="text-[#47ae9f]" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link border-b border-stone-100 pb-4 flex justify-between items-center" href="#services">
                Procedures &amp; Services <iconify-icon className="text-[#47ae9f]" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link border-b border-stone-100 pb-4 flex justify-between items-center" href="#gallery">
                Photo Gallery <iconify-icon className="text-[#47ae9f]" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link border-b border-stone-100 pb-4 flex justify-between items-center" href="#locations">
                Locations &amp; Hours <iconify-icon className="text-[#47ae9f]" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link border-b border-stone-100 pb-4 flex justify-between items-center" href="#insurance">
                Insurance &amp; Financing <iconify-icon className="text-[#47ae9f]" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="mt-auto mb-10 space-y-4">
<a className="w-full bg-stone-100 text-dark py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase text-xs tracking-widest" href="tel:2012617550">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon> Call 201-261-7550
            </a>
<a className="mobile-link w-full bg-[#47ae9f] text-white py-4 rounded-xl flex items-center justify-center gap-2 font-bold uppercase text-xs tracking-widest shadow-lg" href="#contact">
                Book Consultation
            </a>
</div>
</div>

<header className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Plastic Surgery Aesthetic" className="w-full h-full object-cover opacity-95" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 pb-32">
<div className="max-w-3xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium shadow-sm">
<iconify-icon className="text-[#47ae9f] text-sm" icon="solar:medal-star-linear"></iconify-icon>
                    Voted Top Doctor NY Metro Area
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.95]">
                    Refining Beauty <br/>
<span className="font-serif italic text-[#47ae9f]">Restoring Confidence</span>
</h1>
<p className="text-lg md:text-xl text-stone-200/90 font-light leading-relaxed max-w-xl border-l-2 border-[#47ae9f] pl-6 fade-up delay-100">
                    The Robert Zubowski, MD Center for Plastic &amp; Reconstructive Surgery. Over 25 years of excellence in Paramus and the New Jersey Metro area.
                </p>
<div className="flex flex-col sm:flex-row gap-5 pt-6 fade-up delay-200">
<a className="bg-[#47ae9f] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#3aa092] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group" href="#contact">
                        Request Appointment
                        <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-3" href="tel:2012617550">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        (201) 261-7550
                    </a>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-2xl text-[#47ae9f] opacity-80" icon="solar:user-check-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-wider">Board Certified</span>
<span className="text-[10px] text-white/60">Plastic Surgeon</span>
</div>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-2xl text-[#47ae9f] opacity-80" icon="solar:hospital-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-wider">Paramus, NJ</span>
<span className="text-[10px] text-white/60">Premier Facility</span>
</div>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-2xl text-[#47ae9f] opacity-80" icon="solar:star-circle-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-wider">Top Doctor</span>
<span className="text-[10px] text-white/60">Castle Connolly</span>
</div>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-2xl text-[#47ae9f] opacity-80" icon="solar:heart-pulse-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-wider">Insurance</span>
<span className="text-[10px] text-white/60">Plans Accepted</span>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<span className="text-[#47ae9f] text-xs font-bold tracking-widest uppercase">Comprehensive Care</span>
<h2 className="text-4xl md:text-5xl font-medium text-dark tracking-tight leading-tight">
                    Surgical &amp; Non-Surgical <br/><span className="font-serif italic text-stone-500">Excellence</span>
</h2>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                    Tailored procedures designed to enhance your natural beauty.
                </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#47ae9f]/30 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#47ae9f] mb-6 group-hover:bg-[#47ae9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:face-scan-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-dark mb-4">Face</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Facelift</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Rhinoplasty</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Blepharoplasty</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Brow Lift</li>
</ul>
</div>

<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#47ae9f]/30 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#47ae9f] mb-6 group-hover:bg-[#47ae9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-dark mb-4">Breast</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Augmentation</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Breast Lift</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Reduction</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Reconstruction</li>
</ul>
</div>

<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#47ae9f]/30 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#47ae9f] mb-6 group-hover:bg-[#47ae9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:body-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-dark mb-4">Body</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Tummy Tuck</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Liposuction</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Mommy Makeover</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> CoolSculpting</li>
</ul>
</div>

<div className="p-8 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#47ae9f]/30 transition-all duration-300 group hover:-translate-y-1">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#47ae9f] mb-6 group-hover:bg-[#47ae9f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-dark mb-4">MedSpa</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Botox® &amp; Fillers</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Laser Treatments</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Weight Loss Injections</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-[#47ae9f] rounded-full"></span> Ultherapy</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-bold border-b border-[#47ae9f] pb-1 text-dark hover:text-[#47ae9f] transition-colors" href="#contact">
                    View Full Service Menu <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="meet-doctor">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-xl">

<img alt="Dr. Robert Zubowski" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://drzubowski.com/wp-content/uploads/2020/06/new-jersey-plastic-surgeon-dr-zubowski-portrait.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 w-40 h-40 bg-white p-6 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center">
<span className="text-3xl font-bold text-[#47ae9f]">25+</span>
<span className="text-xs uppercase tracking-wider text-stone-500 mt-1">Years Experience</span>
</div>
</div>
<div className="space-y-8">
<div>
<span className="text-[#47ae9f] text-xs font-bold tracking-widest uppercase mb-2 block">The Expert</span>
<h2 className="text-4xl font-medium text-dark tracking-tight">Robert Zubowski, MD</h2>
<p className="text-stone-500 font-serif italic text-xl mt-2">Board Certified Plastic Surgeon</p>
</div>
<div className="space-y-4 text-stone-600 leading-relaxed font-light">
<p>Alumnus of the prestigious Cleveland Clinic Foundation, Dr. Zubowski has been named one of the 10 best plastic surgeons in the country by Aesthetic Everything® and is a perennial Top Doc in local NJ publications.</p>
<p>He performs surgical procedures such as breast augmentation, facelift, tummy tuck, and rhinoplasty with a philosophy grounded in safety, precision, and natural-looking results.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200/50">
<iconify-icon className="text-[#47ae9f] text-2xl mb-2" icon="solar:diploma-verified-linear"></iconify-icon>
<div className="text-xs font-bold uppercase text-dark">Top Doctor</div>
<div className="text-[10px] text-stone-500">Castle Connolly</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200/50">
<iconify-icon className="text-[#47ae9f] text-2xl mb-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="text-xs font-bold uppercase text-dark">Patient Focus</div>
<div className="text-[10px] text-stone-500">Personalized Care</div>
</div>
</div>
<a className="inline-block bg-dark text-white px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#47ae9f] transition-colors" href="#contact">
                        Schedule Consultation
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-8">
<span className="text-[#47ae9f] text-xs font-bold tracking-widest uppercase">New Patients</span>
<h2 className="text-4xl font-medium text-dark tracking-tight">Start Your Journey</h2>
<p className="text-stone-600">
                        Fill out the form to request a consultation. Our team will contact you shortly to confirm your appointment.
                    </p>
<div className="space-y-6 pt-6 border-t border-stone-100">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#47ae9f]/10 flex items-center justify-center flex-shrink-0 text-[#47ae9f]">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-dark text-sm">Our Location</h4>
<p className="text-sm text-stone-500">1 Sears Drive<br/>Paramus, NJ 07652</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#47ae9f]/10 flex items-center justify-center flex-shrink-0 text-[#47ae9f]">
<iconify-icon icon="solar:clock-circle-bold"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-dark text-sm">Office Hours</h4>
<p className="text-sm text-stone-500">Mon - Fri: 9:00 AM - 5:00 PM</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-[#FDFCFB] p-8 md:p-10 rounded-[2rem] border border-stone-200 shadow-lg">
<form className="space-y-5" onsubmit="event.preventDefault(); document.getElementById('success-msg').classList.remove('hidden'); this.reset();">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Name</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#47ae9f] focus:ring-1 focus:ring-[#47ae9f] transition-all" placeholder="Full Name" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Phone</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#47ae9f] focus:ring-1 focus:ring-[#47ae9f] transition-all" placeholder="(555) 555-5555" required="" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Email</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#47ae9f] focus:ring-1 focus:ring-[#47ae9f] transition-all" placeholder="email@address.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Interest</label>
<select className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#47ae9f] focus:ring-1 focus:ring-[#47ae9f] transition-all text-stone-600">
<option>Breast Surgery</option>
<option>Facial Rejuvenation</option>
<option>Body Contouring</option>
<option>Non-Surgical / MedSpa</option>
<option>Other</option>
</select>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase text-stone-500 tracking-wider">Message</label>
<textarea className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#47ae9f] focus:ring-1 focus:ring-[#47ae9f] transition-all" placeholder="How can we help you?" rows="3"></textarea>
</div>
<div className="hidden bg-green-50 text-green-800 text-sm p-3 rounded-lg border border-green-100 flex items-center gap-2" id="success-msg">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Thank you! We will contact you shortly.
                        </div>
<button className="w-full bg-[#47ae9f] text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-[#3aa092] transition-colors shadow-md" type="submit">
                            Request Appointment
                        </button>
<p className="text-[10px] text-center text-stone-400">
                            *Secure form. Connected to instant staff notification system.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="insurance">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-dark tracking-tight mb-10 text-center">Patient Resources</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-dark font-semibold">
                        What insurance plans do you accept?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-[#47ae9f]"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        We accept various insurance plans for reconstructive procedures. Please contact our office at 201-261-7550 to verify your specific coverage. For cosmetic procedures, insurance typically does not apply.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-dark font-semibold">
                        Do you offer financing for cosmetic surgery?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-[#47ae9f]"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        Yes, we offer financing options including CareCredit to help make your procedure more affordable. We also have options for uninsured and self-pay patients.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-dark font-semibold">
                        What is the consultation fee?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180 text-[#47ae9f]"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        Please call our office for current consultation fee structures. In many cases, the consultation fee may be applied toward your scheduled surgery or treatment.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-dark text-stone-400 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2 text-white" href="#">
<span className="font-serif font-bold text-xl">Dr. Zubowski.</span>
</a>
<p className="text-sm leading-relaxed max-w-sm">
                        The Robert Zubowski, MD Center for Plastic &amp; Reconstructive Surgery. Serving Paramus and the NJ Metro area with integrity and artistic precision for over 25 years.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#47ae9f] transition-colors text-white" href="#"><iconify-icon icon="brandico:instagram"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#47ae9f] transition-colors text-white" href="#"><iconify-icon icon="brandico:facebook"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#47ae9f]" icon="solar:map-point-linear"></iconify-icon>
<span>1 Sears Drive<br/>Paramus, NJ 07652</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#47ae9f]" icon="solar:phone-linear"></iconify-icon>
<span>201-261-7550</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Hours</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between">
<span>Monday - Friday</span>
<span className="text-white">9am - 5pm</span>
</li>
<li className="flex justify-between">
<span>Sat - Sun</span>
<span className="text-white">Closed</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>© 2026 Dr. Robert Zubowski. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 md:hidden">
<a className="bg-[#47ae9f] text-white w-14 h-14 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center" href="#contact">
<iconify-icon icon="solar:calendar-add-bold" width="24"></iconify-icon>
</a>
</div>


    </>
  );
}
