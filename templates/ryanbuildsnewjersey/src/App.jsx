import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
red: '#cc0000', // From source code
dark: '#1a1a1a', // Modernized from #555555
gray: '#f4f4f5',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Mobile Menu Logic (Hidden by default, toggles visibility)
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('menu-hidden');
                menu.classList.add('menu-visible');
                // Change icon to X
                btn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" height="28"></iconify-icon>';
            } else {
                menu.classList.remove('menu-visible');
                menu.classList.add('menu-hidden');
                // Change icon back to Hamburger
                btn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
            }
        }

        btn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="bg-brand-dark text-white text-xs md:text-sm py-2 px-4">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="hidden md:inline"><iconify-icon className="relative top-0.5" icon="solar:map-point-linear"></iconify-icon> Serving Central &amp; Northern NJ</span>
<span className="font-medium text-brand-red">Licensed &amp; Credentialed</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-brand-red transition-colors font-semibold flex items-center gap-1" href="tel:8007362800">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> (800) 736-2800
                </a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<a className="flex flex-col" href="#">
<span className="text-2xl font-bold tracking-tight text-gray-900 leading-none">RYAN INC.</span>
<span className="text-[10px] uppercase tracking-widest text-brand-red font-semibold">Building Relationships Since 1937</span>
</a>
</div>

<nav className="hidden lg:flex gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors" href="#commercial">Commercial</a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors" href="#residential">Residential</a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors" href="#careers">Careers</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="bg-brand-red hover:bg-red-800 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" href="#book">
                        Schedule Service
                    </a>
</div>

<div className="flex items-center lg:hidden">
<button className="p-2 rounded-md text-gray-700 hover:text-brand-red focus:outline-none z-50 relative" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="menu-hidden fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-24 px-6 pb-6 lg:hidden flex flex-col h-screen" id="mobile-menu">
<div className="flex flex-col space-y-6 text-center">
<a className="mobile-link text-xl font-medium text-gray-900" href="#services">Services</a>
<a className="mobile-link text-xl font-medium text-gray-900" href="#commercial">Commercial</a>
<a className="mobile-link text-xl font-medium text-gray-900" href="#residential">Residential</a>
<a className="mobile-link text-xl font-medium text-gray-900" href="#about">About Us</a>
<a className="mobile-link text-xl font-medium text-gray-900" href="#careers">Careers</a>
<hr className="border-gray-100"/>
<a className="text-xl font-bold text-gray-900 flex justify-center items-center gap-2" href="tel:8007362800">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call (800) 736-2800
                </a>
<a className="mobile-link bg-brand-red text-white py-4 rounded-xl text-lg font-bold shadow-md" href="#book">
                    Book Appointment
                </a>
</div>
</div>
</header>

<section className="relative bg-gray-900 py-24 lg:py-32">

<div className="absolute inset-0 z-0">
<img alt="Ryan Inc Technician" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/20 border border-brand-red/30 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
<span className="text-brand-red font-medium text-xs tracking-wide uppercase">$20 Off First Time Diagnosis</span>
</div>
<h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
                    Building Relationships <br className="hidden md:block"/>Since 1937.
                </h1>
<p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                    New Jersey's trusted partner for Electrical, Plumbing, Heating, and Cooling. Serving residential and commercial clients for over 80 years.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand-red hover:bg-red-800 text-white px-8 py-4 rounded-full text-center font-bold transition-all shadow-lg hover:shadow-red-900/20" href="#book">
                        Schedule Service
                    </a>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-center font-bold transition-all flex justify-center items-center gap-2" href="tel:8007362800">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon> (800) 736-2800
                    </a>
</div>
</div>
</div>
</section>

<div className="bg-gray-50 border-b border-gray-100 py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-3xl text-brand-red" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-semibold text-gray-900">Licensed &amp; Credentialed</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-3xl text-brand-red" icon="solar:tag-price-linear"></iconify-icon>
<span className="text-sm font-semibold text-gray-900">OneRate© Upfront Pricing</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-3xl text-brand-red" icon="solar:calendar-date-linear"></iconify-icon>
<span className="text-sm font-semibold text-gray-900">Est. 1937</span>
</div>
<div className="flex flex-col items-center justify-center gap-2">
<iconify-icon className="text-3xl text-brand-red" icon="solar:medal-ribbon-linear"></iconify-icon>
<span className="text-sm font-semibold text-gray-900">ComfortPlus© Maintenance</span>
</div>
</div>
</div>
</div>

<section className="py-20 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete MEP Services</h2>
<p className="text-gray-600">From residential repairs to complex commercial installations, our 14,000 sq ft facility and state-of-the-art systems are ready to serve you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 hover:border-brand-red/20">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:bolt-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Electrical</h3>
<p className="text-gray-600 mb-6 text-sm">Service upgrades, generators, lighting. Repairs and installation of all types for home and business.</p>
<a className="inline-flex items-center text-brand-red font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 hover:border-brand-red/20">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:bath-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Plumbing</h3>
<p className="text-gray-600 mb-6 text-sm">Piping repairs, drain cleaning, water heaters, and complete kitchen-bath renovations.</p>
<a className="inline-flex items-center text-brand-red font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 hover:border-brand-red/20">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:snowflake-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Heating &amp; Cooling</h3>
<p className="text-gray-600 mb-6 text-sm">Gas, oil, boilers, furnaces and AC for homes &amp; businesses. Complete HVAC solutions.</p>
<a className="inline-flex items-center text-brand-red font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 hover:border-brand-red/20">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:fridge-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Refrigeration</h3>
<p className="text-gray-600 mb-6 text-sm">Display cases, reach-in units, walk-in boxes, warehousing and more for commercial clients.</p>
<a className="inline-flex items-center text-brand-red font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 hover:border-brand-red/20">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:wind-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Ventilation</h3>
<p className="text-gray-600 mb-6 text-sm">Duct system design, fabrication, installation, and HVAC accessories for optimal airflow.</p>
<a className="inline-flex items-center text-brand-red font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all border border-gray-100 hover:border-brand-red/20">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-red mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:settings-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Controls</h3>
<p className="text-gray-600 mb-6 text-sm">Complete energy management solutions and automation for residences and businesses.</p>
<a className="inline-flex items-center text-brand-red font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-20 border-y border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<span className="text-brand-red font-bold uppercase tracking-wider text-sm">Our Reach</span>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Serving Central &amp; Northern New Jersey</h2>
<p className="text-gray-600 mb-6 leading-relaxed">
                        From our headquarters, Ryan serves a wide array of communities. We provide rapid response and scheduled maintenance to Basking Ridge, Bridgewater, Chatham, Clark, Edison, Hoboken, Jersey City, Morristown, Newark, Princeton, and surrounding areas.
                    </p>
<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
<h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-brand-red" icon="solar:map-point-bold"></iconify-icon> HQ Location
                        </h3>
<p className="text-gray-600 text-sm mb-4">
                            Ryan Inc. Headquarters<br/>
                            Central &amp; Northern New Jersey<br/>
<a className="text-brand-red hover:underline mt-2 inline-block" href="https://www.ryanbuilds.com/directions.aspx">Get Directions →</a>
</p>
<div className="flex gap-4">
<a className="text-sm font-semibold text-gray-900 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50" href="tel:8007362800">Call (800) 736-2800</a>
</div>
</div>
</div>
<div className="md:w-1/2 h-80 md:h-[500px] w-full bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6!2d-74.2!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3NMKwMTInMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="book">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<span className="text-brand-red font-bold uppercase tracking-wider text-sm">Start Your Project</span>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Request Service</h2>
<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Schedule service or a free estimate. We price by the job, not the hour (OneRate©), so you know exactly what to expect.
                </p>
</div>
<div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 md:p-12">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all bg-white">
<option>Electrical Repair/Install</option>
<option>Plumbing Issue</option>
<option>Heating/Cooling (HVAC)</option>
<option>Commercial Service</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none transition-all" placeholder="Please describe your issue..." rows="4"></textarea>
</div>
<div className="flex items-center gap-2 bg-blue-50 p-4 rounded-lg">
<input className="text-brand-red focus:ring-brand-red rounded" id="first-time" type="checkbox"/>
<label className="text-sm text-gray-700" htmlFor="first-time">I am a first-time customer (Apply $20 Off Diagnostic)</label>
</div>
<button className="w-full bg-brand-red hover:bg-red-800 text-white font-bold py-4 rounded-lg shadow-lg transition-all text-lg" type="submit">
                        Submit Request
                    </button>
<p className="text-xs text-center text-gray-500 mt-4">
<iconify-icon className="relative top-0.5" icon="solar:lock-password-linear"></iconify-icon> Your information is secure. We will contact you shortly to confirm availability.
                    </p>
</form>
</div>

<div className="mt-8 text-center bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-800 max-w-lg mx-auto">
<strong>Dev Note:</strong> Connect this form to instant email autoresponder + staff notification email system.
            </div>
</div>
</section>

<section className="py-20 bg-gray-900 text-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-bold mb-6">Building Relationships Since 1937</h2>
<p className="text-gray-400 mb-6 leading-relaxed">
                        Welcome to Ryan. For over 80 years, we have been providing quality mechanical, electrical, and plumbing (MEP) services to the New Jersey marketplace.
                    </p>
<p className="text-gray-400 mb-6 leading-relaxed">
                        Founded in 1937, Ryan originated with a strong belief in the bond between company and client. Currently a closely held corporation owned by members of the Ryan family, we still cherish those beliefs of long ago. 
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-red" icon="solar:check-circle-bold"></iconify-icon>
<span>14,000 sq ft fabrication facility</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-red" icon="solar:check-circle-bold"></iconify-icon>
<span>Large fleet of service equipment</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-red" icon="solar:check-circle-bold"></iconify-icon>
<span>Family owned &amp; operated</span>
</li>
</ul>
</div>
<div className="relative">
<img alt="Ryan Inc Facility" className="rounded-2xl shadow-2xl opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute -bottom-6 -left-6 bg-brand-red p-6 rounded-xl shadow-lg hidden md:block">
<span className="block text-4xl font-bold">80+</span>
<span className="text-sm font-medium opacity-90">Years of Service</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div>
<span className="text-2xl font-bold text-gray-900">RYAN INC.</span>
<p className="text-gray-500 mt-4 text-sm leading-relaxed">
                        Licensed and credentialed Mechanical, Electrical, Plumbing, Heating and Cooling Contractors serving commercial and residential clients.
                    </p>
</div>

<div>
<h4 className="font-bold text-gray-900 mb-4">Services</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-brand-red" href="#">Electrical</a></li>
<li><a className="hover:text-brand-red" href="#">Plumbing</a></li>
<li><a className="hover:text-brand-red" href="#">Heating &amp; Cooling</a></li>
<li><a className="hover:text-brand-red" href="#">Refrigeration</a></li>
<li><a className="hover:text-brand-red" href="#">Ventilation</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-gray-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-brand-red" href="#">About Us</a></li>
<li><a className="hover:text-brand-red" href="#">Credentials</a></li>
<li><a className="hover:text-brand-red" href="#">ComfortPlus© Program</a></li>
<li><a className="hover:text-brand-red" href="#">Careers</a></li>
<li><a className="hover:text-brand-red" href="#">Industry FAQ</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-gray-900 mb-4">Contact</h4>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-brand-red" icon="solar:phone-calling-linear"></iconify-icon>
<span>
<a className="block font-semibold text-gray-900 hover:text-brand-red" href="tel:8007362800">(800) 736-2800</a>
<span className="text-xs">Main Office</span>
</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-brand-red" icon="solar:map-point-linear"></iconify-icon>
<span>Serving Central &amp; Northern NJ</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2026 Ryan Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-gray-400">
<a className="hover:text-brand-red" href="#">Privacy Policy</a>
<a className="hover:text-brand-red" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
