import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
rio: {
black: '#000000',
dark: '#1C1917',
stone: '#F5F5F4',
accent: '#d4a373' // Inferred gold/bronze tone based on "Med Spa" premium feel and source logo warmth
}
}
}
}
}



        // Mobile Menu Logic
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const body = document.body;
        const mobileLinks = document.querySelectorAll('.mobile-link');

        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                body.classList.add('menu-open');
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                body.classList.remove('menu-open');
            }
        }

        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
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
      

<div className="bg-black text-white/80 py-2.5 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Accepting New Patients
            </span>
<div className="flex items-center gap-6">
<a className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors" href="https://maps.google.com/?q=62+Broadway,+Woodcliff+Lake,+NJ+07642" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Woodcliff Lake, NJ
                </a>
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="tel:2018004772">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon> 201-800-4772
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-zinc-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group relative z-50" href="#">
<img alt="Rio Med Spa" className="h-10 w-auto object-contain" src="https://www.myriomedspa.com/wp-content/uploads/2025/04/Rio-Med-Spa_Logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
<a className="hover:text-black transition-colors py-2" href="#about">About</a>
<a className="hover:text-black transition-colors py-2" href="#aesthetics">Aesthetics</a>
<a className="hover:text-black transition-colors py-2" href="#wellness">Wellness</a>
<a className="hover:text-black transition-colors py-2" href="#memberships">Memberships</a>
<a className="hover:text-black transition-colors py-2" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-zinc-900 font-medium text-xs hover:opacity-70 transition-opacity" href="tel:2018004772">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    Call
                </a>
<a className="hidden sm:flex bg-black text-white px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg active:scale-95 items-center gap-2" href="https://riomedspa.zenoti.com/webstoreNew" target="_blank">
                    Book Now
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>

<button className="lg:hidden relative z-50 p-2 text-black focus:outline-none" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#FDFCFB] z-40 transform translate-x-full flex flex-col pt-28 px-6 pb-8 h-screen w-screen" id="mobile-menu">
<div className="flex flex-col gap-6 text-2xl font-serif text-zinc-900">
<a className="mobile-link border-b border-zinc-100 pb-4" href="#about">About</a>
<a className="mobile-link border-b border-zinc-100 pb-4" href="#aesthetics">Aesthetics</a>
<a className="mobile-link border-b border-zinc-100 pb-4" href="#wellness">Wellness</a>
<a className="mobile-link border-b border-zinc-100 pb-4" href="#memberships">Memberships</a>
<a className="mobile-link border-b border-zinc-100 pb-4" href="#contact">Contact</a>
</div>
<div className="mt-auto space-y-4">
<a className="w-full flex justify-center items-center gap-2 bg-black text-white py-4 rounded-full text-sm font-semibold uppercase tracking-widest" href="https://riomedspa.zenoti.com/webstoreNew">
                Book Appointment
            </a>
<a className="w-full flex justify-center items-center gap-2 border border-zinc-200 text-zinc-900 py-4 rounded-full text-sm font-semibold uppercase tracking-widest" href="tel:2018004772">
                Call Us
            </a>
</div>
</div>

<header className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Rio Med Spa Interior" className="w-full h-full object-cover opacity-90 scale-105" src="https://www.myriomedspa.com/wp-content/uploads/2025/05/shutterstock_1484816237.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-32">
<div className="max-w-3xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium shadow-sm">
<iconify-icon className="text-white" icon="solar:star-linear"></iconify-icon>
                    Woodcliff Lake, NJ
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.95]">
                    Inner Wellness <br/>
<span className="font-serif italic text-zinc-200">Outer Beauty</span>
</h1>
<p className="text-lg md:text-xl text-zinc-200/90 font-light leading-relaxed max-w-xl border-l-2 border-white/30 pl-6 fade-up delay-100">
                    Conceptualized with a passion for timeless beauty paired with modern science. Rio Med Spa offers a beautiful blend of cosmetics and wellness services.
                </p>
<div className="flex flex-col sm:flex-row gap-5 pt-6 fade-up delay-200">
<a className="bg-white text-black px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-zinc-100 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group" href="https://riomedspa.zenoti.com/webstoreNew" target="_blank">
                        Book Appointment
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-3" href="tel:2018004772">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                        (201) 800-4772
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="opacity-70" icon="solar:medical-kit-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-medium">Modern Science</span>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="opacity-70" icon="solar:heart-pulse-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-medium">Holistic Wellness</span>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="opacity-70" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-medium">Expert Providers</span>
</div>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="opacity-70" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-medium">Patient Focused</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<span className="text-black text-xs font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-[1px] bg-black"></span>
                        About Rio
                    </span>
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight">
                        Redefining the <br/><span className="font-serif italic text-zinc-500">med spa experience.</span>
</h2>
<p className="text-zinc-600 leading-relaxed font-light text-lg">
                        At Rio, we believe in providing aesthetic services that are both cutting edge and health conscious. Whether you are new to the art of aesthetics, or an experienced client seeking your new go-to medspa, Rio offers an abundance of services to suit your needs and maintain a youthful glow.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-zinc-600 transition-colors" href="#contact">
                            Meet Our Team <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden relative group">

<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.myriomedspa.com/wp-content/uploads/2025/05/rio-blog-3.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs">
<p className="font-serif italic text-lg leading-snug">"Where inner wellness meets outer beauty."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCFB] border-y border-zinc-100" id="aesthetics">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
<div>
<span className="text-black text-xs font-bold tracking-widest uppercase block mb-3">Comprehensive Care</span>
<h2 className="text-4xl font-medium text-zinc-900 tracking-tight">Our Services</h2>
</div>
<div className="flex gap-3">
<a className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider shadow-md" href="#aesthetics">Aesthetics</a>
<a className="px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-50 transition-colors" href="#wellness">Wellness</a>
<a className="px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-50 transition-colors" href="#memberships">Memberships</a>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-white p-2 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100">
<div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative">

<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.myriomedspa.com/wp-content/uploads/2025/04/shutterstock_2452924757-scaled.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide">Popular</div>
</div>
<div className="px-6 pb-8">
<h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors">Aesthetics</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Enhance your natural beauty with injectables, lasers, and essential facials designed to help you look your best.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Injectables (Botox/Fillers)
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Laser Treatments
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Golden Glow Facials
                            </div>
</div>
<a className="w-full block text-center py-3 rounded-xl border border-zinc-200 text-zinc-900 font-semibold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors" href="https://riomedspa.zenoti.com/webstoreNew">
                            Book Aesthetics
                        </a>
</div>
</div>

<div className="group relative bg-white p-2 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100 transform md:-translate-y-4" id="wellness">
<div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative">

<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.myriomedspa.com/wp-content/uploads/2025/05/shutterstock_2467410239.jpg"/>
</div>
<div className="px-6 pb-8">
<h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors">Wellness</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Optimize your health with hormone therapy, weight management, and vitamin infusions.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Weight-Loss Management
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Hormone Replacement
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Vitamin &amp; Peptide Therapy
                            </div>
</div>
<a className="w-full block text-center py-3 rounded-xl border border-zinc-200 text-zinc-900 font-semibold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors" href="https://riomedspa.zenoti.com/webstoreNew">
                            Book Wellness
                        </a>
</div>
</div>

<div className="group relative bg-white p-2 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100" id="memberships">
<div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative">

<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://www.myriomedspa.com/wp-content/uploads/2025/04/shutterstock_2132550693-scaled.jpg"/>
</div>
<div className="px-6 pb-8">
<h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors">Memberships</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">Join our exclusive program for consistent care and preferred pricing on your favorite treatments.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Exclusive Pricing
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Bridal Packages
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-800">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear"></iconify-icon> Priority Booking
                            </div>
</div>
<a className="w-full block text-center py-3 rounded-xl border border-zinc-200 text-zinc-900 font-semibold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors" href="#contact">
                            Inquire Now
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="space-y-4">
<span className="text-black text-xs font-bold tracking-widest uppercase">Patient Stories</span>
<h2 className="text-4xl font-medium text-zinc-900 tracking-tight">Trusted by Patients</h2>
</div>
<div className="flex gap-2 text-amber-500">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
<p className="text-zinc-600 italic mb-6 leading-relaxed">"Rio Med Spa is absolutely amazing. The staff makes you feel so comfortable and the results of my facial were immediate."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-500 text-xs">A</div>
<div>
<p className="text-sm font-bold text-zinc-900">Amanda S.</p>
<p className="text-[10px] uppercase text-zinc-400 font-bold tracking-wider">Aesthetics Patient</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
<p className="text-zinc-600 italic mb-6 leading-relaxed">"I've been going for wellness treatments and I have never felt better. The team is knowledgeable and truly cares about your health."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-500 text-xs">J</div>
<div>
<p className="text-sm font-bold text-zinc-900">Jennifer M.</p>
<p className="text-[10px] uppercase text-zinc-400 font-bold tracking-wider">Wellness Patient</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
<p className="text-zinc-600 italic mb-6 leading-relaxed">"Beautiful facility and very professional staff. Highly recommend for anyone looking for high quality med spa services."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-500 text-xs">S</div>
<div>
<p className="text-sm font-bold text-zinc-900">Sarah K.</p>
<p className="text-[10px] uppercase text-zinc-400 font-bold tracking-wider">New Patient</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="contact">
<div className="absolute right-0 top-0 w-1/3 h-full bg-zinc-50 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8 pr-8">
<h2 className="text-4xl font-medium text-zinc-900 tracking-tight">Request an <br/><span className="font-serif italic text-zinc-500">Appointment</span></h2>
<p className="text-zinc-600 leading-relaxed">Ready to start your journey? Fill out the form below or give us a call. We look forward to welcoming you to Rio Med Spa.</p>
<div className="space-y-6 pt-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 text-black">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wide">Visit Us</h4>
<p className="text-sm text-zinc-500 mt-1">62 Broadway, Woodcliff Lake, NJ 07642</p>
<a className="text-xs font-semibold underline mt-2 inline-block" href="https://maps.google.com/?q=62+Broadway,+Woodcliff+Lake,+NJ+07642" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center shrink-0 text-black">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wide">Call Us</h4>
<p className="text-sm text-zinc-500 mt-1">Mon-Fri: 9am - 5pm (Est)</p>
<a className="text-lg font-serif italic text-black mt-1 block" href="tel:2018004772">201-800-4772</a>
</div>
</div>
</div>
</div>

<div className="bg-zinc-50 p-8 lg:p-10 rounded-3xl border border-zinc-100 lg:border-none">
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Thank you! Your request has been sent. A member of our team will contact you shortly.');">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-zinc-500">First Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors" required="" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Phone</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors" required="" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Service of Interest</label>
<select className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors appearance-none">
<option>General Inquiry</option>
<option>Injectables (Botox/Filler)</option>
<option>Facials &amp; Skincare</option>
<option>Weight Loss Management</option>
<option>Hormone Replacement Therapy</option>
<option>IV/Vitamin Therapy</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-wider text-zinc-500">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-white border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-colors" rows="3"></textarea>
</div>
<button className="w-full bg-black text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all shadow-lg mt-2" type="submit">
                            Request Appointment
                        </button>
<p className="text-[10px] text-center text-zinc-400 mt-4">By submitting this form, you agree to receive communications from Rio Med Spa.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#1C1917] text-zinc-400 pt-20 pb-10 border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="block w-32" href="#">
<img alt="Rio Med Spa" className="w-full h-auto brightness-0 invert opacity-90" src="https://www.myriomedspa.com/wp-content/uploads/2025/04/Rio-Med-Spa_Logo.png"/>
</a>
<p className="text-sm leading-relaxed max-w-sm">
                        Where Inner Wellness Meets Outer Beauty. A premier medical spa serving Woodcliff Lake and surrounding areas with advanced aesthetics and holistic wellness.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="https://www.instagram.com/riomedspa" target="_blank"><iconify-icon className="grayscale brightness-200" icon="logos:instagram-icon" width="16"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="https://www.facebook.com/share/16EieUpLBh/" target="_blank"><iconify-icon className="grayscale brightness-200" icon="logos:facebook" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Explore</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#aesthetics">Aesthetics</a></li>
<li><a className="hover:text-white transition-colors" href="#wellness">Wellness</a></li>
<li><a className="hover:text-white transition-colors" href="#memberships">Memberships</a></li>
<li><a className="hover:text-white transition-colors" href="#reviews">Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>62 Broadway<br/>Woodcliff Lake, NJ 07642</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:phone-linear"></iconify-icon>
<span>201-800-4772</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-500" icon="solar:letter-linear"></iconify-icon>
<span>info@myriomedspa.com</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
<p>© 2025 Rio Med Spa. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 md:hidden">
<a className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center" href="https://riomedspa.zenoti.com/webstoreNew">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</a>
</div>


    </>
  );
}
