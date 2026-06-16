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
            const pupilContainer = document.getElementById('pupil-container');
            const eyeSvg = document.getElementById('interactive-eye');

            if (!pupilContainer || !eyeSvg) return;

            document.addEventListener('mousemove', (e) => {
                const rect = eyeSvg.getBoundingClientRect();
                
                // Center of the eye SVG
                const eyeCenterX = rect.left + rect.width / 2;
                const eyeCenterY = rect.top + rect.height / 2;
                
                // Calculate angle from eye center to mouse cursor
                const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
                
                // Calculate distance, limit it so pupil doesn't leave the eye
                // Max movement radius is roughly 15-20 units in SVG coordinate space
                const maxDistance = 20; 
                
                // Actual distance between mouse and eye center
                const actualDistance = Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY);
                
                // Normalize distance factor (scale it down so mouse movements feel natural)
                const distanceFactor = Math.min(maxDistance, actualDistance / 15);
                
                // Calculate new X and Y transform
                const moveX = Math.cos(angle) * distanceFactor;
                const moveY = Math.sin(angle) * distanceFactor;
                
                // Apply transform
                pupilContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
            
            // Reset pupil when mouse leaves window
            document.addEventListener('mouseleave', () => {
                pupilContainer.style.transform = `translate(0px, 0px)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 glass-panel border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-sky-400 flex items-center justify-center text-white">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">ACM</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-teal-600 transition-colors" href="#services">Treatments</a>
<a className="hover:text-teal-600 transition-colors" href="#team">Our Doctors</a>
<a className="hover:text-teal-600 transition-colors" href="#locations">Locations</a>
<a className="hover:text-teal-600 transition-colors" href="#about">About</a>
</div>
<a className="btn-eye-custom bg-slate-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-teal-600 shadow-lg shadow-slate-200" href="#contact">
                Book Appointment
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-bg">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                    Premium Ophthalmology Clinic
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Your Vision in <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-500">Expert Hands</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed font-light max-w-lg">
                    Experience state-of-the-art diagnostics, specialized laser treatments, and compassionate eye care tailored to your unique needs in Mülheim.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="btn-eye-custom bg-teal-600 text-white px-8 py-3.5 text-sm font-medium hover:bg-teal-700 shadow-xl shadow-teal-500/20 flex items-center gap-2" href="#contact">
                        Book Appointment
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="btn-eye px-8 py-3.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2" href="#services">
                        Our Treatments
                    </a>
</div>
</div>

<div className="relative z-10 flex justify-center items-center h-[400px] lg:h-[500px]">

<div className="absolute inset-0 bg-teal-400/10 blur-3xl rounded-full"></div>

<svg className="w-full max-w-md drop-shadow-2xl overflow-visible" id="interactive-eye" viewbox="0 0 200 200">
<defs>
<lineargradient id="eyeGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="100%" stop-color="#f8fafc"></stop>
</lineargradient>
<lineargradient id="irisGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#14b8a6"></stop> 
<stop offset="100%" stop-color="#0ea5e9"></stop> 
</lineargradient>
</defs>

<path d="M10,100 Q100,20 190,100 Q100,180 10,100" fill="url(#eyeGrad)" stroke="#e2e8f0" strokeWidth="2"></path>

<g className="transition-transform duration-75 ease-out" id="pupil-container" transform="translate(0,0)">

<circle cx="100" cy="100" fill="url(#irisGrad)" r="40"></circle>

<circle cx="100" cy="100" fill="none" r="38" stroke="rgba(255,255,255,0.2)" stroke-dasharray="2 4" strokeWidth="1"></circle>

<circle cx="100" cy="100" fill="#0f172a" r="16"></circle> 

<circle cx="112" cy="88" fill="white" opacity="0.8" r="6"></circle>
<circle cx="92" cy="95" fill="white" opacity="0.4" r="3"></circle>
</g>
</svg>
</div>
</div>
</section>

<section className="relative z-20 max-w-7xl mx-auto px-6 -mt-12 lg:-mt-24 mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Opening Hours</h3>
<p className="text-xs text-slate-500 leading-relaxed">Mon - Fri: 08:00 - 18:00<br/>Weekend: Closed</p>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 mb-4">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Main Address</h3>
<p className="text-xs text-slate-500 leading-relaxed">Schloßstraße 22<br/>45468 Mülheim an der Ruhr</p>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Contact Us</h3>
<p className="text-xs text-slate-500 leading-relaxed">+49 208 123 4567<br/>info@augencentrum-mh.de</p>
</div>

<div className="bg-slate-900 rounded-2xl p-6 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.3)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
<div>
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white mb-4">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Emergency / Quick Check</h3>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-teal-400 mt-4 group" href="#contact">
                    Book immediately 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Eye Care</h2>
<p className="text-slate-500 text-sm leading-relaxed">From routine diagnostics to advanced laser treatments, we utilize the latest technology to ensure optimal visual health.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-teal-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:eye-scan-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Laser Eye Surgery</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Advanced LASIK and PRK procedures to correct vision and reduce dependence on glasses.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-teal-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:test-tube-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Cataract Treatment</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">State-of-the-art lens replacement surgery restoring clarity and vibrant vision to your world.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-teal-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:medical-kit-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Glaucoma Diagnostics</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Early detection and continuous management to protect your optic nerve and prevent vision loss.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-teal-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:glasses-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">General Ophthalmology</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Comprehensive eye exams, prescriptions, and preventative care for the entire family.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-teal-100 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Macular Degeneration</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Specialized therapies and intravitreal injections to preserve central vision effectively.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 group-hover:text-teal-600 transition-colors" href="#">
                        Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl bg-gradient-to-br from-teal-600 to-sky-600 flex flex-col justify-center items-start text-white">
<h3 className="text-xl font-semibold mb-2 tracking-tight">Not sure what you need?</h3>
<p className="text-teal-50 text-sm mb-6 opacity-90">Schedule a general consultation to discuss your vision goals.</p>
<a className="btn-eye bg-white text-teal-700 px-6 py-2.5 text-sm font-medium hover:bg-slate-50 transition-colors" href="#contact">
                        Consult an Expert
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Leading Specialists</h2>
<p className="text-slate-500 text-sm leading-relaxed">Our team of highly qualified ophthalmologists combines decades of clinical experience with ongoing research.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm relative group overflow-hidden">

<div className="absolute top-6 right-6 text-slate-200 group-hover:text-teal-100 transition-colors z-10">
<iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<div className="mb-5 relative z-10">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Dr. med. Thomas Bauer</h3>
<p className="text-teal-600 text-xs font-medium mt-1 uppercase tracking-wider">Chief Surgeon / Founder</p>
</div>
<div className="rounded-2xl overflow-hidden mb-5 bg-slate-100 aspect-[4/3]">
<img alt="Dr. Thomas Bauer" className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Specializing in refractive laser surgery, complex cataract procedures, and premium intraocular lenses.</p>
<div className="flex items-center gap-3">
<button className="flex-1 bg-slate-900 text-white rounded-xl py-2.5 text-xs font-medium hover:bg-teal-600 transition-colors">Book Appt.</button>
<button className="flex-1 bg-white border border-slate-200 text-slate-600 rounded-xl py-2.5 text-xs font-medium hover:bg-slate-50 transition-colors">View Profile</button>
</div>
</div>

<div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm relative group overflow-hidden">
<div className="absolute top-6 right-6 text-slate-200 group-hover:text-teal-100 transition-colors z-10">
<iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<div className="mb-5 relative z-10">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Dr. med. Julia Schmidt</h3>
<p className="text-teal-600 text-xs font-medium mt-1 uppercase tracking-wider">Ophthalmologist</p>
</div>
<div className="rounded-2xl overflow-hidden mb-5 bg-slate-100 aspect-[4/3]">
<img alt="Dr. Julia Schmidt" className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Expert in glaucoma diagnostics, medical retina, and conservative ophthalmology.</p>
<div className="flex items-center gap-3">
<button className="flex-1 bg-slate-900 text-white rounded-xl py-2.5 text-xs font-medium hover:bg-teal-600 transition-colors">Book Appt.</button>
<button className="flex-1 bg-white border border-slate-200 text-slate-600 rounded-xl py-2.5 text-xs font-medium hover:bg-slate-50 transition-colors">View Profile</button>
</div>
</div>

<div className="bg-white rounded-3xl p-6 border border-slate-200/60 shadow-sm relative group overflow-hidden">
<div className="absolute top-6 right-6 text-slate-200 group-hover:text-teal-100 transition-colors z-10">
<iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<div className="mb-5 relative z-10">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Dr. med. Lukas Weber</h3>
<p className="text-teal-600 text-xs font-medium mt-1 uppercase tracking-wider">Retina Specialist</p>
</div>
<div className="rounded-2xl overflow-hidden mb-5 bg-slate-100 aspect-[4/3]">
<img alt="Dr. Lukas Weber" className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Focuses on age-related macular degeneration (AMD) and advanced vitreo-retinal surgeries.</p>
<div className="flex items-center gap-3">
<button className="flex-1 bg-slate-900 text-white rounded-xl py-2.5 text-xs font-medium hover:bg-teal-600 transition-colors">Book Appt.</button>
<button className="flex-1 bg-white border border-slate-200 text-slate-600 rounded-xl py-2.5 text-xs font-medium hover:bg-slate-50 transition-colors">View Profile</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-stretch">

<div className="p-10 md:p-14 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-center">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-teal-600 mb-8 shadow-sm">
<iconify-icon icon="solar:info-circle-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Pioneering Vision Care in Mülheim</h2>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Since our foundation, Augencentrum Mülheim has been dedicated to providing the highest standard of medical and surgical eye care. We believe that every patient deserves personalized attention combined with cutting-edge medical technology.
                    </p>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">
                        Our modern clinic environment is designed to make you feel comfortable and secure, while our expert team ensures precise diagnostics and effective treatments.
                    </p>
<div className="mt-auto">
<img alt="Clinic Interior" className="w-full h-48 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center text-white relative overflow-hidden">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-teal-400 mb-8 backdrop-blur-md border border-white/10 relative z-10">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6 relative z-10">Join Our Expert Team</h2>
<p className="text-sm text-slate-300 mb-8 leading-relaxed relative z-10">
                        We are constantly looking for passionate medical professionals, from trained ophthalmologists to dedicated medical assistants. Build your career in a high-end, supportive, and technologically advanced environment.
                    </p>
<ul className="space-y-4 mb-10 relative z-10">
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear"></iconify-icon> State-of-the-art workplace
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear"></iconify-icon> Continuous education &amp; training
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-teal-400" icon="solar:check-circle-linear"></iconify-icon> Attractive compensation packages
                        </li>
</ul>
<div className="mt-auto relative z-10">
<a className="btn-eye-custom inline-block bg-teal-500 text-slate-900 px-8 py-3.5 text-sm font-medium hover:bg-teal-400 transition-colors" href="#">
                            Apply Now
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200/50" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Our Locations</h2>
<p className="text-slate-500 text-sm">Always close to you. We operate four specialized clinics to ensure rapid access to premium eye care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col">
<h3 className="text-base font-semibold text-slate-900 mb-1">Mülheim Zentrum</h3>
<p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-100">Main Surgical Center</p>
<p className="text-sm text-slate-600 mb-6 flex-1">Schloßstraße 22<br/>45468 Mülheim a.d. Ruhr</p>
<a className="text-xs font-medium text-teal-600 flex items-center gap-1 hover:text-teal-700" href="#">
                        Get Directions <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col">
<h3 className="text-base font-semibold text-slate-900 mb-1">Mülheim Saarn</h3>
<p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-100">Diagnostics &amp; Care</p>
<p className="text-sm text-slate-600 mb-6 flex-1">Düsseldorfer Str. 12<br/>45481 Mülheim a.d. Ruhr</p>
<a className="text-xs font-medium text-teal-600 flex items-center gap-1 hover:text-teal-700" href="#">
                        Get Directions <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col">
<h3 className="text-base font-semibold text-slate-900 mb-1">Oberhausen</h3>
<p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-100">General Ophthalmology</p>
<p className="text-sm text-slate-600 mb-6 flex-1">Marktstraße 45<br/>46045 Oberhausen</p>
<a className="text-xs font-medium text-teal-600 flex items-center gap-1 hover:text-teal-700" href="#">
                        Get Directions <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col">
<h3 className="text-base font-semibold text-slate-900 mb-1">Essen Kettwig</h3>
<p className="text-xs text-slate-400 mb-4 pb-4 border-b border-slate-100">Pediatric &amp; General</p>
<p className="text-sm text-slate-600 mb-6 flex-1">Hauptstraße 88<br/>45219 Essen</p>
<a className="text-xs font-medium text-teal-600 flex items-center gap-1 hover:text-teal-700" href="#">
                        Get Directions <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Patient Stories</h2>
</div>

<div className="flex gap-6 px-6 pb-8 overflow-x-auto no-scrollbar snap-x snap-mandatory" style={{scrollPaddingLeft: '1.5rem'}}>

<div className="snap-start shrink-0 w-[300px] md:w-[400px] bg-slate-50 p-8 rounded-3xl border border-slate-100">
<div className="flex gap-1 text-teal-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-8 italic">"After years of wearing heavy glasses, the LASIK procedure here completely changed my life. The clinic feels like a luxury hotel, and the doctors are incredibly professional."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-medium">MH</div>
<div>
<p className="text-xs font-semibold text-slate-900">Michael H.</p>
<p className="text-[10px] text-slate-400">LASIK Patient</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[300px] md:w-[400px] bg-slate-50 p-8 rounded-3xl border border-slate-100">
<div className="flex gap-1 text-teal-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-8 italic">"My cataract surgery was flawless. Dr. Bauer explained everything so calmly. The morning after the surgery, colors were vibrant again. Excellent post-care."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-medium">SB</div>
<div>
<p className="text-xs font-semibold text-slate-900">Sabine B.</p>
<p className="text-[10px] text-slate-400">Cataract Surgery</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[300px] md:w-[400px] bg-slate-50 p-8 rounded-3xl border border-slate-100">
<div className="flex gap-1 text-teal-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-8 italic">"Very modern equipment, practically no waiting times, and a super friendly team. Highly recommend for regular checkups."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-medium">KL</div>
<div>
<p className="text-xs font-semibold text-slate-900">Kevin L.</p>
<p className="text-[10px] text-slate-400">General Checkup</p>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-[300px] md:w-[400px] bg-slate-50 p-8 rounded-3xl border border-slate-100">
<div className="flex gap-1 text-teal-500 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-8 italic">"Fast appointment scheduling online. The clinic in Saarn is beautiful and parking is easy. Medical care is top tier."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-medium">AM</div>
<div>
<p className="text-xs font-semibold text-slate-900">Anna M.</p>
<p className="text-[10px] text-slate-400">Glaucoma Screening</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Inside the Clinic</h2>
<p className="text-sm text-slate-400">Follow us on social media for insights and eye health tips.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon> @augencentrum_mh
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-slate-800">
<img alt="Clinic Insight" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-slate-800">
<img alt="Doctor explaining" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-slate-800">
<img alt="Tech" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer bg-slate-800">
<img alt="Happy patient" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Frequently Asked Questions</h2>
<p className="text-sm text-slate-500 mb-10">Find quick answers to common inquiries.</p>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-slate-800">
                                How long does a routine eye exam take?
                                <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                A standard comprehensive eye examination typically takes between 30 to 45 minutes. If dilation drops are required, please allow an additional 20 minutes for them to take effect.
                            </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-slate-800">
                                Am I a candidate for laser eye surgery?
                                <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Most individuals over 18 with a stable prescription for at least a year are candidates. However, a detailed preliminary check-up is necessary to assess your corneal thickness and overall eye health.
                            </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-slate-800">
                                Do I need a referral from my general practitioner?
                                <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                For publicly insured patients in Germany, a referral is helpful but not strictly mandatory for standard appointments. For specialized surgical consults, it is recommended.
                            </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-slate-800">
                                What should I bring to my first appointment?
                                <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-slate-500 leading-relaxed">
                                Please bring your insurance card, current glasses or contact lenses, a list of current medications, and any previous ophthalmological records if available.
                            </div>
</details>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)]">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Send us a message</h3>
</div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Phone Number (Optional)</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" placeholder="+49 ..." type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 ml-1">Message / Request</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none" placeholder="I would like to schedule a consultation..." rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full btn-eye-custom bg-slate-900 text-white py-3.5 text-sm font-medium hover:bg-teal-600 transition-colors shadow-md" type="button">
                                Send Message
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center px-6">
<div className="max-w-3xl mx-auto">
<iconify-icon className="text-teal-100 text-6xl mb-6" icon="solar:quote-left-bold"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                "Your vision deserves the highest level of care."
            </h2>
<p className="text-slate-500 text-sm uppercase tracking-widest font-medium">Augencentrum Mülheim</p>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200/60 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">ACM</span>
</a>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">
                        Premium ophthalmology and laser eye center serving the Ruhr area with excellence and compassion.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:border-teal-200 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:border-teal-200 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-teal-600 hover:border-teal-200 transition-colors" href="#"><iconify-icon icon="solar:map-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-6">Treatments</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Laser Eye Surgery</a></li>
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Cataract Operations</a></li>
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Glaucoma Therapy</a></li>
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Macular Degeneration</a></li>
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Pediatric Ophthalmology</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-6">Clinic</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Our Team</a></li>
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Career &amp; Jobs</a></li>
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Technology</a></li>
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Locations</a></li>
<li><a className="text-xs text-slate-500 hover:text-teal-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-600 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs text-slate-500">Schloßstraße 22<br/>45468 Mülheim an der Ruhr</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-600" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-xs text-slate-500">+49 208 123 4567</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-600" icon="solar:letter-linear"></iconify-icon>
<span className="text-xs text-slate-500">info@augencentrum-mh.de</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[11px] text-slate-400">© 2024 Augencentrum Mülheim. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-[11px] text-slate-400 hover:text-slate-600" href="#">Imprint</a>
<a className="text-[11px] text-slate-400 hover:text-slate-600" href="#">Privacy Policy</a>
<a className="text-[11px] text-slate-400 hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



<div className="max-w-7xl mx-auto px-6 mt-32 mb-10 pt-10 border-t-2 border-dashed border-slate-300">
<h2 className="text-xs font-semibold text-slate-400 tracking-widest uppercase mb-2">Development Assets</h2>
<p className="text-2xl font-semibold tracking-tight text-slate-900 mb-10">Underlying Page Structures</p>

<div className="mb-20">
<h3 className="text-sm font-medium text-teal-600 mb-4 bg-teal-50 inline-block px-3 py-1 rounded-md">Template 1: Doctor Profile Page</h3>
<div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
<div className="grid md:grid-cols-3 gap-0">

<div className="md:col-span-1 bg-slate-100 relative">
<img alt="Doctor" className="w-full h-full object-cover min-h-[400px] grayscale-[20%]" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-2 p-10 md:p-14">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-4">
                            Chief Surgeon
                        </div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Dr. med. Thomas Bauer</h1>
<p className="text-sm text-teal-600 mb-8 font-medium">Specialist in Ophthalmology &amp; Refractive Surgery</p>
<div className="space-y-6 mb-10">
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Biography</h4>
<p className="text-sm text-slate-500 leading-relaxed">Dr. Bauer has over 20 years of experience in microscopic eye surgery. He completed his residency at the University Eye Clinic and has since specialized in minimally invasive cataract surgery and laser vision correction.</p>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Qualifications</h4>
<ul className="text-sm text-slate-500 space-y-1">
<li>• Board Certified Ophthalmologist</li>
<li>• FEBO (Fellow of European Board)</li>
<li>• MD, Medical University of Berlin</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Specialties</h4>
<ul className="text-sm text-slate-500 space-y-1">
<li>• Femto-LASIK</li>
<li>• Premium IOL Implantation</li>
<li>• Corneal Diseases</li>
</ul>
</div>
</div>
</div>
<div className="pt-6 border-t border-slate-100 flex items-center gap-4">
<button className="btn-eye-custom bg-slate-900 text-white px-8 py-3 text-sm font-medium hover:bg-teal-600 transition-colors">Book Consultation</button>
<button className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50"><iconify-icon icon="solar:share-linear" width="20"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>

<div className="mb-20">
<h3 className="text-sm font-medium text-sky-600 mb-4 bg-sky-50 inline-block px-3 py-1 rounded-md">Template 2: Service / Treatment Page</h3>
<div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden p-1">

<div className="bg-slate-900 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 mb-6">
<iconify-icon icon="solar:eye-scan-linear" width="32"></iconify-icon>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-white mb-4">Laser Eye Surgery (LASIK)</h1>
<p className="text-sm text-slate-300 leading-relaxed">Experience a life without visual aids. Our state-of-the-art laser treatments offer precision, safety, and rapid recovery for myopia, hyperopia, and astigmatism.</p>
</div>
</div>

<div className="p-10 md:p-16 grid md:grid-cols-3 gap-12">

<div className="md:col-span-2 space-y-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Understanding the Procedure</h2>
<p className="text-sm text-slate-500 leading-relaxed mb-4">LASIK (Laser-Assisted In Situ Keratomileusis) is the most commonly performed refractive surgery. It works by reshaping the cornea to enable light entering the eye to be properly focused onto the retina.</p>
<p className="text-sm text-slate-500 leading-relaxed">At Augencentrum Mülheim, we use exclusively Femtosecond lasers, offering a completely blade-free, extremely precise procedure.</p>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">The Process</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-8 h-8 shrink-0 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-bold">1</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Preliminary Examination</h4>
<p className="text-xs text-slate-500">A detailed mapping of your cornea to determine eligibility.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 shrink-0 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-bold">2</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">The Surgery (15 mins)</h4>
<p className="text-xs text-slate-500">Painless reshaping of the cornea using gentle laser pulses.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-8 h-8 shrink-0 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs font-bold">3</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Recovery</h4>
<p className="text-xs text-slate-500">Most patients experience improved vision within 24 hours.</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Key Benefits</h3>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Fast recovery time</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Painless procedure</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Long-lasting results</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Blade-free technology</li>
</ul>
</div>
<div className="bg-teal-600 p-6 rounded-2xl text-white text-center">
<h3 className="text-base font-semibold mb-2">Ready to see clearly?</h3>
<p className="text-xs text-teal-100 mb-6">Book a free suitability check with our specialists.</p>
<button className="w-full btn-eye bg-white text-teal-700 py-3 text-sm font-medium hover:bg-slate-50 transition-colors">Book Suitability Check</button>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
