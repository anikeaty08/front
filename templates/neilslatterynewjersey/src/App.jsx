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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Light Blue accent
600: '#0284c7',
900: '#0f172a', // Navy (Primary Brand Color based on logo)
},
accent: {
500: '#ef4444', // Red (Emergency/Heat)
600: '#dc2626',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Mobile Menu Logic (Hidden by default)
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.remove('menu-visible');
                mobileMenu.classList.add('menu-hidden');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            }
        }

        mobileToggle.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(isMenuOpen) toggleMenu();
            });
        });

        // Sticky Header Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-md');
                header.classList.replace('h-20', 'h-16');
            } else {
                header.classList.remove('shadow-md');
                header.classList.replace('h-16', 'h-20');
            }
        });

        // Form Handling (Simulation)
        const form = document.getElementById('appointment-form');
        const successMsg = document.getElementById('form-success');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate API submission delay
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                form.style.display = 'none';
                successMsg.classList.remove('hidden');
                // In real implementation, send data to nsphcoffice@gmail.com here
            }, 1500);
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
      

<div className="bg-brand-900 text-slate-300 text-xs py-2.5 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<iconify-icon className="text-brand-500 text-base" icon="solar:clock-circle-linear"></iconify-icon>
                    24/7 Emergency Service Available
                </span>
<span className="flex items-center gap-2">
<iconify-icon className="text-brand-500 text-base" icon="solar:map-point-linear"></iconify-icon>
                    Farmingdale, Howell Township &amp; Surrounding Areas
                </span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="https://www.facebook.com/nsphc/" target="_blank">
<iconify-icon className="text-base" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="http://instagram.com/neilslatteryplumbinghvac/" target="_blank">
<iconify-icon className="text-base" icon="solar:instagram-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<header className="fixed w-full top-0 z-50 glass-nav transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="relative z-50" href="#">
<img alt="Neil Slattery Plumbing, Heating &amp; Cooling" className="h-12 w-auto object-contain mix-blend-multiply" src="https://neilslatteryplumbing.com/files/2024/02/neilslatterylogo-414w.jpg"/>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-800 hover:text-brand-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#specials">Specials</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Emergency 24/7</span>
<a className="text-lg font-bold text-brand-900 leading-none tracking-tight hover:text-brand-600 transition-colors" href="tel:7322230455">(732) 223-0455</a>
</div>
<a className="bg-brand-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-brand-900/10 flex items-center gap-2" href="#book">
<iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
                    Book Appointment
                </a>
</div>

<button aria-label="Toggle Menu" className="lg:hidden relative z-50 p-2 text-slate-800" id="mobile-toggle">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 menu-hidden flex flex-col pt-28 px-6 pb-6" id="mobile-menu">
<nav className="flex flex-col gap-6 text-center">
<a className="mobile-link text-2xl font-medium text-slate-900" href="#home">Home</a>
<a className="mobile-link text-2xl font-medium text-slate-900" href="#services">Services</a>
<a className="mobile-link text-2xl font-medium text-slate-900" href="#specials">Specials</a>
<a className="mobile-link text-2xl font-medium text-slate-900" href="#locations">Locations</a>
<a className="mobile-link text-2xl font-medium text-slate-900" href="#contact">Contact</a>
</nav>
<div className="mt-auto flex flex-col gap-4">
<a className="w-full bg-slate-100 text-brand-900 text-lg font-semibold py-4 rounded-xl flex items-center justify-center gap-2" href="tel:7322230455">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                Call (732) 223-0455
            </a>
<a className="w-full bg-brand-900 text-white text-lg font-semibold py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-brand-900/20 mobile-link" href="#book">
<iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon>
                Request Appointment
            </a>
</div>
</div>

<section className="relative pt-20 lg:min-h-[85vh] flex items-center" id="home">

<div className="absolute inset-0 z-0">
<img alt="Plumbing Technician" className="w-full h-full object-cover" src="https://neilslatteryplumbing.com/files/2024/02/929901516-1920w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full">
<div className="max-w-2xl animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-600/20 border border-accent-600/30 text-accent-500 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                    24/7 Emergency Service
                </div>
<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                    Reliable Plumbing, Heating &amp; Cooling.
                </h1>
<p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-lg">
                    Serving Farmingdale, Howell Township, and surrounding NJ areas. Top-quality repair and installation at affordable prices.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand-500 text-white text-base font-semibold px-8 py-4 rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 text-center" href="#book">
                        Schedule Service
                    </a>
<a className="bg-white/10 text-white border border-white/20 backdrop-blur-md text-base font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2" href="tel:7322230455">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                        Call (732) 223-0455
                    </a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-100 bg-white relative z-20 -mt-8 mx-4 md:mx-auto max-w-7xl rounded-xl shadow-xl lg:shadow-none lg:mt-0 lg:rounded-none">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
<div className="p-6 text-center flex flex-col items-center gap-2">
<iconify-icon className="text-3xl text-brand-900" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Licensed &amp; Insured</span>
</div>
<div className="p-6 text-center flex flex-col items-center gap-2">
<iconify-icon className="text-3xl text-brand-900" icon="solar:star-circle-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Top-Quality Repair</span>
</div>
<div className="p-6 text-center flex flex-col items-center gap-2">
<iconify-icon className="text-3xl text-brand-900" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Special Financing</span>
</div>
<div className="p-6 text-center flex flex-col items-center gap-2">
<iconify-icon className="text-3xl text-accent-600" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Emergency 24/7</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Comprehensive Home Services</h2>
<p className="text-slate-600 text-lg">From leaky pipes to full HVAC system replacements, our experienced technicians handle it all.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:bath-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Plumbing Services</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Repair and installation for all your home's plumbing needs. Leaks, pipes, water heaters, and more.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Plumbing Repair
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Plumbing Installation
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Water Heaters
                        </li>
</ul>
<a className="text-brand-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#book">
                        Schedule Plumbing <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-6 group-hover:bg-accent-600 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:flame-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Heating Services</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Keep your home warm when temperatures drop. We repair and install furnaces and boilers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Heating Repair
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Heating Installation
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Boiler Services
                        </li>
</ul>
<a className="text-brand-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#book">
                        Schedule Heating <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
<div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:snowflake-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Air Conditioning</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Beat the heat with efficient cooling systems. Repair, maintenance, and new installations.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> AC Repair
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> AC Installation
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Maintenance
                        </li>
</ul>
<a className="text-brand-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#book">
                        Schedule Cooling <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-900 text-white relative overflow-hidden" id="specials">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'https://neilslatteryplumbing.com/files/2024/02/bg2.png?w=1600&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Special Financing Available</h2>
<p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Don't wait to fix your home's comfort systems. Get the services you need right now with our flexible financing options.
                    </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl text-center">
<div className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-1">18 Months At</div>
<div className="text-4xl font-bold text-white">0%</div>
</div>
<div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl text-center">
<div className="text-sm font-medium text-slate-300 uppercase tracking-wide mb-1">12 Months At</div>
<div className="text-4xl font-bold text-white">0%</div>
</div>
</div>
<a className="bg-white text-brand-900 font-bold px-8 py-4 rounded-xl inline-flex items-center gap-2 hover:bg-slate-100 transition-colors" href="tel:7322230455">
                        Call to Apply <iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
<img alt="Technician Working" className="w-full h-auto" src="https://neilslatteryplumbing.com/files/2024/02/w.jpg?1:.66666&amp;a=t"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
<div>
<p className="text-white font-bold text-lg">Experienced Plumbers</p>
<p className="text-slate-300 text-sm">Ready when you need them.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.6826573867666!2d-74.16607898460775!3d40.19202607939169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1775e5b5b5b5b%3A0xd4674e982dff2088!2s116%20Main%20St%2C%20Farmingdale%2C%20NJ%2007727!5e0!3m2!1sen!2sus!4v1646765432109!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest mb-6">
                        Local Experts
                    </div>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Serving Farmingdale &amp; Howell Township</h2>
<p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        Neil Slattery Plumbing, Heating &amp; Cooling provides prompt, professional service to homes and businesses across the region.
                    </p>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
<h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-brand-500" icon="solar:map-point-bold"></iconify-icon>
                            Primary Location
                        </h3>
<p className="text-slate-600 mb-2">116 Main St.</p>
<p className="text-slate-600 mb-4">Farmingdale, NJ 07727</p>
<div className="flex flex-col sm:flex-row gap-4 mt-6">
<a className="flex-1 bg-white border border-slate-200 text-slate-900 font-medium px-4 py-3 rounded-lg text-center hover:bg-slate-50 transition-colors shadow-sm" href="https://maps.google.com/maps?daddr=116 Main St., Farmingdale, NJ 07727" target="_blank">
                                Get Directions
                            </a>
<a className="flex-1 bg-brand-900 text-white font-medium px-4 py-3 rounded-lg text-center hover:bg-slate-800 transition-colors shadow-sm" href="tel:7322230455">
                                Call Now
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
<div className="bg-brand-900 p-8 text-center">
<h2 className="text-2xl font-bold text-white mb-2">Request an Appointment</h2>
<p className="text-slate-300">Fill out the form below and we'll contact you to confirm.</p>
</div>
<form className="p-8 md:p-10 space-y-6" id="appointment-form">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" id="name" name="name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" id="phone" name="phone" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" id="email" name="email" required="" type="email"/>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="service">Service Needed</label>
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white transition-colors" id="service" name="service">
<option>Plumbing Repair</option>
<option>Water Heater</option>
<option>Heating Repair</option>
<option>AC Repair</option>
<option>New System Quote</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="urgency">Urgency</label>
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white transition-colors" id="urgency" name="urgency">
<option>Standard Service</option>
<option>Emergency (ASAP)</option>
<option>Next Availability</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700" htmlFor="message">Message / Details</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white transition-colors" id="message" name="message" rows="4"></textarea>
</div>
<button className="w-full bg-brand-500 text-white font-bold text-lg py-4 rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20" type="submit">
                        Submit Request
                    </button>
<p className="text-xs text-center text-slate-400 mt-4">
                        Note for setup: Form connects to email autoresponder (nsphcoffice@gmail.com).
                    </p>
</form>

<div className="hidden p-10 text-center" id="form-success">
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
<iconify-icon className="text-4xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
<p className="text-slate-600">We will be in touch shortly to confirm your appointment time.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<img alt="Logo" className="h-10 w-auto mb-6 opacity-90 grayscale hover:grayscale-0 transition-all" src="https://neilslatteryplumbing.com/files/2024/02/neilslatterylogo-414w.jpg"/>
<p className="text-slate-400 leading-relaxed max-w-sm mb-6">
                        Neil Slattery Plumbing, Heating &amp; Cooling. Your trusted local experts for all plumbing and HVAC needs in Farmingdale, NJ.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="https://www.facebook.com/nsphc/"><iconify-icon className="text-2xl" icon="solar:facebook-bold"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="http://instagram.com/neilslatteryplumbinghvac/"><iconify-icon className="text-2xl" icon="solar:instagram-bold"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a className="hover:text-brand-500 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#specials">Specials</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="https://neilslatteryplumbing.com/privacy-policy/">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Contact Info</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-500 mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>116 Main St.<br/>Farmingdale, NJ 07727</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white" href="tel:7322230455">(732) 223-0455</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white" href="mailto:nsphcoffice@gmail.com">nsphcoffice@gmail.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<p>© 2026 Neil Slattery Plumbing, Heating &amp; Cooling. All rights reserved.</p>
<p className="mt-2 md:mt-0">Lic: 248_11</p>
</div>
</div>
</footer>



    </>
  );
}
