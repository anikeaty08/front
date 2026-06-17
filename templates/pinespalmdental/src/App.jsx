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
        const mobileMenu = document.getElementById('mobile-menu');

        function openMenu() {
            mobileMenu.classList.remove('menu-hidden');
            mobileMenu.classList.add('menu-visible');
        }

        function closeMenu() {
            mobileMenu.classList.remove('menu-visible');
            mobileMenu.classList.add('menu-hidden');
        }

        menuBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
    
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
      

<div className="hidden lg:block bg-emerald-950 text-white py-2.5 px-6 border-b border-white/10">
<div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-emerald-300 transition-colors" href="https://www.google.com/maps/place/Pines+Palm+Dental/@26.0068997,-80.2772441,15z" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>9964 Pines Blvd, Pembroke Pines, FL 33024</span>
</a>
<span className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span>Mon - Fri: 9am - 5pm/6pm</span>
</span>
</div>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 hover:text-emerald-300 transition-colors" href="tel:9544326222">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<span>(954) 432-6222</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 left-0 right-0 z-50 w-full p-4 md:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">

<img alt="Pines Palm Dental" className="h-8 md:h-10 w-auto object-contain" src="https://cdn.prod.website-files.com/661af9a1ca5426d279ed2512/661fff3dbbb8ce99a0144944_PPD_Logo_Horizontal.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600" href="#">Home</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600" href="#services">Services</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600" href="#team">Our Doctors</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600" href="#reviews">Reviews</a>
<a className="text-sm font-semibold transition-colors text-slate-600 hover:text-emerald-600" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 bg-emerald-600 text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-700 text-white" href="#book">
                    Request Appointment
                </a>
</div>

<button className="lg:hidden p-2 text-slate-900 z-50 relative" id="mobile-menu-btn">
<iconify-icon className="w-8 h-8 text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl menu-hidden flex flex-col justify-center items-center" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900" id="close-menu-btn">
<iconify-icon className="text-4xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<nav className="flex flex-col items-center gap-8 text-center p-6">
<a className="mobile-link text-2xl font-bold text-slate-900" href="#" onclick="closeMenu()">Home</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#services" onclick="closeMenu()">Services</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#team" onclick="closeMenu()">Doctors</a>
<a className="mobile-link text-2xl font-bold text-slate-900" href="#reviews" onclick="closeMenu()">Reviews</a>
<a className="mobile-link text-2xl font-bold text-emerald-600" href="#book" onclick="closeMenu()">Book Now</a>
<div className="mt-8 flex flex-col gap-4 w-full">
<a className="flex items-center justify-center gap-2 text-lg font-medium text-slate-600" href="tel:9544326222">
<iconify-icon className="text-emerald-600" icon="solar:phone-calling-bold"></iconify-icon>
                    (954) 432-6222
                </a>
<a className="flex items-center justify-center gap-2 text-lg font-medium text-slate-600" href="https://www.google.com/maps/place/Pines+Palm+Dental/@26.0068997,-80.2772441,15z">
<iconify-icon className="text-emerald-600" icon="solar:map-point-bold"></iconify-icon>
                    Pembroke Pines, FL
                </a>
</div>
</nav>
</div>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Dental Care To <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-emerald-600">Transform Your Smile</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Supercharge your health at Pines Palm Dental. Explore restorative treatments, innovative orthodontics, and senior care in Pembroke Pines, FL.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-600 text-base font-bold px-8 py-4 rounded-full transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:bg-emerald-700 text-white min-w-[200px]" href="#book">
                            Make Appointment
                            <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 border-slate-200 text-base font-bold px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 hover:border-emerald-200 hover:text-emerald-600" href="tel:9544326222">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                            (954) 432-6222
                        </a>
</div>

<div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 border-t border-slate-100">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="font-bold text-slate-900 text-sm">5.0 (400+ Reviews)</span>
</div>
<div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
<iconify-icon className="text-emerald-600 text-xl" icon="solar:shield-check-linear"></iconify-icon>
                            Most Insurance Accepted
                        </div>
</div>
</div>

<div className="relative mt-8 lg:mt-0">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-emerald-900/10">

<img alt="Pines Palm Dental Care" className="w-full h-[500px] lg:h-[650px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-emerald-950/70"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95 border border-white/50">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-600">Our Promise</p>
<p className="font-bold text-slate-900 text-lg">Dedicated to Your Well-Being.</p>
</div>
<div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon className="text-2xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-colors">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 mx-auto md:mx-0">
<iconify-icon className="text-2xl" icon="solar:medal-ribbon-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Expert Dental Care</h3>
<p className="text-slate-500 leading-relaxed">
                        We combine decades of expertise with the latest in dental technology to provide top-tier, comprehensive care.
                    </p>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-colors">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 mx-auto md:mx-0">
<iconify-icon className="text-2xl" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Personalized Plans</h3>
<p className="text-slate-500 leading-relaxed">
                        Your unique smile deserves customized care. We listen to your goals to create tailored treatment plans.
                    </p>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-colors">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 mx-auto md:mx-0">
<iconify-icon className="text-2xl" icon="solar:heart-handshake-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Caring Support</h3>
<p className="text-slate-500 leading-relaxed">
                        Experience the warmth and genuine care of our staff. We are partners in your lifetime of healthy smiles.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 rounded-t-[3rem] lg:rounded-t-[4rem]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-emerald-600">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From routine checkups to complex restorations, we cover all your dental needs under one roof.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100">
<div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:sparkles-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Transformative Smiles</h3>
<p className="text-slate-500 mb-6">Porcelain Veneers, Teeth Whitening, and full Smile Makeovers to boost your confidence.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Veneers &amp; Whitening</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Clear Aligners</li>
</ul>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100">
<div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Health &amp; Wellness</h3>
<p className="text-slate-500 mb-6">Preventive cleanings, oral cancer screenings, and periodontal maintenance for lasting health.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Deep Cleaning</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Root Canals</li>
</ul>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100">
<div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Implants &amp; Restore</h3>
<p className="text-slate-500 mb-6">Advanced implant dentistry, crowns, bridges, and dentures to restore function.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Crowns &amp; Bridges</li>
</ul>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100">
<div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Emergency Care</h3>
<p className="text-slate-500 mb-6">Urgent care for toothaches, damage, abscesses, and avulsions to alleviate pain promptly.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Same-Day Appts</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Pain Relief</li>
</ul>
</div>

<div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-100">
<div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:user-hand-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Senior Care</h3>
<p className="text-slate-500 mb-6">Tailored dental services for seniors, focusing on restorative dentistry and Medicare support.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Dentures</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Gentle Care</li>
</ul>
</div>

<div className="bg-emerald-600 p-8 rounded-3xl shadow-xl flex flex-col justify-center items-start text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-3xl font-bold mb-4">Not sure what you need?</h3>
<p className="text-emerald-100 mb-8 font-medium">Schedule a consultation and we'll build a personalized plan for you.</p>
<a className="bg-white text-emerald-700 font-bold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors w-full text-center" href="#book">
                        Book Consultation
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wider bg-emerald-50 text-emerald-600">The Experts</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                    Meet Your <span className="text-emerald-600">Dental Team</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 bg-slate-100">
<img alt="Dr. Fernando Gutiérrez" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.prod.website-files.com/661af9a1ca5426d279ed2512/661d6e8eb580eec4a24c2dbc_Fernando_Gutierrez_Testing_3.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
<p className="text-white font-bold text-xl">Dr. Fernando Gutiérrez, DDS</p>
<p className="text-emerald-300 font-medium text-sm">Owner &amp; Implant Specialist</p>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Over 20 years of dental expertise, specializing in advanced surgical procedures and implants. Dr. Gutiérrez sets a high standard of care with his leadership.
                    </p>
</div>

<div className="group">
<div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 bg-slate-100">
<img alt="Dr. Sandra Oilar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.prod.website-files.com/661af9a1ca5426d279ed2512/661d6f2dda6d0d4f54ad72fb_Sandra_Oilar_Testing_2.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
<p className="text-white font-bold text-xl">Dr. Sandra Oilar, DDS</p>
<p className="text-emerald-300 font-medium text-sm">Orthodontics &amp; General</p>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Extensive experience spanning over 15 years. Her focus on invisible orthodontics and comprehensive dental care ensures personalized treatments.
                    </p>
</div>

<div className="group">
<div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 bg-slate-100">
<img alt="Dr. Juan Fernando Cobo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://cdn.prod.website-files.com/661af9a1ca5426d279ed2512/661d6f7a82057a0642ed2176_Juan_Cobo_web_Testing_2.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
<p className="text-white font-bold text-xl">Dr. Juan Fernando Cobo, DDS</p>
<p className="text-emerald-300 font-medium text-sm">Restorative Dentistry</p>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Over 20 years of experience in general and restorative dentistry. His deep knowledge contributes significantly to the quality of care offered.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-white rounded-[3rem]" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl md:text-5xl font-bold mb-6">Patient Stories</h2>
<p className="text-emerald-100 text-lg mb-8">
                        See why over 400 patients have given us a 5-star rating on Google. We treat everyone like family.
                    </p>
<div className="flex items-center gap-4 mb-10">
<img alt="Google Reviews" className="h-16 w-auto bg-white rounded-xl p-2" src="https://cdn.prod.website-files.com/661af9a1ca5426d279ed2512/662950115ff2027f5f098ef9_Google_5_Star_Reviews_Cropped_Color.png"/>
</div>
<a className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3 rounded-full transition-colors" href="#book">
                        Book Your Visit
                    </a>
</div>
<div className="space-y-6">

<div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
<div className="flex text-yellow-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="italic text-emerald-50 mb-4">"Friendly staff that greet and treat everyone like part of a family. Dr. Gutierrez is an expert in his field, up to date on all the latest technology."</p>
<p className="font-bold text-white">- Catalina</p>
</div>

<div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
<div className="flex text-yellow-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="italic text-emerald-50 mb-4">"I have been going to this office for 7 years. Amazing Staff and Dentist! Definitely recommend."</p>
<p className="font-bold text-white">- Aileen</p>
</div>

<div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
<div className="flex text-yellow-400 mb-3 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="italic text-emerald-50 mb-4">"Best service, excellent customer experience and state of the art equipment, always right on time with the appointments."</p>
<p className="font-bold text-white">- Andres</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
<div className="p-8 md:p-12">
<h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Request Appointment</h2>
<p className="text-center text-slate-500 mb-8">Fill out the form below and we will contact you to confirm.</p>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-slate-900" placeholder="Full Name *" required="" type="text"/>
</div>
<div>
<label className="sr-only">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-slate-900" placeholder="Phone Number *" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-slate-900" placeholder="Email Address *" required="" type="email"/>
</div>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 appearance-none cursor-pointer focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-600">
<option>New Patient Visit</option>
<option>Dental Cleaning</option>
<option>Emergency / Pain</option>
<option>Cosmetic Consultation</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 appearance-none cursor-pointer focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-600">
<option>Pembroke Pines (9964 Pines Blvd)</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="relative">
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-600" onfocus="(this.type='datetime-local')" placeholder="Preferred Day/Time" type="text"/>
</div>
</div>
<div>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-slate-900" placeholder="Reason for visit or message..." rows="3"></textarea>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-xl shadow-emerald-500/20 mt-4" type="button">
                            Submit Request
                        </button>
<p className="text-xs text-center text-slate-400 mt-4">
                            * Note: This form connects to our front desk. You will receive an email confirmation shortly.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-3xl mx-auto px-4 text-center">
<h3 className="text-2xl font-bold mb-8">Common Questions</h3>
<div className="space-y-4 text-left">
<details className="group bg-slate-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer border border-slate-100 open:border-emerald-200">
<summary className="flex justify-between items-center font-bold text-slate-900">
                        Do you accept my insurance?
                        <span className="text-emerald-500 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon></span>
</summary>
<p className="text-slate-500 mt-4">We accept most major dental insurance plans and Medicare Advantage Plans. Please call us at (954) 432-6222 to verify your specific coverage.</p>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer border border-slate-100 open:border-emerald-200">
<summary className="flex justify-between items-center font-bold text-slate-900">
                        Do you see children?
                        <span className="text-emerald-500 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon></span>
</summary>
<p className="text-slate-500 mt-4">Yes! We provide comprehensive dental care for the entire family, including children and seniors.</p>
</details>
<details className="group bg-slate-50 p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer border border-slate-100 open:border-emerald-200">
<summary className="flex justify-between items-center font-bold text-slate-900">
                        What if I have a dental emergency?
                        <span className="text-emerald-500 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon></span>
</summary>
<p className="text-slate-500 mt-4">We offer urgent care services for toothaches, accidents, and damage. Please call us immediately for a same-day appointment.</p>
</details>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div className="space-y-6">
<img alt="Pines Palm Dental" className="h-10 w-auto brightness-0 invert opacity-90" src="https://cdn.prod.website-files.com/661af9a1ca5426d279ed2512/661fff3dbbb8ce99a0144944_PPD_Logo_Horizontal.png"/>
<p className="text-sm leading-relaxed">
                        Dedicated to your well-being. We combine state-of-the-art technology with personalized care to transform your smile.
                    </p>
<div className="flex gap-4">
<a className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors text-white" href="https://www.facebook.com/PinesPalmDental/"><iconify-icon icon="solar:facebook-bold"></iconify-icon></a>
<a className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors text-white" href="https://www.instagram.com/pinespalmdental"><iconify-icon icon="solar:instagram-bold"></iconify-icon></a>
<a className="p-2 bg-slate-800 rounded-full hover:bg-emerald-600 transition-colors text-white" href="https://www.linkedin.com/company/pines-palm-dental"><iconify-icon icon="brandico:linkedin-rect"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>9964 Pines Blvd<br/>Pembroke Pines, FL 33024</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-emerald-400 transition-colors" href="tel:9544326222">(954) 432-6222</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-emerald-400 transition-colors" href="mailto:info@pinespalmdental.com">info@pinespalmdental.com</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6">Office Hours</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between border-b border-slate-800 pb-2"><span>Mon / Wed</span> <span className="text-white">9:00 am - 5:00 pm</span></li>
<li className="flex justify-between border-b border-slate-800 pb-2"><span>Tue / Thu</span> <span className="text-white">9:00 am - 6:00 pm</span></li>
<li className="flex justify-between border-b border-slate-800 pb-2"><span>Friday</span> <span className="text-white">9:00 am - 3:00 pm</span></li>
<li className="flex justify-between border-b border-slate-800 pb-2"><span>Saturday</span> <span className="text-white">By Appointment</span></li>
<li className="flex justify-between pb-2"><span>Sunday</span> <span className="text-slate-500">Closed</span></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-emerald-500 transition-colors" href="#services">Cosmetic Dentistry</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#services">Dental Implants</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#services">Invisalign / Ortho</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#services">Root Canals</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#services">Emergencies</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
<p>© 2024 Pines Palm Dental. All Rights Reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
