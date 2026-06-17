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
dental: {
50: '#F0F9F9',
100: '#E0F2F2',
500: '#2A8C8C', // Muted Teal
900: '#112828', // Deep Green/Black
},
surface: '#FAFAFA'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl tracking-tighter text-gray-900 font-medium z-50 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:health-linear" width="18"></iconify-icon>
</div>
                DR. C. JAGADEESH
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-black transition-colors" href="#about">About</a>
<div className="group relative cursor-pointer py-4">
<span className="hover:text-black transition-colors flex items-center gap-1">
                        Services <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</span>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 p-2">
<a className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-500 hover:text-black transition-colors" href="#general">General Dentistry</a>
<a className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-500 hover:text-black transition-colors" href="#cosmetic">Cosmetic</a>
<a className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-500 hover:text-black transition-colors" href="#ortho">Orthodontics</a>
<a className="block px-4 py-2 hover:bg-gray-50 rounded-lg text-gray-500 hover:text-black transition-colors" href="#surgical">Surgical</a>
</div>
</div>
<a className="hover:text-black transition-colors" href="#doctors">Doctors</a>
<a className="hover:text-black transition-colors" href="#testimonials">Testimonials</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-black transition-colors" href="tel:+918197093444">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                    +91 81970 93444
                </a>
<a className="px-5 py-2.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 tracking-wide" href="#contact">
                    Book Appointment
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Dental Clinic" className="w-full h-full object-cover object-center opacity-40 grayscale" src="https://images.squarespace-cdn.com/content/v1/5d3b3ed8084b6f00015405ba/1565894754450-WS80DFXY4IPD2YN9LCI8/landing-full-topleft-01.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm mb-8 fade-in-up">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-widest text-gray-500">Accepting New Patients</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tighter leading-[1.1] mb-6 fade-in-up delay-100">
                Advanced, precise, and <br/> <span className="text-gray-400">gentle dental care.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto mb-10 fade-in-up delay-200 leading-relaxed">
                For over 30 years, Dr. C Jagadeesh’s Dental Clinic has combined global technology with a compassionate approach in Indiranagar.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="w-full md:w-auto px-8 py-3.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Schedule Visit <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3.5 bg-white border border-gray-200 text-gray-900 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center" href="#services">
                    Explore Services
                </a>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                        A warm legacy built on <br/><span className="text-gray-400">high-end dentistry.</span>
</h2>
<p className="text-gray-500 leading-relaxed mb-6 font-light">
                        My love for people and honest dentistry is the cornerstone of our practice. We never recommend a procedure unless it is required, and always strive to do what is best for the patient. A happy patient makes for a happier doctor.
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
<img alt="Dr Jagadeesh" className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1599485447268-JDLEXBMQ3PS48LZRAJOD/9P9A1776+%28Large%29.jpg"/>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Dr. C Jagadeesh</p>
<p className="text-xs text-gray-500">Managing Director</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
<iconify-icon className="text-3xl text-gray-900 mb-4" icon="solar:calendar-linear"></iconify-icon>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">30+</h3>
<p className="text-xs text-gray-500 mt-1">Years of Excellence</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
<iconify-icon className="text-3xl text-gray-900 mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">15+</h3>
<p className="text-xs text-gray-500 mt-1">Specialist Doctors</p>
</div>
<div className="p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
<iconify-icon className="text-3xl text-gray-900 mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">72h</h3>
<p className="text-xs text-gray-500 mt-1">Full Mouth Implants</p>
</div>
<div className="p-6 bg-gray-900 rounded-2xl border border-gray-900 text-white hover:shadow-lg transition-shadow duration-300 flex flex-col justify-center items-center text-center cursor-pointer group">
<span className="text-sm font-medium group-hover:underline">View Team</span>
<iconify-icon className="mt-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Comprehensive Care</h2>
<p className="text-gray-500 font-light">From routine hygiene to complex surgical procedures, all under one roof.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all" href="#all-services">
                    View all procedures <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-gray-100">
<img alt="Implants" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1599202350464-EPTIXIX125W9WAZ7ZUG3/Dental+Implants"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Dental Implants</h3>
<p className="text-gray-300 text-sm font-light line-clamp-2 mb-4">Natural-looking solutions for missing teeth. Single-tooth and full-mouth implants often completed in 72 hours.</p>
<a className="text-white text-sm border-b border-white/30 w-fit pb-1 hover:border-white transition-colors" href="#">Learn more</a>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-gray-900 font-medium tracking-tight mb-2">Invisalign</h3>
<p className="text-gray-500 text-sm font-light max-w-xs">Clear aligners for a perfect smile without the metal. Comfortable &amp; removable.</p>
</div>
<div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
</div>
<img alt="Invisalign" className="absolute -right-10 -bottom-10 w-48 opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1599202442024-MHMDPUP1TWM5DQ8WE9JD/Invisalign"/>
</div>

<div className="md:col-span-1 md:row-span-1 p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors group">
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-900">
<iconify-icon className="text-xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg text-gray-900 font-medium tracking-tight mb-1">Smile Design</h3>
<p className="text-gray-400 text-xs mb-4">Veneers &amp; Whitening</p>
<a className="inline-flex w-8 h-8 rounded-full border border-gray-200 items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all" href="#">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="md:col-span-1 md:row-span-1 p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors group">
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-900">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg text-gray-900 font-medium tracking-tight mb-1">General Care</h3>
<p className="text-gray-400 text-xs mb-4">Root canals &amp; Fillings</p>
<a className="inline-flex w-8 h-8 rounded-full border border-gray-200 items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all" href="#">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-gray-100" id="doctors">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12 text-center">Meet Our Specialists</h2>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 mb-4 relative">
<img alt="Dr. Tanya" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1765524275525-27R7B2HE18M7YV8LKRJX/Tanya+Chondamma.jpg"/>
</div>
<h3 className="text-sm font-medium text-gray-900">Dr. Tanya Chondamma</h3>
<p className="text-xs text-gray-500">Endodontist</p>
</div>

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 mb-4 relative">
<img alt="Dr. Diganth" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1598352968493-SID2HRYC37RB6ZTSFR1U/9P9A2184.jpg"/>
</div>
<h3 className="text-sm font-medium text-gray-900">Dr. Diganth</h3>
<p className="text-xs text-gray-500">Oral Surgeon</p>
</div>

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 mb-4 relative">
<img alt="Dr. Sudha" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1599485535041-Q4RTZYJZ8R0FIZ9UB85S/9P9A1829+%28Large%29.jpg"/>
</div>
<h3 className="text-sm font-medium text-gray-900">Dr. Sudha Jagadeesh</h3>
<p className="text-xs text-gray-500">Clinical Director</p>
</div>

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 mb-4 relative">
<img alt="Dr. Satvika" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1745498009446-7DAN7T5UVAJ2ZGA0404U/Satvika+Prasad.jpeg"/>
</div>
<h3 className="text-sm font-medium text-gray-900">Dr. Satvika Prasad</h3>
<p className="text-xs text-gray-500">Prosthodontist</p>
</div>

<div className="group">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200 mb-4 relative">
<img alt="Dr. Pooja" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1596094508165-TYH3P1FJK9L4SUIE75YJ/Dr+Pooja+Tatwawadi.jpg"/>
</div>
<h3 className="text-sm font-medium text-gray-900">Dr. Pooja</h3>
<p className="text-xs text-gray-500">Orthodontist</p>
</div>
</div>
<div className="text-center mt-12">
<a className="text-sm text-gray-500 hover:text-black transition-colors border-b border-gray-300 pb-0.5" href="#team">View all 15+ specialists</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Trusted by Leaders</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-surface border border-gray-100 flex items-start gap-6">
<div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/1599485717139-6UO1X6A806J80IUM07HI/testimonial+1+_+Shri+Deve+Gowda.JPG"/>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Shri. H. D. Deve Gowda</h4>
<p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">Former Prime Minister of India</p>
<p className="text-sm text-gray-600 font-light italic">"Dr. Jagadeesh and his team have provided exceptional care for years. Their dedication to patient comfort is remarkable."</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-surface border border-gray-100 flex items-start gap-6">
<div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5f168de061ba823d9aba54ed/a5f01b82-5077-4eca-8d2d-68eb94ce3e4a/IMG_9774.jpg"/>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Shri. Basavaraj Bommai</h4>
<p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">Former Chief Minister of Karnataka</p>
<p className="text-sm text-gray-600 font-light italic">"Advanced technology combined with a personal touch. I highly recommend Dr. Jagadeesh's clinic."</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white pt-24 pb-12 rounded-t-3xl md:mx-4 mt-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to smile <br/>with confidence?</h2>
<p className="text-gray-400 font-light mb-8 max-w-sm">Book your first consultation today. We accept new patients and handle dental emergencies.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors text-center" href="tel:+918197093444">
                            Call +91 81970 93444
                        </a>
<a className="px-8 py-3 border border-gray-700 text-white rounded-full font-medium text-sm hover:border-gray-500 transition-colors flex items-center justify-center gap-2" href="https://api.whatsapp.com/send?phone=918197093444" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> WhatsApp Us
                        </a>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-sm font-medium mb-4 text-gray-300">Indiranagar Clinic</h4>
<address className="text-sm text-gray-500 not-italic leading-relaxed">
                            687, 9th A Main Road,<br/>
                            Near Chinmaya Mission Hospital,<br/>
                            Indiranagar, Bangalore - 560038
                        </address>
<a className="text-xs text-white mt-4 inline-block border-b border-gray-700 pb-0.5" href="#">View on Map</a>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-gray-300">Hours</h4>
<ul className="text-sm text-gray-500 space-y-2">
<li className="flex justify-between"><span>Mon - Sat</span> <span>9am - 6pm</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-lg tracking-tight font-medium">
<iconify-icon className="text-gray-500" icon="solar:health-bold"></iconify-icon>
                    DR. C. JAGADEESH
                </div>
<div className="text-xs text-gray-600 flex gap-6">
<span>© 2025 All rights reserved.</span>
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
