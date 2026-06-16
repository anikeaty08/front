import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
                // Change icon to close (simplified logic)
                mobileBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>';
            } else {
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = ''; 
                mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>';
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200">

<div className="bg-[#353535] text-white text-xs py-2 px-4 text-center hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<p className="flex items-center gap-2">
<iconify-icon className="text-[#af51c8]" icon="solar:map-point-linear"></iconify-icon>
                    265 NJ- 34 #D, Colts Neck, NJ 07722
                </p>
<p className="font-medium text-[#af51c8]">Same Day Emergency Appointments Available</p>
</div>
</div>
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<a className="flex items-center gap-2 z-50 relative" href="#">
<img alt="Colts Neck Smiles" className="h-10 md:h-12 w-auto object-contain" src="https://coltsnecksmiles.com/wp-content/uploads/2023/04/Main-Logo-horizontal-2.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-[#af51c8] transition-colors" href="#">Home</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#af51c8] transition-colors" href="#about">About Dr. Peiris</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#af51c8] transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#af51c8] transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-semibold text-slate-600 hover:text-[#af51c8] transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-bold text-[#353535] hover:text-[#af51c8] transition-colors" href="tel:732-431-0800">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    732-431-0800
                </a>
<a className="inline-flex items-center gap-2 bg-[#af51c8] hover:bg-[#9e49b4] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-purple-900/10" href="#book">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden z-50 p-2 text-[#353535]" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-white z-40 opacity-0 pointer-events-none flex flex-col pt-24 px-6 pb-6 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-lg font-medium text-[#353535]">
<a className="mobile-link hover:text-[#af51c8]" href="#">Home</a>
<a className="mobile-link hover:text-[#af51c8]" href="#services">Services</a>
<a className="mobile-link hover:text-[#af51c8]" href="#about">Dr. Peiris &amp; Team</a>
<a className="mobile-link hover:text-[#af51c8]" href="#new-patients">New Patients</a>
<a className="mobile-link hover:text-[#af51c8]" href="#contact">Locations &amp; Contact</a>
</div>
<hr className="my-6 border-slate-100"/>
<div className="flex flex-col gap-4 mt-auto">
<a className="w-full flex justify-center items-center gap-2 border border-slate-200 text-[#353535] font-bold py-3 rounded-xl" href="tel:732-431-0800">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Call 732-431-0800
                </a>
<a className="mobile-link w-full flex justify-center items-center gap-2 bg-[#af51c8] text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-500/20" href="#book">
                    Request Appointment
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Colts Neck Smiles Team" className="w-full h-full object-cover object-top" src="https://coltsnecksmiles.com/wp-content/uploads/2023/04/Banner22.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 rounded-full bg-[#01A890]/20 text-[#01A890] border border-[#01A890]/30 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
                    Accepting New Patients
                </span>
<h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                    Get the Dental Care <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#af51c8] to-fuchsia-300">You Deserve.</span>
</h1>
<p className="text-lg text-slate-200 font-medium mb-8 leading-relaxed max-w-lg">
                    Experience individualized, exceptional, patient-centered care with Dr. Dilini Peiris. From cosmetics to sleep apnea, we treat the person, not just the teeth.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#af51c8] hover:bg-[#9e49b4] text-white text-base font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1" href="#book">
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-[#353535] text-base font-bold px-8 py-3.5 rounded-full transition-all" href="tel:732-431-0800">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        732-431-0800
                    </a>
</div>

<div className="mt-10 flex items-center gap-6 text-slate-300 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="18"></iconify-icon>
                        Top Rated
                    </div>
<div className="w-1 h-1 rounded-full bg-slate-500"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#01A890]" icon="solar:shield-check-linear" width="18"></iconify-icon>
                        Insurance Accepted
                    </div>
</div>
</div>
</div>
</section>

<div className="bg-slate-50 border-b border-slate-200 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div className="px-4">
<p className="text-[#af51c8] font-bold text-lg mb-1">Invisalign Special</p>
<p className="text-sm text-slate-600">Complete treatment for <span className="font-bold text-[#353535]">$3,489</span></p>
</div>
<div className="px-4 pt-4 md:pt-0">
<p className="text-[#af51c8] font-bold text-lg mb-1">Emergency Care</p>
<p className="text-sm text-slate-600">Same-day appointments available</p>
</div>
<div className="px-4 pt-4 md:pt-0">
<p className="text-[#af51c8] font-bold text-lg mb-1">Family Friendly</p>
<p className="text-sm text-slate-600">Treating patients of all ages</p>
</div>
</div>
</div>
</div>

<section className="py-20 lg:py-28 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-900/10">
<img alt="Dr. Dilini Peiris" className="w-full h-auto object-cover" src="https://coltsnecksmiles.com/wp-content/uploads/2023/03/Dr.-Dilini-Peiris.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-slate-100">
<p className="font-bold text-[#353535] text-lg">Dr. Dilini Peiris</p>
<p className="text-[#af51c8] text-sm font-medium">General &amp; Cosmetic Dentist</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<span className="text-[#af51c8] font-bold tracking-wider uppercase text-sm mb-2 block">Meet The Doctor</span>
<h2 className="text-3xl md:text-4xl font-bold text-[#353535] mb-6 tracking-tight">Treating the person, <br/>not just the teeth.</h2>
<div className="space-y-4 text-slate-600 leading-relaxed text-lg">
<p>
                            Dr. Dilini Peiris believes in a philosophy of care that goes beyond dental procedures. At Colts Neck Smiles, our mission is to provide individualized, exceptional, patient-centered care.
                        </p>
<p>
                            Whether you need a routine cleaning, cosmetic enhancement, or restorative work, our state-of-the-art facility is designed for your comfort. We offer specialized care including <strong>Sleep Apnea treatments</strong>, <strong>TMJ therapy</strong>, and <strong>Invisalign</strong>.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#fce9ff] flex items-center justify-center text-[#af51c8]">
<iconify-icon icon="solar:heart-angle-linear" width="22"></iconify-icon>
</div>
<span className="font-medium text-[#353535]">Compassionate</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#fce9ff] flex items-center justify-center text-[#af51c8]">
<iconify-icon icon="solar:monitor-smartphone-linear" width="22"></iconify-icon>
</div>
<span className="font-medium text-[#353535]">High Tech</span>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-[#af51c8] font-bold hover:text-[#9e49b4] transition-colors group" href="#book">
                            Meet the Full Team
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#af51c8] font-bold tracking-wider uppercase text-sm mb-2 block">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl font-bold text-[#353535] mb-4 tracking-tight">Our Dental Services</h2>
<p className="text-slate-500 text-lg">
                    From routine checkups to complex smile makeovers, we provide a full range of services under one roof.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
<div className="w-14 h-14 rounded-2xl bg-[#fce9ff] flex items-center justify-center text-[#af51c8] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:health-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#353535] mb-3">General Dentistry</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">
                        Preventive care to keep your smile healthy. Exams, cleanings, sealants, and fillings using modern techniques.
                    </p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>Dental Exams &amp; Cleanings</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>Root Canals</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>Laser Dentistry</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
<div className="w-14 h-14 rounded-2xl bg-[#fce9ff] flex items-center justify-center text-[#af51c8] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#353535] mb-3">Cosmetic Dentistry</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">
                        Enhance your smile's aesthetics. We design beautiful smiles that look and feel natural.
                    </p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>Invisalign®</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>Porcelain Veneers</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>KoR Teeth Whitening</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
<div className="w-14 h-14 rounded-2xl bg-[#fce9ff] flex items-center justify-center text-[#af51c8] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#353535] mb-3">Restorative &amp; Specialty</h3>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">
                        Restoring function and solving complex issues like sleep apnea and TMJ disorders.
                    </p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>Dental Implants &amp; Crowns</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>Sleep Apnea Treatment</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#af51c8]"></div>TMJ Therapy</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

<div className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 h-full">
<h2 className="text-3xl font-bold text-[#353535] mb-6">Visit Our Office</h2>
<div className="space-y-8">

<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#af51c8] flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-[#353535] mb-1">Colts Neck Smiles</h3>
<p className="text-slate-600">265 NJ- 34 #D,<br/>Colts Neck, NJ 07722</p>
<a className="text-sm font-semibold text-[#af51c8] mt-2 inline-block hover:underline" href="https://goo.gl/maps/yA8YHEnzuCw4kzdz7" target="_blank">Get Directions →</a>
</div>
</div>

<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#af51c8] flex-shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-[#353535] mb-1">Office Hours</h3>
<div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm text-slate-600">
<span>Mon &amp; Thu</span> <span className="text-right">8:00 AM - 6:00 PM</span>
<span>Tuesday</span> <span className="text-right">8:00 AM - 5:00 PM</span>
<span>Friday</span> <span className="text-right">8:00 AM - 1:00 PM</span>
<span>Wed, Sat, Sun</span> <span className="text-right">Closed</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-6">
<img alt="Waiting Area" className="rounded-xl object-cover h-32 w-full hover:opacity-90 transition-opacity" src="https://coltsnecksmiles.com/wp-content/uploads/2023/08/IMG_5556-1.jpg"/>
<img alt="Treatment Room" className="rounded-xl object-cover h-32 w-full hover:opacity-90 transition-opacity" src="https://coltsnecksmiles.com/wp-content/uploads/2023/08/IMG_5548-1-416x278.jpg"/>
</div>
</div>
</div>

<div className="bg-[#af51c8] rounded-3xl p-8 lg:p-10 text-white shadow-xl shadow-purple-900/20" id="book">
<h2 className="text-3xl font-bold mb-4">Request Appointment</h2>
<p className="text-purple-100 mb-8">Fill out the form below and our team will contact you to confirm your appointment.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('In a real implementation, this form would connect to your email automation system and send a confirmation to the user.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-purple-200 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-colors" placeholder="Full Name" required="" type="text"/>
</div>
<div>
<label className="sr-only">Phone Number</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-purple-200 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-colors" placeholder="Phone Number" required="" type="tel"/>
</div>
</div>
<div>
<label className="sr-only">Email Address</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-purple-200 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-colors" placeholder="Email Address" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Preferred Location</label>
<select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-colors appearance-none cursor-pointer">
<option className="text-[#353535]" value="Colts Neck">Colts Neck Office</option>
</select>
</div>
<div>
<label className="sr-only">Preferred Day/Time</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-purple-200 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-colors" placeholder="Preferred Day/Time" type="text"/>
</div>
</div>
<div>
<label className="sr-only">Reason for Visit</label>
<textarea className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 placeholder-purple-200 text-white focus:outline-none focus:bg-white/20 focus:border-white transition-colors" placeholder="Reason for visit / Message" rows="3"></textarea>
</div>
<button className="w-full bg-white text-[#af51c8] font-bold py-3.5 rounded-xl hover:bg-slate-50 transition-colors shadow-lg mt-2" type="submit">
                            Submit Request
                        </button>
<p className="text-xs text-purple-200 text-center mt-2 opacity-80">We typically reply within 24 business hours.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200" id="new-patients">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl font-bold text-[#353535] mb-6">New Patients &amp; Insurance</h2>
<p className="text-slate-600 mb-10">We accept major PPO insurances and offer an In-House Dental Savings Plan for patients without insurance. Financing options via Cherry are also available.</p>
<div className="flex flex-wrap justify-center gap-4">
<a className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#353535] px-6 py-3 rounded-xl font-semibold hover:border-[#af51c8] hover:text-[#af51c8] transition-colors shadow-sm" href="#">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
                    New Patient Forms
                </a>
<a className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#353535] px-6 py-3 rounded-xl font-semibold hover:border-[#af51c8] hover:text-[#af51c8] transition-colors shadow-sm" href="#">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
                    Insurance &amp; Finance
                </a>
<a className="inline-flex items-center gap-2 bg-white border border-slate-200 text-[#353535] px-6 py-3 rounded-xl font-semibold hover:border-[#af51c8] hover:text-[#af51c8] transition-colors shadow-sm" href="#">
<iconify-icon icon="solar:star-fall-linear" width="20"></iconify-icon>
                    View Smile Gallery
                </a>
</div>
</div>
</section>

<footer className="bg-[#353535] text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div className="space-y-4">
<img alt="Colts Neck Smiles" className="h-10 w-auto brightness-0 invert opacity-90" src="https://coltsnecksmiles.com/wp-content/uploads/2023/04/Main-Logo-horizontal-2.png"/>
<p className="text-slate-400 text-sm leading-relaxed">
                        Colts Neck Smiles provides high-quality dental services for cosmetics, implants, invisalign, filler &amp; sleep apnea treatment.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-bold text-white mb-4">Contact Us</h4>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#af51c8] mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>265 NJ- 34 #D,<br/>Colts Neck, NJ 07722</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#af51c8]" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white" href="tel:732-431-0800">732-431-0800</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#af51c8]" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white" href="mailto:office@coltsnecksmiles.com">office@coltsnecksmiles.com</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm text-slate-300">
<li><a className="hover:text-[#af51c8] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#af51c8] transition-colors" href="#about">Meet The Team</a></li>
<li><a className="hover:text-[#af51c8] transition-colors" href="#">New Patient Paperwork</a></li>
<li><a className="hover:text-[#af51c8] transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-4">Areas We Serve</h4>
<ul className="space-y-2 text-sm text-slate-300">
<li>Colts Neck, NJ</li>
<li>Lincroft, NJ</li>
<li>Freehold, NJ</li>
<li>Tinton Falls, NJ</li>
<li>Holmdel, NJ</li>
</ul>
</div>
</div>
<div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2026 Colts Neck Smiles. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
