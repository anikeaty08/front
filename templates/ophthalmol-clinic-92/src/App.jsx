import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const eyeContainer = document.getElementById('eye-container');
            const pupilGroup = document.getElementById('pupil-group');

            if(eyeContainer && pupilGroup) {
                document.addEventListener('mousemove', (e) => {
                    const rect = eyeContainer.getBoundingClientRect();
                    // Calculate center of the eye container
                    const eyeCenterX = rect.left + rect.width / 2;
                    const eyeCenterY = rect.top + rect.height / 2;
                    
                    // Calculate angle and distance
                    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
                    const distance = Math.min(25, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 15);
                    
                    // Convert back to X/Y translation
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;
                    
                    pupilGroup.style.transform = `translate(${tx}px, ${ty}px)`;
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 glass-panel border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold tracking-tighter text-sm">AM</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg group-hover:text-teal-700 transition-colors">Augencentrum<br/><span className="text-xs font-normal text-slate-500 block -mt-1 tracking-normal">Mülheim</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-teal-600 transition-colors" href="#services">Treatments</a>
<a className="hover:text-teal-600 transition-colors" href="#doctors">Our Doctors</a>
<a className="hover:text-teal-600 transition-colors" href="#about">About Clinic</a>
<a className="hover:text-teal-600 transition-colors" href="#locations">Locations</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-all shadow-sm" href="#contact">
                Book Consultation
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-24 pb-40 overflow-hidden flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-[#FAFAFA]">

<div className="relative w-48 h-48 mb-8 z-10" id="eye-container">
<svg className="w-full h-full drop-shadow-2xl overflow-visible" viewbox="0 0 200 200">
<g className="eye-blink-wrapper">

<path className="shadow-inner" d="M 10 100 Q 100 20 190 100 Q 100 180 10 100" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2"></path>

<clippath id="eye-clip">
<path d="M 10 100 Q 100 20 190 100 Q 100 180 10 100"></path>
</clippath>

<g clipPath="url(#eye-clip)" id="pupil-group" style={{transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)'}}>
<circle cx="100" cy="100" fill="#e0f2fe" r="45"></circle> 
<circle cx="100" cy="100" fill="#0d9488" r="35"></circle> 
<circle cx="100" cy="100" fill="#0f172a" r="18"></circle> 
<circle cx="90" cy="90" fill="#ffffff" opacity="0.9" r="6"></circle> 
<circle cx="110" cy="105" fill="#ffffff" opacity="0.6" r="2"></circle> 
</g>
</g>
</svg>
</div>
<div className="max-w-3xl z-10 relative">
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                Your Vision in <br />
<span className="text-teal-600 bg-clip-text">Expert Hands</span>
</br></h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 font-light max-w-2xl mx-auto">
                Premium ophthalmology center for advanced diagnostics, laser eye surgery, and complete medical eye care in Germany.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-eye bg-teal-600 text-white px-8 py-3.5 text-sm font-medium flex items-center gap-2 w-full sm:w-auto justify-center" href="#contact">
                    Book Appointment
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
<a className="btn-eye bg-white text-slate-700 border border-slate-200 px-8 py-3.5 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 w-full sm:w-auto justify-center shadow-sm" href="#services">
                    Our Treatments
                </a>
<a className="btn-eye bg-transparent text-slate-600 px-8 py-3.5 text-sm font-medium flex items-center gap-2 hover:text-teal-700 w-full sm:w-auto justify-center" href="#doctors">
                    Meet Our Doctors
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
</section>

<section className="max-w-7xl mx-auto px-6 relative z-20 -mt-24 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold tracking-tight text-base mb-1">Opening Hours</h3>
<p className="text-xs text-slate-500 leading-relaxed">Mon - Fri: 08:00 - 18:00<br/>Sat: By Appointment</p>
</div>

<div className="glass-panel p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold tracking-tight text-base mb-1">Address</h3>
<p className="text-xs text-slate-500 leading-relaxed">Schloßstraße 15<br/>45468 Mülheim an der Ruhr</p>
</div>

<div className="glass-panel p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<h3 className="text-slate-900 font-semibold tracking-tight text-base mb-1">Phone Number</h3>
<p className="text-xs text-slate-500 leading-relaxed">+49 208 123 456 78<br/>Emergency: 112</p>
</div>

<div className="glass-panel p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-transform duration-300 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
<div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center mb-4">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<h3 className="font-semibold tracking-tight text-base mb-1">Quick Appointment</h3>
<p className="text-xs text-slate-300 mb-4">Book your visit online instantly.</p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-teal-400 hover:text-teal-300" href="#contact">
                    Book Now <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Advanced Eye Treatments</h2>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-teal-600 flex items-center gap-1 transition-colors" href="#">
                    View All Services <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-[#FAFAFA] border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Laser Eye Surgery</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">State-of-the-art LASIK and PRK procedures to correct myopia, hyperopia, and astigmatism safely.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFAFA] border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Cataract Surgery</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Premium lens implantation (IOL) to restore clear vision using minimally invasive microsurgery.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFAFA] border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Glaucoma Screening</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Early detection and management of elevated intraocular pressure using advanced OCT imaging.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="doctors">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">Medical Team</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Specialists You Can Trust</h2>
<p className="text-sm text-slate-500">Our board-certified ophthalmologists bring decades of experience and specialized knowledge to provide the highest standard of care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm relative group hover:shadow-md transition-shadow">
<div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-semibold tracking-tighter text-[10px]">AM</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Dr. med. Johannes Schmidt</h3>
<p className="text-xs text-teal-600 font-medium mb-5">Chief Medical Director &amp; Surgeon</p>
<div className="w-full h-56 bg-slate-100 rounded-xl mb-5 overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
<img alt="Doctor" className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
</div>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Specializing in complex refractive surgeries, premium lens implants, and minimally invasive glaucoma treatments.</p>
<div className="flex gap-3">
<a className="flex-1 bg-slate-900 text-white text-center py-2.5 rounded-full text-xs font-medium hover:bg-teal-700 transition-colors" href="#contact">Book</a>
<a className="flex-1 bg-slate-50 text-slate-700 text-center py-2.5 rounded-full text-xs font-medium hover:bg-slate-100 border border-slate-200 transition-colors" href="#profile-template">View Profile</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm relative group hover:shadow-md transition-shadow">
<div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-semibold tracking-tighter text-[10px]">AM</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Dr. med. Anna Weber</h3>
<p className="text-xs text-teal-600 font-medium mb-5">Consultant Ophthalmologist</p>
<div className="w-full h-56 bg-slate-100 rounded-xl mb-5 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
<img alt="Doctor" className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Expert in pediatric ophthalmology, strabismus surgery, and comprehensive medical retina management.</p>
<div className="flex gap-3">
<a className="flex-1 bg-slate-900 text-white text-center py-2.5 rounded-full text-xs font-medium hover:bg-teal-700 transition-colors" href="#contact">Book</a>
<a className="flex-1 bg-slate-50 text-slate-700 text-center py-2.5 rounded-full text-xs font-medium hover:bg-slate-100 border border-slate-200 transition-colors" href="#profile-template">View Profile</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-sm relative group hover:shadow-md transition-shadow">
<div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-semibold tracking-tighter text-[10px]">AM</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Dr. med. Lukas Meyer</h3>
<p className="text-xs text-teal-600 font-medium mb-5">Retina Specialist</p>
<div className="w-full h-56 bg-slate-100 rounded-xl mb-5 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:user-linear" width="48"></iconify-icon>
</div>
<img alt="Doctor" className="w-full h-full object-cover mix-blend-multiply opacity-90 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
</div>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Dedicated to advanced macular degeneration treatments, diabetic retinopathy, and precise intravitreal injections.</p>
<div className="flex gap-3">
<a className="flex-1 bg-slate-900 text-white text-center py-2.5 rounded-full text-xs font-medium hover:bg-teal-700 transition-colors" href="#contact">Book</a>
<a className="flex-1 bg-slate-50 text-slate-700 text-center py-2.5 rounded-full text-xs font-medium hover:bg-slate-100 border border-slate-200 transition-colors" href="#profile-template">View Profile</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-white" id="about">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row">

<div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">About Us</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Pioneering Eye Care in Mülheim</h2>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    For over two decades, Augencentrum Mülheim has been at the forefront of ophthalmology. We combine cutting-edge medical technology with compassionate, individualized patient care.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                        Over 50,000 successful surgeries performed.
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                        State-of-the-art Carl Zeiss laser technology.
                    </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-6 h-6 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
                        Certified DIN EN ISO 9001 quality management.
                    </li>
</ul>
</div>

<div className="md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-[#FAFAFA]">
<div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Join Our Team</h2>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                    We are always looking for passionate medical professionals, skilled nurses, and friendly administrative staff to join our growing premium clinic. Build your career in a modern, supportive environment.
                </p>
<div>
<a className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-50 hover:text-teal-600 transition-all shadow-sm" href="#">
                        Apply Now
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">Our Network</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">4 Locations in Mülheim</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">Main Center</h3>
<p className="text-xs text-slate-500 mb-6">Schloßstraße 15<br/>45468 Mülheim an der Ruhr</p>
<a className="text-xs font-medium text-teal-600 flex items-center gap-1 hover:text-teal-700" href="#">
                        Get Directions <iconify-icon icon="solar:routing-2-linear" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">City North</h3>
<p className="text-xs text-slate-500 mb-6">Kaiserstraße 22<br/>45468 Mülheim an der Ruhr</p>
<a className="text-xs font-medium text-teal-600 flex items-center gap-1 hover:text-teal-700" href="#">
                        Get Directions <iconify-icon icon="solar:routing-2-linear" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">Medical Plaza</h3>
<p className="text-xs text-slate-500 mb-6">Aktienstraße 45<br/>45473 Mülheim an der Ruhr</p>
<a className="text-xs font-medium text-teal-600 flex items-center gap-1 hover:text-teal-700" href="#">
                        Get Directions <iconify-icon icon="solar:routing-2-linear" width="14"></iconify-icon>
</a>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">Saarn Branch</h3>
<p className="text-xs text-slate-500 mb-6">Düsseldorfer Str. 110<br/>45481 Mülheim an der Ruhr</p>
<a className="text-xs font-medium text-teal-600 flex items-center gap-1 hover:text-teal-700" href="#">
                        Get Directions <iconify-icon icon="solar:routing-2-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Patient Experiences</h2>
<div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">

<div className="min-w-[320px] max-w-[320px] bg-[#FAFAFA] p-8 rounded-2xl border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-teal-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6">"The laser eye surgery completely changed my life. The team at Augencentrum was incredibly professional, and the clinic feels like a luxury hotel rather than a hospital."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sarah M.</p>
<p className="text-[10px] text-slate-500">LASIK Patient</p>
</div>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] bg-[#FAFAFA] p-8 rounded-2xl border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-teal-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6">"Dr. Schmidt operated on my cataracts. The entire process was painless, efficient, and the results are astounding. I can read without glasses again!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Thomas K.</p>
<p className="text-[10px] text-slate-500">Cataract Surgery</p>
</div>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] bg-[#FAFAFA] p-8 rounded-2xl border border-slate-100 snap-center shrink-0">
<div className="flex gap-1 text-teal-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 italic mb-6">"Very modern equipment and practically zero waiting time. The doctors took their time to explain every detail of my diagnosis. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Julia W.</p>
<p className="text-[10px] text-slate-500">Diagnostic Patient</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#FAFAFA] border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Follow Our Journey</h2>
<p className="text-sm text-slate-500 mb-10">Insights into our clinic and eye health tips.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="32"></iconify-icon>
</div>
</div>
<div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
</div>
<div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group cursor-pointer hidden md:block">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
</div>
<div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group cursor-pointer hidden md:block">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<span className="text-teal-600 font-medium text-xs tracking-wider uppercase mb-3 block">Information</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-[#FAFAFA] rounded-xl border border-slate-100 open:bg-white open:shadow-sm transition-all" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer p-5 text-sm text-slate-900 select-none">
                            Is laser eye surgery painful?
                            <span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-sm text-slate-500 px-5 pb-5 leading-relaxed">
                            No, the procedure itself is painless. We use anesthetic eye drops to numb the eye completely. You might feel a slight pressure during certain steps, but no pain. Post-surgery, some mild discomfort or scratchiness is normal for a day or two.
                        </div>
</details>
<details className="group bg-[#FAFAFA] rounded-xl border border-slate-100 open:bg-white open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer p-5 text-sm text-slate-900 select-none">
                            How long does a consultation take?
                            <span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-sm text-slate-500 px-5 pb-5 leading-relaxed">
                            A comprehensive initial consultation usually takes about 60 to 90 minutes. This includes extensive diagnostic measurements, vision testing, and a detailed discussion with the doctor.
                        </div>
</details>
<details className="group bg-[#FAFAFA] rounded-xl border border-slate-100 open:bg-white open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer p-5 text-sm text-slate-900 select-none">
                            Do you treat children?
                            <span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-sm text-slate-500 px-5 pb-5 leading-relaxed">
                            Yes, we have specialized pediatric ophthalmologists in our team who are trained to diagnose and treat eye conditions in infants and children in a friendly, stress-free environment.
                        </div>
</details>
</div>
</div>

<div className="bg-slate-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Request an Appointment</h3>
<p className="text-sm text-slate-400 mb-8">Fill out the form below and our team will contact you to confirm a date and time.</p>
<form className="space-y-4 relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors placeholder:text-slate-600" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Phone Number</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors placeholder:text-slate-600" placeholder="+49 ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors placeholder:text-slate-600" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">How can we help?</label>
<textarea className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors placeholder:text-slate-600 resize-none" placeholder="Briefly describe your concern or desired treatment..." rows="3"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer mt-4">
<div className="relative flex items-start pt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-600 bg-slate-800/50 peer-checked:bg-teal-500 peer-checked:border-teal-500 transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</div>
<span className="text-xs text-slate-400 leading-tight">I agree to the privacy policy and consent to being contacted regarding my request.</span>
</label>
<button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm py-3 rounded-xl transition-colors mt-6 shadow-[0_0_15px_rgba(13,148,136,0.2)]" type="button">
                        Send Request
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] flex items-center justify-center px-6">
<h2 className="text-2xl md:text-3xl font-light text-slate-800 text-center max-w-2xl italic tracking-tight leading-relaxed">
            “Your vision deserves the highest <br />level of care.”
        </br></h2>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold tracking-tighter text-sm">AM</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg leading-none">Augencentrum<br/><span className="text-xs font-normal text-slate-500 tracking-normal">Mülheim</span></span>
</a>
<p className="text-xs text-slate-500 leading-relaxed pr-4">
                        Premium ophthalmology and laser eye surgery center providing exceptional care and advanced diagnostics in Germany.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Treatments</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">Laser Eye Surgery</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Cataract Surgery</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Glaucoma Treatment</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Macular Degeneration</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Pediatric Eye Care</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Clinic</h4>
<ul className="space-y-2.5 text-sm text-slate-500">
<li><a className="hover:text-teal-600 transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Patient Reviews</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Contact Us</h4>
<ul className="space-y-2.5 text-sm text-slate-500 mb-6">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> +49 208 123 456 78</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear" width="16"></iconify-icon> info@augencentrum.de</li>
</ul>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-200 transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-200 transition-all" href="#">
<iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-200 transition-all" href="#">
<iconify-icon icon="solar:link-circle-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2023 Augencentrum Mülheim. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#">Imprint</a>
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>



<div className="py-12 bg-slate-900 text-center border-y border-teal-500/30">
<p className="text-teal-400 text-xs tracking-widest uppercase font-semibold">Underlying Page Templates Below</p>
</div>

<section className="bg-white pt-24 pb-32" id="profile-template">
<div className="max-w-5xl mx-auto px-6">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-teal-600 mb-12 transition-colors" href="#doctors">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon> Back to Team
            </a>
<div className="flex flex-col md:flex-row gap-12 md:gap-20">

<div className="md:w-1/3">
<div className="w-full aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover mix-blend-multiply opacity-95" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=600&amp;h=800"/>
</div>
<a className="w-full block bg-slate-900 text-white text-center py-3.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm mb-4" href="#contact">
                        Book Appointment
                    </a>
<div className="p-5 bg-[#FAFAFA] rounded-xl border border-slate-100">
<h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Languages</h4>
<p className="text-sm text-slate-600 mb-4">German, English, Spanish</p>
<h4 className="text-xs font-semibold text-slate-900 mb-3 uppercase tracking-wider">Memberships</h4>
<p className="text-xs text-slate-600 leading-relaxed">DOG (German Ophthalmological Society)<br/>ESCRS (European Society of Cataract &amp; Refractive Surgeons)</p>
</div>
</div>

<div className="md:w-2/3">
<span className="text-teal-600 font-medium text-sm mb-2 block">Chief Medical Director</span>
<h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Dr. med. Johannes Schmidt</h1>
<div className="prose prose-sm prose-slate max-w-none mb-10">
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                            Dr. Schmidt is a leading specialist in refractive and cataract surgery with over 15 years of clinical experience. He completed his medical studies at the University of Heidelberg and specialized in ophthalmology at the renowned University Eye Hospital in Munich.
                        </p>
<p className="text-sm text-slate-600 leading-relaxed">
                            His primary focus is providing individualized, cutting-edge surgical solutions to help patients achieve visual independence. Dr. Schmidt is known for his calm demeanor, precise surgical technique, and dedication to implementing the latest advancements in laser technology.
                        </p>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-5">Clinical Specialties</h3>
<div className="flex flex-wrap gap-2 mb-10">
<span className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-md text-xs font-medium">LASIK &amp; PRK</span>
<span className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-md text-xs font-medium">Premium IOL Implants</span>
<span className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-md text-xs font-medium">Cataract Microsurgery</span>
<span className="bg-teal-50 text-teal-700 px-3 py-1.5 rounded-md text-xs font-medium">Corneal Topography</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-5">Qualifications</h3>
<ul className="space-y-4">
<li className="flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
<div>
<p className="text-sm font-medium text-slate-900">Board Certification in Ophthalmology</p>
<p className="text-xs text-slate-500">Medical Association Nordrhein, 2010</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
<div>
<p className="text-sm font-medium text-slate-900">Doctorate in Medicine (Dr. med.)</p>
<p className="text-xs text-slate-500">University of Heidelberg, Magna Cum Laude</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-slate-200"></div>

<section className="bg-[#FAFAFA] pt-20 pb-32" id="service-template">

<div className="bg-white border-b border-slate-200 pt-10 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="w-16 h-16 mx-auto rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Laser Eye Surgery</h1>
<p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                    Experience life without glasses or contact lenses. We offer advanced LASIK and surface ablation techniques to correct your vision safely and precisely.
                </p>
<a className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-colors shadow-sm" href="#contact">
                    Schedule Free Screening
                </a>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 mt-16">
<div className="mb-16">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">What is Laser Eye Surgery?</h2>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Laser eye surgery involves reshaping the clear front part of the eye (the cornea) using a highly precise excimer laser. This allows light traveling through it to focus properly onto the retina located in the back of the eye, resulting in clear vision.
                </p>
<p className="text-sm text-slate-600 leading-relaxed">
                    At Augencentrum Mülheim, we utilize the latest generation of Carl Zeiss lasers, ensuring maximum precision, safety, and rapid recovery times.
                </p>
</div>
<div className="mb-16">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">The Procedure Steps</h2>
<div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-100 text-teal-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 font-semibold text-sm">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-2 tracking-tight">Extensive Diagnostics</h3>
<p className="text-xs text-slate-500 leading-relaxed">We map your eye in 3D to create a perfectly customized treatment plan tailored to your unique corneal topography.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 font-semibold text-sm">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-2 tracking-tight">Preparation</h3>
<p className="text-xs text-slate-500 leading-relaxed">Anesthetic drops are applied to numb the eye completely. The process takes only a few minutes and is completely painless.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 font-semibold text-sm">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-2 tracking-tight">Laser Reshaping</h3>
<p className="text-xs text-slate-500 leading-relaxed">The excimer laser gently reshapes the cornea. This active laser time usually lasts less than 30 seconds per eye.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm mb-12">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">Benefits of our Laser Treatment</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex gap-3">
<iconify-icon className="text-teal-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-slate-600">Quick procedure, performed as an outpatient.</p>
</div>
<div className="flex gap-3">
<iconify-icon className="text-teal-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-slate-600">Painless treatment with anesthetic drops.</p>
</div>
<div className="flex gap-3">
<iconify-icon className="text-teal-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-slate-600">Rapid recovery; clear vision often by next day.</p>
</div>
<div className="flex gap-3">
<iconify-icon className="text-teal-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-sm text-slate-600">Long-lasting results and visual freedom.</p>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
