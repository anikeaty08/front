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
light: '#b5e0fa', // Extracted from source
DEFAULT: '#8bbcdb', // Darkened slightly for readability
dark: '#5a8ea3',
text: '#333333', // Source text color
},
medical: {
50: '#F9FAFB',
100: '#F3F4F6',
800: '#1F2937',
900: '#111827',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isHidden = mobileMenu.classList.contains('menu-hidden');
            if (isHidden) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.add('menu-hidden');
                mobileMenu.classList.remove('menu-visible');
                document.body.style.overflow = ''; // Allow scrolling
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-medical-900 text-white text-[11px] font-medium tracking-wide py-2.5 px-4 text-center">
<span className="opacity-90">First Medical Spa in Monmouth County • Led by Dr. Said A. Samra</span>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-brand-light/20 rounded-full flex items-center justify-center text-brand-dark">
<iconify-icon icon="solar:sparkles-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="block font-serif text-lg font-semibold leading-none tracking-tight text-gray-900">Jeunesse</span>
<span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-0.5">Medical Spa</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium text-gray-500 uppercase tracking-wide">
<a className="hover:text-brand-dark transition-colors" href="#services">Services</a>
<a className="hover:text-brand-dark transition-colors" href="#about">About Dr. Samra</a>
<a className="hover:text-brand-dark transition-colors" href="#locations">Locations</a>
<a className="hover:text-brand-dark transition-colors" href="#reviews">Reviews</a>
</nav>

<div className="hidden lg:flex items-center gap-4">

<div className="flex flex-col items-end text-right mr-2">
<a className="text-xs font-bold text-gray-900 hover:text-brand-dark transition-colors flex items-center gap-1" href="tel:7327393033">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (732) 739-3033
                        </a>
<span className="text-[10px] text-gray-400">Monmouth &amp; Middlesex</span>
</div>
<a className="bg-medical-900 text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-gray-800 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2" href="#book">
                        Book Now
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<button aria-label="Open Menu" className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="menu-hidden fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 lg:hidden flex flex-col h-screen overflow-y-auto" id="mobile-menu">

<button className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<div className="space-y-6 flex-1">
<nav className="flex flex-col gap-6 text-lg font-serif text-gray-900">
<a className="mobile-link border-b border-gray-100 pb-4" href="#services">Services</a>
<a className="mobile-link border-b border-gray-100 pb-4" href="#about">About Dr. Samra</a>
<a className="mobile-link border-b border-gray-100 pb-4" href="#locations">Locations</a>
<a className="mobile-link border-b border-gray-100 pb-4" href="#specials">Monthly Specials</a>
<a className="mobile-link border-b border-gray-100 pb-4" href="#gallery">Before &amp; After</a>
</nav>
<div className="grid grid-cols-2 gap-4 mt-8">
<a className="flex flex-col items-center justify-center p-4 bg-brand-light/20 rounded-xl gap-2 text-brand-dark" href="tel:7327393033">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
<span className="text-xs font-bold uppercase">Call Us</span>
</a>
<a className="flex flex-col items-center justify-center p-4 bg-medical-900 rounded-xl gap-2 text-white" href="#book">
<iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
<span className="text-xs font-bold uppercase">Book Online</span>
</a>
</div>
</div>
</div>

<section className="relative bg-[#F5F5F7] overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Jeunesse Medical Spa Interior" className="w-full h-full object-cover object-center opacity-90" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent sm:from-white/95 sm:via-white/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 sm:pt-32 sm:pb-40">
<div className="max-w-2xl space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-gray-200 backdrop-blur-sm text-[10px] uppercase tracking-widest font-semibold text-brand-dark mb-2 shadow-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                    Premier Aesthetics &amp; Post-Operative Care
                </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-gray-900 leading-[1.1]">
                    Timeless Beauty, <br/>
<span className="italic text-brand-dark/80">Expertly Crafted.</span>
</h1>
<p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg">
                    Welcome to Jeunesse Medical Spa. Led by Dr. Said A. Samra, M.D., F.A.C.S., we offer medical-grade skincare, injectables, and laser treatments tailored to your unique goals.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-medical-900 text-white px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-black transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3" href="#book">
                        Request Appointment
                    </a>
<a className="bg-white/80 backdrop-blur border border-gray-200 text-gray-900 px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-widest hover:bg-white transition-all shadow-sm flex items-center justify-center gap-3" href="tel:7327393033">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                        (732) 739-3033
                    </a>
</div>
</div>
</div>
</section>

<div className="border-y border-gray-100 bg-white relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center opacity-80">
<div className="flex items-center gap-3">
<div className="p-2 bg-brand-light/20 rounded-full text-brand-dark">
<iconify-icon icon="solar:medal-ribbon-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-wide text-gray-900">Established 2003</span>
<span className="text-[10px] text-gray-500">20+ Years Excellence</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-brand-light/20 rounded-full text-brand-dark">
<iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-wide text-gray-900">Board Certified</span>
<span className="text-[10px] text-gray-500">Dr. Said A. Samra</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-brand-light/20 rounded-full text-brand-dark">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-wide text-gray-900">2 Locations</span>
<span className="text-[10px] text-gray-500">Holmdel &amp; Old Bridge</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="p-2 bg-brand-light/20 rounded-full text-brand-dark">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold uppercase tracking-wide text-gray-900">Advanced Tech</span>
<span className="text-[10px] text-gray-500">FDA-Cleared Devices</span>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-brand-dark text-xs font-bold tracking-[0.2em] uppercase">Curated Treatments</span>
<h2 className="text-4xl font-serif text-gray-900 mt-3 mb-6">Comprehensive Aesthetics</h2>
<p className="text-gray-500 font-light leading-relaxed">
                    From non-surgical fat reduction to medical-grade facials, we utilize the latest technology to help you look and feel your best.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:syringe-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-gray-900 mb-3">Injectables</h3>
<ul className="text-sm text-gray-500 space-y-2 mb-6">
<li>• Botox® Cosmetic &amp; Dysport®</li>
<li>• Juvéderm® &amp; Restylane® Fillers</li>
<li>• Sculptra® Aesthetic</li>
<li>• Kybella® &amp; Renuva®</li>
</ul>
<span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sun-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-gray-900 mb-3">Laser &amp; Light</h3>
<ul className="text-sm text-gray-500 space-y-2 mb-6">
<li>• Xeo® Hair Removal</li>
<li>• LimeLight® IPL Photofacial</li>
<li>• Laser Genesis Facial</li>
<li>• Pearl® &amp; Titan® Resurfacing</li>
</ul>
<span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:body-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-gray-900 mb-3">Body Contouring</h3>
<ul className="text-sm text-gray-500 space-y-2 mb-6">
<li>• BTL Vanquish™ Fat Elimination</li>
<li>• Ultherapy® Skin Tightening</li>
<li>• Non-Surgical Fat Reduction</li>
<li>• Radiofrequency Microneedling</li>
</ul>
<span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:face-scan-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-gray-900 mb-3">Facials &amp; Peels</h3>
<ul className="text-sm text-gray-500 space-y-2 mb-6">
<li>• Hydrafacials</li>
<li>• Chemical Peels</li>
<li>• PRP (Platelet-Rich Plasma)</li>
<li>• Exosomes Therapy</li>
</ul>
<span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-gray-900 mb-3">Beauty Enhancements</h3>
<ul className="text-sm text-gray-500 space-y-2 mb-6">
<li>• Permanent Makeup</li>
<li>• Waxing Services</li>
<li>• Sunless Tanning</li>
<li>• Lash &amp; Brow Tinting</li>
</ul>
<span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-dark mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bag-heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-gray-900 mb-3">Skincare Shop</h3>
<ul className="text-sm text-gray-500 space-y-2 mb-6">
<li>• Jeunesse Signature Line</li>
<li>• SkinCeuticals</li>
<li>• Silagen</li>
<li>• Gift Cards</li>
</ul>
<span className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-2 group-hover:gap-3 transition-all">
                        Shop Products <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">

<img alt="Dr. Said A. Samra" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl max-w-xs hidden sm:block">
<p className="font-serif italic text-lg mb-2">"We pride ourselves on our innovative approach to beauty and wellness."</p>
<p className="text-xs font-bold uppercase tracking-wider text-brand-dark">- Dr. Samra</p>
</div>
</div>
<div className="space-y-6">
<span className="text-brand-light text-xs font-bold tracking-[0.2em] uppercase">Medical Director</span>
<h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">Dr. Said A. Samra <br/><span className="text-brand-light/60">M.D., F.A.C.S.</span></h2>
<div className="h-px w-20 bg-brand-light/30"></div>
<p className="text-gray-300 font-light leading-relaxed text-lg">
                    Since 2003, Dr. Samra has led Jeunesse Medical Spa with a commitment to exceptional service and results. As a board-certified plastic surgeon, he ensures every treatment adheres to the highest medical standards.
                </p>
<p className="text-gray-400 leading-relaxed text-sm">
                    Supported by a team of specialists, we help our patients achieve their aesthetic goals with confidence and satisfaction in Monmouth and Middlesex counties.
                </p>
<div className="pt-6">
<a className="inline-flex items-center gap-2 text-brand-light hover:text-white transition-colors border-b border-brand-light/30 pb-1 text-sm font-medium" href="http://samraplasticsurgery.com/" target="_blank">
                        Visit Samra Plastic Surgery
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCFB]" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="mb-10">
<span className="text-brand-dark text-xs font-bold tracking-[0.2em] uppercase">Visit Us</span>
<h2 className="text-3xl font-serif text-gray-900 mt-2">Our Locations</h2>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
<div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-400">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<div className="space-y-3">
<h3 className="text-lg font-bold text-gray-900">Holmdel Office</h3>
<p className="text-sm text-gray-500">
                                Serving Monmouth County with full medical spa services.
                            </p>
<div className="flex flex-col gap-2 text-sm">
<a className="flex items-center gap-2 text-gray-700 hover:text-brand-dark" href="tel:7327393033">
<iconify-icon icon="solar:phone-linear"></iconify-icon> (732) 739-3033
                                </a>
<div className="flex items-center gap-2 text-gray-700">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Mon-Sat (By Appointment)
                                </div>
</div>
<div className="pt-2">
<a className="text-xs font-bold text-brand-dark uppercase tracking-wide border-b border-brand-dark/20 hover:border-brand-dark pb-0.5" href="#">Get Directions</a>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
<div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 text-gray-400">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<div className="space-y-3">
<h3 className="text-lg font-bold text-gray-900">Old Bridge Office</h3>
<p className="text-sm text-gray-500">
                                Conveniently located in Middlesex County.
                            </p>
<div className="flex flex-col gap-2 text-sm">
<a className="flex items-center gap-2 text-gray-700 hover:text-brand-dark" href="tel:7327320956">
<iconify-icon icon="solar:phone-linear"></iconify-icon> (732) 732-0956
                                </a>
<div className="flex items-center gap-2 text-gray-700">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Mon-Sat (By Appointment)
                                </div>
</div>
<div className="pt-2">
<a className="text-xs font-bold text-brand-dark uppercase tracking-wide border-b border-brand-dark/20 hover:border-brand-dark pb-0.5" href="#">Get Directions</a>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden" id="book">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-light to-brand-dark"></div>
<div className="mb-8">
<h3 className="text-2xl font-serif text-gray-900">Request Appointment</h3>
<p className="text-sm text-gray-500 mt-2">Fill out the form below and our team will contact you to confirm your appointment.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. Our team will contact you shortly.');">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">First Name</label>
<input className="input-base" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Last Name</label>
<input className="input-base" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Phone</label>
<input className="input-base" required="" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Email</label>
<input className="input-base" required="" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Preferred Location</label>
<div className="relative">
<select className="input-base appearance-none bg-transparent" required="">
<option value="">Select Location...</option>
<option value="holmdel">Holmdel</option>
<option value="oldbridge">Old Bridge</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Service Interest</label>
<div className="relative">
<select className="input-base appearance-none bg-transparent">
<option value="">General Inquiry</option>
<option value="injectables">Botox / Fillers</option>
<option value="laser">Laser Treatments</option>
<option value="body">Body Contouring (Vanquish/Ultherapy)</option>
<option value="facial">Facial / Peel</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Message</label>
<textarea className="input-base" placeholder="Tell us about your goals..." rows="3"></textarea>
</div>
<button className="w-full bg-medical-900 text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg mt-4 flex items-center justify-center gap-2" type="submit">
                            Submit Request
                            <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-gray-400 mt-4">
                            By submitting, you agree to receive contact from Jeunesse Medical Spa regarding your appointment.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-100 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-serif text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-gray-50 p-6 rounded-xl cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-semibold text-gray-900">
                        What is your cancellation policy?
                        <iconify-icon className="text-gray-400 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-gray-600 leading-relaxed">
                        We kindly ask for 24-48 hours notice for any cancellations. Please contact the spa directly to reschedule your appointment to avoid any potential no-show fees.
                    </div>
</details>
<details className="group bg-gray-50 p-6 rounded-xl cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-semibold text-gray-900">
                        Do you offer financing?
                        <iconify-icon className="text-gray-400 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-gray-600 leading-relaxed">
                        Yes, we accept major credit cards and offer financing options such as CareCredit. Please ask our front desk for more details during your visit.
                    </div>
</details>
<details className="group bg-gray-50 p-6 rounded-xl cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between font-semibold text-gray-900">
                        How do I know which treatment is right for me?
                        <iconify-icon className="text-gray-400 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="mt-4 text-sm text-gray-600 leading-relaxed">
                        We recommend booking a consultation. Dr. Samra and our specialists will analyze your skin type and aesthetic goals to create a customized treatment plan.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-medical-900 text-gray-400 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
<div className="space-y-4">
<div className="flex items-center gap-2 text-white mb-4">
<iconify-icon icon="solar:sparkles-linear"></iconify-icon>
<span className="font-serif text-lg font-semibold">Jeunesse</span>
</div>
<p className="text-sm leading-relaxed">
                        The premier medical spa in Monmouth &amp; Middlesex counties since 2003. Combining luxury with medical expertise.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-white hover:text-brand-light transition-colors" href="https://www.facebook.com/JeunesseMedicalSpa"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="text-white hover:text-brand-light transition-colors" href="https://instagram.com/jeunessemedicalspa"><iconify-icon icon="logos:instagram-icon" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Injectables</a></li>
<li><a className="hover:text-white transition-colors" href="#">Laser Treatments</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ultherapy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Facials &amp; Peels</a></li>
<li><a className="hover:text-white transition-colors" href="#">Body Contouring</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#gallery">Before &amp; After</a></li>
<li><a className="hover:text-white transition-colors" href="#specials">Monthly Specials</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shop Products</a></li>
<li><a className="hover:text-white transition-colors" href="https://login.meevo.com/Jeunesse/egft">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>Holmdel &amp; Old Bridge, NJ</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white" href="tel:7327393033">Holmdel: (732) 739-3033</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white" href="tel:7327320956">Old Bridge: (732) 732-0956</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>Mon-Sat: By Appointment</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2026 Jeunesse Medical Spa. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
