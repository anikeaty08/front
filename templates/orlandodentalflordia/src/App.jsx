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



        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = menu.classList.contains('menu-hidden');
            
            if (isHidden) {
                // Open
                menu.classList.remove('menu-hidden');
                menu.classList.add('menu-visible');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close
                menu.classList.remove('menu-visible');
                menu.classList.add('menu-hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }

        btn.addEventListener('click', toggleMenu);

        // Close when clicking any link
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
      

<div className="bg-[#038c7f] text-white py-2 px-4 text-xs font-medium z-50 relative">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
<div className="flex items-center gap-4">
<a className="flex items-center gap-1.5 hover:text-white/80 transition-colors" href="tel:407-601-7999">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    (407) 601-7999
                </a>
<span className="hidden sm:inline text-white/40">|</span>
<a className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors" href="https://goo.gl/maps/xyz" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                    8257 Narcoossee Pk. Drive, Orlando, FL
                </a>
</div>
<div className="flex items-center gap-4">
<span className="hidden md:inline text-emerald-100">Mon - Thu: 08:30 - 05:00</span>
<a className="sm:hidden underline underline-offset-2" href="#appointment">Book Now</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex-shrink-0" href="#">
<img alt="Orlando Holistic Dental Studio" className="h-10 w-auto md:h-12" src="https://www.orlandoteeth.com/wp-content/uploads/2020/10/OHDS_logo_no_tag.png"/>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-900 hover:text-[#038c7f] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#038c7f] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#038c7f] transition-colors" href="#about">About Dr. Cuprill</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#038c7f] transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#038c7f] transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-[#038c7f] rounded-full hover:bg-[#026e64] shadow-lg shadow-[#038c7f]/20 hover:shadow-[#038c7f]/40" href="#appointment">
                        Request Appointment
                    </a>
</div>

<button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors z-50 relative" id="mobile-menu-btn">
<span className="sr-only">Open menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
<iconify-icon className="hidden" height="24" icon="solar:close-circle-linear" id="close-icon" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 menu-hidden flex flex-col h-screen lg:hidden" id="mobile-menu">
<nav className="flex flex-col gap-6 text-lg font-medium">
<a className="mobile-link text-slate-900 border-b border-slate-100 pb-4" href="#">Home</a>
<a className="mobile-link text-slate-600 hover:text-[#038c7f]" href="#services">Services</a>
<a className="mobile-link text-slate-600 hover:text-[#038c7f]" href="#about">About Dr. Cuprill</a>
<a className="mobile-link text-slate-600 hover:text-[#038c7f]" href="#new-patients">New Patients</a>
<a className="mobile-link text-slate-600 hover:text-[#038c7f]" href="#contact">Contact &amp; Locations</a>
</nav>
<div className="mt-auto pb-8 space-y-4">
<a className="mobile-link flex items-center justify-center w-full px-6 py-4 text-base font-bold text-white bg-[#038c7f] rounded-xl shadow-lg" href="#appointment">
                Request Appointment
            </a>
<a className="flex items-center justify-center w-full px-6 py-4 text-base font-bold text-[#038c7f] bg-emerald-50 border border-[#038c7f]/20 rounded-xl" href="tel:407-601-7999">
                Call (407) 601-7999
            </a>
</div>
</div>

<section className="relative pt-12 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Dental Office Interior" className="w-full h-full object-cover opacity-60" src="https://orlandoteeth.com/wp-content/uploads/2020/09/home-1.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#038c7f]/20 border border-[#038c7f]/30 backdrop-blur-md">
<span className="flex h-2 w-2 rounded-full bg-[#038c7f]"></span>
<span className="text-xs font-semibold tracking-wide uppercase text-emerald-300">Holistic &amp; Biological Dentistry</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                    Your Path to a <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7EBEC5] to-[#038c7f]">Healthier Smile</span>
</h1>
<p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                    Experience comprehensive biological dental care in Greater Orlando. Fluoride-free, mercury-free, and mercury-safe dentistry focused on your whole-body health.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-[#038c7f] rounded-full hover:bg-[#026e64] shadow-xl hover:shadow-[#038c7f]/40 hover:-translate-y-1" href="#appointment">
                        Book Appointment
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all border border-white/20 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20" href="tel:407-601-7999">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                        (407) 601-7999
                    </a>
</div>

<div className="pt-8 flex flex-wrap gap-6 items-center border-t border-white/10">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-white/10 rounded-full text-[#7EBEC5]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Top Rated Clinic</span>
</div>
<div className="flex items-center gap-2">
<div className="p-1.5 bg-white/10 rounded-full text-[#7EBEC5]">
<iconify-icon icon="solar:leaf-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Eco-Gold Certified</span>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-100 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left divide-x-0 md:divide-x divide-slate-100">
<div className="px-4">
<p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Practice Type</p>
<p className="font-semibold text-slate-900">Holistic &amp; Biological</p>
</div>
<div className="px-4">
<p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Safety</p>
<p className="font-semibold text-slate-900">Mercury-Free &amp; Safe</p>
</div>
<div className="px-4">
<p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Materials</p>
<p className="font-semibold text-slate-900">BPA-Free &amp; Biocompatible</p>
</div>
<div className="px-4">
<p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Technology</p>
<p className="font-semibold text-slate-900">Laser &amp; Ozone Therapy</p>
</div>
</div>
</div>
</div>

<section className="py-20 lg:py-28 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -inset-4 bg-[#038c7f]/5 rounded-[2.5rem] -rotate-3"></div>
<img alt="Dr. Charles Cuprill" className="relative rounded-[2rem] shadow-2xl w-full max-w-md mx-auto lg:mx-0 bg-slate-100" src="https://www.orlandoteeth.com/wp-content/uploads/2020/09/team-2.png"/>

<div className="absolute bottom-8 right-0 lg:-right-8 bg-white p-5 rounded-xl shadow-xl border border-slate-100 max-w-[200px]">
<p className="text-3xl font-bold text-[#038c7f]">20+</p>
<p className="text-sm font-medium text-slate-600">Years of Experience in Holistic Dentistry</p>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-sm font-bold tracking-widest text-[#038c7f] uppercase">Meet The Doctor</h2>
<h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                        Dr. Charles R. Cuprill, <span className="text-slate-400">DMD, FIAOMT</span>
</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Dr. Cuprill strives to provide the kind of dental care he would expect for his own family. A clean, healthy, and welcoming environment is just the start.
                    </p>
<p className="text-slate-600 leading-relaxed">
                        He is a Certified Biological Dentist and certified in Integrative Biological Dental Medicine. Dr. Cuprill is also a fellow of the International Academy of Oral Medicine &amp; Toxicology and is SMART-certified for the safe removal of "silver" mercury amalgam fillings.
                    </p>
<div className="pt-6">
<p className="font-semibold text-slate-900 mb-4">Accreditations &amp; Affiliations:</p>
<div className="flex flex-wrap gap-4 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">

<img alt="SMART Certified" className="h-10 object-contain" src="https://www.orlandoteeth.com/wp-content/uploads/2020/09/smart.png"/>
<img alt="IAOMT" className="h-10 object-contain" src="https://www.orlandoteeth.com/wp-content/uploads/2020/09/iaomt.png"/>
<img alt="EDA" className="h-10 object-contain" src="https://www.orlandoteeth.com/wp-content/uploads/2020/09/eda.png"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-sm font-bold tracking-widest text-[#038c7f] uppercase mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"> Comprehensive Biological Services</h3>
<p className="text-lg text-slate-500">We bring together advanced dental science with natural supportive remedies.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#038c7f]/30 transition-all group">
<div className="w-12 h-12 bg-[#038c7f]/10 rounded-xl flex items-center justify-center text-[#038c7f] mb-6 group-hover:bg-[#038c7f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Safe Mercury Removal</h4>
<p className="text-slate-500 mb-4">SMART-certified protocols to safely remove amalgam fillings without exposing you to mercury vapor.</p>
<a className="inline-flex items-center text-sm font-semibold text-[#038c7f] group-hover:translate-x-1 transition-transform" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#038c7f]/30 transition-all group">
<div className="w-12 h-12 bg-[#038c7f]/10 rounded-xl flex items-center justify-center text-[#038c7f] mb-6 group-hover:bg-[#038c7f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:atom-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Dental Ozone Therapy</h4>
<p className="text-slate-500 mb-4">Using ozone to naturally disinfect and treat periodontal disease and decay with minimal intervention.</p>
<a className="inline-flex items-center text-sm font-semibold text-[#038c7f] group-hover:translate-x-1 transition-transform" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#038c7f]/30 transition-all group">
<div className="w-12 h-12 bg-[#038c7f]/10 rounded-xl flex items-center justify-center text-[#038c7f] mb-6 group-hover:bg-[#038c7f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Laser Dentistry</h4>
<p className="text-slate-500 mb-4">Minimally invasive treatments for gum disease, cavity preparation, and more with faster healing.</p>
<a className="inline-flex items-center text-sm font-semibold text-[#038c7f] group-hover:translate-x-1 transition-transform" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#038c7f]/30 transition-all group">
<div className="w-12 h-12 bg-[#038c7f]/10 rounded-xl flex items-center justify-center text-[#038c7f] mb-6 group-hover:bg-[#038c7f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Ceramic Implants</h4>
<p className="text-slate-500 mb-4">Metal-free, zirconia dental implants that are biocompatible and aesthetically superior.</p>
<a className="inline-flex items-center text-sm font-semibold text-[#038c7f] group-hover:translate-x-1 transition-transform" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#038c7f]/30 transition-all group">
<div className="w-12 h-12 bg-[#038c7f]/10 rounded-xl flex items-center justify-center text-[#038c7f] mb-6 group-hover:bg-[#038c7f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">PRF Oral Surgery</h4>
<p className="text-slate-500 mb-4">Using Platelet Rich Fibrin (PRF) from your own blood to accelerate healing after surgery.</p>
<a className="inline-flex items-center text-sm font-semibold text-[#038c7f] group-hover:translate-x-1 transition-transform" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#038c7f]/30 transition-all group">
<div className="w-12 h-12 bg-[#038c7f]/10 rounded-xl flex items-center justify-center text-[#038c7f] mb-6 group-hover:bg-[#038c7f] group-hover:text-white transition-colors">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Biocompatible Fillings</h4>
<p className="text-slate-500 mb-4">BPA-free composite fillings that match your natural tooth color and respect your biology.</p>
<a className="inline-flex items-center text-sm font-semibold text-[#038c7f] group-hover:translate-x-1 transition-transform" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#038c7f] text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/3 flex justify-center">
<img alt="Eco Gold Certified" className="w-48 md:w-56 bg-white rounded-full p-4 shadow-2xl" src="https://www.orlandoteeth.com/wp-content/uploads/2020/09/ECO-GOLD-CERTIFIED.png"/>
</div>
<div className="md:w-2/3 space-y-6 text-center md:text-left">
<h2 className="text-3xl font-bold">Orlando's Gold Certified Eco-Dentistry Practice</h2>
<p className="text-emerald-100 text-lg leading-relaxed">
                        Orlando Holistic Dental Studio is the only dental practice in Central Florida that is Gold Certified by the Eco-Dentistry Association. From materials and construction methods to everyday dentistry, we are committed to leaving a smaller footprint.
                    </p>
<div className="flex flex-wrap gap-4 justify-center md:justify-start">
<div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
<span>Paperless Charting</span>
</div>
<div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg">
<iconify-icon icon="solar:water-linear"></iconify-icon>
<span>Water Conservation</span>
</div>
<div className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-lg">
<iconify-icon icon="solar:trash-bin-linear"></iconify-icon>
<span>Waste Reduction</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-slate-900">Visit Our Studio</h2>
<p className="text-slate-500 mt-2">Conveniently located in southeast Orlando.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-8">
<div>
<h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-[#038c7f]" icon="solar:map-point-bold"></iconify-icon> Address
                        </h3>
<p className="text-slate-600">8257 Narcoossee Pk. Drive,<br/>Suite 524, Orlando, FL 32822</p>
<a className="text-sm font-semibold text-[#038c7f] mt-2 inline-block hover:underline" href="https://goo.gl/maps/xyz" target="_blank">Get Directions</a>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-[#038c7f]" icon="solar:clock-circle-bold"></iconify-icon> Hours
                        </h3>
<div className="space-y-2 text-slate-600 text-sm">
<div className="flex justify-between"><span>Mon - Thu</span> <span className="font-medium">08:30 AM - 05:00 PM</span></div>
<div className="flex justify-between"><span>Fri - Sun</span> <span className="font-medium">Closed</span></div>
</div>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-[#038c7f]" icon="solar:phone-calling-bold"></iconify-icon> Contact
                        </h3>
<p className="text-2xl font-bold text-slate-900">(407) 601-7999</p>
<p className="text-slate-500 text-sm mt-1">Call us to book your visit.</p>
</div>
</div>

<div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto bg-slate-200">
<iframe allowfullscreen="" aria-hidden="false" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.8128834724344!2d-81.27114918492137!3d28.455056482488196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e763c699ce8361%3A0x447dcb7c10828b56!2sOrlando%20Holistic%20Dental%20Studio!5e0!3m2!1sen!2sus!4v1605555464104!5m2!1sen!2sus" style={{border: '0'}} tabindex="0" width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="appointment">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
<div className="bg-[#038c7f] p-8 text-center text-white">
<h2 className="text-2xl font-bold">Request an Appointment</h2>
<p className="text-emerald-100 mt-2">Fill out the form below and our team will contact you to confirm.</p>
</div>
<form className="p-8 md:p-10 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
<input className="w-full rounded-lg border-slate-300 shadow-sm focus:border-[#038c7f] focus:ring-[#038c7f] py-3 px-4 bg-slate-50" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
<input className="w-full rounded-lg border-slate-300 shadow-sm focus:border-[#038c7f] focus:ring-[#038c7f] py-3 px-4 bg-slate-50" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
<input className="w-full rounded-lg border-slate-300 shadow-sm focus:border-[#038c7f] focus:ring-[#038c7f] py-3 px-4 bg-slate-50" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Preferred Location</label>
<select className="w-full rounded-lg border-slate-300 shadow-sm focus:border-[#038c7f] focus:ring-[#038c7f] py-3 px-4 bg-slate-50">
<option>Orlando (Narcoossee Pk.)</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
<select className="w-full rounded-lg border-slate-300 shadow-sm focus:border-[#038c7f] focus:ring-[#038c7f] py-3 px-4 bg-slate-50">
<option>New Patient Exam</option>
<option>Cleaning / Hygiene</option>
<option>Holistic Consultation</option>
<option>Mercury Removal</option>
<option>Emergency</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Preferred Day</label>
<select className="w-full rounded-lg border-slate-300 shadow-sm focus:border-[#038c7f] focus:ring-[#038c7f] py-3 px-4 bg-slate-50">
<option>Any Day</option>
<option>Monday</option>
<option>Tuesday</option>
<option>Wednesday</option>
<option>Thursday</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Message (Optional)</label>
<textarea className="w-full rounded-lg border-slate-300 shadow-sm focus:border-[#038c7f] focus:ring-[#038c7f] py-3 px-4 bg-slate-50" placeholder="Please describe your dental needs..." rows="3"></textarea>
</div>
<button className="w-full py-4 px-6 rounded-xl text-white font-bold bg-[#038c7f] hover:bg-[#026e64] shadow-lg shadow-[#038c7f]/30 transition-all transform hover:-translate-y-1" type="submit">
                        Submit Request
                    </button>
<p className="text-xs text-center text-slate-400 mt-4">*Setup Note: Connect this form to instant email autoresponder.</p>
</form>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-slate-900 group-hover:text-[#038c7f] transition-colors">
                        Do you accept dental insurance?
                        <iconify-icon className="transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed text-sm">Yes, we work with many PPO insurance plans. Please contact our office with your insurance details so we can verify your benefits prior to your appointment.</p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-slate-900 group-hover:text-[#038c7f] transition-colors">
                        What makes you "Holistic"?
                        <iconify-icon className="transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed text-sm">We focus on whole-body health, using biocompatible materials (mercury-free/fluoride-free), advanced technology like ozone and lasers, and eco-friendly practices to ensure safety for you and the environment.</p>
</details>
<details className="group bg-slate-50 rounded-xl p-4 cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-medium text-slate-900 group-hover:text-[#038c7f] transition-colors">
                        Are you accepting new patients?
                        <iconify-icon className="transition group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed text-sm">Yes! We are currently welcoming new patients to our studio. Use the form above or call us to schedule your first visit.</p>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div className="space-y-4">
<img alt="Logo" className="h-12 w-auto brightness-200 grayscale contrast-200" src="https://www.orlandoteeth.com/wp-content/uploads/2020/10/OHDS_white_logo.png"/>
<p className="text-sm leading-relaxed text-slate-400">
                        Orlando Holistic Dental Studio provides biological dentistry focused on whole-body wellness in a clean, green environment.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="logos:instagram-icon" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="logos:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#038c7f] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#038c7f] transition-colors" href="#about">Meet Dr. Cuprill</a></li>
<li><a className="hover:text-[#038c7f] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#038c7f] transition-colors" href="#new-patients">New Patient Forms</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#038c7f] transition-colors" href="#">Safe Mercury Removal</a></li>
<li><a className="hover:text-[#038c7f] transition-colors" href="#">Dental Ozone</a></li>
<li><a className="hover:text-[#038c7f] transition-colors" href="#">Ceramic Implants</a></li>
<li><a className="hover:text-[#038c7f] transition-colors" href="#">Laser Dentistry</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-[#038c7f]" icon="solar:map-point-linear"></iconify-icon>
<span>8257 Narcoossee Pk. Drive,<br/>Suite 524, Orlando, FL 32822</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#038c7f]" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white" href="tel:407-601-7999">(407) 601-7999</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 Orlando Holistic Dental Studio. License #DN17417.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
