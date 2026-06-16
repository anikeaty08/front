import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#036bb3',
green: '#65bc7b',
dark: '#484848',
light: '#f5f5f5',
50: '#f0f9ff',
900: '#0c4a6e',
}
},
boxShadow: {
'glow': '0 0 20px rgba(101, 188, 123, 0.3)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
}
}
}
}



        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden-menu')) {
                menu.classList.remove('hidden-menu');
                menu.classList.add('visible-menu');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.remove('visible-menu');
                menu.classList.add('hidden-menu');
                document.body.style.overflow = 'auto';
            }
        }

        // Modal Logic
        function openBookingModal() {
            document.getElementById('booking-modal').classList.remove('hidden');
            document.getElementById('booking-modal').classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeBookingModal() {
            document.getElementById('booking-modal').classList.add('hidden');
            document.getElementById('booking-modal').classList.remove('flex');
            document.body.style.overflow = 'auto';
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md');
                nav.classList.replace('bg-white/95', 'bg-white/98');
            } else {
                nav.classList.remove('shadow-md');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100 transition-all duration-300" id="navbar">

<div className="hidden lg:block bg-brand-blue text-white text-xs py-2">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-bold"></iconify-icon> Hasbrouck Heights, NJ &amp; Surrounding Areas</span>
<span className="flex items-center gap-1 opacity-80">License: 19HC00234100</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-brand-green transition-colors font-medium" href="tel:2014260650">201-426-0650</a>
<span className="opacity-50">|</span>
<a className="hover:text-brand-green transition-colors" href="#offers">Special Offers</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex-shrink-0 relative z-50" href="#">
<img alt="ACE Solutions" className="h-10 md:h-12 w-auto" src="https://www.acesolutionsnj.com/app/uploads/sites/254/2022/11/ACE-Logos-1-680x178-1.jpeg"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors" href="#reviews">Reviews</a>
<div className="flex items-center gap-3 ml-4">
<a className="flex flex-col items-end leading-tight" href="tel:2014260650">
<span className="text-xs text-gray-500 font-medium">24/7 Emergency</span>
<span className="text-brand-blue font-bold tracking-tight">201-426-0650</span>
</a>
<button className="bg-brand-green hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-0.5" onclick="openBookingModal()">
                        Schedule Now
                    </button>
</div>
</div>

<button className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-gray-800 hover:text-brand-blue focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<div className="hidden-menu fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-24 px-6" id="mobile-menu">
<div className="flex flex-col space-y-6 text-center">
<a className="text-xl font-medium text-gray-800 py-2 border-b border-gray-100" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-xl font-medium text-gray-800 py-2 border-b border-gray-100" href="#about" onclick="toggleMobileMenu()">About Us</a>
<a className="text-xl font-medium text-gray-800 py-2 border-b border-gray-100" href="#locations" onclick="toggleMobileMenu()">Service Areas</a>
<a className="text-xl font-medium text-gray-800 py-2 border-b border-gray-100" href="#reviews" onclick="toggleMobileMenu()">Testimonials</a>
<div className="flex flex-col gap-4 mt-4">
<a className="w-full bg-brand-blue text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2" href="tel:2014260650">
<iconify-icon icon="solar:phone-calling-bold"></iconify-icon> Call 201-426-0650
                </a>
<button className="w-full bg-brand-green text-white font-semibold py-4 rounded-xl shadow-lg" onclick="toggleMobileMenu(); openBookingModal()">
                    Book Appointment
                </button>
</div>
</div>
</div>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="ACE Solutions Truck" className="w-full h-full object-cover opacity-40" src="https://www.acesolutionsnj.com/app/uploads/sites/254/2023/02/ACE-Solution-truck_1.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-fade-in-up">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/20 border border-brand-blue/30 backdrop-blur-sm text-brand-blue text-xs font-semibold tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                    Serving Northern NJ Since 2014
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                    Dependable HVAC Service in <span className="text-brand-green">Hasbrouck Heights</span>
</h1>
<p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                    Serving homeowners and businesses in Northern New Jersey. We get the heat working again without delay.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-brand-green hover:bg-green-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-glow transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2" onclick="openBookingModal()">
                        Schedule Service
                        <iconify-icon icon="solar:calendar-add-bold"></iconify-icon>
</button>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-lg font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2" href="tel:2014260650">
<iconify-icon icon="solar:phone-bold"></iconify-icon>
                        201-426-0650
                    </a>
</div>

<div className="pt-8 border-t border-white/10 flex flex-wrap gap-6 items-center opacity-80">
<img alt="Lennox Premier Dealer" className="h-10 w-auto brightness-0 invert" src="https://www.acesolutionsnj.com/app/uploads/2023/02/19_premier_dealer_logo_color_rgb-callout.png"/>
<img alt="Mitsubishi Diamond Contractor" className="h-8 w-auto brightness-0 invert" src="https://www.acesolutionsnj.com/app/uploads/sites/254/2022/10/DC-Elite_ME-Logo-Lockup-crop.png"/>
</div>
</div>

<div className="hidden lg:block bg-white rounded-2xl p-8 shadow-2xl border-t-4 border-brand-blue">
<h3 className="text-2xl font-bold text-gray-900 mb-2">Request Service</h3>
<p className="text-sm text-gray-500 mb-6">Fast response guaranteed.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you. We will contact you shortly.');">
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="Your Name" type="text"/>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all" placeholder="Phone Number" type="tel"/>
<select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all">
<option>Service Needed?</option>
<option>AC Repair</option>
<option>Furnace Repair</option>
<option>Maintenance</option>
<option>Installation Quote</option>
</select>
<button className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all" type="submit">Get Started</button>
</form>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 relative" id="services">
<div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-brand-blue font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Complete HVAC Solutions</h3>
<p className="text-gray-600">From furnace repairs in the winter to AC installations in the summer, ACE Solutions handles it all with precision and care.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-xl transition-all group border border-gray-100">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:snowflake-bold" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-gray-900 mb-3">Air Conditioning</h4>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">Expert repair, maintenance, and installation of high-efficiency AC systems to keep you cool.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-gray-500"><iconify-icon className="text-brand-green" icon="solar:check-circle-bold"></iconify-icon> AC Repair</li>
<li className="flex items-center gap-2 text-sm text-gray-500"><iconify-icon className="text-brand-green" icon="solar:check-circle-bold"></iconify-icon> Installation</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-xl transition-all group border border-gray-100">
<div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:flame-bold" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-gray-900 mb-3">Furnace &amp; Heating</h4>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">Don't be left in the cold. We provide rapid furnace repair and efficient replacements.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-gray-500"><iconify-icon className="text-brand-green" icon="solar:check-circle-bold"></iconify-icon> Furnace Repair</li>
<li className="flex items-center gap-2 text-sm text-gray-500"><iconify-icon className="text-brand-green" icon="solar:check-circle-bold"></iconify-icon> Maintenance Plans</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-xl transition-all group border border-gray-100">
<div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wind-bold" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-gray-900 mb-3">Ductless Mini-Splits</h4>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">Mitsubishi Diamond Contractors specializing in efficient ductless heating and cooling solutions.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-gray-500"><iconify-icon className="text-brand-green" icon="solar:check-circle-bold"></iconify-icon> Multi-Zone Systems</li>
<li className="flex items-center gap-2 text-sm text-gray-500"><iconify-icon className="text-brand-green" icon="solar:check-circle-bold"></iconify-icon> Rebate Qualified</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
<img alt="ACE Solutions Office" className="w-full h-full object-cover" src="https://www.acesolutionsnj.com/app/uploads/sites/254/2022/10/ACE-Solutions-Building-530x350-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-bold text-lg">Your Comfort is Our Business</p>
<p className="text-sm opacity-90">Serving NJ since 2014</p>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Local Experts You Can Trust</h2>
<p className="text-gray-600 mb-6 leading-relaxed">
                        Heating and cooling has been our thing since 2014, and it’s obvious in the work we offer to our customers. We’re committed to providing you the very best when it comes to all things HVAC, whether it’s service, maintenance or heating and cooling systems.
                    </p>
<div className="flex flex-col gap-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-blue text-2xl flex-shrink-0 mt-1" icon="solar:medal-star-bold"></iconify-icon>
<div>
<h4 className="font-bold text-gray-900">Lennox Premier Dealer</h4>
<p className="text-sm text-gray-500">Recognized for outstanding customer service and quality.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-brand-blue text-2xl flex-shrink-0 mt-1" icon="solar:shield-check-bold"></iconify-icon>
<div>
<h4 className="font-bold text-gray-900">Mitsubishi Diamond Contractor</h4>
<p className="text-sm text-gray-500">Elite status for ductless system installations.</p>
</div>
</div>
</div>
<a className="text-brand-blue font-semibold hover:text-brand-green transition-colors inline-flex items-center gap-1" href="#locations">
                        View Service Areas <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Authorized Dealer For</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Lennox" className="h-10 w-auto object-contain" src="https://www.acesolutionsnj.com/app/uploads/2023/01/Lennox_badge-min.png"/>
<img alt="Mitsubishi" className="h-10 w-auto object-contain" src="https://www.acesolutionsnj.com/app/uploads/sites/254/2022/10/Mitsubishi_Electric_logo.png"/>
<img alt="Carrier" className="h-10 w-auto object-contain" src="https://www.acesolutionsnj.com/app/uploads/2023/01/carrier-15.png"/>
<img alt="Trane" className="h-10 w-auto object-contain" src="https://www.acesolutionsnj.com/app/uploads/2023/01/trane-16.png"/>
</div>
</div>
</div>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-gray-900 mb-4">Serving Hasbrouck Heights and Surrounding Areas</h2>
<p className="text-gray-600 mb-12 max-w-2xl mx-auto">We provide prompt HVAC service to Northern New Jersey homeowners.</p>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Bergenfield</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Cliffside Park</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Dumont</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Edgewater</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Englewood</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Fair Lawn</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Fort Lee</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Garfield</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Glen Rock</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Hackensack</span>
<span className="px-4 py-2 bg-brand-blue/10 rounded-full text-sm font-bold text-brand-blue border border-brand-blue/30">Hasbrouck Heights</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Lodi</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Lyndhurst</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Mahwah</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">New Milford</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Oakland</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Paramus</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Ridgewood</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Teaneck</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Tenafly</span>
<span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200">Wyckoff</span>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-6">
<img alt="ACE Solutions" className="h-10" src="https://www.acesolutionsnj.com/app/uploads/sites/254/2022/11/ACE-Logos-1-680x178-1.jpeg"/>
<p className="text-gray-400 text-sm leading-relaxed">
                        ACE Solutions provides dependable HVAC solutions and quality work in Hasbrouck Heights. We’re committed to providing you the very best.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="fa6-brands:facebook" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="fa6-brands:instagram" width="20"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="text-lg font-bold mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-gray-400">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-brand-green" icon="solar:map-point-bold"></iconify-icon>
<span className="">50 Terrace Ave<br/>Hasbrouck Heights, NJ 07604</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-green" icon="solar:phone-bold"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:2014260650">201-426-0650</a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-lg font-bold mb-6">Services</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-brand-green transition-colors" href="#">AC Repair</a></li>
<li className=""><a className="hover:text-brand-green transition-colors" href="#">Furnace Installation</a></li>
</ul>
</div>

<div className="">
<h4 className="text-lg font-bold mb-6">Certifications</h4>
<p className="text-sm text-gray-400 mb-4">NJ Home Improvement Contractor License: <br/></p>
<div className="flex gap-4 opacity-50">
<iconify-icon icon="solar:shield-check-bold" width="32"></iconify-icon>
<iconify-icon icon="solar:medal-star-bold" width="32"></iconify-icon>
</div>
</div>
</div>
<div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
<p>© 2026 ACE Solutions. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="closeBookingModal()"></div>
<div className="bg-white rounded-2xl w-full max-w-lg relative z-10 shadow-2xl animate-fade-in-up">
<div className="p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-bold text-gray-900">Schedule Service</h3>
<button className="text-gray-400 hover:text-gray-600" onclick="closeBookingModal()">
<iconify-icon icon="solar:close-circle-bold" width="28"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('form-success').classList.remove('hidden'); this.classList.add('hidden');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">First Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none" required="" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Service Type</label>
<select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none">
<option>Repair (No Heat/Cool)</option>
<option>Maintenance / Tune-Up</option>
<option>New System Quote</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 uppercase">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none" rows="3"></textarea>
</div>
<button className="w-full bg-brand-green hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-md transition-all" type="submit">
                        Submit Request
                    </button>
<p className="text-xs text-center text-gray-400 mt-4">
                        *Note for setup: Connect this form to an autoresponder email service.
                    </p>
</form>

<div className="hidden text-center py-12" id="form-success">
<iconify-icon className="text-brand-green text-6xl mb-4" icon="solar:check-circle-bold"></iconify-icon>
<h4 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h4>
<p className="text-gray-600">Our team will contact you shortly to confirm your appointment.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
