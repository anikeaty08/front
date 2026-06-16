import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                // Prevent scrolling when menu is open
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('hidden');
                // Restore scrolling
                document.body.style.overflow = 'auto';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-emerald-500 p-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors text-white">

<iconify-icon height="24" icon="solar:medical-kit-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">The Dental Family</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#doctors">Doctors</a>
<a className="transition-colors hover:text-emerald-600 text-sm font-medium text-slate-600" href="#locations">Locations</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#new-patients">New Patients</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-600" href="tel:908-232-9300">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    (908) 232-9300
                </a>
<a className="inline-flex items-center gap-2 bg-emerald-500 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-600 text-white" href="#book">
                    Book Appointment
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-slate-900 z-50 relative" onclick="toggleMenu()">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 pb-6 overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="text-2xl font-semibold text-slate-900" href="#" onclick="toggleMenu()">Home</a>
<a className="text-2xl font-semibold text-slate-900" href="#services" onclick="toggleMenu()">Services</a>
<a className="text-2xl font-semibold text-slate-900" href="#locations" onclick="toggleMenu()">Locations</a>
<a className="text-2xl font-semibold text-slate-900" href="#doctors" onclick="toggleMenu()">Doctors</a>
<a className="text-2xl font-semibold text-slate-900" href="#new-patients" onclick="toggleMenu()">New Patients</a>
<hr className="border-slate-200"/>
<a className="text-xl font-medium text-emerald-600 flex justify-center items-center gap-2" href="tel:908-232-9300">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call Westfield/Cranford
            </a>
<a className="bg-emerald-500 text-white text-lg font-medium px-6 py-4 rounded-xl shadow-lg" href="#book" onclick="toggleMenu()">
                Request Appointment
            </a>
<button className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full text-slate-500" onclick="toggleMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                        Expert Dental Care for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-emerald-600">Your Entire Family.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Trusted dentist in Westfield &amp; Cranford, NJ. We offer comprehensive care for all ages, from pediatric to orthodontics.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:bg-emerald-600 text-white" href="#book">
                            Book Online
                            <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-200 hover:text-emerald-600" href="tel:908-232-9300">
                            Call Us
                            <iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 pt-4">
<div className="flex items-center gap-1 text-yellow-400">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-600">5.0 Rating <span className="text-slate-300 mx-2">|</span> 650+ Reviews</p>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-emerald-900/10">

<img alt="Dr. Brett Druger and Family" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2024/12/HeroPhoto-1-e1734112664196.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-900/80"></div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-emerald-800">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 4 Locations
                            </span>
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-emerald-800">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Insurance Accepted
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div className="">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-600">Our Promise</p>
<p className="font-medium text-slate-900">Family Dental Care for a Healthier Smile.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Our <span className="text-emerald-600">Locations</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Conveniently located in Westfield and Cranford to serve all your dental needs.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden">
<img alt="Westfield Location" className="w-full h-full object-cover" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2025/12/The-Dental-Family-Westfield-NJ-Building-768x512.webp"/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-slate-900 mb-2">Westfield</h3>
<p className="text-sm text-slate-500 mb-4">General Dentistry</p>
<hr className="border-slate-100 mb-4"/>
<div className="space-y-3 mb-6">
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 text-lg" icon="solar:map-point-linear"></iconify-icon>
                                531 E Broad St,<br/>Westfield, NJ 07090
                            </div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                                (908) 232-9300
                            </div>
</div>
<a className="block w-full text-center bg-slate-100 hover:bg-emerald-500 hover:text-white text-slate-700 font-semibold py-3 rounded-xl transition-colors" href="tel:908-232-9300">Call Now</a>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden">
<img alt="Cranford Location" className="w-full h-full object-cover" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2025/12/The-Dental-Family-Cranford-NJ-Lobby-768x511.webp"/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-slate-900 mb-2">Cranford</h3>
<p className="text-sm text-slate-500 mb-4">General Dentistry</p>
<hr className="border-slate-100 mb-4"/>
<div className="space-y-3 mb-6">
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 text-lg" icon="solar:map-point-linear"></iconify-icon>
                                1150 Raritan Rd #204,<br/>Cranford, NJ 07016
                            </div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                                (908) 232-9300
                            </div>
</div>
<a className="block w-full text-center bg-slate-100 hover:bg-emerald-500 hover:text-white text-slate-700 font-semibold py-3 rounded-xl transition-colors" href="tel:908-232-9300">Call Now</a>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden">
<img alt="Pediatric Dentistry" className="w-full h-full object-cover" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2025/12/The-Dental-Family-Junior-Cranford-NJ-pediatric-patient-768x511.webp"/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-slate-900 mb-2">TDF Junior</h3>
<p className="text-sm text-slate-500 mb-4">Pediatric Dentistry</p>
<hr className="border-slate-100 mb-4"/>
<div className="space-y-3 mb-6">
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 text-lg" icon="solar:map-point-linear"></iconify-icon>
                                1150 Raritan Rd #204,<br/>Cranford, NJ 07016
                            </div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                                (908) 418-4215
                            </div>
</div>
<a className="block w-full text-center bg-slate-100 hover:bg-emerald-500 hover:text-white text-slate-700 font-semibold py-3 rounded-xl transition-colors" href="tel:908-418-4215">Call Now</a>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="h-48 overflow-hidden">
<img alt="Orthodontics" className="w-full h-full object-cover" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2025/12/The-Dental-Family-Orthodontics-Cranford-NJ-patient-768x512.webp"/>
</div>
<div className="p-6">
<h3 className="text-xl font-bold text-slate-900 mb-2">TDF Ortho</h3>
<p className="text-sm text-slate-500 mb-4">Orthodontic Care</p>
<hr className="border-slate-100 mb-4"/>
<div className="space-y-3 mb-6">
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 text-lg" icon="solar:map-point-linear"></iconify-icon>
                                1150 Raritan Rd #204B,<br/>Cranford, NJ 07016
                            </div>
<div className="flex gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 flex-shrink-0 text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                                (908) 418-4215
                            </div>
</div>
<a className="block w-full text-center bg-slate-100 hover:bg-emerald-500 hover:text-white text-slate-700 font-semibold py-3 rounded-xl transition-colors" href="tel:908-418-4215">Call Now</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-emerald-600">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    From routine checkups to specialized orthodontic and pediatric care.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Preventative &amp; General</h3>
<p className="text-slate-500 mb-4 leading-relaxed">Checkups, cleanings, fillings, and sealants to keep your smile healthy.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Regular Checkups</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Cavity Fillings</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Root Canal Treatment</li>
</ul>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Cosmetic &amp; Restoration</h3>
<p className="text-slate-500 mb-4 leading-relaxed">Enhance your smile with modern cosmetic solutions.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Veneers &amp; Bonding</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
</ul>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3 text-slate-900">Pediatric &amp; Ortho</h3>
<p className="text-slate-500 mb-4 leading-relaxed">Specialized care for children and smile alignment.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Pediatric Dentistry</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> ClearCorrect &amp; Braces</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Wisdom Teeth Removal</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24 relative" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-white text-emerald-600 border border-emerald-100">Meet The Doctors</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                        The Dental <span className="text-emerald-500">Family</span> Team
                    </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-3xl overflow-hidden transition-colors bg-white shadow-sm hover:shadow-lg">
<div className="aspect-[3/4] w-full relative">
<img alt="Dr. Brett Druger" className="absolute inset-0 w-full h-full object-cover" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2024/10/The-Dental-Family-Dr-Brett-Druger-768x1024.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Dr. Brett Druger</h4>
<p className="text-sm font-medium text-emerald-600">DMD, MAGD</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors bg-white shadow-sm hover:shadow-lg">
<div className="aspect-[3/4] w-full relative">
<img alt="Dr. Irene Druger" className="absolute inset-0 w-full h-full object-cover" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2024/10/The-Dental-Family-Dr-Irene-Druger-768x744.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Dr. Irene Druger</h4>
<p className="text-sm font-medium text-emerald-600">DMD</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors bg-white shadow-sm hover:shadow-lg">
<div className="aspect-[3/4] w-full relative">
<img alt="Dr. Jennie Lee" className="absolute inset-0 w-full h-full object-cover top" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2024/10/The-Dental-Family-Dr-Jennie-Lee-768x1174.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Dr. Jennie Lee</h4>
<p className="text-sm font-medium text-emerald-600">DDS (Pediatric)</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors bg-white shadow-sm hover:shadow-lg">
<div className="aspect-[3/4] w-full relative">
<img alt="Dr. Krystian Jarosz" className="absolute inset-0 w-full h-full object-cover" src="https://www.thedentalfamily.com/wp-content/uploads/sites/234/2024/10/The-Dental-Family-Dr-Krystian-Jarosz-768x1024.jpg"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-bold text-slate-900">Dr. Krystian Jarosz</h4>
<p className="text-sm font-medium text-emerald-600">DMD (Orthodontics)</p>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-emerald-600" href="#">
                    View Full Team <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="new-patients">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                    Patient <span className="text-emerald-500">Resources</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Common questions about insurance, appointments, and care.
                </p>
</div>
<div className="space-y-4">

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Do you accept insurance?</h2>
<div className="rounded-full p-1.5 text-emerald-500 transition duration-300 group-open:-rotate-180 bg-white">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Yes! We prioritize transparency. We accept checks, credit cards, and CareCredit®. We also offer a dental membership plan for uninsured patients.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Do you see children?</h2>
<div className="rounded-full p-1.5 text-emerald-500 transition duration-300 group-open:-rotate-180 bg-white">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Absolutely. The Dental Family Junior specializes in pediatric care with a friendly atmosphere to keep kids calm and happy.
                    </p>
</details>

<details className="group rounded-2xl shadow-sm [&amp;_summary::-webkit-details-marker]:hidden open:ring-1 open:ring-emerald-500/20 bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
<h2 className="text-lg font-semibold">Do you offer Orthodontics?</h2>
<div className="rounded-full p-1.5 text-emerald-500 transition duration-300 group-open:-rotate-180 bg-white">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</summary>
<p className="px-6 pb-6 text-slate-500 leading-relaxed font-medium">
                        Yes, The Dental Family Orthodontics offers both traditional metal braces and ClearCorrect aligners for teens and adults.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-emerald-950 text-white" id="book">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                        Schedule Your Visit
                    </h2>
<p className="font-medium mb-10 text-lg text-emerald-200/80">
                        Ready for a healthier smile? Fill out the form to request an appointment at one of our 4 locations.
                    </p>
<div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-800">
<h3 className="font-bold mb-2">Immediate Assistance?</h3>
<p className="text-emerald-200 text-sm mb-4">Call our offices directly:</p>
<div className="space-y-2">
<a className="flex items-center gap-3 hover:text-emerald-300 transition-colors" href="tel:908-232-9300">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                                Westfield &amp; Cranford: (908) 232-9300
                            </a>
<a className="flex items-center gap-3 hover:text-emerald-300 transition-colors" href="tel:908-418-4215">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                                Junior &amp; Ortho: (908) 418-4215
                            </a>
</div>
</div>
</div>

<div className="">


<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-900/50 border-emerald-800 text-white" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="sr-only">Phone Number</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-900/50 border-emerald-800 text-white" placeholder="Phone Number" type="tel"/>
</div>
</div>
<div className="">
<label className="sr-only">Email Address</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-900/50 border-emerald-800 text-white" placeholder="Email Address" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer bg-emerald-900/50 border-emerald-800 text-white">
<option className="text-slate-900">Preferred Location</option>
<option className="text-slate-900">Westfield</option>
<option className="text-slate-900">Cranford</option>
<option className="text-slate-900">Junior (Pediatric)</option>
<option className="text-slate-900">Orthodontics</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer bg-emerald-900/50 border-emerald-800 text-white">
<option className="text-slate-900">Reason for Visit</option>
<option className="text-slate-900">General Checkup</option>
<option className="text-slate-900">Emergency</option>
<option className="text-slate-900">Cosmetic Consultation</option>
<option className="text-slate-900">Braces/Invisalign</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 text-emerald-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="relative">
<input className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all [color-scheme:dark] bg-emerald-900/50 border-emerald-800 text-white" onfocus="(this.type='datetime-local')" placeholder="Preferred Day/Time" type="text"/>
</div>
<div className="relative">
<textarea className="w-full border rounded-xl px-5 py-4 placeholder-emerald-400/60 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all bg-emerald-900/50 border-emerald-800 text-white" placeholder="Message (Optional)" rows="3"></textarea>
</div>
<button className="w-full bg-emerald-500 font-semibold text-lg py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 flex items-center justify-center gap-2 mt-4 hover:bg-emerald-400 text-white" type="button">
                            Request Appointment
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-emerald-500 p-1.5 rounded-lg text-white">
<iconify-icon height="24" icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">The Dental Family</span>
</a>
<p className="text-slate-500 font-medium leading-relaxed">
                        Expert dental care in Westfield &amp; Cranford, NJ. We treat your family like our own.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all bg-white border-slate-200 text-emerald-600 hover:text-white" href="https://www.facebook.com/thedentalfamilyjunior">
<iconify-icon icon="brandico:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all bg-white border-slate-200 text-emerald-600 hover:text-white" href="https://www.instagram.com/thedentalfamily">
<iconify-icon icon="brandico:instagram"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="font-bold mb-6 text-slate-900">Locations</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium">
<iconify-icon className="text-emerald-500 shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<span> 531 E Broad St</span>
</li>
<li className="flex items-start gap-3 text-slate-500 font-medium">
<iconify-icon className="text-emerald-500 shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<span> 1150 Raritan Rd, Ste 204</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contact</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<span>(908) 232-9300 (General)</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<span>(908) 418-4215 (Junior/Ortho)</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>info@thedentalfamily.com</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Hours</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li className="flex justify-between">
<span>Mon, Tue, Thu</span>
<span className="text-slate-900">8:00 - 18:00</span>
</li>
<li className="flex justify-between">
<span>Wednesday</span>
<span className="text-slate-900">8:00 - 17:00</span>
</li>
<li className="flex justify-between">
<span>Friday</span>
<span className="text-slate-900">8:00 - 14:00</span>
</li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm">© 2026 The Dental Family. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600" href="#">Privacy Policy</a>
<a className="hover:text-emerald-600" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
