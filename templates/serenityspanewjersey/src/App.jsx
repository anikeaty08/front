import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const menuLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('menu-hidden');
                menu.classList.add('menu-visible');
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-square-linear" width="28" height="28"></iconify-icon>';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                menu.classList.add('menu-hidden');
                menu.classList.remove('menu-visible');
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
                document.body.style.overflow = ''; // Restore scrolling
            }
        }

        menuBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
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
      

<div className="bg-[#1C1917] text-stone-300 py-2.5 relative z-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
<span className="flex items-center gap-2 opacity-90">
<span className="w-1.5 h-1.5 rounded-full bg-[#B07C4C] animate-pulse"></span>
                Established 1999 • Black-Owned &amp; Family Operated
            </span>
<div className="flex items-center gap-6">
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="https://g.page/r/CYV4skWk_g1MEAE/review" target="_blank">
<iconify-icon className="text-[#B07C4C]" icon="solar:star-linear"></iconify-icon> Read Reviews
                </a>
<a className="flex items-center gap-1.5 hover:text-white transition-colors" href="tel:2018163050">
<iconify-icon icon="solar:phone-linear"></iconify-icon> (201) 816-3050
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-[#FDFCFB]/90 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group z-50 relative" href="#">
<div className="w-10 h-10 bg-[#1C1917] text-[#B07C4C] flex items-center justify-center rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300">
<span className="font-serif font-bold text-xl">S</span>
</div>
<div>
<span className="block text-lg font-bold tracking-tight text-[#1C1917] leading-none font-serif">Serenity</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-[#B07C4C] font-semibold">Skin Care &amp; Body Wellness</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest text-stone-500">
<a className="hover:text-[#B07C4C] transition-colors py-2" href="#services">Services</a>
<a className="hover:text-[#B07C4C] transition-colors py-2" href="#about">Our Story</a>
<a className="hover:text-[#B07C4C] transition-colors py-2" href="#shop">Shop</a>
<a className="hover:text-[#B07C4C] transition-colors py-2" href="#locations">Location</a>
<a className="hover:text-[#B07C4C] transition-colors py-2" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] font-bold uppercase tracking-wider text-[#1C1917]">Englewood, NJ</span>
<a className="text-[10px] text-stone-400 hover:text-[#B07C4C]" href="tel:2018163050">(201) 816-3050</a>
</div>
<a className="bg-[#1C1917] text-white px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-[#B07C4C] transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2" href="https://login.meevo.com/serenityskincare/ob?locationId=502172" target="_blank">
                    Book Now
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<button className="lg:hidden z-50 p-2 text-[#1C1917]" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#FDFCFB] z-40 flex flex-col justify-center items-center gap-8 menu-hidden transition-opacity duration-300" id="mobile-menu">
<a className="mobile-link text-2xl font-serif text-[#1C1917]" href="#services">Services</a>
<a className="mobile-link text-2xl font-serif text-[#1C1917]" href="#about">Our Story</a>
<a className="mobile-link text-2xl font-serif text-[#1C1917]" href="#shop">Shop</a>
<a className="mobile-link text-2xl font-serif text-[#1C1917]" href="#locations">Location</a>
<a className="mobile-link text-2xl font-serif text-[#1C1917]" href="#new-patient">Request Appt</a>
<div className="flex flex-col items-center gap-4 mt-8">
<a className="bg-[#B07C4C] text-white px-8 py-3 rounded-full text-sm uppercase tracking-widest" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Online</a>
<a className="text-stone-500 flex items-center gap-2" href="tel:2018163050">
<iconify-icon icon="solar:phone-linear"></iconify-icon> Call (201) 816-3050
            </a>
</div>
</div>

<header className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1C1917]">

<div className="absolute inset-0 z-0">

<img alt="Relaxing Head Massage" className="w-full h-full object-cover opacity-60 scale-105" src="https://images.squarespace-cdn.com/content/v1/5a39aacbedaed85c9d9b26d8/1513785175372-A03BY41G5VQV57C1HMXV/foreheadmassage.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/90 via-[#1C1917]/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10 pb-20">
<div className="max-w-3xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.2em] font-medium shadow-sm">
<iconify-icon className="text-[#B07C4C]" icon="solar:cup-star-linear"></iconify-icon>
                    Premier Day Spa since 1999
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.95]">
                    Serenity Skin Care <br/>
<span className="font-serif italic text-[#B07C4C]">&amp; Body Wellness</span>
</h1>
<p className="text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-xl border-l-2 border-[#B07C4C] pl-6 fade-up delay-100">
                    "It’s not just a service, it’s an experience."™ <br/>
                    A sanctuary dedicated to your total body wellness in the heart of Englewood.
                </p>
<div className="flex flex-col sm:flex-row gap-5 pt-6 fade-up delay-200">
<a className="bg-white text-[#1C1917] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-stone-100 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group" href="https://login.meevo.com/serenityskincare/ob?locationId=502172" target="_blank">
                        Book Appointment
                        <iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:calendar-linear" width="18"></iconify-icon>
</a>
<a className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-3" href="tel:2018163050">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        (201) 816-3050
                    </a>
</div>

<div className="pt-8 flex flex-wrap gap-6 text-xs text-stone-400 font-medium uppercase tracking-wider fade-up delay-200">
<span className="flex items-center gap-2"><iconify-icon className="text-[#B07C4C]" icon="solar:check-circle-linear"></iconify-icon> Black-Owned</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#B07C4C]" icon="solar:users-group-rounded-linear"></iconify-icon> Family Operated</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#B07C4C]" icon="solar:medal-ribbon-linear"></iconify-icon> 25+ Years Experience</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
<img alt="Serenity Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.squarespace-cdn.com/content/v1/5a39aacbedaed85c9d9b26d8/1ebb0897-991b-48fc-a1bc-ebbae466500f/Consuela+Updated.png"/>
</div>
<div className="absolute -bottom-6 -right-6 w-48 bg-[#FDFCFB] p-6 rounded-xl border border-stone-100 shadow-xl hidden md:block">
<p className="font-serif text-3xl text-[#B07C4C]">25+</p>
<p className="text-xs uppercase tracking-wider text-stone-500 mt-1">Years of Excellence</p>
</div>
</div>
<div className="space-y-6">
<span className="text-[#B07C4C] text-xs font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-8 h-[1px] bg-[#B07C4C]"></span>
                    Our Story
                </span>
<h2 className="text-4xl md:text-5xl font-medium text-[#1C1917] tracking-tight leading-tight">
                    Englewood's Premier <br/><span className="font-serif italic text-stone-500">Day Spa</span>
</h2>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                    Nestled between Leonia and Tenafly, Serenity Skin Care &amp; Body Wellness provides superior service, a serene atmosphere, and a personalized experience.
                </p>
<p className="text-stone-600 leading-relaxed font-light text-lg">
                    We are a black-owned, family-owned and operated sanctuary dedicated to your total body wellness.
                </p>
<div className="pt-4">
<a className="text-[#B07C4C] font-semibold text-xs uppercase tracking-widest border-b border-[#B07C4C]/30 pb-1 hover:border-[#B07C4C] transition-all" href="#about-full">Read Full Story</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCFB] border-y border-stone-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#B07C4C] text-xs font-bold tracking-widest uppercase mb-4 block">Experiences</span>
<h2 className="text-3xl md:text-4xl font-medium text-[#1C1917] font-serif">Curated Wellness Menu</h2>
<p className="mt-4 text-stone-500 font-light">Indulge in our specialized spa treatments designed for relaxation and results.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#B07C4C]/30 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B07C4C] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon icon="solar:cosmetic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1C1917] mb-2">Skincare</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Customized facials and anti-aging treatments for radiant skin.</p>
<a className="text-[10px] font-bold uppercase tracking-widest text-[#B07C4C] group-hover:underline" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Now</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#B07C4C]/30 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B07C4C] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1C1917] mb-2">Hair Removal</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Professional wax-free and traditional hair removal services.</p>
<a className="text-[10px] font-bold uppercase tracking-widest text-[#B07C4C] group-hover:underline" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Now</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#B07C4C]/30 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B07C4C] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1C1917] mb-2">Body Treatments</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Exfoliating scrubs and wraps to renew your body.</p>
<a className="text-[10px] font-bold uppercase tracking-widest text-[#B07C4C] group-hover:underline" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Now</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#B07C4C]/30 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B07C4C] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon icon="solar:hand-heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1C1917] mb-2">Massage Therapy</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Therapeutic massage to relieve tension and stress.</p>
<a className="text-[10px] font-bold uppercase tracking-widest text-[#B07C4C] group-hover:underline" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Now</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#B07C4C]/30 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B07C4C] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon icon="solar:palette-round-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1C1917] mb-2">Hand &amp; Foot Therapy</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Luxurious care for your most hardworking extremities.</p>
<a className="text-[10px] font-bold uppercase tracking-widest text-[#B07C4C] group-hover:underline" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Now</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#B07C4C]/30 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B07C4C] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1C1917] mb-2">Womb Wellness</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Specialized care focusing on holistic reproductive health.</p>
<a className="text-[10px] font-bold uppercase tracking-widest text-[#B07C4C] group-hover:underline" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Now</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#B07C4C]/30 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B07C4C] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon icon="solar:body-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1C1917] mb-2">Face &amp; Body Sculpting</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Non-invasive techniques to contour and define.</p>
<a className="text-[10px] font-bold uppercase tracking-widest text-[#B07C4C] group-hover:underline" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Now</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#B07C4C]/30 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B07C4C] group-hover:text-white transition-colors text-[#1C1917]">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1C1917] mb-2">Spa Packages</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-4">Curated combinations for the ultimate day of relaxation.</p>
<a className="text-[10px] font-bold uppercase tracking-widest text-[#B07C4C] group-hover:underline" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">Book Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1C1917] text-white relative overflow-hidden" id="new-patient">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B07C4C]/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">

<div className="space-y-10">
<div>
<span className="text-[#B07C4C] text-xs font-bold tracking-widest uppercase block mb-4">Visit Us</span>
<h2 className="text-4xl font-serif mb-6">Rest &amp; Relax in Englewood</h2>
<p className="text-stone-400 font-light text-lg">Experience our sanctuary designed for peace and rejuvenation.</p>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#B07C4C]" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-sm uppercase tracking-wide mb-1">Location</h3>
<p className="text-stone-400 text-sm leading-relaxed">7 Grand Avenue<br/>Englewood, NJ 07631</p>
<a className="text-[#B07C4C] text-xs font-bold mt-2 inline-block hover:text-white" href="https://maps.google.com/?q=7+Grand+Avenue+Englewood+NJ+07631" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#B07C4C]" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-sm uppercase tracking-wide mb-1">Hours</h3>
<div className="grid grid-cols-2 gap-x-8 gap-y-1 text-stone-400 text-sm">
<span>Tue - Fri</span> <span>9:00 am - 6:00 pm</span>
<span>Saturday</span> <span>9:00 am - 5:00 pm</span>
<span>Sun - Mon</span> <span className="text-[#B07C4C]">Spa Parties Only</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 md:p-10 text-[#1C1917]">
<h3 className="text-2xl font-serif mb-2">Request an Appointment</h3>
<p className="text-stone-500 text-xs mb-8">Fill out the form below and we will contact you to confirm.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you for your request. Our staff will contact you shortly to confirm your appointment.');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">First Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B07C4C] transition-colors" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Last Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B07C4C] transition-colors" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Phone</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B07C4C] transition-colors" required="" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Email</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B07C4C] transition-colors" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Preferred Day</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B07C4C] transition-colors">
<option>Tuesday</option>
<option>Wednesday</option>
<option>Thursday</option>
<option>Friday</option>
<option>Saturday</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Time</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B07C4C] transition-colors">
<option>Morning</option>
<option>Afternoon</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Reason for Visit</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#B07C4C] transition-colors" rows="3"></textarea>
</div>
<button className="w-full bg-[#1C1917] text-white py-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-[#B07C4C] transition-colors shadow-lg" type="submit">Submit Request</button>
<p className="text-[10px] text-stone-400 text-center italic">*Note: This form connects to our front desk. A confirmation email will be sent upon submission.</p>
</form>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-[#1C1917] tracking-tight mb-10 text-center font-serif">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-[#1C1917] font-semibold">
                    Do you accept insurance?
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                    We are a wellness spa and typically do not process insurance directly. However, we can provide a receipt for you to submit to your provider for potential reimbursement if your plan covers massage therapy or wellness services.
                </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-[#1C1917] font-semibold">
                    How do I book a Spa Party?
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                    Spa parties are exclusively hosted on Sundays and Mondays when the spa is closed to the general public. Please call us at (201) 816-3050 to discuss packages and availability.
                </div>
</details>
<details className="group bg-white rounded-xl border border-stone-200 p-5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between text-[#1C1917] font-semibold">
                    Where do I park?
                    <span className="ml-4 shrink-0 transition-transform group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="mt-4 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                    We are located at 7 Grand Avenue in Englewood. There is street parking available nearby, as well as municipal lots within walking distance.
                </div>
</details>
</div>
</section>

<footer className="bg-[#1C1917] text-stone-400 pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2 text-white" href="#">
<span className="text-xl font-bold tracking-tight font-serif">Serenity.</span>
</a>
<p className="text-sm leading-relaxed max-w-sm">
                        Englewood's premier day spa. A black-owned, family-owned sanctuary established in 1999 dedicated to your total body wellness.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="https://www.instagram.com"><iconify-icon className="text-white" icon="solar:camera-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="https://www.facebook.com"><iconify-icon className="text-white" icon="brandico:facebook" width="14"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#B07C4C]" icon="solar:map-point-linear"></iconify-icon>
<span>7 Grand Avenue<br/>Englewood, NJ 07631</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#B07C4C]" icon="solar:phone-linear"></iconify-icon>
<span>(201) 816-3050</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#B07C4C]" icon="solar:letter-linear"></iconify-icon>
<span>customerservice@serenityskincare.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Hours</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between">
<span>Tue - Fri</span>
<span className="text-white">9am - 6pm</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-white">9am - 5pm</span>
</li>
<li className="flex justify-between">
<span>Sun - Mon</span>
<span className="text-[#B07C4C]">Closed / Parties</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>© 2026 Serenity Skin Care &amp; Body Wellness. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 md:hidden">
<a className="bg-[#B07C4C] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center" href="https://login.meevo.com/serenityskincare/ob?locationId=502172">
<iconify-icon height="24" icon="solar:calendar-add-linear" width="24"></iconify-icon>
</a>
</div>


    </>
  );
}
