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



        // Initialize Icons
        lucide.createIcons();

        // Navbar Scroll Logic
        const navbar = document.getElementById('navbar');
        const logoText = document.getElementById('logo-text');
        const logoIcon = document.getElementById('logo-icon');
        const logoBg = document.getElementById('logo-bg');
        const navCta = document.getElementById('nav-cta');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Scrolled State: White BG, Dark Text
                navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-neutral-100');
                navbar.classList.remove('border-transparent');
                
                logoText.classList.remove('text-white');
                logoText.classList.add('text-neutral-900');
                
                logoIcon.classList.remove('text-white');
                logoIcon.classList.add('text-[#009998]');
                
                logoBg.classList.remove('bg-white/10');
                logoBg.classList.add('bg-teal-50');

                navLinks.forEach(link => {
                    link.classList.remove('text-white/90', 'hover:text-white', 'text-white');
                    link.classList.add('text-neutral-600', 'hover:text-[#0056b3]');
                });
                
                navCta.classList.remove('bg-white', 'text-[#0056b3]');
                navCta.classList.add('bg-[#0056b3]', 'text-white');
            } else {
                // Top State: Transparent, White Text
                navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-neutral-100');
                navbar.classList.add('border-transparent');
                
                logoText.classList.add('text-white');
                logoText.classList.remove('text-neutral-900');
                
                logoIcon.classList.add('text-white');
                logoIcon.classList.remove('text-[#009998]');
                
                logoBg.classList.add('bg-white/10');
                logoBg.classList.remove('bg-teal-50');

                navLinks.forEach(link => {
                    link.classList.add('text-white/90', 'hover:text-white', 'text-white');
                    link.classList.remove('text-neutral-600', 'hover:text-[#0056b3]');
                });
                
                navCta.classList.add('bg-white', 'text-[#0056b3]');
                navCta.classList.remove('bg-[#0056b3]', 'text-white');
            }
        });

        // Parallax Effect
        const heroBg = document.getElementById('hero-bg');
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            if(scrollPosition < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            }
        });

        // Reveal on Scroll (IntersectionObserver)
        const revealElements = document.querySelectorAll('.reveal-up');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once active if you don't want it to re-animate
                    // revealObserver.unobserve(entry.target); 
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('-translate-y-[150%]');
                mobileMenu.classList.add('translate-y-[4rem]');
            } else {
                mobileMenu.classList.add('-translate-y-[150%]');
                mobileMenu.classList.remove('translate-y-[4rem]');
            }
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm group-hover:bg-[#009998] transition-colors duration-300" id="logo-bg">
<i className="w-6 h-6 text-white transition-colors duration-300" data-lucide="activity" id="logo-icon"></i>
</div>
<span className="text-white font-medium tracking-tight text-lg transition-colors duration-300" id="logo-text">Centro Médico San Juan</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/90 hover:text-white transition-colors nav-link" href="#services">Services</a>
<a className="text-sm font-medium text-white/90 hover:text-white transition-colors nav-link" href="#mission">Our Mission</a>
<a className="text-sm font-medium text-white/90 hover:text-white transition-colors nav-link" href="#doctors">Specialists</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-white text-[#0056b3] text-sm font-medium hover:bg-neutral-100 transition-all transform hover:scale-105 shadow-lg shadow-black/5" href="#contact" id="nav-cta">
                    Agenda tu Cita
                </a>
<button className="md:hidden text-white nav-link" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-neutral-100 transform -translate-y-[150%] transition-transform duration-300 md:hidden flex flex-col p-6 gap-4" id="mobile-menu">
<a className="text-neutral-600 font-medium py-2 border-b border-neutral-50" href="#services">Services</a>
<a className="text-neutral-600 font-medium py-2 border-b border-neutral-50" href="#mission">Our Mission</a>
<a className="text-neutral-600 font-medium py-2 border-b border-neutral-50" href="#doctors">Specialists</a>
<a className="bg-[#0056b3] text-white text-center py-3 rounded-lg font-medium" href="#contact">Book Appointment</a>
</div>
</nav>

<header className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0 bg-neutral-900">
<img alt="Medical Center Interior" className="w-full h-[120%] object-cover opacity-60 absolute -top-[10%] left-0 will-change-transform" id="hero-bg" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6 reveal-up">
<span className="w-2 h-2 rounded-full bg-[#009998] animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase">Now accepting new patients</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 reveal-up stagger-1">
                World-class health, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">close to home.</span>
</h1>
<p className="text-lg text-neutral-200 font-light max-w-2xl mx-auto mb-10 reveal-up stagger-2">
                Experience the perfect balance of advanced medical technology and compassionate, personalized care at San Juan's premier medical facility.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up stagger-3">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0056b3] text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2" href="#contact">
                    Book Appointment <i className="w-4 h-4" data-lucide="calendar"></i>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 transition-colors" href="#services">
                    Explore Services
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<i className="w-6 h-6 text-white" data-lucide="chevron-down"></i>
</div>
</header>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Comprehensive Care</h2>
<p className="text-neutral-500 max-w-md">Dedicated departments staffed by board-certified specialists ready to address your specific needs.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[#0056b3] font-medium hover:gap-3 transition-all mt-4 md:mt-0" href="#">
                    View all departments <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer reveal-up">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#0056b3] transition-colors duration-300">
<i className="w-6 h-6 text-[#0056b3] group-hover:text-white transition-colors" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Plastic Surgery</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">Reconstructive and cosmetic procedures performed with artistic precision and care.</p>
<span className="text-xs font-medium text-[#0056b3] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        Learn more <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>

<div className="group p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer reveal-up stagger-1">
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-6 group-hover:bg-[#009998] transition-colors duration-300">
<i className="w-6 h-6 text-[#009998] group-hover:text-white transition-colors" data-lucide="smile"></i>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Dentistry</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">Complete oral health services including orthodontics, implants, and cosmetic whitening.</p>
<span className="text-xs font-medium text-[#009998] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        Learn more <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>

<div className="group p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer reveal-up stagger-2">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
<i className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors" data-lucide="stethoscope"></i>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">General Medicine</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">Primary care, check-ups, and preventative strategies for your long-term wellness.</p>
<span className="text-xs font-medium text-indigo-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        Learn more <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>

<div className="group p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer reveal-up stagger-3">
<div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300">
<i className="w-6 h-6 text-red-500 group-hover:text-white transition-colors" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">24/7 ER</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">Emergency care ready at a moment's notice with reduced wait times and expert staff.</p>
<span className="text-xs font-medium text-red-500 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                        Get Directions <i className="w-3 h-3" data-lucide="chevron-right"></i>
</span>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-[#0056b3] font-medium text-sm" href="#">
                    View all departments <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200" id="mission">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 lg:gap-24">

<div className="w-full md:w-1/3">
<div className="sticky top-32">
<span className="text-[#009998] font-semibold text-xs tracking-widest uppercase mb-3 block">Our Philosophy</span>
<h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight mb-6">Why Choose <br/>San Juan?</h2>
<p className="text-neutral-500 text-lg leading-relaxed mb-8">
                            We believe healthcare should be seamless, dignified, and technologically advanced.
                        </p>
<a className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-900 font-medium hover:bg-neutral-900 hover:text-white transition-colors text-sm" href="#contact">
                            Meet Our Team
                        </a>
</div>
</div>

<div className="w-full md:w-2/3 space-y-24 pb-12">

<div className="flex flex-col gap-6 reveal-up">
<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-[#0056b3]">
<i className="w-8 h-8" data-lucide="award"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-3">Clinical Excellence</h3>
<p className="text-neutral-600 leading-relaxed">
                                Our facility maintains the highest accreditation standards. Every procedure, from routine checkups to complex surgeries, follows rigorous safety protocols inspired by international best practices like the Mayo Clinic model.
                            </p>
</div>
<div className="h-px bg-neutral-200 w-full mt-4"></div>
</div>

<div className="flex flex-col gap-6 reveal-up">
<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-[#009998]">
<i className="w-8 h-8" data-lucide="cpu"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-3">Advanced Technology</h3>
<p className="text-neutral-600 leading-relaxed">
                                We invest heavily in the latest diagnostic imaging and robotic-assisted surgical tools. This means less invasive procedures, faster recovery times, and more accurate diagnoses for you and your family.
                            </p>
</div>
<div className="h-px bg-neutral-200 w-full mt-4"></div>
</div>

<div className="flex flex-col gap-6 reveal-up">
<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center text-indigo-600">
<i className="w-8 h-8" data-lucide="users"></i>
</div>
<div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-3">Local Talent, Global Standards</h3>
<p className="text-neutral-600 leading-relaxed">
                                Our doctors are locally rooted but globally trained. We combine the warmth of Latin American hospitality with the precision of modern evidence-based medicine.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-white" id="contact">
<div className="max-w-7xl mx-auto">
<div className="relative overflow-hidden rounded-3xl bg-[#0056b3] text-white shadow-2xl reveal-up">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-96 h-96 bg-[#009998]/20 rounded-full blur-3xl"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 md:p-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to prioritize your health?</h2>
<p className="text-blue-100 text-lg mb-10 max-w-md">
                            Schedule your consultation today. We accept most major insurance plans and offer flexible scheduling.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-white/10 backdrop-blur">
<i className="w-6 h-6 text-[#009998]" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-medium text-lg">Visit Us</h4>
<p className="text-blue-100 text-sm">Av. Principal 123, San Juan, Puerto Rico</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-white/10 backdrop-blur">
<i className="w-6 h-6 text-[#009998]" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-medium text-lg">Call Us</h4>
<p className="text-blue-100 text-sm">+1 (787) 555-0123</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl text-neutral-900">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl font-semibold">Quick Appointment</h3>
<span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold uppercase">Online</span>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-neutral-500 uppercase">First Name</label>
<input className="w-full p-3 bg-neutral-50 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#0056b3]" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-neutral-500 uppercase">Last Name</label>
<input className="w-full p-3 bg-neutral-50 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#0056b3]" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-neutral-500 uppercase">Department</label>
<select className="w-full p-3 bg-neutral-50 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#0056b3] text-neutral-600">
<option>General Medicine</option>
<option>Dentistry</option>
<option>Plastic Surgery</option>
<option>Cardiology</option>
</select>
</div>
<button className="w-full py-4 mt-2 bg-[#0056b3] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg" type="button">
                                Request Availability
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2 text-white">
<i className="w-6 h-6 text-[#009998]" data-lucide="activity"></i>
<span className="font-medium text-lg tracking-tight">Centro Médico San Juan</span>
</div>
<p className="text-sm leading-relaxed">
                        Redefining healthcare standards with cutting-edge technology and compassionate care.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Departments</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-[#009998] transition-colors" href="#">Plastic Surgery</a></li>
<li><a className="hover:text-[#009998] transition-colors" href="#">Dentistry</a></li>
<li><a className="hover:text-[#009998] transition-colors" href="#">Cardiology</a></li>
<li><a className="hover:text-[#009998] transition-colors" href="#">Pediatrics</a></li>
<li><a className="hover:text-[#009998] transition-colors" href="#">Neurology</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Patient Info</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-[#009998] transition-colors" href="#">Patient Portal</a></li>
<li><a className="hover:text-[#009998] transition-colors" href="#">Insurances Accepted</a></li>
<li><a className="hover:text-[#009998] transition-colors" href="#">Find a Doctor</a></li>
<li><a className="hover:text-[#009998] transition-colors" href="#">Virtual Visits</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Hours</h4>
<ul className="space-y-4 text-sm">
<li className="flex justify-between items-center">
<span>Emergency (ER)</span>
<span className="text-[#009998] font-semibold bg-[#009998]/10 px-2 py-0.5 rounded">24/7</span>
</li>
<li className="flex justify-between items-center border-t border-neutral-800 pt-3">
<span>Mon - Fri</span>
<span>8:00 - 20:00</span>
</li>
<li className="flex justify-between items-center border-t border-neutral-800 pt-3">
<span>Saturday</span>
<span>9:00 - 17:00</span>
</li>
<li className="flex justify-between items-center border-t border-neutral-800 pt-3">
<span>Sunday</span>
<span>Closed</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Centro Médico San Juan. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
