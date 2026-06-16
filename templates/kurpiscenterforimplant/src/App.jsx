import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Logic (Hidden by default)
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const menuIcon = document.getElementById('menu-icon');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = ''; // Restore scrolling
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }

        mobileToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });

        // Sticky Header Transition
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 10) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex-shrink-0 flex items-center gap-2 group" href="#">

<div className="flex flex-col">
<span className="text-xl md:text-2xl font-bold text-[#1e73be] tracking-tight leading-none group-hover:opacity-80 transition-opacity">KURPIS CENTER</span>
<span className="text-[10px] md:text-xs font-medium tracking-widest text-slate-500 uppercase">Implant &amp; Cosmetic Dentistry</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#1e73be] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1e73be] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1e73be] transition-colors" href="#underbite">Underbite Correction</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1e73be] transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#1e73be] transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Ridgewood, NJ</span>
<a className="text-sm font-bold text-slate-900 hover:text-[#1e73be] transition-colors" href="tel:2014479700">201-447-9700</a>
</div>
<a className="inline-flex items-center gap-2 bg-[#23e069] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-emerald-500/20 hover:bg-emerald-500 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300" href="#book">
                        Book Consultation
                        <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden hover:text-[#1e73be] text-slate-600 z-50 pt-2 pr-2 pb-2 pl-2 relative" id="mobile-toggle">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" id="menu-icon"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-24 px-6 gap-6 overflow-y-auto" id="mobile-menu">
<a className="text-2xl font-serif font-medium text-slate-900 mobile-link" href="#home">Home</a>
<a className="text-2xl font-serif font-medium text-slate-900 mobile-link" href="#services">Services</a>
<a className="text-2xl font-serif font-medium text-slate-900 mobile-link" href="#underbite">Underbite Correction</a>
<a className="text-2xl font-serif font-medium text-slate-900 mobile-link" href="#implants">Dental Implants</a>
<a className="text-2xl font-serif font-medium text-slate-900 mobile-link" href="#about">About Dr. Kurpis</a>
<a className="text-2xl font-serif font-medium text-slate-900 mobile-link" href="#contact">Contact</a>
<div className="mt-auto pb-8 border-t border-slate-100 pt-8">
<p className="text-sm text-slate-500 mb-2">Appointments</p>
<a className="text-xl font-bold text-[#1e73be] block mb-4" href="tel:2014479700">201-447-9700</a>
<a className="mobile-link w-full flex justify-center items-center gap-2 bg-[#1e73be] text-white text-base font-semibold px-6 py-4 rounded-xl shadow-xl shadow-blue-900/10" href="#book">
                Request Appointment
            </a>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900" id="home">

<div className="absolute inset-0 z-0">
<img alt="Patient Smiling" className="w-full h-full object-cover opacity-40" src="https://kurpisdentistry.com/wp-content/uploads/2025/07/smile.jpg"/>
<div className="bg-gradient-to-t from-slate-950/30 via-slate-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-2xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2AC4EA]/10 border border-[#2AC4EA]/20 text-[#2AC4EA] text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-[#2AC4EA] animate-pulse"></span>
                    Accepting New Patients
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                    Transforming Smiles for Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2AC4EA] to-[#1e73be]">45 Years.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 mb-8 font-light leading-relaxed max-w-lg">
                    Experience world-class care from the dentist who wrote the book on cosmetic dentistry. We specialize in non-surgical underbite correction, implants, and full mouth reconstruction.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#23e069] text-white text-base font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 hover:bg-emerald-500" href="#book">
                        Free Consultation
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-white hover:text-slate-900" href="tel:2014479700">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                        201-447-9700
                    </a>
</div>

<div className="mt-12 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#2AC4EA] text-xl" icon="solar:shield-check-linear"></iconify-icon>
                        100% Confidential
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#2AC4EA] text-xl" icon="solar:user-heart-linear"></iconify-icon>
                        No Obligation
                    </div>
<div className="flex items-center gap-2">
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
                        4.9/5 Rating
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Dental Solutions</h2>
<p className="text-slate-500 text-lg">From routine care to complex full-mouth reconstruction, our multi-disciplinary team offers advanced solutions tailored to your unique needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#1e73be]/20 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1e73be] flex items-center justify-center mb-6 group-hover:bg-[#1e73be] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Smile Makeovers</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Where Art and Science come together. Porcelain veneers and aesthetic bonding to create your flawless smile.</p>
<a className="inline-flex items-center text-sm font-bold text-[#1e73be] group-hover:translate-x-1 transition-transform" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#1e73be]/20 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#23e069] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wide">Signature Service</div>
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1e73be] flex items-center justify-center mb-6 group-hover:bg-[#1e73be] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:face-scan-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Underbite Correction</h3>
<p className="text-slate-500 mb-6 leading-relaxed">The Kurpis Non-Surgical Method®. Correct your underbite in as little as 2 visits without jaw surgery.</p>
<a className="inline-flex items-center text-sm font-bold text-[#1e73be] group-hover:translate-x-1 transition-transform" href="#underbite">
                        See Results <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#1e73be]/20 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1e73be] flex items-center justify-center mb-6 group-hover:bg-[#1e73be] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="mdi:tooth-outline"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Dental Implants</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Single tooth, All-on-4, and All-on-6 solutions. We have pioneered implant advancements for 45+ years.</p>
<a className="inline-flex items-center text-sm font-bold text-[#1e73be] group-hover:translate-x-1 transition-transform" href="#">
                        View Options <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#1e73be]/20 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1e73be] flex items-center justify-center mb-6 group-hover:bg-[#1e73be] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Full Reconstruction</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Complex restoration focusing on saving existing teeth and rebuilding functionality and aesthetics.</p>
<a className="inline-flex items-center text-sm font-bold text-[#1e73be] group-hover:translate-x-1 transition-transform" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#1e73be]/20 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1e73be] flex items-center justify-center mb-6 group-hover:bg-[#1e73be] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:chat-round-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Second Opinions</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Avoid unnecessary treatments. Get an honest, expert evaluation before committing to major dental work.</p>
<a className="inline-flex items-center text-sm font-bold text-[#1e73be] group-hover:translate-x-1 transition-transform" href="#">
                        Get Clarity <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#1e73be]/20 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1e73be] flex items-center justify-center mb-6 group-hover:bg-[#1e73be] group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Invisalign™</h3>
<p className="text-slate-500 mb-6 leading-relaxed">The clear alternative to braces. Straighten your smile discreetly in as little as 6 months.</p>
<a className="inline-flex items-center text-sm font-bold text-[#1e73be] group-hover:translate-x-1 transition-transform" href="#">
                        Straighten Up <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="underbite">
<div className="absolute right-0 top-0 w-1/2 h-full bg-[#f8fafc] -z-10 rounded-l-[4rem] hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<span className="text-[#1e73be] font-bold tracking-wider uppercase text-sm mb-2 block">Signature Treatment</span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Non-Surgical Underbite Correction
                    </h2>
<p className="text-lg text-slate-500 mb-6">
                        In only two visits, we can dramatically transform your smile and your profile. Dr. Kurpis has developed a unique alternative to orthognathic corrective jaw surgery.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23e069] text-xl mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-600">No painful jaw surgery required</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23e069] text-xl mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-600">Completed in as little as 2 visits</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23e069] text-xl mt-1" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-slate-600">Immediate improvement in profile and confidence</span>
</li>
</ul>
<a className="inline-flex items-center justify-center gap-2 bg-[#1e73be] text-white text-base font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-800 transition-colors w-full sm:w-auto" href="#book">
                        Schedule Evaluation
                    </a>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl group">
<img alt="Underbite Correction Before" className="w-full h-auto object-cover" src="https://kurpisdentistry.com/wp-content/uploads/2024/09/underbiteH2-scaled.jpg"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-xs">
<p className="text-sm font-bold text-slate-900">Before &amp; After</p>
<p className="text-xs text-slate-500 mt-1">Real patient results. No surgery.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative">
<img alt="Amazing Smiles Book by Dr. Kurpis" className="rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-xs mx-auto lg:max-w-md border-4 border-slate-800" src="https://kurpisdentistry.com/wp-content/uploads/2025/11/amazingsmilesbook.jpg"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Dr. Albert Kurpis</h2>
<p className="text-xl text-[#2AC4EA] font-medium mb-6">"The Dentist Who Wrote The Book On Cosmetic Dentistry"</p>
<p className="text-slate-300 mb-6 leading-relaxed">
                        With over 45 years of experience, Dr. Kurpis and his team (including Dr. John Varoscak and Dr. John Lanzano) have transformed thousands of smiles. 
                    </p>
<p className="text-slate-300 mb-8 leading-relaxed">
                        We don't just perform procedures—we set the standard. Patients travel from across the nation and around the globe for our personalized care.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 border border-slate-600 hover:border-white text-white px-6 py-3 rounded-lg transition-colors" href="https://kurpisdentistry.com/amazing_smiles_ebook/mobile/index.html#p=1" target="_blank">
                            Read Free E-Book
                        </a>
<a className="inline-flex justify-center items-center gap-2 bg-[#1e73be] hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold" href="#book">
                            Meet The Team
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="book">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
<div className="grid grid-cols-1 lg:grid-cols-5">

<div className="lg:col-span-2 bg-[#1e73be] p-10 text-white flex flex-col justify-between relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
<div>
<h3 className="text-2xl font-bold mb-2">Kurpis Center</h3>
<p className="text-blue-100 mb-8">For Implant &amp; Cosmetic Dentistry</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="font-bold text-sm uppercase tracking-wider mb-1 opacity-80">Visit Us</p>
<p className="leading-relaxed">545 Rt 17 South<br/>Ridgewood, NJ 07450</p>
<a className="text-xs text-white/80 underline mt-1 hover:text-white" href="https://maps.google.com/?q=545+Rt+17+South+Ridgewood+NJ" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="font-bold text-sm uppercase tracking-wider mb-1 opacity-80">Call Us</p>
<a className="text-xl font-bold hover:underline" href="tel:2014479700">201-447-9700</a>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-10 border-t border-white/20">
<p className="font-bold mb-4">Office Hours</p>
<div className="space-y-2 text-sm text-blue-50">
<div className="flex justify-between"><span>Mon - Thu</span> <span>9:00 AM - 6:00 PM</span></div>
<div className="flex justify-between"><span>Friday</span> <span>9:00 AM - 2:00 PM</span></div>
<div className="flex justify-between"><span>Sat - Sun</span> <span>Closed</span></div>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10 lg:p-12">
<h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Request Free Consultation</h2>
<p className="text-slate-500 mb-8">Fill out the form below and our team will contact you shortly to confirm your appointment.</p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. We will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1e73be] focus:border-[#1e73be] outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1e73be] focus:border-[#1e73be] outline-none transition-all bg-slate-50 focus:bg-white" placeholder="(201) 555-0123" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1e73be] focus:border-[#1e73be] outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Reason for Visit</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1e73be] focus:border-[#1e73be] outline-none transition-all bg-slate-50 focus:bg-white appearance-none text-slate-600">
<option>General Checkup / Cleaning</option>
<option>Cosmetic Consultation</option>
<option>Dental Implants</option>
<option>Underbite Correction</option>
<option>Second Opinion</option>
<option>Pain / Emergency</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Best Time to Reach You</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1e73be] focus:border-[#1e73be] outline-none transition-all bg-slate-50 focus:bg-white" placeholder="e.g. Weekday mornings, After 5pm..." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1e73be] focus:border-[#1e73be] outline-none transition-all bg-slate-50 focus:bg-white" rows="3"></textarea>
</div>
<button className="w-full bg-[#23e069] text-white font-bold text-lg py-4 rounded-xl hover:bg-emerald-500 transition-colors shadow-lg shadow-green-500/20" type="submit">
                                Request My Free Consultation
                            </button>
<p className="text-xs text-center text-slate-400 mt-4">
<iconify-icon className="align-middle mr-1" icon="solar:lock-password-linear"></iconify-icon>
                                Your information is 100% confidential. No obligation.
                            </p>


</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1c1c1c] text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<h4 className="text-white text-lg font-bold mb-4 font-serif">Kurpis Center</h4>
<p className="text-sm leading-relaxed max-w-xs mb-4">
                        Providing comprehensive implant and cosmetic dentistry services to Ridgewood and Bergen County for over 45 years.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="https://www.facebook.com/dentistinnj/" target="_blank"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/kurpisadvanced/" target="_blank"><iconify-icon icon="skill-icons:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="https://www.youtube.com/channel/UC3BSpe4C3Bjmq-w_gBQNP9g" target="_blank"><iconify-icon icon="logos:youtube-icon" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#2AC4EA] transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-[#2AC4EA] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#2AC4EA] transition-colors" href="#about">About Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li>545 Rt 17 South</li>
<li>Ridgewood, NJ 07450</li>
<li><a className="hover:text-white" href="tel:2014479700">201-447-9700</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2026 Kurpis Center For Implant and Cosmetic Dentistry. All Rights Reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="https://kurpisdentistry.com/privacy-policy-disclaimer/">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 lg:hidden z-30 flex gap-3">
<a className="flex-1 bg-slate-100 text-slate-900 font-bold py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2" href="tel:2014479700">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call
        </a>
<a className="flex-[2] bg-[#23e069] text-white font-bold py-3 px-4 rounded-lg text-center shadow-lg" href="#book">
            Request Appointment
        </a>
</div>



    </>
  );
}
