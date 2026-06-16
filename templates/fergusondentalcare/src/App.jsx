import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileClose = document.getElementById('mobile-close');
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
                document.body.style.overflow = '';
            }
        }

        mobileToggle.addEventListener('click', toggleMenu);
        mobileClose.addEventListener('click', toggleMenu);

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
      

<div className="hidden md:block bg-[#dad1c6] text-stone-900 py-2 px-4 text-xs font-semibold tracking-wide" style={{}}>
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:map-point-linear"></iconify-icon>
                    811 River Rd, Fair Haven, NJ
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon>
                    Mon-Tue 8-6, Sat 9-5
                </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:opacity-70 transition-opacity flex items-center gap-1" href="tel:7327471224">
<iconify-icon className="text-base" icon="solar:phone-calling-linear"></iconify-icon>
                    732-747-1224
                </a>
</div>
</div>
</div>

<header className="sticky top-0 left-0 right-0 z-50 w-full p-3 md:p-6 transition-all">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-stone-200/50 shadow-stone-200/50" style={{}}>

<a className="flex items-center gap-3 group" href="#">

<div className="bg-brand-dark p-2 rounded-lg group-hover:bg-stone-800 transition-colors text-white" style={{}}>
<iconify-icon height="24" icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-stone-900 leading-none" style={{}}>Ferguson</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 font-semibold" style={{}}>Dental Care</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold transition-colors text-stone-600 hover:text-brand-gold" href="#" style={{}}>Home</a>
<a className="text-sm font-semibold transition-colors text-stone-600 hover:text-brand-gold" href="#services" style={{}}>Services</a>
<a className="text-sm font-semibold transition-colors text-stone-600 hover:text-brand-gold" href="#team" style={{}}>Our Team</a>
<a className="text-sm font-semibold transition-colors text-stone-600 hover:text-brand-gold" href="#locations" style={{}}>Locations</a>
<a className="text-sm font-semibold transition-colors text-stone-600 hover:text-brand-gold" href="#contact" style={{}}>Contact</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-bold text-stone-900 hover:text-brand-gold transition-colors" href="tel:7327471224" style={{}}>
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span className="hidden xl:inline">732-747-1224</span>
</a>
<a className="inline-flex items-center gap-2 bg-brand-dark text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:bg-stone-800 text-white" href="#book" style={{}}>
                    Request Appointment
                </a>
</div>

<button className="lg:hidden text-stone-900 p-1" id="mobile-toggle" style={{}}>
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>
</header>

<div className="fixed inset-0 z-40 menu-hidden bg-stone-50/95 backdrop-blur-xl flex flex-col pt-32 px-6" id="mobile-menu" style={{}}>
<button className="absolute top-6 right-6 p-2 bg-white rounded-full shadow-md text-stone-900" id="mobile-close" style={{}}>
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-bold text-stone-900" href="#" style={{}}>Home</a>
<a className="mobile-link text-2xl font-bold text-stone-900" href="#services" style={{}}>Services</a>
<a className="mobile-link text-2xl font-bold text-stone-900" href="#team" style={{}}>Our Team</a>
<a className="mobile-link text-2xl font-bold text-stone-900" href="#contact" style={{}}>Patient Info</a>
<hr className="border-stone-200 my-4" style={{}}/>
<a className="mobile-link w-full bg-brand-dark text-white py-4 rounded-xl font-bold text-lg shadow-xl" href="#book">
                Book Appointment
            </a>
<a className="w-full bg-[#dad1c6] text-stone-900 py-4 rounded-xl font-bold text-lg" href="tel:7327471224" style={{}}>
                Call 732-747-1224
            </a>
</div>
</div>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dad1c6]/30 border border-[#dad1c6] text-stone-800 text-xs font-bold tracking-wider uppercase" style={{}}>
<span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                        Serving Fair Haven &amp; Red Bank
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-stone-900" style={{}}>
                        A Happy Place for <br/>
<span className="text-stone-500 tracking-wide font-playfair bg-gradient-to-r from-brand-gold to-stone-600" style={{transition: 'outline 0.1s ease-in-out'}}>Healthy Smiles</span>
</h1>
<p className="text-lg md:text-xl text-stone-600 font-medium max-w-lg leading-relaxed" style={{}}>
                        Modern and comfortable dental office serving all members of your family. We are dedicated to helping you retain your teeth throughout your lifetime.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand-dark text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-stone-900/20 hover:translate-y-[-2px] hover:bg-stone-800 text-white" href="#book" style={{}}>
                            Book Online
                            <iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 border-stone-200 text-base font-bold px-8 py-3.5 rounded-full transition-all bg-white hover:bg-stone-50 text-stone-900 hover:border-brand-gold" href="tel:7327471224" style={{}}>
                            Call 732-747-1224
                        </a>
</div>

<div className="flex items-center gap-4 pt-6 border-t border-stone-200" style={{}}>
<div className="flex -space-x-3">

<div className="w-10 h-10 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-xs font-bold text-stone-500" style={{}}>A</div>
<div className="w-10 h-10 rounded-full bg-stone-300 border-2 border-white flex items-center justify-center text-xs font-bold text-stone-500" style={{}}>M</div>
<div className="flex text-xs font-bold text-white w-10 h-10 border-white border-2 rounded-full items-center justify-center">50+</div>
</div>
<div className="">
<div className="flex gap-0.5 text-brand-gold">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm font-medium mt-1 text-stone-600" style={{}}>5-Star Rated Practice</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/10 border-4 border-white" style={{}}>

<img alt="Happy Patient Couple" className="w-full h-[500px] object-cover object-center" src="//img1.wsimg.com/isteam/ip/ce7ffc74-1e84-44c9-92d7-cfa77730d882/Vxp2024-3872.jpg/:/rs=w:1200,m"/>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-md p-6 rounded-2xl shadow-lg flex items-center justify-between bg-white/90 border border-white/50">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-brand-gold">Our Promise</p>
<p className="font-bold text-stone-900" style={{}}>Comfortable, Family Care.</p>
</div>
<div className="p-3 rounded-full bg-[#dad1c6] text-stone-800" style={{}}>
<iconify-icon height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-[#dad1c6]/50"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-stone-900" style={{}}>
                    Comprehensive <span className="text-brand-gold">Dental Services</span>
</h2>
<p className="text-lg text-stone-500 font-medium" style={{}}>
                    We provide general and cosmetic dentistry services to children, adults, and seniors in a homey environment.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group rounded-3xl p-3 bg-stone-50 hover:bg-[#dad1c6]/30 transition-all duration-300" style={{}}>
<div className="h-64 rounded-2xl overflow-hidden mb-6 relative">

<img alt="Pediatric Dentistry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="//img1.wsimg.com/isteam/ip/ce7ffc74-1e84-44c9-92d7-cfa77730d882/child.jpg/:/rs=w:800,m"/>
<div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">Dentistry for Children</div>
</div>
<div className="px-2 pb-4">
<h3 className="text-2xl font-bold text-stone-900 mb-3" style={{}}>Family Dentistry</h3>
<p className="text-stone-600 mb-4" style={{}}>Serving multiple generations of many families. We create lasting relationships with gentle care for your little ones.</p>
<a className="inline-flex items-center text-brand-gold font-bold hover:underline" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group rounded-3xl p-3 bg-stone-50 hover:bg-[#dad1c6]/30 transition-all duration-300" style={{}}>
<div className="h-64 rounded-2xl overflow-hidden mb-6 relative">

<img alt="General Dentistry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="//img1.wsimg.com/isteam/ip/ce7ffc74-1e84-44c9-92d7-cfa77730d882/couple.jpg/:/rs=w:800,m"/>
<div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">General Dentistry</div>
</div>
<div className="px-2 pb-4">
<h3 className="text-2xl font-bold text-stone-900 mb-3" style={{}}>Protect Your Smile</h3>
<p className="text-stone-600 mb-4" style={{}}>Dedicated to helping you retain your teeth throughout your lifetime with high levels of function and comfort.</p>
<a className="inline-flex items-center text-brand-gold font-bold hover:underline" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group rounded-3xl p-3 bg-stone-50 hover:bg-[#dad1c6]/30 transition-all duration-300" style={{}}>
<div className="h-64 rounded-2xl overflow-hidden mb-6 relative">

<img alt="Modern Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="//img1.wsimg.com/isteam/ip/ce7ffc74-1e84-44c9-92d7-cfa77730d882/office.jpg/:/rs=w:800,m"/>
<div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg text-sm font-bold shadow-sm">Cosmetic &amp; Comfort</div>
</div>
<div className="px-2 pb-4">
<h3 className="text-2xl font-bold text-stone-900 mb-3" style={{}}>Modern &amp; Comfortable</h3>
<p className="text-stone-600 mb-4" style={{}}>We offer the latest technology in an environment that is homey and welcoming. Your comfort is our priority.</p>
<a className="inline-flex items-center text-brand-gold font-bold hover:underline" href="#">
                            Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white rounded-t-[3rem] relative overflow-hidden" id="locations" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<span className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-2 block">Visit Us</span>
<h2 className="text-4xl md:text-5xl font-bold mb-6">Conveniently Located in Fair Haven</h2>
<p className="text-stone-300 text-lg mb-8 leading-relaxed" style={{}}>
                        Dr. Ferguson looks forward to welcoming you and your family to our office. We have convenient hours, including evenings and Saturdays.
                    </p>
<div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-brand-gold rounded-full text-white shrink-0">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold mb-1">Fair Haven Office</h3>
<p className="text-stone-300" style={{}}>811 River Road<br/>Fair Haven, NJ, USA</p>
<a className="text-brand-gold font-semibold mt-2 inline-flex items-center gap-1 hover:text-white transition-colors" href="https://maps.google.com/?q=811+River+Road,+Fair+Haven,+NJ" target="_blank">
                                    Get Directions <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-brand-gold rounded-full text-white shrink-0">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold mb-1">Contact</h3>
<p className="text-stone-300" style={{}}>
<a className="hover:text-white" href="tel:7327471224">732-747-1224</a>
</p>
<p className="text-stone-300 break-all" style={{}}>
<a className="hover:text-white" href="mailto:fairhavendentist@gmail.com">fairhavendentist@gmail.com</a>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-gold rounded-full text-white shrink-0">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold mb-1">Hours</h3>
<ul className="text-stone-300 text-sm space-y-1" style={{}}>
<li className="flex justify-between gap-8"><span>Mon - Tue:</span> <span>08:00 AM – 06:00 PM</span></li>
<li className="flex justify-between gap-8"><span>Wed &amp; Fri:</span> <span>07:00 AM – 03:00 PM</span></li>
<li className="flex justify-between gap-8"><span>Saturday:</span> <span>09:00 AM – 05:00 PM</span></li>
<li className="flex justify-between gap-8 text-stone-500" style={{}}><span>Thu &amp; Sun:</span> <span>Closed</span></li>
</ul>
<p className="text-xs text-brand-gold mt-3 font-semibold">* Call 24/7 for emergencies</p>
</div>
</div>
</div>
</div>

<div className="h-full min-h-[400px] rounded-3xl overflow-hidden bg-stone-800 relative group" style={{}}>

<div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=40.3655,-74.0337&amp;zoom=15&amp;size=800x800&amp;maptype=roadmap')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<a className="bg-white text-stone-900 px-6 py-3 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2" href="https://maps.google.com/?q=811+River+Road,+Fair+Haven,+NJ" style={{}} target="_blank">
                            Open in Maps <iconify-icon icon="solar:map-arrow-right-bold"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#dad1c6]/30" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[2.5rem] shadow-xl p-8 md:p-12 border border-stone-100" style={{}}>
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4" style={{}}>Request An Appointment</h2>
<p className="text-stone-500" style={{}}>Fill out the form below and our team will contact you to confirm your appointment time.</p>
</div>

<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-bold text-stone-700 ml-1" style={{}}>Full Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" placeholder="John Doe" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-stone-700 ml-1" style={{}}>Phone Number</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" placeholder="(732) 555-0123" style={{}} type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-bold text-stone-700 ml-1" style={{}}>Email Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" placeholder="john@example.com" style={{}} type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-stone-700 ml-1" style={{}}>Preferred Location</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" style={{}}>
<option>Fair Haven (811 River Rd)</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-bold text-stone-700 ml-1" style={{}}>Preferred Day</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" style={{}}>
<option>Monday</option>
<option>Tuesday</option>
<option>Wednesday</option>
<option>Friday</option>
<option>Saturday</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-stone-700 ml-1" style={{}}>Reason for Visit</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" style={{}}>
<option>General Checkup / Cleaning</option>
<option>Cosmetic Consultation</option>
<option>Tooth Pain / Emergency</option>
<option>Pediatric Visit</option>
<option>Other</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-bold text-stone-700 ml-1" style={{}}>Message (Optional)</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" rows="3" style={{}}></textarea>
</div>
<button className="w-full bg-brand-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:bg-stone-800 transition-all flex justify-center items-center gap-2" style={{}} type="button">
                        Submit Request
                        <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-stone-400 mt-4" style={{}}>* Setup Note: Connect this form to instant email autoresponder + staff notification email.</p>
</form>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-white border-t border-stone-200" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<span className="text-xl font-bold tracking-tight text-stone-900" style={{}}>Ferguson Dental</span>
</a>
<p className="text-stone-500 font-medium leading-relaxed" style={{}}>
                        A Happy Place for Healthy Smiles. We create lasting relationships with the families we serve in Fair Haven and surrounding areas.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all text-stone-600" href="https://www.facebook.com/fergusondentalcare" style={{}} target="_blank">
<iconify-icon icon="logos:facebook" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-stone-900" style={{}}>Quick Links</h4>
<ul className="space-y-3 text-stone-500 font-medium" style={{}}>
<li><a className="hover:text-brand-gold transition-colors" href="#">Home</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#team">Meet Our Team</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#services">Dental Services</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#contact">Patient Information</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-stone-900" style={{}}>Services</h4>
<ul className="space-y-3 text-stone-500 font-medium" style={{}}>
<li><a className="hover:text-brand-gold transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Dentistry for Children</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-stone-900" style={{}}>Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-stone-500 font-medium" style={{}}>
<iconify-icon className="text-brand-gold shrink-0 mt-1" icon="solar:map-point-bold"></iconify-icon>
<span>811 River Road<br/>Fair Haven, NJ</span>
</li>
<li className="flex items-center gap-3 text-stone-500 font-medium" style={{}}>
<iconify-icon className="text-brand-gold shrink-0" icon="solar:phone-calling-bold"></iconify-icon>
<span>(732) 747-1224</span>
</li>
<li className="flex items-center gap-3 text-stone-500 font-medium" style={{}}>
<iconify-icon className="text-brand-gold shrink-0" icon="solar:letter-bold"></iconify-icon>
<span>fairhavendentist@gmail.com</span>
</li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-stone-200 text-sm font-medium text-stone-500" style={{}}>
<p>© 2026 Ferguson Dental Care. All Rights Reserved.</p>
<div className="flex gap-1 items-center">
<span>Powered by</span>
<span className="font-bold text-stone-900" style={{}}>GoDaddy</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
