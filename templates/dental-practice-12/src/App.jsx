import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileClose = document.getElementById('mobile-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = mobileMenu.classList.contains('opacity-0');
            if (isHidden) {
                // Open
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                // Close
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
        }

        mobileToggle.addEventListener('click', toggleMenu);
        mobileClose.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-sky-950 text-sky-50 text-xs font-medium py-2 px-4 border-b border-sky-900">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-sky-400 text-sm" icon="solar:bell-linear"></iconify-icon>
                    Emergency Dentistry Available
                </span>
<span className="hidden sm:inline text-sky-800">|</span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-sky-400 text-sm" icon="solar:map-point-linear"></iconify-icon>
                    3640-7 N Federal Hwy, Suite 7 Lighthouse Point, FL
                </span>
</div>
<div className="flex items-center gap-3">
<span>Cosmetic Dentists Located in Lighthouse Point, FL</span>
</div>
</div>
</div>

<header className="sticky md:p-4 w-full z-50 pt-3 pr-3 pb-3 pl-3 top-0 right-0 left-0">
<nav className="mx-auto max-w-7xl rounded-2xl backdrop-blur-xl border shadow-lg px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#home">
<img alt="FL Dental Spa" className="h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-105" src="https://www.fldentalspa.com/wp-content/uploads/2023/10/flspa340x156.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-sky-600" href="home.html">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-sky-600" href="about.html">About Us</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-sky-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-sky-600" href="https://www.flradiancespa.com/" target="_blank">Aesthetics</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-sky-600" href="#contact">Contact Us</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors" href="tel:9549417778">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    954-941-7778
                </a>
<a className="inline-flex items-center gap-2 bg-sky-500 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:bg-sky-600 text-white" href="https://app.nexhealth.com/appt/floridadentalspa" target="_blank">
                    Book Online
                </a>
</div>

<button className="lg:hidden z-50 text-slate-900 pt-1 pr-1 pb-1 pl-1 relative" id="mobile-toggle">
<iconify-icon className="" height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed flex flex-col bg-white/95 z-40 pt-6 pr-6 pb-6 pl-6 top-0 right-0 bottom-0 left-0 backdrop-blur-xl space-y-8 items-center justify-center opacity-0 pointer-events-none" id="mobile-menu">

<button className="absolute top-6 right-6 text-slate-500 hover:text-slate-900" id="mobile-close">
<iconify-icon className="" height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#home">Home</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#about">About Us</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="https://www.flradiancespa.com/" target="_blank">Aesthetics</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#contact">Contact Us</a>
<hr className="w-12 border-slate-200"/>
<a className="flex items-center gap-2 text-xl font-medium text-sky-600" href="tel:9549417778">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
    954-941-7778
  </a>
<a className="mobile-link shadow-sky-500/20 font-medium text-white text-center bg-sky-500 w-full max-w-xs rounded-xl pt-4 pb-4 shadow-lg" href="https://app.nexhealth.com/appt/floridadentalspa" target="_blank">
    Book Online
  </a>
</div>
</header>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="FL Dental Spa Location" className="w-full h-full object-cover" src="https://www.fldentalspa.com/wp-content/uploads/2023/11/dji_0103-harley-bjork-1500x630.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
<span className="text-xs font-semibold text-sky-50 tracking-wide uppercase">Cosmetic Dentists in Lighthouse Point</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] text-white">
                    Welcome to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">FL Dental Spa</span>
</h1>
<p className="text-lg text-slate-200 font-medium leading-relaxed max-w-lg">
                    From its convenient location in the beautiful Venetian Isles Shopping Center, FL Dental Spa serves patients from the Broward County community and the surrounding area.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-sky-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-1 hover:bg-sky-600 text-white" href="https://app.nexhealth.com/appt/floridadentalspa" target="_blank">
                        Book Online
                        <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-slate-900 border-white/20" href="#about">
                        About Our Office
                    </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
<div className="flex items-center gap-2 text-white/90">
<iconify-icon className="text-sky-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Same Day Crowns</span>
</div>
<div className="flex items-center gap-2 text-white/90">
<iconify-icon className="text-sky-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Invisalign</span>
</div>
<div className="flex items-center gap-2 text-white/90">
<iconify-icon className="text-sky-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Laser Dentistry</span>
</div>
<div className="flex items-center gap-2 text-white/90">
<iconify-icon className="text-sky-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Dental Implants</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                    Comprehensive <span className="text-sky-600">Dental Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    FL Dental Spa offers a complete menu of general and cosmetic dentistry services, including routine exams, cleanings, extractions, and much more.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Invisalign</h3>
<p className="text-sm text-slate-500 leading-relaxed">Invisalign is a state-of-the-art orthodontic system that uses a series of clear plastic aligner trays to straighten your teeth discretely and comfortably.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Cerec Same Day Crowns</h3>
<p className="text-sm text-slate-500 leading-relaxed">Imagine a chipped tooth or cracked molar casting a shadow over your day. CEREC is a revolutionary technology offering a shining solution: same-day crowns.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Laser Dentistry</h3>
<p className="text-sm text-slate-500 leading-relaxed">Imagine a wand, not a drill, gently sculpting your tooth or reshaping gum tissue. That's the power of laser dentistry for a healthier smile with minimal discomfort.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Dental Implants</h3>
<p className="text-sm text-slate-500 leading-relaxed">Designed to take the place of a single tooth or several teeth. Implants mimic natural teeth in appearance and functionality, preserving structural facial integrity.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Veneers &amp; Whitening</h3>
<p className="text-sm text-slate-500 leading-relaxed">Veneers are thin covers placed over the front of your teeth to hide imperfections. Paired with our professional whitening, achieve a conventionally beautiful smile.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-900/5 transition-all group">
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Botox &amp; Juvederm</h3>
<p className="text-sm text-slate-500 leading-relaxed">Seeking a more radiant and youthful version of yourself? Our expert cosmetic dentists specialize in Juvéderm and other cutting-edge dermal fillers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-sky-600 font-semibold tracking-wide uppercase text-sm">About Our Practice</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-4 mb-6 text-slate-900">
                        Welcome to <span className="text-sky-500">FL Dental Spa</span>
</h2>
<p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                        The practice is owned and operated by Dr. Gregory Gertsen and Dr. Michael Gertsen, a father-son dental team with decades of collective experience. We offer a state-of-the-art approach to general and cosmetic dentistry.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="p-2 bg-white rounded-lg shadow-sm text-sky-500">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Cosmetic Excellence</h4>
<p className="text-sm text-slate-500 mt-1">From single-visit crowns to high-end veneers and professional teeth whitening, we craft radiant smiles.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="p-2 bg-white rounded-lg shadow-sm text-sky-500">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Emergency Dentistry</h4>
<p className="text-sm text-slate-500 mt-1">We are proud to offer emergency services that will help put your mind at ease and resolve the situation rapidly.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-900/10 border-4 border-white aspect-video bg-slate-100">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/5GCAegzAErQ?autoplay=0&amp;controls=1&amp;mute=0" title="FL Dental Spa Walk Through Tour"></iframe>
</div>

<div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-8 backdrop-blur-xl p-5 rounded-3xl shadow-2xl flex items-start gap-4 bg-white/95 max-w-sm border border-slate-100 z-10 hidden sm:flex">
<div className="p-3 rounded-full bg-sky-100 text-sky-600 shrink-0">
<iconify-icon icon="solar:chat-round-like-linear" width="24"></iconify-icon>
</div>
<div>
<img alt="5 Stars" className="h-4 w-auto mb-2" src="https://www.fldentalspa.com/wp-content/uploads/2023/03/stars.png"/>
<p className="font-medium text-slate-800 text-sm leading-relaxed mb-2">"Dr. Gregory Gertsen is a wonderful dentist! He has extensive experience and is very knowledgeable..."</p>
<p className="text-xs font-bold uppercase tracking-wider text-sky-600">- Lynn M.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-950 text-white rounded-t-[3rem]" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Visit Our Office</h2>
<p className="text-sky-100/80 text-lg">Conveniently located in the beautiful Venetian Isles Shopping Center.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-sky-900/50 flex items-center justify-center text-sky-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold">Address</h3>
<p className="text-sky-100/70">3640-7 N Federal Hwy, Suite 7<br/>Lighthouse Point, FL 33064</p>
<a className="text-sm font-medium text-sky-400 mt-2 inline-flex items-center gap-1 hover:text-white transition-colors" href="https://maps.app.goo.gl/ikxQL1RKeLHeejrL8" target="_blank">
                                    Get Directions on Google Maps <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-sky-900/50 flex items-center justify-center text-sky-400 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold">Phone</h3>
<p className="text-sky-100/70">Call us to schedule or for emergencies:</p>
<a className="text-xl font-bold text-white mt-1 block hover:text-sky-400 transition-colors" href="tel:9549417778">954-941-7778</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-sky-900/50 flex items-center justify-center text-sky-400 shrink-0">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold">Email</h3>
<a className="text-sky-100/70 hover:text-white transition-colors" href="mailto:staff@fldentalspa.com">staff@fldentalspa.com</a>
</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-sky-400 text-3xl" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-2xl font-semibold">Business Hours</h3>
</div>
<ul className="space-y-4 text-sky-50/90 text-sm md:text-base">
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Monday</span>
<span className="font-medium">8:30 am - 5:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Tuesday</span>
<span className="font-medium">8:30 am - 5:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Wednesday</span>
<span className="font-medium">8:30 am - 5:00 pm</span>
</li>
<li className="flex justify-between border-b border-white/10 pb-3">
<span>Thursday</span>
<span className="font-medium">8:30 am - 5:00 pm</span>
</li>
<li className="flex justify-between text-sky-400 border-b border-white/10 pb-3">
<span>Friday</span>
<span className="font-medium">Closed</span>
</li>
<li className="flex justify-between text-sky-400 border-b border-white/10 pb-3">
<span>Saturday</span>
<span className="font-medium">Closed</span>
</li>
<li className="flex justify-between text-sky-400">
<span>Sunday</span>
<span className="font-medium">Closed</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/10">
<a className="w-full inline-flex justify-center items-center gap-2 bg-white/10 text-white hover:bg-white/20 transition-colors py-3 rounded-xl text-sm font-medium" href="https://forms.goenlive.com/p/kc2adQRFPe/" target="_blank">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                            Access Patient Forms
                         </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="book">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Request an Appointment</h2>
<p className="text-slate-500 mt-2">Fill out the form below or <a className="text-sky-600 font-semibold hover:underline" href="https://app.nexhealth.com/appt/floridadentalspa" target="_blank">Book Online instantly via NexHealth</a>.</p>
</div>
<form className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100 space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address</label>
<input className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date</label>
<input className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Reason for Visit</label>
<select className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50 appearance-none">
<option>General Checkup / Cleaning</option>
<option>Cosmetic Consultation (Veneers, Whitening)</option>
<option>Botox &amp; Juvederm</option>
<option>Implants / Surgery</option>
<option>Invisalign</option>
<option>Tooth Pain / Emergency</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">Message (Optional)</label>
<textarea className="w-full border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-all bg-slate-50" placeholder="Any specific concerns?" rows="3"></textarea>
</div>
<button className="w-full bg-sky-500 text-white font-semibold text-lg py-3.5 rounded-xl shadow-lg shadow-sky-500/20 hover:bg-sky-600 transition-all flex items-center justify-center gap-2" type="button">
                    Submit Request
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<a className="block mb-2" href="#home">
<img alt="FL Dental Spa" className="h-10 w-auto" src="https://www.fldentalspa.com/wp-content/uploads/2023/10/flspa340x156.png"/>
</a>
<p className="text-slate-500 text-sm leading-relaxed">
                        FL Dental Spa is a state-of-the-art general and cosmetic dental practice in Lighthouse Point, Florida.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-sky-50 hover:text-sky-600 transition-colors" href="https://www.facebook.com/FLDentalSpa/" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-sky-50 hover:text-sky-600 transition-colors" href="https://www.instagram.com/fldentalspa/" target="_blank">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon> 
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-sky-50 hover:text-sky-600 transition-colors" href="https://twitter.com/i/flow/login?redirect_after_login=%2Ffldentalspa" target="_blank">
<iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-sky-50 hover:text-sky-600 transition-colors" href="https://maps.app.goo.gl/ikxQL1RKeLHeejrL8" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-sky-600" href="#home">Home</a></li>
<li><a className="hover:text-sky-600" href="#about">About Us</a></li>
<li><a className="hover:text-sky-600" href="#services">Dentistry Services</a></li>
<li><a className="hover:text-sky-600" href="https://www.flradiancespa.com/" target="_blank">Aesthetics</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Services</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-sky-600" href="#services">Same Day Crowns</a></li>
<li><a className="hover:text-sky-600" href="#services">Dental Implants</a></li>
<li><a className="hover:text-sky-600" href="#services">Invisalign</a></li>
<li><a className="hover:text-sky-600" href="#services">Botox &amp; Juvederm</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-slate-900 mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-sky-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>3640-7 N Federal Hwy, Suite 7<br/>Lighthouse Point, FL 33064</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-sky-500" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-sky-600" href="tel:9549417778">954-941-7778</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-sky-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-sky-600 break-all" href="mailto:staff@fldentalspa.com">staff@fldentalspa.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
<p>© 2024 FL Dental Spa. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-sky-600" href="#home">Sitemap</a>
<a className="hover:text-sky-600" href="#home">Terms of Use</a>
<a className="hover:text-sky-600" href="#home">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
