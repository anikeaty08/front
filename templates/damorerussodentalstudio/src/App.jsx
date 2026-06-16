import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
cyan: '#3FC4E0', // Primary Brand Color from source
blue: '#3D9BE9', // Secondary Brand Color from source
dark: '#071F4E',
light: '#F7F5E1', // Background tint from source
}
}
}
}
}



        const btn = document.getElementById('mobile-toggle');
        const menu = document.getElementById('mobile-menu');
        const openIcon = document.getElementById('menu-icon-open');
        const closeIcon = document.getElementById('menu-icon-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            // Toggle visibility classes based on requirement A (opacity/pointer-events)
            menu.classList.toggle('opacity-0');
            menu.classList.toggle('pointer-events-none');
            menu.classList.toggle('opacity-100');
            menu.classList.toggle('pointer-events-auto');
            
            // Toggle Icons
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }

        btn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menu.classList.contains('opacity-100')) {
                    toggleMenu();
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">

<div className="hidden lg:block bg-slate-50 border-b border-slate-100 py-2">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs font-medium text-slate-500">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 hover:text-[#3D9BE9] transition-colors cursor-pointer">
<iconify-icon className="text-[#3FC4E0] text-sm" icon="solar:map-point-linear"></iconify-icon>
                        100 Grove Street, Montclair, NJ 07042
                    </span>
<a className="flex items-center gap-1.5 hover:text-[#3D9BE9] transition-colors" href="tel:9732331161">
<iconify-icon className="text-[#3FC4E0] text-sm" icon="solar:phone-calling-linear"></iconify-icon>
                        (973) 233-1161
                    </a>
</div>
<div className="flex items-center gap-4">
<span>NJ Monthly Top Dentist 2024</span>
<div className="h-3 w-px bg-slate-200"></div>
<a className="text-[#3D9BE9]" href="#new-patients">New Patients Welcome</a>
</div>
</div>
</div>

<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex items-center justify-between">

<a className="flex items-center gap-3 group z-50 relative" href="#">
<div className="relative w-10 h-10 overflow-hidden rounded-lg">

<div className="w-full h-full bg-[#3FC4E0] flex items-center justify-center text-white font-bold text-xl">D</div>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">D'Amore Russo</span>
<span className="text-xs font-medium text-[#3D9BE9] tracking-wide mt-0.5">Dental Design Studio</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#3FC4E0] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#3FC4E0] transition-colors" href="#doctors">Doctors</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#3FC4E0] transition-colors" href="#location">Locations</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#3FC4E0] transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#3FC4E0] transition-colors" href="#new-patients">New Patients</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-600 hover:border-[#3FC4E0] hover:text-[#3FC4E0] transition-all" href="tel:9732331161">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 bg-[#3FC4E0] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#3D9BE9] transition-all shadow-lg shadow-cyan-500/20 transform hover:-translate-y-0.5" href="#book">
                    Book Appointment
                </a>
</div>

<button aria-label="Toggle menu" className="lg:hidden z-50 p-2 text-slate-800 focus:outline-none" id="mobile-toggle">
<iconify-icon className="w-7 h-7" icon="solar:hamburger-menu-linear" id="menu-icon-open"></iconify-icon>
<iconify-icon className="w-7 h-7 hidden" icon="solar:close-circle-linear" id="menu-icon-close"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 opacity-0 pointer-events-none flex flex-col justify-center items-center gap-8 lg:hidden transition-all duration-300" id="mobile-menu">
<a className="mobile-link text-2xl font-semibold text-slate-800 hover:text-[#3FC4E0]" href="#services">Services</a>
<a className="mobile-link text-2xl font-semibold text-slate-800 hover:text-[#3FC4E0]" href="#doctors">Doctors</a>
<a className="mobile-link text-2xl font-semibold text-slate-800 hover:text-[#3FC4E0]" href="#location">Location</a>
<a className="mobile-link text-2xl font-semibold text-slate-800 hover:text-[#3FC4E0]" href="#new-patients">New Patients</a>
<a className="mobile-link text-2xl font-semibold text-slate-800 hover:text-[#3FC4E0]" href="#reviews">Reviews</a>
<div className="flex flex-col gap-4 w-full px-10 mt-4">
<a className="mobile-link w-full text-center bg-[#3FC4E0] text-white text-lg font-semibold px-6 py-4 rounded-xl shadow-xl" href="#book">
                    Request Appointment
                </a>
<a className="w-full text-center border border-slate-200 text-slate-600 text-lg font-semibold px-6 py-4 rounded-xl" href="tel:9732331161">
                    Call (973) 233-1161
                </a>
</div>
</div>
</header>

<section className="relative pt-28 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3FC4E0]/10 border border-[#3FC4E0]/20 text-[#3D9BE9] text-xs font-bold uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Design Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3FC4E0] to-[#3D9BE9]">Smile With Us</span>
</h1>
<p className="text-lg text-slate-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Experience comprehensive dental care in Montclair, NJ. Led by Dr. Joseph D'Amore and Dr. Michela Russo, we combine artistry with advanced technology.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex justify-center items-center gap-2 bg-[#3FC4E0] text-white text-base font-semibold px-8 py-4 rounded-full shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-1 hover:bg-[#3D9BE9] transition-all" href="#book">
                            Request Appointment
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 text-base font-semibold px-8 py-4 rounded-full hover:border-[#3FC4E0] hover:text-[#3FC4E0] transition-all" href="tel:9732331161">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                            (973) 233-1161
                        </a>
</div>

<div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden">
<img alt="Top Dentist" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/592697_4c685a0a4f764fed8e16e64625406946~mv2.png/v1/fill/w_465,h_624,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-07-15%20at%203_47_23%20PM.png"/>
</div>
</div>
<div className="text-sm">
<p className="font-bold text-slate-900">NJ Top Dentist</p>
<p className="text-slate-500">Awarded 2024</p>
</div>
</div>
<div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-yellow-400 text-lg" icon="solar:star-bold"></iconify-icon>
<span className="ml-2 font-medium text-slate-600">5.0 Star Rating</span>
</div>
</div>
</div>

<div className="relative mt-8 lg:mt-0">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-cyan-900/10 group">

<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none"></div>
<img alt="Montclair Dental Office" className="w-full h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://static.wixstatic.com/media/c854fe_6215fa69f3ad47f4bee0cf642fc9dd7d~mv2_d_3600_2400_s_4_2.jpg/v1/fill/w_1948,h_991,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c854fe_6215fa69f3ad47f4bee0cf642fc9dd7d~mv2_d_3600_2400_s_4_2.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg z-20 flex items-center justify-between">
<div>
<p className="text-xs font-bold uppercase tracking-wider text-[#3D9BE9] mb-1">Our Location</p>
<p className="font-semibold text-slate-900">100 Grove Street, Montclair</p>
</div>
<div className="w-10 h-10 rounded-full bg-[#3FC4E0]/10 flex items-center justify-center text-[#3FC4E0]">
<iconify-icon className="text-xl" icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 -right-12 translate-x-0 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl bg-[#3FC4E0]/30"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-sm font-bold text-[#3D9BE9] uppercase tracking-widest mb-3">Comprehensive Care</h2>
<h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">World-Class Dental Services</h3>
<p className="text-lg text-slate-500">From routine hygiene to complex implants, our Montclair studio offers a full range of treatments tailored to your needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#3FC4E0]/30 transition-all group">
<div className="w-12 h-12 rounded-xl bg-[#3FC4E0]/10 flex items-center justify-center text-[#3FC4E0] mb-6 group-hover:bg-[#3FC4E0] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:star-shine-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Teeth Whitening</h4>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Brighten your smile safely with our professional whitening treatments.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#3FC4E0]/30 transition-all group">
<div className="w-12 h-12 rounded-xl bg-[#3FC4E0]/10 flex items-center justify-center text-[#3FC4E0] mb-6 group-hover:bg-[#3FC4E0] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Porcelain Veneers</h4>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Transform your smile with custom-crafted porcelain veneers.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#3FC4E0]/30 transition-all group">
<div className="w-12 h-12 rounded-xl bg-[#3FC4E0]/10 flex items-center justify-center text-[#3FC4E0] mb-6 group-hover:bg-[#3FC4E0] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Crowns &amp; Implants</h4>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Restorative solutions to bring back function and aesthetics.</p>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#3FC4E0]/30 transition-all group">
<div className="w-12 h-12 rounded-xl bg-[#3FC4E0]/10 flex items-center justify-center text-[#3FC4E0] mb-6 group-hover:bg-[#3FC4E0] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Exams &amp; Hygiene</h4>
<p className="text-slate-500 mb-4 text-sm leading-relaxed">Preventative care including thorough exams and cleanings.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-slate-500 mb-4">Also offering: <span className="font-medium text-slate-900">Bonding, Dentures, and more.</span></p>
<a className="text-[#3D9BE9] font-semibold hover:underline inline-flex items-center gap-1" href="#book">
                    Book a consultation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="doctors">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="relative rounded-3xl overflow-hidden shadow-2xl">
<img alt="Dr. D'Amore and Dr. Russo" className="w-full object-cover" src="https://static.wixstatic.com/media/c854fe_cf17df5392ab401998907cd120fb558f~mv2.jpeg/v1/fill/w_600,h_800,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c854fe_cf17df5392ab401998907cd120fb558f~mv2.jpeg"/>
</div>

<div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block">
<iconify-icon className="text-[#3FC4E0] text-3xl mb-2" icon="solar:quote-up-bold"></iconify-icon>
<p className="text-sm text-slate-600 italic">"We envisioned this in our dream, which after many years, has become a reality."</p>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Meet Your Doctors</h2>
<h3 className="text-2xl font-semibold text-[#3D9BE9] mb-2">Joseph D'Amore, DDS</h3>
<h3 className="text-2xl font-semibold text-[#3D9BE9] mb-6">Michela Russo, DDS</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        After many years of collaborating individually with accomplished successful practices, we decided to bring our vision together to Montclair, NJ. 
                    </p>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        This photo tells a story in so many different ways. The importance of family, well-being, and overall health all begin with a healthy natural smile.
                    </p>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-slate-800 transition-all" href="#book">
                            Schedule Visit
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#3FC4E0]/5" id="new-patients">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-10 md:p-16 flex flex-col justify-center">
<h2 className="text-3xl font-bold text-slate-900 mb-4">New Patient Information</h2>
<p className="text-slate-500 mb-8 text-lg">We strive to make your first visit seamless. Please access our forms online to save time during your appointment.</p>
<div className="space-y-4">
<a className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-[#3FC4E0]/10 border border-slate-100 hover:border-[#3FC4E0] transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#3D9BE9]" icon="solar:document-add-linear"></iconify-icon>
<span className="font-semibold text-slate-700">Healthy Life Style Program Form</span>
</div>
<iconify-icon className="text-slate-400 group-hover:text-[#3D9BE9]" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#3D9BE9]" icon="solar:card-linear"></iconify-icon>
<span className="font-semibold text-slate-700">Insurance &amp; Payment</span>
</div>
<span className="text-sm text-slate-500">Contact office for details</span>
</div>
</div>
</div>
<div className="bg-[#3D9BE9] p-10 md:p-16 text-white flex flex-col justify-center">
<h3 className="text-2xl font-bold mb-6">Office Hours</h3>
<ul className="space-y-4 text-white/90 font-medium">
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Monday - Tuesday</span>
<span>9:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Wednesday</span>
<span>9:00 AM - 2:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Thursday</span>
<span>8:00 AM - 8:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/20 pb-2">
<span>Friday - Saturday</span>
<span>9:00 AM - 2:00 PM</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span>Closed</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/20">
<p className="text-sm mb-2 text-white/80"><iconify-icon className="inline mr-1" icon="solar:clock-circle-linear"></iconify-icon> Early appointments available upon request.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="book">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

<div className="lg:col-span-3">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Request an Appointment</h2>
<p className="text-slate-500 mb-10">Fill out the form below and we will contact you to confirm your appointment time.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-700">Full Name *</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3FC4E0] focus:ring-1 focus:ring-[#3FC4E0] transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-700">Phone Number *</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3FC4E0] focus:ring-1 focus:ring-[#3FC4E0] transition-all" placeholder="(973) 555-0123" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-700">Email Address *</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3FC4E0] focus:ring-1 focus:ring-[#3FC4E0] transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-700">Reason for Visit</label>
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3FC4E0] focus:ring-1 focus:ring-[#3FC4E0] transition-all text-slate-600">
<option>General Checkup &amp; Cleaning</option>
<option>New Patient Exam</option>
<option>Tooth Pain / Emergency</option>
<option>Whitening / Cosmetic</option>
<option>Implants / Restoration</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-700">Preferred Date &amp; Time</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3FC4E0] focus:ring-1 focus:ring-[#3FC4E0] transition-all" placeholder="e.g. Tuesday mornings or Jan 15th" type="text"/>
</div>
<div className="space-y-1">
<label className="text-sm font-semibold text-slate-700">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#3FC4E0] focus:ring-1 focus:ring-[#3FC4E0] transition-all" placeholder="Any specific concerns or questions?" rows="4"></textarea>
</div>
<button className="w-full bg-[#3FC4E0] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-cyan-500/20 hover:bg-[#3D9BE9] transition-all flex items-center justify-center gap-2" type="button">
                            Submit Request
                            <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-xs text-slate-400 text-center">Note: This form connects to our instant email autoresponder. Staff will confirm shortly.</p>
</form>
</div>

<div className="lg:col-span-2 space-y-8" id="location">
<div>
<h3 className="text-xl font-bold text-slate-900 mb-4">Our Location</h3>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="font-medium text-slate-800 mb-2">100 Grove Street</p>
<p className="font-medium text-slate-800 mb-4">Montclair, NJ 07042</p>
<a className="text-[#3D9BE9] font-semibold hover:underline text-sm flex items-center gap-1" href="https://maps.google.com/?q=100+Grove+Street+Montclair+NJ+07042" target="_blank">
                                Get Directions <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900 mb-4">Contact Info</h3>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#3FC4E0] transition-all group" href="tel:9732331161">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3D9BE9] shadow-sm">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase font-bold tracking-wide">Phone</p>
<p className="font-semibold text-slate-700 group-hover:text-[#3D9BE9]">(973) 233-1161</p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#3FC4E0] transition-all group" href="mailto:drddssmiles@gmail.com">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#3D9BE9] shadow-sm">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase font-bold tracking-wide">Email</p>
<p className="font-semibold text-slate-700 group-hover:text-[#3D9BE9]">drddssmiles@gmail.com</p>
</div>
</a>
</div>
</div>
<div className="bg-[#78961A]/10 p-4 rounded-2xl border border-[#78961A]/20">
<p className="text-[#78961A] text-sm font-medium">
<iconify-icon className="inline mr-1" icon="solar:leaf-bold"></iconify-icon>
                            Our location was the first Gold Core &amp; Shell LEED certified building in NJ.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<span className="text-xl font-bold text-white tracking-tight mb-4 block">D'Amore Russo</span>
<p className="text-sm mb-6 max-w-xs">
                        DrDDS of Montclair offers premier dental services in Essex County, NJ. Design your smile with us.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3D9BE9] hover:text-white transition-all text-white" href="https://www.facebook.com/drddssmilesofmontclair/" target="_blank">
<iconify-icon icon="brandico:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#3D9BE9] hover:text-white transition-all text-white" href="https://www.instagram.com/DRDDSSMILES/" target="_blank">
<iconify-icon icon="brandico:instagram"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-4">Practice</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#3FC4E0] transition-colors" href="#doctors">Our Doctors</a></li>
<li><a className="hover:text-[#3FC4E0] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#3FC4E0] transition-colors" href="#reviews">Patient Reviews</a></li>
<li><a className="hover:text-[#3FC4E0] transition-colors" href="#new-patients">New Patient Forms</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#3FC4E0] transition-colors" href="#">Teeth Whitening</a></li>
<li><a className="hover:text-[#3FC4E0] transition-colors" href="#">Porcelain Veneers</a></li>
<li><a className="hover:text-[#3FC4E0] transition-colors" href="#">Implants &amp; Crowns</a></li>
<li><a className="hover:text-[#3FC4E0] transition-colors" href="#">General Hygiene</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 text-[#3FC4E0]" icon="solar:map-point-linear"></iconify-icon>
                            100 Grove Street<br/>Montclair, NJ 07042
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#3FC4E0]" icon="solar:phone-linear"></iconify-icon>
                            (973) 233-1161
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#3FC4E0]" icon="solar:letter-linear"></iconify-icon>
                            drddssmiles@gmail.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
<p>© 2024 D'Amore Russo Dental Design Studio. All rights reserved.</p>
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
