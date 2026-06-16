import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function openMenu() {
            mobileMenu.classList.remove('menu-hidden');
            mobileMenu.classList.add('menu-visible');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeMenu() {
            mobileMenu.classList.remove('menu-visible');
            mobileMenu.classList.add('menu-hidden');
            document.body.style.overflow = ''; // Restore scrolling
        }

        menuBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-white py-2.5 px-4 text-xs font-medium relative z-50">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 text-emerald-300">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon> Voted Best of Essex 2025
                </span>
<span className="hidden sm:inline text-slate-600">|</span>
<a className="hover:text-emerald-300 transition-colors flex items-center gap-1.5" href="https://maps.app.goo.gl/M6cxFecdSk8psgsKA" target="_blank">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> 148 Central Ave, Montclair, NJ
                </a>
</div>
<a className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors" href="tel:9737449330">
<iconify-icon icon="solar:phone-linear"></iconify-icon> (973) 744-9330
            </a>
</div>
</div>

<header className="sticky top-0 left-0 right-0 z-40 w-full p-4 md:p-6 transition-all duration-300">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-slate-900 p-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors text-white">
<iconify-icon height="24" icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">Edgemont</span>
<span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">Dental Arts</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#doctor">Dr. Davidson</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#new-patients">New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 bg-emerald-600 text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:bg-emerald-700 text-white" href="#book">
                    Book Appointment
                    <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</a>
<button aria-label="Open Menu" className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors" id="menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
</header>

<div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl menu-hidden lg:hidden flex flex-col p-6" id="mobile-menu">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-2">
<div className="bg-emerald-600 p-1.5 rounded-lg text-white">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-bold text-slate-900">Edgemont</span>
</div>
<button className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 rounded-full" id="close-menu">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-6 text-lg font-medium text-slate-800">
<a className="mobile-link border-b border-slate-100 pb-4" href="#">Home</a>
<a className="mobile-link border-b border-slate-100 pb-4" href="#services">Services</a>
<a className="mobile-link border-b border-slate-100 pb-4" href="#doctor">About Dr. Davidson</a>
<a className="mobile-link border-b border-slate-100 pb-4" href="#new-patients">New Patients</a>
<a className="mobile-link border-b border-slate-100 pb-4" href="#contact">Contact &amp; Location</a>
</div>
<div className="mt-auto space-y-4">
<a className="mobile-link flex justify-center items-center gap-2 w-full bg-emerald-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-emerald-600/20" href="#book">
                Book Online
                <iconify-icon icon="solar:calendar-linear"></iconify-icon>
</a>
<a className="flex justify-center items-center gap-2 w-full bg-slate-100 text-slate-900 font-semibold py-4 rounded-xl" href="tel:9737449330">
                Call (973) 744-9330
            </a>
</div>
</div>

<section className="relative pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                        Montclair's <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Healthy Smiles</span> Start Here.
                    </h1>
<p className="text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
                        Award-winning dental care dedicated to your health and comfort. Dr. Michael Davidson and his team provide world-class family and implant dentistry.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-600 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:-translate-y-1 hover:bg-emerald-700 text-white" href="#book">
                            Request Appointment
                        </a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-200 hover:text-emerald-700" href="tel:9737449330">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                            (973) 744-9330
                        </a>
</div>

<div className="pt-6 border-t border-slate-100 flex items-center gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400 text-xl" icon="solar:cup-star-bold"></iconify-icon>
<span>Best of Essex 2025</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span>Insurance Accepted</span>
</div>
</div>
</div>

<div className="relative mt-8 lg:mt-0">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/5] lg:aspect-square">

<img alt="Edgemont Dental Arts Team" className="w-full h-full object-cover" src="https://edgemont.dental/wp-content/uploads/home-banner-bg-video-poster-img.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/90 p-5 rounded-2xl shadow-lg border border-white/50">
<div className="flex items-center gap-4">
<div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Patient Promise</p>
<p className="font-semibold text-slate-900">Comfortable, Anxiety-Free Care</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-emerald-600">Dental Care</span>
</h2>
<p className="text-lg text-slate-500">
                    From routine checkups to complex restorations, we use advanced technology to ensure precise results.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Preventative Care</h3>
<p className="text-slate-500 leading-relaxed mb-4">Cleanings, checkups, and periodontal therapy to keep your smile healthy for life.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:screw-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Implants</h3>
<p className="text-slate-500 leading-relaxed mb-4">The gold standard for replacing missing teeth. Restore function and aesthetics.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-4">Porcelain veneers, teeth whitening, and bonding for your dream smile.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:crown-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Restorative</h3>
<p className="text-slate-500 leading-relaxed mb-4">Crowns, bridges, and dentures designed to look and feel natural.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Care</h3>
<p className="text-slate-500 leading-relaxed mb-4">Urgent appointments available for toothaches and dental injuries.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sleeping-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Sedation Dentistry</h3>
<p className="text-slate-500 leading-relaxed mb-4">We offer options to help anxious patients feel completely at ease.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="doctor">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2 relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
<img alt="Dr. Michael Davidson" className="w-full h-auto object-cover" src="https://edgemont.dental/wp-content/uploads/home-testimonials-doctor-img.webp"/>

<div className="absolute top-6 right-6 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border-4 border-emerald-50">
<div className="text-center">
<span className="block text-xl font-bold text-emerald-600">#1</span>
<span className="text-[10px] font-bold text-slate-600 uppercase">Essex<br/>County</span>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 space-y-6">
<span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Meet The Doctor</span>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900">Dr. Michael Davidson</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                        Dr. Davidson started Edgemont Dental Arts with a singular focus: to deliver dentistry with integrity, compassion, and to practice to the highest academic standards.
                    </p>
<p className="text-slate-500 leading-relaxed">
                        As a board-certified implant surgeon and voted "Best Dentist in Essex County," Dr. Davidson believes care should be comfortable and affordable. Our clinic adheres to the highest industry standards so you can be certain you are getting world-class health care.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700" href="#book">
                            Book with Dr. Davidson 
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white rounded-t-[3rem] lg:rounded-t-[4rem]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-bold mb-8">Visit Our Office</h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold mb-2">Montclair, NJ</h3>
<p className="text-slate-400 mb-4">148 Central Ave<br/>Montclair, NJ 07042</p>
<a className="text-sm font-medium border-b border-emerald-500/30 pb-0.5 hover:text-emerald-400 transition-colors" href="https://maps.app.goo.gl/M6cxFecdSk8psgsKA" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-800 rounded-xl text-emerald-400 shrink-0">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold mb-2">Office Hours</h3>
<ul className="space-y-2 text-slate-400 text-sm">
<li className="flex justify-between w-48"><span>Mon &amp; Thu</span> <span>8:30 - 5:30</span></li>
<li className="flex justify-between w-48"><span>Tuesday</span> <span>11:00 - 7:00</span></li>
<li className="flex justify-between w-48"><span>Wednesday</span> <span>8:30 - 12:00</span></li>
<li className="flex justify-between w-48"><span>Saturday</span> <span>8:30 - 1:00</span></li>
</ul>
</div>
</div>
</div>
</div>

<div className="h-full min-h-[400px] rounded-3xl overflow-hidden bg-slate-800 relative group">

<img alt="Office Exterior" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://edgemont.dental/wp-content/uploads/about-img2-1.webp"/>
<div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
<span className="text-sm font-medium">Across from Edgemont Memorial Park</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="new-patients">
<div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12">
<div className="text-center mb-10">
<span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">Online Scheduling</span>
<h2 className="text-3xl md:text-4xl font-bold mt-2 text-slate-900">Request An Appointment</h2>
<p className="text-slate-500 mt-4 max-w-lg mx-auto">
                        New patients welcome! Fill out the form below and our front desk will contact you to confirm your time.
                    </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="(973) 555-0123" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Reason for Visit</label>
<div className="relative">
<select className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all appearance-none cursor-pointer">
<option>New Patient Exam</option>
<option>Cleaning</option>
<option>Tooth Pain / Emergency</option>
<option>Implants / Restoration</option>
<option>Cosmetic Consultation</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Day &amp; Time</label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="e.g. Tuesday Mornings" type="text"/>
</div>
<div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 text-xs text-emerald-800 flex items-start gap-2">
<iconify-icon className="text-base shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p>Note: Submitting this form will automatically notify our staff via email. We will call you to finalize the appointment.</p>
</div>
<button className="w-full bg-emerald-600 text-white font-bold text-lg py-4 rounded-xl shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all flex items-center justify-center gap-2" type="button">
                        Send Request
                        <iconify-icon className="text-2xl" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>

<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900">Insurance &amp; Financing</h3>
</div>
<p className="text-sm text-slate-500 mb-4">We accept most major dental plans and offer CareCredit financing.</p>
<a className="text-sm font-semibold text-emerald-600 hover:underline" href="#">View Accepted Plans</a>
</div>
<div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h3 className="font-bold text-slate-900">Patient Forms</h3>
</div>
<p className="text-sm text-slate-500 mb-4">Save time by filling out your registration forms before your visit.</p>
<a className="text-sm font-semibold text-emerald-600 hover:underline" href="#">Download Forms</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-2xl bg-slate-50 open:bg-white open:shadow-lg open:ring-1 open:ring-slate-100 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold marker:content-none">
                        Do you accept dental insurance?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes, we accept most major dental insurance plans. Please contact our front desk with your specific plan details, and we will verify your coverage for you.
                    </div>
</details>
<details className="group rounded-2xl bg-slate-50 open:bg-white open:shadow-lg open:ring-1 open:ring-slate-100 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold marker:content-none">
                        How often should I get a check-up?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        We recommend visiting Edgemont Dental Arts every six months for a routine check-up and cleaning to maintain optimal oral health and catch any issues early.
                    </div>
</details>
<details className="group rounded-2xl bg-slate-50 open:bg-white open:shadow-lg open:ring-1 open:ring-slate-100 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-semibold marker:content-none">
                        Do you offer emergency appointments?
                        <iconify-icon className="group-open:rotate-180 transition-transform text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes. If you are experiencing pain or have a dental injury, please call us immediately at (973) 744-9330. We prioritize emergency cases.
                    </div>
</details>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-white border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-emerald-600 p-1.5 rounded-lg text-white">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900">Edgemont</span>
</a>
<p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Dr. Davidson started Edgemont Dental Arts to deliver dentistry with integrity, compassion, and the highest academic standards.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all bg-white border-slate-200 text-slate-400 hover:text-white" href="https://www.facebook.com/drmdavidson/" target="_blank">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all bg-white border-slate-200 text-slate-400 hover:text-white" href="https://www.instagram.com/drmdavidson/" target="_blank">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-emerald-600 shrink-0 text-lg" icon="solar:map-point-linear"></iconify-icon>
<span>148 Central Ave<br/>Montclair, NJ 07042</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-emerald-600 shrink-0 text-lg" icon="solar:phone-linear"></iconify-icon>
<span>(973) 744-9330</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium text-sm">
<iconify-icon className="text-emerald-600 shrink-0 text-lg" icon="solar:letter-linear"></iconify-icon>
<span>frontdesk@edgemont.dental</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Services</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li><a className="hover:text-emerald-600 transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Periodontal Therapy</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Office Hours</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li className="flex justify-between"><span>Mon, Thu</span> <span className="text-slate-900">8:30 - 5:30</span></li>
<li className="flex justify-between"><span>Tuesday</span> <span className="text-slate-900">11:00 - 7:00</span></li>
<li className="flex justify-between"><span>Wednesday</span> <span className="text-slate-900">8:30 - 12:00</span></li>
<li className="flex justify-between"><span>Saturday</span> <span className="text-slate-900">8:30 - 1:00</span></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-xs">© 2026 Edgemont Dental Arts. All Rights Reserved.</p>
<div className="flex gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-emerald-600" href="#">Privacy Policy</a>
<a className="hover:text-emerald-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
