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
        const closeBtn = document.getElementById('close-menu-btn');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            document.body.classList.toggle('overflow-hidden');
        }

        btn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', toggleMenu));
    
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
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/40 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-purple-600 p-2 rounded-lg group-hover:bg-purple-700 transition-colors text-white shadow-lg shadow-purple-200">
<iconify-icon height="20" icon="solar:tooth-bold" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm md:text-base font-bold tracking-tight text-slate-900 leading-none">Deborah A. Flynn-Nyktas, DMD</span>
<span className="text-[10px] md:text-xs font-medium text-purple-600 uppercase tracking-wider hidden sm:block">Summit Family &amp; Cosmetic Dentist</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-600" href="#services">Procedures</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-600" href="#about">Dr. Flynn-Nyktas</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-600" href="#reviews">Reviews</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-purple-600" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-purple-600 transition-colors" href="tel:908-522-1155">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (908) 522-1155
                </a>
<a className="inline-flex items-center gap-2 bg-purple-600 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:bg-purple-700 text-white hover:-translate-y-0.5" href="#book">
                    Book Online
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-slate-800 p-2 hover:bg-slate-100 rounded-full transition-colors" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>
</header>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl hidden flex-col pt-24 px-6 gap-6 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-lg font-medium text-slate-900">
<a className="mobile-link py-2 border-b border-slate-100" href="#">Home</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#services">Procedures</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#about">About Dr. Flynn-Nyktas</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#reviews">Testimonials</a>
<a className="mobile-link py-2 border-b border-slate-100" href="#contact">Contact Us</a>
</div>
<div className="flex flex-col gap-4 mt-4">
<a className="w-full justify-center inline-flex items-center gap-2 bg-slate-100 text-slate-900 px-5 py-3 rounded-xl font-semibold" href="tel:908-522-1155">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon> Call (908) 522-1155
            </a>
<a className="w-full justify-center inline-flex items-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-purple-200" href="#book">
                Book Appointment
            </a>
</div>
<button className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-600" id="close-menu-btn">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-3xl bg-purple-100/60 pointer-events-none"></div>
<div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full blur-3xl bg-teal-50/60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Smile with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400">Confidence.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Dr. Deborah Flynn-Nyktas provides top-rated cosmetic and family dentistry in Summit, NJ. Experience advanced care designed for your comfort since 1991.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex justify-center items-center gap-2 bg-purple-600 text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-purple-600/20 hover:shadow-purple-600/40 hover:-translate-y-1 hover:bg-purple-700 text-white" href="#book">
                            Request Appointment
                            <iconify-icon icon="solar:calendar-add-bold" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-semibold px-8 py-4 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-purple-200 hover:text-purple-700" href="tel:908-522-1155">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            (908) 522-1155
                        </a>
</div>

<div className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start">
<div className="flex -space-x-4">

<div className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
<img alt="Patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
<img alt="Patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="w-12 h-12 rounded-full border-4 border-white bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs">
                                500+
                            </div>
</div>
<div className="text-left">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-semibold text-slate-700">Top Rated on Google</p>
</div>
</div>
</div>

<div className="relative mt-10 lg:mt-0">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-900/10 group">

<img alt="Dr. Deborah Flynn-Nyktas Office" className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-3xl shadow-lg flex items-center justify-between bg-white/90 border border-white/50">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-purple-600">NJ Top Dentist</p>
<p className="font-bold text-slate-900 leading-tight">Excellence in <br/>Dental Care</p>
</div>
<div className="w-12 h-12 rounded-full bg-teal-400/20 text-teal-600 flex items-center justify-center">
<iconify-icon icon="solar:medal-ribbon-star-bold" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl bg-teal-200/40"></div>
</div>
</div>
</div>
</section>

<section className="py-10 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center divide-x divide-slate-800">
<div className="p-4">
<p className="text-3xl font-bold text-teal-400">30+</p>
<p className="text-sm text-slate-400 mt-1">Years Experience</p>
</div>
<div className="p-4">
<p className="text-3xl font-bold text-purple-400">Summit</p>
<p className="text-sm text-slate-400 mt-1">New Jersey</p>
</div>
<div className="p-4">
<p className="text-3xl font-bold text-teal-400">Top</p>
<p className="text-sm text-slate-400 mt-1">NJ Dentist Award</p>
</div>
<div className="p-4">
<p className="text-3xl font-bold text-purple-400">5.0</p>
<p className="text-sm text-slate-400 mt-1">Google Rating</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-purple-600">Procedures</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From routine cleanings to complete smile makeovers, we offer a full range of services to keep your smile healthy and beautiful.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">General Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Preventive care to maintain optimal oral health, including cleanings, exams, and oral cancer screenings.
                    </p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Dental Cleanings &amp; Exams</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Root Canal Therapy</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Tooth Extractions</li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon className="text-purple-600" icon="solar:stars-minimalistic-bold" width="100"></iconify-icon>
</div>
<div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Cosmetic Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Enhance the appearance of your smile with our advanced cosmetic treatments.
                    </p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Invisalign® Clear Aligners</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Zoom! Teeth Whitening</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Lumineers &amp; Bonding</li>
</ul>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-purple-900/5 transition-all duration-300 relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:widget-add-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900">Restorative Care</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Repair damaged or missing teeth to restore function and aesthetics.
                    </p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Implant Restorations</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Ceramic Crowns &amp; Bridges</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Composite Fillings</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors" href="#book">
                    View Full Procedure List <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-purple-900/10">

<img alt="Dr. Deborah Flynn-Nyktas" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-slate-100">
<p className="text-purple-600 font-bold text-lg">Since 1991</p>
<p className="text-slate-600 text-sm">Serving the Summit community with dedicated care.</p>
</div>
</div>
<div className="space-y-6">
<span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Meet Your Dentist</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Dr. Deborah A. <br/>Flynn-Nyktas, DMD</h2>
<div className="prose prose-slate text-lg text-slate-500 font-medium">
<p>
                            Dr. Flynn-Nyktas has been offering the absolute best in cosmetic, family, and restorative dentistry to the Summit, NJ area since 1991. She knows how important your smile is to not only how you look, but how you feel too.
                        </p>
<p className="mt-4">
                            We are dedicated to improving both by utilizing the most modern dental techniques and technology available, ensuring your visit is comfortable, affordable, and effective.
                        </p>
</div>
<div className="pt-4 flex flex-wrap gap-4">
<div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
<span className="block text-slate-900 font-bold">NJ Top Dentist</span>
<span className="text-xs text-slate-500">Awarded</span>
</div>
<div className="bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
<span className="block text-slate-900 font-bold">ADA Member</span>
<span className="text-xs text-slate-500">Affiliation</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-purple-900 text-white relative rounded-t-[3rem] overflow-hidden" id="reviews">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold mb-6">Patient Stories</h2>
<div className="flex justify-center gap-1 text-teal-400 mb-4">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<p className="text-purple-200 text-lg">Rated 5.0/5.0 based on Google Reviews</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-purple-800/50 p-8 rounded-3xl border border-purple-700/50 backdrop-blur-sm">
<p className="leading-relaxed italic text-purple-100 mb-6">"Dr. Flynn-Nyktas is absolutely wonderful. The office is clean, modern, and the staff makes you feel right at home. My smile has never looked better!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white">S</div>
<div>
<p className="font-bold">Sarah M.</p>
<p className="text-xs text-purple-300">Google Review</p>
</div>
</div>
</div>

<div className="bg-purple-800/50 p-8 rounded-3xl border border-purple-700/50 backdrop-blur-sm">
<p className="leading-relaxed italic text-purple-100 mb-6">"Best dentist in Summit! I was nervous about my root canal but the team made it painless. Highly recommend for anyone looking for a new dentist."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white">J</div>
<div>
<p className="font-bold">James T.</p>
<p className="text-xs text-purple-300">Google Review</p>
</div>
</div>
</div>

<div className="bg-purple-800/50 p-8 rounded-3xl border border-purple-700/50 backdrop-blur-sm">
<p className="leading-relaxed italic text-purple-100 mb-6">"I've been coming here for years. The Invisalign treatment changed my life. Thank you Dr. Flynn-Nyktas!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white">A</div>
<div>
<p className="font-bold">Amanda R.</p>
<p className="text-xs text-purple-300">Google Review</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 bg-white text-purple-900 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors" href="#">
                    Read All Reviews
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Visit Us In Summit</h2>
<p className="text-lg text-slate-500">Conveniently located on Tulip Street. We look forward to seeing your smile.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-purple-50 text-purple-600">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Address</h4>
<p className="text-slate-500">7 Tulip Street, Summit, NJ 07901</p>
<a className="text-purple-600 text-sm font-semibold mt-1 inline-block hover:underline" href="https://maps.google.com/?q=7+Tulip+Street,+Summit,+NJ" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-purple-50 text-purple-600">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Phone</h4>
<p className="text-slate-500">908-522-1155</p>
<p className="text-xs text-slate-400 mt-1">Call for office hours</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-purple-50 text-purple-600">
<iconify-icon icon="solar:letter-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Email</h4>
<a className="text-slate-500 hover:text-purple-600 transition-colors" href="mailto:pearlywhites4u@gmail.com">pearlywhites4u@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-xl shadow-purple-900/5 border border-purple-100">
<h3 className="text-2xl font-bold text-slate-900 mb-6">Request Appointment</h3>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" placeholder="(908) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Reason for Visit</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all appearance-none">
<option>General Checkup / Cleaning</option>
<option>Tooth Pain / Emergency</option>
<option>Cosmetic / Whitening</option>
<option>Invisalign Consult</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Time</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 hover:border-purple-300">
<input className="accent-purple-600" name="time" type="radio"/>
<span className="text-sm">Morning</span>
</label>
<label className="flex items-center gap-2 cursor-pointer bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 hover:border-purple-300">
<input className="accent-purple-600" name="time" type="radio"/>
<span className="text-sm">Afternoon</span>
</label>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all" placeholder="Any specific concerns?" rows="3"></textarea>
</div>
<button className="w-full bg-purple-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-purple-600/20 hover:bg-purple-700 hover:shadow-purple-600/40 transition-all flex items-center justify-center gap-2" type="button">
                            Send Request
                            <iconify-icon icon="solar:plain-3-bold"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-2">By submitting, you consent to receive communications from our office.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<div className="flex items-center gap-2 text-slate-900 font-bold text-xl">
<div className="bg-purple-600 p-1.5 rounded-lg text-white">
<iconify-icon icon="solar:tooth-bold"></iconify-icon>
</div>
                        Swarnim
                    </div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Dr. Deborah Flynn-Nyktas<br/>
                        Summit Family and Cosmetic Dentist.<br/>
                        Dedicated to improving smiles since 1991.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-bold"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-purple-600 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#about">About Dr. Flynn-Nyktas</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#services">Procedures</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#reviews">Testimonials</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4">Procedures</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-purple-600 transition-colors" href="#">Invisalign</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Zoom! Whitening</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Root Canals</a></li>
<li><a className="hover:text-purple-600 transition-colors" href="#">Crowns &amp; Bridges</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-purple-600" icon="solar:map-point-linear"></iconify-icon>
<span>7 Tulip Street<br/>Summit, NJ 07901</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-purple-600" icon="solar:phone-calling-linear"></iconify-icon>
<span>(908) 522-1155</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-purple-600" icon="solar:letter-linear"></iconify-icon>
<span>pearlywhites4u@gmail.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
<p>© 2024 Deborah A. Flynn-Nyktas, DMD. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-purple-600" href="#">Privacy Policy</a>
<a className="hover:text-purple-600" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
