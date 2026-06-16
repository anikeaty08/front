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
light: '#fae3e7',
DEFAULT: '#f4b8c1', // Source Code Brand Color
dark: '#e09aa5',
},
stone: {
850: '#1f242e', // Source dark tone
900: '#121212',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Mobile Menu Logic - Hidden by default
        const menuToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                // Change icon to close
                menuToggle.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="24" height="24"></iconify-icon>';
            } else {
                mobileMenu.classList.remove('menu-visible');
                mobileMenu.classList.add('menu-hidden');
                document.body.style.overflow = ''; // Restore scrolling
                // Change icon back to hamburger
                menuToggle.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" height="24"></iconify-icon>';
            }
        }

        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        menuLinks.forEach(link => {
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
      

<div className="bg-[#1f242e] text-white/80 py-2.5 px-6">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-medium tracking-wide">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#f4b8c1] animate-pulse"></span>
<span>Accepting New Patients in Teaneck, NJ</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="tel:201-338-5186">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 201-338-5186
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="relative z-50 flex-shrink-0" href="#">
<img alt="Xthetics Med Spa" className="h-10 w-auto object-contain" src="https://xtheticsmedspa.com/wp-content/uploads/2024/07/logo.webp"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#team">Provider</a>
<a className="hover:text-stone-900 transition-colors" href="#locations">Location</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="text-xs font-semibold text-stone-900 flex items-center gap-2 hover:opacity-70" href="tel:201-338-5186">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    Call Us
                </a>
<a className="bg-[#1f242e] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#f4b8c1] hover:text-white transition-all duration-300" href="#book">
                    Book Appointment
                </a>
</div>

<button className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-stone-900 focus:outline-none" id="mobile-toggle">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl menu-hidden flex flex-col pt-24 px-6 pb-8" id="mobile-menu">
<div className="flex-1 flex flex-col gap-6 text-xl font-serif text-stone-900">
<a className="mobile-link py-2 border-b border-stone-100" href="#about">About</a>
<a className="mobile-link py-2 border-b border-stone-100" href="#services">Services</a>
<a className="mobile-link py-2 border-b border-stone-100" href="#team">Team</a>
<a className="mobile-link py-2 border-b border-stone-100" href="#locations">Locations</a>
<a className="mobile-link py-2 border-b border-stone-100" href="#contact">Contact</a>
</div>
<div className="mt-auto space-y-4">
<a className="flex items-center justify-center gap-2 w-full py-4 border border-stone-200 rounded-xl font-semibold text-stone-900 uppercase text-xs tracking-widest" href="tel:201-338-5186">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                201-338-5186
            </a>
<a className="mobile-link flex items-center justify-center w-full py-4 bg-[#f4b8c1] text-white rounded-xl font-semibold uppercase text-xs tracking-widest shadow-lg shadow-[#f4b8c1]/20" href="#book">
                Request Appointment
            </a>
</div>
</div>

<header className="relative min-h-[85vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Aesthetic Med Spa Interior" className="w-full h-full object-cover" src="https://xtheticsmedspa.com/wp-content/uploads/2024/07/aesthetic_medspa_1440x600.jpg"/>

<div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10">
<div className="max-w-2xl space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-widest font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-[#f4b8c1]"></span>
                    Teaneck's Premier Med Spa
                </div>
<h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
                    Enhance the Beauty <br/>
<span className="italic text-[#f4b8c1]">Within You.</span>
</h1>
<p className="text-lg text-stone-200 font-light leading-relaxed max-w-lg">
                    Step back from the bustle of daily life. Under the direction of Leticia Camacho, DMSc, PA-C, we provide advanced aesthetic care including Botox, Fillers, and Hydrafacials.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-[#f4b8c1] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#1f242e] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3" href="#book">
                        Book Appointment
                    </a>
<a className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#1f242e] transition-all flex items-center justify-center gap-3" href="tel:201-338-5186">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                        (201) 338-5186
                    </a>
</div>
</div>
</div>
</header>

<div className="bg-white border-b border-stone-100 relative z-20">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center md:justify-items-start text-stone-400 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-sm font-bold tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> 5-Star Rated</span>
<span className="text-sm font-bold tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:medal-ribbon-linear"></iconify-icon> Certified Experts</span>
<span className="text-sm font-bold tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Safe &amp; Sterile</span>
<span className="text-sm font-bold tracking-widest uppercase flex items-center gap-2"><iconify-icon icon="solar:heart-linear"></iconify-icon> Patient First</span>
</div>
</div>
</div>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-stone-100 rounded-2xl overflow-hidden">
<img alt="Leticia Camacho Xthetics Med Spa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66b105fe-30f6-4212-b1b8-d8d74ed2f334_800w.jpg"/>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-stone-100 max-w-xs hidden md:block">
<p className="font-serif text-lg text-stone-900 italic">"Our focus is to enhance the beauty within you."</p>
<p className="text-xs font-semibold uppercase tracking-wider text-[#f4b8c1] mt-2">Leticia Camacho, DMSc, PA-C</p>
</div>
</div>
<div className="space-y-8">
<span className="text-[#f4b8c1] text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-[1px] bg-[#f4b8c1]"></span>
                    About Us
                </span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                    Welcome to <br/> <span className="italic text-stone-500">Xthetics Med Spa</span>
</h2>
<div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
<p>
                        We are an integrative aesthetic practice located in Teaneck, New Jersey. Under the expert direction of Leticia Camacho, DMSc, PA-C, our team combines medical precision with artistic vision.
                    </p>
<p>
                        Whether you are looking for rejuvenation through Botox and fillers, or skin health restoration with HydraFacial and Microneedling, we provide a calm sanctuary for your self-care journey.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="pl-4 border-l border-[#f4b8c1]">
<p className="text-2xl font-serif text-stone-900">10+</p>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Years Experience</p>
</div>
<div className="pl-4 border-l border-[#f4b8c1]">
<p className="text-2xl font-serif text-stone-900">15+</p>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Premium Services</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
<div className="space-y-4">
<span className="text-[#f4b8c1] text-xs font-semibold tracking-widest uppercase">Expert Treatments</span>
<h2 className="text-3xl md:text-4xl font-serif text-stone-900">Curated Service Menu</h2>
</div>
<a className="text-xs font-semibold uppercase tracking-widest text-stone-900 border-b border-stone-200 pb-1 hover:border-[#f4b8c1] transition-colors" href="#book">View All Services</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-[#f4b8c1]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#f4b8c1] mb-6 group-hover:bg-[#f4b8c1] group-hover:text-white transition-colors">
<iconify-icon icon="solar:face-scan-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-stone-900 mb-2">Botox &amp; Neurotoxins</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Ease wrinkles and lines, including forehead lines and crow’s feet, for a refreshed look.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#f4b8c1] group-hover:text-stone-900 flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-[#f4b8c1]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#f4b8c1] mb-6 group-hover:bg-[#f4b8c1] group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-stone-900 mb-2">Dermal Fillers</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Restore lost volume and contour facial features for a natural, youthful appearance.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#f4b8c1] group-hover:text-stone-900 flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-[#f4b8c1]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#f4b8c1] mb-6 group-hover:bg-[#f4b8c1] group-hover:text-white transition-colors">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-stone-900 mb-2">HydraFacial</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Cleanse, exfoliate, extract impurities, and hydrate utilizing patented technology.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#f4b8c1] group-hover:text-stone-900 flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-[#f4b8c1]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#f4b8c1] mb-6 group-hover:bg-[#f4b8c1] group-hover:text-white transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-stone-900 mb-2">Morpheus 8</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Radiofrequency microneedling to rejuvenate and contour the face and body.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#f4b8c1] group-hover:text-stone-900 flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-[#f4b8c1]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#f4b8c1] mb-6 group-hover:bg-[#f4b8c1] group-hover:text-white transition-colors">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-stone-900 mb-2">IV Therapy</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Immediate infusion of vitamins and minerals for energy and hydration.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#f4b8c1] group-hover:text-stone-900 flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group bg-white rounded-2xl p-6 border border-stone-100 hover:border-[#f4b8c1]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-[#f4b8c1] mb-6 group-hover:bg-[#f4b8c1] group-hover:text-white transition-colors">
<iconify-icon icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif text-stone-900 mb-2">Diolaze Laser</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Advanced, high-speed diode laser technology for permanent hair reduction.</p>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#f4b8c1] group-hover:text-stone-900 flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-10">
<div className="space-y-4">
<span className="text-[#f4b8c1] text-xs font-semibold tracking-widest uppercase">Our Location</span>
<h2 className="text-3xl md:text-4xl font-serif text-stone-900">Visit Us In Teaneck</h2>
<p className="text-stone-500 font-light">Conveniently located for patients across Northern New Jersey.</p>
</div>
<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
<h3 className="font-serif text-xl text-stone-900 mb-6">Teaneck Office</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#f4b8c1] shrink-0 shadow-sm">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Address</p>
<p className="text-stone-900 text-sm">185 Cedar Lane L1<br/>Teaneck, NJ 07666</p>
<a className="text-xs text-[#f4b8c1] font-semibold underline mt-2 inline-block" href="https://maps.google.com/?q=185+Cedar+Lane+L1,+Teaneck+NJ+07666" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#f4b8c1] shrink-0 shadow-sm">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Phone</p>
<a className="text-stone-900 text-sm hover:text-[#f4b8c1] transition-colors" href="tel:201-338-5186">201-338-5186</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#f4b8c1] shrink-0 shadow-sm">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Email</p>
<a className="text-stone-900 text-sm hover:text-[#f4b8c1] transition-colors" href="mailto:xtheticsmedspa@gmail.com">xtheticsmedspa@gmail.com</a>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#1f242e] p-8 md:p-10 rounded-[2rem] text-white relative overflow-hidden" id="book">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#f4b8c1] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<h3 className="text-2xl font-serif mb-2">Request Appointment</h3>
<p className="text-stone-400 text-sm font-light mb-8">Fill out the form below and we will contact you to confirm.</p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Thank you! We will contact you shortly to confirm your appointment.');">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-bold text-stone-500">First Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:bg-white/10 transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-bold text-stone-500">Last Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:bg-white/10 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-bold text-stone-500">Phone</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:bg-white/10 transition-colors" placeholder="(555) 555-5555" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-bold text-stone-500">Treatment of Interest</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:bg-white/10 transition-colors appearance-none">
<option className="text-stone-900">General Inquiry</option>
<option className="text-stone-900">Botox / Dysport</option>
<option className="text-stone-900">Dermal Fillers</option>
<option className="text-stone-900">HydraFacial</option>
<option className="text-stone-900">Morpheus8</option>
<option className="text-stone-900">Laser Hair Removal</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase tracking-wider font-bold text-stone-500">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:bg-white/10 transition-colors" placeholder="Preferred dates or questions..." rows="3"></textarea>
</div>
<button className="w-full bg-[#f4b8c1] text-white font-semibold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-white hover:text-[#1f242e] transition-all shadow-lg mt-4" type="submit">
                                Send Request
                            </button>
<p className="text-[10px] text-stone-500 text-center mt-4">By submitting this form you agree to be contacted via email/phone.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50 border-t border-stone-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-serif text-stone-900 text-center mb-10">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold text-sm">
                        Do you accept insurance?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        We are an aesthetic medical spa and typically do not accept insurance for cosmetic procedures. Please contact our office to discuss payment options and potential financing like CareCredit.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold text-sm">
                        How do I prepare for my appointment?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        We recommend arriving with a clean face free of makeup. Avoid blood-thinning medications (like Aspirin) for a few days prior to injectables to minimize bruising.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-stone-900 font-semibold text-sm">
                        Is there a consultation fee?
                        <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-500 text-sm leading-relaxed border-t border-stone-100 pt-4">
                        Please call us at 201-338-5186 to discuss our current consultation policies. In many cases, consultation fees may be applied toward your treatment.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1 space-y-6">
<img alt="Xthetics Med Spa" className="h-8 w-auto grayscale opacity-80" src="https://xtheticsmedspa.com/wp-content/uploads/2024/07/logo.webp"/>
<p className="text-xs text-stone-500 leading-relaxed">
                        Aesthetic Medical Spa located in Teaneck, NJ. Providing advanced skin and wellness treatments under medical supervision.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-[#f4b8c1] hover:text-white transition-colors" href="https://www.instagram.com/xthetics_med_spa" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-[#f4b8c1] hover:text-white transition-colors" href="https://www.facebook.com/profile.php?id=100086309402357" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-6">Services</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">Botox &amp; Dysport</a></li>
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">Dermal Fillers</a></li>
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">Morpheus 8</a></li>
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">HydraFacial</a></li>
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">Chemical Peels</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-6">Patient Info</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-[#f4b8c1] transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-stone-900 mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
                            185 Cedar Lane L1,<br/>Teaneck, NJ 07666
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-[#f4b8c1]" href="tel:201-338-5186">201-338-5186</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-[#f4b8c1]" href="mailto:xtheticsmedspa@gmail.com">xtheticsmedspa@gmail.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2026 Xthetics Med Spa. All Rights Reserved.</p>
<p>Designed with Care.</p>
</div>
</div>
</footer>



    </>
  );
}
