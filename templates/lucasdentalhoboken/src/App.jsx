import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu-overlay");

  function toggleMobileMenu() {
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("opacity-100");
    menu.classList.toggle("pointer-events-none");
    menu.classList.toggle("pointer-events-auto");
  }

  btn.addEventListener("click", toggleMobileMenu);

  document.querySelectorAll("#mobile-menu-overlay a").forEach(link => {
    link.addEventListener("click", toggleMobileMenu);
  });



        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menuOverlay = document.getElementById('mobile-menu-overlay');
        const closeBtn = document.getElementById('mobile-menu-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = menuOverlay.classList.contains('hidden');
            if (isHidden) {
                // Open
                menuOverlay.classList.remove('hidden');
                // Small delay to allow display:flex to apply before opacity transition
                setTimeout(() => {
                    menuOverlay.classList.remove('opacity-0');
                    document.body.style.overflow = 'hidden'; // Prevent scrolling
                }, 10);
            } else {
                // Close
                menuOverlay.classList.add('opacity-0');
                setTimeout(() => {
                    menuOverlay.classList.add('hidden');
                    document.body.style.overflow = '';
                }, 300);
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Simple Form Handler (Frontend Simulation)
        const form = document.getElementById('appointment-form');
        const successMsg = document.getElementById('form-success');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real implementation, you would send data to a backend/email service here
            // Note for Setup: Connect this form to an instant email autoresponder + staff notification email
            form.classList.add('hidden');
            successMsg.classList.remove('hidden');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed md:p-6 z-50 w-full pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<nav className="flex transition-all duration-300 shadow-slate-200/50 bg-neutral-50/0 max-w-7xl border-white/20 border rounded-full mx-auto px-6 py-3 shadow-lg backdrop-blur-xl items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#005fab] p-1.5 rounded-lg group-hover:bg-[#004681] transition-colors text-white">
<img alt="Lucas Dental Logo" className="w-auto h-8 invert-0 brightness-100 scale-150" src="https://lucasdental.com/wp-content/uploads/2022/02/Group-77.png"/>
</div>
</a>

<div className="hidden lg:flex items-center gap-6 xl:gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#005fab]" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#005fab]" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#005fab]" href="#team">Dr. Lucas &amp; Team</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#005fab]" href="#locations">Locations</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#005fab]" href="#new-patients">New Patients</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-[#005fab]" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-semibold text-[#005fab] hover:text-[#004681] flex items-center gap-2" href="tel:2017988899">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (201) 798-8899
                </a>
<a className="inline-flex items-center gap-2 bg-[#005fab] text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:bg-[#004681] text-white" href="#book">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden text-slate-900 relative z-50 p-2" id="mobile-menu-btn">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</nav>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden" id="mobile-menu-overlay">
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#">Home</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#team">Dr. Lucas &amp; Team</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#locations">Locations</a>
<a className="mobile-link text-2xl font-semibold text-slate-900" href="#new-patients">New Patient</a>
<a className="text-xl font-bold text-[#005fab]" href="tel:2017988899">(201) 798-8899</a>
<a className="mobile-link bg-[#005fab] text-white px-8 py-4 rounded-full text-xl font-medium shadow-xl" href="#book">Book Appointment</a>
<button className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900" id="mobile-menu-close">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 text-[#005fab] text-xs font-bold uppercase tracking-wider border border-sky-200">
<span className="flex h-2 w-2 rounded-full bg-[#005fab]"></span> Celebrating 25 Years in Hoboken
                    </div>
<h1 className="lg:text-7xl leading-[1.1] text-4xl font-bold text-slate-900 tracking-tight">
                        Compassionate Care, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005fab] to-[#029fde]">Beautiful Smiles.</span>
</h1>
<p className="md:text-xl leading-relaxed text-sm font-medium italic text-slate-500 max-w-lg">
                        Join the thousands of families who trust Dr. Lucas and her team. We offer world-class cosmetic dentistry, implants, and are New Jersey's premier Invisalign provider.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#005fab] text-base font-medium px-8 py-4 rounded-full transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 hover:bg-[#004681] text-white" href="#book">
                            Book Appointment
                            <iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-4 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-200 hover:text-[#005fab]" href="tel:2017988899">
                            Call (201) 798-8899
                            <iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-6 pt-4 border-t border-slate-100">
<div className="">
<div className="flex gap-1 text-yellow-400 mb-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs font-semibold text-slate-900">4.9/5 Average Rating</p>
</div>
<div className="h-8 w-px bg-slate-200"></div>
<div className="">
<p className="text-2xl font-bold text-[#005fab] leading-none">25+</p>
<p className="text-xs font-semibold text-slate-900 mt-1">Years Experience</p>
</div>
</div>
</div>

<div className="relative lg:h-auto">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 group aspect-[4/5] lg:aspect-square">

<img alt="Dr. Robin Lucas and Team" className="object-center transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://www.hobokengirl.com/wp-content/uploads/2023/01/lucas-dental-1.jpg"/>
<div className="bg-center bg-gradient-to-t via-transparent to-transparent from-[#004681]/80 bg-[url(https://www.hobokengirl.com/wp-content/uploads/2023/01/lucas-dental-1.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
<span className="backdrop-blur-md bg-white/90 text-[#004681] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
<iconify-icon className="" icon="solar:medal-ribbon-star-bold"></iconify-icon> #1 AACA Fellow in NJ
                            </span>
<span className="backdrop-blur-md bg-white/90 text-[#004681] px-3 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
<iconify-icon icon="solar:verified-check-bold"></iconify-icon> Invisalign Platinum
                            </span>
</div>
<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-5 rounded-2xl shadow-lg flex items-center justify-between bg-white/95">
<div className="">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-[#029fde]">Our Promise</p>
<p className="font-bold text-slate-900">We won't stop until you're happy.</p>
</div>
<div className="p-2 rounded-full bg-sky-100 text-[#005fab]">
<iconify-icon className="text-2xl" icon="solar:heart-angle-bold"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-sky-300/30"></div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-16 pb-16 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#029fde] font-bold tracking-wider uppercase text-sm mb-2 block">Comprehensive Care</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                    Our Dental <span className="text-[#005fab]">Services</span>
</h2>
<p className="text-lg font-medium text-slate-500">
                    From routine cleanings to complex smile makeovers, our expert team uses the latest technology to ensure your comfort.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#005fab] flex items-center justify-center mb-6 group-hover:bg-[#005fab] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Invisalign® Clear Aligners</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Dr. Lucas is a Platinum Provider and the only AACA Fellow in NJ. Get the best deal in town including retainers.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#005fab] flex items-center justify-center mb-6 group-hover:bg-[#005fab] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Achieve your dream smile with porcelain veneers, professional whitening, and bonding.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#005fab] flex items-center justify-center mb-6 group-hover:bg-[#005fab] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:balloon-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Pediatric Dentistry</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Our "Blooming Smiles" division provides gentle, fun care specifically designed for children.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#005fab] flex items-center justify-center mb-6 group-hover:bg-[#005fab] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="carbon:assembly-cluster"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Implants</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Restore your smile and function with high-quality, long-lasting dental implants.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#005fab] flex items-center justify-center mb-6 group-hover:bg-[#005fab] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">General &amp; Preventive</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Routine cleanings, deep cleanings, fillings, and comprehensive exams to maintain health.</p>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#005fab] flex items-center justify-center mb-6 group-hover:bg-[#005fab] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:medical-kit-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Restorative Care</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Crowns, bridges, and expert care to repair damaged teeth and restore functionality.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-[#005fab] font-bold hover:text-[#004681] transition-colors" href="#book">
                    View All Services <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">

<img alt="Dr. Robin Lucas" className="w-full h-full object-cover" src="https://www.hobokengirl.com/wp-content/uploads/2022/08/lucas-dental-hoboken-3.jpg"/>
<div className="bg-center bg-gradient-to-b from-stone-400/0 to-[#454545]/80 opacity-75 bg-[url(https://www.hobokengirl.com/wp-content/uploads/2022/08/lucas-dental-hoboken-3.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-8 left-8 text-white">
<p className="-multi text-2xl font-bold text-stone-50">Dr. Robin Lucas</p>
<p className="-multi font-semibold text-sky-200">Founder &amp; Lead Dentist</p>
</div>
</div>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-100 rounded-full -z-10 blur-xl"></div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                        Meet <span className="text-[#005fab]">Dr. Lucas</span> &amp; Her Team
                    </h2>
<div className="space-y-6 text-lg text-slate-500 leading-relaxed">
<p className="">
                            Celebrating <strong className="text-slate-900">25 Years</strong> in Hoboken! In 2000, Dr. Robin Lucas took a leap of faith to join this vibrant community. Her philosophy is simple: actively listen and care for each patient as if they were family.
                        </p>
<p className="">
                            Dr. Lucas is proud to be the <strong className="text-[#005fab]" style={{}}>first Fellow of the American Academy of Clear Aligners (AACA) in New Jersey</strong> and a Platinum Provider for Invisalign. 
                        </p>
<ul className="space-y-3 mt-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#029fde] text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="">30 Years in Practice</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#029fde] text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Board Member of the AACA</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#029fde] text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Mentor for Hoboken School District</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#029fde] font-bold tracking-wider uppercase text-sm mb-2 block">Visit Us</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    Our <span className="text-[#005fab]">Locations</span>
</h2>
<p className="text-lg text-slate-500 font-medium">Serving Hoboken with two convenient offices.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div className="">
<h3 className="text-2xl font-bold text-slate-900">Hoboken Main</h3>
<p className="text-[#005fab] font-medium mt-1">232 Bloomfield St.</p>
</div>
<div className="bg-sky-50 p-3 rounded-xl text-[#005fab]">
<iconify-icon className="text-2xl" icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex gap-3 text-slate-600">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:city-linear"></iconify-icon>
<p className="">232 Bloomfield Street, Hoboken, NJ 07030</p>
</div>
<div className="flex gap-3 text-slate-600">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<div className="">
<p className="">Mon, Tue, Thu: 12pm - 6pm</p>
<p>Wed: 9am - 3pm</p>
<p>Fri: 11am - 5pm</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<a className="flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:border-[#005fab] hover:text-[#005fab] transition-colors" href="https://maps.google.com/maps?q=232+Bloomfield+ST.+Hoboken,+NJ+07030" target="_blank">
                            Directions
                        </a>
<a className="flex items-center justify-center gap-2 bg-[#005fab] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#004681] transition-colors" href="tel:2017988899">
                            Call Now
                        </a>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col h-full">
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="text-2xl font-bold text-slate-900">Hoboken South</h3>
<p className="text-[#005fab] font-medium mt-1">200 Bloomfield St.</p>
</div>
<div className="bg-sky-50 p-3 rounded-xl text-[#005fab]">
<iconify-icon className="text-2xl" icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
<div className="space-y-4 mb-8 flex-grow">
<div className="flex gap-3 text-slate-600">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:city-linear"></iconify-icon>
<p className="">200 Bloomfield Street, Hoboken, NJ 07030</p>
</div>
<div className="flex gap-3 text-slate-600">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<div className="">
<p className="">Mon, Tue, Thu: 12pm - 6pm</p>
<p>Wed: 9am - 3pm</p>
<p>Fri: 11am - 5pm</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<a className="flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:border-[#005fab] hover:text-[#005fab] transition-colors" href="https://maps.google.com/maps?q=200+Bloomfield+Street,+Hoboken,+NJ+07030" target="_blank">
                            Directions
                        </a>
<a className="flex items-center justify-center gap-2 bg-[#005fab] text-white rounded-xl py-3 text-sm font-semibold hover:bg-[#004681] transition-colors" href="tel:2017988899">
                            Call Now
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#004681] rounded-t-[3rem] pt-24 pb-24 relative" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="lg:sticky lg:top-32">
<span className="inline-block px-3 py-1 rounded-full bg-blue-800 text-blue-100 text-xs font-bold uppercase tracking-wider border border-blue-700 mb-6">
                        Easy Scheduling
                    </span>
<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                        Request Your Appointment
                    </h2>
<p className="font-medium mb-10 text-lg text-blue-100 max-w-md leading-relaxed">
                        Fill out the form to request a time. Our staff will contact you shortly to confirm your visit.
                    </p>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 bg-blue-900/50 p-4 rounded-2xl border border-blue-700/50 backdrop-blur-sm">
<div className="bg-white/10 p-3 rounded-xl">
<iconify-icon className="text-2xl text-white" icon="solar:phone-calling-bold"></iconify-icon>
</div>
<div>
<p className="text-sm text-blue-200">Prefer to call?</p>
<a className="text-xl font-bold hover:text-sky-300 transition-colors" href="tel:2017988899">(201) 798-8899</a>
</div>
</div>
</div>
</div>

<div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
<form className="space-y-5" id="appointment-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-semibold ml-1">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#005fab] focus:ring-1 focus:ring-[#005fab] transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold ml-1">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#005fab] focus:ring-1 focus:ring-[#005fab] transition-all" placeholder="(555) 555-5555" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold ml-1">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#005fab] focus:ring-1 focus:ring-[#005fab] transition-all" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-semibold ml-1">Preferred Location</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#005fab] focus:ring-1 focus:ring-[#005fab] appearance-none cursor-pointer">
<option>232 Bloomfield St.</option>
<option>200 Bloomfield St.</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold ml-1">Service Needed</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#005fab] focus:ring-1 focus:ring-[#005fab] appearance-none cursor-pointer">
<option>General Checkup</option>
<option>Invisalign Consult</option>
<option>Cosmetic Consult</option>
<option>Pediatric Visit</option>
<option>Dental Pain / Emergency</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold ml-1">Preferred Day/Time</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#005fab] focus:ring-1 focus:ring-[#005fab] transition-all" placeholder="e.g. Monday Afternoons" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold ml-1">Message (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#005fab] focus:ring-1 focus:ring-[#005fab] transition-all resize-none" placeholder="Tell us about your dental needs..." rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-[#005fab] hover:bg-[#004681] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2" type="submit">
                                Submit Request
                            </button>
<p className="text-center text-xs text-slate-400 mt-4">
                                *Submitting this form does not guarantee an appointment time. Our staff will contact you to confirm.
                            </p>
</div>
</form>

<div className="hidden text-center py-10" id="form-success">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-4xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
<p className="text-slate-600">Thank you. Our team will reach out shortly to confirm your appointment.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="new-patients">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
                    New Patient <span className="text-[#005fab]">FAQ</span>
</h2>
<p className="text-lg text-slate-500 font-medium">Common questions about insurance, payments, and your first visit.</p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl shadow-sm border border-slate-100 open:ring-1 open:ring-[#005fab]/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h3 className="text-lg font-bold">Do you accept my insurance?</h3>
<div className="text-[#005fab] transition duration-300 group-open:-rotate-180">
<iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 font-medium">
                        We participate with many insurance plans. Since coverage varies significantly, please call our office at (201) 798-8899 with your insurance information so we can verify your specific benefits.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm border border-slate-100 open:ring-1 open:ring-[#005fab]/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h3 className="text-lg font-bold">Do you offer payment plans?</h3>
<div className="text-[#005fab] transition duration-300 group-open:-rotate-180">
<iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 font-medium">
                        Yes! We offer financing options and payment plans for treatments like Invisalign and dental implants to make your care affordable.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm border border-slate-100 open:ring-1 open:ring-[#005fab]/20 bg-white">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h3 className="text-lg font-bold">What if I have a dental emergency?</h3>
<div className="text-[#005fab] transition duration-300 group-open:-rotate-180">
<iconify-icon icon="solar:alt-arrow-down-bold"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 font-medium">
                        If you are in pain or have an emergency, please call us immediately. We do our best to accommodate emergency appointments on the same day.
                    </p>
</details>
</div>
<div className="mt-12 text-center p-8 bg-sky-50 rounded-3xl">
<h4 className="text-xl font-bold text-slate-900 mb-2">Need Patient Forms?</h4>
<p className="text-slate-500 mb-6">Save time by filling out your medical history forms before your visit.</p>
<a className="inline-flex items-center gap-2 bg-white text-[#005fab] border border-[#005fab] px-6 py-3 rounded-full font-semibold hover:bg-[#005fab] hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon> Download Forms
                </a>
</div>
</div>
</section>

<footer className="bg-[#ffffff] border-slate-200 border-t pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-[#005fab] p-1.5 rounded-lg text-white">
<img alt="Lucas Dental" className="w-auto h-6 brightness-100 scale-150" src="https://lucasdental.com/wp-content/uploads/2022/02/Group-77.png"/>
</div>
<span className="text-xl font-bold text-slate-900 tracking-tight mx-4">Lucas Dental</span>
</a>
<p className="text-slate-500 font-medium leading-relaxed">
                        Compassionate care resulting in beautiful smiles. Proudly serving Hoboken for 25 years.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#005fab] hover:border-[#005fab] transition-all bg-white border-slate-200 text-[#005fab] hover:text-white" href="https://www.facebook.com/Lucas-Dental-Associates-197434126943919/" target="_blank">
<iconify-icon icon="akar-icons:facebook-fill"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#005fab] hover:border-[#005fab] transition-all bg-white border-slate-200 text-[#005fab] hover:text-white" href="https://www.instagram.com/lucasdentalassociates/?hl=en" target="_blank">
<iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="font-bold mb-6 text-slate-900">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium">
<iconify-icon className="text-[#005fab] text-xl shrink-0" icon="solar:map-point-bold"></iconify-icon>
<span>232 Bloomfield StHoboken, NJ 07030</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-[#005fab] text-xl shrink-0" icon="solar:phone-calling-bold"></iconify-icon>
<a className="hover:text-[#005fab]" href="tel:2017988899">(201) 798-8899</a>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-[#005fab] text-xl shrink-0" icon="solar:letter-bold"></iconify-icon>
<a className="hover:text-[#005fab]" href="mailto:info@lucasdental.com">info@lucasdental.com</a>
</li>
</ul>
</div>

<div className="">
<h4 className="font-bold mb-6 text-slate-900">Opening Hours</h4>
<ul className="space-y-3 text-slate-500 font-medium text-sm">
<li className="flex justify-between">
<span>Mon, Tue, Thu</span>
<span className="text-slate-900 font-semibold">12pm - 6pm</span>
</li>
<li className="flex justify-between">
<span>Wednesday</span>
<span className="text-slate-900 font-semibold">9am - 3pm</span>
</li>
<li className="flex justify-between">
<span>Friday</span>
<span className="text-slate-900 font-semibold">11am - 5pm</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Quick Links</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li><a className="hover:text-[#005fab] transition-colors" href="#services">Invisalign</a></li>
<li><a className="hover:text-[#005fab] transition-colors" href="#services">Dental Implants</a></li>
<li><a className="hover:text-[#005fab] transition-colors" href="#services">Pediatric Dentistry</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm">© 2024 Lucas Dental Associates. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#005fab]" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
