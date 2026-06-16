import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar Scroll Effect
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md', 'py-0');
            } else {
                nav.classList.remove('shadow-md');
            }
        });

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('opacity-0')) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                menu.classList.add('opacity-0', 'pointer-events-none');
            }
        }
        document.getElementById('mobile-toggle').addEventListener('click', toggleMobileMenu);

        // Scroll Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200" id="navbar">

<div className="bg-cyan-900 text-white text-[10px] py-2 px-6 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> 4030 North MacDill Avenue, Tampa, FL</span>
<span className="flex items-center gap-1.5 opacity-80"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Mon-Fri 8:00 AM - 5:00 PM</span>
</div>
<div className="flex items-center gap-4 font-medium tracking-wide">
<span className="flex items-center gap-1.5 text-cyan-200"><iconify-icon icon="solar:star-circle-linear"></iconify-icon> 4.97 Star Rating (500+ Reviews)</span>
<span className="opacity-50">|</span>
<span>Accepting New Patients</span>
</div>
</div>
</div>
<div className="relative flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex flex-col z-50 relative group" href="#">
<span className="font-serif text-xl tracking-tight font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">Weninger Dentistry</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Tampa’s Husband &amp; Wife Team</span>
</a>

<div className="hidden lg:flex items-center gap-1 bg-slate-50/50 rounded-full px-2 py-1.5 border border-slate-100" id="nav-container">
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-700 rounded-full transition-colors" href="#">Home</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-700 rounded-full transition-colors" href="#services">Services</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-700 rounded-full transition-colors" href="#doctors">Doctors</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-700 rounded-full transition-colors" href="#location">Location</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-700 rounded-full transition-colors" href="#new-patients">New Patients</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-cyan-700 rounded-full transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-3 z-50">
<a className="flex flex-col items-end group" href="tel:8138727057">
<span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider group-hover:text-cyan-600 transition-colors">Call Us</span>
<span className="text-sm font-serif font-medium text-slate-900 group-hover:text-cyan-700 transition-colors">813-872-7057</span>
</a>
<a className="bg-cyan-700 text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-cyan-800 transition-all shadow-lg shadow-cyan-900/10 flex items-center gap-2" href="#booking">
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon> Book Appointment
                </a>
</div>

<button aria-label="Menu" className="lg:hidden p-2 z-50 text-slate-900" id="mobile-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-slate-950 z-40 flex flex-col pt-24 px-6 opacity-0 pointer-events-none transition-all duration-300 lg:hidden overflow-y-auto" id="mobile-menu">
<div className="flex flex-col gap-6 pb-20">
<a className="text-2xl font-serif text-white border-b border-white/10 pb-4" href="#" onclick="toggleMobileMenu()">Home</a>
<a className="text-xl text-slate-300 font-light" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-xl text-slate-300 font-light" href="#doctors" onclick="toggleMobileMenu()">Our Doctors</a>
<a className="text-xl text-slate-300 font-light" href="#new-patients" onclick="toggleMobileMenu()">New Patients</a>
<a className="text-xl text-slate-300 font-light" href="#location" onclick="toggleMobileMenu()">Location</a>
<div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
<a className="text-xl text-white font-serif flex items-center gap-3" href="tel:8138727057">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 813-872-7057
                    </a>
<a className="text-sm text-cyan-400 font-medium flex items-center gap-3" href="sms:+18139922483">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon> Text: 813-992-2483
                    </a>
<a className="mt-4 w-full py-4 bg-white text-slate-950 rounded-full text-center text-sm font-semibold" href="#booking" onclick="toggleMobileMenu()">Request Appointment</a>
</div>
</div>
<button className="absolute top-6 right-6 text-white p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full min-h-[650px] lg:h-[90dvh] flex items-center bg-slate-100 overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Weninger Dentistry Office" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent"></div>
</div>
<div className="w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-2xl">
<div className="inline-flex animate-fade-in-up bg-cyan-900/40 border-cyan-500/30 border rounded-full mt-8 mb-6 px-3 py-1 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-cyan-100 font-semibold">Tampa's Trusted Dental Team</span>
</div>
<h1 className="md:text-5xl lg:text-7xl leading-[1.1] animate-fade-in-up delay-100 text-4xl text-white tracking-tight font-serif mb-6 drop-shadow-lg">
                    Trusted, Comfortable &amp; <br/> <span className="italic text-cyan-100/90 font-light">Affordable Care.</span>
</h1>
<p className="leading-relaxed animate-fade-in-up delay-200 bg-clip-text text-xs font-semibold italic text-neutral-50 bg-gradient-to-l from-[#000000] via-white/50 to-[#ffffff] max-w-lg mr-20 mb-8">
                    Welcome to Weninger Dentistry. We are Tampa's husband and wife dental team, focused on your long-term health in a personal, stress-free environment.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
<a className="w-full sm:w-auto px-8 py-4 bg-cyan-600 text-white rounded-full text-xs font-semibold hover:bg-cyan-700 transition-colors text-center shadow-lg shadow-cyan-900/20 tracking-wide uppercase" href="#booking">
                        Book Consultation
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-xs font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2 group tracking-wide uppercase" href="tel:8138727057">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon> Call 813-872-7057
                    </a>
</div>

<div className="flex flex-wrap animate-fade-in-up delay-300 text-xs font-medium text-slate-300 text-left mt-10 mb-8 gap-x-6 gap-y-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:shield-check-linear"></iconify-icon> Most Insurance Accepted
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Family Owned &amp; Operated
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:star-circle-linear"></iconify-icon> 500+ 5-Star Reviews
                    </div>
</div>
</div>
</div>
</header>

<section className="bg-white pt-24 pr-6 pb-24 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div className="">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Comprehensive Care</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-slate-900">Dental Services</h2>
</div>
<p className="max-w-md text-slate-500 text-sm mt-4 md:mt-0 leading-relaxed">
                    From routine cleanings to advanced cosmetic transformations, our team uses state-of-the-art technology to ensure your comfort.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 reveal-on-scroll">
<div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">General &amp; Family</h3>
<ul className="space-y-2.5">
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Cleanings &amp; Exams</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Dental Fillings</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> 3D Imaging / X-Rays</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Periodontal Care</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Oral Cancer Exams</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">Cosmetic</h3>
<ul className="space-y-2.5">
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Porcelain Veneers</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Teeth Whitening</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Botox &amp; Juvéderm</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Invisalign / Straightening</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Smile Makeovers</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">Restorative</h3>
<ul className="space-y-2.5">
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Dental Implants</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Crowns &amp; Bridges</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Dentures &amp; Stabilization</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Cracked Tooth Repair</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Wisdom Teeth Removal</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-cyan-100 text-cyan-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sleeping-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif font-semibold text-slate-900 mb-4">Sedation &amp; Comfort</h3>
<ul className="space-y-2.5">
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> IV Sedation</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Oral Sedation</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> TMJ Therapy</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Pinhole Gum Treatment</li>
<li className="text-xs text-slate-600 flex items-center gap-2"><iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon> Anxiety-Free Visits</li>
</ul>
</div>
</div>
<div className="mt-12 text-center reveal-on-scroll">
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-700 hover:text-cyan-900 transition-colors" href="#booking">
                    View Full Procedure List <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-y border-slate-200" id="doctors">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal-on-scroll">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Meet The Team</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-slate-900 mb-6 font-serif">Tampa’s Husband &amp; Wife <br/> <span className="italic text-slate-500">Dental Team</span></h2>
<p className="text-slate-600 leading-relaxed mb-6 font-light">
                        Dr. Michael Weninger and Dr. Michelle Weninger are proud to welcome you to our family. We believe that exceptional care starts with a personal connection. 
                    </p>
<p className="text-slate-600 leading-relaxed mb-8 font-light">
                        As a trusted Tampa tradition of clinical dental excellence, we offer a wide array of procedures from 3D imaging to sedation dentistry. We treat you like family because to us, you are family.
                    </p>
<div className="flex gap-8 border-t border-slate-200 pt-8">
<div>
<span className="block text-3xl font-serif text-slate-900">4.97</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500">Star Rating</span>
</div>
<div>
<span className="block text-3xl font-serif text-slate-900">100%</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500">Commitment</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">

<img alt="The Weninger Doctors" className="hover:grayscale-0 transition-all duration-700 w-full h-auto object-cover grayscale-0" src="https://www.weningerdentistry.com/wp-content/uploads/2013/08/photo-weninger-drs.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
<h3 className="font-serif text-xl">The Weninger Doctors</h3>
<p className="text-xs text-white/80">Your Partners in Oral Health</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="new-patients">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-cyan-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Welcome to the Family</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-slate-900 font-serif">New Patient Specials</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 bg-white relative overflow-hidden group reveal-on-scroll">
<div className="absolute top-0 right-0 bg-cyan-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
<h3 className="text-3xl font-serif text-cyan-700 mb-2">$109</h3>
<p className="text-sm font-bold uppercase tracking-wide text-slate-900 mb-4">New Patient Special</p>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">Includes comprehensive exam, cleaning, and digital X-rays. *Basic cleaning only.</p>
<a className="block w-full py-3 border border-cyan-600 text-cyan-700 rounded-lg text-center text-xs font-bold uppercase hover:bg-cyan-600 hover:text-white transition-colors" href="#booking">Claim Offer</a>
<p className="text-[9px] text-slate-400 mt-4 text-center">Expires: 01/31/2026</p>
</div>

<div className="border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 bg-white group reveal-on-scroll delay-100">
<h3 className="text-3xl font-serif text-cyan-700 mb-2">$350 OFF</h3>
<p className="text-sm font-bold uppercase tracking-wide text-slate-900 mb-4">Single Implant</p>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">Restore your smile with our minimally invasive implant technology. New patients only.</p>
<a className="block w-full py-3 border border-cyan-600 text-cyan-700 rounded-lg text-center text-xs font-bold uppercase hover:bg-cyan-600 hover:text-white transition-colors" href="#booking">Claim Offer</a>
<p className="text-[9px] text-slate-400 mt-4 text-center">Expires: 01/31/2026</p>
</div>

<div className="border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 bg-white group reveal-on-scroll delay-200">
<h3 className="text-3xl font-serif text-cyan-700 mb-2">FREE</h3>
<p className="text-sm font-bold uppercase tracking-wide text-slate-900 mb-4">Ortho Consult</p>
<p className="text-xs text-slate-500 mb-6 leading-relaxed">Complimentary consultation for orthodontic or clear aligner treatments.</p>
<a className="block w-full py-3 border border-cyan-600 text-cyan-700 rounded-lg text-center text-xs font-bold uppercase hover:bg-cyan-600 hover:text-white transition-colors" href="#booking">Claim Offer</a>
<p className="text-[9px] text-slate-400 mt-4 text-center">Expires: 01/31/2026</p>
</div>
</div>

<div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200 text-center reveal-on-scroll">
<p className="text-sm text-slate-700 font-medium">
<iconify-icon className="align-middle text-lg text-cyan-600 mr-2" icon="solar:card-check-linear"></iconify-icon>
                    We proudly accept most dental insurance plans. Financing options available.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950 text-white border-t border-slate-900" id="location">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="space-y-8 reveal-on-scroll">
<div>
<span className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Visit Us</span>
<h2 className="text-4xl font-serif mb-6">Weninger Dentistry</h2>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-sm text-white">4030 North MacDill Avenue</p>
<p className="text-sm text-slate-400">Tampa, FL 33607</p>
<a className="text-xs text-cyan-400 hover:text-white mt-1 inline-block underline decoration-cyan-400/30" href="https://maps.google.com/?q=4030+North+MacDill+Avenue+Tampa+FL+33607" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-sm text-white">Phone</p>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="tel:8138727057">813-872-7057</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-sm text-white">Text</p>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="sms:+18139922483">813-992-2483</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="font-medium text-sm text-white">Hours</p>
<p className="text-sm text-slate-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
</div>
</div>
</div>
</div>

<div className="w-full h-48 rounded-xl overflow-hidden grayscale invert brightness-75 border border-white/10">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.568326284687!2d-82.4920!3d27.9705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3c6f1f1f1f1%3A0x0!2s4030%20N%20MacDill%20Ave%2C%20Tampa%2C%20FL%2033607!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-white rounded-2xl p-8 md:p-10 text-slate-900 reveal-on-scroll delay-100" id="booking">
<h3 className="text-2xl font-serif mb-2">Request Appointment</h3>
<p className="text-xs text-slate-500 mb-6">Fill out the form below and our team will contact you to confirm your visit.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. Our team will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">First Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Last Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Phone</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors" required="" type="tel"/>
</div>
<div>
<label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Type of Visit</label>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors text-slate-600">
<option>New Patient Exam ($109 Special)</option>
<option>Cleaning / Checkup</option>
<option>Dental Implant Consult</option>
<option>Emergency / Tooth Pain</option>
<option>Cosmetic Consultation</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Preferred Time</label>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors text-slate-600">
<option>Morning</option>
<option>Afternoon</option>
<option>First Available</option>
</select>
</div>
<div>
<label className="block text-[10px] font-bold uppercase text-slate-500 mb-1">Message (Optional)</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-cyan-500 transition-colors" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-cyan-700 text-white rounded-lg font-semibold text-sm hover:bg-cyan-800 transition-transform active:scale-[0.99] shadow-lg shadow-cyan-900/10" type="submit">
                            Submit Request
                        </button>

<p className="text-[9px] text-slate-400 text-center italic">
                            *Secure form connected to instant staff notification system.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-sm font-light">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<span className="font-serif text-white text-lg">Weninger Dentistry</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Site Map</a>
</div>
</div>
<div className="border-t border-white/5 pt-8">
<p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-600">Proudly Serving</p>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
<span>Tampa, FL</span>
<span>Carrollwood</span>
<span>Westchase</span>
<span>Citrus Park</span>
<span>Town 'N' Country</span>
<span>South Tampa</span>
<span>MacDill AFB</span>
<span>Hyde Park</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-600">
                © 2026 Weninger Dentistry. All Rights Reserved.
            </div>
</div>
</footer>



    </>
  );
}
