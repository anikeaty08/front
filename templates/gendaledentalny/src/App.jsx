import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const btn = document.getElementById('mobile-menu-btn');
            
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                document.body.style.overflow = 'auto'; // Enable scrolling
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full">

<div className="bg-rose-950 text-white text-xs py-2 px-4 hidden md:block border-b border-rose-900">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 font-medium">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                        76-01 Myrtle Ave, Queens, NY 11385
                    </span>
<span className="flex items-center gap-1.5 font-medium opacity-80">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                        Mon &amp; Wed: 9am-8pm
                    </span>
</div>
<a className="flex items-center gap-1.5 font-bold hover:text-rose-200 transition-colors" href="tel:7183862655">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
                    718-386-2655
                </a>
</div>
</div>

<nav className="mx-auto w-full md:max-w-7xl md:mt-4 md:rounded-full backdrop-blur-xl border-b md:border shadow-sm px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-slate-200/60 shadow-slate-200/50">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<div className="bg-rose-600 p-1.5 rounded-lg group-hover:bg-rose-700 transition-colors text-white">
<img alt="Logo" className="w-6 h-6 object-contain invert brightness-0" src="https://img1.wsimg.com/isteam/ip/f0a921fd-719c-4f62-87d2-ce8a8c3af55d/904590CC-7EF8-4FA5-9540-6E2ED5A18A64.png/:/rs=h:200,cg:true,m/qt=q:95"/>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900 leading-tight">The Smile<br/><span className="text-rose-600">Makeover</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-rose-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-rose-600" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-rose-600" href="#about">Our Team</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-rose-600" href="#locations">Locations</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-rose-600" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 bg-slate-900 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:bg-slate-800 text-white" href="#book">
                    Request Appointment
                </a>
</div>

<button className="md:hidden z-50 relative p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 hidden flex-col pt-24 px-6 space-y-6 md:hidden" id="mobile-menu">
<a className="text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#" onclick="toggleMobileMenu()">Home</a>
<a className="text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#about" onclick="toggleMobileMenu()">Our Team</a>
<a className="text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#locations" onclick="toggleMobileMenu()">Locations</a>
<a className="text-2xl font-semibold text-slate-900 block border-b border-slate-100 pb-4" href="#contact" onclick="toggleMobileMenu()">Contact</a>
<a className="flex items-center gap-3 text-lg font-bold text-rose-600 mt-4" href="tel:7183862655">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
                Call 718-386-2655
            </a>
<a className="w-full flex justify-center items-center gap-2 bg-rose-600 text-white text-lg font-medium px-6 py-4 rounded-xl shadow-lg mt-6" href="#book" onclick="toggleMobileMenu()">
                Request Appointment
            </a>
</div>
</header>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
                        Welcome to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400">The Smile Makeover</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Individualized dental care in Queens. We work as a team, dedicated to improving and maintaining your oral health.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-rose-600 text-base font-semibold px-8 py-4 rounded-full transition-all shadow-xl shadow-rose-600/20 hover:shadow-rose-600/40 hover:-translate-y-1 hover:bg-rose-700 text-white" href="#book">
                            Book Consultation
                            <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-semibold px-8 py-4 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-rose-200 hover:text-rose-600" href="tel:7183862655">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            718-386-2655
                        </a>
</div>

<div className="flex items-center gap-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs font-bold border-2 border-white">4.9</div>
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border-2 border-white">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
<span className="text-sm font-semibold text-slate-900">Top Rated in Queens</span>
</div>
<div className="h-4 w-px bg-slate-200"></div>
<div className="text-sm text-slate-500 font-medium">Most Insurance Accepted</div>
</div>
</div>

<div className="relative order-1 lg:order-2">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-rose-900/10 aspect-[4/3] lg:aspect-square">
<img alt="Dental Care" className="w-full h-full object-cover" src="https://img1.wsimg.com/isteam/stock/89866/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:953"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/90 p-6 rounded-2xl shadow-lg border border-white/50">
<div className="flex items-center gap-4">
<div className="p-3 rounded-full bg-rose-100 text-rose-600">
<iconify-icon icon="solar:heart-pulse-bold" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-0.5">Our Promise</p>
<p className="font-bold text-slate-900">Whatever your dental needs, you will be in great hands.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                    Comprehensive <span className="text-rose-600">Dental Services</span>
</h2>
<p className="text-lg text-slate-500">
                    From routine checkups to complete makeovers, we provide the latest treatments in a comfortable setting.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rose-100 group">
<div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-heart-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Individualized Care</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        We work as a team, dedicated to improving and maintaining your oral health. We create a custom plan just for you.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-rose-600 hover:text-rose-700" href="#book">
                        Book Visit <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rose-100 group">
<div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:star-shine-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">The Latest Treatments</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        By using cutting-edge research and tools, we make sure your time with us is as comfortable and stress-free as possible.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-rose-600 hover:text-rose-700" href="#book">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-rose-100 group">
<div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-verified-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Experienced Team</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                        Our team has the professional experience to realize that there is no such thing as a one-size-fits-all approach to treatment.
                    </p>
<a className="inline-flex items-center text-sm font-bold text-rose-600 hover:text-rose-700" href="#book">
                        Meet the Team <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="locations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<span className="text-rose-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Location</span>
<h2 className="text-4xl font-bold text-slate-900 mb-6">Visit Us in Queens</h2>
<p className="text-lg text-slate-500 mb-8">
                        Conveniently located on Myrtle Avenue. We serve patients from Queens and the surrounding NYC area.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-rose-600 shadow-sm shrink-0">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Address</h4>
<p className="text-slate-600">76-01 Myrtle Ave<br/>Queens, NY 11385</p>
<a className="text-sm font-semibold text-rose-600 mt-2 inline-flex items-center gap-1 hover:underline" href="https://maps.google.com/?q=76-01+Myrtle+Ave,+Queens,+NY+11385" target="_blank">
                                    Get Directions <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-rose-600 shadow-sm shrink-0">
<iconify-icon icon="solar:clock-circle-bold" width="20"></iconify-icon>
</div>
<div className="w-full">
<h4 className="font-bold text-slate-900 mb-2">Opening Hours</h4>
<div className="space-y-2 text-sm">
<div className="flex justify-between border-b border-slate-200 pb-1">
<span className="text-slate-500">Mon &amp; Wed</span>
<span className="font-semibold text-slate-900">9:00 AM - 8:00 PM</span>
</div>
<div className="flex justify-between border-b border-slate-200 pb-1">
<span className="text-slate-500">Thu &amp; Fri</span>
<span className="font-semibold text-slate-900">9:00 AM - 5:00 PM</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Tue, Sat, Sun</span>
<span className="font-semibold text-rose-600">Closed</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<iframe frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?q=76-01+Myrtle+Ave,+Queens,+NY+11385&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-rose-950 text-white relative overflow-hidden rounded-t-[3rem]" id="book">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Request Your Appointment</h2>
<p className="text-rose-200/80 text-lg">Fill out the form below and our staff will confirm your appointment shortly.</p>
</div>
<form className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-rose-200 ml-1">Full Name</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-rose-200 ml-1">Phone Number</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" placeholder="(718) 386-2655" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-rose-200 ml-1">Email Address</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-rose-200 ml-1">Preferred Time</label>
<select className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all appearance-none">
<option className="text-slate-900">Morning</option>
<option className="text-slate-900">Afternoon</option>
<option className="text-slate-900">Evening</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-rose-200 ml-1">Reason for Visit</label>
<textarea className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all" placeholder="I need a checkup..." rows="3"></textarea>
</div>
<button className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-rose-600/30 transition-all flex items-center justify-center gap-2" onclick="alert('Thank you! Your request has been sent. Our team will contact you shortly at the provided number.')" type="button">
                    Submit Request
                </button>
<p className="text-center text-xs text-rose-200/50 mt-4">*Note: This form connects to our secure office email.</p>
</form>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-center mb-12 text-slate-900">New Patient Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-900">
                        Do you accept insurance?
                        <iconify-icon className="text-rose-600 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500">
                        Yes, "The Smile Makeover" accepts most major insurance plans. Please call our office at 718-386-2655 to verify your specific coverage.
                    </div>
</details>
<details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-900">
                        What should I bring to my first appointment?
                        <iconify-icon className="text-rose-600 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500">
                        Please bring your ID, insurance card, and any previous dental records if available. We recommend arriving 15 minutes early to complete new patient forms.
                    </div>
</details>
<details className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-slate-900">
                        Do you offer cosmetic dentistry?
                        <iconify-icon className="text-rose-600 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-500">
                        Absolutely. As our name "The Smile Makeover" suggests, we specialize in helping you achieve your best smile through the latest cosmetic treatments.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-rose-600 p-1.5 rounded-lg text-white">
<img alt="Logo" className="w-6 h-6 object-contain invert brightness-0" src="https://img1.wsimg.com/isteam/ip/f0a921fd-719c-4f62-87d2-ce8a8c3af55d/904590CC-7EF8-4FA5-9540-6E2ED5A18A64.png/:/rs=h:200,cg:true,m/qt=q:95"/>
</div>
<span className="text-xl font-bold text-slate-900">The Smile Makeover</span>
</a>
<p className="text-slate-500 max-w-sm">
                        Dedicated to improving and maintaining your oral health in Queens, NY. Experience the difference of individualized care.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-rose-100 hover:text-rose-600 transition-colors" href="https://www.instagram.com/thesmilemakeover" target="_blank">
<iconify-icon icon="solar:instagram-bold" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-600" href="#">Home</a></li>
<li><a className="hover:text-rose-600" href="#services">Services</a></li>
<li><a className="hover:text-rose-600" href="#about">About Us</a></li>
<li><a className="hover:text-rose-600" href="#contact">Contact</a></li>
<li><a className="hover:text-rose-600" href="#">Shop</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-600" href="#">Privacy Policy</a></li>
<li><a className="hover:text-rose-600" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<p>© 2026 The Smile Makeover. All Rights Reserved.</p>
<p>Designed with Care.</p>
</div>
</div>
</footer>



    </>
  );
}
